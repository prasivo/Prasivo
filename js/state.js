const appState = {
    selectedExam: null, // 'bPharm', 'dPharm', or 'gpat'
    isExamMode: false,
    completedTopics: [],
    lastAccessed: new Date().toLocaleDateString()
};

function selectExam(examKey) {
    appState.selectedExam = examKey;
    console.log("Exam Selected: " + masterSyllabus[examKey].title);
    renderSyllabus(); // Ye function UI ko update karega
}
