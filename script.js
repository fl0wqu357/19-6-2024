setTimeout(() => {
    // Crear elemento h1
    const h1 = document.createElement('h1');
    h1.innerText = 'Modificando el DOM';

    // Asignar color de texto al h1 (rojo o verde)
    const colores = ['red', 'green'];
    h1.style.color = colores[Math.floor(Math.random() * colores.length)];

    // Crear elemento p con texto Lorem Ipsum
    const p = document.createElement('p');
    p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    // Asignar clase al elemento p para estilo de fuente distinto
    p.classList.add('fuente-especial');

    // Obtener el contenedor y agregar los elementos h1 y p al DOM
    let contenedor = document.getElementById('contenedor');
    contenedor.appendChild(h1);
    contenedor.appendChild(p);
}, 3000);
