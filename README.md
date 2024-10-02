<h1 align="center">projectsFULLSTACK</h1>

`main image`

## Description:
Outline for general FULLSTACK DEVELOPMENT PROJECTs

## Technology Stack
- **Frontend/Client:** React.js, HTML5, CSS, framework, etc.
- **API:** api calls or external sources used
- **Backend/Server:** node.js/express or python alternatives, include databases

## Screen Shots:
<p align="center">Please reference the screenshot folder for more available images</p>

`selected image 1`

`selected image 2`

`selected image 3`

## Run Code (Environment)

### Front-End Instructions `<examples below>`
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependenies(localhost:3000):
    - Must be `cd`'d into frontend/client for install
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
```
> npx create-react-app <project name>
> cd <project name>
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save react-router-dom
> npm install react-redux @reduxjs/toolkit
> npm install formik yup dotenv react-responsive-carousel
> npm install --save @stripe/react-stripe-js @stripe/stripe-js
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Helpful Instructions `<examples below>`
- Initial package.json & install dependencies:
    - Must be `cd`'d into backend/server for install
```
> npx create-strapi-app@latest <project name>
> cd <project name>
> npm install --save stripe
```
- Strapi Database generated (ctrl-c to exit):
```
> npm run develop
```
- **Avoid** *npm run start* and use the `npm run develop`. 
- Allow server to restart with each edit (see resources): 
    - **Content-Type Builder**: Item entry
    - **Media Library**: upload photos
    - **Permissions**: Settings > Roles > Public 
- In frontend fetch `item` from backend (*localhost:1337*):
```
const grouping = "items"
const items = await fetch(
`http://localhost:1337/api/${grouping}`
)
```
--------------------------
### Deployment

--------------------------
## Resources `<examples below>`

- `Tech used and links associated`
- `Tech used and links associated`

`<examples below>`
- **PostMan** for API Tests [here](https://www.postman.com/)
    - jsonwebtoken / [jwt](https://jwt.io/) for Authentification & install [here](https://www.npmjs.com/package/jsonwebtoken)
    - jwt Debugger [here](https://jwt.io/#debugger-io)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) part of password hasing for user Authentification. 


#### **style:** 
- `frameworks and links associated`

- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 
- Google Fonts [here](https://fonts.google.com/)

#### **requirements:** 
Requirements:
1. Frontend:
○ Preferred: Angular (extra credit for using TypeScript)
○ Fallback: Use a frontend framework you are comfortable with (React, Vue, etc.).
○ Build a clean, responsive UI that allows users to input and receive information.
○ Display the drone data provided on the page in a simple table or card format.
○ Input box for user queries (e.g., “What is the altitude of the second image?” or
“What is the battery level of the drone during the last image?”).
○ Display the AI response or the mock response.
2. API:
○ Preferred: Python (e.g., Flask or FastAPI).
○ Fallback: Use Node.js or another language if you are not familiar with Python.
○ The backend should:
■ Receive a user query.
■ Use an AI service (Gemini, OpenAI, Anthropic) to interpret the question
and retrieve the relevant data.
■ If AI service integration is not possible in the allotted time, mock the
response with some minimal logic and return it to the front end.

3. AI Integration (Optional but encouraged):
○ Integrate with Gemini, OpenAI, or Anthropic to handle natural language
queries.
○ If AI integration is not feasible, provide a mock response.
4. Optional Bonus:
○ Use TypeScript if working with Angular or another framework that supports it.
○ Add a feature that allows sorting or filtering the drone data table based on
user-selected criteria.
○ Implement basic unit tests.
5. Instructions:
○ Provide clear instructions on how to run both the frontend and backend.
○ Ensure that the app can be run locally with minimal setup

Frontend: Clean UI/UX, input handling, and responsiveness.

● Backend: Clean API design, AI (or mock) integration, and ability to answer user queries
accurately.
● Overall: Code clarity, structure.


<!-- 
### TODO stx: 
Future Structure (stx):
-->
