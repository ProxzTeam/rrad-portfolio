// Fuente de datos local para la seccion de trabajos/portafolio.
// Cada proyecto define su propia galeria y su propio texto para evitar contenido compartido.

const crearContenidoTexto = (...parrafos) =>
	crearContenido(parrafos.map((parrafo) => ({
		tipo: 'texto',
		valor: parrafo,
	})));

const crearGaleria = (...imagenes) =>
	imagenes.map((imagen, index) => ({
		url: imagen,
		alt: `Vista ${index + 1}`,
	}));

// Construye el contenido del modal a partir de bloques simples.
// Asi cada proyecto solo define que parrafos e imagenes necesita.
const crearContenido = (bloques) => (
	<>
		{bloques.map((bloque, index) => {
			if (bloque.tipo === 'texto') {
				return <p key={`texto-${index}`}>{bloque.valor}</p>;
			}

			if (bloque.tipo === 'imagen') {
				return <img key={`imagen-${index}`} loading="lazy" src={bloque.src} alt={bloque.alt || ''} />;
			}

			return null;
		})}
	</>
);

const trabajoAsset = (fileName) => `/assets/trabajos/${fileName}`;

const contenidoStartup = crearContenidoTexto(
	'Startup Page es una landing pensada para presentar una propuesta de valor con claridad y llevar al usuario hacia una accion concreta.',
	'La estructura prioriza jerarquia visual, lectura rapida y un recorrido simple entre hero, beneficios y secciones de soporte.',
	'El resultado es una pagina liviana, responsiva y orientada a conversion, con foco en una presentacion limpia del producto.'
);

const contenidoQuantumSoft = crearContenidoTexto(
	'Quantum Soft fue planteado como una vitrina de servicios para una empresa que necesitaba transmitir confianza tecnica desde el primer scroll.',
	'Se trabajo una estetica sobria con bloques de informacion precisos, llamados a la accion visibles y una navegacion sin friccion.',
	'La composicion final esta orientada a explicar el servicio de manera directa y a reforzar la identidad profesional de la marca.'
);

const contenidoInfratech = crearContenidoTexto(
	'Infratech Solutions se enfoca en comunicar infraestructura, soporte y solidez operativa con una lectura visual muy limpia.',
	'La pagina organiza el contenido para que las soluciones clave se entiendan rapido y sin saturar al usuario con demasiados elementos.',
	'El diseño acompana una narrativa corporativa moderna, con suficiente aire, contraste y orden en cada bloque.'
);

const contenidoCybersphere = crearContenidoTexto(
	'CyberSphere Innovations fue pensado para un producto o servicio con un perfil tecnico alto y una presentacion de marca mas futurista.',
	'Se priorizaron secciones breves, mensajes contundentes y una composicion que destaque avances, alcance y valor diferencial.',
	'La interfaz busca equilibrio entre impacto visual y claridad, evitando que la parte grafica opaque la informacion principal.'
);

const contenidoByteFusion = crearContenidoTexto(
	'ByteFusion Technologies combina una narrativa comercial directa con una presentacion visual ordenada para destacar servicios digitales.',
	'La arquitectura del contenido facilita escanear la pagina y entender rapido que ofrece la empresa y por que resulta relevante.',
	'Cada bloque acompana una experiencia de lectura fluida, pensada para reforzar posicionamiento y generar interes inmediato.'
);

const contenidoSynthiCore = crearContenidoTexto(
	'SynthiCore Systems se enfoca en mostrar una propuesta tecnica robusta con un estilo mas editorial que promocional.',
	'Se distribuyeron los mensajes para comunicar capacidades, procesos y beneficios sin perder legibilidad en pantallas pequenas.',
	'El resultado es una presentacion sobria, consistente y facil de mantener para futuros ajustes de contenido.'
);

const contenidoVirtuWave = crearContenidoTexto(
	'VirtuWave Labs adopta una composicion orientada a movilidad y dinamismo, con bloques que transmiten agilidad y modernidad.',
	'La informacion se organiza para explicar el producto con rapidez y sostener una experiencia visual ligera, incluso en pantallas reducidas.',
	'El objetivo fue construir una pagina clara, energica y con una identidad reconocible desde el primer contacto.'
);

const contenidoPixelVortex = crearContenidoTexto(
	'PixelVortex Tech fue tratado como una presentacion de marca para una solucion digital con enfoque creativo y tecnico al mismo tiempo.',
	'Las secciones se disenaron para sostener el equilibrio entre contenido informativo, estetica y facilidad de exploracion.',
	'Se buscó que cada bloque aporte contexto sin repetir ideas, manteniendo una experiencia visual ordenada y consistente.'
);

const contenidoOptiSync = crearContenidoTexto(
	'OptiSync Technologies comunica optimizacion, rendimiento y sincronizacion de procesos mediante una interfaz clara y bien estructurada.',
	'La pagina esta preparada para explicar la propuesta de valor con una secuencia simple de lectura y llamados visibles.',
	'La base visual acompana una marca que quiere verse tecnica, confiable y lista para escalar su presencia digital.'
);

const contenidoTechNova = crearContenidoTexto(
	'TechNova Dynamics fue enfocado como un sitio para mostrar evolucion tecnologica con una estetica limpia y profesional.',
	'Se trabajo el contenido para que los mensajes clave se entiendan de inmediato y el recorrido tenga un ritmo estable.',
	'La pagina mantiene una imagen moderna sin perder orden, claridad ni facilidad de uso en diferentes dispositivos.'
);

const contenidoLogicLink = crearContenidoTexto(
	'LogicLink Solutions plantea una comunicacion mas consultiva, orientada a explicar valor y conectar servicios con necesidades reales.',
	'La estructura privilegia bloques cortos, titulos claros y una progresion que facilita la lectura sin distracciones innecesarias.',
	'El conjunto final transmite profesionalismo, cercania y una base solida para futuras iteraciones de contenido.'
);

const contenidoCodeWave = crearContenidoTexto(
	'CodeWave Innovations cierra la serie con una propuesta centrada en desarrollo de software y una presentacion mas sintetica.',
	'La informacion se mantiene directa para resaltar la esencia del proyecto sin extenderse demasiado en la interfaz.',
	'El objetivo fue dejar una pieza simple, consistente y completamente independiente del resto del portafolio.'
);

// Cada objeto representa una tarjeta del grid y su contenido detallado en el modal.
const trabajos = [
	{
		id: 1,
		categoria: 'diseño-web',
		thumb: {
			url: trabajoAsset('1.png'),
			alt: 'Trabajo 1',
		},
		galeria: crearGaleria(trabajoAsset('1.png'), trabajoAsset('13.png')),
		info: {
			nombre: 'Startup Page',
			categoria: 'Diseño Web',
			contenido: contenidoStartup,
		},
	},
	{
		id: 2,
		categoria: 'desarrollo-web',
		thumb: {
			url: trabajoAsset('2.png'),
			alt: 'Trabajo 2',
		},
		galeria: crearGaleria(trabajoAsset('2.png'), trabajoAsset('14.png')),
		info: {
			nombre: 'Quantum Soft',
			categoria: 'Desarrollo Web',
			contenido: contenidoQuantumSoft,
		},
	},
	{
		id: 3,
		categoria: 'aplicaciones-moviles',
		thumb: {
			url: trabajoAsset('3.png'),
			alt: 'Trabajo 3',
		},
		galeria: crearGaleria(trabajoAsset('3.png')),
		info: {
			nombre: 'Infratech Solutions',
			categoria: 'Aplicaciones Moviles',
			contenido: contenidoInfratech,
		},
	},
	{
		id: 4,
		categoria: 'desarrollo-software',
		thumb: {
			url: trabajoAsset('4.png'),
			alt: 'Trabajo 4',
		},
		galeria: crearGaleria(trabajoAsset('4.png')),
		info: {
			nombre: 'CyberSphere Innovations',
			categoria: 'Desarrollo de Software',
			contenido: contenidoCybersphere,
		},
	},
	{
		id: 5,
		categoria: 'diseño-web',
		thumb: {
			url: trabajoAsset('5.png'),
			alt: 'Trabajo 5',
		},
		galeria: crearGaleria(trabajoAsset('5.png')),
		info: {
			nombre: 'ByteFusion Technologies',
			categoria: 'Diseño Web',
			contenido: contenidoByteFusion,
		},
	},
	{
		id: 6,
		categoria: 'desarrollo-web',
		thumb: {
			url: trabajoAsset('6.png'),
			alt: 'Trabajo 6',
		},
		galeria: crearGaleria(trabajoAsset('6.png')),
		info: {
			nombre: 'SynthiCore Systems',
			categoria: 'Desarrollo Web',
			contenido: contenidoSynthiCore,
		},
	},
	{
		id: 7,
		categoria: 'aplicaciones-moviles',
		thumb: {
			url: trabajoAsset('7.png'),
			alt: 'Trabajo 7',
		},
		galeria: crearGaleria(trabajoAsset('7.png')),
		info: {
			nombre: 'VirtuWave Labs',
			categoria: 'Aplicaciones Moviles',
			contenido: contenidoVirtuWave,
		},
	},
	{
		id: 8,
		categoria: 'desarrollo-software',
		thumb: {
			url: trabajoAsset('8.png'),
			alt: 'Trabajo 8',
		},
		galeria: crearGaleria(trabajoAsset('8.png')),
		info: {
			nombre: 'PixelVortex Tech',
			categoria: 'Desarrollo de Software',
			contenido: contenidoPixelVortex,
		},
	},
	{
		id: 9,
		categoria: 'diseño-web',
		thumb: {
			url: trabajoAsset('9.png'),
			alt: 'Trabajo 9',
		},
		galeria: crearGaleria(trabajoAsset('9.png')),
		info: {
			nombre: 'OptiSync Technologies',
			categoria: 'Diseño Web',
			contenido: contenidoOptiSync,
		},
	},
	{
		id: 10,
		categoria: 'desarrollo-web',
		thumb: {
			url: trabajoAsset('10.png'),
			alt: 'Trabajo 10',
		},
		galeria: crearGaleria(trabajoAsset('10.png')),
		info: {
			nombre: 'TechNova Dynamics',
			categoria: 'Desarrollo Web',
			contenido: contenidoTechNova,
		},
	},
	{
		id: 11,
		categoria: 'aplicaciones-moviles',
		thumb: {
			url: trabajoAsset('11.png'),
			alt: 'Trabajo 11',
		},
		galeria: crearGaleria(trabajoAsset('11.png')),
		info: {
			nombre: 'LogicLink Solutions',
			categoria: 'Aplicaciones Moviles',
			contenido: contenidoLogicLink,
		},
	},
	{
		id: 12,
		categoria: 'desarrollo-software',
		thumb: {
			url: trabajoAsset('12.png'),
			alt: 'Trabajo 12',
		},
		galeria: crearGaleria(trabajoAsset('12.png')),
		info: {
			nombre: 'CodeWave Innovations',
			categoria: 'Desarrollo de Software',
			contenido: contenidoCodeWave,
		},
	},
];

export default trabajos;
