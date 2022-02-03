import { DisplayMetadataModel } from "./display-metadata.model";
import { EditorMetadataModel } from "./editor-metadata.model";
import { ComponentTemplateWidth } from "./enums";

export interface ComponentMetadata {

    display?: DisplayMetadataModel;
    editor?: EditorMetadataModel;
    id: string;
    isEditable: boolean;
    label: string;
    pattern?: string;
    width: ComponentTemplateWidth;

}
