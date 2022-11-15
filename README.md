<br />

<div align="center">
  <a href="https://github.com/xPimenta/PokeAPI-BackEnd">
    <img src="https://res.cloudinary.com/dlua7rfnv/image/upload/v1668538597/pokeapi_256-removebg-preview_mnctql.png" alt="Logo" heigth="90">
  </a>

  <h3 align="center">PokeAPI Comments POC</h3>
  <div align="center">
    Back-End Development Project 
    <br />
  </div>
</div>

<div align="center">
  <h3>Built With</h3>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/prisma-5A67D8?style=for-the-badge&logo=prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/postgresql-2F6792?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/vitest-6DA13F?style=for-the-badge&logo=vitest&logoColor=white" height="30px"/> 
   
</div>

<br />

<div align="center">
   <a href="https://github.com/xPimenta/PokeAPI-BackEnd" alt="Current template version badge">
    <img src="https://img.shields.io/badge/license-MIT-%23A8D1FF?style=flat-square" />
  </a>
</div>

<!-- Table of Contents -->

# Table of Contents

- [Deployed Instances](#deployed-instances)
- [Installation and Usage](#installation-and-usage)
- [Error Handling and Logging](#error-handling-and-logging)
- [API Reference](#api-reference)

<!-- Deployed Instances -->

## Deployed Instances

- [Server](https://pokeapi-comments.herokuapp.com/) `https://pokeapi-comments.herokuapp.com/`

<!-- Installation and Usage -->

## Installation and Usage

###### Pre-requisites: Node.js `^16.14.0`, TypeScript `^4.7.4`

Download the zip file and extract it in the root of a new project folder by running these commands:

```bash
wget https://github.com/xPimenta/PokeAPI-BackEnd/archive/main.zip
```

Then run the following command to install the project's dependencies:

```bash
npm install
```

Now you have to start your PostgreSQL database

```bash
sudo service postgresql start  
```

And configure your .env and .env.test as the examples, acording to your database url.
#


That's it! You can now start developing your TypeScript Project by running the command below. Happy coding!

```bash
npm run dev
```

You can test your application with PostgreSQL database server by running the command bellow: 

```bash 
npm test                        
npm run test:coverage            
```

<!-- Error Handling and Logging -->

## Error Handling and Logging

While dealing with errors in a _Layered Structure_ Project enviroment, you may notice that the project's debugging complexity scales beyond common `console.log()` usage. The `ErrorFactory` Object structure was set to counter that exact issue, by trying to keep the Development process as clean and concise as possible.

#### ▸ &nbsp; ErrorFactory

An `ErrorFactory` Object is used to handle errors in the application. It that takes one or two entry parameters, and return other two:

- `errorType`: An integer containing the HTTP status code
- `errorJoi`: A string to identify Joi errors

- `message`: A string containing a simplified error message, for _Client side_ use. **This is the message that will be returned in the request error.**
- `statusCode`: Return an integer containing the HTTP status code.


##### Example Usage

```typescript
  // ..../middlewares/validateSchema.ts
	import Joi from "joi"
	import { Request, Response, NextFunction } from "express"
	import { errorFactory } from "../utils/errorFactory"

	export function validateSchema(schema: Joi.ObjectSchema) {
  		return async (req: Request, _res: Response, next: NextFunction) => {
    		const validation = schema.validate(req.body, { abortEarly: false })
    		if (validation.error) throw errorFactory("error_invalid_body", "true")
    		next()
  		}
	}
```

# API Reference

In this section, you will find the example API's endpoints and their respective descriptions, along with the request and response examples, as well as the [PostgreSQL](https://www.postgresql.org) types for each entity, that can be used as guide for data formatting. All data is sent and received as **_JSON_**.

<!-- Models -->

## Models

### User model _`User`_

- `id`: A unique identifier for each user. `ObjectId`
- `name`: The user's name. `String` `required`
- `email`: The user's email. `String` `required`
- `comment`: The user's comment. `String` `required`
- `pokemon`: The comment pokemon. `String` `required`
- `pokeImageUrl`: The pokemon image. `String` `@default("")`
- `createdAt`: The date and time when the user was created. `Date`

## Routes

### [Online](#online) _`/`_

- [Post a Comment](#---postComment) _`/postComment`_
- [Search All Comments](#---search-all-comments) _`/comments`_
- [Search Comments by Pokemon](#---search-pokemon) _`/comments?pokemon=YOUR_POKEMON_NAME`_
- [Search Comments with Pagination](#---search-comments-pagination) _`/comments?limit=10&page=1`_
- [Search Comments by Pokemon with Pagination](#---search-pokemon-pagination) _`/comments?pokemon=YOUR_POKEMON_NAME&limit=10&page=1`_

## Requests

### &nbsp; ‣ &nbsp; Post Comment

###### &nbsp; &nbsp; POST _`/postComment`_

#### &nbsp; ☰ &nbsp; Request

##### Body

```json
{
  "name": "JohnDoe", 
  "email": "jhondoe@gmail.com", 
  "comment": "jhondoe comment test",
  "pokemon": "pikachu"
}
```

#### &nbsp; ☰ &nbsp; Responses

| Status Code |       Description       |          Properties          |
| :---------: | :---------------------: | :--------------------------: |
|   **201**   |           Created       |      `data: { comment }`     |
|   **400**   | Invalid Request Input   | `error: { message, detail }` |

#


### &nbsp; ‣ &nbsp; Get Comments

###### &nbsp; &nbsp; GET _`/comments`_

#### &nbsp; ☰ &nbsp; Request

##### Query String

```json
/comments?
/comments?pokemon=YOUR_POKEMON_NAME
/comments?limit=10&page=1
/comments?pokemon=YOUR_POKEMON_NAME&limit=10&page=1
```

#### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties          |
| :---------: | :-------------------: | :--------------------------: |
|   **200**   |          OK           |         `data: null`         |
|   **400**   | Bad Request | `error: { message, detail }` |
|   **404**   |   Not Found   | `error: { message, detail }` |
