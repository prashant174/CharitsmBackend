<h1 align="center">Charitsm Backend Assignment</h1>

## Deployed link

<br>
https://charitsmbackendassignmentbyprashant.onrender.com/

<br>

## Installation

```
npm install
```

## Start the Backend server 

```


npm run server
```


<br>

##  MVC Structure

```

     ├── config
     |    └── db.js
     ├── controllers
     |    └── todoController.js
     |    └── userController.js
     ├── middleware
     |    └── authenticate.js
     |    
     ├── models
     |    └── todo.Model.js
     |    └── User.Model.js
     ├──routes
     |    └── todoRoute.js
     |    └── userRoute.js
     └── index.js
```
Things to do before starting the server:- 

-  create `.env` file and put "PORT", "MONGODB_URL", "SECRET_KEY".
- "PORT" is for listening the server.
- "MONGODB_URL" write your mongo url here.
- "SECRET_KEY" write your jwt secret key here

<br>

## Schema 

<br>

<h3><strong>Schema for signUp</strong><h3>

```js

{
    "name": "enter your name ,
    "email": "enter your email here",
    "password": "enter your password here",
  
}
```

<h3><strong>Schema for login</strong><h3>

```js

{
    "email": "enter your email here",
    "password": "enter your password here",
  
}
```


<h3><strong>Schema for creating/posting  Todo</strong><h3>

```js
{
  "description":"Lunch",
  "completed":false
}
```

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/signup</td>
            <td>This endpoint should allow users to register</td>
            <td>201</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/login</td>
            <td>This endpoint should allow users to login.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/createTodo</td>
            <td>This endpoint is used to create new Todo  if valid token present in headers authorization with Bearer</td>
            <td>201</td>
        </tr>
         <tr>
            <td>GET</td>
            <td>/getTodoList</td>
            <td>This endpoint is used to get Todo list of authorized user if valid token present in headers authorization with Bearer</td>
            <td>200</td>
        </tr>
         <tr>
            <td>PUT</td>
            <td>/updateTodo/:id</td>
            <td>This endpoint is used to update Todo of authorized user by Todo id if valid token present in headers authorization with Bearer</td>
            <td>201</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/deleteTodo/:id</td>
            <td>This endpoint is used delete todo of authorized user if valid token present in headers authorization with Bearer</td>
            <td>200</td>
        </tr>
         <tr>
            <td>GET</td>
            <td>/getAllTodo</td>
            <td>This endpoint is used get all todo of all users if valid token present in headers authorization with Bearer</td>
            <td>200</td>
        </tr>
        
    </tbody>
</table>


<br>

## Thank you for visiting

