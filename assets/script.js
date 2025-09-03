let type = new Typed('.changing-text', {
    strings: ['','Student','','Java Developer','','Software Developer','', 'Back-end Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop:true
});

document.getElementById('download-button').addEventListener('click', function() {
    const fileURL = document.getElementById('cv-embed').src;
    const a = document.createElement('a');
    a.href = fileURL;
    a.download = '/assets/candidate cv.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});