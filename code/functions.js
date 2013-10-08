$(document).ready(function(){
    //alert("hi");
    $("#add-influences-link").click(function(){
        $("#collections").hide();
        $("#milestones").hide();
        $("#expand-influence").show();
    });

    $("#add-collections").click(function(){
        $("#influences").hide();
        $("#milestones").hide();
    });

    $("#add-milestones").click(function(){
        $("#influences").hide();
        $("#milestones").hide();
    });

    $(".remove-section-link").click(function(){
        this.parentNode.remove();
    });

    
/*    $(".add-section-link").click(function(){
        $(this.parentNode).append('<div>'+       
        '<div class="row">'+
            '<div class = "col-md-8">'+
                '<form>'+
                    '<input type="text" class="form-control" placeholder="SECTION TITLE">'+
                '</form>'+
            '</div>'+            
        '</div>'+
        '<a href ="#" class = "remove-section-link pull-right">REMOVE SECTION</a>'+
        '<div class="row">'+
            '<div class="col-md-8">'+
                '<form>'+
                    '<textarea class="form-control" rows="4"></textarea>'+
                '</form>'+
            '</div>'+
            '<div class = "col-md-4">'+
                '<div class="std-quote hidden-xs">Sections are for you to structure your documents appropriately.<br>If you already have a document with the content of the section, just upload it here</div>'+
            '</div>'+
        '</div>'+
        '<p>OR</p>'+
        '<div class="row">'+
            '<div class = "col-md-3">'+
                '<h5>Upload a file</h5>'+
            '</div>'+
            '<div class="col-md-9">'+
                '<form action="#">'+
                '<input type="file">'+
                '<input type="submit" value="Upload">'+
                '</form>'+                    
            '</div>'+
        '</div>'+
        '</div>'+
        '<a href ="#" class = "add-section-link pull-right">NEW SECTION</a>');
    });*/

});


