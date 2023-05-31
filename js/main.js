class Adquisicion {
  constructor(name) {
    this.name = name;
  }
  }
  
  const adquisiciones = [
  new Adquisicion ("Lo compré en un Local Comercial"),
  new Adquisicion ("Lo compré por internet"),
  ];
  
  let adquisicionList = document.getElementById("adquisicion");
  
  adquisiciones.forEach ((unaAdquisicion) => {
  let item = document.createElement("option");
  item.value = unaAdquisicion.name.toString();
  item.innerText = unaAdquisicion.name;
  adquisicionList.append(item);
  });
  




const formulario = document.getElementById("formulario");

function validarFormulario (data){
console.log("Validando formulario",data);
const hijos = data.children;

const pedido= {};

for (let index = 0; index < 4; index++) {
  const unHijo = hijos[index];
  const valor = unHijo.children[1].value
  console.log("El valor almacenado es" + unHijo.children[0].innerText + "es:",{valor});
}
}

formulario.addEventListener("submit", (event) => {
event.preventDefault();
guardarPedido(event.target);

});





class Usuario {
  constructor(nombre, dni,email, localidad) {
    this.nombre = nombre;
    this.dni = dni;
    this.email = email;
    this.localidad = localidad;
  }
  }
  
  class Pedido {
  constructor (adquisicion, fechaCompra, numeroSerie, usuario) {
    this.adquisicion = adquisicion;
    this.fechaCompra = fechaCompra;
    this.numeroSerie = numeroSerie;
    this.usuario = usuario;

  
  }
  }
  

  function guardarPedido () {
    const nombre = document.getElementById("nombre").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const localidad = document.getElementById("localidad").value;
    const adquisicion = document.getElementById("adquisicion").value;
    const fechaCompra = document.getElementById("fechaCompra").value;
    const numeroSerie = document.getElementById("numeroSerie").value;

const usuario = new Usuario (nombre, dni, email, localidad);
const pedido = new Pedido (adquisicion, fechaCompra, numeroSerie, usuario);
localStorage.setItem("pedido", JSON.stringify(pedido));
}




armado.addEventListener("submit", (event)=>{
  event.preventDefault ();
  validarArmado(event.target);
  guardarPedido();
  });

  function mostrarPedido () {
    const pedidoGuardado = localStorage.getItem("pedido");
    const infoPedidoElement = document.getElementById("info-pedido");
  
  if (pedidoGuardado) {
    const pedido = JSON.parse (pedidoGuardado);
  
  infoPedidoElement.innerHTML =`
  <p>Adquisicion: ${pedido.adquisicion}</p>
  <p>FechaCompra: ${pedido.fechaCompra}</p>
  <p>NumeroSerie: ${pedido.numeroSerie}</p>
  <p>Nombre: ${pedido.usuario.nombre}</p>
  <p>Dni: ${pedido.usuario.dni}</p>
  <p>Email: ${pedido.usuario.email}</p>
  <p>Localidad: ${pedido.usuario.localidad}</p>

  `;

infoPedidoElement.classList.add("info-pedido");
} else {
infoPedidoElement.innerHTML = "<p> No se encontró ningún pedido. </p>";
infoPedidoElement.classList.remove("info-pedido");
}
}
mostrarPedido();

const armadoFormulario = document.getElementById("armado");
armadoFormulario.addEventListener("submit", (event)=> {
  event.preventDefault();
  mostrarPedido();
});
