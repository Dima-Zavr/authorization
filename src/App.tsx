import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";

import { PageLayout } from "./components/PageLayout/PageLayout";

export const App = () => {
    return (
        <PageLayout>
            <h2>Вход</h2>
            <p>Введите номер телефона для входа<br/> в личный кабинет</p>
            <Input type="text" placeholder="Телефон" />
            <Button>Войти</Button>
        </PageLayout>
    );
};
