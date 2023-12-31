const button = document.getElementById('checkout');

const handleCheckout = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch('/checkout-session', {
        method: 'POST'
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

button.addEventListener('click', () => {
  handleCheckout()
    .then(data => {
      console.log(data);
       window.location.href = data.url;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
       setTimeout(() => {
        window.location.href = '/success.html';
      }, 5000); 
    });
});














  

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}







"https://checkout.stripe.com/c/pay/cs_test_b1Y4LfB79DyxY5kYskKtOztcThI67EVswvptNPoL5bLxJxG34uXNHG8ZPf#fidkdWxOYHwnPyd1blpxYHZxWjA0S1JIPWlNPUhxQmZQQE11UDNCVW1jfERzYHVJVE1uUHNzd1Fwa3B1aTBxSEdBTlNVRDI0ajc8PDxuR19EN0loamo9d2N%2FTE1tdHxyPGhvcW5nc19Baj01NTVGXGBWZ1VoPScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl"