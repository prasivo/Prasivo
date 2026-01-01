const prasivoData = {
    // ================= B.PHARMACY (8 SEMESTERS) =================
    "bpharm": {
        "sem1": {
            "hap1": { "name": "Human Anatomy & Physiology I", "units": { "u1": { "name": "Introduction, Cell & Tissue", "topics": ["Introduction to Human Body", "Cell Structure", "Tissue Level"] }, "u2": { "name": "Skeletal & Muscular", "topics": ["Joints", "Skeletal Muscle", "Physiology"] }, "u3": { "name": "Body Fluids & Blood", "topics": ["Composition of Blood", "Hemopoiesis", "Coagulation"] }, "u4": { "name": "Peripheral Nervous System", "topics": ["Classification", "Spinal Nerves", "Cranial Nerves"] }, "u5": { "name": "Cardiovascular System", "topics": ["Heart Anatomy", "Cardiac Cycle", "BP Regulation"] } } },
            "analysis": { "name": "Pharma Analysis I", "units": { "u1": { "name": "Basics & Errors", "topics": ["Concentration Methods", "Errors", "Pharmacopoeias"] }, "u2": { "name": "Titrations", "topics": ["Acid-Base", "Non-aqueous"] } } },
            "pceutics": { "name": "Pharmaceutics I", "units": { "u1": { "name": "History & Dosage", "topics": ["History of Pharmacy", "Dosage Forms", "Prescription"] } } },
            "pic": { "name": "Pharma Inorganic Chem", "units": { "u1": { "name": "Impurities", "topics": ["Limit Tests", "History of IP"] } } }
        },
        "sem2": { "hap2": { "name": "HAP II" }, "poc1": { "name": "Organic Chem I" }, "biochem": { "name": "Biochemistry" }, "patho": { "name": "Pathophysiology" } },
        "sem3": { "poc2": { "name": "Organic Chem II" }, "pceutics_eng": { "name": "Pharma Engineering" }, "microbio": { "name": "Microbiology" } },
        "sem4": { "poc3": { "name": "Organic Chem III" }, "mc1": { "name": "Med Chem I" }, "pcol1": { "name": "Pharmacology I" }, "pcog1": { "name": "Pharmacognosy I" } },
        "sem5": { "mc2": { "name": "Med Chem II" }, "pcol2": { "name": "Pharmacology II" }, "pcog2": { "name": "Pharmacognosy II" }, "jurisp": { "name": "Jurisprudence" } },
        "sem6": { "mc3": { "name": "Med Chem III" }, "pcol3": { "name": "Pharmacology III" }, "herbal": { "name": "Herbal Drug Tech" }, "qa": { "name": "Quality Assurance" } },
        "sem7": { "instrumental": { "name": "Instrumental Analysis" }, "ndds": { "name": "Novel Drug Delivery" }, "practice": { "name": "Pharmacy Practice" } },
        "sem8": { "biostats": { "name": "Biostats" }, "social": { "name": "Social Pharmacy" }, "marketing": { "name": "Marketing Mgmt" } }
    },

    // ================= D.PHARMACY (4 SEMESTERS - ER-20) =================
    "dpharm": {
        "sem1": { "pceutics": { "name": "Pharmaceutics", "units": { "u1": { "name": "History & Profession", "topics": ["History", "Pharmacy Act", "Pharmacopoeia"] } } }, "pchem": { "name": "Pharmaceutical Chemistry" }, "pcog": { "name": "Pharmacognosy" } },
        "sem2": { "hap": { "name": "Human Anatomy & Physiology" }, "social": { "name": "Social Pharmacy" } },
        "sem3": { "pcol": { "name": "Pharmacology" }, "cp": { "name": "Community Pharmacy" }, "bc": { "name": "Biochem & Clinical Patho" } },
        "sem4": { "hcp": { "name": "Hospital & Clinical Pharmacy" }, "law": { "name": "Pharma Law & Ethics" } }
    },

    // ================= GPAT (TOPIC WISE - NTA) =================
    "gpat": {
        "phys_chem": { "name": "Physical Chemistry", "units": { "u1": { "name": "Composition of Matter", "topics": ["Intermolecular forces", "Dipole moment", "Aerosols"] }, "u2": { "name": "Colligative Properties", "topics": ["Raoult's law", "Osmotic pressure"] } } },
        "pharmacognosy": { "name": "Pharmacognosy", "units": { "u1": { "name": "Intro to Pharmacognosy", "topics": ["Classification of drugs", "Adulteration", "Evaluation"] } } },
        "pharmacology": { "name": "Pharmacology", "units": { "u1": { "name": "General Pharmacology", "topics": ["Pharmacokinetics", "Pharmacodynamics"] } } }
    },

    // ================= CUET PG (SCQP23) =================
    "cuet": {
        "pharmacy": {
            "name": "CUET Pharmacy (SCQP23)",
            "units": {
                "u1": { "name": "Pharmaceutics (Intro)", "topics": ["History of Practice", "Pharmacopoeias", "Plant Extracts"] },
                "u2": { "name": "Pharma Organic Chem", "topics": ["Reaction Intermediates", "Stereochemistry", "Addition/Elimination"] },
                "u3": { "name": "Inorganic Chemistry", "topics": ["Impurities", "Tests for Purity", "Assay methods"] }
            }
        }
    }
};
