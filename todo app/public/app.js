
var list = document.getElementById("list")

function addtodo(){
    var todo = document.getElementById("additem")
    
var li = document.createElement("li")
var litext = todo.value

var lilestt= document.createTextNode(litext)
list.appendChild(li)
li.appendChild(lilestt)

var dltbutton = document.createElement('button')
var dlttext = document.createTextNode('DELETE')
dltbutton.appendChild(dlttext)
li.appendChild(dltbutton)
dltbutton.setAttribute('onclick','delitem(this)')
console.log(li)
todo.value=''


var editbutton = document.createElement('button')
var edittext = document.createTextNode('EDIT')
editbutton.appendChild(edittext)
li.appendChild(editbutton)
editbutton.setAttribute('onclick','edititem(this)')
   
}


function delitem(e){

e.parentNode.remove()

}



function edititem(e){

var val = e.parentNode.firstChild.nodeValue;
var editvalue = prompt('Modefie your todo',val)
e.parentNode.firstChild.nodeValue=editvalue

}

function delall(){
    list.innerHTML = ''
}