(() => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  const villians: string[] = ["Lex", "Doom", "Red Skull"];

  numbers.push(6);
  villians.push("Ultron");

  villians.forEach((villian) => {
    console.log(villian.toLocaleUpperCase());
  });

  numbers.forEach((number) => {
    console.log(number);
  });
})();
