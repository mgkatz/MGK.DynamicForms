if(window['global'] === undefined)
{ 
    (window as any).global = window 
}

import { DynamicPage } from "../dynamic-page/dynamic-page.const";
import { TemplateConfig } from "../models/template-config.model";

export const reflect = (window as any).global['Reflect'];

export function display(config: { name: string }) {
    return (target: Object) => {
        const templateConfig: TemplateConfig = { name: config.name };
        reflect.defineMetadata(DynamicPage.templateName, templateConfig, target);
    };
}
