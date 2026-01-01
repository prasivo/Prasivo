let navigationHistory = []; // Piche jane ke liye track rakhega

// 1. Home Page par wapas jane ke liye
window.goHome = function() {
    navigationHistory = [];
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('selection-page').style.display = 'none';
    document.getElementById('study-page').style.display = 'none';
    document.getElementById('master-back').style.display = 'none';
};

// 2. Main Navigation Function
window.renderSelection = function(level, key, parentKey = '') {
    const list = document.getElementById('selection-list');
    const title = document.getElementById('selection-title');
    const backBtn = document.getElementById('master-back');
    
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('selection-page').style.display = 'block';
    document.getElementById('study-page').style.display = 'none';
    backBtn.style.display = 'inline-flex';

    list.innerHTML = ""; // Purana list saaf karo

    if (level === 'sem') {
        title.innerText = "Select Semester";
        let limit = (key === 'bpharm') ? 8 : 4;
        for (let i = 1; i <= limit; i++) {
            list.innerHTML += `<div class="card" onclick="renderSelection('sub', 'sem${i}', '${key}')"><h3>Semester ${i}</h3></div>`;
        }
        backBtn.onclick = () => goHome();
    } 
    
    else if (level === 'sub') {
        title.innerText = "Select Subject";
        const courseData = prasivoData[parentKey][key];
        for (let s in courseData) {
            if (s === 'name') continue;
            list.innerHTML += `<div class="card" onclick="renderSelection('unit', '${s}', '${parentKey}|${key}')"><h3>${courseData[s].name}</h3></div>`;
        }
        backBtn.onclick = () => renderSelection('sem', parentKey);
    }

    else if (level === 'unit') {
        title.innerText = "Select Unit";
        const [cKey, sKey] = parentKey.split('|');
        const units = prasivoData[cKey][sKey][key].units;
        for (let u in units) {
            list.innerHTML += `<div class="card" onclick="renderSelection('topic', '${u}', '${parentKey}|${key}')"><h3>${units[u].name}</h3></div>`;
        }
        backBtn.onclick = () => renderSelection('sub', sKey, cKey);
    }

    else if (level === 'topic') {
        title.innerText = "Select Topic";
        const [cKey, sKey, uKey] = parentKey.split('|');
        const topics = prasivoData[cKey][sKey][key].units[parentKey.split('|')[2]].topics; // Simple array logic
        
        // Agar topics array hai (jaisa humne syllabus ke liye banaya tha)
        if(Array.isArray(topics)) {
            topics.forEach(t => {
                list.innerHTML += `<div class="card" onclick="alert('Study material coming soon!')"><h3>${t}</h3></div>`;
            });
        }
        backBtn.onclick = () => renderSelection('unit', sKey, cKey);
    }
};

// Sidebar open/close
window.openSidebar = (e) => { e.stopPropagation(); document.getElementById('sidebar').classList.add('active'); };
window.closeSidebar = () => document.getElementById('sidebar').classList.remove('active');
