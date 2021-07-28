import { NgAnalyzedFile } from '@angular/compiler';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ISliderReversable } from '../ISliderReversable';

@Component({
  selector: 'slider-button-container',
  templateUrl: './slider-button-container.component.html',
  styleUrls: ['./slider-button-container.component.scss']
})
export class SliderButtonContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren('sliderButton, sliderGroup') sliderButtons? : QueryList<ISliderReversable>;

  @Input('reversed') reversed: boolean = false;

  constructor() { }

  ngAfterContentInit(): void {
    if (this.reversed === true) {
      this.sliderButtons?.forEach( s => s.autoReversed = true);
    }
  }

  ngOnInit(): void {
    console.log(this.reversed);
  }

}
