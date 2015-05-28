var countUpBy = function(total,increment){
  var numbers = [];
  for(var index = increment; index <= total; index = increment + index){
    numbers.push(index);
  }
    return numbers;
};

$(document).ready(function() {
  $("form#number").submit(function(event) {
    var total = parseInt($("input#total").val());
    var increment = parseInt($("input#increment").val());
    var result = countUpBy(total, increment);

    $(".allNumbers").text(result);

    $("#result").show();

    event.preventDefault();
  });
});
