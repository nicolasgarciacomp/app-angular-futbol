import { Injectable } from '@angular/core';

@Injectable()
export class ClubesService {

	private clubes:Club[] = [
	    {
	      nombre: "Aldosivi",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/aldosivi.png",
	      fundacion: "1941-11-01",
	      apodo:"El Tiburón"
	    },
	    {
	      nombre: "All Boys",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/allboys.png",
	      fundacion: "1939-05-01",
	      apodo:"El Albo"
	    },
	    {
	      nombre: "Aldosivi",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/aldosivi.png",
	      fundacion: "1941-11-01",
	      apodo:"El Tiburón"
	    },
	    {
	      nombre: "Almagro",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/almagro.png",
	      fundacion: "1939-05-01",
	      apodo:"El Tricolor"
	    },
	    {
	      nombre: "Argentinos Juniors",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/argentinos.png",
	      fundacion: "1941-11-01",
	      apodo:"El Bicho"
	    },
	    {
	      nombre: "Arsenal",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/arsenal.png",
	      fundacion: "1939-05-01",
	      apodo:"El Arse"
	    },
	    {
	      nombre: "Banfield",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/banfield.png",
	      fundacion: "1941-11-01",
	      apodo:"El Taladro"
	    },
	    {
	      nombre: "Belgrano",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/belgrano.png",
	      fundacion: "1939-05-01",
	      apodo:"El Pirata"
	    },
	    {
	      nombre: "Boca Juniors",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/boca.png",
	      fundacion: "1941-11-01",
	      apodo:"El Xeneize"
	    },
	    {
	      nombre: "Rosario Central",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/central.png",
	      fundacion: "1939-05-01",
	      apodo:"El Canalla"
	    },
	    {
	      nombre: "Chacarita Juniors",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/chacarita.png",
	      fundacion: "1941-11-01",
	      apodo:"El Funebrero"
	    },
	    {
	      nombre: "Colón",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/colon.png",
	      fundacion: "1939-05-01",
	      apodo:"El Sabalero"
	    },
	    {
	      nombre: "Crucero del Norte",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/crucero.jpg",
	      fundacion: "1941-11-01",
	      apodo:"El Colectivero"
	    },
	    {
	      nombre: "Defensa y Justicia",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/defensa.png",
	      fundacion: "1939-05-01",
	      apodo:"El Halcón"
	    },
	    {
	      nombre: "Gimnasia de la Plata",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/gimnasia.png",
	      fundacion: "1941-11-01",
	      apodo:"El Lobo"
	    },
	    {
	      nombre: "Godoy Cruz",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/godoy.png",
	      fundacion: "1939-05-01",
	      apodo:"El Tomba"
	    },
	    {
	      nombre: "Godoy Cruz",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/godoy.png",
	      fundacion: "1939-05-01",
	      apodo:"El Tomba"
	    },
	    {
	      nombre: "Huracan",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/huracan.png",
	      fundacion: "1939-05-01",
	      apodo:"El Globo"
	    },
	    {
	      nombre: "Independiente",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/independiente.png",
	      fundacion: "1939-05-01",
	      apodo:"El Rojo"
	    },
	    {
	      nombre: "Lanus",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/lanus.png",
	      fundacion: "1939-05-01",
	      apodo:"El Granate"
	    },
	    {
	      nombre: "NOB",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/nob.png",
	      fundacion: "1939-05-01",
	      apodo:"La Lepra"
	    },
	    {
	      nombre: "Olimpo",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/olimpo.png",
	      fundacion: "1939-05-01",
	      apodo:"El Aurinegro"
	    },
	    {
	      nombre: "Godoy Cruz",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/godoy.png",
	      fundacion: "1939-05-01",
	      apodo:"El Tomba"
	    },
	    {
	      nombre: "Patronato",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/patronato.png",
	      fundacion: "1939-05-01",
	      apodo:"El Patrón"
	    },
	    {
	      nombre: "Quilmes",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/quilmes.png",
	      fundacion: "1939-05-01",
	      apodo:"El Cervecero"
	    },
	    {
	      nombre: "Racing",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/racing.png",
	      fundacion: "1939-05-01",
	      apodo:"La Academia"
	    },
	    {
	      nombre: "River Plate",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/river.png",
	      fundacion: "1939-05-01",
	      apodo:"El Millonario"
	    },
	    {
	      nombre: "San Lorenzo",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/sanlorenzo.png",
	      fundacion: "1939-05-01",
	      apodo:"El Cuervo"
	    },
	    {
	      nombre: "San Martin de San Juan",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/sanmartin.png",
	      fundacion: "1939-05-01",
	      apodo:"Santo Sanjuanino"
	    },
	    {
	      nombre: "Sarmiento",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/sarmiento.png",
	      fundacion: "1939-05-01",
	      apodo:"El Verde"
	    },
	    {
	      nombre: "Talleres",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/talleres.png",
	      fundacion: "1939-05-01",
	      apodo:"El Matador"
	    },
	    {
	      nombre: "Tigre",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/tigre.png",
	      fundacion: "1939-05-01",
	      apodo:"El Matador de Victoria"
	    },
	    {
	      nombre: "Atletico de Túcuman",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/tucuman.png",
	      fundacion: "1939-05-01",
	      apodo:"El Decano"
	    },
	    {
	      nombre: "Union",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/union.png",
	      fundacion: "1939-05-01",
	      apodo:"El Tatengue"
	    },
	    {
	      nombre: "Velez Sarfield",
	      bio: "Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia Aca va la Bibliografia.",
	      img: "assets/img/velez.png",
	      fundacion: "1939-05-01",
	      apodo:"El Fortín"
	    }
	];

	constructor() {
		console.log('Servicio listo!');
	}

	getClubes():Club[] {
		return this.clubes;
	}

}

export interface Club {
	nombre: string;
	bio: string;
	img: string;
	fundacion: string;
	apodo: string;
};
