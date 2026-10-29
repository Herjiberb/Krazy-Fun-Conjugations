// ====================================================================
// KFC: Krazy Fun Conjugations - Tutorial Data File (tutorials.js)
// 
// This file contains structured tutorials for core grammar concepts.
// ====================================================================

const TUTORIALS_DATA = {
    "T_PRETERIT_I": {
        title: "Preterit Tense I: Regular Verbs (-ar)",
        tags: ["preterite","ar-verbs"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "The **Preterit Tense** is used to describe actions completed in the past. Think of it as 'what happened.' Let's start with regular **-AR** verbs (like *Hablar* - to speak).",
        content: [
            { 
                type: "TEXT", 
                prompt: "### **-AR Verb Endings (Preterit)**",
                html: `
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Ending</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Hablar)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;">**-é**</td><td style="border: 1px solid #ccc; padding: 8px;">Hablé</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;">**-aste**</td><td style="border: 1px solid #ccc; padding: 8px;">Hablaste</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Él/Ella/Ud.</td><td style="border: 1px solid #ccc; padding: 8px;">**-ó**</td><td style="border: 1px solid #ccc; padding: 8px;">Habló</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;">**-amos**</td><td style="border: 1px solid #ccc; padding: 8px;">Hablamos (Same as Present!)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos/Uds.</td><td style="border: 1px solid #ccc; padding: 8px;">**-aron**</td><td style="border: 1px solid #ccc; padding: 8px;">Hablaron</td></tr>
                    </table>
                    <p>🚨 **Careful!** The *Yo* (**-é**) and *Él/Ella/Ud.* (**-ó**) forms need an accent to distinguish them from other tenses.</p>`
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "I spoke with my friend yesterday. -> Yo (FILL IN THE BLANK) con mi amigo ayer.",
                hint: "Use Hablar (Yo) preterit. Remember the accent!",
                answer: "Hablé"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "She studied all night. -> Ella (FILL IN THE BLANK) toda la noche.",
                hint: "Use Estudiar (Ella) preterit. Remember the accent!",
                answer: "Estudió"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "They bought the books. -> Ellos (FILL IN THE BLANK) los libros.",
                hint: "Use Comprar (Ellos) preterit.",
                answer: "Compraron"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "We walked to the beach. -> Nosotros (FILL IN THE BLANK) a la playa.",
                hint: "Use Caminar (Nosotros) preterit.",
                answer: "Caminamos"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "You (Tú) started the game. -> Tú (FILL IN THE BLANK) el partido.",
                hint: "Use Empezar (Tú) preterit.",
                answer: "Empezaste"
            },
            { 
                type: "TEXT", 
                prompt: "Well done! Move on to Part II for -ER/-IR verbs.",
                html: ""
            }
        ]
    },
    "T_PRETERIT_II": {
        title: "Preterit Tense II: Regular Verbs (-er & -ir)",
        tags: ["preterite"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Now let's tackle regular **-ER** and **-IR** verbs (like *Comer* - to eat, and *Vivir* - to live). The endings are very similar to each other!",
        content: [
            { 
                type: "TEXT", 
                prompt: "### **-ER / -IR Verb Endings (Preterit)**",
                html: `
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">-ER Ending (Comer)</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">-IR Ending (Vivir)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;">**-í** (Comí)</td><td style="border: 1px solid #ccc; padding: 8px;">**-í** (Viví)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;">**-iste** (Comiste)</td><td style="border: 1px solid #ccc; padding: 8px;">**-iste** (Viviste)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Él/Ella/Ud.</td><td style="border: 1px solid #ccc; padding: 8px;">**-ió** (Comió)</td><td style="border: 1px solid #ccc; padding: 8px;">**-ió** (Vivió)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;">**-imos** (Comimos)</td><td style="border: 1px solid #ccc; padding: 8px;">**-imos** (Vivimos)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos/Uds.</td><td style="border: 1px solid #ccc; padding: 8px;">**-ieron** (Comieron)</td><td style="border: 1px solid #ccc; padding: 8px;">**-ieron** (Vivieron)</td></tr>
                    </table>
                    <p>Remember those **accents** on the *Yo* and *Él/Ella/Ud.* forms!</p>`
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "I lived in that house. -> Yo (FILL IN THE BLANK) en esa casa.",
                hint: "Use Vivir (Yo) preterit. Accent!",
                answer: "Viví"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "We ate dinner at seven. -> Nosotros (FILL IN THE BLANK) la cena a las siete.",
                hint: "Use Comer (Nosotros) preterit.",
                answer: "Comimos"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "You (Ud.) understood the lesson. -> Usted (FILL IN THE BLANK) la lección.",
                hint: "Use Comprender (Ud.) preterit. Accent!",
                answer: "Comprendió"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "The girls wrote the letters. -> Ellas (FILL IN THE BLANK) las cartas.",
                hint: "Use Escribir (Ellas) preterit.",
                answer: "Escribieron"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "I received the package. -> Yo (FILL IN THE BLANK) el paquete.",
                hint: "Use Recibir (Yo) preterit. Accent!",
                answer: "Recibí"
            },
            { 
                type: "TEXT", 
                prompt: "Great! Part III covers irregulars that you must know.",
                html: ""
            }
        ]
    },
    "T_PRETERIT_III": {
        title: "Preterit Tense III: The Irregulars (Ser, Ir, Hacer)",
        tags: ["preterite"],
        targetXP: 12,
        type: "TUTORIAL",
        intro: "Some of the most common verbs are also the most irregular! You simply have to memorize the preterit conjugations for **Ser** (to be), **Ir** (to go), and **Hacer** (to do/make).",
        content: [
            { 
                type: "TEXT", 
                prompt: "### **Ser & Ir (Preterit)**",
                html: `
                    <p>The preterit of **Ser** (to be) and **Ir** (to go) are **identical**! Context determines the meaning.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Conjugation</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Meaning (Ser)</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Meaning (Ir)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;">**fui**</td><td style="border: 1px solid #ccc; padding: 8px;">I was</td><td style="border: 1px solid #ccc; padding: 8px;">I went</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Él/Ella/Ud.</td><td style="border: 1px solid #ccc; padding: 8px;">**fue**</td><td style="border: 1px solid #ccc; padding: 8px;">He/She was</td><td style="border: 1px solid #ccc; padding: 8px;">He/She went</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos/Uds.</td><td style="border: 1px solid #ccc; padding: 8px;">**fueron**</td><td style="border: 1px solid #ccc; padding: 8px;">They were</td><td style="border: 1px solid #ccc; padding: 8px;">They went</td></tr>
                    </table>
                    <p>Note: These forms have **NO accents**!</p>
                    
                    <h3>**Hacer (Preterit)**</h3>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Conjugation</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;">**hice**</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;">**hiciste**</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Él/Ella/Ud.</td><td style="border: 1px solid #ccc; padding: 8px;">**hizo** 🚨</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;">**hicimos**</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos/Uds.</td><td style="border: 1px solid #ccc; padding: 8px;">**hicieron**</td></tr>
                    </table>
                    <p>🚨 **Hacer** changes its stem to **hic-** and the *Él/Ella/Ud.* form is **hizo** (with a **Z** to avoid *hico*). Also **no accents**!</p>
                `
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "I went to the museum. -> Yo (FILL IN THE BLANK) al museo.",
                hint: "Use Ir (Yo) preterit.",
                answer: "fui"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "She was my teacher. -> Ella (FILL IN THE BLANK) mi maestra.",
                hint: "Use Ser (Ella) preterit.",
                answer: "fue"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "We made a delicious cake. -> Nosotros (FILL IN THE BLANK) un pastel delicioso.",
                hint: "Use Hacer (Nosotros) preterit.",
                answer: "hicimos"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "They did the homework. -> Ellos (FILL IN THE BLANK) la tarea.",
                hint: "Use Hacer (Ellos) preterit.",
                answer: "hicieron"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "He went to the beach. -> Él (FILL IN THE BLANK) a la playa.",
                hint: "Use Ir (Él) preterit.",
                answer: "fue"
            },
            { 
                type: "FILL_IN_BLANK", 
                prompt: "I made the reservation. -> Yo (FILL IN THE BLANK) la reservación.",
                hint: "Use Hacer (Yo) preterit.",
                answer: "hice"
            },
            { 
                type: "TEXT", 
                prompt: "Congratulations! You completed the Preterit Tutorials! Time to try the Lessons!",
                html: ""
            }
        ]
    },
    // ====================================================================
    // ⏳ IMPERFECT TENSE
    // ====================================================================
    "T_IMPERFECT_I": {
        title: "Imperfect I: Regular -AR Verbs (Hablar, Caminar...)",
        tags: ["imperfect","ar-verbs"],
        targetXP: 8,
        type: "TUTORIAL",
        intro: "The **Imperfect tense** describes ongoing, habitual, or background actions in the past. Think 'used to do' or 'was doing.' Let's start with regular **-AR** verbs.",
        content: [
            {
                type: "TEXT",
                prompt: "### **-AR Verb Endings (Imperfect)**",
                html: `
                    <p>To form the imperfect, drop the <strong>-AR</strong> ending and add the appropriate ending below. All forms except *Nosotros* have the same stem stress.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Ending</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Hablar)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-aba</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Yo hablaba</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-abas</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Tú hablabas</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Él/Ella/Usted</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-aba</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Él hablaba</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-ábamos</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Nosotros hablábamos</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos/Ellas/Ustedes</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-aban</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Ellos hablaban</td></tr>
                    </table>
                `
            },
            {
                type: "TEXT",
                prompt: "### Usage: Habitual Actions",
                html: "<p>The imperfect is perfect for describing things you <strong>used to do</strong> regularly. For example, to say 'I used to walk to school,' you would use the imperfect form of <strong>caminar</strong>.</p>"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We used to sing in the church choir. -> Nosotros (FILL IN THE BLANK) en el coro de la iglesia. (Cantar)",
                hint: "Use the Nosotros form of Cantar in the imperfect.",
                answer: "cantábamos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She always worked on Saturdays. -> Ella siempre (FILL IN THE BLANK) los sábados. (Trabajar)",
                hint: "Use the Él/Ella form of Trabajar in the imperfect.",
                answer: "trabajaba"
            },
            {
                type: "TEXT",
                prompt: "### Usage: Background Descriptions",
                html: "<p>You also use the imperfect for descriptions of people, places, and conditions in the past (e.g., 'The house **was** big,' or 'It **was** raining').</p>"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The girls played soccer every day. -> Las chicas (FILL IN THE BLANK) al fútbol todos los días. (Jugar)",
                hint: "Use the Ellos/Ellas form of Jugar in the imperfect.",
                answer: "jugaban"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I was looking for my keys. -> Yo (FILL IN THE BLANK) mis llaves. (Buscar)",
                hint: "Use the Yo form of Buscar in the imperfect.",
                answer: "buscaba"
            }
        ]
    },
    "T_IMPERFECT_II": {
        title: "Imperfect II: Regular -ER / -IR Verbs (Comer, Vivir...)",
        tags: ["imperfect"],
        targetXP: 8,
        type: "TUTORIAL",
        intro: "For regular **-ER** and **-IR** verbs, the imperfect endings are the same. This makes learning them a bit easier!",
        content: [
            {
                type: "TEXT",
                prompt: "### **-ER / -IR Verb Endings (Imperfect)**",
                html: `
                    <p>To form the imperfect for -ER and -IR verbs, drop the ending and add the appropriate ending below. Remember the accent on the <strong>-í</strong> in all forms.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Ending</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Comer/Vivir)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-ía</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Yo comía / Yo vivía</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-ías</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Tú comías / Tú vivías</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Él/Ella/Usted</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-ía</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Él comía / Ella vivía</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-íamos</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Nosotros comíamos / vivíamos</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos/Ellas/Ustedes</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-ían</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Ellos comían / Ellas vivían</td></tr>
                    </table>
                `
            },
            {
                type: "TEXT",
                prompt: "### Practice: -ER Verbs (Leer, Beber, Vender)",
                html: "<p>Remember that the imperfect focuses on the **duration** or **frequency** of the action in the past, not when it finished.</p>"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "You (singular, informal) always read the newspaper. -> Tú siempre (FILL IN THE BLANK) el periódico. (Leer)",
                hint: "Use the Tú form of Leer in the imperfect.",
                answer: "leías"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They used to drink a lot of coffee. -> Ellos (FILL IN THE BLANK) mucho café. (Beber)",
                hint: "Use the Ellos form of Beber in the imperfect.",
                answer: "bebían"
            },
            {
                type: "TEXT",
                prompt: "### Practice: -IR Verbs (Escribir, Abrir, Permitir)",
                html: "<p>Since the endings are the same for -ER and -IR, your focus should be on correctly placing the accent mark on the **í**.</p>"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I was writing a letter to my friend. -> Yo (FILL IN THE BLANK) una carta a mi amigo. (Escribir)",
                hint: "Use the Yo form of Escribir in the imperfect.",
                answer: "escribía"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We lived in Madrid when we were young. -> Nosotros (FILL IN THE BLANK) en Madrid cuando éramos jóvenes. (Vivir)",
                hint: "Use the Nosotros form of Vivir in the imperfect.",
                answer: "vivíamos"
            }
        ]
    },
    "T_IMPERFECT_III": {
        title: "Imperfect III: Irregulars (Ser, Ir, Ver)",
        tags: ["imperfect"],
        targetXP: 12,
        type: "TUTORIAL",
        intro: "Good news! Only three verbs are irregular in the Spanish imperfect tense: **Ser** (to be), **Ir** (to go), and **Ver** (to see). You must memorize these three!",
        content: [
            {
                type: "TEXT",
                prompt: "### **Irregular 1: Ir (To go)**",
                html: `
                    <p>The verb <strong>Ir</strong> (to go) becomes <strong>iba</strong> in the imperfect. This is used to describe where someone <strong>used to go</strong>.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Conjugation</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>iba</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>íbamos</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We used to go to the park every day. -> Nosotros (FILL IN THE BLANK) al parque todos los días. (Ir)",
                hint: "Use the Nosotros form of Ir in the imperfect.",
                answer: "íbamos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "He was going to the beach when it started raining. -> Él (FILL IN THE BLANK) a la playa cuando empezó a llover. (Ir)",
                hint: "Use the Él/Ella form of Ir in the imperfect.",
                answer: "iba"
            },
            {
                type: "TEXT",
                prompt: "### **Irregular 2: Ser (To be - permanent)**",
                html: `
                    <p>The verb <strong>Ser</strong> (to be) becomes <strong>era</strong> in the imperfect. This is essential for describing what things or people **were** like in the past.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Conjugation</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>eras</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>eran</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The house was big and beautiful. -> La casa (FILL IN THE BLANK) grande y bella. (Ser)",
                hint: "Use the Él/Ella form of Ser in the imperfect.",
                answer: "era"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "You (plural, formal) were excellent students. -> Ustedes (FILL IN THE BLANK) estudiantes excelentes. (Ser)",
                hint: "Use the Ellos/Ellas form of Ser in the imperfect.",
                answer: "eran"
            },
            {
                type: "TEXT",
                prompt: "### **Irregular 3: Ver (To see)**",
                html: `
                    <p>The verb <strong>Ver</strong> (to see) becomes <strong>veía</strong> in the imperfect. Notice it is the regular -ER/-IR ending, but it keeps the initial 'e' from the stem (v-e-ía).</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Conjugation</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>veía</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>veíamos</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I saw the clouds from the window. -> Yo (FILL IN THE BLANK) las nubes por la ventana. (Ver)",
                hint: "Use the Yo form of Ver in the imperfect.",
                answer: "veía"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "Did you (singular, informal) ever see the concert? -> ¿Tú (FILL IN THE BLANK) el concierto alguna vez? (Ver)",
                hint: "Use the Tú form of Ver in the imperfect.",
                answer: "veías"
            },
            {
                type: "TEXT",
                prompt: "### Summary: The Big Three",
                html: "<p>Remember: If the verb isn't **Ir**, **Ser**, or **Ver**, it's conjugated regularly in the imperfect!</p>"
            }
        ]
    },
    // ====================================================================
    // ✅ PRESENT TENSE
    // ====================================================================
    "T_PRESENT_I": {
        title: "Present I: Regular -AR Verbs (Hablar, Bailar...)",
        tags: ["present","ar-verbs"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "The present tense expresses habitual actions, general truths, and things happening now. We'll start with the most common type: regular **-AR** verbs.",
        content: [
            {
                type: "TEXT",
                prompt: "### **-AR Verb Endings (Present)**",
                html: `
                    <p>To conjugate a regular -AR verb, drop the <strong>-AR</strong> and add the ending.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Ending</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Bailar)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-o</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Yo bailo</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-as</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Tú bailas</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Él/Ella/Usted</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-a</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Él baila</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-amos</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Nosotros bailamos</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos/Ellas/Ustedes</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-an</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Ellos bailan</td></tr>
                    </table>
                `
            },
            {
                type: "TEXT",
                prompt: "### Usage: Habits and Facts",
                html: "<p>The Spanish present tense can be translated in three ways: 'I speak,' 'I do speak,' or 'I am speaking.' The context usually makes the meaning clear.</p>"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I talk to my grandmother every Sunday. -> Yo (FILL IN THE BLANK) con mi abuela todos los domingos. (Hablar)",
                hint: "Use the Yo form of Hablar in the present.",
                answer: "hablo"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They walk to the market. -> Ellos (FILL IN THE BLANK) al mercado. (Caminar)",
                hint: "Use the Ellos/Ellas form of Caminar in the present.",
                answer: "caminan"
            },
            {
                type: "TEXT",
                prompt: "### Practice: Focusing on -AR",
                html: "<p>Remember that the **Nosotros** form always keeps the original stem and is not a stem-changer for regular verbs.</p>"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "You (singular, informal) travel a lot for work. -> Tú (FILL IN THE BLANK) mucho por trabajo. (Viajar)",
                hint: "Use the Tú form of Viajar in the present.",
                answer: "viajas"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She buys a new book every month. -> Ella (FILL IN THE BLANK) un libro nuevo cada mes. (Comprar)",
                hint: "Use the Él/Ella form of Comprar in the present.",
                answer: "compra"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We have 1,000 rabbits.. -> Nosotros (FILL IN THE BLANK) mil conejos. (Tener)",
                hint: "Use the Nosotros form of Tener in the present.",
                answer: "tenemos"
            }
        ]
    },
    "T_PRESENT_II": {
        title: "Present II: Regular -ER / -IR & Stem-Changers (Comer, Vivir, Dormir)",
        tags: ["present"],
        targetXP: 8,
        type: "TUTORIAL",
        intro: "Present for **-ER** and **-IR** verbs shares many of the same endings. We will also introduce **stem-changing verbs**, which change their vowel in all forms except *Nosotros* and *Vosotros*.",
        content: [
            {
                type: "TEXT",
                prompt: "### **-ER / -IR Verb Endings (Present)**",
                html: `
                    <p>Note how similar the endings are. The main difference is the vowel (**E** for -ER, **I** for -IR) in the *Nosotros* and *Vosotros* forms.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">-ER (Comer)</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">-IR (Vivir)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;">como</td><td style="border: 1px solid #ccc; padding: 8px;">vivo</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;">comes</td><td style="border: 1px solid #ccc; padding: 8px;">vives</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>comemos</strong></td><td style="border: 1px solid #ccc; padding: 8px;"><strong>vivimos</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I live in a small town. -> Yo (FILL IN THE BLANK) en un pueblo pequeño. (Vivir)",
                hint: "Use the Yo form of Vivir.",
                answer: "vivo"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We eat dinner at seven. -> Nosotros (FILL IN THE BLANK) la cena a las siete. (Comer)",
                hint: "Use the Nosotros form of Comer.",
                answer: "comemos"
            },
            {
                type: "TEXT",
                prompt: "### Stem-Changing Verbs (Boot Verbs)",
                html: `
                    <p>Some verbs change the vowel in their stem in all forms except **Nosotros** and **Vosotros** (the 'boot' forms). Common changes are <strong>O → UE</strong> (Dormir, Poder) and <strong>E → IE</strong> (Querer, Empezar).</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Verb Type</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Change</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Dormir)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">O to UE</td><td style="border: 1px solid #ccc; padding: 8px;">D<strong>o</strong>rmir → D<strong>ue</strong>rmo</td><td style="border: 1px solid #ccc; padding: 8px;">Tú duermes, Ellos duermen</td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They sleep eight hours every night. -> Ellos (FILL IN THE BLANK) ocho horas cada noche. (Dormir, O→UE)",
                hint: "Remember the stem change in the Ellos form.",
                answer: "duermen"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I want to travel next year. -> Yo (FILL IN THE BLANK) viajar el año que viene. (Querer, E→IE)",
                hint: "Remember the stem change in the Yo form.",
                answer: "quiero"
            },
            {
                type: "TEXT",
                prompt: "### The E → I Change",
                html: "<p>A few -IR verbs have an <strong>E → I</strong> change (e.g., Pedir, Servir). The pattern is the same: the change occurs in all forms except Nosotros and Vosotros (e.g., Yo p**i**do, Nosotros p**e**dimos).</p>"
            }
        ]
    },
    "T_PRESENT_III": {
        title: "Present III: Irregulars (Ser, Estar, Ir, Tener)",
        tags: ["present","ser-estar"],
        targetXP: 12,
        type: "TUTORIAL",
        intro: "There are many important verbs that are irregular in the present tense. We will focus on four of the most critical: **Ser, Estar, Ir,** and **Tener**.",
        content: [
            {
                type: "TEXT",
                prompt: "### **Irregular 1 & 2: Ser vs. Estar (To Be)**",
                html: `
                    <p>These two verbs are used for 'to be' but have completely different sets of conjugations and uses (DOCTOR vs. PLACE).</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Ser (Permanent)</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Estar (Temporary/Location)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>soy</strong></td><td style="border: 1px solid #ccc; padding: 8px;"><strong>estoy</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>eres</strong></td><td style="border: 1px solid #ccc; padding: 8px;"><strong>estás</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>son</strong></td><td style="border: 1px solid #ccc; padding: 8px;"><strong>están</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I am a student from Spain. -> Yo (FILL IN THE BLANK) estudiante de España. (To Be - Origin)",
                hint: "Use the Yo form of Ser.",
                answer: "soy"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We are at the library right now. -> Nosotros (FILL IN THE BLANK) en la biblioteca ahora mismo. (To Be - Location)",
                hint: "Use the Nosotros form of Estar.",
                answer: "estamos"
            },
            {
                type: "TEXT",
                prompt: "### **Irregular 3: Ir (To go)**",
                html: `
                    <p>The verb <strong>Ir</strong> (to go) is a strong irregular verb. It is also used to form the immediate future: **Ir + a + [Infinitive]** (e.g., *Voy a comer* - I am going to eat).</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Conjugation</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>voy</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>vamos</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We are going to the cinema tonight. -> Nosotros (FILL IN THE BLANK) al cine esta noche. (Ir)",
                hint: "Use the Nosotros form of Ir.",
                answer: "vamos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "Where are you (singular, informal) going? -> ¿A dónde (FILL IN THE BLANK) tú? (Ir)",
                hint: "Use the Tú form of Ir.",
                answer: "vas"
            },
            {
                type: "TEXT",
                prompt: "### **Irregular 4: Tener (To have)**",
                html: `
                    <p>The verb <strong>Tener</strong> (to have) is both a **G-verb** (ending in -go in the Yo form) and a **Stem-Changer** (e -> ie in all 'boot' forms).</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Conjugation</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>tengo</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Él/Ella/Usted</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>tiene</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They have a big dog. -> Ellos (FILL IN THE BLANK) un perro grande. (Tener)",
                hint: "Use the Ellos/Ellas form of Tener (e→ie stem change).",
                answer: "tienen"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I am thirty years old. -> Yo (FILL IN THE BLANK) treinta años. (Tener)",
                hint: "Use the Yo form of Tener (g-verb).",
                answer: "tengo"
            }
        ]
    },
    // ====================================================================
    // ✨ CONDITIONAL TENSE
    // ====================================================================
    "T_CONDITIONAL_I": {
        title: "Conditional I: Regular Conditional (Would...)",
        tags: ["conditional","politeness"],
        targetXP: 8,
        type: "TUTORIAL",
        intro: "The Conditional tense expresses what **would** happen or what someone **would** do. It's often used for polite requests or hypothetical situations.",
        content: [
            {
                type: "TEXT",
                prompt: "### **Regular Conditional Endings**",
                html: `
                    <p>To form the conditional, you simply use the **full infinitive** of the verb (e.g., *hablar*, *comer*, *vivir*) and add the imperfect endings of the **-ER/-IR** group.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Ending</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Hablar)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-ía</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Yo hablaría</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-ías</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Tú hablarías</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-íamos</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Nosotros hablaríamos</td></tr>
                    </table>
                `
            },
            {
                type: "TEXT",
                prompt: "### Conjugation Rules",
                html: "<p>The key point is that the endings are identical for all verb types (-AR, -ER, -IR). You never drop the infinitive ending.</p>"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We would eat dinner later. -> Nosotros (FILL IN THE BLANK) la cena más tarde. (Comer)",
                hint: "Use the Nosotros form of Comer in the conditional.",
                answer: "comeríamos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I would live in a big city. -> Yo (FILL IN THE BLANK) en una ciudad grande. (Vivir)",
                hint: "Use the Yo form of Vivir in the conditional.",
                answer: "viviría"
            },
            {
                type: "TEXT",
                prompt: "### Usage: Polite Requests",
                html: "<p>The conditional is often used to soften a request, making it more polite than the present tense.</p>"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "Would you (formal) help me with this box? -> ¿Me (FILL IN THE BLANK) con esta caja? (Ayudar)",
                hint: "Use the Usted form of Ayudar in the conditional.",
                answer: "ayudaría"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They would buy a car if they had money. -> Ellos (FILL IN THE BLANK) un coche si tuvieran dinero. (Comprar)",
                hint: "Use the Ellos/Ellas form of Comprar in the conditional.",
                answer: "comprarían"
            }
        ]
    },
    "T_CONDITIONAL_II": {
        title: "Conditional II: Irregular Stems (Tendr-, Har-, Saldr-...)",
        tags: ["conditional","future"],
        targetXP: 14,
        type: "TUTORIAL",
        intro: "Some verbs change their stem in the conditional (and future) tense. The endings are still the regular conditional endings (-ía, -ías, etc.), but they are added to the new, irregular stem.",
        content: [
            {
                type: "TEXT",
                prompt: "### **Irregular Stems: Dropping the vowel**",
                html: `
                    <p>Some verbs drop the vowel of the infinitive ending (e.g., <strong>E</strong> from -er) before adding the conditional endings.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Infinitive</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Stem</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Yo)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Hacer (To do/make)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>har-</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Yo haría</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Decir (To say/tell)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>dir-</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Tú dirías</td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "What would you (singular, informal) say? -> ¿Qué (FILL IN THE BLANK) tú? (Decir)",
                hint: "Use the Tú form with the irregular stem 'dir-'.",
                answer: "dirías"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I would make a cake for the party. -> Yo (FILL IN THE BLANK) un pastel para la fiesta. (Hacer)",
                hint: "Use the Yo form with the irregular stem 'har-'.",
                answer: "haría"
            },
            {
                type: "TEXT",
                prompt: "### **Irregular Stems: Adding the 'R'**",
                html: `
                    <p>These verbs insert an **R** into the stem before adding the conditional endings.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Infinitive</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Stem</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Él)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tener (To have)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>tendr-</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Él tendría</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Poner (To put)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>pondr-</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Usted pondría</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Salir (To leave)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>saldr-</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Ellos saldrían</td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We would have a better view. -> Nosotros (FILL IN THE BLANK) una vista mejor. (Tener)",
                hint: "Use the Nosotros form with the irregular stem 'tendr-'.",
                answer: "tendríamos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They would leave at eight o'clock. -> Ellos (FILL IN THE BLANK) a las ocho. (Salir)",
                hint: "Use the Ellos/Ellas form with the irregular stem 'saldr-'.",
                answer: "saldrían"
            },
            {
                type: "TEXT",
                prompt: "### **Irregular Stems: Querer, Saber, Poder**",
                html: `
                    <p>These three common verbs also follow the 'R' insertion rule, sometimes changing an internal vowel.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Querer (To want)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>querr-</strong> (Yo querría)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Saber (To know)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>sabr-</strong> (Tú sabrías)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Poder (To be able to)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>podr-</strong> (Ellos podrían)</td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I wouldn't want to go alone. -> Yo no (FILL IN THE BLANK) ir solo. (Querer)",
                hint: "Use the Yo form with the irregular stem 'querr-'.",
                answer: "querría"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "You (formal) could open the door. -> Usted (FILL IN THE BLANK) abrir la puerta. (Poder)",
                hint: "Use the Usted form with the irregular stem 'podr-'.",
                answer: "podría"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "What would we know about that situation? -> ¿Qué (FILL IN THE BLANK) de esa situación? (Saber)",
                hint: "Use the Nosotros form with the irregular stem 'sabr-'.",
                answer: "sabríamos"
            }
        ]
    },
    "T_CONDITIONAL_III": {
        title: "Conditional III: Si-clauses & Conditional Perfect (Would have...)",
        tags: ["conditional"],
        targetXP: 12,
        type: "TUTORIAL",
        intro: "The Conditional is key in **Si-clauses** (If... then...), which express improbable or hypothetical events. We will also learn the **Conditional Perfect**, which expresses 'would have done.'",
        content: [
            {
                type: "TEXT",
                prompt: "### **Hypothetical Si-Clauses (Imperfect Subjunctive + Conditional)**",
                html: `
                    <p>To talk about what **would** happen if a certain improbable condition **were** true, you use the following structure:</p>
                    <p><strong>Si + [Imperfect Subjunctive]</strong> (The Condition)<strong>, [Conditional]</strong> (The Result)</p>
                    <p>Example: <em>Si yo tuviera dinero, viajaría.</em> (If I had money, I would travel.)</p>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "If we had time, we would visit the museum. -> Si tuviéramos tiempo, (FILL IN THE BLANK) el museo. (Visitar)",
                hint: "Use the Nosotros form of Visitar in the conditional.",
                answer: "visitaríamos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I would be happy if I lived in the country. -> Yo (FILL IN THE BLANK) feliz si viviera en el campo. (Ser - Irregular Conditional)",
                hint: "Use the Yo form of Ser in the conditional (stem: ser-).",
                answer: "sería"
            },
            {
                type: "TEXT",
                prompt: "### **Conditional Perfect: 'Would Have Done'**",
                html: `
                    <p>The Conditional Perfect is used to express an action that **would have** occurred but didn't. It is formed using the conditional of **haber** and the **past participle**.</p>
                    <p><strong>Haber (Conditional) + Past Participle (-ado / -ido)</strong></p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Haber Conditional</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Hablar)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>habría</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Yo habría hablado</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>habrían</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Ellos habrían hablado</td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "You (singular, informal) would have seen the end of the movie. -> Tú (FILL IN THE BLANK) el final de la película. (Ver - Irregular Participle)",
                hint: "Conditional of Haber (Tú) + past participle of Ver (visto).",
                answer: "habrías visto"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We would have returned the gift, but the store was closed. -> Nosotros (FILL IN THE BLANK) el regalo, pero la tienda estaba cerrada. (Devolver - Irregular Participle)",
                hint: "Conditional of Haber (Nosotros) + past participle of Devolver (devuelto).",
                answer: "habríamos devuelto"
            },
            {
                type: "TEXT",
                prompt: "### **Conditional Perfect in Past Si-Clauses**",
                html: "<p>The Conditional Perfect is used when the consequence of a past action is expressed (e.g., *Si hubieras estudiado, habrías aprobado* - If you had studied, you would have passed).</p>"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I would have worked, but I was sick. -> Yo (FILL IN THE BLANK), pero estaba enfermo. (Trabajar)",
                hint: "Conditional of Haber (Yo) + past participle of Trabajar (trabajado).",
                answer: "habría trabajado"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They would have done the homework. -> Ellos (FILL IN THE BLANK) la tarea. (Hacer - Irregular Participle)",
                hint: "Conditional of Haber (Ellos) + past participle of Hacer (hecho).",
                answer: "habrían hecho"
            }
        ]
    },
    "T_FUTURE_I": {
        title: "Future I: Regular Future (I will...)",
        tags: ["future","ar-verbs"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "The Future tense expresses what **will** happen. All verbs (-AR, -ER, -IR) use the same endings, which are added to the **full infinitive**.",
        content: [
            {
                type: "TEXT",
                prompt: "### **Regular Future Endings**",
                html: `
                    <p>The stem is the entire infinitive (e.g., *hablar*, *comer*, *vivir*). The endings are the same for every verb, and every ending has an accent mark.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Ending</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Comer)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-é</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Yo comer<strong>é</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-emos</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Nosotros comer<strong>emos</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I will talk to the boss tomorrow. -> Yo (FILL IN THE BLANK) con el jefe mañana. (Hablar)",
                hint: "Use the Yo form of Hablar in the future tense.",
                answer: "hablaré"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We will live in the country. -> Nosotros (FILL IN THE BLANK) en el campo. (Vivir)",
                hint: "Use the Nosotros form of Vivir in the future tense.",
                answer: "viviremos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She will buy a car next month. -> Ella (FILL IN THE BLANK) un coche el próximo mes. (Comprar)",
                hint: "Use the Él/Ella form of Comprar in the future tense.",
                answer: "comprará"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "You (plural) will understand the lesson. -> Ustedes (FILL IN THE BLANK) la lección. (Comprender)",
                hint: "Use the Ellos/Ellas form of Comprender in the future tense.",
                answer: "comprenderán"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "Will you (singular, informal) write the email? -> ¿(FILL IN THE BLANK) el correo electrónico tú? (Escribir)",
                hint: "Use the Tú form of Escribir in the future tense.",
                answer: "escribirás"
            }
        ]
    },
    "T_FUTURE_II": {
        title: "Future II: Irregular Stems (Tendr-, Har-, Saldr-...)",
        tags: ["future"],
        targetXP: 14,
        type: "TUTORIAL",
        intro: "Ten common verbs have an irregular stem in the Future tense. Once the stem is memorized, the regular Future endings are added (e.g., *Yo tendr***é**).",
        content: [
            {
                type: "TEXT",
                prompt: "### **Irregular Future Stems**",
                html: `
                    <p>The endings are the same as regular verbs, but they are attached to these new stems (e.g., Tener -> **tendr-**, Hacer -> **har-**, Salir -> **saldr-**).</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Infinitive</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Irregular Stem</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Yo)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tener (To have)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>tendr-</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Yo tendr<strong>é</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Hacer (To do/make)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>har-</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Tú har<strong>ás</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I will have ten minutes to finish. -> Yo (FILL IN THE BLANK) diez minutos para terminar. (Tener)",
                hint: "Use the irregular Yo stem (tendr-) + ending (-é).",
                answer: "tendré"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The girls will be able to go to the party. -> Las chicas (FILL IN THE BLANK) ir a la fiesta. (Poder - Stem: podr-)",
                hint: "Use the irregular Ellos stem (podr-) + ending (-án).",
                answer: "podrán"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She will do the homework later. -> Ella (FILL IN THE BLANK) la tarea más tarde. (Hacer - Stem: har-)",
                hint: "Use the Él/Ella irregular stem (har-) + ending (-á).",
                answer: "hará"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "What will you (singular, informal) say? -> ¿Qué (FILL IN THE BLANK) tú? (Decir - Stem: dir-)",
                hint: "Use the Tú irregular stem (dir-) + ending (-ás).",
                answer: "dirás"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We will leave the outskirts before noon. -> Nosotros (FILL IN THE BLANK) de las afueras antes del mediodía. (Salir - Stem: saldr-)",
                hint: "Use the Nosotros irregular stem (saldr-) + ending (-emos).",
                answer: "saldremos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The new furniture will be worth a lot of money. -> Los muebles nuevos (FILL IN THE BLANK) mucho dinero. (Valer - Stem: valdr-)",
                hint: "Use the Ellos/Ellas irregular stem (valdr-) + ending (-án).",
                answer: "valdrán"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I will know the truth soon. -> Yo (FILL IN THE BLANK) la verdad pronto. (Saber - Stem: sabr-)",
                hint: "Use the Yo irregular stem (sabr-) + ending (-é).",
                answer: "sabré"
            }
        ]
    },
    "T_FUTURE_III": {
        title: "Future III: Usage & Future Perfect (I will have...)",
        tags: ["future","present"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "The Future tense can express **probability** in the present (e.g., 'I wonder who it is?'). The **Future Perfect** expresses an action that **will have been completed** by a specific time.",
        content: [
            {
                type: "TEXT",
                prompt: "### Usage: Probability in the Present",
                html: `
                    <p>When you are unsure about a present situation, use the Future tense to express doubt or probability (e.g., <strong>¿Qué hora será?</strong> - I wonder what time it is?).</p>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The train is probably late. -> El tren (FILL IN THE BLANK) tarde. (Estar - regular future)",
                hint: "Use the Él/Ella form of Estar in the future tense.",
                answer: "estará"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I wonder where my keys are? -> ¿Dónde (FILL IN THE BLANK) mis llaves? (Estar - regular future)",
                hint: "Use the Ellos/Ellas form of Estar (llaves) in the future tense.",
                answer: "estarán"
            },
            {
                type: "TEXT",
                prompt: "### **Future Perfect: 'Will Have Done'**",
                html: `
                    <p>Formed by: <strong>Haber (Future) + Past Participle (-ado / -ido)</strong>. Used for actions completed before a future time.</p>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "By 2025, I will have finished my studies. -> Para 2025, (FILL IN THE BLANK) mis estudios. (Terminar)",
                hint: "Future of Haber (Yo) + past participle of Terminar (terminado).",
                answer: "habré terminado"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They will have put the things in the box. -> Ellos (FILL IN THE BLANK) las cosas en la caja. (Poner - Irregular Participle)",
                hint: "Future of Haber (Ellos) + irregular past participle of Poner (puesto).",
                answer: "habrán puesto"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She will have spoken to her neighbor by noon. -> Ella (FILL IN THE BLANK) con su vecina antes del mediodía. (Hablar)",
                hint: "Future of Haber (Ella) + past participle of Hablar (hablado).",
                answer: "habrá hablado"
            }
        ]
    },
    "T_SUBJUNCTIVE_I": {
        title: "Subjunctive I: Regular Present Subjunctive (-AR)",
        tags: ["subjunctive","present","ar-verbs"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "The Subjunctive mood is used in dependent clauses to express uncertainty, wishes, emotions, necessity, or doubt (WEIRDOS). We form it from the **Yo** form of the present tense by adding **opposite vowel** endings.",
        content: [
            {
                type: "TEXT",
                prompt: "### **Regular -AR Verb Endings (Subjunctive)**",
                html: `
                    <p>Rule: Drop the **-o** from the Yo form (e.g., Habl**o**) and add the **-E** endings (opposite vowel).</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Ending (Opposite Vowel)</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Hablar)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-e</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Yo habl<strong>e</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-emos</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Nosotros habl<strong>emos</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I want you (singular, informal) to work here. -> Quiero que tú (FILL IN THE BLANK) aquí. (Trabajar)",
                hint: "Use the Tú form of Trabajar in the present subjunctive.",
                answer: "trabajes"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "It is necessary that we study. -> Es necesario que (FILL IN THE BLANK) (Nosotros). (Estudiar)",
                hint: "Use the Nosotros form of Estudiar in the present subjunctive.",
                answer: "estudiemos"
            },
            {
                type: "TEXT",
                prompt: "### Verbs with Spelling Changes (CAR, GAR, ZAR)",
                html: "<p>Verbs ending in -CAR, -GAR, or -ZAR keep the sound in the subjunctive, leading to a spelling change: **c → qu, g → gu, z → c** in all forms.</p>"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I wish I could arrive early. -> Ojalá yo (FILL IN THE BLANK) temprano. (Llegar - GAR change)",
                hint: "Use the Yo form of Llegar (llegu-e).",
                answer: "llegue"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I need them to start the game. -> Necesito que ellos (FILL IN THE BLANK) el juego. (Empezar - ZAR change, E→IE stem change)",
                hint: "Use the Ellos form of Empezar (empiec-en, plus z→c).",
                answer: "empiecen"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I advise that you (formal) search for the information. -> Aconsejo que usted (FILL IN THE BLANK) la información. (Buscar - CAR change)",
                hint: "Use the Él/Ella form of Buscar (busqu-e).",
                answer: "busque"
            }
        ]
    },
    "T_SUBJUNCTIVE_II": {
        title: "Subjunctive II: Regular Present Subjunctive (-ER/-IR)",
        tags: ["subjunctive"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "For regular **-ER** and **-IR** verbs, we follow the same 'opposite vowel' rule, but now we add **-A** endings.",
        content: [
            {
                type: "TEXT",
                prompt: "### **Regular -ER / -IR Verb Endings (Subjunctive)**",
                html: `
                    <p>Rule: Drop the **-o** from the Yo form (e.g., Com**o**) and add the **-A** endings (opposite vowel).</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Ending (Opposite Vowel)</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Example (Comer/Vivir)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-a</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Yo com<strong>a</strong> / Yo viv<strong>a</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>-amos</strong></td><td style="border: 1px solid #ccc; padding: 8px;">Nosotros com<strong>amos</strong> / Nosotros viv<strong>amos</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "It's a shame that she doesn't live nearby. -> Es una pena que ella no (FILL IN THE BLANK) cerca. (Vivir)",
                hint: "Use the Él/Ella form of Vivir in the present subjunctive.",
                answer: "viva"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I am surprised that you (plural) sell the house. -> Me sorprende que ustedes (FILL IN THE BLANK) la casa. (Vender)",
                hint: "Use the Ellos/Ellas form of Vender in the present subjunctive.",
                answer: "vendan"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We prefer that he returns the money. -> Preferimos que él (FILL IN THE BLANK) el dinero. (Devolver - O→UE stem change)",
                hint: "The stem is 'devuelv-' for all forms except Nosotros/Vosotros.",
                answer: "devuelva"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I suggest that we read the book. -> Sugiero que nosotros (FILL IN THE BLANK) el libro. (Leer)",
                hint: "Use the Nosotros form of Leer in the present subjunctive.",
                answer: "leamos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The doctor recommends that I eat less. -> El médico recomienda que yo (FILL IN THE BLANK) menos. (Comer)",
                hint: "Use the Yo form of Comer in the present subjunctive.",
                answer: "coma"
            }
        ]
    },
    "T_SUBJUNCTIVE_III": {
        title: "Subjunctive III: Irregular & Stem-Changing Subjunctive",
        tags: ["subjunctive"],
        targetXP: 16,
        type: "TUTORIAL",
        intro: "The Subjunctive has a tiny group of major irregulars (**DISHES**) and some unique rules for stem-changing verbs. All irregularities stem from the **Yo** form.",
        content: [
            {
                type: "TEXT",
                prompt: "### **Irregular Subjunctive Verbs (DISHES)**",
                html: `
                    <p>These six verbs (Dar, Ir, Ser, Haber, Estar, Saber) must be memorized as they do not follow the 'Yo form drop the -o' rule.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Verb</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Yo Subjunctive</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;"><strong>H</strong>aber (Auxiliary)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>haya</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;"><strong>E</strong>star (To be/location)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>esté</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;"><strong>I</strong>r (To go)</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>vaya</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I hope there is good traffic. -> Espero que (FILL IN THE BLANK) tráfico bueno. (Haber)",
                hint: "Use the Haber irregular (haya).",
                answer: "haya"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The rule requires that the building be safe. -> La regla exige que el edificio (FILL IN THE BLANK) seguro. (Ser - Irregular)",
                hint: "Use the Ser irregular (sea).",
                answer: "sea"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I doubt that you (formal) are in the city. -> Dudo que usted (FILL IN THE BLANK) en la ciudad. (Estar - Irregular)",
                hint: "Use the Estar irregular (esté).",
                answer: "esté"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "It is important that they give him the keys. -> Es importante que ellos (FILL IN THE BLANK) las llaves. (Dar - Irregular)",
                hint: "Use the Dar irregular (den).",
                answer: "den"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I don't believe that we are going to the suburb. -> No creo que nosotros (FILL IN THE BLANK) a las afueras. (Ir - Irregular)",
                hint: "Use the Nosotros form of Ir irregular (vayamos).",
                answer: "vayamos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I recommend that you (singular, informal) sleep well. -> Recomiendo que tú (FILL IN THE BLANK) bien. (Dormir - O→UE stem change)",
                hint: "Use the Tú form (duermas).",
                answer: "duermas"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "It's impossible that I know the answer. -> Es imposible que yo (FILL IN THE BLANK) la respuesta. (Saber - Irregular)",
                hint: "Use the Saber irregular (sepa).",
                answer: "sepa"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We suggest that he asks for help. -> Sugerimos que él (FILL IN THE BLANK) ayuda. (Pedir - E→I stem change)",
                hint: "Use the Él/Ella form (pida).",
                answer: "pida"
            }
        ]
    },
    // ====================================================================
    // 🧠 COOL GRAMMAR CONCEPTS
    // ====================================================================
    "T_GUSTAR": {
        title: "Cool: Gustar & Similar Verbs (Gustar, Encantar, Faltar)",
        tags: ["gustar"],
        targetXP: 16,
        type: "TUTORIAL",
        intro: "Verbs like **gustar** work differently: you conjugate for the thing that is pleasing, not the person. These are often called 'inverted structure' verbs.",
        content: [
            {
                type: "TEXT",
                prompt: "### **The 'Gustar' Formula**",
                html: `
                    <p>The structure is: <strong>(A + Person) + Indirect Object Pronoun (I.O.P.) + Verb + Subject</strong>.</p>
                    <p>In English: 'The food is pleasing to me.' (I like the food.)</p>
                    <p>In Spanish: <strong>Me gusta</strong> la comida.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">I.O.P.</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>me</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>te</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Él/Ella/Usted</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>le</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>nos</strong></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos/Ellas/Ustedes</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>les</strong></td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She likes classical music. -> (FILL IN THE BLANK) gusta la música clásica.",
                hint: "Use the I.O.P. for Ella.",
                answer: "Le"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "You (plural) like those shoes. -> (FILL IN THE BLANK) gustan esos zapatos.",
                hint: "Use the I.O.P. for Ustedes.",
                answer: "Les"
            },
            {
                type: "TEXT",
                prompt: "### **Conjugation: Gusta vs. Gustan**",
                html: `
                    <p>The verb itself is almost always conjugated in the **3rd person singular (gusta)** if followed by a singular noun or an infinitive, or the **3rd person plural (gustan)** if followed by a plural noun.</p>
                    <ul>
                        <li><strong>Me gusta</strong> el libro. (Singular noun)</li>
                        <li><strong>Me gusta</strong> leer. (Infinitive/action)</li>
                        <li><strong>Me gustan</strong> los libros. (Plural noun)</li>
                    </ul>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I like to dance salsa. -> Me (FILL IN THE BLANK) bailar salsa.",
                hint: "The 'subject' is the action (bailar), so use the singular form.",
                answer: "gusta"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We like the new restaurants. -> Nos (FILL IN THE BLANK) los restaurantes nuevos.",
                hint: "The 'subject' is plural (los restaurantes), so use the plural form.",
                answer: "gustan"
            },
            {
                type: "TEXT",
                prompt: "### **Similar Verbs**",
                html: `
                    <p>Many other verbs follow this pattern, changing only the verb and its meaning:</p>
                    <ul>
                        <li><strong>Encantar</strong>: to love (Me **encanta** el café.)</li>
                        <li><strong>Faltar</strong>: to lack, to be missing (Nos **faltan** diez dólares.)</li>
                        <li><strong>Interesar</strong>: to interest (Te **interesa** la política.)</li>
                        <li><strong>Aburrir</strong>: to bore (Les **aburre** la clase.)</li>
                    </ul>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I am missing the keys. -> Me (FILL IN THE BLANK) las llaves. (Faltar)",
                hint: "The 'subject' is plural (las llaves), so use the plural form of Faltar.",
                answer: "faltan"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She is bored by the conversation. -> Le (FILL IN THE BLANK) la conversación. (Aburrir)",
                hint: "The 'subject' is singular (la conversación), so use the singular form of Aburrir.",
                answer: "aburre"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They love to travel to Europe. -> Les (FILL IN THE BLANK) viajar a Europa. (Encantar)",
                hint: "The 'subject' is the action (viajar), so use the singular form of Encantar.",
                answer: "encanta"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "Does the history topic interest you (singular, informal)? -> ¿Te (FILL IN THE BLANK) el tema de historia? (Interesar)",
                hint: "The 'subject' is singular (el tema), so use the singular form of Interesar.",
                answer: "interesa"
            }
        ]
    },
    "T_REFLEXIVE": {
        title: "Cool: Reflexive Verbs (Lavarse, Dormirse, Levantarse)",
        tags: ["reflexive"],
        targetXP: 16,
        type: "TUTORIAL",
        intro: "Reflexive verbs show that the subject performs the action on themselves. For example, 'I wash myself' (**Me lavo**). They are recognizable by the **-se** ending in the infinitive.",
        content: [
            {
                type: "TEXT",
                prompt: "### **Reflexive Pronouns**",
                html: `
                    <p>A reflexive verb must always use a **reflexive pronoun** that matches the subject. This pronoun always comes immediately before the conjugated verb.</p>
                    <table style="width:100%; border-collapse: collapse; margin: 15px 0; background-color: #f7f7f7;">
                        <tr><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Subject</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Reflexive Pronoun</th><th style="border: 1px solid #ccc; padding: 8px; background-color: #ddd;">Meaning (Self)</th></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Yo</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>me</strong></td><td style="border: 1px solid #ccc; padding: 8px;">(myself)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Tú</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>te</strong></td><td style="border: 1px solid #ccc; padding: 8px;">(yourself)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Él/Ella/Usted</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>se</strong></td><td style="border: 1px solid #ccc; padding: 8px;">(himself/herself/yourself)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Nosotros</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>nos</strong></td><td style="border: 1px solid #ccc; padding: 8px;">(ourselves)</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">Ellos/Ellas/Ustedes</td><td style="border: 1px solid #ccc; padding: 8px;"><strong>se</strong></td><td style="border: 1px solid #ccc; padding: 8px;">(themselves/yourselves)</td></tr>
                    </table>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I wash my hands. -> Yo (FILL IN THE BLANK) (FILL IN THE BLANK) las manos. (Lavar + Reflexive)",
                hint: "Pronoun (Me) + Conjugation (Lavo).",
                answer: "me lavo"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We get up at six in the morning. -> Nosotros (FILL IN THE BLANK) (FILL IN THE BLANK) a las seis de la mañana. (Levantarse)",
                hint: "Pronoun (Nos) + Conjugation (Levantamos).",
                answer: "nos levantamos"
            },
            {
                type: "TEXT",
                prompt: "### **Common Reflexive Verbs (Daily Routine)**",
                html: `
                    <p>Many verbs related to personal care and routine are reflexive:</p>
                    <ul>
                        <li><strong>Lavarse</strong>: to wash oneself</li>
                        <li><strong>Afeitarse</strong>: to shave oneself</li>
                        <li><strong>Vestirse</strong> (e→i stem change): to get dressed</li>
                        <li><strong>Acostarse</strong> (o→ue stem change): to go to bed</li>
                    </ul>
                    <p>Remember that the **-se** is removed from the infinitive before conjugating the main verb.</p>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She goes to bed early. -> Ella (FILL IN THE BLANK) (FILL IN THE BLANK) temprano. (Acostarse: o→ue)",
                hint: "Pronoun (Se) + Conjugation (Acuesta).",
                answer: "se acuesta"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "You (singular, informal) get dressed quickly. -> Tú (FILL IN THE BLANK) (FILL IN THE BLANK) rápidamente. (Vestirse: e→i)",
                hint: "Pronoun (Te) + Conjugation (Vistes).",
                answer: "te vistes"
            },
            {
                type: "TEXT",
                prompt: "### **Placement of the Pronoun**",
                html: `
                    <p>The reflexive pronoun must come **before** a conjugated verb, but it can be attached to the **end** of an infinitive or a gerund (-ndo) for emphasis.</p>
                    <ul>
                        <li>Conjugated: **Me** quiero lavar.</li>
                        <li>Infinitive: Quiero lavar<strong>me</strong>. (I want to wash myself.)</li>
                        <li>Gerund: Está lavando<strong>se</strong>. (He is washing himself.)</li>
                    </ul>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I need to take a shower. -> Yo necesito duchar (FILL IN THE BLANK). (Ducharse)",
                hint: "Attach the pronoun to the end of the infinitive.",
                answer: "me"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They are putting on makeup. -> Ellas (FILL IN THE BLANK) están maquillando. (Maquillarse)",
                hint: "Place the pronoun before the conjugated verb (estar).",
                answer: "se"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "You (formal) always relax on the weekends. -> Usted (FILL IN THE BLANK) (FILL IN THE BLANK) siempre los fines de semana. (Relajarse)",
                hint: "Pronoun (Se) + Conjugation (Relaja).",
                answer: "se relaja"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The children fall asleep early. -> Los niños (FILL IN THE BLANK) (FILL IN THE BLANK) temprano. (Dormirse: o→ue)",
                hint: "Pronoun (Se) + Conjugation (Duermen).",
                answer: "se duermen"
            }
        ]
    },
	"T_SER_VS_ESTAR": {
        title: "Ser vs. Estar: Essence vs. State (Advanced)",
        tags: ["ser-estar","translation"],
        targetXP: 12,
        type: "TUTORIAL",
        intro: "Ser and Estar both translate as 'to be' in English, but their uses are different and often subtle. This tutorial focuses on meaning differences, idiomatic contrasts (ser listo vs estar listo), and context/clues that tell you which to use.",
        content: [
            {
                type: "TEXT",
                prompt: "### Quick guide: When to use SER",
                html: `
                    <ul>
                        <li><strong>Identity / essential characteristic:</strong> nationality, profession, religion, materials (e.g., <em>Ella es doctora</em>).</li>
                        <li><strong>Time / dates / events:</strong> days, dates, telling time, location of events (e.g., <em>La fiesta es en mi casa</em>).</li>
                        <li><strong>Possession / origin:</strong> <em>El libro es de María</em>, <em>Soy de México</em>.</li>
                        <li><strong>Permanent or defining description:</strong> physical description, inherent traits (<em>Él es alto</em>).</li>
                    </ul>
                    <p>Tip: if the characteristic is seen as inherent or defining, favor <strong>ser</strong>.</p>`
            },
            {
                type: "TEXT",
                prompt: "### Quick guide: When to use ESTAR",
                html: `
                    <ul>
                        <li><strong>Temporary states / conditions:</strong> feelings, health, temporary physical states (<em>Está cansado</em>).</li>
                        <li><strong>Location:</strong> physical location of people/objects (<em>El libro está en la mesa</em>).</li>
                        <li><strong>Progressive / result of change:</strong> estar + gerund (<em>Estoy estudiando</em>) or result (<em>La puerta está cerrada</em>).</li>
                        <li><strong>Variable or context-dependent traits:</strong> mood, taste that can change (<em>Hoy está amable</em>).</li>
                    </ul>
                    <p>Tip: if the meaning is about condition, location, or something that can change, favor <strong>estar</strong>.</p>`
            },
            {
                type: "TEXT",
                prompt: "### Common contrast pairs & traps",
                html: `
                    <table style="width:100%; border-collapse:collapse; margin:12px 0; background:#f7f7f7;">
                        <tr><th style="border:1px solid #ccc; padding:8px; background:#ddd;">Expression</th><th style="border:1px solid #ccc; padding:8px; background:#ddd;">Meaning with <em>ser</em></th><th style="border:1px solid #ccc; padding:8px; background:#ddd;">Meaning with <em>estar</em></th></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;">listo</td><td style="border:1px solid #ccc; padding:8px;">clever / smart</td><td style="border:1px solid #ccc; padding:8px;">ready</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;">aburrido</td><td style="border:1px solid #ccc; padding:8px;">boring (characteristic)</td><td style="border:1px solid #ccc; padding:8px;">bored (state)</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;">verde</td><td style="border:1px solid #ccc; padding:8px;">green (color, inherent)</td><td style="border:1px solid #ccc; padding:8px;">unripe / not ready</td></tr>
                    </table>`
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I am from Chile. -> Yo (FILL IN THE BLANK) de Chile.",
                hint: "This expresses origin — think permanent/identity.",
                answer: "soy"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The coffee is hot (right now). -> El café (FILL IN THE BLANK) caliente.",
                hint: "Temporary state/condition (how it is right now).",
                answer: "está"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She is very intelligent. -> Ella (FILL IN THE BLANK) muy inteligente.",
                hint: "Describing an inherent/defining trait.",
                answer: "es"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The keys are on the table. -> Las llaves (FILL IN THE BLANK) en la mesa.",
                hint: "Physical location of objects.",
                answer: "están"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "He was ready when I called. -> Él (FILL IN THE BLANK) listo cuando llamé.",
                hint: "Ready = state/condition at that moment.",
                answer: "estaba"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "That movie is boring. -> Esa película (FILL IN THE BLANK) aburrida.",
                hint: "Describing the movie's characteristic (not the viewer's state).",
                answer: "es"
            },
            {
                type: "TEXT",
                prompt: "Extra practice idea",
                html: `<p>Make pairs of sentences that only change the verb (ser/estar) and translate both to see the meaning shift (e.g., <em>Es verde</em> vs <em>Está verde</em>).</p>`
            }
        ]
    },

    "T_PRETERITE_VS_IMPERFECT": {
        title: "Preterite vs. Imperfect: Completed Actions vs. Background (Advanced)",
        tags: ["preterite","imperfect"],
        targetXP: 14,
        type: "TUTORIAL",
        intro: "Preterite and Imperfect are both past tenses but serve different functions. This tutorial emphasizes practical diagnostics (signal words, aspect, interruption), mixed-sentence usage, and typical traps.",
        content: [
            {
                type: "TEXT",
                prompt: "### Core differences (short)",
                html: `
                    <ul>
                        <li><strong>Preterite</strong>: completed actions, specific events, actions with clear start/end, sequences of completed events. (Think: 'I did it', finished.)</li>
                        <li><strong>Imperfect</strong>: ongoing background, habitual actions, descriptions, time, age, mental states, and actions in progress. (Think: 'I was doing it' / 'used to'.)</li>
                    </ul>
                    <p><strong>Signal words</strong> — Preterite: <em>ayer, anoche, el año pasado, de repente</em>. Imperfect: <em>siempre, muchas veces, mientras, generalmente, a menudo</em>.</p>`
            },
            {
                type: "TEXT",
                prompt: "### How they interact (interruptions & background)",
                html: `
                    <p>When an ongoing action (imperfect) is interrupted by a completed action (preterite), Spanish uses imperfect for the ongoing action and preterite for the interruption:</p>
                    <p><em>Yo <strong>cenaba</strong> cuando el teléfono <strong>sonó</strong>.</em></p>`
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "When I was a child I used to play outside a lot. -> Cuando era niño, yo (FILL IN THE BLANK) mucho afuera.",
                hint: "Habitual activity in the past — 'used to'.",
                answer: "jugaba"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "Yesterday at eight I finished dinner when the phone rang. -> Ayer a las ocho, yo (FILL IN THE BLANK) la cena cuando el teléfono (FILL IN THE BLANK).",
                hint: "First blank: ongoing action at that clock time (imperfect). Second blank: single completed interrupting action (preterite).",
                answer: "cenaba / sonó"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They arrived and left immediately. -> Ellos (FILL IN THE BLANK) y se (FILL IN THE BLANK) inmediatamente.",
                hint: "Sequence of completed actions — both are single events.",
                answer: "llegaron / fueron"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "It was three o'clock when María called. -> Eran las tres cuando María (FILL IN THE BLANK).",
                hint: "Time/description (imperfect) + single event (preterite).",
                answer: "llamó"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We used to go to the beach every summer. -> Nosotros (FILL IN THE BLANK) a la playa cada verano.",
                hint: "Habitual repeated action in the past.",
                answer: "íbamos"
            },
            {
                type: "TEXT",
                prompt: "Tricky traps",
                html: `
                    <ul>
                        <li>Some verbs change meaning: <em>conocer</em> (imperfect = knew someone; preterite = met someone).</li>
                        <li>Context is king — look for signal words and whether the speaker frames the action as completed or descriptive.</li>
                    </ul>`
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I met (for the first time) Julia last week. -> Yo (FILL IN THE BLANK) a Julia la semana pasada.",
                hint: "Meeting someone for the first time = single completed event.",
                answer: "conocí"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "Before that, I knew Julia (I already knew her). -> Antes, yo (FILL IN THE BLANK) a Julia.",
                hint: "Ongoing knowledge/state in the past — use imperfect.",
                answer: "conocía"
            },
            {
                type: "TEXT",
                prompt: "Practice tip",
                html: `<p>When in doubt, rephrase the sentence in English: are you saying 'I used to...' or 'I did (once)'? That often tells you imperfect vs preterite.</p>`
            }
        ]
    },

    "T_POR_VS_PARA": {
        title: "Por vs. Para: Choosing the Right 'For' (Advanced)",
        tags: ["por-para","translation"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Por and Para are both translated as 'for' in English but have very different uses. This tutorial gives diagnostic tests and lots of tricky examples (exchange, deadlines, purposes, passive voice).",
        content: [
            {
                type: "TEXT",
                prompt: "### Common uses of POR",
                html: `
                    <ul>
                        <li><strong>Cause / reason:</strong> <em>Lo hice por ti</em> (because of you).</li>
                        <li><strong>Duration/time period:</strong> <em>Estudié por dos horas</em>.</li>
                        <li><strong>Exchange / price:</strong> <em>Te doy veinte dólares por eso</em>.</li>
                        <li><strong>Movement through/along:</strong> <em>Paseamos por el parque</em>.</li>
                        <li><strong>Means / manner:</strong> <em>Envié la carta por correo</em>.</li>
                        <li><strong>Passive agent:</strong> <em>Fue escrito por Gabriel García Márquez</em>.</li>
                    </ul>`
            },
            {
                type: "TEXT",
                prompt: "### Common uses of PARA",
                html: `
                    <ul>
                        <li><strong>Purpose / goal:</strong> <em>Estudia para médico</em> (in order to be).</li>
                        <li><strong>Recipient:</strong> <em>Este regalo es para ti</em>.</li>
                        <li><strong>Destination:</strong> <em>Saliendo para Madrid</em>.</li>
                        <li><strong>Deadline / specific time:</strong> <em>La tarea es para mañana</em>.</li>
                        <li><strong>Comparison / opinion:</strong> <em>Para mí, es fácil</em>.</li>
                    </ul>`
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I bought this present for you. -> Compré este regalo (FILL IN THE BLANK) ti.",
                hint: "Think: recipient of the gift.",
                answer: "para"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I ran through the park. -> Corrí (FILL IN THE_BLANK) el parque.",
                hint: "Movement through/along a place.",
                answer: "por"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She studies in order to be a doctor. -> Ella estudia (FILL IN THE BLANK) ser doctora.",
                hint: "Purpose / goal (in order to...).",
                answer: "para"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I'll pay $50 for the bike. -> Pagaré cincuenta dólares (FILL IN THE BLANK) la bicicleta.",
                hint: "Exchange / price (in exchange for).",
                answer: "por"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "This report is due by Friday. -> Este informe es (FILL IN THE BLANK) el viernes.",
                hint: "Deadline / specific time limit.",
                answer: "para"
            },
            {
                type: "TEXT",
                prompt: "Tricky notes",
                html: `
                    <ul>
                        <li><strong>Por favor</strong> (please) is idiomatic — memorize it.</li>
                        <li>When expressing cause vs purpose, ask: 'why (cause)?' → <em>por</em>; 'for what purpose?' → <em>para</em>.</li>
                    </ul>`
            }
        ]
    },

    "T_SABER_VS_CONOCER": {
        title: "Saber vs. Conocer: Know vs. Be Familiar With (Advanced)",
        tags: ["verb-contrasts"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Saber and Conocer both mean 'to know' but differ in what kind of knowledge is involved: facts/skills vs. familiarity/meeting people/places. We'll practice diagnostic questions and common constructions (saber + infinitive, conocer a (personal 'a')).",
        content: [
            {
                type: "TEXT",
                prompt: "### Core difference",
                html: `
                    <p><strong>Saber</strong> = to know facts, information, or how to do something (often followed by a clause or infinitive: <em>saber que / saber cómo / saber + infinitive</em>).</p>
                    <p><strong>Conocer</strong> = to be familiar with, to meet someone, or to know a place/artwork/person (use <em>conocer a</em> before people).</p>`
            },
            {
                type: "TEXT",
                prompt: "### Examples & tips",
                html: `
                    <ul>
                        <li><em>Sé la respuesta.</em> = I know the answer (fact).</li>
                        <li><em>Conozco Barcelona.</em> = I'm familiar with/I've been to Barcelona.</li>
                        <li><em>Conocí a Ana ayer.</em> = I met Ana (preterite = met for the first time).</li>
                        <li><em>Sé nadar.</em> = I know how to swim (skill).</li>
                    </ul>
                    <p>Tip: if you can substitute 'be familiar with' or 'have met', use <strong>conocer</strong>. If it's a fact, info, or ability, use <strong>saber</strong>.</p>`
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "Do you know how to play piano? -> ¿(Tú) (FILL IN THE BLANK) tocar el piano?",
                hint: "This asks about ability/skill — use the verb that pairs with an infinitive (saber + infinitive).",
                answer: "sabes"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I know Madrid well. -> Yo (FILL IN THE BLANK) bien Madrid.",
                hint: "Familiarity with a city/place — use the verb for being acquainted with places.",
                answer: "conozco"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She found out the answer. -> Ella (FILL IN THE BLANK) la respuesta.",
                hint: "Knowing a fact or information (simple past).",
                answer: "supo"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We met your parents last summer. -> Nosotros (FILL IN THE BLANK) a tus padres el verano pasado.",
                hint: "Meeting people (first encounter) — preterite of the verb meaning 'to meet'.",
                answer: "conocimos"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I don't know (a fact) where she lives. -> No (yo) (FILL IN THE BLANK) dónde vive.",
                hint: "Not knowing a piece of information — use the verb for facts.",
                answer: "sé"
            },
            {
                type: "TEXT",
                prompt: "Practice idea",
                html: `<p>Make pairs like: <em>Conozco a María</em> vs <em>Sé quién es María</em> — compare the nuance.</p>`
            }
        ]
    },

    "T_PEDIR_VS_PREGUNTAR": {
        title: "Pedir vs. Preguntar: Requesting vs. Asking (Advanced)",
        tags: ["verb-contrasts"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Pedir = to request / ask for something (object or favor). Preguntar = to ask a question or ask someone for information. The verbs often look interchangeable in English ('ask'), but Spanish separates the ideas. We'll practice structures and pronoun placement.",
        content: [
            {
                type: "TEXT",
                prompt: "### Core difference",
                html: `
                    <ul>
                        <li><strong>Pedir</strong>: request something (pedir + direct object or pedir + que + subjunctive). Example: <em>Pedí ayuda</em>, <em>Le pedí que viniera</em>.</li>
                        <li><strong>Preguntar</strong>: ask a question or ask someone for information (preguntar + que? / preguntar a alguien + question). Example: <em>Pregunté la hora</em>, <em>Le pregunté si vendría</em>.</li>
                    </ul>`
            },
            {
                type: "TEXT",
                prompt: "### Common patterns",
                html: `
                    <ul>
                        <li><em>Pedir + (algo)</em> — pedir algo, pedir permiso, pedir ayuda.</li>
                        <li><em>Preguntar + (question / 'si' + clause)</em> — preguntar la dirección, preguntar si..., preguntar a alguien.</li>
                        <li>With pronouns: <em>Le pedí/Le pregunté</em> (I asked/requested to him/her).</li>
                    </ul>`
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "I asked for water. -> (Yo) (FILL IN THE BLANK) agua.",
                hint: "Requesting an object (water) — use the verb that means 'to request / to ask for'.",
                answer: "pedí"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She asked me the question. -> Ella me (FILL IN THE BLANK) la pregunta.",
                hint: "Asking a question (information) — use the verb that means 'to ask (a question)'.",
                answer: "preguntó"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "He asked permission to leave. -> Él (FILL IN THE BLANK) permiso para salir.",
                hint: "Requesting permission — verb for requesting/favor.",
                answer: "pidió"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "They asked if we were coming. -> Ellos (FILL IN THE BLANK) si veníamos.",
                hint: "Asking for information expressed with 'si' + clause — use the 'ask (question)' verb in the past.",
                answer: "preguntaron"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "Can you ask him for help? -> ¿Puedes (FILL IN THE BLANK) ayuda a él?",
                hint: "Asking someone to request help from him — use 'to ask for' (infinitive).",
                answer: "pedir"
            },
            {
                type: "TEXT",
                prompt: "Trick note",
                html: `<p>If in English you would say 'ask for' (as in request something), use <strong>pedir</strong>. If in English you would say 'ask' (as in ask a question), use <strong>preguntar</strong>.</p>`
            }
        ]
    },
    "T_CIUDAD_CAMPO": {
        title: "La Ciudad, Las Afueras, El Campo, Y Los Suburbios: Lugares y Vocabulario",
        tags: ["vocabulary","places","adjectives"],
        targetXP: 16, // High XP for a long, comprehensive lesson
        type: "TUTORIAL",
        intro: "Let's explore the vocabulary for urban areas, suburbs, outskirts, and rural regions. This lesson introduces key nouns, verbs, and adjectives to describe different places to live and their characteristics.",
        content: [
            {
                type: "TEXT",
                prompt: "### 🏙️ La Ciudad (The City) - Urban Life Vocabulary",
                html: `
                    <p>The city, <strong>la ciudad</strong>, is full of life and movement, often involving **el tráfico** (traffic) and **el atasco** (traffic jam). People live in tall **rascacielos** (skyscrapers) and **edificios** (buildings), specifically in **apartamentos** or **pisos** (apartments).</p>
                    <table style="width:100%; border-collapse: collapse; margin:15px 0; background:#f7f7f7;">
                        <tr><th style="border:1px solid #ccc; padding:8px; background:#ddd;">Spanish Word</th><th style="border:1px solid #ccc; padding:8px; background:#ddd;">English Meaning</th></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>El centro</strong></td><td style="border:1px solid #ccc; padding:8px;">Downtown</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Aparcamiento / Estacionamiento</strong></td><td style="border:1px solid #ccc; padding:8px;">Parking lot / Parking garage</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>La contaminación</strong></td><td style="border:1px solid #ccc; padding:8px;">Pollution</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>El peatón</strong> / <strong>El ciclista</strong></td><td style="border:1px solid #ccc; padding:8px;">Pedestrian / Cyclist</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Subir / Bajar Al Metro</strong></td><td style="border:1px solid #ccc; padding:8px;">To get on / To get off the subway</td></tr>
                    </table>
                    <p>Adjectives: The city is often **animada** (lively), **ocupada** (busy), and **ruidosa** (noisy), but also **conveniente** (convenient) because there **hay** (there is/are) a lot of things to do.</p>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "There is always traffic downtown. -> Siempre (FILL IN THE BLANK) tráfico en el centro.",
                hint: "Use the singular present tense of 'there is/are'.",
                answer: "hay"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "We prefer to live in an apartment. -> Preferimos vivir en un (FILL IN THE BLANK).",
                hint: "Use the Spanish word for apartment (Spain or Latin America).",
                answer: "apartamento"
            },
            {
                type: "TEXT",
                prompt: "### 🏡 Las Afueras y Los Suburbios (The Suburbs and Outskirts)",
                html: `
                    <p>Suburban areas, **las afueras** and **los suburbios**, are quieter places to live. They consist of **vecindarios** (neighborhoods) where people have **vecinos** (neighbors). People often use the **autopista / carretera** (highway / road) to commute to the city.</p>
                    <table style="width:100%; border-collapse: collapse; margin:15px 0; background:#f7f7f7;">
                        <tr><th style="border:1px solid #ccc; padding:8px; background:#ddd;">Spanish Word</th><th style="border:1px solid #ccc; padding:8px; background:#ddd;">English Meaning</th></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Mudarse</strong></td><td style="border:1px solid #ccc; padding:8px;">To move (residence)</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>El barrio</strong></td><td style="border:1px solid #ccc; padding:8px;">Neighborhood / District</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Impuestos</strong></td><td style="border:1px solid #ccc; padding:8px;">Taxes</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Tranquilo / Callado</strong></td><td style="border:1px solid #ccc; padding:8px;">Quiet / Calm</td></tr>
                    </table>
                    <p>People often move to the suburbs to **relajarse** (to relax) and escape the **presión** (pressure) of the city. We also use **habría** (there would be) to discuss hypothetical benefits of moving (e.g., <em>Habría menos ruido</em>).</p>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "If we moved, there would be less pressure. -> Si nos mudáramos, (FILL IN THE BLANK) menos presión.",
                hint: "Use the correct conditional form of 'there would be'.",
                answer: "habría"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "It's a very quiet neighborhood. -> Es un (FILL IN THE BLANK) muy tranquilo.",
                hint: "Use the Spanish word for neighborhood/district.",
                answer: "barrio"
            },
            {
                type: "TEXT",
                prompt: "### 🌾 El Campo (The Country / Rural Area) - Rural Life Vocabulary",
                html: `
                    <p>Life in the country, **el campo**, or a **pueblo** (town/village) is generally **lenta** (slow) and **sana** (healthy). You can see a beautiful **paisaje** (landscape) and encounter animals like **vacas** (cows) and **caballos** (horses).</p>
                    <table style="width:100%; border-collapse: collapse; margin:15px 0; background:#f7f7f7;">
                        <tr><th style="border:1px solid #ccc; padding:8px; background:#ddd;">Spanish Word</th><th style="border:1px solid #ccc; padding:8px; background:#ddd;">English Meaning</th></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>La granja / La finca</strong></td><td style="border:1px solid #ccc; padding:8px;">Farm / Rural property</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Granjero</strong></td><td style="border:1px solid #ccc; padding:8px;">Farmer</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Cultivar (el jardín)</strong></td><td style="border:1px solid #ccc; padding:8px;">To grow / cultivate (the garden)</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Rural</strong></td><td style="border:1px solid #ccc; padding:8px;">Rural</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>El sendero / El camino</strong></td><td style="border:1px solid #ccc; padding:8px;">Path / Road (rural)</td></tr>
                    </table>
                    <p>The verb **había** (there was/were) is often used to set the scene: <em>Había mucho espacio y pocos coches.</em> (There was a lot of space and few cars.)</p>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "When I was little, there were many cows on the farm. -> Cuando era pequeño, (FILL IN THE BLANK) muchas vacas en la granja.",
                hint: "Use the imperfect form of 'there was/were'.",
                answer: "había"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "The farmer used to cultivate the garden. -> El (FILL IN THE BLANK) (FILL IN THE BLANK) el jardín.",
                hint: "Farmer + Imperfect conjugation of Cultivar (él).",
                answer: "granjero cultivaba"
            },
            {
                type: "TEXT",
                prompt: "### 🚦 Essential Transport and Place Adjectives",
                html: `
                    <p>Transportation and descriptive words for any location:</p>
                    <table style="width:100%; border-collapse: collapse; margin:15px 0; background:#f7f7f7;">
                        <tr><th style="border:1px solid #ccc; padding:8px; background:#ddd;">Transport / Place</th><th style="border:1px solid #ccc; padding:8px; background:#ddd;">Adjective Pair</th></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Acera</strong> (sidewalk) / <strong>Puente</strong> (bridge)</td><td style="border:1px solid #ccc; padding:8px;"><strong>Antiguo</strong> (old) / <strong>Moderno</strong> (modern)</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Andar</strong> (to walk) / <strong>Montar en bicicleta</strong> (to ride a bike)</td><td style="border:1px solid #ccc; padding:8px;"><strong>Peligroso</strong> (dangerous) / <strong>Seguro</strong> (safe)</td></tr>
                        <tr><td style="border:1px solid #ccc; padding:8px;"><strong>Gente</strong> (people) / <strong>Lugar</strong> (place)</td><td style="border:1px solid #ccc; padding:8px;"><strong>Rápido</strong> (fast) / <strong>Lento</strong> (slow)</td></tr>
                    </table>
                    <p>Remember: Adjectives must agree in gender and number (e.g., <em>una ciudad **bella**</em>, <em>los lugares **seguros**</em>).</p>
                `
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "It's a very fast car. -> Es un coche muy (FILL IN THE BLANK).",
                hint: "Use the masculine singular adjective for 'fast'.",
                answer: "rápido"
            },
            {
                type: "FILL_IN_BLANK",
                prompt: "She is riding a bicycle in the park. -> Ella (FILL IN THE BLANK) en bicicleta en el parque.",
                hint: "Conjugate 'Montar' (to ride) in the present tense.",
                answer: "monta"
            },
            {
                type: "TEXT",
                prompt: "Excellent work! Now use this vocabulary to describe where you live and what you prefer.",
                html: ""
            }
        ]
    },
    "T_GREET_1": {
     "title": "Greetings I: Hola, Adiós & First Words",
     "tags": [
      "greetings",
      "hello",
      "goodbye",
      "basics"
     ],
     "level": "beginner",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "Your very first Spanish words: how to say hello, goodbye and the polite little words that open every conversation.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Hello & Goodbye**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Hola**</td><td style=\"border:1px solid #ccc;padding:8px;\">Hello / Hi</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Adiós**</td><td style=\"border:1px solid #ccc;padding:8px;\">Goodbye</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Chao**</td><td style=\"border:1px solid #ccc;padding:8px;\">Bye (casual)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Hasta luego**</td><td style=\"border:1px solid #ccc;padding:8px;\">See you later</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Hasta mañana**</td><td style=\"border:1px solid #ccc;padding:8px;\">See you tomorrow</td></tr></table><p style=\"margin:8px 0;\">The letter **h** is silent in Spanish, so *hola* sounds like \"OH-lah\".</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Hello! -> (FILL IN THE BLANK)!",
       "hint": "Silent h",
       "answer": "Hola"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Goodbye! -> (FILL IN THE BLANK)!",
       "hint": "Has an accent on the ó",
       "answer": "Adiós"
      },
      {
       "type": "TEXT",
       "prompt": "### **Magic Polite Words**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Por favor**</td><td style=\"border:1px solid #ccc;padding:8px;\">Please</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Gracias**</td><td style=\"border:1px solid #ccc;padding:8px;\">Thank you</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**De nada**</td><td style=\"border:1px solid #ccc;padding:8px;\">You're welcome</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Sí / No**</td><td style=\"border:1px solid #ccc;padding:8px;\">Yes / No</td></tr></table><p style=\"margin:8px 0;\">Using these words makes every sentence friendlier.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "See you tomorrow! -> Hasta (FILL IN THE BLANK)!",
       "hint": "Contains ñ",
       "answer": "mañana"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Thank you -> (FILL IN THE BLANK)",
       "hint": "Starts with gr",
       "answer": "Gracias"
      },
      {
       "type": "TEXT",
       "prompt": "### **Say It Out Loud**",
       "html": "<p style=\"margin:8px 0;\">Vowels are always the same: **a** (ah), **e** (eh), **i** (ee), **o** (oh), **u** (oo). Say <i>hola, adiós, chao</i> slowly three times.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Please -> Por (FILL IN THE BLANK)",
       "hint": "Sounds like \"favor\"",
       "answer": "favor"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "You're welcome -> De (FILL IN THE BLANK)",
       "hint": "Literally \"of nothing\"",
       "answer": "nada"
      },
      {
       "type": "TEXT",
       "prompt": "### **Quick Check**",
       "html": "<p style=\"margin:8px 0;\">Almost done. Eight quick questions cover everything so far. Typing without accents still counts as a near miss!</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "See you later -> Hasta (FILL IN THE BLANK)!",
       "hint": "Means \"later\"",
       "answer": "luego"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Casual \"bye\" -> (FILL IN THE BLANK)!",
       "hint": "Starts with ch",
       "answer": "Chao"
      }
     ]
    },
    "T_GREET_2": {
     "title": "Greetings II: Morning, Afternoon & Night",
     "tags": [
      "greetings",
      "time-of-day",
      "basics"
     ],
     "level": "beginner",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "Learn which greeting to use at every hour of the day.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Greetings by Time of Day**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">When</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Buenos días**</td><td style=\"border:1px solid #ccc;padding:8px;\">Morning</td><td style=\"border:1px solid #ccc;padding:8px;\">Good morning</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Buenas tardes**</td><td style=\"border:1px solid #ccc;padding:8px;\">Afternoon</td><td style=\"border:1px solid #ccc;padding:8px;\">Good afternoon</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Buenas noches**</td><td style=\"border:1px solid #ccc;padding:8px;\">Evening / night</td><td style=\"border:1px solid #ccc;padding:8px;\">Good evening / night</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Good morning -> Buenos (FILL IN THE BLANK)",
       "hint": "Accent on í",
       "answer": "días"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Good afternoon -> Buenas (FILL IN THE BLANK)",
       "hint": "Plural of tarde",
       "answer": "tardes"
      },
      {
       "type": "TEXT",
       "prompt": "### **Why Buenos but Buenas?**",
       "html": "<p style=\"margin:8px 0;\"><b>día</b> is masculine, so <b>buenos días</b>. <b>tarde</b> and <b>noche</b> are feminine, so <b>buenas tardes / buenas noches</b>.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Good evening -> Buenas (FILL IN THE BLANK)",
       "hint": "Plural of noche",
       "answer": "noches"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Good morning, everyone! -> (FILL IN THE BLANK) días a todos!",
       "hint": "Masculine plural",
       "answer": "Buenos"
      },
      {
       "type": "TEXT",
       "prompt": "### **Adding a Name**",
       "html": "<p style=\"margin:8px 0;\">Just add a comma and the name: <i>Buenos días, Ana.</i> <i>Buenas noches, mamá.</i></p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Good night, Mom -> Buenas (FILL IN THE BLANK), mamá.",
       "hint": "Feminine plural",
       "answer": "noches"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Hello, good morning -> Hola, buenos (FILL IN THE BLANK).",
       "hint": "Accent on í",
       "answer": "días"
      },
      {
       "type": "TEXT",
       "prompt": "### **Your Turn**",
       "html": "<p style=\"margin:8px 0;\">Pick the right greeting for each moment.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Good morning, Ana -> (FILL IN THE BLANK), Ana.",
       "hint": "Two words",
       "answer": "Buenos días"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Good afternoon, Mr. Ruiz -> Buenas tardes, (FILL IN THE BLANK) Ruiz.",
       "hint": "Contains ñ",
       "answer": "señor"
      }
     ]
    },
    "T_GREET_3": {
     "title": "Greetings III: How Are You?",
     "tags": [
      "greetings",
      "small-talk",
      "feelings"
     ],
     "level": "beginner",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "Ask people how they are and answer like a native speaker.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Asking How Someone Is**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Use</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¿Cómo estás?**</td><td style=\"border:1px solid #ccc;padding:8px;\">Casual (tú)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¿Cómo está usted?**</td><td style=\"border:1px solid #ccc;padding:8px;\">Polite (usted)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¿Qué tal?**</td><td style=\"border:1px solid #ccc;padding:8px;\">Casual, \"What's up?\"</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "How are you? (casual) -> ¿(FILL IN THE BLANK) estás?",
       "hint": "Accent on ó",
       "answer": "Cómo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "What's up? -> ¿Qué (FILL IN THE BLANK)?",
       "hint": "Three letters",
       "answer": "tal"
      },
      {
       "type": "TEXT",
       "prompt": "### **Answering**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Muy bien**</td><td style=\"border:1px solid #ccc;padding:8px;\">Very well</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Bien**</td><td style=\"border:1px solid #ccc;padding:8px;\">Fine</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Más o menos**</td><td style=\"border:1px solid #ccc;padding:8px;\">So-so</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Mal**</td><td style=\"border:1px solid #ccc;padding:8px;\">Bad</td></tr></table><p style=\"margin:8px 0;\">Add <b>gracias</b> to be polite: <i>Bien, gracias.</i></p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I'm fine -> (FILL IN THE BLANK), gracias.",
       "hint": "Short word",
       "answer": "Bien"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Very good -> Muy (FILL IN THE BLANK)",
       "hint": "Fine",
       "answer": "bien"
      },
      {
       "type": "TEXT",
       "prompt": "### **Bouncing It Back**",
       "html": "<p style=\"margin:8px 0;\">Return the question with <b>¿Y tú?</b> (casual) or <b>¿Y usted?</b> (polite).</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Bad -> (FILL IN THE BLANK)",
       "hint": "Opposite of bien",
       "answer": "Mal"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "So-so -> Más o (FILL IN THE BLANK)",
       "hint": "Literally \"more or less\"",
       "answer": "menos"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice**",
       "html": "<p style=\"margin:8px 0;\">Fill in each part of the little chat.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "And you? (casual) -> ¿Y (FILL IN THE BLANK)?",
       "hint": "Accent on ú",
       "answer": "tú"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "How are you? (polite) -> ¿Cómo (FILL IN THE BLANK) usted?",
       "hint": "Accent on á",
       "answer": "está"
      }
     ]
    },
    "T_GREET_4": {
     "title": "Greetings IV: Names & Nice to Meet You",
     "tags": [
      "greetings",
      "introductions",
      "names"
     ],
     "level": "beginner",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "Say your name, ask for someone else's, and make a great first impression.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **My Name Is...**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Me llamo Ana.**</td><td style=\"border:1px solid #ccc;padding:8px;\">My name is Ana.</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Soy Luis.**</td><td style=\"border:1px solid #ccc;padding:8px;\">I am Luis.</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¿Cómo te llamas?**</td><td style=\"border:1px solid #ccc;padding:8px;\">What's your name? (casual)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¿Cómo se llama usted?**</td><td style=\"border:1px solid #ccc;padding:8px;\">What's your name? (polite)</td></tr></table><p style=\"margin:8px 0;\"><b>Llamarse</b> literally means \"to call oneself\".</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "My name is Ana -> Me (FILL IN THE BLANK) Ana.",
       "hint": "Verb llamarse, yo",
       "answer": "llamo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "What's your name? (casual) -> ¿Cómo te (FILL IN THE BLANK)?",
       "hint": "Verb llamarse, tú",
       "answer": "llamas"
      },
      {
       "type": "TEXT",
       "prompt": "### **Nice to Meet You**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Mucho gusto**</td><td style=\"border:1px solid #ccc;padding:8px;\">Nice to meet you</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Encantado / Encantada**</td><td style=\"border:1px solid #ccc;padding:8px;\">Delighted (m / f)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Igualmente**</td><td style=\"border:1px solid #ccc;padding:8px;\">Likewise</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am Luis -> (FILL IN THE BLANK) Luis.",
       "hint": "Verb ser, yo",
       "answer": "Soy"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Nice to meet you -> (FILL IN THE BLANK) gusto",
       "hint": "Means \"much\"",
       "answer": "Mucho"
      },
      {
       "type": "TEXT",
       "prompt": "### **Introducing Others**",
       "html": "<p style=\"margin:8px 0;\"><i>Este es mi amigo.</i> (This is my friend, male) / <i>Esta es mi amiga.</i> (female)</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Likewise -> (FILL IN THE BLANK).",
       "hint": "One word",
       "answer": "Igualmente"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Delighted (said by a man) -> (FILL IN THE BLANK).",
       "hint": "Ends in -o",
       "answer": "Encantado"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice**",
       "html": "<p style=\"margin:8px 0;\">Time to introduce yourself!</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "What's your name? (polite) -> ¿Cómo se (FILL IN THE BLANK) usted?",
       "hint": "Verb llamarse, usted",
       "answer": "llama"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "This is my friend -> Este (FILL IN THE BLANK) mi amigo.",
       "hint": "Verb ser, él",
       "answer": "es"
      }
     ]
    },
    "T_GREET_5": {
     "title": "Greetings V: Tú vs. Usted",
     "tags": [
      "greetings",
      "formal",
      "informal",
      "politeness"
     ],
     "level": "beginner",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "Know when to be casual (tú) and when to be polite (usted).",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Two Ways to Say \"You\"**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Word</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Use with</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**tú**</td><td style=\"border:1px solid #ccc;padding:8px;\">Friends, family, kids, peers</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**usted**</td><td style=\"border:1px solid #ccc;padding:8px;\">Elders, bosses, strangers, customers</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Casual \"you\" -> (FILL IN THE BLANK)",
       "hint": "Accent on ú",
       "answer": "tú"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Polite \"you\" -> (FILL IN THE BLANK)",
       "hint": "Starts with u",
       "answer": "usted"
      },
      {
       "type": "TEXT",
       "prompt": "### **Same Question, Two Styles**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Casual</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Polite</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">¿Cómo estás?</td><td style=\"border:1px solid #ccc;padding:8px;\">¿Cómo está usted?</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">¿Cómo te llamas?</td><td style=\"border:1px solid #ccc;padding:8px;\">¿Cómo se llama usted?</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">Perdón</td><td style=\"border:1px solid #ccc;padding:8px;\">Disculpe</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Casual: ¿Cómo estás? Polite: ¿Cómo (FILL IN THE BLANK) usted?",
       "hint": "Accent on á",
       "answer": "está"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Good morning, Mrs. García -> Buenos días, (FILL IN THE BLANK) García.",
       "hint": "Contains ñ",
       "answer": "señora"
      },
      {
       "type": "TEXT",
       "prompt": "### **Polite Titles**",
       "html": "<p style=\"margin:8px 0;\"><b>señor</b> (Mr.), <b>señora</b> (Mrs.), <b>señorita</b> (Miss). Example: <i>Buenos días, señora García.</i></p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Casual: ¿Cómo te llamas? Polite: ¿Cómo se (FILL IN THE BLANK)?",
       "hint": "Verb llamarse",
       "answer": "llama"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "To a close friend you use (FILL IN THE BLANK). (tú or usted)",
       "hint": "Informal",
       "answer": "tú"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice**",
       "html": "<p style=\"margin:8px 0;\">Choose the right register.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Excuse me (to walk past someone) -> Con (FILL IN THE BLANK)",
       "hint": "Used when passing through",
       "answer": "permiso"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Excuse me (polite) -> (FILL IN THE BLANK), señor.",
       "hint": "Polite command of disculpar",
       "answer": "Disculpe"
      }
     ]
    },
    "T_GREET_6": {
     "title": "Greetings VI: Farewells & Good Wishes",
     "tags": [
      "greetings",
      "goodbye",
      "wishes",
      "celebrations"
     ],
     "level": "beginner",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "Go beyond adiós with warm goodbyes and wishes.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Many Ways to Say Goodbye**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Hasta pronto**</td><td style=\"border:1px solid #ccc;padding:8px;\">See you soon</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Hasta la próxima**</td><td style=\"border:1px solid #ccc;padding:8px;\">Until next time</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Cuídate**</td><td style=\"border:1px solid #ccc;padding:8px;\">Take care</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "See you soon -> Hasta (FILL IN THE BLANK)",
       "hint": "Means \"soon\"",
       "answer": "pronto"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Take care! -> ¡(FILL IN THE BLANK)!",
       "hint": "Accent on í",
       "answer": "Cuídate"
      },
      {
       "type": "TEXT",
       "prompt": "### **Good Wishes**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¡Buena suerte!**</td><td style=\"border:1px solid #ccc;padding:8px;\">Good luck!</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¡Felicidades!**</td><td style=\"border:1px solid #ccc;padding:8px;\">Congratulations!</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¡Feliz cumpleaños!**</td><td style=\"border:1px solid #ccc;padding:8px;\">Happy birthday!</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¡Que tengas un buen día!**</td><td style=\"border:1px solid #ccc;padding:8px;\">Have a nice day!</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Have a nice day -> ¡Que (FILL IN THE BLANK) un buen día!",
       "hint": "Verb tener, tú, subjunctive",
       "answer": "tengas"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Good luck -> ¡Buena (FILL IN THE BLANK)!",
       "hint": "Starts with su",
       "answer": "suerte"
      },
      {
       "type": "TEXT",
       "prompt": "### **Welcoming People**",
       "html": "<p style=\"margin:8px 0;\"><b>¡Bienvenido!</b> (to a man), <b>¡Bienvenida!</b> (to a woman), <b>¡Bienvenidos!</b> (to a group).</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Welcome (to a man) -> ¡(FILL IN THE BLANK)!",
       "hint": "Ends in -o",
       "answer": "Bienvenido"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Happy birthday -> ¡Feliz (FILL IN THE BLANK)!",
       "hint": "Contains ñ",
       "answer": "cumpleaños"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice**",
       "html": "<p style=\"margin:8px 0;\">Send your best wishes.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Until next time -> Hasta la (FILL IN THE BLANK)",
       "hint": "Accent on ó",
       "answer": "próxima"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Congratulations -> ¡(FILL IN THE BLANK)!",
       "hint": "Starts with Feli",
       "answer": "Felicidades"
      }
     ]
    },
    "T_GREET_7": {
     "title": "Greetings VII: Where Are You From?",
     "tags": [
      "greetings",
      "small-talk",
      "countries",
      "nationalities"
     ],
     "level": "beginner",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "Chat about where you live, where you are from and what languages you speak.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Where From?**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¿De dónde eres?**</td><td style=\"border:1px solid #ccc;padding:8px;\">Where are you from?</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Soy de México.**</td><td style=\"border:1px solid #ccc;padding:8px;\">I am from Mexico.</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Vivo en Colorado.**</td><td style=\"border:1px solid #ccc;padding:8px;\">I live in Colorado.</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Where are you from? -> ¿De (FILL IN THE BLANK) eres?",
       "hint": "Accent on ó",
       "answer": "dónde"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am from Mexico -> Soy de (FILL IN THE BLANK).",
       "hint": "Accent on é",
       "answer": "México"
      },
      {
       "type": "TEXT",
       "prompt": "### **Nationalities**",
       "html": "<p style=\"margin:8px 0;\">Masculine ends in -o, feminine in -a: <b>mexicano / mexicana</b>, <b>español / española</b>. <b>Estadounidense</b> stays the same.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am Spanish (a man) -> Soy (FILL IN THE BLANK).",
       "hint": "Contains ñ",
       "answer": "español"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "She is Mexican -> Ella es (FILL IN THE BLANK).",
       "hint": "Ends in -a",
       "answer": "mexicana"
      },
      {
       "type": "TEXT",
       "prompt": "### **Languages**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Hablo inglés.**</td><td style=\"border:1px solid #ccc;padding:8px;\">I speak English.</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¿Hablas español?**</td><td style=\"border:1px solid #ccc;padding:8px;\">Do you speak Spanish?</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Un poco.**</td><td style=\"border:1px solid #ccc;padding:8px;\">A little.</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I live in Colorado -> (FILL IN THE BLANK) en Colorado.",
       "hint": "Verb vivir, yo",
       "answer": "Vivo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I speak English -> (FILL IN THE BLANK) inglés.",
       "hint": "Verb hablar, yo",
       "answer": "Hablo"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice**",
       "html": "<p style=\"margin:8px 0;\">Get to know a new friend.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Do you speak Spanish? -> ¿(FILL IN THE BLANK) español?",
       "hint": "Verb hablar, tú",
       "answer": "Hablas"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "A little -> Un (FILL IN THE BLANK)",
       "hint": "Four letters",
       "answer": "poco"
      }
     ]
    },
    "T_GREET_8": {
     "title": "Greetings VIII: Ñus, Troncos & Cocodrilos (Safari Hellos!)",
     "tags": [
      "greetings",
      "animals",
      "vocabulary",
      "fun",
      "pronunciation"
     ],
     "level": "beginner",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "A wild finale: practice the ñ sound and greet a wildebeest, a log and a crocodile.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **The Mighty Ñ**",
       "html": "<p style=\"margin:8px 0;\"><b>ñ</b> sounds like the \"ny\" in \"canyon\". Say <b>ñu</b> (wildebeest), <b>mañana</b>, <b>español</b>.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "The wildebeest -> el (FILL IN THE BLANK)",
       "hint": "Starts with ñ",
       "answer": "ñu"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "The log -> el (FILL IN THE BLANK)",
       "hint": "Also Spanish slang for \"dude\"",
       "answer": "tronco"
      },
      {
       "type": "TEXT",
       "prompt": "### **Safari Vocabulary**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**el ñu**</td><td style=\"border:1px solid #ccc;padding:8px;\">the wildebeest (gnu)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**el tronco**</td><td style=\"border:1px solid #ccc;padding:8px;\">the log (in Spain also slang for \"dude\")</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**el cocodrilo**</td><td style=\"border:1px solid #ccc;padding:8px;\">the crocodile</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**el río**</td><td style=\"border:1px solid #ccc;padding:8px;\">the river</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**la selva**</td><td style=\"border:1px solid #ccc;padding:8px;\">the jungle</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "The crocodile -> el (FILL IN THE BLANK)",
       "hint": "Four syllables",
       "answer": "cocodrilo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Hello, wildebeest! -> ¡Hola, (FILL IN THE BLANK)!",
       "hint": "Starts with ñ",
       "answer": "ñu"
      },
      {
       "type": "TEXT",
       "prompt": "### **Wild Greetings**",
       "html": "<p style=\"margin:8px 0;\"><i>¡Hola, ñu!</i> <i>¿Qué tal, tronco?</i> <i>¡Hasta luego, cocodrilo!</i> (See you later, alligator!)</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "What's up, dude? -> ¿Qué tal, (FILL IN THE BLANK)?",
       "hint": "Slang",
       "answer": "tronco"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "See you later, alligator -> Hasta luego, (FILL IN THE BLANK).",
       "hint": "Reptile",
       "answer": "cocodrilo"
      },
      {
       "type": "TEXT",
       "prompt": "### **Final Challenge**",
       "html": "<p style=\"margin:8px 0;\">Greet the whole safari!</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "The crocodile is in the river -> El cocodrilo (FILL IN THE BLANK) en el río.",
       "hint": "Location, estar",
       "answer": "está"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Good morning, crocodile -> Buenos (FILL IN THE BLANK), cocodrilo.",
       "hint": "Accent on í",
       "answer": "días"
      }
     ]
    },
    "T_IOP_EASY": {
     "title": "Indirect Objects I: Me, Te, Le (Easy)",
     "tags": [
      "indirect-object",
      "pronouns",
      "iop",
      "easy"
     ],
     "level": "beginner",
     "targetXP": 12,
     "type": "TUTORIAL",
     "intro": "Indirect object pronouns tell you TO or FOR whom something is done.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **The Indirect Object Pronouns**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Pronoun</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Meaning</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**me**</td><td style=\"border:1px solid #ccc;padding:8px;\">to / for me</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**te**</td><td style=\"border:1px solid #ccc;padding:8px;\">to / for you (tú)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**le**</td><td style=\"border:1px solid #ccc;padding:8px;\">to / for him, her, you (usted)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**nos**</td><td style=\"border:1px solid #ccc;padding:8px;\">to / for us</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**les**</td><td style=\"border:1px solid #ccc;padding:8px;\">to / for them, you all</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "He gives me a gift -> Él (FILL IN THE BLANK) da un regalo.",
       "hint": "to me",
       "answer": "me"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I give you the book -> Yo (FILL IN THE BLANK) doy el libro.",
       "hint": "to you (tú)",
       "answer": "te"
      },
      {
       "type": "TEXT",
       "prompt": "### **Placement**",
       "html": "<p style=\"margin:8px 0;\">The pronoun goes right <b>before</b> the conjugated verb: <i>Él <b>me</b> da un regalo.</i> (He gives <u>me</u> a gift.)</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "She writes to him -> Ella (FILL IN THE BLANK) escribe.",
       "hint": "to him",
       "answer": "le"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "They tell us the news -> Ellos (FILL IN THE BLANK) dicen las noticias.",
       "hint": "to us",
       "answer": "nos"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice**",
       "html": "<p style=\"margin:8px 0;\">Choose the right pronoun.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I send them a letter -> Yo (FILL IN THE BLANK) mando una carta.",
       "hint": "to them",
       "answer": "les"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "She buys you a coffee -> Ella (FILL IN THE BLANK) compra un café.",
       "hint": "for you (tú)",
       "answer": "te"
      }
     ]
    },
    "T_IOP_HARD": {
     "title": "Indirect Objects II: Placement & Emphasis (Hard)",
     "tags": [
      "indirect-object",
      "pronouns",
      "iop",
      "hard",
      "commands"
     ],
     "level": "advanced",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "Attach pronouns to infinitives and commands, add emphasis with a + person, and use IOPs with verbs like gustar.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Attaching to Infinitives & Commands**",
       "html": "<p style=\"margin:8px 0;\">With an infinitive the pronoun can attach: <i>Quiero dar<b>le</b> un regalo.</i> With a command it must attach: <i><b>Dame</b> el libro.</i> (accent added to keep the stress)</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I want to give her a gift -> Quiero (FILL IN THE BLANK) un regalo. (dar + pronoun)",
       "hint": "Attach le to the infinitive",
       "answer": "darle"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I tell you the truth -> Yo te (FILL IN THE BLANK) la verdad. (decir)",
       "hint": "Irregular yo form",
       "answer": "digo"
      },
      {
       "type": "TEXT",
       "prompt": "### **Redundant \"le/les\"**",
       "html": "<p style=\"margin:8px 0;\">Spanish repeats the object: <i>A Juan <b>le</b> escribo una carta.</i> <i>A mis padres <b>les</b> mando flores.</i></p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I write Juan a letter -> A Juan (FILL IN THE BLANK) escribo una carta.",
       "hint": "Redundant pronoun",
       "answer": "le"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I send my parents flowers -> A mis padres (FILL IN THE BLANK) mando flores.",
       "hint": "Plural object",
       "answer": "les"
      },
      {
       "type": "TEXT",
       "prompt": "### **Emphasis & Gustar-type Verbs**",
       "html": "<p style=\"margin:8px 0;\"><i>A mí <b>me</b> gusta el café.</i> <i>¿<b>Te</b> duele la cabeza?</i> Verbs like gustar, doler and encantar always use IOPs.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I like coffee -> A mí (FILL IN THE BLANK) gusta el café.",
       "hint": "Gustar uses IOPs",
       "answer": "me"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Give me the book, please! -> (FILL IN THE BLANK) el libro, por favor.",
       "hint": "Command + me, accent needed",
       "answer": "Dame"
      },
      {
       "type": "TEXT",
       "prompt": "### **Challenge**",
       "html": "<p style=\"margin:8px 0;\">Place each pronoun correctly.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "She is explaining the lesson to us -> Ella (FILL IN THE BLANK) está explicando la lección.",
       "hint": "to us",
       "answer": "nos"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Does your head hurt? (casual) -> ¿(FILL IN THE BLANK) duele la cabeza?",
       "hint": "to you (tú)",
       "answer": "Te"
      }
     ]
    },
    "T_DOP_EASY": {
     "title": "Direct Objects I: Lo, La, Los, Las (Easy)",
     "tags": [
      "direct-object",
      "pronouns",
      "dop",
      "easy"
     ],
     "level": "beginner",
     "targetXP": 12,
     "type": "TUTORIAL",
     "intro": "Direct object pronouns replace the THING or PERSON receiving the action.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **The Direct Object Pronouns**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Pronoun</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Replaces</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**lo**</td><td style=\"border:1px solid #ccc;padding:8px;\">him / it (masculine)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**la**</td><td style=\"border:1px solid #ccc;padding:8px;\">her / it (feminine)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**los**</td><td style=\"border:1px solid #ccc;padding:8px;\">them (masculine / mixed)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**las**</td><td style=\"border:1px solid #ccc;padding:8px;\">them (feminine)</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**me, te, nos**</td><td style=\"border:1px solid #ccc;padding:8px;\">me, you, us</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I see the dog (it) -> Yo (FILL IN THE BLANK) veo.",
       "hint": "masculine singular",
       "answer": "lo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I eat the apple (it) -> Yo (FILL IN THE BLANK) como.",
       "hint": "feminine singular",
       "answer": "la"
      },
      {
       "type": "TEXT",
       "prompt": "### **Example**",
       "html": "<p style=\"margin:8px 0;\"><i>Veo el perro.</i> becomes <i>Yo <b>lo</b> veo.</i> The pronoun matches the gender and number of the noun it replaces.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I buy the shoes (them) -> Yo (FILL IN THE BLANK) compro.",
       "hint": "masculine plural",
       "answer": "los"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I open the doors (them) -> Yo (FILL IN THE BLANK) abro.",
       "hint": "feminine plural",
       "answer": "las"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice**",
       "html": "<p style=\"margin:8px 0;\">Replace each noun with its pronoun.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "He loves me -> Él (FILL IN THE BLANK) quiere.",
       "hint": "me",
       "answer": "me"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I see you (tú) -> Yo (FILL IN THE BLANK) veo.",
       "hint": "you",
       "answer": "te"
      }
     ]
    },
    "T_DOP_HARD": {
     "title": "Direct Objects II: Infinitives, Commands & Tenses (Hard)",
     "tags": [
      "direct-object",
      "pronouns",
      "dop",
      "hard",
      "commands"
     ],
     "level": "advanced",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "Move and attach direct object pronouns in every structure.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Position Rules**",
       "html": "<p style=\"margin:8px 0;\">Before a conjugated verb: <i><b>Lo</b> compro.</i> Attached to infinitives, gerunds and affirmative commands: <i>Quiero comprar<b>lo</b>. Estoy leyéndo<b>lo</b>. Cómelo.</i> Before a negative command: <i>No <b>lo</b> comas.</i></p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I want to buy it (el pan) -> Quiero (FILL IN THE BLANK).",
       "hint": "Attach lo to the infinitive",
       "answer": "comprarlo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am reading it (el libro) -> (FILL IN THE BLANK) estoy leyendo.",
       "hint": "Before the conjugated verb",
       "answer": "Lo"
      },
      {
       "type": "TEXT",
       "prompt": "### **The Personal \"a\"**",
       "html": "<p style=\"margin:8px 0;\">People take the personal a, and DOPs replace them too: <i>Veo a María</i> becomes <i><b>La</b> veo.</i></p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Eat it! (el pastel, tú command) -> ¡(FILL IN THE BLANK)!",
       "hint": "Attach lo, keep the stress with an accent",
       "answer": "Cómelo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Don't eat it! (tú) -> No (FILL IN THE BLANK) comas.",
       "hint": "Before a negative command",
       "answer": "lo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Did you do the homework? Yes, I did it -> Sí, (FILL IN THE BLANK) hice.",
       "hint": "la tarea",
       "answer": "la"
      },
      {
       "type": "TEXT",
       "prompt": "### **Challenge**",
       "html": "<p style=\"margin:8px 0;\">Choose the right form and position.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Who has the keys? I have them -> (FILL IN THE BLANK) tengo yo.",
       "hint": "las llaves",
       "answer": "Las"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I see María -> (FILL IN THE BLANK) veo a María.",
       "hint": "Replace the person",
       "answer": "La"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "They help us -> Ellos (FILL IN THE BLANK) ayudan.",
       "hint": "us",
       "answer": "nos"
      }
     ]
    },
    "T_REFLEX_EASY": {
     "title": "Reflexive Verbs I: Me, Te, Se (Easy)",
     "tags": [
      "reflexive",
      "pronouns",
      "daily-routine",
      "easy"
     ],
     "level": "beginner",
     "targetXP": 12,
     "type": "TUTORIAL",
     "intro": "Reflexive verbs describe actions you do to yourself, like waking up or washing.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Reflexive Pronouns**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Pronoun</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Example</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">yo</td><td style=\"border:1px solid #ccc;padding:8px;\">**me**</td><td style=\"border:1px solid #ccc;padding:8px;\">me despierto</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">tú</td><td style=\"border:1px solid #ccc;padding:8px;\">**te**</td><td style=\"border:1px solid #ccc;padding:8px;\">te lavas</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">él / ella / usted</td><td style=\"border:1px solid #ccc;padding:8px;\">**se**</td><td style=\"border:1px solid #ccc;padding:8px;\">se levanta</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">nosotros</td><td style=\"border:1px solid #ccc;padding:8px;\">**nos**</td><td style=\"border:1px solid #ccc;padding:8px;\">nos duchamos</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">ellos / ustedes</td><td style=\"border:1px solid #ccc;padding:8px;\">**se**</td><td style=\"border:1px solid #ccc;padding:8px;\">se visten</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I wake up -> Yo (FILL IN THE BLANK) despierto.",
       "hint": "yo",
       "answer": "me"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "You wash yourself -> Tú (FILL IN THE BLANK) lavas.",
       "hint": "tú",
       "answer": "te"
      },
      {
       "type": "TEXT",
       "prompt": "### **How to Spot Them**",
       "html": "<p style=\"margin:8px 0;\">In the dictionary reflexive verbs end in <b>-se</b>: <i>levantarse, lavarse, ducharse</i>.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "He gets up -> Él (FILL IN THE BLANK) levanta.",
       "hint": "él",
       "answer": "se"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "We shower -> Nosotros (FILL IN THE BLANK) duchamos.",
       "hint": "nosotros",
       "answer": "nos"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice**",
       "html": "<p style=\"margin:8px 0;\">Pick the right reflexive pronoun.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "They get dressed -> Ellos (FILL IN THE BLANK) visten.",
       "hint": "ellos",
       "answer": "se"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Levantarse ends in -(FILL IN THE BLANK) in the dictionary.",
       "hint": "Two letters",
       "answer": "se"
      }
     ]
    },
    "T_REFLEX_HARD": {
     "title": "Reflexive Verbs II: Infinitives, Commands & Tenses (Hard)",
     "tags": [
      "reflexive",
      "pronouns",
      "hard",
      "commands",
      "daily-routine"
     ],
     "level": "advanced",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "Attach reflexive pronouns to infinitives and commands and use them across tenses.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Position & Attachment**",
       "html": "<p style=\"margin:8px 0;\">Infinitive: <i>Quiero levantar<b>me</b> temprano.</i> Gerund: <i>Estoy lavándo<b>me</b>.</i> Affirmative command: <i><b>Levántate</b>.</i> Negative command: <i>No <b>te</b> levantes.</i></p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I want to get up early -> Quiero (FILL IN THE BLANK) temprano.",
       "hint": "Attach me to the infinitive",
       "answer": "levantarme"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am washing my hands -> Estoy (FILL IN THE BLANK) las manos.",
       "hint": "Gerund + me, accent",
       "answer": "lavándome"
      },
      {
       "type": "TEXT",
       "prompt": "### **Stem Changes Still Apply**",
       "html": "<p style=\"margin:8px 0;\"><i>despertarse → me despierto</i>, <i>acostarse → nos acostamos</i>, <i>divertirse → se divierten</i>.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Yesterday I fell asleep early -> Ayer (FILL IN THE BLANK) dormí temprano.",
       "hint": "Preterite with reflexive",
       "answer": "me"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "We go to bed at seven -> Nos (FILL IN THE BLANK) a las siete.",
       "hint": "acostarse, nosotros",
       "answer": "acostamos"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "He brushes his hair -> Él se (FILL IN THE BLANK) el pelo.",
       "hint": "cepillarse, él",
       "answer": "cepilla"
      },
      {
       "type": "TEXT",
       "prompt": "### **Challenge**",
       "html": "<p style=\"margin:8px 0;\">Complete each tricky sentence.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Get up! (tú command) -> ¡(FILL IN THE BLANK)!",
       "hint": "Attach te, add accent",
       "answer": "Levántate"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Don't get up! (tú) -> No (FILL IN THE BLANK) levantes.",
       "hint": "Before negative command",
       "answer": "te"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "My friends have fun a lot -> Mis amigos se (FILL IN THE BLANK) mucho.",
       "hint": "divertirse, e→ie",
       "answer": "divierten"
      }
     ]
    },
    "T_PRONOUN_MIX_I": {
     "title": "All Together I: Full Sentences (Level 1)",
     "tags": [
      "pronouns",
      "indirect-object",
      "direct-object",
      "reflexive",
      "sentences"
     ],
     "level": "intermediate",
     "targetXP": 12,
     "type": "TUTORIAL",
     "intro": "Mix IOPs, DOPs and reflexives in short full sentences.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Which Pronoun?**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Question</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Type</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">To/for whom?</td><td style=\"border:1px solid #ccc;padding:8px;\">IOP: me, te, le, nos, les</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">What/whom?</td><td style=\"border:1px solid #ccc;padding:8px;\">DOP: lo, la, los, las</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">Myself?</td><td style=\"border:1px solid #ccc;padding:8px;\">Reflexive: me, te, se, nos</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "She gives me the book -> Ella (FILL IN THE BLANK) da el libro.",
       "hint": "IOP",
       "answer": "me"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I see him (Pedro) at school -> Yo (FILL IN THE BLANK) veo en la escuela.",
       "hint": "DOP",
       "answer": "lo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "We wash our hands -> Nosotros (FILL IN THE BLANK) lavamos las manos.",
       "hint": "Reflexive",
       "answer": "nos"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice**",
       "html": "<p style=\"margin:8px 0;\">Decide which kind of pronoun each sentence needs.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I write a letter to her -> Yo (FILL IN THE BLANK) escribo una carta.",
       "hint": "IOP",
       "answer": "le"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "They wake up early -> Ellos (FILL IN THE BLANK) despiertan temprano.",
       "hint": "Reflexive",
       "answer": "se"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I buy the cake for you (tú) -> Yo (FILL IN THE BLANK) compro el pastel.",
       "hint": "IOP",
       "answer": "te"
      }
     ]
    },
    "T_PRONOUN_MIX_II": {
     "title": "All Together II: Double Pronouns (Level 2)",
     "tags": [
      "pronouns",
      "indirect-object",
      "direct-object",
      "reflexive",
      "sentences",
      "double-pronouns"
     ],
     "level": "intermediate",
     "targetXP": 14,
     "type": "TUTORIAL",
     "intro": "Combine two pronouns: the indirect object comes first, then the direct object.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Order: I.O. then D.O.**",
       "html": "<p style=\"margin:8px 0;\"><i>Yo <b>te lo</b> doy.</i> (I give it to you.) Remember: <b>le/les + lo/la/los/las</b> becomes <b>se lo / se la / se los / se las</b>.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I give it to you (the gift) -> Yo (FILL IN THE BLANK) doy.",
       "hint": "IOP then DOP",
       "answer": "te lo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "He gives it to her (the gift) -> Él (FILL IN THE BLANK) da.",
       "hint": "le + lo becomes se lo",
       "answer": "se lo"
      },
      {
       "type": "TEXT",
       "prompt": "### **Reflexive + Object**",
       "html": "<p style=\"margin:8px 0;\"><i>Me lavo <b>las</b> manos.</i> Body parts use the article (las manos), not \"my\".</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "She tells it to us (the story) -> Ella (FILL IN THE BLANK) cuenta.",
       "hint": "nos + la",
       "answer": "nos la"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "We send them to you (the photos) -> Nosotros (FILL IN THE BLANK) mandamos.",
       "hint": "te + las",
       "answer": "te las"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice**",
       "html": "<p style=\"margin:8px 0;\">Build the double pronouns.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I brush my teeth -> Me (FILL IN THE BLANK) los dientes.",
       "hint": "cepillarse, yo",
       "answer": "cepillo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I wash my hands -> Me lavo (FILL IN THE BLANK) manos.",
       "hint": "Article, not \"my\"",
       "answer": "las"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Can you give it to me? (el libro) -> ¿Puedes (FILL IN THE BLANK)?",
       "hint": "Infinitive + me + lo, accent",
       "answer": "dármelo"
      }
     ]
    },
    "T_PRONOUN_MIX_III": {
     "title": "All Together III: Real-Life Sentences (Level 3)",
     "tags": [
      "pronouns",
      "indirect-object",
      "direct-object",
      "reflexive",
      "sentences",
      "double-pronouns",
      "hard"
     ],
     "level": "advanced",
     "targetXP": 16,
     "type": "TUTORIAL",
     "intro": "The final boss of pronouns: tenses, commands and double pronouns in realistic sentences.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Putting It All Together**",
       "html": "<p style=\"margin:8px 0;\">Check each sentence: who is the subject, what is being done, to whom, and is the verb reflexive? Then place pronouns <b>before</b> a conjugated verb or <b>attach</b> them to infinitives, gerunds and affirmative commands.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Yesterday my mother bought me a gift -> Ayer mi madre me (FILL IN THE BLANK) un regalo.",
       "hint": "Preterite of comprar",
       "answer": "compró"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "The gift? I already gave it to them -> ¿El regalo? Ya (FILL IN THE BLANK) di.",
       "hint": "les + lo",
       "answer": "se lo"
      },
      {
       "type": "TEXT",
       "prompt": "### **Watch Out**",
       "html": "<p style=\"margin:8px 0;\">Add an accent when attaching pronouns would move the stress: <i>dímelo, ponérmela, dándoselo</i>.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Tomorrow I'm going to get up early -> Mañana (FILL IN THE BLANK) voy a levantar temprano.",
       "hint": "Reflexive before conjugated verb",
       "answer": "me"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "The jacket? I want to put it on -> ¿La chaqueta? Quiero (FILL IN THE BLANK).",
       "hint": "Infinitive + me + la, accent",
       "answer": "ponérmela"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I told it to you (the secret) -> Yo (FILL IN THE BLANK) dije.",
       "hint": "IOP then DOP",
       "answer": "te lo"
      },
      {
       "type": "TEXT",
       "prompt": "### **Final Challenge**",
       "html": "<p style=\"margin:8px 0;\">Eight real-life sentences.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "The kids put on their shoes -> Los niños (FILL IN THE BLANK) los zapatos.",
       "hint": "ponerse, ellos",
       "answer": "se ponen"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Tell it to me! (the truth) -> ¡(FILL IN THE BLANK)!",
       "hint": "Command + me + lo, accent",
       "answer": "Dímelo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Don't tell it to anyone! (tú) -> No (FILL IN THE BLANK) digas a nadie.",
       "hint": "Negative command, se lo",
       "answer": "se lo"
      }
     ]
    },
    "T_PRESENT_PROGRESSIVE": {
     "title": "Present Progressive: Estar + Gerund (What Are You Doing?)",
     "tags": [
      "progressive",
      "gerund",
      "estar",
      "present",
      "everyday"
     ],
     "level": "intermediate",
     "targetXP": 24,
     "type": "TUTORIAL",
     "intro": "Say what is happening right now with estar plus the gerund: estoy hablando, están nadando, se está duchando.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **What Is the Present Progressive?**",
       "html": "<p style=\"margin:8px 0;\">It describes an action <b>in progress right now</b>: <i>Estoy estudiando.</i> (I am studying.) The formula is <b>estar + gerund</b>.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am speaking -> Yo estoy (FILL IN THE BLANK).",
       "hint": "-ar → -ando",
       "answer": "hablando"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "You are eating (tú) -> Tú estás (FILL IN THE BLANK).",
       "hint": "-er → -iendo",
       "answer": "comiendo"
      },
      {
       "type": "TEXT",
       "prompt": "### **Step 1: Estar (Present)**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Estar</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">yo</td><td style=\"border:1px solid #ccc;padding:8px;\">**estoy**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">tú</td><td style=\"border:1px solid #ccc;padding:8px;\">**estás**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">él / ella / usted</td><td style=\"border:1px solid #ccc;padding:8px;\">**está**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">nosotros</td><td style=\"border:1px solid #ccc;padding:8px;\">**estamos**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">ellos / ustedes</td><td style=\"border:1px solid #ccc;padding:8px;\">**están**</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "She is living in Denver -> Ella está (FILL IN THE BLANK) en Denver.",
       "hint": "-ir → -iendo",
       "answer": "viviendo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "We are swimming -> Nosotros estamos (FILL IN THE BLANK).",
       "hint": "nadar",
       "answer": "nadando"
      },
      {
       "type": "TEXT",
       "prompt": "### **Step 2: Build the Gerund**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Ending</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Gerund</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Example</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">-ar</td><td style=\"border:1px solid #ccc;padding:8px;\">**-ando**</td><td style=\"border:1px solid #ccc;padding:8px;\">hablar → hablando, nadar → nadando</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">-er</td><td style=\"border:1px solid #ccc;padding:8px;\">**-iendo**</td><td style=\"border:1px solid #ccc;padding:8px;\">comer → comiendo, beber → bebiendo</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">-ir</td><td style=\"border:1px solid #ccc;padding:8px;\">**-iendo**</td><td style=\"border:1px solid #ccc;padding:8px;\">vivir → viviendo, subir → subiendo</td></tr></table><p style=\"margin:8px 0;\">The gerund <b>never changes</b> for gender or number.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "They are dancing -> Ellos (FILL IN THE BLANK) bailando.",
       "hint": "estar, ellos",
       "answer": "están"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "He is reading -> Él está (FILL IN THE BLANK).",
       "hint": "i → y",
       "answer": "leyendo"
      },
      {
       "type": "TEXT",
       "prompt": "### **Step 3: Irregular Gerunds**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Infinitive</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Gerund</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Why</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">leer</td><td style=\"border:1px solid #ccc;padding:8px;\">**leyendo**</td><td style=\"border:1px solid #ccc;padding:8px;\">i between vowels becomes y</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">oír</td><td style=\"border:1px solid #ccc;padding:8px;\">**oyendo**</td><td style=\"border:1px solid #ccc;padding:8px;\">i between vowels becomes y</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">dormir</td><td style=\"border:1px solid #ccc;padding:8px;\">**durmiendo**</td><td style=\"border:1px solid #ccc;padding:8px;\">o → u stem change</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">pedir</td><td style=\"border:1px solid #ccc;padding:8px;\">**pidiendo**</td><td style=\"border:1px solid #ccc;padding:8px;\">e → i stem change</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">decir</td><td style=\"border:1px solid #ccc;padding:8px;\">**diciendo**</td><td style=\"border:1px solid #ccc;padding:8px;\">e → i stem change</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">reír</td><td style=\"border:1px solid #ccc;padding:8px;\">**riendo**</td><td style=\"border:1px solid #ccc;padding:8px;\">accent dropped</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">ir</td><td style=\"border:1px solid #ccc;padding:8px;\">**yendo**</td><td style=\"border:1px solid #ccc;padding:8px;\">irregular</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am sleeping -> Estoy (FILL IN THE BLANK).",
       "hint": "o → u",
       "answer": "durmiendo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "You are asking for a drink (tú) -> Estás (FILL IN THE BLANK) una bebida.",
       "hint": "e → i",
       "answer": "pidiendo"
      },
      {
       "type": "TEXT",
       "prompt": "### **Step 4: Pronouns**",
       "html": "<p style=\"margin:8px 0;\">Put the pronoun <b>before estar</b>: <i>Me estoy duchando.</i> <i>Lo estoy comiendo.</i> Or <b>attach it</b> to the gerund and add an accent: <i>Estoy duchándome.</i> <i>Estoy comiéndolo.</i></p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "We are telling the truth -> Estamos (FILL IN THE BLANK) la verdad.",
       "hint": "decir",
       "answer": "diciendo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am taking a shower -> Me estoy (FILL IN THE BLANK).",
       "hint": "ducharse",
       "answer": "duchando"
      },
      {
       "type": "TEXT",
       "prompt": "### **Step 5: Practice Time**",
       "html": "<p style=\"margin:8px 0;\">Twelve questions: regular gerunds first, then irregular ones, then pronouns.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am eating it (la pizza) -> Estoy (FILL IN THE BLANK).",
       "hint": "Attach la and add an accent",
       "answer": "comiéndola"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "The horse is galloping -> El caballo está (FILL IN THE BLANK).",
       "hint": "galopar",
       "answer": "galopando"
      }
     ]
    },
    "T_TENER_WEATHER": {
     "title": "Tener Expressions & Weather: Hungry, Cold, Sunny!",
     "tags": [
      "idioms",
      "tener",
      "weather",
      "beach",
      "everyday"
     ],
     "level": "beginner",
     "targetXP": 24,
     "type": "TUTORIAL",
     "intro": "Spanish uses tener for many feelings and hacer for the weather. Learn the expressions that make beach days and chilly nights easy.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Tener = To Have (and To Feel!)**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Tener</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">yo</td><td style=\"border:1px solid #ccc;padding:8px;\">**tengo**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">tú</td><td style=\"border:1px solid #ccc;padding:8px;\">**tienes**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">él / ella / usted</td><td style=\"border:1px solid #ccc;padding:8px;\">**tiene**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">nosotros</td><td style=\"border:1px solid #ccc;padding:8px;\">**tenemos**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">ellos / ustedes</td><td style=\"border:1px solid #ccc;padding:8px;\">**tienen**</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am hungry -> Yo (FILL IN THE BLANK) hambre.",
       "hint": "tener, yo",
       "answer": "tengo"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Are you thirsty? (tú) -> ¿(FILL IN THE BLANK) sed?",
       "hint": "tener, tú",
       "answer": "Tienes"
      },
      {
       "type": "TEXT",
       "prompt": "### **Feelings with Tener**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**tener hambre**</td><td style=\"border:1px solid #ccc;padding:8px;\">to be hungry</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**tener sed**</td><td style=\"border:1px solid #ccc;padding:8px;\">to be thirsty</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**tener frío / calor**</td><td style=\"border:1px solid #ccc;padding:8px;\">to be cold / hot</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**tener sueño**</td><td style=\"border:1px solid #ccc;padding:8px;\">to be sleepy</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**tener miedo**</td><td style=\"border:1px solid #ccc;padding:8px;\">to be afraid</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**tener prisa**</td><td style=\"border:1px solid #ccc;padding:8px;\">to be in a hurry</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**tener razón**</td><td style=\"border:1px solid #ccc;padding:8px;\">to be right</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**tener ganas de**</td><td style=\"border:1px solid #ccc;padding:8px;\">to feel like</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**tener ... años**</td><td style=\"border:1px solid #ccc;padding:8px;\">to be ... years old</td></tr></table><p style=\"margin:8px 0;\">In English we say \"I <u>am</u> hungry\". In Spanish we literally say \"I <u>have</u> hunger\".</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "She is cold -> Ella tiene (FILL IN THE BLANK).",
       "hint": "Opposite of calor",
       "answer": "frío"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "We are hot -> Nosotros (FILL IN THE BLANK) calor.",
       "hint": "tener, nosotros",
       "answer": "tenemos"
      },
      {
       "type": "TEXT",
       "prompt": "### **Weather with Hacer**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Hace sol**</td><td style=\"border:1px solid #ccc;padding:8px;\">It is sunny</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Hace calor / frío**</td><td style=\"border:1px solid #ccc;padding:8px;\">It is hot / cold</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Hace viento**</td><td style=\"border:1px solid #ccc;padding:8px;\">It is windy</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Hace buen / mal tiempo**</td><td style=\"border:1px solid #ccc;padding:8px;\">The weather is good / bad</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "They are sleepy -> Ellos tienen (FILL IN THE BLANK).",
       "hint": "Contains ñ",
       "answer": "sueño"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am afraid -> Tengo (FILL IN THE BLANK).",
       "hint": "Fear",
       "answer": "miedo"
      },
      {
       "type": "TEXT",
       "prompt": "### **Weather Verbs**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Llueve**</td><td style=\"border:1px solid #ccc;padding:8px;\">It rains / is raining</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Nieva**</td><td style=\"border:1px solid #ccc;padding:8px;\">It snows / is snowing</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Está nublado**</td><td style=\"border:1px solid #ccc;padding:8px;\">It is cloudy</td></tr></table><p style=\"margin:8px 0;\"><b>Hacer</b> is for weather, <b>tener</b> is for people, and <b>estar</b> is for things: <i>El café está caliente.</i></p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am twenty years old -> Tengo veinte (FILL IN THE BLANK).",
       "hint": "Contains ñ",
       "answer": "años"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "It is sunny -> Hace (FILL IN THE BLANK).",
       "hint": "Three letters",
       "answer": "sol"
      },
      {
       "type": "TEXT",
       "prompt": "### **Beach Vocabulary**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">la playa</td><td style=\"border:1px solid #ccc;padding:8px;\">the beach</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">la arena</td><td style=\"border:1px solid #ccc;padding:8px;\">the sand</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">el mar / las olas</td><td style=\"border:1px solid #ccc;padding:8px;\">the sea / the waves</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">la toalla</td><td style=\"border:1px solid #ccc;padding:8px;\">the towel</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">el bronceador</td><td style=\"border:1px solid #ccc;padding:8px;\">the sunscreen</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">las gafas de sol</td><td style=\"border:1px solid #ccc;padding:8px;\">sunglasses</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">el traje de baño</td><td style=\"border:1px solid #ccc;padding:8px;\">the swimsuit</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">la sombrilla</td><td style=\"border:1px solid #ccc;padding:8px;\">the beach umbrella</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "It is windy -> Hace (FILL IN THE BLANK).",
       "hint": "Starts with vi",
       "answer": "viento"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "It is raining -> (FILL IN THE BLANK).",
       "hint": "Verb llover",
       "answer": "Llueve"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice Time**",
       "html": "<p style=\"margin:8px 0;\">Twelve questions: feelings, weather, then beach words.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "The sunscreen -> el (FILL IN THE BLANK)",
       "hint": "Also called protector solar",
       "answer": "bronceador"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "The beach towel -> la (FILL IN THE BLANK) de playa",
       "hint": "You dry off with it",
       "answer": "toalla"
      }
     ]
    },
    "T_PLANS_IR_A": {
     "title": "Making Plans: Ir a + Infinitive & Invitations",
     "tags": [
      "plans",
      "ir-a",
      "future",
      "invitations",
      "dates",
      "everyday"
     ],
     "level": "beginner",
     "targetXP": 24,
     "type": "TUTORIAL",
     "intro": "Talk about what you are going to do, invite someone out, and say yes or no politely.",
     "content": [
      {
       "type": "TEXT",
       "prompt": "### **Ir (Present)**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Ir</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">yo</td><td style=\"border:1px solid #ccc;padding:8px;\">**voy**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">tú</td><td style=\"border:1px solid #ccc;padding:8px;\">**vas**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">él / ella / usted</td><td style=\"border:1px solid #ccc;padding:8px;\">**va**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">nosotros</td><td style=\"border:1px solid #ccc;padding:8px;\">**vamos**</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">ellos / ustedes</td><td style=\"border:1px solid #ccc;padding:8px;\">**van**</td></tr></table><p style=\"margin:8px 0;\">The formula for near-future plans: <b>ir + a + infinitive</b>. <i>Voy a nadar.</i> (I am going to swim.)</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I am going to swim -> Voy a (FILL IN THE BLANK).",
       "hint": "Infinitive",
       "answer": "nadar"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "You are going to eat (tú) -> Tú (FILL IN THE BLANK) a comer.",
       "hint": "ir, tú",
       "answer": "vas"
      },
      {
       "type": "TEXT",
       "prompt": "### **Time Words**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">hoy</td><td style=\"border:1px solid #ccc;padding:8px;\">today</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">mañana</td><td style=\"border:1px solid #ccc;padding:8px;\">tomorrow</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">esta noche</td><td style=\"border:1px solid #ccc;padding:8px;\">tonight</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">el sábado</td><td style=\"border:1px solid #ccc;padding:8px;\">on Saturday</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">la próxima semana</td><td style=\"border:1px solid #ccc;padding:8px;\">next week</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">pronto</td><td style=\"border:1px solid #ccc;padding:8px;\">soon</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "She is going to dance -> Ella va a (FILL IN THE BLANK).",
       "hint": "Infinitive",
       "answer": "bailar"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "We are going to travel -> Nosotros (FILL IN THE BLANK) a viajar.",
       "hint": "ir, nosotros",
       "answer": "vamos"
      },
      {
       "type": "TEXT",
       "prompt": "### **Inviting Someone**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¿Quieres ir a la playa?**</td><td style=\"border:1px solid #ccc;padding:8px;\">Do you want to go to the beach?</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¿Te gustaría cenar conmigo?**</td><td style=\"border:1px solid #ccc;padding:8px;\">Would you like to have dinner with me?</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¡Vamos al cine!**</td><td style=\"border:1px solid #ccc;padding:8px;\">Let's go to the movies!</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "They are going to visit us -> Ellos (FILL IN THE BLANK) a visitarnos.",
       "hint": "ir, ellos",
       "answer": "van"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Tomorrow I am going to study -> (FILL IN THE BLANK) voy a estudiar.",
       "hint": "Contains ñ",
       "answer": "Mañana"
      },
      {
       "type": "TEXT",
       "prompt": "### **Saying Yes or No**",
       "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background-color:#f7f7f7;\"><tr><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">Spanish</th><th style=\"border:1px solid #ccc;padding:8px;background-color:#ddd;\">English</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¡Claro que sí!**</td><td style=\"border:1px solid #ccc;padding:8px;\">Of course!</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**¡Me encantaría!**</td><td style=\"border:1px solid #ccc;padding:8px;\">I would love to!</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Lo siento, no puedo.**</td><td style=\"border:1px solid #ccc;padding:8px;\">Sorry, I can't.</td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;\">**Tengo que trabajar.**</td><td style=\"border:1px solid #ccc;padding:8px;\">I have to work.</td></tr></table>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Tonight I am going to the movies -> Esta (FILL IN THE BLANK) voy al cine.",
       "hint": "Night",
       "answer": "noche"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Do you want to go to the beach? -> ¿(FILL IN THE BLANK) ir a la playa?",
       "hint": "querer, tú",
       "answer": "Quieres"
      },
      {
       "type": "TEXT",
       "prompt": "### **Setting the Details**",
       "html": "<p style=\"margin:8px 0;\"><i>¿A qué hora nos vemos?</i> (What time do we meet?) <i>¿Dónde nos vemos?</i> (Where do we meet?) <i>Nos vemos a las ocho.</i> (See you at eight.)</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Let's go! -> ¡(FILL IN THE BLANK)!",
       "hint": "ir, nosotros",
       "answer": "Vamos"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "I would love to! -> ¡Me (FILL IN THE BLANK)!",
       "hint": "Conditional of encantar",
       "answer": "encantaría"
      },
      {
       "type": "TEXT",
       "prompt": "### **Practice Time**",
       "html": "<p style=\"margin:8px 0;\">Twelve questions: ir a, time words, then invitations.</p>"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "Sorry, I can't -> Lo (FILL IN THE BLANK), no puedo.",
       "hint": "Verb sentir",
       "answer": "siento"
      },
      {
       "type": "FILL_IN_BLANK",
       "prompt": "What time do we meet? -> ¿A qué (FILL IN THE BLANK) nos vemos?",
       "hint": "Time",
       "answer": "hora"
      }
     ]
    },

    "T_PRETERIT_IV": {
        title: "Preterite IV: Stem Changes & Spelling Changes (-ir, -car/-gar/-zar, i→y)",
        tags: ["preterite","stem-change"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Some regular-looking verbs shift in the preterite. Learn the three patterns and you will conjugate hundreds of verbs correctly.",
        content: [ { "type": "TEXT", "prompt": "### **Pattern 1: -IR stem changers (only él & ellos)**", "html": "<p>Verbs like <b>pedir, dormir, morir, reír</b> change a vowel ONLY in the third person: e→i, o→u.</p><table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">pedir</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">dormir</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">morir</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>pedí</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>dormí</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>morí</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>pediste</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>dormiste</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>moriste</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>pidió</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>durmió</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>murió</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>pedimos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>dormimos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>morimos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>pidieron</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>durmieron</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>murieron</b></td></tr></table><p>Notice yo, tú, and nosotros are normal!</p>" }, { "type": "FILL_IN_BLANK", "prompt": "She ordered a coffee. -> Ella (FILL IN THE BLANK) un café.", "hint": "Preterite of pedir", "answer": "pidió" }, { "type": "FILL_IN_BLANK", "prompt": "They slept in the car. -> Ellos (FILL IN THE BLANK) en el coche.", "hint": "Preterite of dormir", "answer": "durmieron" }, { "type": "TEXT", "prompt": "### **Pattern 2: i → y between vowels**", "html": "<p>Verbs like <b>leer, creer, caer, construir, destruir</b>: the -ió / -ieron endings become <b>-yó / -yeron</b>.</p><table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">leer</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">construir</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>leí</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>construí</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>leíste</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>construiste</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>leyó</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>construyó</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>leímos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>construimos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>leyeron</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>construyeron</b></td></tr></table>" }, { "type": "FILL_IN_BLANK", "prompt": "He read the letter. -> Él (FILL IN THE BLANK) la carta.", "hint": "Preterite of leer", "answer": "leyó" }, { "type": "FILL_IN_BLANK", "prompt": "They built a bridge. -> Ellos (FILL IN THE BLANK) un puente.", "hint": "Preterite of construir", "answer": "construyeron" }, { "type": "TEXT", "prompt": "### **Pattern 3: Yo-form spelling (-car, -gar, -zar)**", "html": "<p>To keep the sound, the yo form changes: <b>c→qu</b> (busqué), <b>g→gu</b> (llegué), <b>z→c</b> (empecé).</p><ul><li>buscar → <b>busqué</b></li><li>llegar → <b>llegué</b></li><li>empezar → <b>empecé</b></li><li>jugar → <b>jugué</b></li></ul>" }, { "type": "FILL_IN_BLANK", "prompt": "I looked for my glasses. -> Yo (FILL IN THE BLANK) mis gafas.", "hint": "Preterite of buscar", "answer": "busqué" }, { "type": "FILL_IN_BLANK", "prompt": "I played tennis. -> Yo (FILL IN THE BLANK) al tenis.", "hint": "Preterite of jugar", "answer": "jugué" }, { "type": "TEXT", "prompt": "Great work!", "html": "<p>Next: combine all the preterite patterns in the Preterite Drill lessons.</p>" } ]
    },

    "T_PRETERIT_V": {
        title: "Preterite V: Irregular Stems Deep Dive (u-stem, i-stem, j-stem)",
        tags: ["preterite","irregular"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Irregular preterite verbs fall into families. Learn the family and the endings: -e, -iste, -o, -imos, -ieron (no accents!).",
        content: [ { "type": "TEXT", "prompt": "### **u-stem family**", "html": "<p>estar → <b>estuv-</b>, tener → <b>tuv-</b>, poder → <b>pud-</b>, poner → <b>pus-</b>, saber → <b>sup-</b>, haber → <b>hub-</b></p><table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">tener</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">poder</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">saber</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tuve</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>pude</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>supe</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tuviste</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>pudiste</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>supiste</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tuvo</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>pudo</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>supo</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tuvimos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>pudimos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>supimos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tuvieron</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>pudieron</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>supieron</b></td></tr></table>" }, { "type": "FILL_IN_BLANK", "prompt": "I was at the party. -> Yo (FILL IN THE BLANK) en la fiesta.", "hint": "Preterite of estar", "answer": "estuve" }, { "type": "FILL_IN_BLANK", "prompt": "We were able to leave. -> Nosotros (FILL IN THE BLANK) salir.", "hint": "Preterite of poder", "answer": "pudimos" }, { "type": "TEXT", "prompt": "### **i-stem family**", "html": "<p>hacer → <b>hic-</b> (hizo!), querer → <b>quis-</b>, venir → <b>vin-</b></p><table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">hacer</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">querer</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">venir</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hice</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>quise</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>vine</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hiciste</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>quisiste</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>viniste</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hizo</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>quiso</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>vino</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hicimos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>quisimos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>vinimos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hicieron</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>quisieron</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>vinieron</b></td></tr></table>" }, { "type": "FILL_IN_BLANK", "prompt": "She made a cake. -> Ella (FILL IN THE BLANK) un pastel.", "hint": "Preterite of hacer", "answer": "hizo" }, { "type": "FILL_IN_BLANK", "prompt": "They came late. -> Ellos (FILL IN THE BLANK) tarde.", "hint": "Preterite of venir", "answer": "vinieron" }, { "type": "TEXT", "prompt": "### **j-stem family: ellos ends in -eron (not -ieron)**", "html": "<p>decir → <b>dij-</b>, traer → <b>traj-</b>, conducir → <b>conduj-</b></p><table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">decir</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">traer</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">conducir</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>dije</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>traje</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>conduje</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>dijiste</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>trajiste</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>condujiste</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>dijo</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>trajo</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>condujo</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>dijimos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>trajimos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>condujimos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>dijeron</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>trajeron</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>condujeron</b></td></tr></table>" }, { "type": "FILL_IN_BLANK", "prompt": "They told the truth. -> Ellos (FILL IN THE BLANK) la verdad.", "hint": "Preterite of decir", "answer": "dijeron" }, { "type": "FILL_IN_BLANK", "prompt": "You brought dessert. -> Tú (FILL IN THE BLANK) el postre.", "hint": "Preterite of traer", "answer": "trajiste" }, { "type": "TEXT", "prompt": "### **Shared forms: ser / ir**", "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">ser</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">ir</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fui</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fui</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fuiste</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fuiste</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fue</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fue</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fuimos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fuimos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fueron</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fueron</b></td></tr></table><p>Context tells you which one it is: <i>Fue al cine</i> (went) vs. <i>Fue un día genial</i> (was).</p>" }, { "type": "FILL_IN_BLANK", "prompt": "We went to Denver. -> Nosotros (FILL IN THE BLANK) a Denver.", "hint": "Preterite of ir", "answer": "fuimos" } ]
    },

    "T_IMPERFECT_IV": {
        title: "Imperfect IV: Habits, Descriptions, and Ongoing Actions",
        tags: ["imperfect"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Master the three jobs of the imperfect: what used to happen, what was happening, and background description.",
        content: [ { "type": "TEXT", "prompt": "### **Three jobs of the imperfect**", "html": "<ul><li><b>Habits:</b> Cuando era niño, jugaba cada día.</li><li><b>Ongoing action:</b> Yo leía cuando sonó el teléfono.</li><li><b>Description:</b> Era tarde, hacía frío y yo tenía sueño.</li></ul><p>Trigger words: siempre, a menudo, todos los días, mientras, cada verano.</p>" }, { "type": "TEXT", "prompt": "### **Endings & the only 3 irregulars**", "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">hablar</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">comer</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">ser</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">ir</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">ver</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablaba</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>comía</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>era</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>iba</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>veía</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablabas</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>comías</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>eras</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>ibas</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>veías</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablaba</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>comía</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>era</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>iba</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>veía</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablábamos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>comíamos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>éramos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>íbamos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>veíamos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablaban</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>comían</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>eran</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>iban</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>veían</b></td></tr></table>" }, { "type": "FILL_IN_BLANK", "prompt": "I used to talk a lot as a child. -> Yo (FILL IN THE BLANK) mucho de niño.", "hint": "Imperfect of hablar", "answer": "hablaba" }, { "type": "FILL_IN_BLANK", "prompt": "We used to go to the beach. -> Nosotros (FILL IN THE BLANK) a la playa.", "hint": "Imperfect of ir", "answer": "íbamos" }, { "type": "FILL_IN_BLANK", "prompt": "They were friends. -> Ellos (FILL IN THE BLANK) amigos.", "hint": "Imperfect of ser", "answer": "eran" }, { "type": "FILL_IN_BLANK", "prompt": "You used to watch cartoons. -> Tú (FILL IN THE BLANK) dibujos animados.", "hint": "Imperfect of ver", "answer": "veías" }, { "type": "FILL_IN_BLANK", "prompt": "I was ten years old. -> Yo (FILL IN THE BLANK) diez años.", "hint": "Imperfect of tener", "answer": "tenía" } ]
    },

    "T_PRET_VS_IMPERF_STORY": {
        title: "Preterite vs. Imperfect IV: Telling a Story",
        tags: ["preterite","imperfect"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Stories alternate: imperfect = the stage and scenery, preterite = the plot events. Practice sorting them.",
        content: [ { "type": "TEXT", "prompt": "### **The \"Stage and Actor\" trick**", "html": "<ul><li><b>Imperfect</b> = stage: weather, time, age, feelings, what was going on</li><li><b>Preterite</b> = actor: events that move the story forward</li><li>Interrupted actions: <i>Dormía (stage) cuando sonó (event) el teléfono.</i></li></ul>" }, { "type": "FILL_IN_BLANK", "prompt": "It was raining (background). -> (FILL IN THE BLANK) mucho.", "hint": "Imperfect of llover", "answer": "Llovía" }, { "type": "FILL_IN_BLANK", "prompt": "Suddenly the lights went out. -> De repente se (FILL IN THE BLANK) las luces. (apagar, preterite)", "hint": "apagar, ellas", "answer": "apagaron" }, { "type": "FILL_IN_BLANK", "prompt": "I was sleeping when the phone rang. -> Yo (FILL IN THE BLANK) cuando sonó el teléfono.", "hint": "Imperfect of dormir", "answer": "dormía" }, { "type": "FILL_IN_BLANK", "prompt": "She left the house at eight. -> Ella (FILL IN THE BLANK) de casa a las ocho.", "hint": "Preterite of salir", "answer": "salió" }, { "type": "TEXT", "prompt": "### **Meaning changes!**", "html": "<ul><li>saber: sabía (knew) / supe (found out)</li><li>conocer: conocía (knew) / conocí (met)</li><li>querer: quería (wanted) / quiso (tried) / no quiso (refused)</li><li>poder: podía (was able) / pude (managed to)</li></ul>" } ]
    },

    "T_FUTURE_IV": {
        title: "Future IV: Irregular Stems & the Future of Probability",
        tags: ["future","irregular"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Twelve verbs have irregular future stems, and the future can also express \"I wonder / probably\" about the present.",
        content: [ { "type": "TEXT", "prompt": "### **The 12 irregular stems**", "html": "<ul><li>decir→dir-</li><li>hacer→har-</li><li>poner→pondr-</li><li>salir→saldr-</li><li>tener→tendr-</li><li>venir→vendr-</li><li>poder→podr-</li><li>querer→querr-</li><li>saber→sabr-</li><li>caber→cabr-</li><li>haber→habr-</li><li>valer→valdr-</li></ul><table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">tener</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">hacer</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">salir</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tendré</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>haré</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>saldré</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tendrás</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>harás</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>saldrás</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tendrá</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hará</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>saldrá</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tendremos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>haremos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>saldremos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tendrán</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>harán</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>saldrán</b></td></tr></table>" }, { "type": "FILL_IN_BLANK", "prompt": "I will have time tomorrow. -> Yo (FILL IN THE BLANK) tiempo mañana.", "hint": "Future of tener", "answer": "tendré" }, { "type": "FILL_IN_BLANK", "prompt": "They will come on Monday. -> Ellos (FILL IN THE BLANK) el lunes.", "hint": "Future of venir", "answer": "vendrán" }, { "type": "FILL_IN_BLANK", "prompt": "You will say the answer. -> Tú (FILL IN THE BLANK) la respuesta.", "hint": "Future of decir", "answer": "dirás" }, { "type": "TEXT", "prompt": "### **Future of probability**", "html": "<p>¿Dónde <b>estará</b> Juan? = I wonder where Juan is. <br><b>Estará</b> en casa. = He is probably at home.</p>" }, { "type": "FILL_IN_BLANK", "prompt": "He is probably tired. -> Él (FILL IN THE BLANK) cansado.", "hint": "Future of estar", "answer": "estará" } ]
    },

    "T_CONDITIONAL_IV": {
        title: "Conditional IV: Polite Requests, Advice & Hypotheticals",
        tags: ["conditional"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "The conditional means \"would.\" Use it to be polite, to give advice, and to describe imaginary situations.",
        content: [ { "type": "TEXT", "prompt": "### **Three uses**", "html": "<ul><li><b>Polite request:</b> ¿Podría ayudarme?</li><li><b>Advice:</b> Yo estudiaría más.</li><li><b>Hypothetical:</b> Viviría en España.</li></ul><table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">hablar</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">tener</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">poder</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablaría</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tendría</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>podría</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablarías</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tendrías</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>podrías</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablaría</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tendría</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>podría</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablaríamos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tendríamos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>podríamos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablarían</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tendrían</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>podrían</b></td></tr></table>" }, { "type": "FILL_IN_BLANK", "prompt": "Could I open the window? -> Yo (FILL IN THE BLANK) abrir la ventana?", "hint": "Conditional of poder", "answer": "podría" }, { "type": "FILL_IN_BLANK", "prompt": "You would have more success. -> Tú (FILL IN THE BLANK) más éxito.", "hint": "Conditional of tener", "answer": "tendrías" }, { "type": "FILL_IN_BLANK", "prompt": "We would travel the world. -> Nosotros (FILL IN THE BLANK) por el mundo.", "hint": "Conditional of viajar", "answer": "viajaríamos" }, { "type": "FILL_IN_BLANK", "prompt": "She would say yes. -> Ella (FILL IN THE BLANK) que sí.", "hint": "Conditional of decir", "answer": "diría" } ]
    },

    "T_SUBJUNCTIVE_IV": {
        title: "Subjunctive IV: Triggers & the WEIRDO Cheat Sheet",
        tags: ["subjunctive","present"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Spotting the trigger is half the battle. Use WEIRDO: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt, Ojalá.",
        content: [ { "type": "TEXT", "prompt": "### **WEIRDO triggers**", "html": "<ul><li><b>W</b>ishes: quiero que, prefiero que</li><li><b>E</b>motions: me alegra que, temo que</li><li><b>I</b>mpersonal: es importante que, es necesario que</li><li><b>R</b>ecommendations: recomiendo que, sugiero que</li><li><b>D</b>oubt: dudo que, no creo que</li><li><b>O</b>jalá (que)</li></ul><p><b>Two-subject rule:</b> Quiero que tú vengas (subjunctive). Quiero venir (infinitive, same subject).</p>" }, { "type": "FILL_IN_BLANK", "prompt": "I want you to come soon. -> Quiero que tú (FILL IN THE BLANK) pronto.", "hint": "PresentSubjunctive of venir", "answer": "vengas" }, { "type": "FILL_IN_BLANK", "prompt": "It is important that they study more. -> Es importante que ellos (FILL IN THE BLANK) más.", "hint": "PresentSubjunctive of estudiar", "answer": "estudien" }, { "type": "FILL_IN_BLANK", "prompt": "I doubt he knows the answer. -> Dudo que él (FILL IN THE BLANK) la respuesta.", "hint": "PresentSubjunctive of saber", "answer": "sepa" }, { "type": "FILL_IN_BLANK", "prompt": "I hope I can go with you. -> Ojalá que yo (FILL IN THE BLANK) contigo.", "hint": "PresentSubjunctive of ir", "answer": "vaya" }, { "type": "TEXT", "prompt": "### **Irregular: DISSH**", "html": "<table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">dar</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">estar</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">ir</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>dé</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>esté</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>vaya</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>des</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>estés</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>vayas</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>dé</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>esté</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>vaya</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>demos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>estemos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>vayamos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>den</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>estén</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>vayan</b></td></tr></table><table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">saber</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">ser</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>sepa</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>sea</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>sepas</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>seas</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>sepa</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>sea</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>sepamos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>seamos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>sepan</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>sean</b></td></tr></table>" } ]
    },

    "T_SUBJUNCTIVE_V": {
        title: "Subjunctive V: Imperfect Subjunctive & If-Clauses",
        tags: ["subjunctive","imperfect"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Build the imperfect subjunctive from the ellos preterite form and use it for contrary-to-fact \"if\" sentences.",
        content: [ { "type": "TEXT", "prompt": "### **Formation**", "html": "<p>Ellos preterite → drop <b>-ron</b> → add <b>-ra, -ras, -ra, -ramos, -ran</b>.<br>hablaron → hablara; tuvieron → tuviera; fueron → fuera</p><table style=\"width:100%;border-collapse:collapse;margin:12px 0;background:#f7f7f7\"><tr><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">Subject</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">hablar</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">tener</th><th style=\"border:1px solid #ccc;padding:8px;background:#ddd;color:#222\">ir</th></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Yo</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablara</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tuviera</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fuera</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Tú</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablaras</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tuvieras</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fueras</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Él / Ella / Ud.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablara</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tuviera</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fuera</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Nosotros</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>habláramos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tuviéramos</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fuéramos</b></td></tr><tr><td style=\"border:1px solid #ccc;padding:8px;color:#222\">Ellos / Uds.</td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>hablaran</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>tuvieran</b></td><td style=\"border:1px solid #ccc;padding:8px;color:#222\"><b>fueran</b></td></tr></table>" }, { "type": "TEXT", "prompt": "### **If-clauses**", "html": "<p>Si + <b>imperfect subjunctive</b>, <b>conditional</b>.<br>Si tuviera dinero, viajaría. (If I had money, I would travel.)</p>" }, { "type": "FILL_IN_BLANK", "prompt": "If I had time... -> Si yo (FILL IN THE BLANK) tiempo, te ayudaría.", "hint": "ImperfectSubjunctive of tener", "answer": "tuviera" }, { "type": "FILL_IN_BLANK", "prompt": "If they went with me... -> Si ellos (FILL IN THE BLANK) conmigo, sería divertido.", "hint": "ImperfectSubjunctive of ir", "answer": "fueran" }, { "type": "FILL_IN_BLANK", "prompt": "I wanted you to come. -> Quería que tú (FILL IN THE BLANK) a la fiesta.", "hint": "ImperfectSubjunctive of venir", "answer": "vinieras" }, { "type": "FILL_IN_BLANK", "prompt": "If I were you, I would study. -> Si yo fuera tú, (FILL IN THE BLANK). (estudiar, conditional yo)", "hint": "Conditional of estudiar", "answer": "estudiaría" } ]
    },

    "T_QUESTION_WORDS": {
        title: "General: Question Words & Asking Questions",
        tags: ["general","questions"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Learn the key question words and how to form questions in Spanish. Every one has an accent!",
        content: [ { "type": "TEXT", "prompt": "### **The big nine**", "html": "<ul><li>¿Qué? What?</li><li>¿Quién? Who?</li><li>¿Dónde? Where?</li><li>¿Cuándo? When?</li><li>¿Por qué? Why?</li><li>¿Cómo? How?</li><li>¿Cuánto/a? How much?</li><li>¿Cuál? Which?</li><li>¿Adónde? Where to?</li></ul><p>Questions get an upside-down ¿ at the start and ? at the end.</p>" }, { "type": "FILL_IN_BLANK", "prompt": "Where are you from? -> ¿(FILL IN THE BLANK) eres?", "hint": "Ser de... Where?", "answer": "De dónde" }, { "type": "FILL_IN_BLANK", "prompt": "Why are you late? -> ¿(FILL IN THE BLANK) llegas tarde?", "hint": "Two words, with accent", "answer": "Por qué" }, { "type": "FILL_IN_BLANK", "prompt": "Who is your teacher? -> ¿(FILL IN THE BLANK) es tu maestro?", "hint": "One word, accent", "answer": "Quién" }, { "type": "FILL_IN_BLANK", "prompt": "When is the party? -> ¿(FILL IN THE BLANK) es la fiesta?", "hint": "One word, accent", "answer": "Cuándo" } ]
    },

    "T_ACCENTS_STRESS": {
        title: "General: Accent Marks & Word Stress",
        tags: ["general","pronunciation"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Accents tell you where the stress falls. Knowing three rules means you can read any Spanish word aloud.",
        content: [ { "type": "TEXT", "prompt": "### **The three rules**", "html": "<ul><li>Ends in a vowel, n, or s: stress the <b>second-to-last</b> syllable (ha-BLA-mos)</li><li>Ends in any other consonant: stress the <b>last</b> syllable (ha-BLAR)</li><li>Break the rule? Write an accent (es-TÁ, ca-FÉ, lec-CIÓN)</li></ul><p>Accents also separate words: <b>sí</b> (yes) / si (if), <b>tú</b> (you) / tu (your), <b>él</b> (he) / el (the).</p>" }, { "type": "FILL_IN_BLANK", "prompt": "Write \"yes\" in Spanish (with accent). -> (FILL IN THE BLANK)", "hint": "Not \"si\"", "answer": "Sí" }, { "type": "FILL_IN_BLANK", "prompt": "Write \"you\" (subject pronoun, with accent). -> (FILL IN THE BLANK) hablas.", "hint": "Not \"tu\"", "answer": "Tú" }, { "type": "FILL_IN_BLANK", "prompt": "Add the accent: \"Yo comi pizza.\" -> Yo (FILL IN THE BLANK) pizza.", "hint": "Preterite yo of comer", "answer": "comí" } ]
    },

    "T_ADJECTIVE_AGREEMENT": {
        title: "General: Adjective Agreement & Placement",
        tags: ["general","adjectives"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Adjectives agree in gender and number with the noun and usually come AFTER it.",
        content: [ { "type": "TEXT", "prompt": "### **Agreement**", "html": "<ul><li>el gato <b>negro</b> / la gata <b>negra</b></li><li>los gatos <b>negros</b> / las gatas <b>negras</b></li><li>Ends in -e or consonant: same for both genders (grande, fácil); just add -s/-es for plural</li></ul><p>Some adjectives change meaning: <i>un amigo viejo</i> (old friend, age) vs. <i>un viejo amigo</i> (longtime friend).</p>" }, { "type": "FILL_IN_BLANK", "prompt": "the red cars -> los carros (FILL IN THE BLANK)", "hint": "Plural masculine", "answer": "rojos" }, { "type": "FILL_IN_BLANK", "prompt": "the big house -> la casa (FILL IN THE BLANK)", "hint": "Ends in -e", "answer": "grande" }, { "type": "FILL_IN_BLANK", "prompt": "the tall girls -> las chicas (FILL IN THE BLANK)", "hint": "Plural feminine", "answer": "altas" } ]
    },

    "T_NUMBERS_TIME": {
        title: "General: Numbers, Days, Months & Telling Time",
        tags: ["general","numbers"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Count, give dates, and tell time confidently.",
        content: [ { "type": "TEXT", "prompt": "### **Numbers & dates**", "html": "<ul><li>1-10: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez</li><li>20: veinte, 30: treinta, 40: cuarenta, 50: cincuenta</li><li>Days (lowercase!): lunes, martes, miércoles, jueves, viernes, sábado, domingo</li><li>Time: Es la una. Son las dos. Son las tres y media.</li></ul>" }, { "type": "FILL_IN_BLANK", "prompt": "It is 3:30. -> Son las tres y (FILL IN THE BLANK).", "hint": "Half", "answer": "media" }, { "type": "FILL_IN_BLANK", "prompt": "Thursday -> (FILL IN THE BLANK)", "hint": "Day 4 of the week", "answer": "jueves" }, { "type": "FILL_IN_BLANK", "prompt": "Number 40 -> (FILL IN THE BLANK)", "hint": "Cuarenta", "answer": "cuarenta" } ]
    },

    "T_NEGATIVES": {
        title: "General: Negatives & Double Negatives",
        tags: ["general","negatives"],
        targetXP: 10,
        type: "TUTORIAL",
        intro: "Spanish loves double negatives! If a negative word comes after the verb, put \"no\" before it.",
        content: [ { "type": "TEXT", "prompt": "### **Negative words**", "html": "<ul><li>nada (nothing), nadie (nobody), nunca (never), tampoco (neither), ningún/ninguna (none)</li><li>No veo <b>nada</b>.</li><li>No conozco a <b>nadie</b>.</li><li><b>Nunca</b> como carne (no \"no\" needed when it comes first).</li></ul>" }, { "type": "FILL_IN_BLANK", "prompt": "I never eat meat. -> (FILL IN THE BLANK) como carne.", "hint": "Never, first in sentence", "answer": "Nunca" }, { "type": "FILL_IN_BLANK", "prompt": "I see nothing. -> No veo (FILL IN THE BLANK).", "hint": "nothing", "answer": "nada" }, { "type": "FILL_IN_BLANK", "prompt": "I do not know anyone. -> No conozco a (FILL IN THE BLANK).", "hint": "nobody", "answer": "nadie" } ]
    }
};
// Learning path order (used by the homepage path). Any tutorial not listed is shown in an extra "More" stage.
const TUTORIAL_PATH = [
    { stage: 'Beginner Greetings', icon: '👋', ids: ['T_GREET_1','T_GREET_2','T_GREET_3','T_GREET_4','T_GREET_5','T_GREET_6','T_GREET_7','T_GREET_8'] },
    { stage: 'Present Tense', icon: '☀️', ids: ['T_PRESENT_I', 'T_PRESENT_II', 'T_PRESENT_III'] },
    { stage: 'Preterite', icon: '⏪', ids: ['T_PRETERIT_I', 'T_PRETERIT_II', 'T_PRETERIT_III', 'T_PRETERIT_IV', 'T_PRETERIT_V'] },
    { stage: 'Imperfect', icon: '🌅', ids: ['T_IMPERFECT_I', 'T_IMPERFECT_II', 'T_IMPERFECT_III', 'T_IMPERFECT_IV'] },
    { stage: 'Future', icon: '🔮', ids: ['T_FUTURE_I', 'T_FUTURE_II', 'T_FUTURE_III', 'T_FUTURE_IV'] },
    { stage: 'Conditional', icon: '🤔', ids: ['T_CONDITIONAL_I', 'T_CONDITIONAL_II', 'T_CONDITIONAL_III', 'T_CONDITIONAL_IV'] },
    { stage: 'Subjunctive', icon: '🌀', ids: ['T_SUBJUNCTIVE_I', 'T_SUBJUNCTIVE_II', 'T_SUBJUNCTIVE_III'] },
    { stage: 'Cool Verbs', icon: '😎', ids: ['T_GUSTAR', 'T_REFLEXIVE'] },
    { stage: 'Advanced Contrasts', icon: '🎓', ids: ['T_SER_VS_ESTAR', 'T_PRETERITE_VS_IMPERFECT', 'T_POR_VS_PARA', 'T_SABER_VS_CONOCER', 'T_PEDIR_VS_PREGUNTAR'] },
    { stage: 'Places & Vocabulary', icon: '🏙️', ids: ['T_CIUDAD_CAMPO'] },
    { stage: 'Pronouns Workshop', icon: '🧩', ids: ['T_IOP_EASY','T_IOP_HARD','T_DOP_EASY','T_DOP_HARD','T_REFLEX_EASY','T_REFLEX_HARD','T_PRONOUN_MIX_I','T_PRONOUN_MIX_II','T_PRONOUN_MIX_III'] },
    { stage: 'Everyday Spanish', icon: '🌴', ids: ['T_PRESENT_PROGRESSIVE','T_TENER_WEATHER','T_PLANS_IR_A'] },
    { stage: 'Subjunctive Deep Dives', icon: '🌀', ids: ['T_SUBJUNCTIVE_IV','T_SUBJUNCTIVE_V'] },
    { stage: 'Story Telling', icon: '📖', ids: ['T_PRET_VS_IMPERF_STORY'] },
    { stage: 'General Spanish Skills', icon: '🧭', ids: ['T_QUESTION_WORDS', 'T_ACCENTS_STRESS', 'T_ADJECTIVE_AGREEMENT', 'T_NUMBERS_TIME', 'T_NEGATIVES'] },
];