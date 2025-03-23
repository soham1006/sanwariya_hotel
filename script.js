// Select all videos within the video container
const videos = document.querySelectorAll(".video-container video");

// Add an event listener for resizing the window
window.addEventListener("resize", () => {
    // Loop through each video and adjust their styles dynamically
    videos.forEach((video) => {
        if (window.innerWidth <= 768) {
            video.style.width = "100%"; // Full width for smaller screens
        } else {
            video.style.width = "45%"; // Side-by-side width for larger screens
        }
    });
});

// Initial adjustment on page load
window.dispatchEvent(new Event("resize"));
