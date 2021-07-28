import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, Subject } from 'rxjs';
import { ISliderReversable } from '../ISliderReversable';

@Component({
    selector: 'slider-button',
    templateUrl: './slider-button.component.html',
    styleUrls: ['./slider-button.component.scss']
})
export class SliderButtonComponent implements OnInit,AfterViewInit, ISliderReversable {
    constructor(
        private router: Router,
        private cdRef : ChangeDetectorRef
    ) {}
    
     //This property can be set, it disables reversed property inheritation
    @Input('reversed') reversed?: boolean;

    //partent component should set autoReversed
    public autoReversed: boolean = false;

    ngAfterViewInit(): void {
        if (this.reversed === undefined) {
            this.reversed = this.autoReversed;
        }
        this.cdRef.detectChanges();
    }

    //The link user should be redirected to
    @Input('redirect') redirect = ''

    //for unibet logo, dark background on hover
    @Input('dark') isDark = false

    ngOnInit(): void {
      
    }

    onClick(): void {
        console.log(this.reversed!);
        // if (this.redirect.length > 0) {
        //     const urlHttp = this.redirect.slice(0, 4)

        //     if (urlHttp == 'http') {
        //         window.location.href = this.redirect
        //     } else {
        //         this.router.navigate([this.redirect])
        //     }
        // }
    }
  
}
