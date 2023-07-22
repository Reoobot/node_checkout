async function handleCheckout() {
    const res = await fetch('/checkout-session', {
        method: 'POST'
    });
    const data = await res.json();
    console.log(data);
    window.location.href = data.url;
}



function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
