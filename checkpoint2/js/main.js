
function changerbold() {

if(document.getElementById("textarea").style.fontWeight != 'bold')
document.getElementById("textarea").style.fontWeight = 'bold';
else
document.getElementById("textarea").style.fontWeight = 'normal';}

function changeritalic(){
    if(document.getElementById("textarea").style.fontStyle != 'italic')
    document.getElementById("textarea").style.fontStyle = 'italic';
else
    document.getElementById("textarea").style.fontStyle = 'normal';}


function changerligne(){
    if(document.getElementById("textarea").style.textDecoration != 'underline')
    document.getElementById("textarea").style.textDecoration = 'underline';
else
    document.getElementById("textarea").style.textDecoration = 'none';}
function changersize(){
    document.getElementById("textarea").style.fontSize=document.getElementById("select").value;
}
function changerfont(){
    document.getElementById("textarea").style.fontFamily=document.getElementById("select1").value;


}
 var getback=document.getElementById("background1").addEventListener("mouseover",function(){
     document.getElementById("btncourses1").style.display="block";
     document.getElementById("background11").style.display="block";


 })
 var getback1=document.getElementById("background1").addEventListener("mouseout",function(){
     document.getElementById("btncourses1").style.display="none";
     document.getElementById("background11").style.display="none";


 })
function fect1(x){
    var regex= /[0-9]/;
    for (var i=0;i<x.length;i++) {
    if(regex.test(x[i])) {return alert("please insert a correct name")}  
    
    }
}

$(".slide").click(
    function(){
    $(".lkol").slideToggle("slow");}
)
$(".course1").slick;


