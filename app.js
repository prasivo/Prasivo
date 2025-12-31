// --- PRASIVO MASTER BRAIN (app.js) ---

// 1. NAVIGATION ENGINE (Buttons & Pages)
function showPage(pageId) {
    console.log("Navigating to:", pageId); // Debugging ke liye
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if(targetPage) {
        targetPage.classList.add('active');
    }
    
    closeSidebar();
    window.scrollTo(0,0);
}

// 2. SIDEBAR & OUTSIDE TOUCH LOGIC
function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const ol = document.getElementById('overlay');
    if (sb.classList.contains('active')) {
        closeSidebar();
    } else {
        sb.classList.add('active');
        ol.style.display = 'block';
    }
}

function closeSidebar() {
    const sb = document.getElementById('sidebar');
    const ol = document.getElementById('overlay');
    if(sb) sb.classList.remove('active');
    if(ol) ol.style.display = 'none';
}

// Outside touch par menu band karne ke liye
window.onclick = function(event) {
    const overlay = document.getElementById('overlay');
    if (event.target == overlay) {
        closeSidebar();
    }
};

// 3. SMART AI ENGINE
async function askAI() {
    const input = document.getElementById('aiInput');
    const chat = document.getElementById('aiChat');
    const query = input.value.trim();

    if(!query) return;

    // Student ka message
    chat.innerHTML += `<div style="text-align:right; margin: 10px 0; color:white;"><b style="color:var(--accent)">You:</b> ${query}</div>`;
    input.value = "";

    // Typing effect
    const typingId = "typing-" + Date.now();
    chat.innerHTML += `<div id="${typingId}" style="color:#94a3b8; font-style:italic; margin-bottom:15px;">PRASIVO AI soch raha hai...</div>`;
    chat.scrollTop = chat.scrollHeight;

    // AI Response (Hinglish Logic)
    setTimeout(() => {
        let response = getHinglishResponse(query.toLowerCase());
        const typingElem = document.getElementById(typingId);
        if(typingElem) typingElem.remove();
        
        chat.innerHTML += `<div style="color:var(--text); margin-bottom:20px; padding:12px; background:rgba(255,255,255,0.05); border-radius:15px; border-left:4px solid var(--primary);">
            <b style="color:var(--accent)">AI:</b> ${response}
        </div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 800);
}

function getHinglishResponse(q) {
    if(q.includes("cell")) return "Bhai, Cell hamari body ki sabse chhoti functional unit hai. Ye factory ki tarah kaam karti hai jisme Nucleus 'Manager' hota hai.";
    if(q.includes("anatomy")) return "Anatomy matlab body ka structure. Kaunsa organ kahan hai aur kaisa dikhta hai, ye Anatomy batati hai.";
    if(q.includes("work") || q.includes("kaise")) return "Pharmacy mein 'kaam karne' ko Physiology kehte hain. Jaise heart blood pump kaise karta hai.";
    return `Aapne "${q}" ke baare mein pucha hai. Ye Pharmacy ka important topic hai. Main ise jaldi detailed notes mein add karunga!`;
}
