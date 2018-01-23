

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