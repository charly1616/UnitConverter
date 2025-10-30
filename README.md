https://roadmap.sh/projects/unit-converter


# 🌐 Unit Converter (React + Vite)

A modern and responsive **Unit Converter** built with **React** and **Vite**, allowing you to convert between **Length**, **Weight**, and **Temperature** with clean visuals and smooth interactions.

---

## ✨ Features

- 🔁 **Dynamic Conversions** — Supports multiple unit systems (Metric, Imperial, etc.)
- 🎨 **Beautiful UI** — Smooth hover effects, highlighted selections, and clean input fields
- ⚡ **Fast & Lightweight** — Powered by **Vite** and **React Hooks**
- 📊 **Data-Driven Design** — All conversion data loaded dynamically from JSON files
- 📱 **Responsive Layout** — Works seamlessly on desktop and mobile

---

## 🧠 Technologies Used

- ⚛️ **React (JSX + Hooks)**
- 💨 **Vite**
- 🎨 **CSS3** with transitions
- 📁 **JSON** for conversion data
- 🧩 **ESLint** for clean code

---

## 📂 Project Structure

```
UNITCONVERTER/
│
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   │   ├── Length.json
│   │   ├── Temperature.json
│   │   ├── Weigth.json
│   │   └── react.svg
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/unit-converter.git
cd unit-converter
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project locally

```bash
npm run dev
```

Open the app in your browser at the URL displayed (usually `http://localhost:5173`).

---

## ⚙️ JSON Format Example

Each unit file (e.g. `Length.json`) defines all the units and their relations to a base unit:

```json
[
  {
    "system": "Metric",
    "unit": "Meter",
    "symbol": "m",
    "conversion": 1,
    "addition": 0
  },
  {
    "system": "Imperial",
    "unit": "Foot",
    "symbol": "ft",
    "conversion": 0.3048,
    "addition": 0
  }
]
```

> 💡 The `conversion` key defines how to scale to the base unit, and `addition` helps for systems like temperature.

---

## 💡 Usage

1. Select a **category** (e.g., Length, Weight, Temperature)  
2. Enter a numeric value  
3. Choose the **From** and **To** units  
4. Click **Convert** — and get your result instantly!  

---

## 🎨 UI Details

| Element | Description |
|----------|--------------|
| **Buttons** | Change category and highlight with a blue underline when selected |
| **Select Menus** | Rounded corners, hover animation, and consistent font size |
| **Number Input** | Clean style without spinner arrows |
| **Results** | Displayed clearly with symbols and system information |

---

## 🧩 Future Enhancements

- 🌓 Dark Mode toggle  
- 🔊 Voice output for conversions  
- 🧮 Add more unit types (Volume, Time, Speed)  
- 💾 Save conversion history locally  

---

## 👩‍💻 Author

**Charlie Bermúdez**  
Systems Engineering Student • Web Developer • Tech Enthusiast  
🌍 Barranquilla, Colombia  

---

## 🪪 License

This project is licensed under the **MIT License** — you’re free to use, modify, and share it.
````
