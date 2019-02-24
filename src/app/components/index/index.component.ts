import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from './Game';
import { GameService } from '../../game.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

    games: Game[];

    constructor(private gameservice: GameService,
      private route: ActivatedRoute,
                  private router: Router) { }


    deleteGame(id) {
      
      this.gameservice.deleteGame(id).subscribe(res => {
        alert('Data deleted');
        //location.reload();
        this.ngOnInit();
       });
      
      
    }


    ngOnInit() {
  	  this.gameservice
      .getGames()
      .subscribe((data: Game[]) => {
     	this.games = data;
    });
  }

}
