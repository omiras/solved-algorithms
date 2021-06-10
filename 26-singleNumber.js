/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
    //Si el array es de un sólo elemento, lo devolvemos automaticamente(no se puede comparar!!)
  if(nums.length == 1){  
    return nums[0];
  }
 
  //Inicia el numero buscado único y reinicializa a 0 la cantidad de veces que aparece:
  for(let i=0; i < nums.length; i++){ 
    let veces=0;
    let unico=parseInt(nums[i]);

    //Cuenta las apariciones del numero tratado:
    for(let j=0; j < nums.length;j++){
      if (unico == nums[j]){
        veces=veces+1;
      }
    }
    //Si sólo está una vez es el numero buscado:
    if(veces==1){
      //return console.log(unico)
      return unico;
    }
  }
    
    
};