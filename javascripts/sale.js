
/*productos*/ 
const productos = {
  1: { nombre: "Mezcla Original 200g", precio: 500 },
  2: { nombre: "Mezcla Original 500g", precio: 900 },
  3: { nombre: "Mezcla Especial 200g", precio: 700 },
  4: { nombre: "Mezcla Especial 500g", precio: 1200 }
};

let compras = [];

/*agregar*/ 
function agregar() {
  const productoId = parseInt(document.getElementById("producto").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  
  if (!productoId || !cantidad) {
      window.alert("Por favor seleccione un producto y una cantidad.");
      return;
  }
  
  const producto = productos[productoId];
  compras.push({ ...producto, cantidad });
  
  window.alert(`Añadido: ${producto.nombre} ${producto.precio} yenes, ${cantidad} unidades. Subtotal: ${producto.precio * cantidad} yenes.`);
}

/*calcular*/ 
function calcular() {
  if (compras.length === 0) {
      window.alert("No se han añadido productos.");
      return;
  }
  
  let subtotal = 0;
  let detalles = "";
  
  compras.forEach(compra => {
      const totalProducto = compra.precio * compra.cantidad;
      subtotal += totalProducto;
      detalles += `${compra.nombre} ${compra.precio} yenes, ${compra.cantidad} unidades, ${totalProducto} yenes\n`;
  });
  
  let envio = 0;
  if (subtotal < 2000) {
      envio = 500;
  } else if (subtotal < 3000) {
      envio = 250;
  }
  
  const total = subtotal + envio;
  
  window.alert(`${detalles}Subtotal: ${subtotal} yenes\nEnvío: ${envio} yenes\nTotal: ${total} yenes`);
}