import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider-button-group',
  templateUrl: './slider-button-group.component.html',
  styleUrls: ['./slider-button-group.component.scss']
})
export class SliderButtonGroupComponent implements OnInit {

  public active : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.toggle();
  }

  private toggle(){
    this.active = !this.active

    console.log(this.active)
  }

}
