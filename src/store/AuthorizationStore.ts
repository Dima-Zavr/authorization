import { makeAutoObservable } from "mobx";

import { api } from "@api/api.ts";

class AuthorizationStore {
    public number: string = "";
    public numberError: string | null = null;
    public otpCode: number | null = null;
    public otpCodeError: string | null = null;
    public isEnteredPhone: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    public setNumber(number: string) {
        this.number = this.formatPhoneNumber(number);
    }

    public setOtpCode(otpCode: number) {
        this.otpCode = otpCode;
    }

    public sendRequest = () => {
        const clearNumber = this.number.replace(/\D/g, "");
        if (!this.isEnteredPhone) {
            if (clearNumber.length === 11) {
                api.post("/auth/otp", { number: this.number }).then((response) => {
                    console.log(response);
                });
                this.numberError = null;
                this.isEnteredPhone = true;
            } else {
                this.numberError = "Поле является обязательным";
            }
        } else {
            api.post("/users/signin", { number: this.number, otp: this.otpCode }).then((response) => {
                console.log(response);
            });
            this.isEnteredPhone = true;
        }
    }

    private formatPhoneNumber(value: string): string {
        let digits = value.replace(/\D/g, "");

        if (digits.startsWith("7") || digits.startsWith("8")) {
            digits = digits.slice(1);
        }

        digits = digits.slice(0, 10);

        let formatted = "+7";

        if (digits.length > 0) formatted += " " + digits.slice(0, 3);
        if (digits.length >= 4) formatted += " " + digits.slice(3, 6);
        if (digits.length >= 7) formatted += " " + digits.slice(6, 8);
        if (digits.length >= 9) formatted += " " + digits.slice(8, 10);

        return formatted;
    }
}

export const authorizationStore = new AuthorizationStore();
