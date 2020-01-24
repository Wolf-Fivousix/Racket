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
    * React Hooks for simplified logic.
    * YouTube video embedding with React-Youtube.
  * Ruby on Rails on the Backend.
    * Live chatting with Web Sockets implemented by Action Cable.
  * PostgreSQL Data Base.
  
Servers, Channels, Messages are all CRUD
CSS Pixel Perfect design
Responsive
  ###### GIF of the website showing in different sizes.
User Bootstraping and User Auth
  ###### Show errors displaying by field. Image of All Fields errors => Some field errors (use guest@guest.com to show already taken e-mail) - Eventually make it into a GIF.
Servers are shared by a joint membership table.
Multiple differently styled scroll bars.
Video and image embedding.
### Real time chat communication with Action Cable and WebSockets.
Channels are mounted with a subscription private to that channel, allowing for users to communicate in real time. Any new message broadcasted by the server is automatically added to the global local state and React handles the re-rendering logic on the client machine in order to display it.
```JavaScript
    useEffect(() => {
        dispatch(getAllMessages(match.params.channelId));
        App.messages = App.cable.subscriptions.create(
            {
                channel: "MessagesChannel",
                channelId: `${match.params.channelId}`
            }, 
            {
                received: function(data) { dispatch(receiveMessage(data.message)); }
            }
        );
    }, [match.params.channelId]);
```

## Future Features
  * Update Home Page component.
  * Fix "no channels" component styling.
  * Fix the display layout for phone screens in the Media Query
  * Create errors reducer for joining server.
  * Implement message deletion.
  * Double check need for "getServer" server action
  * Create user Banner on bottom of Channel list.
  * Implement AWS for user pictures.
  * Implement Voice chatting.
  * Implement Video chatting.
  * Implement Server Joining by invite instead of ID.
  * Refactor Server Show components and styling from absolute.
  * On Page Refresh do not push default channel.
  * Add online counter for members.
  * Add "Start of history" message on newly created channels.
  * Display channel gear only on hover for non selected channels.
  * Implement server drop down menu closing on outer clicks.
  * Once channel is deleted, push first channel to history.
  * Make text links actual link elements.