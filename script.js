
function randomize()
{
    var a= Math.random()*6;
    return Math.ceil(a);
}
function picksource(b)
{
    var str="images/"
    switch (b)
    {
    case 1 :
        str+= "dice1.png";
        break;
    case 2 :
        str+= "dice2.png";
        break;
    case 3 :
        str+= "dice3.png";
        break;
    case 4 :
        str+= "dice4.png";
        break;
    case 5 :
        str+= "dice5.png";
        break;
    case 6 :
        str+= "dice6.png";
        break;
    }
    return str;
}
var dice1=randomize();
var dice2=randomize();
document.querySelector(".dice .img1").setAttribute("src",picksource(dice1));
document.querySelector(".dice .img2").setAttribute("src",picksource(dice2));

if(dice1>dice2)
{
    document.querySelector("#announcer").textContent="Player 1 Wins !";
}
else 
if (dice2>dice1)
{
    document.querySelector("#announcer").textContent="Player 2 Wins !";

}
else{
    document.querySelector("#announcer").textContent="Draw !";

}
