# Justice for Fakelandia

## Introduction

The faraway country of Fakelandia has decided to modernise their justice system with a fancy new technology: "websites".

Fakelandia is a happy place with a low crime rate, but it's important to each citizen that justice is seen to be served, so they'd like a website to keep abreast of the latest justice developments - and they've specifically asked for YOU to help out.

Your job is to create a _React app_ which meets their requirements.

_This lab won't lead you step-by-step through each line of code_, but it will lead you through all of the stages of building the app.

You're going to be building the app entirely from scratch, so you'll get to use your own creativity to decide what a good solution looks like as you bring the designs to life.

This is your chance to show off everything you've learned about building React applications, so feel free to be creative and have some fun.

Remember the importance of:

-   Writing tests for your components
-   Using BEM to write scalable, reusable CSS
-   Keeping your components small and refactoring them into sub-components where necessary
-   Using hooks to store state, make API calls, and pass data down to sub-components through contexts

## Crimes and Misdemeanours

The Fakelandians have asked for a site that lets them browse lists of crimes committed today, and also for functionality that helps citizens confess to their own crimes.

As a non-citizen, you might not be aware that there are only four possible crimes in Fakelandia:

-   Mild Public Rudeness
-   Speaking in a Lift
-   Not Eating Your Vegetables
-   Supporting Manchester United

Despite the clear severity of some of these awful crimes, the Fakelandians refer to them all as "misdemeanours".

## Project Structure

The Fakelandians have provided you with a functioning web server which you can call to get details of any recent crimes.

Let's test that out first.

👉 Run `npm install` and then `npm run start-server`

⚠️ NOTE: The command is `npm run start-server` NOT `npm start`

The server will start up. You should see a little welcome message in your terminal:

![Server Welcome](./docs/images/server_welcome.jpg 'Server welcome message')

It seems you can access the server by browsing to various URLs.

👉 In your browser, navigate to the health check route `http://localhost:8080/health`

You should see a message:

"👍 Okay! The server is responding! 🙌"

👉 In your browser, navigate to the API route `http://localhost:8080/misdemeanours/3`

You should see a JSON object being returned from the GET request to that route. Try changing the parameter at the end to another number, or to a random string.

Okay, so that's the server our React app is going to be interacting with.

First, we're going to need a React app.

## Creating your application

To create your application, run the following command in the root folder:

```
npx create-react-app@latest ./client --template typescript
```

This will setup a fresh React app for you in a subfolder called `/client`, with TypeScript already enabled.

👀 Notice that in the root `package.json` there is a convenience command setup in the `scripts` section:

`"start": "concurrently -n client,server -c cyan,magenta \"npm run start-client\" \"npm run start-server\""`

This uses an `npm` package called `concurrently` to run both the client React app and the server at the same time when you run `npm start` in the root folder.

👉 Ensure your server is stopped by pressing `Ctrl-C` in the terminal where it is running.

👉 Run `npm start` to start up both your server and your React app.

You should then be able to access the default application by opening the browser and visiting

[http://localhost:3000](http://localhost:3000)

👉 🤚🛑⛔ STOP 🤚🛑⛔ At this point, you should be able to browse to BOTH your server at the health check or API routes we tried above, AND in another tab you should see your starter React app.

🙌 If both are running at the same time, then we're good to go!

👉 Once you add tests to your client, you can start them by running `npm test-client` in the root folder.

👉 If you want to start the server, the client, AND run your client tests simultaneously you can stop everything and run this command:

```
npm start & npm test-client
```

## Let's get started

Once you're happy you have got the client and server running together, it's time to start building the app the Fakelandians want.

Let's start with the homepage in [activity 1](./docs/activity_1.md).
