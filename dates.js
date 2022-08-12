const dates = [
        '1980',
        '2001',
        '2018',
        '1999'
      ];   

const nearestDate = (dates, target) => {
  
  target = target || new Date();
  console.log("target.getTime(): " + target.getTime());

  var target = target.getTime();
  var nearest = Infinity
  var winner = -1

  dates.forEach(function (date, index) {
    var theDate = new Date(date);
    console.log(theDate.toISOString());
    var theDate = theDate.getTime();

    var distance = Math.abs(theDate - target);
    if (distance < nearest) {
      nearest = distance;
      winner = index;
    }
  })

  console.log(winner);
  return winner;
}
nearestDate(dates, new Date());
nearestDate(dates);

const counts = [4, 9, 15, 6, 2];
const goal = 5;

const output = counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);

console.log("Count Reduce: " + output);