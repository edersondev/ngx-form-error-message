import { ValidatorFn, AbstractControl } from '@angular/forms';

export function requiredFileType(...type:string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const file = control.value;
    if ( file ) {
      const extension = file.split('.')[1].toLowerCase();
      const searchType = type.filter(tipo => tipo === extension);
      if(searchType.length == 0){
        return {requiredFileType: {types: type.join(', ')}};
      }
    }
    return null;
  };
}
