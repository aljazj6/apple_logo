

drawAppleLogo();
function drawAppleLogo() {

    const canvas = document.querySelector('#appleCanvas');
    const ctx = canvas.getContext('2d');

    ctx.save();
    ctx.strokeStyle = "rgba(0,0,0,0)";
    ctx.miterLimit = 4;
    ctx.font = "15px ''";
    ctx.scale(3,3);
    // Translate the canvas origin to the center
    ctx.translate(5, -9.5);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(13.0729, 17.6825);
    ctx.translate(14.957852079429601, 20.761307505878538);
    ctx.rotate(0);
    ctx.arc(0, 0, 3.61, -2.1201632261881236, -3.1298728545844225, 1);
    ctx.rotate(0);
    ctx.translate(-14.957852079429601, -20.761307505878538);
    ctx.translate(14.861284229678683, 20.708473446100598);
    ctx.rotate(0);
    ctx.arc(0, 0, 3.5132, 3.138596362558764, 1.9730161572737615, 1);
    ctx.rotate(0);
    ctx.translate(-14.861284229678683, -20.708473446100598);
    ctx.translate(5.468277993969313, 21.45627085851871);
    ctx.rotate(0);
    ctx.arc(0, 0, 8.394, 0.30055279383589706, 0.6010425715195304, 0);
    ctx.rotate(0);
    ctx.translate(-5.468277993969313, -21.45627085851871);
    ctx.bezierCurveTo(11.709600000000002, 27.184300000000004, 10.996900000000002, 28.1654, 9.912500000000001, 28.1654);
    ctx.bezierCurveTo(8.828100000000001, 28.1654, 8.5492, 27.535400000000003, 7.299500000000002, 27.535400000000003);
    ctx.bezierCurveTo(6.080800000000002, 27.535400000000003, 5.647000000000002, 28.186100000000003, 4.655500000000002, 28.186100000000003);
    ctx.bezierCurveTo(3.6640000000000015, 28.186100000000003, 2.972100000000002, 27.277200000000004, 2.176800000000002, 26.161800000000003);
    ctx.translate(10.296518157265602, 20.702793983647638);
    ctx.rotate(0);
    ctx.arc(0, 0, 9.7842, 2.549690047558541, 3.123050881012237, 0);
    ctx.rotate(0);
    ctx.translate(-10.296518157265602, -20.702793983647638);
    ctx.bezierCurveTo(0.5140000000000018, 17.785800000000002, 2.5280000000000014, 16.143700000000003, 4.510900000000002, 16.143700000000003);
    ctx.bezierCurveTo(5.564400000000003, 16.143700000000003, 6.442300000000002, 16.835600000000003, 7.103300000000003, 16.835600000000003);
    ctx.bezierCurveTo(7.7333000000000025, 16.835600000000003, 8.714500000000003, 16.102300000000003, 9.912500000000003, 16.102300000000003);
    ctx.translate(10.00942508549494, 19.858949829010125);
    ctx.rotate(0);
    ctx.arc(0, 0, 3.7579, -1.5965915409329778, -0.6177058946552025, 0);
    ctx.rotate(0);
    ctx.translate(-10.00942508549494, -19.858949829010125);
    ctx.closePath();
    ctx.moveTo(9.3445, 14.790700000000001);
    ctx.translate(6.630955962100859, 12.483979166352803);
    ctx.rotate(0);
    ctx.arc(0, 0, 3.5615, 0.7045386491771267, 0.02435193187955076, 1);
    ctx.rotate(0);
    ctx.translate(-6.630955962100859, -12.483979166352803);
    ctx.translate(8.65615314638071, 12.557925476444371);
    ctx.rotate(0);
    ctx.arc(0, 0, 1.5353, 0.00832063502887844, -0.20146792573096706, 1);
    ctx.rotate(0);
    ctx.translate(-8.65615314638071, -12.557925476444371);
    ctx.translate(10.507344958746295, 15.80239468783573);
    ctx.rotate(0);
    ctx.arc(0, 0, 3.5686, -1.6681717268813716, -2.425234196097519, 1);
    ctx.rotate(0);
    ctx.translate(-10.507344958746295, -15.80239468783573);
    ctx.translate(10.39767858285475, 15.766933563997306);
    ctx.rotate(0);
    ctx.arc(0, 0, 3.4629, -2.4121619003344428, -3.098455431069148, 1);
    ctx.rotate(0);
    ctx.translate(-10.39767858285475, -15.766933563997306);
    ctx.translate(8.356987969958718, 15.611756960343293);
    ctx.rotate(0);
    ctx.arc(0, 0, 1.419, 3.137474925493345, 2.9321413634459024, 1);
    ctx.rotate(0);
    ctx.translate(-8.356987969958718, -15.611756960343293);
    ctx.translate(7.190030021419938, 14.737507166860627);
    ctx.rotate(0);
    ctx.arc(0, 0, 1.19, 1.7576207456188127, 1.5742669399974818, 1);
    ctx.rotate(0);
    ctx.translate(-7.190030021419938, -14.737507166860627);
    ctx.translate(6.940520561774816, 12.843747224355315);
    ctx.rotate(0);
    ctx.arc(0, 0, 3.0935, 1.4913919358903325, 0.6807408639429545, 1);
    ctx.rotate(0);
    ctx.translate(-6.940520561774816, -12.843747224355315);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
}


document.getElementById('showAlert').addEventListener('click', function () {
    Swal.fire({
        title: 'Credits',
        html: 
            `<p style="font-size: 18px; font-weight: 600; color: #444;">Dijak: <strong style="color: #0056b3;">Aljaz Jurjavcic</strong></p>
            <p style="font-size: 18px; font-weight: 600; color: #444;">Razred: <strong style="color: #0056b3;">4. Rb</strong></p>
            <p style="font-size: 18px; font-weight: 600; color: #444;">Mentor: <strong style="color: #0056b3;">Bostjan Vouk</strong></p>`,
        icon: 'info',
        confirmButtonText: 'Back',
        confirmButtonColor: '#008cba',
        background: '#f1f1f1',
        color: '#333',
        padding: '20px',
        width: '400px',
        customClass: {
            popup: 'swal-popup',
            title: 'swal-title',
            content: 'swal-content',
            confirmButton: 'swal-btn'
        },
        backdrop: 'rgba(0, 0, 0, 0.4)',
    });
});