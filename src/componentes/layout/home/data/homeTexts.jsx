const homeTexts = {
    en: {
        header: {
            subtitle: "Computer Systems Engineer",
            works: "Projects",
            about: "About",
            contact: "Contact",
            cv: "My CV",
        },
        hero: {
            greeting: "Hello!",
            intro: "I am Danilo Rivera",
            role: "Computer Systems Engineer and developer.",
            description:
                "On this site you will find my personal projects focused on software development, interface design, and technology solutions oriented to functionality and user experience.",
            viewWorks: "View Projects",
            whatsapp: "Send me a WhatsApp message.",
        },
        clientes: {
            title: "My Clients",
            subtitle: "These brands have trusted my freelance services",
        },
        trabajos: {
            all: "All",
            webDesign: "Web Design",
            webDev: "Web Development",
            mobile: "Mobile Apps",
            software: "Software Development",
            title: "My Projects",
            subtitle: "These are some of the projects I have worked on",
        },
        acercaDe: {
            pretitle: "About me",
            title: "Why you should hire me...",
            summary:
                "I am Angel Danilo Rivera Rojas, a Computer Systems Engineering student and developer passionate about technology, design, and creating digital solutions with real impact.",
            summary2:
                "I specialize in web and mobile application development, combining logic, structure, and strong attention to detail in user experience. I am motivated to build projects that not only work well, but also look professional and convey identity.",
            cta: "Send me a message",
            photos: [
                { src: "/assets/yo.png", alt: "Portrait of Danilo" },
                { src: "/assets/trabajos/14.png", alt: "Project preview" },
            ],
        },
        contacto: {
            title: "Let us make your idea real",
            subtitle: "Message me directly on WhatsApp.",
            cta: "Chat on WhatsApp",
            message: "Hi Danilo, I want to talk about my project",
            number: "523921064092",
        },
        footer: {
            title: "Social Media",
            subtitle: "Follow me on social media to stay up to date with the latest news.",
            copyright: "© 2026 RRAD. All rights reserved.",
        },
    },
    es: {
        header: {
            subtitle: "Ingeniero en Sistemas Computacionales",
            works: "Trabajos",
            about: "Acerca de",
            contact: "Contacto",
            cv: "Mi CV",
        },
        hero: {
            greeting: "Hola!",
            intro: "Soy Danilo Rivera",
            role: "Ingeniero en Sistemas Computacionales y desarrollador.",
            description:
                "En este sitio encontrarás mis proyectos personales enfocados en desarrollo de software, diseño de interfaces y soluciones tecnológicas orientadas a la funcionalidad y la experiencia del usuario.",
            viewWorks: "Ver Trabajos",
            whatsapp: "Mandame un WhatsApp.",
        },
        clientes: {
            title: "Mis Clientes",
            subtitle: "Estas marcas han confiado en mis servicios como freelance",
        },
        trabajos: {
            all: "Todos",
            webDesign: "Diseño Web",
            webDev: "Desarrollo Web",
            mobile: "Aplicaciones Moviles",
            software: "Desarrollo de Software",
            title: "Mis Trabajos",
            subtitle: "Estos son algunos de los proyectos en los que he trabajado",
        },
        acercaDe: {
            pretitle: "Acerca de mí",
            title: "La razón por la que deberías contratarme...",
            summary:
                "Soy Ángel Danilo Rivera Rojas, estudiante de Ingeniería en Sistemas Computacionales y desarrollador apasionado por la tecnología, el diseño y la creación de soluciones digitales con impacto real.",
            summary2:
                "Me especializo en el desarrollo de aplicaciones web y móviles, combinando lógica, estructura y una fuerte atención al detalle en la experiencia de usuario. Me motiva construir proyectos que no solo funcionen bien, sino que también se vean profesionales y transmitan identidad.",
            cta: "Mandame un mensaje",
            photos: [
                { src: "/assets/yo.png", alt: "Retrato de Danilo" },
                { src: "/assets/trabajos/14.png", alt: "Vista previa de un proyecto" },
            ],
        },
        contacto: {
            title: "Hagamos tu idea realidad",
            subtitle: "Escribeme directamente por WhatsApp.",
            cta: "Hablar por WhatsApp",
            message: "Hola Danilo, quiero hablar sobre mi proyecto",
            number: "523921064092",
        },
        footer: {
            title: "Redes Sociales",
            subtitle: "Sigueme en redes para estar al tanto de las ultimas novedades.",
            copyright: "© 2026 RRAD. Todos los derechos reservados.",
        },
    },
};

// Devuelve el conjunto de textos del home para el idioma solicitado.
export const getHomeTexts = (language = "en") => homeTexts[language] || homeTexts.en;