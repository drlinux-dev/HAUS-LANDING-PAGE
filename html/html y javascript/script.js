document.addEventListener("DOMContentLoaded", function() {
    const services = {
        "diseno-audiovisual": {
            title: "Diseño Audiovisual",
            image: "/IMAGENES/SERVICIOS/DISEÑO AUDIOVISUAL (2).png",
            description: "Haz que tu marca hable a través de imágenes y videos impactantes. Creamos contenido visual que captura la esencia de tu negocio."
        },
        "diseno-grafico": {
            title: "Diseño Gráfico",
            image: "/IMAGENES/SERVICIOS/DISEÑO GRÁFICO.png",
            description: "Dale vida a tu identidad visual con diseños únicos y creativos. En Haus, convertimos tus ideas en piezas gráficas memorables."
        },
        "diseno-web": {
            title: "Diseño Web",
            image: "/IMAGENES/SERVICIOS/DISEÑO WEB.png",
            description: "Crea una experiencia digital inolvidable. Desarrollamos sitios web que combinan diseño atractivo con funcionalidad intuitiva."
        },
        "community-management": {
            title: "Community Management",
            image: "/IMAGENES/SERVICIOS/CM.png",
            description: "Construye una comunidad leal alrededor de tu marca. Gestionamos tus redes sociales para maximizar la interacción y el crecimiento."
        },
        "marketing-digital": {
            title: "Marketing Digital",
            image: "/IMAGENES/SERVICIOS/mkt DIGITAL.png",
            description: "Impulsa tu negocio con estrategias efectivas que conectan con tu público y generan resultados medibles. En Haus, te ayudamos a alcanzar nuevas alturas."
        }
    };

    const items = document.querySelectorAll(".item-servicios-section");
    const serviceImage = document.getElementById("service-image").querySelector("img");
    const serviceTitle = document.getElementById("service-title");
    const serviceDescription = document.getElementById("service-text");

    items.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const serviceKey = item.getAttribute("data-service");
            const service = services[serviceKey];

            serviceImage.src = service.image;
            serviceTitle.textContent = service.title;
            serviceDescription.textContent = service.description;
        });
    });
});
