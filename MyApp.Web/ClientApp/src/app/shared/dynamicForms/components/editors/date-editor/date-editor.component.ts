import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DynamicEditorComponentBase } from '../dynamic-editor-component-base';
import { AngularMyDatePickerDirective, IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { faCalendar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ComponentTemplate } from '../../../models/enums';
import { editor } from '../../../decorators/editor-decorator';

@Component({
  selector: 'app-date-editor',
  templateUrl: './date-editor.component.html',
  styleUrls: ['./date-editor.component.css','../dynamic-editor.style.css']
})

@editor({name: ComponentTemplate.date})
export class DateEditorComponent extends DynamicEditorComponentBase implements OnInit {

  @ViewChild('dp') myDp: AngularMyDatePickerDirective;

  dateEditorOptions: IAngularMyDpOptions;

  icons = {
    calendarIcon: faCalendar,
    closeIcon: faTimes
  };

  // TODO: this should be taken from whatever is used to manage localization in the application. And this should affect on the format of the date any static text like the footer text.
  locale: string = "en";

  constructor(
    private cdr: ChangeDetectorRef
    ) {
      super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.setOptions();
    this.setTodayDate();
  }

  clearDate(): void {
    this.myDp.clearDate();
  }

  getMyDateModel(date: Date): IMyDateModel {
    return {
      isRange: false,
      singleDate: {
        jsDate: date
      },
      dateRange: null};
  }

  setOptions() {
    // TODO: there are a lot of options, most of them can be part of the metadata.
    // TODO: Here is the complete list: https://github.com/kekeh/angular-mydatepicker.
    if (!this.hasValue(this.metadata.editor.placeholder)) {
      this.metadata.editor.placeholder = "mm/dd/yyyy";
    }

    this.dateEditorOptions = {
      dateFormat: this.metadata.editor.placeholder,
      dateRange: false,
      firstDayOfWeek: "su",
      showFooterToday: true,
      todayTxt: "Today is"
    };
  }

  setTodayDate(): void {
    let date: Date = new Date();
    this.form.controls[this.metadata.id].setValue(this.getMyDateModel(date));
  }

  toggleCalendar(): void {
    this.cdr.detectChanges();
    this.myDp.toggleCalendar();
  }

}
