import YEAR from '../Images/CourseLOGO/1year.jpg';
import Autocad from '../Images/CourseLOGO/Autocad.jpg';
import Coral from '../Images/CourseLOGO/coral.jpg';
import HTML from '../Images/CourseLOGO/HTML.jpg';
import MERN from '../Images/CourseLOGO/MERN.jpg';
import Office from '../Images/CourseLOGO/office.jpg';
import PR from '../Images/CourseLOGO/PR.jpeg';
import PS from '../Images/CourseLOGO/PS.png';
import REACT from '../Images/CourseLOGO/REACT.jpg';
import TallyLogo from '../Images/CourseLOGO/tallylogo.png';
import WP from '../Images/CourseLOGO/WP.png';

const courses = [
  { 
    courseID : 1,
    CourseImage: HTML,
    courseName: "HTML, CSS, JS",
    description: "3 months course covering all the concepts of HTML, CSS, and JS",
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
    courseID : 2,
    CourseImage: REACT,
    description: "6 months course covering complete frontend development with React.js",
    courseName: "React Development",
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
    courseID : 3,
    CourseImage: MERN,
    courseName: "MERN Full Stack Development",
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
    courseID : 4,
    CourseImage: Autocad,
    courseName: "AutoCAD (3 Months)",
    courseDuration: "3 Months",
    description: "3,6,12 months course cover Design and drafting software for 2D and 3D",
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
    courseID : 5,
    CourseImage: Coral,
    courseName: "CorelDRAW (3 Months)",
    description: " CorelDRAW Graphics Suite is all-in-one toolbox for endless creativity.",
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
    courseID : 6,
    CourseImage: TallyLogo,
    courseName: "Tally (3 Months)",
    description: "Optimize your business with Tally – simplicity meets performance!",
    courseDuration: "3 Months",
    courseFee: "10000",
    courseLearnings: [
      "Understand basic accounting principles",
      "Master Tally software operations",
      "Learn GST and tax management",
      "Create financial reports and statements"
    ],
    courseSyllabus: [
      {
        module: "Introduction to Accounting and Tally",
        topics: [
          "Basic Accounting Principles",
          "Tally Interface Overview",
          "Creating and Managing Ledgers"
        ]
      },
      {
        module: "Tally Operations and GST",
        topics: [
          "Inventory Management",
          "GST Setup and Invoicing",
          "Generating Financial Reports"
        ]
      }
    ]
  },

  { 
    courseID : 7,
    CourseImage: PR,
    CourseName: "Adobe Premiere Pro (6 Months)",
    description: "Video editing software for professional films and video projects.",
    courseDuration: "6 Months",
    courseFee: "20000",
    courseLearnings: [
      "Edit videos like a professional",
      "Learn advanced video transitions",
      "Master color grading techniques",
      "Create motion graphics and effects"
    ],
    courseSyllabus: [
      {
        module: "Video Editing Basics",
        topics: [
          "Premiere Pro Interface",
          "Basic Editing Workflow",
          "Working with Timelines"
        ]
      },
      {
        module: "Advanced Editing Techniques",
        topics: [
          "Transitions and Effects",
          "Audio Editing and Mixing",
          "Color Grading and Correction"
        ]
      }
    ]
  },

  { 
    courseID : 8,
    CourseImage: WP,
    CourseName: "WordPress (3 Months)",
    description: "Website builder and CMS for blogs, e-commerce, and customization",
    courseDuration: "3 Months",
    courseFee: "15000",
    courseLearnings: [
      "Build and manage WordPress websites",
      "Customize themes and templates",
      "Learn SEO best practices",
      "Integrate plugins for enhanced functionality"
    ],
    courseSyllabus: [
      {
        module: "Getting Started with WordPress",
        topics: [
          "Installing and Setting up WordPress",
          "Understanding the Dashboard",
          "Creating Pages and Posts"
        ]
      },
      {
        module: "Advanced WordPress Features",
        topics: [
          "Customizing Themes and Templates",
          "Using Plugins for Functionality",
          "SEO Optimization and Analytics"
        ]
      }
    ]
  },

  { 
    courseID : 9,
    CourseImage: YEAR,
    courseName: "Comprehensive Computer Course (1 Year)",
    description: "1-year course covering Office, Tally, Internet, and Computer Hardware",
    courseDuration: "1 Year",
    courseFee: "40000",
    courseLearnings: [
      "Gain expertise in office productivity tools",
      "Learn programming and database management",
      "Understand computer hardware and networking",
      "Explore graphic design tools and techniques",
      "Build real-world projects to enhance learning",
      "Prepare for IT certifications"
    ],
    courseSyllabus: [
      {
        module: "Office and Productivity Tools",
        topics: [
          "Comprehensive MS Office Skills",
          "Email Communication and Calendar Management",
          "Cloud Tools like Google Workspace"
        ]
      },
      {
        module: "Programming and Databases",
        topics: [
          "Advanced Python Programming",
          "Introduction to SQL and Database Management",
          "Database Design and Optimization"
        ]
      },
      {
        module: "Graphic Design Basics",
        "topics": [
          "Introduction to Photoshop and CorelDRAW",
          "Creating Visual Content",
          "Design Principles and Color Theory"
        ]
      },
      {
        module: "Networking and Hardware",
        topics: [
          "Advanced Networking Concepts",
          "Hardware Troubleshooting and Maintenance",
          "System Security Essentials"
        ]
      }
    ]
  },

  { 
    couresID : 10,
    CourseImage: PS,
    courseName: "Photoshop (3 Months)",
    description: "Image editing software for design, retouching, and graphic creation.",
    courseDuration: "3 Months",
    courseFee: "12000",
    courseLearnings: [
      "Edit and retouch photos professionally",
      "Learn graphic design basics",
      "Master layering techniques",
      "Create social media graphics and posters"
    ],
    courseSyllabus: [
      {
        module: "Getting Started with Photoshop",
        topics: [
          "Understanding the Interface",
          "Basic Tools and Shortcuts",
          "Working with Layers"
        ]
      },
      {
        module: "Photo Editing and Retouching",
        topics: [
          "Color Correction and Adjustments",
          "Removing Backgrounds",
          "Retouching Techniques"
        ]
      }
    ]
  },


];

export default courses;







 
  