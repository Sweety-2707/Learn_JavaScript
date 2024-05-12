const bgstartbtn = document.querySelector('.bgstart');
const bgstopbtn = document.querySelector('.bgstop');
const textstartbtn = document.querySelector('.textstart');
const textstopbtn = document.querySelector('.textstop');

const generateRandomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let intervalId1;
const startbgColorChanging = function () {
    const generatingColor = function (){
        document.body.style.backgroundColor = generateRandomColor();
    }
    if(!intervalId1){
        intervalId1 = setInterval(generatingColor,1000);
    }
}

const stopbgColorChanging = function(){
    clearInterval(intervalId1);
    intervalId1=null;
}


let intervalId2;
const starttextColorChanging = function () {
    const generatingColor = function (){
        document.body.style.color = generateRandomColor();
    }
    
    if(!intervalId2){
        intervalId2 = setInterval(generatingColor,1000);    
    }
    
}

const stoptextColorChanging = function(){
    clearInterval(intervalId2);
    intervalId2=null;
}



bgstartbtn.addEventListener('click',startbgColorChanging);
bgstopbtn.addEventListener('click',stopbgColorChanging);
textstartbtn.addEventListener('click',starttextColorChanging);
textstopbtn.addEventListener('click',stoptextColorChanging);