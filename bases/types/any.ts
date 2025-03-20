(() => {
  let avenger: any = 21;
  let exists;
  let power;

  avenger = "Tony";

  // No muestra metodos de string
  console.log(avenger.charAt(0));

  // Muestra metodos de string
  console.log((avenger as string).charAt(0));

  avenger = 21.1231321;

  // Muestra metodos de number
  console.log((avenger as number).toFixed(2));

  console.log(exists);
  console.log(power);
})();
