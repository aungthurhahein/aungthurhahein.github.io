const resource = [

  /* --- CSS --- */
  '/assets/css/style.css',

  /* --- PWA --- */
  '/app.js',
  '/sw.js',

  /* --- HTML --- */
  '/index.html',
  '/404.html',
  
    '/about/',
  
    '/categories/',
  
    '/tech/',
  
    '/tags/',
  
    '/archives/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/assets/img/favicons/android-chrome-192x192.png',
    '/assets/img/favicons/android-chrome-512x512.png',
    '/assets/img/favicons/apple-touch-icon.png',
    '/assets/img/favicons/favicon-16x16.png',
    '/assets/img/favicons/favicon-32x32.png',
    '/assets/img/favicons/favicon.ico',
    '/assets/js/dist/categories.min.js',
    '/assets/js/dist/commons.min.js',
    '/assets/js/dist/home.min.js',
    '/assets/js/dist/misc.min.js',
    '/assets/js/dist/page.min.js',
    '/assets/js/dist/post.min.js',
    '/assets/js/dist/pvreport.min.js',
    '/assets/img/favicons/.DS_Store'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'raw.githubusercontent.com',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

