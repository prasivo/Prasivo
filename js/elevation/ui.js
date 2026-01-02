function initUI() {
    const root = document.getElementById('root');
    root.innerHTML = `
        <div class="menu">
            <button onclick="selectExam('bPharm')">B. Pharmacy</button>
            <button onclick="selectExam('dPharm')">D. Pharmacy</button>
            <button onclick="selectExam('gpat')">GPAT Exam</button>
        </div>
        <div id="syllabus-display"></div>
    `;
}

function renderSyllabus() {
    const display = document.getElementById('syllabus-display');
    const exam = masterSyllabus[appState.selectedExam];
    display.innerHTML = `<h2>${exam.title}</h2><ul>` + 
        exam.subjects.map(s => `<li>${s}</li>`).join('') + `</ul>`;
}

// System start karne ke liye
window.onload = initUI;
