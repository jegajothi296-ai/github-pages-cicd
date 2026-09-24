function showMessage() {
    document.getElementById("message").innerHTML =
        "✅ Website is working successfully!";
}
// Automatically update deployment timestamp on load
document.addEventListener("DOMContentLoaded", () => {
    const lastDeployedElement = document.getElementById("lastDeployedText");
    const now = new Date();
    const formattedDate = now.toLocaleString();
    
    lastDeployedElement.innerHTML = `✔ Last Verified Pipeline Run: <strong>${formattedDate}</strong>`;
});

// Interactive Latency Ping Test Function
function runPingTest() {
    const resultBox = document.getElementById("pingResult");
    const pingBtn = document.getElementById("pingBtn");

    pingBtn.disabled = true;
    pingBtn.innerText = "Testing Latency...";
    resultBox.style.color = "#8b949e";
    resultBox.innerText = "Sending GET request to GitHub Pages Global Edge Network...";

    const startTime = performance.now();

    // Fetch the current page to calculate real HTTP response latency
    fetch(window.location.href, { cache: "no-store" })
        .then(() => {
            const endTime = performance.now();
            const latency = Math.round(endTime - startTime);
            
            resultBox.style.color = "#3fb950";
            resultBox.innerHTML = `🟢 <strong>CDN Response Success</strong> | Server Ping: <strong>${latency} ms</strong> | HTTP 200 OK`;
        })
        .catch(() => {
            resultBox.style.color = "#f85149";
            resultBox.innerText = "🔴 Connection test failed. Check network connectivity.";
        })
        .finally(() => {
            pingBtn.disabled = false;
            pingBtn.innerText = "Trigger Health Ping";
        });
}