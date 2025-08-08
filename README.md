# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# PixelHub - Digital Skills Agency Portfolio

A modern, responsive portfolio website for PixelHub digital skills agency built with React, Vite, and TypeScript.

## 🎨 Design Features

- **Color Scheme**: Golden (#FFD700) primary, Red (#FF0000) secondary
- **Modern Typography**: Poppins font family
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Framer Motion powered transitions
- **Unique Hero Section**: 3D visual elements and glowing effects
- **Sticky Navigation**: Scroll-responsive navbar

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Bootstrap 5 + Custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router DOM
- **Email Integration**: EmailJS
- **Notifications**: React Toastify

## 🏢 Services Offered

- Web Development
- E-Commerce Development
- Shopify Solutions
- Social Media Marketing
- Video Editing
- Graphic Designing

## 📄 Pages

1. **Home** - Hero section with animated elements and service preview
2. **About Us** - Company story, team, and values
3. **Services** - Detailed service offerings with pricing
4. **Portfolio** - Filterable project showcase
5. **Testimonials** - Client feedback and success stories
6. **Contact** - Contact form with validation and EmailJS integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pixelhub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📧 Email Configuration

To enable the contact form email functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Update the email configuration in `src/pages/Contact.tsx`:
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key
   - Replace `YOUR_SERVICE_ID` with your service ID
   - Replace `YOUR_TEMPLATE_ID` with your template ID

## 🎯 Features

- **Responsive Design**: Works perfectly on all devices
- **Smooth Scrolling**: Enhanced user experience with smooth page transitions
- **Loading States**: User-friendly loading indicators
- **Form Validation**: Client-side validation for contact forms
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Fast loading with Vite and optimized assets
- **Modern Animations**: Framer Motion powered micro-interactions
- **Toast Notifications**: User feedback for form submissions

## 🎨 Customization

### Colors

Update the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #FFD700; /* Golden */
  --secondary-color: #FF0000; /* Red */
  --dark-bg: #0a0a0a;
  --light-bg: #ffffff;
  /* Add more custom colors */
}
```

### Typography

Change the Google Fonts import in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap');
```

## 📱 Mobile Responsiveness

The website is fully responsive and tested on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/        # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
├── App.tsx           # Main app component
├── App.css           # App-specific styles
├── index.css         # Global styles
└── main.tsx          # Entry point
```

## 🌟 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact:
- Email: pixelhub714@gmail.com
- Phone: +92 318 0732632
- Address: 92B Block Shadab Colony Road, Sherwani Housing Scheme, Lahore

## 🌐 Social Media

Connect with us on social media:
- [Facebook](https://www.facebook.com/share/1D28Af5JoV/)
- [LinkedIn](https://www.linkedin.com/in/pixel-hub-541331369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- [Instagram](https://www.instagram.com/pixelhub.official?igsh=MTl4dTlnemhveG5rbQ==)

---

Built with ❤️ by PixelHub Team

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
