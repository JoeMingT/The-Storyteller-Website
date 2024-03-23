# The-Storyteller-Website

This is the source code for "The Storyteller by Joe" website. Comissioned by Tham Joe Ping, website created and maintained by Tham Joe Ming.
This ReadMe document will contain the information regarding the source code itself such as setting up and running the application, what is the packages used, what is the third party services used and so on.

<br />

## Getting Started

This project is built from the [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) command.
If you are familiar with it then you should know that there's not much that you need to do to start the application.

### Step-by-Step to Run the Application

First, install the necessary dependencies:

```bash
npm install
# or
yarn install
# or
bun install
```

Once all the dependencies have been installed, you can start the development server using:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br />

## Prerequisites

In order to work on this project and repository, here is some of the prerequisites that is required to understand and actually work on it.
If you do not understand these prerequisites, it is recommended to read and learn these tools or frameworks.

The prerequisites are shown below:

1. NextJS
2. ReactJS
3. TypeScript
4. ChakraUI
5. Sanity Client (sanity.io) **Might change in the future**

### Some Pretty Important Packages

There are also plenty of packages that are used throughout the application. They aren't as major and is not the core of the application
and as such, they are easier to learn and pick up than the prerequisites. However, it would be great if you already know what these packages
are and what they do to make your lives easier.

1. ESLint & Prettier
2. Swiper

<br />

## Project Organization

This section details how I had organized all of the codes, assets, and others. I will be touching upon most of the folders
and files that I have used in this project, and ignore others that I think that is simple / unimportant.

The important files and folders are listed below:

1. `.env`, `.env.local`, and `.env.example`
2. `sanity` folder and `sanity.config.ts`
3. `tsconfig.json`
4. `public`
5. `src/components`
6. `src/data`
7. `src/database`
8. `src/hooks`
9. `src/pages`
10. `src/styles`
11. `src/types`
12. `src/theme.ts`

### `.env`, `.env.local`, and `.env.example`

You should have a `.env` and `.env.local` files in this project.
As the contents of the environment variables will not be shared publicly, you can refer to
`.env.example` to see what variables and their uses

### `sanity` folder and `sanity.config.ts`

The `sanity` folder will contain everything related to the Sanity.io client. This includes the object schema,
queries, setup and so on. To access the Sanity Studio, it is embedded in the application under `/studio` route.

`sanity.config.ts` is used to configure the Sanity.io client. Mainly to export schemas and parameters for your Sanity project

### `tsconfig.json`

Most of the settings here are default settings. The only main thing to focus on here is the `path` options.
I have created 4 different custom paths for this application: `@StorytellerComponents`, `@Storyteller`, `@`, and `@StorytellerSanity`.

This is done in order to have better readability throughout the application while also making it easier to access some of the files and codes
in the project.

### `public`

If you are well-versed with NextJS, you should know that this folder is the public assets folder which stores static assets.

Essentially, this contains all the hard-coded assets such as icons, logos, images, and other potential assets. Each folder is a
category of the assets. For example, the `icons` folder will contain all the icons that are used throughout the application.

### `src/components`

The components folder is where all of the smaller, more modular, React components are stored. It is further categorized into 3 different
parts: `atoms`, `molecules`, and `organisms` (According to the [Atomic Design Pattern](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97))

Essentially, it can be broken down into:
a. **Atoms:** Main building blocks. Component that does nothing by itself.
b. **Molecules:** Merging of multiple Atoms to achieve a certain functionality.
c. **Organisms:** Combining Molecules together to create a distinct section of an interface.

### `src/data`

This folder contains all static data that is exported into the application. It is exported out as a regular JavaScript object.

### `src/database`

This folder contains all the file and code that is related to the database. It may include things like SQL query, ORM code (if any) and so on.
Currently, it's not in use but in the future it might be used.

### `src/hooks`

This folder contains all of the custom React hooks that will be used in the application.
Custom hooks are created to reduce redundancy in code where we do the same useEffect process on different component

### `src/pages`

The main pages for the website. Read the NextJS docs to understand how it works as well as its automatic re-routing function.
It also includes SSR or SSG, which is a NextJS feature

### `src/styles`

The folder that contains all of the styling needed for the website. It can be in CSS module form or a global css file that
is applied throughout the application. All of the styles are written in pure CSS, and not in transpiled CSS (such as SCSS)

### `src/types`

This folder contains custom types that is required for the Application due to TypeScript constraints. Mainly contains types for the data fetched from Sanity.io

### `src/theme.ts`

This file is the custom / extended theme for Chakra UI. Mainly the font sizes are the biggest change. There may be changes as the application
continues to develop.

## To Do List

Essentially this is a compilation of future features, ideas, and items that will be good to include for the website whether for extra user-friendliness, accessibility, or even documentation purposes.

-   [x] Add a Custom 404 Page
-   [x] Consider using NextImage for optimizing the SelectedGallery images (Done as much as I could)
-   [x] Rework some of the designs to make it more stand out (Dropped)
-   [ ] Add a logger for the application to log any problems and errors encountered
-   [ ] Consider migrating to a self-created / self-hosted backend, where most info is stored in database while the images are stored in Google Drive itself
-   [x] Add a Contact Us Page
-   [x] Add a Search Result Function / Feature for the Gallery
-   [x] Add a Category Field and Filter by Category for the Gallery (Dropped, Maybe in future)
-   [ ] Test for Apple Device compatibility (iPhone, iPad, etc.)
-   [x] Bug: When There's no Gallery in database, the display is wrong.
-   [ ] Bug: When no ImgSrc for Our Team, it will display a text. Should display a default profile picture image.
-   [ ] Reformat all code to follow the same format (All use Arrow function, all have props, etc.)
-   [ ] Add features where users can change the image or most of the other info in the website from sanity itself
-   [ ] Have a Container Padding / Margin Size theme (Like font size "xl" "2xl" etc.)
-   [x] Create multiple components that have been reused (Home About Us Line, Gallery Preview Line)
-   [ ] Optimize the way of fetching data. This includes: Displaying Search Result (Pass all gallery data and filter data client-side instead of server-side in order to reduce query amount). May consider using context management (React Redux)
