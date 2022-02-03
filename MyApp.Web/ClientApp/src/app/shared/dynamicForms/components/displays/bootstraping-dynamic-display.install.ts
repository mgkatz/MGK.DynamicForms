import { DynamicDisplayRegistryService } from "../../services/dynamic-display-registry.service";
import { BooleanDisplayComponent } from "./boolean-display/boolean-display.component";
import { CheckboxDisplayComponent } from "./checkbox-display/checkbox-display.component";
import { LabelDisplayComponent } from "./label-display/label-display.component";
import { StringDisplayComponent } from "./string-display/string-display.component";

export class BootstrapingDynamicDisplay {

    public static Install(registry: DynamicDisplayRegistryService) {

        registry.register(BooleanDisplayComponent);
        registry.register(CheckboxDisplayComponent);
        registry.register(LabelDisplayComponent);
        registry.register(StringDisplayComponent);

    }

}
