import { ControlMetadataModel } from "./control-metadata.model";

export interface EditorMetadataModel extends ControlMetadataModel {

    isEmail: boolean;
    isRequired: boolean;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    validator?: string;

}
