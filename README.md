# Frontend Development Training
> By: Sabita Neupane

--- 

- Basic Development
  - HTML
  - CSS
  - JavaScript
  - Bootstrap
  - jQuery
- Intermediate Development
- Advanced Development

--- 

## API

- Setting and installing dependencies

  ```
  cd api
  npm install
  ```

- After setting, run server to view API (inside api folder)

  ```
  mongod --dbpath ~/data/db2
  npm run start
  ```

* Then view http://localhost:8010 to check the status of the API server. 

  ```
  {
      "status": "API is working fine."
  }
  ```

--- 

## API endpoint

* LIST: 
  - Method: GET
  - Endpoint: http://localhost:8010/students

* View/Read:
  - Method: GET
  - Endpoint: http://localhost:8010/students/:id

* Create:
  - Method: POST
  - Endpoint: http://localhost:8010/students/:id
  - Data: 
      ```  
        {
          "name": "Sabita Neupane",
          "email": "test@test.com",
          "rollno": "04"
        }
      ```

* Update:
  - Method: PUT
  - Endpoint: http://localhost:8010/students/update/:id
  - Data: 
    ```  
      {
        "name": "Sabita Neupane",
        "email": "test@test.com",
        "rollno": "04"
      }
    ```

* DELETE:
  - Method: Delete
  - Endpoint: http://localhost:8010/students/delete/:id

