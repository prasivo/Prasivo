const AppMemory = {
    saveData: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Memory Saved: ${key}`);
    },
    loadData: function(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    syncState: function() {
        // appState ko permanent memory se jodna
        const savedProgress = this.loadData('userProgress');
        if (savedProgress) {
            appState.completedTopics = savedProgress;
        }
    }
};
