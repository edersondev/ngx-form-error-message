# NgxFormErrorMessage

Está biblioteca foi gerada com angular cli versão 12.2.6 e tem como objetivo controlar as mensagens de erro do formulário reativo do angular.

## Instalação

Abra o terminal e execute o seguinte comando dentro do seu projeto:

    npm i @edersondev/ngx-form-error-message --save

## Como usar
Dentro do seu arquivo de módulo faça a importação do módulo:

    import { NgxFormErrorMessageModule } from '@edersondev/ngx-form-error-message';
E adicione NgxFormErrorMessageModule na propriedade *imports*.

## Exemplo de uso
Dentro do componente instancie um formulário e adicione um campo com validação:

    form:FormGroup;
    constructor(private  _fb:FormBuilder) { }
    ngOnInit() {
	    this.form = this._fb.group({
		    nome:[null,[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
	    });
    }
E no html ficaria da seguinte forma:

    <form  [formGroup]="form">
    <mat-form-field>
	    <input  formControlName="nome"  matInput  placeholder="Nome completo">
	    <mat-error  [errorMessage]="form.get('nome')"></mat-error>
	</mat-form-field>
    </form>
A tag mat-error recebe a diretiva errorMessage que deve receber um formControl.
