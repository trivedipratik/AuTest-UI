$( document ).ready(function(){
    $( ".draggable" ).draggable();
    
    $('#select_mock').on('change',function() {
        $("#selected_mock").val($('#select_mock').val());
        var filenameMock = $('#selected_mock').val();
        filenameMock = filenameMock.replace("C:\\fakepath\\","");
        $('#image_mock').attr("src",filenameMock);
    });
    
    $('#select_file').on('change',function() {
        $("#selected_file").val($('#select_file').val());
        var filename = $('#selected_file').val();
        filename = filename.replace("C:\\fakepath\\","");
        $('#image_file').attr("src",filename);
    });
    
    $('#selected_transparency').on('keyup',function() {
        $("#image_file").css("opacity",$('#selected_transparency').val()/10);
    });
    
    $('#switchFullScreen').on('click',function() {
        $(".draggable").toggleClass("fullScreen");
    });
    
});
