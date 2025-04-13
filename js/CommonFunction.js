function getvalueByid(id){
    const value =document.getElementById(id).value;
    const values=parseFloat(value)
    return values;
}
function getTextvalueByid(id){
    const value =document.getElementById(id).innerText;
    const values=parseFloat(value)
    return values;
}