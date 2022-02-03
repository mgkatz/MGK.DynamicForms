import { CustomPropertyModel } from "./custom-properties.model";
import { ComponentTemplate } from "./enums";

export interface ControlMetadataModel {

    defaultValue?: any;
    componentType: ComponentTemplate;
    customProperties?: CustomPropertyModel[];

}
