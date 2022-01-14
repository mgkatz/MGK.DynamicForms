import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DynamicDisplayRegistryService } from '../displays/dynamic-display-registry.service';
import { StringDisplayComponent } from '../displays/string-display/string-display.component';
import { DynamicDisplayDirective } from '../displays/dynamic-display.directive';
import { BooleanDisplayComponent } from '../displays/boolean-display/boolean-display.component';
import { BootstrapingDynamicDisplay } from '../displays/bootstraping-dynamic-display.install';
import { CheckboxDisplayComponent } from '../displays/checkbox-display/checkbox-display.component';
import { DynamicEditorRegistryService } from '../editors/dynamic-editor-registry.service';
import { DynamicEditorDirective } from '../editors/dynamic-editor.directive';
import { StringEditorComponent } from '../editors/string-editor/string-editor.component';
import { BootstrapingDynamicEditor } from '../editors/bootstraping-dynamic-editor.install';
import { MetadataControlService } from '../services/metadata-control.service';
import { EmailEditorComponent } from '../editors/email-editor/email-editor.component';
import { PasswordEditorComponent } from '../editors/password-editor/password-editor.component';
import { DateEditorComponent } from '../editors/date-editor/date-editor.component';
import { LabelDisplayComponent } from '../displays/label-display/label-display.component';
import { BooleanEditorComponent } from '../editors/boolean-editor/boolean-editor.component';
import { CheckboxEditorComponent } from '../editors/checkbox-editor/checkbox-editor.component';
import { RadioEditorComponent } from '../editors/radio-editor/radio-editor.component';

@NgModule({
    declarations: [
        // Displays
        BooleanDisplayComponent,
        CheckboxDisplayComponent,
        LabelDisplayComponent,
        StringDisplayComponent,
        // Editors
        BooleanEditorComponent,
        CheckboxEditorComponent,
        DateEditorComponent,
        EmailEditorComponent,
        PasswordEditorComponent,
        StringEditorComponent,
        RadioEditorComponent,
        // Directives
        DynamicDisplayDirective,
        DynamicEditorDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        // Website: https://github.com/kekeh/angular-mydatepicker
        AngularMyDatePickerModule,
        // List of Icons: https://fontawesome.com/icons?d=gallery&p=7&s=brands,regular,solid&m=free
        FontAwesomeModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        DynamicDisplayDirective,
        DynamicEditorDirective
    ],
    providers: [
        DynamicDisplayRegistryService,
        DynamicEditorRegistryService,
        MetadataControlService
    ]
})

export class DynamicPageModule {

    constructor(dynamicDisplayRegistry: DynamicDisplayRegistryService, 
                dynamicEditorRegistry: DynamicEditorRegistryService) {      
        BootstrapingDynamicDisplay.Install(dynamicDisplayRegistry);
        BootstrapingDynamicEditor.Install(dynamicEditorRegistry);
    }

}
