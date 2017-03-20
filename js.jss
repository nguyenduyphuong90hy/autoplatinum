          // menu
          $("#setting_game").click(function() {
              $(".list-group").show("slow", function() {
                  // Animation complete.
              });
          });
          // Refesh
          $("#refesh_game").click(function() {
              location.reload();
          });
          //Đóng menu
          $("#closemenu").click(function() {
              $(".list-group").hide("slow", function() {
                  // Animation complete.
              });
          });
          // Mở cài đặt 1
          $("#chienthuat1").click(function() {
              $("#chienthuat1_poup").show("slow", function() {
                  $(".list-group").hide("slow", function() {
                      // Animation complete.
                  });
              });
          });
          // Đóng cài đặt 1
          $("#dongchienthuat1").click(function() {
              $("#chienthuat1_poup").hide("slow", function() {
                  // Animation complete.
              });
          });
          // Đóng cài đặt all
          $(".close").click(function() {
              $("#chienthuat1_poup").hide("slow", function() {
                  // Animation complete.
              });
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
                      //stoptimer = Number($('#stoptime1').val());
                      alert("Bạn chưa nhập thời gian tạm dừng !");
                      return;
                  }
              }
              if (minbet_choices1 === 0) {
                  alert("Bạn chưa cài đặt mức độ !");
                  return;
              } else if (minbet_choices1 === 1) {
                  if ($("#minbet_amount_custom1").val() !== "") {
                      betMinAmount1 = Number($("#minbet_amount_custom1").val());
                  } else {
                      alert("Bạn chưa nhập mức độ");
                      return;
                  }
              } else {
                  betMinAmount1 = minbet_choices1;
              }
              // Kiểm tra số ván dừng
              if ($("#sovan1").val() === "") {
                  alert("Số ván dừng không được để trống !");
                  return;
              }
              // Đóng cửa sổ
              $("#chienthuat1_poup").hide("slow", function() {
                  // Animation complete.
              });
              $(".list-group").hide("slow", function() {
                  // Animation complete.
              });

              // Chi?n thu?t x2
              start1(betMinAmount1);
          });

          $('#btnAuto2').click(function() {
              var betMinAmount2 = 0.0001;
              $('#mfpayoutmul').val('4x');
              $('#mfpayoutper').val('24.01%');

              // Chi?n thu?t x4 (30 l?n)
              start2(betMinAmount2, false);
          });

          $('#btnAuto3').click(function() {
              var betMinAmount3 = 0.0001;
              $('#mfpayoutmul').val('4x');
              $('#mfpayoutper').val('24.01%');

              // Chi?n thu?t x4 m? r?ng (tang m?c an to?n - d?nh 4 l?n thua 0$ tru?c khi bet th?t)
              start3(betMinAmount3, false, 3);
          });
