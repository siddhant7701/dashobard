/* ===============================
   HEADER + THEME CONTROLLER
=============================== */

/* ---------- THEME ---------- */

function initTheme() {
    const savedTheme = localStorage.getItem("daynight-theme");

    if (savedTheme === "carbon") {
        document.documentElement.classList.add("carbon");
        document.body.classList.add("carbon");
        updateThemeButtons("carbon");
    } else {
        updateThemeButtons("snow");
    }
}

function setTheme(theme) {
    if (theme === "carbon") {
        document.documentElement.classList.add("carbon");
        document.body.classList.add("carbon");
        localStorage.setItem("daynight-theme", "carbon");
    } else {
        document.documentElement.classList.remove("carbon");
        document.body.classList.remove("carbon");
        localStorage.setItem("daynight-theme", "snow");
    }
    updateThemeButtons(theme);
}

function updateThemeButtons(theme) {
    document.querySelectorAll(".theme-btn-snow")
        .forEach(btn => btn.classList.toggle("active", theme === "snow"));

    document.querySelectorAll(".theme-btn-carbon")
        .forEach(btn => btn.classList.toggle("active", theme === "carbon"));
}

/* ---------- USER DISPLAY ---------- */

document.addEventListener("DOMContentLoaded", () => {
    initTheme();

    const role = localStorage.getItem("lp_role");

    const roleEl = document.getElementById("userRole");
    const avatarEl = document.getElementById("userAvatar");
    const avatarBox = document.getElementById("userAvatarBox");

    if (!role || !roleEl || !avatarEl) return;

    const ROLE_UI = {
        admin:      { label: "Admin",      avatar: "A", color: "#ef4444" },
        assessee:   { label: "Assessee",   avatar: "S", color: "#22c55e" },
        assessor:   { label: "Assessor",   avatar: "R", color: "#3b82f6" },
        telecaller: { label: "Telecaller", avatar: "T", color: "#f59e0b" },
        jury:       { label: "Jury",       avatar: "J", color: "#8b5cf6" }
    };

    const ui = ROLE_UI[role];
    if (!ui) return;

    roleEl.textContent = ui.label;
    avatarEl.textContent = ui.avatar;

    if (avatarBox) {
        avatarBox.style.background = ui.color;
    }
});
