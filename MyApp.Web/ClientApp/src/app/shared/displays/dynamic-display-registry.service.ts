import { Injectable, Type } from "@angular/core";
import { TemplateRegistryServiceBase } from "../services/template-registry-service-base";

@Injectable()
export class DynamicDisplayRegistryService extends TemplateRegistryServiceBase {

    constructor() {
        super();
    }

    public getDisplayTemplate(name: any): Type<any> {
        return this.getTemplate(name);
    }

}
