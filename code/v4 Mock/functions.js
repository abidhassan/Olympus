$(document).ready(function(){
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

    $(function(){
    $('#datetimepicker2').datetimepicker({
      language: 'en',
      pick12HourFormat: true
    });
  });
});
