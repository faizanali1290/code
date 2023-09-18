// ? PRPL statnd for push render pre-fetch lazy-loading
// !PRPL
// *push critical resources
//? Rendering the initial route
// *process of displaying first content when user visits a website, involving data fetching, template rendering, and styling.
// *pre-cache
// *lazy loading

//! thses html link header is used to improve the performance of our website

//? Prefetch: The <link rel="prefetch"> attribute is used to suggest to the browser that a resource may be needed in the future, and it should be fetched preemptively in the background
//? Preload: The <link rel="preload"> attribute is used to specify that a resource should be loaded as a priority, even before it is encountered in the document
// ?<link rel="prefetch" as="image,font,script,style,audio,video">
// ?<link rel="preload" as="image,font,script,style,audio,video" href="">

// ! these html header is used cache the data
//? <meta http-equiv="Cache-Control" content="public, max-age=3600">
//? <meta http-equiv="Expires" content="Fri, 01 Jun 2023 12:00:00 GMT">

//! how to increse the speed index
//? Optimize server response time
//? Minimize file sizes
//? Leverage browser caching: Set appropriate cache headers for static resources such as images, CSS, and JavaScript files. This allows the browser to store these files locally, reducing the need for repeated downloads.
//? Optimize images
//? Prioritize above-the-fold content: Load the critical content of your web page first,
//? Reduce the number of HTTP requests
//? Implement HTTP/2: If your server supports HTTP/2, it enables multiple file requests to be sent over a single connection. This eliminates the need for domain sharding or other techniques used to overcome limitations of older HTTP versions.

//! Leverage browser caching
// GTmetrix is is used to check the performance of our website and slo check the leverage browser caching
// * the file extention is .htaccess
// inside content
// ## Leverage Browser Caching ##
{
  /* <IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-shockwave-flash "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
    ExpiresDefault "access plus 1 month"
</IfModule>
## End Leverage Browser Caching ## */
}

//! what is cpannel

//* cPanel is a web-based control panel software that provides a graphical interface for managing and administering web hosting accounts. It is commonly used by website owners and hosting providers to simplify the management of websites, domains, email accounts, databases, and other server-related tasks.

// !RAIL Model

//?  The RAIL model is a performance optimization model for web applications that focuses on improving the perceived performance of a web page. It stands for Response, Animation, Idle, and Load, and it involves the following four performance goals:
//? Response: The time it takes for the web page to respond to user input should be under 100 milliseconds.
//? Animation: The time it takes for an animation to run should be under 10 milliseconds.
//? Idle: The web page should take advantage of idle time to perform non-critical tasks.
//? Load: The time it takes for the web page to fully load should be under 1 second.

// Important metrics to measure #
// !First Contentful Paint (FCP):
//?  measures the time from when the page starts loading to when any part of the page's content is rendered on the screen. (lab, field)
// !Largest Contentful Paint (LCP): 
//? measures the time from when the page starts loading to when the largest text block or image element is rendered on the screen. (lab, field)
// !First Input Delay (FID):
// ? measures the time from when a user first interacts with your site (when they click a link, tap a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction. (field)
// !Interaction to Next Paint (INP):
//?  measures the latency of every tap, click, or keyboard interaction made with the page, and—based on the number of interactions—selects the worst interaction latency of the page (or close to the highest) as a single, representative value to describe a page's overall responsiveness. (lab, field)
//! Time to Interactive (TTI):
// ? measures the time from when the page starts loading to when it's visually rendered, its initial scripts (if any) have loaded, and it's capable of reliably responding to user input quickly. (lab)
// !Total Blocking Time (TBT):
//?  measures the total amount of time between FCP and TTI where the main thread was blocked for long enough to prevent input responsiveness. (lab)
// !Cumulative Layout Shift (CLS):
//?  measures the cumulative score of all unexpected layout shifts that occur between when the page starts loading and when its lifecycle state changes to hidden. (lab, field)
// !Time to First Byte (TTFB):
//?  measures the time it takes for the network to respond to a user request with the first byte of a resource. (lab, field)
