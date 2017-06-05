const SEARCH_INTERVAL = 1000;

const USER_CONTENT_ELEMENT = ".userContentWrapper, .fbUserContent";

const OUTBOUND_LINK = "https://l.facebook.com/l.php?u=";
const WHITELIST_OUTBOUND_LINKS = [
    "instagram"
];

const HIGHLIGHT_KEYWORDS = [
    "thanks"
];

/*
 * @method
 * @param {Object} post a reference to the DOM element that renders a fb post
 * @param {String} color the color to highlight the post with
 */
function highlight (post, color) {

}

/*
 * @method
 * @param {Object} post a reference to the DOM element that renders a fb post
 * @returns {Boolean} returns true if keyword is found, false otherwise
 */
function containsKeyword (post) {

}

/*
 * @method
 * @param {Object} post a reference to the DOM element that renders a fb post
 * @returns {Boolean} returns true if link is found, false otherwise
 */
function containsLink (post) {

}

/*
 * @method
 * Extracts references to fb posts and searches post for links or keywords for
 * highlighting
 */
function highlightNewsFeed() {
    var posts = document.querySelectorAll(USER_CONTENT_ELEMENT);
    for (var i = 0; i < posts.length; i++) {
        // TODO
        // Assume that containsLink, containsKeyword, and highlight are
        // fully functional. 
        // In pseudo code, use these building blocks to pseduo code out
        // how you would implement the highlight logic.
        // For now, if there is something you want to do, make a function
        // for it.


        /* Katy's pesudo code
			in a for loop that runs for each index of posts
				check if posts contains a link (ie containsLink = true)
				or if posts contains a specific keyword (ie containsKeyword = true)
					if yes, then highlight the post using the highlight function
        */
    }
}

/*
 * Entry Point
 * Continuously loop and highlight the news feed
 */
setInterval(function () {
        // Don't do anything if the FB UI hasn't loaded yet
        var streamContainer = document.querySelector("[id*='main_stream']");
        if (!streamContainer) {
            return;
        }

        highlightNewsFeed();

}, SEARCH_INTERVAL);