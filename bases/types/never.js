"use strict";
(() => {
    function customError(msg) {
        throw new Error(msg);
    }
    customError("Error");
})();
