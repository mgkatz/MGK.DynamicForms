import { Component, OnInit } from '@angular/core';
import { display } from '../../../decorators/display-decorator';
import { ComponentTemplate } from '../../../models/enums';
import { DynamicDisplayComponentBase } from '../dynamic-display-component-base';

@Component({
  selector: 'app-boolean-display',
  templateUrl: './boolean-display.component.html',
  styleUrls: ['./boolean-display.component.css']
})

@display({ name: ComponentTemplate.bool })
export class BooleanDisplayComponent extends DynamicDisplayComponentBase implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
