import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function maxTwoDecimalsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const rawValue = control.value;

    if (rawValue == null || rawValue === '') {
      return { required: true };
    }

    const parsed = Number(rawValue);
    if (isNaN(parsed)) {
      return { invalidNumber: true };
    }

    if (parsed < 1) {
      return { min: true };
    }

    const regex = /^\d+(\.\d{1,2})?$/;
    if (!regex.test(rawValue.toString())) {
      return { maxTwoDecimals: true };
    }

    return null;
  };
}
