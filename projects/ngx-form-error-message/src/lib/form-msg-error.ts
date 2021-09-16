import { InjectionToken } from "@angular/core";

export const defaultErrors = {
  min: (objMin:any) => `O valor mínimo é ${objMin.min} e o valor informado é ${objMin.actual}`,
  max: (objMax:any) => `O valor máximo é ${objMax.max} e o valor informado é ${objMax.actual}`,
  required: () => `Campo obrigatório`,
  maxCheckbox: (value:any) => `Selecione no máximo ${value} opções.`,
  email: () => `Informe um e-mail válido`,
  matDatepickerParse: (matDatepickerParse:any) => (matDatepickerParse.text == 0 ? 'Informe uma data válida' : `O valor ${matDatepickerParse.text} é inválido`),
  maxlength: (obj:any) => `A quantidade máxima de caracteres é ${obj.requiredLength} mas o campo possui ${obj.actualLength}`,
  minlength: (obj:any) => `A quantidade mínima de caracteres é ${obj.requiredLength} mas o campo possui ${obj.actualLength}`,
  pattern: (objPattern:any) => `O valor '${objPattern.actualValue}' não é compatível com o formato ${objPattern.requiredPattern}`,
  mustMatch: () => `Os valores não conferem`,
  fileSize: (objFilesize:any) => `O tamanho máximo permitido por arquivo é de ${objFilesize.limitSize}, o arquivo atual possui ${objFilesize.sizeFile}`,
  requiredFileType: (obj:any) => `Tipo de arquivo inválido, este campo aceita arquivos do tipo: ${obj.types}`,
  notMatch: () => `Os valores não devem ser iguais`,
  selectedCheckbox: (selectItens:number) => `Selecione ${selectItens} opções`
}

export const FORM_MSG_ERRORS = new InjectionToken('FORM_MSG_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});
