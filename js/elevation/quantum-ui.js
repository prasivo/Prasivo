const QuantumUI = {
    applyGlow: function(elementId) {
        const el = document.getElementById(elementId);
        if(el) {
            el.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.5)";
            el.style.transition = "all 0.5s ease-in-out";
        }
    },
    pageTransition: function() {
        document.body.style.opacity = 0;
        setTimeout(() => {
            document.body.style.opacity = 1;
        }, 300);
    }
};
