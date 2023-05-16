function number_cardinality(number) {
    if (number % 10 === 0) {
      return 'zero';
    } else if (number % 10 === 5) {
      return 'five';
    } else if (number % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  
  console.log(number_cardinality(100));
  console.log(number_cardinality(88));
  console.log(number_cardinality(155));
  console.log(number_cardinality(99));