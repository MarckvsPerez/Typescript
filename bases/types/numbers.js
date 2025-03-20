"use strict";
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log("Nos vamos de cacharos");
    }
    else {
        console.log("Estamos en problemas");
    }
    avengers = Number("10aaa");
    console.log({ avengers });
})();
