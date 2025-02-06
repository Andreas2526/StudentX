document.addEventListener("DOMContentLoaded", function () {
    generateNewCode();
    setInterval(generateNewCode, 60000);
});

// Generer en unik kontrollkode og QR-kode
function generateNewCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 12; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("control-code").textContent = result;
    updateTimestamp();
    generateQRCode(result);
}

// Oppdaterer tid for siste oppdatering
function updateTimestamp() {
    const now = new Date();
    document.getElementById("last-updated").textContent = now.toLocaleTimeString("no-NO");
}

// Genererer en QR-kode
function generateQRCode(code) {
    document.getElementById("qr-code").src = "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=" + encodeURIComponent(code);
}
