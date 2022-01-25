studentarray=[]
function submit(){
    var n1=document.getElementById("Name1").value
    studentarray.push(n1)
    var n2=document.getElementById("Name2").value
    studentarray.push(n2)
    var n3=document.getElementById("Name3").value
    studentarray.push(n3)
    var n4=document.getElementById("Name4").value
    studentarray.push(n4)
    console.log(studentarray)
    document.getElementById("result").innerHTML=studentarray;
    document.getElementById("submit").style.display="none";
document.getElementById("sorting").style.display="inline";

}
function sorting(){
    studentarray.sort()
    console.log(studentarray)
    document.getElementById("result").innerHTML=studentarray;
}