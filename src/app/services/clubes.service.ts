import { Injectable } from '@angular/core';

@Injectable()
export class ClubesService {

	private clubes:Club[] = [
	    {
	      nombre: "Aldosivi",
	      bio: "El Club Atlético Aldosivi es un club deportivo de origen argentino que se encuentra ubicado en la ciudad costera de Mar del Plata, situado en el interior de la provincia de Buenos Aires, en el centroeste del país. Fue fundado el 29 de marzo de 1913 y su principal actividad es el fútbol, en la que su primer equipo participa en el torneo de Primera División de Argentina.",
	      img: "assets/img/aldosivi.png",
	      fundacion: "29 de marzo de 1913",
	      apodo:"El Tiburón"
	    },
	    {
	      nombre: "All Boys",
	      bio: "El Club Atlético All Boys es una institución deportiva argentina, relacionada históricamente con Floresta, ubicada en el barrio contiguo Monte Castro de la ciudad de Buenos Aires.14​ Según el presidente de la Comuna 10, es la institución más prestigiosa de la comuna.15​16​ Fue fundado en Floresta el 15 de marzo de 1913 por un grupo de amigos apasionados por el fútbol.",
	      img: "assets/img/allboys.png",
	      fundacion: "15 de marzo de 1913",
	      apodo:"El Albo"
	    },
	    {
	      nombre: "Almagro",
	      bio: "El Club Almagro es un club de fútbol argentino, fundado el 6 de enero de 1911 por la fusión de los clubes Jubile, San Martín Juniors y Lezica. Su sede se ubica en la calle Medrano 522, en el barrio de Almagro dentro de la ciudad de Buenos Aires. A pesar de que su sede se ubica en la capital del país, su estadio, de nombre Tres de Febrero, se encuentra en el partido homónimo, más precisamente en la localidad de José Ingenieros, en la zona oeste del Gran Buenos Aires, y posee una capacidad de 19.000 espectadores aproximadamente. El equipo milita actualmente en la Primera Nacional, segunda división de Argentina.",
	      img: "assets/img/almagro.png",
	      fundacion: "6 de enero de 1911",
	      apodo:"El Tricolor"
	    },
	    {
	      nombre: "Argentinos Juniors",
	      bio: "La Asociación Atlética Argentinos Juniors, popularmente conocida como Argentinos Juniors o simplemente Argentinos, es una centenaria institución polideportiva fundada el 15 de agosto de 1904 en el barrio de La Paternal, Ciudad Autónoma de Buenos Aires, Argentina. Participa de la Primera División de Argentina. Su disciplina más destacada es el fútbol, en el que es reconocido por la FIFA como uno de los 11 clubes clásicos de la Argentina,2​ siendo reconocido ante todo por ser un club formador de numerosos futbolistas de proyección internacional como Diego Armando Maradona, Fernando Redondo, Juan Román Riquelme, Claudio Borghi, Esteban Cambiasso, Sergio Batista, Juan Pablo Sorin, Fernando Cáceres, Leonel Gancedo, Diego Placente, Nicolás Pareja, Néstor Ortigoza, Lucas Biglia, Lucas Barrios, Federico Insúa, Leonardo Pisculichi, Andrés D'Alessandro y Fabricio Coloccini (entre otros). Por tal motivo, es reconocido tanto por la AFA como por la prensa especializada como el Semillero del Mundo.",
	      img: "assets/img/argentinos.png",
	      fundacion: "15 de agosto de 1904",
	      apodo:"El Bicho"
	    },
	    {
	      nombre: "Arsenal",
	      bio: "Arsenal Fútbol Club es un club de fútbol argentino que pertenece a la ciudad de Sarandí, en el partido de Avellaneda, provincia de Buenos Aires, fundado el 11 de enero de 1957. Actualmente participa en la Superliga Argentina, luego de haberse coronado campeón de la Primera B Nacional 2018-19. Entre sus máximos logros se encuentran los campeonatos de la liga local obtenidos en el Clausura 2012, la Supercopa Argentina 2012 y la Copa Argentina 2013. Mientras que en el plano internacional, también ha logrado consagrarse en la Copa Sudamericana 2007 y la Copa Suruga Bank 2008.",
	      img: "assets/img/arsenal.png",
	      fundacion: "22 de agosto de 1964",
	      apodo:"El Arse"
	    },
	    {
	      nombre: "Banfield",
	      bio: "El Club Atlético Banfield es una entidad deportiva de Argentina con sede en la localidad de Banfield, provincia de Buenos Aires. Fue fundado el 21 de enero de 1896 por habitantes de esa ciudad, de origen británico (ingleses, en su mayoría, y algunos escoceses e irlandeses), y su principal actividad es el fútbol profesional. Actualmente se desempeña en la Primera División de Argentina.3​ En 2009 obtuvo su primer título profesional en la máxima categoría al consagrarse campeón del Torneo Apertura 2009. Logró una copa nacional oficial durante la era amateur (la Copa de Honor Municipalidad de Buenos Aires, conquistada en 1920) y 12 títulos en Segunda División.",
	      img: "assets/img/banfield.png",
	      fundacion: "21 de enero de 1896",
	      apodo:"El Taladro"
	    },
	    {
	      nombre: "Belgrano",
	      bio: "El Club Atlético Belgrano, más conocido como El Pirata Cordobés, o simplemente Belgrano, es una entidad deportiva situada en el Barrio Alberdi de la ciudad de córdoba en Argentina. Fue fundado oficialmente un lunes 19 de marzo de 19052​ por Arturo Orgaz y recibe su nombre en honor al General Manuel Belgrano, prócer y creador de la bandera argentina. Algunos documentos manuscritos alegan la existencia de Belgrano ya en el año 1903, fecha previa a la fundación oficial. Actualmente milita en la Primera Nacional, segunda división del fútbol argentino, luego de descender de categoría en la Superliga 2018/2019.",
	      img: "assets/img/belgrano.png",
	      fundacion: "19 de marzo de 1905",
	      apodo:"El Pirata"
	    },
	    {
	      nombre: "Boca Juniors",
	      bio: "El Club Atlético Boca Juniors (CABJ) (en forma abreviada: Boca Juniors) es una entidad deportiva de Argentina con sede en el barrio de La Boca, Buenos Aires. El fútbol es su disciplina más destacada, aunque también compite a nivel profesional, nacional e internacionalmente, en baloncesto, voleibol, futsal y fútbol femenino, mientras que deportes como el boxeo, judo, karate, taekwondo, lucha, gimnasia rítmica y artística se practican a nivel amateur. Fue fundado en dicho barrio el 3 de abril de 1905 por seis vecinos adolescentes hijos de italianos. Participa de la Primera División de fútbol desde 1913 y, a partir del Torneo Inicial 2013, se convirtió en el único club que disputó todas las temporadas en Primera División desde el comienzo del profesionalismo en 1931. Además, es el equipo con mayor cantidad de partidos disputados.8​ A partir del 8 de junio de 2015, Boca Juniors batió el récord de mayor permanencia ininterrumpida en Primera División, con 37 312 días.9​ El equipo juega sus partidos como local en el estadio Alberto J. Armando, conocido mundialmente como «La Bombonera».",
	      img: "assets/img/boca.png",
	      fundacion: "3 de abril de 1905",
	      apodo:"El Xeneize"
	    },
	    {
	      nombre: "Rosario Central",
	      bio: "El Club Atlético Rosario Central, conocido simplemente como Rosario Central, Rosario o Central, es una entidad deportiva argentina de la ciudad de Rosario,7​ en la provincia de Santa Fe, cuya actividad principal es el fútbol. Actualmente milita en la Primera División de Argentina y disputa sus partidos como local en el estadio Gigante de Arroyito. En la institución también se practican otras disciplinas, como hockey sobre césped, baloncesto, patinaje, boxeo, taekwondo, fútsal, fútbol playa y voleibol, entre otros.8​ En el año 1905 —con la fundación de la Liga Rosarina de Fútbol— el club finalmente pudo desarrollar su actividad principal. De la misma, se separó en dos ocasiones: la primera en 1913 en donde participó de la disidente Federación Rosarina de Football, mientras que la segunda fue entre 1920 y 1921 en donde fue parte de la también disidente Asociación Amateurs Rosarina de Football. Entre 1931 y 1938 fue miembro de la Asociación Rosarina de Fútbol, donde disputó sus primeros campeonatos profesionales. Entre estos tres períodos, que van desde 1905 hasta 1938, Rosario Central totalizó quince campeonatos locales,9​ tres copas rosarinas oficiales y cinco Copas nacionales oficiales de la AFA.",
	      img: "assets/img/central.png",
	      fundacion: "24 de diciembre de 1889",
	      apodo:"El Canalla"
	    },
	    {
	      nombre: "Chacarita Juniors",
	      bio: "El Club Atlético Chacarita Juniors es un club deportivo oriundo del barrio de Chacarita donde se encuentra su sede social. Su estadio está ubicado en Villa Maipú, partido de General San Martín, al norte de la ciudad de Buenos Aires. Fue fundado el 1 de mayo de 1906 y su principal actividad es el fútbol. Actualmente milita en la Primera Nacional, segunda división del fútbol argentino. En la máxima categoría disputó 61 temporadas (6 en la era amateur y 55 en el profesionalismo) y logró adjudicarse el Torneo Metropolitano de 1969, su máximo logro. Además cuenta con una amplia variedad de otras disciplinas deportivas.",
	      img: "assets/img/chacarita.png",
	      fundacion: "1 de mayo de 1906",
	      apodo:"El Funebrero"
	    },
	    {
	      nombre: "Colón",
	      bio: "El Club Atlético Colón, también conocido como Colón de Santa Fe o simplemente Colón, es un club de la ciudad de Santa Fe. Fue fundado el 5 de mayo de 1905 como Colón Foot-Ball Club, hasta que en 1920 se adopta el nombre actual.3​ Su primer equipo de fútbol masculino participa en la Superliga Argentina. Nació como un club de fútbol y es la principal actividad que se lleva a cabo a nivel profesional desde 1913, cuando se afilió a la Liga Regional Santafesina de Foot-Ball. Además posee un equipo alternativo que disputa la Liga Santafesina de Fútbol desde 1948 conformado por jugadores amateurs. Hoy en día también se practican otras disciplinas como básquet, vóley, hockey femenino, fútbol femenino, boxeo, futsal y natación, todos de forma amateur.",
	      img: "assets/img/colon.png",
	      fundacion: "5 de mayo de 1905",
	      apodo:"El Sabalero"
	    },
	    {
	      nombre: "Crucero del Norte",
	      bio: "El Club Crucero del Norte es una Asociación Civil sin fines de lucro, ubicado en la ciudad de Garupá, en la provincia de Misiones. Desde el año 2003, el club comenzó a participar en los torneos de la Liga Posadeña de Fútbol, abandonando el fútbol de salón, para instalarse en el fútbol profesional definitivamente.2​ Actualmente se encuentra militando en el Torneo Federal A. El club pertenece a la empresa de colectivos de nombre homónimo, de ahí el apodo el Colectivero.3​ Su clásico rival es Guaraní Antonio Franco. Con el que disputa el Clásico Misionero, en el que es ampliamente vencedor en el historial con nulos partidos ganados por parte de su rival.",
	      img: "assets/img/crucero.jpg",
	      fundacion: "28 de junio de 2003",
	      apodo:"El Colectivero"
	    },
	    {
	      nombre: "Defensa y Justicia",
	      bio: "El Club Social y Deportivo Defensa y Justicia, más conocido como Defensa y Justicia o simplemente Defensa, es una entidad deportiva de Argentina cuya sede se encuentra situada en la ciudad de Florencio Varela sobre la zona sur del Gran Buenos Aires. La institución fue fundada el 20 de marzo de 1935 y su principal actividad es el fútbol, dónde también promueve la práctica de otros deportes como el handball y el hockey. Defensa y Justicia participa de la Primera División de Argentina desde el segundo semestre de 2014, luego de ser subcampeón de la B Nacional, en la temporada 2013/14. En ese campeonato, el Halcón realizó una muy buena campaña, cosechando 75 puntos y por ende obteniendo el ascenso a la máxima categoría del fútbol argentino.",
	      img: "assets/img/defensa.png",
	      fundacion: "20 de marzo de 1935",
	      apodo:"El Halcón"
	    },
	    {
	      nombre: "Gimnasia de la Plata",
	      bio: "El Club de Gimnasia y Esgrima La Plata, conocido simplemente como «Gimnasia» o por sus acrónimos «GELP» o «CGE», es una institución deportiva ubicada en la ciudad de La Plata, Buenos Aires, Argentina, fundada el 3 de junio de 1887. Su principal actividad es el fútbol masculino, disciplina en la cual se desempeña en la Primera División de Argentina. Su estadio es el Juan Carmelo Zerillo, popularmente conocido como «El Bosque». Cuenta, actualmente, con una capacidad para albergar a 27.500 espectadores y está ubicado dentro del parque público Paseo del Bosque, al noreste de la ciudad de La Plata, capital de la provincia de Buenos Aires, Argentina, sobre la avenida 60 y su intersección con la calle 118.",
	      img: "assets/img/gimnasia.png",
	      fundacion: "3 de junio de 1887",
	      apodo:"El Lobo"
	    },
	    {
	      nombre: "Huracan",
	      bio: "El Club Atlético Huracán es una institución social y deportiva del barrio de Parque Patricios de la ciudad de Buenos Aires, Argentina, cuya principal actividad es el fútbol masculino, en la que su primer equipo participa del torneo de Primera División. También se practican otras disciplinas, como fútbol femenino (en la que disputa también el respectivo certamen de Primera División), vóley, hockey sobre patines (ver Huracán hockey), patín, taekwondo, judo, hockey sobre césped, natación, gimnasia artística, básquet, handball, futsal, boxeo, tango, yin tao y teatro, entre otros.",
	      img: "assets/img/huracan.png",
	      fundacion: "1 de noviembre de 1908",
	      apodo:"El Globo"
	    },
	    {
	      nombre: "Independiente",
	      bio: "El Club Atlético Independiente, conocido popularmente como Independiente o por su sigla CAI, es una entidad deportiva de Argentina de la ciudad bonaerense de Avellaneda, situado en el sur del Gran Buenos Aires (GBA). Fue fundado el 1 de enero de 1905 por unos jóvenes empleados independistas del Club Maipú. El fútbol es su disciplina más destacada, cuyo primer equipo participa en la Superliga Argentina, aunque también se practican otras disciplinas deportivas a nivel amateur y semiprofesional. Ejerce su localía en el estadio llamado Libertadores de América que cuenta con un aforo de 52 364 espectadores. Los colores que identifican al equipo son el rojo, y han sido utilizados en los colores de su uniforme desde 1908.",
	      img: "assets/img/independiente.png",
	      fundacion: "4 de agosto de 1904",
	      apodo:"El Rojo"
	    },
	    {
	      nombre: "Lanus",
	      bio: "El Club Atlético Lanús es un club deportivo de Argentina fundado el 3 de enero de 1915 en la ciudad de Lanús, provincia de Buenos Aires, Argentina. La institución se desempeña en varias disciplinas deportivas, destacándose en fútbol masculino, en el que participa del campeonato de Primera División de Argentina, y en básquet, donde disputa el Torneo Federal. En fútbol, su principal actividad, ha obtenido dos títulos de Primera División, el Torneo Apertura 2007 y el Campeonato de Primera División 2016; dos copas nacionales: la Copa Bicentenario y la Supercopa Argentina 2016; y dos títulos oficiales a nivel internacional: la Copa Conmebol 1996 (torneo antecesor de la actual Copa Sudamericana)7​ y la Copa Sudamericana 2013. También fue subcampeón de la Copa Conmebol 1997, de la Copa Libertadores 2017 y de la máxima categoría del fútbol argentino en cinco oportunidades.",
	      img: "assets/img/lanus.png",
	      fundacion: "3 de enero de 1915",
	      apodo:"El Granate"
	    },
	    {
	      nombre: "NOB",
	      bio: "El Club Atlético Newell's Old Boys, conocido simplemente como Newell's o por su castellanizado Ñuls, Ñubels10​11​, es un club deportivo de la ciudad de Rosario, Provincia de Santa Fe, Argentina. Actualmente se desempeña en la Superliga Argentina. En el año 1905, el club comenzó su actividad futbolística siendo parte de la Liga Rosarina de Fútbol, mientras que entre 1931 y 1938 participó de los torneos profesionales de la Asociación Rosarina de Fútbol. A partir de 1939 se incorporó a la Primera División de Argentina, en el ámbito de la AFA.",
	      img: "assets/img/nob.png",
	      fundacion: "3 de noviembre de 1903",
	      apodo:"La Lepra"
	    },
	    {
	      nombre: "Olimpo",
	      bio: "El Club Olimpo, también conocido como Olimpo de Bahía Blanca o simplemente Olimpo, es un club deportivo argentino ubicado en Bahía Blanca, Provincia de Buenos Aires, (en el centro-este de la República Argentina) fundado el 15 de octubre de 1910. Sus principales actividades son el fútbol (siendo un reconocido cuadro de la Primera División) donde juega en el Torneo Federal A, y hace de local en el Estadio Roberto Natalio Carminatti y el básquet (donde participó hasta la temporada 2016/17 en el Torneo Nacional de Ascenso, debido a problemas económicos).3​ Por su historia, torneos ganados, infraestructura, su gran cantidad de disciplinas, por la envergadura de la ciudad que representa y por su hinchada, es considerado como una de las instituciones más importantes y reconocidas del sur argentino.",
	      img: "assets/img/olimpo.png",
	      fundacion: "15 de octubre de 1910",
	      apodo:"El Aurinegro"
	    },
	    {
	      nombre: "Godoy Cruz",
	      bio: "El Club Deportivo Godoy Cruz Antonio Tomba, denominado popularmente «Tomba» o simplemente «Godoy Cruz», es una institución deportiva de la ciudad homónima del Gran Mendoza, provincia de Mendoza, Argentina. Fue fundado el 1 de junio de 1921 con el nombre de Club Sportivo Godoy Cruz, aunque adoptó su actual nombre el 26 de septiembre de 1930, luego de fusionarse con el Club Bodega Antonio Tomba, entidad que fue fundada en 1899 por los obreros de la histórica bodega con el auspicio de Don Antonio Tomba.",
	      img: "assets/img/godoy.png",
	      fundacion: "1 de junio de 1921",
	      apodo:"El Tomba"
	    },
	    {
	      nombre: "Patronato",
	      bio: "El Club Atlético Patronato de la Juventud Católica (en forma abreviada: Patronato), es un club de fútbol argentino, de la ciudad de Paraná, provincia de Entre Ríos, que en la actualidad participa en la Primera División de Argentina. Fue fundado el 1 de febrero de 1914. Cuenta, además, con otras disciplinas como el básquet, sóftbol, vóley, patín artístico, tenis, hockey sobre césped, yudo y taekwondo.",
	      img: "assets/img/patronato.png",
	      fundacion: "1 de febrero de 1914",
	      apodo:"El Patrón"
	    },
	    {
	      nombre: "Quilmes",
	      bio: "El Quilmes Atlético Club es una institución deportiva argentina, de la ciudad de Quilmes, provincia de Buenos Aires. Sus principales deportes son el fútbol, donde participa en la Primera Nacional, y el hockey sobre césped, siendo el primero de estos, el que recibe mayor prioridad. Promueve la práctica de varios deportes, como el tenis, natación, básquet, gimnasia, patín, artes marciales, voley. Posee además una escuela de fútbol para los más pequeños.",
	      img: "assets/img/quilmes.png",
	      fundacion: "27 de noviembre de 1887",
	      apodo:"El Cervecero"
	    },
	    {
	      nombre: "Racing",
	      bio: "Racing Club, conocido como Racing Club de Avellaneda o simplemente Racing, es una entidad deportiva oriunda de Argentina, fundada el 25 de marzo de 1903, ubicada en la ciudad de Avellaneda, en el Gran Buenos Aires.14​ Si bien su principal actividad deportiva es el fútbol masculino profesional, que milita en la Primera División, también se practican otros deportes profesionales como fútbol femenino, básquet, futsal y hockey, mientras que tenis, boxeo, vóley, handball, judo, patín artístico, aikido, gimnasia artística, taekwondo, muay thai, sipalki-do, fútbol playa, atletismo, natación y saltos ornamentales son deportes amateur.",
	      img: "assets/img/racing.png",
	      fundacion: "25 de marzo de 1903",
	      apodo:"La Academia"
	    },
	    {
	      nombre: "River Plate",
	      bio: "El Club Atlético River Plate, más conocido simplemente como River Plate, es una entidad polideportiva con sede en Buenos Aires, Argentina.10​ El club fue fundado el 25 de mayo de 1901 en el barrio de La Boca, tras la fusión de los clubes Santa Rosa y La Rosales. Su nombre proviene de la antigua denominación que se le daba en inglés británico al Río de la Plata.11​12​ Su principal disciplina es el fútbol masculino profesional, que milita actualmente en la Primera División de Argentina. Además, en el club se practican otras 65 disciplinas distintas, posee institutos educativos en todos los niveles académicos y fomenta actividades culturales y sociales de diversa índole.",
	      img: "assets/img/river.png",
	      fundacion: "25 de mayo de 1901",
	      apodo:"El Millonario"
	    },
	    {
	      nombre: "San Lorenzo",
	      bio: "El Club Atlético San Lorenzo de Almagro, conocido popularmente como San Lorenzo de Almagro o simplemente San Lorenzo es un club social y deportivo de Argentina, fue fundado el 1 de abril de 1908. Su principal actividad es el futbol masculino.También se practica basquet natación, atletismo, hockey, rugby y vóley entre otras disciplinas deportivas. Es un club que se destaca por haber sido laureado en todos los deportes, teniendo en su haber campeones olímpicos como Delfo Cabrera. Está incorporado al sistema educativo con un jardín de infantes y un próximo colegio secundario.",
	      img: "assets/img/sanlorenzo.png",
	      fundacion: "1 de abril de 1908",
	      apodo:"El Cuervo"
	    },
	    {
	      nombre: "San Martin de San Juan",
	      bio: "El Club Atlético San Martín es un equipo de fútbol de San Juan, en la provincia de San Juan (Argentina) que actualmente milita en la Primera Nacional segunda división del fútbol argentino. Fue fundado el 27 de septiembre de 1907 y es conocido popularmente como El Verdinegro o El Santo. Es el equipo más ganador de campeonatos en el torneo local de la provincia de San Juan.",
	      img: "assets/img/sanmartin.png",
	      fundacion: "27 de septiembre de 1907",
	      apodo:"Santo Sanjuanino"
	    },
	    {
	      nombre: "Sarmiento",
	      bio: "El Club Atlético Sarmiento es una entidad deportiva de la ciudad de Junín, situada en el interior de la Provincia de Buenos Aires, en el centro-este de la República Argentina, fue fundado el 1 de abril de 1911 y actualmente milita en la Primera Nacional. El fútbol es su disciplina más destacada, aunque también compite en básquetbol, hockey sobre césped y otros deportes. En su etapa amateur compitió sólo en la Liga Deportiva del Oeste, pasando al profesionalismo al afiliarse a la Asociación del Fútbol Argentino en 1952. Desde entonces ha disputado los campeonatos oficiales, logrando un título de segunda división y tres de tercera, habiendo jugado siete campeonatos en primera división y más de 30 en segunda. El club no dejó de estar afiliado a la liga local, en la cual sigue participando con un equipo amateur siendo la entidad que más títulos logró, con 27 campeonatos incluyendo cuatro nocturnos y un interligas.",
	      img: "assets/img/sarmiento.png",
	      fundacion: "1 de abril de 1911",
	      apodo:"El Verde"
	    },
	    {
	      nombre: "Talleres",
	      bio: "El Club Atlético Talleres, conocido en el ámbito nacional como Talleres de Córdoba o simplemente Talleres; es una institución deportiva con sede en la ciudad de Córdoba, Argentina. Su principal actividad es el fútbol y también se practican el hockey, vóley, balonmano, patín artístico, karate, futsal y básquet en la institución. Fue fundado el 12 de octubre de 1913 y participa en la Primera División de Argentina.3​ Con orígenes relacionados con los ingleses que trabajaban en los talleres del ferrocarril, su fundador Tomás Lawson decidió tomar para sus colores los bastones verticales morado y blanco de su exclub inglés Blackburn Rovers, actualmente mudado al azul y blanco. Su primer nombre fue Atlético Talleres Central Córdoba,4​ que se cambió por el actual en 1917.",
	      img: "assets/img/talleres.png",
	      fundacion: "12 de octubre de 1913",
	      apodo:"El Matador"
	    },
	    {
	      nombre: "Tigre",
	      bio: "El Club Atlético Tigre es una entidad deportiva ubicada en Victoria, Provincia de Buenos Aires, Argentina. Su nombre proviene de la ciudad en la que fue fundado, Tigre, por José Dellagiovanna, el 3 de agosto de 1902. El equipo de fútbol, su principal actividad, Juega sus partidos de local en el Estadio José Dellagiovanna, ubicado en Victoria, Buenos Aires, que cuenta con una capacidad de 26.282 espectadores.3​ Actualmente milita en la Primera Nacional4​ segunda división del Fútbol argentino. En un hecho histórico en el fútbol de Argentina, disputará en simultáneo la Copa Libertadores de América 2020, certamen al cual accedió por ser campeón de la Copa de la Superliga 2019 (primer título oficial en su historia).",
	      img: "assets/img/tigre.png",
	      fundacion: "3 de agosto de 1902",
	      apodo:"El Matador de Victoria"
	    },
	    {
	      nombre: "Atletico de Túcuman",
	      bio: "El Club Atlético Tucumán, conocido popularmente como Atlético Tucumán, o simplemente Atlético, es un club deportivo argentino fundado en la capital de la provincia de Tucumán el 27 de septiembre de 1902. Tiene como actividad principal el fútbol donde juega en la Superliga Argentina desde el año 2016. Hace de local en el Estadio Monumental José Fierro, fundado el 21 de mayo de 1922 y ubicado en las calles 25 de Mayo, Chile, Laprida y Bolivia (en el Barrio Villa 9 de Julio) con capacidad para 35.200 espectadores. El club también tiene como actividades el Fútbol femenino, Futsal, Handball (Masculino y Femenino), Vóley (Masculino y Femenino) y el Básquet (Masculino y Femenino).",
	      img: "assets/img/tucuman.png",
	      fundacion: "27 de septiembre de 1902",
	      apodo:"El Decano"
	    },
	    {
	      nombre: "Union",
	      bio: "El Club Atlético Unión es una institución social y deportiva, de la ciudad de Santa Fe, Argentina, fundada el 15 de abril de 1907. Su disciplina principal es el fútbol masculino profesional, donde milita actualmente en la Primera División de Argentina. Por su ubicación física en la ciudad, en la intersección de Bv. Pellegrini y Av. López y Planes (importantes avenidas de la ciudad). Los colores del club son el rojo y el blanco a bastones verticales. En lo que respecta al fútbol profesional, el club se afilió a AFA en 1940 y en 1966 ganó por primera vez el ascenso a la Primera División. Jugó allí varios años, alternando con algunos períodos en segunda división.",
	      img: "assets/img/union.png",
	      fundacion: "15 de abril de 1907",
	      apodo:"El Tatengue"
	    },
	    {
	      nombre: "Velez Sarfield",
	      bio: "El Club Atlético Vélez Sarsfield es una entidad deportiva de Argentina con sede en el barrio de Liniers, Buenos Aires. Fue fundado el 1 de enero de 1910 y su principal actividad es el fútbol, cuyo primer equipo participa en la Superliga Argentina. Además de fútbol se destaca en vóley, baloncesto, hockey y futsal, entre otros deportes. En la institución se desarrollan diversas actividades sociales, culturales y recreativas. A través del Instituto Dr. Dalmacio Vélez Sarsfield, se incorpora al sistema de educación oficial, desde el nivel inicial hasta el nivel terciario.",
	      img: "assets/img/velez.png",
	      fundacion: "1 de enero de 1910",
	      apodo:"El Fortín"
	    }
	];

	constructor() {
		console.log('Servicio listo!');
	}

	getClubes():Club[] {
		return this.clubes;
	}

	getClub(idx:string) {
		return this.clubes[idx];
	}

	buscarClubes(termino:string) {
		let clubesArr:Club[] = [];
		termino = termino.toLowerCase();

		for(let club of this.clubes) {
			let nombre = club.nombre.toLowerCase();
			if(nombre.indexOf(termino) >= 0) {
				clubesArr.push(club);
			}
		}

		return clubesArr;
	}

}

export interface Club {
	nombre: string;
	bio: string;
	img: string;
	fundacion: string;
	apodo: string;
};
