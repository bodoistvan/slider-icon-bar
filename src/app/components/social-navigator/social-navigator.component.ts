import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'social-navigator',
    templateUrl: './social-navigator.component.html',
    styleUrls: ['./social-navigator.component.scss']
})
export class SocialNavigatorComponent implements OnInit {
    constructor() {}
    @Input('reversed') reversed: boolean = false;

    ngOnInit(): void {}
}
