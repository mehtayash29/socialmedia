$(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
              // Dark-Theme
                $("body").css("background-color","hsl(230, 17%, 14%)");
                $(".slider").css("background-image","linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))");
                $("#tital").css("background-color","hsl(232, 19%, 15%)");
                $(".col-sm").css("background-color","hsl(228, 28%, 20%)");
                $(".overview").css("color","hsl(0, 0%, 100%)");
                $("h1").css("color","hsl(0, 0%, 100%)");
                $("h2").css("color","hsl(0, 0%, 100%)");
                $(".dark").css("color","hsl(0, 0%, 100%)");
                $(".attribution").css("color","hsl(0, 0%, 100%)");
                $(".col-sm:hover").css("background","red");

                $(document).ready(function(){
                    $(".col-sm").hover(function(){
                    $(this).css("background","hsl(228, 28%, 25%)");
                    }, function(){
                    $(this).css("background-color","hsl(228, 28%, 20%)");
                  });
                });
                  }
            else if($(this).prop("checked") == false){
              // Light-Theme
              $("body").css("background-color","");
              $(".slider").css("background-image","");
              $("#tital").css("background-color","");
              $(".col-sm").css("background-color","");
              $(".overview").css("color","");
              $("h1").css("color","");
              $("h2").css("color","");
              $(".dark").css("color","");
              $(".attribution").css("color","");
              $(document).ready(function(){
                  $(".col-sm").hover(function(){
                  $(this).css("background","");
                  }, function(){
                  $(this).css("background-color","");
                });
              });


            }
        });
    });
