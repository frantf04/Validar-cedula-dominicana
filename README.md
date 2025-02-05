# Validación de Cédula Dominicana

Este repositorio contiene una función en JavaScript para validar cédulas dominicanas. La función `isCedulaValid` verifica si una cédula dada es válida según el algoritmo de validación utilizado en la República Dominicana.

## ¿Por qué es útil?

La validación de cédulas es un requisito común en aplicaciones que manejan datos personales en la República Dominicana. Esta función permite asegurar que una cédula ingresada cumple con los estándares oficiales antes de ser procesada.

## Uso

La función `isCedulaValid` toma como argumento una cadena de texto que representa la cédula y devuelve `true` si la cédula es válida y `false` en caso contrario.

### Ejemplo de uso

```javascript
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
  const result = nextMultipleOfTen - totalSum;
  return result === verfierNumber;
};

// Ejemplo de uso
console.log(isCedulaValid("00123456782")); // true o false dependiendo de la cédula
```

Ejemplos de Prueba
Cédula válida: "00123456782" → true

Cédula inválida: "40266808302" → false

Descripción del Algoritmo
La validación de la cédula dominicana sigue los siguientes pasos:

1. Longitud de la Cédula
La cédula debe tener exactamente 11 dígitos, con el siguiente formato:

001-2345678-9

- **001**: Primeros 3 dígitos representan el código de área provincial.
- **2345678**: Siguientes 7 dígitos representan el número de lote.
- **9**: Último dígito es el número verificador.

2. Multiplicación Alternada
Cada dígito de la cédula (excepto el último) se multiplica alternativamente por 1 y 2.

3. Suma de Dígitos
Si el resultado de la multiplicación es un número de dos dígitos, se suman esos dígitos. Por ejemplo, si el resultado es 12, se suma 1 + 2 = 3.

4. Suma Total
Se suman todos los resultados obtenidos en el paso anterior.

5. Próximo Múltiplo de 10
Se encuentra el próximo múltiplo de 10 mayor o igual a la suma total. Por ejemplo, si la suma total es 47, el próximo múltiplo de 10 es 50.

6. Dígito Verificador
Se resta la suma total del próximo múltiplo de 10. El resultado debe ser igual al último dígito de la cédula (dígito verificador). Por ejemplo:

Suma total: 47

Próximo múltiplo de 10: 50

Dígito verificador: 50 - 47 = 3

Si el último dígito de la cédula es 3, la cédula es válida.

### Instalación
Si deseas usar esta función en tu proyecto, simplemente copia el código de la función isCedulaValid en tu archivo JavaScript.

### Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna mejora, no dudes en abrir un issue o enviar un pull request.

### Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.