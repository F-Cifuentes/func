const cambiarColor = (elemento) => {
    const colorAnterior = elemento.style.backgroundColor;
    elemento.style.backgroundColor = "black";
    elemento.innerText = `Cambié de color a negro `;
  };

  const crearCuadro = (color, container, mensaje) => {
    const newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.backgroundColor = color;
    newDiv.style.border = "1px solid black";
    newDiv.style.marginRight = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    newDiv.innerText = mensaje;
    container.appendChild(newDiv);
  };

  document.addEventListener("keypress", function(event) {
    const key = event.key.toLowerCase();

    if (key === "a") {
      const keyDiv = document.getElementById("key");
      keyDiv.style.backgroundColor = "pink";
    } else if (key === "s") {
      const keyDiv = document.getElementById("key");
      keyDiv.style.backgroundColor = "orange";
    } else if (key === "d") {
      const keyDiv = document.getElementById("key");
      keyDiv.style.backgroundColor = "lightblue";
    } else if (key === "q") {
      crearCuadro("yellow", document.getElementById("nuevosCuadrosContainer"), "Cuadrado amarillo");
    } else if (key === "w") {
      crearCuadro("blue", document.getElementById("nuevosCuadrosContainer"), "Cuadrado azul");
    } else if (key === "e") {
      crearCuadro("brown", document.getElementById("nuevosCuadrosContainer"), "Cuadrado café");
    }
  });