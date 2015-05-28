var countUpBy = function(total,increment){
  var numbers = [];
  for(var index = increment; index <= total; index = increment + index){

    numbers.push(index);
  }
    return numbers;
};
