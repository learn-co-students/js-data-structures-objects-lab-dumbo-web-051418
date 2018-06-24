// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value })
};

function deleteFromDriverByKey(obj, key) {
  newObj = Object.assign({}, obj)
  return delete newObj[key]
};

function destructivelyDeleteFromDriverByKey(obj, key) {
  return delete obj[key]
};
