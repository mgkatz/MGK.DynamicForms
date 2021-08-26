import { ComponentTemplate } from "../enums/component-template.enum";
import { CustomPropertyModel } from "./custom-properties.model";

export interface ControlMetadataModel {

    defaultValue?: any;
    componentType: ComponentTemplate;
    customProperties?: CustomPropertyModel[];

}