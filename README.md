# starWarsMGLT instructions

download and install the latest version of Node.js software
https://nodejs.org/en/download/

enter the terminal of your operating system

download the project folder
git pull https://github.com/denysrocha/starWarsMGLT

enter the folder
cd starWarsMGLT

install dependencies
npm install

start server with hot reload at localhost: 8080
npm run dev

in your browser access
localhost: 8080

# ------------------------------------------------- --------------
for build for production with minification
npm run build

download software to be your web server (Nginx) in
http://nginx.org/en/download.html

copy the content generated (index.html and static folder) in the dist folder to your web server (example: C: \ nginx \ html)

start your web server
double-click nginx.exe in C: \ nginx

Visit your browser on localhost


# ------------------------------------------------- ------------
The purpose of this application is to solve the following problem:
Given a distance in MGLT (megalights), we want to know how many stops on planets each star ship must make to meet the reported distance


Resolution
To solve a function was created that uses the following inputs:
- reported distance
- spacecraft capacity in MGLT
- consumables capacity

The resolution formula was as follows:
distance / (MGLT * capacity of consumables)
where consumables capacity refers to time (example: 1 month, 2 weeks)

# ------------------------------------------------- -----------
In the application you can navigate between elements, for example:
click on the ship
click on a pilot
click on your home planet

To do this, several service calls are made by passing the click object
Navigation is based on validations of null or filled objects

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
