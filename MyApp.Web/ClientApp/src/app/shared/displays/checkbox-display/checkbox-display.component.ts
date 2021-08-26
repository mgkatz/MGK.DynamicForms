import { Component, OnInit } from '@angular/core';
import { display } from '../../decorators/display-decorator';
import { DynamicDisplayComponentBase } from '../dynamic-display-component-base';
import { ComponentTemplate } from '../../enums/component-template.enum';

@Component({
  selector: 'app-checkbox-display',
  templateUrl: './checkbox-display.component.html',
  styleUrls: ['./checkbox-display.component.css']
})
@display({ name: ComponentTemplate.checkbox })

export class CheckboxDisplayComponent extends DynamicDisplayComponentBase implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
