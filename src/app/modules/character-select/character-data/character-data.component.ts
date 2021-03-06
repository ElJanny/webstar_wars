import { CharacterModel } from 'src/app/core/model';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-character-data',
  templateUrl: './character-data.component.html',
  styleUrls: ['./character-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDataComponent implements OnInit {

  @Output() selectChar = new EventEmitter<CharacterModel>();

  @Input() character!: CharacterModel
  @Input() alreadySelected!: boolean;
  constructor() { }



  ngOnInit(): void {
  }

  selectCharacter(): void{
    this.selectChar.emit(this.character);
  }

}
