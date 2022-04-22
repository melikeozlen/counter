/*var cicek=[
    {
        name:'papatya',
        image:'img/img1.jpg',
        about:'Açıklama1'
    },

    {
        name:'gül',
        image:'img/img2.jpg',
        about:'Açıklama2'
    },

    {
        name:'lale',
        image:'img/img3.jpg',
        about:'Açıklama3'
    }
];

var index=0;

document.querySelector('.card-title').textContent=cicek[index].name;
document.querySelector('.card-text').textContent=cicek[index].about;
document.querySelector('.card-img-top').setAttribute('src',cicek[index].image);

document.querySelector('.btn').addEventListener('click', function(){
    
    console.log(index);
    document.querySelector('.card-title').textContent=cicek[index].name;
    document.querySelector('.card-text').textContent=cicek[index].about;
    document.querySelector('.card-img-top').setAttribute('src',cicek[index].image);
    
    if(index>2){
        index==0;
        console.log('index');
    }
    index++;
});
*/
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





