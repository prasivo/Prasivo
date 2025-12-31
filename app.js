// --- PRASIVO MASTER BRAIN (app.js) ---

// 1. REAL AI LOGIC (Simulated for Browser)
async function askAI() {
    const input = document.getElementById('aiInput');
    const chat = document.getElementById('aiChat');
    const query = input.value.trim();

    if(!query) return;

    // User Message
    chat.innerHTML += `<div style="text-align:right; margin: 10px 0; color:white;"><b style="color:var(--accent)">You:</b> ${query}</div>`;
    input.value = "";

    // Typing Indicator
    const typingId = "typing-" + Date.now();
    chat.innerHTML += `<div id="${typingId}" style="color:#94a3b8; font-style:italic; margin-bottom:15px;">PRASIVO AI soch raha hai...</div>`;
    chat.scrollTop = chat.scrollHeight;

    try {
        // Yahan hum browser ki AI capability ya API use karenge
        // Filhal main ek "Smart Response Engine" de raha hoon jo student-friendly hai
        let response = await getSmartResponse(query);
        
        document.getElementById(typingId).remove();
        chat.innerHTML += `<div style="color:var(--text); margin-bottom:20px; padding:12px; background:rgba(255,255,255,0.05); border-radius:15px; border-left:4px solid var(--primary);">
            <b style="color:var(--accent)">AI:</b> ${response}
        </div>`;
    } catch (error) {
        document.getElementById(typingId).innerText = "Bhai, network check karo, kuch issue lag raha hai.";
    }
    chat.scrollTop = chat.scrollHeight;
}

// 2. STUDENT-FRIENDLY RESPONSE ENGINE
async function getSmartResponse(q) {
    const query = q.toLowerCase();
    
    // Logic: Agar student specific topics poochta hai toh Hinglish mein deep answer
    if(query.includes("cell")) {
        return "Bhai, Cell hamari body ki sabse chhoti functional unit hai. Iska kaam energy banana (Mitochondria), protein banana (Ribosomes) aur body ko structure dena hai. Ye ek factory ki tarah kaam karta hai jahan Nucleus uska 'Manager' hota hai.";
    }
    if(query.includes("anatomy")) {
        return "Anatomy ka matlab hai body parts ka structure dekhna. Jaise ki dil (heart) kahan hai, usme kitne chambers hain, ye sab Anatomy mein aata hai.";
    }
    if(query.includes("work")) {
        return "Kisi bhi organ ke kaam karne ke tarike ko 'Physiology' kehte hain. Jaise Cell energy kaise banata hai ya heart blood pump kaise karta hai.";
    }
    
    // Default search-like response
    return `Aapne ${q} ke baare mein poochha hai. Pharmacy ke hisab se ye ek important topic hai. Main ise jaldi hi detailed Hinglish notes mein add kar dunga!`;
}

// 3. NAVIGATION & OUTSIDE TOUCH
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    closeSidebar();
    window.scrollTo(0,0);
}

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

// MAGIC: Outside touch par sidebar band karne ke liye
window.onclick = function(event) {
    const overlay = document.getElementById('overlay');
    if (event.target == overlay) {
        closeSidebar();
    }
};
