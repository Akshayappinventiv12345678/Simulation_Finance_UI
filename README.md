# Business Learning Simulation Platform

## Overview

This is a web-based learning simulation platform that offers interactive business training programs across various domains, including finance, marketing, manufacturing, and management. The platform features scenario-based learning experiences with multiple interactive cases per program, designed to simulate real-world challenges and decision-making processes.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
  - [Root Directory](#root-directory)
  - [Core Assets](#core-assets)
  - [Programs](#programs)
  - [Directory Organization](#directory-organization)
- [Getting Started](#getting-started)
- [Programs and Scenarios](#programs-and-scenarios)
  - [Accessing a Program](#accessing-a-program)
  - [Navigating Scenarios](#navigating-scenarios)
- [Scenario Structure](#scenario-structure)
- [Technical Details](#technical-details)
- [Assets](#assets)
  - [CSS Stylesheets](#css-stylesheets)
  - [JavaScript Files](#javascript-files)
  - [Images](#images)
- [Development](#development)
  - [Tools Used](#tools-used)
  - [Setting Up a Development Environment](#setting-up-a-development-environment)
  - [Adding a New Program or Scenario](#adding-a-new-program-or-scenario)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Structure

The project is organized into several directories and files to maintain a modular and scalable structure.

### Root Directory

- `index.html` - Main entry point of the application.
- `organization_brief.html` - Organization information page.
- `overview.html` - Platform overview page.
- `programlist.html` - List of available programs.

### Core Assets (`/assets`)

- **CSS** (`/assets/css/`)
  - Global stylesheets for main pages.
  - Program-specific styles.
- **Images** (`/assets/images/`)
  - Program thumbnails and logos.
- **JavaScript** (`/assets/js/`)
  - Core functionality scripts.
  - Page-specific interactions.

### Programs (`/programs`)

The platform includes the following training programs, each with multiple scenarios:

1. **Business Excellence through AI & Data Analysis**
   - Scenarios: 29, 30
2. **Decision Making and Problem Solving**
   - Scenarios: 1, 2, 18
3. **Digital Tools for Manufacturing Design**
   - Scenarios: 31, 32, 33
4. **Finance for Growth**
   - Scenarios: 4, 5, 7, 13, 16
5. **Financial Analysis for Decision Making**
   - Scenarios: 3, 11, 15, 17
6. **Implementing IoT in Manufacturing**
   - Scenarios: 23, 27, 28
7. **Marketing and Business Development for Growth**
   - Scenarios: 8, 12, 14
8. **Strategic Thinking and Change Management**
   - Scenarios: 9, 19, 20, 21
9. **Trends in Digital Manufacturing**
   - Scenarios: 6, 10, 25, 26

Each program folder contains:

```
├── index.html          # Program landing page
├── lastpage.html       # Program completion page
├── css/                # Program-specific styles
│   ├── lastpage.css
│   └── styles.css
├── images/             # Program-specific images
│   └── logo.png
├── js/                 # Program-specific scripts
│   ├── lastpage.js
│   └── scripts.js
└── scenarios/          # Interactive learning scenarios
    ├── scenario[number]/
    │   ├── page1.html
    │   ├── page2.html
    │   ├── page2.css
    │   ├── page2.js
    │   ├── scripts.js
    │   └── styles.css
    └── ...
```

### Directory Organization

- `.vscode/` - Visual Studio Code configuration.
- `assets/` - Global assets (CSS, JS, images).
- `programs/` - Individual training programs.
  - Each program contains its own assets and scenarios.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- Internet connection (for external libraries like Font Awesome and Chart.js).

### Running the Platform

1. **Clone or Download the Repository**

   ```bash
   git clone [repository URL]
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd [project directory]
   ```

3. **Open the Main Page**

   - Open `index.html` in your web browser to start the application.

## Programs and Scenarios

### Accessing a Program

1. From the main page (`index.html`), navigate to the **Program List**.
2. Select a program to view its overview (`overview.html`).
3. Start the program by clicking on it, which will open the program's `index.html`.

### Navigating Scenarios

- Within each program, scenarios are listed and can be accessed sequentially.
- Each scenario contains interactive pages (`page1.html`, `page2.html`) with associated styles and scripts.

## Scenario Structure

Each scenario follows a consistent structure:

```
scenario[number]/
├── page1.html      # Scenario introduction/setup
├── page2.html      # Interactive simulation/exercise
├── page2.css       # Styles for page2
├── page2.js        # Scripts for page2
├── scripts.js      # Additional scripts
└── styles.css      # Additional styles
```

## Technical Details

- The project uses vanilla **HTML5**, **CSS3**, and **JavaScript**.
- Modular structure with separate assets for each program.
- Scenario-based interactive learning approach.
- Consistent file structure across all programs.
- No build process required - pure frontend implementation.

## Assets

### CSS Stylesheets

- Located in `assets/css/` for global styles.
- Each program and scenario may have its own CSS files for specific styling needs.

### JavaScript Files

- Located in `assets/js/` for global scripts.
- Program-specific scripts are in each program's `js/` directory.
- Scenario-specific scripts are within each scenario's folder.

### Images

- Shared images are in `assets/images/`.
- Program-specific images are in each program's `images/` directory.

## Development

### Tools Used

- **HTML5**: Markup language for structuring the content.
- **CSS3**: Styling and layout of web pages.
- **JavaScript**: Interactive features and functionality.
- **Font Awesome**: Icons and visual enhancements.
- **Chart.js**: Interactive charts and data visualization.

### Setting Up a Development Environment

1. **Visual Studio Code**: Recommended IDE (settings included in `.vscode/settings.json`).
2. **Live Server Extension**: For live reloading during development.

### Adding a New Program or Scenario

When adding new programs or scenarios, follow the established directory structure and naming conventions to maintain consistency across the platform.

#### Create a New Program

1. Copy the structure of an existing program in `programs/`.
2. Update `index.html` and `lastpage.html` accordingly.
3. Add program-specific styles in the `css/` directory.
4. Place images in the `images/` directory.
5. Write scripts in the `js/` directory.

#### Add Scenarios

1. Inside the program's `scenarios/` directory, create a new folder `scenario[number]`.
2. Include:

   - `page1.html`
   - `page2.html`
   - `page2.css`
   - `page2.js`
   - `scripts.js`
   - `styles.css`

## Contributing

We welcome contributions to enhance the platform. Please ensure you:

- Follow the established directory structure and naming conventions.
- Write clean, commented code.
- Test your additions thoroughly.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- **Contributors**: Thank you to all the developers and educators who contributed to this project.
- **Resources**: Icons provided by [Font Awesome](https://fontawesome.com/), charts by [Chart.js](https://www.chartjs.org/).

---
