document.addEventListener('DOMContentLoaded', (event) => {
    var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    var rootElement = document.documentElement;
    var footerHeight = document.querySelector("footer").clientHeight;

    function handleScroll() {
        // Do something on scroll, change when button appears
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.1) {
            // Show button
            let bottom = 20
            if (scrollTotal - rootElement.scrollTop < footerHeight) {
                bottom = footerHeight - (scrollTotal - rootElement.scrollTop) + 20
            }
            scrollToTopBtn.style.bottom = bottom.toString() + "px"
            scrollToTopBtn.classList.add("showBtn");

        } else {
            // Hide button
            scrollToTopBtn.classList.remove("showBtn");
        }
    }

    function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);
})

