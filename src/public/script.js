// async function handleCheckout() {
//   try {
   
//     window.location.href = "https://checkout.stripe.com/c/pay/cs_test_b1Y4LfB79DyxY5kYskKtOztcThI67EVswvptNPoL5bLxJxG34uXNHG8ZPf#fidkdWxOYHwnPyd1blpxYHZxWjA0S1JIPWlNPUhxQmZQQE11UDNCVW1jfERzYHVJVE1uUHNzd1Fwa3B1aTBxSEdBTlNVRDI0ajc8PDxuR19EN0loamo9d2N%2FTE1tdHxyPGhvcW5nc19Baj01NTVGXGBWZ1VoPScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl";
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }



function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}


function handleCheckout() {
  // Muestra el modal
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function copyAndRedirect() {
  // Copia los datos de la tarjeta al portapapeles
  const dataToCopy = "Número de tarjeta: 4242424242424242";
  copyToClipboard(dataToCopy);

  // Redirecciona a la URL
  window.location.href = "https://checkout.stripe.com/c/pay/cs_test_b1Y4LfB79DyxY5kYskKtOztcThI67EVswvptNPoL5bLxJxG34uXNHG8ZPf#fidkdWxOYHwnPyd1blpxYHZxWjA0S1JIPWlNPUhxQmZQQE11UDNCVW1jfERzYHVJVE1uUHNzd1Fwa3B1aTBxSEdBTlNVRDI0ajc8PDxuR19EN0loamo9d2N%2FTE1tdHxyPGhvcW5nc19Baj01NTVGXGBWZ1VoPScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl";
}

function copyToClipboard(text) {
  // Crea un elemento de textarea temporal para copiar los datos
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = text;

  // Agrega el elemento de textarea al DOM
  document.body.appendChild(tempTextarea);

  // Selecciona el contenido del textarea
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia los datos en el portapapeles
  document.execCommand("copy");

  // Elimina el elemento de textarea temporal del DOM
  document.body.removeChild(tempTextarea);
}





"https://checkout.stripe.com/c/pay/cs_test_b1Y4LfB79DyxY5kYskKtOztcThI67EVswvptNPoL5bLxJxG34uXNHG8ZPf#fidkdWxOYHwnPyd1blpxYHZxWjA0S1JIPWlNPUhxQmZQQE11UDNCVW1jfERzYHVJVE1uUHNzd1Fwa3B1aTBxSEdBTlNVRDI0ajc8PDxuR19EN0loamo9d2N%2FTE1tdHxyPGhvcW5nc19Baj01NTVGXGBWZ1VoPScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl"