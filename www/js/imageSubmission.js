function submitImage(){
    var form = document.forms["brainForm"];
    var name = form["name"];
    var brain = form["brain"].files[0];

    submit.name = name;
    submit.image = brain;
    submit.imageDetails[0] = brain.type;
}
