document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = '#000';
        } else {
            header.style.background = 'rgba(22, 22, 23, 0.8)';
        }
    });
});

const canvas = document.getElementById('appleCanvas');
const ctx = canvas.getContext('2d');

// Funkcija za risanje še manjšega Apple logotipa
function drawAppleLogo() {
    const centreX = canvas.width / 2;
    const centreY = canvas.height / 2;
    const scale = 0.5; // Še manjša skala za manjši logotip

    // Apple "leaf"
    ctx.beginPath();
    ctx.ellipse(
        centreX - 10 * scale, 
        centreY - 80 * scale, // Zmanjšana pozicija lista
        12 * scale, // Manjši list
        18 * scale, 
        -Math.PI / 6, 
        0, 
        2 * Math.PI
    );
    ctx.fillStyle = '#000';
    ctx.fill();

    // Apple "body"
    ctx.beginPath();
    ctx.moveTo(centreX - 30 * scale, centreY - 15 * scale); // Spodnji levi del
    ctx.bezierCurveTo(
        centreX - 50 * scale, 
        centreY - 45 * scale, 
        centreX - 45 * scale, 
        centreY - 120 * scale, 
        centreX, 
        centreY - 80 * scale
    ); // Zgornji srednji del

    ctx.bezierCurveTo(
        centreX + 45 * scale, 
        centreY - 120 * scale, 
        centreX + 50 * scale, 
        centreY - 45 * scale, 
        centreX + 30 * scale, 
        centreY - 15 * scale
    ); // Spodnji desni del

    ctx.bezierCurveTo(
        centreX + 50 * scale, 
        centreY + 30 * scale, 
        centreX - 50 * scale, 
        centreY + 30 * scale, 
        centreX - 30 * scale, 
        centreY - 15 * scale
    ); // Zaprti spodnji del
    ctx.fillStyle = '#000';
    ctx.fill();
}

drawAppleLogo();



// Prikaz Sweet Alert Credits ob kliku na gumb
document.getElementById('showCredits').addEventListener('click', function () {
    Swal.fire({
        title: 'Credits',
        html: `
            <p style="font-size: 18px; font-weight: 600; color: #444;">Dijak: <strong style="color: #0056b3;">Aljaz Jurjavcic</strong></p>
            <p style="font-size: 18px; font-weight: 600; color: #444;">Razred: <strong style="color: #0056b3;">4. Rb</strong></p>
            <p style="font-size: 18px; font-weight: 600; color: #444;">Mentor: <strong style="color: #0056b3;">Bostjan Vouk</strong></p>
        `,
        icon: 'info',
        confirmButtonText: 'Back',
        confirmButtonColor: '#008cba', // Apple blue with slight darker shade
        background: '#f1f1f1', // Svetlo sivo ozadje za eleganten videz
        color: '#333', // Temno siva barva besedila za boljši kontrast
        padding: '20px',
        width: '400px', // Določena širina za lepši izgled
        customClass: {
            popup: 'swal-popup', // Dodamo CSS za popup
            title: 'swal-title', // Dodamo CSS za naslov
            content: 'swal-content', // Dodamo CSS za vsebino
            confirmButton: 'swal-btn' // Dodamo CSS za gumb
        },
        backdrop: `rgba(0, 0, 0, 0.4)`, // Mehkoba ozadja
    });
});






