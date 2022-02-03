import { Component, OnInit } from '@angular/core';
import { display } from '../../../decorators/display-decorator';
import { ComponentTemplate } from '../../../models/enums';
import { DynamicDisplayComponentBase } from '../dynamic-display-component-base';

@Component({
    selector: 'app-string-display',
    templateUrl: './string-display.component.html',
    styleUrls: ['./string-display.component.css']
})

@display({ name: ComponentTemplate.string })
export class StringDisplayComponent extends DynamicDisplayComponentBase implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
