const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const os = require('os');

const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.js': 'application/javascript; charset=UTF-8',
    '.json': 'application/json; charset=UTF-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.ogg': 'audio/ogg',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const BASE_DIR = __dirname;
const HTTP_PORT = parseInt(process.env.PORT, 10) || 3000;
const HTTPS_PORT = parseInt(process.env.HTTPS_PORT, 10) || 3443;

// Find Local LAN IPv4 for mobile testing
function getLocalIp() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

function handleRequest(req, res) {
    const host = req.headers.host || 'localhost';
    const proto = (req.socket && req.socket.encrypted) ? 'https' : 'http';
    const parsedUrl = new URL(req.url, `${proto}://${host}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Handle CORS Preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key'
        });
        return res.end();
    }

    // API Route: Multi-Language Neural TTS Proxy
    if (pathname === '/api/tts') {
        const text = parsedUrl.searchParams.get('text') || '';
        const lang = parsedUrl.searchParams.get('lang') || 'te';
        if (!text) {
            res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            return res.end(JSON.stringify({ error: 'Text parameter is required' }));
        }

        const cleanText = encodeURIComponent(text.substring(0, 300));
        const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${cleanText}`;

        const reqProxy = https.get(ttsUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (proxyRes) => {
            res.writeHead(proxyRes.statusCode || 200, {
                'Content-Type': 'audio/mpeg',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'public, max-age=86400'
            });
            proxyRes.pipe(res);
        });

        reqProxy.on('error', (err) => {
            console.error('TTS Proxy Error:', err);
            res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            res.end(JSON.stringify({ error: 'Failed to fetch TTS audio' }));
        });
        return;
    }

    // API Route: Intelligent Real-Time Gita AI Conversational Assistant
    if (pathname === '/api/chat') {
        if (req.method !== 'POST') {
            res.writeHead(405, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
        }

        let body = '';
        req.on('data', chunk => {
            body += chunk;
            if (body.length > 1e6) req.destroy();
        });

        req.on('end', async () => {
            try {
                const data = JSON.parse(body || '{}');
                const { prompt = '', language = 'en', chapter = 2, history = [], apiKey = '' } = data;

                if (!prompt.trim()) {
                    res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                    return res.end(JSON.stringify({ error: 'Prompt is required' }));
                }

                // Check for Gemini API key
                const geminiKey = apiKey || process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
                if (geminiKey) {
                    try {
                        const systemInstruction = `You are Gita AI (గీతా AI), the supreme, compassionate spiritual intelligence embodying Lord Krishna and Bhagavad Gita wisdom. Answer the user's specific query accurately, profoundly, and practically based on the Bhagavad Gita. Reference relevant chapters and shlokas with meaning where helpful. Answer strictly in the requested language: ${language === 'te' ? 'Telugu (తెలుగు)' : 'English'}. Format clearly with paragraphs, key takeaways, and practical life applications.`;
                        
                        const payload = JSON.stringify({
                            contents: [
                                { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${prompt}` }] }
                            ],
                            generationConfig: {
                                temperature: 0.7,
                                maxOutputTokens: 800
                            }
                        });

                        const geminiReq = https.request(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Content-Length': Buffer.byteLength(payload)
                            },
                            timeout: 8000
                        }, (geminiRes) => {
                            let gBody = '';
                            geminiRes.on('data', c => gBody += c);
                            geminiRes.on('end', () => {
                                try {
                                    const gJson = JSON.parse(gBody);
                                    const text = gJson.candidates?.[0]?.content?.parts?.[0]?.text;
                                    if (text) {
                                        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                                        return res.end(JSON.stringify({
                                            source: 'gemini',
                                            text: text,
                                            title: language === 'te' ? 'దివ్య గీతా మార్గదర్శనం' : 'Divine Gita Guidance'
                                        }));
                                    }
                                } catch (err) {}
                                res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                                res.end(JSON.stringify({ source: 'local', text: null }));
                            });
                        });

                        geminiReq.on('error', () => {
                            res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                            res.end(JSON.stringify({ source: 'local', text: null }));
                        });

                        geminiReq.write(payload);
                        return geminiReq.end();
                    } catch (err) {}
                }

                // Return status acknowledging local knowledge engine fallback
                res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                res.end(JSON.stringify({
                    source: 'local',
                    status: 'ok',
                    message: 'Processed by Gita AI Knowledge & Reasoning Engine'
                }));
            } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                res.end(JSON.stringify({ error: e.message }));
            }
        });
        return;
    }

    // Default route to entry.html
    if (pathname === '/' || pathname === '') {
        pathname = '/entry.html';
    }

    // Redirect legacy 3D route to main sanctuary
    if (pathname === '/cosmic-3d.html') {
        res.writeHead(302, { 'Location': '/index.html' });
        return res.end();
    }

    const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
    let filePath = path.join(BASE_DIR, safePath);

    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end(`<!DOCTYPE html><html><head><title>404 Not Found</title></head><body style="font-family:sans-serif;text-align:center;padding:50px;background:#0d0914;color:#f0c05a;"><h1>404 - Page Not Found</h1><p>The requested file <code>${pathname}</code> does not exist.</p><p><a href="/entry.html" style="color:#ffd700;">Go to Bhagavad Gita Entry Page</a></p></body></html>`);
            return;
        }

        if (stats.isDirectory()) {
            filePath = path.join(filePath, 'entry.html');
            if (!fs.existsSync(filePath)) {
                filePath = path.join(path.dirname(filePath), 'index.html');
            }
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        // High-Performance Dynamic Validation (No stale caching for scripts/styles)
        const etag = `W/"${stats.size.toString(16)}-${Math.floor(stats.mtimeMs).toString(16)}"`;
        const isDynamic = ext === '.html' || ext === '.js' || ext === '.css' || ext === '.json';

        if (req.headers['if-none-match'] === etag) {
            res.writeHead(304, {
                'ETag': etag,
                'Cache-Control': isDynamic ? 'no-cache, no-store, must-revalidate' : 'public, max-age=86400'
            });
            return res.end();
        }

        const defaultHeaders = {
            'Content-Type': contentType,
            'Access-Control-Allow-Origin': '*',
            'Accept-Ranges': 'bytes',
            'ETag': etag,
            'Cache-Control': isDynamic ? 'no-cache, no-store, must-revalidate' : 'public, max-age=86400'
        };

        // Handle Range requests (Crucial for progressive video and audio streaming on mobile)
        const range = req.headers.range;
        if (range && stats.isFile()) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;

            if (start >= stats.size || end >= stats.size) {
                res.writeHead(416, { 'Content-Range': `bytes */${stats.size}` });
                return res.end();
            }

            const chunksize = (end - start) + 1;
            const fileStream = fs.createReadStream(filePath, { start, end });

            res.writeHead(206, {
                ...defaultHeaders,
                'Content-Range': `bytes ${start}-${end}/${stats.size}`,
                'Content-Length': chunksize
            });
            fileStream.pipe(res);
        } else {
            res.writeHead(200, {
                ...defaultHeaders,
                'Content-Length': stats.size
            });
            fs.createReadStream(filePath).pipe(res);
        }
    });
}

// Start HTTP Server
const httpServer = http.createServer(handleRequest);
httpServer.listen(HTTP_PORT, '0.0.0.0', () => {
    const localIp = getLocalIp();
    console.log(`\n======================================================`);
    console.log(`🪷 BHAGAVAD GITA DUAL HTTP/HTTPS SERVER IS RUNNING 🪷`);
    console.log(`======================================================`);
    console.log(`📱 HTTP URL (Fast Mobile Access):`);
    console.log(`   http://${localIp}:${HTTP_PORT}/entry.html`);
    console.log(`   http://${localIp}:${HTTP_PORT}/index.html`);
    console.log(`💻 Localhost: http://localhost:${HTTP_PORT}/entry.html\n`);
});

// Start HTTPS Server (For microphone voice input & secure context on mobile)
const keyPath = path.join(BASE_DIR, 'server.key');
const certPath = path.join(BASE_DIR, 'server.cert');

if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
    try {
        const httpsOptions = {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath)
        };
        const httpsServer = https.createServer(httpsOptions, handleRequest);
        httpsServer.listen(HTTPS_PORT, '0.0.0.0', () => {
            const localIp = getLocalIp();
            console.log(`🎙️ HTTPS URL (Unlocks Voice & Microphone Permissions on Mobile):`);
            console.log(`   https://${localIp}:${HTTPS_PORT}/entry.html`);
            console.log(`   https://${localIp}:${HTTPS_PORT}/index.html`);
            console.log(`======================================================\n`);
        });
    } catch (err) {
        console.warn('Could not start HTTPS server:', err.message);
    }
}
