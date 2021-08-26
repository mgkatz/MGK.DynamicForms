import { TemplateConfig } from "./template-config.model";
import { Type } from '@angular/core';

export class TemplateRegistryItem {
    constructor(public component: Type<any>, public config: TemplateConfig) { }
}
