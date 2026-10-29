const LESSONS_DATA = {
    "GREETINGS": {
        title: "Starter: Greetings & Simple Introductions",
        tags: ["present","greetings"],
        intro: "Learn basic greetings and how to introduce yourself. Very short sentences, present tense, super beginner-friendly.",
        targetXP: 20,
        phrases: [
            { type: 'CONJUGATE', sentence: "Hola, yo (saludar - Present) a mi amigo.", verb: "saludar", subject: "Yo", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Tú (decir - Present) tu nombre.", verb: "decir", subject: "Tú", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Él (llamar - Present) a su madre.", verb: "llamar", subject: "Él", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Nosotros (presentar - Present) a la clase.", verb: "presentar", subject: "Nosotros", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Ustedes (saludar - Present) con una sonrisa.", verb: "saludar", subject: "Uds.", tense: "Present" },
            { type: 'FILL_IN_BLANK', sentence: "Hello -> (FILL IN THE BLANK) en español.", answer: "Hola", hint: "Simple greeting" },
            { type: 'FILL_IN_BLANK', sentence: "Good morning -> (FILL IN THE BLANK) días.", answer: "Buenos", hint: "Two-word phrase" },
            { type: 'FILL_IN_BLANK', sentence: "How are you? -> ¿(FILL IN THE BLANK) estás?", answer: "Cómo", hint: "Ask about someone's condition" },
            { type: 'FILL_IN_BLANK', sentence: "My name is... -> Me (FILL IN THE BLANK) ___.", answer: "llamo", hint: "Use with 'Me ___' to give your name" }
        ]
    },
	"SER_ESTAR_BASIC": {
			title: "Starter: Ser & Estar — 'To Be' Basics",
        tags: ["present","ser-estar"],
			intro: "Two verbs for 'to be' — use simple present forms to say names, origins, and locations. Very short examples.",
			targetXP: 20,
			phrases: [
				{ type: 'CONJUGATE', sentence: "Yo (ser - Present) estudiante.", verb: "ser", subject: "Yo", tense: "Present" },
				{ type: 'CONJUGATE', sentence: "Tú (ser - Present) de México.", verb: "ser", subject: "Tú", tense: "Present" },
				{ type: 'CONJUGATE', sentence: "Ella (estar - Present) en casa.", verb: "estar", subject: "Ella", tense: "Present" },
				{ type: 'CONJUGATE', sentence: "Nosotros (estar - Present) en la escuela.", verb: "estar", subject: "Nosotros", tense: "Present" },
				{ type: 'FILL_IN_BLANK', sentence: "I am a teacher. -> Yo (FILL IN THE BLANK) profesor.", answer: "soy", hint: "Use Ser (Yo)" },
				{ type: 'FILL_IN_BLANK', sentence: "They are at the park. -> Ellos (FILL IN THE BLANK) en el parque.", answer: "están", hint: "Use Estar (Ellos)" },
				{ type: 'FILL_IN_BLANK', sentence: "We are from here. -> Nosotros (FILL IN THE BLANK) de aquí.", answer: "somos", hint: "Use Ser (Nosotros) for origin" },
				{ type: 'FILL_IN_BLANK', sentence: "You (formal) are tired. -> Usted (FILL IN THE BLANK) cansado.", answer: "está", hint: "Use Estar (Ud.) for temporary states" }
			]
		},
	"AR_VERBS_SIMPLE": {
			title: "Starter: Regular -AR Verbs (Present) — Very Short",
        tags: ["present","ar-verbs"],
			intro: "Practice three common -AR verbs (hablar, estudiar, caminar) in present tense. Focus on Yo, Tú, Él, Nosotros forms.",
			targetXP: 15,
			phrases: [
				{ type: 'CONJUGATE', sentence: "Yo (hablar - Present) español.", verb: "hablar", subject: "Yo", tense: "Present" },
				{ type: 'CONJUGATE', sentence: "Tú (estudiar - Present) hoy.", verb: "estudiar", subject: "Tú", tense: "Present" },
				{ type: 'CONJUGATE', sentence: "Él (caminar - Present) rápido.", verb: "caminar", subject: "Él", tense: "Present" },
				{ type: 'CONJUGATE', sentence: "Nosotros (hablar - Present) con el profesor.", verb: "hablar", subject: "Nosotros", tense: "Present" },
				{ type: 'FILL_IN_BLANK', sentence: "I walk -> Yo (FILL IN THE BLANK).", answer: "camino", hint: "Caminar (Yo) Present" },
				{ type: 'FILL_IN_BLANK', sentence: "You study -> Tú (FILL IN THE BLANK).", answer: "estudias", hint: "Estudiar (Tú) Present" },
				{ type: 'FILL_IN_BLANK', sentence: "We speak -> Nosotros (FILL IN THE BLANK).", answer: "hablamos", hint: "Hablar (Nosotros) Present" }
			]
		},
	"NUMBERS_DAYS": {
			title: "Starter: Numbers 1–10 & Days — Super Small",
        tags: ["numbers"],
			intro: "Learn numbers 1–10 and the days of the week with short fill-in-the-blank practice. Instant beginner wins.",
			targetXP: 15,
			phrases: [
				{ type: 'FILL_IN_BLANK', sentence: "One -> (FILL IN THE BLANK)", answer: "uno", hint: "1" },
				{ type: 'FILL_IN_BLANK', sentence: "Two -> (FILL IN THE BLANK)", answer: "dos", hint: "2" },
				{ type: 'FILL_IN_BLANK', sentence: "Three -> (FILL IN THE BLANK)", answer: "tres", hint: "3" },
				{ type: 'FILL_IN_BLANK', sentence: "Monday -> (FILL IN THE BLANK)", answer: "lunes", hint: "First weekday" },
				{ type: 'FILL_IN_BLANK', sentence: "Friday -> (FILL IN THE BLANK)", answer: "viernes", hint: "End of weekday before weekend" },
				{ type: 'FILL_IN_BLANK', sentence: "How many? -> ¿(FILL IN THE BLANK)?", answer: "Cuántos", hint: "Question word for quantity" }
			]
		},
	"POLITE_PHRASES": {
        title: "Starter: Polite Phrases & Yes/No Basics",
        tags: ["politeness"],
        intro: "Short, essential polite phrases: please, thank you, yes/no, excuse me — perfect for first conversations.",
        targetXP: 10,
        phrases: [
            { type: 'FILL_IN_BLANK', sentence: "Please -> (FILL IN THE BLANK)", answer: "por favor", hint: "Two-word polite phrase" },
            { type: 'FILL_IN_BLANK', sentence: "Thank you -> (FILL IN THE BLANK)", answer: "gracias", hint: "Show appreciation" },
            { type: 'FILL_IN_BLANK', sentence: "You're welcome -> (FILL IN THE BLANK)", answer: "de nada", hint: "Reply to thanks" },
            { type: 'FILL_IN_BLANK', sentence: "Yes / No -> (FILL IN THE BLANK) / (FILL IN THE BLANK)", answer: "sí / no", hint: "Simple affirmation and negation" },
            { type: 'CONJUGATE', sentence: "Excuse me -> (disculpar - Present) un momento.", verb: "disculpar", subject: "Yo", tense: "Present" }
        ]
    },
	"LISTENING_BASICS": {
        title: "Ear Training: Listening Basics",
        tags: ["listening"],
        intro: "Listen to the audio and type what you hear! This lesson uses simple, common phrases to train your ear.",
        targetXP: 50,
        phrases: [
            { type: 'LISTENING', prompt: "Type what you hear:", textToSpeak: "Hola, ¿cómo estás?", answer: "Hola, ¿cómo estás?", hint: "A common greeting." },
            { type: 'LISTENING', prompt: "Type what you hear:", textToSpeak: "Me llamo Juan", answer: "Me llamo Juan", hint: "He is introducing himself." },
            { type: 'LISTENING', prompt: "Type what you hear:", textToSpeak: "Yo tengo un gato", answer: "Yo tengo un gato", hint: "He has a pet." },
            { type: 'LISTENING', prompt: "Type what you hear:", textToSpeak: "Ella come una manzana", answer: "Ella come una manzana", hint: "She is eating a fruit." },
            { type: 'LISTENING', prompt: "Type what you hear:", textToSpeak: "Nosotros vivimos en la casa", answer: "Nosotros vivimos en la casa", hint: "Plural 'we' and a location." },
            { type: 'LISTENING', prompt: "Type what you hear:", textToSpeak: "Por favor y gracias", answer: "Por favor y gracias", hint: "Two polite phrases." },
            { type: 'LISTENING', prompt: "Type what you hear:", textToSpeak: "Quiero más kétchup", answer: "Quiero más kétchup", hint: "A very important phrase!" },
            { type: 'LISTENING', prompt: "Type what you hear:", textToSpeak: "Él habla español", answer: "Él habla español", hint: "He speaks a language." },
            { type: 'LISTENING', prompt: "Type what you hear:", textToSpeak: "¿Dónde está el baño?", answer: "¿Dónde está el baño?", hint: "A useful question when traveling." },
            { type: 'LISTENING', prompt: "Type what you hear:", textToSpeak: "La lección es fácil", answer: "La lección es fácil", hint: "About the lesson." }
        ]
    },
	"RODRIGOS_STORY": {
        title: "Rodrigo's Wonderful Story!",
        tags: ["listening","story"],
        intro: "Listen to the audio and answer questions! This lesson uses simple, common phrases to train your ear.",
        targetXP: 50,
        phrases: [
            { type: 'LISTENING', prompt: "How many pets does he have? (Respond in English. Use letters, not numbers.)", textToSpeak: "¡Hola! Me llamo Rodrigo. Vivo en los Estados Unidos. Tengo dos mascotas. Mis tortugas se llaman Fred y José. Vivo en un apartamento en la ciudad de Denver. Es un lugar muy animado, pero también es muy peligroso. Adiós, mi amigo. ¡Hasta luego!", answer: "Two", hint: "The amount of pets." },
            { type: 'LISTENING', prompt: "What is the name of the city he's in? (Respond in English. Use letters, not numbers.)", textToSpeak: "¡Hola! Me llamo Rodrigo. Vivo en los Estados Unidos. Tengo dos mascotas. Mis tortugas se llaman Fred y José. Vivo en un apartamento en la ciudad de Denver. Es un lugar muy animado, pero también es muy peligroso. Adiós, mi amigo. ¡Hasta luego!", answer: "Denver", hint: "Name of the city." },
            { type: 'LISTENING', prompt: "Is the city safe? (Respond in English. Yes or no.)", textToSpeak: "¡Hola! Me llamo Rodrigo. Vivo en los Estados Unidos. Tengo dos mascotas. Mis tortugas se llaman Fred y José. Vivo en un apartamento en la ciudad de Denver. Es un lugar muy animado, pero también es muy peligroso. Adiós, mi amigo. ¡Hasta luego!", answer: "No", hint: "Is it safe." },
            { type: 'LISTENING', prompt: "Is the city lively? (Respond in English. Yes or no.)", textToSpeak: "¡Hola! Me llamo Rodrigo. Vivo en los Estados Unidos. Tengo dos mascotas. Mis tortugas se llaman Fred y José. Vivo en un apartamento en la ciudad de Denver. Es un lugar muy animado, pero también es muy peligroso. Adiós, mi amigo. ¡Hasta luego!", answer: "Yes", hint: "Is it lively." },
            { type: 'LISTENING', prompt: "What type of housing was Rodrigo in? (Respond in English. Use letters, not numbers.)", textToSpeak: "¡Hola! Me llamo Rodrigo. Vivo en los Estados Unidos. Tengo dos mascotas. Mis tortugas se llaman Fred y José. Vivo en un apartamento en la ciudad de Denver. Es un lugar muy animado, pero también es muy peligroso. Adiós, mi amigo. ¡Hasta luego!", answer: "Apartment", hint: "Type of home." },
            { type: 'LISTENING', prompt: "One pet was named José, what were the others?(Respond in English. Use letters, not numbers.)", textToSpeak: "¡Hola! Me llamo Rodrigo. Vivo en los Estados Unidos. Tengo dos mascotas. Mis tortugas se llaman Fred y José. Vivo en un apartamento en la ciudad de Denver. Es un lugar muy animado, pero también es muy peligroso. Adiós, mi amigo. ¡Hasta luego!", answer: "Fred", hint: "The name of his pet!" },
            { type: 'LISTENING', prompt: "What type of pets did he have?(Respond in English. Keep answer singular.)", textToSpeak: "¡Hola! Me llamo Rodrigo. Vivo en los Estados Unidos. Tengo dos mascotas. Mis tortugas se llaman Fred y José. Vivo en un apartamento en la ciudad de Denver. Es un lugar muy animado, pero también es muy peligroso. Adiós, mi amigo. ¡Hasta luego!", answer: "Turtle", hint: "His pets' species!" },
            { type: 'LISTENING', prompt: "What country is his city in? (Respond in English. No acronyms, use full name.)", textToSpeak: "¡Hola! Me llamo Rodrigo. Vivo en los Estados Unidos. Tengo dos mascotas. Mis tortugas se llaman Fred y José. Vivo en un apartamento en la ciudad de Denver. Es un lugar muy animado, pero también es muy peligroso. Adiós, mi amigo. ¡Hasta luego!", answer: "The United States of America", hint: "Start the name with 'The'." },
            { type: 'LISTENING', prompt: "When does he want to see you again? (Respond in English. Use letters, not numbers.)", textToSpeak: "¡Hola! Me llamo Rodrigo. Vivo en los Estados Unidos. Tengo dos mascotas. Mis tortugas se llaman Fred y José. Vivo en un apartamento en la ciudad de Denver. Es un lugar muy animado, pero también es muy peligroso. Adiós, mi amigo. ¡Hasta luego!", answer: "Later", hint: "One word for when he wants to see you." },
            { type: 'LISTENING', prompt: "What does he refer to you as? (Respond in English. Use letters, not numbers.)", textToSpeak: "¡Hola! Me llamo Rodrigo. Vivo en los Estados Unidos. Tengo dos mascotas. Mis tortugas se llaman Fred y José. Vivo en un apartamento en la ciudad de Denver. Es un lugar muy animado, pero también es muy peligroso. Adiós, mi amigo. ¡Hasta luego!", answer: "Friend", hint: "One word he used to mention you in English." }
        ]
    },
    // --- LESSON 1-5 (Originals, expanded + targetXP) ---
    "PRETERIT": {
        title: "Intro to Preterit (El Kétchup Pasado)",
        tags: ["preterite"],
        intro: "Welcome to the Preterit Tense! This is for **completed actions** in the past. Think: 'I ate the catsup' (once).",
        targetXP: 50,
        phrases: [
            { type: 'CONJUGATE', sentence: "Ayer, yo (ser - Preterite) el que abrió la botella.", verb: "ser", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ella (hacer - Preterite) una gran cena.", verb: "hacer", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nosotros (estar - Preterite) felices cuando compramos la salsa.", verb: "estar", subject: "Nosotros", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "¿Tú (vivir - Preterite) en esta ciudad el año pasado?", verb: "vivir", subject: "Tú", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (decir - Preterite) la verdad sobre el kétchup.", verb: "decir", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Anoche, ellos (hablar - Preterite) por tres horas.", verb: "hablar", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (poner - Preterite) el kétchup en mi plato.", verb: "poner", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Tú (escribir - Preterite) la receta con acentos.", verb: "escribir", subject: "Tú", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "El gato (morir - Preterite) de felicidad (no de verdad).", verb: "morir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (buscar - Preterite) la botella por todas partes.", verb: "buscar", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos no (creer - Preterite) la historia.", verb: "creer", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (llegar - Preterite) tarde a la cena.", verb: "llegar", subject: "Yo", tense: "Preterite" } // Note: llegar is not in VERB_DATA, but this is a good test of resilience. Let's add it.
        ]
    },

    "IMPERFECT": {
        title: "Intro to Imperfect (Cuando Comíamos Kétchup)",
        tags: ["imperfect"],
        intro: "The Imperfect tense describes **ongoing, habitual, or descriptive actions** in the past. Think: 'I used to eat catsup' or 'The day was hot.'",
        targetXP: 50,
        phrases: [
            { type: 'CONJUGATE', sentence: "Cuando era niño, yo (comer - Imperfect) kétchup en todas mis comidas.", verb: "comer", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Tú (querer - Imperfect) más kétchup, pero no había.", verb: "querer", subject: "Tú", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Ella (ser - Imperfect) muy alta y siempre (jugar - Imperfect) baloncesto.", verb: "ser", subject: "Ella", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Nosotros (caminar - Imperfect) por el parque cada tarde.", verb: "caminar", subject: "Nosotros", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Antes, ellos (ayudar - Imperfect) a su madre con la salsa.", verb: "ayudar", subject: "Ellos", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Yo (estar - Imperfect) muy aburrido antes de que llegara el kétchup.", verb: "estar", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "De pequeño, yo (ver - Imperfect) muchos dibujos animados.", verb: "ver", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Tú (tener - Imperfect) un perro que (comer - Imperfect) de todo.", verb: "tener", subject: "Tú", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Nosotros (ir - Imperfect) a la playa todos los veranos.", verb: "ir", subject: "Nosotros", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Ellos (vivir - Imperfect) en una casa roja.", verb: "vivir", subject: "Ellos", tense: "Imperfect" }
        ]
    },

    "CONDITIONAL": {
        title: "Intro to Conditional (¿Qué Haríamos con Más Kétchup?)",
        tags: ["conditional"],
        intro: "The Conditional tense is for actions that **'would' happen**. Watch out for irregular stems like **TENER** (tendr-) and **HACER** (har-).",
        targetXP: 50,
        phrases: [
            { type: 'CONJUGATE', sentence: "Si tuviera dinero, yo (comprar - Conditional) todo el kétchup.", verb: "comprar", subject: "Yo", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Tú (comer - Conditional) más papas fritas si tuvieras más kétchup.", verb: "comer", subject: "Tú", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Nosotros (hacer - Conditional) una fiesta de kétchup, ¡qué loco!", verb: "hacer", subject: "Nosotros", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Yo (tener - Conditional) miedo si la botella estuviera vacía.", verb: "tener", subject: "Yo", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Ellos (estar - Conditional) aquí si les dijeras que hay kétchup gratis.", verb: "estar", subject: "Ellos", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Yo te (decir - Conditional) el secreto del kétchup, pero no puedo.", verb: "decir", subject: "Yo", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "¿Tú (poder - Conditional) pasarme la salsa, por favor?", verb: "poder", subject: "Tú", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Yo (saber - Conditional) la respuesta, pero no te la diré.", verb: "saber", subject: "Yo", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Nosotros (querer - Conditional) ir, pero tenemos que trabajar.", verb: "querer", subject: "Nosotros", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Yo (poner - Conditional) la mesa si tú (lavar - Conditional) los platos.", verb: "poner", subject: "Yo", tense: "Conditional" }
        ]
    },

    "CITY_SUBURBS": {
        title: "La Ciudad Y Las Afueras (City and Suburbs)",
        tags: ["preterite","imperfect","present","places"],
        intro: "Practice travel and scene-setting verbs, mixing Preterit, Imperfect, and Present tenses. Practice using **VIAJAR** and **COMPRAR**!",
        targetXP: 50,
        phrases: [
            { type: 'CONJUGATE', sentence: "En la ciudad, yo siempre (comprar - Present) la botella más grande.", verb: "comprar", subject: "Yo", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Mi familia (viajar - Preterite) a las afueras la semana pasada.", verb: "viajar", subject: "Nosotros", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Antes, nosotros (vivir - Imperfect) en la ciudad y (comer - Imperfect) comida rápida.", verb: "comer", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Tú (comprar - Present) el kétchup local, que es más sabroso.", verb: "comprar", subject: "Tú", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Cuando ellos (viajar - Present) al pueblo, siempre (hacer - Present) kétchup casero.", verb: "hacer", subject: "Ellos", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Yo (estar - Imperfect) cansado después de (viajar - Present) toda la noche.", verb: "estar", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Yo (conducir - Present) al centro todos los días.", verb: "conducir", subject: "Yo", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Ayer, yo (andar - Preterite) por el parque por horas.", verb: "andar", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nosotros (caminar - Imperfect) al metro cuando (empezar - Preterite) a llover.", verb: "caminar", subject: "Nosotros", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "La gente (construir - Present) un nuevo edificio en mi calle.", verb: "construir", subject: "Ellos", tense: "Present" }
        ]
    },

    "ADJECTIVES": {
        title: "The Incredible Hulk Mighty Adjective Practice",
        tags: ["adjectives"],
        intro: "Hulk smash! But Hulk is also **verde**, **fuerte**, and **enojado**. This lesson focuses on the verb **SER** in its various tenses used to describe things.",
        targetXP: 50,
        phrases: [
            { type: 'CONJUGATE', sentence: "La botella de kétchup (ser - Present) muy **grande** y **roja**.", verb: "ser", subject: "Él", tense: "Present" },
            { type: 'CONJUGATE', sentence: "De niño, mi hermano (ser - Imperfect) muy **travieso**.", verb: "ser", subject: "Ella", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Yo (ser - Conditional) el hombre **más feliz** si tuviera esta botella.", verb: "ser", subject: "Yo", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Ayer, mi amigo (ser - Preterite) muy **amable** y me dio kétchup.", verb: "ser", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Tú (ser - Present) **inteligente** y sabes que la salsa es un adjetivo.", verb: "ser", subject: "Tú", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Nosotros (ser - Conditional) **aventureros** si (ir - Conditional) a buscar kétchup salvaje.", verb: "ser", subject: "Nosotros", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "La comida (ser - Present) **deliciosa**.", verb: "ser", subject: "Él", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Los gatos (ser - Present) muy **perezosos** (lazy).", verb: "ser", subject: "Ellos", tense: "Present" },
            { type: 'CONJUGATE', sentence: "La película (ser - Preterite) **aburrida** (boring).", verb: "ser", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nosotros (ser - Imperfect) **jóvenes** e **inocentes**.", verb: "ser", subject: "Nosotros", tense: "Imperfect" }
        ]
    },

    // --- LESSONS 6-8 (Refactored to FILL_IN_BLANK, expanded) ---
    "DOP": {
        title: "Direct Object Pronouns (DOP)",
        tags: ["direct-object"],
        intro: "Replace the direct object with **lo, la, los, las**. Write the *entire new phrase* (e.g., 'La compro').",
        targetXP: 50,
        phrases: [
            { type: 'FILL_IN_BLANK', sentence: "Yo compro **el kétchup**. (FILL IN THE BLANK)", answer: "Lo compro", hint: "Replace 'el kétchup'" },
            { type: 'FILL_IN_BLANK', sentence: "Nosotros vemos **las papas fritas**. (FILL IN THE BLANK)", answer: "Las vemos", hint: "Replace 'las papas fritas'" },
            { type: 'FILL_IN_BLANK', sentence: "Tú tienes **la botella**. (FILL IN THE BLANK)", answer: "La tienes", hint: "Replace 'la botella'" },
            { type: 'FILL_IN_BLANK', sentence: "Ellos necesitan **los tomates**. (FILL IN THE BLANK)", answer: "Los necesitan", hint: "Replace 'los tomates'" },
            { type: 'FILL_IN_BLANK', sentence: "Ella escribió **la receta**. (FILL IN THE BLANK)", answer: "La escribió", hint: "Replace 'la receta'" },
            { type: 'FILL_IN_BLANK', sentence: "Yo miro **a mi amigo**. (FILL IN THE BLANK)", answer: "Lo miro", hint: "Replace 'a mi amigo' (person)" },
            { type: 'FILL_IN_BLANK', sentence: "Tú vas a abrir **la puerta**. (FILL IN THE BLANK)", answer: "La vas a abrir", hint: "Dos opciones: 'La vas a abrir' o 'Vas a abrirla'" },
            { type: 'FILL_IN_BLANK', sentence: "Estoy comiendo **la hamburguesa**. (FILL IN THE BLANK)", answer: "La estoy comiendo", hint: "Dos opciones: 'La estoy comiendo' o 'Estoy comiéndola'" },
            { type: 'FILL_IN_BLANK', sentence: "Quiero **ese coche**. (FILL IN THE BLANK)", answer: "Lo quiero", hint: "Replace 'ese coche'" },
            { type: 'FILL_IN_BLANK', sentence: "I see it (the book). -> Yo (FILL IN THE BLANK) veo.", answer: "lo", hint: "Masculine singular direct object pronoun" },
        ]
    },

    "VOCAB": {
        title: "KFC Core Vocabulary Drill",
        tags: ["vocabulary","translation"],
        intro: "Translate the **bolded word/phrase** in the context of the sentence. Answer should be the single Spanish word/phrase.",
        targetXP: 50,
        phrases: [
            { type: 'FILL_IN_BLANK', sentence: "Yo necesito **more** kétchup. (FILL IN THE BLANK)", answer: "más", hint: "Translate 'more'" },
            { type: 'FILL_IN_BLANK', sentence: "Ella está **hungry**. (FILL IN THE BLANK)", answer: "hambrienta", hint: "Translate 'hungry' (feminine)" },
            { type: 'FILL_IN_BLANK', sentence: "Nosotros **buy** la comida. (FILL IN THE BLANK)", answer: "compramos", hint: "Translate 'buy' (Nosotros, Present)" },
            { type: 'FILL_IN_BLANK', sentence: "Tú **always** tienes una botella. (FILL IN THE BLANK)", answer: "siempre", hint: "Translate 'always'" },
            { type: 'FILL_IN_BLANK', sentence: "El kétchup es **better** que la mayonesa. (FILL IN THE BLANK)", answer: "mejor", hint: "Translate 'better'" },
            { type: 'FILL_IN_BLANK', sentence: "Yo voy a **open** la botella. (FILL IN THE BLANK)", answer: "abrir", hint: "Translate 'open' (Infinitive)" },
            { type: 'FILL_IN_BLANK', sentence: "El gato está **under** la mesa. (FILL IN THE BLANK)", answer: "debajo de", hint: "Translate 'under'" },
            { type: 'FILL_IN_BLANK', sentence: "Hoy es **Tuesday**. (FILL IN THE BLANK)", answer: "martes", hint: "Translate 'Tuesday'" },
            { type: 'FILL_IN_BLANK', sentence: "Yo tengo **too much** trabajo. (FILL IN THE BLANK)", answer: "demasiado", hint: "Translate 'too much'" },
            { type: 'FILL_IN_BLANK', sentence: "Ellos son **from** España. (FILL IN THE BLANK)", answer: "de", hint: "Translate 'from'" }
        ]
    },

    "COMMANDS": {
        title: "Formal Commands (Ud.)",
        tags: ["commands"],
        intro: "Practice giving formal commands using the **Ud. form**. Remember to go to the **Yo** form, drop the **-o**, and add the opposite vowel.",
        targetXP: 50,
        phrases: [
            { type: 'FILL_IN_BLANK', sentence: "**Eat** the food, please. (Ud.) (FILL IN THE BLANK)", answer: "Coma", hint: "Comer (Ud. Command)" },
            { type: 'FILL_IN_BLANK', sentence: "**Speak** slower, thank you. (Ud.) (FILL IN THE BLANK)", answer: "Hable", hint: "Hablar (Ud. Command)" },
            { type: 'FILL_IN_BLANK', sentence: "**Put** the bottle on the table. (Ud.) (FILL IN THE BLANK)", answer: "Ponga", hint: "Poner (Irregular Ud. Command)" },
            { type: 'FILL_IN_BLANK', sentence: "**Go** to the store. (Ud.) (FILL IN THE BLANK)", answer: "Vaya", hint: "Ir (Irregular Ud. Command)" },
            { type: 'FILL_IN_BLANK', sentence: "No **leave**. (Ud.) (FILL IN THE BLANK)", answer: "salga", hint: "Salir (Negative Ud. Command)" },
            { type: 'FILL_IN_BLANK', sentence: "**Be** happy! (Ud.) (FILL IN THE BLANK)", answer: "Sea", hint: "Ser (Irregular Ud. Command)" },
            { type: 'FILL_IN_BLANK', sentence: "**Tell** me the truth. (Ud.) (FILL IN THE BLANK)", answer: "Diga", hint: "Decir (Irregular Ud. Command)" },
            { type: 'FILL_IN_BLANK', sentence: "**Do** it now. (Ud.) (FILL IN THE BLANK)", answer: "Haga", hint: "Hacer (Irregular Ud. Command)" },
            { type: 'FILL_IN_BLANK', sentence: "**Bring** the catsup. (Ud.) (FILL IN THE BLANK)", answer: "Traiga", hint: "Traer (Irregular Ud. Command)" },
            { type: 'FILL_IN_BLANK', sentence: "No **drive** so fast. (Ud.) (FILL IN THE BLANK)", answer: "conduzca", hint: "Conducir (Irregular Ud. Command)" }
        ]
    },
    
    // --- LESSONS 9-10 (Originals, expanded + targetXP) ---
    "MC_BASICS": {
        title: "Basic Verb Meanings (Multiple Choice)",
        tags: ["vocabulary","multiple-choice"],
        intro: "A new lesson type! Just choose the correct meaning. No typing required. This is a great way to warm up your vocabulary.",
        targetXP: 50,
        phrases: [
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Hablar' mean?", options: ["To eat", "To live", "To speak", "To buy"], answer: "To speak" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Comer' mean?", options: ["To speak", "To eat", "To write", "To run"], answer: "To eat" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Vivir' mean?", options: ["To live", "To give", "To see", "To go"], answer: "To live" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Tener' mean?", options: ["To be (place)", "To be (permanent)", "To have", "To do"], answer: "To have" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Ser' mean?", options: ["To be (permanent)", "To be (location/feeling)", "To go", "To see"], answer: "To be (permanent)" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Ir' mean?", options: ["To go", "To come", "To leave", "To want"], answer: "To go" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Poder' mean?", options: ["To put", "To be able (can)", "To ask for", "To sleep"], answer: "To be able (can)" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Dormir' mean?", options: ["To die", "To hurt", "To sleep", "To serve"], answer: "To sleep" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Pedir' mean?", options: ["To lose", "To think", "To ask for (request)", "To pay"], answer: "To ask for (request)" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Hacer' mean?", options: ["To have", "To know", "To do / to make", "To say / to tell"], answer: "To do / to make" }
        ]
    },

    "TRANSLATE": {
        title: "Simple Sentence Translation",
        tags: ["translation"],
        intro: "Practice your basic sentence structure by translating these simple phrases from English to Spanish. Pay attention to accents and agreement!",
        targetXP: 50,
        phrases: [
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'I am happy' (male). (FILL IN THE BLANK)", answer: "Estoy feliz", hint: "Use 'estar' for feelings." },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'She is a doctor'. (FILL IN THE BLANK)", answer: "Es doctora", hint: "Use 'ser' for professions. (No 'una')" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'We have catsup'. (FILL IN THE BLANK)", answer: "Tenemos kétchup", hint: "Use 'tener'." },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'I need more'. (FILL IN THE BLANK)", answer: "Necesito más", hint: "Verb 'Necesitar'." },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'I am going to eat'. (FILL IN THE BLANK)", answer: "Voy a comer", hint: "Use 'ir + a + infinitive'." },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'I speak Spanish'. (FILL IN THE BLANK)", answer: "Hablo español", hint: "Verb 'Hablar'." },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'He is tall'. (FILL IN THE BLANK)", answer: "Es alto", hint: "Use 'ser' for descriptions." },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'They (f) are running'. (FILL IN THE BLANK)", answer: "Están corriendo", hint: "Present progressive (estar + gerund)" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'I like catsup'. (FILL IN THE BLANK)", answer: "Me gusta el kétchup", hint: "Gustar is tricky! 'The catsup is pleasing to me.'" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'What time is it?'. (FILL IN THE BLANK)", answer: "¿Qué hora es?", hint: "Use 'ser' for time." }
        ]
    },

    // --- NEW ADVANCED LESSONS (L11-L15) ---
    "SER_ESTAR": {
        title: "BOSS: Ser vs. Estar",
        tags: ["ser-estar","boss"],
        intro: "This is a boss battle! **Ser** is for permanent traits (Description, Occupation, Characteristic, Time, Origin, Relationship). **Estar** is for temporary states (Position, Location, Action, Condition, Emotion).",
        targetXP: 75,
        phrases: [
            { type: 'MULTIPLE_CHOICE', prompt: "Yo ___ de los Estados Unidos. (Origin)", options: ["soy", "estoy"], answer: "soy" },
            { type: 'MULTIPLE_CHOICE', prompt: "El gato ___ en la mesa. (Location)", options: ["es", "está"], answer: "está" },
            { type: 'MULTIPLE_CHOICE', prompt: "Tú ___ muy inteligente. (Characteristic)", options: ["eres", "estás"], answer: "eres" },
            { type: 'MULTIPLE_CHOICE', prompt: "Nosotros ___ comiendo ahora. (Action - Progressive)", options: ["somos", "estamos"], answer: "estamos" },
            { type: 'MULTIPLE_CHOICE', prompt: "Ella ___ triste hoy. (Emotion)", options: ["es", "está"], answer: "está" },
            { type: 'MULTIPLE_CHOICE', prompt: "El cielo ___ azul. (Characteristic)", options: ["es", "está"], answer: "es" },
            { type: 'MULTIPLE_CHOICE', prompt: "La sopa ___ fría. ¡Qué asco! (Condition)", options: ["es", "está"], answer: "está" },
            { type: 'MULTIPLE_CHOICE', prompt: "La fiesta ___ en mi casa. (Location of event)", options: ["es", "está"], answer: "es" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'He is a professor.' (FILL IN THE BLANK)", answer: "Es profesor", hint: "Occupation" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'I am tired' (female). (FILL IN THE BLANK)", answer: "Estoy cansada", hint: "Condition" },
            { type: 'CONJUGATE', sentence: "La botella (ser - Present) de plástico. (Characteristic/Material)", verb: "ser", subject: "Él", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Yo (estar - Preterite) en la tienda cuando llamaste. (Location)", verb: "estar", subject: "Yo", tense: "Preterite" },
            { type: 'FILL_IN_BLANK', sentence: "The party (FILL IN THE BLANK) at my house tonight. (event location)", answer: "es", hint: "Ser for events" },
            { type: 'FILL_IN_BLANK', sentence: "She (FILL IN THE BLANK) tired today. (condition)", answer: "está", hint: "Estar for conditions" },
            { type: 'FILL_IN_BLANK', sentence: "They (FILL IN THE BLANK) doctors. (profession)", answer: "son", hint: "Ser for professions" },
        ]
    },

    "POR_PARA": {
        title: "Por vs. Para (Multiple Choice)",
        tags: ["por-para","multiple-choice"],
        intro: "Practice the tricky rules of **Por** (Reason, Duration, 'Per', 'By', Exchange) and **Para** (Purpose, Recipient, 'In order to', Destination, Deadline).",
        targetXP: 50,
        phrases: [
            { type: 'MULTIPLE_CHOICE', prompt: "Compré el regalo ___ mi madre. (Recipient)", options: ["por", "para"], answer: "para" },
            { type: 'MULTIPLE_CHOICE', prompt: "Estudié ___ dos horas. (Duration)", options: ["por", "para"], answer: "por" },
            { type: 'MULTIPLE_CHOICE', prompt: "Voy a la tienda ___ comprar leche. (Purpose / 'In order to')", options: ["por", "para"], answer: "para" },
            { type: 'MULTIPLE_CHOICE', prompt: "Caminamos ___ el parque. (Through / By)", options: ["por", "para"], answer: "por" },
            { type: 'MULTIPLE_CHOICE', prompt: "Este kétchup es ___ las papas fritas. (Purpose)", options: ["por", "para"], answer: "para" },
            { type: 'MULTIPLE_CHOICE', prompt: "Pagué $5 ___ la botella. (Exchange)", options: ["por", "para"], answer: "por" },
            { type: 'MULTIPLE_CHOICE', prompt: "Salimos ___ Madrid mañana. (Destination)", options: ["por", "para"], answer: "para" },
            { type: 'MULTIPLE_CHOICE', prompt: "Gracias ___ tu ayuda. (Reason / 'Thanks for...')", options: ["por", "para"], answer: "por" },
            { type: 'MULTIPLE_CHOICE', prompt: "La tarea es ___ el lunes. (Deadline)", options: ["por", "para"], answer: "para" },
            { type: 'MULTIPLE_CHOICE', prompt: "Lo hice ___ ti. (On your behalf / Instead of you)", options: ["por", "para"], answer: "por" }
        ]
    },

    "FUTURE_TENSE": {
        title: "The Future Tense (El Futuro)",
        tags: ["future"],
        intro: "Practice the Future Tense! Remember, for regular verbs, you just add the ending to the **infinitive**. Irregulars have special stems (e.g., 'haré', 'diré', 'tendré').",
        targetXP: 50,
        phrases: [
            { type: 'CONJUGATE', sentence: "Mañana, yo (comer - Future) mucho kétchup.", verb: "comer", subject: "Yo", tense: "Future" },
            { type: 'CONJUGATE', sentence: "La próxima semana, nosotros (viajar - Future) a España.", verb: "viajar", subject: "Nosotros", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Tú (ser - Future) un gran conjugador.", verb: "ser", subject: "Tú", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Ellos (tener - Future) que estudiar más.", verb: "tener", subject: "Ellos", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Yo (decir - Future) la verdad.", verb: "decir", subject: "Yo", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Ella (hacer - Future) la tarea más tarde.", verb: "hacer", subject: "Él", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Nosotros (salir - Future) a las ocho.", verb: "salir", subject: "Nosotros", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Yo (poder - Future) ayudarte con eso.", verb: "poder", subject: "Yo", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Ellos (querer - Future) más salsa.", verb: "querer", subject: "Ellos", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Yo (poner - Future) la botella en la mesa.", verb: "poner", subject: "Yo", tense: "Future" }
        ]
    },

    "PRESENT_SUBJUNCTIVE": {
        title: "BOSS: Present Subjunctive",
        tags: ["subjunctive","boss"],
        intro: "¡El Subjuntivo! Use this for **Wishes, Emotions, Impersonal expressions, Recommendations, Doubt, Ojalá**. (WEIRDO). Look for the trigger phrase!",
        targetXP: 100,
        phrases: [
            { type: 'CONJUGATE', sentence: "Espero que tú (tener - PresentSubjunctive) un buen día.", verb: "tener", subject: "Tú", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Quiero que nosotros (hablar - PresentSubjunctive) ahora.", verb: "hablar", subject: "Nosotros", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Es importante que él (comer - PresentSubjunctive) sus vegetales.", verb: "comer", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Dudo que ella (saber - PresentSubjunctive) la respuesta.", verb: "saber", subject: "Él", tense: "PresentSubjunctive" }, // 'ella' maps to 'Él' subject key
            { type: 'CONJUGATE', sentence: "Ojalá que (ser - PresentSubjunctive) fácil.", verb: "ser", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Mi madre no permite que yo (salir - PresentSubjunctive) tarde.", verb: "salir", subject: "Yo", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Es necesario que Uds. (hacer - PresentSubjunctive) la tarea.", verb: "hacer", subject: "Ellos", tense: "PresentSubjunctive" }, // 'Uds.' maps to 'Ellos'
            { type: 'CONJUGATE', sentence: "Me alegro de que (estar - PresentSubjunctive) aquí.", verb: "estar", subject: "Tú", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "No creo que él (ir - PresentSubjunctive) a la fiesta.", verb: "ir", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Te pido que me (dar - PresentSubjunctive) el kétchup.", verb: "dar", subject: "Tú", tense: "PresentSubjunctive" },
            { type: 'FILL_IN_BLANK', sentence: "Quiero que tú (hablar) -> (FILL IN THE BLANK) conmigo.", answer: "hables", hint: "Present subjunctive of hablar, tú" },
            { type: 'FILL_IN_BLANK', sentence: "Espero que ella (comer) -> (FILL IN THE BLANK) bien.", answer: "coma", hint: "Present subjunctive of comer, ella" },
            { type: 'FILL_IN_BLANK', sentence: "Es importante que nosotros (estudiar) -> (FILL IN THE BLANK) mucho.", answer: "estudiemos", hint: "Present subjunctive of estudiar, nosotros" },
            { type: 'MULTIPLE_CHOICE', prompt: "Which triggers the subjunctive?", options: ["Quiero que","Creo que","Sé que","Pienso que"], answer: "Quiero que" },
            { type: 'MULTIPLE_CHOICE', prompt: "Present subjunctive of 'vivir' (yo)?", options: ["viva","vivo","vivía","viviré"], answer: "viva" },
        ]
    },

    "MIXED_BOSS_LEVEL": {
        title: "BOSS: The Ketchup Gauntlet",
        tags: ["boss"],
        intro: "This is the ultimate test! A mix of **all tenses** and **all question types**. Only true masters can survive the gauntlet. ¡Buena suerte!",
        targetXP: 100,
        phrases: [
            { type: 'CONJUGATE', sentence: "Ayer, yo (andar - Preterite) al mercado.", verb: "andar", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Espero que (haber - PresentSubjunctive) kétchup.", verb: "haber", subject: "Él", tense: "PresentSubjunctive" }, // 'haya' is common
            { type: 'CONJUGATE', sentence: "Si yo fuera rico, (comprar - Conditional) una fábrica de kétchup.", verb: "comprar", subject: "Yo", tense: "Conditional" },
            { type: 'MULTIPLE_CHOICE', prompt: "Choose the correct translation: 'I am a teacher.'", options: ["Estoy profesor.", "Soy profesor.", "Ser profesor.", "Estoy siendo profesor."], answer: "Soy profesor." },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'He asks for more.' (FILL IN THE BLANK)", answer: "Pide más", hint: "Verb 'pedir' (e->i)" },
            { type: 'CONJUGATE', sentence: "El próximo año, yo (vivir - Future) en Madrid.", verb: "vivir", subject: "Yo", tense: "Future" },
            { type: 'MULTIPLE_CHOICE', prompt: "I bought it *for* 10 dollars. (Exchange)", options: ["por", "para"], answer: "por" },
            { type: 'CONJUGATE', sentence: "El gato (dormir - Preterite) en mi cama anoche.", verb: "dormir", subject: "Él", tense: "Preterite" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'It is important to study.' (FILL IN THE BLANK)", answer: "Es importante estudiar", hint: "Impersonal expression + infinitive" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'Seguir' mean?", options: ["To feel", "To serve", "To sleep", "To follow / continue"], answer: "To follow / continue" },
            { type: 'CONJUGATE', sentence: "Cuando era joven, yo (jugar - Imperfect) con mis amigos.", verb: "jugar", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "No (destruir - PresentSubjunctive) la cocina, por favor. (Tú)", verb: "destruir", subject: "Tú", tense: "PresentSubjunctive" }
        ]
    },
	"BUSINESS_SPANISH_1": {
        title: "Premium: Business Spanish - Greetings & Meetings",
        tags: ["greetings","vocabulary","business"],
        intro: "Learn essential vocabulary for professional settings, focusing on introductions and meeting etiquette.",
        targetXP: 60,
        isPremium: true,       // Mark as premium
        packId: 'business',    // Assign to a pack
        phrases: [
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'Good morning, Mr. Garcia.'", answer: "Buenos días, Señor García", hint: "Formal greeting" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'la reunión' mean?", options: ["The report", "The meeting", "The office", "The contract"], answer: "The meeting" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'Nice to meet you.' -> (FILL IN THE BLANK).", answer: "Mucho gusto", hint: "Common formal introduction" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'Good afternoon, Mrs. López.'", answer: "Buenas tardes, Señora López", hint: "Formal greeting" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'I would like to introduce my colleague.' -> Quisiera (FILL IN THE BLANK) a mi colega.", answer: "presentar", hint: "Verb: to introduce" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'The meeting is at ten.' -> La reunión es a las (FILL IN THE BLANK).", answer: "diez", hint: "Number 10" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'el contrato' mean?", options: ["The contract","The meeting","The boss","The schedule"], answer: "The contract" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'el jefe' mean?", options: ["The client","The boss","The report","The desk"], answer: "The boss" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'la empresa' mean?", options: ["The company","The email","The office","The salary"], answer: "The company" },
            { type: 'MULTIPLE_CHOICE', prompt: "Which is the formal 'you'?", options: ["tú","usted","vos","yo"], answer: "usted" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'el cliente' mean?", options: ["The customer","The coworker","The manager","The invoice"], answer: "The customer" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'Please sit down.' -> Por favor, (FILL IN THE BLANK) (Usted).", answer: "siéntese", hint: "Formal command of sentarse" },
        ]
    },
    "MEDICAL_SPANISH_1": {
        title: "Premium: Medical Spanish - Basic Anatomy",
        tags: ["vocabulary","medical"],
        intro: "Vocabulary for common body parts and describing basic symptoms.",
        targetXP: 60,
        isPremium: true,       // Mark as premium
        packId: 'medical',     // Assign to a different pack
        phrases: [
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'My head hurts.'", answer: "Me duele la cabeza", hint: "Use 'doler'" },
             { type: 'MULTIPLE_CHOICE', prompt: "What is 'el estómago'?", options: ["The heart", "The stomach", "The arm", "The leg"], answer: "The stomach" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'I have a headache.' -> Tengo dolor de (FILL IN THE BLANK).", answer: "cabeza", hint: "Body part: head" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'My stomach hurts.' -> Me duele el (FILL IN THE BLANK).", answer: "estómago", hint: "Body part: stomach" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'I need a doctor.' -> Necesito un (FILL IN THE BLANK).", answer: "médico", hint: "Doctor (or 'doctor')" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'I have a fever.' -> Tengo (FILL IN THE BLANK).", answer: "fiebre", hint: "Raised temperature" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'la garganta' mean?", options: ["The throat","The knee","The arm","The back"], answer: "The throat" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'la medicina' mean?", options: ["The medicine","The hospital","The nurse","The pain"], answer: "The medicine" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'la enfermera' mean?", options: ["The nurse","The patient","The doctor","The pharmacist"], answer: "The nurse" },
            { type: 'MULTIPLE_CHOICE', prompt: "What does 'la receta' mean?", options: ["The prescription","The appointment","The surgery","The symptom"], answer: "The prescription" },
            { type: 'MULTIPLE_CHOICE', prompt: "How do you say 'emergency'?", options: ["emergencia","enfermedad","examen","espera"], answer: "emergencia" },
            { type: 'FILL_IN_BLANK', sentence: "Translate: 'Where does it hurt?' -> ¿Dónde le (FILL IN THE BLANK)?", answer: "duele", hint: "Verb: doler" },
        ]
    },
    "GREET_SMALLTALK": {
     "title": "Greetings: Small Talk Starter",
     "tags": [
      "greetings",
      "small-talk",
      "introductions",
      "beginner"
     ],
     "level": "beginner",
     "intro": "Practice asking how people are, giving your name and saying where you are from.",
     "targetXP": 40,
     "phrases": [
      {
       "type": "FILL_IN_BLANK",
       "sentence": "How are you? (casual) -> ¿(FILL IN THE BLANK) estás?",
       "answer": "Cómo",
       "hint": "Accent on ó"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "What's up? -> ¿Qué (FILL IN THE BLANK)?",
       "answer": "tal",
       "hint": "Three letters"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I'm fine -> (FILL IN THE BLANK), gracias.",
       "answer": "Bien",
       "hint": "Short word"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Very good -> Muy (FILL IN THE BLANK)",
       "answer": "bien",
       "hint": "Fine"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Bad -> (FILL IN THE BLANK)",
       "answer": "Mal",
       "hint": "Opposite of bien"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "So-so -> Más o (FILL IN THE BLANK)",
       "answer": "menos",
       "hint": "Literally \"more or less\""
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "And you? (casual) -> ¿Y (FILL IN THE BLANK)?",
       "answer": "tú",
       "hint": "Accent on ú"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "How are you? (polite) -> ¿Cómo (FILL IN THE BLANK) usted?",
       "answer": "está",
       "hint": "Accent on á"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "My name is Ana -> Me (FILL IN THE BLANK) Ana.",
       "answer": "llamo",
       "hint": "Verb llamarse, yo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "What's your name? (casual) -> ¿Cómo te (FILL IN THE BLANK)?",
       "answer": "llamas",
       "hint": "Verb llamarse, tú"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am Luis -> (FILL IN THE BLANK) Luis.",
       "answer": "Soy",
       "hint": "Verb ser, yo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Nice to meet you -> (FILL IN THE BLANK) gusto",
       "answer": "Mucho",
       "hint": "Means \"much\""
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Likewise -> (FILL IN THE BLANK).",
       "answer": "Igualmente",
       "hint": "One word"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Delighted (said by a man) -> (FILL IN THE BLANK).",
       "answer": "Encantado",
       "hint": "Ends in -o"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "What's your name? (polite) -> ¿Cómo se (FILL IN THE BLANK) usted?",
       "answer": "llama",
       "hint": "Verb llamarse, usted"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "This is my friend -> Este (FILL IN THE BLANK) mi amigo.",
       "answer": "es",
       "hint": "Verb ser, él"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Where are you from? -> ¿De (FILL IN THE BLANK) eres?",
       "answer": "dónde",
       "hint": "Accent on ó"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am from Mexico -> Soy de (FILL IN THE BLANK).",
       "answer": "México",
       "hint": "Accent on é"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am Spanish (a man) -> Soy (FILL IN THE BLANK).",
       "answer": "español",
       "hint": "Contains ñ"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "She is Mexican -> Ella es (FILL IN THE BLANK).",
       "answer": "mexicana",
       "hint": "Ends in -a"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I live in Colorado -> (FILL IN THE BLANK) en Colorado.",
       "answer": "Vivo",
       "hint": "Verb vivir, yo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I speak English -> (FILL IN THE BLANK) inglés.",
       "answer": "Hablo",
       "hint": "Verb hablar, yo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Do you speak Spanish? -> ¿(FILL IN THE BLANK) español?",
       "answer": "Hablas",
       "hint": "Verb hablar, tú"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "A little -> Un (FILL IN THE BLANK)",
       "answer": "poco",
       "hint": "Four letters"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does '¿Qué tal?' mean?",
       "options": [
        "What's up?",
        "What time is it?",
        "What's your name?",
        "Where are you from?"
       ],
       "answer": "What's up?"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which is the polite way to ask someone's name?",
       "options": [
        "¿Cómo se llama usted?",
        "¿Cómo te llamas?",
        "¿Qué tal?",
        "¿De dónde eres?"
       ],
       "answer": "¿Cómo se llama usted?"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which is a good answer to '¿Cómo estás?'",
       "options": [
        "Bien, gracias.",
        "Mucho gusto.",
        "Me llamo Ana.",
        "Hasta luego."
       ],
       "answer": "Bien, gracias."
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Nice to meet you -> (FILL IN THE BLANK) gusto.",
       "answer": "Mucho",
       "hint": "Much"
      }
     ]
    },
    "GREET_SAFARI": {
     "title": "Greetings: Safari, Farewells & Fun",
     "tags": [
      "greetings",
      "animals",
      "farewells",
      "pronunciation",
      "beginner"
     ],
     "level": "beginner",
     "intro": "Wildebeests, logs and crocodiles plus goodbyes and the mighty ñ.",
     "targetXP": 40,
     "phrases": [
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Hello! -> (FILL IN THE BLANK)!",
       "answer": "Hola",
       "hint": "Silent h"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Goodbye! -> (FILL IN THE BLANK)!",
       "answer": "Adiós",
       "hint": "Has an accent on the ó"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "See you tomorrow! -> Hasta (FILL IN THE BLANK)!",
       "answer": "mañana",
       "hint": "Contains ñ"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Thank you -> (FILL IN THE BLANK)",
       "answer": "Gracias",
       "hint": "Starts with gr"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Please -> Por (FILL IN THE BLANK)",
       "answer": "favor",
       "hint": "Sounds like \"favor\""
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "You're welcome -> De (FILL IN THE BLANK)",
       "answer": "nada",
       "hint": "Literally \"of nothing\""
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "See you later -> Hasta (FILL IN THE BLANK)!",
       "answer": "luego",
       "hint": "Means \"later\""
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Casual \"bye\" -> (FILL IN THE BLANK)!",
       "answer": "Chao",
       "hint": "Starts with ch"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "See you soon -> Hasta (FILL IN THE BLANK)",
       "answer": "pronto",
       "hint": "Means \"soon\""
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Take care! -> ¡(FILL IN THE BLANK)!",
       "answer": "Cuídate",
       "hint": "Accent on í"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Have a nice day -> ¡Que (FILL IN THE BLANK) un buen día!",
       "answer": "tengas",
       "hint": "Verb tener, tú, subjunctive"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Good luck -> ¡Buena (FILL IN THE BLANK)!",
       "answer": "suerte",
       "hint": "Starts with su"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Welcome (to a man) -> ¡(FILL IN THE BLANK)!",
       "answer": "Bienvenido",
       "hint": "Ends in -o"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Happy birthday -> ¡Feliz (FILL IN THE BLANK)!",
       "answer": "cumpleaños",
       "hint": "Contains ñ"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Until next time -> Hasta la (FILL IN THE BLANK)",
       "answer": "próxima",
       "hint": "Accent on ó"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Congratulations -> ¡(FILL IN THE BLANK)!",
       "answer": "Felicidades",
       "hint": "Starts with Feli"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The wildebeest -> el (FILL IN THE BLANK)",
       "answer": "ñu",
       "hint": "Starts with ñ"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The log -> el (FILL IN THE BLANK)",
       "answer": "tronco",
       "hint": "Also Spanish slang for \"dude\""
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The crocodile -> el (FILL IN THE BLANK)",
       "answer": "cocodrilo",
       "hint": "Four syllables"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Hello, wildebeest! -> ¡Hola, (FILL IN THE BLANK)!",
       "answer": "ñu",
       "hint": "Starts with ñ"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "What's up, dude? -> ¿Qué tal, (FILL IN THE BLANK)?",
       "answer": "tronco",
       "hint": "Slang"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "See you later, alligator -> Hasta luego, (FILL IN THE BLANK).",
       "answer": "cocodrilo",
       "hint": "Reptile"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The crocodile is in the river -> El cocodrilo (FILL IN THE BLANK) en el río.",
       "answer": "está",
       "hint": "Location, estar"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Good morning, crocodile -> Buenos (FILL IN THE BLANK), cocodrilo.",
       "answer": "días",
       "hint": "Accent on í"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "How does the letter ñ sound?",
       "options": [
        "Like 'ny' in canyon",
        "Like 'n' in net",
        "Like 'h' in hat",
        "Like 'ng' in sing"
       ],
       "answer": "Like 'ny' in canyon"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What is 'el ñu'?",
       "options": [
        "The wildebeest",
        "The log",
        "The crocodile",
        "The river"
       ],
       "answer": "The wildebeest"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "'Hasta luego, cocodrilo' is a Spanish version of...",
       "options": [
        "See you later, alligator",
        "Good morning, crocodile",
        "Welcome to the jungle",
        "Thank you, friend"
       ],
       "answer": "See you later, alligator"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Good luck -> ¡Buena (FILL IN THE BLANK)!",
       "answer": "suerte",
       "hint": "Starts with su"
      }
     ]
    },
    "IOP_EASY": {
     "title": "Indirect Objects: Easy Practice",
     "tags": [
      "indirect-object",
      "pronouns",
      "iop",
      "easy"
     ],
     "level": "beginner",
     "intro": "Practice me, te, le, nos, les in short sentences.",
     "targetXP": 40,
     "phrases": [
      {
       "type": "FILL_IN_BLANK",
       "sentence": "He gives me a gift -> Él (FILL IN THE BLANK) da un regalo.",
       "answer": "me",
       "hint": "to me"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I give you the book -> Yo (FILL IN THE BLANK) doy el libro.",
       "answer": "te",
       "hint": "to you (tú)"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "She writes to him -> Ella (FILL IN THE BLANK) escribe.",
       "answer": "le",
       "hint": "to him"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "They tell us the news -> Ellos (FILL IN THE BLANK) dicen las noticias.",
       "answer": "nos",
       "hint": "to us"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I send them a letter -> Yo (FILL IN THE BLANK) mando una carta.",
       "answer": "les",
       "hint": "to them"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "She buys you a coffee -> Ella (FILL IN THE BLANK) compra un café.",
       "answer": "te",
       "hint": "for you (tú)"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which pronoun means 'to us'?",
       "options": [
        "nos",
        "les",
        "te",
        "me"
       ],
       "answer": "nos"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which pronoun means 'to them'?",
       "options": [
        "les",
        "le",
        "nos",
        "se"
       ],
       "answer": "les"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I give you a pen -> Yo (FILL IN THE BLANK) doy una pluma.",
       "answer": "te",
       "hint": "to you"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "He tells me a joke -> Él (FILL IN THE BLANK) cuenta un chiste.",
       "answer": "me",
       "hint": "to me"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "We write to her -> Nosotros (FILL IN THE BLANK) escribimos.",
       "answer": "le",
       "hint": "to her"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Where does the IOP go in 'Ella me da un libro'?",
       "options": [
        "Before the conjugated verb",
        "After the noun",
        "At the end of the sentence",
        "It is optional"
       ],
       "answer": "Before the conjugated verb"
      }
     ]
    },
    "IOP_HARD": {
     "title": "Indirect Objects: Hard Practice",
     "tags": [
      "indirect-object",
      "pronouns",
      "iop",
      "hard",
      "commands"
     ],
     "level": "advanced",
     "intro": "Attach pronouns, use redundancy and handle gustar-type verbs.",
     "targetXP": 40,
     "phrases": [
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I want to give her a gift -> Quiero (FILL IN THE BLANK) un regalo. (dar + pronoun)",
       "answer": "darle",
       "hint": "Attach le to the infinitive"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I tell you the truth -> Yo te (FILL IN THE BLANK) la verdad. (decir)",
       "answer": "digo",
       "hint": "Irregular yo form"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I write Juan a letter -> A Juan (FILL IN THE BLANK) escribo una carta.",
       "answer": "le",
       "hint": "Redundant pronoun"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I send my parents flowers -> A mis padres (FILL IN THE BLANK) mando flores.",
       "answer": "les",
       "hint": "Plural object"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I like coffee -> A mí (FILL IN THE BLANK) gusta el café.",
       "answer": "me",
       "hint": "Gustar uses IOPs"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Give me the book, please! -> (FILL IN THE BLANK) el libro, por favor.",
       "answer": "Dame",
       "hint": "Command + me, accent needed"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "She is explaining the lesson to us -> Ella (FILL IN THE BLANK) está explicando la lección.",
       "answer": "nos",
       "hint": "to us"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Does your head hurt? (casual) -> ¿(FILL IN THE BLANK) duele la cabeza?",
       "answer": "Te",
       "hint": "to you (tú)"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "'A Juan le escribo' repeats the object. This is...",
       "options": [
        "Normal Spanish",
        "A mistake",
        "Only formal",
        "Only in Spain"
       ],
       "answer": "Normal Spanish"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Bring me water! -> ¡(FILL IN THE BLANK) agua!",
       "answer": "Tráeme",
       "hint": "Command of traer + me, accent"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I want to tell them the news -> Quiero (FILL IN THE BLANK) las noticias.",
       "answer": "decirles",
       "hint": "Infinitive + les"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "They love to dance (to them) -> A ellos (FILL IN THE BLANK) encanta bailar.",
       "answer": "les",
       "hint": "Gustar-type verb"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which verb always works with IOPs?",
       "options": [
        "gustar",
        "comer",
        "correr",
        "vivir"
       ],
       "answer": "gustar"
      }
     ]
    },
    "DOP_EASY": {
     "title": "Direct Objects: Easy Practice",
     "tags": [
      "direct-object",
      "pronouns",
      "dop",
      "easy"
     ],
     "level": "beginner",
     "intro": "Replace nouns with lo, la, los, las in short sentences.",
     "targetXP": 40,
     "phrases": [
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I see the dog (it) -> Yo (FILL IN THE BLANK) veo.",
       "answer": "lo",
       "hint": "masculine singular"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I eat the apple (it) -> Yo (FILL IN THE BLANK) como.",
       "answer": "la",
       "hint": "feminine singular"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I buy the shoes (them) -> Yo (FILL IN THE BLANK) compro.",
       "answer": "los",
       "hint": "masculine plural"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I open the doors (them) -> Yo (FILL IN THE BLANK) abro.",
       "answer": "las",
       "hint": "feminine plural"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "He loves me -> Él (FILL IN THE BLANK) quiere.",
       "answer": "me",
       "hint": "me"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I see you (tú) -> Yo (FILL IN THE BLANK) veo.",
       "answer": "te",
       "hint": "you"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which pronoun replaces 'la casa'?",
       "options": [
        "la",
        "lo",
        "las",
        "los"
       ],
       "answer": "la"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which pronoun replaces 'los libros'?",
       "options": [
        "los",
        "las",
        "lo",
        "la"
       ],
       "answer": "los"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I drink the juice (it) -> Yo (FILL IN THE BLANK) bebo.",
       "answer": "lo",
       "hint": "el jugo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "She calls me -> Ella (FILL IN THE BLANK) llama.",
       "answer": "me",
       "hint": "me"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "We watch the movies (them) -> Nosotros (FILL IN THE BLANK) miramos.",
       "answer": "las",
       "hint": "las películas"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Where does the DOP go in 'Lo veo'?",
       "options": [
        "Before the verb",
        "After the verb",
        "At the end",
        "Nowhere"
       ],
       "answer": "Before the verb"
      }
     ]
    },
    "DOP_HARD": {
     "title": "Direct Objects: Hard Practice",
     "tags": [
      "direct-object",
      "pronouns",
      "dop",
      "hard",
      "commands"
     ],
     "level": "advanced",
     "intro": "Attach DOPs to infinitives and commands and keep the accents right.",
     "targetXP": 40,
     "phrases": [
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I want to buy it (el pan) -> Quiero (FILL IN THE BLANK).",
       "answer": "comprarlo",
       "hint": "Attach lo to the infinitive"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am reading it (el libro) -> (FILL IN THE BLANK) estoy leyendo.",
       "answer": "Lo",
       "hint": "Before the conjugated verb"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Eat it! (el pastel, tú command) -> ¡(FILL IN THE BLANK)!",
       "answer": "Cómelo",
       "hint": "Attach lo, keep the stress with an accent"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Don't eat it! (tú) -> No (FILL IN THE BLANK) comas.",
       "answer": "lo",
       "hint": "Before a negative command"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Did you do the homework? Yes, I did it -> Sí, (FILL IN THE BLANK) hice.",
       "answer": "la",
       "hint": "la tarea"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Who has the keys? I have them -> (FILL IN THE BLANK) tengo yo.",
       "answer": "Las",
       "hint": "las llaves"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I see María -> (FILL IN THE BLANK) veo a María.",
       "answer": "La",
       "hint": "Replace the person"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "They help us -> Ellos (FILL IN THE BLANK) ayudan.",
       "answer": "nos",
       "hint": "us"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am going to eat it (la pizza) -> Voy a (FILL IN THE BLANK).",
       "answer": "comerla",
       "hint": "Attach la"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Open it! (la puerta, tú) -> ¡(FILL IN THE BLANK)!",
       "answer": "Ábrela",
       "hint": "Command + la, accent"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I can't find them (las llaves) -> No (FILL IN THE BLANK) encuentro.",
       "answer": "las",
       "hint": "Before the verb"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Why do we write 'cómelo' with an accent?",
       "options": [
        "To keep the stress on the same syllable",
        "It is optional",
        "Because lo is stressed",
        "Because it is a question"
       ],
       "answer": "To keep the stress on the same syllable"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which replaces 'a mis padres' as a DOP (I see them)?",
       "options": [
        "los",
        "les",
        "lo",
        "las"
       ],
       "answer": "los"
      }
     ]
    },
    "REFLEX_EASY": {
     "title": "Reflexive Verbs: Easy Practice",
     "tags": [
      "reflexive",
      "pronouns",
      "daily-routine",
      "easy"
     ],
     "level": "beginner",
     "intro": "Daily routine verbs with me, te, se, nos.",
     "targetXP": 40,
     "phrases": [
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I wake up -> Yo (FILL IN THE BLANK) despierto.",
       "answer": "me",
       "hint": "yo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "You wash yourself -> Tú (FILL IN THE BLANK) lavas.",
       "answer": "te",
       "hint": "tú"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "He gets up -> Él (FILL IN THE BLANK) levanta.",
       "answer": "se",
       "hint": "él"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "We shower -> Nosotros (FILL IN THE BLANK) duchamos.",
       "answer": "nos",
       "hint": "nosotros"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "They get dressed -> Ellos (FILL IN THE BLANK) visten.",
       "answer": "se",
       "hint": "ellos"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Levantarse ends in -(FILL IN THE BLANK) in the dictionary.",
       "answer": "se",
       "hint": "Two letters"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which means 'to wash oneself'?",
       "options": [
        "lavarse",
        "lavar",
        "lavado",
        "lavando"
       ],
       "answer": "lavarse"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I take a shower -> Yo (FILL IN THE BLANK) ducho.",
       "answer": "me",
       "hint": "yo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "She brushes her teeth -> Ella (FILL IN THE BLANK) cepilla los dientes.",
       "answer": "se",
       "hint": "ella"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "You (tú) go to bed -> Tú (FILL IN THE BLANK) acuestas.",
       "answer": "te",
       "hint": "tú"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "'Nos levantamos' means...",
       "options": [
        "We get up",
        "We lift it",
        "They get up",
        "I get up"
       ],
       "answer": "We get up"
      }
     ]
    },
    "REFLEX_HARD": {
     "title": "Reflexive Verbs: Hard Practice",
     "tags": [
      "reflexive",
      "pronouns",
      "hard",
      "commands",
      "daily-routine"
     ],
     "level": "advanced",
     "intro": "Reflexives with infinitives, commands, gerunds and stem changes.",
     "targetXP": 40,
     "phrases": [
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I want to get up early -> Quiero (FILL IN THE BLANK) temprano.",
       "answer": "levantarme",
       "hint": "Attach me to the infinitive"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am washing my hands -> Estoy (FILL IN THE BLANK) las manos.",
       "answer": "lavándome",
       "hint": "Gerund + me, accent"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Yesterday I fell asleep early -> Ayer (FILL IN THE BLANK) dormí temprano.",
       "answer": "me",
       "hint": "Preterite with reflexive"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "We go to bed at seven -> Nos (FILL IN THE BLANK) a las siete.",
       "answer": "acostamos",
       "hint": "acostarse, nosotros"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "He brushes his hair -> Él se (FILL IN THE BLANK) el pelo.",
       "answer": "cepilla",
       "hint": "cepillarse, él"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Get up! (tú command) -> ¡(FILL IN THE BLANK)!",
       "answer": "Levántate",
       "hint": "Attach te, add accent"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Don't get up! (tú) -> No (FILL IN THE BLANK) levantes.",
       "answer": "te",
       "hint": "Before negative command"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "My friends have fun a lot -> Mis amigos se (FILL IN THE BLANK) mucho.",
       "answer": "divierten",
       "hint": "divertirse, e→ie"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I'm going to take a bath -> Voy a (FILL IN THE BLANK).",
       "answer": "bañarme",
       "hint": "Attach me"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Sit down! (tú) -> ¡(FILL IN THE BLANK)!",
       "answer": "Siéntate",
       "hint": "sentarse, e→ie, accent"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Don't worry! (tú, preocuparse) -> ¡No (FILL IN THE BLANK) preocupes!",
       "answer": "te",
       "hint": "Before negative command"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which is correct?",
       "options": [
        "Me estoy duchando",
        "Estoy duchando",
        "Me estoy duchar",
        "Estoy me duchando"
       ],
       "answer": "Me estoy duchando"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "'Acostarse' in 'yo' form?",
       "options": [
        "me acuesto",
        "me acosto",
        "acuesto",
        "me acostar"
       ],
       "answer": "me acuesto"
      }
     ]
    },
    "PRONOUN_MIX_1": {
     "title": "Pronouns Mix: Full Sentences I",
     "tags": [
      "pronouns",
      "indirect-object",
      "direct-object",
      "reflexive",
      "sentences"
     ],
     "level": "intermediate",
     "intro": "Short sentences mixing IOPs, DOPs and reflexives.",
     "targetXP": 40,
     "phrases": [
      {
       "type": "FILL_IN_BLANK",
       "sentence": "She gives me the book -> Ella (FILL IN THE BLANK) da el libro.",
       "answer": "me",
       "hint": "IOP"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I see him (Pedro) at school -> Yo (FILL IN THE BLANK) veo en la escuela.",
       "answer": "lo",
       "hint": "DOP"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "We wash our hands -> Nosotros (FILL IN THE BLANK) lavamos las manos.",
       "answer": "nos",
       "hint": "Reflexive"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I write a letter to her -> Yo (FILL IN THE BLANK) escribo una carta.",
       "answer": "le",
       "hint": "IOP"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "They wake up early -> Ellos (FILL IN THE BLANK) despiertan temprano.",
       "answer": "se",
       "hint": "Reflexive"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I buy the cake for you (tú) -> Yo (FILL IN THE BLANK) compro el pastel.",
       "answer": "te",
       "hint": "IOP"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I see the dog (it) -> Yo (FILL IN THE BLANK) veo.",
       "answer": "lo",
       "hint": "masculine singular"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I eat the apple (it) -> Yo (FILL IN THE BLANK) como.",
       "answer": "la",
       "hint": "feminine singular"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I buy the shoes (them) -> Yo (FILL IN THE BLANK) compro.",
       "answer": "los",
       "hint": "masculine plural"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I open the doors (them) -> Yo (FILL IN THE BLANK) abro.",
       "answer": "las",
       "hint": "feminine plural"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "He loves me -> Él (FILL IN THE BLANK) quiere.",
       "answer": "me",
       "hint": "me"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I see you (tú) -> Yo (FILL IN THE BLANK) veo.",
       "answer": "te",
       "hint": "you"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "In 'Ella se lava', 'se' is...",
       "options": [
        "Reflexive",
        "Indirect object",
        "Direct object",
        "Subject"
       ],
       "answer": "Reflexive"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "In 'Le doy un libro', 'le' is...",
       "options": [
        "Indirect object",
        "Direct object",
        "Reflexive",
        "Subject"
       ],
       "answer": "Indirect object"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "In 'Lo veo', 'lo' is...",
       "options": [
        "Direct object",
        "Indirect object",
        "Reflexive",
        "Subject"
       ],
       "answer": "Direct object"
      }
     ]
    },
    "PRONOUN_MIX_2": {
     "title": "Pronouns Mix: Full Sentences II",
     "tags": [
      "pronouns",
      "double-pronouns",
      "sentences",
      "hard"
     ],
     "level": "advanced",
     "intro": "Double pronouns, commands and real-life sentences.",
     "targetXP": 40,
     "phrases": [
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I give it to you (the gift) -> Yo (FILL IN THE BLANK) doy.",
       "answer": "te lo",
       "hint": "IOP then DOP"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "He gives it to her (the gift) -> Él (FILL IN THE BLANK) da.",
       "answer": "se lo",
       "hint": "le + lo becomes se lo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "She tells it to us (the story) -> Ella (FILL IN THE BLANK) cuenta.",
       "answer": "nos la",
       "hint": "nos + la"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "We send them to you (the photos) -> Nosotros (FILL IN THE BLANK) mandamos.",
       "answer": "te las",
       "hint": "te + las"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I brush my teeth -> Me (FILL IN THE BLANK) los dientes.",
       "answer": "cepillo",
       "hint": "cepillarse, yo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I wash my hands -> Me lavo (FILL IN THE BLANK) manos.",
       "answer": "las",
       "hint": "Article, not \"my\""
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Can you give it to me? (el libro) -> ¿Puedes (FILL IN THE BLANK)?",
       "answer": "dármelo",
       "hint": "Infinitive + me + lo, accent"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Yesterday my mother bought me a gift -> Ayer mi madre me (FILL IN THE BLANK) un regalo.",
       "answer": "compró",
       "hint": "Preterite of comprar"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The gift? I already gave it to them -> ¿El regalo? Ya (FILL IN THE BLANK) di.",
       "answer": "se lo",
       "hint": "les + lo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Tomorrow I'm going to get up early -> Mañana (FILL IN THE BLANK) voy a levantar temprano.",
       "answer": "me",
       "hint": "Reflexive before conjugated verb"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The jacket? I want to put it on -> ¿La chaqueta? Quiero (FILL IN THE BLANK).",
       "answer": "ponérmela",
       "hint": "Infinitive + me + la, accent"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I told it to you (the secret) -> Yo (FILL IN THE BLANK) dije.",
       "answer": "te lo",
       "hint": "IOP then DOP"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The kids put on their shoes -> Los niños (FILL IN THE BLANK) los zapatos.",
       "answer": "se ponen",
       "hint": "ponerse, ellos"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Tell it to me! (the truth) -> ¡(FILL IN THE BLANK)!",
       "answer": "Dímelo",
       "hint": "Command + me + lo, accent"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Don't tell it to anyone! (tú) -> No (FILL IN THE BLANK) digas a nadie.",
       "answer": "se lo",
       "hint": "Negative command, se lo"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "'Le lo' always changes to...",
       "options": [
        "se lo",
        "le lo",
        "lo le",
        "les lo"
       ],
       "answer": "se lo"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "In double pronouns the order is...",
       "options": [
        "Indirect then direct",
        "Direct then indirect",
        "Reflexive last",
        "Any order"
       ],
       "answer": "Indirect then direct"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Give it to me! (el regalo) -> ¡(FILL IN THE BLANK)!",
       "answer": "Dámelo",
       "hint": "Command + me + lo"
      }
     ]
    },
    "HORSE_LAME": {
     "title": "Story: The Horse Goes Lame (El caballo cojo)",
     "tags": [
      "story",
      "horse",
      "animals",
      "preterite",
      "imperfect",
      "vet"
     ],
     "level": "intermediate",
     "intro": "Mateo's horse Trueno suddenly starts limping on a morning ride. Follow the story with vocabulary, past tenses, listening and the vet's future plan.",
     "targetXP": 60,
     "phrases": [
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'el caballo' mean?",
       "options": [
        "The horse",
        "The cow",
        "The dog",
        "The goat"
       ],
       "answer": "The horse"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'la pata' mean?",
       "options": [
        "The leg of an animal",
        "The saddle",
        "The tail",
        "The barn"
       ],
       "answer": "The leg of an animal"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'la herradura' mean?",
       "options": [
        "The horseshoe",
        "The reins",
        "The hay",
        "The stable"
       ],
       "answer": "The horseshoe"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'el veterinario' mean?",
       "options": [
        "The veterinarian",
        "The farmer",
        "The rider",
        "The teacher"
       ],
       "answer": "The veterinarian"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'cojear' mean?",
       "options": [
        "To limp",
        "To gallop",
        "To jump",
        "To sleep"
       ],
       "answer": "To limp"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "'Un caballo cojo' means...",
       "options": [
        "A lame horse",
        "A fast horse",
        "A white horse",
        "A hungry horse"
       ],
       "answer": "A lame horse"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Trueno is a beautiful horse -> Trueno (FILL IN THE BLANK) un caballo hermoso. (ser)",
       "answer": "es",
       "hint": "Ser, él"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Mateo (montar - Imperfect) a Trueno todas las mañanas.",
       "verb": "montar",
       "subject": "Él",
       "tense": "Imperfect"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Los dos (galopar - Imperfect) por el campo cuando salió el sol.",
       "verb": "galopar",
       "subject": "Ellos",
       "tense": "Imperfect"
      },
      {
       "type": "CONJUGATE",
       "sentence": "De repente, Trueno (cojear - Preterite) de la pata derecha.",
       "verb": "cojear",
       "subject": "Él",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "El caballo (relinchar - Preterite) de dolor.",
       "verb": "relinchar",
       "subject": "Él",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Mateo (mirar - Preterite) la pata con cuidado.",
       "verb": "mirar",
       "subject": "Él",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (encontrar - Preterite) una piedra en la herradura.",
       "verb": "encontrar",
       "subject": "Yo",
       "tense": "Preterite"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The horse's leg hurts -> Al caballo le (FILL IN THE BLANK) la pata. (doler)",
       "answer": "duele",
       "hint": "Doler, él"
      },
      {
       "type": "CONJUGATE",
       "sentence": "A Trueno le (doler - Imperfect) mucho la pata.",
       "verb": "doler",
       "subject": "Él",
       "tense": "Imperfect"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Nosotros (caminar - Preterite) despacio hasta el establo.",
       "verb": "caminar",
       "subject": "Nosotros",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Mi padre (llamar - Preterite) al veterinario.",
       "verb": "llamar",
       "subject": "Él",
       "tense": "Preterite"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The vet arrived -> El veterinario (FILL IN THE BLANK). (llegar, preterite)",
       "answer": "llegó",
       "hint": "Llegar, él"
      },
      {
       "type": "LISTENING",
       "prompt": "What was stuck in the horseshoe? (Respond in English, one word.)",
       "textToSpeak": "Trueno cojeó de repente durante el paseo. Mateo bajó del caballo y miró la pata. Había una piedra en la herradura. Llamó al veterinario.",
       "answer": "stone",
       "hint": "One word: a small rock."
      },
      {
       "type": "LISTENING",
       "prompt": "Who did Mateo call? (Respond in English, one word.)",
       "textToSpeak": "Trueno cojeó de repente durante el paseo. Mateo bajó del caballo y miró la pata. Había una piedra en la herradura. Llamó al veterinario.",
       "answer": "veterinarian",
       "hint": "One word: the animal doctor."
      },
      {
       "type": "CONJUGATE",
       "sentence": "El veterinario (curar - Future) la pata pronto.",
       "verb": "curar",
       "subject": "Él",
       "tense": "Future"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Tú (cuidar - Future) a Trueno cada día.",
       "verb": "cuidar",
       "subject": "Tú",
       "tense": "Future"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ojalá que Trueno (descansar - PresentSubjunctive) pronto.",
       "verb": "descansar",
       "subject": "Él",
       "tense": "PresentSubjunctive"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Si Trueno (descansar - ImperfectSubjunctive), se curaría rápido.",
       "verb": "descansar",
       "subject": "Él",
       "tense": "ImperfectSubjunctive"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The horse needs rest -> El caballo necesita (FILL IN THE BLANK). (noun)",
       "answer": "descanso",
       "hint": "Noun from descansar"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Don't ride the horse today! (tú) -> ¡No (FILL IN THE BLANK) al caballo hoy! (montar)",
       "answer": "montes",
       "hint": "Negative tú command"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Why did Mateo stop the ride?",
       "options": [
        "His horse started to limp",
        "It started to rain",
        "He was hungry",
        "The horse ran away"
       ],
       "answer": "His horse started to limp"
      }
     ]
    },
    "BEACH_DATE": {
     "title": "Story: A Beach Date (Una cita en la playa)",
     "tags": [
      "story",
      "beach",
      "dates",
      "vocabulary",
      "romance"
     ],
     "level": "intermediate",
     "intro": "Plan, enjoy and remember a perfect beach date with Lucía: invitations, weather, swimming, sunset and dinner.",
     "targetXP": 60,
     "phrases": [
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'la playa' mean?",
       "options": [
        "The beach",
        "The pool",
        "The park",
        "The street"
       ],
       "answer": "The beach"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'la arena' mean?",
       "options": [
        "The sand",
        "The sea",
        "The wave",
        "The sun"
       ],
       "answer": "The sand"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'las olas' mean?",
       "options": [
        "The waves",
        "The shells",
        "The boats",
        "The clouds"
       ],
       "answer": "The waves"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'el traje de baño' mean?",
       "options": [
        "The swimsuit",
        "The towel",
        "The sunglasses",
        "The hat"
       ],
       "answer": "The swimsuit"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'la cita' mean here?",
       "options": [
        "The date",
        "The bill",
        "The beach",
        "The song"
       ],
       "answer": "The date"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Do you want to go to the beach with me? (tú) -> ¿(FILL IN THE BLANK) ir a la playa conmigo?",
       "answer": "Quieres",
       "hint": "Querer, tú"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (invitar - Preterite) a Lucía a la playa.",
       "verb": "invitar",
       "subject": "Yo",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ella (decir - Preterite) que sí.",
       "verb": "decir",
       "subject": "Ella",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Nosotros (llegar - Preterite) a las cuatro.",
       "verb": "llegar",
       "subject": "Nosotros",
       "tense": "Preterite"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "It is very hot -> Hace mucho (FILL IN THE BLANK).",
       "answer": "calor",
       "hint": "Weather"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am thirsty -> Tengo (FILL IN THE BLANK).",
       "answer": "sed",
       "hint": "Tener expression"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ella (nadar - Imperfect) en el mar mientras yo la miraba.",
       "verb": "nadar",
       "subject": "Ella",
       "tense": "Imperfect"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (tomar - Present) el sol en la arena.",
       "verb": "tomar",
       "subject": "Yo",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Nosotros (caminar - Present) por la orilla.",
       "verb": "caminar",
       "subject": "Nosotros",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Tú (bucear - Future) conmigo mañana.",
       "verb": "bucear",
       "subject": "Tú",
       "tense": "Future"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ellos (bailar - Present) cerca de la hoguera.",
       "verb": "bailar",
       "subject": "Ellos",
       "tense": "Present"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Could you pass the sunscreen? (tú) -> ¿Me pasas el (FILL IN THE BLANK)?",
       "answer": "bronceador",
       "hint": "Also protector solar"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ella (reír - Preterite) mucho con mi chiste.",
       "verb": "reír",
       "subject": "Ella",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (abrazar - Preterite) a Lucía cuando hizo frío.",
       "verb": "abrazar",
       "subject": "Yo",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (besar - Conditional) a Lucía si ella quisiera.",
       "verb": "besar",
       "subject": "Yo",
       "tense": "Conditional"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Let's watch the sunset! -> ¡(FILL IN THE BLANK) a mirar la puesta del sol!",
       "answer": "Vamos",
       "hint": "Ir, nosotros"
      },
      {
       "type": "LISTENING",
       "prompt": "What day is it? (Respond in English, one word.)",
       "textToSpeak": "Hoy es sábado. Hace mucho sol y vamos a la playa. Voy a nadar y Lucía va a tomar el sol. Por la noche vamos a cenar juntos.",
       "answer": "Saturday",
       "hint": "A day of the weekend."
      },
      {
       "type": "LISTENING",
       "prompt": "What will they do at night? (Respond in English, one word: a meal.)",
       "textToSpeak": "Hoy es sábado. Hace mucho sol y vamos a la playa. Voy a nadar y Lucía va a tomar el sol. Por la noche vamos a cenar juntos.",
       "answer": "dinner",
       "hint": "A meal."
      },
      {
       "type": "CONJUGATE",
       "sentence": "Nosotros (cenar - Future) frente al mar.",
       "verb": "cenar",
       "subject": "Nosotros",
       "tense": "Future"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "'¿Te gustaría...?' is used to...",
       "options": [
        "Politely invite someone",
        "Say goodbye",
        "Order food",
        "Ask the time"
       ],
       "answer": "Politely invite someone"
      }
     ]
    },
    "PROGRESSIVE_NOW": {
     "title": "Right Now! Present Progressive Practice",
     "tags": [
      "progressive",
      "gerund",
      "estar",
      "present",
      "everyday"
     ],
     "level": "intermediate",
     "intro": "Estar plus the gerund in every person, plus the past and future progressive for a bonus.",
     "targetXP": 60,
     "phrases": [
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What is the gerund of 'comer'?",
       "options": [
        "comiendo",
        "comando",
        "comido",
        "comer"
       ],
       "answer": "comiendo"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What is the gerund of 'hablar'?",
       "options": [
        "hablando",
        "habliendo",
        "hablado",
        "hablar"
       ],
       "answer": "hablando"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What is the gerund of 'ir'?",
       "options": [
        "yendo",
        "iendo",
        "ido",
        "irando"
       ],
       "answer": "yendo"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which is correct?",
       "options": [
        "Me estoy duchando",
        "Me estoy duchado",
        "Estoy me duchando",
        "Me estás duchando"
       ],
       "answer": "Me estoy duchando"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (estar - Present) estudiando español.",
       "verb": "estar",
       "subject": "Yo",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Tú (estar - Present) bailando muy bien.",
       "verb": "estar",
       "subject": "Tú",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Él (estar - Present) cocinando la cena.",
       "verb": "estar",
       "subject": "Él",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Nosotros (estar - Present) viajando por México.",
       "verb": "estar",
       "subject": "Nosotros",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ellos (estar - Present) nadando en el mar.",
       "verb": "estar",
       "subject": "Ellos",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (estar - Imperfect) durmiendo cuando sonó el teléfono.",
       "verb": "estar",
       "subject": "Yo",
       "tense": "Imperfect"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ellos (estar - Imperfect) cenando cuando llegué.",
       "verb": "estar",
       "subject": "Ellos",
       "tense": "Imperfect"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Mañana a las ocho yo (estar - Future) trabajando.",
       "verb": "estar",
       "subject": "Yo",
       "tense": "Future"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "She is cooking -> Ella está (FILL IN THE BLANK). (cocinar)",
       "answer": "cocinando",
       "hint": "-ar → -ando"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "He is reading a book -> Él está (FILL IN THE BLANK) un libro. (leer)",
       "answer": "leyendo",
       "hint": "i → y"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "We are watching TV -> Estamos (FILL IN THE BLANK) la tele. (mirar)",
       "answer": "mirando",
       "hint": "-ar → -ando"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "You are listening to music (tú) -> Estás (FILL IN THE BLANK) música. (escuchar)",
       "answer": "escuchando",
       "hint": "-ar → -ando"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am sleeping -> Estoy (FILL IN THE BLANK). (dormir)",
       "answer": "durmiendo",
       "hint": "o → u"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "She is asking for pizza -> Ella está (FILL IN THE BLANK) pizza. (pedir)",
       "answer": "pidiendo",
       "hint": "e → i"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "They are laughing a lot -> Están (FILL IN THE BLANK) mucho. (reír)",
       "answer": "riendo",
       "hint": "Irregular"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am drinking water -> Estoy (FILL IN THE BLANK) agua. (beber)",
       "answer": "bebiendo",
       "hint": "-er → -iendo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "We are preparing the cake -> Estamos (FILL IN THE BLANK) el pastel. (preparar)",
       "answer": "preparando",
       "hint": "-ar → -ando"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "He is taking a bath -> Se está (FILL IN THE BLANK). (bañar)",
       "answer": "bañando",
       "hint": "-ar → -ando"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am washing my hands -> Estoy (FILL IN THE BLANK) las manos. (lavar + me)",
       "answer": "lavándome",
       "hint": "Attach me, add an accent"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "The gerund changes for gender and number.",
       "options": [
        "False",
        "True"
       ],
       "answer": "False"
      }
     ]
    },
    "TENER_WEATHER": {
     "title": "Hot, Cold & Hungry: Tener Expressions & Weather",
     "tags": [
      "idioms",
      "tener",
      "weather",
      "everyday",
      "beach"
     ],
     "level": "beginner",
     "intro": "Feelings with tener, weather with hacer, and every tense of both.",
     "targetXP": 60,
     "phrases": [
      {
       "type": "CONJUGATE",
       "sentence": "Yo (tener - Present) hambre.",
       "verb": "tener",
       "subject": "Yo",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Tú (tener - Present) sed.",
       "verb": "tener",
       "subject": "Tú",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ella (tener - Present) frío.",
       "verb": "tener",
       "subject": "Ella",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Nosotros (tener - Present) calor.",
       "verb": "tener",
       "subject": "Nosotros",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ellos (tener - Present) sueño.",
       "verb": "tener",
       "subject": "Ellos",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ayer yo (tener - Preterite) mucho miedo.",
       "verb": "tener",
       "subject": "Yo",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "De niño, yo siempre (tener - Imperfect) frío.",
       "verb": "tener",
       "subject": "Yo",
       "tense": "Imperfect"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Mañana ellos (tener - Future) mucha prisa.",
       "verb": "tener",
       "subject": "Ellos",
       "tense": "Future"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (tener - Conditional) frío sin chaqueta.",
       "verb": "tener",
       "subject": "Yo",
       "tense": "Conditional"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Quiero que tú (tener - PresentSubjunctive) cuidado.",
       "verb": "tener",
       "subject": "Tú",
       "tense": "PresentSubjunctive"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Hoy (hacer - Present) mucho sol.",
       "verb": "hacer",
       "subject": "Él",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ayer (hacer - Preterite) frío.",
       "verb": "hacer",
       "subject": "Él",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Mañana (hacer - Future) viento.",
       "verb": "hacer",
       "subject": "Él",
       "tense": "Future"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Cuando era pequeño, (hacer - Imperfect) más calor.",
       "verb": "hacer",
       "subject": "Él",
       "tense": "Imperfect"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "It is raining -> (FILL IN THE BLANK).",
       "answer": "Llueve",
       "hint": "Verb llover"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "It is snowing -> (FILL IN THE BLANK).",
       "answer": "Nieva",
       "hint": "Verb nevar"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "It is cloudy -> Está (FILL IN THE BLANK).",
       "answer": "nublado",
       "hint": "Clouds"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "It is hot -> Hace (FILL IN THE BLANK).",
       "answer": "calor",
       "hint": "Hot"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am fifteen years old -> Tengo quince (FILL IN THE BLANK).",
       "answer": "años",
       "hint": "Contains ñ"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am in a hurry -> Tengo (FILL IN THE BLANK).",
       "answer": "prisa",
       "hint": "Rush"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "You are right (tú) -> Tienes (FILL IN THE BLANK).",
       "answer": "razón",
       "hint": "Accent on ó"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I feel like dancing -> Tengo (FILL IN THE BLANK) de bailar.",
       "answer": "ganas",
       "hint": "Desire"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which means 'to be sleepy'?",
       "options": [
        "tener sueño",
        "tener sed",
        "tener miedo",
        "tener prisa"
       ],
       "answer": "tener sueño"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "'Hace frío' describes...",
       "options": [
        "The weather",
        "A person",
        "A thing",
        "A place"
       ],
       "answer": "The weather"
      }
     ]
    },
    "PLANS_INVITES": {
     "title": "Plans & Invitations: Ir a + Infinitive",
     "tags": [
      "plans",
      "ir-a",
      "invitations",
      "future",
      "everyday",
      "dates"
     ],
     "level": "intermediate",
     "intro": "Make plans, invite friends, accept or decline, and use ir in every tense.",
     "targetXP": 60,
     "phrases": [
      {
       "type": "CONJUGATE",
       "sentence": "Yo (ir - Present) a nadar.",
       "verb": "ir",
       "subject": "Yo",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Tú (ir - Present) a bailar esta noche.",
       "verb": "ir",
       "subject": "Tú",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ella (ir - Present) a cenar con nosotros.",
       "verb": "ir",
       "subject": "Ella",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Nosotros (ir - Present) a la playa.",
       "verb": "ir",
       "subject": "Nosotros",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ellos (ir - Present) a viajar en junio.",
       "verb": "ir",
       "subject": "Ellos",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ayer yo (ir - Preterite) al cine.",
       "verb": "ir",
       "subject": "Yo",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Anoche nosotros (ir - Preterite) al parque.",
       "verb": "ir",
       "subject": "Nosotros",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "De niño, yo (ir - Imperfect) a la playa cada verano.",
       "verb": "ir",
       "subject": "Yo",
       "tense": "Imperfect"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Mañana ella (ir - Future) al médico.",
       "verb": "ir",
       "subject": "Ella",
       "tense": "Future"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (ir - Conditional) contigo, pero no puedo.",
       "verb": "ir",
       "subject": "Yo",
       "tense": "Conditional"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Quiero que tú (ir - PresentSubjunctive) conmigo.",
       "verb": "ir",
       "subject": "Tú",
       "tense": "PresentSubjunctive"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (invitar - Present) a mis amigos a cenar.",
       "verb": "invitar",
       "subject": "Yo",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ellos (visitar - Future) a su abuela.",
       "verb": "visitar",
       "subject": "Ellos",
       "tense": "Future"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Nosotros (preparar - Future) la cena.",
       "verb": "preparar",
       "subject": "Nosotros",
       "tense": "Future"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Tú (compartir - Present) tu postre conmigo.",
       "verb": "compartir",
       "subject": "Tú",
       "tense": "Present"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Let's go to the movies! -> ¡Vamos al (FILL IN THE BLANK)!",
       "answer": "cine",
       "hint": "Movie theater"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Do you want to come? (tú) -> ¿(FILL IN THE BLANK) venir?",
       "answer": "Quieres",
       "hint": "Querer, tú"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I would love to! -> ¡Me (FILL IN THE BLANK)!",
       "answer": "encantaría",
       "hint": "Conditional of encantar"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Sorry, I can't -> Lo siento, no (FILL IN THE BLANK).",
       "answer": "puedo",
       "hint": "Poder, yo"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "What time? -> ¿A qué (FILL IN THE BLANK)?",
       "answer": "hora",
       "hint": "Time"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Where do we meet? -> ¿(FILL IN THE BLANK) nos vemos?",
       "answer": "Dónde",
       "hint": "Accent on ó"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "See you at eight -> Nos vemos a las (FILL IN THE BLANK).",
       "answer": "ocho",
       "hint": "Number 8"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "Which invites someone politely?",
       "options": [
        "¿Te gustaría venir?",
        "¡Hasta luego!",
        "Lo siento.",
        "Tengo hambre."
       ],
       "answer": "¿Te gustaría venir?"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "'Tengo que trabajar' means...",
       "options": [
        "I have to work",
        "I want to work",
        "I used to work",
        "I will work"
       ],
       "answer": "I have to work"
      }
     ]
    },
    "RESTAURANT": {
     "title": "At the Restaurant: Ordering & Sharing",
     "tags": [
      "restaurant",
      "food",
      "ordering",
      "vocabulary",
      "everyday"
     ],
     "level": "intermediate",
     "intro": "Order, ask for the check, compliment the chef and conjugate pedir, beber, compartir and more.",
     "targetXP": 60,
     "phrases": [
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'la cuenta' mean?",
       "options": [
        "The check",
        "The table",
        "The menu",
        "The tip"
       ],
       "answer": "The check"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'el mesero' mean?",
       "options": [
        "The waiter",
        "The chef",
        "The customer",
        "The owner"
       ],
       "answer": "The waiter"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'la propina' mean?",
       "options": [
        "The tip",
        "The bill",
        "The plate",
        "The fork"
       ],
       "answer": "The tip"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'el plato' mean?",
       "options": [
        "The dish",
        "The glass",
        "The napkin",
        "The menu"
       ],
       "answer": "The dish"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "A table for two, please -> Una mesa para (FILL IN THE BLANK), por favor.",
       "answer": "dos",
       "hint": "Number 2"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I would like water -> Quisiera (FILL IN THE BLANK).",
       "answer": "agua",
       "hint": "Drink"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "The check, please -> La (FILL IN THE BLANK), por favor.",
       "answer": "cuenta",
       "hint": "Bill"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "What do you recommend? (usted) -> ¿Qué (FILL IN THE BLANK)?",
       "answer": "recomienda",
       "hint": "Recomendar, usted"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "It is delicious! -> ¡Está (FILL IN THE BLANK)!",
       "answer": "delicioso",
       "hint": "Starts with del"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "Enjoy your meal! -> ¡Buen (FILL IN THE BLANK)!",
       "answer": "provecho",
       "hint": "Said before eating"
      },
      {
       "type": "FILL_IN_BLANK",
       "sentence": "I am allergic to nuts (male speaker) -> Soy (FILL IN THE BLANK) a las nueces.",
       "answer": "alérgico",
       "hint": "Allergic"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (pedir - Preterite) la sopa.",
       "verb": "pedir",
       "subject": "Yo",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Nosotros (pedir - Present) agua con gas.",
       "verb": "pedir",
       "subject": "Nosotros",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ella (pedir - Imperfect) siempre el postre.",
       "verb": "pedir",
       "subject": "Ella",
       "tense": "Imperfect"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ellos (pedir - Future) la cuenta pronto.",
       "verb": "pedir",
       "subject": "Ellos",
       "tense": "Future"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ella (beber - Present) jugo de naranja.",
       "verb": "beber",
       "subject": "Ella",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Tú (beber - Imperfect) café cada mañana.",
       "verb": "beber",
       "subject": "Tú",
       "tense": "Imperfect"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ellos (compartir - Preterite) el postre.",
       "verb": "compartir",
       "subject": "Ellos",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "El mesero (recibir - Preterite) la orden.",
       "verb": "recibir",
       "subject": "Él",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "El chef (preparar - Present) la paella.",
       "verb": "preparar",
       "subject": "Él",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Ellos (vender - Present) tacos deliciosos.",
       "verb": "vender",
       "subject": "Ellos",
       "tense": "Present"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Yo (responder - Preterite) al mesero.",
       "verb": "responder",
       "subject": "Yo",
       "tense": "Preterite"
      },
      {
       "type": "CONJUGATE",
       "sentence": "Nosotros (cenar - Future) a las nueve.",
       "verb": "cenar",
       "subject": "Nosotros",
       "tense": "Future"
      },
      {
       "type": "MULTIPLE_CHOICE",
       "prompt": "What does 'la cuenta, por favor' ask for?",
       "options": [
        "The check",
        "The menu",
        "A table",
        "Water"
       ],
       "answer": "The check"
      }
     ]
    },

    "PRET_REGULAR_DRILL": {
        title: "Preterite Drill 1: Regular Verbs",
        tags: ["preterite","drill"],
        intro: "Practice the regular preterite endings (-é, -aste, -ó, -amos, -aron / -í, -iste, -ió, -imos, -ieron) with everyday actions. Watch the accents!",
        targetXP: 40,
        phrases: [
            { type: 'CONJUGATE', sentence: "Ayer yo (comprar - Preterite) pan en la tienda.", verb: "comprar", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Anoche tú (cenar - Preterite) con tu familia.", verb: "cenar", subject: "Tú", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ella (hablar - Preterite) con el profesor.", verb: "hablar", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nosotros (estudiar - Preterite) toda la tarde.", verb: "estudiar", subject: "Nosotros", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (caminar - Preterite) al parque.", verb: "caminar", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (comer - Preterite) tacos ayer.", verb: "comer", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Tú (beber - Preterite) agua después de correr.", verb: "beber", subject: "Tú", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Él (vender - Preterite) su bicicleta.", verb: "vender", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nosotros (aprender - Preterite) muchas palabras.", verb: "aprender", subject: "Nosotros", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (responder - Preterite) a la pregunta.", verb: "responder", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (escribir - Preterite) una carta.", verb: "escribir", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Tú (abrir - Preterite) la ventana.", verb: "abrir", subject: "Tú", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ella (recibir - Preterite) un regalo.", verb: "recibir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nosotros (vivir - Preterite) en Colorado.", verb: "vivir", subject: "Nosotros", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (decidir - Preterite) quedarse en casa.", verb: "decidir", subject: "Ellos", tense: "Preterite" },
            { type: 'FILL_IN_BLANK', sentence: "Yo (hablar) -> (hablar) -> (FILL IN THE BLANK) con mi madre.", answer: "hablé", hint: "Preterite of hablar (Yo)" },
            { type: 'FILL_IN_BLANK', sentence: "Nosotros (comer) -> (comer) -> (FILL IN THE BLANK) en el restaurante.", answer: "comimos", hint: "Preterite of comer (Nosotros)" },
            { type: 'FILL_IN_BLANK', sentence: "Ellos (vivir) -> (vivir) -> (FILL IN THE BLANK) en España.", answer: "vivieron", hint: "Preterite of vivir (Ellos)" },
            { type: 'MULTIPLE_CHOICE', prompt: "Which is the correct preterite of 'hablar' (yo)?", options: ["hablé","hablo","hablaba","hablaré"], answer: "hablé" },
            { type: 'MULTIPLE_CHOICE', prompt: "Which ending marks 'nosotros' in the preterite of -ER verbs?", options: ["-imos","-emos","-amos","-ían"], answer: "-imos" }
        ]
    },

    "PRET_IRREGULAR_DRILL": {
        title: "Preterite Drill 2: Irregular Verbs",
        tags: ["preterite","irregular","drill"],
        intro: "Irregular preterites have special stems (tuv-, estuv-, hic-, vin-, dij-...) and NO accents on the endings. Ser and ir share the same forms: fui, fuiste, fue, fuimos, fueron!",
        targetXP: 60,
        phrases: [
            { type: 'CONJUGATE', sentence: "Ayer yo (tener - Preterite) mucho trabajo.", verb: "tener", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Tú (estar - Preterite) en casa anoche.", verb: "estar", subject: "Tú", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ella (hacer - Preterite) la tarea.", verb: "hacer", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nosotros (poder - Preterite) terminar.", verb: "poder", subject: "Nosotros", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (venir - Preterite) temprano.", verb: "venir", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (poner - Preterite) la mesa.", verb: "poner", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Tú (decir - Preterite) la verdad.", verb: "decir", subject: "Tú", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Él (querer - Preterite) ayudar.", verb: "querer", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nosotros (saber - Preterite) la noticia ayer.", verb: "saber", subject: "Nosotros", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (traer - Preterite) los refrescos.", verb: "traer", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (ir - Preterite) al mercado.", verb: "ir", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Tú (ser - Preterite) muy amable.", verb: "ser", subject: "Tú", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ella (dar - Preterite) un consejo.", verb: "dar", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nosotros (ver - Preterite) una película.", verb: "ver", subject: "Nosotros", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (conducir - Preterite) toda la noche.", verb: "conducir", subject: "Ellos", tense: "Preterite" },
            { type: 'FILL_IN_BLANK', sentence: "Yo (tener) -> (tener) -> (FILL IN THE BLANK) un problema.", answer: "tuve", hint: "Preterite of tener (Yo)" },
            { type: 'FILL_IN_BLANK', sentence: "Él (hacer) -> (hacer) -> (FILL IN THE BLANK) el desayuno.", answer: "hizo", hint: "Preterite of hacer (Él)" },
            { type: 'FILL_IN_BLANK', sentence: "Ellos (decir) -> (decir) -> (FILL IN THE BLANK) \"hola\".", answer: "dijeron", hint: "Preterite of decir (Ellos)" },
            { type: 'FILL_IN_BLANK', sentence: "Nosotros (ir) -> (ir) -> (FILL IN THE BLANK) a la playa.", answer: "fuimos", hint: "Preterite of ir (Nosotros)" },
            { type: 'MULTIPLE_CHOICE', prompt: "Preterite of 'ser' (yo)?", options: ["fui","era","seré","sea"], answer: "fui" },
            { type: 'MULTIPLE_CHOICE', prompt: "Preterite of 'ir' (ellos)?", options: ["fueron","iban","irán","van"], answer: "fueron" },
            { type: 'MULTIPLE_CHOICE', prompt: "Which verb has the stem 'tuv-' in the preterite?", options: ["tener","traer","tomar","tocar"], answer: "tener" },
            { type: 'MULTIPLE_CHOICE', prompt: "Why is 'fue' (él) written with no accent?", options: ["One-syllable word","It is a question","It is plural","It is a command"], answer: "One-syllable word" }
        ]
    },

    "PRET_STEM_SPELLING_DRILL": {
        title: "Preterite Drill 3: Stem & Spelling Changes",
        tags: ["preterite","stem-change","drill"],
        intro: "-IR verbs change e→i or o→u in the él/ellos forms (pidió, durmieron). -ER/-AR verbs ending in a vowel turn i into y (leyó, creyeron, cayó). Also -car/-gar/-zar change in the yo form.",
        targetXP: 60,
        phrases: [
            { type: 'CONJUGATE', sentence: "Ella (pedir - Preterite) una pizza.", verb: "pedir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (pedir - Preterite) la cuenta.", verb: "pedir", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Él (dormir - Preterite) ocho horas.", verb: "dormir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (dormir - Preterite) muy bien.", verb: "dormir", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "El abuelo (morir - Preterite) en 1999.", verb: "morir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ella (leer - Preterite) el libro entero.", verb: "leer", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (leer - Preterite) la lista.", verb: "leer", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (creer - Preterite) la historia.", verb: "creer", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (creer - Preterite) el rumor.", verb: "creer", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Él (caer - Preterite) en la nieve.", verb: "caer", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (construir - Preterite) una casa.", verb: "construir", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Él (destruir - Preterite) la torre de cartas.", verb: "destruir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (buscar - Preterite) mis llaves.", verb: "buscar", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (llegar - Preterite) tarde.", verb: "llegar", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (empezar - Preterite) a correr.", verb: "empezar", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (jugar - Preterite) al fútbol.", verb: "jugar", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ella (reír - Preterite) mucho.", verb: "reír", subject: "Él", tense: "Preterite" },
            { type: 'FILL_IN_BLANK', sentence: "Él (dormir) -> (dormir) -> (FILL IN THE BLANK) toda la noche.", answer: "durmió", hint: "Preterite of dormir (Él)" },
            { type: 'FILL_IN_BLANK', sentence: "Ellos (leer) -> (leer) -> (FILL IN THE BLANK) el periódico.", answer: "leyeron", hint: "Preterite of leer (Ellos)" },
            { type: 'FILL_IN_BLANK', sentence: "Yo (llegar) -> (llegar) -> (FILL IN THE BLANK) a las ocho.", answer: "llegué", hint: "Preterite of llegar (Yo)" },
            { type: 'FILL_IN_BLANK', sentence: "Yo (empezar) -> (empezar) -> (FILL IN THE BLANK) la clase.", answer: "empecé", hint: "Preterite of empezar (Yo)" },
            { type: 'MULTIPLE_CHOICE', prompt: "Why 'leyó' and not 'leió'?", options: ["A vowel between vowels: i becomes y","It is irregular stem","It is a command","Typo"], answer: "A vowel between vowels: i becomes y" },
            { type: 'MULTIPLE_CHOICE', prompt: "Preterite of 'pedir' (ellos)?", options: ["pidieron","pedieron","pedían","pedirán"], answer: "pidieron" },
            { type: 'MULTIPLE_CHOICE', prompt: "Preterite of 'buscar' (yo)?", options: ["busqué","buscé","buscí","buscó"], answer: "busqué" }
        ]
    },

    "IMPERFECT_DRILL": {
        title: "Imperfect Drill: Habits, Descriptions & Backgrounds",
        tags: ["imperfect","drill"],
        intro: "The imperfect describes what USED TO happen, what WAS happening, and background details (age, time, weather, feelings). Only three irregulars: ser (era), ir (iba), ver (veía).",
        targetXP: 50,
        phrases: [
            { type: 'CONJUGATE', sentence: "De niño, yo (jugar - Imperfect) en el parque todos los días.", verb: "jugar", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Tú (vivir - Imperfect) cerca de la escuela.", verb: "vivir", subject: "Tú", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Mi abuela (cocinar - Imperfect) cada domingo.", verb: "cocinar", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Nosotros (visitar - Imperfect) a mis tíos en verano.", verb: "visitar", subject: "Nosotros", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Ellos (estudiar - Imperfect) en la biblioteca.", verb: "estudiar", subject: "Ellos", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Yo (ser - Imperfect) muy tímido.", verb: "ser", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Tú (ser - Imperfect) el mejor jugador.", verb: "ser", subject: "Tú", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Nosotros (ir - Imperfect) a la playa cada año.", verb: "ir", subject: "Nosotros", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Ellos (ir - Imperfect) a pie.", verb: "ir", subject: "Ellos", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Yo (ver - Imperfect) dibujos animados cada mañana.", verb: "ver", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Ella (ver - Imperfect) la tele cuando llamaste.", verb: "ver", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Yo (tener - Imperfect) diez años.", verb: "tener", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Ellos (querer - Imperfect) más tiempo.", verb: "querer", subject: "Ellos", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Nosotros (poder - Imperfect) oír la música.", verb: "poder", subject: "Nosotros", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Ella (escribir - Imperfect) mientras yo leía.", verb: "escribir", subject: "Él", tense: "Imperfect" },
            { type: 'FILL_IN_BLANK', sentence: "Yo (ser) -> (ser) -> (FILL IN THE BLANK) pequeño.", answer: "era", hint: "Imperfect of ser (Yo)" },
            { type: 'FILL_IN_BLANK', sentence: "Nosotros (ir) -> (ir) -> (FILL IN THE BLANK) al lago.", answer: "íbamos", hint: "Imperfect of ir (Nosotros)" },
            { type: 'FILL_IN_BLANK', sentence: "Ellos (ver) -> (ver) -> (FILL IN THE BLANK) el partido.", answer: "veían", hint: "Imperfect of ver (Ellos)" },
            { type: 'FILL_IN_BLANK', sentence: "Tú (hablar) -> (hablar) -> (FILL IN THE BLANK) mucho.", answer: "hablabas", hint: "Imperfect of hablar (Tú)" },
            { type: 'MULTIPLE_CHOICE', prompt: "Which words signal the imperfect?", options: ["siempre, a menudo, mientras","ayer, anoche, de repente","mañana, pronto","ojalá, quizás"], answer: "siempre, a menudo, mientras" },
            { type: 'MULTIPLE_CHOICE', prompt: "Imperfect of 'ir' (yo)?", options: ["iba","fui","iré","vaya"], answer: "iba" },
            { type: 'MULTIPLE_CHOICE', prompt: "Imperfect -AR ending for 'nosotros'?", options: ["-ábamos","-amos","-aremos","-emos"], answer: "-ábamos" }
        ]
    },

    "PRET_IMPERF_STORY": {
        title: "Preterite vs. Imperfect: The Snowy Day Story",
        tags: ["preterite","imperfect","story"],
        intro: "Read a story and choose the right past tense: the IMPERFECT sets the scene (it was snowing), the PRETERITE moves the action forward (suddenly I fell). Ask yourself: scene or event?",
        targetXP: 70,
        phrases: [
            { type: 'CONJUGATE', sentence: "Era un día frío y nevaba, y yo (caminar - Imperfect) a la escuela.", verb: "caminar", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "De repente yo (caer - Preterite) sobre el hielo.", verb: "caer", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Mi amigo (ver - Preterite) el accidente y se rió.", verb: "ver", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Todos los niños (reír - Preterite) a carcajadas.", verb: "reír", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Mientras ellos (reír - Imperfect) yo me levantaba.", verb: "reír", subject: "Ellos", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Nosotros (ir - Preterite) a la enfermería.", verb: "ir", subject: "Nosotros", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (tener - Imperfect) mucho frío.", verb: "tener", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "La enfermera (decir - Preterite) que no era grave.", verb: "decir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Después yo (volver - Preterite) a clase.", verb: "volver", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Siempre yo (tomar - Imperfect) chocolate caliente después.", verb: "tomar", subject: "Yo", tense: "Imperfect" },
            { type: 'MULTIPLE_CHOICE', prompt: "\"Mientras yo ___ (leer), mi hermano entró.\" Which tense for \"leer\"?", options: ["Imperfect (leía)","Preterite (leí)","Future","Conditional"], answer: "Imperfect (leía)" },
            { type: 'MULTIPLE_CHOICE', prompt: "\"De repente ___ (sonar) el teléfono.\" Which tense?", options: ["Preterite (sonó)","Imperfect (sonaba)","Future","Subjunctive"], answer: "Preterite (sonó)" },
            { type: 'MULTIPLE_CHOICE', prompt: "Describing your age as a child uses...", options: ["Imperfect","Preterite","Future","Present subjunctive"], answer: "Imperfect" },
            { type: 'MULTIPLE_CHOICE', prompt: "A completed action with a definite end uses...", options: ["Preterite","Imperfect","Conditional","Imperfect subjunctive"], answer: "Preterite" },
            { type: 'FILL_IN_BLANK', sentence: "Ayer (llover) -> (FILL IN THE BLANK) todo el día. (it rained, completed)", answer: "llovió", hint: "Preterite of llover, él" },
            { type: 'FILL_IN_BLANK', sentence: "Cuando era niña, (llover) -> (FILL IN THE BLANK) mucho en mi ciudad. (it used to rain)", answer: "llovía", hint: "Imperfect of llover, él" },
            { type: 'FILL_IN_BLANK', sentence: "Yo (dormir) -> (FILL IN THE BLANK) cuando sonó el teléfono. (I was sleeping)", answer: "dormía", hint: "Imperfect of dormir, yo" },
            { type: 'FILL_IN_BLANK', sentence: "Anoche yo (dormir) -> (FILL IN THE BLANK) ocho horas. (completed)", answer: "dormí", hint: "Preterite of dormir, yo" }
        ]
    },

    "FUTURE_CONDITIONAL_DRILL": {
        title: "Future & Conditional Drill: Irregular Stems",
        tags: ["future","conditional","irregular","drill"],
        intro: "Future = infinitive/stem + é, ás, á, emos, án. Conditional = same stem + ía, ías, ía, íamos, ían. Twelve irregular stems: dir-, har-, pondr-, saldr-, tendr-, vendr-, podr-, querr-, sabr-, cabr-, habr-.",
        targetXP: 60,
        phrases: [
            { type: 'CONJUGATE', sentence: "Mañana yo (tener - Future) un examen.", verb: "tener", subject: "Yo", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Tú (hacer - Future) la cena.", verb: "hacer", subject: "Tú", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Ella (venir - Future) a la fiesta.", verb: "venir", subject: "Él", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Nosotros (salir - Future) temprano.", verb: "salir", subject: "Nosotros", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Ellos (poner - Future) la mesa.", verb: "poner", subject: "Ellos", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Pronto yo (decir - Future) la verdad.", verb: "decir", subject: "Yo", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Tú (poder - Future) ayudarnos.", verb: "poder", subject: "Tú", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Él (saber - Future) la respuesta.", verb: "saber", subject: "Él", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Nosotros (querer - Future) más tiempo.", verb: "querer", subject: "Nosotros", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Ellos (hablar - Future) con el jefe.", verb: "hablar", subject: "Ellos", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Yo (tener - Conditional) más tiempo si pudiera.", verb: "tener", subject: "Yo", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Tú (hacer - Conditional) lo mismo.", verb: "hacer", subject: "Tú", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Ella (venir - Conditional) si la invitaran.", verb: "venir", subject: "Él", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Nosotros (salir - Conditional) de viaje.", verb: "salir", subject: "Nosotros", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Ellos (decir - Conditional) que no.", verb: "decir", subject: "Ellos", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Yo (poder - Conditional) ayudarte.", verb: "poder", subject: "Yo", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Ella (querer - Conditional) quedarse.", verb: "querer", subject: "Él", tense: "Conditional" },
            { type: 'FILL_IN_BLANK', sentence: "Yo (vivir) -> (vivir) -> (FILL IN THE BLANK) en Madrid algún día.", answer: "viviré", hint: "Future of vivir (Yo)" },
            { type: 'FILL_IN_BLANK', sentence: "Nosotros (comer) -> (comer) -> (FILL IN THE BLANK) más verduras.", answer: "comeríamos", hint: "Conditional of comer (Nosotros)" },
            { type: 'FILL_IN_BLANK', sentence: "Ellos (tener) -> (tener) -> (FILL IN THE BLANK) suerte.", answer: "tendrán", hint: "Future of tener (Ellos)" },
            { type: 'MULTIPLE_CHOICE', prompt: "Future of 'hacer' (yo)?", options: ["haré","hacería","hago","haga"], answer: "haré" },
            { type: 'MULTIPLE_CHOICE', prompt: "Conditional of 'poder' (tú)?", options: ["podrías","podrás","puedes","pudieras"], answer: "podrías" },
            { type: 'MULTIPLE_CHOICE', prompt: "'¿Podría abrir la ventana?' is a...", options: ["Polite request","Past habit","Command","Future plan"], answer: "Polite request" },
            { type: 'MULTIPLE_CHOICE', prompt: "Conditional can also express...", options: ["Probability in the past","Completed action","Direct command","Present habit"], answer: "Probability in the past" }
        ]
    },

    "SUBJ_PRESENT_DRILL": {
        title: "Subjunctive Drill 1: Present Subjunctive Triggers (WEIRDO)",
        tags: ["subjunctive","present","drill"],
        intro: "Wishes, Emotions, Impersonal expressions, Recommendations, Doubt, Ojalá. When the subject changes after \"que\", use the subjunctive. Irregulars: dar, estar, ir, saber, ser (DISSH).",
        targetXP: 70,
        phrases: [
            { type: 'CONJUGATE', sentence: "Quiero que tú (hablar - PresentSubjunctive) más despacio.", verb: "hablar", subject: "Tú", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Espero que ella (venir - PresentSubjunctive) a la fiesta.", verb: "venir", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Es necesario que nosotros (estudiar - PresentSubjunctive) más.", verb: "estudiar", subject: "Nosotros", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Recomiendo que ellos (comer - PresentSubjunctive) temprano.", verb: "comer", subject: "Ellos", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Dudo que él (saber - PresentSubjunctive) la verdad.", verb: "saber", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Me alegra que tú (estar - PresentSubjunctive) aquí.", verb: "estar", subject: "Tú", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Ojalá que yo (ir - PresentSubjunctive) contigo.", verb: "ir", subject: "Yo", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "No creo que ellos (ser - PresentSubjunctive) honestos.", verb: "ser", subject: "Ellos", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Quiero que ella me (dar - PresentSubjunctive) una oportunidad.", verb: "dar", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Es importante que yo (tener - PresentSubjunctive) paciencia.", verb: "tener", subject: "Yo", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Pido que tú (hacer - PresentSubjunctive) silencio.", verb: "hacer", subject: "Tú", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Prefiero que nosotros (salir - PresentSubjunctive) ahora.", verb: "salir", subject: "Nosotros", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Temo que ellos (volver - PresentSubjunctive) tarde.", verb: "volver", subject: "Ellos", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Es mejor que él (dormir - PresentSubjunctive) más.", verb: "dormir", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'FILL_IN_BLANK', sentence: "Quiero que tú (venir) -> (venir) -> (FILL IN THE BLANK) pronto.", answer: "vengas", hint: "PresentSubjunctive of venir (Tú)" },
            { type: 'FILL_IN_BLANK', sentence: "Espero que nosotros (poder) -> (poder) -> (FILL IN THE BLANK) ir.", answer: "podamos", hint: "PresentSubjunctive of poder (Nosotros)" },
            { type: 'FILL_IN_BLANK', sentence: "Dudo que ellos (decir) -> (decir) -> (FILL IN THE BLANK) la verdad.", answer: "digan", hint: "PresentSubjunctive of decir (Ellos)" },
            { type: 'MULTIPLE_CHOICE', prompt: "Which phrase triggers the subjunctive?", options: ["Dudo que","Sé que","Veo que","Creo que"], answer: "Dudo que" },
            { type: 'MULTIPLE_CHOICE', prompt: "Present subjunctive of 'ir' (yo)?", options: ["vaya","voy","iba","iré"], answer: "vaya" },
            { type: 'MULTIPLE_CHOICE', prompt: "When do you NOT use the subjunctive after 'que'?", options: ["When there is only one subject","Emotions","Doubts","Wishes"], answer: "When there is only one subject" },
            { type: 'MULTIPLE_CHOICE', prompt: "'No creo que' + ...", options: ["subjunctive","indicative","infinitive only","gerund"], answer: "subjunctive" }
        ]
    },

    "SUBJ_IMPERFECT_DRILL": {
        title: "Subjunctive Drill 2: Imperfect Subjunctive & If-Clauses",
        tags: ["subjunctive","imperfect","drill"],
        intro: "Take the ellos preterite form, drop -ron, add -ra, -ras, -ra, -ramos (-ran). Use it after past-tense triggers (Quería que...) and in \"Si + imperfect subjunctive, conditional\" sentences.",
        targetXP: 70,
        phrases: [
            { type: 'CONJUGATE', sentence: "Quería que tú (venir - ImperfectSubjunctive) conmigo.", verb: "venir", subject: "Tú", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Esperaba que ella (llegar - ImperfectSubjunctive) temprano.", verb: "llegar", subject: "Él", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Ojalá que yo (poder - ImperfectSubjunctive) viajar más.", verb: "poder", subject: "Yo", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Si yo (tener - ImperfectSubjunctive) dinero, viajaría.", verb: "tener", subject: "Yo", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Si tú (estudiar - ImperfectSubjunctive) más, aprobarías.", verb: "estudiar", subject: "Tú", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Si nosotros (ir - ImperfectSubjunctive) a la playa, nadaríamos.", verb: "ir", subject: "Nosotros", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Si ellos (saber - ImperfectSubjunctive) la verdad, hablarían.", verb: "saber", subject: "Ellos", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Si él (ser - ImperfectSubjunctive) rico, ayudaría a todos.", verb: "ser", subject: "Él", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Me pidió que yo (hacer - ImperfectSubjunctive) la cena.", verb: "hacer", subject: "Yo", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Dudaba que ellos (decir - ImperfectSubjunctive) la verdad.", verb: "decir", subject: "Ellos", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Era necesario que nosotros (salir - ImperfectSubjunctive) temprano.", verb: "salir", subject: "Nosotros", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Quería que él (dormir - ImperfectSubjunctive) más.", verb: "dormir", subject: "Él", tense: "ImperfectSubjunctive" },
            { type: 'FILL_IN_BLANK', sentence: "Si yo (ser) -> (ser) -> (FILL IN THE BLANK) tú, lo haría.", answer: "fuera", hint: "ImperfectSubjunctive of ser (Yo)" },
            { type: 'FILL_IN_BLANK', sentence: "Si ellos (tener) -> (tener) -> (FILL IN THE BLANK) tiempo, vendrían.", answer: "tuvieran", hint: "ImperfectSubjunctive of tener (Ellos)" },
            { type: 'FILL_IN_BLANK', sentence: "Ojalá nosotros (poder) -> (poder) -> (FILL IN THE BLANK) ir.", answer: "pudiéramos", hint: "ImperfectSubjunctive of poder (Nosotros)" },
            { type: 'FILL_IN_BLANK', sentence: "Si tuviera tiempo, yo (viajar) -> (FILL IN THE BLANK) a Perú.", answer: "viajaría", hint: "Conditional of viajar, yo" },
            { type: 'FILL_IN_BLANK', sentence: "Si ella viniera, nosotros (cantar) -> (FILL IN THE BLANK) juntos.", answer: "cantaríamos", hint: "Conditional of cantar, nosotros" },
            { type: 'MULTIPLE_CHOICE', prompt: "The 'if' clause 'Si yo tuviera...' pairs with...", options: ["conditional","future","present","preterite"], answer: "conditional" },
            { type: 'MULTIPLE_CHOICE', prompt: "Imperfect subjunctive is built from which form?", options: ["Ellos preterite","Yo present","Tú future","Nosotros imperfect"], answer: "Ellos preterite" }
        ]
    },

    "TOOL_VICARIOUS_RIGHT_IN_TWO": {
        title: "BOSS: Vicariously Divided (inspired by Tool: \"Vicarious\" & \"Right in Two\")",
        tags: ["boss","mixed","preterite","imperfect","future","conditional","subjunctive"],
        intro: "A long mixed-tense journey inspired by the THEMES of Tool's songs \"Vicarious\" and \"Right in Two\": free will, humans dividing what could be shared, and watching tragedy from a safe distance. All sentences are original. Five parts: Imperfect (the scene), Preterite (what happened), Present (the confession), Future & Conditional (what could be), and Subjunctive (wishes and doubts). Reflect on the themes as you practice!",
        targetXP: 150,
        phrases: [
            { type: 'MULTIPLE_CHOICE', prompt: "Warm-up: 'libre albedrío' means...", options: ["free will","free time","fresh air","free ticket"], answer: "free will" },
            { type: 'MULTIPLE_CHOICE', prompt: "'Vicariamente' means experiencing something through someone else. Which is a vicarious experience?", options: ["Crying while watching a movie hero lose","Running a marathon","Cooking dinner","Washing the car"], answer: "Crying while watching a movie hero lose" },
            { type: 'CONJUGATE', sentence: "Los ángeles (mirar - Imperfect) desde la banda, confundidos.", verb: "mirar", subject: "Ellos", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Yo (ver - Imperfect) las noticias todas las noches.", verb: "ver", subject: "Yo", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Tú siempre (esperar - Imperfect) algo más emocionante.", verb: "esperar", subject: "Tú", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Mi abuelo (creer - Imperfect) en la bondad de la gente.", verb: "creer", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Nosotros (vivir - Imperfect) muy lejos del peligro.", verb: "vivir", subject: "Nosotros", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Ellos no (saber - Imperfect) cuándo parar.", verb: "saber", subject: "Ellos", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Dios nos (dar - Preterite) la razón y la libertad.", verb: "dar", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Los humanos (construir - Preterite) ciudades enormes.", verb: "construir", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Después ellos (destruir - Preterite) lo que construyeron.", verb: "destruir", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (descubrir - Preterite) la verdad sobre mi curiosidad.", verb: "descubrir", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Tú (decir - Preterite) que no querías mirar.", verb: "decir", subject: "Tú", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nosotros (ver - Preterite) el desastre por la pantalla.", verb: "ver", subject: "Nosotros", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Él (morir - Preterite) muy lejos de nosotros.", verb: "morir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ellos (pedir - Preterite) más noticias.", verb: "pedir", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo no (poder - Preterite) apagar la tele.", verb: "poder", subject: "Yo", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Ella (reír - Preterite) nerviosa y luego calló.", verb: "reír", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo (necesitar - Present) mirar desde una distancia segura.", verb: "necesitar", subject: "Yo", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Tú (saber - Present) que tú también lo haces.", verb: "saber", subject: "Tú", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Nosotros (querer - Present) ver, pero no sentir.", verb: "querer", subject: "Nosotros", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Ellos (vivir - Present) a través de las historias de otros.", verb: "vivir", subject: "Ellos", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Él (tener - Present) miedo de admitirlo.", verb: "tener", subject: "Él", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Yo (ir - Present) a decir la verdad.", verb: "ir", subject: "Yo", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Mañana yo (poder - Future) cambiar de canal.", verb: "poder", subject: "Yo", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Algún día nosotros (aprender - Future) a compartir.", verb: "aprender", subject: "Nosotros", tense: "Future" },
            { type: 'CONJUGATE', sentence: "¿ (tener - Future) ellos paciencia para esperar?", verb: "tener", subject: "Ellos", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Yo (decir - Conditional) que somos más sabios de lo que parecemos.", verb: "decir", subject: "Yo", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Tú (poder - Conditional) dividir el pan en vez de la tierra.", verb: "poder", subject: "Tú", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Nosotros (vivir - Conditional) mejor si compartiéramos.", verb: "vivir", subject: "Nosotros", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Ellos (hacer - Conditional) las paces.", verb: "hacer", subject: "Ellos", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Quiero que tú (compartir - PresentSubjunctive) el pan con tu hermano.", verb: "compartir", subject: "Tú", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Espero que ellos (aprender - PresentSubjunctive) a escuchar.", verb: "aprender", subject: "Ellos", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Es triste que nosotros (mirar - PresentSubjunctive) sin ayudar.", verb: "mirar", subject: "Nosotros", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Dudo que el universo (ser - PresentSubjunctive) justo.", verb: "ser", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "No creo que él (saber - PresentSubjunctive) por qué luchamos.", verb: "saber", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Ojalá que yo (ir - PresentSubjunctive) hacia la paz.", verb: "ir", subject: "Yo", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Quería que ellos (ver - ImperfectSubjunctive) con sus propios ojos.", verb: "ver", subject: "Ellos", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Si nosotros (tener - ImperfectSubjunctive) valor, ayudaríamos.", verb: "tener", subject: "Nosotros", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Si yo (ser - ImperfectSubjunctive) valiente, no miraría de lejos.", verb: "ser", subject: "Yo", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Ojalá que ellos (poder - ImperfectSubjunctive) perdonarse.", verb: "poder", subject: "Ellos", tense: "ImperfectSubjunctive" },
            { type: 'FILL_IN_BLANK', sentence: "Yo (mirar) -> (mirar) -> (FILL IN THE BLANK) la tele cada noche.", answer: "miraba", hint: "Imperfect of mirar (Yo)" },
            { type: 'FILL_IN_BLANK', sentence: "Nosotros (ver) -> (ver) -> (FILL IN THE BLANK) la tragedia en directo.", answer: "vimos", hint: "Preterite of ver (Nosotros)" },
            { type: 'FILL_IN_BLANK', sentence: "Ellos (dar) -> (dar) -> (FILL IN THE BLANK) todo por nada.", answer: "dieron", hint: "Preterite of dar (Ellos)" },
            { type: 'FILL_IN_BLANK', sentence: "Tú (poder) -> (poder) -> (FILL IN THE BLANK) elegir otro camino.", answer: "podrás", hint: "Future of poder (Tú)" },
            { type: 'FILL_IN_BLANK', sentence: "Quiero que ellos (escuchar) -> (escuchar) -> (FILL IN THE BLANK) con atención.", answer: "escuchen", hint: "PresentSubjunctive of escuchar (Ellos)" },
            { type: 'FILL_IN_BLANK', sentence: "Vicariamente, yo (vivir) -> (FILL IN THE BLANK) mientras otros sufren. (present)", answer: "vivo", hint: "Present of vivir, yo" },
            { type: 'FILL_IN_BLANK', sentence: "Ellos (dividir) -> (FILL IN THE BLANK) todo en dos. (imperfect: used to)", answer: "dividían", hint: "Imperfect of dividir, ellos" },
            { type: 'FILL_IN_BLANK', sentence: "Nosotros (compartir) -> (FILL IN THE BLANK) si fuéramos sabios. (conditional)", answer: "compartiríamos", hint: "Conditional of compartir, nosotros" },
            { type: 'MULTIPLE_CHOICE', prompt: "'Ojalá que ellos ___ (aprender)' needs which form?", options: ["aprendan","aprenden","aprendían","aprenderán"], answer: "aprendan" },
            { type: 'MULTIPLE_CHOICE', prompt: "'Mientras ellos ___ (pelear), nosotros mirábamos.' Which tense (background action)?", options: ["peleaban","pelearon","pelearán","peleen"], answer: "peleaban" },
            { type: 'MULTIPLE_CHOICE', prompt: "'De repente, todos ___ (callar).' Which tense (sudden event)?", options: ["callaron","callaban","callarían","callen"], answer: "callaron" },
            { type: 'MULTIPLE_CHOICE', prompt: "'Si fuera valiente, ___ (ayudar).' Which form completes it?", options: ["ayudaría","ayudé","ayudaba","ayude"], answer: "ayudaría" }
        ]
    },

    "VICTOR_SCARF_STORY": {
        title: "Story: Víctor, the Scarf, and the Lizards",
        tags: ["story","mixed","preterite","imperfect","future","conditional","subjunctive"],
        intro: "Meet Víctor, an older man who lost his hair, wore a wool scarf on his head through scorching summers, and flirted with the lizards in his garden. Follow his story across eight parts (imperfect, preterite, present, future, conditional, and subjunctive) and discover the moral at the end: accept yourself, because your worth was never in your hair.",
        targetXP: 70,
        phrases: [
            { type: 'MULTIPLE_CHOICE', prompt: "'calvo' means...", options: ["bald","tall","lazy","old"], answer: "bald" },
            { type: 'MULTIPLE_CHOICE', prompt: "'la bufanda' means...", options: ["the scarf","the lizard","the summer","the hat"], answer: "the scarf" },
            { type: 'MULTIPLE_CHOICE', prompt: "'la lagartija' means...", options: ["the lizard","the butterfly","the snail","the frog"], answer: "the lizard" },
            { type: 'MULTIPLE_CHOICE', prompt: "'el calor' means...", options: ["the heat","the cold","the wind","the rain"], answer: "the heat" },
            { type: 'MULTIPLE_CHOICE', prompt: "'coquetear' means...", options: ["to flirt","to cook","to cough","to climb"], answer: "to flirt" },
            { type: 'MULTIPLE_CHOICE', prompt: "'el pelo' means...", options: ["hair","skin","shoe","pillow"], answer: "hair" },
            { type: 'CONJUGATE', sentence: "Víctor (ser - Imperfect) un hombre mayor y muy simpático.", verb: "ser", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Él (tener - Imperfect) sesenta y ocho años.", verb: "tener", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Víctor (vivir - Imperfect) en un pueblo muy caluroso.", verb: "vivir", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Todos los veranos (hacer - Imperfect) muchísimo calor.", verb: "hacer", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Cuando era joven, Víctor (tener - Imperfect) mucho pelo negro.", verb: "tener", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Sus amigos siempre (decir - Imperfect) que su pelo era increíble.", verb: "decir", subject: "Ellos", tense: "Imperfect" },
            { type: 'MULTIPLE_CHOICE', prompt: "What was Victor like as a young man?", options: ["He had lots of black hair","He was already bald","He wore a scarf","He lived by the sea"], answer: "He had lots of black hair" },
            { type: 'CONJUGATE', sentence: "Un día Víctor (descubrir - Preterite) que casi no tenía pelo.", verb: "descubrir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Esa mañana él (mirar - Preterite) el espejo durante una hora.", verb: "mirar", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Víctor no (poder - Preterite) creer lo que veía.", verb: "poder", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Su hermana (reír - Preterite) y luego le pidió perdón.", verb: "reír", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Él (decidir - Preterite) que nadie lo vería sin pelo.", verb: "decidir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Yo también (querer - Preterite) ayudarlo, pero no supe cómo.", verb: "querer", subject: "Yo", tense: "Preterite" },
            { type: 'MULTIPLE_CHOICE', prompt: "How did Victor react to going bald?", options: ["He decided nobody would see his head","He bought a wig shop","He moved away","He shaved the rest happily"], answer: "He decided nobody would see his head" },
            { type: 'CONJUGATE', sentence: "Víctor (usar - Imperfect) una bufanda de lana todos los días.", verb: "usar", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Incluso en julio, él (salir - Imperfect) de casa con la bufanda en la cabeza.", verb: "salir", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Los vecinos siempre lo (mirar - Imperfect) con curiosidad.", verb: "mirar", subject: "Ellos", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Él (beber - Imperfect) litros de agua para sobrevivir al calor.", verb: "beber", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Nosotros le (decir - Imperfect) que se quitara la bufanda.", verb: "decir", subject: "Nosotros", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Pero Víctor nunca nos (escuchar - Imperfect) .", verb: "escuchar", subject: "Él", tense: "Imperfect" },
            { type: 'FILL_IN_BLANK', sentence: "Victor wears a scarf in summer. -> Víctor usa una (FILL IN THE BLANK) en verano.", answer: "bufanda", hint: "Soft cloth worn on the head or neck" },
            { type: 'MULTIPLE_CHOICE', prompt: "Why was this funny and sad? Because...", options: ["it was 100°F outside","it was winter","he lived in Alaska","he sold scarves"], answer: "it was 100°F outside" },
            { type: 'CONJUGATE', sentence: "Cada tarde Víctor (caminar - Imperfect) al jardín.", verb: "caminar", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Allí (vivir - Imperfect) muchas lagartijas verdes.", verb: "vivir", subject: "Ellos", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Víctor les (hablar - Imperfect) con una sonrisa enorme.", verb: "hablar", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Él les (decir - Imperfect) piropos muy dramáticos.", verb: "decir", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Las lagartijas lo (escuchar - Imperfect) sin moverse.", verb: "escuchar", subject: "Ellos", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Una lagartija en particular, Lola, siempre lo (esperar - Imperfect) en la misma piedra.", verb: "esperar", subject: "Él", tense: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Víctor (cantar - Imperfect) canciones de amor para ella.", verb: "cantar", subject: "Él", tense: "Imperfect" },
            { type: 'MULTIPLE_CHOICE', prompt: "Who did Victor flirt with?", options: ["Lizards","Birds","Cats","His neighbors"], answer: "Lizards" },
            { type: 'MULTIPLE_CHOICE', prompt: "Where did Lola wait for Victor?", options: ["On the same rock","In his house","On the roof","At the market"], answer: "On the same rock" },
            { type: 'FILL_IN_BLANK', sentence: "Víctor (hablar) -> (hablar) -> (FILL IN THE BLANK) con las lagartijas cada tarde.", answer: "hablaba", hint: "Imperfect of hablar" },
            { type: 'FILL_IN_BLANK', sentence: "Las lagartijas (escuchar) -> (escuchar) -> (FILL IN THE BLANK) sin juzgar.", answer: "escuchaban", hint: "Imperfect of escuchar" },
            { type: 'CONJUGATE', sentence: "Un día de calor extremo, Víctor (salir - Preterite) al jardín con su bufanda.", verb: "salir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "De repente él (caer - Preterite) sobre la hierba por el calor.", verb: "caer", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Lola (venir - Preterite) corriendo hacia él.", verb: "venir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Todas las lagartijas lo (mirar - Preterite) preocupadas.", verb: "mirar", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Una vecina (ver - Preterite) la escena y llamó ayuda.", verb: "ver", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Los vecinos (correr - Preterite) al jardín.", verb: "correr", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Alguien le (dar - Preterite) agua fría.", verb: "dar", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Víctor (abrir - Preterite) los ojos despacio.", verb: "abrir", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Sin la bufanda, todos (ver - Preterite) su cabeza calva.", verb: "ver", subject: "Ellos", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Nadie (reír - Preterite) ; todos le sonrieron con cariño.", verb: "reír", subject: "Él", tense: "Preterite" },
            { type: 'CONJUGATE', sentence: "Víctor (comprender - Preterite) algo muy importante.", verb: "comprender", subject: "Él", tense: "Preterite" },
            { type: 'FILL_IN_BLANK', sentence: "Víctor (caer) -> (caer) -> (FILL IN THE BLANK) por el calor.", answer: "cayó", hint: "Preterite of caer" },
            { type: 'FILL_IN_BLANK', sentence: "Los vecinos (correr) -> (correr) -> (FILL IN THE BLANK) a ayudarlo.", answer: "corrieron", hint: "Preterite of correr" },
            { type: 'FILL_IN_BLANK', sentence: "Víctor (abrir) -> (abrir) -> (FILL IN THE BLANK) los ojos.", answer: "abrió", hint: "Preterite of abrir" },
            { type: 'MULTIPLE_CHOICE', prompt: "Why did Victor fall?", options: ["Extreme heat from the scarf","He tripped on a lizard","He was too sleepy","He was dancing"], answer: "Extreme heat from the scarf" },
            { type: 'MULTIPLE_CHOICE', prompt: "How did the neighbors react to his bald head?", options: ["With kindness","With laughter","They did not notice","They ran away"], answer: "With kindness" },
            { type: 'MULTIPLE_CHOICE', prompt: "Which tense describes the sudden fall? (De repente...)", options: ["Preterite","Imperfect","Conditional","Present"], answer: "Preterite" },
            { type: 'MULTIPLE_CHOICE', prompt: "Which tense describes what he used to do every summer?", options: ["Imperfect","Preterite","Future","Imperfect subjunctive"], answer: "Imperfect" },
            { type: 'CONJUGATE', sentence: "Hoy Víctor (ser - Present) un hombre más feliz.", verb: "ser", subject: "Él", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Él (tener - Present) la cabeza descubierta al sol (con sombrero).", verb: "tener", subject: "Él", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Yo (saber - Present) que el pelo no define a nadie.", verb: "saber", subject: "Yo", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Tú (poder - Present) aceptarte como eres.", verb: "poder", subject: "Tú", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Nosotros (querer - Present) a las personas por su corazón.", verb: "querer", subject: "Nosotros", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Las lagartijas (dar - Present) cariño sin pedir nada.", verb: "dar", subject: "Ellos", tense: "Present" },
            { type: 'CONJUGATE', sentence: "Mañana Víctor (salir - Future) sin bufanda.", verb: "salir", subject: "Él", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Él (hacer - Future) nuevos amigos.", verb: "hacer", subject: "Él", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Los vecinos lo (visitar - Future) más seguido.", verb: "visitar", subject: "Ellos", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Víctor (decir - Future) la verdad: \"Soy calvo y soy feliz\".", verb: "decir", subject: "Él", tense: "Future" },
            { type: 'CONJUGATE', sentence: "Si Víctor aceptara su cabeza, él (vivir - Conditional) sin vergüenza.", verb: "vivir", subject: "Él", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Tú (tener - Conditional) más confianza si te quisieras.", verb: "tener", subject: "Tú", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Nosotros (poder - Conditional) ayudarlo más.", verb: "poder", subject: "Nosotros", tense: "Conditional" },
            { type: 'CONJUGATE', sentence: "Quiero que Víctor (ser - PresentSubjunctive) feliz.", verb: "ser", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Espero que él (salir - PresentSubjunctive) sin miedo.", verb: "salir", subject: "Él", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Es importante que tú (querer - PresentSubjunctive) tu cuerpo.", verb: "querer", subject: "Tú", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Ojalá que todos (aprender - PresentSubjunctive) a respetar a los demás.", verb: "aprender", subject: "Ellos", tense: "PresentSubjunctive" },
            { type: 'CONJUGATE', sentence: "Víctor quería que la gente lo (ver - ImperfectSubjunctive) con cariño.", verb: "ver", subject: "Ellos", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Si Víctor (ser - ImperfectSubjunctive) más valiente, saldría sin bufanda.", verb: "ser", subject: "Él", tense: "ImperfectSubjunctive" },
            { type: 'CONJUGATE', sentence: "Si nosotros (tener - ImperfectSubjunctive) su valor, seríamos libres.", verb: "tener", subject: "Nosotros", tense: "ImperfectSubjunctive" },
            { type: 'FILL_IN_BLANK', sentence: "Ojalá que tú (ser) -> (ser) -> (FILL IN THE BLANK) amable con todos.", answer: "seas", hint: "PresentSubjunctive of ser" },
            { type: 'FILL_IN_BLANK', sentence: "Si yo (ser) -> (FILL IN THE BLANK) Víctor, saldría sin bufanda.", answer: "fuera", hint: "Imperfect subjunctive of ser, yo" },
            { type: 'MULTIPLE_CHOICE', prompt: "What is the MORAL of Victor's story?", options: ["Accept yourself; real worth is not in your hair","Always wear a scarf","Never talk to lizards","Hair is the most important thing"], answer: "Accept yourself; real worth is not in your hair" },
            { type: 'MULTIPLE_CHOICE', prompt: "Why did the lizards stay near Victor?", options: ["He was kind to them","He fed them candy","He had hair","He was rich"], answer: "He was kind to them" },
            { type: 'MULTIPLE_CHOICE', prompt: "What did Victor learn about hiding?", options: ["Hiding who you are hurts you more than the truth","Hiding is always safest","Scarves are healthy","Neighbors judge harshly"], answer: "Hiding who you are hurts you more than the truth" },
            { type: 'MULTIPLE_CHOICE', prompt: "'Ojalá que todos aprendan a respetar' expresses...", options: ["A wish","A past habit","A fact","A command"], answer: "A wish" },
            { type: 'MULTIPLE_CHOICE', prompt: "'Si fuera valiente, saldría' means...", options: ["If he were brave, he would go out","He went out bravely","He will be brave","He is going out"], answer: "If he were brave, he would go out" }
        ]
    }
};
// Learning path order (used by the homepage path). Any lesson not listed is shown in an extra "More" stage.
const LESSON_PATH = [
    { stage: 'Greeting Practice', icon: '👋', ids: ['GREET_SMALLTALK','GREET_SAFARI'] },
    { stage: 'Starter', icon: '🌱', ids: ['GREETINGS', 'POLITE_PHRASES', 'SER_ESTAR_BASIC', 'AR_VERBS_SIMPLE', 'NUMBERS_DAYS', 'LISTENING_BASICS'] },
    { stage: 'Core Vocabulary', icon: '📖', ids: ['VOCAB', 'MC_BASICS', 'TRANSLATE', 'CITY_SUBURBS', 'ADJECTIVES'] },
    { stage: 'Tenses', icon: '⏳', ids: ['PRETERIT', 'IMPERFECT', 'FUTURE_TENSE', 'CONDITIONAL'] },
    { stage: 'Grammar Skills', icon: '🧩', ids: ['DOP', 'COMMANDS', 'POR_PARA'] },
    { stage: 'Pronoun Skills', icon: '🧩', ids: ['IOP_EASY','IOP_HARD','DOP_EASY','DOP_HARD','REFLEX_EASY','REFLEX_HARD','PRONOUN_MIX_1','PRONOUN_MIX_2'] },
    { stage: 'Everyday Grammar', icon: '🌴', ids: ['TENER_WEATHER','PROGRESSIVE_NOW','PLANS_INVITES'] },
    { stage: 'Adventures', icon: '🐴', ids: ['HORSE_LAME','BEACH_DATE','RESTAURANT'] },
    { stage: 'Story Time', icon: '📕', ids: ['RODRIGOS_STORY','VICTOR_SCARF_STORY'] },
    { stage: 'Tense Deep Dives', icon: '🔬', ids: ['PRET_REGULAR_DRILL', 'PRET_IRREGULAR_DRILL', 'PRET_STEM_SPELLING_DRILL', 'IMPERFECT_DRILL', 'PRET_IMPERF_STORY', 'FUTURE_CONDITIONAL_DRILL', 'SUBJ_PRESENT_DRILL', 'SUBJ_IMPERFECT_DRILL'] },
    { stage: 'Tool Boss: Vicariously Divided', icon: '🌀', ids: ['TOOL_VICARIOUS_RIGHT_IN_TWO'] },
    { stage: 'Boss Levels', icon: '🐲', ids: ['SER_ESTAR', 'PRESENT_SUBJUNCTIVE', 'MIXED_BOSS_LEVEL'] },
    { stage: 'Premium Packs', icon: '💎', ids: ['BUSINESS_SPANISH_1', 'MEDICAL_SPANISH_1'] },
];