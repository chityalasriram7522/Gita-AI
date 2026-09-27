/**
 * BHAGAVAD GITA UNIVERSAL VERSE NAVIGATOR & SACRED SHLOKA EXPLORER (దివ్య గీతా శ్లోక దర్శిని)
 * Instant chapter & verse jumping, dynamic verse grid, deep-linking with glowing auto-scroll,
 * audio pronunciation, multilingual English/Telugu support, and wisdom oracle.
 */

(function() {
    'use strict';

    // =========================================================================
    // 1. CHAPTER DATABASE & FILENAME MAPPING (ALL 18 CHAPTERS)
    // =========================================================================
    const GITA_CHAPTERS = {
        1: {
            number: 1,
            title_en: "Arjuna Viṣhād Yoga",
            title_te: "అర్జున విషాద యోగము",
            title_sa: "अर्जुनविषादयोगः",
            verses: 47,
            file_en: "chapter1.html",
            file_te: "telugu1.html",
            theme_en: "Arjuna's Moral Dilemma & Compassionate Grief",
            theme_te: "అర్జునుని శోకము మరియు మోహము",
            key_verses: [1, 28, 29, 47]
        },
        2: {
            number: 2,
            title_en: "Sānkhya Yog",
            title_te: "సాంఖ్య యోగము",
            title_sa: "साङ्ख्ययोगः",
            verses: 72,
            file_en: "chapterr2.html",
            file_te: "telugu2.html",
            theme_en: "The Immortal Soul, Karma Yoga & Steady Wisdom",
            theme_te: "ఆత్మ అమరత్వం, నిష్కామ కర్మ & స్థితప్రజ్ఞత",
            key_verses: [7, 11, 20, 22, 47, 48, 62, 70]
        },
        3: {
            number: 3,
            title_en: "Karm Yog",
            title_te: "కర్మ యోగము",
            title_sa: "कर्मयोगः",
            verses: 43,
            file_en: "chapter3.html",
            file_te: "telugu3.html",
            theme_en: "Selfless Action for Universal Welfare",
            theme_te: "నిస్వార్థ లోకకల్యాణ కర్మ & కామ క్రోధ నివారణ",
            key_verses: [9, 19, 21, 35, 37]
        },
        4: {
            number: 4,
            title_en: "Jñāna Karm Sanyās Yog",
            title_te: "జ్ఞాన కర్మ సంన్యాస యోగము",
            title_sa: "ज्ञानकर्मसंन्यासयोगः",
            verses: 42,
            file_en: "chapter4.html",
            file_te: "telugu4.html",
            theme_en: "Divine Incarnation & The Fire of Wisdom",
            theme_te: "భగవదవతార రహస్యం & జ్ఞానాగ్ని",
            key_verses: [7, 8, 14, 18, 38, 39]
        },
        5: {
            number: 5,
            title_en: "Karm Sanyās Yog",
            title_te: "కర్మ సంన్యాస యోగము",
            title_sa: "कर्मसंन्यासयोगः",
            verses: 29,
            file_en: "chapter5.html",
            file_te: "telugu5.html",
            theme_en: "Renunciation of Fruits & Inward Serenity",
            theme_te: "కర్మఫల త్యాగము & అంతఃశాంతి",
            key_verses: [10, 15, 18, 24, 29]
        },
        6: {
            number: 6,
            title_en: "Dhyān Yog",
            title_te: "ధ్యాన యోగము",
            title_sa: "ध्यानयोगः",
            verses: 47,
            file_en: "chapter6.html",
            file_te: "telugu6.html",
            theme_en: "Mastery of Mind & Meditation on the Self",
            theme_te: "మనస్సుపై నియంత్రణ & ధ్యాన సాధన",
            key_verses: [5, 6, 19, 26, 30, 47]
        },
        7: {
            number: 7,
            title_en: "Jñāna Vijñāna Yog",
            title_te: "జ్ఞాన విజ్ఞాన యోగము",
            title_sa: "ज्ञानविज्ञानयोगः",
            verses: 30,
            file_en: "chapter7.html",
            file_te: "telugu7.html",
            theme_en: "Knowledge of Ultimate Reality & Maya",
            theme_te: "పరమాత్మ తత్త్వము & మాయా విముక్తి",
            key_verses: [4, 7, 14, 16, 19]
        },
        8: {
            number: 8,
            title_en: "Akṣhar Brahma Yog",
            title_te: "అక్షర బ్రహ్మ యోగము",
            title_sa: "अक्षरब्रह्मयोगः",
            verses: 28,
            file_en: "chapte8.html",
            file_te: "telugu8.html",
            theme_en: "The Imperishable Brahman & Art of Departure",
            theme_te: "శాశ్వత బ్రహ్మ ప్రాప్తి & అంత్యకాల స్మరణ",
            key_verses: [5, 7, 15, 20, 28]
        },
        9: {
            number: 9,
            title_en: "Rāja Vidyā Yog",
            title_te: "రాజవిద్యా రాజగుహ్య యోగము",
            title_sa: "राजविद्याराजगुह्ययोगः",
            verses: 34,
            file_en: "chapter9.html",
            file_te: "telugu9.html",
            theme_en: "The Sovereign Secret & Unalloyed Devotion",
            theme_te: "పరమ రహస్య జ్ఞానము & నిష్కల్మష భక్తి",
            key_verses: [2, 10, 22, 26, 27, 34]
        },
        10: {
            number: 10,
            title_en: "Vibhūti Yog",
            title_te: "విభూతి యోగము",
            title_sa: "विभूतियोगः",
            verses: 42,
            file_en: "chapter10.html",
            file_te: "telugu10.html",
            theme_en: "Infinite Divine Glories & Cosmic Manifestations",
            theme_te: "సర్వవ్యాపక పరమాత్మ దివ్య విభూతులు",
            key_verses: [8, 9, 10, 20, 41]
        },
        11: {
            number: 11,
            title_en: "Viśhwarūp Darśhan Yog",
            title_te: "విశ్వరూప సందర్శన యోగము",
            title_sa: "विश्वरूपदर्शनयोगः",
            verses: 55,
            file_en: "chapter11.html",
            file_te: "telugu11.html",
            theme_en: "The Revelation of Cosmic Omnipresence",
            theme_te: "అనంత విశ్వరూప సాక్షాత్కారము",
            key_verses: [12, 15, 32, 33, 54]
        },
        12: {
            number: 12,
            title_en: "Bhakti Yog",
            title_te: "భక్తి యోగము",
            title_sa: "भक्तियोगः",
            verses: 20,
            file_en: "chapter12.html",
            file_te: "telugu12.html",
            theme_en: "The Path of Unconditional Divine Love",
            theme_te: "భగవత్ప్రీతి & ఉత్తమ భక్తుని దివ్య గుణాలు",
            key_verses: [2, 5, 8, 13, 15, 20]
        },
        13: {
            number: 13,
            title_en: "Kṣhetra Kṣhetrajña Vibhāg Yog",
            title_te: "క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగము",
            title_sa: "क्षेत्रक्षेत्रज्ञविभागयोगः",
            verses: 35,
            file_en: "chapter13.html",
            file_te: "telugu13.html",
            theme_en: "The Field, the Knower, and Pure Consciousness",
            theme_te: "దేహము (క్షేత్రము) & ఆత్మ (క్షేత్రజ్ఞుడు)",
            key_verses: [1, 2, 8, 13, 22, 34]
        },
        14: {
            number: 14,
            title_en: "Guṇa Traya Vibhāg Yog",
            title_te: "గుణత్రయ విభాగ యోగము",
            title_sa: "गुणत्रयविभागयोगः",
            verses: 27,
            file_en: "chapter14.html",
            file_te: "telugu14.html",
            theme_en: "Transcending Goodness, Passion, and Ignorance",
            theme_te: "సత్త్వ, రజో, తమో గుణాల విశ్లేషణ",
            key_verses: [5, 6, 7, 8, 19, 26]
        },
        15: {
            number: 15,
            title_en: "Puruṣhottam Yog",
            title_te: "పురుషోత్తమ యోగము",
            title_sa: "पुरुषोत्तमयोगः",
            verses: 20,
            file_en: "chapteer15.html",
            file_te: "telugu15.html",
            theme_en: "The Cosmic Tree & The Supreme Divine Person",
            theme_te: "సంసార వృక్షం & పురుషోత్తమ తత్త్వము",
            key_verses: [1, 5, 7, 15, 18, 20]
        },
        16: {
            number: 16,
            title_en: "Daivāsura Sampad Vibhāg Yog",
            title_te: "దైవాసుర సంపద్విభాగ యోగము",
            title_sa: "दैवासुरसम्पद्विभागयोगः",
            verses: 24,
            file_en: "chapter16.html",
            file_te: "telugu16.html",
            theme_en: "Divine Virtues versus Demonic Tendencies",
            theme_te: "దైవీ సంపద & ఆసురీ సంపద లక్షణాలు",
            key_verses: [1, 2, 3, 4, 21, 24]
        },
        17: {
            number: 17,
            title_en: "Śhraddhā Traya Vibhāg Yog",
            title_te: "శ్రద్ధాత్రయ విభాగ యోగము",
            title_sa: "श्रद्धात्रयविभागयोगः",
            verses: 28,
            file_en: "chapter17.html",
            file_te: "telugu17.html",
            theme_en: "The Three Types of Faith, Diet, and Sacrifice",
            theme_te: "ఆహార, యజ్ఞ, దాన, తపస్సులలో త్రిగుణాలు",
            key_verses: [3, 8, 14, 20, 23]
        },
        18: {
            number: 18,
            title_en: "Mokṣha Sanyās Yog",
            title_te: "మోక్ష సంన్యాస యోగము",
            title_sa: "मोक्षसंन्यासयोगः",
            verses: 78,
            file_en: "chapter18.html",
            file_te: "telugu18.html",
            theme_en: "Absolute Surrender, Ultimate Liberation & Victory",
            theme_te: "సర్వధర్మ పరిత్యాగము, శరణాగతి & మోక్ష ప్రాప్తి",
            key_verses: [20, 46, 54, 65, 66, 78]
        }
    };

    // =========================================================================
    // 2. CURATED LANDMARK SHLOKA VAULT (WITH SANSKRIT, AUDIO & TRANSLATIONS)
    // =========================================================================
    const LANDMARK_SHLOKAS = [
        {
            chapter: 2,
            verse: 47,
            sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
            transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi ||",
            en: "You have an absolute right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of results, nor be attached to inaction.",
            te: "కర్మలను చేయుటయందే నీకు అధికారము కలదు కాని, వాని ఫలితములపై ఎన్నడూ లేదు. కర్మఫలమునకు నీవు కారణము కాకూడదు; అట్లే కర్మలను చేయకుండుటయందును నీకు ఆసక్తి ఉండరాదు.",
            insight_en: "Focus entirely on current excellence without anxiety of the outcome. Pure action breaks the chains of fear.",
            insight_te: "ఫలితాల భయం వీడి కర్తవ్యంపై సంపూర్ణ దృష్టి పెట్టడమే అసలైన యోగము."
        },
        {
            chapter: 4,
            verse: 7,
            sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥",
            transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata |\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||",
            en: "Whenever and wherever there is a decline in righteousness, O descendant of Bharata, and a predominant rise of unrighteousness—at that time I manifest Myself.",
            te: "ఎప్పుడెప్పుడు ధర్మమునకు హాని కలుగునో, అధర్మము వృద్ధి పొందునో, అప్పుడు నన్ను నేను సృజించుకొందును (అవతరింతును).",
            insight_en: "The Supreme Divine intelligence constantly restores balance and guides the righteous in times of darkness.",
            insight_te: "ధర్మ రక్షణ కోసం భగవంతుని దివ్య సంకల్పం ఎల్లప్పుడూ తోడుగా నిలుస్తుంది."
        },
        {
            chapter: 4,
            verse: 8,
            sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम् ।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥",
            transliteration: "paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām |\ndharma-saṁsthāpanārthāya sambhavāmi yuge yuge ||",
            en: "To deliver the pious and to annihilate the miscreants, as well as to re-establish righteousness, I appear age after age.",
            te: "సాధువుల రక్షణ కొరకు, దుష్టుల వినాశనము కొరకు, మరియు ధర్మమును చక్కగా ప్రతిష్ఠించుట కొరకు నేను యుగయుగమున అవతరించుచున్నాను.",
            insight_en: "Goodness is eternally protected; evil is intrinsically self-destroying.",
            insight_te: "సత్యము, ధర్మము ఎప్పటికీ జయిస్తాయి; దైవ రక్షణ సాధువులకు రక్షాకవచం."
        },
        {
            chapter: 2,
            verse: 20,
            sanskrit: "न जायते म्रियते वा कदाचिन्-नायं भूत्वा भविता वा न भूयः ।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥",
            transliteration: "na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ |\najo nityaḥ śāśvato 'yaṁ purāṇo na hanyate hanyamāne śarīre ||",
            en: "The soul is never born nor does it ever die; nor having once been, does it ever cease to be. Unborn, eternal, ever-existing, and primeval, it is not slain when the body is slain.",
            te: "ఆత్మ ఎన్నడూ పుట్టదు, చనిపోదు; ఇది నిత్యమైనది, శాశ్వతమైనది, సనాతనమైనది. దేహము నశించినను ఆత్మ నశించదు.",
            insight_en: "Your core essence is immortal light. Conquer all worldly fear by realizing you are the soul, not the body.",
            insight_te: "నీవు అమరమైన ఆత్మవు; భౌతిక మార్పులు నీ అంతరంగ శాంతిని కదిలించలేవు."
        },
        {
            chapter: 6,
            verse: 5,
            sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥",
            transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet |\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ ||",
            en: "Elevate yourself through the power of your mind, and do not degrade yourself. For the mind alone is the friend of the conditioned soul, and the mind is its enemy as well.",
            te: "తన మనస్సు ద్వారా తనను తానే ఉద్ధరించుకోవాలి; మనస్సును అధోగతి పాలు చేయరాదు. ఎందుకనగా మనస్సే తనకు బంధువు, మనస్సే తనకు శత్రువు.",
            insight_en: "You are your own greatest master or your own worst roadblock. Train your intellect to guide your mind.",
            insight_te: "శిక్షణ పొందిన మనస్సే నీకు ఆప్తమిత్రుడు; వివేకంతో మనస్సును జయించుము."
        },
        {
            chapter: 9,
            verse: 22,
            sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥",
            transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate |\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham ||",
            en: "For those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have.",
            te: "ఎవరైతే అనన్య భక్తితో నన్నే నిరంతరం స్మరిస్తూ ఉపాసిస్తారో, అటువంటి నిత్యయుక్తుల యోగక్షేమాలను నేనే స్వయంగా వహిస్తాను.",
            insight_en: "Surrender with unwavering faith, and the cosmos itself shoulders your burdens and guides your protection.",
            insight_te: "భగవంతునిపై సంపూర్ణ విశ్వాసం ఉంచిన భక్తుని రక్షణ మరియు సంరక్షణ స్వయంగా పరమాత్మదే."
        },
        {
            chapter: 11,
            verse: 32,
            sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः ।\nऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः ॥",
            transliteration: "kālo 'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ |\nṛte 'pi tvāṁ na bhaviṣyanti sarve ye 'vasthitāḥ pratyanīkeṣu yodhāḥ ||",
            en: "I am Time, the destroyer of all the worlds, and I have come here to engage in the annihilation of all people. Even without your participation, none of these warriors will survive.",
            te: "నేను సమస్త లోకములను నశింపజేసే మహాకాలమును; ఈ లోకాలను సంహరించడానికే ప్రవృద్ధుడనైతిని. నీవు యుద్ధం చేయకున్ననూ ఎదురుగా నిలిచిన యోధులు ఎవ్వరూ మిగలరు.",
            insight_en: "Time is the invincible force of nature. Act courageously as an instrument of divine righteousness.",
            insight_te: "కాలచక్రం అనివార్యమైనది; సత్యం వైపు నిలబడి కాలపు దివ్య ప్రణాళికలో భాగస్వామివి కమ్ము."
        },
        {
            chapter: 18,
            verse: 66,
            sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥",
            transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja |\nahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ ||",
            en: "Abandon all varieties of rituals and worldly attachments, and simply surrender unto Me alone. I shall liberate you from all sinful reactions; do not grieve.",
            te: "సమస్త ధర్మములను నాకే అర్పించి, కేవలం నన్నే శరణువేడుము. నేను నిన్ను సమస్త పాపముల నుండి విముక్తుడిని చేసెదను; దుఃఖింపకుము.",
            insight_en: "The supreme climax of the Bhagavad Gita: Absolute surrender to divine grace dissolves every sorrow and anxiety.",
            insight_te: "గీతా పరమ రెంహస్యము: అహంకారాన్ని వీడి పరమాత్మునికి శరణాగతి చెయ్యి; నీకు మోక్షము నిశ్చయము."
        },
        {
            chapter: 18,
            verse: 78,
            sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः ।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥",
            transliteration: "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ |\ntatra śrīr vijayo bhūtir dhruvā nītir matir mama ||",
            en: "Wherever there is Shree Krishna, the Lord of all yoga, and wherever there is Arjuna, the supreme archer, there will certainly be opulence, victory, extraordinary power, and morality.",
            te: "ఎక్కడైతే యోగేశ్వరుడైన శ్రీకృష్ణుడు, గాండీవధారియైన అర్జునుడు ఉంటారో, అక్కడ సిరి, సంపద, శాశ్వత విజయము మరియు ధర్మము తప్పక ఉండునని నా నిశ్చయము.",
            insight_en: "When divine grace and dedicated human effort unite, ultimate victory is guaranteed.",
            insight_te: "దైవానుగ్రహము మరియు మానవ ప్రయత్నం ఏకమైన చోట విజయం తథ్యం."
        }
    ];

    // =========================================================================
    // 3. UTILITY HELPERS & PATH BUILDERS
    // =========================================================================
    // 3. UTILITY HELPERS & PATH BUILDERS
    // =========================================================================
    function getChapterTargetUrl(chapterNum, verseNum, lang = 'en') {
        const chap = GITA_CHAPTERS[chapterNum] || GITA_CHAPTERS[1];
        const fileName = lang === 'te' ? chap.file_te : chap.file_en;
        const v = parseInt(verseNum, 10) || 1;
        return `${fileName}?verse=${v}#v${chapterNum}.${v}`;
    }

    function showToast(msg, icon = '✦') {
        let toast = document.getElementById('gitaNavToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'gitaNavToast';
            toast.className = 'gita-nav-toast';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `<span class="toast-icon">${icon}</span> <span class="toast-text">${msg}</span>`;
        toast.classList.add('visible');
        clearTimeout(toast._timer);
        toast._timer = setTimeout(() => {
            toast.classList.remove('visible');
        }, 3200);
    }

    function speakText(text, lang = 'te') {
        if (!text) return;
        // 1. Try local audio server proxy if available
        try {
            const cleanText = text.replace(/[\n\r\t]/g, ' ').substring(0, 280);
            const audio = new Audio(`/api/tts?lang=${lang}&text=${encodeURIComponent(cleanText)}`);
            const playProm = audio.play();
            if (playProm !== undefined) {
                playProm.catch(() => {
                    // Fallback to browser Web Speech API
                    fallbackSpeech(cleanText, lang);
                });
                return;
            }
        } catch (e) {
            fallbackSpeech(text, lang);
        }
    }

    function fallbackSpeech(text, lang) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(text.substring(0, 250));
            utter.rate = 0.9;
            utter.pitch = 1.0;
            if (lang === 'te') utter.lang = 'te-IN';
            else if (lang === 'hi' || lang === 'sa') utter.lang = 'hi-IN';
            else utter.lang = 'en-US';
            window.speechSynthesis.speak(utter);
        }
    }

    // =========================================================================
    // 4. IN-PAGE VERSE DEEP LINKING & HIGHLIGHTING (FOR CHAPTER PAGES)
    // =========================================================================
    function initInPageVerseDeepLinking() {
        const urlParams = new URLSearchParams(window.location.search);
        let targetVerse = urlParams.get('verse');
        let hash = window.location.hash;

        if (!targetVerse && hash) {
            const m = hash.match(/v(\d+)\.?(\d+)?/i) || hash.match(/verse[-_]?(\d+)/i);
            if (m) targetVerse = m[2] || m[1];
        }

        // Tag all h5 elements with verse metadata
        const h5List = document.querySelectorAll('h5');
        let matchedHeading = null;

        h5List.forEach(h5 => {
            const txt = h5.textContent.trim();
            // Match patterns like "Bhagavad Gita 1.2" or "Bhagavad Gita 2.47" or "1.4-1.6"
            const match = txt.match(/Bhagavad\s*Gita\s*(\d+)\.(\d+)(?:-(\d+)\.?(\d+)?)?/i);
            if (match) {
                const c = match[1];
                const startV = parseInt(match[2], 10);
                const endV = match[4] ? parseInt(match[4], 10) : startV;

                h5.setAttribute('data-chapter', c);
                h5.setAttribute('data-verse-start', startV);
                h5.setAttribute('data-verse-end', endV);
                h5.id = `v${c}.${startV}`;

                // Check if this matches our target verse
                if (targetVerse) {
                    const tv = parseInt(targetVerse, 10);
                    if (tv >= startV && tv <= endV && !matchedHeading) {
                        matchedHeading = h5;
                    }
                }
            }
        });

        // If matched, smoothly scroll and highlight
        if (matchedHeading) {
            setTimeout(() => {
                matchedHeading.scrollIntoView({ behavior: 'smooth', block: 'center' });
                matchedHeading.classList.add('gita-verse-highlight-target');

                // Highlight following paragraph as well
                const nextP = matchedHeading.nextElementSibling;
                if (nextP && nextP.tagName === 'P') {
                    nextP.classList.add('gita-verse-p-highlight');
                }

                showToast(`Focused on Bhagavad Gita Verse ${matchedHeading.textContent.replace('Bhagavad Gita', '').trim()}`, '🪷');

                setTimeout(() => {
                    matchedHeading.classList.remove('gita-verse-highlight-target');
                    if (nextP) nextP.classList.remove('gita-verse-p-highlight');
                }, 6000);
            }, 450);
        }
    }

    // =========================================================================
    // 5. MODAL: SHLOKA PREVIEW & VOICE PLAYER MODAL
    // =========================================================================
    function openShlokaModal(shlokaData, currentLang = 'en') {
        let modal = document.getElementById('gitaShlokaPreviewModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'gitaShlokaPreviewModal';
            modal.className = 'gita-shloka-modal-overlay';
            modal.innerHTML = `
                <div class="gita-shloka-modal-card">
                    <button class="gita-shloka-modal-close" id="gitaModalCloseBtn" aria-label="Close">✕</button>
                    
                    <div class="gita-shloka-modal-header">
                        <span class="gita-badge-gold">✦ SACRED SHLOKA ✦</span>
                        <h3 class="gita-shloka-modal-title" id="gsmTitle">Bhagavad Gita</h3>
                        <div class="gita-shloka-modal-chapter" id="gsmChapterName">Chapter Title</div>
                    </div>

                    <div class="gita-shloka-sanskrit-box">
                        <div class="gita-shloka-sanskrit-text" id="gsmSanskrit"></div>
                        <div class="gita-shloka-translit" id="gsmTranslit"></div>
                    </div>

                    <div class="gita-shloka-meaning-box">
                        <div class="gita-meaning-tabs">
                            <button class="gita-meaning-tab active" id="gmtEn" data-lang="en">English</button>
                            <button class="gita-meaning-tab" id="gmtTe" data-lang="te">తెలుగు</button>
                        </div>
                        <p class="gita-shloka-meaning-text" id="gsmMeaning"></p>
                        <div class="gita-shloka-insight-pill" id="gsmInsight"></div>
                    </div>

                    <div class="gita-shloka-actions-bar">
                        <button type="button" class="gita-btn-action gita-btn-audio" id="gsmAudioBtn">
                            <span class="btn-icon">🔊</span>
                            <span class="btn-single-txt">Audio</span>
                        </button>
                        <button type="button" class="gita-btn-action gita-btn-read" id="gsmReadBtn">
                            <span class="btn-icon">📖</span>
                            <span class="btn-single-txt">Chapter ➔</span>
                        </button>
                        <button type="button" class="gita-btn-action gita-btn-ai" id="gsmAiBtn">
                            <span class="btn-icon">✨</span>
                            <span class="btn-single-txt">Ask AI</span>
                        </button>
                        <button type="button" class="gita-btn-action gita-btn-copy" id="gsmCopyBtn" title="Copy Shloka" aria-label="Copy Shloka">
                            <span class="btn-icon">📋</span>
                            <span class="btn-single-txt">Copy</span>
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            const closeModal = () => {
                modal.classList.remove('active');
                document.body.classList.remove('gita-shloka-open');
                const launcher = document.getElementById('gitaChatLauncher');
                if (launcher && !document.body.classList.contains('gita-chat-active') && !document.body.classList.contains('gita-voice-active')) {
                    launcher.style.removeProperty('display');
                }
            };

            // Close listeners
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
            document.getElementById('gitaModalCloseBtn').addEventListener('click', closeModal);
        }

        // Fill Data
        const chap = GITA_CHAPTERS[shlokaData.chapter] || GITA_CHAPTERS[1];
        const titleElem = document.getElementById('gsmTitle');
        const chapElem = document.getElementById('gsmChapterName');
        const sanskritElem = document.getElementById('gsmSanskrit');
        const translitElem = document.getElementById('gsmTranslit');
        const meaningElem = document.getElementById('gsmMeaning');
        const insightElem = document.getElementById('gsmInsight');
        const audioBtn = document.getElementById('gsmAudioBtn');
        const readBtn = document.getElementById('gsmReadBtn');
        const aiBtn = document.getElementById('gsmAiBtn');
        const copyBtn = document.getElementById('gsmCopyBtn');
        const tabEn = document.getElementById('gmtEn');
        const tabTe = document.getElementById('gmtTe');

        titleElem.textContent = `Bhagavad Gita ${shlokaData.chapter}.${shlokaData.verse}`;
        chapElem.textContent = `Chapter ${shlokaData.chapter} • ${chap.title_en} (${chap.title_te})`;
        sanskritElem.textContent = shlokaData.sanskrit || `भगवद्गीता अध्याय ${shlokaData.chapter} श्लोक ${shlokaData.verse}`;
        translitElem.textContent = shlokaData.transliteration || "";

        let activeLang = currentLang === 'te' ? 'te' : 'en';

        function updateMeaningView() {
            if (activeLang === 'te') {
                tabTe.classList.add('active');
                tabEn.classList.remove('active');
                meaningElem.textContent = shlokaData.te || `${chap.title_te} లోని ${shlokaData.verse}వ దివ్య శ్లోకము.`;
                insightElem.textContent = shlokaData.insight_te ? `💡 దివ్య మార్గదర్శనం: ${shlokaData.insight_te}` : `🪷 సత్యం, ధర్మం మరియు అంతఃశాంతికి మార్గం.`;
            } else {
                tabEn.classList.add('active');
                tabTe.classList.remove('active');
                meaningElem.textContent = shlokaData.en || `Divine discourse of Chapter ${shlokaData.chapter}, Verse ${shlokaData.verse}.`;
                insightElem.textContent = shlokaData.insight_en ? `💡 Divine Insight: ${shlokaData.insight_en}` : `🪷 Pure contemplation on selfless action and peace.`;
            }
        }
        updateMeaningView();

        tabEn.onclick = () => { activeLang = 'en'; updateMeaningView(); };
        tabTe.onclick = () => { activeLang = 'te'; updateMeaningView(); };

        // Audio button action
        audioBtn.onclick = () => {
            const speechText = activeLang === 'te' ? (shlokaData.te || shlokaData.sanskrit) : (shlokaData.sanskrit || shlokaData.en);
            speakText(speechText, activeLang === 'te' ? 'te' : 'sa');
            showToast('Playing Sacred Recitation...', '🔊');
        };

        // Read in Chapter action
        readBtn.onclick = () => {
            const targetUrl = getChapterTargetUrl(shlokaData.chapter, shlokaData.verse, activeLang);
            window.location.href = targetUrl;
        };

        // Ask AI Button Action
        aiBtn.onclick = () => {
            modal.classList.remove('active');

            // Immediately dismiss Universal Navigator Sheet (DIVYA SHLOKA DARSHINI) & any other modals
            document.querySelectorAll('.gita-nav-sheet-overlay, .gita-shloka-modal-overlay').forEach(el => {
                el.classList.remove('active');
            });

            const isTe = activeLang === 'te';
            const verseText = isTe ? (shlokaData.te || shlokaData.sanskrit) : (shlokaData.en || shlokaData.sanskrit);
            const prompt = isTe
                ? `భగవద్గీత అధ్యాయం ${shlokaData.chapter}, శ్లోకం ${shlokaData.verse} భావం & వివరణ: "${verseText || ''}"`
                : `Explain Bhagavad Gita Chapter ${shlokaData.chapter}, Verse ${shlokaData.verse} in simple words with practical daily guidance: "${verseText || ''}"`;

            if (window.GitaAssistant && typeof window.GitaAssistant.openWithPrompt === 'function') {
                window.GitaAssistant.openWithPrompt(prompt, shlokaData.chapter, activeLang);
            } else if (window.GitaAssistant && typeof window.GitaAssistant.askAIAboutSpecificVerse === 'function') {
                window.GitaAssistant.askAIAboutSpecificVerse(shlokaData.chapter, shlokaData.verse, shlokaData.verse, verseText);
            } else {
                // If on a page without Gita AI (such as entry.html), save prompt and navigate
                try {
                    sessionStorage.setItem('gita_pending_prompt', prompt);
                    sessionStorage.setItem('gita_pending_chapter', String(shlokaData.chapter));
                    sessionStorage.setItem('gita_pending_lang', activeLang);
                } catch (err) {}
                const targetPage = isTe ? 'telugu.html' : 'page1.html';
                window.location.href = targetPage;
            }
        };

        // Copy Button
        copyBtn.onclick = () => {
            const fullText = `🪷 Bhagavad Gita ${shlokaData.chapter}.${shlokaData.verse}\n\n${shlokaData.sanskrit}\n\nEnglish: ${shlokaData.en}\n\nతెలుగు: ${shlokaData.te}`;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(fullText).then(() => {
                    showToast('Sacred Shloka copied to clipboard!', '📋');
                });
            }
        };

        modal.classList.add('active');
        document.body.classList.add('gita-shloka-open');
        const launcher = document.getElementById('gitaChatLauncher');
        if (launcher) launcher.style.setProperty('display', 'none', 'important');
    }

    // =========================================================================
    // 6. UNIVERSAL FLOATING PILL BUTTON ("≡ Quick Verse Navigator")
    // =========================================================================
    function initFloatingVerseNavigator() {
        // STRICT RULE: Never display on entry.html or index.html
        const path = window.location.pathname.toLowerCase();
        if (path.endsWith('entry.html') || path.endsWith('index.html') || path.endsWith('/') || path === '' || path.endsWith('bhagavad-gita-main')) {
            return;
        }

        if (document.getElementById('gitaNavFloatingFab')) return;

        const fab = document.createElement('div');
        fab.id = 'gitaNavFloatingFab';
        fab.className = 'gita-nav-floating-fab';
        fab.setAttribute('role', 'button');
        fab.setAttribute('tabindex', '0');
        fab.setAttribute('aria-label', 'Open Verse Quick Jump Navigator');
        fab.innerHTML = `
            <div class="fab-inner">
                <span class="fab-lotus">🪷</span>
                <span class="fab-lines">≡</span>
                <span class="fab-label">Verse Navigator</span>
                <span class="fab-pulse-ring"></span>
            </div>
        `;
        document.body.appendChild(fab);

        fab.addEventListener('click', () => {
            openUniversalNavigatorSheet();
        });
    }

    // =========================================================================
    // 7. UNIVERSAL SLIDE-UP NAVIGATOR SHEET / MODAL (FOR ALL PAGES)
    // =========================================================================
    function openUniversalNavigatorSheet() {
        let sheet = document.getElementById('gitaUniversalNavSheet');
        if (!sheet) {
            sheet = document.createElement('div');
            sheet.id = 'gitaUniversalNavSheet';
            sheet.className = 'gita-nav-sheet-overlay';
            sheet.innerHTML = `
                <div class="gita-nav-sheet">
                    <div class="sheet-drag-handle"></div>
                    <button class="sheet-close-btn" id="gnsCloseBtn">✕</button>

                    <div class="sheet-header">
                        <div class="sheet-badge">✨ DIVYA SHLOKA DARSHINI ✨</div>
                        <h2 class="sheet-title">Quick Jump to Any Verse</h2>
                        <p class="sheet-subtitle">Select any of the 18 chapters and 700 verses with instant reading & audio.</p>
                    </div>

                    <div class="sheet-controls-bar">
                        <div class="sheet-select-wrap">
                            <label for="gnsChapterSelect">Chapter</label>
                            <select id="gnsChapterSelect" class="gita-custom-select"></select>
                        </div>
                        <div class="sheet-select-wrap">
                            <label for="gnsVerseSelect">Verse</label>
                            <select id="gnsVerseSelect" class="gita-custom-select"></select>
                        </div>
                        <div class="sheet-lang-switch">
                            <label class="gita-lang-chip"><input type="radio" name="gnsLang" value="en" checked><span>English</span></label>
                            <label class="gita-lang-chip"><input type="radio" name="gnsLang" value="te"><span>తెలుగు</span></label>
                        </div>
                    </div>

                    <div class="sheet-jump-actions">
                        <button type="button" class="sheet-btn-go" id="gnsGoBtn">
                            <span class="btn-feather-icon">🪶</span>
                            <span class="btn-text">Read Shloka</span>
                            <span class="btn-arrow">➔</span>
                        </button>
                        <button type="button" class="sheet-btn-oracle" id="gnsOracleBtn" title="Reveal Random Sacred Wisdom Shloka">
                            <span class="oracle-icon">🎲</span>
                            <span class="oracle-text">Divine Shloka of the Day</span>
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(sheet);

            // Close sheet handler
            const closeSheet = () => {
                sheet.classList.remove('active');
                document.body.classList.remove('gita-nav-sheet-open');
                const launcher = document.getElementById('gitaChatLauncher');
                if (launcher && !document.body.classList.contains('gita-chat-active') && !document.body.classList.contains('gita-voice-active') && !document.body.classList.contains('gita-shloka-open')) {
                    launcher.style.removeProperty('display');
                }
            };

            // Event bindings
            document.getElementById('gnsCloseBtn').onclick = closeSheet;
            sheet.onclick = (e) => { if (e.target === sheet) closeSheet(); };

            // Populate Chapters
            const chapSelect = document.getElementById('gnsChapterSelect');
            const verseSelect = document.getElementById('gnsVerseSelect');
            const goBtn = document.getElementById('gnsGoBtn');
            const oracleBtn = document.getElementById('gnsOracleBtn');

            for (let i = 1; i <= 18; i++) {
                const c = GITA_CHAPTERS[i];
                const opt = document.createElement('option');
                opt.value = i;
                opt.textContent = `Chapter ${i}: ${c.title_en} (${c.verses} Verses)`;
                chapSelect.appendChild(opt);
            }

            function updateVersesForChapter(chNum) {
                const c = GITA_CHAPTERS[chNum];
                verseSelect.innerHTML = '';

                for (let v = 1; v <= c.verses; v++) {
                    const opt = document.createElement('option');
                    opt.value = v;
                    opt.textContent = `Verse ${v}`;
                    verseSelect.appendChild(opt);
                }
            }

            chapSelect.onchange = () => {
                updateVersesForChapter(chapSelect.value);
            };

            goBtn.onclick = () => {
                closeSheet();
                const ch = chapSelect.value;
                const v = verseSelect.value;
                const lang = document.querySelector('input[name="gnsLang"]:checked')?.value || 'en';
                const url = getChapterTargetUrl(ch, v, lang);
                window.location.href = url;
            };

            oracleBtn.onclick = () => {
                closeSheet();
                const randShloka = LANDMARK_SHLOKAS[Math.floor(Math.random() * LANDMARK_SHLOKAS.length)];
                const lang = document.querySelector('input[name="gnsLang"]:checked')?.value || 'en';
                openShlokaModal(randShloka, lang);
                showToast(`Divine Shloka of the Day: Gita ${randShloka.chapter}.${randShloka.verse}`, '✨');
            };

            // Initial load
            updateVersesForChapter(1);
        }

        sheet.classList.add('active');
        document.body.classList.add('gita-nav-sheet-open');
        const launcher = document.getElementById('gitaChatLauncher');
        if (launcher) launcher.style.setProperty('display', 'none', 'important');
    }

    // =========================================================================
    // 8. EMBEDDED SECTION CONTROLLER (FOR page1.html, telugu.html, etc.)
    // =========================================================================
    function initEmbeddedNavigatorSection() {
        // STRICT RULE: Never display on entry.html or index.html
        const path = window.location.pathname.toLowerCase();
        if (path.endsWith('entry.html') || path.endsWith('index.html') || path.endsWith('/') || path === '' || path.endsWith('bhagavad-gita-main')) {
            return;
        }

        const mount = document.getElementById('gitaQuickJumpSection');
        if (!mount) return;

        mount.innerHTML = `
            <div class="gita-nav-section-container">
                <!-- Celestial Section Title Header -->
                <div class="gita-nav-hero-header">
                    <div class="gita-badge-celestial">✨ DIVYA SHLOKA DARSHINI • దివ్య గీతా శ్లోక నిలయం ✨</div>
                    <h2 class="gita-nav-title">Quick Jump to Any Verse</h2>
                    <p class="gita-nav-desc">Explore all 18 chapters and 700 verses of the Bhagavad Gita with sacred Sanskrit shlokas, English and Telugu commentaries, and instant audio reading.</p>
                </div>

                <!-- Dual Card Layout: 1. Quick Jump Hub | 2. Dynamic Chapter & Verse Grid -->
                <div class="gita-nav-cards-grid">
                    
                    <!-- CARD 1: Quick Jump Form + Divine Oracle Card -->
                    <div class="gita-nav-card gita-jump-form-card">
                        <div class="card-aura-glow"></div>
                        
                        <div class="jump-card-art">
                            <!-- Sacred Book with Peacock Feather Illustration -->
                            <svg class="sacred-feather-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 8C35 25 25 45 30 65C32 73 38 80 46 82C55 84 63 78 65 70C68 55 58 35 50 8Z" stroke="#e6a817" stroke-width="2.2" stroke-linecap="round" fill="url(#featherGoldGrad)"/>
                                <circle cx="48" cy="52" r="14" fill="#0f3460" stroke="#fce080" stroke-width="1.8"/>
                                <circle cx="48" cy="52" r="8" fill="#1b9aaa" stroke="#ffe37d" stroke-width="1.5"/>
                                <circle cx="48" cy="52" r="4" fill="#e6a817"/>
                                <path d="M48 52 C50 68 45 82 40 92" stroke="#e6a817" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M22 84 C35 78 65 78 78 84" stroke="#fce080" stroke-width="2" stroke-linecap="round"/>
                                <path d="M20 89 C35 83 65 83 80 89" stroke="#b8860b" stroke-width="1.8" stroke-linecap="round"/>
                                <defs>
                                    <linearGradient id="featherGoldGrad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.3"/>
                                        <stop offset="50%" stop-color="#e6a817" stop-opacity="0.15"/>
                                        <stop offset="100%" stop-color="#050508" stop-opacity="0.8"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h3 class="jump-card-title">Select Chapter & Verse</h3>
                        </div>

                        <!-- Dropdowns Group (Custom Clean Dropdowns - Completely Hidden Scrollbars) -->
                        <div class="jump-form-group">
                            <div class="gita-input-wrap">
                                <label class="gita-field-label" id="homeChapterLabel">Select Chapter</label>
                                <div class="gita-custom-select-wrap" id="homeChapterWrap">
                                    <div class="gita-custom-select-trigger" id="homeChapterTrigger" tabindex="0" role="button">
                                        <span class="trigger-text" id="homeChapterTriggerText">Chapter 1: Arjuna Viṣhād Yoga (47 Verses)</span>
                                        <span class="select-chevron">▼</span>
                                    </div>
                                    <div class="gita-custom-dropdown-menu" id="homeChapterMenu"></div>
                                    <select id="homeChapterSelect" style="display:none;"></select>
                                </div>
                            </div>

                            <div class="gita-input-wrap">
                                <label class="gita-field-label" id="homeVerseLabel">Select Verse Number</label>
                                <div class="gita-custom-select-wrap" id="homeVerseWrap">
                                    <div class="gita-custom-select-trigger" id="homeVerseTrigger" tabindex="0" role="button">
                                        <span class="trigger-text" id="homeVerseTriggerText">Verse 1</span>
                                        <span class="select-chevron">▼</span>
                                    </div>
                                    <div class="gita-custom-dropdown-menu" id="homeVerseMenu"></div>
                                    <select id="homeVerseSelect" style="display:none;"></select>
                                </div>
                            </div>
                        </div>

                        <!-- Language Switcher -->
                        <div class="jump-lang-row">
                            <span class="jump-lang-label">Reading Language:</span>
                            <div class="jump-lang-options">
                                <label class="gita-radio-label">
                                    <input type="radio" name="homeLang" value="en" checked>
                                    <span class="radio-custom-pill"><span class="gita-lang-flag">🇬🇧 </span>English</span>
                                </label>
                                <label class="gita-radio-label">
                                    <input type="radio" name="homeLang" value="te">
                                    <span class="radio-custom-pill"><span class="gita-lang-flag">🇮🇳 </span>తెలుగు</span>
                                </label>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="jump-buttons-stack">
                            <button type="button" class="btn-gita-jump-primary" id="homeStartReadingBtn">
                                <span class="btn-text">Start Reading Shloka</span>
                                <span class="btn-arrow">➔</span>
                            </button>
                            <button type="button" class="btn-gita-jump-oracle" id="homeOracleBtn">
                                <span class="btn-sparkle">✦</span>
                                <span class="btn-text">Divine Shloka of the Day</span>
                                <span class="btn-dice">🎲</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        `;

        // References
        const chSelect = document.getElementById('homeChapterSelect');
        const vSelect = document.getElementById('homeVerseSelect');
        const chWrap = document.getElementById('homeChapterWrap');
        const vWrap = document.getElementById('homeVerseWrap');
        const chTrigger = document.getElementById('homeChapterTrigger');
        const vTrigger = document.getElementById('homeVerseTrigger');
        const chText = document.getElementById('homeChapterTriggerText');
        const vText = document.getElementById('homeVerseTriggerText');
        const chMenu = document.getElementById('homeChapterMenu');
        const vMenu = document.getElementById('homeVerseMenu');
        const startBtn = document.getElementById('homeStartReadingBtn');
        const oracleBtn = document.getElementById('homeOracleBtn');

        // Toggle custom dropdowns
        chTrigger.onclick = (e) => {
            e.stopPropagation();
            vWrap.classList.remove('open');
            chWrap.classList.toggle('open');
        };

        vTrigger.onclick = (e) => {
            e.stopPropagation();
            chWrap.classList.remove('open');
            vWrap.classList.toggle('open');
        };

        document.addEventListener('click', () => {
            chWrap.classList.remove('open');
            vWrap.classList.remove('open');
        });

        // Populate Chapter Custom Dropdown
        for (let i = 1; i <= 18; i++) {
            const chap = GITA_CHAPTERS[i];
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = `Chapter ${i}: ${chap.title_en} (${chap.verses} Verses)`;
            chSelect.appendChild(opt);

            const item = document.createElement('div');
            item.className = `gita-custom-dropdown-item ${i === 1 ? 'selected' : ''}`;
            item.textContent = `Chapter ${i}: ${chap.title_en} (${chap.verses} Verses)`;
            item.onclick = (e) => {
                e.stopPropagation();
                chSelect.value = i;
                chText.textContent = item.textContent;
                chMenu.querySelectorAll('.gita-custom-dropdown-item').forEach(it => it.classList.remove('selected'));
                item.classList.add('selected');
                chWrap.classList.remove('open');
                populateVersesForChapter(i);
            };
            chMenu.appendChild(item);
        }

        function populateVersesForChapter(chNum) {
            const c = GITA_CHAPTERS[chNum];
            vSelect.innerHTML = '';
            vMenu.innerHTML = '';
            vSelect.value = 1;
            vText.textContent = 'Verse 1';

            for (let v = 1; v <= c.verses; v++) {
                const opt = document.createElement('option');
                opt.value = v;
                opt.textContent = `Verse ${v}`;
                vSelect.appendChild(opt);

                const item = document.createElement('div');
                item.className = `gita-custom-dropdown-item ${v === 1 ? 'selected' : ''}`;
                item.textContent = `Verse ${v}`;
                item.onclick = (e) => {
                    e.stopPropagation();
                    vSelect.value = v;
                    vText.textContent = `Verse ${v}`;
                    vMenu.querySelectorAll('.gita-custom-dropdown-item').forEach(it => it.classList.remove('selected'));
                    item.classList.add('selected');
                    vWrap.classList.remove('open');
                };
                vMenu.appendChild(item);
            }
        }

        startBtn.onclick = () => {
            const ch = chSelect.value;
            const v = vSelect.value;
            const lang = document.querySelector('input[name="homeLang"]:checked')?.value || 'en';
            const url = getChapterTargetUrl(ch, v, lang);
            window.location.href = url;
        };

        oracleBtn.onclick = () => {
            const randShloka = LANDMARK_SHLOKAS[Math.floor(Math.random() * LANDMARK_SHLOKAS.length)];
            const lang = document.querySelector('input[name="homeLang"]:checked')?.value || 'en';
            openShlokaModal(randShloka, lang);
            showToast(`Divine Shloka Revealed: Gita ${randShloka.chapter}.${randShloka.verse}`, '✨');
        };

        // Initial render for chapter 1
        populateVersesForChapter(1);
    }

    // =========================================================================
    // 9. AUTOMATIC INITIALIZATION ON DOM READY
    // =========================================================================
    function init() {
        // 1. Deep linking & verse highlight on reading pages
        initInPageVerseDeepLinking();

        // 2. Universal floating pill button (accessible on any page)
        initFloatingVerseNavigator();

        // 3. Embedded section (on page1.html, telugu.html, etc., never on entry or index)
        initEmbeddedNavigatorSection();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Universal Offline Service Worker Registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').catch(() => {});
        });
    }

    // Export global interface for programmatic access
    window.GitaNavigator = {
        openSheet: openUniversalNavigatorSheet,
        openShlokaModal: openShlokaModal,
        chapters: GITA_CHAPTERS,
        landmarkShlokas: LANDMARK_SHLOKAS,
        getUrl: getChapterTargetUrl
    };

})();
