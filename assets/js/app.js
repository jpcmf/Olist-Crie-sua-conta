// app.js

$(document).ready(function() {

  //
  // adicionar e remover password bullet
  //
  var steps = $(".bullet-pass-hor");
  var index = 0;

  function addBullet() {
    steps.eq(index++).addClass("active");
  }

  function removeBullet() {
    // console.log(index);
    index <= 0 ? 0 : index-1;
    steps.eq(index).removeClass("active");
  }

  //
  // validando email
  //
  $("#email").on("input", function() {
    var email = $("#email").val();
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!filter.test(email)) {
      $(".invalid-email:empty").append("E-mail inválido");
    } else {
      $(".invalid-email").remove();
    }
  });

  //
  // validando password
  //
  $("input[type=password]").keyup(function() {
    var ucase = new RegExp("[A-Z]+");
    var lcase = new RegExp("[a-z]+");
    var num   = new RegExp("[0-9]+");

    index = 0;

    if($("#password1").val().replace(/^\s+/g, '').length >= 6) {
      $(".6char-text").css({"color": "#1FE6A8" });
      addBullet();
    } else {
      $(".6char").css("color","#F79682");
    }

    if(ucase.test($("#password1").val())) {
      $(".ucase-text").css({"color": "#1FE6A8" });
      addBullet();
    } else {
      $(".ucase").css("color","#F79682");
    }

    if(num.test($("#password1").val())) {
      $(".num-text").css({"color": "#1FE6A8" });
      addBullet();
    } else {
      $(".num").css("color","#F79682");
    }

    if($("#password1").val() != $("#password2").val()) {
      $(".invalid-pass").html("Senha não combina").css("color","#F79682");
      $("#submit").attr("disabled", true);
    } else {
      $(".invalid-pass").html("Senha combina").css("color","#696D8C");
      $("#submit").attr("disabled", false);
    }

    removeBullet();

  });

});
