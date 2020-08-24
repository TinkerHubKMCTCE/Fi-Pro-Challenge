function displayClear(){
    document.getElementById("screen").value=""
}
function buttonClick(val)
{
    document.getElementById("screen").value+=val;
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}