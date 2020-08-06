var i = 2; /* Set Global Variable i */
function increment(){
    i += 1; /* Function for automatic increment of field's "Name" attribute. */
}

/*
---------------------------------------------

Function to Remove Form Elements Dynamically
---------------------------------------------

*/
function removeElement(parentDiv, childDiv){
    if (childDiv == parentDiv){
        alert("The parent div cannot be removed.");
    }
    else if (document.getElementById(childDiv)){
        var child = document.getElementById(childDiv);
        var parent = document.getElementById(parentDiv);
        parent.removeChild(child);
    }
    else{
        alert("Child div has already been removed or does not exist.");
        return false;
    }
}

/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click to add a new image

------------------------------------------------------------------------------
*/
function imageFunction(){
    var div1 = document.createElement("DIV");
    div1.setAttribute("class", "form-group row pl-3");
    var label = document.createElement("LABEL");
    label.setAttribute("for", "inputImage" + i);
    label.innerHTML = "Imagem:";
    var div2 = document.createElement("DIV");
    div2.setAttribute("class", "col-sm-9");
    var file = document.createElement("INPUT");
    file.setAttribute("type", "file");
    file.setAttribute("class", "form-control");
    file.setAttribute("id", "inputImage" + i);
    var div3 = document.createElement("DIV");
    div3.setAttribute("class", "col-sm-1");
    var times = document.createElement("I");
    times.setAttribute("class", "fas fa-times");
    times.setAttribute("style", "color: red;");
    times.setAttribute("onclick", "removeElement('myImages','id_" + i + "')");
    div2.appendChild(file);
    div3.appendChild(times);
    div1.appendChild(label);
    div1.appendChild(div2);
    div1.appendChild(div3);
    return div1;
}

function subtitleFunction(){
    var div1 = document.createElement("DIV");
    div1.setAttribute("class", "form-group row pl-3");
    div1.setAttribute("id", "subtitleDiv" + i);
    var label = document.createElement("LABEL");
    label.setAttribute("for", "inputSubtitle" + i);
    label.innerHTML = "Legenda:";
    var div2 = document.createElement("DIV");
    div2.setAttribute("class", "col-sm-10");
    var subtitle = document.createElement("INPUT");
    subtitle.setAttribute("type", "text");
    subtitle.setAttribute("class", "form-control");
    subtitle.setAttribute("id", "inputSubtitle" + i);
    subtitle.setAttribute("placeholder", "Insira uma legenda para a imagem")
    div2.appendChild(subtitle);
    div1.appendChild(label);
    div1.appendChild(div2);
    return div1;
}

function addImage(){
    var div = document.createElement("DIV");
    div.setAttribute("id", "id_" + i)
    var image = imageFunction();
    var subtitle = subtitleFunction();
    div.appendChild(image);
    div.appendChild(subtitle);
    document.getElementById("myImages").appendChild(div);
    increment();
}