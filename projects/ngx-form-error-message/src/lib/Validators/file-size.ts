import { ValidatorFn, AbstractControl } from '@angular/forms';

export function FileSize(size:number, files: File[]):ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let maxSizeByte:number = size * 1024 * 1024;
    for(let file of files) {
      if(file.size > maxSizeByte){
        return {fileSize: {fileName:file.name,limitSize:`${size} MB`,sizeFile:formatBytes(file.size)}};
      }
    }
    return null;
  };
}

function formatBytes(bytes:number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}