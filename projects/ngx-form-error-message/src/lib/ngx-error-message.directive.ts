import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FORM_MSG_ERRORS } from './form-msg-error';
import { Directive, Inject, ElementRef, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[errorMessage]'
})
export class NgxErrorMessageDirective {

  @Input('errorMessage') formControl:FormControl | undefined;
  @Input() customMessage:any = {};
  private destroy$ = new Subject();

  constructor(
    @Inject(FORM_MSG_ERRORS) private errors:any,
    private _elementRef: ElementRef
  ) {
    this._elementRef.nativeElement.textContent = '';
  }

  ngOnInit() {
    if(this.formControl instanceof FormControl){
      this._elementRef.nativeElement.textContent = this.setTextError();
      this.formControl.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(response => {
          this._elementRef.nativeElement.textContent = this.setTextError();
      });
    } else {
      throw Error(`You need to pass a FormControl.Example:\n
      <div [errorMessage]="form.get('input')"></div>\n`);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setTextError(): string {
    const objErrors = (this.formControl != undefined ? this.formControl.errors : null);
    if(objErrors != null){
      const key = Object.keys(objErrors).length - 1;
      const firstElement = Object.keys(objErrors)[key];
      const getError = this.errors[firstElement];
      if(this.customMessage != undefined && this.customMessage[firstElement]){
        return this.customMessage[firstElement];
      }
      return getError(objErrors[firstElement]);
    }
    return '';
  }

}
