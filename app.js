// --- PRASIVO CORE LOGIC ---

// 1. Navigation Control
window.showPage = function(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0,0);
    closeSidebar();
};

// 2. Sidebar Logic
window.openSidebar = function(e) {
    e.stopPropagation();
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('overlay').style.display = 'block';
};

window.closeSidebar = function() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
};

// 3. Notes Navigation
window.goToUnits = function(subName) {
    document.getElementById('current-sub').innerText = subName;
    showPage('unit-page');
};

window.goToTopics = function(topicName) {
    document.getElementById('current-topic-title').innerText = topicName;
    showPage('content-page');
};

// 4. AI Logic (Gemini Simulation)
window.toggleAI = function(show) {
    const modal = document.getElementById('ai-modal');
    modal.style.display = show ? 'flex' : 'none';
};

window.askAI = function() {
    const input = document.getElementById('ai-input');
    const chat = document.getElementById('aiChat'); // Yahan ID sahi kar di hai
    const q = input.value.trim();
    
    if(!q) return;

    // Aapka message dikhayega
    chat.innerHTML += `<div style="text-align:right; margin:15px 0; color:var(--accent);"><b>You:</b> ${q}</div>`;
    input.value = "";

    // Sochne wala animation
    const loadingId = "load-" + Date.now();
    chat.innerHTML += `<div id="${loadingId}" style="font-size:0.8rem; opacity:0.5;">Prasivo AI soch raha hai...</div>`;
    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {
        // Loading hatayega aur reply dega
        const loadingEl = document.getElementById(loadingId);
        if(loadingEl) loadingEl.remove();

        let reply = getSmartReply(q.toLowerCase());
        chat.innerHTML += `<div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:12px; margin-bottom:15px; border-left:3px solid var(--primary);">
            <b>AI:</b> ${reply}
        </div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 600);
};


function getSmartReply(q) {
    if(q.includes("hi") || q.includes("hello")) return "Hi bhai! Prasoon Gupta ke platform par aapka swagat hai. Main Gemini se search karke aapko Pharmacy ka koi bhi topic samjha sakta hoon. Kya janna chahte ho?";
    if(q.includes("ok")) return "Theek hai bhai! Agar koi topic samajh na aaye toh puchiye.";
    if(q.includes("cell")) return "Cell body ki structural unit hai. Iske detailed notes aapko 'Notes > HAP > Unit 1' mein mil jayenge.";
    
    return `Bhai, "${q}" ke bare mein maine Gemini par search kiya. Ye ek important topic hai. Filhaal hum iska unit-wise data update kar rahe hain. Main aapko simple words mein notes taiyar karke de sakta hoon!`;
}
