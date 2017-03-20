// Mở cài đặt 2
$("#chienthuat2").click(function() {
    $("#chienthuat2_poup").show("slow", function() {
        $(".list-group").hide("slow", function() {});
    });
});
// Đóng cài đặt 1
$("#dongchienthuat2").click(function() {
    $("#chienthuat2_poup").hide("slow", function() {});
});
// Đóng cài đặt all
$(".close").click(function() {
    $("#chienthuat2_poup").hide("slow", function() {});
});
// Xử lý khi chọn
$("#minbet_choices2").change(function() {
    var check = $("#minbet_choices2 option:selected").val();
    if (check == 1) {
        $('#minbet_amount_custom2').css('display', 'block');
    } else {
        $('#minbet_amount_custom2').css('display', 'none');
    }
});
// Lấy Số tiền trong tài khoản
// $('#balancesx').html()

// Start Chien thuật 1
$('#save_setting_game2').click(function() {
    $('#mfpayoutmul').val('2x');
    var tilethang2 = $("#tilethang2").val() + '%';
    $('#mfpayoutper').val(tilethang1);
    var betMinAmount2;
    var minbet_choices2 = Number($("#minbet_choices2").val());
    if (minbet_choices2 === 0) {
        alert("Bạn chưa cài đặt mức độ !");return;
    } else if (minbet_choices2 === 1) {
        if ($("#minbet_amount_custom2").val() !== "") {
            betMinAmount2 = Number($("#minbet_amount_custom2").val());
        } else {alert("Bạn chưa nhập mức độ");return;}
    } else {
        betMinAmount2 = minbet_choices2;
    }
    // Kiểm tra số ván dừng
    if ($("#sovan2").val() === "") {
        alert("Số ván dừng không được để trống !");return;
    }
    // Đóng cửa sổ
    //$("#chienthuat1_poup").hide("slow", function() {});
    //$(".list-group").hide("slow", function() {});
    start2(betMinAmount2);
});

// Xử lý
var counter_stop = 0;
var stopeflg = 0;

function start2(betMinAmount2) {
    var counter = 0;
    var stopedelay;
    var labelStatus = $('.label.label-success').html();
    var lCheckWin = checkStatus(labelStatus);
    var btnValue = $('#btnplaymb').html();
    if (btnValue.indexOf('ĐỒNG Ý CƯỢC') != -1) {
        if (lCheckWin || labelStatus == "undefined") {
            // Set lại counter_stop khi thắng
            counter_stop = 0;
            stopeflg = 0;
            //alert("THắng nè");
            $('#mfInputAmount').val(betMinAmount2);
            // Set lại kèo khi WIN
            if ($("#checkedChangeRoll2").is(':checked')) {
                $('#mfpayoutoverunder').click();
            }

        } else {
            // Xử lý dừng khi thua liên tiếp
            var compare1 = Number($("#sovan1").val());
            var betAmount = Number($('#mfInputAmount').val());
            var sotienhientai = Number($("#balancesx").html());
            if ((betAmount / betMinAmount1) >= 1000000000024) {
                // alert('Cảnh báo nguy hiểm');
                return;
            }
            // Kiểm tra (Request timed out!) reset lại tiền đặt
            if ($("#text_result_out").html() == "Request timed out!") {
                $('#mfInputAmount').val(betMinAmount1);
            }
            // kiểm tra số tiền hiện tại nhỏ hơn số tiền đặt cược thì reset
            if (betAmount < sotienhientai) {
                $('#mfInputAmount').val(betAmount * 2);
            } else {
                $('#mfInputAmount').val(betMinAmount1);
            }
            counter_stop++;
        }

        setTimeout(function() {
            $('#btnplaymb').click();
        }, 500);
    }

    var min = 2000;
    var max = 4000;
    var delayMil;
    if (stopeflg !== 0) {
        delayMil = stopedelay;
    } else {
        delayMil = Math.floor(Math.random() * (max - min + 1) + min);
    }
    setTimeout(function() {
        start2(betMinAmount1);
    }, delayMil);
}

