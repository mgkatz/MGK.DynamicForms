import { Component, OnInit } from '@angular/core';
import { editor } from '../../../decorators/editor-decorator';
import { ComponentTemplate } from '../../../models/enums';
import { DynamicEditorComponentBase } from '../dynamic-editor-component-base';

@Component({
  selector: 'app-password-editor',
  templateUrl: './password-editor.component.html',
  styleUrls: ['./password-editor.component.css','../dynamic-editor.style.css']
})

@editor({name: ComponentTemplate.password})
export class PasswordEditorComponent extends DynamicEditorComponentBase implements OnInit {

    constructor() {
        super();
    }

}
