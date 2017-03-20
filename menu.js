// menu
$("#setting_game").click(function() {
    $(".list-group").show("slow", function() {});
    $("#chienthuat1_poup").hide("slow", function() {});
});
// Refesh
$("#refesh_game").click(function() {
    location.reload();
});
//Đóng menu
$("#closemenu").click(function() {
    $(".list-group").hide("slow", function() {});
});
// Tắt âm thanh //off_audio
$("#off_audio").click(function() {
    $('#audio_icon').removeClass('fa fa-bell fa-fw').addClass('fa fa-bell-slash fa-fw');
    $("#audio_win").remove();$("#audio_loss").remove();$("#audio_winner").remove();
});
