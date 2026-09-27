/**
 * ============================================================================
 * BHAGAVAD GITA - 100% TRUE 3D VISHWAROOPAM CHARACTER ENGINE (Three.js)
 * Fully Sculpted 3D Avatar of Lord Krishna / Vishnu in Universal Cosmic Form
 * - Full 3D anatomical body, golden silk pitambara, jeweled ornaments & garland
 * - 16 True 3D Celestial Arms holding 3D weapons (Sudarshana, Gada, Shankha, Padma)
 * - Arc of 3D Sculpted Deity Heads (Shiva, Brahma, Narasimha, Rama, Hanuman, Ganesha, Surya)
 * - 7-Headed Golden Ananta Shesha Serpent Canopy over crowns
 * - 3D Arjuna figure kneeling in awe in the foreground
 * - 360-degree OrbitControls, smooth click-to-focus zoom, temple bell chime
 * - Authentic Chapter 11 Gita Shlokas in English and Telugu
 * ============================================================================
 */

(function() {
  'use strict';

  // =========================================================================
  // 1. THE 16 DIVINE FACES & WEAPONS DATABASE (GITA CHAPTER 11)
  // =========================================================================
  const VISHWAROOPAM_FACES = [
    {
      id: 1,
      name_en: "Lord Krishna • The Supreme Soul",
      name_te: "శ్రీకృష్ణ పరమాత్ముడు",
      name_sa: "श्रीकृष्णः परब्रह्म",
      bija: "ॐ",
      category_label: "SUPREME PARABRAHMAN",
      pos: { x: 0, y: 2.8, z: 0.8 },
      verse_ref: "GITA 11.18 • శ్లోకం 11.18",
      verse_sa: "त्वमक्षरं परमं वेदितव्यं त्वमस्य विश्वस्य परं निधानम् ।\nत्वमव्ययः शाश्वतधर्मगोप्ता सनातनस्त्वं पुरुषो मतो मे ॥",
      theme_en: "You are the Supreme Imperishable Reality, the ultimate refuge of the cosmos, the eternal guardian of Sanatana Dharma, and the Supreme Divine Person.",
      theme_te: "సమస్త విశ్వానికి పరమ నిధానము, శాశ్వత ధర్మ రక్షకుడు, అక్షర పరబ్రహ్మ స్వరూపమైన సనాతన పురుషుడు.",
      weapons: "Peacock Crown, Vanamala & Pitambara",
      color: 0xffd700,
      glow: 0xffea00
    },
    {
      id: 2,
      name_en: "Lord Narasimha • Fierce Protector of Dharma",
      name_te: "శ్రీ నరసింహ స్వామి",
      name_sa: "श्रीनृसिंहस्वामी",
      bija: "नृं",
      category_label: "DASHAVATARA • THE PROTECTOR",
      pos: { x: -3.6, y: 6.2, z: 0.4 },
      verse_ref: "GITA 11.24 • శ్లోకం 11.24",
      verse_sa: "नभःस्पृशं दीप्तमनेकवर्णं व्यात्ताननं दीप्तविशालनेत्रम् ।\nदृष्ट्वा हि त्वा प्रव्यथितान्तरात्मा धृतिं न विन्दामि शमं च विष्णो ॥",
      theme_en: "Seeing Your fiery lion form touching the heavens with blazing eyes and open maws, my inner soul quakes in divine awe, O Vishnu!",
      theme_te: "ఆకాశాన్ని తాకుతూ అగ్నివలె ప్రజ్వరిల్లే నీ నరసింహ తేజస్సును చూసి నా హృదయము కంపించుచున్నది.",
      weapons: "Golden Mane & Divine Claws",
      color: 0xff6e40,
      glow: 0xff3d00
    },
    {
      id: 3,
      name_en: "Lord Shiva • The Cosmic Transformer",
      name_te: "శ్రీ పరమశివుడు / రుద్రుడు",
      name_sa: "श्रीमहादेवः रुद्रः",
      bija: "शिव",
      category_label: "TRIDEVA • COSMIC TRANSFORMER",
      pos: { x: -6.0, y: 5.4, z: 0.2 },
      verse_ref: "GITA 11.22 • శ్లోకం 11.22",
      verse_sa: "रुद्रादित्या वसवो ये च साध्या विश्वेऽश्विनौ मरुतश्चोष्मपाश्च ।\nगन्धर्वयक्षासुरसिद्धसङ्घा वीक्षन्ते त्वा विस्मिताश्चैव सर्वे ॥",
      theme_en: "The eleven Rudras, Adityas, Vasus, and all hosts of Gandharvas and Siddhas behold You in boundless transcendent wonder.",
      theme_te: "ఏకాదశ రుద్రులు, ఆదిత్యులు, వసువులు, సిద్ధులు అందరూ విస్మయముతో నిన్ను దర్శిస్తున్నారు.",
      weapons: "Trishula (Trident) & Crescent Moon",
      color: 0x80d8ff,
      glow: 0x00e5ff
    },
    {
      id: 4,
      name_en: "Lord Brahma • The Four-Faced Creator",
      name_te: "శ్రీ చతుర్ముఖ బ్రహ్మదేవుడు",
      name_sa: "श्रीब्रह्मा प्रपितामहः",
      bija: "ब्र",
      category_label: "TRIDEVA • THE CREATOR",
      pos: { x: 6.0, y: 5.4, z: 0.2 },
      verse_ref: "GITA 11.15 • శ్లోకం 11.15",
      verse_sa: "पश्यामि देवांस्तव देव देहे सर्वांस्तथा भूतविशेषसङ्घान् ।\nब्रह्माणमीशं कमलासनस्थमृषींश्च सर्वानुरगांश्च दिव्यान् ॥",
      theme_en: "Within Your divine body I behold all the devas, Lord Brahma seated upon the lotus throne, divine sages, and celestial serpents.",
      theme_te: "నీ దివ్య దేహమునందు బ్రహ్మదేవుని, సకల దేవతలను, దివ్య ఋషులను, సమస్త ప్రాణులను దర్శిస్తున్నాను.",
      weapons: "Four Faces & Sacred Vedas",
      color: 0xffe082,
      glow: 0xffb300
    },
    {
      id: 5,
      name_en: "Lord Rama • Maryada Purushottama",
      name_te: "శ్రీరామచంద్రమూర్తి",
      name_sa: "श्रीरामचन्द्रः",
      bija: "रां",
      category_label: "DASHAVATARA • EMBODIMENT OF DHARMA",
      pos: { x: 3.6, y: 6.2, z: 0.4 },
      verse_ref: "GITA 10.31 • శ్లోకం 10.31",
      verse_sa: "पवनः पवतामस्मि रामः शस्त्रभृतामहम् ।\nझषाणां मकरश्चास्मि स्रोतसामस्मि जाह्नवी ॥",
      theme_en: "Among purifiers I am the wind; among wielders of weapons I am Rama; of rivers I am the sacred Ganga.",
      theme_te: "శస్త్రధారులలో నేను శ్రీరాముడను, నదులలో పవిత్ర గంగానదిని.",
      weapons: "Kodanda Bow & Golden Crown",
      color: 0x81d4fa,
      glow: 0x29b6f6
    },
    {
      id: 6,
      name_en: "Lord Hanuman • The Supreme Devotee",
      name_te: "శ్రీ భక్త హనుమాన్",
      name_sa: "श्रीहनुमान्",
      bija: "हं",
      category_label: "PARAMA BHAKTA • INFINITE STRENGTH",
      pos: { x: 8.0, y: 4.4, z: 0.0 },
      verse_ref: "GITA 11.36 • శ్లోకం 11.36",
      verse_sa: "स्थाने हृषीकेश तव प्रकीर्त्या जगत्प्रहृष्यत्यनुरज्यते च ।\nरक्षांसि भीतानि दिशो द्रवन्ति सर्वे नमस्यन्ति च सिद्धसङ्घाः ॥",
      theme_en: "O Lord, the universe rejoices in singing Your glories! All darkness and fear flee while the devoted bow in eternal surrender.",
      theme_te: "నీ నామస్మరణతో సమస్త భయాలు నశిస్తాయి, సకల సిద్ధులు నిన్ను పూజిస్తారు.",
      weapons: "Golden Kundala & Infinite Devotion",
      color: 0xffab40,
      glow: 0xff9100
    },
    {
      id: 7,
      name_en: "Lord Ganesha • Remover of Obstacles",
      name_te: "శ్రీ వినాయకుడు",
      name_sa: "श्रीगणेशः",
      bija: "गं",
      category_label: "VIGHNAHARTA • MASTER OF WISDOM",
      pos: { x: 9.8, y: 3.2, z: -0.2 },
      verse_ref: "GITA 11.39 • శ్లోకం 11.39",
      verse_sa: "वायुर्यमोऽग्निर्वरुणः शशाङ्कः प्रजापतिस्त्वं प्रपितामहश्च ।\nनमो नमस्तेऽस्तु सहस्रकृत्वः पुनश्च भूयोऽपि नमो नमस्ते ॥",
      theme_en: "Lord of beginnings and eternal auspiciousness. Salutations to You a thousand times over, again and again!",
      theme_te: "విఘ్న నివారకుడు, సకల విద్యా ప్రదాత, ప్రథమ పూజ్యుడైన వినాయక స్వరూపము.",
      weapons: "Auspicious Modaka & Curved Trunk",
      color: 0xff80ab,
      glow: 0xf50057
    },
    {
      id: 8,
      name_en: "Surya • The Blazing Sun God",
      name_te: "శ్రీ సూర్యభగవానుడు",
      name_sa: "श्रीसूर्यदेवः",
      bija: "सूर्य",
      category_label: "ADITYA • LIGHT OF 1000 SUNS",
      pos: { x: 11.5, y: 1.8, z: -0.4 },
      verse_ref: "GITA 11.12 • శ్లోకం 11.12",
      verse_sa: "दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता ।\nयदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः ॥",
      theme_en: "If the splendour of a thousand suns blazed forth simultaneously in the skies, it would resemble the radiance of that Supreme Lord!",
      theme_te: "ఆకాశములో వేయి సూర్యులు ఒక్కసారిగా ఉదయించినచో కలుగు కాంతి ఈ పరమాత్మ తేజస్సుకు సాటిరాదు.",
      weapons: "12 Solar Plasma Flares & Chariot",
      color: 0xffd700,
      glow: 0xff6f00
    },
    {
      id: 9,
      name_en: "Sudarshana Chakra • The Wheel of Divine Time",
      name_te: "శ్రీ సుదర్శన చక్రము",
      name_sa: "सुदर्शन चक्रम्",
      bija: "चक्र",
      category_label: "DIVINE ASTRA • TIME & DHARMA",
      pos: { x: -6.8, y: 7.2, z: 1.8 },
      verse_ref: "GITA 11.17 • శ్లోకం 11.17",
      verse_sa: "किरीटिनं गदिनं चक्रिणं च तेजोराशिं सर्वतो दीप्तिमन्तम् ।\nपश्यामि त्वा दुर्निरीक्ष्यं समन्ताद्दीप्तानलार्कद्युतिमप्रमेयम् ॥",
      theme_en: "I see You crowned with glory, wielding the mace and the Sudarshana disc, a boundless mass of light blazing like fiery suns!",
      theme_te: "కిరీటము, గద, చక్రము ధరించి సూర్యాగ్ని తేజస్సుతో ప్రకాశించే చక్రధారిని నిన్ను చూస్తున్నాను.",
      weapons: "48 Flaming Golden Teeth & Spinning Star",
      color: 0xfff176,
      glow: 0xffd600
    },
    {
      id: 10,
      name_en: "Kaumodaki Gada • The Giant Golden Mace",
      name_te: "కౌమోదకీ గద",
      name_sa: "कौमोदकी गदा",
      bija: "गदा",
      category_label: "DIVINE WEAPON • BUDDHI & POWER",
      pos: { x: -8.8, y: -2.8, z: 1.8 },
      verse_ref: "GITA 11.17 • శ్లోకం 11.17",
      verse_sa: "गदिनं चक्रिणं च तेजोराशिं सर्वतो दीप्तिमन्तम् ।",
      theme_en: "The colossal divine golden mace symbolizing pure intellect (Buddhi), authority, and the absolute power to vanquish adharma.",
      theme_te: "బుద్ధి తత్త్వానికి, పరాక్రమానికి ప్రతీకయైన పరమ పవిత్ర కౌమోదకీ దివ్య గద.",
      weapons: "Fluted Golden Head & Lotus Engravings",
      color: 0xffca28,
      glow: 0xff8f00
    },
    {
      id: 11,
      name_en: "Panchajanya Shankha • The Conch of Liberation",
      name_te: "పాంచజన్య శంఖము",
      name_sa: "पाञ्चजन्य शङ्खः",
      bija: "शङ्ख",
      category_label: "DIVINE EMBLEM • PRIMAL SOUND",
      pos: { x: 7.2, y: 7.0, z: 1.8 },
      verse_ref: "GITA 1.15 • శ్లోకం 1.15",
      verse_sa: "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः ।\nपौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः ॥",
      theme_en: "The sacred white conch whose transcendent resonance dispels darkness, fear, and illusion across the three worlds.",
      theme_te: "సకల భయాలను పటాపంచలు చేసే ప్రణవ నాద స్వరూప పాంచజన్య దివ్య శంఖము.",
      weapons: "Pearlescent Spiral & Golden Filigree",
      color: 0xffffff,
      glow: 0xe0f7fa
    },
    {
      id: 12,
      name_en: "Padma • The Divine Lotus of Purity",
      name_te: "దివ్య పద్మము",
      name_sa: "दिव्य पद्मम्",
      bija: "पद्म",
      category_label: "DIVINE EMBLEM • MOKSHA & BEAUTY",
      pos: { x: 9.8, y: 5.2, z: 1.6 },
      verse_ref: "GITA 5.10 • శ్లోకం 5.10",
      verse_sa: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः ।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥",
      theme_en: "Like a lotus leaf untouched by water, the soul that dedicates all actions to the Supreme remains untainted by material bondage.",
      theme_te: "తామరాకుపై నీటిబొట్టులా సంసార బంధాలకు అంటకుండా మోక్షాన్ని ప్రసాదించే పవిత్ర పద్మము.",
      weapons: "Layered Unfolding Pink-Gold Petals",
      color: 0xf48fb1,
      glow: 0xf06292
    },
    {
      id: 13,
      name_en: "Abhaya Mudra • Hand of Absolute Protection",
      name_te: "అభయ హస్తము",
      name_sa: "अभय हस्तम्",
      bija: "अभय",
      category_label: "DIVINE REFUGE • ABSOLUTE PROTECTION",
      pos: { x: -2.8, y: 0.2, z: 1.8 },
      verse_ref: "GITA 18.66 • శ్లోకం 18.66",
      verse_sa: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥",
      theme_en: "Abandon all varieties of dharmas and simply surrender unto Me alone. I shall deliver you from all sinful reactions; do not grieve!",
      theme_te: "సమస్త ధర్మములను పరిత్యజించి నన్ను మాత్రమే శరణు వేడుము. నేను నిన్ను సమస్త పాపముల నుండి విముక్తుడిని చేసెదను, భయపడకుము!",
      weapons: "Glowing Golden Lotus Palm",
      color: 0xffcc80,
      glow: 0xffa726
    },
    {
      id: 14,
      name_en: "Kaustubha Gem & Vanamala • The Cosmic Heart",
      name_te: "కౌస్తుభ మణి & వనమాల",
      name_sa: "कौస్తుభమణిః వనమాలా",
      bija: "मणि",
      category_label: "DIVINE ADORNMENT • UNIVERSAL HEART",
      pos: { x: 0, y: 0.2, z: 1.4 },
      verse_ref: "GITA 11.19 • శ్లోకం 11.19",
      verse_sa: "अनादिमध्यान्तमनन्तवीर्यमनन्तबाहुं शशिसूर्यनेत्रम् ।\nपश्यामि त्वा दीप्तहुताशवक्त्रं स्वतेजसा विश्वमिदं तपन्तम् ॥",
      theme_en: "Without origin, middle, or end, endowed with infinite prowess and boundless arms, warming the universe with Your splendour!",
      theme_te: "ఆది మధ్యాంతములు లేని అనంత శక్తిమంతుడవు, సమస్త విశ్వాన్ని తన తేజస్సుతో ప్రకాశింపజేసే దివ్య స్వరూపుడవు.",
      weapons: "Radiant Ruby Gem & 5-Color Garland",
      color: 0xff5252,
      glow: 0xff1744
    },
    {
      id: 15,
      name_en: "Mor Mukut • The Sacred Peacock Crown",
      name_te: "మయూర పింఛ కిరీటము",
      name_sa: "मयूरपिञ्छ किरीटम्",
      bija: "किरीट",
      category_label: "DIVINE CROWN • SOVEREIGN MAJESTY",
      pos: { x: -0.6, y: 5.2, z: 1.2 },
      verse_ref: "GITA 11.17 • శ్లోకం 11.17",
      verse_sa: "किरीटिनं गदिनं चक्रिणं च तेजोराशिं सर्वतो दीप्तिमन्तम् ।",
      theme_en: "Adorned with the resplendent crown, mace, and discus, radiating an effulgence illuminating all corners of the universe!",
      theme_te: "కిరీటము, గద, చక్రము ధరించి సమస్త దిశలను ప్రకాశింపజేసే పరమాత్మ తేజస్సు.",
      weapons: "Iridescent Feather & Solid Gold Filigree",
      color: 0x69f0ae,
      glow: 0x00e676
    },
    {
      id: 16,
      name_en: "Ananta Shesha • The Thousand-Headed Serpent",
      name_te: "శ్రీ అనంత శేషుడు (కాలస్వరూపం)",
      name_sa: "श्रीअनन्तशेषः",
      bija: "కాల",
      category_label: "KALA • UNIVERSAL DESTINY",
      pos: { x: 0, y: 8.4, z: 0.4 },
      verse_ref: "GITA 11.32 • శ్లోకం 11.32",
      verse_sa: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः ।",
      theme_en: "I am Time, the destroyer of all worlds, resting upon the eternal serpent Ananta, holding universal destiny!",
      theme_te: "నేను సమస్త లోకములను నియంత్రించే కాలస్వరూపుడను, అనంత శేష శయనుడను!",
      weapons: "7 Golden Cobra Hoods & Ruby Crests",
      color: 0xef5350,
      glow: 0xd32f2f
    }
  ];

  // --- State Variables ---
  let scene, camera, renderer, controls;
  let vishwaroopamGroup, arjunaGroup;
  let interactiveFaceMeshes = [];
  let hoveredFace = null;
  let selectedFace = null;
  let currentMode = 'vishwaroopam';
  let currentFilter = 'all';
  let currentLang = 'en';
  let isTransitioning = false;
  let targetCameraPos = null;
  let targetLookAt = new THREE.Vector3(0, 1.5, 0);
  let tourTimer = null;
  let tourIndex = 0;
  let autoRotateAura = true;

  // Audio state
  let audioEl = null;
  let isAudioPlaying = false;
  let audioContext = null;

  // Shared Materials
  let matKrishnaSkin, matGold, matRuby, matPitambara, matCrimson, matGarland;

  // --- Sound Effects: Temple Bell Chime Synthesizer ---
  function playTempleBellChime() {
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioContext.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 1.2);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, audioContext.currentTime);
      filter.Q.setValueAtTime(3.0, audioContext.currentTime);

      gain.gain.setValueAtTime(0.3, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioContext.destination);

      osc.start();
      osc.stop(audioContext.currentTime + 1.8);
    } catch (e) {}
  }

  // --- Initialize WebGL Scene ---
  function init() {
    const canvas = document.getElementById('webgl-canvas');

    // 1. Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040207, 0.0032);

    // 2. Camera - positioned to frame the full 3D character majestically
    camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 1.8, 26);

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 4. OrbitControls
    if (typeof THREE.OrbitControls !== 'undefined') {
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxDistance = 75;
      controls.minDistance = 6;
      controls.maxPolarAngle = Math.PI * 0.85;
      controls.minPolarAngle = Math.PI * 0.15;
      controls.target.set(0, 1.5, 0);
    }

    // 5. Lighting
    setupLighting();

    // 6. Materials
    initSharedMaterials();

    // 7. Build 100% True 3D Scene
    buildCosmicStarfield();
    build3DVishwaroopamCharacter();
    build3DArjuna();

    // 8. Event Handlers & UI Setup
    setupInteractions();
    setupUIEvents();
    setupAudio();

    // Auto open Lord Krishna on load
    setTimeout(() => {
      if (VISHWAROOPAM_FACES[0]) {
        openFaceDrawer(VISHWAROOPAM_FACES[0]);
      }
    }, 1000);

    window.addEventListener('resize', onWindowResize, { passive: true });
    requestAnimationFrame(animate);
  }

  // --- Lighting Setup ---
  function setupLighting() {
    const ambient = new THREE.AmbientLight(0xfff3e0, 1.2);
    scene.add(ambient);

    // Key Divine Sun Light (illuminates the front of the Lord)
    const keySun = new THREE.DirectionalLight(0xfff8e1, 2.8);
    keySun.position.set(4, 12, 18);
    scene.add(keySun);

    // Crown Solar Point Light (glows from the Kirita)
    const crownLight = new THREE.PointLight(0xffea00, 3.2, 45);
    crownLight.position.set(0, 7.5, 3.5);
    scene.add(crownLight);

    // Sudarshana Point Light (golden plasma flares)
    const chakraLight = new THREE.PointLight(0xffd600, 2.5, 25);
    chakraLight.position.set(-6.8, 7.2, 2.2);
    scene.add(chakraLight);

    // Left Cyan Rim Light (spiritual celestial backlight)
    const cyanRim = new THREE.DirectionalLight(0x00e5ff, 1.8);
    cyanRim.position.set(-18, 6, -10);
    scene.add(cyanRim);

    // Right Amber Rim Light
    const amberRim = new THREE.DirectionalLight(0xff6d00, 1.6);
    amberRim.position.set(18, -4, -10);
    scene.add(amberRim);
  }

  // --- Shared Materials ---
  function initSharedMaterials() {
    matKrishnaSkin = new THREE.MeshStandardMaterial({
      color: 0x2979ff, // Deep Krishna Blue
      roughness: 0.32,
      metalness: 0.12,
      emissive: 0x0d47a1,
      emissiveIntensity: 0.22
    });

    matGold = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.22,
      metalness: 0.92,
      emissive: 0xb8860b,
      emissiveIntensity: 0.28
    });

    matRuby = new THREE.MeshStandardMaterial({
      color: 0xd50000,
      roughness: 0.12,
      metalness: 0.35,
      emissive: 0xff1744,
      emissiveIntensity: 0.45
    });

    matPitambara = new THREE.MeshStandardMaterial({
      color: 0xfbc02d, // Golden yellow silk
      roughness: 0.45,
      metalness: 0.15,
      emissive: 0xf57f17,
      emissiveIntensity: 0.18
    });

    matCrimson = new THREE.MeshStandardMaterial({
      color: 0xb71c1c, // Royal crimson sash
      roughness: 0.48,
      metalness: 0.12
    });

    matGarland = new THREE.MeshStandardMaterial({
      color: 0xff4081, // Fresh rose garland
      roughness: 0.6,
      metalness: 0.05
    });
  }

  // --- Build Cosmic Starfield ---
  function buildCosmicStarfield() {
    const starCount = 4500;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xffe885),
      new THREE.Color(0xffb74d),
      new THREE.Color(0x80d8ff),
      new THREE.Color(0xce93d8)
    ];

    for (let i = 0; i < starCount; i++) {
      const radius = 60 + Math.random() * 550;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);
  }

  // =========================================================================
  // 2. PROCEDURAL TEXTURE GENERATOR FOR SACRED DEITY FACES
  // =========================================================================
  function createDeityFaceTexture(type, baseColorHex) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const baseColor = new THREE.Color(baseColorHex);
    const lightColor = baseColor.clone().offsetHSL(0, 0, 0.15);
    const darkColor = baseColor.clone().offsetHSL(0, 0, -0.22);

    // Base skin gradient
    const grad = ctx.createRadialGradient(256, 256, 20, 256, 256, 256);
    grad.addColorStop(0, '#' + lightColor.getHexString());
    grad.addColorStop(0.7, '#' + baseColor.getHexString());
    grad.addColorStop(1, '#' + darkColor.getHexString());
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    if (type === 'krishna') {
      // Lotus Eyes with Kajal
      ctx.fillStyle = '#ffffff';
      // Left eye
      ctx.beginPath();
      ctx.ellipse(190, 240, 48, 22, -0.05, 0, Math.PI * 2);
      ctx.fill();
      // Right eye
      ctx.beginPath();
      ctx.ellipse(322, 240, 48, 22, 0.05, 0, Math.PI * 2);
      ctx.fill();

      // Pupils (Deep Black with divine shine)
      ctx.fillStyle = '#0a192f';
      ctx.beginPath();
      ctx.arc(195, 240, 16, 0, Math.PI * 2);
      ctx.arc(317, 240, 16, 0, Math.PI * 2);
      ctx.fill();

      // Eye glints
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(190, 235, 6, 0, Math.PI * 2);
      ctx.arc(312, 235, 6, 0, Math.PI * 2);
      ctx.fill();

      // Kajal Eyeliner
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(190, 236, 50, 0.2, Math.PI - 0.2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(322, 236, 50, 0.2, Math.PI - 0.2, true);
      ctx.stroke();

      // Urdhva Pundra Tilaka (Chandan & Kumkum)
      ctx.fillStyle = '#fff9c4'; // White Chandan
      ctx.beginPath();
      ctx.moveTo(236, 120);
      ctx.lineTo(246, 210);
      ctx.lineTo(256, 225);
      ctx.lineTo(266, 210);
      ctx.lineTo(276, 120);
      ctx.lineTo(268, 120);
      ctx.lineTo(256, 185);
      ctx.lineTo(244, 120);
      ctx.closePath();
      ctx.fill();

      // Red Kumkum center stripe
      ctx.fillStyle = '#d50000';
      ctx.fillRect(252, 130, 8, 85);

      // Smiling Divine Lips (Bimba-phala)
      ctx.fillStyle = '#e57373';
      ctx.beginPath();
      ctx.ellipse(256, 340, 36, 14, 0, 0, Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#c62828';
      ctx.lineWidth = 3;
      ctx.stroke();

    } else if (type === 'shiva') {
      // Third Eye (Vertical fiery Trinetra)
      ctx.fillStyle = '#ff6d00';
      ctx.beginPath();
      ctx.ellipse(256, 175, 14, 32, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffd600';
      ctx.beginPath();
      ctx.ellipse(256, 175, 7, 18, 0, 0, Math.PI * 2);
      ctx.fill();

      // Tripundra (3 White ash stripes)
      ctx.fillStyle = '#e0e0e0';
      ctx.fillRect(170, 160, 172, 5);
      ctx.fillRect(170, 172, 172, 5);
      ctx.fillRect(170, 184, 172, 5);

      // Eyes
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(190, 245, 42, 16, 0, 0, Math.PI * 2);
      ctx.ellipse(322, 245, 42, 16, 0, 0, Math.PI * 2);
      ctx.fill();

    } else if (type === 'narasimha') {
      // Fierce Lion Eyes (Glowing Amber)
      ctx.fillStyle = '#ffeb3b';
      ctx.beginPath();
      ctx.ellipse(180, 220, 36, 24, -0.2, 0, Math.PI * 2);
      ctx.ellipse(332, 220, 36, 24, 0.2, 0, Math.PI * 2);
      ctx.fill();
      // Slit pupils
      ctx.fillStyle = '#d50000';
      ctx.fillRect(177, 204, 6, 32);
      ctx.fillRect(329, 204, 6, 32);

      // Roaring Muzzle & Sharp Fangs
      ctx.fillStyle = '#3e2723';
      ctx.beginPath();
      ctx.arc(256, 310, 48, 0, Math.PI * 2);
      ctx.fill();
      // White Fangs
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(225, 335); ctx.lineTo(235, 375); ctx.lineTo(245, 335);
      ctx.moveTo(267, 335); ctx.lineTo(277, 375); ctx.lineTo(287, 335);
      ctx.fill();

    } else if (type === 'brahma') {
      // Wise Eyes
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(190, 240, 38, 18, 0, 0, Math.PI * 2);
      ctx.ellipse(322, 240, 38, 18, 0, 0, Math.PI * 2);
      ctx.fill();
      // Flowing White Mustache & Beard
      ctx.fillStyle = '#f5f5f5';
      ctx.beginPath();
      ctx.moveTo(170, 310);
      ctx.quadraticCurveTo(256, 340, 342, 310);
      ctx.lineTo(310, 490);
      ctx.quadraticCurveTo(256, 520, 202, 490);
      ctx.closePath();
      ctx.fill();

    } else if (type === 'ganesha') {
      // Elephant Trunk Base
      ctx.fillStyle = '#f48fb1';
      ctx.beginPath();
      ctx.moveTo(230, 250);
      ctx.quadraticCurveTo(256, 440, 330, 470);
      ctx.quadraticCurveTo(290, 470, 220, 360);
      ctx.closePath();
      ctx.fill();
      // Sacred Trishul Tilak
      ctx.fillStyle = '#d50000';
      ctx.fillRect(252, 120, 8, 70);
      ctx.beginPath();
      ctx.arc(256, 195, 12, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    return tex;
  }

  // =========================================================================
  // 3. BUILD FULL 100% TRUE 3D VISHWAROOPAM CHARACTER
  // =========================================================================
  function build3DVishwaroopamCharacter() {
    vishwaroopamGroup = new THREE.Group();
    scene.add(vishwaroopamGroup);

    // A. Central 3D Body of Lord Krishna
    buildCentralKrishnaFigure(vishwaroopamGroup);

    // B. The Arc of 3D Sculpted Deity Heads (Surrounding Crown)
    buildArcOf3DDeityHeads(vishwaroopamGroup);

    // C. The 16 Celestial 3D Arms and Sacred Weapons
    build16CelestialArmsAndWeapons(vishwaroopamGroup);

    // D. Ananta Shesha 7-Headed Golden Serpent Canopy
    buildAnantaSheshaCanopy(vishwaroopamGroup);

    // E. Volumetric Golden God-Rays (Divi Surya Sahasrasya)
    buildVolumetricGodRays(vishwaroopamGroup);
  }

  // --- Central 3D Krishna Anatomy, Silk Dhoti & Crown ---
  function buildCentralKrishnaFigure(parent) {
    const bodyGroup = new THREE.Group();
    bodyGroup.position.set(0, 0, 0);

    // 1. Torso (Sculpted Chest & Pectorals)
    const chestGeo = new THREE.CylinderGeometry(1.65, 1.35, 2.8, 32);
    const chestMesh = new THREE.Mesh(chestGeo, matKrishnaSkin);
    chestMesh.position.set(0, 0.4, 0);
    bodyGroup.add(chestMesh);

    // Pectoral contours
    const pecGeo = new THREE.SphereGeometry(0.72, 16, 16);
    const leftPec = new THREE.Mesh(pecGeo, matKrishnaSkin);
    leftPec.scale.set(1.0, 0.85, 0.6);
    leftPec.position.set(-0.62, 0.85, 0.7);
    bodyGroup.add(leftPec);

    const rightPec = leftPec.clone();
    rightPec.position.set(0.62, 0.85, 0.7);
    bodyGroup.add(rightPec);

    // 2. Abdomen & Waist
    const abGeo = new THREE.CylinderGeometry(1.35, 1.15, 1.8, 32);
    const abMesh = new THREE.Mesh(abGeo, matKrishnaSkin);
    abMesh.position.set(0, -1.2, 0);
    bodyGroup.add(abMesh);

    // 3. Golden Dhoti / Pitambara (Billowing Silk Robes)
    const dhotiGeo = new THREE.CylinderGeometry(1.2, 2.4, 5.8, 32, 6);
    const dhotiMesh = new THREE.Mesh(dhotiGeo, matPitambara);
    dhotiMesh.position.set(0, -4.5, 0);
    bodyGroup.add(dhotiMesh);

    // Draped Pleated Crimson & Gold Sash (Over Shoulders & Front)
    const sashCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.7, 1.7, 0.6),
      new THREE.Vector3(-1.2, 0.0, 0.8),
      new THREE.Vector3(0.0, -1.8, 0.9),
      new THREE.Vector3(1.2, 0.0, 0.8),
      new THREE.Vector3(1.7, 1.7, 0.6)
    ]);
    const sashGeo = new THREE.TubeGeometry(sashCurve, 32, 0.32, 8, false);
    const sashMesh = new THREE.Mesh(sashGeo, matCrimson);
    bodyGroup.add(sashMesh);

    // Hanging Center Pleated Silk Banner
    const bannerGeo = new THREE.BoxGeometry(0.9, 4.2, 0.12);
    const bannerMesh = new THREE.Mesh(bannerGeo, matCrimson);
    bannerMesh.position.set(0, -3.8, 0.85);
    bodyGroup.add(bannerMesh);

    // 4. Golden Ornaments: Waistband (Katisutra) & Buckle
    const beltGeo = new THREE.TorusGeometry(1.32, 0.18, 16, 32);
    const beltMesh = new THREE.Mesh(beltGeo, matGold);
    beltMesh.position.set(0, -1.9, 0);
    beltMesh.rotation.x = Math.PI / 2;
    bodyGroup.add(beltMesh);

    const buckleGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.2, 16);
    const buckleMesh = new THREE.Mesh(buckleGeo, matGold);
    buckleMesh.position.set(0, -1.9, 1.35);
    buckleMesh.rotation.x = Math.PI / 2;
    bodyGroup.add(buckleMesh);

    // 5. Sacred Golden Thread (Yajnopavita)
    const threadCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.3, 1.6, 0.6),
      new THREE.Vector3(-0.4, 0.2, 0.8),
      new THREE.Vector3(0.8, -1.2, 0.6),
      new THREE.Vector3(1.1, -1.8, -0.2),
      new THREE.Vector3(-0.2, 0.5, -0.8)
    ], true);
    const threadGeo = new THREE.TubeGeometry(threadCurve, 32, 0.04, 6, true);
    const threadMesh = new THREE.Mesh(threadGeo, matGold);
    bodyGroup.add(threadMesh);

    // 6. Kaustubha Jewel & Tiered Necklaces (Chest)
    const harGeo = new THREE.TorusGeometry(1.1, 0.08, 12, 32);
    const harMesh = new THREE.Mesh(harGeo, matGold);
    harMesh.position.set(0, 1.2, 0.5);
    harMesh.rotation.x = Math.PI * 0.35;
    bodyGroup.add(harMesh);

    const kaustubhaGeo = new THREE.OctahedronGeometry(0.38, 0);
    const kaustubhaMesh = new THREE.Mesh(kaustubhaGeo, matRuby);
    kaustubhaMesh.position.set(0, 0.2, 1.4);
    bodyGroup.add(kaustubhaMesh);

    // 7. Vanamala (5-Color Sacred Floral Garland)
    const malaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.6, 1.6, 0.5),
      new THREE.Vector3(-1.4, -0.5, 1.0),
      new THREE.Vector3(0.0, -2.6, 1.2),
      new THREE.Vector3(1.4, -0.5, 1.0),
      new THREE.Vector3(1.6, 1.6, 0.5)
    ]);
    const malaGeo = new THREE.TubeGeometry(malaCurve, 32, 0.16, 8, false);
    const malaMesh = new THREE.Mesh(malaGeo, matGarland);
    bodyGroup.add(malaMesh);

    // 8. Neck
    const neckGeo = new THREE.CylinderGeometry(0.6, 0.72, 1.1, 24);
    const neckMesh = new THREE.Mesh(neckGeo, matKrishnaSkin);
    neckMesh.position.set(0, 1.9, 0);
    bodyGroup.add(neckMesh);

    // 9. Central Divine 3D Head of Lord Krishna
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 3.0, 0.2);

    const faceTex = createDeityFaceTexture('krishna', 0x2979ff);
    const headGeo = new THREE.SphereGeometry(1.1, 32, 24);
    const headMat = new THREE.MeshStandardMaterial({
      map: faceTex,
      roughness: 0.35,
      metalness: 0.1
    });
    const headMesh = new THREE.Mesh(headGeo, headMat);
    headMesh.scale.set(0.92, 1.18, 0.95);
    headGroup.add(headMesh);

    // Golden Ear Kundalas (Makara Earrings)
    const kundalaGeo = new THREE.TorusGeometry(0.24, 0.06, 8, 16);
    const leftKundala = new THREE.Mesh(kundalaGeo, matGold);
    leftKundala.position.set(-1.12, -0.1, 0);
    headGroup.add(leftKundala);

    const rightKundala = leftKundala.clone();
    rightKundala.position.set(1.12, -0.1, 0);
    headGroup.add(rightKundala);

    // 10. Magnificent 3D Golden Kirita-Mukuta (Crown)
    const crownGroup = new THREE.Group();
    crownGroup.position.set(0, 1.1, 0);

    const crownBase = new THREE.CylinderGeometry(0.95, 1.05, 0.8, 24);
    const crownBaseMesh = new THREE.Mesh(crownBase, matGold);
    crownGroup.add(crownBaseMesh);

    const crownMid = new THREE.CylinderGeometry(0.72, 0.95, 1.0, 24);
    const crownMidMesh = new THREE.Mesh(crownMid, matGold);
    crownGroup.add(crownMidMesh);

    const crownTop = new THREE.ConeGeometry(0.72, 1.4, 24);
    const crownTopMesh = new THREE.Mesh(crownTop, matGold);
    crownTopMesh.position.set(0, 1.8, 0);
    crownGroup.add(crownTopMesh);

    // Ruby crest gems on crown
    for (let g = 0; g < 6; g++) {
      const gAngle = (g / 6) * Math.PI * 2;
      const gem = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), matRuby);
      gem.position.set(Math.cos(gAngle) * 0.95, 0.4, Math.sin(gAngle) * 0.95);
      crownGroup.add(gem);
    }

    // Iridescent Peacock Feather (Mor Mukut)
    const featherGroup = new THREE.Group();
    featherGroup.position.set(-0.4, 2.2, 0.3);
    featherGroup.rotation.z = 0.35;

    const quillGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.2, 8);
    const quillMesh = new THREE.Mesh(quillGeo, matGold);
    featherGroup.add(quillMesh);

    const fanGeo = new THREE.CircleGeometry(0.65, 16);
    const fanMat = new THREE.MeshStandardMaterial({
      color: 0x00e676,
      emissive: 0x00b0ff,
      emissiveIntensity: 0.4,
      side: THREE.DoubleSide
    });
    const fanMesh = new THREE.Mesh(fanGeo, fanMat);
    fanMesh.position.set(0, 1.1, 0.02);
    featherGroup.add(fanMesh);

    // Feather Eye (Royal Cobalt Blue center)
    const eyeGeo = new THREE.CircleGeometry(0.3, 16);
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0x1a237e,
      emissive: 0x2979ff,
      emissiveIntensity: 0.6,
      side: THREE.DoubleSide
    });
    const eyeMesh = new THREE.Mesh(eyeGeo, eyeMat);
    eyeMesh.position.set(0, 1.1, 0.04);
    featherGroup.add(eyeMesh);

    crownGroup.add(featherGroup);
    headGroup.add(crownGroup);
    bodyGroup.add(headGroup);

    parent.add(bodyGroup);
  }

  // --- Arc of 3D Sculpted Deity Heads (Surrounding Krishna's Crown) ---
  function buildArcOf3DDeityHeads(parent) {
    const DEITY_HEADS_CONFIG = [
      // Left Side
      { type: 'narasimha', color: 0xffb300, pos: { x: -3.6, y: 6.2, z: 0.4 }, scale: 0.82, id: 2 },
      { type: 'shiva', color: 0x90caf9, pos: { x: -6.0, y: 5.4, z: 0.2 }, scale: 0.80, id: 3 },
      { type: 'narasimha', color: 0x8d6e63, pos: { x: -8.0, y: 4.4, z: 0.0 }, scale: 0.76, id: 13 }, // Varaha
      { type: 'brahma', color: 0xffab91, pos: { x: -9.8, y: 3.2, z: -0.2 }, scale: 0.72, id: 14 }, // Parashurama
      // Right Side
      { type: 'krishna', color: 0x42a5f5, pos: { x: 3.6, y: 6.2, z: 0.4 }, scale: 0.82, id: 5 }, // Rama
      { type: 'brahma', color: 0xffd54f, pos: { x: 6.0, y: 5.4, z: 0.2 }, scale: 0.80, id: 4 }, // Brahma
      { type: 'krishna', color: 0xff9800, pos: { x: 8.0, y: 4.4, z: 0.0 }, scale: 0.76, id: 6 }, // Hanuman
      { type: 'ganesha', color: 0xff80ab, pos: { x: 9.8, y: 3.2, z: -0.2 }, scale: 0.74, id: 7 }, // Ganesha
      { type: 'brahma', color: 0xffd700, pos: { x: 11.5, y: 1.8, z: -0.4 }, scale: 0.70, id: 8 }  // Surya
    ];

    DEITY_HEADS_CONFIG.forEach(d => {
      const headGroup = new THREE.Group();
      headGroup.position.set(d.pos.x, d.pos.y, d.pos.z);
      headGroup.scale.set(d.scale, d.scale, d.scale);

      const tex = createDeityFaceTexture(d.type, d.color);
      const hGeo = new THREE.SphereGeometry(1.0, 24, 20);
      const hMat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.35,
        metalness: 0.12
      });
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.scale.set(0.9, 1.15, 0.95);
      headGroup.add(hMesh);

      // Distinct 3D Crown for each deity
      const crownBase = new THREE.ConeGeometry(0.75, 1.4, 16);
      const crownMesh = new THREE.Mesh(crownBase, matGold);
      crownMesh.position.set(0, 1.4, 0);
      headGroup.add(crownMesh);

      // Shiva crescent moon & serpent
      if (d.type === 'shiva') {
        const moonGeo = new THREE.RingGeometry(0.4, 0.55, 16, 1, 0, Math.PI);
        const moonMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        const moonMesh = new THREE.Mesh(moonGeo, moonMat);
        moonMesh.position.set(0.65, 1.6, 0.2);
        moonMesh.rotation.z = -0.4;
        headGroup.add(moonMesh);
      }

      // Surya 12 Solar Flares
      if (d.id === 8) {
        for (let r = 0; r < 12; r++) {
          const rAngle = (r / 12) * Math.PI * 2;
          const ray = new THREE.Mesh(new THREE.ConeGeometry(0.14, 1.2, 4), matGold);
          ray.position.set(Math.cos(rAngle) * 1.5, Math.sin(rAngle) * 1.5, 0);
          ray.rotation.z = rAngle - Math.PI / 2;
          headGroup.add(ray);
        }
      }

      // Ganesha 3D Trunk
      if (d.type === 'ganesha') {
        const trunkCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(0, 0, 0.9),
          new THREE.Vector3(0, -0.6, 1.2),
          new THREE.Vector3(0.3, -1.2, 1.1),
          new THREE.Vector3(0.5, -1.0, 1.3)
        ]);
        const trunkGeo = new THREE.TubeGeometry(trunkCurve, 16, 0.18, 8, false);
        const trunkMesh = new THREE.Mesh(trunkGeo, new THREE.MeshStandardMaterial({ color: 0xff80ab }));
        headGroup.add(trunkMesh);
      }

      parent.add(headGroup);
    });
  }

  // --- 16 Celestial 3D Arms and Sacred Weapons ---
  function build16CelestialArmsAndWeapons(parent) {
    const armsGroup = new THREE.Group();
    parent.add(armsGroup);

    // 8 Arms on Left, 8 Arms on Right
    for (let side = -1; side <= 1; side += 2) {
      for (let a = 0; a < 8; a++) {
        const armGroup = new THREE.Group();
        const t = a / 7; // 0 to 1

        // Fan out angles matching sacred art
        const shoulderX = side * 1.35;
        const shoulderY = 1.6 - a * 0.38;
        const shoulderZ = -0.3 + a * 0.12;

        armGroup.position.set(shoulderX, shoulderY, shoulderZ);

        // Upper Arm
        const armLen = 2.4;
        const angleZ = side * (0.35 + t * 1.6);
        const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.32, armLen, 16), matKrishnaSkin);
        upperArm.position.set(side * (armLen / 2) * Math.cos(angleZ - Math.PI / 2), (armLen / 2) * Math.sin(angleZ - Math.PI / 2), 0);
        upperArm.rotation.z = angleZ - Math.PI / 2;
        armGroup.add(upperArm);

        // Armlet (Keyura)
        const keyura = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.08, 12, 16), matGold);
        keyura.position.copy(upperArm.position);
        keyura.rotation.z = upperArm.rotation.z;
        armGroup.add(keyura);

        // Forearm
        const elbowX = side * armLen * Math.cos(angleZ - Math.PI / 2);
        const elbowY = armLen * Math.sin(angleZ - Math.PI / 2);
        const foreArm = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, armLen, 16), matKrishnaSkin);
        foreArm.position.set(elbowX + side * 1.1, elbowY + 0.6, 0.4);
        foreArm.rotation.z = angleZ * 0.8;
        armGroup.add(foreArm);

        // Golden Wristlet (Kankana) & Hand
        const wristX = elbowX + side * 1.8;
        const wristY = elbowY + 1.2;
        const kankana = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.07, 12, 16), matGold);
        kankana.position.set(wristX, wristY, 0.5);
        armGroup.add(kankana);

        const hand = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 12), matKrishnaSkin);
        hand.position.set(wristX + side * 0.25, wristY + 0.2, 0.5);
        armGroup.add(hand);

        armsGroup.add(armGroup);
      }
    }

    // =========================================================================
    // TRUE 3D SACRED WEAPONS (HELD IN HANDS)
    // =========================================================================

    // 1. LIVE SPINNING 3D SUDARSHANA CHAKRA (Top Right Hand, x: -6.8, y: 7.2, z: 1.8)
    const chakraGroup = new THREE.Group();
    chakraGroup.position.set(-6.8, 7.2, 1.8);

    const chakraTorusGeo = new THREE.TorusGeometry(1.6, 0.14, 16, 48);
    const chakraRing = new THREE.Mesh(chakraTorusGeo, matGold);
    chakraGroup.add(chakraRing);

    // 48 Flaming Golden Teeth
    const toothGeo = new THREE.ConeGeometry(0.12, 0.45, 4);
    for (let t = 0; t < 48; t++) {
      const tAngle = (t / 48) * Math.PI * 2;
      const tooth = new THREE.Mesh(toothGeo, matGold);
      tooth.position.set(Math.cos(tAngle) * 1.7, Math.sin(tAngle) * 1.7, 0);
      tooth.rotation.z = tAngle - Math.PI / 2;
      chakraGroup.add(tooth);
    }

    // Rotating 8-Spoke Solar Core
    const coreSpokesGroup = new THREE.Group();
    for (let s = 0; s < 8; s++) {
      const sAngle = (s / 8) * Math.PI;
      const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.8, 8), matGold);
      spoke.rotation.z = sAngle;
      coreSpokesGroup.add(spoke);
    }
    chakraGroup.add(coreSpokesGroup);

    // Blazing Core Disc
    const coreDisc = new THREE.Mesh(
      new THREE.CircleGeometry(1.15, 32),
      new THREE.MeshBasicMaterial({ color: 0xfff9c4, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending })
    );
    chakraGroup.add(coreDisc);

    // Golden Spark Particles
    const sparkCount = 45;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    for (let p = 0; p < sparkCount; p++) {
      const pAngle = Math.random() * Math.PI * 2;
      const pRadius = 1.5 + Math.random() * 0.5;
      sparkPos[p * 3] = Math.cos(pAngle) * pRadius;
      sparkPos[p * 3 + 1] = Math.sin(pAngle) * pRadius;
      sparkPos[p * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkPoints = new THREE.Points(sparkGeo, new THREE.PointsMaterial({ size: 1.8, color: 0xffea00, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending }));
    chakraGroup.add(sparkPoints);

    parent.add(chakraGroup);
    parent.userData.spinningChakra = chakraGroup;

    // 2. GIANT GOLDEN KAUMODAKI GADA (Lower Right Hand, x: -8.8, y: -2.8, z: 1.8)
    const gadaGroup = new THREE.Group();
    gadaGroup.position.set(-8.8, -2.8, 1.8);
    gadaGroup.rotation.z = -0.25;

    // Massive fluted golden head
    const gadaHead = new THREE.Mesh(new THREE.SphereGeometry(1.85, 24, 24), matGold);
    gadaHead.scale.set(1.0, 1.25, 1.0);
    gadaGroup.add(gadaHead);

    // Golden lotus engraving bands on head
    const gadaBand = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.16, 16, 32), matRuby);
    gadaGroup.add(gadaBand);

    // Long fluted shaft
    const gadaShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.35, 6.2, 16), matGold);
    gadaShaft.position.set(0, 3.8, 0);
    gadaGroup.add(gadaShaft);

    // Crown finial tip
    const gadaTip = new THREE.Mesh(new THREE.ConeGeometry(0.65, 1.2, 16), matGold);
    gadaTip.position.set(0, -2.2, 0);
    gadaTip.rotation.x = Math.PI;
    gadaGroup.add(gadaTip);

    parent.add(gadaGroup);

    // 3. PANCHAJANYA SHANKHA (Sacred White Conch, x: 7.2, y: 7.0, z: 1.8)
    const shankhaGroup = new THREE.Group();
    shankhaGroup.position.set(7.2, 7.0, 1.8);
    shankhaGroup.rotation.z = 0.4;

    const shankhaMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.18,
      metalness: 0.25,
      emissive: 0xe0f7fa,
      emissiveIntensity: 0.3
    });
    const shankhaBody = new THREE.Mesh(new THREE.SphereGeometry(1.0, 24, 16), shankhaMat);
    shankhaBody.scale.set(0.85, 1.45, 0.85);
    shankhaGroup.add(shankhaBody);

    const shankhaSpire = new THREE.Mesh(new THREE.ConeGeometry(0.7, 1.8, 16), shankhaMat);
    shankhaSpire.position.set(0, 1.4, 0);
    shankhaGroup.add(shankhaSpire);

    // Golden filigree rings on conch
    const sRing = new THREE.Mesh(new THREE.TorusGeometry(0.88, 0.08, 12, 24), matGold);
    shankhaGroup.add(sRing);

    parent.add(shankhaGroup);

    // 4. PADMA (Divine Pink & Gold Sacred Lotus, x: 9.8, y: 5.2, z: 1.6)
    const padmaGroup = new THREE.Group();
    padmaGroup.position.set(9.8, 5.2, 1.6);

    const padmaStem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.2, 8), new THREE.MeshStandardMaterial({ color: 0x388e3c }));
    padmaStem.position.set(0, -1.6, 0);
    padmaGroup.add(padmaStem);

    // Layered unfolding lotus petals
    const petalGeo = new THREE.SphereGeometry(0.65, 8, 8);
    petalGeo.scale(0.5, 1.4, 0.2);
    const petalMat = new THREE.MeshStandardMaterial({ color: 0xf48fb1, emissive: 0xf06292, emissiveIntensity: 0.35, roughness: 0.4 });

    for (let layer = 0; layer < 2; layer++) {
      const pCount = 8 + layer * 4;
      for (let p = 0; p < pCount; p++) {
        const pAngle = (p / pCount) * Math.PI * 2;
        const petal = new THREE.Mesh(petalGeo, petalMat);
        petal.position.set(Math.cos(pAngle) * (0.45 + layer * 0.35), 0.2 + layer * 0.15, Math.sin(pAngle) * (0.45 + layer * 0.35));
        petal.rotation.y = -pAngle;
        petal.rotation.x = 0.35 + layer * 0.25;
        padmaGroup.add(petal);
      }
    }
    // Golden center stamen
    const stamen = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.3, 16), matGold);
    stamen.position.set(0, 0.1, 0);
    padmaGroup.add(stamen);

    parent.add(padmaGroup);

    // 5. ABHAYA MUDRA (Hand of Divine Protection & Blessing, x: -2.8, y: 0.2, z: 1.8)
    const abhayaGroup = new THREE.Group();
    abhayaGroup.position.set(-2.8, 0.2, 1.8);

    // Glowing Golden Lotus mark in center of palm
    const palmChakra = new THREE.Mesh(
      new THREE.RingGeometry(0.18, 0.48, 16),
      new THREE.MeshBasicMaterial({ color: 0xffea00, side: THREE.DoubleSide, blending: THREE.AdditiveBlending })
    );
    abhayaGroup.add(palmChakra);
    parent.add(abhayaGroup);

    // 6. GOLDEN TRISHULA (Trident, x: -9.5, y: 3.4, z: 1.2)
    const trishulaGroup = new THREE.Group();
    trishulaGroup.position.set(-9.5, 3.4, 1.2);
    trishulaGroup.rotation.z = -0.3;

    const tStaff = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 6.0, 12), matGold);
    trishulaGroup.add(tStaff);

    const tCenter = new THREE.Mesh(new THREE.ConeGeometry(0.24, 1.4, 8), matGold);
    tCenter.position.set(0, 3.6, 0);
    trishulaGroup.add(tCenter);

    const tLeft = new THREE.Mesh(new THREE.ConeGeometry(0.18, 1.1, 8), matGold);
    tLeft.position.set(-0.55, 3.3, 0);
    tLeft.rotation.z = 0.25;
    trishulaGroup.add(tLeft);

    const tRight = new THREE.Mesh(new THREE.ConeGeometry(0.18, 1.1, 8), matGold);
    tRight.position.set(0.55, 3.3, 0);
    tRight.rotation.z = -0.25;
    trishulaGroup.add(tRight);

    parent.add(trishulaGroup);

    // 7. KODANDA BOW (Lord Rama's Golden Bow, x: 11.2, y: -0.8, z: 1.2)
    const bowGroup = new THREE.Group();
    bowGroup.position.set(11.2, -0.8, 1.2);
    bowGroup.rotation.z = 0.25;

    const bowCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.6, -3.2, 0),
      new THREE.Vector3(0.9, 0.0, 0.4),
      new THREE.Vector3(-0.6, 3.2, 0)
    ]);
    const bowMesh = new THREE.Mesh(new THREE.TubeGeometry(bowCurve, 32, 0.14, 8, false), matGold);
    bowGroup.add(bowMesh);

    parent.add(bowGroup);

    // Build 16 Clickable Hit Targets onto the actual 3D objects
    buildInteractiveFaceNodes();
  }

  // --- 7-Headed Golden Ananta Shesha Serpent Canopy ---
  function buildAnantaSheshaCanopy(parent) {
    const sheshaGroup = new THREE.Group();
    sheshaGroup.position.set(0, 7.8, -0.4);

    // 7 curved golden cobra hoods arching over the crowns
    for (let h = -3; h <= 3; h++) {
      const hoodGroup = new THREE.Group();
      const hAngle = (h / 3) * 0.45;
      hoodGroup.position.set(h * 1.55, -Math.abs(h) * 0.35, -Math.abs(h) * 0.2);
      hoodGroup.rotation.z = -hAngle * 0.5;

      // Serpent Neck / Body segment
      const bodyCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -2.5, -0.8),
        new THREE.Vector3(0, 0, -0.2),
        new THREE.Vector3(0, 1.5, 0.6)
      ]);
      const bodyMesh = new THREE.Mesh(new THREE.TubeGeometry(bodyCurve, 16, 0.28, 8, false), matGold);
      hoodGroup.add(bodyMesh);

      // Flared Cobra Hood
      const hoodMesh = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 12), matGold);
      hoodMesh.scale.set(1.4, 1.8, 0.25);
      hoodMesh.position.set(0, 1.6, 0.7);
      hoodMesh.rotation.x = -0.25;
      hoodGroup.add(hoodMesh);

      // Glowing Ruby Crest Gem atop each hood
      const rubyMesh = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), matRuby);
      rubyMesh.position.set(0, 2.5, 0.75);
      hoodGroup.add(rubyMesh);

      sheshaGroup.add(hoodGroup);
    }

    parent.add(sheshaGroup);
  }

  // --- Volumetric Golden God-Rays (Divi Surya Sahasrasya) ---
  function buildVolumetricGodRays(parent) {
    const rayGroup = new THREE.Group();
    rayGroup.position.set(0, 4.5, -1.2);

    const rayCount = 42;
    for (let r = 0; r < rayCount; r++) {
      const rayAngle = (r / rayCount) * Math.PI * 2;
      const rayGeo = new THREE.ConeGeometry(0.48, 32, 4);
      rayGeo.translate(0, 16, 0);
      const rayMat = new THREE.MeshBasicMaterial({
        color: r % 2 === 0 ? 0xffea00 : 0xffa000,
        transparent: true,
        opacity: 0.14,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const rayMesh = new THREE.Mesh(rayGeo, rayMat);
      rayMesh.rotation.z = rayAngle;
      rayGroup.add(rayMesh);
    }
    parent.add(rayGroup);
    parent.userData.rayGroup = rayGroup;
  }

  // --- 3D Arjuna Kneeling in Reverence (Lower Left Foreground) ---
  function build3DArjuna() {
    arjunaGroup = new THREE.Group();
    arjunaGroup.position.set(-13.5, -5.5, 9);
    scene.add(arjunaGroup);

    // Arjuna's Body (Draped White Dhoti & Golden Armor)
    const arjunaMat = new THREE.MeshStandardMaterial({
      color: 0xffd54f, // Golden Armor
      roughness: 0.35,
      metalness: 0.6
    });

    const dhotiMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5, // Pure White Dhoti
      roughness: 0.6,
      metalness: 0.05
    });

    // Kneeling Legs & Dhoti
    const legs = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 2.4), dhotiMat);
    legs.position.set(0, 0.7, 0);
    arjunaGroup.add(legs);

    // Torso with Armor Cuirass
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.55, 1.8, 16), arjunaMat);
    torso.position.set(0, 2.1, 0);
    torso.rotation.x = -0.2; // leaning forward in devotion
    arjunaGroup.add(torso);

    // Folded Hands in Anjali Mudra (Prayer)
    const hands = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.8, 0.5), arjunaMat);
    hands.position.set(0.2, 2.2, 1.1);
    arjunaGroup.add(hands);

    // Head tilted upward gazing at the Lord
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffb74d }));
    head.position.set(0, 3.3, 0.4);
    head.rotation.x = -0.55; // looking up!
    arjunaGroup.add(head);

    // Quiver of Arrows slung on back
    const quiver = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 2.2, 8), matGold);
    quiver.position.set(-0.5, 2.2, -0.6);
    quiver.rotation.z = 0.35;
    quiver.rotation.x = -0.25;
    arjunaGroup.add(quiver);

    // Arrows in quiver
    for (let ar = 0; ar < 5; ar++) {
      const arrow = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.6, 6), matGold);
      arrow.position.set(-0.5 + (ar - 2) * 0.08, 2.5, -0.6);
      arrow.rotation.z = 0.35;
      arjunaGroup.add(arrow);
    }

    // Glowing Golden Gandiva Bow leaning next to him
    const bowCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.2, 0.2, 0.5),
      new THREE.Vector3(-0.4, 2.0, 0.8),
      new THREE.Vector3(-1.2, 3.8, 0.5)
    ]);
    const bowMesh = new THREE.Mesh(new THREE.TubeGeometry(bowCurve, 20, 0.08, 8, false), matGold);
    arjunaGroup.add(bowMesh);
  }

  // =========================================================================
  // 4. INTERACTIVE 3D RAYCASTING & CLICKABLE FACE LENSES
  // =========================================================================
  function buildInteractiveFaceNodes() {
    interactiveFaceMeshes = [];

    VISHWAROOPAM_FACES.forEach((face) => {
      const faceGroup = new THREE.Group();
      faceGroup.position.set(face.pos.x, face.pos.y, face.pos.z);

      // Outer Glowing Ring Lens
      const ringGeo = new THREE.RingGeometry(0.85, 1.05, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: face.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      faceGroup.add(ringMesh);

      // Procedural Deity Medallion Canvas Disc
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.arc(128, 128, 120, 0, Math.PI * 2);
      ctx.clip();

      const bgGrad = ctx.createRadialGradient(128, 128, 10, 128, 128, 128);
      bgGrad.addColorStop(0, '#ffffff');
      bgGrad.addColorStop(0.35, '#' + new THREE.Color(face.color).getHexString());
      bgGrad.addColorStop(0.8, '#140d24');
      bgGrad.addColorStop(1, '#05020a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 256, 256);

      ctx.lineWidth = 10;
      ctx.strokeStyle = '#ffd700';
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 18;
      ctx.font = 'bold 75px "Cinzel Decorative", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(face.bija, 128, 120);

      ctx.font = 'bold 24px "Cinzel", serif';
      ctx.fillStyle = '#ffe082';
      ctx.fillText(`॥ ${face.id} ॥`, 128, 185);

      const medallionTex = new THREE.CanvasTexture(canvas);
      const medallionGeo = new THREE.CircleGeometry(0.85, 32);
      const medallionMat = new THREE.MeshBasicMaterial({
        map: medallionTex,
        transparent: true,
        opacity: 0.92
      });
      const medallionMesh = new THREE.Mesh(medallionGeo, medallionMat);
      medallionMesh.position.z = 0.04;
      faceGroup.add(medallionMesh);

      // Pulsing Celestial Halo Disc (Expands on Hover)
      const pulseGeo = new THREE.RingGeometry(1.05, 1.45, 32);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: face.glow,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      pulseMesh.position.z = 0.02;
      faceGroup.add(pulseMesh);

      // Hit Target Box
      const hitBoxGeo = new THREE.SphereGeometry(1.3, 16, 16);
      const hitBoxMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitBox = new THREE.Mesh(hitBoxGeo, hitBoxMat);
      hitBox.position.z = 0.1;
      hitBox.userData = {
        face: face,
        faceGroup: faceGroup,
        ringMesh: ringMesh,
        pulseMesh: pulseMesh,
        medallionMesh: medallionMesh
      };
      faceGroup.add(hitBox);
      interactiveFaceMeshes.push(hitBox);

      vishwaroopamGroup.add(faceGroup);
    });
  }

  // --- Setup Raycasting & Interactions ---
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(-999, -999);

  function setupInteractions() {
    const canvas = document.getElementById('webgl-canvas');

    window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      checkFaceHover();
    }, { passive: true });

    let pointerDownTime = 0;
    canvas.addEventListener('pointerdown', () => {
      pointerDownTime = Date.now();
    });

    canvas.addEventListener('pointerup', (e) => {
      const duration = Date.now() - pointerDownTime;
      if (duration < 300) {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        handleFaceSelection();
      }
    });
  }

  function checkFaceHover() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveFaceMeshes, false);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      if (hoveredFace !== hit) {
        resetFaceHover();
        hoveredFace = hit;
        document.body.style.cursor = 'pointer';

        const { pulseMesh, ringMesh, faceGroup } = hit.userData;
        if (pulseMesh) {
          pulseMesh.material.opacity = 0.9;
          pulseMesh.scale.set(1.35, 1.35, 1.35);
        }
        if (ringMesh) ringMesh.material.opacity = 1.0;
        if (faceGroup) faceGroup.position.z = hit.userData.face.pos.z + 0.6;
      }
    } else {
      if (hoveredFace) resetFaceHover();
    }
  }

  function resetFaceHover() {
    if (hoveredFace && hoveredFace.userData) {
      const { pulseMesh, ringMesh, faceGroup, face } = hoveredFace.userData;
      if (pulseMesh) {
        pulseMesh.material.opacity = 0.35;
        pulseMesh.scale.set(1, 1, 1);
      }
      if (ringMesh) ringMesh.material.opacity = 0.85;
      if (faceGroup && face) faceGroup.position.z = face.pos.z;
    }
    hoveredFace = null;
    document.body.style.cursor = 'default';
  }

  function handleFaceSelection() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveFaceMeshes, false);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const face = hit.userData.face;
      openFaceDrawer(face);
      focusOnFace(face);
      playTempleBellChime();
    }
  }

  // --- Focus Camera on Specific 3D Deity / Face ---
  function focusOnFace(face) {
    targetLookAt.set(face.pos.x, face.pos.y, face.pos.z);
    targetCameraPos = new THREE.Vector3(face.pos.x * 0.7 - 2.2, face.pos.y, 13.5);
    isTransitioning = true;
  }

  // --- Open Divine Revelation Card (Drawer) ---
  function openFaceDrawer(face) {
    selectedFace = face;
    const drawer = document.getElementById('chapterDrawer');
    if (!drawer) return;

    const badge = document.getElementById('drawerBadge');
    const numEl = document.getElementById('drawerChapterNum');
    const titleMain = document.getElementById('drawerTitleMain');
    const titleSa = document.getElementById('drawerTitleSa');
    const verseTag = document.getElementById('drawerVerseTag');
    const sanskritVerse = document.getElementById('drawerSanskritVerse');
    const yogaType = document.getElementById('drawerYogaType');
    const versesCount = document.getElementById('drawerVersesCount');
    const themeText = document.getElementById('drawerThemeText');

    if (badge) {
      badge.textContent = face.category_label;
      badge.className = `drawer-badge vishwaroopam`;
    }

    if (numEl) numEl.textContent = `DIVINE FORM ${face.id} OF 16 • దివ్య స్వరూపం`;
    if (titleMain) titleMain.textContent = currentLang === 'te' ? face.name_te : face.name_en;
    if (titleSa) titleSa.textContent = `॥ ${face.name_sa} ॥`;
    if (verseTag) verseTag.textContent = face.verse_ref;
    if (sanskritVerse) sanskritVerse.innerHTML = face.verse_sa.replace(/\n/g, '<br>');
    if (yogaType) yogaType.textContent = face.category_label;
    if (versesCount) versesCount.textContent = face.weapons;
    if (themeText) themeText.textContent = currentLang === 'te' ? face.theme_te : face.theme_en;

    drawer.classList.add('visible');
  }

  function closeFaceDrawer() {
    const drawer = document.getElementById('chapterDrawer');
    if (drawer) drawer.classList.remove('visible');
    selectedFace = null;

    targetLookAt.set(0, 1.5, 0);
    targetCameraPos = new THREE.Vector3(0, 1.8, 26);
    isTransitioning = true;
  }

  // --- UI Event Handlers ---
  function setupUIEvents() {
    // Mode Switcher Buttons
    const modeBtns = document.querySelectorAll('.mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        switchMode(btn.dataset.mode);
      });
    });

    // Language Toggle
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'te' : 'en';
        langBtn.textContent = currentLang === 'en' ? 'తెలుగు' : 'English';
        if (selectedFace) {
          openFaceDrawer(selectedFace);
        }
      });
    }

    // Drawer Close
    const drawerClose = document.getElementById('drawerCloseBtn');
    if (drawerClose) drawerClose.addEventListener('click', closeFaceDrawer);

    // Prev / Next Divine Face Buttons
    const prevBtn = document.getElementById('drawerPrevBtn');
    const nextBtn = document.getElementById('drawerNextBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (!selectedFace) return;
        let prevId = selectedFace.id - 1;
        if (prevId < 1) prevId = 16;
        const prevFace = VISHWAROOPAM_FACES[prevId - 1];
        openFaceDrawer(prevFace);
        focusOnFace(prevFace);
        playTempleBellChime();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (!selectedFace) return;
        let nextId = selectedFace.id + 1;
        if (nextId > 16) nextId = 1;
        const nextFace = VISHWAROOPAM_FACES[nextId - 1];
        openFaceDrawer(nextFace);
        focusOnFace(nextFace);
        playTempleBellChime();
      });
    }

    // Arjuna Quick Button
    const arjunaBtn = document.getElementById('arjunaQuickBtn');
    if (arjunaBtn) {
      arjunaBtn.addEventListener('click', () => {
        switchMode('arjuna');
      });
    }

    // Supreme View / Reset Cam Button
    const resetCamBtn = document.getElementById('resetCamBtn');
    if (resetCamBtn) {
      resetCamBtn.addEventListener('click', () => {
        switchMode('vishwaroopam');
      });
    }

    // Aura Spin Toggle
    const autoRotateBtn = document.getElementById('autoRotateBtn');
    if (autoRotateBtn) {
      autoRotateBtn.addEventListener('click', () => {
        autoRotateAura = !autoRotateAura;
        autoRotateBtn.classList.toggle('active', autoRotateAura);
        autoRotateBtn.innerHTML = autoRotateAura ? '⏸ Aura Spin' : '▶ Spin Aura';
      });
    }

    // Category Filter Pills
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        applyFilter(pill.dataset.filter);
      });
    });
  }

    // --- Switch Mode Implementation ---
  function switchMode(mode) {
    currentMode = mode;
    clearInterval(tourTimer);

    if (mode === 'vishwaroopam') {
      targetLookAt.set(0, 1.5, 0);
      targetCameraPos = new THREE.Vector3(0, 1.8, 26);
      isTransitioning = true;
    } else if (mode === 'arjuna') {
      targetLookAt.set(0, 3.5, 0);
      targetCameraPos = new THREE.Vector3(-14, -4.5, 13);
      isTransitioning = true;
    } else if (mode === 'tour') {
      tourIndex = 0;
      runTourStep();
      tourTimer = setInterval(runTourStep, 5000);
    }
  }

  function runTourStep() {
    const face = VISHWAROOPAM_FACES[tourIndex];
    openFaceDrawer(face);
    focusOnFace(face);
    playTempleBellChime();
    tourIndex = (tourIndex + 1) % VISHWAROOPAM_FACES.length;
  }

  // --- Apply Category Filter ---
  function applyFilter(category) {
    currentFilter = category;
    interactiveFaceMeshes.forEach(hit => {
      const face = hit.userData.face;
      const { faceGroup } = hit.userData;

      let isMatch = true;
      if (category === 'avatar') {
        isMatch = face.category_label.includes('AVATAR') || face.category_label.includes('PARABRAHMAN');
      } else if (category === 'deva') {
        isMatch = face.category_label.includes('TRIDEVA') || face.category_label.includes('DEVA') || face.category_label.includes('BHAKTA');
      } else if (category === 'time') {
        isMatch = face.category_label.includes('TIME') || face.category_label.includes('KALA') || face.category_label.includes('ASTRA');
      }

      if (faceGroup) {
        faceGroup.visible = isMatch;
      }
    });
  }

  // --- Devotional Audio Integration ---
  function setupAudio() {
    audioEl = new Audio('devotional_bgm.wav');
    audioEl.loop = true;

    const audioBtn = document.getElementById('audioToggleBtn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        if (!isAudioPlaying) {
          audioEl.play().then(() => {
            isAudioPlaying = true;
            audioBtn.classList.add('playing');
            audioBtn.classList.add('active');
          }).catch(() => {});
        } else {
          audioEl.pause();
          isAudioPlaying = false;
          audioBtn.classList.remove('playing');
          audioBtn.classList.remove('active');
        }
      });
    }
  }

  // --- Window Resize ---
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // --- Main Animation Loop ---
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    // 1. Controls
    if (controls) controls.update();

    // 2. Smooth Camera Lerping
    if (isTransitioning && targetCameraPos) {
      camera.position.lerp(targetCameraPos, 0.05);
      if (controls) {
        controls.target.lerp(targetLookAt, 0.05);
      }
      if (camera.position.distanceTo(targetCameraPos) < 0.1) {
        isTransitioning = false;
      }
    }

    // 3. Spinning 3D Sudarshana Chakra on Finger
    if (vishwaroopamGroup && vishwaroopamGroup.userData.spinningChakra) {
      vishwaroopamGroup.userData.spinningChakra.rotation.z += 0.05;
    }

    // 4. Volumetric Golden God-Rays Rotation
    if (vishwaroopamGroup && autoRotateAura) {
      if (vishwaroopamGroup.userData.rayGroup) {
        vishwaroopamGroup.userData.rayGroup.rotation.z += 0.0022;
      }
    }

    // 5. Breathing pulsation on interactive face halo rings
    interactiveFaceMeshes.forEach((hit, idx) => {
      if (hit.userData && hit.userData.pulseMesh && hit !== hoveredFace) {
        const pulseVal = 0.3 + Math.sin(elapsed * 2.0 + idx * 0.4) * 0.15;
        hit.userData.pulseMesh.material.opacity = pulseVal;
      }
    });

    // 6. Subtle celestial floating sway of Vishwaroopam
    if (vishwaroopamGroup) {
      vishwaroopamGroup.position.y = Math.sin(elapsed * 0.8) * 0.15;
    }

    // 7. Render Scene
    renderer.render(scene, camera);
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
