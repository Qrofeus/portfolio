const projectsData = {
    "Web Development": [
        {
            title: "Online Quiz - Web Application",
            technologies: ["OpenTDB API", "HTML", "CSS", "JavaScript"],
            description: "Interactive trivia quiz game with 20 questions across multiple categories and difficulty levels.",
            detailedDescription: "An engaging web-based quiz application that leverages the Open Trivia Database API to deliver dynamic trivia experiences. Users can select from various categories and difficulty levels to challenge their knowledge across diverse topics.\n\nThe application features a clean, responsive design built with vanilla JavaScript, ensuring smooth performance across all devices. Key technical implementations include asynchronous API calls for real-time question fetching, dynamic DOM manipulation for seamless user interactions, and a modular code structure that separates data fetching, UI rendering, and game logic.",
            sourceLink: "https://github.com/Qrofeus/online-quiz",
            liveLink: "https://quiz.qrofeus.dev/"
        },
        {
            title: "Current Weather - Web Application",
            technologies: ["OpenWeather API", "HTML", "CSS", "JavaScript"],
            description: "Real-time weather application providing current conditions for cities worldwide.",
            detailedDescription: "An online weather application that delivers real-time meteorological data for any city globally through the WeatherAPI integration. The application provides essential weather metrics including temperature, humidity, wind speed, and current conditions in an intuitive, user-friendly interface.\n\nSecure API key management through GitHub Actions and automated deployment workflows. The project implements error handling for invalid city searches and network issues.",
            sourceLink: "https://github.com/Qrofeus/weather-web-application",
            liveLink: "https://weather.qrofeus.dev/"
        },
        {
            title: "Digital Clock - Web Application",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "Dynamic digital clock with real-time updates and modern styling.",
            detailedDescription: "Web application that displays current time with dynamic updates using JavaScript's built-in timing functions.\n\nThe implementation uses JavaScript's Date object manipulation, setInterval for real-time updates.",
            sourceLink: "https://github.com/Qrofeus/digital-clock-webapp",
            liveLink: "https://qrofeus.github.io/digital-clock-webapp/"
        },
        {
            title: "Portfolio website",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "Modern responsive portfolio showcasing projects, skills, and professional experiences.",
            detailedDescription: "A comprehensive personal portfolio website designed to showcase technical projects, professional skills, and career experiences through a modern, responsive interface. The site features dynamic content filtering, smooth animations, and intuitive navigation to create an engaging user experience.\n\nTechnical implementations include advanced CSS Grid and Flexbox layouts for responsive design, JavaScript-powered filtering systems for project categorization. The site incorporates modern web design principles including mobile-first approach, accessibility features, and cross-browser compatibility.",
            sourceLink: "https://github.com/Qrofeus/portfolio",
            liveLink: "https://qrofeus.dev/"
        }
    ],
    "Python": [
        {
            title: "Enigma Machine Simulation: Console",
            technologies: ["Python"],
            description: "Console-based WWII Enigma Machine encryption/decryption simulator with historical accuracy.",
            detailedDescription: "A faithful recreation of the World War II Enigma Machine encryption system, implemented as a console-based Python application. This project simulates the complex mechanical encryption process used by German forces, featuring historically accurate rotor configurations, plugboard settings, and daily code books.\n\nFeatures include date-based preset configurations that mirror actual wartime code books, private message capabilities with custom 8-letter codes, and comprehensive logging systems for message tracking. The application maintains historical authenticity while providing modern conveniences like automated rotor positioning and validation checks.\n\nObject-oriented design patterns for rotor and plugboard components, file-based configuration management for daily presets, and robust input validation systems. The project demonstrates deep understanding of cryptographic principles, historical computing systems, and complex algorithm implementation in Python.",
            sourceLink: "https://github.com/Qrofeus/Enigma-Machine"
        },
        {
            title: "Sorting Algorithms - Visualization Tool",
            technologies: ["Python", "PyGame"],
            description: "Interactive visualization tool for understanding sorting algorithms through animated demonstrations.",
            detailedDescription: "A comprehensive educational repository that brings sorting algorithms to life through interactive PyGame visualizations. The project implements over 10 different sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and others, each with detailed performance analysis and visual representations.\n\nThe application features real-time algorithm execution with adjustable speed controls, allowing users to observe the step-by-step process of how different sorting methods organize data. Performance benchmarking capabilities provide execution time comparisons across 1,000 iterations with 10,000-element arrays, offering valuable insights into algorithmic efficiency.\n\nModular algorithm implementations with consistent interfaces, sophisticated timing decorators for performance measurement, and dynamic visualization rendering that adapts to different array sizes. The project serves as both an educational resource for computer science concepts and a demonstration of advanced Python programming techniques.",
            sourceLink: "https://github.com/Qrofeus/sorting-algorithms"
        },
        {
            title: "Path-Finding Algorithms - Visualization",
            technologies: ["Python", "PyGame"],
            description: "Visual A* pathfinding algorithm implementation with interactive grid-based exploration.",
            detailedDescription: "An interactive visualization of the A* pathfinding algorithm built with Python and PyGame, designed to provide intuitive understanding of graph traversal and heuristic search techniques. The application allows users to create custom obstacles, set start and end points, and watch the algorithm intelligently navigate through complex mazes.\n\nReal-time algorithm execution with visual representation of open and closed sets, demonstrating how A* uses heuristic functions to efficiently find optimal paths. Users can interact with the grid environment, creating dynamic obstacles and observing how the algorithm adapts its pathfinding strategy in real-time.\n\nEfficient priority queue implementation for optimal performance, customizable heuristic functions (Manhattan, Euclidean distances), and smooth animation that clearly illustrates the algorithm's decision-making process. The project effectively bridges theoretical computer science concepts with practical, visual learning experiences.",
            sourceLink: "https://github.com/Qrofeus/path-finding-algorithms"
        }
    ],
    "Research Project": [
        {
            title: "Research: Cyberbullying Detection with Distributed Computing",
            technologies: ["Python", "BERT", "CNN", "Random Forest", "Logistic Regression", "Cohere API", "SBERT", "Distributed Systems"],
            description: "Peer-to-peer distributed ML system achieving 92% F1-score in multilingual cyberbullying detection across Indic languages.",
            detailedDescription: "Developed a novel distributed cyberbullying detection system using Subject Matter Expert (SME) architecture across four languages (English, Hindi, Marathi, Bengali). Implemented and compared five consensus strategies including majority voting, maximum confidence, confidence averaging, weighted aggregation, and incremental learning with zero-trust initialization. Achieved optimal performance using BERT-based models with 92% F1-score on Marathi dataset.\n\nEngineered a peer-to-peer node architecture where each model operates as an autonomous expert, enabling scalable, privacy-preserving detection without centralized control. Conducted extensive hyperparameter optimization across 125+ configurations and evaluated clustering strategies (LDA, BERTopic, SBERT-KMeans) to simulate domain-specific expertise.\n\nSystem demonstrates adaptive trust evolution through incremental learning, dynamically adjusting model weights based on performance without prior bias—particularly valuable for low-resource languages underrepresented in NLP research."
        },
        {
            title: "Customer Relationship Management Web Application",
            technologies: ["PHP", "MySQL", "Bootstrap", "AWS", "RESTful API", "Chart.js"],
            description: "Enterprise CRM system with predictive lead scoring and real-time analytics, published in IJARSCT.",
            detailedDescription: "Architected and deployed a modular enterprise CRM system following MVC design principles, featuring real-time sales pipeline analytics and ML-based predictive lead scoring to optimize conversion rates. Implemented secure multi-tenant architecture with role-based access control (RBAC), JWT authentication, and encrypted data storage.\n\nDeveloped RESTful API endpoints for third-party integrations and built interactive dashboards using Chart.js for visualizing KPIs, sales forecasts, and customer engagement metrics. System includes automated email workflows, task management, and customer interaction tracking across multiple touchpoints.\n\nResearch findings on the modular architecture and its impact on SME adoption were published in the International Journal of Advanced Research in Science, Communication and Technology (IJARSCT), Vol. 2, Issue 1, September 2022 (DOI: 10.48175/IJARSCT-7119). Hosted on company AWS infrastructure with auto-scaling capabilities, the system handles concurrent users while maintaining sub-200ms response times for critical operations."
        }
    ],
    "Software Engineering": [
        {
            title: "Chrome Extension Auto-fill",
            technologies: ["JavaScript", "HTML", "CSS", "Chrome Storage API", "DOM Manipulation"],
            description: "Browser extension reducing form data entry time by 75% with intelligent field detection.",
            detailedDescription: "Built a Chrome extension for internal business operations that automated repetitive form filling for order processing and request management systems. Utilized Chrome's LocalStorage API to securely save frequently-used form field values, enabling one-click population of complex multi-field forms and reducing data entry time by 75%.\n\nImplemented intelligent field detection using DOM manipulation to identify and match input fields by their attributes (name, id). Developed a mapping system that associated saved data with corresponding form fields, handling various input types including text fields, dropdowns, radio buttons, and checkboxes.\n\nCreated an intuitive user interface allowing users to save, edit, and manage multiple data profiles for different form scenarios. Engineered the extension to work seamlessly with the company's internal web-based systems, maintaining data persistence across browser sessions while ensuring data remained stored locally on user machines for privacy and security. The solution significantly improved operational efficiency for staff members who processed high volumes of similar orders and requests daily."
        },
        {
            title: "Java Projects",
            technologies: ["Java"],
            description: "Collection of classic games including Fortune Cookie and Tic-Tac-Toe with Windows executables.",
            detailedDescription: "A collection of Java-based desktop applications featuring classic games designed for instant enjoyment and nostalgia. The Fortune Cookie application delivers motivational messages from a database of over 300 carefully selected affirmations, while the Tic-Tac-Toe game provides the timeless strategic gameplay experience with polished graphics and intuitive controls.\n\nImplementing object-oriented programming principles with clean separation of game logic, user interface, and data management. Both applications feature responsive GUI components built with Java Swing, ensuring smooth user interactions and visual appeal. The projects include Windows executable versions created through Java-to-executable conversion processes, making them accessible to users without Java runtime environments.",
            sourceLink: "https://github.com/Qrofeus/Java-Projects"
        },
        {
            title: "Music Player - Android Application",
            technologies: ["Kotlin", "Android SDK", "MediaPlayer API"],
            description: "Lightweight offline Android music player with no ads or internet requirements.",
            detailedDescription: "Developed a standalone Android music player application in Kotlin as a personal alternative to Google Play Music after its discontinuation in favor of the subscription-based YouTube Music service. The application was designed to be completely offline, requiring no internet connection, subscriptions, or displaying advertisements. Providing unrestricted access to locally stored music.\n\nImplemented comprehensive media scanning functionality that recursively traverses both internal phone storage and SD card directories to automatically detect and catalog all audio files. Integrated Android's MediaPlayer framework for audio playback with standard controls including play/pause, skip, and seek functionality. The project served as an experimental prototype exploring Android's file system APIs, media handling, and storage permissions management.",
            sourceLink: "https://github.com/Qrofeus/Music_Player"
        }
    ],
};

export default projectsData;