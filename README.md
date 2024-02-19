# Explore Solar System Project

## Contents
1. [Problem](#problem)
2. [Solution](#solution)
3. [How To Use The App](#how-to-use-the-app)
4. [What I Learned](#what-i-learned)
5. [Tech Stack](#tech-stack)
6. [How To Run Locally](#how-to-run-locally)

## Problem

This was given as a hackathon at the School of Code.  We were divided into small groups and given a brief to build an MVP using React and Next.js.  Although we had been learning and using React for the previous week or so, Next.js was completely new to use and we had not had any tuition on it at all.  The idea was to simulate a real world environment to mirror the dynamic nature of a developer's life.  All the activities (from conception to presentation) took place over a 2-day period.

The objectives were to:
- learn and apply Next.js to build a functional prototype
- understand and demonstrate the benefits of Next.js over vanilla React
- develop an app highlighting key Next.js features, like server-side rendering and file-based routing
- deliver a functional MVP within the strict 2-day timeframe
- subsequently, to reinforce learning of Typescript and Tailwind

After some discussion, we decided that we wanted to build an app that would gather data about the solar system from an api or two and present the data in an educational format.  The interface would allow us to explore the file-based routing system in Next.js as we presented information about each planet.  We also wanted a fun interface where a user could click on an image of the planet to get further information.

## Solution

[Deployed here](https://explore-solar-system-ts.vercel.app/)

As per the brief, the solution was implemented using React and Next.js.  It is primarily designed to be viewed on a small screen such as a mobile device.  Subsequent to the original project, I have revisited the project and amended it to include Typescript and Tailwind.

The app extracts data from 2 APIs.  One provides the information on the planetary bodies such as the size and distance of the planets and information about the plante's moons (if any).  The other provides information on who is currently in space and where they are.  We supplemented this with further information such as a narrative descriptioned for each planet, held in a locally created JSON file.

The 2 APIs used were:
- [Solar System Open Data](https://api.le-systeme-solaire.net), which provides all of the data on the planetary bodies
- [Open Notify](http://open-notify.org/), which provides the data on who is currently in space

You can find a link to the deployed site above or at the right-side of this page.

I intend to work further on this project to introduce Tailwind CSS and TypeScript for some further practice in those technologies.  I also intend to improve accessibility for an interface which is currently predominantly mouse-driven.

[Back to top](#explore-solar-system-project)

## How To Use The App

When the initial screen is loaded, click on any of the planets to show a detail page for that planet, which includes information such as the size and distance as well as lots of information about the planet's moons (if any).  Alternatively, use tab to navigate around and to show the detail screen for the planet.  At the bottom of the initial screen, you can see information about how many people are in space right now, what their names are and where they are.

[Back to top](#explore-solar-system-project)

## What I Learned

Number one is that it is amazing how quickly you can become functional at a basic level with a completely new language/framework in a very short period of time.  This is a key area where teamwork comes into play as the learning tasks can be subdivided so that whilst any one team member may not have the full picture, as a team we were able to construct an MVP.

We all learned a lot about the advantages of Next.js vs React.  At a high level, these were:
- file-based routing system.
  - this made it easy to construct a common function to show the planet details, using only the query parameters passed.  This took some while to figure out, but speed up development considerably, not only avoiding having to write multiple funtions but also in not having to debug multiple functions.
- data caching was simpler in Next.js than in React - there was a single fetch from the Solar System Open Data api which was cached.  This improved performance considerably.
- server side rendering, improving the initial load time of the pages

One unexpected learning was how much trouble the Solar System Open Data api caused.  This is a French api and as a consequence, the keys are in French - so they include special characters (e.g. Vénus) and spaces (La Terre).  This caused issues when passing the keys around (we found that special characters and spaces were often dropped) and with key matching (matching French keys against English).  This created an inordinate amount of debugging time and with hindsight I think we could have found a better way of approaching it.

Overall I really enjoyed working with React and Next.js and I intend to focus a good amount of effort in furthering my knowledge of these two technologies.

[Back to top](#explore-solar-system-project)

## Tech Stack

React, Javascript, Typescript, Tailwind, Next.js

## How To Run Locally

Clone the project

```bash
  git clone https://github.com/Dug-F/ExploreSolarSystemTs.git
```

Go to the project directory

```bash
  cd explore-solar-system-ts
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Click on the link shown to invoke the app in your browser

<hr>

[Back to top](#explore-solar-system-project)
