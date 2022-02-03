import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentMetadata } from '../../../shared/dynamicForms/models';
import { MetadataMockService } from '../../../shared/dynamicForms/services/metadata-mock.service';

@Component({
  selector: 'app-add-employee-mock',
  templateUrl: './add-employee-mock.component.html',
  styleUrls: ['./add-employee-mock.component.css']
})

export class AddEmployeeMockComponent  implements OnInit {

  public properties: ComponentMetadata[];
  public myForm: FormGroup;

  constructor(private metadataMockService: MetadataMockService) {
  }

  ngOnInit(): void {
    this.metadataMockService.getMetadaAddEmployee().subscribe(data => {
      this.properties = data;
      this.myForm = this.metadataMockService.toFormGroup(data);
    });
   }


  save() {
  }

}
