import { Component, OnInit } from '@angular/core';
import { ClubesService, Club } from '../../services/clubes.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {

  clubes:Club[] = [];

  constructor( private _clubesService:ClubesService ) { }

  ngOnInit() {
  	this.clubes = this._clubesService.getClubes();
  }

}
