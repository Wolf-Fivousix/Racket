# Racket

[Racket Live Website](https://racket-discord.herokuapp.com/)

Racket is a real time chatting plataform pixel perfect clone of Discord. Racket allows you to create private/invite-only servers to send and receive messages through a RESTful application.
This project was designed and implemented in 10 days, totalling 80h of work. And improved upon later in time.

## Table of Contents
* [Technologies](#technologies)
* Highlights
* Code Snipets


## Technologies
  * React/Redux on the Frontend.
  * Ruby on Rails on the Backend.
  * PostgreSQL Data Base.
  
Servers, Channels, Messages are all CRUD
CSS Pixel Perfect design
Responsive
  ###### GIF of the website showing in different sizes.
User Bootstraping and User Auth
  ###### Show errors displaying by field. Image of All Fields errors => Some field errors (use guest@guest.com to show already taken e-mail) - Eventually make it into a GIF.
Servers are shared by a joint membership table.
ServerItem Icon styled on click using Event Capturing and Bubbling.
Multiple differently styled scroll bars.


## Future Features
  * Implement images, giffs and videos embedding.
  * Implement Real Time texting (Action Cables).
  * Create Channels dropdown menu.
  * Create Servers Options modal.
  * Style Channels Options modal.
  * Fix the display layout for phone screens in the Media Query
  * Implement message deletion.
  * Double check need for "getServer" server action
  * Style Servers Options modal.
  * Create user Banner on bottom of Channel list.
  * Implement Gif and Youtube video chat support.
  * Implement AWS for user pictures.
  * Implement Voice chatting.
  * Implement Video chatting.
  * Implement Server Joining by invite instead of ID.
  * Refactor Server Show components and styling from absolute.
  * On Page Refresh do not push default channel.
  * Add online counter for members.
  * Add "Start of history" message on newly created channels.
  * Display channel gear only on hover for non selected channels.
  * Change server drop down menu to a modal that will close on outer clicks.