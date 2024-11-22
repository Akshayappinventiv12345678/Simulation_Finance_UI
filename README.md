
# Simulation Finance UI

Welcome to the **Simulation Finance UI** repository. This project is a web-based simulation platform designed to provide interactive scenarios for learning and practicing financial decision-making, problem-solving, and strategic thinking in various business contexts.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
  - [Root Directory](#root-directory)
  - [Assets](#assets)
  - [Programs](#programs)
    - [Business Excellence through AI & Data Analysis](#business-excellence-through-ai--data-analysis)
    - [Decision Making and Problem Solving](#decision-making-and-problem-solving)
    - [Digital Tools for Manufacturing Design](#digital-tools-for-manufacturing-design)
    - [Finance for Growth](#finance-for-growth)
    - [Financial Analysis for Decision Making](#financial-analysis-for-decision-making)
    - [Implementing IoT in Manufacturing](#implementing-iot-in-manufacturing)
    - [Marketing and Business Development for Growth](#marketing-and-business-development-for-growth)
    - [Strategic Thinking and Change Management](#strategic-thinking-and-change-management)
    - [Trends in Digital Manufacturing](#trends-in-digital-manufacturing)
  - [Others](#others)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The **Simulation Finance UI** is designed to simulate real-world business scenarios, allowing users to engage with interactive content that enhances their understanding of finance, strategy, marketing, and technology in a corporate environment.

Each program focuses on a specific topic and contains multiple scenarios that users can navigate through, making decisions and seeing the outcomes of their choices.

## Project Structure

The project is organized into a main directory with subdirectories for assets and individual programs.

### Root Directory

- **HTML Files**:
  - `index.html`: Main landing page.
  - `organization_brief.html`: Provides an overview of the organization.
  - `overview.html`: General overview of the simulation platform.
  - `programlist.html`: Lists all available programs.

- **VSCode Settings**:
  - `.vscode/settings.json`: Editor configuration for consistent development environment.

### Assets

Shared resources used across multiple programs.

#### CSS

- `assets/css/organization_brief.css`
- `assets/css/overview.css`
- `assets/css/programlist.css`
- `assets/css/styles.css`: General styles.

#### Images

- Logos and images for branding and program representation.
  - `assets/images/logo.png`
  - Other images corresponding to each program.

#### JavaScript

- `assets/js/organization_brief.js`
- `assets/js/overview.js`
- `assets/js/programlist.js`
- `assets/js/scripts.js`: General scripts.

### Programs

Each program is contained within its own directory under `programs/`. Programs focus on different themes and contain their own assets and scenarios.

#### Business Excellence through AI & Data Analysis

- **Path**: `programs/Business excellence through AI _ data analysis`
- **Description**: Focuses on leveraging AI and data analytics for business improvement.
- **Contents**:
  - `index.html`
  - `lastpage.html`
  - **CSS**: Program-specific styles.
  - **JS**: Program-specific scripts.
  - **Images**: Logos or images.
  - **Scenarios**:
    - `scenario29`
    - `scenario30`

#### Decision Making and Problem Solving

- **Path**: `programs/Decision Making and Problem Solving`
- **Description**: Enhances decision-making and problem-solving skills.
- **Scenarios**:
  - `scenario1`
  - `scenario2`
  - `scenario18`

#### Digital Tools for Manufacturing Design

- **Path**: `programs/Digital Tools for Manufacturing Design`
- **Description**: Explores digital tools in manufacturing design.
- **Scenarios**:
  - `scenario31`
  - `scenario32`
  - `scenario33`

#### Finance for Growth

- **Path**: `programs/Finance for Growth`
- **Description**: Financial strategies to drive business growth.
- **Scenarios**:
  - `scenario4`
  - `scenario5`
  - `scenario7`
  - `scenario13`
  - `scenario16`

#### Financial Analysis for Decision Making

- **Path**: `programs/Financial Analysis for Decision Making`
- **Description**: Using financial analysis for informed decisions.
- **Scenarios**:
  - `scenario3`
  - `scenario11`
  - `scenario15`
  - `scenario17`

#### Implementing IoT in Manufacturing

- **Path**: `programs/Implementing IoT in Manufacturing`
- **Description**: Integration of IoT technologies in manufacturing.
- **Scenarios**:
  - `scenario23`
  - `scenario27`
  - `scenario28`

#### Marketing and Business Development for Growth

- **Path**: `programs/Marketing and Business Development for Growth`
- **Description**: Strategies for marketing and business expansion.
- **Scenarios**:
  - `scenario8`
  - `scenario12`
  - `scenario14`

#### Strategic Thinking and Change Management

- **Path**: `programs/Strategic Thinking and Change Management`
- **Description**: Developing strategic thinking and managing change.
- **Scenarios**:
  - `scenario9`
  - `scenario19`
  - `scenario20`
  - `scenario21`

#### Trends in Digital Manufacturing

- **Path**: `programs/Trends in Digital Manufacturing`
- **Description**: Latest trends and technologies in digital manufacturing.
- **Scenarios**:
  - `scenario6`
  - `scenario10`
  - `scenario25`
  - `scenario26`

### Others

- **Path**: `programs/others`
- Contains additional or miscellaneous pages:
  - `scenerio22_page_1.html`
  - `scenerio22_page_2.html`
  - `scenerio24_page_1.html`
  - `scenerio24_page_2.html`

## Setup and Installation

To set up the project locally, follow these steps:

### Prerequisites

- **Web Browser**: Latest version of Chrome, Firefox, Safari, or Edge.
- **Git**: Installed on your system if you plan to clone the repository.

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Zenlearn/Simulation_Finance_UI.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd Simulation_Finance_UI
   ```

3. **Open the Application**

   - Open `index.html` in your preferred web browser.
   - Alternatively, you can set up a local web server for better compatibility:
     ```bash
     # For Python 3.x
     python -m http.server 8000
     ```
     - Then, navigate to `http://localhost:8000` in your browser.

## Usage

- **Home Page**: Start from the `index.html` file to access the main menu.
- **Organization Brief**: Learn about the context by visiting `organization_brief.html`.
- **Program List**: Access `programlist.html` to view all available programs.
- **Select a Program**: Click on a program to explore its scenarios.
- **Navigate Scenarios**: Each scenario provides interactive content and decision-making opportunities.
- **Progress Tracking**: Use the in-built navigation to track your progress through each scenario.

## Contributing

We welcome contributions! To contribute to this project:

1. **Fork the Repository**

   Click the `Fork` button on the top right corner of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/your-username/Simulation_Finance_UI.git
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   - Add new features, fix bugs, or improve documentation.
   - Ensure your code follows the project's coding standards.

5. **Commit Your Changes**

   ```bash
   git commit -m "Description of your changes"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**

   - Go to the original repository on GitHub.
   - Click on `Pull Requests` and then `New Pull Request`.
   - Select your fork and branch, and submit the PR for review.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software as per the terms of the license.

## Acknowledgements

- **Contributors**: Thank you to all the developers and contributors who have worked on this project.
- **Resources**: Icons and images are sourced appropriately and are used under fair use guidelines or with permission.

## Contact

For any inquiries or issues, please open an issue on GitHub or contact the project maintainer.

---

**Note**: Replace `your-username` with your actual GitHub username when cloning or pushing to your fork.

---

## Additional Information

If you have any further questions or need assistance with specific parts of the project, feel free to reach out. Enjoy exploring and contributing to the **Simulation Finance UI**!

