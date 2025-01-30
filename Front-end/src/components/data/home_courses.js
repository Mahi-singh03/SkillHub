
import Autocad from '../../Images/CourseLOGO/Autocad.jpg';
import Coral from '../../Images/CourseLOGO/coral.jpg';
import HTML from '../../Images/CourseLOGO/HTML.jpg';
import MERN from '../../Images/CourseLOGO/MERN.jpg';
import Office from '../../Images/CourseLOGO/office.jpg';
import PS from '../../Images/CourseLOGO/PS.png';
import REACT from '../../Images/CourseLOGO/REACT.jpg';




const coursesHOME = [
  {
    courseID: 1,
    CourseImage: HTML,
    courseName: "HTML, CSS, JS (3 Months)",
    description:
      "3 months course covering all the concepts of HTML, CSS, and JS",
    courseDuration: "3 Months",
    courseFee: "10000",
    courseLearnings: [
      "Create the structure of the website using HTML",
      "Design beautiful websites using CSS",
      "Add functionality to the website using JavaScript",
      "Learn to use VS Code effectively",
      "Utilize AI tools for website designing",
      "Create responsive websites",
    ],
    courseSyllabus: [
      {
        module: "HTML",
        topics: [
          "Introduction to HTML and Document Structure",
          "HTML Tags and Attributes",
          "Creating Forms and Tables",
          "HTML5 Semantic Elements",
          "Media Elements: Images, Audio, and Video",
        ],
      },
      {
        module: "CSS",
        topics: [
          "Introduction to CSS and Selectors",
          "Box Model and Layout Techniques",
          "Flexbox and CSS Grid",
          "CSS Animations and Transitions",
          "Responsive Design Principles",
        ],
      },
      {
        module: "JavaScript",
        topics: [
          "JavaScript Basics: Variables, Data Types, and Operators",
          "Control Structures and Loops",
          "Functions and Event Handling",
          "DOM Manipulation and Traversal",
          "Introduction to ES6 Features (let, const, arrow functions, etc.)",
        ],
      },
    ],
  },
  {
    courseID: 2,
    CourseImage: REACT,
    description:
      "6 months course covering complete frontend development with React.js",
    courseName: "React (6 Months)",
    courseDuration: "6 Months",
    courseFee: "20000",
    courseLearnings: [
      "Understand React fundamentals",
      "Build dynamic and reusable components",
      "State management using React State and Context API",
      "Routing with React Router",
      "Consume APIs and handle data",
      "Use Redux for advanced state management",
      "Deploy React applications",
    ],
    courseSyllabus: [
      {
        module: "HTML, CSS, JS",
        topics: [
          "HTML5 Semantic Elements",
          "Media Elements: Images, Audio, and Video",
          "Flexbox and CSS Grid",
          "CSS Animations and Transitions",
          "Responsive Design Principles",
          "JavaScript Basics: Variables, Data Types, and Operators",
          "Control Structures and Loops",
          "Functions and Event Handling",
          "DOM Manipulation and Traversal",
          "Introduction to ES6 Features (let, const, arrow functions, etc.)",
        ],
      },
      {
        module: "React Basics",
        topics: [
          "Introduction to React and Virtual DOM",
          "JSX Syntax and Rendering Elements",
          "Props and State Management",
          "Lifecycle Methods and Functional Components",
        ],
      },
      {
        module: "React Advanced",
        topics: [
          "React Hooks: useState, useEffect, useRef, etc.",
          "Context API for State Management",
          "React Router for Navigation",
          "Error Handling and Debugging",
        ],
      },
      {
        module: "State Management and Deployment",
        topics: [
          "Introduction to Redux and Redux Toolkit",
          "Managing Side Effects with Redux Thunk",
          "Integrating REST APIs with React",
          "Building and Deploying React Applications",
        ],
      },
    ],
  },
  {
    courseID: 4,
    CourseImage: Autocad,
    courseName: "AutoCAD (3 Months)",
    courseDuration: "3 Months",
    description:
      "3,6,12 months course cover Design and drafting software for 2D and 3D",
    courseFee: "15000",
    courseLearnings: [
      "Master 2D drafting and annotation",
      "Learn the basics of 3D modeling",
      "Understand industry-standard AutoCAD tools",
      "Create professional drawings and layouts",
    ],
    courseSyllabus: [
      {
        module: "Introduction to AutoCAD",
        topics: [
          "AutoCAD Interface and Basics",
          "Drawing and Modifying Objects",
          "Using Layers, Colors, and Linetypes",
        ],
      },
      {
        module: "Drafting and Annotations",
        topics: [
          "Dimensioning and Text",
          "Hatching and Gradient Tools",
          "Working with Blocks and Groups",
        ],
      },
    ],
  },
  {
    courseID: 3,
    CourseImage: MERN,
    courseName: "MERN FullStack ( 1 year )",
    description: "1-year course covering both frontend and backend from basics",
    courseDuration: "1 Year",
    courseFee: "50000",
    courseLearnings: [
      "Master front-end development with React",
      "Build RESTful APIs using Node.js and Express.js",
      "Work with MongoDB for database management",
      "Understand the MERN architecture",
      "Learn authentication and authorization",
      "Deploy full-stack applications",
      "Collaborate on real-world projects",
    ],
    courseSyllabus: [
      {
        module: "Frontend Development",
        topics: [
          "React Basics: Components, Props, and State",
          "Advanced React Concepts: Hooks and Context API",
          "State Management with Redux",
          "UI Libraries: Material-UI and Bootstrap",
          "Building Responsive and Accessible UIs",
        ],
      },
      {
        module: "Backend Development",
        topics: [
          "Introduction to Node.js and NPM",
          "Building Web Servers with Express.js",
          "Creating RESTful APIs",
          "Middleware and Error Handling",
          "Authentication with JSON Web Tokens (JWT)",
        ],
      },
      {
        module: "Database Management",
        topics: [
          "MongoDB Basics: Collections, Documents, and Queries",
          "Data Modeling with Mongoose",
          "Aggregation Framework",
          "Database Indexing and Optimization",
          "Working with Cloud Databases",
        ],
      },
      {
        module: "Full-Stack Projects",
        topics: [
          "Integrating Frontend and Backend",
          "Implementing CRUD Operations",
          "User Authentication and Authorization",
          "Testing and Debugging Full-Stack Applications",
          "Deploying MERN Apps to Platforms like Heroku or Vercel",
        ],
      },
    ],
  },
  {
    courseID: 12,
    CourseImage: Office,
    description:
      " 3-month course covering computer operations and software skills",
    courseName: "Comp. Course (3 Months)",
    courseDuration: "3 Months",
    courseFee: "10000",
    courseLearnings: [
      "Understand basic computer operations",
      "Learn file management and system navigation",
      "Master Microsoft Office Suite (Word, Excel, PowerPoint)",
      "Learn basic internet usage and email communication",
      "Understand cybersecurity essentials",
      "Gain typing speed and accuracy",
    ],
    courseSyllabus: [
      {
        module: "Introduction to Computers",
        topics: [
          "Understanding Hardware and Software",
          "Operating System Basics",
          "File and Folder Management",
          "Peripheral Devices (Printers, Scanners, etc.)",
        ],
      },
      {
        module: "Microsoft Office Suite",
        topics: [
          "Creating Documents in MS Word",
          "Spreadsheet Basics in MS Excel",
          "Designing Presentations in MS PowerPoint",
          "Data Analysis and Charts in Excel",
        ],
      },
      {
        module: "Internet and Cybersecurity",
        topics: [
          "Internet Browsing and Search Engines",
          "Creating and Managing Email Accounts",
          "Online Safety and Security Basics",
          "Cloud Storage and File Sharing",
        ],
      },
    ],
  },
  {
    courseID: 5,
    CourseImage: Coral,
    courseName: "CorelDRAW (3 Months)",
    description:
      " CorelDRAW Graphics Suite is all-in-one toolbox for endless creativity.",
    courseDuration: "3 Months",
    courseFee: "13000",
    courseLearnings: [
      "Design vector-based graphics",
      "Create professional logos and illustrations",
      "Understand layout and typography techniques",
      "Prepare designs for print and digital use",
    ],
    courseSyllabus: [
      {
        module: "CorelDRAW Basics",
        topics: [
          "Understanding the Interface",
          "Creating and Modifying Shapes",
          "Working with Text and Fonts",
        ],
      },
      {
        module: "Advanced Graphic Design",
        topics: [
          "Creating Logos and Business Cards",
          "Using Effects and Blends",
          "Preparing Designs for Printing",
        ],
      },
    ],
  },
  {
    couresID: 10,
    CourseImage: PS,
    courseName: "Photoshop (3 Months)",
    description:
      "Image editing software for design, retouching, and graphic creation.",
    courseDuration: "3 Months",
    courseFee: "12000",
    courseLearnings: [
      "Edit and retouch photos professionally",
      "Learn graphic design basics",
      "Master layering techniques",
      "Create social media graphics and posters",
    ],
    courseSyllabus: [
      {
        module: "Getting Started with Photoshop",
        topics: [
          "Understanding the Interface",
          "Basic Tools and Shortcuts",
          "Working with Layers",
        ],
      },
      {
        module: "Photo Editing and Retouching",
        topics: [
          "Color Correction and Adjustments",
          "Removing Backgrounds",
          "Retouching Techniques",
        ],
      },
    ],
  },
];

export default coursesHOME;