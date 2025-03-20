(() => {
  let avengers: number = 10;
  const villians: number = 20;

  if (avengers < villians) {
    console.log("Nos vamos de cacharos");
  } else {
    console.log("Estamos en problemas");
  }

  // Esto devuelve NaN ya que para convertir a number se debe usar parseInt o parseFloat
  // En js NaN es un numero
  avengers = Number("10aaa");
  console.log({ avengers });
})();
