// alert("working or not");
var random_number1=Math.floor(Math.random()*6)+1;
var random_dice= "dice"+random_number1+".png";
var random_image_source="images/"+random_dice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",random_image_source);

var random_number2=Math.floor(Math.random()*6)+1;
var random_dice2= "dice"+random_number2+".png";
var random_image_source2="images/"+random_dice2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",random_image_source2);

if(random_number1 > random_number2)
{
    document.querySelector("h2").innerHTML= "🚩Player1 wins!";
}
else if(random_number1 < random_number2)
{
    document.querySelector("h2").innerHTML= "🚩Player2 wins!";
}
else{
    document.querySelector("h2").innerHTML= "🚩 it's A Draw !"; 
}