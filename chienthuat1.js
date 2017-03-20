// Mở cài đặt 1
$("#chienthuat1").click(function() {
    $("#chienthuat1_poup").show("slow", function() {
        $(".list-group").hide("slow", function() {});
    });
});
// Đóng cài đặt 1
$("#dongchienthuat1").click(function() {
    $("#chienthuat1_poup").hide("slow", function() {});
});
// Đóng cài đặt all
$(".close").click(function() {
    $("#chienthuat1_poup").hide("slow", function() {});
});
// Xử lý khi chọn
$("#minbet_choices1").change(function() {
    var check = $("#minbet_choices1 option:selected").val();
    if (check == 1) {
        $('#minbet_amount_custom1').css('display', 'block');
    } else {
        $('#minbet_amount_custom1').css('display', 'none');
    }
});
// Xử lý khi chọn thời gian
$("#stop_choices1").change(function() {
    var check = $("#stop_choices1 option:selected").val();
    if (check == 1) {
        $('#stoptime1').css('display', 'block');
    } else {
        $('#stoptime1').css('display', 'none');
    }
});
// Lấy Số tiền trong tài khoản
// $('#balancesx').html()

// Start Chien thuật 1
$('#save_setting_game1').click(function() {
    $('#mfpayoutmul').val('2x');
    var tilethang1 = $("#tilethang1").val() + '%';
    $('#mfpayoutper').val(tilethang1);
    var betMinAmount1;
    var minbet_choices1 = Number($("#minbet_choices1").val());
    var stop_choices = Number($("#stop_choices1").val());
    // Check khi chọn thời gian
    if (stop_choices === 1) {
        if ($('#stoptime1').val() === "") {
            alert("Bạn chưa nhập thời gian tạm dừng !");
            return;
        }
    }
    if (minbet_choices1 === 0) {
        alert("Bạn chưa cài đặt mức độ !");return;
    } else if (minbet_choices1 === 1) {
        if ($("#minbet_amount_custom1").val() !== "") {
            betMinAmount1 = Number($("#minbet_amount_custom1").val());
        } else {alert("Bạn chưa nhập mức độ");return;}
    } else {
        betMinAmount1 = minbet_choices1;
    }
    // Kiểm tra số ván dừng
    if ($("#sovan1").val() === "") {
        alert("Số ván dừng không được để trống !");return;
    }
    // Đóng cửa sổ
    $("#chienthuat1_poup").hide("slow", function() {});
    $(".list-group").hide("slow", function() {});
    // Chi?n thu?t x2
    start1(betMinAmount1);
});

$('#btnAuto2').click(function() {
});

// Xử lý
var counter_stop = 0;
var stopeflg = 0;

function start1(betMinAmount1) {
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
            $('#mfInputAmount').val(betMinAmount1);
            // Set lại kèo khi WIN
            if ($("#checkedChangeRoll1").is(':checked')) {
                $('#mfpayoutoverunder').click();
            }

        } else {
            // Xử lý dừng khi thua liên tiếp
            var compare1 = Number($("#sovan1").val());
            //alert (counter_stop);
            if (compare1 === counter_stop) {
                if (Number($("#stop_choices1").val()) === 0) {
                    return;
                } else {
                    stopedelay = Number($('#stoptime1').val());
                    stopeflg = 1;
                }
            }
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
        start1(betMinAmount1);
    }, delayMil);
}

function checkStatus(labelStatus) {
    var checkWin = false;
    if (labelStatus !== undefined && labelStatus.indexOf('thắng') !== -1) {
        checkWin = true;
    }
    return checkWin;
}
