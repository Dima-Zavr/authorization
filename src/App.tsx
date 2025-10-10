import { observer } from "mobx-react";

import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";

import { PageLayout } from "./components/PageLayout/PageLayout";
import { authorizationStore } from "./store/AuthorizationStore";

export const App = observer(() => {
    const { number, numberError, otpCode, otpCodeError, isEnteredPhone } = authorizationStore;
    return (
        <PageLayout>
            <h2>Вход</h2>
            <p>
                Введите {isEnteredPhone ? "проверочный код" : "номер телефона"} для входа
                <br /> в личный кабинет
            </p>
            <Input
                type="text"
                placeholder="Телефон"
                value={number}
                error={numberError}
                onChange={(value) => authorizationStore.setNumber(value)}
            />
            {isEnteredPhone && (
                <Input
                    type="number"
                    placeholder="Проверочный код"
                    value={String(otpCode)}
                    error={otpCodeError}
                    onChange={(value) => authorizationStore.setOtpCode(Number(value))}
                />
            )}
            <Button onClick={authorizationStore.sendRequest}>{isEnteredPhone ? "Войти" : "Продолжить"}</Button>
        </PageLayout>
    );
})