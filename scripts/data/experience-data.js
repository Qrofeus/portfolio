const experienceData = [
  {
    position: "Graduate Student Researcher",
    company: "Luddy School of Informatics, Computing and Engineering",
    location: "Indianapolis, IN",
    duration: "Aug 2024 - Present",
    achievements: [
      {
        text: "Developed scalable cyberbullying detection across 4 languages by implementing a peer-to-peer distributed system, reducing processing bottlenecks and enabling efficient multilingual content moderation.",
        metrics: ["4 languages"]
      },
      {
        text: "Improved detection accuracy in low-resource languages by simulating subject-specific model expertise through SME clustering with BERT and SBERT-KMeans algorithms.",
        metrics: []
      },
      {
        text: "Achieved macro-F1 scores of 0.85 - 0.92 across key language groups by enhancing ensemble decision-making through incremental learning and trust-weighted consensus approaches.",
        metrics: ["0.85 - 0.92"]
      },
      {
        text: "Benchmarked over 180 model and ensemble configurations to validate distributed NLP pipeline performance, with findings prepared for academic publication.",
        metrics: ["180+"]
      }
    ],
    technologies: ["Python", "BERT", "SBERT", "K-Means", "NLP", "Distributed Systems", "Machine Learning"]
  },
  {
    position: "Mailroom Tech Assistant",
    company: "University Library, Indiana University, Indianapolis",
    location: "Indianapolis, IN",
    duration: "Jan 2025 - May 2025",
    achievements: [
      {
        text: "Processed 1,500+ books and packages by managing library acquisitions mailroom workflows, coordinating deliveries across 5 carrier systems over 4 months.",
        metrics: ["1,500+", "5 carriers", "4 months"]
      },
      {
        text: "Proactively developed Python automation tool using Selenium to streamline OCLC code extraction from MARC records, improving interlibrary loan processing efficiency.",
        metrics: []
      },
      {
        text: "That tool eliminated 90%+ of manual processing tasks from OCLC directories, generating structured CSV/TXT reports with logs for manual verification and error tracking.",
        metrics: ["90%+"]
      }
    ],
    technologies: ["Python", "Selenium", "Automation", "OCLC", "MARC", "CSV Processing"]
  }
];

// Export the data
export default experienceData;