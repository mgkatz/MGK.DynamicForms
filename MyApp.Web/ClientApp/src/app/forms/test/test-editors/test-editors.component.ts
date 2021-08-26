import { Component, Injector, OnInit } from '@angular/core';
import { MetadataControlService } from 'src/app/shared/services/metadata-control.service';
import { ComponentMetadataPage } from '../../../shared/models/component-metadata-page.model';

@Component({
  selector: 'app-test-editors',
  templateUrl: './test-editors.component.html',
  styleUrls: ['./test-editors.component.css']
})
export class TestEditorsComponent extends ComponentMetadataPage implements OnInit {

  constructor(
    inject: Injector,
    private metadataFormControlService: MetadataControlService
    ) {
      super(inject);
      this.metadataFormControlService.fillControl(this);
  }

  ngOnInit(): void { }

  pageName(): string {
    return 'TestEditors';
  }

  pageOperation(): string {
    return 'Testing Editors';
  }

}
