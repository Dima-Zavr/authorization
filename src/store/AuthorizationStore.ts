import { makeAutoObservable } from "mobx";

import { api } from "@api/api.ts";

class AuthorizationStore {
    public phone: string = "";
    public phoneError: string | null = null;
    public otpCode: string | null = null;
    public otpError: string | null = null;
    public isEnteredPhone: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    public setNumber(number: string) {
        this.phone = this.formatPhoneNumber(number);
    }

    public setOtpCode(otpCode: string) {
        this.otpCode = otpCode.replace(/\D/g, "");
    }

    public apiReceiveOtpCode(clearNumber: string) {
        if (clearNumber.length < 11) {
            this.phoneError = "Поле является обязательным";
            return;
        } else {
            this.phoneError = null;
        }

        api.post("/auth/otp", { phone: clearNumber }).then((response) => {
            if(response.data.success){
                this.isEnteredPhone = true;
            }
        });
    }

    public apiSignIn(clearNumber: string) {
        if (this.validateInputs(clearNumber)) return;

        api.post("/users/signin", { phone: clearNumber, code: this.otpCode }).then((response) => {
            if(response.data.success){
                localStorage.setItem("token", response.data.token);
            }
        });
    }

    private validateInputs(clearNumber: string) {
        this.phoneError = clearNumber.length < 11 ? "Поле является обязательным" : null;
        this.otpError = this.otpCode?.length !== 6 ? "Код должен содержать 6 цифр" : null;

        return this.phoneError || this.otpError;
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
