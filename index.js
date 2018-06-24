// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = Object.assign({}, driver);
  newDriver[key] = value;
  return newDriver;
}

function deleteFromDriverByKey(driver, key){
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
