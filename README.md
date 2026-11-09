# WDIO + Appium Mobile Automation (Android)

[![CI](https://github.com/alisher-sdet/wdio-appium-demo/actions/workflows/ci_webdriver.yml/badge.svg)](https://github.com/alisher-sdet/wdio-appium-demo/actions/workflows/ci_webdriver.yml)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-v9-EE0000?logo=webdriverio)
![Appium](https://img.shields.io/badge/Appium-2.x-8652F6?logo=appium)
![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=node.js)

> **Происхождение проекта.** Учебный проект. При работе использовался ИИ-ассистент.
> **Что сделал я:** запуск и настройка WebdriverIO и Appium, запуск на реальных устройствах в BrowserStack, настройка и починка CI в GitHub Actions (зафиксирована версия Node, `npm ci`, документация не запускает тесты).
> **Чего здесь нет:** iOS, параллельного запуска, отдельного набора негативных сценариев.

## Описание

UI-тесты Android-приложения на WebdriverIO + Appium с паттерном Screen Object. Запуск на реальных устройствах в BrowserStack, автоматический запуск в GitHub Actions при изменениях кода.

- **Тестируемое приложение:** API Demos (`ApiDemos-debug.apk`, демо-приложение Android), файл в `app/android`.
- **Сценариев:** 3, файл `test/specs/android/sample.js`.
- **CI:** [workflow `ci_webdriver.yml`](https://github.com/alisher-sdet/wdio-appium-demo/actions/workflows/ci_webdriver.yml); логи запуска сохраняются как артефакт `logs`.
- **Отчёты BrowserStack** (видео, логи устройств, скриншоты) доступны только владельцу аккаунта.

## Структура

- `app/android` — APK приложения
- `config` — конфигурации WebdriverIO (локально и BrowserStack)
- `screens/android` — Screen Object (`apiDemos.screen.js`)
- `test/specs/android` — тесты
- `.github/workflows/ci_webdriver.yml` — запуск в GitHub Actions

## Запуск

```bash
npm ci
export BS_USER=<пользователь BrowserStack>
export BS_KEY=<ключ BrowserStack>
npx wdio config/wdio.android.bs.conf.js
```

Для запуска нужен аккаунт BrowserStack App Automate; в CI ключи берутся из GitHub Secrets (`BS_USER`, `BS_KEY`).

## Стек

WebdriverIO 9.x, Appium 2.x (локальный запуск; в BrowserStack версию выбирает облако), Node.js 22, BrowserStack App Automate, GitHub Actions.

## Лицензия

MIT, см. [LICENSE](./LICENSE).
