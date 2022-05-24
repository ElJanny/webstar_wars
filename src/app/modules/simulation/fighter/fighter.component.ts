import { Router } from '@angular/router';
import { CharacterModel } from 'src/app/core/model';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FighterComponent implements OnInit {

  @Input() healthPoint!: number;
  @Input() fighter!: CharacterModel;
  @Input() side!: boolean;  // TRUE => bal FALSE => jobb
  @Input() isWinner!: boolean;

  name: string = ""
  sideText: string = "Sötét oldal";

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.fighter.side=="LIGHT") this.sideText = "Világos oldal";
    this.name = this.fighter.name.replace(/<br>/gi,' ');
  }

  backToCharacterSelect(){
    this.router.navigate(['/charSelect']);
  }

}
