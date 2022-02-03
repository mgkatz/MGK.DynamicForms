import { Component, OnInit } from '@angular/core';
import { display } from '../../../decorators/display-decorator';
import { ComponentTemplate } from '../../../models/enums';
import { DynamicDisplayComponentBase } from '../dynamic-display-component-base';


@Component({
    selector: 'app-label-display',
    templateUrl: './label-display.component.html',
    styleUrls: ['./label-display.component.css']
})
@display({ name: ComponentTemplate.label })
export class LabelDisplayComponent extends DynamicDisplayComponentBase implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
