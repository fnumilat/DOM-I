const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Strech
let backgroundColor = document.querySelectorAll('body')
backgroundColor.forEach(element => {element.style.background = "#FFFF57"})

let links = document.getElementsByTagName('a');
links[0].textContent = 'Services';
links[1].textContent = 'Product';
links[2].textContent = 'Vision';
links[3].textContent = 'Features';
links[4].textContent = 'About';
links[5].textContent = 'Contact';

let headerTitle = document.querySelector('h1')
headerTitle.textContent = "DOM Is Awesome";

//Strech
let headerTitleColor = document.querySelectorAll('h1')
headerTitleColor.forEach(element => {element.style.color = "red";})

let headerButton = document.querySelector('button')
headerButton.textContent = "Get Started";

let headerImage = document.getElementById('cta-img')
headerImage.setAttribute('src', siteContent["cta"]["img-src"])


let topContentTitle = document.querySelectorAll('.top-content h4')
topContentTitle[0].textContent = siteContent["main-content"]["features-h4"];
topContentTitle[1].textContent = siteContent["main-content"]["about-h4"];

let topContentParagraph = document.querySelectorAll('.top-content p')
topContentParagraph[0].textContent = siteContent["main-content"]["features-content"];
topContentParagraph[1].textContent = siteContent["main-content"]["about-content"];

let middleImage = document.getElementById('middle-img')
middleImage.src = siteContent["main-content"]["middle-img-src"];

let bottomContentTitle = document.querySelectorAll('.bottom-content h4')
bottomContentTitle[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentTitle[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentTitle[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContentParagraph = document.querySelectorAll('.bottom-content p')
bottomContentParagraph[0].textContent = siteContent["main-content"][ "services-content"];
bottomContentParagraph[1].textContent = siteContent["main-content"]["product-content"];
bottomContentParagraph[2].textContent = siteContent["main-content"]["vision-content"];

let contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent["contact"]["contact-h4"];

let contactParagraphs = document.querySelectorAll('.contact p')
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email" ];

let footer = document.querySelector('footer p')
footer.textContent = siteContent["footer"]["copyright"];


let newNav1 = document.createElement('a')
newNav1.textContent = "Sign Up";
let navBar = document.querySelector('nav')
navBar.prepend(newNav1)

let newNav2 = document.createElement('a')
newNav2.textContent = "Shop"
let navBar2 = document.querySelector('nav')
navBar2.appendChild(newNav2)

let navTextColor = document.querySelectorAll('a')
navTextColor.forEach(element => {element.style.color = "green";})
