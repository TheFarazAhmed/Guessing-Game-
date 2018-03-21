//var levelx;
var valueToCheck=0;
var chances = 1;
var chancelimit=0;
var c=-1;

function func1(){
//  levelx = document.getElementById("l1").id;
//   levelx = Number(levelx.slice(1,2)) ;
// alert("hello"); 
    chancelimit = 3;
    valueToCheck = Math.random()*5 + 1;
    valueToCheck = Math.floor(valueToCheck);  

    // document.getElementById("aa").value = valueToCheck;
}

function func2(){
    // levelx = document.getElementById("l2").id;
    // levelx = Number(levelx.slice(1,2)) ;
    chancelimit = 2;
    valueToCheck = Math.random()*10 + 1;
    valueToCheck = Math.floor(valueToCheck);

    // document.getElementById("aa").value = valueToCheck;
   }

function func3(){
    // levelx = document.getElementById("l3").id;
    // levelx = Number(levelx.slice(1,2)) ;
    chancelimit = 1;
    valueToCheck = Math.random()*15 + 1;
    valueToCheck = Math.floor(valueToCheck);

    // document.getElementById("aa").value = valueToCheck;
}


function func4(){
c = document.getElementById("aa").value;

while(c>0 && chances<=chancelimit)
{
    if(valueToCheck == c)
        {
            document.getElementById("top").src = "youwon.gif";
            break;
        }
    else 
    {
        chances++;
    if(chances<=chancelimit)
        {
        //c = document.getElementById("aa").value
        c = +prompt("Chance No." + chances);
        
        }
    else if (chances>=chancelimit)
        {
            document.getElementById("top").src = "tenor.gif";
            break;
        }
    }
}

}

function func5(){
    var valueToCheck=0;
var chances = 1;
var chancelimit=0;
var c=-1;
}