  $(document).ready(function() {
        var myTime = new Date();
        document.getElementById('year').innerHTML = myTime.getFullYear();
        //function that tells where is the room - which building
        var $label;
        var whichBuilding = function(num) {
          if (num.substring(0, 1) === "1") {
            if ((num >= "1130" && num < "1140") || (num >= "1230" &&
                num < "1240") || num === "1241" || num === "1243") {
              num = "East Wing";
            } else if ((num >= "1140" && num < "1160") || (num >= "1240" && num < "1260" && num !== "1241" && num !== "1243")) {

              if(num === "1154"){
                num = "Garden Wing/Entry from Squaw Peak Lawn";
              }else{
                num = "Garden Wing";
              }
            } else {
              num = "Main";
            }
          } else if (num.substring(0, 1) === "2") {
            num = "Paradise Wing";
          } else if (num.substring(0, 1) === "3") {
            num = "Valley Wing";
          } else if (num.substring(0, 1) === "4") {
            num = "Terrace Court";
          } else if (num.substring(0, 1) === "5") {
            if (parseInt(num) >= 5100 && parseInt(num) <= 5103) {
              num = "Cottage - A";
            } else if (parseInt(num) >= 5104 && parseInt(num) <= 5107) {
              num = "Cottage - B";
            } else if ((parseInt(num) >= 5108 && parseInt(num) <= 5111) || (parseInt(num) >= 5210 && parseInt(num) <= 5211)) {
              num = "Cottage - C";
            } else if ((parseInt(num) >= 5112 && parseInt(num) <= 5115) || (parseInt(num) >= 5214 && parseInt(num) <= 5215)) {
              num = "Cottage - D";
            } else if (parseInt(num) >= 5116 && parseInt(num) <= 5119) {
              num = "Cottage - E";
            } else if (parseInt(num) >= 5120 && parseInt(num) <= 5123) {
              num = "Cottage - G";
            } else if ((parseInt(num) >= 5124 && parseInt(num) <= 5127) || (parseInt(num) >= 5226 && parseInt(num) <= 5227)) {
              num = "Cottage - H";
            } else if ((parseInt(num) >= 5128 && parseInt(num) <= 5131) || (parseInt(num) >= 5230 && parseInt(num) <= 5231)) {
              num = "Cottage - I";
            } else if (parseInt(num) >= 5132 && parseInt(num) <= 5135) {
              num = "Cottage - J";
            } else if (parseInt(num) >= 5136 && parseInt(num) <= 5140) {
              num = "Cottage - K";
            } else if (parseInt(num) >= 5141 && parseInt(num) <= 5145) {
              num = "Cottage - L";
            }
          } else if (num.substring(0, 1) === "6") {
            num = "Ocatilla";
          } else if (parseInt(num) >= 7100 && parseInt(num) <= 7113 || parseInt(num) >= 7200 && parseInt(num) <= 7213) {
            num = "Fountain Court Villas";
          } else if (parseInt(num) >= 7114 && parseInt(num) <= 7133 || parseInt(num) >= 7214 && parseInt(num) <= 7233) {
            num = "Catalina Pool Villas";
          } else if (parseInt(num) >= 7134 && parseInt(num) <= 7143 || parseInt(num) >= 7234 && parseInt(num) <= 7243) {
              num = "Saguaro Pool Villas";
            } else if (parseInt(num) >= 7144 && parseInt(num) <= 7161 || parseInt(num) >= 7244 && parseInt(num) <= 7261) {
                num = "Bougainvillea Pool Villas";
              } else if (parseInt(num) >= 7162 && parseInt(num) <= 7173 || parseInt(num) >= 7262 && parseInt(num) <= 7273 || parseInt(num) >= 7362 && parseInt(num) <= 7373) {
                  num = "Golf View Villas";
                  }
              return num;
            }
            //elevator or not
            var elevatorAccess = function(num){
              if(num.substring(0,2) === "72" && parseInt(num) < 7262){
                $("#patio").prop("checked",true);
                $("label[for='patio']").text("Stairs/no elevator");
              }
              else if((num.substring(0,2) === "72" || num.substring(0,2) === "73") && parseInt(num) >= 7262 ){
                $("#patio").prop("checked",true);
                $("label[for='patio']").text("elevator");
              }
            }
            //function that will tell the room type
            var roomStyle = function(style, num) {
              var suiteWithBalcony = [2302,2410,2420,3220,3301,4229,4235,4241,4329,6204,6214,6304,6314];
              var suiteWithPatio = [4100,4135,6104,6114];
              var classicWithBalcony = [1308,1310,1312,1314,1316,1408,1410,1412,1414,1416];
              if (style === "K1RRO" || style === "Q2RRO" || style === "K1RRD" || style === "K1RRC" || style ==="Q2RRD" || style ==="Q2RRC") {
                style = "Resort";
              } else if (style === "K1SRO" || style === "Q2SRO") {
                if (num.substring(1, 2) === "1") {
                  $("#patio").prop("checked", true);
                  style = "Premier";
                } else {
                  $("#balcony").prop("checked", true);
                  if(num.substring(0,1) === "2" || num.substring(0,1) === "3" ){
                    $("label[for='balcony']").text("Shared balcony");
                  }
                  style = "Premier";
                }
              } else if (style === "K1SSO" || style === "Q2SSO") {
                style = "Premier Poolside";
                $("#patio").prop("checked", true);
              } else if (style === "K1CRO" || style === "Q1CRO" || style === "Q2CRO") {
                style = "Cottage without patio";
                if(num.substring(0,2)=== "52"){
                  $("#balcony").prop("checked", true);
                  $("label[for='balcony']").text("Stairs/no elevator");
                }
              } else if (style === "K1CGO" || style === "Q2CGO" || style === "Q1CGO") {
                $("#fire").prop("checked", true);
                $("#patio").prop("checked", true);
                style = "Cottage with patio";
              } else if (style === "K1QRO" || style === "Q2QRO") {
                $("#patio").prop("checked", true);
                style = "Ocatilla Club DeLux";
                $("label[for='patio']").text("Shared patio");
              } else if (style === "K1QR" || style === "Q2QR") {
                $("#balcony").prop("checked", true);
                $("label[for='balcony']").text("French balcony");
                style = "Ocatilla Club";
              } else if (style === "K1J" || style === "Q2J") {
                style = "Biltmore Suite";
                for(var i = 0; i< suiteWithBalcony.length; i++){
                if (parseInt(num) === suiteWithBalcony[i]) {
                   $("#balcony").prop("checked", true);
                   $("label[for='balcony']").text("French balcony");
                 }
                }
               for(var j = 0; j< suiteWithPatio.length; j++){
               if (parseInt(num) === suiteWithPatio[j]) {
                  $("#patio").prop("checked", true);
                  $("label[for='patio']").text("Shared patio");
                }
               }
              } else if (style === "K1RRO1") {
                for(var i = 0; i< suiteWithBalcony.length; i++){
                if (parseInt(num) === suiteWithBalcony[i]) {
                   $("#balcony").prop("checked", true);
                 }
               }
               for(var j = 0; j< suiteWithPatio.length; j++){
               if (parseInt(num) === suiteWithPatio[j]) {
                  $("#patio").prop("checked", true);
                }
               }
                style = "Grand Suite";
              } else if (style === "K1ZRP1") {
                style = "Signature/Presidential Suite";
                if (parseInt(num) === 1234 || parseInt(num) === 4300) {
                   $("#balcony").prop("checked", true);
                   if(parseInt(num) === 4300){
                     $("#fire").prop("checked", true);
                     $("label[for='fire']").text("Wet bar");
                   }
                 }
                else if(parseInt(num) === 1134){
                  $("#patio").prop("checked", true);
                }
              } else if (style === "K1VRP1" || style === "Q2VRP1") {
                $("#fire").prop("checked", true);
                $("label[for='fire']").text("Gas Fireplace");
                $("#access").prop("checked", true);
                $("label[for='access']").text("kitchen");
                if (num.substring(1, 2) === "1") {
                  $("#patio").prop("checked", true);
                  style = "1 Bedroom Villa Suite";
                } else {
                  style = "1 Bedroom Villa Suite";
                  $("#balcony").prop("checked", true);
                }
              } else if (style === "K1ERV" || style === "K1ERD" || style === "Q2ERE") {
                if(num.substring(0,2) === "61"){
                  style = "Ocatilla Club Delux";
                  $("#patio").prop("checked", true);
                  $("label[for='patio']").text("Shared patio");
                }else{
                  style ="Ocatilla CLub";
                  $("label[for='balcony']").text("French balcony");
                }
              }
              else{
                style = "Classic";
                if(parseInt(num) === 1130 || parseInt(num) === 1136 || parseInt(num) === 1138 ){
                  $("#patio").prop("checked", true);
                }
                for(var g=0; g< classicWithBalcony.length;g++){
                  if(parseInt(num)=== classicWithBalcony[g]){
                    $("#balcony").prop("checked", true);
                    $("label[for='balcony']").text("Shared balcony");
                  }
                }
              }
              return style;
            }
            var bedInRoom = function(bedStyle, num) {
              var sofa;
              var noRollaway
              var roomWithSofa = ['1134','1140','1160', '1234', '1240', '1260', '2215', '2302', '2315', '2410', '2420', '3220', '3301', '3320', '4100', '4101', '4102', '4103', '4104','4105', '4106', '4107', '4108', '4111', '4112', '4113', '4114', '4117', '4118', '4119', '4120', '4121', '4135', '4229', '4235', '4241', '4300', '4329', '5102', '5106', '5110', '5114', '5118', '5122', '5126', '5130', '5134', '5210', '5211', '5214', '5215', '5226', '5227', '5230', '5231', '6104', '6114', '6204', '6304','7104','7106','7114','7118','7120','7132','7136','7138','7140','7142','7144','7146','7150','7156','7160','7162','7166','7170','7206','7212','7214','7218','7220','7222','7230','7232','7234','7242','7244','7246','7248','7256','7260','7262','7264','7266','7268','7270','7362','7368','7372'];
              var smallCottage = ['5100','5104','5108','5112','5116','5120','5124','5128','5132','5136','5137','5139','5140','5141','5142','5144','5145'];
              for (var z = 0; z < roomWithSofa.length; z++) {
                if (roomWithSofa[z] === num) {
                  sofa = roomWithSofa[z];
                }
              }
              for (var y = 0; y < smallCottage.length; y++) {
                if (smallCottage[y] === num) {
                  noRollaway = smallCottage[y];
                }
              }
              if (bedStyle.substring(0, 2) === "K1") {
                bedStyle = "King";
                 //end for loop
                if (sofa === num) {
                  $("#sofa").prop("checked", true);
                }
                else if ((num.substring(0,2) === "52" && sofa != num) || (num.substring(0, 2) === "72" && sofa != num)) {
                  $("#rollaway").prop("checked", false);
                    if(parseInt(num) >=7262 && sofa != num){
                    $("#rollaway").prop("checked", true);
                  }
                } else if(noRollaway === num){
                  $("#rollaway").prop("checked", true);
                  $("label[for='rollaway']").text("No space for rollaway");
                }
                 else {
                  $("#rollaway").prop("checked", true);
                }
              }
              else if(bedStyle.substring(0,2) === "Q2" && sofa === num){
                bedStyle = "2 Queens";
                $("#sofa").prop("checked", true);
              }
              else if(bedStyle.substring(0,2) === "Q1"){
              bedStyle = "1 Queen";
              $("#rollaway").prop("checked", true);
              $("label[for='rollaway']").text("No space for rollaway");
             }
              else {
                bedStyle = "2 Queens";
                $("#rollaway").prop("checked", false);
              }
              return bedStyle;
            }
            var connectRoom = function(num) {
              if (num === "N") {
                num = "none";
              } else {
                num = num;
              }
              return num
            }
            var accessibleRoom = function(type,num){
              var wheelchairRoom = ["K1ERD","Q2ERE","K1RRD","Q2RRD","K1RRC","Q2RRC"];
             
            for(var i = 0; i< wheelchairRoom.length; i++){
              
              if(type === wheelchairRoom[i] || num === "6104"){
                $("#room_bath").css({"color":"#071088","font-weight": "600"});
              $("label[for='access']").text("Wheelchair accessible");
              if(type === "K1ERD"){
                $("#fire").prop("checked", true);
                $("label[for='fire']").text("Visual Strobe");
              }
              if(num.substring(1,2) === "1"){
                $("#patio").prop("checked", true);
                $("#access").prop("checked", true);
              }else{
                $("#balcony").prop("checked", true);
                $("#access").prop("checked", true);
              }
              
            }
          }

            if(type === "K1ERV" || num === "2105"){
              $("#room_bath").css({"color":"#071088","font-weight": "600"});
              $("#access").prop("checked", true);
              $("label[for='access']").text("Hearing accessible");
              $("#fire").prop("checked", true);
              $("label[for='fire']").text("Visual Strobe");
            }
          }
            $('#our-button').click(function() {
              var roomNumber = $('#room').val();
              var rNum;
              var wing;
              var roomType;
              var bedType;
              var bath;
              var view;
              var size;
              var connect;
              //fetch text file
              $.get('rooms2.txt', function(data) {
                //split text file on ;
                var lines = data.split('\n');
                //iterate over lines of file and create a option element
                for (var i = 0; i < lines.length - 1; i++) {
                  var single = lines[i];
                  var item = single.split(',');

                  if (item[0] === roomNumber) {
                    rNum = item[0].trim();
                    wing = item[0].trim();
                    roomType = item[1].trim();
                    bedType = item[1].trim();
                    bath = item[2].trim();
                    view = item[3].trim();
                    size = item[4].trim();
                    connect = item[5].trim();
                  }
                }
                $('#wing').val(whichBuilding(wing));
                $('#room_style').val(roomType + "-" + roomStyle(roomType, rNum));
                $('#room_bed').val(bedInRoom(roomType, rNum));
                $('#room_bath').val(bath);
                $('#room_view').val(view);
                $('#room_size').val(size + " sq ft");
                $('#room_connect').val(connectRoom(connect));
                accessibleRoom(roomType, rNum);
                elevatorAccess(rNum);
              });
            });
            $("#room").keydown(function(e){
            if(e.which === 13){
                $("#our-button").click();
                $('#room').blur();
            }
            });
            $('#room').focus(function() {
              if (this.value != "") {
                $('input[type = text]').val("");
                $('input[type = checkbox]').prop('checked', false);
                $("label[for='balcony']").text("balcony");
                $("label[for='patio']").text("patio");
                $("label[for='access']").text("Accessible");
                $("label[for='fire']").text("Fire pit");
                $("#room_bath").css({"color":"#000","font-weight": "400"});
                $("label[for='rollaway']").text("Allow Rollaway");
              }
            });

          });