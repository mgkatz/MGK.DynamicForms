import { BooleanEditorComponent } from "./boolean-editor/boolean-editor.component";
import { CheckboxEditorComponent } from "./checkbox-editor/checkbox-editor.component";
import { DateEditorComponent } from "./date-editor/date-editor.component";
import { DynamicEditorRegistryService } from "./dynamic-editor-registry.service";
import { EmailEditorComponent } from "./email-editor/email-editor.component";
import { PasswordEditorComponent } from "./password-editor/password-editor.component";
import { RadioEditorComponent } from "./radio-editor/radio-editor.component";
import { StringEditorComponent } from "./string-editor/string-editor.component";

export class BootstrapingDynamicEditor {
    
    public static Install(registry: DynamicEditorRegistryService) {
        
        registry.register(BooleanEditorComponent);
        registry.register(CheckboxEditorComponent);
        registry.register(DateEditorComponent);
        registry.register(EmailEditorComponent);
        registry.register(PasswordEditorComponent);
        registry.register(RadioEditorComponent);
        registry.register(StringEditorComponent);
        
    }
}
