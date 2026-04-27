// Fuente de datos local para la seccion de trabajos/portafolio.
// La idea es separar el contenido en dos niveles:
// 1) metadatos del proyecto para el grid y el modal
// 2) bloques reutilizables para no repetir el mismo JSX muchas veces

const textoBase = (
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas iste doloribus saepe voluptatem.
		Nihil quo beatae aut. Qui nam enim blanditiis obcaecati natus aliquid, rem facilis amet dolore
		officiis provident?
	</p>
);

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

// Secuencia editorial mas comun en el portafolio: texto + imagen + texto + imagen + texto.
// Cuando quieras cambiar el estilo del contenido, normalmente solo tocaras este helper.
const crearContenidoEstandar = (imagenUno, imagenDos) =>
	crearContenido([
		{ tipo: 'texto', valor: textoBase },
		{ tipo: 'imagen', src: imagenUno, alt: 'Vista previa del proyecto' },
		{ tipo: 'texto', valor: textoBase },
		{ tipo: 'imagen', src: imagenDos, alt: 'Detalle adicional del proyecto' },
		{ tipo: 'texto', valor: textoBase },
	]);

const trabajoAsset = (fileName) => `/assets/trabajos/${fileName}`;

// Contenido editorial reutilizado en la mayoria de los proyectos.
const contenidoRecurrente = crearContenidoEstandar(trabajoAsset('2.png'), trabajoAsset('3.png'));
const contenidoAlterno = crearContenidoEstandar(trabajoAsset('4.png'), trabajoAsset('5.png'));

// Cada objeto representa una tarjeta del grid y su contenido detallado en el modal.
const trabajos = [
	{
		id: 1,
		categoria: 'diseño-web',
		thumb: {
			url: trabajoAsset('1.png'),
			alt: 'Trabajo 1',
		},
		info: {
			nombre: 'Nexa Sys',
			categoria: 'Diseño Web',
			contenido: contenidoRecurrente,
		},
	},
	{
		id: 2,
		categoria: 'desarrollo-web',
		thumb: {
			url: trabajoAsset('2.png'),
			alt: 'Trabajo 2',
		},
		info: {
			nombre: 'Quantum Soft',
			categoria: 'Desarrollo Web',
			contenido: contenidoAlterno,
		},
	},
	{
		id: 3,
		categoria: 'aplicaciones-moviles',
		thumb: {
			url: trabajoAsset('3.png'),
			alt: 'Trabajo 3',
		},
		info: {
			nombre: 'Infratech Solutions',
			categoria: 'Aplicaciones Moviles',
			contenido: contenidoRecurrente,
		},
	},
	{
		id: 4,
		categoria: 'desarrollo-software',
		thumb: {
			url: trabajoAsset('4.png'),
			alt: 'Trabajo 4',
		},
		info: {
			nombre: 'CyberSphere Innovations',
			categoria: 'Desarrollo de Software',
			contenido: contenidoRecurrente,
		},
	},
	{
		id: 5,
		categoria: 'diseño-web',
		thumb: {
			url: trabajoAsset('5.png'),
			alt: 'Trabajo 5',
		},
		info: {
			nombre: 'ByteFusion Technologies',
			categoria: 'Diseño Web',
			contenido: contenidoRecurrente,
		},
	},
	{
		id: 6,
		categoria: 'desarrollo-web',
		thumb: {
			url: trabajoAsset('6.png'),
			alt: 'Trabajo 6',
		},
		info: {
			nombre: 'SynthiCore Systems',
			categoria: 'Desarrollo Web',
			contenido: contenidoRecurrente,
		},
	},
	{
		id: 7,
		categoria: 'aplicaciones-moviles',
		thumb: {
			url: trabajoAsset('7.png'),
			alt: 'Trabajo 7',
		},
		info: {
			nombre: 'VirtuWave Labs',
			categoria: 'Aplicaciones Moviles',
			contenido: contenidoRecurrente,
		},
	},
	{
		id: 8,
		categoria: 'desarrollo-software',
		thumb: {
			url: trabajoAsset('8.png'),
			alt: 'Trabajo 8',
		},
		info: {
			nombre: 'PixelVortex Tech',
			categoria: 'Desarrollo de Software',
			contenido: contenidoRecurrente,
		},
	},
	{
		id: 9,
		categoria: 'diseño-web',
		thumb: {
			url: trabajoAsset('9.png'),
			alt: 'Trabajo 9',
		},
		info: {
			nombre: 'OptiSync Technologies',
			categoria: 'Diseño Web',
			contenido: contenidoRecurrente,
		},
	},
	{
		id: 10,
		categoria: 'desarrollo-web',
		thumb: {
			url: trabajoAsset('10.png'),
			alt: 'Trabajo 10',
		},
		info: {
			nombre: 'TechNova Dynamics',
			categoria: 'Desarrollo Web',
			contenido: contenidoRecurrente,
		},
	},
	{
		id: 11,
		categoria: 'aplicaciones-moviles',
		thumb: {
			url: trabajoAsset('11.png'),
			alt: 'Trabajo 11',
		},
		info: {
			nombre: 'LogicLink Solutions',
			categoria: 'Aplicaciones Moviles',
			contenido: contenidoRecurrente,
		},
	},
	{
		id: 12,
		categoria: 'desarrollo-software',
		thumb: {
			url: trabajoAsset('12.png'),
			alt: 'Trabajo 12',
		},
		info: {
			nombre: 'CodeWave Innovations',
			categoria: 'Desarrollo de Software',
			contenido: crearContenido([
				{ tipo: 'texto', valor: textoBase },
			]),
		},
	},
];

export default trabajos;
