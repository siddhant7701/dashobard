/* ===============================
   AUTH & ROLE MANAGEMENT
   =============================== */

const ROLE_ROUTES = {
    admin: "/dashboard/admin/admin-dashboard.html",
    telecaller: "/dashboard/telecaller/telecaller-dashboard.html",
    assessor: "/dashboard/assessor/assessor-dashboard.html",
    assessee: "/dashboard/assessee/assessee-dashboard.html",
    jury: "/dashboard/jury/jury-dashboard.html"
};

function login() {
    const roleSelect = document.getElementById("role");
    if (!roleSelect) return;

    const role = roleSelect.value;

    if (!ROLE_ROUTES[role]) {
        alert("Please select a valid role");
        return;
    }

    localStorage.setItem("lp_logged_in", "true");
    localStorage.setItem("lp_role", role);

    window.location.href = ROLE_ROUTES[role];
}

function logout() {
    localStorage.removeItem("lp_logged_in");
    localStorage.removeItem("lp_role");
    window.location.href = "/auth/login.html";
}

function protectPage(requiredRole) {
    const loggedIn = localStorage.getItem("lp_logged_in");
    const role = localStorage.getItem("lp_role");

    if (!loggedIn || role !== requiredRole) {
        window.location.href = "/auth/login.html";
    }
}
