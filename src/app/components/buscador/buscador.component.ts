import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubesService } from '../../services/clubes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  clubes:any[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _clubesService:ClubesService) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		this.termino = params['termino'];
  		this.clubes = this._clubesService.buscarClubes(params['termino']);
  	});
  }

}
