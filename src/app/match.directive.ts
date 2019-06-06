import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';
import { MatchValidator } from './match.validator';

@Directive({
  selector: '[appMatch]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MatchDirective, multi: true },
  ],
})
export class MatchDirective {
  @Input('appMatch') mustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
    //console.log(this.mustMatch)
    return MatchValidator(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }
}
