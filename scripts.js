let skillsContainer = document.getElementById("skillsContainer");
let skillHTML = "";
    skills=[
        {
            "name": "ReactJS",
            "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
        },
        {
            "name": "ExpressJS",
            "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
        },
        {
            "name": "NodeJS",
            "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
        },
        {
            "name": "Redux",
            "icon": "https://img.icons8.com/color/48/000000/redux.png"
        },
        {
            "name": "MaterialUI",
            "icon": "https://img.icons8.com/color/48/000000/material-ui.png"
        },
        {
            "name": "ChakraUI",
            "icon": "https://img.icons8.com/color/48/000000/chakra-ui.png"
        },
        {
            "name": "TailwindCSS",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
        },
        {
            "name": "Bootstrap",
            "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
        },
        {
            "name": "Sass",
            "icon": "https://img.icons8.com/color/48/000000/sass.png"
        },
        {
            "name": "HTML5",
            "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
        },
        {
            "name": "CSS3",
            "icon": "https://img.icons8.com/color/48/000000/css3.png"
        },
        {
            "name": "JavaScript",
            "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
        },
        {
            "name": "Java",
            "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
        },
        {
            "name": "PHP",
            "icon": "https://img.icons8.com/offices/48/000000/php-logo.png"
        },
        {
            "name": "Python",
            "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
        },
      
        {
            "name": "MongoDB",
            "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
        },
        {
            "name": "MySQL",
            "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
        },
        {
            "name": "PostgreSQL",
            "icon": "https://img.icons8.com/color/48/000000/postgreesql.png"
        },
        {
            "name": "Heroku",
            "icon": "https://img.icons8.com/color/48/000000/heroku.png"
        },
        {
            "name": "Netlify",
            "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
        },
        {
            "name": "jQuery",
            "icon": "https://img.icons8.com/ios-filled/48/1169ae/jquery.png"
        },
        {
            "name": "Git VCS",
            "icon": "https://img.icons8.com/color/48/000000/git.png"
        },
        {
            "name": "GitHub",
            "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
        },
        {
            "name": "WordPress",
            "icon": "https://img.icons8.com/color/48/000000/wordpress.png"
        }    
    ]
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
    let projectsContainer = document.querySelector("#work .box-container");

let projects=[
  {
    "name": "LPMS System",
    "desc": "Fully fledged Local Procurnment Website. Built using PHP, JavaScript and MySQL.",
    "image": "lpms",
    "category": "basicweb",
    "links": {
      "view": "https://lpms.hagbes.com",
      "code": "https://github.com/abmo475/lpms"
    }
  },
  {
    "name": "Medmart Ethiopia",
    "desc": "All in one Medical online shopping store. Built in Mern Stack.",
    "image": "medmart",
    "category": "mern",
    "links": {
      "view": "https://github.com/Abmo475/Med-Mart-Frontend",
      "code": "https://github.com/Abmo475/Med-Mart-Backend"
    }
  },
  // {
  //   "name": "NewsBox Android",
  //   "desc": "Native android app built using Java, XML. Retrofit & Glide dependencies. Provides different category news.",
  //   "image": "newsboxandroid",
  //   "category": "android",
  //   "links": {
  //     "view": "https://www.linkedin.com/posts/Abdilkadir -Mohammed_androiddev-androidstudio-java-activity-6955224473822199808-JT0j",
  //     "code": "https://github.com/Abdilkadir -Mohammed/newsbox-android"
  //   }
  // },
  // {
  //   "name": "Weatherly Android",
  //   "desc": "Native android app built using Java, XML and Volley dependencies. Provides weather forecast.",
  //   "image": "weatherlyandroid",
  //   "category": "android",
  //   "links": {
  //     "view": "https://www.linkedin.com/posts/Abdilkadir -Mohammed_androiddev-androidstudio-java-activity-6955224473822199808-JT0j",
  //     "code": "https://github.com/Abdilkadir -Mohammed/weatherly-android"
  //   }
  // },
  // {
  //   "name": "Instagram MERN",
  //   "desc": "Full-Stack Instagram clone built using MERN stack and realtime chat with the help of socket.iO",
  //   "image": "instagrammern",
  //   "category": "mern",
  //   "links": {
  //     "view": "https://instagramernstack.herokuapp.com/",
  //     "code": "https://github.com/Abdilkadir -Mohammed/instagram-mern"
  //   }
  // },
  {
    "name": "Fasilshop MERN",
    "desc": "Full-Stack online shop with Admin Dashboard and  Payment Gateway. MERN Stack WebApp, ready to use for business.",
    "image": "flipkartmern",
    "category": "mern",
    "links": {
      "view": "http://fasilshop.vercel.app/",
      "code": "https://github.com/Abmo475/fasilshop"
    }
    },{
      "name": "Bootstrap Company Website",
      "desc": "CompanyPortfolio built using HTML, CSS, Bootstrap, SASS and JavaScript. Customized Bootstrap using SCSS.",
      "image": "kiya",
      "category": "basicweb",
      "links": {
        "view": "https://abmo475.github.io/Kiya/",
        "code": "https://github.com/Abmo475/Kiya"
      }
    },
  {
    "name": "E-Bidir Fin Tech",
    "desc": "Financial loan approval system using mern app",
    "image": "ebidir",
    "category": "mern",
    "links": {
      "view": "https://github.com/Abmo475/E-bidir",
      "code": "https://github.com/Abmo475/E-bidir"
    }
  },
  // {
  //   "name": "React-Projects",
  //   "desc": "Full-Stack project dashboard which is collection of projects built on the React library.",
  //   "image": "reactprojects",
  //   "category": "mern",
  //   "links": {
  //     "view": "https://reactjsprojects.herokuapp.com/",
  //     "code": "https://github.com/Abdilkadir -Mohammed/React-Projects"
  //   }
  // },
  // {
  //   "name": "Flipkart PHP",
  //   "desc": "Full-Stack Flipkart Clone Using LAMP Stack. With all major features and OTP authentication and Cashfree payment gateway.",
  //   "image": "flipkartphp",
  //   "category": "lamp",
  //   "links": {
  //     "view": "https://github.com/Abdilkadir -Mohammed/Flipkart-Clone-PHP",
  //     "code": "https://github.com/Abdilkadir -Mohammed/Flipkart-Clone-PHP"
  //   }
  // },
  // {
  //   "name": "JavaScript Projects Website",
  //   "desc": "This website is specially build to showcase all major javaScript projects. All my javaScript based projects are in it.",
  //   "image": "jspro",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "https://Abdilkadir -Mohammed.github.io/JavaScript-Projects",
  //     "code": "https://github.com/Abdilkadir -Mohammed/JavaScript-Projects"
  //   }
  // },
  // {
  //   "name": "Web UI Clones",
  //   "desc": "Flipkart, YouTube, Instagram, Sololearn web UI clones using tailwindCSS.",
  //   "image": "webuiclones",
  //   "category": "mern",
  //   "links": {
  //     "view": "https://github.com/Abdilkadir -Mohammed/web-ui-clones",
  //     "code": "https://github.com/Abdilkadir -Mohammed/web-ui-clones"
  //   }
  // },
  // {
  //   "name": "Crypto Tracker",
  //   "desc": "Crypto Tracker built using ReactJS and Chakra UI. Supports dark mode. API used coingecko.",
  //   "image": "cryptotracker",
  //   "category": "mern",
  //   "links": {
  //     "view": "https://crypto-tracker-react-project.netlify.app/",
  //     "code": "https://github.com/Abdilkadir -Mohammed/React-Projects/tree/main/crypto-tracker"
  //   }
  // },
  // {
  //   "name": "Hulu Website",
  //   "desc": "Hulu website built using NextJS and tailwindCSS. API used TMDB, deployed on vercel.",
  //   "image": "hulu",
  //   "category": "mern",
  //   "links": {
  //     "view": "https://hulu-clone-Abdilkadir -Mohammed.vercel.app/",
  //     "code": "https://github.com/Abdilkadir -Mohammed/React-Projects/tree/main/hulu-clone"
  //   }
  // },
  // {
  //   "name": "Portfolio Website",
  //   "desc": "Personal Portfolio Website. Don't Need Much Info About It, Just Scroll Down. You're Here Only!",
  //   "image": "portfolio1",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "https://github.com/Abdilkadir -Mohammed/Portfolio-Website"
  //   }
  // },
  // {
  //   "name": "Composey Website",
  //   "desc": "Simple landing page website built using HTML, CSS, JavaScript and some JavaScript Libraries.",
  //   "image": "composey",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "https://composey.netlify.app/",
  //     "code": "https://github.com/Abdilkadir -Mohammed/LGMVIP-WebDev"
  //   }
  // },
  // {
  //   "name": "Webview App",
  //   "desc": "It's an android app which uses web view component for displaying content. This app provides many different features.",
  //   "image": "webviewapp",
  //   "category": "android",
  //   "links": {
  //     "view": "https://github.com/Abdilkadir -Mohammed/Android-Webview#webapp--android-webview-app",
  //     "code": "https://github.com/Abdilkadir -Mohammed/Android-Webview"
  //   }
  // },
  // {
  //   "name": "PHP Banking Website",
  //   "desc": "Basic Banking System based on PHP and MySQL database. Made with HTML, CSS, JavaScript and backend with PHP.",
  //   "image": "tsfbank",
  //   "category": "lamp",
  //   "links": {
  //     "view": "https://tsfbank.rf.gd",
  //     "code": "https://github.com/Abdilkadir -Mohammed/TSF-Bank"
  //   }
  // },
 
  // {
  //   "name": "Bootstrap Template",
  //   "desc": "Basic website template built using HTML and Bootstrap.",
  //   "image": "bootstraptemplate",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "#"
  //   }
  // },
  // {
  //   "name": "Foodicious",
  //   "desc": "Basic food website landing page built using HTML, CSS and JavaScript.",
  //   "image": "foodicious",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "#"
  //   }
  // },
  // {
  //   "name": "Food Website",
  //   "desc": "Basic food website landing page built using HTML, CSS, SASS, Bootstrap and jQuery.",
  //   "image": "foodwebsite",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "#"
  //   }
  // },
  // {
  //   "name": "WebChat Website",
  //   "desc": "It's a web based chat app made using popular javaScript library Socket IO. Allows multiple users to connect.",
  //   "image": "webchat",
  //   "category": "mern",
  //   "links": {
  //     "view": "https://github.com/Abdilkadir -Mohammed/WebChat#webchat",
  //     "code": "https://github.com/Abdilkadir -Mohammed/WebChat"
  //   }
  // },
  // {
  //   "name": "Basic Banking App",
  //   "desc": "It's an android app which uses SQLite to store user accounts data. It provides feature to simply transact amount.",
  //   "image": "basicbank",
  //   "category": "android",
  //   "links": {
  //     "view": "https://github.com/Abdilkadir -Mohammed/Basic_Banking_App#basic-banking-app",
  //     "code": "https://github.com/Abdilkadir -Mohammed/Basic_Banking_App"
  //   }
  // },
  // {
  //   "name": "JavaScript Issue Tracker",
  //   "desc": "It provides the feature to Assign Issue With The Auto Generated Id By Using ChanceJS. Uses Local Storage.",
  //   "image": "issuetrack",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "https://Abdilkadir -Mohammed.github.io/JavaScript-Projects/projects/issuetracker",
  //     "code": "https://github.com/Abdilkadir -Mohammed/JavaScript-Projects/tree/main/projects/issuetracker"
  //   }
  // },
  // {
  //   "name": "PHP PBL Portal",
  //   "desc": "A simple portal in which students can submit their PBL projects and faculties can view by access admin panel.",
  //   "image": "phppblform",
  //   "category": "lamp",
  //   "links": {
  //     "view": "https://github.com/Abdilkadir -Mohammed/PHP-Projects/tree/main/pblform#pbl-portal",
  //     "code": "https://github.com/Abdilkadir -Mohammed/PHP-Projects/tree/main/pblform"
  //   }
  // },
  // {
  //   "name": "Link List",
  //   "desc": "All major profile links in a single website. It's just like clone of link tree. Personalized and Responsive.",
  //   "image": "linklist",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "https://Abdilkadir -Mohammed.github.io/LinkList",
  //     "code": "https://github.com/Abdilkadir -Mohammed/LinkList"
  //   }
  // },
  // {
  //   "name": "Job Finder Dummy",
  //   "desc": "It Fetch JSON Data And Allow Feature To Search Within The Content Displayed. Will be Developed By Using Live APIs.",
  //   "image": "saas",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "https://Abdilkadir -Mohammed.github.io/JavaScript-Projects/api-projects/saas-jobs",
  //     "code": "https://github.com/Abdilkadir -Mohammed/JavaScript-Projects/tree/main/api-projects/saas-jobs"
  //   }
  // },
  // {
  //   "name": "Old Websites",
  //   "desc": "Bestwebs & ColorCoder. Two Years old websites memories. Simple with basic features.",
  //   "image": "oldsites",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "#"
  //   }
  // },
  // {
  //   "name": "Resistor Color Codes",
  //   "desc": "Simply provides the color codes of resistors. Calculation information and about resistors.",
  //   "image": "resistercolor",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "#"
  //   }
  // },
  // {
  //   "name": "KIA Info Website",
  //   "desc": "Basic KIA webpage displays the info about seltos product range. Specs and Image Gallery.",
  //   "image": "kiaweb",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "#"
  //   }
  // },
  // {
  //   "name": "Burger Shop Dummy",
  //   "desc": "Basic burger shop webpage allow users to check menu and price. Dummy Order Form.",
  //   "image": "burgerweb",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "#"
  //   }
  // },
  // {
  //   "name": "Indian Temples",
  //   "desc": "It shows temples of different sectors of India. as user clicks it will redirect to wiki of that temple for info.",
  //   "image": "templeweb",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "#"
  //   }
  // },
  // {
  //   "name": "Indian Temples",
  //   "desc": "It shows temples of different sectors of India. as user clicks it will redirect to wiki of that temple for info.",
  //   "image": "templeweb",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "#"
  //   }
  // },
  // {
  //   "name": "Indian Temples",
  //   "desc": "It shows temples of different sectors of India. as user clicks it will redirect to wiki of that temple for info.",
  //   "image": "templeweb",
  //   "category": "basicweb",
  //   "links": {
  //     "view": "#",
  //     "code": "#"
  //   }
]
let projectsHTM="";
 
for(let i=0;i<projects.length;i++){
  // alert(1)
  projectsHTM+='<div class="grid-item'+projects[i].category+'"><div class="box tilt" style="width: 380px; margin: 1rem">'+
         '<img draggable="false" src="assets/images/projects/'+projects[i].image+'.png" alt="project" />'+
      '<div class="content">'+
        '<div class="tag">'+
        '<h3>'+projects[i].name+'</h3>'+
        '</div>'+
        '<div class="desc">'+
          '<p>'+projects[i].desc+'</p>'+
          '<div class="btns">'+
            '<a href="'+projects[i].links.view+'" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>'+
            '<a href="'+projects[i].links.code+'" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '</div>'
  }
  projectsContainer.innerHTML= projectsHTM
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
var typed = new Typed(".typing-text", {
  strings: ["FullStack developer", "Backend Specialist", "web designer", "Computer Engineer", "Electrical Engineer", "Software Engineer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});