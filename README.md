# The-Storyteller-Website

This is the source code for a website commissioned by a client. The website is created and maintained by myself. This project is canceled and not in development anymore due to client's request. This README file will contain information and instruction on setting up and run the code.


**System tested on:** <br/>
OS: Arch Linux, Linux LTS 6.6.67, Wayland Compositor <br/>
Processor: Intel® Core™ i5-1035G1 CPU <br/>
Memory: 8Gb of RAM <br/>
Graphics: Intel Iris Plus Graphics G1 <br/>

**Software Versions:** <br/>
ChakraUI 2.10.6 (UI Components) <br/>
NextJS 14.2.24 (Mainly Frontend Client) <br/>
Next-Sanity 8.5.5 (To interact with Sanity CMS APIs through NextJS) <br/>
TypeScript 5.7.3 (Typing for Project) <br/>
Yup 1.6.1 (Verification) <br/>
Formik 2.4.6 (Creating forms) <br/>
and other minor software... <br/>

> [!warning]
> <b>THIS PROJECT IS NOT IN DEVELOPMENT ANYMORE. IF THERE ARE ISSUES RUNNING THE CODE, REVERT TO AN OLDER VERSION OF DEPENDENCIES SHOULD RESOLVE IT.</b>

---

<br />
<br />

## Installation

### Prerequisites

Ensure that you have a JavaScript Environment set up in your device (Preferably NodeJS) and a package installer to install the necessary dependencies (NPM or yarn).

### Steps to Installation

1. Download or git clone the repository. <br/>
`git clone https://github.com/JoeMingT/deep-sea-cleaner`

2. Then, install the necessary packages and dependencies. <br/>
```bash
npm install
# or
yarn install
# or
bun install
```

3. Finally, start the development server by running the run script. <br/>
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Switch to the `demo-app` branch to avoid errors (due to the lack of environment variables):
```bash
git checkout origin/demo-app    # Assuming that you don't have the local branch ready
# or
git switch demo-app
```

5. Open your localhost in port 3000 (by default) with your browser to see the result:
`http://localhost:3000`


## Screenshots and Demo Video



## Roadmap

- [x] Add a Custom 404 Page
- [x] Consider using NextImage for optimizing the SelectedGallery images (Done as much as I could)
- [x] Rework some of the designs to make it more stand out (Dropped)
- [ ] Add a logger for the application to log any problems and errors encountered
- [x] Consider migrating to a self-created / self-hosted backend, where most info is stored in database while the images are stored in Google Drive itself (In Consideration, )
- [x] Add a Contact Us Page
- [x] Add a Search Result Function / Feature for the Gallery
- [x] Add a Category Field and Filter by Category for the Gallery (Dropped, Maybe in future)
- [x] Test for Apple Device compatibility (iPhone, iPad, etc.)
- [x] Bug: When There's no Gallery in database, the display is wrong.
- [x] Bug: When no ImgSrc for Our Team, it will display a text. Should display a default profile picture image.
- [x] Reformat all code to follow the same format (All use Arrow function, all have props, etc.)
- [ ] Add features where users can change the image or most of the other info in the website from sanity itself
- [ ] Have a Container Padding / Margin Size theme (Like font size "xl" "2xl" etc.)
- [x] Create multiple components that have been reused (Home About Us Line, Gallery Preview Line)
- [x] Optimize the way of fetching data. This includes: Displaying Search Result (Pass all gallery data and filter data client-side instead of server-side in order to reduce query amount). May consider using context management (React Redux/React Context) [Dropped, could not figure out a good method to do this. Considered to check at server side, but can't check state at SSR. Considered using default data before fetching but may caused visual glitching.]
- [x] Gallery Preview No Data Check
- [ ] Recheck Display and View in Larger Monitor Screen. Probably have to set MaxWidth or MaxHeight for some components so it doesn't become too big.
- [ ] Add Accessibilities (type in inputs / buttons, alt in images, etc.)
- [x] Check all data value (In case there are invalid values or unable to load cases)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

Thank you very much to my client in his trust to hire me to work on this project. This project has been a very fun and I was able to learn apply plenty of my web development knowledge to its fullest potential.


