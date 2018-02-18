
//findmiddlew 2-3
function str(){
    var test = document.getElementById('test').value;
    var srte = test.length;
    if(srte%2==0){
        var test2=test.substring((srte/2)-1,(srte/2)+1);
        console.log('horof zoj ast');
        console.log(test2);
        if(srte<=3){
            alert('horof<3')
        }
    }
    else{
        var test3=test.substring((srte/2)-1,(srte/2)+2);
        console.log(test3);
    }
}
//avval 2-2 2-1
function valuenumber(){

    var num = document.getElementById('num').value;
    var c = 0;


    for (i = 1; i <= num; i++) {

        if (num % i == 0) {

            c = c + 1;
        }
    }

    if (c == 2) {
        document.getElementById('result').innerHTML = num + ' اول هست';
    }else{
        document.getElementById('result').innerHTML = num + 'اول نیست';
    }
}
//arry 2-4
var chunkRgx = /(_+)|([0-9]+)|([^0-9_]+)/g;
function naturalCompare(a, b) {
    var ax = [], bx = [];

    a.replace(chunkRgx, function(_, $1, $2, $3) {
        ax.push([$1 || "0", $2 || Infinity, $3 || ""])
    });
    b.replace(chunkRgx, function(_, $1, $2, $3) {
        bx.push([$1 || "0", $2 || Infinity, $3 || ""])
    });

    while(ax.length && bx.length) {
        var an = ax.shift();
        var bn = bx.shift();
        var nn = an[0].localeCompare(bn[0]) ||
            (an[1] - bn[1]) ||
            an[2].localeCompare(bn[2]);
        if(nn) return nn;
    }

    return ax.length - bx.length;
}

/////////////////////////

test = [
    "img12.png",
    "img10.png",
    "img2.png",
    "img1.png",
    "img101.png",
    "img101a.png",
    "abc10.jpg",
    "abc10",
    "abc2.jpg",
    "20.jpg",
    "20",

    ""
];

test.sort(naturalCompare);

console.log(JSON.stringify(test,0,3));
