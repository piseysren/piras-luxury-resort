document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. ដំណើរការបិទអេក្រង់ LOADING
    // ==========================================
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        loadingScreen.classList.add("opacity-0");
        setTimeout(() => loadingScreen.style.display = "none", 500);
    }

    // ==========================================
    // 2. ដំណើរការបើក/បិទ MOBILE MENU
    // ==========================================
    const menuToggleBtn = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggleBtn && mobileMenu) {
        const toggleIcon = menuToggleBtn.querySelector("i");

        // អនុគមន៍គ្រប់គ្រងការលាក់/បង្ហាញ Menu និងការប្តូរ Icon (Bars / Xmark)
        function toggleMenu(forceHide = false) {
            if (forceHide) {
                mobileMenu.classList.add("hidden");
            } else {
                mobileMenu.classList.toggle("hidden");
            }

            if (toggleIcon) {
                const isHidden = mobileMenu.classList.contains("hidden");
                toggleIcon.classList.toggle("fa-xmark", !isHidden);
                toggleIcon.classList.toggle("fa-bars", isHidden);
            }
        }

        // ចុចបើក/បិទ Menu
        menuToggleBtn.addEventListener("click", () => toggleMenu());

        // ចុចលើ Links ណាមួយឱ្យលាក់ Menu វិញស្វ័យប្រវត្តិ
        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => toggleMenu(true));
        });
    }

    // ==========================================
    // 3. ដំណើរការ DARK MODE (Optimized)
    // ==========================================
    const toggleDesktop = document.getElementById("theme-toggle");
    const toggleMobile = document.getElementById("theme-toggle-mobile");
    const iconDesktop = document.getElementById("theme-toggle-icon");
    const iconMobile = document.getElementById("theme-toggle-icon-mobile");

    // អនុគមន៍បច្ចុប្បន្នភាពរូបតំណាង (Icons) ព្រះអាទិត្យ/ព្រះចន្ទ
    function updateIcons(isDark) {
        const baseClass = `fa-solid text-white ${isDark ? "fa-sun" : "fa-moon"}`;
        if (iconDesktop) iconDesktop.className = `${baseClass} text-base`;
        if (iconMobile) iconMobile.className = `${baseClass} text-sm`;
    }

    // ធ្វើបច្ចុប្បន្នភាពរាល់ពេល Refresh ទំព័រដំបូង
    updateIcons(document.documentElement.classList.contains("dark"));

    // អនុគមន៍ផ្លាស់ប្តូរ Theme ពេល User ចុចប៊ូតុង
    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("color-theme", isDark ? "dark" : "light");
        updateIcons(isDark);
    }

    // ភ្ជាប់ Event ទៅកាន់ប៊ូតុងទាំងពីរ
    if (toggleDesktop) toggleDesktop.addEventListener("click", toggleTheme);
    if (toggleMobile) toggleMobile.addEventListener("click", toggleTheme);
});