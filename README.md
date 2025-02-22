<div align="center">
  <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=3270&auto=format&fit=crop" alt="Laurent's Restaurant" width="100%" style="border-radius: 10px"/>

  # Laurent's Fine French Dining

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

  *An elegant restaurant website showcasing French cuisine, powered by modern web technologies*
</div>

## ✨ Features

### 🍽️ Interactive Menu Experience
- **Dynamic Menu Categories**
  - Seasonal Specials
  - Main Courses
  - Curated Wine Selection
  - Exquisite Desserts
- **Rich Visual Presentation**
- **Detailed Item Descriptions**

### 📅 Smart Reservation System
- **Multiple Booking Options**
  - Table Reservations
  - Private Events
  - Group Dining
  - Special Occasions
- **Real-time Availability**
- **Form Validation & TypeScript Integration**

### 🎨 Modern Design Elements
- **Responsive Layout**
  - Mobile-first approach
  - Seamless tablet & desktop experience
- **Elegant Animations**
- **Consistent Navigation**
  - Intuitive menu structure
  - Back navigation system
  - Breadcrumb trails

### 🛠️ Technical Excellence
- **Component Architecture**
  - Reusable UI components
  - shadcn/ui integration
  - Type-safe props
- **Performance Optimized**
  - Fast page loads
  - Optimized images
  - Smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Jeanfr1/scroll-hero-magic.git
```

2. Navigate to project directory
```bash
cd scroll-hero-magic
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Start development server
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

## 🏗️ Built With

- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[shadcn/ui](https://ui.shadcn.com/)** - UI components
- **[Vite](https://vitejs.dev/)** - Build tool
- **[React Router](https://reactrouter.com/)** - Navigation

## 📱 Key Features Showcase

### Elegant Navigation
```typescript
// Example of our type-safe navigation component
interface NavigationProps {
  items: Array<{
    title: string;
    href: string;
    description?: string;
  }>;
}
```

### Form Handling
```typescript
// Example of our form validation
interface ReservationForm {
  date: string;
  time: string;
  guests: number;
  occasion?: string;
}
```

## 🎯 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
│   ├── menu/          # Menu-related pages
│   ├── reservations/  # Reservation system
│   └── about/         # Information pages
├── hooks/             # Custom React hooks
├── lib/              # Utility functions
└── types/            # TypeScript definitions
```

## 🔥 Performance Optimizations

- **Code Splitting**: Lazy loading of routes
- **Image Optimization**: Responsive images with proper sizing
- **Component Optimization**: Memoization where beneficial
- **Build Optimization**: Vite's fast build system

## 🎨 Design Philosophy

Our design system emphasizes:
- **Elegance**: Clean, sophisticated layouts
- **Usability**: Intuitive navigation and clear hierarchy
- **Responsiveness**: Seamless experience across devices
- **Performance**: Fast loading and smooth interactions

## 🔜 Roadmap

- [ ] Online payment integration
- [ ] Customer reviews system
- [ ] Table layout visualization
- [ ] Menu item customization
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- UI Components from [shadcn/ui](https://ui.shadcn.com)

---

<div align="center">
  <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf" alt="Chef in kitchen" width="50%" style="border-radius: 10px"/>

  *"Creating unforgettable dining experiences through exceptional cuisine and ambiance"*
</div>
