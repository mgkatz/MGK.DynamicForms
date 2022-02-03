import { Injectable, Type } from "@angular/core";
import { TemplateRegistryServiceBase } from "./template-registry-service-base";

@Injectable({
  providedIn: 'root'
})
export class DynamicDisplayRegistryService extends TemplateRegistryServiceBase {

    constructor() {
        super();
    }

    public getDisplayTemplate(name: any): Type<any> {
        return this.getTemplate(name);
    }

}
