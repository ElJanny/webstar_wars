import { Router } from '@angular/router';
import { CharacterService } from './../../core/service/api/character.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterModel } from 'src/app/core/model';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.scss']
})
export class CharacterSelectComponent implements OnInit, OnDestroy {

  subscription?: Subscription;

  characters?: CharacterModel[];
  selectedCharacter?: CharacterModel;

  selectedLight!: CharacterModel;
  selectedDark!:  CharacterModel;

  alreadySelected: boolean = false;

  constructor(private characterService: CharacterService,
              private router: Router) { }


  ngOnInit(): void {
    this.subscription = this.characterService.getAllCharacter()
      .subscribe(
          (data)=>{this.characters = data.characters},
          (error)=>{
            if(error.status == 500) this.router.navigate(["/auth"]);
          },
          ()=>{this.selectedCharacter = this.characters![0];});
  }

  selectChar(index: number): void{
    this.selectedCharacter = this.characters![index];
    this.alreadySelected = this.selectedLight == this.selectedCharacter || this.selectedDark == this.selectedCharacter;
  }

  selectSide(character: CharacterModel): void{
    character.side == "DARK"? this.selectedDark = character : this.selectedLight = character;
    this.alreadySelected = this.selectedLight == this.selectedCharacter || this.selectedDark == this.selectedCharacter;
  }

  startBattle(){

  }

  ngOnDestroy(): void {
    if(this.subscription !== null)
      this.subscription?.unsubscribe();
  }
}
