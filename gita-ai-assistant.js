/**
 * BHAGAVAD GITA AI CONVERSATIONAL & SPIRITUAL REASONING ASSISTANT
 * Real-time intelligent natural language processing, dual-layer AI integration,
 * Sanskrit verses, authentic multilingual Telugu & English wisdom, and voice chat.
 */

(function() {
    'use strict';

    // =========================================================================
    // 1. COMPREHENSIVE GITA KNOWLEDGE BASE (ALL 18 CHAPTERS & THEMES)
    // =========================================================================
    const GITA_KNOWLEDGE = {
        chapters: {
            1: {
                number: 1,
                title: "Arjuna Viṣhāda Yoga",
                teluguTitle: "అర్జున విషాద యోగము",
                hindiTitle: "अर्जुन विषाद योग",
                sanskritTitle: "अर्जुनविषादयोगः",
                verses: 47,
                theme: "The Yoga of Arjuna's Despair & Grief",
                summary_en: "On the battlefield of Kurukshetra, Arjuna sees his revered gurus (Drona, Kripa), beloved grandfather Bhishma, brothers, and kinsmen standing ready for mutual slaughter. Overcome by intense compassion, grief, and moral confusion, Arjuna's limbs tremble, his bow Gandiva slips from his hand, and he collapses in his chariot, refusing to fight.",
                summary_te: "కురుక్షేత్ర రణరంగంలో ఇరుపక్షాల సైన్యాలను చూసిన అర్జునుడు, తన పూజ్య గురువులు, తాతగారైన భీష్ముడు, బంధుమిత్రులను చంపడానికి మనసొప్పక తీవ్ర శోకమోహాలలో మునిగిపోయాడు. అతని గాండీవ ధనుస్సు చేతినుండి జారిపడింది; రథంలో కూలబడి యుద్ధం చేయనని విలపించాడు.",
                summary_hi: "कुरुक्षेत्र के मैदान में दोनों सेनाओं में अपने गुरुओं, भीष्म पितामह और सगे-संबंधियों को देखकर अर्जुन मोह और शोक से व्याकुल होकर धनुष-बाण त्याग कर रथ में बैठ जाते हैं।",
                capsule_1min_en: "Facing his own family on the battlefield, Arjuna collapses in grief, setting the stage for Lord Krishna's divine wisdom on duty, immortality, and righteousness.",
                capsule_1min_te: "బంధువులపై మోహంతో అర్జునుడు యుద్ధరంగంలో శోకసంద్రంలో మునిగిపోగా, శ్రీకృష్ణుని గీతోపదేశానికి మార్గం సుగమమైంది.",
                key_verse: {
                    sanskrit: "सीदन्ति मम गात्राणि मुखं च परिशुष्यति । वेपथुश्च शरीरे मे रोमहर्षश्च जायते ॥ १.२९ ॥",
                    transliteration: "sīdanti mama gātrāṇi mukhaṁ ca pariśuṣyati | vepathuś ca śarīre me roma-harṣaś ca jāyate || 1.29 ||",
                    meaning_en: "My limbs fail and my mouth is parched, my body trembles and my hair stands on end.",
                    meaning_te: "నా అవయవములు పట్టు తప్పుచున్నవి, నోరు ఎండిపోవుచున్నది, శరీరము వణకుచున్నది, రోమాంచము కలుగుచున్నది."
                },
                krishna_advice: "Do not surrender to unmanly weakness; arise with valor and uphold righteousness.",
                krishna_advice_te: "హృదయ దౌర్బల్యాన్ని వీడి, లేచి ధర్మ రక్షణకై నిలబడుము.",
                life_lesson: "When attachments cloud your judgment, pause and seek higher spiritual wisdom before making fateful decisions.",
                life_lesson_te: "అతిగా ఉన్న మోహం కళ్లను మూస్తుంది; క్లిష్ట సమయాల్లో వివేకంతో ధర్మమార్గాన్ని ఎంచుకోవాలి."
            },
            2: {
                number: 2,
                title: "Sānkhya Yoga",
                teluguTitle: "సాంఖ్య యోగము",
                hindiTitle: "सांख्य योग",
                sanskritTitle: "साङ्ख्ययोगः",
                verses: 72,
                theme: "The Yoga of Eternal Knowledge & Karma Yoga Foundation",
                summary_en: "The philosophical essence of the entire Gita. Krishna reveals the eternal, indestructible nature of the Soul (Atman) which never dies. He introduces Karma Yoga—performing your prescribed duty without attachment to the results—and describes the serene characteristics of a Sthitaprajna (a person of steady, enlightened wisdom).",
                summary_te: "భగవద్గీత యొక్క సమగ్ర సారాంశం. ఆత్మ నిత్యమైనది, అమరమైనది, శరీరమే నశిస్తుంది. ఫలితంపై ఆశ లేకుండా కర్తవ్యాన్ని నిర్వహించే 'నిష్కామ కర్మ యోగం' మరియు సుఖదుఃఖాలలో చలించని 'స్థితప్రజ్ఞుని' లక్షణాలను శ్రీకృష్ణుడు అద్భుతంగా వివరించాడు.",
                summary_hi: "आत्मा अजर-अमर और अविनाशी है, केवल शरीर मरता है। निष्काम कर्मयोग का सिद्धांत और समत्व भाव में स्थित 'स्थितप्रज्ञ' के दिव्य लक्षण।",
                capsule_1min_en: "You are the immortal soul, not the perishable body. Focus 100% on your action right now without obsessing over the outcome (2.47). Stay steady in joy and sorrow.",
                capsule_1min_te: "నీవు శాశ్వతమైన ఆత్మవు, నశించే దేహానివి కావు. ఫలితంపై ఆశ వీడి ప్రస్తుత కర్తవ్యాన్ని మనస్ఫూర్తిగా చెయ్యి. సుఖదుఃఖాలలో సమచిత్తంతో ఉండు.",
                key_verse: {
                    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ २.४७ ॥",
                    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi || 2.47 ||",
                    meaning_en: "You have a right only to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of results, nor be attached to inaction.",
                    meaning_te: "కర్మలను చేయుటయందే నీకు అధికారము కలదు కాని, వాని ఫలితములపై ఎన్నడూ లేదు. కర్మఫలమునకు నీవు కారణము కాకూడదు; అట్లే కర్మలను చేయకుండుటయందును నీకు ఆసక్తి ఉండరాదు."
                },
                krishna_advice: "Perform your duty with equanimity. Equanimity of mind in success and failure is called Yoga.",
                krishna_advice_te: "సిద్ధ్యసిద్ధుల యందు సమబుద్ధి కలిగి కర్మలను ఆచరించుము; సమత్వమే యోగము అనబడును.",
                life_lesson: "Detach your identity and self-worth from external outcomes. Master your mind to stay calm in all tides of life.",
                life_lesson_te: "ఫలితాల భయం వీడి పనిపై దృష్టి పెట్టు; సుఖదుఃఖాలలో ప్రశాంతంగా ఉండే సమత్వమే అసలైన విజయం."
            },
            3: {
                number: 3,
                title: "Karma Yoga",
                teluguTitle: "కర్మ యోగము",
                hindiTitle: "कर्म योग",
                sanskritTitle: "कर्मयोगः",
                verses: 43,
                theme: "The Yoga of Dedicated & Selfless Action",
                summary_en: "Krishna teaches that no one can remain actionless even for a moment. Instead of renouncing action, one should renounce selfish desire. Action performed as a sacred offering (Yajna) for the welfare of the world (Lokasangraha) purifies the mind. Beware of Lust and Anger, the greatest enemies of wisdom.",
                summary_te: "ఎవరూ క్షణకాలం కూడా కర్మ చేయకుండా ఉండలేరు. కర్మలను విడిచిపెట్టడం కన్నా, నిస్వార్థ భావంతో లోకకల్యాణం (లోకసంగ్రహం) కొరకు కర్మలు చేయడమే శ్రేష్ఠం. కోరిక మరియు క్రోధమే జ్ఞానానికి ప్రధాన శత్రువులు.",
                summary_hi: "कर्म संन्यास से श्रेष्ठ निष्काम कर्मयोग है। लोक-कल्याण की भावना से कर्म करना ही सच्चा यज्ञ है। काम और क्रोध आत्मा के सबसे बड़े वैरी हैं।",
                capsule_1min_en: "Action is inevitable; selfishness is optional. Work as a sacred offering to the world, set a noble example for others, and conquer the dual traps of greed and anger.",
                capsule_1min_te: "కర్మ చేయడం అనివార్యం. సమాజ హితం కోసం నిస్వార్థంగా పనిచేస్తూ ఇతరులకు ఆదర్శంగా నిలవండి. కామ క్రోధాలను జయించండి.",
                key_verse: {
                    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् । स्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥ ३.३५ ॥",
                    transliteration: "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt | sva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ || 3.35 ||",
                    meaning_en: "It is far better to perform one's own natural duty, even though imperfectly, than to perform another's duty perfectly. Destruction in the course of one's own duty is better than engaging in another's, which is fraught with danger.",
                    meaning_te: "చక్కగా ఆచరించిన పరధర్మము కంటే గుణహీనమైనను స్వధర్మమే శ్రేష్ఠము. స్వధర్మమునందు మరణమైనను శ్రేయస్కరము, పరధర్మము భయానకమైనది."
                },
                krishna_advice: "Control your senses from the very beginning and slay this sinful destroyer of knowledge and self-realization: desire.",
                krishna_advice_te: "ఇంద్రియాలను అదుపులో ఉంచి, జ్ఞాన విజ్ఞానాలను నాశనం చేసే కామాన్ని జయించుము.",
                life_lesson: "Do not blindly copy others' lives. Discover your own authentic path and execute it with integrity and excellence.",
                life_lesson_te: "ఇతరులను అనుకరించడం మానేసి, మీ సహజ నైపుణ్యాలకు తగిన స్వధర్మాన్ని నిష్ఠతో నిర్వర్తించండి."
            },
            4: {
                number: 4,
                title: "Jñāna Karma Sanyāsa Yoga",
                teluguTitle: "జ్ఞాన కర్మ సంన్యాస యోగము",
                hindiTitle: "ज्ञान कर्म संन्यास योग",
                sanskritTitle: "ज्ञानकर्मसंन्यासयोगः",
                verses: 42,
                theme: "The Yoga of Wisdom, Divine Incarnation & Sacrificial Action",
                summary_en: "Krishna reveals His divine purpose of incarnation: to protect the virtuous, destroy wickedness, and re-establish righteousness age after age. He explains the secret of seeing action in inaction and inaction in action. Transcendental knowledge is the supreme purifier that burns away all karmic reactions like a blazing fire.",
                summary_te: "శ్రీకృష్ణుని అవతార రహస్యం: సాధువుల రక్షణ, దుష్టుల శిక్షణ, ధర్మ సంస్థాపనార్థం యుగయుగాలలో పరమాత్ముడు అవతరిస్తాడు. జ్ఞానాగ్ని సమస్త పాపకర్మలను భస్మం చేస్తుంది. శ్రద్ధ కలవానికే దివ్యజ్ఞానం, శాశ్వత శాంతి లభిస్తాయి.",
                summary_hi: "भगवान श्रीकृष्ण का अवतार रहस्य: 'यदा यदा हि धर्मस्य...'। ज्ञानाग्नि सभी कर्म-बंधनों को भस्म कर देती है। श्रद्धावान को ही परम ज्ञान प्राप्त होता है।",
                capsule_1min_en: "Whenever righteousness declines, the Divine manifests. Sacred wisdom is the greatest purifier on earth; with faith and disciplined senses, supreme peace is attained.",
                capsule_1min_te: "ధర్మ రక్షణ కోసం భగవంతుడు అవతరిస్తాడు. జ్ఞానాగ్నితో సమస్త సందేహాలను ఛేదించండి; శ్రద్ధావాన్ లభతే జ్ఞానమ్.",
                key_verse: {
                    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत । अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥ ४.७ ॥",
                    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham || 4.7 ||",
                    meaning_en: "Whenever and wherever there is a decline in righteousness, O descendant of Bharata, and a predominant rise of unrighteousness—at that time I manifest Myself.",
                    meaning_te: "ఓ భరతవంశీయుడా! ఎప్పుడెప్పుడు ధర్మమునకు హాని కలుగునో, అధర్మము వృద్ధి పొందునో, అప్పుడు నన్ను నేను సృజించుకొందును."
                },
                krishna_advice: "Slash the doubts of your heart with the sword of spiritual knowledge. Arise and perform your duty!",
                krishna_advice_te: "అజ్ఞానం వల్ల పుట్టిన సంశయాలను జ్ఞానమనే ఖడ్గంతో ఛేదించి, యోగస్థుడవై లేచి నిలబడుము.",
                life_lesson: "Doubt destroys inner peace and confidence. Cultivate deep knowledge and unwavering faith to navigate life's challenges.",
                life_lesson_te: "సంశయం మనిషిని పతనం చేస్తుంది; నిరంతర జ్ఞానార్జన, శ్రద్ధ ద్వారా మనశ్శాంతిని సాధించండి."
            },
            5: {
                number: 5,
                title: "Karma Sanyāsa Yoga",
                teluguTitle: "కర్మ సంన్యాస యోగము",
                hindiTitle: "कर्म संन्यास योग",
                sanskritTitle: "कर्मसंन्यासयोगः",
                verses: 29,
                theme: "The Yoga of True Renunciation",
                summary_en: "Outward renunciation of action is difficult and sorrowful without Karma Yoga. The wise person acts in the world like a lotus leaf in water—completely untouched by sin or attachment because all deeds are dedicated to God. Experiencing the Divine everywhere brings eternal liberation.",
                summary_te: "కర్మలను పూర్తిగా విడిచిపెట్టడం కన్నా నిష్కామ కర్మ చేయడం సులభం మరియు శ్రేష్ఠం. తామరాకుపై నీటిబొట్టు అంటనట్లే, ఈశ్వరార్పణ బుద్ధితో పనిచేసే సాధకుడిని ఏ పాపమూ అంటదు. సర్వభూతాలలో సమదృష్టిని కలిగి ఉండటమే బ్రహ్మ నిర్వాణం.",
                summary_hi: "कर्मयोग के बिना संन्यास दुखदायी है। जो ईश्वर को कर्म अर्पित करता है, वह जल में कमल-पत्र की भांति पाप से अलिप्त रहता है।",
                capsule_1min_en: "Live like a lotus in water—fully engaged in the world, yet untouched by its mud. Dedicate your actions to God and enjoy unshakable inner freedom.",
                capsule_1min_te: "తామరాకుపై నీటిబొట్టులా ప్రపంచంలో ఉంటూనే నిర్లిప్తంగా జీవించండి. కర్మలన్నింటినీ దైవానికి సమర్పించి ప్రశాంతతను పొందండి.",
                key_verse: {
                    sanskrit: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः । लिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥ ५.१० ॥",
                    transliteration: "brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ | lipyate na sa pāpena padma-patram ivāmbhasā || 5.10 ||",
                    meaning_en: "One who performs duties dedicating all actions to the Supreme, abandoning all attachment, is untouched by sin, just as a lotus leaf is untouched by water.",
                    meaning_te: "ఫలాపేక్షను విడిచి, కర్మలను బ్రహ్మార్పణముగా చేయువానిని, తామరాకును నీరు అంటనట్లు ఏ పాపమును అంటదు."
                },
                krishna_advice: "Dedicate your work to the Divine, let go of attachment to outcomes, and remain anchored in peace.",
                krishna_advice_te: "సమస్త కర్మలను పరమాత్మకు అర్పించి, అహంకారాన్ని వీడి నిశ్చల శాంతిని అనుభవించుము.",
                life_lesson: "True freedom is not running away from responsibilities; it is running your responsibilities with a detached, pure heart.",
                life_lesson_te: "బాధ్యతల నుండి పారిపోవడం విముక్తి కాదు; బాధ్యతలను స్వార్థం లేకుండా నిర్వర్తించడమే నిజమైన సన్యాసం."
            },
            6: {
                number: 6,
                title: "Dhyāna Yoga",
                teluguTitle: "ధ్యాన యోగము (ఆత్మసంయమ యోగము)",
                hindiTitle: "ध्यान योग",
                sanskritTitle: "आत्मसंयमयोगः",
                verses: 47,
                theme: "The Yoga of Meditation & Self-Control",
                summary_en: "The definitive guide to mastering the restless human mind through meditation. Krishna explains sitting posture, breath control, and dietary moderation. The mind is your greatest friend when conquered, and your worst enemy when uncontrolled. The turbulent mind is mastered through steady daily practice (Abhyasa) and detachment (Vairagya).",
                summary_te: "చంచలమైన మనస్సును అదుపులో ఉంచుకునే ధ్యాన పద్ధతి. మనస్సును జయించిన వానికి మనస్సే పరమ మిత్రుడు, జయించని వానికి మనస్సే బద్ధ శత్రువు. నిరంతర అభ్యాసం (సాధన), వైరాగ్యం (నిర్మమత) ద్వారా మాత్రమే మనస్సును వశం చేసుకోవచ్చు.",
                summary_hi: "मन को वश में करने की ध्यान-पद्धति। मन ही मित्र है और मन ही शत्रु। अभ्यास और वैराग्य से चंचल मन को शांत और एकाग्र किया जा सकता है।",
                capsule_1min_en: "Your mind is your best friend or worst enemy. Master it through daily meditation and non-attachment. A steady mind stays undisturbed like a flame in a windless room.",
                capsule_1min_te: "నిగ్రహించిన మనస్సు నీకు అత్యుత్తమ మిత్రుడు; నిగ్రహం లేని మనస్సు నీకు శత్రువు. రోజూ ధ్యానం, అభ్యాసం ద్వారా మనస్సును ప్రశాంతంగా ఉంచుకోండి.",
                key_verse: {
                    sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः । अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत् ॥ ६.६ ॥",
                    transliteration: "bandhur ātmātmanas tasya yenātmaivātmanā jitaḥ | anātmanas tu śatrutve vartetātmaiva śatru-vat || 6.6 ||",
                    meaning_en: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, the mind remains the greatest enemy.",
                    meaning_te: "ఎవరైతే తన మనస్సును జయించెనో అతనికి మనస్సే మిత్రుడు; మనస్సును జయించని వానికి అతని మనస్సే శత్రువువలె ప్రవర్తించును."
                },
                krishna_advice: "Undoubtedly the mind is restless and difficult to curb; but by constant practice and detachment, it can be mastered.",
                krishna_advice_te: "మనస్సు చంచలమైనదే అయినప్పటికీ, నిరంతర అభ్యాసము మరియు వైరాగ్యముల చేత అది తప్పక వశమగును.",
                life_lesson: "Do not let impulsive thoughts dictate your choices. Train your mind daily through mindfulness, healthy habits, and silence.",
                life_lesson_te: "క్షణికావేశాలకు లొంగిపోకండి; నిత్య ధ్యానం మరియు క్రమశిక్షణ ద్వారా మీ ఆలోచనలపై నియంత్రణ సాధించండి."
            },
            7: {
                number: 7,
                title: "Jñāna Vijñāna Yoga",
                teluguTitle: "జ్ఞాన విజ్ఞాన యోగము",
                hindiTitle: "ज्ञान विज्ञान योग",
                sanskritTitle: "ज्ञानविज्ञानयोगः",
                verses: 30,
                theme: "The Yoga of Knowledge & Ultimate Discernment",
                summary_en: "Krishna explains the material energy (Prakriti) and spiritual energy (Purusha). He is the taste in water, the radiance in the sun, the sound in ether, and the strength in the strong. The divine illusion of Maya composed of the three Gunas is difficult to overcome, but those who surrender exclusively unto Him cross over it effortlessly.",
                summary_te: "పరమాత్మ దివ్య విభూతుల వర్ణన: నీటిలోని రుచి, సూర్యచంద్రుల ప్రకాశం, ఆకాశంలోని శబ్దం, బలవంతునిలోని సాత్విక బలం కృష్ణుడే. త్రిగుణమయమైన భగవత్ మాయను దాటడం కష్టం, కాని భగవంతుని శరణువేడిన భక్తులు ఆ మాయను సులభంగా దాటగలరు.",
                summary_hi: "जल में रस, सूर्य-चंद्रमा में प्रभा और समस्त जीवों में जीवन श्रीकृष्ण ही हैं। उनकी त्रिगुणमयी 'माया' को केवल अनन्य शरणागति से ही पार किया जा सकता है।",
                capsule_1min_en: "God is the underlying essence of all beauty and energy in the universe. Surrender your heart to the Divine to easily transcend the illusions and anxieties of life.",
                capsule_1min_te: "సృష్టిలోని సమస్త శక్తి, సౌందర్యం భగవత్ స్వరూపమే. దైవ శరణాగతితో ప్రపంచ భ్రమలను, భయాలను సులభంగా దాటవచ్చు.",
                key_verse: {
                    sanskrit: "दैवी ह्येषा गुणमयी मम माया दुरत्यया । मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ॥ ७.१४ ॥",
                    transliteration: "daivī hy eṣā guṇa-mayī mama māyā duratyayā | mām eva ye prapadyante māyām etāṁ taranti te || 7.14 ||",
                    meaning_en: "This divine energy of Mine, consisting of the three gunas, is extremely difficult to overcome. But those who surrender unto Me easily cross beyond it.",
                    meaning_te: "త్రిగుణాత్మికయైన నా దివ్యమాయ దాటరానిది; కాని నన్ను మాత్రమే శరణుజొచ్చినవారు ఈ మాయను సులభముగా దాటెదరు."
                },
                krishna_advice: "Know Me as the eternal seed of all beings, the intelligence of the wise, and the brilliance of the radiant.",
                krishna_advice_te: "సమస్త ప్రాణులలోని నిత్య బీజాన్ని, బుద్ధిమంతుల బుద్ధిని, తేజస్వుల తేజాన్ని నేనే అని తెలుసుకొనుము.",
                life_lesson: "Look beyond surface appearances to appreciate the divine spark in every person, creature, and natural wonder.",
                life_lesson_te: "బాహ్య రూపాలను చూసి మోసపోకండి; ప్రతి జీవిలో, ప్రతి ప్రకృతి శక్తీలో ఉన్న దైవత్వాన్ని దర్శించండి."
            },
            8: {
                number: 8,
                title: "Akṣhara Brahma Yoga",
                teluguTitle: "అక్షర పరబ్రహ్మ యోగము",
                hindiTitle: "अक्षर ब्रह्म योग",
                sanskritTitle: "अक्षरब्रह्मयोगः",
                verses: 28,
                theme: "The Yoga of the Imperishable Absolute & Art of Dying",
                summary_en: "A profound discourse on life, cosmic creation, dissolution, and the supreme moment of death. Whatever one remembers at the moment of leaving the physical body, that state one achieves without fail. Therefore, remember the Supreme at all times while performing your prescribed duty, and you will attain the eternal realm beyond sorrow.",
                summary_te: "మరణ సమయ రహస్యం: దేహాన్ని వదిలే సమయంలో మనిషి ఏ భావాన్ని స్మరిస్తాడో ఆ గతిని పొందుతాడు. కాబట్టి ఎల్లవేళలా భగవత్ స్మరణ చేస్తూనే నీ కర్తవ్యాన్ని నిర్వహించుము. అక్షర పరబ్రహ్మను చేరిన జీవుడికి మళ్లీ ఈ దుఃఖభరిత సంసారంలో పునర్జన్మ ఉండదు.",
                summary_hi: "अंतिम समय में मनुष्य जिस भाव का स्मरण करता है, उसी गति को प्राप्त होता है। अतः सदा ईश्वर का स्मरण करते हुए अपना कर्तव्य करो।",
                capsule_1min_en: "Your final thoughts determine your next destination. Train your mind every single day through sacred remembrance so that you remain fearless and peaceful at the end.",
                capsule_1min_te: "మరణ సమయ స్మరణే పునర్జన్మను నిర్ణయిస్తుంది. నిత్యమూ దైవస్మరణతో కర్తవ్యాన్ని నిర్వహిస్తూ అమరత్వాన్ని సాధించండి.",
                key_verse: {
                    sanskrit: "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च । मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम् ॥ ८.७ ॥",
                    transliteration: "tasmāt sarveṣu kāleṣu mām anusmara yudhya ca | mayy arpita-mano-buddhir mām evaiṣyasy asaṁśayaḥ || 8.7 ||",
                    meaning_en: "Therefore, at all times remember Me and fight your battle. With your mind and intellect dedicated to Me, you will attain Me without doubt.",
                    meaning_te: "కాబట్టి సర్వకాలములయందును నన్ను స్మరించుము, యుద్ధమును చేయుము. నాయందే మనస్సును, బుద్ధిని అర్పించినవాడవై నన్నే పొందెదవు, ఇందులో సంశయము లేదు."
                },
                krishna_advice: "Keep your mind and intellect surrendered to Me; perform your duties fearlessly and you will attain Me.",
                krishna_advice_te: "మనస్సును నాపై ఉంచి నీ కర్తవ్య యుద్ధాన్ని నిర్భయంగా చేయుము; నిశ్చయంగా నన్ను పొందగలవు.",
                life_lesson: "What you practice daily in life is what you will remember in crisis. Build empowering, spiritual habits today.",
                life_lesson_te: "రోజూ అలవరచుకున్న ఆలోచనలే ఆపత్కాలంలో గుర్తొస్తాయి; సదా పవిత్రమైన ఆలోచనలతో మనస్సును నింపుకోండి."
            },
            9: {
                number: 9,
                title: "Rāja Vidyā Rāja Guhya Yoga",
                teluguTitle: "రాజవిద్య రాజగుహ్య యోగము",
                hindiTitle: "राजविद्या राजगुह्य योग",
                sanskritTitle: "राजविद्याराजगुह्ययोगः",
                verses: 34,
                theme: "The Sovereign Science & King of Secrets",
                summary_en: "The supreme secret of devotion. Krishna is the father, mother, sustainer, and goal of all existence. To those who worship Him with undivided devotion, He personally carries what they lack and preserves what they have (Yoga-Kshema). Even the simplest offering—a leaf, flower, fruit, or water—given with love is joyfully accepted by God.",
                summary_te: "పరమ రహస్యమైన భక్తి తత్త్వం: సృష్టికర్త, తల్లి, తండ్రి, ఆశ్రయం శ్రీకృష్ణుడే. 'అనన్యాశ్చింతయంతో మాం...'—ఎవరైతే అనన్య భక్తితో నన్ను సేవిస్తారో వారి యోగక్షేమాలను నేనే స్వయంగా వహిస్తాను. ప్రేమతో సమర్పించిన ఆకు, పువ్వు, పండు, నీరు ఏదైనా భగవంతుడు స్వీకరిస్తాడు.",
                summary_hi: "परम गोपनीय ज्ञान: श्रीकृष्ण ही जगत के माता, पिता और धाता हैं। अनन्य भक्तों के योग-क्षेम (सुरक्षा और संवर्धन) का वहन स्वयं भगवान करते हैं।",
                capsule_1min_en: "God personally takes care of those who love Him unconditionally. Offer whatever you eat, work, or give as a loving gift to God, and walk through life completely protected.",
                capsule_1min_te: "భగవంతుని నమ్మిన భక్తుల యోగక్షేమాలను ఆయనే స్వయంగా చూసుకుంటాడు. పత్రం, పుష్పం, ఫలం, తోయం ఏదైనా ప్రేమతో సమర్పిస్తే భగవానుడు ప్రీతితో స్వీకరిస్తాడు.",
                key_verse: {
                    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते । तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥ ९.२२ ॥",
                    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate | teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham || 9.22 ||",
                    meaning_en: "To those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have.",
                    meaning_te: "ఎవరైతే అనన్యచింతనతో నన్ను ఉపాసింతురో, అట్టి నిత్యయుక్తుల యోగక్షేమములను నేనే స్వయముగా వహించుచున్నాను."
                },
                krishna_advice: "Whatever you do, whatever you eat, whatever you offer in sacrifice, give away in charity, or perform as austerity—do it as an offering unto Me.",
                krishna_advice_te: "నీవు చేయు కర్మలు, భుజించు ఆహారము, చేయు దానములు సర్వమూ నాకే అర్పణముగా చేయుము.",
                life_lesson: "Simplicity and genuine sincerity outweigh expensive rituals. Pure love is the only currency of the heart.",
                life_lesson_te: "ఆడంబరాల కంటే స్వచ్ఛమైన ప్రేమ, నిజాయితీ మిన్న; పవిత్ర హృదయంతో చేసిన ఏ చిన్న పనైనా దైవసమానమైనదే."
            },
            10: {
                number: 10,
                title: "Vibhūti Yoga",
                teluguTitle: "విభూతి యోగము",
                hindiTitle: "विभूति योग",
                sanskritTitle: "विभूतियोगः",
                verses: 42,
                theme: "The Yoga of Divine Glories & Cosmic Splendor",
                summary_en: "Krishna reveals His divine manifestations throughout creation. He is the Soul dwelling in all hearts, the beginning, middle, and end of all beings. Among luminaries He is the Sun, among rivers the Ganges, among mountains the Himalayas, among meters the Gayatri, and among seasons the blossoming Spring.",
                summary_te: "సమస్త సృష్టిలో పరమాత్ముని దివ్య విభూతుల దర్శనం: సమస్త ప్రాణుల హృదయంలోని ఆత్మ శ్రీకృష్ణుడే. తేజస్సులలో సూర్యుడు, నదులలో గంగ, పర్వతాలలో హిమాలయం, ఛందస్సులలో గాయత్రి, ఋతువులలో వసంతం, ధనుర్ధారులలో రాముడు పరమాత్మ స్వరూపమే.",
                summary_hi: "श्रीकृष्ण समस्त चराचर जगत के मूल हैं। वे नदियों में गंगा, पर्वतों में हिमालय, प्रकाशकों में सूर्य और सब प्राणियों के हृदय में स्थित आत्मा हैं।",
                capsule_1min_en: "Wherever you witness extraordinary brilliance, beauty, strength, or wisdom, know it to be a tiny spark of God's infinite cosmic glory.",
                capsule_1min_te: "సృష్టిలో ఎక్కడ సౌందర్యం, తేజస్సు, గొప్పదనం, శక్తి ఉన్నా అది పరమాత్మ దివ్య తేజస్సులోని ఒక చిన్న అంశయే అని తెలుసుకోండి.",
                key_verse: {
                    sanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा । तत्तदेवावगच्छ त्वं मम तेजोऽंशसम्भवम् ॥ १०.४१ ॥",
                    transliteration: "yad yad vibhūtimat sattvaṁ śrīmad ūrjitam eva vā | tat tad evāvagaccha tvaṁ mama tejo-'ṁśa-sambhavam || 10.41 ||",
                    meaning_en: "Whatever entity is glorious, prosperous, or powerful, understand that to be born of but a mere fraction of My divine splendor.",
                    meaning_te: "ఐశ్వర్యవంతమైనది, కాంతివంతమైనది, శక్తివంతమైనది ఏదేది కలదో, అవన్నియు నా తేజస్సుయొక్క అంశము నుండి పుట్టినవనియే గ్రహింపుము."
                },
                krishna_advice: "I am the Self seated in the hearts of all creatures. I am the origin, the middle, and the end of all existence.",
                krishna_advice_te: "సమస్త భూతముల హృదయమునందున్న ఆత్మను నేనే; సృష్టికి ఆది, మధ్య, అంతములు నేనే.",
                life_lesson: "Honor greatness and talent in others without jealousy, seeing it as the light of the Supreme shining through them.",
                life_lesson_te: "ఇతరులలోని ప్రతిభను, గొప్పదనాన్ని అసూయ లేకుండా గౌరవించండి; అది భగవత్ అనుగ్రహమేనని గుర్తించండి."
            },
            11: {
                number: 11,
                title: "Viśhwarūpa Darśhana Yoga",
                teluguTitle: "విశ్వరూప సందర్శన యోగము",
                hindiTitle: "विश्वरूप दर्शन योग",
                sanskritTitle: "विश्वरूपदर्शनयोगः",
                verses: 55,
                theme: "The Yoga of the Vision of the Universal Cosmic Form",
                summary_en: "The breathtaking climax of the Gita. Krishna bestows divine vision (*Divya Chakshu*) upon Arjuna to behold His infinite Universal Form (*Vishwaroopam*). Arjuna sees infinite cosmic mouths, radiant suns, planetary systems, gods, and all warriors rushing into the fiery jaws of Time. Overwhelmed with awe and trembling reverence, Arjuna bows down.",
                summary_te: "భగవద్గీత మహోన్నత శిఖరం: శ్రీకృష్ణుడు అర్జునునికి దివ్యదృష్టిని ప్రసాదించి తన అనంత విశ్వరూపాన్ని దర్శింపజేశాడు. కోట్యానుకోట్ల సూర్యుల తేజస్సు, సమస్త బ్రహ్మాండాలు, దేవతలు, కాలస్వరూపుడైన పరమాత్మలో లీనమయ్యే యోధుల దృశ్యాన్ని చూసి అర్జునుడు భయభక్తులతో నమస్కరించాడు.",
                summary_hi: "श्रीकृष्ण ने अर्जुन को दिव्य दृष्टि देकर अपना अनंत 'विश्वरूप' दिखाया। करोड़ों सूर्यों का तेज, समस्त ब्रह्मांड और काल-स्वरूप भगवान को देखकर अर्जुन स्तब्ध हो गए।",
                capsule_1min_en: "God is everything—the creator, sustainer, and all-consuming Time. Be a willing, humble instrument (*Nimitta-matram*) in the divine cosmic plan.",
                capsule_1min_te: "సమస్త సృష్టి, కాలం భగవత్ స్వరూపమే. అహంకారాన్ని వీడి దైవ సంకల్పంలో ఒక నిమిత్తమాత్రుడవై (సాధనంగా) నీ కర్తవ్యాన్ని నిర్వర్తించు.",
                key_verse: {
                    sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः । ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः ॥ ११.३२ ॥",
                    transliteration: "kālo 'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ | ṛte 'pi tvāṁ na bhaviṣyanti sarve ye 'vasthitāḥ pratyanīkeषु yodhāḥ || 11.32 ||",
                    meaning_en: "I am mighty Time, the great destroyer of worlds, emerged to annihilate all people. Even without your effort, none of the warriors assembled on the opposing side shall survive.",
                    meaning_te: "నేను లోకములను నాశనము చేయు ప్రవృద్ధమైన కాలమును. నీవు యుద్ధము చేయకున్నను శత్రు పక్షమందున్న యోధులెవ్వరును బ్రతుకరు."
                },
                krishna_advice: "Therefore arise and win glory! Conquer your enemies and enjoy an opulent kingdom. By Me alone are they already slain; be merely My instrument, O Arjuna!",
                krishna_advice_te: "కాబట్టి లేచి కీర్తిని పొందుము! శత్రువులను జయించి రాజ్యాన్ని అనుభవించుము. వీరందరూ నా చేత పూర్వమే చంపబడ్డారు; నీవు కేవలం నిమిత్తమాత్రుడవు కమ్ము.",
                life_lesson: "Life's grand destiny is governed by higher cosmic laws. Release your false pride, do your utmost best, and serve as a humble force for good.",
                life_lesson_te: "విధి బలీయమైనది; అహంకారాన్ని విడిచి సమాజ హితం కొరకు భగవంతుని చేతిలో ఒక పవిత్ర సాధనంగా మారి పనిచేయండి."
            },
            12: {
                number: 12,
                title: "Bhakti Yoga",
                teluguTitle: "భక్తి యోగము",
                hindiTitle: "भक्ति योग",
                sanskritTitle: "भक्तियोगः",
                verses: 20,
                theme: "The Yoga of Pure Loving Devotion",
                summary_en: "Arjuna asks whether worshipping the personal form of God or the formless unmanifest Absolute is superior. Krishna affirms that meditating on the personal loving form is the sweetest, easiest path for embodied souls. He lists the 35 divine virtues of a true devotee: free from hatred, compassionate, forgiving, friendly to all, and devoid of ego.",
                summary_te: "సాకార భక్తి మరియు నిరాకార ధ్యానాలలో భక్తియోగమే సులభమైనది, శ్రేష్ఠమైనది. భగవంతునికి అత్యంత ప్రియమైన భక్తుని దివ్య లక్షణాలు: ఎవరిపైనా ద్వేషం లేకపోవడం, అందరిపట్ల మైత్రి, దయ, అహంకారం లేకపోవడం, సుఖదుఃఖాలలో ఓర్పు కలిగి ఉండటం.",
                summary_hi: "साकार और अनन्य भक्त भगवान को अतिशय प्रिय हैं। जो द्वेषरहित, सबका मित्र, दयालु, निरहंकारी और सुख-दुःख में सम है, वही सच्चा भक्त है।",
                capsule_1min_en: "God treasures a humble, compassionate heart above all else. Free yourself from malice, cultivate goodwill toward every living being, and stay content in all circumstances.",
                capsule_1min_te: "ద్వేషం లేనివాడు, దయామయుడు, సమస్త ప్రాణుల పట్ల ప్రేమ గలవాడే నిజమైన భక్తుడు. అలాంటి భక్తుడే భగవంతునికి అత్యంత ప్రియమైనవాడు.",
                key_verse: {
                    sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च । निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥ १२.१३ ॥",
                    transliteration: "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca | nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī || 12.13 ||",
                    meaning_en: "One who is free from malice toward all beings, friendly, compassionate, free from possessiveness and false ego, poised in joy and sorrow, forgiving—such a devotee is dear to Me.",
                    meaning_te: "సమస్త ప్రాణులయందు ద్వేషము లేనివాడు, మైత్రి, దయ గలవాడు, మమకార అహంకారములు లేనివాడు, సుఖదుఃఖములయందు సమానుడు, క్షమాగుణము కలవాడు నాకు అత్యంత ప్రియమైనవాడు."
                },
                krishna_advice: "Fix your mind on Me alone, rest your intellect in Me. Thus you will live in Me hereafter without a doubt.",
                krishna_advice_te: "నాయందే మనస్సును లగ్నం చేయుము, నా యందే బుద్ధిని నిలుపుము; నిస్సందేహంగా నన్ను పొందగలవు.",
                life_lesson: "Harbor no resentment or grudge toward anyone. Treat every person with empathy, humility, and unconditional kindness.",
                life_lesson_te: "ఎవరిపైనా పగ, ద్వేషం పెంచుకోకండి; ప్రతి ఒక్కరినీ కరుణతో, వినయంతో, క్షమాగుణంతో ఆదరించండి."
            },
            13: {
                number: 13,
                title: "Kṣhetra Kṣhetrajña Vibhāga Yoga",
                teluguTitle: "క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగము",
                hindiTitle: "क्षेत्र-क्षेत्रज्ञ विभाग योग",
                sanskritTitle: "क्षेत्रक्षेत्रज्ञविभागयोगः",
                verses: 34,
                theme: "The Yoga of the Field & Knower of the Field",
                summary_en: "Krishna distinguishes between the physical body/nature (Kshetra - the Field) and the conscious Soul/God (Kshetrajna - the Knower of the Field). True wisdom is realizing that the imperishable Soul merely inhabits and witnesses the mortal body without being tainted by it.",
                summary_te: "శరీరము 'క్షేత్రము' (పొలం), శరీరంలోని ఆత్మ 'క్షేత్రజ్ఞుడు' (పొలాన్ని తెలిసినవాడు). నశించే శరీరంలో కొలువైన నిత్యమైన ఆత్మను, సమస్త ప్రాణులలోని సమాన పరమాత్మ చైతన్యాన్ని దర్శించడమే నిజమైన జ్ఞానం.",
                summary_hi: "यह शरीर 'क्षेत्र' (कर्मभूमि) है और जीवात्मा 'क्षेत्रज्ञ' (जानने वाला)। नश्वर शरीर में अविनाशी परमात्मा को समभाव से देखना ही यथार्थ ज्ञान है।",
                capsule_1min_en: "Your body and mind are the field of experiences; your soul is the eternal conscious observer. See the same Divine Presence living equally within all creatures.",
                capsule_1min_te: "శరీరం ఒక క్షేత్రం, ఆత్మ క్షేత్రజ్ఞుడు. సమస్త ప్రాణులలో సమముగా ఉన్న పరమాత్మను చూసేవాడే నిజమైన జ్ఞాని.",
                key_verse: {
                    sanskrit: "समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम् । विनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति ॥ १३.२७ ॥",
                    transliteration: "samaṁ sarveṣu bhūteṣu tiṣṭhantaṁ parameśvaram | vinaśyatsv avinaśyantaṁ yaḥ paśyati sa paśyati || 13.27 ||",
                    meaning_en: "One who sees the Supreme Lord situated equally in all beings, the imperishable within the perishable—they truly see.",
                    meaning_te: "నశించు సమస్త భూతములయందు నశింపక సమముగా ఉన్న పరమేశ్వరుని ఎవడు చూచునో, అతడే సరిగా చూచుచున్నవాడు."
                },
                krishna_advice: "Cultivate humility, unpretentiousness, non-violence, forgiveness, purity, and steadfastness in spiritual knowledge.",
                krishna_advice_te: "అమానిత్వము (వినయం), అహింస, క్షమ, గురుసేవ, శౌచము (శుచి), ఆత్మనిగ్రహములను అలవరచుకొనుము.",
                life_lesson: "You are not your fleeting moods, bodily changes, or social titles. You are the sacred awareness observing them.",
                life_lesson_te: "తాత్కాలికమైన భావోద్వేగాలు, శరీర మార్పులు నీవు కావు; వాటన్నింటినీ గమనించే దివ్య చైతన్యానివి నీవు."
            },
            14: {
                number: 14,
                title: "Guṇatraya Vibhāga Yoga",
                teluguTitle: "గుణత్రయ విభాగ యోగము",
                hindiTitle: "गुणत्रय विभाग योग",
                sanskritTitle: "गुणत्रयविभागयोगः",
                verses: 27,
                theme: "The Yoga of the Three Gunas of Material Nature",
                summary_en: "All human behavior is influenced by the three modes of material nature: Sattva (light, purity, wisdom), Rajas (passion, greed, intense ambition), and Tamas (ignorance, laziness, delusion). Krishna teaches how each guna binds the soul and how an enlightened person transcends all three gunas (*Gunatita*) to achieve supreme bliss.",
                summary_te: "సత్వ, రజో, తమో గుణాల సమగ్ర విశ్లేషణ. సత్వగుణం జ్ఞానాన్ని, సుఖాన్ని ఇస్తుంది; రజోగుణం తీవ్ర కోరికలు, స్వార్థాన్ని కలిగిస్తుంది; తమోగుణం బద్ధకం, అజ్ఞానానికి దారితీస్తుంది. ఈ మూడు గుణాలను దాటినవాడే 'గుణాతీతుడు' అయి మోక్షాన్ని పొందుతాడు.",
                summary_hi: "प्रकृति के तीन गुण: सत्त्व (ज्ञान-प्रकाश), रज (राग-लोभ) और तम (अज्ञान-प्रमाद)। इन तीनों गुणों से ऊपर उठकर 'गुणातीत' होना ही मुक्ति है।",
                capsule_1min_en: "Break free from laziness (Tamas), calm restless greed (Rajas), cultivate pure wisdom (Sattva), and ultimately rise beyond all 3 into pure spiritual awareness.",
                capsule_1min_te: "తమోగుణాన్ని రజోగుణంతో, రజోగుణాన్ని సత్వగుణంతో జయించి, చివరకు త్రిగుణాతీతుడై పరమపదాన్ని అందుకోండి.",
                key_verse: {
                    sanskrit: "गुणानेतानतीत्य त्रीन्देही देహసముద్భవాన్ । జన్మమృత్యుజరాదుఃఖైర్విముక్తోऽమృతమశ్నుతే ॥ १४.२० ॥",
                    transliteration: "guṇān etān atītya trīn dehī deha-samudbhavān | janma-mṛtyu-jarā-duḥkhair vimukto 'mṛtam aśnute || 14.20 ||",
                    meaning_en: "Transcending these three gunas that originate in the body, the embodied soul is freed from the sufferings of birth, death, and old age, attaining immortality.",
                    meaning_te: "శరీర కారణములైన ఈ మూడు గుణములను దాటిన జీవాత్మ జన్మ, మరణ, వృద్ధాప్య దుఃఖముల నుండి విముక్తుడై అమృతత్వమును పొందును."
                },
                krishna_advice: "Serve the Supreme with unswerving devotion. Transcending all material gunas, you qualify for the state of Brahman.",
                krishna_advice_te: "అవ్యభిచార భక్తియోగముతో నన్ను సేవించువాడు త్రిగుణములను దాటి బ్రహ్మభూతుడగుటకు అర్హుడగును.",
                life_lesson: "Be mindful of what you feed your mind: choose wholesome food, uplifting company, and peaceful environments.",
                life_lesson_te: "సాత్విక ఆహారం, సత్సాంగత్యం, పవిత్ర ఆలోచనల ద్వారా మీ అంతఃకరణాన్ని పరిశుద్ధం చేసుకోండి."
            },
            15: {
                number: 15,
                title: "Puruṣhottama Yoga",
                teluguTitle: "పురుషోత్తమ ప్రాప్తి యోగము",
                hindiTitle: "पुरुषोत्तम योग",
                sanskritTitle: "पुरुषोत्तमयोगः",
                verses: 20,
                theme: "The Yoga of the Supreme Divine Personality",
                summary_en: "The allegorical upside-down Ashvattha tree of material existence whose roots are above and branches below. It must be felled with the strong axe of detachment (*Asanga-Shastrena*). Krishna reveals Himself as the Supreme Purushottama, who transcends both the perishable material realm and the imperishable individual souls.",
                summary_te: "సంసార వృక్షం: పైకి వేళ్ళు, క్రిందికి కొమ్మలు గల అశ్వత్థ వృక్షాన్ని వైరాగ్యమనే గొడ్డలితో నరికివేయాలి. క్షరుడు (నశించే శరీరాలు), అక్షరుడు (జీవాత్మ) కన్నా పరమాత్ముడు ఉత్తముడు కావున 'పురుషోత్తముడు' అని పిలవబడుతాడు.",
                summary_hi: "उर्ध्वमूल संसार-वृक्ष को वैराग्य रूपी दृढ़ कुल्हाड़े से काटना चाहिए। क्षर (शरीर) और अक्षर (जीवात्मा) से परे श्रीकृष्ण ही 'पुरुषोत्तम' हैं।",
                capsule_1min_en: "Cut down attachments with the sharp axe of wisdom. Lord Krishna is the supreme light of consciousness, the source of memory, knowledge, and digestive fire in all bodies.",
                capsule_1min_te: "వైరాగ్యమనే గొడ్డలితో ప్రాపంచిక బంధాలను ఛేదించండి. సమస్త ప్రాణులలోని జీవశక్తి, జ్ఞాపకశక్తి, జ్ఞానం పురుషోత్తముడైన పరమాత్ముడే.",
                key_verse: {
                    sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च । वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम् ॥ १५.१५ ॥",
                    transliteration: "sarvasya cāhaṁ hṛdi sanniviṣṭo mattaḥ smṛtir jñānam apohanaṁ ca | vedaiś ca sarvair aham eva vedyo vedānta-kṛd veda-vid eva cāham || 15.15 ||",
                    meaning_en: "I am seated in the hearts of all living beings. From Me come memory, knowledge, and their loss. By all the Vedas, I alone am to be known; I am the author of Vedanta and the knower of the Vedas.",
                    meaning_te: "నేను సర్వప్రాణుల హృదయమునందు కొలువై ఉన్నాను; నా నుండే స్మృతి, జ్ఞానము, వాని లోపము కలుగుచున్నవి. సమస్త వేదములచే తెలియదగినవాడను నేనే."
                },
                krishna_advice: "Seek that supreme eternal state reaching which one never returns to sorrow.",
                krishna_advice_te: "అశాశ్వతమైన భోగాలను వైరాగ్యంతో ఛేదించి, పురుషోత్తముడైన పరమాత్మను శరణువేడుము.",
                life_lesson: "Never anchor your deepest security in temporary things; anchor your soul in the timeless Divine.",
                life_lesson_te: "తాత్కాలిక వస్తువులపై ఆధారపడక, శాశ్వతమైన దైవశక్తిని విశ్వసించండి."
            },
            16: {
                number: 16,
                title: "Daivāsura Sampad Vibhāga Yoga",
                teluguTitle: "దైవాసుర సంపద్విభాగ యోగము",
                hindiTitle: "दैवासुर संपद्विभाग योग",
                sanskritTitle: "दैवासुरसम्पद्विभागयोगः",
                verses: 24,
                theme: "The Yoga of Divine vs. Demonic Qualities",
                summary_en: "Krishna describes the 26 Divine Virtues (fearlessness, purity, charity, non-violence, truthfulness, humility) that liberate the soul, contrasted against Demonic Traits (hypocrisy, arrogance, anger, harshness, greed). The three gates to self-destruction are Lust, Anger, and Greed.",
                summary_te: "దైవీ సంపద (నిర్భయత్వం, సత్యం, అహింస, దయ, వినయం) మోక్షానికి దారితీస్తుంది. ఆసురీ సంపద (దర్పం, క్రోధం, అహంకారం, కామం) అధోగతికి కారణమవుతుంది. కామం, క్రోధం, లోభం అనే మూడు నరక ద్వారాలను విడిచిపెట్టాలి.",
                summary_hi: "दैवी गुण (सत्य, अहिंसा, अभय) मुक्तिदायक हैं। काम, क्रोध और लोभ—ये तीनों आत्मा का नाश करने वाले नरक के द्वार हैं।",
                capsule_1min_en: "Lust, Anger, and Greed are the three fatal gates to self-ruin. Cultivating truth, kindness, and humility leads to freedom and greatness.",
                capsule_1min_te: "కామం, క్రోధం, లోభం మనల్ని పతనం చేసే మూడు ప్రధాన శత్రువులు. నిర్భయత్వం, సత్యం, దయ మనల్ని ఉన్నతులుగా తీర్చిదిద్దుతాయి.",
                key_verse: {
                    sanskrit: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः । कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ॥ १६.२१ ॥",
                    transliteration: "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ | kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet || 16.21 ||",
                    meaning_en: "There are three gates leading to the hell of self-destruction: lust, anger, and greed. Therefore, one must abandon these three.",
                    meaning_te: "ఆత్మను నాశనము చేయు నరక ద్వారములు మూడు విధములు—కామము, క్రోధము, లోభము. కాబట్టి ఈ మూడింటిని విడిచిపెట్టవలెను."
                },
                krishna_advice: "Abandon the toxic trio of desire, rage, and greed. Walk the luminous path of righteousness.",
                krishna_advice_te: "కామం, క్రోధం, లోభం అనే మూడు నరకద్వారాలను విడిచి దైవీగుణాలను అలవరుచుకొనుము.",
                life_lesson: "Guard your character fiercely against arrogance and anger; humility and empathy create lasting respect.",
                life_lesson_te: "అహంకారం, కోపాన్ని అదుపులో ఉంచుకోండి; వినయం, సత్యం మాత్రమే గౌరవాన్ని ఇస్తాయి."
            },
            17: {
                number: 17,
                title: "Śhraddhātraya Vibhāga Yoga",
                teluguTitle: "శ్రద్ధాత్రయ విభాగ యోగము",
                hindiTitle: "श्रद्धात्रय विभाग योग",
                sanskritTitle: "శ్రద్ధాత్రయవిభాగయోగః",
                verses: 28,
                theme: "The Yoga of the Threefold Division of Faith",
                summary_en: "Faith shapes the destiny of every human being. Krishna analyzes the three types of faith, food, charity, and austerity (Sattvic, Rajasic, Tamasic). He introduces the sacred cosmic mantra 'OM TAT SAT', dedicating all endeavors to the Supreme.",
                summary_te: "శ్రద్ధను బట్టి మనిషి స్వభావం ఆధారపడి ఉంటుంది. ఆహారం, దానం, తపస్సుల్లోని త్రివిధ భేదాలు మరియు 'ఓం తత్ సత్' అనే పరబ్రహ్మ నామమహిమ ఈ అధ్యాయంలో బోధించబడ్డాయి.",
                summary_hi: "मनुष्य की श्रद्धा उसके स्वभाव के अनुसार होती है। सात्त्विक, राजसिक और तामसिक आहार, दान व तप का विवेचन तथा 'ॐ तत् सत्' का महामंत्र।",
                capsule_1min_en: "You become what you place your faith in. Pure wholesome food, selfless charity, and sacred intention (OM TAT SAT) sanctify all actions.",
                capsule_1min_te: "మనిషి ఎలాంటి శ్రద్ధ కలిగి ఉంటాడో అలాంటి వాడే అవుతాడు. పవిత్రమైన ఆహారం, నిస్వార్థమైన దానం జీవితాన్ని సుసంపన్నం చేస్తాయి.",
                key_verse: {
                    sanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत । श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः ॥ १७.३ ॥",
                    transliteration: "sattvānurūpā sarvasya śraddhā bhavati bhārata | śraddhā-mayo 'yaṁ puruṣo yo yac-chraddhaḥ sa eva saḥ || 17.3 ||",
                    meaning_en: "The faith of each person conforms to their mental constitution. A person is fundamentally made of their faith; as one's faith is, so indeed they are.",
                    meaning_te: "ప్రతి మనుష్యుని శ్రద్ధ అతని అంతఃకరణ స్వభావమును బట్టి ఉండును. పురుషుడు శ్రద్ధామయుడు; ఎవరికి ఎట్టి శ్రద్ధ ఉండునో, అతడు అట్టివాడే అగును."
                },
                krishna_advice: "Consecrate every noble action with the sacred vibration of OM TAT SAT.",
                krishna_advice_te: "'ఓం తత్ సత్' అనే పరబ్రహ్మ నామంతో సమస్త సత్కర్మలను పవిత్రం చేయుము.",
                life_lesson: "Choose nourishing food, healthy company, and uplifting thoughts that fuel your highest aspirations.",
                life_lesson_te: "సాత్విక ఆహారం, ఆలోచనలతో నీ అంతఃకరణాన్ని పరిశుద్ధం చేసుకోండి."
            },
            18: {
                number: 18,
                title: "Mokṣha Sanyāsa Yoga",
                teluguTitle: "మోక్ష సన్యాస యోగము",
                hindiTitle: "मोक्ष संन्यास योग",
                sanskritTitle: "మోక్షసంన్యాసయోగః",
                verses: 78,
                theme: "The Yoga of Supreme Liberation through Complete Surrender",
                summary_en: "The triumphant grand finale of the Bhagavad Gita! Summarizing the teachings on Karma, Jnana, and Bhakti, Krishna urges total surrender to the Supreme. He delivers His ultimate promise (Charama Shloka): 'Abandon all varieties of dharmas and simply surrender unto Me. I shall deliver you from all sinful reactions; do not grieve!' Arjuna declares his delusion is shattered, ready to fulfill his divine destiny.",
                summary_te: "భగవద్గీత మహోన్నత ముగింపు అధ్యాయం! సమస్త కర్మ, జ్ఞాన, భక్తి యోగాల సారాంశం. శ్రీకృష్ణుని చరమ శ్లోకం: 'సర్వధర్మాన్ పరిత్యజ్య మామేకం శరణం వ్రజ'—అన్నింటినీ విడిచి నా శరణుజొచ్చు, నిన్ను సమస్త పాపాల నుండి విముక్తుడిని చేస్తాను, దుఃఖించకు. అర్జునుడు మోహాన్ని వీడి ధర్మయుద్ధానికి సంసిద్ధుడవుతాడు. సంజయుని విజయ ఘోషతో ముగుస్తుంది.",
                summary_hi: "गीता का अंतिम उपदेश। श्रीकृष्ण का चरम श्लोक—सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अर्जुन का मोह नष्ट हो जाता है और वे कहते हैं: 'करिष्ये वचनं तव' (मैं आपकी आज्ञा का पालन करूंगा)।",
                capsule_1min_en: "The supreme secret of life: Surrender your burdens, fears, and ego to the Divine. Trust God completely. When wisdom guides your action, victory, prosperity, and righteousness are forever guaranteed.",
                capsule_1min_te: "సంపూర్ణ శరణాగతియే గీత యొక్క పరమ రహస్యం. భగవంతుని నమ్మి నీ కర్తవ్యాన్ని నిర్వహించినప్పుడు విజయం, ధర్మం, సౌభాగ్యం ఎల్లప్పుడూ నీవెంటే ఉంటాయి.",
                key_verse: {
                    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज । अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥ १८.६६ ॥",
                    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja | ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ || 18.66 ||",
                    meaning_en: "Abandon all varieties of duty and surrender exclusively unto Me. I will liberate you from all sins; do not grieve!",
                    meaning_te: "సమస్త ధర్మములను నాకే అర్పించి, నన్ను ఒక్కనినే శరణు వేడుము. నిన్ను సమస్త పాపముల నుండి నేను విముక్తుని చేసెదను; శోకింపకుము!"
                },
                krishna_advice: "Wherever there is Krishna, the Lord of Yoga, and wherever there is Arjuna, the archer of action, there will forever be fortune, victory, and righteousness.",
                krishna_advice_te: "సర్వధర్మాలను నాకే అర్పించి, నన్ను శరణువేడుము; నిన్ను సమస్త పాపముల నుండి విముక్తుని చేసెదను.",
                life_lesson: "Surrender your anxiety, do your honest best, and have unshakeable faith in divine providence.",
                life_lesson_te: "భయాలను, ఆందోళనలను భగవంతునికి అర్పించి, ధైర్యంతో నీ కర్తవ్యాన్ని నిర్వహించుము."
            }
        },

        // Universal concepts & Life Dilemmas
        dilemmas: {
            stress: {
                title: "Overcoming Stress, Anxiety & Fear",
                teluguTitle: "భయం, ఆందోళన మరియు ఒత్తిడిని అధిగమించడం",
                recommendation_en: "Lord Krishna teaches in Chapter 2 (2.47 & 2.14) that stress arises when we obsess over future outcomes that are not in our control. Focus completely on the current action with love. Sensory pleasantries and hardships are temporary like winter and summer seasons—learn to endure them with equanimity.",
                recommendation_te: "శ్రీకృష్ణుడు 2వ అధ్యాయంలో (2.47) తెలిపినట్లు ఫలితంపై ఆందోళన చెందకుండా ప్రస్తుత కర్తవ్యంపై ఏకాగ్రత ఉంచడమే ఒత్తిడికి విరుగుడు. సుఖదుఃఖాలు శీతోష్ణాల వలె తాత్కాలికమైనవని గ్రహించి సమచిత్తంతో ఉండాలి.",
                chapterLink: "chapterr2.html"
            },
            anger: {
                title: "Controlling Anger & Restless Mind",
                teluguTitle: "కోపం మరియు చంచలమైన మనస్సును అదుపు చేయడం",
                recommendation_en: "In Chapter 2 (2.62-63) and Chapter 6 (6.35), Krishna explains that contemplating sense objects breeds attachment, which births unfulfilled desire, resulting in explosive anger and memory loss. Control the mind through steady daily practice (Abhyasa) and detachment (Vairagya).",
                recommendation_te: "కోరిక నెరవేరనప్పుడు కోపం, కోపం వల్ల బుద్ధి నాశనం కలుగుతాయి (2.63). నిరంతర అభ్యాసం, వైరాగ్యం ద్వారా చంచలమైన మనస్సును నియంత్రించవచ్చని 6వ అధ్యాయంలో భగవానుడు మార్గదర్శనం చేశాడు.",
                chapterLink: "chapter6.html"
            },
            purpose: {
                title: "Finding My True Life Purpose (Swadharma)",
                teluguTitle: "జీవిత లక్ష్యం మరియు స్వధర్మం",
                recommendation_en: "In Chapter 3 (3.35) and Chapter 18 (18.47), Krishna states: 'Better is one's own duty, though imperfect, than another's duty well-performed.' Discover your natural talents and values, aligning your daily work in service of the supreme good.",
                recommendation_te: "ఇతరుల ధర్మాన్ని అనుకరించడం కంటే తన సహజ గుణాలకు తగిన స్వధర్మాన్ని ఆచరించడమే శ్రేయస్కరం (3.35). నిస్వార్థ సేవయే జీవిత పరమార్థం.",
                chapterLink: "chapter3.html"
            },
            grief: {
                title: "Coping with Grief, Loss & Death",
                teluguTitle: "దుఃఖం, నష్టం మరియు మరణాన్ని తట్టుకోవడం",
                recommendation_en: "In Chapter 2 (2.20 & 2.22), Krishna assures that the Soul never dies, nor was it ever born. Weapons cannot cut it, fire cannot burn it, water cannot wet it. The physical body is merely a garment. What is born must die, and what dies must be reborn—do not grieve over the inevitable.",
                recommendation_te: "ఆత్మ శాశ్వతమైనది, దేహమే నశిస్తుంది (2.20). పాత వస్త్రాలు విడిచి కొత్తవి ధరించినట్లు ఆత్మ దేహాలు మారుస్తుంది. కావున మరణానికి, నష్టానికి శోకింపరాదు.",
                chapterLink: "chapterr2.html"
            }
        }
    };

    // =========================================================================
    // 2. DETECT CURRENT PAGE & CONTEXT
    // =========================================================================
    function detectPageContext() {
        const path = window.location.pathname.toLowerCase();
        const fileName = (path.split('/').pop() || '').split('\\').pop();
        let currentChapter = null;
        let language = 'en';

        if (path.includes('telugu')) {
            language = 'te';
        }

        // Gita AI only shows from page1 onwards, not on index, entry, or home
        const isExcluded = fileName === 'entry.html' || fileName === 'index.html' || fileName === 'home.html' || fileName === '' || path === '/' || path.endsWith('/index.html') || path.endsWith('/entry.html') || path.endsWith('/home.html');
        const isIntro = fileName === 'page1.html' || fileName === 'telugu.html' || path.includes('page1') || path.includes('telugu.html');

        // Match chapter numbers from filename
        const chMatch = path.match(/(?:chapter|telugu|chapte|chapteer)(\d+)/i);
        if (chMatch && chMatch[1]) {
            currentChapter = parseInt(chMatch[1], 10);
        } else if (path.includes('chapterr2') || path.includes('telugu2')) {
            currentChapter = 2;
        } else if (path.includes('chapte8') || path.includes('telugu8')) {
            currentChapter = 8;
        } else if (path.includes('chapteer15') || path.includes('telugu15')) {
            currentChapter = 15;
        } else if (isIntro) {
            currentChapter = 1; // General intro context starting from page1
        }

        return {
            chapter: currentChapter,
            language: language,
            isExcluded: isExcluded,
            isIntro: isIntro
        };
    }

    // =========================================================================
    // 3. VOICE NARRATION & TEXT-TO-SPEECH (TTS) DUAL ENGINE (NATIVE TELUGU + EN)
    // =========================================================================
    class DivineVoiceEngine {
        constructor() {
            this.synth = window.speechSynthesis || null;
            this.audioEl = new Audio();
            this.isSpeaking = false;
            this.isPaused = false;
            this.currentText = '';
            this.rate = 1.0;
            this.voices = [];
            this.onStateChangeCallback = null;
            this.queue = [];
            this.currentChunkIndex = 0;
            this.isUsingHtmlAudio = false;

            if (this.synth) {
                this.loadVoices();
                if (this.synth.onvoiceschanged !== undefined) {
                    this.synth.onvoiceschanged = () => this.loadVoices();
                }
            }

            this.audioEl.addEventListener('ended', () => {
                if (this.isSpeaking && !this.isPaused) {
                    this.currentChunkIndex++;
                    this.playNextTeluguChunk();
                }
            });

            this.audioEl.addEventListener('error', (e) => {
                if (this.isSpeaking && !this.isPaused) {
                    console.warn('Telugu Audio Stream error, advancing chunk:', e);
                    this.currentChunkIndex++;
                    this.playNextTeluguChunk();
                }
            });
        }

        loadVoices() {
            if (!this.synth) return;
            this.voices = this.synth.getVoices() || [];
        }

        playChime() {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (!AudioContext) return;
                const ctx = new AudioContext();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(528, ctx.currentTime);
                gain.gain.setValueAtTime(0.12, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + 0.6);
            } catch (e) {}
        }

        isTeluguText(text) {
            return /[\u0C00-\u0C7F]/.test(text);
        }

        speak(text, lang = 'en', onComplete = null) {
            this.stop(false); // Stop prior narration cleanly without invoking onComplete callback
            this.playChime();

            let cleanText = text || '';
            // Decode any percent-encoded characters completely to avoid pronouncing "%20", "%3A", etc.
            try {
                cleanText = decodeURIComponent(cleanText);
            } catch (e) {}

            // Clean any remaining encoded sequences if multiple layers existed
            if (cleanText.includes('%20') || cleanText.includes('%3A') || cleanText.includes('%2C')) {
                try { cleanText = decodeURIComponent(cleanText); } catch (e) {}
            }

            // Strip HTML tags, emojis, markdown symbols, and unwanted characters that can confuse TTS
            cleanText = cleanText
                .replace(/<[^>]*>?/gm, '')
                .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')
                .replace(/[॥।|#*•~`^]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();

            if (!cleanText) return;

            this.currentText = cleanText;
            this.onCompleteCallback = onComplete;
            this.isSpeaking = true;
            this.isPaused = false;
            this.notifyState();

            if (lang === 'te' || this.isTeluguText(cleanText)) {
                this.speakTelugu(cleanText);
            } else {
                this.speakEnglishWebSpeech(cleanText, lang);
            }
        }

        speakTelugu(text) {
            this.isUsingHtmlAudio = true;
            const sentences = text.match(/[^.!?।॥\n]+[.!?।॥\n]*/g) || [text];
            this.queue = sentences.map(s => s.trim()).filter(s => s.length > 0);
            this.currentChunkIndex = 0;

            this.isSpeaking = true;
            this.isPaused = false;
            this.notifyState();

            this.playNextTeluguChunk();
        }

        playNextTeluguChunk() {
            if (!this.isSpeaking || this.isPaused) return;

            if (this.currentChunkIndex >= this.queue.length) {
                this.stop(true);
                return;
            }

            const chunk = this.queue[this.currentChunkIndex];
            const encoded = encodeURIComponent(chunk.substring(0, 280));
            const primaryUrl = `/api/tts?lang=te&text=${encoded}`;
            const fallbackUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=te&client=tw-ob&q=${encoded}`;

            this.audioEl.src = primaryUrl;
            this.audioEl.playbackRate = this.rate;

            const playPromise = this.audioEl.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    if (!this.isSpeaking || this.isPaused) return;
                    this.audioEl.src = fallbackUrl;
                    this.audioEl.play().catch(err => {
                        console.warn('Audio play prevented:', err);
                    });
                });
            }
        }

        speakEnglishWebSpeech(cleanText, lang) {
            this.isUsingHtmlAudio = false;
            if (!this.synth) {
                this.queue = [cleanText];
                this.currentChunkIndex = 0;
                this.isUsingHtmlAudio = true;
                this.isSpeaking = true;
                this.isPaused = false;
                this.notifyState();
                this.audioEl.src = `/api/tts?lang=en&text=${encodeURIComponent(cleanText.substring(0, 280))}`;
                this.audioEl.playbackRate = this.rate;
                this.audioEl.play().catch(() => {});
                return;
            }

            try {
                this.synth.cancel();
                if (this.synth.paused) this.synth.resume();
            } catch (e) {}

            const rawChunks = cleanText.match(/[^.!?।॥\n]+[.!?।॥\n]*/g) || [cleanText];
            this.queue = rawChunks.map(c => c.trim()).filter(c => c.length > 0);
            this.currentChunkIndex = 0;

            const voice = this.findBestEnglishVoice();

            setTimeout(() => {
                if (!this.isSpeaking || this.isPaused) return;
                this.isSpeaking = true;
                this.isPaused = false;
                this.notifyState();
                this.speakNextEnglishChunk(voice);
            }, 50);
        }

        findBestEnglishVoice() {
            if (!this.voices || this.voices.length === 0) this.loadVoices();
            return this.voices.find(v => v.lang.toLowerCase().includes('en-in') || v.name.toLowerCase().includes('india'))
                || this.voices.find(v => v.lang.toLowerCase().includes('en-us') || v.lang.toLowerCase().includes('en-gb'))
                || (this.voices.length > 0 ? this.voices[0] : null);
        }

        speakNextEnglishChunk(voice) {
            if (!this.isSpeaking || this.isPaused) return;

            if (this.currentChunkIndex >= this.queue.length) {
                this.stop(true);
                return;
            }

            const chunkText = this.queue[this.currentChunkIndex];
            const utterance = new SpeechSynthesisUtterance(chunkText);
            utterance.rate = this.rate;
            utterance.pitch = 1.0;
            utterance.lang = 'en-US';

            if (voice) utterance.voice = voice;

            window._gitaActiveUtterance = utterance;

            utterance.onstart = () => {
                if (!this.isSpeaking || this.isPaused) {
                    try { this.synth.cancel(); } catch(e){}
                    return;
                }
                this.notifyState();
            };

            utterance.onend = () => {
                if (this.isSpeaking && !this.isPaused) {
                    this.currentChunkIndex++;
                    this.speakNextEnglishChunk(voice);
                }
            };

            utterance.onerror = (e) => {
                // If paused or stopped, cancellation is intentional; do not advance chunk
                if (this.isPaused || !this.isSpeaking) return;
                console.warn('Speech chunk error:', e);
                if (this.isSpeaking && !this.isPaused) {
                    this.currentChunkIndex++;
                    if (this.currentChunkIndex < this.queue.length) {
                        this.speakNextEnglishChunk(voice);
                    } else {
                        this.stop(true);
                    }
                }
            };

            try {
                if (this.synth.paused) this.synth.resume();
                this.synth.speak(utterance);
            } catch (err) {
                console.warn('Synth speak error:', err);
            }
        }

        pause() {
            if (!this.isSpeaking || this.isPaused) return;

            if (this.isUsingHtmlAudio) {
                this.audioEl.pause();
                this.isPaused = true;
                this.notifyState();
            } else if (this.synth) {
                // Cancel active utterance without losing currentChunkIndex so resume can continue from here
                this.isPaused = true;
                try {
                    this.synth.cancel();
                } catch (e) {}
                this.notifyState();
            }
        }

        resume() {
            if (!this.isSpeaking || !this.isPaused) return;

            if (this.isUsingHtmlAudio) {
                this.isPaused = false;
                this.notifyState();
                if (this.audioEl.src && !this.audioEl.ended && this.audioEl.currentTime > 0) {
                    this.audioEl.play().catch(() => {
                        this.playNextTeluguChunk();
                    });
                } else {
                    this.playNextTeluguChunk();
                }
            } else if (this.synth) {
                this.isPaused = false;
                this.notifyState();
                const voice = this.findBestEnglishVoice();
                this.speakNextEnglishChunk(voice);
            }
        }

        stop(triggerCallback = true) {
            this.isSpeaking = false;
            this.isPaused = false;
            this.queue = [];
            this.currentChunkIndex = 0;

            if (this.isUsingHtmlAudio) {
                try {
                    this.audioEl.pause();
                    this.audioEl.currentTime = 0;
                    this.audioEl.removeAttribute('src');
                    this.audioEl.load();
                } catch (e) {}
            }
            if (this.synth) {
                try {
                    this.synth.cancel();
                } catch (e) {}
            }
            if (triggerCallback) {
                this.notifyState();
                if (this.onCompleteCallback) {
                    const cb = this.onCompleteCallback;
                    this.onCompleteCallback = null;
                    cb();
                }
            }
        }

        setRate(newRate) {
            this.rate = Math.max(0.7, Math.min(2.0, newRate));
            if (this.isUsingHtmlAudio) {
                this.audioEl.playbackRate = this.rate;
            }
        }

        notifyState() {
            if (this.onStateChangeCallback) {
                this.onStateChangeCallback({
                    isSpeaking: this.isSpeaking,
                    isPaused: this.isPaused,
                    rate: this.rate
                });
            }
        }
    }

    // =========================================================================
    // 4. SPEECH RECOGNITION (MIC / SPEECH-TO-TEXT) ENGINE
    // =========================================================================
    class DivineSpeechRecognition {
        constructor(onResultCallback, onEndCallback, onErrorCallback) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
            this.recognition = SpeechRecognition ? new SpeechRecognition() : null;
            this.isListening = false;
            this.onResult = onResultCallback;
            this.onEnd = onEndCallback;
            this.onError = onErrorCallback;

            if (this.recognition) {
                this.recognition.continuous = false;
                this.recognition.interimResults = true;
                this.recognition.lang = 'en-IN';

                this.recognition.onresult = (event) => {
                    let transcript = '';
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        transcript += event.results[i][0].transcript;
                    }
                    if (this.onResult) this.onResult(transcript, event.results[0].isFinal);
                };

                this.recognition.onend = () => {
                    this.isListening = false;
                    if (this.onEnd) this.onEnd();
                };

                this.recognition.onerror = (event) => {
                    console.warn('Speech recognition error:', event.error);
                    this.isListening = false;
                    if (this.onError) this.onError(event.error);
                    if (this.onEnd) this.onEnd();
                };
            }
        }

        start(langCode = 'en-IN') {
            if (!this.recognition) {
                if (this.onError) this.onError('not-supported');
                return false;
            }
            if (this.isListening) {
                try { this.recognition.stop(); } catch(e) {}
            }
            try {
                this.recognition.lang = langCode;
                this.recognition.start();
                this.isListening = true;
                return true;
            } catch (e) {
                console.warn('Recognition start failed:', e);
                this.isListening = false;
                if (this.onError) this.onError(e.name || e.message || 'start-failed');
                return false;
            }
        }

        stop() {
            if (this.recognition && this.isListening) {
                try {
                    this.recognition.stop();
                } catch (err) {}
                this.isListening = false;
            }
        }
    }

    // =========================================================================
    // 5. GITA AI REAL-TIME INTELLIGENT CONVERSATIONAL & REASONING ENGINE
    // =========================================================================
    class GitaAIResponder {
        // Deep Knowledge Taxonomy for Intelligent Query Routing & Semantic Synthesis
        static get KB() {
            return {
                // Characters & Personalities
                characters: {
                    arjuna: {
                        keywords: ['arjuna', 'arjun', 'partha', 'dhananjaya', 'gudakesha', 'savyasachi', 'kiriti', 'అర్జునుడు', 'అర్జున', 'పార్థుడు', 'ధనంజయ', 'bow', 'gandiva', 'sad', 'crying', 'weeping', 'refuse to fight', 'refused', 'why arjuna'],
                        title_en: "Arjuna's Moral Crisis & Transformation",
                        title_te: "అర్జునుడి విషాదం & పరివర్తన",
                        badge_en: "🏹 Divine Warrior • Arjuna",
                        badge_te: "🏹 దివ్య యోధుడు • అర్జునుడు",
                        answer_en: "In Chapter 1, Arjuna is overwhelmed by intense grief and delusion (Moha) upon seeing his beloved grandfather Bhishma, revered teacher Drona, brothers, and kinsmen ready for slaughter on the battlefield of Kurukshetra. Trembling, with his mighty bow *Gandiva* slipping from his hand, he refused to fight, fearing the sin of killing loved ones. Lord Krishna awakened Arjuna to his eternal identity as an immortal soul (*Atman*), teaching him that dying in battle is merely casting off a worn-out garment, and that upholding righteousness (*Swadharma*) as a Kshatriya warrior without attachment to personal gain is his highest spiritual duty.",
                        answer_te: "కురుక్షేత్ర రణరంగంలో తన పూజ్య గురువైన ద్రోణాచార్యుడు, తాతగారైన భీష్ముడు, బంధుమిత్రులను చూసిన అర్జునుడు తీవ్ర శోకమోహాలలో మునిగిపోయాడు. చేతిలోని గాండీవం జారిపడగా, ఆత్మీయులను చంపే పాపానికి ఒడిగట్టలేనని రథంలో కూలబడిపోయాడు. శ్రీకృష్ణుడు అర్జునుడికి దేహం నశించేదని, ఆత్మ అమరమైనదని (2.20) ఉపదేశించి, క్షత్రియుడిగా ధర్మ రక్షణే అతని పరమ కర్తవ్యమని ప్రబోధించి కర్తవ్యోన్ముఖుడిని చేశాడు.",
                        shloka: {
                            sanskrit: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः । न चैनं क्लेदयन्त्यापो न शोषयति मारुतः ॥ २.२३ ॥",
                            transliteration: "nainaṁ chindanti śastrāṇi nainaṁ dahati pāvakaḥ | na cainaṁ kledayanty āpo na śoṣayati mārutaḥ || 2.23 ||",
                            meaning_en: "Weapons cannot cut the soul, fire cannot burn it, water cannot wet it, nor can the wind dry it.",
                            meaning_te: "ఆత్మను శస్త్రములు ఛేదింపలేవు, అగ్ని దహింపలేదు, నీరు తడుపలేదు, వాయువు ఎండింపలేదు."
                        },
                        application_en: "When faced with heartbreaking dilemmas, do not act out of emotional weakness or fear. Look beyond temporary attachments and anchor yourself in your higher duty and eternal truth.",
                        application_te: "జీవితంలో కష్టమైన నిర్ణయాలు ఎదురైనప్పుడు భావోద్వేగాల బలహీనతకు లోనుకాక, ధర్మాన్ని మరియు కర్తవ్యాన్ని దృఢంగా నిర్వర్తించాలి.",
                        takeaway_en: "Stand firm in righteous duty without fear; the soul is immortal, and truth is forever victorious.",
                        takeaway_te: "భయాన్ని వీడి ధర్మకర్తవ్యాన్ని నిర్వహించు; ఆత్మకు నాశనం లేదు, సత్యానికే అంతిమ విజయం.",
                        followUps_en: ["What did Krishna teach Arjuna next?", "Explain Chapter 2 Sankhya Yoga", "How to overcome self-doubt?"],
                        followUps_te: ["కృష్ణుడు అర్జునుడికి ఏం చెప్పాడు?", "సాంఖ్య యోగం వివరించండి", "భయాన్ని ఎలా అధిగమించాలి?"]
                    },
                    krishna: {
                        keywords: ['krishna', 'lord krishna', 'bhagavan', 'vasudeva', 'govinda', 'madhava', 'hrishikesha', 'jagadguru', 'charioteer', 'parthasarathi', 'why krishna', 'who is krishna', 'శ్రీకృష్ణుడు', 'శ్రీ కృష్ణుడు', 'కృష్ణుడు', 'భగవానుడు', 'గోవింద', 'వాసుదేవ', 'జగద్గురువు'],
                        title_en: "Lord Krishna: The Supreme Master & Eternal Guide",
                        title_te: "శ్రీకృష్ణ భగవానుడు: జగద్గురువు & దివ్య మార్గదర్శి",
                        badge_en: "🪷 Supreme Divine • Lord Krishna",
                        badge_te: "🪷 జగద్గురువు • శ్రీకృష్ణుడు",
                        answer_en: "Lord Krishna is the Supreme Personality of Godhead, the source of all cosmic creation, sustenance, and dissolution. In the Mahabharata war, Krishna chose to be the humble charioteer (*Parthasarathi*) to his beloved devotee Arjuna, promising not to raise weapons Himself. Through the 700 verses of the Bhagavad Gita, Krishna acts as *Jagadguru* (Universal Teacher), dispelling darkness and imparting the ultimate science of self-realization, selfless action (Karma Yoga), divine wisdom (Jnana Yoga), and unconditional loving devotion (Bhakti Yoga).",
                        answer_te: "శ్రీకృష్ణుడు సర్వలోక మహేశ్వరుడు, జగద్గురువు. ధర్మ సంస్థాపనార్థం మానవరూపంలో అవతరించిన పరమాత్ముడు (4.8). కురుక్షేత్రంలో అర్జునుడి రథసారథిగా ఉంటూ, ఆయుధం పట్టకుండానే సత్యధర్మాల వైపు విజయ కేతనం ఎగురవేశాడు. భగవద్గీత ద్వారా మానవాళికి కర్మ, జ్ఞాన, భక్తి, ధ్యాన యోగాల అద్భుత మార్గదర్శనాన్ని అందించాడు.",
                        shloka: {
                            sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत । अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥ ४.७ ॥",
                            transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham || 4.7 ||",
                            meaning_en: "Whenever there is a decline in righteousness and a rampant rise of unrighteousness, at that time I manifest Myself upon earth.",
                            meaning_te: "ఎప్పుడెప్పుడు ధర్మమునకు హాని కలుగునో, అధర్మము వృద్ధి పొందునో, అప్పుడు నన్ను నేను సృజించుకొందును."
                        },
                        application_en: "Surrender your ego and burdens to the Supreme. When you let divine wisdom guide your life chariot, failure and confusion vanish.",
                        application_te: "నీ జీవిత రథ సారథ్య బాధ్యతను దైవానికి అప్పగించు; అహంకారాన్ని వీడి భగవంతుని శరణు వేడితే విజయం నీదే.",
                        takeaway_en: "Wherever there is divine wisdom and decisive action, prosperity and victory are assured.",
                        takeaway_te: "ఎక్కడ భగవంతుడు, ధర్మబద్ధమైన ప్రయత్నం ఉంటాయో అక్కడ తప్పక విజయం లభిస్తుంది.",
                        followUps_en: ["What is the promise in Chapter 4.8?", "Explain Krishna's Universal Form (Ch 11)", "How to surrender to God?"],
                        followUps_te: ["కృష్ణుని చరమ శ్లోకం ఏమిటి?", "విశ్వరూప దర్శనం వివరించండి", "భగవంతునికి ఎలా శరణాగతి చేయాలి?"]
                    },
                    sanjaya_dhritarashtra: {
                        keywords: ['sanjaya', 'sanjay', 'dhritarashtra', 'blind king', 'divya drishti', 'vyasa', 'opening', '1.1', 'సంజయుడు', 'ధృతరాష్ట్రుడు', 'దివ్యదృష్టి', 'కురుక్షేత్రం ప్రారంభం'],
                        title_en: "Dhritarashtra's Attachment & Sanjaya's Divine Vision",
                        title_te: "ధృతరాష్ట్రుని మోహం & సంజయుని దివ్య దృష్టి",
                        badge_en: "📜 Cosmic Narration • Sanjaya & Dhritarashtra",
                        badge_te: "📜 దివ్య దర్శనం • సంజయుడు & ధృతరాష్ట్రుడు",
                        answer_en: "The Bhagavad Gita opens with the blind king Dhritarashtra asking Sanjaya what his sons and the sons of Pandu did on the holy field of Kurukshetra (Verse 1.1). Dhritarashtra represents the blind, attached human ego clinging possessively to 'mine' versus 'theirs'. Sanjaya, blessed with divine clairvoyance (*Divya Drishti*) by Sage Vedavyasa, narrates the entire dialogue with absolute neutrality and concluded in the final verse (18.78) that wherever Krishna and Arjuna are united, victory and righteousness are guaranteed.",
                        answer_te: "భగవద్గీత ధృతరాష్ట్రుని 'ధర్మక్షేత్రే కురుక్షేత్రే...' ప్రశ్నతో ప్రారంభమవుతుంది. ధృతరాష్ట్రుడు అంధత్వానికి, పుత్రమోహానికి ప్రతీక. మహర్షి వేదవ్యాసుని అనుగ్రహంతో దివ్యదృష్టిని పొందిన సంజయుడు రణరంగంలో జరిగే సమస్త సంభాషణను స్పష్టంగా చూస్తూ వర్ణించాడు. చివరలో శ్రీకృష్ణార్జునులు ఉన్నచోటనే శాశ్వత విజయం లభిస్తుందని సంజయుడు ఉద్ఘాటించాడు.",
                        shloka: {
                            sanskrit: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः । मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥ १.१ ॥",
                            transliteration: "dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāś caiva kim akurvata sañjaya || 1.1 ||",
                            meaning_en: "O Sanjaya, assembled on the holy field of Kurukshetra, eager for battle, what did my sons and the sons of Pandu do?",
                            meaning_te: "ఓ సంజయా! పవిత్రమైన కురుక్షేత్ర రణభూమియందు యుద్ధము చేయవలెనని చేరిన నా పుత్రులును, పాండుపుత్రులును ఏమి చేసిరి?"
                        },
                        application_en: "Beware of the blindness caused by biased attachment ('I' and 'Mine'). Strive for Sanjaya's objective, unclouded vision of truth.",
                        application_te: "'నాది, నావారు' అనే సంకుచిత స్వార్థాన్ని వీడి, సత్యాన్ని నిష్పక్షపాతంగా చూసే వివేకాన్ని పెంపొందించుకోండి.",
                        takeaway_en: "Attachment blinds the intellect; clear spiritual insight reveals ultimate truth.",
                        takeaway_te: "మోహం కళ్లను మూస్తుంది; వివేకం సత్యాన్ని చూపిస్తుంది.",
                        followUps_en: ["What is Sanjaya's concluding verse 18.78?", "Why did the Mahabharata war happen?", "Explain Chapter 1 theme"],
                        followUps_te: ["18.78వ శ్లోకం ప్రాముఖ్యత ఏమిటి?", "కురుక్షేత్ర యుద్ధం ఎందుకు జరిగింది?", "1వ అధ్యాయ సారాంశం"]
                    }
                },

                // Core Philosophical Concepts
                philosophies: {
                    karma_yoga: {
                        keywords: ['karma', 'karma yoga', 'action', 'duty', 'fruit', 'fruits of action', 'results', 'work', 'work is worship', 'nishkama', 'nishkama karma', '2.47', 'కర్మ', 'కర్మ యోగం', 'నిష్కామ కర్మ', 'కర్తవ్యం', 'ఫలితం', 'ఫలాపేక్ష', 'కర్మణ్యేవాధికారస్తే'],
                        title_en: "Karma Yoga: The Science of Selfless Action",
                        title_te: "కర్మ యోగం: నిష్కామ కర్మ సిద్ధాంతం",
                        badge_en: "⚡ Core Principle • Karma Yoga",
                        badge_te: "⚡ ముఖ్య సిద్ధాంతం • కర్మ యోగం",
                        answer_en: "Karma Yoga is the path of performing your duty with complete dedication while remaining totally detached from the results (Nishkama Karma). In Chapter 2, Verse 47, Lord Krishna proclaims: 'You have a right only to perform your prescribed duty, but never to the fruits of action. Never let the fruits be your motive, nor be attached to inaction.' When you work without anxiety over success or failure, your mind achieves equanimity (*Samatvam*), stress is eliminated, and work transforms into an act of divine worship.",
                        answer_te: "కర్మ యోగం అంటే ఫలితంపై ఆశ లేకుండా, స్వార్థం వీడి తన కర్తవ్యాన్ని శ్రద్ధగా నిర్వర్తించడం (నిష్కామ కర్మ). శ్రీకృష్ణుడు 2వ అధ్యాయం 47వ శ్లోకంలో: 'కర్మలను ఆచరించుటయందే నీకు అధికారము కలదు కాని, వాని ఫలితములపై ఎన్నడూ లేదు' అని స్పష్టం చేశాడు. ఫలితాల గురించిన భయాన్ని వదిలేసి పనిపైనే దృష్టి పెట్టినప్పుడు అలసట, ఒత్తిడి దూరమై అద్భుతమైన ఫలితాలు లభిస్తాయి.",
                        shloka: {
                            sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ २.४७ ॥",
                            transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi || 2.47 ||",
                            meaning_en: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of results, nor be attached to inaction.",
                            meaning_te: "కర్మలను చేయుటయందే నీకు అధికారము కలదు, వాని ఫలములయందు ఎన్నడును లేదు. కర్మఫలమునకు నీవు కారణము కాకూడదు; అట్లే కర్మలను చేయకుండుటయందును నీకు ఆసక్తి ఉండరాదు."
                        },
                        application_en: "Pour 100% of your focus into your current work or study today. Release all anxiety about grades, promotions, or applause to the universe.",
                        application_te: "ఈ రోజు మీరు చేసే పనిలో 100% మనస్సును లగ్నం చేయండి; ఫలితం లేదా గుర్తింపు గురించిన అనవసర ఆందోళనలను వదిలివేయండి.",
                        takeaway_en: "Focus entirely on the process; let divine providence manage the outcome.",
                        takeaway_te: "ప్రక్రియపైనే శ్రద్ధ పెట్టండి; ఫలితాన్ని భగవంతునికి వదిలివేయండి.",
                        followUps_en: ["What is Nishkama Karma?", "Difference between Karma and Karma Yoga", "How to avoid burnout at work?"],
                        followUps_te: ["నిష్కామ కర్మ అంటే ఏమిటి?", "కర్మ మరియు కర్మయోగం తేడా?", "పనిలో ఒత్తిడిని ఎలా తగ్గించాలి?"]
                    },
                    atman_soul: {
                        keywords: ['atman', 'soul', 'body', 'death', 'immortal', 'reincarnation', 'punarjanma', 'rebirth', 'afterlife', 'eternal', '2.20', '2.22', 'ఆత్మ', 'దేహం', 'మరణం', 'అమరత్వం', 'పునర్జన్మ', 'నైనం ఛిందంతి'],
                        title_en: "The Immortal Soul (Atman) & Transience of the Body",
                        title_te: "నిత్యమైన ఆత్మతత్త్వం & శరీర నశ్వరత",
                        badge_en: "🕉️ Supreme Truth • Atman & Immortality",
                        badge_te: "🕉️ పరమ సత్యం • ఆత్మతత్త్వం",
                        answer_en: "The foundational realization of the Gita is that you are not this mortal physical body; you are the eternal, blissful soul (*Atman*). Just as a person discards worn-out clothes to wear fresh ones, the soul casts off worn-out bodies to enter new ones (Verse 2.22). The soul was never born and will never die. It is untouched by birth, aging, disease, or physical death. Understanding this eliminates the root cause of all human fear—the fear of death and loss.",
                        answer_te: "భగవద్గీత ముఖ్య సందేశం: 'నీవు నశించే దేహానివి కావు, శాశ్వతమైన ఆత్మవు'. మనుష్యుడు పాతబడిన దుస్తులను విడిచి కొత్త వస్త్రాలను ధరించినట్లే, ఆత్మ జీర్ణమైన దేహాన్ని వదిలి నూతన దేహాన్ని స్వీకరిస్తుంది (2.22). ఆత్మకు చావుపుట్టుకలు లేవు; అది అజరుడు, అమరుడు. ఈ సత్యాన్ని తెలుసుకున్న సాధకుడు మరణ భయాన్ని, శోకాన్ని శాశ్వతంగా జయిస్తాడు.",
                        shloka: {
                            sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि । तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही ॥ २.२२ ॥",
                            transliteration: "vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi | tathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī || 2.22 ||",
                            meaning_en: "Just as a person casts off worn-out garments and puts on new ones, likewise the embodied soul casts off worn-out bodies and enters into new ones.",
                            meaning_te: "మనిషి చిరిగిన వస్త్రములను విడిచి నూతన వస్త్రములను ధరించునట్లు, జీవాత్మ పాతబడిన శరీరమును విడిచి క్రొత్త శరీరములను ధరించును."
                        },
                        application_en: "Do not judge your worth or life merely by physical appearances, temporary health changes, or material losses. Live from your unshakeable, luminous core identity.",
                        application_te: "తాత్కాలికమైన శరీర మార్పులు, నష్టాలకు కుంగిపోకండి; నీలోని నిత్యమైన ఆత్మశక్తిని గుర్తించి ఆనందంగా జీవించండి.",
                        takeaway_en: "You are an eternal spiritual being having a temporary human experience.",
                        takeaway_te: "నీవు శాశ్వతమైన దివ్య ఆత్మవు; దేహం ఒక తాత్కాలిక వాహనం మాత్రమే.",
                        followUps_en: ["What happens at the moment of death (Ch 8)?", "How to overcome fear of death?", "Explain Chapter 2 Shloka 2.20"],
                        followUps_te: ["మరణ సమయంలో ఆత్మ ప్రయాణం ఎలా ఉంటుంది?", "మరణ భయాన్ని ఎలా పోగొట్టుకోవాలి?", "2.20 శ్లోకం వివరణ"]
                    },
                    bhakti_yoga: {
                        keywords: ['bhakti', 'bhakti yoga', 'devotion', 'surrender', 'love for god', 'patram pushpam', '9.22', '9.26', '18.66', 'charama shloka', 'భక్తి', 'భక్తి యోగం', 'శరణాగతి', 'పత్రం పుష్పం', 'సర్వధర్మాన్'],
                        title_en: "Bhakti Yoga: The Path of Pure Love & Total Surrender",
                        title_te: "భక్తి యోగం: నిస్వార్థ భక్తి & సంపూర్ణ శరణాగతి",
                        badge_en: "💖 Divine Love • Bhakti Yoga",
                        badge_te: "💖 దివ్య ప్రేమ • భక్తి యోగం",
                        answer_en: "Bhakti Yoga is the sweetest and most direct path to God. Krishna reveals that He does not look for wealth, power, or elaborate rituals; He seeks only a pure, loving heart. In Chapter 9, Verse 26, He says: 'Whoever offers Me with devotion a leaf, a flower, a fruit, or even water, I affectionately accept that offering.' In His supreme final promise (Charama Shloka 18.66), Krishna assures: 'Surrender all varieties of dharmas unto Me alone. I will deliver you from all sinful reactions; grieve not!'",
                        answer_te: "భక్తి యోగం అంటే భగవంతునిపై అచంచలమైన ప్రేమ, శరణాగతి. భగవానుడు ఆడంబరాలను కోరడు; ప్రేమతో సమర్పించిన ఆకు, పువ్వు, పండు లేదా గుక్కెడు నీటినైనా సంతోషంతో స్వీకరిస్తాడు (9.26). 18వ అధ్యాయంలో కృష్ణుడు ఇచ్చిన చరమ శ్లోకం: 'సర్వధర్మాలను నాకే అర్పించి, నన్ను ఒక్కడినే శరణువేడుము; నిన్ను సమస్త పాపాల నుండి విముక్తుడిని చేస్తాను, దుఃఖించకు' అని అభయమిచ్చాడు.",
                        shloka: {
                            sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति । तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥ ९.२६ ॥",
                            transliteration: "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati | tad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ || 9.26 ||",
                            meaning_en: "If one offers Me with love and devotion a leaf, a flower, a fruit, or water, I accept that loving offering of a pure-minded devotee.",
                            meaning_te: "ఎవరైతే భక్తిశ్రద్ధలతో నాకు ఒక ఆకునుగాని, పువ్వునుగాని, పండునుగాని, నీటినిగాని సమర్పించునో, ఆ భక్తుడు సమర్పించిన దానిని నేను స్వీకరింతును."
                        },
                        application_en: "Dedicate every daily action—eating, working, loving, resting—as a simple offering of gratitude to the Divine.",
                        application_te: "మీరు చేసే ప్రతి పనిని, తినే ఆహారాన్ని, రోజువారీ బాధ్యతలను భగవత్ ప్రీతిగా అర్పించండి.",
                        takeaway_en: "Pure love and selfless surrender bridge the soul directly to the Supreme Divine.",
                        takeaway_te: "నిస్వార్థ భక్తి, శరణాగతి మనిషిని నేరుగా పరమాత్మతో అనుసంధానిస్తాయి.",
                        followUps_en: ["What is the meaning of 18.66 Charama Shloka?", "What is Ananyas Chintayanto Mam (9.22)?", "12th Chapter Bhakti Yoga Essence"],
                        followUps_te: ["18.66 చరమ శ్లోకం వివరణ?", "యోగక్షేమం వహామ్యహం (9.22) అర్థం?", "12వ అధ్యాయ భక్తియోగ సారాంశం"]
                    },
                    dhyana_mind: {
                        keywords: ['mind', 'meditation', 'dhyana', 'focus', 'restless mind', 'control mind', 'chatter', 'thoughts', '6.5', '6.6', '6.35', 'abhyasa', 'vairagya', 'మనస్సు', 'ధ్యానం', 'ఏకాగ్రత', 'మనస్సు నియంత్రణ', 'అభ్యాసం', 'వైరాగ్యం'],
                        title_en: "Dhyana Yoga: Mastering the Restless Mind",
                        title_te: "ధ్యాన యోగం: చంచలమైన మనస్సును జయించే రహస్యం",
                        badge_en: "🧘 Mind Mastery • Dhyana Yoga",
                        badge_te: "🧘 మనస్సు విజయం • ధ్యాన యోగం",
                        answer_en: "Arjuna famously complained in Chapter 6 that the mind is as turbulent, obstinate, and unyielding as the raging wind. Krishna empathized, acknowledging the difficulty, but gave the master key: The mind is conquered through *Abhyasa* (consistent daily practice) and *Vairagya* (healthy detachment). Krishna teaches: 'Elevate yourself by your own mind, do not degrade yourself; for the mind is your greatest friend when conquered, and your worst enemy when uncontrolled' (6.5-6).",
                        answer_te: "గాలిని ఆపడం ఎంత కష్టమో మనస్సును నిలపడం అంత కష్టమని అర్జునుడు వాపోయాడు. శ్రీకృష్ణుడు దానికి పరిష్కారంగా 'అభ్యాసము' (నిరంతర సాధన), 'వైరాగ్యము' (వస్తుకాంక్ష లేకపోవడం) అనే రెండు అద్భుత సాధనాలను ఉపదేశించాడు (6.35). 'మనస్సును నీవే ఉద్ధరించుకోవాలి; నిగ్రహించిన మనస్సు నీకు పరమ మిత్రుడు, నిగ్రహం లేని మనస్సు నీకు బద్ధ శత్రువు' (6.5-6).",
                        shloka: {
                            sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम् । अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥ ६.३५ ॥",
                            transliteration: "asaṁśayaṁ mahā-bāho mano durnigrahaṁ calam | abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate || 6.35 ||",
                            meaning_en: "O mighty-armed Arjuna, undoubtedly the mind is restless and difficult to curb; but by constant practice and detachment, it can be brought under control.",
                            meaning_te: "ఓ మహాబాహో! నిస్సందేహముగా మనస్సు చంచలమైనది, నిగ్రహింపరానిది. అయినను అభ్యాసము మరియు వైరాగ్యము చేత అది వశమగును."
                        },
                        application_en: "Start with 5 minutes of mindful breath awareness daily. Whenever your mind drifts into past regrets or future anxiety, gently bring it back without frustration.",
                        application_te: "రోజూ 5 నిమిషాలు ప్రశాంతంగా కూర్చుని శ్వాసపై ధ్యాస పెట్టండి; మనస్సు పక్కదారి పట్టినప్పుడు కోపం తెచ్చుకోకుండా మళ్లీ గమనించండి.",
                        takeaway_en: "A disciplined mind is your most loyal ally; train it daily with patience and perseverance.",
                        takeaway_te: "శిక్షణ పొందిన మనస్సు నీకు అత్యుత్తమ మిత్రుడు; నిరంతర సాధనతో దానిని జయించు.",
                        followUps_en: ["How to sit and meditate according to Chapter 6?", "How to conquer negative thoughts?", "What is Sthitaprajna (2.54)?"],
                        followUps_te: ["6వ అధ్యాయంలో ధ్యాన విధానం ఏమిటి?", "ప్రతికూల ఆలోచనలను ఎలా ఆపాలి?", "స్థితప్రజ్ఞుని లక్షణాలు ఏమిటి?"]
                    },
                    three_gunas: {
                        keywords: ['gunas', 'sattva', 'rajas', 'tamas', 'three qualities', 'personality', 'food', 'charity', 'chapter 14', 'chapter 17', 'గుణాలు', 'సత్వ', 'రజో', 'తమో', 'త్రిగుణాలు', 'ఆహారం'],
                        title_en: "The Three Gunas (Sattva, Rajas, Tamas) & Human Nature",
                        title_te: "త్రిగుణ విభాగం: సత్వ, రజో, తమో గుణాల ప్రభావం",
                        badge_en: "⚖️ Cosmic Qualities • The Three Gunas",
                        badge_te: "⚖️ ప్రకృతి గుణాలు • త్రిగుణాలు",
                        answer_en: "Nature binds every human through three fundamental qualities (Gunas): 1) **Sattva** (Purity, wisdom, compassion, lightness, inner peace); 2) **Rajas** (Fiery ambition, restless desire, greed, attachment to praise); 3) **Tamas** (Darkness, inertia, laziness, confusion, sleepiness). In Chapters 14, 17, and 18, Krishna explains that our food, faith, work, and thoughts are shaped by these gunas. The spiritual goal is to overcome Tamas through Rajas, elevate Rajas to Sattva, and ultimately transcend all three to reach the state of *Gunatita* (Supreme Liberation).",
                        answer_te: "ప్రకృతి మనుషులను మూడు గుణాల ద్వారా నడిపిస్తుంది: 1) **సత్వ గుణం** (జ్ఞానం, ప్రశాంతత, దయ, పవిత్రత); 2) **రజో గుణం** (తీవ్రమైన కోరికలు, ఆరాటం, స్వార్థం, అహంకారం); 3) **తమో గుణం** (సోమరితనం, అజ్ఞానం, నిద్రమత్తు, బద్ధకం). మనిషి తమో గుణాన్ని రజోగుణంతో ఛేదించి, రజోగుణాన్ని సత్వగుణంగా మార్చి, అంతిమంగా త్రిగుణాతీతుడై మోక్షం సాధించాలని భగవానుడు బోధించాడు.",
                        shloka: {
                            sanskrit: "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः । निबध्नन्ति महाबाहो देहे देहिनमव्ययम् ॥ १४.५ ॥",
                            transliteration: "sattvaṁ rajas tama iti guṇāḥ prakṛti-sambhavāḥ | nibadhnanti mahā-bāho dehe dehinam avyayam || 14.5 ||",
                            meaning_en: "Sattva, Rajas, and Tamas are the three qualities born of material nature. They bind fast the immortal soul to the physical body.",
                            meaning_te: "సత్వము, రజస్సు, తమస్సు అను ఈ మూడు గుణములు ప్రకృతి నుండి పుట్టినవి. అవి అవ్యయమైన ఆత్మను శరీరమునందు బంధించుచున్నవి."
                        },
                        application_en: "Eat fresh, nourishing Sattvic foods, eliminate procrastination (Tamas), and channel high energy (Rajas) into noble, altruistic goals.",
                        application_te: "సాత్విక ఆహారాన్ని తీసుకోండి, బద్ధకాన్ని (తమస్సు) వదలండి, మీ ఉత్సాహాన్ని (రజస్సు) సమాజ సేవకు ఉపయోగించండి.",
                        takeaway_en: "Elevate your qualities from darkness to light, and transcend all limitations to discover pure freedom.",
                        takeaway_te: "అజ్ఞానం నుండి జ్ఞానంలోకి, బంధాల నుండి విముక్తిలోకి ఎదగడమే జీవిత పరమార్థం.",
                        followUps_en: ["What is Sattvic, Rajasic & Tamasic food?", "How to become Gunatita (transcend gunas)?", "Explain Chapter 14 theme"],
                        followUps_te: ["సాత్విక, రాజసిక, తామసిక ఆహారాలు ఏవి?", "త్రిగుణాతీతుడు ఎలా కావాలి?", "14వ అధ్యాయ సారాంశం"]
                    },
                    vishwaroopam: {
                        keywords: ['vishwaroopa', 'vishwaroopam', 'cosmic form', 'universal form', 'chapter 11', '11.32', 'time', 'destroyer of worlds', 'విశ్వరూపం', 'విశ్వరూప దర్శనం', 'కాలస్మి', '11వ అధ్యాయం'],
                        title_en: "Vishwaroopa Darshana: The Magnificent Cosmic Vision",
                        title_te: "విశ్వరూప సందర్శన యోగం: పరమాత్మ విరాట్ రూపం",
                        badge_en: "🌌 Infinite Majesty • Vishwaroopa Darshanam",
                        badge_te: "🌌 దివ్య దర్శనం • విశ్వరూపం",
                        answer_en: "In Chapter 11, Krishna grants Arjuna divine spiritual eyes (*Divya Chakshu*) to witness His infinite Universal Form (*Vishwaroopam*). Arjuna beholds millions of mouths, radiant suns, infinite arms, all galaxies, gods, and cosmos existing within the single divine body. Krishna reveals Himself as all-devouring Time (*Kala*): 'I am mighty Time, the destroyer of worlds. Even without your participation, all these warriors standing in opposing ranks shall cease to exist. Therefore arise, attain glory, conquer your foes, and be merely an instrument (*Nimitta-Matram*) in My cosmic plan!' (11.32-33).",
                        answer_te: "11వ అధ్యాయంలో శ్రీకృష్ణుడు అర్జునునికి దివ్యచక్షువులను ప్రసాదించి తన అనంత విశ్వరూపాన్ని దర్శింపజేశాడు. కోట్యానుకోట్ల సూర్యుల తేజస్సుతో, సమస్త బ్రహ్మాండాలు, దేవతలు, గ్రహాలు కృష్ణుని దేహంలోనే అర్జునుడు చూశాడు. భగవానుడు: 'నేను లోకాలను నాశనం చేసే కాలస్వరూపుడను (11.32). నీవు నిమిత్తమాత్రుడవై (కేవలం ఒక సాధనంగా ఉండి) ధర్మయుద్ధం చేసి కీర్తిని పొందు' అని ఆదేశించాడు.",
                        shloka: {
                            sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः । ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः ॥ ११.३२ ॥",
                            transliteration: "kālo 'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ | ṛte 'pi tvāṁ na bhaviṣyanti sarve ye 'vasthitāḥ pratyanīkeषु yodhāḥ || 11.32 ||",
                            meaning_en: "I am mighty Time, the great destroyer of the worlds, engaged in destroying all people. Even without your effort, none of the warriors marshaled on the enemy side shall survive.",
                            meaning_te: "నేను లోకములను నాశనము చేయు ప్రవృద్ధమైన కాలమును. నీవు యుద్ధము చేయకున్నను శత్రు పక్షమందున్న యోధులెవ్వరును బ్రతుకరు."
                        },
                        application_en: "Understand that cosmic destiny is in higher hands. Relieve yourself of false pride and ego, serving faithfully as a pure instrument (*Nimitta-Matram*) for good.",
                        application_te: "సర్వమూ భగవత్ సంకల్పం మేరకే జరుగుతుంది; అహంకారాన్ని వీడి దైవ కార్యంలో ఒక పవిత్ర సాధనంగా మారి జీవించండి.",
                        takeaway_en: "Be a humble, courageous instrument in the grand cosmic tapestry of life.",
                        takeaway_te: "దైవ సంకల్పంలో నీవు నిమిత్తమాత్రుడవు; ధైర్యంతో సత్కార్యాలు చెయ్యి.",
                        followUps_en: ["What is Nimitta-Matram?", "Why was Arjuna terrified of Vishwaroopam?", "How to see Krishna in daily life?"],
                        followUps_te: ["నిమిత్తమాత్రం అంటే ఏమిటి?", "విశ్వరూపాన్ని చూసి అర్జునుడు ఎందుకు భయపడ్డాడు?", "11.33 శ్లోకం వివరణ"]
                    }
                },

                // Real-Life Human Situations & Emotional Challenges
                lifeSituations: {
                    stress_anxiety: {
                        keywords: ['stress', 'anxiety', 'worried', 'worry', 'panic', 'tension', 'nervous', 'pressure', 'overthinking', 'భయం', 'ఆందోళన', 'ఒత్తిడి', 'టెన్షన్', 'భయం పోవాలంటే'],
                        title_en: "Overcoming Stress, Anxiety & Future Worries",
                        title_te: "ఒత్తిడి, ఆందోళన & భయాన్ని జయించే దివ్య మార్గం",
                        badge_en: "🌿 Peace & Calm • Stress Relief",
                        badge_te: "🌿 ప్రశాంతత • ఒత్తిడి నివారణ",
                        answer_en: "Stress and anxiety are not caused by external work; they arise when our minds wander into hypothetical future outcomes over which we have zero control. Krishna gives a 2-step remedy in Chapter 2: 1) **Equanimity (*Samatvam*)**: Pleasures and hardships are fleeting like winter cold and summer heat—endure them calmly (*Titikshasva* 2.14); 2) **Right-Action (*Karmanye Vadhikaraste* 2.47)**: Lock your attention purely onto your present effort right now. The moment you stop worrying about outcomes and surrender results to the Divine, anxiety evaporates.",
                        answer_te: "ఒత్తిడి బయటి పరిస్థితుల వల్ల రాదు; మన చేతిలో లేని భవిష్యత్ ఫలితాల గురించి అతిగా ఆలోచించడం వల్ల వస్తుంది. శ్రీకృష్ణుడు 2వ అధ్యాయంలో 2 అద్భుత ఔషధాలను ఇచ్చాడు: 1) సుఖదుఃఖాలు శీతోష్ణాల వలె వచ్చిపోయే తాత్కాలిక అనుభవాలని గ్రహించి సమచిత్తంతో ఉండాలి (2.14); 2) ఫలితాల భయాన్ని వదిలేసి ప్రస్తుతం చేయాల్సిన పనిపై పూర్తి ఏకాగ్రత ఉంచాలి (2.47).",
                        shloka: {
                            sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः । आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥ २.१४ ॥",
                            transliteration: "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ | āgamāpāyino 'nityās tāṁs titikṣasva bhārata || 2.14 ||",
                            meaning_en: "O son of Kunti, the contact of the senses with their objects gives rise to cold, heat, pleasure, and pain. They are fleeting and impermanent; learn to endure them patiently.",
                            meaning_te: "ఓ కౌంతేయా! ఇంద్రియార్థ సంపర్కములు శీతోష్ణములను, సుఖదుఃఖములను కలిగించును. అవి అనిత్యములు, రాకపోకలు గలవి; వానిని ఓర్చుకొనుము."
                        },
                        application_en: "Whenever anxiety strikes, take three slow deep breaths. Ask yourself: 'What is the one small constructive action I can take right now?' Do only that.",
                        application_te: "ఆందోళన కలిగినప్పుడు దీర్ఘ శ్వాస తీసుకోండి; 'ప్రస్తుతం నేను చేయగలిగిన మంచి పని ఏమిటి?' అని ఆలోచించి దానిపైనే దృష్టి పెట్టండి.",
                        takeaway_en: "Surrender what you cannot control, and put all your love into what you can do today.",
                        takeaway_te: "నీ చేతుల్లో లేని ఫలితాన్ని భగవంతునికి అప్పగించు; నీ చేతుల్లో ఉన్న పనిని శ్రద్ధగా చెయ్యి.",
                        followUps_en: ["How to stop overthinking?", "What is Samatvam Yoga (2.48)?", "Quick breathing meditation in Gita"],
                        followUps_te: ["అతిగా ఆలోచించడాన్ని ఎలా ఆపాలి?", "సమత్వ యోగం అంటే ఏమిటి?", "ఒత్తిడిని తగ్గించే ధ్యానం"]
                    },
                    anger_rage: {
                        keywords: ['anger', 'angry', 'rage', 'frustration', 'irritated', 'temper', 'lose cool', 'కోపం', 'ఆగ్రహం', 'క్రోధం', 'చిరాకు', 'కోపం తగ్గడానికి'],
                        title_en: "Conquering Anger & Restoring Inner Serenity",
                        title_te: "క్రోధ నివారణ & మనశ్శాంతి సాధన",
                        badge_en: "🔥 Emotional Control • Anger Mastery",
                        badge_te: "🔥 మనస్సు సంయమనం • క్రోధ నివారణ",
                        answer_en: "In Chapter 2, Verses 62-63, Krishna maps the exact psychological chain reaction of anger: Contemplating sense objects leads to attachment; from attachment arises intense desire (*Kama*); when desire is thwarted, it explodes into anger (*Krodha*); anger clouds discrimination, causing loss of memory and destruction of intellect (*Buddhi-nasha*), leading to complete personal ruin. To conquer anger, pause before reacting, examine your underlying attachments, and practice forgiveness (*Kshama*).",
                        answer_te: "శ్రీకృష్ణుడు 2వ అధ్యాయం 62-63 శ్లోకాలలో కోపం ఎలా పుడుతుందో వివరించాడు: వస్తువులపై అతిగా ఆలోచించడం వల్ల వ్యామోహం, వ్యామోహం నుండి కోరిక, కోరిక తీరనప్పుడు కోపం పుడతాయి. కోపం వల్ల అవివేకం, అవివేకం వల్ల బుద్ధి నాశనం కలిగి మనిషి పతనమవుతాడు. కోపాన్ని అణచడానికి తక్షణ ప్రతిస్పందనను ఆపి, వివేకంతో క్షమాగుణాన్ని అలవరచుకోవాలి.",
                        shloka: {
                            sanskrit: "क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः । स्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ॥ २.६३ ॥",
                            transliteration: "krodhād bhavati saṁmohaḥ saṁmohāt smṛti-vibhramaḥ | smṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati || 2.63 ||",
                            meaning_en: "From anger arises delusion; from delusion comes loss of memory; from loss of memory comes ruin of intellect; and from ruin of intellect a person is ruined.",
                            meaning_te: "క్రోధము వలన అవివేకము, అవివేకము వలన జ్ఞాపకశక్తి భ్రమించుట, దానివలన బుద్ధినాశనము, బుద్ధినాశనము వలన మనుష్యుడు నశించును."
                        },
                        application_en: "When anger flares, observe a 60-second silence rule before speaking or typing. Drink cold water and breathe slowly to de-escalate the emotional surge.",
                        application_te: "కోపం వచ్చిన వెంటనే స్పందించక, ఒక నిమిషం మౌనం వహించండి; చల్లని నీరు తాగి శాంతించండి.",
                        takeaway_en: "Anger damages the vessel that carries it more than anything upon which it is poured.",
                        takeaway_te: "కోపం ఎదుటివారి కంటే ముందు మన వివేకాన్నే దహిస్తుంది; ప్రశాంతతే పరమ బలం.",
                        followUps_en: ["What are the 3 gates of self-destruction (16.21)?", "How to develop patience and forgiveness?", "How to handle insulting people?"],
                        followUps_te: ["నరకానికి మూడు ద్వారాలు ఏవి (16.21)?", "ఓర్పు, క్షమాగుణం ఎలా పెంచుకోవాలి?", "అవమానించే వారిని ఎలా ఎదుర్కోవాలి?"]
                    },
                    exam_study_career: {
                        keywords: ['study', 'studies', 'exam', 'exams', 'student', 'career', 'job', 'interview', 'laziness', 'procrastination', 'success', 'failure', 'చదువు', 'పరీక్షలు', 'కెరీర్', 'ఉద్యోగం', 'బద్ధకం', 'ఏకాగ్రత'],
                        title_en: "Student & Career Excellence: Laser Focus & Conquering Failure",
                        title_te: "విద్యా & వృత్తి విజయం: ఏకాగ్రత & సాధనా రహస్యం",
                        badge_en: "🎓 Excellence & Focus • Career Wisdom",
                        badge_te: "🎓 విద్య & విజయం • ఏకాగ్రతా సాధన",
                        answer_en: "The Gita offers supreme guidance for students and professionals. Krishna emphasizes **Vyavasayatmika Buddhi** (one-pointed resolute intellect in 2.41)—those who succeed have a focused, single-minded vision, whereas the minds of the unfocused are scattered in endless directions. Excellence in action is itself Yoga (*Yogah Karmasu Kaushalam* 2.50). Conquering laziness (*Tamas*) requires establishing a structured daily routine, eliminating digital distractions, and approaching study as a sacred offering to the universe.",
                        answer_te: "భగవద్గీత విద్యార్థులకు, ఉద్యోగులకు గొప్ప స్ఫూర్తిదాయకం. శ్రీకృష్ణుడు 'వ్యవసాయాత్మికా బుద్ధిః' (ఏకాగ్రత గల నిశ్చయాత్మక బుద్ధి) ప్రాముఖ్యతను తెలిపాడు (2.41). లక్ష్యంపై ఒకే దృష్టి ఉన్నవాడే విజయం సాధిస్తాడు. 'యోగః కర్మసు కౌశలమ్'—చేసే పనిని నైపుణ్యంతో, శ్రద్ధతో చేయడమే అసలైన యోగం (2.50). బద్ధకాన్ని వీడి క్రమశిక్షణతో చదివినప్పుడు ఆత్మవిశ్వాసం రెట్టింపవుతుంది.",
                        shloka: {
                            sanskrit: "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन । बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम् ॥ २.४१ ॥",
                            transliteration: "vyavasāyātmikā buddhir ekeha kuru-nandana | bahu-śākhā hy anantāś ca buddhayo 'vyavasāyinām || 2.41 ||",
                            meaning_en: "The intellect of those who are resolute is single-pointed, O scion of the Kurus; but the minds of the irresolute are endless and scattered in many branches.",
                            meaning_te: "ఓ కురునందనా! నిశ్చయాత్మకమైన బుద్ధి ఒక్కటియే అయి ఉండును; నిశ్చయము లేనివారి బుద్ధులు అనంతములుగా అనేక శాఖలుగా విస్తరించి ఉండును."
                        },
                        application_en: "Break study sessions into 45-minute focused blocks with zero phone interruptions. Put effort unconditionally without fearing the test result.",
                        application_te: "చదివేటప్పుడు ఫోన్ పక్కన పెట్టి 45 నిమిషాల పాటు పూర్తి ఏకాగ్రతతో చదవండి; ఫలితం గురించి కాకుండా అర్థం చేసుకోవడంపై దృష్టి పెట్టండి.",
                        takeaway_en: "Mastery is the fruit of disciplined, undisturbed devotion to your craft.",
                        takeaway_te: "ఏకాగ్రతతో కూడిన నిరంతర సాధనే విజయానికి నిజమైన రాజమార్గం.",
                        followUps_en: ["What does 'Yogah Karmasu Kaushalam' mean (2.50)?", "How to beat procrastination?", "How to choose the right career (Swadharma)?"],
                        followUps_te: ["'యోగః కర్మసు కౌశలమ్' అంటే ఏమిటి (2.50)?", "బద్ధకాన్ని ఎలా జయించాలి?", "సరైన కెరీర్ ఎంపిక (స్వధర్మం) ఎలా?"]
                    },
                    grief_loneliness: {
                        keywords: ['lonely', 'loneliness', 'alone', 'depressed', 'depression', 'sadness', 'heartbroken', 'loss', 'death of mother', 'death of father', 'grief', 'దుఃఖం', 'ఒంటరితనం', 'నిరాశ', 'ఆత్మీయుల మరణం', 'బాధ'],
                        title_en: "Healing Loneliness, Grief & Heartbreak",
                        title_te: "దుఃఖం, ఒంటరితనం & ఆత్మీయుల నష్టం నుండి స్వస్థత",
                        badge_en: "🪷 Solace & Strength • Emotional Healing",
                        badge_te: "🪷 ఓదార్పు & ధైర్యం • మానసిక స్వస్థత",
                        answer_en: "If you feel utterly alone or broken-hearted, remember Krishna's timeless assurance: 'The Supreme Lord dwells in the sacred heart of every living being' (18.61). You are never abandoned; the Divine is your eternal companion, closer to you than your very breath. When dealing with the death of a loved one, take solace knowing their soul has simply stepped into a new divine journey, eternal and unhurt. Turn your grief into noble actions that honor their memory.",
                        answer_te: "మీరు ఎప్పటికీ ఒంటరివారు కారు; 'పరమాత్ముడు ప్రతి జీవి హృదయకమలంలోనే కొలువై ఉన్నాడు' అని శ్రీకృష్ణుడు తెలిపాడు (18.61). ఆత్మీయుల మరణం శరీరానికి మాత్రమే, వారి ఆత్మ అమరమైనది (2.20). మీ దుఃఖాన్ని ప్రేమగా, సేవగా మార్చి, వారి జ్ఞాపకాలను సత్కార్యాలతో గౌరవించండి. భగవంతుని ప్రేమ ఎల్లప్పుడూ మీవెంటే ఉంటుంది.",
                        shloka: {
                            sanskrit: "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति । भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया ॥ १८.६१ ॥",
                            transliteration: "īśvaraḥ sarva-bhūtānāṁ hṛd-deśe 'rjuna tiṣṭhati | bhrāmayan sarva-bhūtāni yantrārūḍhāni māyayā || 18.61 ||",
                            meaning_en: "The Supreme Lord dwells in the hearts of all living beings, O Arjuna, directing the wanderings of all entities by His divine energy.",
                            meaning_te: "ఓ అర్జునా! సర్వభూతముల హృదయ ప్రదేశమునందు ఈశ్వరుడు కొలువై ఉన్నాడు."
                        },
                        application_en: "Spend a quiet moment placing your hand upon your heart, feeling the eternal divine pulse within. Know that this painful season will pass.",
                        application_te: "రోజూ కాసేపు మీ హృదయంపై చేయి వేసుకుని ప్రశాంతంగా ధ్యానించండి; ఈ కష్టకాలం కూడా గడిచిపోతుందని విశ్వసించండి.",
                        takeaway_en: "The Divine is closer to you than your own breath; you are forever held in sacred love.",
                        takeaway_te: "పరమాత్ముడు నీలోనే కొలువై ఉన్నాడు; నీవు ఎన్నడూ ఒంటరివి కావు.",
                        followUps_en: ["How to find inner strength during tough times?", "What is Krishna's message on friendship?", "How to love unconditionally?"],
                        followUps_te: ["కష్ట సమయాలలో ఆత్మస్థైర్యం ఎలా పొందాలి?", "భగవద్గీతలో నిజమైన స్నేహం అంటే ఏమిటి?", "నిస్వార్థ ప్రేమను ఎలా పెంచుకోవాలి?"]
                    }
                }
            };
        }

        // Real-Time Intelligent Response Synthesizer
        static answer(userQuery, activeChapterNum = 2, preferredLang = 'en', history = []) {
            return this.generateDeepResponse(userQuery, activeChapterNum, preferredLang, history);
        }

        static generateDeepResponse(query, activeChapterNum = 2, lang = 'en', history = []) {
            const q = (query || '').toLowerCase().trim();
            const isTe = lang === 'te';
            const kb = this.KB;

            // 1. Direct Verse Number Lookup (e.g. "1.41", "1.42", "1.40", "2.47", "18.66", "11.32")
            const verseMatch = q.match(/(?:bhagavad\s*gita|verse|శ్లోకం|అధ్యాయం)?\s*(\b[1-9]|1[0-8])\s*[\.\:\-\/]\s*([1-9]|[1-7][0-9]|78)(?:\s*[-–]\s*([1-9]|[1-7][0-9]|78))?\b/i);
            if (verseMatch) {
                const ch = parseInt(verseMatch[1], 10);
                const vsStart = parseInt(verseMatch[2], 10);
                const vsEnd = verseMatch[3] ? parseInt(verseMatch[3], 10) : vsStart;
                return this.formatSpecificVerseLookup(ch, vsStart, vsEnd, query, lang);
            }

            // 2. Character Matches
            for (const key of Object.keys(kb.characters)) {
                const charData = kb.characters[key];
                if (charData.keywords.some(kw => q.includes(kw))) {
                    return this.formatKnowledgeCard(charData, lang);
                }
            }

            // 3. Philosophical Themes & Pillars
            for (const key of Object.keys(kb.philosophies)) {
                const phil = kb.philosophies[key];
                if (phil.keywords.some(kw => q.includes(kw))) {
                    return this.formatKnowledgeCard(phil, lang);
                }
            }

            // 4. Emotional & Real-Life Dilemmas
            for (const key of Object.keys(kb.lifeSituations)) {
                const sit = kb.lifeSituations[key];
                if (sit.keywords.some(kw => q.includes(kw))) {
                    return this.formatKnowledgeCard(sit, lang);
                }
            }

            // 5. Explicit Chapter Summaries & Key Verses
            const chNum = this.extractChapterNumber(q) || (q.includes('summary') || q.includes('సారాంశం') || q.includes('advice') || q.includes('ఉపదేశం') || q.includes('shloka') || q.includes('శ్లోకం') ? (activeChapterNum || 2) : null);
            if (chNum && GITA_KNOWLEDGE.chapters[chNum]) {
                const chData = GITA_KNOWLEDGE.chapters[chNum];
                if (q.includes('summary') || q.includes('short') || q.includes('capsule') || q.includes('సారాంశం') || q.includes('సంక్షిప్తంగా')) {
                    return this.formatSummaryResponse(chData, lang);
                }
                if (q.includes('advice') || q.includes('lesson') || q.includes('ఉపదేశం') || q.includes('బోధ')) {
                    return this.formatAdviceResponse(chData, lang);
                }
                if (q.includes('shloka') || q.includes('sloka') || q.includes('verse') || q.includes('శ్లోకం')) {
                    return this.formatShlokaResponse(chData, lang);
                }
                return this.formatGeneralChapterResponse(chData, lang, query);
            }

            // 6. Natural Language Contextual Synthesis for Any Query
            return this.synthesizeDynamicAnswer(query, activeChapterNum, lang);
        }

        static extractChapterNumber(query) {
            const match = query.match(/(?:chapter|adhyaya|adhyay|అధ్యాయం|అధ్యాయము)\s*(\d+)/i) || query.match(/\b([1-9]|1[0-8])\b/);
            if (match && match[1]) {
                const num = parseInt(match[1], 10);
                if (num >= 1 && num <= 18) return num;
            }
            return null;
        }

        static formatKnowledgeCard(item, lang) {
            const isTe = lang === 'te';
            const title = isTe ? item.title_te : item.title_en;
            const badge = isTe ? item.badge_te : item.badge_en;
            const answer = isTe ? item.answer_te : item.answer_en;
            const app = isTe ? item.application_te : item.application_en;
            const takeaway = isTe ? item.takeaway_te : item.takeaway_en;
            const followUps = isTe ? item.followUps_te : item.followUps_en;
            const v = item.shloka;

            const appLabel = isTe ? `💡 ఆచరణాత్మక జీవిత మార్గదర్శనం:` : `💡 Practical Life Application:`;
            const takeawayLabel = isTe ? `✨ ముఖ్య సూత్రం:` : `✨ Key Spiritual Takeaway:`;
            const meaningLabel = isTe ? `✨ తాత్పర్యం:` : `✨ Meaning:`;

            const speechText = `${title}. ${answer}. ${isTe ? 'ముఖ్య సూత్రం:' : 'Key takeaway:'} ${takeaway}`;

            let html = `
                <div class="gita-response-card">
                    <div class="gita-response-badge">${badge}</div>
                    <h4 class="gita-response-title">${title}</h4>
                    <p class="gita-response-desc">${answer}</p>
            `;

            if (v) {
                html += `
                    <div class="gita-sanskrit-verse">${v.sanskrit}</div>
                    <div class="gita-transliteration"><em>${v.transliteration}</em></div>
                    <div class="gita-quote-box">
                        <p><strong>${meaningLabel}</strong> ${isTe ? v.meaning_te : v.meaning_en}</p>
                    </div>
                `;
            }

            html += `
                    <div class="gita-highlight-box">
                        <strong>${appLabel}</strong>
                        <p>${app}</p>
                    </div>
                    <div class="gita-highlight-box" style="border-left-color: #7d5fff;">
                        <strong>${takeawayLabel}</strong>
                        <p>${takeaway}</p>
                    </div>
            `;

            if (followUps && followUps.length > 0) {
                html += `
                    <div class="gita-followup-container">
                        ${followUps.map(f => `<button type="button" class="gita-followup-chip" data-prompt="${f}">💬 ${f}</button>`).join('')}
                    </div>
                `;
            }

            html += `</div>`;

            return { title, speechText, html, followUps };
        }

        static synthesizeDynamicAnswer(query, activeChapterNum, lang) {
            const isTe = lang === 'te';
            const chNum = activeChapterNum || 2;
            const ch = GITA_KNOWLEDGE.chapters[chNum] || GITA_KNOWLEDGE.chapters[2];

            const title = isTe ? `🪷 దివ్య గీతా సమాధానం: "${query}"` : `🪷 Gita Guidance: "${query}"`;
            const badge = isTe ? `🕉️ దివ్య వివేకం • ప్రత్యక్ష సమాధానం` : `🕉️ Divine Wisdom • Direct Answer`;

            const answer_en = `The Bhagavad Gita illuminates your question: *"${query}"*. In the sacred dialogue between Lord Krishna and Arjuna, every life dilemma is grounded in discerning between the temporary material realm (*Prakriti*) and the eternal conscious soul (*Atman*). In Chapter ${ch.number} (${ch.title}), Krishna counsels that by performing our duties without selfish craving, grounding the mind in steady wisdom, and dedicating our actions to the Supreme, we transcend doubt and confusion.`;
            const answer_te = `మీ ప్రశ్న: *"${query}"* కు భగవద్గీత దివ్య సమాధానాన్ని ఇస్తుంది. కురుక్షేత్రంలో అర్జునుడికి శ్రీకృష్ణుడు తెలిపినట్లుగా, సమస్త సంశయాలు తాత్కాలిక భౌతిక వ్యామోహం వల్లే కలుగుతాయి. ${ch.number}వ అధ్యాయం (${ch.teluguTitle}) లో భగవానుడు ప్రబోధించినట్లుగా, ఫలితంపై ఆశ లేకుండా నీ కర్తవ్యాన్ని నిష్కామంగా నిర్వర్తించి, మనస్సును భగవంతునిపై లగ్నం చేసినప్పుడు సమస్త సందేహాలు నివృత్తి అవుతాయి.`;

            const advice = isTe ? (ch.krishna_advice_te || ch.krishna_advice) : ch.krishna_advice;
            const lesson = isTe ? (ch.life_lesson_te || ch.life_lesson) : ch.life_lesson;
            const v = ch.key_verse;

            const appLabel = isTe ? `💡 ఆచరణాత్మక మార్గదర్శనం:` : `💡 Practical Application:`;
            const takeawayLabel = isTe ? `✨ శ్రీకృష్ణుని దివ్య సందేశం:` : `✨ Krishna's Divine Message:`;
            const meaningLabel = isTe ? `✨ శ్లోక భావం:` : `✨ Verse Meaning:`;

            const followUps = isTe ? [
                `అధ్యాయం ${ch.number} సారాంశం చెప్పు`,
                "నా మనస్సును ఎలా ప్రశాంతంగా ఉంచుకోవాలి?",
                "కర్మ యోగం అంటే ఏమిటి?"
            ] : [
                `Chapter ${ch.number} 1-minute summary`,
                "How to keep my mind calm?",
                "What is Karma Yoga?"
            ];

            const speechText = `${isTe ? answer_te : answer_en} ${advice}`;

            const html = `
                <div class="gita-response-card">
                    <div class="gita-response-badge">${badge}</div>
                    <h4 class="gita-response-title">${title}</h4>
                    <p class="gita-response-desc">${isTe ? answer_te : answer_en}</p>
                    <div class="gita-sanskrit-verse">${v.sanskrit}</div>
                    <div class="gita-transliteration"><em>${v.transliteration}</em></div>
                    <div class="gita-quote-box">
                        <p><strong>${meaningLabel}</strong> ${isTe ? v.meaning_te : v.meaning_en}</p>
                    </div>
                    <div class="gita-highlight-box">
                        <strong>${appLabel}</strong>
                        <p>${lesson}</p>
                    </div>
                    <div class="gita-highlight-box" style="border-left-color: #7d5fff;">
                        <strong>${takeawayLabel}</strong>
                        <p>"${advice}"</p>
                    </div>
                    <div class="gita-followup-container">
                        ${followUps.map(f => `<button type="button" class="gita-followup-chip" data-prompt="${f}">💬 ${f}</button>`).join('')}
                    </div>
                </div>
            `;

            return { title, speechText, html, followUps };
        }

        static formatSpecificVerseLookup(chNum, vsStart, vsEnd = vsStart, rawQuery = '', lang = 'en') {
            const isTe = lang === 'te';
            const verseRef = (vsEnd && vsEnd !== vsStart) ? `${chNum}.${vsStart}-${vsEnd}` : `${chNum}.${vsStart}`;
            const ch = GITA_KNOWLEDGE.chapters[chNum] || GITA_KNOWLEDGE.chapters[2];

            // 1. Extract verse translation/text from rawQuery or from page DOM if available
            let extractedText = '';
            const quotedMatch = (rawQuery || '').match(/["“](.+?)["”]/) || (rawQuery || '').match(/:\s*(.+)$/);
            if (quotedMatch && quotedMatch[1] && quotedMatch[1].trim().length > 5) {
                extractedText = quotedMatch[1].trim();
            }

            if (!extractedText && typeof document !== 'undefined') {
                const allH5 = document.querySelectorAll('h5');
                for (const h5 of allH5) {
                    const txt = h5.textContent || '';
                    if (txt.includes(verseRef) || txt.includes(`${chNum}.${vsStart}`)) {
                        let sibling = h5.nextElementSibling;
                        while (sibling && sibling.tagName !== 'H5' && sibling.tagName !== 'DIV') {
                            if (sibling.tagName === 'P') {
                                extractedText = sibling.textContent.trim();
                                break;
                            }
                            sibling = sibling.nextElementSibling;
                        }
                        if (extractedText) break;
                    }
                }
            }

            // 2. Generate profound context and explanations
            let explanation = '';
            let lifeLesson = '';
            let speakerContext = '';
            let nextVersePrompt = `${chNum}.${vsEnd ? vsEnd + 1 : vsStart + 1}`;

            if (chNum === 1) {
                speakerContext = isTe 
                    ? `కురుక్షేత్ర రణరంగంలో రెండు సేనల మధ్య నిలబడినప్పుడు అర్జునుడు తీవ్ర దుఃఖం, మోహం మరియు భయంతో శ్రీకృష్ణునితో పలికిన మాటలు.` 
                    : `Spoken by Arjuna to Lord Krishna in the midst of both armies on the battlefield of Kurukshetra as he experiences profound grief, moral hesitation, and compassion for his kinsmen.`;

                if (vsStart >= 40 && vsStart <= 44) {
                    explanation = isTe
                        ? `ఈ శ్లోకంలో అర్జునుడు యుద్ధం వల్ల కలిగే సామాజిక విపత్తులను వివరిస్తున్నాడు: కులపెద్దలు నశించినప్పుడు కుటుంబ సంప్రదాయాలు, ధర్మం నాశనమవుతాయి; సమాజంలో అధర్మం, అవినీతి ప్రబలి స్త్రీల గౌరవం, సంస్కారాలు దెబ్బతింటాయి; తద్వారా సమాజం సంక్షోభంలో పడుతుందని అర్జునుడు ఆందోళన చెందుతున్నాడు.`
                        : `Arjuna is expressing his deep moral and societal agony: When noble elders are destroyed in battle, ancient family traditions (*Kula-dharma*) collapse. Lawlessness overtakes the household, moral corruption sets in, and society suffers breakdown of ethical values (*Varna-sankara*).`;
                    lifeLesson = isTe
                        ? `కుటుంబ విలువలు, ధర్మం మరియు నైతికతను కాపాడుకోవడం ప్రతి ఒక్కరి ప్రాథమిక బాధ్యత. అయితే వ్యక్తిగత భావోద్వేగాల కన్నా ఉన్నతమైన ధర్మరక్షణే ముఖ్యమని 2వ అధ్యాయంలో శ్రీకృష్ణుడు స్పష్టం చేస్తాడు.`
                        : `Preserving ethical culture and family integrity is vital. However, Krishna later clarifies in Chapter 2 that emotional attachment (*Moha*) should never blind one from defending righteousness (*Dharma*) against injustice.`;
                } else if (vsStart >= 28 && vsStart <= 37) {
                    explanation = isTe
                        ? `అర్జునుడు తన గురువులు, తాతలు, బంధువులను చంపి రాజ్యం పొందడం పాపమని భావించి, గాండీవం చేజారి వణికిపోతూ యుద్ధం చేయనని కుప్పకూలిపోతున్నాడు.`
                        : `Arjuna describes his bodily trembling, burning skin, and slipping of bow *Gandiva*. Overcome by attachment to his teachers and cousins, he rejects victory obtained through killing relatives.`;
                    lifeLesson = isTe
                        ? `వివేకం లోపించినప్పుడు భావోద్వేగాలు మనిషిని కర్తవ్య విముఖుడిని చేస్తాయి. సరైన ధర్మనిర్ణయం చేయడానికి అంతర్మధనంలో ఆధ్యాత్మిక జ్ఞానం అవసరం.`
                        : `When emotions overcome spiritual discernment (*Buddhi*), a person abandons duty. Spiritual guidance from the Gita helps restore mental equilibrium in high-stakes dilemmas.`;
                } else {
                    explanation = isTe
                        ? `అర్జునుని హృదయ వేదన మరియు కురుక్షేత్ర మహాసంగ్రామ పూర్వరంగం — ఇది శ్రీకృష్ణుని విశ్వజనీన దివ్యోపదేశానికి నాంది.`
                        : `This verse portrays the human condition of doubt, sorrow, and crisis that prepares the disciple for divine illumination.`;
                    lifeLesson = isTe
                        ? `సందిగ్ధ సమయాలలో దైవానుగ్రహాన్ని, జ్ఞానాన్ని ఆశ్రయించాలి.`
                        : `When confusion strikes, seek clarity through timeless spiritual wisdom.`;
                }
            } else if (chNum === 2) {
                speakerContext = isTe
                    ? `శ్రీకృష్ణ భగవానుడు మోహంలో మునిగిపోయిన అర్జునుడికి సాంఖ్య యోగం (ఆత్మజ్ఞానం) మరియు కర్మయోగ రహస్యాలను ఉపదేశిస్తున్న సందర్భం.`
                    : `Lord Krishna addressing Arjuna, dispelling his sorrow through the immortal truth of the indestructible soul (*Atman*) and selfless action (*Karma Yoga*).`;

                if (vsStart === 47) {
                    explanation = isTe
                        ? `భగవద్గీతలోని సర్వోన్నత కర్మయోగ సిద్ధాంతం: "నీకు పని చేయడంలోనే సంపూర్ణ హక్కు ఉంది, ఫలితాల యందు ఎన్నడూ లేదు. ఫలితమే లక్ష్యంగా పనిచేయకుము, అలాగని కర్మ చేయకుండా సోమరిగా ఉండకుము."`
                        : `The supreme principle of Nishkama Karma Yoga: You have a sacred right to perform your prescribed duty, but never to the fruits of action. Never let fruits be your motivation, nor succumb to inaction.`;
                    lifeLesson = isTe
                        ? `ఫలితం గురించి అతిగా ఆందోళన చెందకుండా ప్రస్తుతం చేయాల్సిన పనిపై 100% దృష్టి పెడితే ఉత్తమ ఫలితాలు, మనశ్శాంతి లభిస్తాయి.`
                        : `Pour 100% of your focus into your present effort right now. Relinquishing outcome-anxiety creates peak productivity and inner tranquility.`;
                } else if (vsStart >= 11 && vsStart <= 30) {
                    explanation = isTe
                        ? `శరీరం నశించినా ఆత్మ ఎన్నడూ పుట్టదు, చావదు. పాత వస్త్రాలను విడిచి కొత్త వస్త్రాలు ధరించినట్లే, జీవాత్మ పాత శరీరాన్ని విడిచి కొత్త శరీరాన్ని పొందుతుంది.`
                        : `The indestructible nature of the soul (*Atman*): Weapons cannot pierce it, fire cannot burn it, water cannot wet it, wind cannot dry it. Death is simply the soul discarding worn-out bodies.`;
                    lifeLesson = isTe
                        ? `తాత్కాలిక భౌతిక నష్టాలకు, మార్పులకు భయపడకండి; మీలోని శాశ్వత ఆత్మశక్తిని గుర్తించి ధైర్యంగా ముందుకు సాగండి.`
                        : `Never be devastated by external changes or material loss; anchor your identity in the eternal and unbreakable within.`;
                } else if (vsStart >= 54) {
                    explanation = isTe
                        ? `స్థితప్రజ్ఞుని లక్షణాలు: సుఖదుఃఖాలలో సమచిత్తం కలిగి, కోరికలను జయించి, ఇంద్రియాలను అదుపులో ఉంచుకునే సమబుద్ధి కలవాడే స్థితప్రజ్ఞుడు.`
                        : `The characteristics of the *Sthitaprajna* (one established in steady wisdom): undisturbed by adversity, free from longing in pleasure, devoid of fear and anger.`;
                    lifeLesson = isTe
                        ? `బాహ్య పరిస్థితులు ఎలా ఉన్నా అంతరంగంలో శాంతి, సమత్వాన్ని కాపాడుకోవడమే నిజమైన వ్యక్తిత్వ వికాసం.`
                        : `Master internal balance — equanimity in success and failure is the highest mental power.`;
                } else {
                    explanation = isTe
                        ? `${ch.teluguTitle} లోని ఈ శ్లోకం ద్వారా శ్రీకృష్ణుడు కర్తవ్య పాలన, బుద్ధి వికాసం మరియు సమత్వ యోగాన్ని ఉపదేశిస్తున్నాడు.`
                        : `In this verse of Chapter 2 (${ch.title}), Krishna directs Arjuna towards decisive spiritual intellect and fearlessness.`;
                    lifeLesson = isTe
                        ? `సమత్వ బుద్ధితో చేసే పనులే నిజమైన యోగము.`
                        : `Equanimity of mind in all outcomes is true Yoga (*Samatvam Yoga Uchyate*).`;
                }
            } else {
                speakerContext = isTe
                    ? `భగవద్గీత అధ్యాయం ${chNum} (${ch.teluguTitle}) లోని దివ్య సందేశం.`
                    : `Sacred teaching from Chapter ${chNum}: ${ch.title}.`;
                explanation = isTe
                    ? `${ch.teluguTitle} సారాంశము: ${ch.summary_te}`
                    : `Core wisdom of ${ch.title}: ${ch.summary_en}`;
                lifeLesson = isTe
                    ? (ch.life_lesson_te || ch.life_lesson)
                    : ch.life_lesson;
            }

            const title = isTe ? `📜 భగవద్గీత శ్లోక విశ్లేషణ: ${verseRef}` : `📜 Bhagavad Gita Verse Analysis: ${verseRef}`;
            const badge = isTe ? `🪷 అధ్యాయం ${chNum} • శ్లోకం ${verseRef}` : `🪷 Chapter ${chNum} • Verse ${verseRef}`;

            const followUps = isTe ? [
                `అధ్యాయం ${chNum} శ్లోకం ${nextVersePrompt} భావం ఏమిటి?`,
                `అధ్యాయం ${chNum} పూర్తి సారాంశం`,
                `శ్రీకృష్ణుని ఉపదేశం • అధ్యాయం ${chNum}`
            ] : [
                `Explain Verse ${nextVersePrompt} next`,
                `Chapter ${chNum} 1-minute summary`,
                `What is Krishna's main advice in Chapter ${chNum}?`
            ];

            const html = `
                <div class="gita-response-card">
                    <div class="gita-response-badge">${badge}</div>
                    <h4 class="gita-response-title">${title}</h4>
                    
                    ${extractedText ? `
                        <div class="gita-highlight-box" style="border-left-color: #fce080;">
                            <strong>📖 ${isTe ? 'శ్లోక వాక్యము (గ్రంథం నుండి):' : 'Verse Text (from Chapter):'}</strong>
                            <p style="font-style: italic; color: #fce080;">"${extractedText}"</p>
                        </div>
                    ` : ''}

                    <p class="gita-response-desc" style="font-size: 11px; color: #a5a5c0; margin: 2px 0 4px 0;">
                        <strong>🕊️ ${isTe ? 'సందర్భము & వక్త:' : 'Context & Speaker:'}</strong> ${speakerContext}
                    </p>

                    <div class="gita-highlight-box">
                        <strong>💡 ${isTe ? 'సులభ శ్లోక భావం (సరళ వివరణ):' : 'Simple Verse Explanation:'}</strong>
                        <p>${explanation}</p>
                    </div>

                    <div class="gita-quote-box">
                        <p><strong>🌟 ${isTe ? 'జీవితానికి ఆచరణ పాఠం:' : 'Practical Life Application:'}</strong> ${lifeLesson}</p>
                    </div>

                    <div class="gita-followup-container">
                        ${followUps.map(f => `<button type="button" class="gita-followup-chip" data-prompt="${f}">💬 ${f}</button>`).join('')}
                    </div>
                </div>
            `;

            const speechTitle = isTe ? `భగవద్గీత శ్లోకం ${verseRef} వివరణ` : `Bhagavad Gita Verse ${verseRef} insights`;
            const verseExcerpt = extractedText ? (isTe ? `శ్లోక వాక్యము: ${extractedText}. ` : `Verse text: ${extractedText}. `) : '';
            const speechText = `${speechTitle}. ${verseExcerpt}${isTe ? 'వివరణ:' : 'Explanation:'} ${explanation}. ${isTe ? 'జీవిత పాఠం:' : 'Life lesson:'} ${lifeLesson}`;

            return { title, speechText, html, followUps };
        }

        static formatSummaryResponse(ch, lang) {
            const isTe = lang === 'te';
            const title = isTe ? ch.teluguTitle : ch.title;
            const summary = isTe ? ch.summary_te : ch.summary_en;
            const capsule = isTe ? ch.capsule_1min_te : ch.capsule_1min_en;
            const badge = isTe ? `⚡ 1-నిమిషం సారాంశం • అధ్యాయం ${ch.number}` : `⚡ 1-Minute Capsule • Chapter ${ch.number}`;
            const coreLabel = isTe ? `🌟 ముఖ్య సారాంశం:` : `🌟 Core Essence:`;

            const followUps = isTe ? [
                `అధ్యాయం ${ch.number} లో శ్రీకృష్ణుని ఉపదేశం`,
                `అధ్యాయం ${ch.number} ముఖ్య శ్లోకం`,
                "ఒత్తిడిని ఎలా తగ్గించుకోవాలి?"
            ] : [
                `Krishna's advice in Chapter ${ch.number}`,
                `Key shloka of Chapter ${ch.number}`,
                "How to overcome stress?"
            ];

            return {
                title: isTe ? `✨ ${title} (అధ్యాయం ${ch.number})` : `✨ ${title} (Chapter ${ch.number})`,
                speechText: `${title}. ${summary}. ${capsule}`,
                html: `
                    <div class="gita-response-card">
                        <div class="gita-response-badge">${badge}</div>
                        <h4 class="gita-response-title">${title}</h4>
                        <p class="gita-response-desc">${summary}</p>
                        <div class="gita-highlight-box">
                            <strong>${coreLabel}</strong>
                            <p>${capsule}</p>
                        </div>
                        <div class="gita-followup-container">
                            ${followUps.map(f => `<button type="button" class="gita-followup-chip" data-prompt="${f}">💬 ${f}</button>`).join('')}
                        </div>
                    </div>
                `,
                followUps
            };
        }

        static formatAdviceResponse(ch, lang) {
            const isTe = lang === 'te';
            const title = isTe ? ch.teluguTitle : ch.title;
            const advice = isTe ? (ch.krishna_advice_te || ch.krishna_advice) : ch.krishna_advice;
            const lesson = isTe ? (ch.life_lesson_te || ch.life_lesson) : ch.life_lesson;
            const badge = isTe ? `🕉️ శ్రీకృష్ణుని దివ్య ఉపదేశం` : `🕉️ Lord Krishna's Divine Counsel`;
            const appLabel = isTe ? `💡 ఆచరణాత్మక జీవిత మార్గదర్శనం:` : `💡 Practical Life Application:`;

            const followUps = isTe ? [
                `అధ్యాయం ${ch.number} సారాంశం`,
                `అధ్యాయం ${ch.number} ముఖ్య శ్లోకం`,
                "జీవిత లక్ష్యం ఏమిటి?"
            ] : [
                `Chapter ${ch.number} Summary`,
                `Key shloka of Chapter ${ch.number}`,
                "What is my life purpose?"
            ];

            return {
                title: isTe ? `🌟 శ్రీకృష్ణుని ఉపదేశం • అధ్యాయం ${ch.number}` : `🌟 Krishna's Counsel • Chapter ${ch.number}`,
                speechText: isTe ? `అధ్యాయం ${ch.number} లో శ్రీకృష్ణుని ఉపదేశం: ${advice}. ముఖ్య జీవిత పాఠం: ${lesson}` : `In Chapter ${ch.number}, Lord Krishna counsels: ${advice}. Key life lesson: ${lesson}`,
                html: `
                    <div class="gita-response-card">
                        <div class="gita-response-badge">${badge}</div>
                        <h4 class="gita-response-title">${title}</h4>
                        <div class="gita-quote-box">
                            <p>"${advice}"</p>
                        </div>
                        <div class="gita-highlight-box">
                            <strong>${appLabel}</strong>
                            <p>${lesson}</p>
                        </div>
                        <div class="gita-followup-container">
                            ${followUps.map(f => `<button type="button" class="gita-followup-chip" data-prompt="${f}">💬 ${f}</button>`).join('')}
                        </div>
                    </div>
                `,
                followUps
            };
        }

        static formatShlokaResponse(ch, lang) {
            const isTe = lang === 'te';
            const v = ch.key_verse;
            const meaning = isTe ? v.meaning_te : v.meaning_en;
            const badge = isTe ? `📜 పవిత్ర సంస్కృత శ్లోకం` : `📜 Sacred Sanskrit Shloka`;
            const meaningLabel = isTe ? `✨ భావము:` : `✨ Meaning:`;

            const followUps = isTe ? [
                `అధ్యాయం ${ch.number} సారాంశం`,
                `శ్రీకృష్ణుని ఉపదేశం • అధ్యాయం ${ch.number}`,
                "కర్మణ్యేవాధికారస్తే భావం"
            ] : [
                `Chapter ${ch.number} Summary`,
                `Krishna's advice in Chapter ${ch.number}`,
                "Meaning of Karmanye Vadhikaraste"
            ];

            return {
                title: isTe ? `🕉️ ముఖ్య శ్లోకం • అధ్యాయం ${ch.number}` : `🕉️ Key Verse • Chapter ${ch.number}`,
                speechText: `${v.transliteration}. ${isTe ? 'భావము:' : 'Meaning:'} ${meaning}`,
                html: `
                    <div class="gita-response-card">
                        <div class="gita-response-badge">${badge}</div>
                        <div class="gita-sanskrit-verse">${v.sanskrit}</div>
                        <div class="gita-transliteration"><em>${v.transliteration}</em></div>
                        <div class="gita-highlight-box">
                            <strong>${meaningLabel}</strong>
                            <p>${meaning}</p>
                        </div>
                        <div class="gita-followup-container">
                            ${followUps.map(f => `<button type="button" class="gita-followup-chip" data-prompt="${f}">💬 ${f}</button>`).join('')}
                        </div>
                    </div>
                `,
                followUps
            };
        }

        static formatDilemmaResponse(dilemma, lang) {
            const isTe = lang === 'te';
            const title = isTe ? dilemma.teluguTitle : dilemma.title;
            const text = isTe ? dilemma.recommendation_te : dilemma.recommendation_en;
            const badge = isTe ? `🌿 దివ్య జీవన పరిష్కారం` : `🌿 Timeless Life Solution`;
            const btnText = isTe ? `మరింత చదవండి ➔` : `Read Deep Discourse ➔`;

            const followUps = isTe ? [
                "కోపాన్ని ఎలా అదుపు చేసుకోవాలి?",
                "చదువులో ఏకాగ్రత ఎలా పెంచుకోవాలి?",
                "కర్మ యోగం అంటే ఏమిటి?"
            ] : [
                "How to control anger?",
                "How to stay focused on studies?",
                "What is Karma Yoga?"
            ];

            return {
                title: isTe ? `🌿 జీవన మార్గదర్శనం: ${title}` : `🌿 Life Guidance: ${title}`,
                speechText: `${title}. ${text}`,
                html: `
                    <div class="gita-response-card">
                        <div class="gita-response-badge">${badge}</div>
                        <h4 class="gita-response-title">${title}</h4>
                        <p class="gita-response-desc">${text}</p>
                        <div class="gita-action-row">
                            <a href="${dilemma.chapterLink}" class="btn-gita-action">${btnText}</a>
                        </div>
                        <div class="gita-followup-container">
                            ${followUps.map(f => `<button type="button" class="gita-followup-chip" data-prompt="${f}">💬 ${f}</button>`).join('')}
                        </div>
                    </div>
                `,
                followUps
            };
        }

        static formatGeneralChapterResponse(ch, lang, query) {
            const isTe = lang === 'te';
            const title = isTe ? ch.teluguTitle : ch.title;
            const summary = isTe ? ch.summary_te : ch.summary_en;
            const advice = isTe ? (ch.krishna_advice_te || ch.krishna_advice) : ch.krishna_advice;
            const badge = isTe ? `📖 అధ్యాయం ${ch.number} దివ్య బోధ` : `📖 Chapter ${ch.number} Discourse`;
            const guideLabel = isTe ? `🌟 శ్రీకృష్ణుని మార్గదర్శనం:` : `🌟 Krishna's Guidance:`;

            const followUps = isTe ? [
                `అధ్యాయం ${ch.number} 1-నిమిషం సారాంశం`,
                `అధ్యాయం ${ch.number} ముఖ్య శ్లోకం`,
                "ఒత్తిడిని ఎలా తగ్గించుకోవాలి?"
            ] : [
                `Chapter ${ch.number} 1-minute summary`,
                `Key shloka of Chapter ${ch.number}`,
                "How to overcome stress?"
            ];

            return {
                title: isTe ? `📖 ${title} (అధ్యాయం ${ch.number})` : `📖 ${title} (Chapter ${ch.number})`,
                speechText: `${title}. ${summary}. ${isTe ? 'శ్రీకృష్ణుని ఉపదేశం:' : 'Krishna counsels:'} ${advice}`,
                html: `
                    <div class="gita-response-card">
                        <div class="gita-response-badge">${badge}</div>
                        <h4 class="gita-response-title">${title}</h4>
                        <p class="gita-response-desc">${summary}</p>
                        <div class="gita-highlight-box">
                            <strong>${guideLabel}</strong>
                            <p>${advice}</p>
                        </div>
                        <div class="gita-followup-container">
                            ${followUps.map(f => `<button type="button" class="gita-followup-chip" data-prompt="${f}">💬 ${f}</button>`).join('')}
                        </div>
                    </div>
                `,
                followUps
            };
        }

        static formatExternalAIResponse(text, title, lang) {
            const isTe = lang === 'te';
            const cleanTitle = title || (isTe ? 'దివ్య గీతా మార్గదర్శనం' : 'Divine Gita Guidance');
            const badge = isTe ? '🪷 గీతా AI ప్రత్యక్ష జ్ఞానం' : '🪷 Live Gita AI Guidance';

            // Convert raw markdown paragraphs into html paragraphs
            const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);
            const formattedBody = paragraphs.map(p => {
                const formatted = p
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(/^#+\s*(.*)$/gm, '<h4 class="gita-response-title" style="margin-top:6px;">$1</h4>');
                return `<p class="gita-response-desc">${formatted}</p>`;
            }).join('');

            const followUps = isTe ? [
                "మరింత వివరంగా వివరించండి",
                "దీనికి సంబంధించిన శ్లోకం ఏమిటి?",
                "రోజువారీ జీవితంలో ఎలా ఆచరించాలి?"
            ] : [
                "Tell me more about this",
                "What is the related Sanskrit verse?",
                "How do I apply this daily?"
            ];

            const html = `
                <div class="gita-response-card">
                    <div class="gita-response-badge">${badge}</div>
                    <h4 class="gita-response-title">${cleanTitle}</h4>
                    ${formattedBody}
                    <div class="gita-followup-container">
                        ${followUps.map(f => `<button type="button" class="gita-followup-chip" data-prompt="${f}">💬 ${f}</button>`).join('')}
                    </div>
                </div>
            `;

            const speechText = text.replace(/[#*•]/g, ' ').substring(0, 300);
            return { title: cleanTitle, speechText, html, followUps };
        }
    }

    // =========================================================================
    // 6. GITA AI CONTROLLER (SACRED COSMIC OBSIDIAN & CELESTIAL GOLD LUXURY THEME)
    // =========================================================================
    class GitaUIController {
        constructor() {
            this.context = detectPageContext();
            this.voiceEngine = new DivineVoiceEngine();
            this.speechRec = null;
            this.activeChapter = this.context.chapter || 2;
            this.currentLanguage = this.context.language || 'en';
            this.isOpen = false;
            this.isVoiceOverlayOpen = false;
            this.voiceTimerInterval = null;
            this.voiceSeconds = 0;
            this.hasStartedChat = false;
            this.conversationHistory = [];
            this.activePlayingVoiceBtnId = null;

            this.voiceEngine.onStateChangeCallback = (state) => {
                if (!state.isSpeaking) {
                    this.resetAllListenChips();
                } else if (state.isPaused && this.activePlayingVoiceBtnId) {
                    this.setListenChipState(this.activePlayingVoiceBtnId, 'paused');
                } else if (this.activePlayingVoiceBtnId) {
                    this.setListenChipState(this.activePlayingVoiceBtnId, 'playing');
                }
            };

            this.initDOM();
            this.initSpeechRec();
            this.attachEvents();
            this.injectVerseAssistButtons();
            setTimeout(() => this.injectVerseAssistButtons(), 300);
            setTimeout(() => this.injectVerseAssistButtons(), 1000);
            this.checkPendingPrompts();
        }

        formatTime() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            return `${hours}:${minutes} ${ampm}`;
        }

        initDOM() {
            // Guaranteed Core Styles for Launcher & Badge (Immune to stylesheet caching)
            if (!document.getElementById('gitaChatGuaranteedStyles')) {
                const style = document.createElement('style');
                style.id = 'gitaChatGuaranteedStyles';
                style.textContent = `
                    #gitaChatLauncher.gita-chat-launcher {
                        position: fixed !important;
                        bottom: 24px !important;
                        right: 24px !important;
                        z-index: 2147483647 !important;
                        width: 56px !important;
                        height: 56px !important;
                        border-radius: 50% !important;
                        background: linear-gradient(135deg, #fce080 0%, #e6a817 50%, #7d5fff 100%) !important;
                        background-size: 200% 200% !important;
                        box-shadow: 0 10px 28px rgba(230, 168, 23, 0.55), 0 2px 8px rgba(0, 0, 0, 0.8) !important;
                        border: 2px solid rgba(255, 255, 255, 0.95) !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        cursor: pointer !important;
                        user-select: none !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                        pointer-events: auto !important;
                        transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease !important;
                    }
                    #gitaChatLauncher:hover {
                        transform: scale(1.08) translateY(-2px) !important;
                        box-shadow: 0 14px 34px rgba(230, 168, 23, 0.7), 0 0 20px rgba(252, 224, 128, 0.6) !important;
                    }
                    #gitaChatLauncher .gita-launcher-icon {
                        position: absolute !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        color: #050508 !important;
                    }
                    #gitaChatLauncher .gita-launcher-icon svg {
                        width: 26px !important;
                        height: 26px !important;
                        fill: #050508 !important;
                    }
                    #gitaChatLauncher.active .chat-open-icon {
                        opacity: 0 !important;
                        transform: scale(0) rotate(-90deg) !important;
                    }
                    #gitaChatLauncher.active .chat-close-icon {
                        opacity: 1 !important;
                        transform: scale(1) rotate(0deg) !important;
                    }
                    #gitaChatLauncher.active .chat-close-icon svg {
                        stroke: #050508 !important;
                    }
                    .gita-launcher-badge {
                        position: absolute !important;
                        right: 68px !important;
                        background: rgba(18, 14, 28, 0.96) !important;
                        border: 1px solid rgba(230, 168, 23, 0.6) !important;
                        padding: 6px 14px !important;
                        border-radius: 20px !important;
                        display: flex !important;
                        align-items: center !important;
                        gap: 7px !important;
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7), 0 0 10px rgba(230, 168, 23, 0.3) !important;
                        white-space: nowrap !important;
                        pointer-events: none !important;
                    }
                    .launcher-badge-dot {
                        width: 7px !important;
                        height: 7px !important;
                        border-radius: 50% !important;
                        background: #fce080 !important;
                        box-shadow: 0 0 8px #fce080 !important;
                    }
                    .launcher-badge-text {
                        font-size: 12px !important;
                        font-weight: 700 !important;
                        color: #fce080 !important;
                        letter-spacing: 0.4px !important;
                    }

                    /* Issue 4: Guaranteed Hiding of Launcher when Chat, Voice Overlay, Shloka Modal, or Nav Sheet is active */
                    body.gita-chat-active #gitaChatLauncher,
                    body.gita-voice-active #gitaChatLauncher,
                    body.gita-shloka-open #gitaChatLauncher,
                    body.gita-nav-sheet-open #gitaChatLauncher,
                    body.gita-modal-open #gitaChatLauncher,
                    body:has(.gita-shloka-modal-overlay.active) #gitaChatLauncher,
                    body:has(.gita-nav-sheet-overlay.active) #gitaChatLauncher,
                    .gita-nav-sheet-overlay.active ~ #gitaChatLauncher,
                    .gita-shloka-modal-overlay.active ~ #gitaChatLauncher,
                    #gitaChatLauncher.active,
                    .gita-chat-widget.active ~ #gitaChatLauncher,
                    .gita-chat-widget.active + #gitaChatLauncher {
                        display: none !important;
                        opacity: 0 !important;
                        visibility: hidden !important;
                        pointer-events: none !important;
                        transform: scale(0) !important;
                    }

                    @media (max-width: 768px) {
                        /* Issue 1: Remove flag icons in mobile view */
                        .gita-lang-flag {
                            display: none !important;
                        }

                        /* Issue 2: Small size for Gita AI badge and launcher */
                        #gitaChatLauncher.gita-chat-launcher {
                            bottom: calc(14px + env(safe-area-inset-bottom, 0px)) !important;
                            right: 12px !important;
                            width: 44px !important;
                            height: 44px !important;
                            min-width: 44px !important;
                            max-width: 44px !important;
                        }
                        #gitaChatLauncher .gita-launcher-icon svg {
                            width: 20px !important;
                            height: 20px !important;
                        }
                        .gita-launcher-badge {
                            right: 50px !important;
                            padding: 3px 8px !important;
                            gap: 4px !important;
                            height: 24px !important;
                            min-height: 24px !important;
                            max-height: 24px !important;
                            border-radius: 999px !important;
                        }
                        .launcher-badge-dot {
                            width: 5px !important;
                            height: 5px !important;
                        }
                        .launcher-badge-text {
                            font-size: 10px !important;
                            letter-spacing: 0.2px !important;
                        }

                        /* Issue 4 Header Controls & Add (+) Icon Fix */
                        .expand-toggle-btn {
                            display: none !important;
                        }
                        .gita-top-header {
                            padding: calc(8px + env(safe-area-inset-top, 0px)) 10px 8px 10px !important;
                            gap: 5px !important;
                            box-sizing: border-box !important;
                            max-width: 100% !important;
                            overflow: hidden !important;
                        }
                        .gita-header-circle-btn {
                            width: 28px !important;
                            height: 28px !important;
                            min-width: 28px !important;
                            min-height: 28px !important;
                            max-height: 28px !important;
                            flex-shrink: 0 !important;
                        }
                        .gita-header-circle-btn svg {
                            width: 12px !important;
                            height: 12px !important;
                        }
                        #gitaNewChatBtn {
                            display: inline-flex !important;
                            visibility: visible !important;
                            opacity: 1 !important;
                            flex-shrink: 0 !important;
                        }
                        .gita-model-pill {
                            padding: 3px 6px !important;
                            gap: 3px !important;
                            max-width: 115px !important;
                        }
                        .gita-ch-select-model {
                            font-size: 10px !important;
                            max-width: 82px !important;
                        }
                        .gita-lang-toggle-pill {
                            padding: 2px 3px !important;
                            gap: 2px !important;
                            border-radius: 12px !important;
                        }
                        .gita-lang-toggle-pill .lang-btn {
                            font-size: 10.5px !important;
                            font-weight: 700 !important;
                            padding: 3px 7px !important;
                            min-height: 24px !important;
                            touch-action: manipulation !important;
                            cursor: pointer !important;
                        }
                        .gita-header-right-group {
                            gap: 5px !important;
                            flex-shrink: 0 !important;
                        }
                    }

                    /* Guaranteed In-Page Verse Header & ASK AI Pill Styles */
                    h5.gita-verse-header-row,
                    h5:has(.gita-verse-ai-btn) {
                        display: flex !important;
                        align-items: center !important;
                        justify-content: space-between !important;
                        box-sizing: border-box !important;
                        padding: 8px 16px !important;
                        margin: 1.75rem 0 0.6rem 0 !important;
                        background: linear-gradient(135deg, rgba(230, 168, 23, 0.16) 0%, rgba(18, 14, 28, 0.94) 100%) !important;
                        border: 1px solid rgba(230, 168, 23, 0.35) !important;
                        border-left: 4px solid #e6a817 !important;
                        border-radius: 10px !important;
                        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5) !important;
                        gap: 10px !important;
                    }
                    .gita-verse-title {
                        font-size: clamp(14.5px, 2vw, 17.5px) !important;
                        font-weight: 700 !important;
                        color: #fce080 !important;
                        text-align: left !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        line-height: 1.2 !important;
                        letter-spacing: 0.4px !important;
                    }
                    .gita-verse-ai-btn {
                        display: inline-flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        gap: 8px !important;
                        margin: 0 !important;
                        margin-left: auto !important;
                        padding: 4px 16px 4px 13px !important;
                        border-radius: 9999px !important;
                        background: #0d0a17 !important;
                        border: 1.5px solid #d4a017 !important;
                        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6), inset 0 0 8px rgba(212, 160, 23, 0.1) !important;
                        cursor: pointer !important;
                        outline: none !important;
                        transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;
                        text-decoration: none !important;
                        white-space: nowrap !important;
                        flex-shrink: 0 !important;
                        height: 32px !important;
                        min-height: 32px !important;
                        max-height: 32px !important;
                        box-sizing: border-box !important;
                        user-select: none !important;
                    }
                    .gita-verse-ai-btn:hover {
                        background: #181226 !important;
                        border-color: #ffd043 !important;
                        transform: translateY(-1px) scale(1.04) !important;
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.75), 0 0 16px rgba(230, 168, 23, 0.5) !important;
                    }
                    .gita-verse-ai-btn:active {
                        transform: translateY(0) scale(0.98) !important;
                    }
                    .gita-btn-glow-dot {
                        width: 9px !important;
                        height: 9px !important;
                        border-radius: 50% !important;
                        background: #ffe37d !important;
                        box-shadow: 0 0 10px 3px rgba(255, 224, 120, 0.8), 0 0 4px #ffe37d !important;
                        display: inline-block !important;
                        flex-shrink: 0 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .gita-btn-text {
                        color: #ffeaa7 !important;
                        font-size: 13.5px !important;
                        font-weight: 800 !important;
                        letter-spacing: 0.3px !important;
                        line-height: 1 !important;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .gita-verse-ai-btn:hover .gita-btn-text {
                        color: #ffffff !important;
                        text-shadow: 0 0 12px rgba(255, 234, 167, 0.9) !important;
                    }
                `;
                document.head.appendChild(style);
            }

            // 1. Modern Floating Chatbot Launcher Button (Bottom-Right)
            const launcher = document.createElement('div');
            launcher.id = 'gitaChatLauncher';
            launcher.className = 'gita-chat-launcher';
            launcher.setAttribute('role', 'button');
            launcher.setAttribute('tabindex', '0');
            launcher.setAttribute('aria-label', 'Open Gita AI Assistant');
            launcher.innerHTML = `
                <div class="gita-launcher-icon chat-open-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.2-1.31C8.61 21.49 10.26 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
                    </svg>
                </div>
                <div class="gita-launcher-icon chat-close-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <div class="gita-launcher-badge">
                    <span class="launcher-badge-dot"></span>
                    <span class="launcher-badge-text">Gita AI 🪷</span>
                </div>
            `;
            document.body.appendChild(launcher);

            // 2. Real Floating Chat Widget Window
            const widget = document.createElement('div');
            widget.id = 'gitaChatWidget';
            widget.className = 'gita-chat-widget';
            widget.setAttribute('aria-hidden', 'true');
            widget.innerHTML = `
                <!-- Top Header Bar -->
                <div class="gita-top-header">
                    <button type="button" class="gita-header-circle-btn" id="gitaWidgetCloseBtn" aria-label="Close Chat">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div class="gita-header-center-pill">
                        <div class="gita-model-pill" id="gitaModelPill">
                            <span class="gita-model-icon">🪷</span>
                            <select id="gitaChapterSelect" class="gita-ch-select-model" title="Select Chapter">
                                ${Array.from({ length: 18 }, (_, i) => i + 1).map(n => `
                                    <option value="${n}" ${n === this.activeChapter ? 'selected' : ''}>
                                        ${this.currentLanguage === 'te' ? `అధ్యాయం ${n}: ${GITA_KNOWLEDGE.chapters[n].teluguTitle.split(' ')[0]}` : `Ch ${n}: ${GITA_KNOWLEDGE.chapters[n].title.split(' ')[0]}`}
                                    </option>
                                `).join('')}
                            </select>
                            <span class="gita-pill-arrow">▾</span>
                        </div>
                    </div>

                    <div class="gita-header-right-group">
                        <div class="gita-lang-toggle-pill">
                            <button type="button" class="lang-btn ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                            <button type="button" class="lang-btn ${this.currentLanguage === 'te' ? 'active' : ''}" data-lang="te">తెలుగు</button>
                        </div>
                        <button type="button" class="gita-header-circle-btn voice-toggle-btn" id="gitaOpenVoiceModalBtn" title="Voice Mode">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                            </svg>
                        </button>
                        <button type="button" class="gita-header-circle-btn expand-toggle-btn" id="gitaWidgetExpandBtn" title="Maximize View">
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                            </svg>
                        </button>
                        <button type="button" class="gita-header-circle-btn" id="gitaNewChatBtn" title="New Chat">
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Main Scrollable Body Area -->
                <div class="gita-body-area" id="gitaBodyArea">
                    <!-- Discovery / Start Asking Hero Section (Matching Image 1 Left & Image 2 Middle) -->
                    <div class="gita-discovery-hero" id="gitaDiscoveryHero">
                        <div class="gita-hero-avatar-wrap">
                            <div class="gita-hero-lotus-avatar">🪷</div>
                            <div class="gita-thought-bubble">?</div>
                        </div>
                        <h2 class="gita-hero-title" id="gitaHeroTitle">${this.currentLanguage === 'te' ? 'ప్రశ్నించండి' : 'Start Asking'}</h2>
                        <p class="gita-hero-subtitle" id="gitaHeroSubtitle">${this.currentLanguage === 'te' ? 'సందేహాలు అడిగి దివ్య జ్ఞాన సమాధానాలు పొందండి' : 'Ask questions and get instant answers'}</p>

                        <!-- Discovery Cards List (Pills) -->
                        <div class="gita-discovery-list">
                            <div class="gita-discovery-card" data-action="summary">
                                <div class="gita-card-icon-wrap icon-blue">💡</div>
                                <div class="gita-card-texts">
                                    <span class="gita-card-title">${this.currentLanguage === 'te' ? 'అధ్యాయ సారాంశం' : 'Suggestions'}</span>
                                    <span class="gita-card-desc">${this.currentLanguage === 'te' ? '1-నిమిషం అధ్యాయ సారాంశం తెలుసుకోండి' : 'Try 1-minute chapter essence'}</span>
                                </div>
                            </div>

                            <div class="gita-discovery-card" data-action="advice">
                                <div class="gita-card-icon-wrap icon-pink">🌟</div>
                                <div class="gita-card-texts">
                                    <span class="gita-card-title">${this.currentLanguage === 'te' ? 'శ్రీకృష్ణుని ఉపదేశం' : "Krishna's Advice"}</span>
                                    <span class="gita-card-desc">${this.currentLanguage === 'te' ? 'జీవిత కర్తవ్యాలు & ధర్మ మార్గదర్శనం' : 'Timeless guidance for everyday life'}</span>
                                </div>
                            </div>

                            <div class="gita-discovery-card" data-action="shloka">
                                <div class="gita-card-icon-wrap icon-gold">🕉️</div>
                                <div class="gita-card-texts">
                                    <span class="gita-card-title">${this.currentLanguage === 'te' ? 'ముఖ్యమైన శ్లోకం' : 'Sacred Shlokas'}</span>
                                    <span class="gita-card-desc">${this.currentLanguage === 'te' ? 'శ్లోక భావాలు & తాత్పర్యం' : 'Explore Sanskrit verses & meanings'}</span>
                                </div>
                            </div>

                            <div class="gita-discovery-card" data-action="stress">
                                <div class="gita-card-icon-wrap icon-purple">🌿</div>
                                <div class="gita-card-texts">
                                    <span class="gita-card-title">${this.currentLanguage === 'te' ? 'ఒత్తిడి & ప్రశాంతత' : 'Peace & Mind Control'}</span>
                                    <span class="gita-card-desc">${this.currentLanguage === 'te' ? 'భయం, కోపం మరియు ఆందోళన నివారణ' : 'Overcome stress, fear & anxiety'}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Chat Messages Stream Area -->
                    <div class="gita-chat-messages hidden" id="gitaChatStream"></div>
                </div>

                <!-- Floating Modern Input Box (Matching Image 1 Bottom & Image 2 Bottom) -->
                <div class="gita-input-wrapper">
                    <div class="gita-floating-input-card">
                        <div class="gita-input-text-row">
                            <input type="text" id="gitaUserInput" class="gita-main-input" placeholder="${this.currentLanguage === 'te' ? 'మీ సందేహం లేదా ప్రశ్నను ఇక్కడ అడగండి...' : 'Write your message or ask a question...'}" autocomplete="off" />
                        </div>
                        <div class="gita-input-bottom-row">
                            <div class="gita-input-left-tools">
                                <button type="button" class="gita-quick-pill" data-action="summary" id="gitaQuickSummaryBtn">⚡ ${this.currentLanguage === 'te' ? 'సారాంశం' : 'Summary'}</button>
                                <button type="button" class="gita-quick-pill" data-action="advice" id="gitaQuickAdviceBtn">🌟 ${this.currentLanguage === 'te' ? 'ఉపదేశం' : 'Advice'}</button>
                                <button type="button" class="gita-quick-pill" data-action="shloka" id="gitaQuickShlokaBtn">🕉️ ${this.currentLanguage === 'te' ? 'శ్లోకం' : 'Shloka'}</button>
                            </div>
                            <div class="gita-input-right-actions">
                                <button type="button" id="gitaMicBtn" class="gita-coral-mic-btn" title="Voice Input">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                                    </svg>
                                </button>
                                <button type="button" id="gitaSendBtn" class="gita-send-circle-btn" title="Send Message">
                                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Full-Screen Interactive Voice Chat Overlay (Matching Image 1 Right Screen) -->
                <div class="gita-voice-overlay" id="gitaVoiceOverlay">
                    <div class="gita-voice-top-row">
                        <button type="button" class="gita-header-circle-btn" id="gitaCloseVoiceOverlayBtn" title="Back to text chat">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </button>
                        <span class="gita-voice-screen-title" id="gitaVoiceScreenTitle">${this.currentLanguage === 'te' ? 'వాయిస్ సంభాషణ' : 'Voice Chat'}</span>
                        <div class="gita-lang-toggle-pill">
                            <button type="button" class="lang-btn ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                            <button type="button" class="lang-btn ${this.currentLanguage === 'te' ? 'active' : ''}" data-lang="te">తెలుగు</button>
                        </div>
                    </div>

                    <div class="gita-voice-center-body">
                        <div class="gita-voice-status-label" id="gitaVoiceStatusLabel">${this.currentLanguage === 'te' ? 'వినబడుతోంది... మాట్లాడండి' : 'Listening... Speak now'}</div>

                        <!-- 3D Iridescent Dotted Particle Sphere -->
                        <div class="gita-dotted-sphere" id="gitaDottedSphere"></div>

                        <p class="gita-voice-prompt-text" id="gitaVoicePromptText">
                            ${this.currentLanguage === 'te' ? 'సహజంగా మాట్లాడండి, గీతా AI <strong>వెంటనే సమాధానం ఇస్తుంది</strong>' : 'Speak Naturally As Your AI Bot <strong>Listens And Responds Instantly</strong>'}
                        </p>

                        <!-- Soundwave visualizer -->
                        <div class="gita-voice-soundwave" id="gitaVoiceWaveform">
                            <span></span><span></span><span></span><span></span><span></span>
                        </div>

                        <!-- Divine Quick Topic Chips & Direct Type Switcher -->
                        <div class="gita-voice-quick-topics" id="gitaVoiceQuickTopics">
                            <button type="button" class="gita-voice-topic-chip" data-q-te="కృష్ణుడు అర్జునుడికి ఏం చెప్పాడు?" data-q-en="What did Lord Krishna teach Arjuna?">🏹 ${this.currentLanguage === 'te' ? 'కృష్ణోపదేశం' : 'Krishna\'s Teaching'}</button>
                            <button type="button" class="gita-voice-topic-chip" data-q-te="కర్మ యోగం అంటే ఏమిటి?" data-q-en="What is Karma Yoga?">⚖️ ${this.currentLanguage === 'te' ? 'కర్మ యోగం' : 'Karma Yoga'}</button>
                            <button type="button" class="gita-voice-topic-chip" data-q-te="భయం, ఒత్తిడిని ఎలా పోగొట్టుకోవాలి?" data-q-en="How to overcome fear and anxiety according to Gita?">🪷 ${this.currentLanguage === 'te' ? 'మనశ్శాంతి' : 'Inner Peace'}</button>
                        </div>

                        <button type="button" class="gita-voice-type-switch-btn" id="gitaVoiceTypeSwitchBtn">
                            ⌨️ ${this.currentLanguage === 'te' ? 'టైప్ చేసి అడగండి' : 'Type Question Instead'}
                        </button>
                    </div>

                    <div class="gita-voice-bottom-controls">
                        <button type="button" class="gita-voice-action-btn" id="gitaVoiceCancelBtn" title="Cancel">✕</button>
                        <button type="button" class="gita-voice-center-big-mic" id="gitaVoiceBigMicBtn" title="Record Voice">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                            </svg>
                        </button>
                        <span class="gita-voice-timer" id="gitaVoiceTimer">00:00</span>
                        <button type="button" class="gita-voice-action-btn confirm-btn" id="gitaVoiceDoneBtn" title="Done">✓</button>
                    </div>
                </div>
            `;
            document.body.appendChild(widget);
        }

        initSpeechRec() {
            const micBtn = document.getElementById('gitaMicBtn');
            const bigMicBtn = document.getElementById('gitaVoiceBigMicBtn');
            const statusLabel = document.getElementById('gitaVoiceStatusLabel');
            const input = document.getElementById('gitaUserInput');

            this.speechRec = new DivineSpeechRecognition(
                (transcript, isFinal) => {
                    if (input) input.value = transcript;
                    if (statusLabel) statusLabel.textContent = transcript || (this.currentLanguage === 'te' ? 'వినబడుతోంది... మాట్లాడండి' : 'Listening... Speak now');
                    if (isFinal) {
                        if (this.isVoiceOverlayOpen) {
                            this.closeVoiceOverlay();
                        }
                        this.handleUserSubmit(transcript);
                    }
                },
                () => {
                    if (micBtn) micBtn.classList.remove('listening');
                    if (bigMicBtn) bigMicBtn.classList.remove('listening');
                    this.stopVoiceTimer();
                },
                (errorCode) => {
                    this.handleSpeechError(errorCode);
                }
            );
        }

        attachEvents() {
            const launcher = document.getElementById('gitaChatLauncher');
            const widget = document.getElementById('gitaChatWidget');
            const closeBtn = document.getElementById('gitaWidgetCloseBtn');
            const chSelect = document.getElementById('gitaChapterSelect');
            const sendBtn = document.getElementById('gitaSendBtn');
            const userInput = document.getElementById('gitaUserInput');
            const micBtn = document.getElementById('gitaMicBtn');
            const newChatBtn = document.getElementById('gitaNewChatBtn');
            const openVoiceBtn = document.getElementById('gitaOpenVoiceModalBtn');
            const closeVoiceBtn = document.getElementById('gitaCloseVoiceOverlayBtn');
            const voiceBigMicBtn = document.getElementById('gitaVoiceBigMicBtn');
            const voiceCancelBtn = document.getElementById('gitaVoiceCancelBtn');
            const voiceDoneBtn = document.getElementById('gitaVoiceDoneBtn');

            // Launcher Toggle
            if (launcher) {
                launcher.addEventListener('click', () => {
                    if (this.isOpen) {
                        this.closeWidget();
                    } else {
                        this.openWidget();
                    }
                });
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.closeWidget());
            }

            // New Chat / Reset to Discovery Screen
            if (newChatBtn) {
                newChatBtn.addEventListener('click', () => this.resetToDiscovery());
            }

            // Expand / Maximize Widget View Toggle
            const expandBtn = document.getElementById('gitaWidgetExpandBtn');
            if (expandBtn) {
                expandBtn.addEventListener('click', () => {
                    const w = document.getElementById('gitaChatWidget');
                    if (w) {
                        w.classList.toggle('expanded');
                        const isExp = w.classList.contains('expanded');
                        expandBtn.setAttribute('title', isExp ? 'Restore View' : 'Maximize View');
                    }
                });
            }

            // Chapter Select
            if (chSelect) {
                chSelect.addEventListener('change', (e) => {
                    this.activeChapter = parseInt(e.target.value, 10);
                    this.updateDiscoveryTexts();
                    if (this.hasStartedChat) {
                        this.appendBotMessage(GitaAIResponder.formatSummaryResponse(GITA_KNOWLEDGE.chapters[this.activeChapter], this.currentLanguage));
                    }
                });
            }

            // Language Switcher (Global across widget)
            document.querySelectorAll('.gita-lang-toggle-pill .lang-btn').forEach(btn => {
                const triggerSwitch = (e) => {
                    if (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    const lang = btn.getAttribute('data-lang') || 'en';
                    this.setLanguage(lang);
                };
                btn.addEventListener('click', triggerSwitch);
                btn.addEventListener('touchend', triggerSwitch, { passive: false });
            });

            // Discovery Cards Click
            document.querySelectorAll('.gita-discovery-card, .gita-quick-pill').forEach(card => {
                card.addEventListener('click', () => {
                    const action = card.getAttribute('data-action');
                    if (action) this.handleQuickAction(action);
                });
            });

            // Send Button & Input
            if (sendBtn && userInput) {
                sendBtn.addEventListener('click', () => {
                    this.handleUserSubmit(userInput.value);
                });
                userInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.handleUserSubmit(userInput.value);
                    }
                });
            }

            // Mic Input Button in Chat
            if (micBtn) {
                micBtn.addEventListener('click', () => {
                    this.openVoiceOverlay();
                });
            }

            // Voice Chat Mode Triggers
            if (openVoiceBtn) {
                openVoiceBtn.addEventListener('click', () => this.openVoiceOverlay());
            }

            if (closeVoiceBtn) {
                closeVoiceBtn.addEventListener('click', () => this.closeVoiceOverlay());
            }

            if (voiceBigMicBtn) {
                voiceBigMicBtn.addEventListener('click', () => {
                    this.toggleSpeechListening();
                });
            }

            if (voiceCancelBtn) {
                voiceCancelBtn.addEventListener('click', () => {
                    if (this.speechRec) this.speechRec.stop();
                    this.closeVoiceOverlay();
                });
            }

            if (voiceDoneBtn) {
                voiceDoneBtn.addEventListener('click', () => {
                    const input = document.getElementById('gitaUserInput');
                    const text = (input && input.value) ? input.value : '';
                    if (this.speechRec) this.speechRec.stop();
                    this.closeVoiceOverlay();
                    if (text) this.handleUserSubmit(text);
                });
            }

            // Voice Quick Topic Chips Click
            document.querySelectorAll('.gita-voice-topic-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    const isTe = this.currentLanguage === 'te';
                    const q = isTe ? chip.getAttribute('data-q-te') : chip.getAttribute('data-q-en');
                    if (q) {
                        if (this.speechRec) this.speechRec.stop();
                        this.closeVoiceOverlay();
                        this.handleUserSubmit(q);
                    }
                });
            });

            // Switch to text input from voice modal
            const typeSwitchBtn = document.getElementById('gitaVoiceTypeSwitchBtn');
            if (typeSwitchBtn) {
                typeSwitchBtn.addEventListener('click', () => {
                    if (this.speechRec) this.speechRec.stop();
                    this.closeVoiceOverlay();
                    const input = document.getElementById('gitaUserInput');
                    if (input) {
                        input.focus();
                    }
                });
            }
        }

        injectVerseAssistButtons() {
            if (typeof document === 'undefined') return;
            const isTe = this.currentLanguage === 'te';
            const btnText = 'ASK AI';
            const btnTitle = isTe ? 'ఈ శ్లోక భావాన్ని సులభంగా అర్థం చేసుకోండి' : 'Explain this verse in simple words with Gita AI';

            const h5s = document.querySelectorAll('h5');
            h5s.forEach(h5 => {
                const text = (h5.textContent || '').trim();
                if (!text) return;

                // Match verse patterns: "1.1", "1.4-1.6", "8.23-8.26", "Bhagavad Gita 1.1", etc.
                const match = text.match(/(\b[1-9]|1[0-8])\s*[\.\:\/]\s*(\d+)(?:\s*[-–]\s*(?:(?:\b[1-9]|1[0-8])\s*[\.\:\/]\s*)?(\d+))?/i);
                if (!match) return;

                const chNum = parseInt(match[1], 10);
                const vsStart = parseInt(match[2], 10);
                const vsEnd = match[3] ? parseInt(match[3], 10) : vsStart;
                const verseRef = (vsEnd && vsEnd !== vsStart) ? `${chNum}.${vsStart}-${vsEnd}` : `${chNum}.${vsStart}`;

                // Extract following paragraph text
                let pText = '';
                let sibling = h5.nextElementSibling;
                while (sibling && sibling.tagName !== 'H5' && sibling.tagName !== 'DIV') {
                    if (sibling.tagName === 'P') {
                        pText = sibling.textContent.trim();
                        break;
                    }
                    sibling = sibling.nextElementSibling;
                }

                // Check if button already exists
                let existingBtn = h5.querySelector('.gita-verse-ai-btn');
                if (existingBtn) {
                    const textSpan = existingBtn.querySelector('.gita-btn-text');
                    if (textSpan) textSpan.textContent = btnText;
                    existingBtn.setAttribute('title', btnTitle);
                    return;
                }

                // Extract original heading title (e.g. "Bhagavad Gita 1.1")
                const existingTitle = h5.querySelector('.gita-verse-title');
                const rawTitle = existingTitle ? existingTitle.textContent.trim() : (h5.innerText ? h5.innerText.trim() : text);

                // Format h5 container cleanly
                h5.innerHTML = '';
                h5.classList.add('gita-verse-header-row');

                const titleSpan = document.createElement('span');
                titleSpan.className = 'gita-verse-title';
                titleSpan.textContent = rawTitle;

                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'gita-verse-ai-btn';
                btn.setAttribute('title', btnTitle);
                btn.setAttribute('data-verse-ref', verseRef);
                btn.innerHTML = `
                    <span class="gita-btn-glow-dot"></span>
                    <span class="gita-btn-text">${btnText}</span>
                `;

                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.askAIAboutSpecificVerse(chNum, vsStart, vsEnd, pText);
                });

                h5.appendChild(titleSpan);
                h5.appendChild(btn);
            });
        }

        askAIAboutSpecificVerse(chNum, vsStart, vsEnd, verseText) {
            this.openWidget();
            const verseRef = (vsEnd && vsEnd !== vsStart) ? `${chNum}.${vsStart}-${vsEnd}` : `${chNum}.${vsStart}`;
            const isTe = this.currentLanguage === 'te';
            const query = isTe 
                ? `భగవద్గీత శ్లోకం ${verseRef} భావం & వివరణ: "${verseText || ''}"` 
                : `Explain Bhagavad Gita Verse ${verseRef} in simple words: "${verseText || ''}"`;
            this.handleUserSubmit(query);
        }

        openWithPrompt(promptText, chapterNum, lang = null) {
            if (chapterNum) {
                this.activeChapter = parseInt(chapterNum, 10);
                const chSelect = document.getElementById('gitaChapterSelect');
                if (chSelect) chSelect.value = String(this.activeChapter);
                this.updateDiscoveryTexts();
            }
            if (lang) {
                this.setLanguage(lang);
            } else if (promptText && /[\u0C00-\u0C7F]/.test(promptText)) {
                this.setLanguage('te');
            }
            this.openWidget();
            if (promptText) {
                this.showChatStream();
                this.handleUserSubmit(promptText);
            }
        }

        checkPendingPrompts() {
            try {
                const pendingPrompt = sessionStorage.getItem('gita_pending_prompt');
                const pendingChapter = sessionStorage.getItem('gita_pending_chapter');
                const pendingLang = sessionStorage.getItem('gita_pending_lang');
                if (pendingPrompt) {
                    sessionStorage.removeItem('gita_pending_prompt');
                    sessionStorage.removeItem('gita_pending_chapter');
                    sessionStorage.removeItem('gita_pending_lang');
                    setTimeout(() => {
                        this.openWithPrompt(pendingPrompt, pendingChapter ? parseInt(pendingChapter, 10) : null, pendingLang);
                    }, 400);
                }
            } catch (err) {}
        }

        setListenChipState(btnId, state) {
            const btn = document.getElementById(btnId);
            const stopBtn = document.getElementById(`stop_${btnId}`);
            if (!btn) return;

            const isTe = this.currentLanguage === 'te';

            if (state === 'playing') {
                btn.classList.add('is-playing');
                btn.classList.remove('is-paused');
                const pauseLabel = isTe ? 'పాజ్ ⏸️' : 'Pause ⏸️';
                btn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                        <rect x="6" y="5" width="4" height="14" rx="1"></rect>
                        <rect x="14" y="5" width="4" height="14" rx="1"></rect>
                    </svg>
                    <span>${pauseLabel}</span>
                `;
                if (stopBtn) stopBtn.classList.remove('hidden');
            } else if (state === 'paused') {
                btn.classList.remove('is-playing');
                btn.classList.add('is-paused');
                const resumeLabel = isTe ? 'కొనసాగించండి ▶️' : 'Resume ▶️';
                btn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                        <polygon points="6,4 20,12 6,20"></polygon>
                    </svg>
                    <span>${resumeLabel}</span>
                `;
                if (stopBtn) stopBtn.classList.remove('hidden');
            } else {
                btn.classList.remove('is-playing', 'is-paused');
                const listenLabel = isTe ? 'వినండి' : 'Listen';
                btn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                    <span>${listenLabel}</span>
                `;
                if (stopBtn) stopBtn.classList.add('hidden');
            }
        }

        resetAllListenChips() {
            this.activePlayingVoiceBtnId = null;
            const isTe = this.currentLanguage === 'te';
            const listenLabel = isTe ? 'వినండి' : 'Listen';
            document.querySelectorAll('.gita-listen-chip').forEach(chip => {
                chip.classList.remove('is-playing', 'is-paused');
                chip.innerHTML = `
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                    <span>${listenLabel}</span>
                `;
            });
            document.querySelectorAll('.gita-stop-chip').forEach(stopBtn => {
                stopBtn.classList.add('hidden');
            });
        }

        setLanguage(lang) {
            this.currentLanguage = lang;
            document.querySelectorAll('.gita-lang-toggle-pill .lang-btn').forEach(b => {
                if (b.getAttribute('data-lang') === lang) b.classList.add('active');
                else b.classList.remove('active');
            });
            this.updateDiscoveryTexts();
            this.resetAllListenChips();
            this.injectVerseAssistButtons();

            // Translate user question bubbles in chat stream
            const userRows = document.querySelectorAll('#gitaChatStream .gita-message-row.user-row');
            userRows.forEach(uRow => {
                const txtDiv = uRow.querySelector('.gita-msg-text');
                const raw = uRow.dataset.query || (txtDiv ? txtDiv.textContent.trim() : '');
                if (raw) {
                    uRow.dataset.query = raw;
                    const clean = raw.toLowerCase().trim();
                    let translated = null;
                    if (clean.includes('karma yoga') || clean.includes('కర్మ యోగం')) {
                        translated = lang === 'te' ? 'కర్మ యోగం అంటే ఏమిటి?' : 'What is Karma Yoga?';
                    } else if (clean.includes('bhakti yoga') || clean.includes('భక్తి యోగం')) {
                        translated = lang === 'te' ? 'భక్తి యోగం అంటే ఏమిటి?' : 'What is Bhakti Yoga?';
                    } else if (clean.includes('jnana yoga') || clean.includes('జ్ఞాన యోగం')) {
                        translated = lang === 'te' ? 'జ్ఞాన యోగం అంటే ఏమిటి?' : 'What is Jnana Yoga?';
                    } else if (clean.includes('atman') || clean.includes('soul') || clean.includes('ఆత్మ')) {
                        translated = lang === 'te' ? 'ఆత్మతత్త్వం అంటే ఏమిటి?' : 'What is the nature of the Soul (Atman)?';
                    } else if (clean.includes('krishna') || clean.includes('శ్రీకృష్ణుడు')) {
                        translated = lang === 'te' ? 'శ్రీకృష్ణ భగవానుడు ఎవరు?' : 'Who is Lord Krishna?';
                    } else if (clean.includes('arjuna') || clean.includes('అర్జునుడు')) {
                        translated = lang === 'te' ? 'అర్జునుడు ఎవరు & అతని సందేహం ఏమిటి?' : 'Who is Arjuna and what was his dilemma?';
                    } else if (clean.includes('mind') || clean.includes('control') || clean.includes('మనస్సు')) {
                        translated = lang === 'te' ? 'మనస్సును ఎలా నిగ్రహించాలి?' : 'How to control the restless mind?';
                    } else if (clean.includes('stress') || clean.includes('ఒత్తిడి')) {
                        translated = lang === 'te' ? 'ఒత్తిడి & ఆందోళన నివారణ' : 'Overcoming stress, fear & anxiety';
                    } else if (clean.includes('summary') || clean.includes('సారాంశం')) {
                        translated = lang === 'te' ? `అధ్యాయం ${this.activeChapter} సారాంశం` : `Chapter ${this.activeChapter} Summary`;
                    } else if (clean.includes('advice') || clean.includes('ఉపదేశం')) {
                        translated = lang === 'te' ? `అధ్యాయం ${this.activeChapter} లో శ్రీకృష్ణుని ఉపదేశం` : `Krishna's Advice in Chapter ${this.activeChapter}`;
                    } else if (clean.includes('shloka') || clean.includes('శ్లోకం') || clean.includes('verse')) {
                        translated = lang === 'te' ? `అధ్యాయం ${this.activeChapter} లోని ముఖ్యమైన శ్లోకం` : `Key Verse of Chapter ${this.activeChapter}`;
                    }
                    if (translated && txtDiv) {
                        txtDiv.textContent = translated;
                    }
                }
            });

            // Issue 2 Fix: Instant translation/re-rendering of existing bot responses in chat stream!
            const botRows = document.querySelectorAll('#gitaChatStream .gita-message-row.bot-row');
            botRows.forEach(row => {
                const q = row.dataset.query;
                const act = row.dataset.action;
                let newResp = null;
                if (act) {
                    const ch = GITA_KNOWLEDGE.chapters[this.activeChapter];
                    if (act === 'summary') newResp = GitaAIResponder.formatSummaryResponse(ch, lang);
                    else if (act === 'advice') newResp = GitaAIResponder.formatAdviceResponse(ch, lang);
                    else if (act === 'shloka') newResp = GitaAIResponder.formatShlokaResponse(ch, lang);
                    else if (act === 'stress') newResp = GitaAIResponder.formatDilemmaResponse(GITA_KNOWLEDGE.dilemmas.stress, lang);
                    else if (act === 'purpose') newResp = GitaAIResponder.formatDilemmaResponse(GITA_KNOWLEDGE.dilemmas.purpose, lang);
                } else if (q) {
                    newResp = GitaAIResponder.generateDeepResponse(q, this.activeChapter, lang, this.conversationHistory);
                } else if (this.lastUserQuery) {
                    newResp = GitaAIResponder.generateDeepResponse(this.lastUserQuery, this.activeChapter, lang, this.conversationHistory);
                }

                if (newResp) {
                    const contentDiv = row.querySelector('.gita-msg-content');
                    if (contentDiv) {
                        contentDiv.innerHTML = newResp.html;
                        // Re-bind follow-up chips
                        contentDiv.querySelectorAll('.gita-followup-chip').forEach(chip => {
                            chip.addEventListener('click', (e) => {
                                e.preventDefault();
                                const promptText = chip.getAttribute('data-prompt');
                                if (promptText) {
                                    this.handleUserSubmit(promptText);
                                }
                            });
                        });
                    }

                    // Update listen chip label and speech text
                    const listenChip = row.querySelector('.gita-listen-chip');
                    const stopChip = row.querySelector('.gita-stop-chip');
                    if (listenChip) {
                        const span = listenChip.querySelector('span');
                        if (!listenChip.classList.contains('is-playing') && !listenChip.classList.contains('is-paused')) {
                            if (span) span.textContent = lang === 'te' ? 'వినండి' : 'Listen';
                        }
                        listenChip._rawSpeechText = newResp.speechText || '';
                        listenChip.dataset.speechText = encodeURIComponent(newResp.speechText || '');
                    }
                    if (stopChip) {
                        const sSpan = stopChip.querySelector('span');
                        if (sSpan) sSpan.textContent = lang === 'te' ? 'ఆపండి' : 'Stop';
                        stopChip.title = lang === 'te' ? 'ఆపండి' : 'Stop';
                    }
                }
            });

            const input = document.getElementById('gitaUserInput');
            if (input) {
                input.placeholder = lang === 'te' ? 'మీ సందేహం లేదా ప్రశ్నను ఇక్కడ అడగండి...' : 'Write your message or ask a question...';
            }

            // Quick pills text
            const qSummary = document.getElementById('gitaQuickSummaryBtn');
            const qAdvice = document.getElementById('gitaQuickAdviceBtn');
            const qShloka = document.getElementById('gitaQuickShlokaBtn');
            if (qSummary) qSummary.innerHTML = `⚡ ${lang === 'te' ? 'సారాంశం' : 'Summary'}`;
            if (qAdvice) qAdvice.innerHTML = `🌟 ${lang === 'te' ? 'ఉపదేశం' : 'Advice'}`;
            if (qShloka) qShloka.innerHTML = `🕉️ ${lang === 'te' ? 'శ్లోకం' : 'Shloka'}`;

            // Voice overlay texts
            const vTitle = document.getElementById('gitaVoiceScreenTitle');
            const vPrompt = document.getElementById('gitaVoicePromptText');
            const vStatus = document.getElementById('gitaVoiceStatusLabel');
            if (vTitle) vTitle.textContent = lang === 'te' ? 'వాయిస్ సంభాషణ' : 'Voice Chat';
            if (vPrompt) vPrompt.innerHTML = lang === 'te' ? 'సహజంగా మాట్లాడండి, గీతా AI <strong>వెంటనే సమాధానం ఇస్తుంది</strong>' : 'Speak Naturally As Your AI Bot <strong>Listens And Responds Instantly</strong>';
            if (vStatus) vStatus.textContent = lang === 'te' ? 'వినబడుతోంది... మాట్లాడండి' : 'Listening... Speak now';

            // Update Chapter select dropdown options
            const chSelect = document.getElementById('gitaChapterSelect');
            if (chSelect) {
                chSelect.innerHTML = Array.from({ length: 18 }, (_, i) => i + 1).map(n => `
                    <option value="${n}" ${n === this.activeChapter ? 'selected' : ''}>
                        ${lang === 'te' ? `అధ్యాయం ${n}: ${GITA_KNOWLEDGE.chapters[n].teluguTitle.split(' ')[0]}` : `Ch ${n}: ${GITA_KNOWLEDGE.chapters[n].title.split(' ')[0]}`}
                    </option>
                `).join('');
            }
        }

        updateDiscoveryTexts() {
            const ch = GITA_KNOWLEDGE.chapters[this.activeChapter];
            const isTe = this.currentLanguage === 'te';
            const titleEl = document.getElementById('gitaHeroTitle');
            const subtitleEl = document.getElementById('gitaHeroSubtitle');
            if (titleEl) titleEl.textContent = isTe ? 'ప్రశ్నించండి' : 'Start Asking';
            if (subtitleEl) subtitleEl.textContent = isTe ? `అధ్యాయం ${ch.number}: ${ch.teluguTitle}` : `Exploring Chapter ${ch.number}: ${ch.title}`;

            // Update discovery cards
            const cards = document.querySelectorAll('.gita-discovery-card');
            cards.forEach(card => {
                const action = card.getAttribute('data-action');
                const t = card.querySelector('.gita-card-title');
                const d = card.querySelector('.gita-card-desc');
                if (!t || !d) return;

                if (action === 'summary') {
                    t.textContent = isTe ? 'అధ్యాయ సారాంశం' : 'Suggestions';
                    d.textContent = isTe ? '1-నిమిషం అధ్యాయ సారాంశం తెలుసుకోండి' : 'Try 1-minute chapter essence';
                } else if (action === 'advice') {
                    t.textContent = isTe ? 'శ్రీకృష్ణుని ఉపదేశం' : "Krishna's Advice";
                    d.textContent = isTe ? 'జీవిత కర్తవ్యాలు & ధర్మ మార్గదర్శనం' : 'Timeless guidance for everyday life';
                } else if (action === 'shloka') {
                    t.textContent = isTe ? 'ముఖ్యమైన శ్లోకం' : 'Sacred Shlokas';
                    d.textContent = isTe ? 'శ్లోక భావాలు & తాత్పర్యం' : 'Explore Sanskrit verses & meanings';
                } else if (action === 'stress') {
                    t.textContent = isTe ? 'ఒత్తిడి & ప్రశాంతత' : 'Peace & Mind Control';
                    d.textContent = isTe ? 'భయం, కోపం మరియు ఆందోళన నివారణ' : 'Overcome stress, fear & anxiety';
                }
            });
        }

        resetToDiscovery() {
            this.voiceEngine.stop();
            this.resetAllListenChips();
            const discovery = document.getElementById('gitaDiscoveryHero');
            const stream = document.getElementById('gitaChatStream');
            const input = document.getElementById('gitaUserInput');
            if (discovery) discovery.style.display = 'flex';
            if (stream) {
                stream.classList.add('hidden');
                stream.innerHTML = '';
            }
            if (input) input.value = '';
            this.hasStartedChat = false;
            this.conversationHistory = [];
            this.updateDiscoveryTexts();
        }

        openWidget() {
            const launcher = document.getElementById('gitaChatLauncher');
            const widget = document.getElementById('gitaChatWidget');
            if (widget && launcher) {
                // Ensure all navigator sheets and modals are closed so Gita AI is front & center
                document.querySelectorAll('.gita-nav-sheet-overlay, .gita-shloka-modal-overlay').forEach(el => {
                    el.classList.remove('active');
                });
                widget.classList.add('active');
                launcher.classList.add('active');
                launcher.style.setProperty('display', 'none', 'important');
                document.body.classList.add('gita-chat-active');
                widget.setAttribute('aria-hidden', 'false');
                this.isOpen = true;
                const input = document.getElementById('gitaUserInput');
                if (input) setTimeout(() => input.focus(), 250);
            }
        }

        closeWidget() {
            const launcher = document.getElementById('gitaChatLauncher');
            const widget = document.getElementById('gitaChatWidget');
            if (widget && launcher) {
                widget.classList.remove('active');
                launcher.classList.remove('active');
                if (!this.isVoiceOverlayOpen) {
                    launcher.style.removeProperty('display');
                }
                document.body.classList.remove('gita-chat-active');
                widget.setAttribute('aria-hidden', 'true');
                this.isOpen = false;
                this.voiceEngine.stop();
                this.resetAllListenChips();
                this.closeVoiceOverlay();
            }
        }

        openVoiceOverlay() {
            const overlay = document.getElementById('gitaVoiceOverlay');
            const launcher = document.getElementById('gitaChatLauncher');
            if (overlay) {
                overlay.classList.add('active');
                if (launcher) launcher.style.setProperty('display', 'none', 'important');
                document.body.classList.add('gita-voice-active');
                this.isVoiceOverlayOpen = true;
                this.startVoiceTimer();
                this.startSpeechListening();
            }
        }

        closeVoiceOverlay() {
            const overlay = document.getElementById('gitaVoiceOverlay');
            const launcher = document.getElementById('gitaChatLauncher');
            if (overlay) {
                overlay.classList.remove('active');
                document.body.classList.remove('gita-voice-active');
                if (launcher && !this.isOpen) {
                    launcher.style.removeProperty('display');
                }
                this.isVoiceOverlayOpen = false;
                this.stopVoiceTimer();
                if (this.speechRec && this.speechRec.isListening) {
                    this.speechRec.stop();
                }
            }
        }

        startVoiceTimer() {
            this.voiceSeconds = 0;
            const timerEl = document.getElementById('gitaVoiceTimer');
            if (timerEl) timerEl.textContent = '00:00';
            clearInterval(this.voiceTimerInterval);
            this.voiceTimerInterval = setInterval(() => {
                this.voiceSeconds++;
                const mins = Math.floor(this.voiceSeconds / 60).toString().padStart(2, '0');
                const secs = (this.voiceSeconds % 60).toString().padStart(2, '0');
                if (timerEl) timerEl.textContent = `${mins}:${secs}`;
            }, 1000);
        }

        stopVoiceTimer() {
            clearInterval(this.voiceTimerInterval);
        }

        startSpeechListening() {
            const bigMicBtn = document.getElementById('gitaVoiceBigMicBtn');
            const micBtn = document.getElementById('gitaMicBtn');
            const statusLabel = document.getElementById('gitaVoiceStatusLabel');
            if (this.speechRec) {
                const langCode = this.currentLanguage === 'te' ? 'te-IN' : 'en-IN';
                const started = this.speechRec.start(langCode);
                if (started) {
                    if (bigMicBtn) bigMicBtn.classList.add('listening');
                    if (micBtn) micBtn.classList.add('listening');
                    if (statusLabel) statusLabel.textContent = this.currentLanguage === 'te' ? 'వినబడుతోంది... మాట్లాడండి' : 'Listening... Speak now';
                }
            }
        }

        toggleSpeechListening() {
            if (this.speechRec && this.speechRec.isListening) {
                this.speechRec.stop();
            } else {
                this.startSpeechListening();
            }
        }

        handleSpeechError(error) {
            const statusLabel = document.getElementById('gitaVoiceStatusLabel');
            const bigMicBtn = document.getElementById('gitaVoiceBigMicBtn');
            const micBtn = document.getElementById('gitaMicBtn');
            if (bigMicBtn) bigMicBtn.classList.remove('listening');
            if (micBtn) micBtn.classList.remove('listening');

            const isTe = this.currentLanguage === 'te';
            const isInsecure = typeof window !== 'undefined' && !window.isSecureContext;

            if (error === 'not-allowed' || error === 'NotAllowedError') {
                if (isInsecure) {
                    if (statusLabel) {
                        const port = '3443';
                        const secureUrl = `https://${window.location.hostname}:${port}${window.location.pathname}${window.location.search || ''}`;
                        statusLabel.innerHTML = isTe
                            ? `<div class="gita-https-notice-box">
                                 <div style="font-weight:700;color:#ffd700;margin-bottom:4px;font-size:12px;">🔒 మొబైల్‌లో మైక్రోఫోన్ కోసం HTTPS అవసరం</div>
                                 <div style="font-size:11px;color:#dedeee;line-height:1.4;margin-bottom:8px;">దిగువ బటన్ నొక్కండి. ఒకవేళ బ్రౌజర్ హెచ్చరిక చూపిస్తే <b>Advanced ➔ Proceed</b> నొక్కి మైక్ ఆన్ చేసుకోండి.</div>
                                 <a href="${secureUrl}" class="gita-https-cta-btn">👉 HTTPS మోడ్‌లో తెరవండి (వాయిస్ పనిచేస్తుంది)</a>
                               </div>`
                            : `<div class="gita-https-notice-box">
                                 <div style="font-weight:700;color:#ffd700;margin-bottom:4px;font-size:12px;">🔒 Mobile Browser Requires HTTPS for Mic Permissions</div>
                                 <div style="font-size:11px;color:#dedeee;line-height:1.4;margin-bottom:8px;">Tap below to open in secure mode. When prompted, tap <b>Advanced ➔ Proceed to ${window.location.hostname}</b> to enable mic.</div>
                                 <a href="${secureUrl}" class="gita-https-cta-btn">👉 Open via Secure HTTPS (Enables Voice)</a>
                               </div>`;
                    }
                } else {
                    if (statusLabel) {
                        statusLabel.textContent = isTe
                            ? '⚠️ మైక్రోఫోన్ అనుమతి నిరాకరించబడింది. బ్రౌజర్ సెట్టింగ్స్‌లో మైక్ ఆన్ చేయండి.'
                            : '⚠️ Microphone permission denied. Please allow microphone in browser settings.';
                    }
                }
            } else if (error === 'service-not-allowed') {
                if (statusLabel) {
                    statusLabel.innerHTML = isTe
                        ? '⚠️ బ్రౌజర్‌లో వాయిస్ సర్వీస్ ఆపివేయబడింది. కింద ప్రశ్నను ఎంచుకోండి లేదా టైప్ చేయండి.'
                        : '⚠️ Browser speech service disabled. Tap a question chip below or type.';
                }
            } else if (error === 'no-speech') {
                if (statusLabel) {
                    statusLabel.textContent = isTe
                        ? 'సరిగ్గా వినబడలేదు. మళ్లీ మైక్ బటన్ నొక్కి మాట్లాడండి.'
                        : 'No speech detected. Tap mic and speak again.';
                }
            } else if (error === 'network') {
                if (statusLabel) {
                    statusLabel.textContent = isTe
                        ? '⚠️ నెట్‌వర్క్ స్పీచ్ లోపం. దయచేసి టైప్ చేసి అడగండి.'
                        : '⚠️ Speech recognition network error. Please type your question.';
                }
            } else {
                if (statusLabel) {
                    statusLabel.textContent = isTe
                        ? 'వినబడుతోంది... మళ్లీ మైక్ నొక్కి మాట్లాడండి లేదా కింద టైప్ చేయండి.'
                        : 'Listening... Tap mic again or type your question below.';
                }
            }
        }

        handleQuickAction(action) {
            const ch = GITA_KNOWLEDGE.chapters[this.activeChapter];
            let response = null;
            let userPrompt = '';
            const isTe = this.currentLanguage === 'te';

            if (action === 'summary') {
                userPrompt = isTe ? `అధ్యాయం ${ch.number} సారాంశం` : `Chapter ${ch.number} Summary`;
                response = GitaAIResponder.formatSummaryResponse(ch, this.currentLanguage);
            } else if (action === 'advice') {
                userPrompt = isTe ? `అధ్యాయం ${ch.number} లో శ్రీకృష్ణుని ఉపదేశం` : `Krishna's Advice in Chapter ${ch.number}`;
                response = GitaAIResponder.formatAdviceResponse(ch, this.currentLanguage);
            } else if (action === 'shloka') {
                userPrompt = isTe ? `అధ్యాయం ${ch.number} లోని ముఖ్యమైన శ్లోకం` : `Key Verse of Chapter ${ch.number}`;
                response = GitaAIResponder.formatShlokaResponse(ch, this.currentLanguage);
            } else if (action === 'stress') {
                userPrompt = isTe ? 'ఒత్తిడి & ప్రశాంతత' : 'Dealing with Stress';
                response = GitaAIResponder.formatDilemmaResponse(GITA_KNOWLEDGE.dilemmas.stress, this.currentLanguage);
            } else if (action === 'purpose') {
                userPrompt = isTe ? 'జీవిత లక్ష్యం' : 'Finding Life Purpose';
                response = GitaAIResponder.formatDilemmaResponse(GITA_KNOWLEDGE.dilemmas.purpose, this.currentLanguage);
            }

            this.lastAction = action;
            if (response) {
                this.showChatStream();
                this.appendUserMessage(userPrompt);
                this.appendBotMessage(response, false, '', action);
            }
        }

        showChatStream() {
            const discovery = document.getElementById('gitaDiscoveryHero');
            const stream = document.getElementById('gitaChatStream');
            if (discovery) discovery.style.display = 'none';
            if (stream) stream.classList.remove('hidden');
            this.hasStartedChat = true;
        }

        showTypingIndicator() {
            const stream = document.getElementById('gitaChatStream');
            if (!stream) return;

            const existing = document.getElementById('gitaTypingRow');
            if (existing) existing.remove();

            const isTe = this.currentLanguage === 'te';
            const row = document.createElement('div');
            row.id = 'gitaTypingRow';
            row.className = 'gita-message-row bot-row gita-typing-row';
            row.innerHTML = `
                <div class="gita-bot-avatar-col">
                    <span class="bot-tiny-avatar">🪷</span>
                </div>
                <div class="gita-typing-bubble">
                    <span class="gita-typing-text">${isTe ? 'గీతా AI ఆలోచిస్తోంది' : 'Gita AI is contemplating'}</span>
                    <div class="gita-typing-dots">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            `;
            stream.appendChild(row);
            const bodyArea = document.getElementById('gitaBodyArea');
            if (bodyArea) bodyArea.scrollTop = bodyArea.scrollHeight;
        }

        removeTypingIndicator() {
            const el = document.getElementById('gitaTypingRow');
            if (el) el.remove();
        }

        async handleUserSubmit(query) {
            if (!query || !query.trim()) return;
            const input = document.getElementById('gitaUserInput');
            if (input) input.value = '';

            // Auto-detect Telugu text and sync language
            if (/[\u0C00-\u0C7F]/.test(query) && this.currentLanguage !== 'te') {
                this.currentLanguage = 'te';
                document.querySelectorAll('.gita-lang-toggle-pill .lang-btn').forEach(b => {
                    if (b.getAttribute('data-lang') === 'te') b.classList.add('active');
                    else b.classList.remove('active');
                });
            }

            this.lastUserQuery = query;
            this.lastAction = null;
            this.showChatStream();
            this.appendUserMessage(query);
            this.conversationHistory.push({ role: 'user', content: query });

            // Display contemplating / typing indicator
            this.showTypingIndicator();

            try {
                // Attempt to call server /api/chat
                const responsePromise = fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        prompt: query,
                        language: this.currentLanguage,
                        chapter: this.activeChapter,
                        history: this.conversationHistory.slice(-6)
                    })
                });

                // Timeout after 4 seconds to ensure instant snappy experience
                const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4000));
                const res = await Promise.race([responsePromise, timeoutPromise]);
                
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.text) {
                        this.removeTypingIndicator();
                        const responseObj = GitaAIResponder.formatExternalAIResponse(data.text, data.title, this.currentLanguage);
                        this.appendBotMessage(responseObj, false, query);
                        return;
                    }
                }
            } catch (err) {
                // Fallback to local high-precision reasoning engine
            }

            // High-precision local reasoning fallback
            setTimeout(() => {
                this.removeTypingIndicator();
                const response = GitaAIResponder.generateDeepResponse(query, this.activeChapter, this.currentLanguage, this.conversationHistory);
                this.appendBotMessage(response, false, query);
            }, 350);
        }

        appendUserMessage(text) {
            const stream = document.getElementById('gitaChatStream');
            if (!stream) return;

            const time = this.formatTime();
            const msg = document.createElement('div');
            msg.className = 'gita-message-row user-row';
            msg.dataset.query = text;
            msg.innerHTML = `
                <div class="gita-msg-bubble user-bubble">
                    <div class="gita-msg-text">${text}</div>
                    <div class="gita-msg-time">${time}</div>
                </div>
            `;
            stream.appendChild(msg);
            const bodyArea = document.getElementById('gitaBodyArea');
            if (bodyArea) bodyArea.scrollTop = bodyArea.scrollHeight;
        }

        appendBotMessage(response, autoPlayVoice = false, query = '', action = '') {
            const stream = document.getElementById('gitaChatStream');
            if (!stream) return;

            const time = this.formatTime();
            const msg = document.createElement('div');
            msg.className = 'gita-message-row bot-row';
            msg.dataset.query = query || this.lastUserQuery || '';
            msg.dataset.action = action || this.lastAction || '';

            const uniqueId = 'voice_btn_' + Math.random().toString(36).substr(2, 9);
            const isTe = this.currentLanguage === 'te';
            const listenLabel = isTe ? 'వినండి' : 'Listen';
            const stopLabel = isTe ? 'ఆపండి' : 'Stop';

            msg.innerHTML = `
                <div class="gita-bot-avatar-col">
                    <span class="bot-tiny-avatar">🪷</span>
                </div>
                <div class="gita-msg-bubble bot-bubble">
                    <div class="gita-msg-content">${response.html}</div>
                    <div class="gita-msg-meta">
                        <span class="gita-msg-time">${time}</span>
                        ${response.speechText ? `
                            <div class="gita-listen-container" id="container_${uniqueId}">
                                <button type="button" class="gita-listen-chip" id="${uniqueId}" data-speech-text="${encodeURIComponent(response.speechText)}">
                                    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                    </svg>
                                    <span>${listenLabel}</span>
                                </button>
                                <button type="button" class="gita-stop-chip hidden" id="stop_${uniqueId}" title="${stopLabel}">
                                    <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor">
                                        <rect x="5" y="5" width="14" height="14" rx="2"></rect>
                                    </svg>
                                    <span>${stopLabel}</span>
                                </button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;

            stream.appendChild(msg);

            // Bind click events on follow-up chips
            msg.querySelectorAll('.gita-followup-chip').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    e.preventDefault();
                    const promptText = chip.getAttribute('data-prompt');
                    if (promptText) {
                        this.handleUserSubmit(promptText);
                    }
                });
            });

            const bodyArea = document.getElementById('gitaBodyArea');
            if (bodyArea) bodyArea.scrollTop = bodyArea.scrollHeight;

            if (response.speechText) {
                const btn = document.getElementById(uniqueId);
                const stopBtn = document.getElementById(`stop_${uniqueId}`);

                if (btn) {
                    btn._rawSpeechText = response.speechText;

                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        // 1. If THIS message is currently playing -> PAUSE IT!
                        if (this.activePlayingVoiceBtnId === uniqueId && this.voiceEngine.isSpeaking && !this.voiceEngine.isPaused) {
                            this.voiceEngine.pause();
                            this.setListenChipState(uniqueId, 'paused');
                            return;
                        }

                        // 2. If THIS message is currently paused -> RESUME IT! (CONTINUES FROM WHERE IT STOPPED, NOT FROM START)
                        if (this.activePlayingVoiceBtnId === uniqueId && this.voiceEngine.isSpeaking && this.voiceEngine.isPaused) {
                            this.voiceEngine.resume();
                            this.setListenChipState(uniqueId, 'playing');
                            return;
                        }

                        // 3. New message or fresh play: stop prior narration cleanly
                        this.voiceEngine.stop(false);
                        this.resetAllListenChips();

                        this.activePlayingVoiceBtnId = uniqueId;
                        this.setListenChipState(uniqueId, 'playing');

                        let textToPlay = btn._rawSpeechText || response.speechText || btn.dataset.speechText || '';
                        try {
                            textToPlay = decodeURIComponent(textToPlay);
                        } catch (e) {}

                        this.voiceEngine.speak(textToPlay, this.currentLanguage, () => {
                            this.resetAllListenChips();
                        });
                    });

                    // Explicit double click to stop completely
                    btn.addEventListener('dblclick', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.voiceEngine.stop(true);
                        this.resetAllListenChips();
                    });
                }

                if (stopBtn) {
                    stopBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.voiceEngine.stop(true);
                        this.resetAllListenChips();
                    });
                }

                if (autoPlayVoice) {
                    this.voiceEngine.stop(false);
                    this.resetAllListenChips();
                    this.activePlayingVoiceBtnId = uniqueId;
                    this.setListenChipState(uniqueId, 'playing');

                    let textToPlayAuto = (btn && btn._rawSpeechText) || response.speechText || (btn ? btn.dataset.speechText : '') || '';
                    try {
                        textToPlayAuto = decodeURIComponent(textToPlayAuto);
                    } catch (e) {}

                    this.voiceEngine.speak(textToPlayAuto, this.currentLanguage, () => {
                        this.resetAllListenChips();
                    });
                }
            }
        }
    }

    // =========================================================================
    // 7. INITIALIZE ASSISTANT ON LOAD (FROM PAGE 1 ONWARDS)
    // =========================================================================
    function initAssistant() {
        const ctx = detectPageContext();
        if (ctx.isExcluded) {
            return; // Gita AI only shows from page1 onwards, not on index or entry
        }
        if (!document.body) {
            window.addEventListener('DOMContentLoaded', initAssistant);
            window.addEventListener('load', initAssistant);
            return;
        }
        if (!document.getElementById('gitaChatLauncher')) {
            window.GitaAssistant = new GitaUIController();
            console.log('🪷 Gita AI Assistant Initialized Successfully on ' + (window.location.pathname || 'page1'));
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAssistant);
    } else {
        initAssistant();
    }
    window.addEventListener('load', initAssistant);

})();
