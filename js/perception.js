const SensorySystem = {
    init: function() {
        document.addEventListener('mousemove', (e) => {
            // Mouse ki speed se user ka focus track karna
            this.analyzeFocus(e.clientX, e.clientY);
        });
        console.log("Perception System: Active (Sensing User)");
    },
    analyzeFocus: function(x, y) {
        // Agar user screen ke kisi hisse par zyada rukta hai
        // toh Brain.js ko signal dena
    }
};

window.addEventListener('DOMContentLoaded', () => SensorySystem.init());
