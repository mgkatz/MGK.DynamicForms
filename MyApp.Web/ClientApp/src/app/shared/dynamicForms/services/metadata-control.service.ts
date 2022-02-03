import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentMetadata } from '../models/component-metadata.model';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ComponentMetadataPage } from '../models/component-metadata-page.model';
import { SaveValues } from '../models/save-values.model';
import { MessageHandler } from './message-handler.service';
import { ErrorExtensions } from '../messages/error.messages';
import { InformationMessages } from '../messages/information.messages';
import { Observable } from 'rxjs/internal/Observable';
import { ComponentTemplate } from '../models/enums';

@Injectable({
  providedIn: 'root'
})
export class MetadataControlService {

    private dynamicPageController = 'DynamicPage';

    constructor(
        private httpClient: HttpClient,
        private messageHandler: MessageHandler) {}

    public fillControl(componentMetadataPage: ComponentMetadataPage) {
        this.getMetadata(componentMetadataPage.pageName())
            .subscribe((r: ComponentMetadata[]) => {
                componentMetadataPage.properties = r;
                componentMetadataPage.myForm = this.toFormGroup(componentMetadataPage.properties);
        });
    }

    public saveControl(componentMetadataPage: ComponentMetadataPage) {
        const json = JSON.stringify(componentMetadataPage.myForm.value);
        const saveValues = new SaveValues(json);

        this.httpClient.post(environment.apiurl + `/${this.dynamicPageController}/save/${componentMetadataPage.pageName()}`, saveValues)
            .subscribe((r: ComponentMetadata[]) => {
                this.messageHandler.notifySuccess(InformationMessages.operationSucceed(componentMetadataPage.pageOperation()));
            }, error => this.messageHandler.notifyError(error, ErrorExtensions.operationFailed(componentMetadataPage.pageOperation())));
    }

    private getMetadata(pageName: string): Observable<ComponentMetadata[]> {
        return this.httpClient.get<ComponentMetadata[]>(
            environment.apiurl + `/${this.dynamicPageController}/metadata/${pageName}`);
    }

    private toFormGroup(
        metadataValues: ComponentMetadata[]): FormGroup {

        const formGroup = {};
        metadataValues.forEach((metadataValue) => {

            let initialValue: any;
            let control = null;
            const validators = [];

            if (!metadataValue.display && !metadataValue.editor) {
                throw new Error(ErrorExtensions.metadataIncomplete);
            }

            if (metadataValue.editor) {
                if (metadataValue.editor.isRequired) {
                    validators.push(Validators.required);
                }

                if (metadataValue.editor.minLength) {
                    validators.push(Validators.minLength(metadataValue.editor.minLength));
                }

                if (metadataValue.editor.maxLength) {
                    validators.push(Validators.maxLength(metadataValue.editor.maxLength));
                }

                if (metadataValue.editor.isEmail) {
                    validators.push(Validators.email);
                }

                initialValue = this.getValueForControl(metadataValue);
            }

            if (metadataValue.pattern) {
                validators.push(Validators.pattern(metadataValue.pattern));
            }

            const isDisabled = !metadataValue.isEditable;

            control = new FormControl({ value: initialValue, disabled: isDisabled }, validators);

            formGroup[metadataValue.id] = control;
        });

        return new FormGroup(formGroup);
    }

    private getValueForControl(metadataValue: ComponentMetadata) {
        switch (metadataValue.editor.componentType) {
            case ComponentTemplate.bool:
            case ComponentTemplate.checkbox:
                return false;

            case ComponentTemplate.date:
                return new Date();

            default:
                return "";
        }
    }

}
