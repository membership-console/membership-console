import { AbstractControl, Validators } from "@angular/forms";

export const urlValidator = (formControl: AbstractControl): { invalid_url: boolean } | null => {
    const isInValid = Validators.pattern(
        /(http|https):\/\/(\w+:?\w*@)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%@\-/]))?/
    )(formControl);
    return isInValid ? { invalid_url: true } : null;
};
