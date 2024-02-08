// Función dada:
function f(x, y, z) {
    let a = x + y;
    let b = a * z;
    let c = Math.sin(b);
    return c;
}
// Función modificada con nombres descriptivos
function calcDistanceInclination(distanceA, distanceB, angleRadians) {
    let distanceTotal = distanceA + distanceB;
    let angleInclination = distanceTotal * angleRadians;
    let distanceInclination = Math.sin(angleInclination);
    return distanceInclination;
}