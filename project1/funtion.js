var popupoverlay=document.querySelector(".bottom-overlay")
var popupbox=document.querySelector(".popopbox")
var addbutton=document.getElementById("add-popup-button")
addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelpopup=document.getElementById("Cancel")
 cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
 })
 var container=document.querySelector(".container")
 var bookTaittle=document.getElementById("Book-id-input")
 var authorName=document.getElementById("Book-id-Autho")
 var authorName=document.getElementById("Book-id-descripation")
 var addBook=document.getElementById("add-book")
 addBook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","containerMesager")
    div.innerHTML=`<h2>${bookTaittle.value}</h2>
            <h5>${authorName.value}</h5>
            <p>${authorName.value}</p>
            <button onclick="deletebook(event)"> Delete </button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

 })
 function deletebook(event)
 {
    event.target.parentElement.remove()
 }