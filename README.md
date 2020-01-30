# [Racket](https://racket-discord.herokuapp.com/)
![Racket Snapshot](app/assets/images/racket.gif?raw=true "Racket Snapshot Chat")
Racket is a real time chatting plataform pixel perfect tribute to Discord. Racket allows you to create private/invite-only servers to send and receive messages through a RESTful application.

## Table of Contents
* [Technologies](#technologies)
* [Highlights](#highlights)
* [Responsive Design](#responsive-design)
* [Code Snipets](#code-snipets)


## Technologies
  * **JavaScript -** does the heavy lifting and logic handling.
  * **React with Redux -** on the Frontend.
  * **Ruby on Rails -** on the Backend.
  * **Web Sockets -** for Live chatting implemented by Action Cable.
  * **PostgreSQL -** Data Base.
  * **Heroku -** application hosting.
  * **JSON -** API endpoints ensure standardized web responses.
  * **CSS3 -** Makes the internet look nice.
  * **HTML5 -** You know what this is for.

## Highlights
 GIF GRID Coming Soon...

## Responsive Design
![Responsive Design gif](app/assets/images/responsiveDesign.gif?raw=true "Responsive Design Gif")
Responsive design allows for the application to adapt to any screen size and device, providing a seemless experience to the user. This effect is accomplished by implementing media queries and a mobile first design approach.

## Code Snipets
### Real time chat communication.
![Live Chat gif](app/assets/images/liveChat.gif?raw=true "Live Chat Gif")
Utilizing Ruby Action Cables to manage Web Sockets, messages and channels consumers are subscribed to the corresponding channels, allowing for users to communicate in real time. Any new message broadcasted by the server is automatically added to the global local state and React handles the re-rendering logic on the client machine in order to display it.
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

### Video and image embedding.
![Image and Video Embedding](app/assets/images/embed.gif?raw=true "Image and Video embedding Chat")
Every message is analysed for YouTube videos, JPG, JPEG, PNG and GIF images. Anytime these components are present the URL is extracted from the message and a matching component is created. The component is them attached to the original message and rendered as one single message by the client.
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
### User Authentication
![User Authentication gif](app/assets/images/userAuth.gif?raw=true "User Authentication gif Chat")
User errors are returned from the backend and handled individually depending on the field. Errors and analysed and incorrect elements are re-styled to display the error in a visual way.
User authentication is an important part of modern applications and web services. To protect users data I used BCrypt to hash and salt the input password before storing it into the database.
```Ruby
# app/controllers/application_controller.rb
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_login
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end
```
Alied with a session token users can retun to the application without having to log-in every time as well as utilize log-in protected functionalities. For convinience there is a Guest Login button with a default user already created.
```Ruby
# app/models/user.rb
  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    @user && @user.is_password?(password) ? @user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
```

## Future Features
  * Fix action cable multi channel subscription.
  * Fix first post reload behavior.
  * Refactor Server Show components and styling from absolute.
  * Implement server drop down menu closing on outer clicks.
  * Server names on hover of server item. (To do this the absolute positions needs to be changed first.)
  * Subscribe channels to action cable.
  * Fix the display layout for phone screens in the Media Query
  * Create errors reducer for joining server.
  * Double check need for "getServer" server action
  * Implement message deletion.
  * Create user Banner on bottom of Channel list.
  * Implement AWS for user pictures.
  * Implement Voice chatting.
  * Implement Video chatting.
  * Implement Server Joining by invite instead of ID.
  * On Page Refresh do not push default channel.
  * Add online counter for members.
  * Add "Start of history" message on newly created channels.
  * Display channel gear only on hover for non selected channels.
  * Make text links actual link elements.
  * Fix first channel push on page refresh (and check first message log-in page refresh behavior).
  * Make server dropdown menu display "leave server" for non-owners.
  * Subscribe members in server.
  * Subscribe server name.