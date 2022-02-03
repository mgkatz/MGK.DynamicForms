import { Component, Injector, OnInit } from '@angular/core';
import { ComponentMetadataPage } from '../../../shared/dynamicForms/models';
import { MetadataControlService } from '../../../shared/dynamicForms/services/metadata-control.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent extends ComponentMetadataPage implements OnInit {

  constructor(inject: Injector,private metadataFormControlService: MetadataControlService
    ) {
      super(inject);
      this.metadataFormControlService.fillControl(this);
  }

  ngOnInit(): void { }

  pageName(): string {
    return 'AddEmployee';
  }

  pageOperation(): string {
    return 'Add New Employee';
  }

  save() {
    this.validateForm();
    this.metadataFormControlService.saveControl(this);
  }

}
