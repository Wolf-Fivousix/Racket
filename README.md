# Racket

[Racket Live Website](https://racket-discord.herokuapp.com/)

Racket is a real time chatting plataform pixel perfect clone of Discord. Racket allows you to create private/invite-only servers to send and receive messages through a RESTful application.
This project was designed and implemented in 10 days, totalling 80h of work. And improved upon later in time.

## Table of Contents
* [Technologies](#technologies)
* [Highlights](#hightlights)
* [Code Snipets](#code%20snipets)


## Technologies
  * React/Redux on the Frontend.
    * React Hooks for simplified logic.
    * YouTube video embedding with React-Youtube.
  * Ruby on Rails on the Backend.
    * Live chatting with Web Sockets implemented by Action Cable.
  * PostgreSQL Data Base.

## Highlights
### Responsive
  GIF of the website showing in different sizes.

## Code Snipets
Servers, Channels, Messages are all CRUD
CSS Pixel Perfect design
User Bootstraping and User Auth
  ###### Show errors displaying by field. Image of All Fields errors => Some field errors (use guest@guest.com to show already taken e-mail) - Eventually make it into a GIF.
Servers are shared by a joint membership table.
Multiple differently styled scroll bars.

### Video and image embedding.
Every message is analysed for YouTube videos and JPG, JPEG, PNG and GIF images. Anytime these components are present the URL is extracted from the message and a matching component is created. The component is them attached to the original message and rendered as one single message by the client.
```JavaScript
// frontend/components/message/message_index.jsx

    function youtubeParser(url) {
        const match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
        return (match && match[7].length == 11) ? match[7] : false;
    }

    function imageParser(url) {
        const formats = ["jpg", "jpeg", "png", "gif"];
        for (let i = 0; i < formats.length; ++i) {
            if (url.endsWith(formats[i])) {
                const regex = new RegExp("http[s]?:\/\/.+\." + formats[i], "g");
                const imageAddress = url.match(regex);
                return (<img src={imageAddress} alt="User Image" className="embedPreview"/>);
            }
        }
        return false;
    }
```

### Real time chat communication with Action Cable and WebSockets.
Channels are mounted with a subscription private to that channel, allowing for users to communicate in real time. Any new message broadcasted by the server is automatically added to the global local state and React handles the re-rendering logic on the client machine in order to display it.
```JavaScript
// frontend/components/message/message_index.jsx

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
  * Subscribe channels to action cable.
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
  * Implement server drop down menu closing on outer clicks.
  * Server names on hover of server item. (To do this the absolute positions needs to be changed first.)
  * On Page Refresh do not push default channel.
  * Add online counter for members.
  * Add "Start of history" message on newly created channels.
  * Display channel gear only on hover for non selected channels.
  * Make text links actual link elements.
  * Fix first channel push on page refresh (and check first message log-in page refresh behavior).
  * Make server dropdown menu display "leave server" for non-owners.
  * Subscribe members in server.
  * Subscribe server name.