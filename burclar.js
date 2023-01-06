var burclar = [];
var suankiBurc = null;
var burc = localStorage.getItem('burc');

console.log('burc ', burc);

function loadBurclar() {
    getAllItems();

    for (let index = 0; index < burclar.length; index++) {
        var geciciBurc = burclar[index];

        if(geciciBurc.code == burc) {
            suankiBurc = geciciBurc;
        }
        
    }
    console.log('suanki ', geciciBurc);
    fillBurcDetails();
}
   
$(".dropdown-item").click(function(e) {
    let dataSet = e.target.dataset;
    console.log('e.data ', dataSet);
    // localStorage.setItem("burc", dataSet.burc);
    const found = burclar.find(item => item.code == dataSet.burc);
    console.log('found ', found);

    if(found) suankiBurc = found;

    // for (let index = 0; index < burclar.length; index++) {
    //     let geciciBurc = burclar[index];
    //     console.log('geciciBurc ', geciciBurc.code);
    //     if(geciciBurc.code == burc) {
    //         suankiBurc = geciciBurc;
    //     }
        
    // }
    console.log('suanki ', suankiBurc);
    fillBurcDetails();
});
    
    

function getAllItems() {
    return fetch('./burclar.json')
        .then((response) => response.json())
        .then((data) => burclar = data);
};
    

function fillBurcDetails() {
    console.log('basiliyor')
    $('#horoscope').css("display", "block");
    if (suankiBurc) {
        $('#horoscope_range').html(suankiBurc.date);
        $('#horoscope_detail').html(suankiBurc.description);
        $('#horoscope_image').html(suankiBurc.image);
        $('#horoscope').css("background-image", `url(${suankiBurc.image})`);
        $('#horoscope').css("background-repeat", 'no-repeat');
        $('#horoscope').css("image-width", '500px');
        $('#horoscope').css("image-height", '500px');
        $('#horoscope').css("border-radius", '100%');
        $('#horoscope').css("text-align", 'center');
        $('#horoscope').css("color", 'white');
        $('#horoscope_range').css("fontsize", '40pt');

        


        
    }
};