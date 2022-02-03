export class ErrorExtensions {

    public static invalidForm: string = 'Some errors were detected. Please fix them before continuing.';
    public static metadataIncomplete: string = 'The metadata is incomplete. A component must have at a definition for displaying and/or editing.';

    public static componentAlreadyRegistered(name: string): string {
        return `Component '${name}' was already registered.`
    }

    public static componentWithoutMetadata(name: string): string {
        return `Component '${name}' is missing its metadata.`;
    }

    public static operationFailed(operation: string): string {
        return `There was an error when trying the operation: '${operation}'.`;
    }

    public static useOfUnsupportedType(typeName: string): string {
        return `Trying to use an unsupported type (${typeName}).`;
    }

}
