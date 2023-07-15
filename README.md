![logo_ironhack_blue 7](![image](https://github.com/omarakamal/lab-api-axios/assets/54825038/28d5f227-f19d-4d9f-bc91-4bc4bb48098a)
)

# LAB | Axios CRUD exercise

## Introduction

![image](https://user-images.githubusercontent.com/23629340/36733655-8c9903fa-1bd1-11e8-82f7-d425ab140c09.png)

In this exercise, we will use all what we have learned about APIs and how to connect an application to them through **Axios**.
## Requirements

- Fork this repo
- Then clone this repo

## Submission

- Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Instructions
We will first create a fake API using **JSON-Server** to then do an application to Create, Read, Update, and Delete characters from it. The routes available in this API are the following:

- **Verb:** GET, **Route:** "/characters"
  - It receives NO parameters
  - It returns the full characters list
  - It returns JSON
- **Verb:** GET, **Route:** "/characters/:id"
  - It receives the character ID as a parameter (route)
  - It returns the character with the indicated `id`
  - It returns JSON
- **Verb:** POST, **Route:** "/characters"
  - It receives an object as a parameter, with the following format:
    `{ name: string, occupation: string, cartoon: boolean, weapon: string }`
  - It returns the created character if there are no errors
  - It returns the wrong fields if there is some error
  - It returns JSON
- **Verb:** PATCH/PUT, **Route:** "/characters/:id"
  - It receives the character `id` as a parameter (route)
  - It receives an object as a parameter, with the following format:
    `{ name: string, occupation: string, cartoon: boolean, weapon: string }`
  - All the fields are optional
  - It returns the updated character if there are no errors
  - It returns "Character not found" if there is no character with the indicated `id`
  - It returns JSON / text
- **Verb:** DELETE, **Route:** "/characters/:id"
  - It receives the character `id` as a parameter (route)
  - It returns "Character has been successfully deleted" if there are no errors
  - It returns "Character not found" if there is no character with the indicated id
  - It returns text

### Iteration 1: The Fake API
![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_99257e2c4240770e6b4bdd406d943ac8.png)

In the `api` folder, create a `db.json` file. Inside our `db.json` we will specify the first 2 characters of our API, so we can start working with some data. Copy/paste the following characters in the file:

```javascript
{
  "characters": [
    {
      "id": 1,
      "name": "Han Solo",
      "occupation": "Smuggler",
      "weapon": "Blaster Pistol",
      "cartoon": true
    },
    {
      "id": 2,
      "name": "Luke Skywalker",
      "occupation": "Jedi Knight",
      "weapon": "Lightsaber",
      "cartoon": false
    },
    {
      "id": 3,
      "name": "Sponge Bob",
      "occupation": "Lives under the sea",
      "weapon": "Crabby Patty",
      "cartoon": true
    }
  ]
}
```

Then run the following code in the terminal to make our API start working:

```bash
$ json-server --watch .\api\db.json -p 8000
```
This should be the result on your terminal:
![image](https://github.com/omarakamal/lab-api-axios/assets/54825038/3e24d4fd-8c53-4c29-a848-c1d46e6937eb)

NOTE: Now your api is running on port 8000. test your routes using postman

### Iteration 2: The `index.routes.js` file

We have our API running, So now will create the routes in our application to handle the CRUD api calls for creating, reading, updating, and deleting resources from our api.

The routes that we will create create will each make a call to the following endpoints in our custom api:

- "/all":  Get all the characters info from _[http://localhost:8000/characters](http://localhost:8000/characters)_
- "/search": Get a single character info from _[http://localhost:8000/characters/:id](http://localhost:8000/characters/:id)_
-  "/search/new-character": Create a single character posting the data to _[http://localhost:8000/characters](http://localhost:8000/characters)_
-  "/search/delete": Delete a single character through his id in _[http://localhost:8000/characters/:id](http://localhost:8000/characters/:id)_
- "/search/edit": Edit a single character through his id in _[http://localhost:8000/characters/:id](http://ih-crud-api.herokuapp.com/characters/:id)_

You have to create an Axios call for each of these actions. The "/all" and "/search" routes should send the information of the 1 character to the index.hbs page
<!-- :::success -->

**Micro-advice**

To make sure everything is working, use [POSTMAN](https://www.getpostman.com/).

<!-- ::: -->

In this iteration, it's enough to show results in the console.


### Iteration 3: Fetch all characters

![image](![image](https://github.com/omarakamal/lab-api-axios/assets/54825038/48b27200-d02b-4b20-b20c-e04d24936716)
)

Retrieve all the available characters in the API and show them in the application. In order to do that, we need to:

- When the user clicks on the "Fetch All" button then a GET request should be sent to the '/all' route.
- this route should render the index.hbs page and pass the object containing all the characters to the hbs page.
- Finally, using the hbs helpers iterate through the array of all the characters and display them at the bottom of the hbs page.
- ![image](https://github.com/omarakamal/lab-api-axios/assets/54825038/7aeb6ea9-6a65-4055-bd5a-60a606ec6562)


### Iteration 4: Fetch one character

![image](![image](https://github.com/omarakamal/lab-api-axios/assets/54825038/3918ea01-e43f-4b10-9b27-cdd2cd345566)
)

Following the same idea as with fetching all, to retrieve a single character's data we need to:

- make an axios call in the '/search' route that will send an axios call to retrieve one character based on the user input in the input field.
- Search that character in the API with _[http://localhost:8000/characters/:id](http://ih-crud-api.herokuapp.com/characters/:id)_
- Get the data and render the index.js file with the one character data.
- ![image](https://github.com/omarakamal/lab-api-axios/assets/54825038/6c7a1714-c70c-4c95-8add-ab72b09b6635)


### Iteration 5: Delete one character

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3d893f20f95e5b13369375cdfd7900a5.png)

To be able to delete a character from the API database, we need to:

- make an axios call in the '/search/delete' route based on the id the user inputs in the input field.
- Delete that character in the API with _[http://localhost:8000/characters/:id](http://ih-crud-api.herokuapp.com/characters/:id)_
   <!-- :::danger -->
  **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- if the user is deleted then redirect the user back to the '/' route

### Iteration 6: Create new character

![image](https://user-images.githubusercontent.com/23629340/36733698-a7c64f8e-1bd1-11e8-9b7d-b37c7a800a27.png)

We will create a form with 4 inputs: name(text), occupation(text), weapon(text) and cartoon(checkbox).

- Once the user clicks on the submit button, a POST request should be sent to the '/search/new-character'
- In the route make an axios call to create the character based on the inputs of the user
- once the character has been created redirect the user back to the '/' route
   <!-- :::danger -->
  **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
  
### Iteration 7: Edit a character

![image](https://user-images.githubusercontent.com/23629340/36733714-b6257b36-1bd1-11e8-8518-c3f7e2ba034c.png)

We will create a form with 4 inputs: name(text), occupation(text), weapon(text) and cartoon(checkbox). Also, we will create a new input to indicate the `id` of the character we want to edit.

- Once the submit button is clicked a POST request should be sent to the '/search/edit' route that will edit the character based on the id passed and the new information for the fields.
   <!-- :::danger -->
  **Remember which HTTP verb you need in the request!!**
   <!-- ::: -->
- If the character was successfully updated, redirect the user back to the '/'.

That would be all!

Happy coding! :heart:

### BONUS: Iteration 8: Add feedback for successful and failed api calls

- add feedback to the user if the creating, retrieving, updating, or deleting a character has failed or succeeded
