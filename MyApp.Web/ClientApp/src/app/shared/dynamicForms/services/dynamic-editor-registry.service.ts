import { Injectable, Type } from "@angular/core";
import { TemplateRegistryServiceBase } from "../services/template-registry-service-base";

@Injectable({
  providedIn: 'root'
})
export class DynamicEditorRegistryService extends TemplateRegistryServiceBase {

    constructor() {
        super();
    }

    public getEditorTemplate(name: any): Type<any> {
        return this.getTemplate(name);
    }

}
