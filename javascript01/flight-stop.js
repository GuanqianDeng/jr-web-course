
// flights [{origin:'MEL', destination: 'CAN'}]
// [1,2,3] [{},{}]

var flight = [{origin:'MEL', destination: 'CAN'}, {origin:'MEL', destination: 'CAN'}, {origin:'MEL', destination: 'CAN'}]

function getStops(flights) {
  if (flights.length === 1) {
    console.log('direct')
  } else if (flights.length === 2) {
    console.log('1 stop')
  } else if (flights.length > 2) {
    var totalStopStr = flight.length - 1 + ' stops'
    console.log(totalStopStr)
  }
}
// getStops(flight)

var income = 200000

function calculateTax(income) {
  // var tax = 0;
  if (income < 0) return 'income should be positive'
  else if (income >= 0 && income <= 18200) {
    return 0
  } else if(income > 18200 && income <= 37000){
    return (income - 18200) * 0.19
  } else if(income > 37000 && income <= 90000) {
    return (income - 37000) * 0.325 + (37000-18200) * 0.19
  } else if(income > 90000 && income < 180000) {
    return (income - 90000) * 0.37 + (90000-37000)* 0.325 + (37000-18200) * 0.19
  } else if (income > 180000){
    return (income - 180000) * 0.45 + (180000-90000)*0.37 + (90000-37000)* 0.325 + (37000-18200) * 0.19
  }
}
console.log(calculateTax(income))
 