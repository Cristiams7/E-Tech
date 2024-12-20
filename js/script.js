document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { 
            name: "Laptop Gamer ROG Strix G531", 
            price: "30,000", 
            description: "Potente GPU Nvidia GeForce GTX 1650. Procesador Intel Core i5. Memoria RAM expandible hasta 32 GB.",
            image: "images/laptop.jpg" 
        },
        { 
            name: "Samsung S24 Ultra", 
            price: "35,000", 
            description: "512GB 6.8 Titanium Black. Pantalla 6.8 pulgadas con resolución 200MP para fotos de alta calidad.",
            image: "images/phone.jpg" 
        },
        { 
            name: "Auricular Gamer Noblex HP600GM", 
            price: "3,500", 
            description: "Sonido X Sound, luces LED, efecto Surround y control de volumen desde el cable.",
            image: "images/headphones.jpg" 
        },
        { 
            name: "Smartwatch Go AEON SW-012", 
            price: "2,500", 
            description: "Pantalla táctil, medición de oxígeno, ritmo cardíaco y llamadas Bluetooth.",
            image: "images/watch.jpg" 
        },
		
        { 
			name: "Tablet Android 12",
		    price: "15,000", 
		    description: "10.1 pulgadas, cta-Core procesador con 64 GB de almacenamiento, cámara dual de 13MP+5MP, WiFi, Bluetooth, GPS, soporte de expansión de 512 GB.",
		    image: "images/tablet.jpg"
		},
		
        { 
			name: "Cámara KODAK PIXPRO AZ405-BK", 
			price: "18,000", 
			description: "20MP Cámara digital 40X Zoom óptico 0.945 in Lente gran angular Estabilización de imagen óptica 1080P Video Full HD.", 
			image: "images/camera.jpg" 
		},
		
        { 
			name: "Teclado SteelSeries Apex", 
			price: "2,000", 
			description: "Iluminación RGB de 10 zonas - Resistente al agua IP32 - Reposamuñecas magnético de alta calidad (interruptor silencioso para juegos).", 
			image: "images/keyboard.jpg"
		},
		
        { 
			name: "Mouse Razer Basilisk V3", 
			price: "1500", 
			description: "Mouse ergonómico personalizable para juegos: el interruptor de mouse para juegos más rápido - Iluminación Chroma RGB - Sensor óptico de 26K DPI - 11 botones programables", 
			image: "images/mouse.jpg"
		},
		
        { 
			name: "Monitor CRUA curvo para juegos", 
			price: "12,000", 
			description: "De 30 pulgadas, monitor de computadora de 144 Hz/200 Hz, WFHD (2560 x 1080P) pantalla VA 1500R, monitores de PC sRGB del 99% compatibles con FreeSync.", 
			image: "images/monitor.jpg" 
		},
		
        { 
			name: "Silla Gamer RGB", 
			price: "8,500", 
			description: "Con Altavoz de música Bluetooth, Diseñado con luces LED intermitentes en la parte posterior y en el borde del asiento, cuenta con dos motores en la posición de cojín de la cintura para la función de masaje lumbar.", 
			image: "images/chair.jpg" 
		},
		
        { 
			name: "Bocina Bluetooth Portatil", 
			price: "3,200", 
			description: "on batería de gran capacidad, una carga completa te permite reproducir música hasta 30 horas, impermeable altavoz inalámbrico con sonido estéreo fuerte de 24 W, graves profundos, Bluetooth 5.3, luces RGB, emparejamiento dual.", 
			image: "images/speakers.jpg" 
		},
		
        { 
			name: "Disco Duro SSD FX815 1TB", 
			price: "4,500", 
			description: "SSD de 1TB SATA III Unidad interna de estado sólido - 6 Gb/s, hasta 560 MB/s para portátil y escritorio.", 
			image: "images/ssd.jpg" 
		},
		
        { 
			name: "Impresora Canon PIXMA mg3620", 
			price: "6,000",
			description: "Inalámbrica, todo en uno, con impresión móvil y de tablet, color rojo, Sistema de tinta híbrido y modo de escaneo automático.", 
			image: "images/printer.jpg"
		},
		
        { 
			name: " ROUTER ASUS ROG RAPTURE WIFI 6E", 
			price: "4,800", 
			description: "Tri-Band 10 Gigabit Wireless Router, primera banda de 6 GHz del mundo para canales más amplios y capacidad más alta, CPU de 1.8GHz cuádruple, puerto 2.5G, Aura RGB.", 
			image: "images/router.jpg" 
		}
    ];

    const productsContainer = document.getElementById("products-container");
    const cartCount = document.getElementById("cart-count");
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");
    const closeModal = document.getElementById("close-modal");

    let cart = [];

    // Mostrar productos dinámicamente
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-card");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">L. ${product.price.toLocaleString()}</p>
            <button class="add-to-cart">Agregar al Carrito</button>
        `;
        productsContainer.appendChild(productDiv);

        // Evento para agregar al carrito
        productDiv.querySelector(".add-to-cart").addEventListener("click", () => {
            cart.push(product);
            updateCartCount();
        });
    });

    // Actualizar contador del carrito
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Mostrar el modal del carrito
	cartCount.addEventListener("click", () => {
    cartItems.innerHTML = ""; // Limpiar contenido previo
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.name} - L. ${item.price.toLocaleString()}
        `;
        cartItems.appendChild(listItem);

        // Asegurarse de convertir el precio a número
        const priceAsNumber = parseInt(item.price.toString().replace(/,/g, ""));
        total += priceAsNumber; 
    });

    // Formatear el total solo una vez
    cartTotal.textContent = `Total: L. ${total.toLocaleString()}`;
    cartModal.style.display = "flex"; // Mostrar modal
});

    // Cerrar el modal
    closeModal.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Acción del botón de pagar
    checkoutBtn.addEventListener("click", () => {
        alert(`Gracias por tu compra. Total a pagar: ${cartTotal.textContent}`);
        cart = []; // Vaciar carrito
        updateCartCount();
        cartModal.style.display = "none"; // Cerrar modal
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Formulario de contacto
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Evitar recargar la página

        // Obtener valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validar campos (opcional)
        if (name && email && message) {
            // Mostrar mensaje de éxito
            formResponse.textContent = "¡Gracias por contactarnos, " + name + "! Te responderemos pronto.";
            formResponse.classList.remove("hidden");

            // Limpiar formulario
            contactForm.reset();
        } else {
            formResponse.textContent = "Por favor, completa todos los campos.";
            formResponse.style.color = "red";
            formResponse.classList.remove("hidden");
        }
    });
});