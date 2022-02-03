import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageHandler {

    constructor(private toastr: ToastrService) { }

    public notifyError(errorObj: any, message: string): void {
      this.toastr.error(message, null, { disableTimeOut: true });

      if (errorObj) {
        console.log(errorObj);
      }
      else {
        console.log(message);
      }
    }

    public notifySuccess(message: string): void {
      this.toastr.success(message);
      console.log(message);
    }

    public notifyWarning(message: string): void {
      this.toastr.warning(message);
      console.log(message);
    }

}
