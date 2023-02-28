$(document).ready(function () {
    $("span").click(function () {
      $(this).prevAll().css('color', 'orange' ), $(this).css('color', 'orange');
      $(this).nextAll().css('color', 'black');
    });


    $('span').mouseover(function () {
      $(this).prevAll().addClass('checked'), $(this).addClass('checked');
      $(this).mouseleave(function () {
       $('span').removeClass('checked');
      });
    });


    var slider = document.getElementById("myRange");


    slider.oninput = function() {

      var i = this.value;
      var j = 5;
      var c = i;
      console.log("i == " + i);
      console.log("j == " + j);


      var x = document.getElementsByTagName('span');

      while(i--) {
        x[i].style.color = 'orange';
        console.log(x[i]);

      }

      while(j-- > c) {
        x[j].style.color = 'black'
      }
    }


    $(".clear").click(function() {
      $("span").css('color', 'black');
      $(".slider").val(0);
    })

})