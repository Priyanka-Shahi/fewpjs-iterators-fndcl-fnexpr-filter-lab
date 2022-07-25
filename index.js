// Code your solution here
function findMatching(drivers, name) {

  const newDrivers = drivers.filter(function (driver) {
    return name.toLowerCase() === driver.toLowerCase()});
  

return newDrivers;}




function fuzzyMatch(drivers, name) {
  let num = name.length;

  const newDrivers = drivers.filter(
    function(driver){
      return name.toLowerCase() === driver.toLowerCase().substring(0,num)
    })

  return newDrivers;
}



function matchName(drivers, name){
  const newDrivers = drivers.filter(
    function(driver){
      return driver.name.toLowerCase() === name.toLowerCase();

    })
  return newDrivers;
}

