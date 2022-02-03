import { Component, OnInit } from '@angular/core';
import { editor } from '../../../decorators/editor-decorator';
import { ComponentTemplate } from '../../../models/enums';
import { DynamicEditorComponentBase } from '../dynamic-editor-component-base';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css','../dynamic-editor.style.css']
})

@editor({name: ComponentTemplate.email})
export class EmailEditorComponent extends DynamicEditorComponentBase implements OnInit {

    constructor() {
        super();
    }

}
