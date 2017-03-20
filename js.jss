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
