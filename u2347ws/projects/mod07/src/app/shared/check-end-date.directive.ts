import { formatDate } from '@angular/common';
import { Directive, Input } from '@angular/core';
import { AbstractControl, Form, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[CheckEndDate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckEndDateDirective,
      multi: true
    }
  ]
})
export class CheckEndDateDirective implements Validator{
  @Input("CheckEndDate") mustGT: string[] = [];

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let fg: FormGroup = <FormGroup> control;
    let startCtlName: string = this.mustGT[0],
        endCtlName: string = this.mustGT[1]
    
    const startCtl = fg.controls[startCtlName]
    const endCtl = fg.controls[endCtlName]
    if (!startCtl || !endCtl) {
      return null;
    }

    let startDate = Date.parse(startCtl.value);
    let endDate = Date.parse(endCtl.value);

    let result = null
    if (endDate <= startDate) {
      result = {
        "CheckEndDate": {
          actualValue: `起始日期: ${formatDate(startDate, 'yyyy/MM/dd', "en-US")}, 歸還日期: ${formatDate(endDate, 'yyyy/MM/dd', "en-US")}`,
          requiredValue: "歸還日期必須大於起始日期"
        }
      }
    }

    return result
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
