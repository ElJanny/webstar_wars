import { CharacterModel } from './../../../core/model/character.model';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input, AfterViewInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Swiper, Virtual, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from "swiper/angular";



SwiperCore.use([Virtual, Pagination]);

@Component({
  selector: 'app-character-sweep',
  templateUrl: './character-sweep.component.html',
  styleUrls: ['./character-sweep.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterSweepComponent implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @Input() characters!: CharacterModel[];
  @Output() selectCharacter = new EventEmitter<number>();

  selectedIndex: number = 0;

  config: SwiperOptions = {
    pagination: {
      el: '.pagination',
			clickable: true,
      bulletActiveClass: 'bullet-active',
      renderBullet: function (index, className) {
        return `<span class="`+className+` bullet"> </span>`;
      },
    },
    scrollbar: { draggable: true },
  };

  constructor(){}

  ngOnInit(): void {
    this.selectedIndex=0;
  }

  slideNext(){
    this.swiper!.swiperRef.slideNext(100);
  }

  slidePrev(){
    this.swiper!.swiperRef.slidePrev(100);
  }

  onSlideChange(event: any): void{
    this.selectCharacter.emit(event[0]['activeIndex']);
  }
}
