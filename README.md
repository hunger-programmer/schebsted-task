[![MORS](https://www.oliviacentre.com/wp-content/uploads/2016/12/schibsted-logo.png)](https://www.oliviacentre.com/wp-content/uploads/2016/12/schibsted-logo.png)
 
# Schibsted Music APP
 

## Repository introduction

**Schibsted Music App** is application which provides you posibility to listen and browse your favorite videos on YouTube.  
Application server is based on NodeJS with Express framework. All routes and frontend application are based on React.

### How to browse and manage Videos?
Application has 2 states; First you can see predefined Videos; And next one - you can create new video by simple form;

#### Create tutorial:
* Go to */create* 
* Fill form(application require valid YouTube video URL)
* Submit Form

#### Browse/Manage tutorial:
* Select and Click Video
* Proceed Video to next column if you want

## Quick start

```bash
# Clone the repository
git clone git@github.com:hunger-programmer/schibsted-task.git

# Go inside the directory
cd schebsted-task

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Development mode
In the development mode, we will have 2 processes running. The front end code will be served by Node and Twig template engine. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.


## Documentation

### Folder Structure
All the source code of frontend application will be inside **src** directory.
All the source code of backend application will be inside **server** directory. 
