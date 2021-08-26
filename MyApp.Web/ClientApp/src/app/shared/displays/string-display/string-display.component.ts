import { Component, OnInit } from '@angular/core';
import { display } from '../../decorators/display-decorator';
import { DynamicDisplayComponentBase } from '../dynamic-display-component-base';
import { ComponentTemplate } from '../../enums/component-template.enum';

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
