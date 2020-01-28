import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubesService } from '../../services/clubes.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent {

  club:any = {};

  constructor(private activatedRoute:ActivatedRoute, private _clubesService:ClubesService) { 
  	this.activatedRoute.params.subscribe(params => {
  		console.log(params['id']);
  		this.club = this._clubesService.getClub(params['id']);
  	})
  }

}
