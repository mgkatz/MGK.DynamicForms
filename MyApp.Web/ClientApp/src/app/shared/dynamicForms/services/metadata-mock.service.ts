import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { ErrorExtensions } from '../messages/error.messages';
import { ComponentMetadata } from '../models';
import { ComponentTemplate } from '../models/enums';

@Injectable({
  providedIn: 'root'
})
export class MetadataMockService {

  apiurlMock = "http://localhost:3000/"

  constructor(private httpClient: HttpClient) { }

  getMetadaAddEmployee(): Observable<ComponentMetadata[]> {
      return this.httpClient.get<ComponentMetadata[]>(this.apiurlMock + `AddEmployee`);
  }


  toFormGroup(metadataValues: ComponentMetadata[]): FormGroup {

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
