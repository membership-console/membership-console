import { AbstractControl, Validators } from "@angular/forms";

export const whiteSpaceValidator = (formControl: AbstractControl) => {
    const isInValid = Validators.pattern(/[\S]+/)(formControl);
    return isInValid ? { empty: true } : null;
};
