/* ===============================
   DASHBOARD CHARTS
   =============================== */

function updateCharts(range) {
    const bars = document.querySelectorAll(".bar");
    if (!bars.length) return;

    bars.forEach(bar => {
        let base = Math.random() * 120 + 40;
        let multiplier = 1;

        switch (range) {
            case "7d":
                multiplier = 0.7;
                break;
            case "30d":
                multiplier = 1;
                break;
            case "90d":
                multiplier = 1.2;
                break;
            case "12m":
                multiplier = 1.4;
                break;
        }

        bar.style.height = base * multiplier + "px";
    });
}

function setDateRange(range, btn) {
    document.querySelectorAll(".date-btn").forEach(b =>
        b.classList.remove("active")
    );
    btn.classList.add("active");
    updateCharts(range);
}
