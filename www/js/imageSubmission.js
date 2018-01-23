var submit = {
  "name" : "None",
  "image" : "None",
  "imageType" : "Brain Scan",
  "imageDetails" : ["png", "now", "now"]
}

function submitImage(){
    var form = document.forms["brainForm"];
    var name = form["name"];
    var brain = form["brain"].files[0];

    submit.name = name;
    submit.image = brain;
    submit.imageDetails[0] = brain.type;
    window.location.replace("http://jamesafc.pythonanywhere.com/photoView.html");
    return false;
}