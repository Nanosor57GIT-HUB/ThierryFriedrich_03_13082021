![logo](https://user-images.githubusercontent.com/84918375/178348430-c7b1a04e-cf07-431f-992d-3540e822f9ec.svg)

# Projet 12 SportSee/Openclassrooms

---

### Project directed by Thierry Friedrich

#### SportSee, project to create a "dashboard" page for monitoring energy expenditure. The user can follow the information concerning his efforts in sports expenditure on the week and day / day.

#### Design based for a Desktop version of minimum 1024px x 780px. There is no Tablet/Mobile version yet.

#### according to a model set up on the figma site : [UI-design-Sportify-FR](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)

---

##### Prerequisite:

- nodeJS (version 16.15.1)
- yarn

##### Langage: JavaScript

##### Framework: ReactJS

##### Dependencies:

- React (version 17.0.2)
- React-DOM (version 17.0.2)
- React-router-DOM (version 6.3.0)
- Recharts (version 2.1.11)

### Deployment on github:

devDependencies:

- gh-pages

homepage:

- https://nanosor57git-hub.github.io/P12-sportsee/

##### IDE: Visual Studio Code

##### Doc: JSDoc integrated with VSC

---

## How to install

1. Clone the [P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) project to your computer. This is the repository that contains the API needed to use the project.

2. Open this folder with your IDE (Visual Studio Code type). Launch the terminal and pass the yarn command which will allow you to install the dependencies. Then use yarn dev to run the API on port: http://localhost:3000 of your browser.

- Do not close the terminal and go to the next step.

3. Clone the [SportSee](https://nanosor57git-hub.github.io/P12-sportsee/) Project to your computer.

4. Open it on your IDE (Visual Code Studio type). Launch a new terminal and do an npm install. Once installed, do npm start to allow the execution and the opening of the project on your browser.
   During the opening of the project, you will be asked to confirm the opening on another port. Answer yes (y), the opening will continue to run on the port: http://localhost:3001 of your browser.

5. At the opening of the project, a Home page was created specifically for the demonstration. It will allow you to navigate between the two available users.

---

## Preview project on github:

#### The rendering of the SportSee project can directly be viewed on github. To do this, simply follow steps 1 and 2 and come back by clicking on this link: [SportSee Project](https://nanosor57git-hub.github.io/P12-sportsee/)

---

### Possible endPoints on API port (3000)

This project includes four endpoints that you will be able to use:

http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

Examples of queries
http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
http://localhost:3000/user/18 - Retrieves user 18's main information.
