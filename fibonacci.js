let v1 = 1,
  v2 = 1,
  pos = 1;
num = prompt("Ingrese un número ");
num = parseInt(num);

if (num >= 0) {
  while (num > v1 && num > v2) {
    if (v1 < v2) {
      v1 += v2;
    } else if (num == 0) {
      v1 == 0;
      v2 == 0;
    } else if (num == 1) {
      v1 = 1;
      v2 = 0;
    } else {
      v2 += v1;
    }
    pos++;
  }
} else {
  alert(
    "Losiento papu colocaste algo fuera de esta dimensión, y haz desbloqueado el final secreto de la pantalla de error"
  );
}

if ((num == v1 || num == v2) && num != 1) {
  alert(
    "El número " +
      num +
      " pertenece a la sucesión de fibonacci, ocupando la posición " +
      (pos + 1)
  );
} else if (num == 0) {
  alert(
    "El número " +
      num +
      " pertenece a la sucesión de fibonacci, ocupando la posición " +
      (pos - 1)
  );
} else if (num == 1) {
  alert(
    "El número " +
      num +
      " pertenece a la sucesión de fibonacci, ocupando la posición " +
      pos +
      " y " +
      (pos + 1)
  );
} else {
  alert("El número " + num + " no pertenece a la sucesión de fibonacci");
}
