# PimaOnline Webdocs

PimaOnline Webdocs is a documentation site for building courses with the PimaOnline Themepack templating system. It is built with Next JS. Instructional Designers and faculty can use this website to find layouts and widgets we offer for courses.

## Version

1.0.0

## What's Included

### Dependencies

- Git
- Node.js
  - PNPM
  - Next
  - React
  - Highlight.js

### PNPM Commands

`pnpm dev` Run this command to enter development mode.

Development mode includes a server running at `http://localhost:3000`. All files are watched so that when you make a change the compiler will run automatically. Note: Compiler will run prior to server starting.

`pnpm build` Run this command to compile production files in `src` only.

`pnpm start` Run this command to start the server without compiling production files.

`pnpm lint` Run this command to run ESLint to detect errors in the code. Note: You will have to configure ESLint in the terminal.

## Next JS Components and Pages

Individual components are imported into specific pages of the project. For instance, all files in `./components/widgets` are added to `./pages/widgets.js`.

## Stylesheets

### CSS

All stylesheets preceded by an underscore are partials that are then imported into `imports.css`.

#### **\_grid.css**

Contains all styles that makeup a page’s grid. The main layout model used is CSS Grid.

#### **\_styles.css**

Contains all general styles that pertain directly to Webdocs.

#### **\_typography.css**

Contains all typography/font styles.

#### **\_variables.css**

Contains css variables for Webdocs colors and width breakpoints.

#### **\_widgets.css**

Contains css for widget components that are displayed in Webdocs.

## Public folder

The public folder contains images and icons used in Webdocs.

## Authors

Center for Learning Technology at Pima Community College.

## License

Code is released under the MIT license.
