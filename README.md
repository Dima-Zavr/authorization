# Авторизация

Проект реализует страницу авторизации в веб-приложении, на странице можно вводить номер телефона и otp код

### Стек технологий:
* Фреймворк (библиотека) - [React](https://react.dev/) + JavaScript + TypeScript
* Сборщик приложения - [Vite](https://vitejs.dev/)
* State-manager - [MobX](https://www.npmjs.com/package/mobx)
* Стилизация - [SaSS + CSS modules](https://sass-scss.ru/)
* Получение данных с сервера - [Axios](https://www.npmjs.com/package/axios)
* Чистота кода - [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Husky](https://www.npmjs.com/package/husky) + [Lint Staged](https://www.npmjs.com/package/lint-staged)
___
### Реализовано:
* Поля ввода номера телефона и otp кода
* Маска ввода для поля телефона ( номер выглядит в формате "+7 999 999 99 99";
* Валидация полей:
  * В случае неполного ввода или не ввода номера телефона отображается надпись "Поле является обязательным";
  * В случае неполного ввода или не ввода otp кода отображается надпись "Код должен содержать 6 цифр";
* Запросы для
  * Создания otp кода;
  * Авторизации пользователя;

Запросы посылаются на [backend](https://shift-intensive.ru/api)
___
|Поле ввода номера телефона|Валидация поля ввода номера телефона|
|:--------------:|:--------------:|
|<img width="1920" height="1080" alt="Снимок экрана 2025-10-10 223529" src="https://github.com/user-attachments/assets/e99d7c60-3c7c-4f90-8ddb-4a9757c25802" />|<img width="1920" height="1080" alt="Снимок экрана 2025-10-10 223540" src="https://github.com/user-attachments/assets/eff97c19-b15e-4db7-90ce-a0e7cc902e09" />|
|**Валидация поля ввода otp кода**|**Введенный otp кoд**|
|<img width="1920" height="1080" alt="Снимок экрана 2025-10-10 223605" src="https://github.com/user-attachments/assets/03a94dce-626a-47fe-b2fc-1fd0eeb01ffc" />|<img width="1920" height="1080" alt="Снимок экрана 2025-10-10 223631" src="https://github.com/user-attachments/assets/9d9fa2f0-7006-415e-a363-da351e5d2ada" />|
|**Кнопка повторения запроса otp кода**||
|<img width="1920" height="1080" alt="Снимок экрана 2025-10-10 224527" src="https://github.com/user-attachments/assets/e0e2fa5e-b1e5-44bc-8b54-ba97b9c24f60" />||
