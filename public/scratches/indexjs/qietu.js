var btn1=document.getElementById("btn1");

var btn2=document.getElementById("btn2");

var img=document.getElementsByTagName("img")[0];

var arr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];

var index=0;

var info=document.getElementById("info");

info.innerHTML="第"+(index+1)+"张";
btn1.onclick=function () {

    index--;

    if(index<0){
        index=arr.length-1;
    }

    img.src=arr[index];

    info.innerHTML="第"+(index+1)+"张";
    console.log(index);
};

btn2.onclick=function () {

    index++;

    if(index>arr.length-1){
        index=0;
    }

    img.src=arr[index];

    console.log(index);

    info.innerHTML="第"+(index+1)+"张";
};

console.log(arr.length-1);