const resources = [
  {
    name: "Javascript.info",
    url: "https://javascript.info/js",
    description:
      "Best JavaScript documentation. From the basics to advanced topics with simple, but detailed explanations",
    keywords: ["javascript", "basics"],
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "The JS way Book",
    url: "https://github.com/thejsway/thejsway",
    description:
      "Beginner-friendly yet comprehensive, hands-on and easy to follow, this book will be a useful companion for anyone wishing to explore the many facets of JavaScript.    ",
    keywords: ["javascript", "books", "book", "basics"],
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "JavaScript Arrays: Explain Like I'm Five",
    url: "https://sumudusiriwardana.hashnode.dev/javascript-arrays-explain-like-im-five",
    description:
      "A hashnode blog article that explains the basics of arrays and array methods",
    keywords: ["arrays", "methods", "basics", "fundamentals", "javascript"],
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "Building a Simple CRUD App with Node, Express, and MongoDB",
    url: "https://zellwk.com/blog/crud-express-mongodb/",
    description:
      "A comprehensive tutorial on how to build a CRUD app that lets you track a list of quotes from Star Wars characters using Node, Express and MongoDB ",
    keywords: ["mongodb", "express", "node", "backend", "javascript", "CRUD"],
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "First Timers Only: Beginner Guide to Open Source",
    url: "https://www.firsttimersonly.com/",
    description: "Friendly open source projects for code-newbies",
    keywords: ["open source", "code newbies"],
    img: "https://i.ibb.co/LxvmH01/open-source.png",
  },
  {
    name: "First Steps into HTML & CSS",
    url: "https://learn.shayhowe.com/html-css/",
    description:
      "Learn to Code HTML & CSS is a simple and comprehensive guide dedicated to helping beginners learn HTML and CSS. Outlining the fundamentals, this guide works through all common elements of front-end design and development",
    keywords: ["css", "html", "basics"],
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
  },
  {
    name: "How to make your first pull request on GitHub",
    url: "https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/",
    description: "A step by step guide on how to make your first pull request",
    keywords: ["open source", "git", "pull request", "github"],
    img: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    name: "Learn Git Branching",
    url: "https://learngitbranching.js.org/",
    description:
      '"Learn Git Branching" is the most visual and interactive way to learn Git on the web; you\'ll be challenged with exciting levels, given step-by-step demonstrations of powerful features, and maybe even have a bit of fun along the way.',
    keywords: ["git", "version control", "branching", "github"],
    img: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    name: "What the heck is the event loop anyway?",
    url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
    description:
      "The best demonstration and explanation for JavaScript Event loop",
    keywords: ["javascript", "backend", "event loop"],
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "SEO Cheat Sheet",
    url: "https://htmlcheatsheet.com/seo/",
    description:
      "This online SEO cheat sheet lists everyting you need to know and do to rank your website as high as possible among the Google search results.",
    keywords: ["SEO", "cheat sheet"],
    img: "https://cdn-icons-png.flaticon.com/512/273/273564.png",
  },
  {
    name: "SEO Guide to Lighthouse Performance Metrics",
    url: "https://www.searchenginejournal.com/core-web-vitals/technical-seo-lighthouse/",
    description:
      "Take a deep dive into Lighthouse performance metrics with technical SEO pros Jamie Indigo and Rachel Anderson.",
    keywords: ["SEO", "metrics"],
    img: "https://cdn-icons-png.flaticon.com/512/273/273564.png",
  },
  {
    name: "C Programming Language",
    url: "https://www.amazon.com/Programming-Language-Brian-W-Kernighan/dp/0131103628",
    description:
      "Written by the developers of C. You don't need to go super deep in the book (or even finish it). Just get to where you're comfortable reading and writing in C.",
    keywords: ["C", "fundamentals", "books", "book"],
    img: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png",
  },
  {
    name: "Introduction to Algorithms",
    url: "https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844",
    description:
      "Long, tiring, takes forever but if you manage to go through it all, Introduction will be literally The Last Algorithms book You'll Need",
    keywords: ["algorithms", "fundamentals", "books", "book"],
    img: "https://cdn-icons-png.flaticon.com/512/277/277938.png",
  },
  {
    name: "Algorithms in C",
    url: "https://www.amazon.com/Algorithms-Parts-1-5-Bundle-Fundamentals/dp/0201756080",
    description:
      "Fundamentals, Data Structures, Sorting, Searching, and Graph Algorithms",
    keywords: [
      "C",
      "fundamentals",
      "books",
      "book",
      "data structures",
      "algorithms",
      "DSA",
    ],
    img: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png",
  },
  {
    name: "Data Structures and Algorithms in Python",
    url: "https://www.amazon.com/Structures-Algorithms-Python-Michael-Goodrich/dp/1118290275/",
    description:
      "Pythonic code, i loved this book. It covered everything and more. Best one in DSA in Python",
    keywords: [
      "Python",
      "books",
      "book",
      "data structures",
      "algorithms",
      "DSA",
    ],
    img: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
  },
  {
    name: "Python For Everybody",
    url: "https://www.py4e.com/lessons",
    description:
      "Literraly one of the most popular programming courses in the world, you won't regret it",
    keywords: ["Python"],
    img: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
  },
  {
    name: "Python Tutorial - Code with Mosh",
    url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
    description:
      "Learn Python from scratch with 6+ hours of value-packed content,perfect for beginners with zero coding experience",
    keywords: ["Python"],
    img: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
  },
  {
    name: "Data Structures and Algorithms in Java",
    url: "https://www.amazon.com/Data-Structures-Algorithms-Michael-Goodrich/dp/1118771338/",
    description:
      "Covers DSA in Java, there is also a Free Coursera course that covers the book, check it out.",
    keywords: ["Java", "books", "book", "data structures", "algorithms", "DSA"],
    img: "https://cdn-icons-png.flaticon.com/512/919/919854.png",
  },
  {
    name: "Algorithms",
    url: "https://www.amazon.com/Algorithms-4th-Robert-Sedgewick/dp/032157351X/",
    description:
      "This book surveys the most important computer algorithms currently in use and provides a full treatment of data structures and algorithms",
    keywords: ["Java", "books", "book", "data structures", "algorithms", "DSA"],
    img: "https://cdn-icons-png.flaticon.com/512/919/919854.png",
  },
  {
    name: "Data Structures and Algorithms in C++",
    url: "https://www.amazon.com/Data-Structures-Algorithms-Michael-Goodrich/dp/0470383275",
    description:
      "designed to provide an introduction to data structures and algorithms, including their design, analysis, and implementation in C++",
    keywords: ["C++", "books", "book", "data structures", "algorithms", "DSA"],
    img: "https://cdn-icons-png.flaticon.com/512/919/919841.png",
  },
  {
    name: "Cracking the Coding Interview",
    url: "https://www.amazon.com/Cracking-Coding-Interview-6th-Programming/dp/0984782850/",
    description:
      "This is the simplest book to get anyone started in studying for coding interviews. If you're an absolute beginner, I recommend you to start here",
    keywords: [
      "Java",
      "books",
      "book",
      "data structures",
      "algorithms",
      "interview",
    ],
    img: "https://cdn-icons-png.flaticon.com/512/919/919854.png",
  },
  {
    name: "Programming Interviews Exposed: Coding Your Way Through the Interview",
    url: "https://www.amazon.com/Programming-Interviews-Exposed-Through-Interview/dp/111941847X/",
    description:
      '"Cracking the Coding Interview" is probably enough, but go for it if you want to give yourself more practice on not so much difficult interview questions',
    keywords: [
      "Java",
      "C++",
      "books",
      "book",
      "data structures",
      "algorithms",
      "interview",
    ],
    img: "https://cdn-icons-png.flaticon.com/512/919/919841.png",
  },
];
exports.resources = resources;
