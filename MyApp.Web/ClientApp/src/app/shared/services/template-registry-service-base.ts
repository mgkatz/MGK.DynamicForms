import { TemplateConfig } from "../models/template-config.model";
import { Type } from '@angular/core';
import { reflect } from "../decorators/display-decorator";
import { DynamicPage } from "../dynamic-page/dynamic-page.const";
import { TemplateRegistryItem } from "../models/template-registry-item.model";
import { ErrorMessages } from "../messages/error.messages";

export abstract class TemplateRegistryServiceBase {

    private templates: TemplateRegistryItem[] = [];
    private registeredComponents: Type<any>[] = [];

    constructor() { }

    public register(component: Type<any>, templateConfig?: TemplateConfig) {
        if (this.registeredComponents.indexOf(component) >= 0) {
            throw new Error(ErrorMessages.componentAlreadyRegistered(component.name));
        }

        if (!templateConfig) {
            templateConfig = reflect.getMetadata(DynamicPage.templateName, component);
            if (!templateConfig) {
                throw new Error(ErrorMessages.componentWithoutMetadata(component.name));
            }
        }

        this.templates.push(new TemplateRegistryItem(component, templateConfig));
        this.registeredComponents.push(component);
    }
    
    public getTemplate(name: any): Type<any> {
        const editor = this.templates.find((e) => e.config.name === name);
        return editor ? editor.component : null;
    }
   
}
