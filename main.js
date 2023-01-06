$(document).ready(function() {
    $(".dropdown-item").click(function(e) {
        let dataSet = e.target.dataset;
        console.log('e ', dataSet);
        localStorage.setItem("burc", dataSet.burc);
        document.location.href = 'burclar.html';
    });
});