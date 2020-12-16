function repeatStringNumTimes(str, num) {
    return str;
  }

console.assert('repeatStringNumTimes("*", 3)'=='***', `repeatStringNumTimes("*", 3) should return "***"`)
console.assert('repeatStringNumTimes("abc", 1)'=='abc', `repeatStringNumTimes("abc", 1) should return "abc"`)
console.assert('repeatStringNumTimes("abc", -2)'=='', `repeatStringNumTimes("abc", -2) should return ""`)