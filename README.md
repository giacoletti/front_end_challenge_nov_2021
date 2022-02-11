# Frontend Assessment - Star Wars GraphQL Challenge

Your task is to build a small single-page frontend application with information about Star Wars planets and their residents. 🪐

## Before you get started

### Familiarization with the API

For this challenge, you will be using the GraphQL version of the Star Wars API, located at: [SWAPI GraphQL API](swapi-graphql.netlify.app). Queries from your app to this API should be pointed towards [this URI](https://swapi-graphql.netlify.app/.netlify/functions/index).
This API is a GraphQL port of the Star Wars REST API ([SWAPI - The Star Wars API](https://swapi.dev/)), so if you are unsure about any of the entities specified in the GraphQL API you can have a look at the documentation for the REST version: [SWAPI - The Star Wars API](https://swapi.dev/documentation#root)

Take a moment to familiarize yourself with the API to get to know how it works, which resources are available to you and how they tie together. 👀

## Your task

* Create a start page which lists all planets in a table
    * The table should have a column for: name, gravity, diameter and its population
    * The list should have a button for sorting the planets by their diameter, both in ascending and descending order. Since the API doesn’t have an option for sorting on the backend, you will have to do this client-side
    * Clicking on a row should take you to a page with detailed information for that planet
    * (Optional) Add pagination to the list of planets to improve the user experience
* A planet detail view
    * Should show information about the planet’s climates and terrains as well as all the information from the list view
    * Should also show a list of all the residents of the planet, with this information about each person: their name, birth year, gender, height (in centimeters) and mass (in kilograms). 
    * (Optional) Add pagination to this list to improve the user experience

_Note that some properties for both the planet and its residents might be missing in the database. Make sure to handle these cases gracefully_

### UI

You’re free to implement the UI for this application however you want. We won’t look too much at the design—we consider the functionality of the application the most important part in this challenge—but it’s definitely a bonus if it looks nice and appropriate for the target audience (fans of the Star Wars universe). 😉

### Tools, frameworks, languages, etc

Feel free to use whatever tools, languages or frameworks you want. 🌟 We consider and expect any skilled developer to be able to be at least somewhat tech-agnostic. Work in what’s most comfortable to you! 🦀

## Completing the task

When you feel you’re done with the challenge, create a pull request of your codebase on a new branch. Afterwards, sit tight and we will get back to you with a code review. 🔬
    When reviewing your code, we might ask you to clarify parts of the code. We encourage you to help us out by answering any questions we might have.
    If everything looks good and we’re satisfied with your answers, we’ll give you a LGTM and ask you to merge your PR. 🙌

There’s _no time limit_ for this challenge, but we recommend you not to spend more than **3 hours** completing it. 

## Our assessment

We will assess the following areas:
* How well you’ve completed the task from a purely functional point-of-view 🔨
* Code
    * How well you’ve avoided code duplication, if you’ve extracted re-usable pieces of code where appropriate. We will want to see whether or not you’re capable of creating an easily maintainable codebase 🏇
    * How easily understandable your solutions to the tasks are
    * We will **not** consider your code formatting—it’s a tiresome conversation and there’s great tooling for it out there 🤷🏼‍♂️

## In case of emergency…

If you need any help, feel free to open an Issue and ask any questions you might have. We’ll try to respond as soon as possible.

# A bit of help on the way

## Boilerplate

If you don’t know where to start with everything GraphQL, we’d recommend you to use [Apollo](https://www.apollographql.com/docs/). Start out by installing the Apollo Client in your project:

```bash
$ npm install @apollo/client
```

You can then initialize it like this:

```javascript
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client/core";

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});
```

To check that everything works, perform a test query:

```javascript
client.query({
  query: gql`
    query Planets {
      allPlanets {
        totalCount
      }
    }
  `
}).then(result => console.log(result))
```

/(`@apollo/client/core` is used in non-React environments, so if you’re using React you will want to change this to `@apollo/client`)/

This should be everything you need to get started.  You can then connect the Apollo Client to a provider in your framework of choice. An example for React: [Get started with Apollo Client - Client (React) - Apollo GraphQL Docs](https://www.apollographql.com/docs/react/get-started/#3-connect-your-client-to-react)

