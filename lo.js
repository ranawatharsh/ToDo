let ctr=0;
function DeleteEle(index){
    const element =document.getElementById(index);
    // const parentNode=document.querySelector("body");
    // element.parentNode.removeChild(element);
    // console.log("Deleted");
    if (element) {
        element.parentNode.removeChild(element);
        console.log("Deleted");
    } else {
        console.log("Element not found");
    }
}

function AddTodo(){
    const ele= document.querySelector("input");
    const value=ele.value;
    if(value==""){
        alert("Task Cannot Be Empty")
    }
    else {
    const newDiv=document.createElement("div");
    newDiv.setAttribute("id",ctr);
    newDiv.classList.add("TodoItems");
    newDiv.innerHTML="<div>" +value + '</div><button onclick="DeleteEle('+ ctr +')">X</button>'
    document.querySelector("Body").appendChild(newDiv);
    ctr=ctr+1;
    ele.value="";
}
}