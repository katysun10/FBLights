 const SEARCH_INTERVAL = 1000;

const USER_CONTENT_ELEMENT = ".userContentWrapper, .fbUserContent";

const OUTBOUND_LINK = "https://l.facebook.com/l.php?u=";
const WHITELIST_OUTBOUND_LINKS = [
    "instagram"
];

const HIGHLIGHT_KEYWORDS = [
    "thanks"
];

function filter(node) {
    
}

function cleanNewsFeed() {
    var posts = document.querySelectorAll(USER_CONTENT_ELEMENT);
   //posts.forEach(filter);
   //console.log(posts);
   //console.log(posts.length);
   console.log(posts);
    for(var i = 0; i < posts.length; i++){
        filter(posts[i]);
        //console.log(posts[i]);
    }
}

setInterval(function () {
        // Don't do anything if the FB UI hasn't loaded yet
        var streamContainer = document.querySelector("[id*='main_stream']");
        if (!streamContainer) {
            return;
        }

        cleanNewsFeed();

}, SEARCH_INTERVAL);