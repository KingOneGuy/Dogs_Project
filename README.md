DEVELOPMENT INSTRUCTIONS
This is a React project that uses JavaScript and creates a website.

0. Install Yarn to install project dependancies. (This is a very common industry practice). Look below for commands to use once you 
have yarn installed.
1. Start small. Get the project to run and open in your browser it should greet you with a hello message.
2. Change the hello message. (Send me a screenshot I'd like to congradulate you for making it this far)
3. Get the dog information from the API
4. Display a single dog worth of information. (Send me another screenshot because you are killing it).
5. Continue with the rest fo the tasks under tasks. 

## Tasks

We got some dogs! They need to be displayed nicely. We need help with the following:

### 1. Display all the dogs

- It should be a two column layout where dogs appear on both sides of the page.
- It should be reasonably responsive.
- It should show all the information about the dogs.

There is no design for this, so show us your style.

You'll be able to call an endpoint that will give you all the data you need. It's a GET request to `/api/dogs`.

### 2. Sort the dogs

- Sort the dogs by their names, so they're alphabetically sorted.

### 3. Endless dogs

- When scrolling down, it should get more dogs and display them, infinitely.

To get more dogs, you can make extra GET calls to `/api/dogs`, and display the same dogs over and over.

## Getting Started

Install the dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying **pages/index.js**. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on http://localhost:3000/api/dogs. This endpoint can be viewed in **pages/api/dogs.js**.

CSS styles are located in **styles/Home.module.css**. There you can write SCSS or plain CSS, then access those styles in **pages/index.js**. There's an example style already hooked up named `styles.container`.


Good luck
- Curt ;)
Please message me with any questions on learning resources. Getting the project to build and run the first time will be challenenging since
you probably have never used a React or even a node project before. This is normal and would not be suprised if it tooks multiple hours.





