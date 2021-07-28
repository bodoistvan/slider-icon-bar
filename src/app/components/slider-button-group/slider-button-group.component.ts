import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { ISliderReversable } from '../ISliderReversable';

@Component({
  selector: 'slider-button-group',
  templateUrl: './slider-button-group.component.html',
  styleUrls: ['./slider-button-group.component.scss']
})
export class SliderButtonGroupComponent implements OnInit, ISliderReversable, AfterViewInit, AfterViewInit {

  @ContentChildren('sliderButton, sliderGroup') 
  sliderButtons? : QueryList<ISliderReversable>;
  @Input('reversed') 

  reversed? : boolean ;

  public autoReversed: boolean = false;

  public active : boolean = false;

  constructor(
    private cdRef : ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    if (this.reversed === undefined){
      this.reversed = this.autoReversed;
    }
    this.cdRef.detectChanges();

    if (this.reversed === true) {
      this.sliderButtons?.forEach( s => s.autoReversed = true);
    }
  }

  ngOnInit(): void {
    
  }

  onClick() {
    this.toggle();
  }

  private toggle(){
    this.active = !this.active
  }

}
