import { Component, OnInit } from '@angular/core';
import { editor } from '../../../decorators/editor-decorator';
import { ComponentTemplate } from '../../../models/enums';
import { DynamicEditorComponentBase } from '../dynamic-editor-component-base';

@Component({
  selector: 'app-string-editor',
  templateUrl: './string-editor.component.html',
  styleUrls: ['./string-editor.component.css','../dynamic-editor.style.css']
})

@editor({name: ComponentTemplate.string})
export class StringEditorComponent extends DynamicEditorComponentBase implements OnInit {

    constructor() {
        super();
    }

}
