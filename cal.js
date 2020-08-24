function BC(val)
{
    document.getElementById("screen").value+=val
}
function rs()
{
    var a=document.getElementById("screen").value
    var result=eval(a)
    document.getElementById("screen").value=result
}
function clr()
{
    document.getElementById("screen").value=""
}