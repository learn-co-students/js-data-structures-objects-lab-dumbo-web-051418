// Write your solution in this file!

driver = {}
// function updateDriverWithKeyAndValue(driver, key, value) {
//   driver[key]=value
//
// }
function updateDriverWithKeyAndValue(driver, key,value) {
  const newDriver={...driver};
  newDriver[key]=value
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key]=value;
  return driver;
}


function deleteFromDriverByKey(driver, key) {
  const newDriver=Object.assign({},driver)
  console.log(newDriver)
  delete newDriver[key]
  console.log(newDriver)
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
