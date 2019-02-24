import { Component, OnInit } from '@angular/core';
import { Game } from '../index/Game';
import { GameService } from '../../game.service';



@Component({
  selector: 'app-findgame',
  templateUrl: './findgame.component.html',
  styleUrls: ['./findgame.component.css']
})
export class FindgameComponent implements OnInit {

  games: Game[];

  constructor(private gameservice: GameService) { }

  findGame(name) {
       this.gameservice.findNameGame(name).subscribe((data: Game[]) => {
          this.games = data;
        })
        this.ngOnInit();
     }


  ngOnInit() {
    this.gameservice
            .getGames()
            .subscribe((data: Game[]) => {
          this.games = data;
        });
}
}
