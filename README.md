# IPPAN Foundation Website

A modern, responsive website for the IPPAN Foundation built with React, TypeScript, and Tailwind CSS.

## About IPPAN Foundation

The IPPAN Foundation supports the research and stewardship of the Immutable Proof & Availability Network. We convene contributors across cryptography, distributed systems, and finance to advance verifiable, energy‑efficient infrastructure.

## Features

- **Modern Design**: Clean, professional design with IPPAN brand colors
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for optimal development and build performance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Pages

- **Home**: Hero section with mission overview and feature cards
- **About**: Detailed information about the foundation, mission, and programs
- **Contact**: Contact information and partnership opportunities
- **Legal**: Terms of use, privacy policy, and intellectual property information

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vite-react
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

### Preview Production Build

```bash
npm run preview
```

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## Project Structure

```
src/
├── components/          # Reusable components
│   └── Layout.tsx      # Main layout component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── Legal.tsx       # Legal page
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
├── index.css           # Global styles and Tailwind imports
└── App.css             # Component-specific styles
```

## Customization

### Brand Colors

The IPPAN brand colors are defined in `tailwind.config.js`:

- Primary: `#0B7F52` (IPPAN Green)
- Dark: `#095F3E` (Darker Green)
- Light: `#27A379` (Light Green)

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update the navigation in `src/components/Layout.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this website or the IPPAN Foundation, please visit our [Contact page](/contact) or email us at info@ippan.org.