# WDIO + Appium Mobile Automation (Android)

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-v8-EE0000?logo=webdriverio)
![Appium](https://img.shields.io/badge/Appium-2.x-8652F6?logo=appium)
![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)

> **Происхождение проекта.** Учебный проект. [Выполнен по курсу «название» (Udemy, автор) / Создан с помощью ИИ-ассистента.]
> **Что сделал я:** [настройка WebdriverIO и Appium, Screen Objects, запуск в BrowserStack, настройка CI, разбор падений ...].
> **Чего здесь нет:** iOS, параллельного запуска, [негативных сценариев ...].

## Описание

UI-тесты Android-приложения на WebdriverIO + Appium с паттерном Screen Object. Запуск локально и на реальных устройствах в BrowserStack, автоматический запуск в GitHub Actions.

- Тестируемое приложение: [название и версия APK], файл в `app/android`.
- Сценариев: [N] (`test/specs/android`).
- CI: [workflow `ci_webdriver.yml`](https://github.com/alisher-sdet/wdio-appium-demo/actions/workflows/ci_webdriver.yml). Последний запуск: [зелёный/красный и дата].
- Отчёты (видео, логи устройств, скриншоты) в BrowserStack доступны только владельцу аккаунта. При запусках в Actions логи сохраняются как артефакт.

## Структура

- `app/android` — APK приложения
- `config` — конфигурации WebdriverIO (локально и BrowserStack)
- `screens/android` — Screen Objects
- `test/specs/android` — тесты
- `.github/workflows/ci_webdriver.yml` — запуск в GitHub Actions

## Запуск

```bash
npm ci
export BS_USER=<ваш пользователь BrowserStack>
export BS_KEY=<ваш ключ BrowserStack>
npx wdio config/wdio.android.bs.conf.js
```

Для запуска на эмуляторе: [команда и конфигурация, например `npx wdio config/wdio.android.conf.js`, проверьте имя файла].

## Стек

WebdriverIO v8, Appium 2.x, Node.js 20, BrowserStack App Automate, GitHub Actions.

## Лицензия

MIT, см. [LICENSE](./LICENSE).
