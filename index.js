var buttonClicked = document.querySelectorAll("button");
var displayBox = document.querySelector(".textBox");
for(let i=0; i<=buttonClicked.length;i++){
    buttonClicked[i].addEventListener("click",()=>{
        var btnValue = buttonClicked[i].textContent;
        if(btnValue==="C"){
            clearScreen();
        }else if(btnValue==="="){
            showResult()
        }else if(btnValue==="OFF"){
            exitCal();
        }else{
            appendValue(btnValue);
        }
    })
}
function clearScreen(){
    displayBox.value="";
}
function showResult(){
    displayBox.value =eval(displayBox.value);
}
function appendValue(btnValue){
    displayBox.value+=btnValue;
}
function exitCal(){
    var off = document.querySelector(".exit");
    off.addEventListener("click",()=>{
        window.close();
    })
}
