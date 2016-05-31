# Hello Express and Node.js!

This repo is for me to play around with Express.js and Node.js in order to build dynamic web applications.

## Installation

Want to play along at home? You'll need [node.js](https://nodejs.org/en/) (and with it npm), [bower](http://bower.io/), and [gulp](http://gulpjs.com/) installed.

To kick things off on the UI side, run the following to install dependencies:

``` $ npm install ```

``` $ bower install ```

## MySQL Configuration

The database backend is MySQL. See the instructions about creating the database table in your own MySQL server database in the `seed.js` file.

In order for your project to connect to MySQL, you'll need to provide the config file with your MySQL server connection parameters. Do this by going into the config directory:

``` cd src/config ```

and copying the sample file to the mysqlconf file location:

``` cp mysqlconf.sample.js mysqlconf.js ```

Open the new mysqlconf.js file you just created and put your own values. In order to test that your configuration is set up correctly, you can run:

``` $ node dbtest.js ```

This will either show an error in connection or let you know that everything went smoothly.

In order to seed the database with our dummy data:

``` $ node seed.js ```

