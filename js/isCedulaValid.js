/**
 * Valida una cédula dominicana.
 * @param {string} cedula - La cédula a validar (debe tener 11 dígitos).
 * @returns {boolean} - `true` si la cédula es válida, `false` en caso contrario.
 */

const isCedulaValid = (cedula) => {
  const alternatingValues = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  if (cedula.length !== 11) return false;
  let cedulaArray = cedula.split("").map(Number);
  const verfierNumber = cedulaArray.pop();
  const numbersList = [];
  for (let i = 0; i < alternatingValues.length; i++) {
    numbersList.push(cedulaArray[i] * alternatingValues[i]);
  }
  const totalSum = numbersList.reduce((accumulator, currentValue) => {
    const moreThanTen = Number(currentValue) >= 10;
    const newValue =
      accumulator +
      (moreThanTen
        ? currentValue
            .toString()
            .split("")
            .map((x) => parseInt(x))
            .reduce((x, y) => x + y)
        : currentValue);
    return newValue;
  }, 0);

  const nextMultipleOfTen = Math.ceil(totalSum / 10) * 10;
  console.log({ numbersList, totalSum, verfierNumber, nextMultipleOfTen });
  const result = nextMultipleOfTen - totalSum;
  return result === verfierNumber;
};

module.exports = isCedulaValid;
