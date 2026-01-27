/* ===============================
   TABLE UTILITIES
   =============================== */

function filterTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const table = document.getElementById(tableId);

    if (!input || !table) return;

    const filter = input.value.toLowerCase();
    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
    });
}

function confirmAction(message) {
    return confirm(message || "Are you sure?");
}

function fakeActionSuccess(msg) {
    alert(msg || "Action completed successfully");
}
