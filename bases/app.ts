(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  const enum Fuerza {
    flojo = 1,
    fuerte = 100,
    debil = 0,
    humano = 5,
  }

  const fuerzaFlash = Fuerza.humano;
  const fuerzaSuperman = Fuerza.fuerte;
  const fuerzaBatman = Fuerza.flojo;
  const fuerzaAcuaman = Fuerza.debil;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
