import { observer } from "mobx-react";

import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";

import { PageLayout } from "./components/PageLayout/PageLayout";
import { authorizationStore } from "./store/authorizationStore";

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
    const { number, otpCode } = authorizationStore;
    const onSubmit = () => {};
    return (
        <PageLayout>
            <h2>Вход</h2>
            <p>
                Введите {otpCode ? "проверочный код" : "номер телефона"} для входа
                <br /> в личный кабинет
            </p>
            <Input
                type="text"
                placeholder="Телефон"
                value={number}
                onChange={(value) => authorizationStore.setNumber(value)}
            />
            {otpCode && (
                <Input
                    type="number"
                    placeholder="Проверочный код"
                    onChange={(value) => authorizationStore.setOtpCode(Number(value))}
                    value={String(otpCode)}
                />
            )}
            <Button onClick={onSubmit}>Войти</Button>
        </PageLayout>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(App);