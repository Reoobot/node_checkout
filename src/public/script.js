// async function handleCheckout() {
//     const res = await fetch('/checkout-session', {
//         method: 'POST'
//     });
//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// }

// async function handleCheckout() {
//     try {
//       const response = await fetch('/checkout-session', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
           
//         })
//       });


  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await response.json();
//       console.log(data);
  
//       window.location.href = data.url;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
  





// async function handleCheckout() {
//   try {
//     const response = await fetch('/checkout-session', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         // Puedes agregar aquí los datos que necesites enviar en la solicitud POST
//       })
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();

//     // Obtenemos el elemento donde queremos mostrar la respuesta
//     const responseElement = document.getElementById('responseMessage');

//     // Modificamos el contenido del elemento con la respuesta del servidor
//     responseElement.textContent = JSON.stringify(data);

//     // Si la respuesta contiene la propiedad 'url', redirige al usuario a esa URL
//     // if (data.url) {
//     //   window.location.href = data.url;
//     // }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }








async function handleCheckout() {
  try {
    const response = await fetch('/checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // Puedes agregar aquí los datos que necesites enviar en la solicitud POST
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Obtenemos el elemento donde queremos mostrar la respuesta
    const responseElement = document.getElementById('responseMessage');

    // Creamos un enlace (<a>) con la URL de la respuesta como destino
    const link = document.createElement('a');
    link.href = data.url;
    link.textContent = 'Haz clic aquí para pagar';

    // Añadimos el enlace al elemento donde se mostrará la respuesta
    responseElement.appendChild(link);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}








  

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}







"https://checkout.stripe.com/c/pay/cs_test_b1Y4LfB79DyxY5kYskKtOztcThI67EVswvptNPoL5bLxJxG34uXNHG8ZPf#fidkdWxOYHwnPyd1blpxYHZxWjA0S1JIPWlNPUhxQmZQQE11UDNCVW1jfERzYHVJVE1uUHNzd1Fwa3B1aTBxSEdBTlNVRDI0ajc8PDxuR19EN0loamo9d2N%2FTE1tdHxyPGhvcW5nc19Baj01NTVGXGBWZ1VoPScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl"