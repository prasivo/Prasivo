const prasivoData = {
    bpharm: {
        sem1: {
            subject1: {
                name: "Human Anatomy and Physiology I",
                units: {
                    unit1: {
                        name: "Introduction to Human Body",
                        topics: {
                            topic1: { title: "Cellular Level", layers: { pass: "Cell is basic unit...", help: "Detailed cell info", pro: "Advanced Molecular Biology" } }
                        }
                    }
                }
            },
            // Baaki subjects yahan aayenge
        },
        sem2: { /* Sem 2 data */ },
        // sem3 se sem8 tak...
    },
    
    gpat: {
        core: { // Entrance ke liye hum 'core' use kar rahe hain
            pharmacology: {
                name: "Pharmacology",
                units: {
                    unit1: {
                        name: "General Pharmacology",
                        topics: {
                            topic1: { title: "Pharmacokinetics", layers: { pass: "ADME Process...", help: "Absorption details", pro: "Calculations" } }
                        }
                    }
                }
            }
        }
    },
    
    cuet: {
        core: {
            pharmaceutics: {
                name: "Pharmaceutics",
                units: {
                    unit1: { name: "Dosage Forms", topics: { topic1: { title: "Tablets", layers: { pass: "Solid dosage...", help: "", pro: "" } } } }
                }
            }
        }
    }
};

