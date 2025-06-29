# Polaroid Generator - WordPress Block Plugin

A modern WordPress block plugin that creates beautiful polaroid-style photo galleries with dynamic loading animations and customizable captions.

![WordPress](https://img.shields.io/badge/WordPress-6.5+-blue.svg)
![License](https://img.shields.io/badge/License-GPL%20v2%2B-green.svg)
![Version](https://img.shields.io/badge/Version-0.1.0-orange.svg)

## 🎯 Features

- **Polaroid-Style Design**: Authentic polaroid photo frames with realistic shadows and borders
- **Dynamic Photo Count**: Adjustable number of photos (3-12) via block controls
- **Loading Animations**: Smooth fade-in effects with loading spinners
- **Captions**: Automatic captions that appear after images load
- **Responsive Design**: Works perfectly on all device sizes
- **Hover Effects**: Subtle scaling and opacity changes on hover
- **External Image Integration**: Uses Picsum Photos for demo images
- **Modern Development**: Built with WordPress block development tools

## 🚀 Quick Start

### Installation

1. **Download the plugin**:
   ```bash
   git clone https://github.com/mnestorov/polaroid-generator.git
   ```

2. **Install dependencies**:
   ```bash
   cd polaroid-generator
   npm install
   ```

3. **Build the plugin**:
   ```bash
   npm run build
   ```

4. **Install in WordPress**:
   - Upload the plugin folder to `/wp-content/plugins/`
   - Activate the plugin in WordPress admin
   - Or install via WordPress plugin screen

### Usage

1. **Add the block** in the WordPress editor
2. **Adjust photo count** using the block controls (3-12 photos)
3. **Preview** your polaroid gallery
4. **Publish** and enjoy!

## 🛠️ Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- WordPress 6.5+

### Development Commands

```bash
# Install dependencies
npm install

# Start development mode with hot reload
npm start

# Build for production
npm run build

# Build with webpack copy PHP
npm run build -- --webpack-copy-php

# Format code
npm run format

# Lint code
npm run lint:js
npm run lint:style
npm run lint:php

# Run all linters
npm run lint
```

### Project Structure

```
polaroid-generator/
├── src/
│   └── polaroid-generator/
│       ├── block.json          # Block configuration
│       ├── edit.js             # Editor component
│       ├── editor.scss         # Editor styles
│       ├── index.js            # Main entry point
│       ├── render.php          # Server-side rendering
│       ├── style.scss          # Frontend styles
│       └── view.js             # Frontend JavaScript
├── build/                      # Compiled assets
├── polaroid-generator.php      # Main plugin file
└── package.json               # Dependencies and scripts
```

## 🎨 Customization

### Styling

The plugin uses SCSS for styling. Key style files:

- `src/polaroid-generator/style.scss` - Frontend and editor styles
- `src/polaroid-generator/editor.scss` - Editor-only styles

### Customizing Polaroid Appearance

```scss
.wp-block-create-block-polaroid-generator {
  .polaroids {
    .polaroid {
      // Customize polaroid frame
      border: 1px solid #000;
      border-radius: 2px;
      padding: 10px;
      background-color: #fff;
      
      // Customize image effects
      img {
        transition: opacity 0.5s ease-in-out;
        
        &.loaded {
          opacity: 0.8;
          
          &:hover {
            opacity: 1;
            transform: scale(1.02);
          }
        }
      }
      
      // Customize captions
      .caption {
        font-family: 'Courier New', monospace;
        font-size: 14px;
        color: #333;
        text-align: center;
      }
    }
  }
}
```

### Adding Custom Images

To use your own images instead of Picsum Photos:

1. **Update render.php**:
   ```php
   <img 
     src="<?php echo esc_url( your_custom_image_url( $i ) ); ?>"
     alt="<?php echo esc_attr( sprintf( 'Photo %d', $i ) ); ?>"
     width="200"
     height="150"
     loading="lazy"
   />
   ```

2. **Update edit.js**:
   ```javascript
   <img 
     src={yourCustomImageUrl(i)}
     width="200"
     height="150"
     loading="lazy"
     alt={`Photo ${ i + 1 }`}
   />
   ```

## 🔧 Block Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `photos` | number | 6 | Number of photos to display (3-12) |

## 🎭 Block Controls

The block includes an inspector control panel with:

- **Range Control**: Adjust photo count from 3 to 12
- **Real-time Preview**: See changes immediately in the editor

## 📱 Responsive Design

The polaroid gallery is fully responsive:

- **Desktop**: Full polaroid layout with hover effects
- **Tablet**: Optimized spacing and sizing
- **Mobile**: Stacked layout for better mobile experience

## 🎨 CSS Classes

Key CSS classes for customization:

- `.wp-block-create-block-polaroid-generator` - Main block wrapper
- `.polaroids` - Container for all polaroids
- `.polaroid` - Individual polaroid frame
- `.caption` - Photo caption text
- `.loader` - Loading spinner
- `.loaded` - Applied when images finish loading

## 🚀 Performance

- **Lazy Loading**: Images load only when needed
- **Optimized Assets**: Minified CSS and JavaScript
- **Efficient Rendering**: Server-side rendering for better performance
- **Caching Friendly**: Compatible with WordPress caching plugins

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow WordPress coding standards
- Test on multiple WordPress versions
- Ensure responsive design works
- Update documentation for new features

## 📄 License

This project is licensed under the GPL v2 or later - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
- Uses [Picsum Photos](https://picsum.photos/) for demo images
- Inspired by classic polaroid photography

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/mnestorov/polaroid-generator/issues)
- **Documentation**: [WordPress Developer Handbook](https://developer.wordpress.org/block-editor/)
- **Author**: [Martin Nestorov](https://github.com/mnestorov)

---

**Made with ❤️ for the WordPress community** 