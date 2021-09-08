const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];

function citiesSlice(arrays, cityBetween) {
  arrays.splice(arrays.indexOf(cityBetween), 1);

  let str = "[";
  arrays.forEach((element, index) => {
    str += `'${element}'`;
    if (index < arrays.length - 1) str += ",";
  });
  str += "]";
  return str;
}

console.log(citiesSlice(cities, "jakarta"));