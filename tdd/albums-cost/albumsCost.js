/**
 * Calculates the total price of an album order based on the number of pages, binding type, and quantity.
 * 
 * - If the number of pages is not even, is greater than 100, or the quantity is greater than 250, the function returns `undefined`.
 * - If the quantity is 10 or more, a 25% discount is applied.
 * - If the quantity is 5 or more, a 10% discount is applied.
 * 
 * @param {number} numPags - Total number of pages (must be an even number).
 * @param {string} tipoEncuad - Type of binding ('R' for softcover, any other value for hardcover).
 * @param {number} cantidad - Number of albums ordered (maximum 250).
 * @returns {number|undefined} The total price of the order or `undefined` if the parameters do not meet the requirements.
 */
function calcularPrecio(numPags, tipoEncuad, cantidad) {
    const basePrice = tipoEncuad === "R" ? 20 : 30;
    const pricePerAditionalPage = tipoEncuad === "R" ? 0.70 : 1;
    let pairOfAditionalPages = (numPags - 20) / 2;
    let totalPrice;
    
    if (numPags % 2 !== 0 || numPags > 100 || cantidad > 250) return undefined;

    if (numPags === 20) totalPrice = basePrice * cantidad;
    else if (numPags > 20) totalPrice = (basePrice + (pairOfAditionalPages * pricePerAditionalPage)) * cantidad;
        
    if (cantidad >= 10) totalPrice *= 0.75;
    else if (cantidad >= 5) totalPrice *= 0.9;
    
    return totalPrice; 

}


module.exports = {
    calcularPrecio
}