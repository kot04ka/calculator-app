
# Калькулятор-App

Простий та багатофункціональний мобільний калькулятор, розроблений на React Native з використанням Expo.

## 📝 Опис

**Calculator-App** — це мобільний застосунок, який надає користувачам можливість виконувати стандартні математичні операції, конвертувати валюти та одиниці вимірювання. Зручний інтерфейс та широкий набір функцій роблять цей калькулятор незамінним помічником у повсякденному житті.

## 🎯 Функціонал

- **Стандартний калькулятор**: додавання, віднімання, множення, ділення.
- **Конвертер валют**: конвертація між USD, EUR, UAH, GBP.
- **Конвертер одиниць**:
  - Довжина: км, милі, метри.
  - Вага: кг, фунти, грами.
  - Температура: Цельсій, Фаренгейт.

## 🚀 Встановлення та запуск

### Вимоги

- Node.js
- Expo CLI
- NPM або Yarn

### Інструкції

1. **Клонуйте репозиторій**

   ```bash
   git clone https://github.com/kot04ka/calculator-app.git
   ```

2. **Перейдіть у директорію проєкту**

   ```bash
   cd calculator-app
   ```

3. **Встановіть залежності**

   Використовуючи NPM:

   ```bash
   npm install
   ```

   Або Yarn:

   ```bash
   yarn install
   ```

4. **Запустіть застосунок**

   ```bash
   npx expo start
   ```

5. **Запустіть на емуляторі або реальному пристрої**

   - Для Android:

     - Натисніть `a` у терміналі або виберіть "Run on Android device/emulator" у Expo Dev Tools.

   - Для iOS:

     - Натисніть `i` у терміналі або виберіть "Run on iOS simulator" у Expo Dev Tools.

## 📂 Структура проєкту

```
calculator-app/
├── App.js
├── package.json
├── screens/
│   ├── HomeScreen.js
│   ├── StandardCalculator.js
│   ├── CurrencyConverter.js
│   └── UnitConverter.js
└── assets/
    └── (зображення, іконки тощо)
```

## 🛠️ Використані технології

- **React Native** — фреймворк для розробки мобільних застосунків.
- **Expo** — інструмент для легкого створення React Native проєктів.
- **@react-navigation/native** — бібліотека для навігації між екранами.
- **@react-native-picker/picker** — компонент для вибору значень.

## 📖 Як користуватися

1. **Домашня сторінка**

   - Виберіть необхідний розділ: Стандартний калькулятор, Конвертер валют або Конвертер одиниць.

2. **Стандартний калькулятор**

   - Введіть два числа.
   - Виберіть операцію: додавання, віднімання, множення або ділення.
   - Результат з'явиться нижче.

3. **Конвертер валют**

   - Введіть суму.
   - Виберіть валюту, з якої конвертувати, та валюту, у яку конвертувати.
   - Натисніть "Конвертувати".
   - Результат з'явиться нижче.

4. **Конвертер одиниць**

   - Виберіть тип одиниць: довжина, вага або температура.
   - Введіть значення.
   - Виберіть одиниці вимірювання для конвертації.
   - Натисніть "Конвертувати".
   - Результат з'явиться нижче.

## 📄 Ліцензія

Цей проєкт ліцензований під ліцензією MIT — дивіться файл [LICENSE](LICENSE) для деталей.

## 🤝 Внесок

Будь ласка, дотримуйтесь правил [CONTRIBUTING](CONTRIBUTING.md) для внеску в проєкт.

## 💬 Зворотній зв'язок

Якщо у вас є пропозиції або ви знайшли помилку, відкрийте [Issue](https://github.com/kot04ka/calculator-app/issues) або надішліть Pull Request.

## ⭐ Вдячність

- Розроблено з любов'ю та пристрастю до технологій.
- Дякуємо спільноті React Native за чудові інструменти та підтримку.

---