var timer = 1;
var sonraki = null;
var onceki = 1;

function sayac() {

    console.log(`zaman: ${timer}`);
    document.querySelector('#timer').textContent = 'Süre: ' + timer;

    var myTimeout = setTimeout(sayac, 1000);
    timer++;

    document.querySelector('.stop').addEventListener('click', function () {
        clearTimeout(myTimeout);

        sonraki = timer;
        console.log(`sonraki:  ${sonraki - 1}`);

    })
    document.querySelector('.clear').addEventListener('click', function () {
        clearTimeout(myTimeout);
    
        timer=0;
        sonraki=0;
        document.querySelector('#timer').textContent = 'Süre: ' + timer;
    
    })

    document.querySelector('.fark').addEventListener('click', function () {
        var fark = sonraki - onceki;
        console.log(`fark:  ${fark}`);

        document.querySelector('#timer').textContent = 'Önceki: ' + onceki + ' Fark: ' + fark;

    })


}

document.querySelector('.play').addEventListener('click', function () {
    onceki = timer;
    sayac();
})





