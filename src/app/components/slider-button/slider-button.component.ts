import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'slider-button',
    templateUrl: './slider-button.component.html',
    styleUrls: ['./slider-button.component.scss']
})
export class SliderButtonComponent implements OnInit {
    constructor(private router: Router) {}

    @Input('reversed') reversed = false
    @Input('redirect') redirect = ''

    //for unibet logo, dark background on hover
    @Input('dark') isDark = false

    ngOnInit(): void {}

    onClick(): void {
        if (this.redirect.length > 0) {
            const urlHttp = this.redirect.slice(0, 4)

            if (urlHttp == 'http') {
                window.location.href = this.redirect
            } else {
                this.router.navigate([this.redirect])
            }
        }
    }
}
