/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }
    let array1=s.split("");
    let array2=t.split("");
    let anagrama=true;

    array1.sort();
    array2.sort();

    for(i=0; i<array1.length && anagrama; i++){
        if(array1[i]!=array2[i]){
        anagrama=false;
        }
    }
    return anagrama;
};