#  🍽️ easy seat - Restaurant Reservation System

<a name="intro"/>

### Introduction

easy seat is a restaurant booking system and table manager. Users can view, create, edit, and delete reservations. Users can also search reservations by phone number. Users can create new tables, seat reservations at them, and also delete the table.  

[✨ Live Demo Link](https://reservation-system-front-end.vercel.app/dashboard)

### Table of Contents  
- [Introduction](#intro)
- [Tech Stack](#tech)  
- [Features](#features)
  - [Reservations](#reservations)
  - [Tables](#tables)
- [Custom Database Setup](#database)
- [Local Installation Instructions](#install)

<a name="tech"/>

## Tech Stack

**Frontend**
 - React JS
 - HTML
 - CSS
 - Bootstrap 5
 
 **Backend**
 - PostgreSQL
 - Express JS
 - Knex JS
 - CORS

<a name="features"/>

## Features

<a name="reservations"/>

### Reservations

### Create a new reservation
You can create a new reservation by clicking on ```+ New Reservation``` on the top of the page, or by clicking on the ```+``` next to the reservations list. Each reservation requires a first name, last name, phone number, party size, reservation time, and reservation date.

> Trying to create a reservation with an empty feild, at a date in the past, after the restaurant closes, or less than an hour before the restaurant closes will return an error.

![Imgur](https://i.imgur.com/MZ5ffpm.gif)

### Seat a reservation
To seat a reservation, click on the ```Seat``` button on the bottom of the reservation card. This will bring you to the Seat Table page where you can select a table.

After seating the reservation, the table status will be updated to "Occupied" and the reservation status will be updated to "Seated"

> If the party size on the reservation is too big for a certain table, the option for that table will be disabled on the dropdown list.

![Imgur](https://i.imgur.com/FuIwIzN.gif)

### Edit a reservation
You can edit a reservation by clicking on the ```Edit``` button on the bottom of the reservation card. This will open the Edit Reservation Page which is prefilled with the reservation info. All fields can be edited here.

![Imgur](https://i.imgur.com/ZTbQnxU.gif)

### Cancel a reservation
To cancel a reservation, click on the ```cancel``` button on the bottom of the reservation card. Cancelling a reservation will change its status to "Cancelled".

![Imgur](https://i.imgur.com/M5DO7ab.gif)

### Search Reservations
To search for a reservation, click on ```Search``` on the navbar. This will bring you to the Search Reservations page. To find reservations, you can enter a partial or full number. This will bring up all reservations that contain that number regardless of its current status. 

![Imgur](https://i.imgur.com/90IyFrP.gif)

<a name="tables"/>

### Tables

### Create a Table
You can create a new table by clicking on ```+ New Table``` on the top of the page, or by clicking on the ```+``` next to the tables list. A table requires a name and capacity. 

![Imgur](https://i.imgur.com/jhUVyvj.gif)

### Finish table
To free a table for a new reservation, click on the ```Finish``` button below the table. Afterwards the tables status will be updated to "Free" and it can seat a new reservation. 

![Imgur](https://i.imgur.com/xKSfEtF.gif)

### Delete a table
You can delete a table permanantly by clicking on the trash icon next to the table's title. 

> A table that is currently occupied cannot be deleted.

![Imgur](https://i.imgur.com/00ULOft.gif)

<a name="database"/>

## Database setup

1. Set up four new ElephantSQL database instances - development, test, preview, and production - by following the instructions in the "PostgreSQL: Creating & Deleting Databases" checkpoint.
1. After setting up your database instances, connect DBeaver to your new database instances by following the instructions in the "PostgreSQL: Installing DBeaver" checkpoint.

### Knex

Run `npx knex` commands from within the `back-end` folder, which is where the `knexfile.js` file is located.

<a name="install"/>

## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5001`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.
