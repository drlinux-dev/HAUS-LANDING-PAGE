document.addEventListener("DOMContentLoaded", function() {
    const services = {
        "diseno-audiovisual": {
            title: "Diseño Audiovisual",
            image: "/IMAGENES/SERVICIOS/DISEÑO AUDIOVISUAL (2).png",
            description: "Descripción del servicio de Diseño Audiovisual."
        },
        "diseno-grafico": {
            title: "Diseño Gráfico",
            image: "/IMAGENES/SERVICIOS/DISEÑO GRÁFICO.png",
            description: "Descripción del servicio de Diseño Gráfico."
        },
        "diseno-web": {
            title: "Diseño Web",
            image: "/IMAGENES/SERVICIOS/DISEÑO WEB.png",
            description: "Descripción del servicio de Diseño Web."
        },
        "community-management": {
            title: "Community Management",
            image: "/IMAGENES/SERVICIOS/CM.png",
            description: "Descripción del servicio de Community Management."
        },
        "marketing-digital": {
            title: "Marketing Digital",
            image: "/IMAGENES/SERVICIOS/mkt DIGITAL.png",
            description: "Descripción del servicio de Marketing Digital."
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
