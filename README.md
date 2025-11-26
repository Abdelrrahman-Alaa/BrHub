# BrHub - Global B2B Trading Platform

A modern, responsive web platform connecting verified suppliers and buyers worldwide. BrHub simplifies international trade by providing a seamless interface to discover products, request quotes, and manage logistics globally.

## Overview

BrHub is a B2B marketplace designed to revolutionize global commerce. It serves as a bridge between exporters and importers, offering a curated selection of premium products across multiple categories including food, agriculture, fashion, beauty, and more.

## Features

### Core Platform

- **Verified Supplier Network**: Access thousands of certified exporters worldwide
- **Product Categories**: Browse diverse product ranges from agriculture to fashion
- **Quote Requests**: Send quotation requests directly to suppliers
- **Real-time Tracking**: Monitor orders and shipments in real-time
- **24/7 Customer Support**: Round-the-clock assistance for all inquiries

### User Experience

- **Responsive Design**: Fully responsive interface optimized for mobile, tablet, and desktop
- **Multi-language Support**: Built with Arabic language support (RTL layout)
- **Interactive Navigation**: Smart navigation with dropdown menus and category browsing
- **Product Filtering**: Tab-based filtering system for easy product discovery

### Key Sections

1. **Hero Section**: Compelling introduction with call-to-action
2. **Statistics Dashboard**: Display of company metrics and achievements
3. **Product Gallery**: Showcase of featured products and exporters
4. **Service Highlights**: Performance metrics and competitive advantages
5. **Logistics Solutions**: Information about global delivery capabilities

## Technical Stack

### Frontend

- **HTML5**: Semantic markup structure
- **CSS/Tailwind CSS**: Modern, utility-first styling framework
- **JavaScript**: Interactive features and dynamic functionality

### Styling

- **Tailwind CSS**: v4.1.17 for rapid UI development
- **Responsive Grid System**: Mobile-first design approach
- **Custom Animations**: Smooth transitions and hover effects

## Project Structure

```
d:\BrHub
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── input.css           # Tailwind input styles
├── output.css          # Compiled CSS
├── package.json        # Project dependencies
└── assets/             # Static assets
    ├── logos/          # Logo files
    ├── svg/            # SVG graphics
    ├── header.webm     # Hero video
    ├── plane.png       # Logistics image
    ├── office.png      # Office background
    ├── city.png        # City background
    ├── map.png         # Map background
    └── [other images]  # Product and UI images
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or download the project**

   ```bash
   cd d:\BrHub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build Tailwind CSS**

   ```bash
   npm run build:css
   ```

4. **Watch for changes (development)**

   ```bash
   npm run watch:css
   ```

5. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for better functionality

## Usage

### Navigation

- Use the main navigation bar to browse categories (Products, Services, Investors)
- Click on specific product categories to filter offerings
- Mobile users can access the hamburger menu for navigation

### Product Discovery

1. Browse through the premium products section
2. Filter by category using the tab buttons
3. Click "Send request" on any product to request a quotation
4. Contact suppliers directly through the platform

### Mobile Features

- Responsive mobile menu with smooth animations
- Touch-friendly interface optimized for all screen sizes
- Simplified navigation for smaller screens

## Key JavaScript Functions

### Tab Switching

- `switchTab(tabName, button)` - Desktop tab navigation
- `switchMobileTab(tabName, button)` - Mobile tab navigation

### Menu Management

- `toggleMobileMenu()` - Show/hide mobile navigation
- `toggleMobileDropdown()` - Toggle dropdown menus

### Dynamic Features

- Sticky navbar with scroll effects
- Auto-generated product cards
- Interactive statistics and metrics

## Customization

### Color Scheme

Primary colors used in the design:

- **Primary Green**: #048C4C (Action buttons, highlights)
- **Dark Blue**: #00235B, #082D38 (Headers, backgrounds)
- **Neutral**: #EFEFEF, #F3F4F6 (Text, backgrounds)

### Adding New Products

Edit the `products` array in `script.js` to add new products:

```javascript
const products = [
  {
    title: "Product Name",
    desc: "Product description",
    rating: 4.8,
    image: "./assets/image.png",
  },
];
```

### Modifying Categories

Update category links in the navigation sections of `index.html` to add new categories.

## Features Highlights

### Statistics Section

- 5K+ new partners annually
- 30+ years of industry experience
- 14K+ talented staff worldwide
- 68K+ successful project completions
- 2M+ tonnes supplied annually

### Performance Metrics

- 98% customer satisfaction rate
- 24/7 customer support availability
- 15+ years of proven experience
- 50+ global clients

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading for images
- Optimized video formats (WebM)
- CSS minification with Tailwind
- Responsive images for different screen sizes
- Efficient JavaScript event handling

## Future Enhancements

- [ ] User authentication system
- [ ] Integrated payment gateway
- [ ] Real-time chat support
- [ ] Advanced product filtering
- [ ] Seller dashboard
- [ ] Order management system
- [ ] API integration for suppliers
- [ ] Multi-language support expansion

## Dependencies

```json
{
  "dependencies": {
    "@tailwindcss/cli": "^4.1.17",
    "tailwindcss": "^4.1.17"
  }
}
```

## License

All rights reserved © 2024 BrHub

## Support & Contact

- **Location**: No: 58 A, Baltimore, MD, USA 4508
- **Phone**: 0-123-456-78
- **Hours**: Mon - Sat: 8 am - 5 pm
- **Leads Central**: [Go to Leads Central](https://leadscentral.com)

## Contributing

For contributions and feedback, please contact the development team through the platform's contact section.

## Changelog

### Version 1.0.0

- Initial release
- Core marketplace functionality
- Responsive design
- Product catalog
- Quote request system

---

**Last Updated**: November 2024

For more information and to explore the platform, visit our website at [BrHub](https://brhub.com)
