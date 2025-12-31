// --- PRASIVO CENTRAL BRAIN (app.js) ---

// 1. AI DATABASE (Yahan tum jitne chaho topics add kar sakte ho)
const pharmacyDB = {
    "homeostasis": "Bhai, Homeostasis ka simple matlab hai 'Balance'. Hamari body ka internal environment (like Temp, BP) ko stable rakhne ki process ko Homeostasis kehte hain.",
    "cell": "Cell hamari body ki sabse chhoti functional unit hai. Isme Nucleus (Control Room), Mitochondria (Powerhouse) aur Ribosomes hote hain.",
    "hap": "Human Anatomy & Physiology. Anatomy matlab structure (kaun kahan hai) aur Physiology matlab function (kaun kaise kaam karta hai).",
    "syllabus": "Prasivo par hum PCI (Pharmacy Council of India) ka latest syllabus follow karte hain. Aap Syllabus section mein jaakar PDF dekh sakte hain."
};

// 2. WORKING AI FUNCTION
function askAI() {
    const inputField = document.getElementById('aiInput');
    const chatBox = document.getElementById('aiChat');
    const userText = inputField.value.toLowerCase().trim();

    if (!userText) return;

    // User ka message dikhao
    chatBox.innerHTML += `<div style="margin-top:15px; text-align:right; background: rgba(99, 102, 241, 0.2); padding: 10px; border-radius: 10px; color:white;"><b>You:</b> ${userText}</div>`;

    // AI Response Logic
    let response = "Bhai, ye topic abhi mere database mein nahi hai, par main isse jaldi seekh loonga! Aap HAP ya Cell ke baare mein pooch sakte hain.";

    // Match keywords from Database
    for (let keyword in pharmacyDB) {
        if (userText.includes(keyword)) {
            response = pharmacyDB[keyword];
            break;
        }
    }

    // "Typing..." effect ke liye delay
    setTimeout(() => {
        chatBox.innerHTML += `<div style="margin-top:10px; background: rgba(34, 211, 238, 0.1); padding: 10px; border-radius: 10px; color:var(--accent);"><b>PRASIVO AI:</b> ${response}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);

    inputField.value = ""; // Input clear karo
}

// 3. PAGE NAVIGATION ENGINE (Sabhi menu buttons ke liye)
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    // Sidebar band karo agar mobile par hai
    const sidebar = document.getElementById('sidebar');
    if(sidebar && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
    window.scrollTo(0,0);
}

// 4. SIDEBAR TOGGLE
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
}
