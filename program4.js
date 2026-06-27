
var myobj;
var jbody;

function abc()
{
    myobj = document.querySelectorAll("h1,p,div,input,section");
    jbody = document.querySelector('body');
    console.log(myobj);
}


abc();

function msg()
{
    alert("welcome to javascript");
}

myobj[0].addEventListener("click",msg);

myobj[1].addEventListener("click",function(){
    alert("this is ano function");
    myobj[1].style.backgroundColor="green";

});


myobj[2].addEventListener("click",()=>{
    alert("this is arrow function");
    myobj[2].className="first";
});



myobj[3].addEventListener("click",()=>{
    myobj[3].classList.add("first","second","third");
});

myobj[3].addEventListener("dblclick",()=>{
    myobj[3].classList.remove("second","third");
});

myobj[4].addEventListener("click",()=>{
    jbody.classList.toggle("page");
})


function mywatch()
{
    var ned = document.getElementById('one');
var mydate =new Date();
myobj[5].innerHTML=mydate;

var h = mydate.getHours();
var m = mydate.getMinutes();
var s = mydate.getSeconds();
var time = `${h}:${m}:${s}`;
myobj[6].innerHTML = time;
ned.style.transform=`rotate(${s*6}deg)`;


}

mywatch();

setInterval("mywatch()",1000);
