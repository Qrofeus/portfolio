const projectsData = {
    "Web Development": [
        {
            title: "Online Quiz",
            technologies: ["OpenTDB API", "HTML", "CSS", "JavaScript"],
            description: "Interactive trivia quiz game with 20 questions across multiple categories and difficulty levels.",
            detailedDescription: "An engaging web-based quiz application that leverages the Open Trivia Database API to deliver dynamic trivia experiences. Users can select from various categories and difficulty levels to challenge their knowledge across diverse topics.\n\nThe application features a clean, responsive design built with vanilla JavaScript, ensuring smooth performance across all devices. Key technical implementations include asynchronous API calls for real-time question fetching, dynamic DOM manipulation for seamless user interactions, and a modular code structure that separates concerns between data fetching, UI rendering, and game logic.\n\nThe project demonstrates proficiency in working with external APIs, handling asynchronous operations, and creating intuitive user interfaces. The quiz dynamically adapts to user preferences, providing 20 carefully curated questions that offer both entertainment and educational value.",
            sourceLink: "https://github.com/Qrofeus/online-quiz",
            liveLink: "https://quiz.qrofeus.dev/"
        },
        {
            title: "Weather App",
            technologies: ["OpenWeather API", "HTML", "CSS", "JavaScript"],
            description: "Real-time weather application providing current conditions for cities worldwide.",
            detailedDescription: "A comprehensive weather application that delivers real-time meteorological data for any city globally through the WeatherAPI integration. The application provides essential weather metrics including temperature, humidity, wind speed, and current conditions in an intuitive, user-friendly interface.\n\nTechnical highlights include secure API key management through GitHub Actions and automated deployment workflows. The project implements robust error handling for invalid city searches and network issues, while maintaining responsive design principles for optimal viewing across devices. The application features intelligent search functionality with immediate feedback and clean data presentation.\n\nA notable technical achievement is the implementation of CI/CD pipeline using GitHub Actions, which securely injects API keys during deployment while keeping sensitive credentials protected. This demonstrates understanding of modern development practices including security-first approaches and automated deployment strategies.",
            sourceLink: "https://github.com/Qrofeus/weather-web-application",
            liveLink: "https://weather.qrofeus.dev/"
        },
        {
            title: "Digital Clock",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "Dynamic digital clock with real-time updates and modern styling.",
            detailedDescription: "A sleek digital clock web application that displays current time with dynamic updates using JavaScript's built-in timing functions. The project focuses on creating a visually appealing timepiece with smooth animations and modern design aesthetics.\n\nThe implementation showcases proficiency in JavaScript's Date object manipulation, setInterval for real-time updates, and CSS styling for creating an elegant user interface. The clock features smooth transitions and responsive design that adapts to different screen sizes while maintaining readability and visual appeal.\n\nWhile seemingly simple, this project demonstrates attention to detail in user experience design, efficient DOM manipulation, and clean code organization. The application serves as a foundation for understanding time-based JavaScript applications and real-time data presentation.",
            sourceLink: "https://github.com/Qrofeus/digital-clock-webapp",
            liveLink: "https://qrofeus.github.io/digital-clock-webapp/"
        },
        {
            title: "Portfolio website",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "Modern responsive portfolio showcasing projects, skills, and professional experiences.",
            detailedDescription: "A comprehensive personal portfolio website designed to showcase technical projects, professional skills, and career experiences through a modern, responsive interface. The site features dynamic content filtering, smooth animations, and intuitive navigation to create an engaging user experience.\n\nTechnical implementations include advanced CSS Grid and Flexbox layouts for responsive design, JavaScript-powered filtering systems for project categorization, and performance-optimized loading strategies. The site incorporates modern web design principles including mobile-first approach, accessibility features, and cross-browser compatibility.\n\nThe portfolio demonstrates expertise in front-end development best practices, including semantic HTML structure, modular CSS organization, and progressive enhancement techniques. The project serves as both a professional showcase and a testament to clean code architecture and user-centered design principles.",
            sourceLink: "https://github.com/Qrofeus/portfolio",
            liveLink: "https://qrofeus.dev/"
        }
    ],
    "Python": [
        {
            title: "Enigma Machine Simulation: Console",
            technologies: ["Python"],
            description: "Console-based WWII Enigma Machine encryption/decryption simulator with historical accuracy.",
            detailedDescription: "A faithful recreation of the World War II Enigma Machine encryption system, implemented as a console-based Python application. This project simulates the complex mechanical encryption process used by German forces, featuring historically accurate rotor configurations, plugboard settings, and daily code books.\n\nThe implementation includes sophisticated features such as date-based preset configurations that mirror actual wartime code books, private message capabilities with custom 8-letter codes, and comprehensive logging systems for message tracking. The application maintains historical authenticity while providing modern conveniences like automated rotor positioning and validation checks.\n\nTechnical achievements include object-oriented design patterns for rotor and plugboard components, file-based configuration management for daily presets, and robust input validation systems. The project demonstrates deep understanding of cryptographic principles, historical computing systems, and complex algorithm implementation in Python.",
            sourceLink: "https://github.com/Qrofeus/Enigma-Machine"
        },
        {
            title: "Sorting Algorithms - Visualization Tool",
            technologies: ["Python", "PyGame"],
            description: "Interactive visualization tool for understanding sorting algorithms through animated demonstrations.",
            detailedDescription: "A comprehensive educational tool that brings sorting algorithms to life through interactive PyGame visualizations. The project implements over 10 different sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and advanced techniques like Radix Sort and Heap Sort, each with detailed performance analysis and visual representations.\n\nThe application features real-time algorithm execution with adjustable speed controls, allowing users to observe the step-by-step process of how different sorting methods organize data. Performance benchmarking capabilities provide execution time comparisons across 1,000 iterations with 10,000-element arrays, offering valuable insights into algorithmic efficiency.\n\nTechnical highlights include modular algorithm implementations with consistent interfaces, sophisticated timing decorators for performance measurement, and dynamic visualization rendering that adapts to different array sizes. The project serves as both an educational resource for computer science concepts and a demonstration of advanced Python programming techniques.",
            sourceLink: "https://github.com/Qrofeus/sorting-algorithms"
        },
        {
            title: "Path-Finding Algorithms",
            technologies: ["Python", "PyGame"],
            description: "Visual A* pathfinding algorithm implementation with interactive grid-based exploration.",
            detailedDescription: "An interactive visualization of the A* pathfinding algorithm built with Python and PyGame, designed to provide intuitive understanding of graph traversal and heuristic search techniques. The application allows users to create custom obstacles, set start and end points, and watch the algorithm intelligently navigate through complex mazes.\n\nThe implementation features real-time algorithm execution with visual representation of open and closed sets, demonstrating how A* uses heuristic functions to efficiently find optimal paths. Users can interact with the grid environment, creating dynamic obstacles and observing how the algorithm adapts its pathfinding strategy in real-time.\n\nTechnical achievements include efficient priority queue implementation for optimal performance, customizable heuristic functions (Manhattan, Euclidean distances), and smooth animation rendering that clearly illustrates the algorithm's decision-making process. The project effectively bridges theoretical computer science concepts with practical, visual learning experiences.",
            sourceLink: "https://github.com/Qrofeus/path-finding-algorithms"
        }
    ],
    "Research Project": [
        {
            title: "Cyberbullying Detection with Distributed Computing",
            technologies: ["Python", "Random Forest, CNN", "Logistic Regression", "BERT", "Distributed Systems"],
            description: "Distributed ML system achieving 90% accuracy in multilingual cyberbullying detection.",
            detailedDescription: "Developed a distributed system for cyberbullying detection across multilingual datasets. Trained and optimized multiple machine learning classifiers achieving close to 90% accuracy through advanced ensemble methods."
        },
        {
            title: "Customer Relationship Management Web Application",
            technologies: ["PHP", "MySQL", "Bootstrap", "AWS"],
            description: "Enterprise CRM system with real-time analytics and predictive modeling capabilities.",
            detailedDescription: "Engineered a modular CRM system hosted on company servers with real-time analytics and predictive modeling to enhance lead conversion. Implemented secure authentication with role-based access control."
        }
    ],
    "Software Engineering": [
        {
            title: "Chrome Extension Auto-fill",
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "Browser extension reducing form data entry time by 75% with intelligent field detection.",
            detailedDescription: "Developed a Chrome extension to autofill forms, reducing user data entry time by 75%. Implemented real-time field detection and customization features for enhanced usability."
        },
        {
            title: "Java Projects",
            technologies: ["Java"],
            description: "Collection of classic games including Fortune Cookie and Tic-Tac-Toe with Windows executables.",
            detailedDescription: "A curated collection of Java-based desktop applications featuring classic games designed for instant enjoyment and nostalgia. The Fortune Cookie application delivers motivational messages from a database of over 300 carefully selected affirmations, while the Tic-Tac-Toe game provides the timeless strategic gameplay experience with polished graphics and intuitive controls.\n\nTechnical implementations showcase object-oriented programming principles with clean separation of game logic, user interface, and data management. Both applications feature responsive GUI components built with Java Swing, ensuring smooth user interactions and visual appeal. The projects include Windows executable versions created through Java-to-executable conversion processes, making them accessible to users without Java runtime environments.\n\nThe collection demonstrates proficiency in Java development fundamentals, including event-driven programming, file I/O operations for message databases, game state management, and cross-platform compatibility considerations. These projects effectively combine entertainment value with technical skill demonstration.",
            sourceLink: "https://github.com/Qrofeus/Java-Projects"
        },
        {
            title: "Music Player",
            technologies: ["Kotlin"],
            description: "Feature-rich Android music player application with intuitive UI and media controls.",
            detailedDescription: "A sophisticated Android music player application developed in Kotlin, featuring a modern, intuitive user interface designed for seamless music consumption. The application provides comprehensive media playback capabilities including playlist management, track navigation, and audio control features that enhance the mobile music listening experience.\n\nThe implementation leverages Android's MediaPlayer framework and modern Kotlin language features to create responsive, efficient audio playback functionality. The application incorporates material design principles for consistent visual aesthetics and user-friendly interactions, while implementing proper lifecycle management for uninterrupted playback during device orientation changes and app transitions.\n\nTechnical highlights include asynchronous audio loading for smooth performance, custom UI components for media controls, and efficient memory management for handling large music libraries. The project demonstrates expertise in Android development, Kotlin programming, and mobile user experience design principles.",
            sourceLink: "https://github.com/Qrofeus/Music_Player"
        }
    ],
};

export default projectsData;