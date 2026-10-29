// ====================================================================
// Ad Data File (ads.js)
//
// This file contains the content for the pop-up ads.
// Add as many ad objects as you like to the ADS_DATA array.
// ====================================================================

const ADS_DATA = [
    {
        title: "Ketchup Krazy!",
        text: "Did you know our mascot is a ketchup bottle? Get 10% off all red items in the store today! (Store coming soon.)",
        image: "ketchup_mascot_default.svg",
        url: null // No link for this ad
    },
    {
        title: "Mustard Mayhem!",
        text: "Did you know our enemy is a mustard bottle? Get 10% off all yellow items in the store today! (Store coming soon.)",
        image: "mustard_mascot_default.svg",
        url: null // No link for this ad
    },
    {
        title: "Want More Fun?!",
        text: "Go to Bryant Reitzel's website for games and fun every day! Sign up for so much more than just fun!",
        image: "Ads/Bryant Reitzel Logo.png",
        url: "https://sites.google.com/view/bryant-reitzel/bryant"
    },
	{
        title: "Block Game ULTIMATE!",
        text: "Claim your free version of BGU! More free version coming with interval updates and crazy gameplay!",
        image: "Ads/Block Game Ultimate Logo.png",
        url: "https://sites.google.com/view/video-game-guides/block-game-ultimate"
    },
    {
        title: "Learn About FILLWORLD!",
        text: "Learn all about the game Fillworld and more at Bryant Reitzel's epic website of awesomeness!",
        image: "Ads/Fillworld Logo.png",
        url: "https://bryantreitzel.blogspot.com"
    },
	/*{
        title: "Upgrade to PRO!",
        text: "Tired of ads? Upgrade to KFC Pro and get an ad-free experience, plus 500 bonus 💎 Gemstones!",
        image: "https://placehold.co/400x200/4A148C/FFFFFF?text=Ads!",
        url: "#" // Use '#' or a real link
    },
    {
        title: "Master the Subjunctive",
        text: "Our new 'BOSS: Present Subjunctive' lesson is now available. Conquer it today!",
        image: "https://placehold.co/400x200/4A148C/FFFFFF?text=New+Lesson!",
        url: "#" // Could link directly to the lesson
    }*/
];

// ====================================================================
// BANNER_ADS_DATA - For 5:1 Ratio Banner Ads
// 
// Add your banner ad objects here.
// image: Path to your 1500x300px image in the "Ads/" folder.
// url: The website to open when the banner is clicked.
// ====================================================================

const BANNER_ADS_DATA = [
    {
        image: "Ads/Bryant Reitzel Banner.png", // Example: 1500x300px
        url: "https://sites.google.com/view/bryant-reitzel"
    },
	{
        image: "Ads/Bryant Reitzel Odd Banner.png",
        url: "https://sites.google.com/view/bryant-reitzel"
    },
    {
        image: "Ads/Block Game Ultimate Banner.png",
        url: "https://sites.google.com/view/video-game-guides/block-game-ultimate"
    },
	{
        image: "Ads/Zakindom Banner.png",
        url: "https://bryantreitzel.blogspot.com"
    },
	{
        image: "Ads/FUNN Odyssey AI Banner.png",
        url: "https://sites.google.com/view/bryant-reitzel/ai"
    },
];

// --- NEW: VIDEO AD DATA ---
const VIDEO_ADS_DATA = [
    {
        type: 'video', // Identify type
        title: "Block Game Ultimate Trailer!",
        videoSrc: "Ads/Videos/BGU Trailer.mp4", // LOCAL PATH (relative to KFC.html)
        skipDelay: 7,
        url: "https://sites.google.com/view/video-game-guides/block-game-ultimate" // Optional link for when video ends or is skipped
    },
	{
        type: 'video',
        title: "Watch Mr. Friendly By Bryant Reitzel!",
        videoSrc: "Ads/Videos/Adventures Of Mr. Friendly.mp4",
        skipDelay: 8,
        url: "https://bryantreitzel.blogspot.com"
    },
	{
        type: 'video',
        title: "Listen To Herjiberb's Mighty Tusks!",
        videoSrc: "Ads/Videos/The Dark Awakening Album Stream.mp4",
        skipDelay: 15,
        url: null
    },
    /*{
        type: 'video',
        title: "Learn About FILLWORLD!",
        videoSrc: "Ads/Videos/fillworld_intro.webm", // Use webm or mp4
        skipDelay: null,
        url: "https://bryantreitzel.blogspot.com"
    },*/
    // Add more video ad objects here
];