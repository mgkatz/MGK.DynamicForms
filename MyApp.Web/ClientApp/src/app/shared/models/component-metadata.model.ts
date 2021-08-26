import { ComponentTemplateWidth } from "../enums/component-template-width.enum";
import { DisplayMetadataModel } from "./display-metadata.model";
import { EditorMetadataModel } from "./editor-metadata.model";

export interface ComponentMetadata {

    display?: DisplayMetadataModel;
    editor?: EditorMetadataModel;
    id: string;
    isEditable: boolean;
    label: string;
    pattern?: string;
    width: ComponentTemplateWidth;

}
