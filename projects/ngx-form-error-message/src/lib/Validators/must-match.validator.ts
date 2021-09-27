import { AbstractControl, ValidatorFn } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(fieldToMatch:string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const fieldMatch = control.root.get(fieldToMatch);
    if(fieldMatch != null && control.value !== fieldMatch.value){
      return { mustMatch: true };
    }
    return null;
  };
}
