import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DynamicDisplayDirective } from './components/displays/dynamic-display.directive';
import { DynamicEditorDirective } from './components/editors/dynamic-editor.directive';
import { BootstrapingDynamicDisplay } from './components/displays/bootstraping-dynamic-display.install';
import { BootstrapingDynamicEditor } from './components/editors/bootstraping-dynamic-editor.install';
import { DynamicDisplayRegistryService } from './services/dynamic-display-registry.service';
import { DynamicEditorRegistryService } from './services/dynamic-editor-registry.service';
import { DisplayComponents } from './components/displays/display-componets.index';
import { EditorComponents } from './components/editors/editor-componets.index';


@NgModule({
    declarations: [
        // Displays
        ...DisplayComponents,
        // Editors
        ...EditorComponents,
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
    ]

})

export class DynamicPageModule {

    constructor(dynamicDisplayRegistry: DynamicDisplayRegistryService,
                dynamicEditorRegistry: DynamicEditorRegistryService) {
        BootstrapingDynamicDisplay.Install(dynamicDisplayRegistry);
        BootstrapingDynamicEditor.Install(dynamicEditorRegistry);
    }

}
