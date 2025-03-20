(() => {
  function customError(msg: string): never {
    throw new Error(msg);
  }

  customError("Error");
})();
