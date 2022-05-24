import { Router } from '@angular/router';
import { SimulationService } from './../../core/service/api/simulation.service';
import { CharacterModel } from 'src/app/core/model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  headerText: string = "A tudás legyen veled"

  lightFighter!: CharacterModel;
  darkFighter!: CharacterModel;

  lightFighterHealth!: number;
  darkFighterHealth!: number;

  winnerNumber: number = 2;

  constructor(private simulationService: SimulationService,
              private router: Router) { }

  private delay = (ms: any) => new Promise(res => setTimeout(res, ms));

  ngOnInit(): void {
    if(this.simulationService.getSelectedFighters() != null && this.simulationService.getSelectedFighters().length > 0){
      this.lightFighter = this.simulationService.getSelectedFighters()[0];
      this.darkFighter = this.simulationService.getSelectedFighters()[1];
      this.simulateFight();
    }else{
      this.router.navigate(["/charSelect"]);
    }
  }

  async simulateFight(){
    this.lightFighterHealth = 100;
    this.darkFighterHealth = 100;

    await this.delay(2000);

    while(this.lightFighterHealth>0 && this.darkFighterHealth>0)
    {
      this.getRandomNumber() == 0 ? this.lightFighterHealth-- : this.darkFighterHealth--;
      await this.delay(50);
    }
    this.lightFighterHealth>0? this.getWinner(this.lightFighter,0) : this.getWinner(this.darkFighter,1);

 }

  getRandomNumber(): number{
    return Math.floor(Math.random() * 2);
  }

  getWinner(winner: CharacterModel, numb: number): void{
    this.headerText = "A csata nyertese";
    this.winnerNumber = numb;
  }

}
