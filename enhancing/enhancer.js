module.exports = {
  success,
  fail,
  repair,
  get,
  sum
};


function sum(...item){
  return item.reduce((a,b)=>a+b,0);
}

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
