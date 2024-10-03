<h1 align="center">Drone Data</h1>

`main image`

## Description:
Drone Deploy Data with React.js application with Node.js backend that can be used to display Dummy Data. 

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
> npm install cors
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Helpful Hints (Node.js)
- confirm that config is up to date:

```
> node -v
> npm -v
> git --version
> npm express -v 
```

- Initial package.json & install dependencies (localhost:8080):
```
> cd <backend name>
> npm init -y
> npm install express cors
> npm install -g nodemon
```

- In a separate terminal run
```
> npm start
```

- **Avoid** *npm run start* and use the `npm run develop`. 
- Allow server to restart with each edit (see resources): 
    - **Content-Type Builder**: Item entry
    - **Media Library**: upload photos
    - **Permissions**: Settings > Roles > Public 
- In frontend fetch `item` from backend (*localhost:5000*):
```
const grouping = "items"
const items = await fetch(
`http://localhost:5000/api/${grouping}`
)
```
<!-- --------------------------
### Deployment -->

--------------------------
## Resources & Requirements:


`<examples below>`
- **PostMan** for API Tests [here](https://www.postman.com/)
    - jsonwebtoken / [jwt](https://jwt.io/) for Authentification & install [here](https://www.npmjs.com/package/jsonwebtoken)
    - jwt Debugger [here](https://jwt.io/#debugger-io)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) part of password hasing for user Authentification. 


#### **helpful hints:** 
- Object and list looping should always be checked first, common issue...
- In the event of `ctl-s` going wrong check Grid numbers (max 12 in MUI)
- issues with importing data
```
  "type": "module",
  ```

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
- Table to display Data from Front End or Cards? 
- Fetch all the data from the backend on the front end?
- Filtering method for it?
- Example would be ALL Data? 
-->
