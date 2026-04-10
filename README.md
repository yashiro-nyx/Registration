# Registration

A clean, client-side registration form built for a Philippine context. Features real-time field validation, age verification, and a success confirmation screen — all in vanilla HTML, CSS, and JavaScript with zero dependencies.

---

## ✨ Features

- **Sectioned Layout** — Form is organized into three clear sections: Personal Information, Contact Information, and Address
- **Real-Time Validation** — Errors appear on blur/change and clear as the user types
- **Field-Specific Rules** — Each field type has its own validation logic (see below)
- **Age Gate** — Date of birth field enforces a minimum age of 18; the max date is set dynamically
- **PH-Formatted Inputs** — Phone numbers validated for Philippine mobile format (`09XXXXXXXXX` or `+639XXXXXXXXX`), ZIP codes as 4-digit PH codes
- **Inline Error Messages** — Invalid fields are highlighted in red with descriptive error text beneath them
- **Valid State Indicators** — Correctly filled fields are highlighted in green
- **Success Screen** — On valid submission, the form is replaced with a confirmation message
- **Smooth Scroll to First Error** — On failed submission, the page scrolls to and focuses the first invalid field
- **No Dependencies** — Pure HTML, CSS, and JavaScript; no frameworks or build tools required

---

## 🗂️ Project Structure

```
Registration/
├── index.html    # Form markup and structure
├── style.css     # Styling and layout
├── script.js     # Validation logic and form handling
└── LICENSE
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/yashiro-nyx/Registration.git
cd Registration
open index.html
```

No installation or build step needed — just open `index.html` in any modern browser.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Form structure and semantics |
| CSS3 | Layout, validation states, and styling |
| Vanilla JavaScript (ES5 IIFE) | Validation logic and DOM interaction |
| [Unicons](https://iconscout.com/unicons) | Icons (check circle, etc.) via CDN |

---

## ✅ Validation Rules

| Field | Rule |
|---|---|
| Last / First Name | Letters and spaces only, minimum 2 characters |
| Middle Name | Letters and spaces only (optional) |
| Date of Birth | Must be at least 18 years old |
| Gender / Civil Status | Selection required |
| Email | Standard email format (e.g. `juan@email.com`) |
| Mobile Number | PH format: `09XXXXXXXXX` or `+639XXXXXXXXX` |
| House No. / Street, Barangay, City, Province | Minimum 2 characters |
| ZIP Code | Exactly 4 digits (e.g. `1100`) |

---

## 📄 License

This project is licensed under the terms found in [LICENSE](./LICENSE).
