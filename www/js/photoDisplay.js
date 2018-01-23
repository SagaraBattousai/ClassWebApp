var submit = {
  "name" : "None",
  "image" : "http://via.placeholder.com/350x150",
  "imageType" : "Uni Id",
  "imageDetails" : ["jpg", "01/10/14", "Now"]
}

displaySubmit();

function displaySubmit(){
    var formattedName = HTMLName.replace("%data%", submit.name);
    var formattedImage = HTMLImage.replace("%data%", submit.image);
    var formattedType = HTMLType.replace("%data%", submit.imageType);

    $("#textDisplay").append(formattedName);

    $("#imageDisplay").append(formattedImage);
    $("#imageType").append(formattedType);

    if(submit.imageDetails.length > 0){
        $("#imageDetails").append(HTMLDetailsStart);
        for(details in submit.imageDetails){
            var formattedDetails = HTMLDetail.replace("##", submit.imageDetails[details]);
            $(".detailsList:last").append(formattedDetails);

        }
    }

}
