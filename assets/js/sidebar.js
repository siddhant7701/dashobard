function filterSidebarByRole() {
    const role = localStorage.getItem("lp_role");

    document.querySelectorAll(".sidebar-group").forEach(group => {
        const allowedRole = group.getAttribute("data-role");
        group.style.display = (allowedRole === role) ? "block" : "none";
    });
}

function setActiveNav() {
    const path = window.location.pathname;

    document.querySelectorAll(".nav-link").forEach(link => {
        if (path === link.getAttribute("href")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
            filterSidebarByRole();
            setActiveNav();
        });
}
