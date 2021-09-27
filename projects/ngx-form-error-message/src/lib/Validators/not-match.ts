import { ValidatorFn, AbstractControl } from '@angular/forms';
export function NotMatch(fieldToNotMatch:string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const fieldMatch = (control.parent != undefined ? control.parent.get(fieldToNotMatch) : null);
    if(fieldMatch != null && fieldMatch.dirty && control.value === fieldMatch.value){
      return { notMatch: true };
    }
    return null;
  };
}