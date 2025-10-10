import styles from "./AuthorizationPage.module.scss";

import { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { PageLayout } from "@components/PageLayout/PageLayout";
import { authorizationStore } from "@store/AuthorizationStore";

export const AuthorizationPage = observer(() => {
    const { phone, phoneError, otpCode, otpError, isEnteredPhone } = authorizationStore;

    const [counter, setCounter] = useState(120);

    useEffect(() => {
        if (counter > 0 && isEnteredPhone) {
            setTimeout(() => setCounter(counter - 1), 1000);
        }
    }, [counter, isEnteredPhone]);

    const handleClick = () => {
        const clearNumber = phone.replace(/\D/g, "");

        if (!isEnteredPhone) {
            authorizationStore.apiReceiveOtpCode(clearNumber);
        } else {
            authorizationStore.apiSignIn(clearNumber);
        }
    };

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
                value={phone}
                error={phoneError}
                onChange={(value) => authorizationStore.setNumber(value)}
            />
            {isEnteredPhone && (
                <Input
                    type="text"
                    placeholder="Проверочный код"
                    value={otpCode || ""}
                    error={otpError}
                    onChange={(value) => authorizationStore.setOtpCode(value)}
                />
            )}
            <div className={styles.buttons}>
                <Button onClick={() => handleClick()}>{isEnteredPhone ? "Войти" : "Продолжить"}</Button>
                {isEnteredPhone &&
                    (counter > 0 ? (
                        <p className={styles.text}>Запросить код повторно можно через {counter} секунд</p>
                    ) : (
                        <Button type="text" onClick={() => authorizationStore.apiReceiveOtpCode(phone.replace(/\D/g, ""))}>
                            Запросить код ещё раз
                        </Button>
                    ))}
            </div>
        </PageLayout>
    );
});
