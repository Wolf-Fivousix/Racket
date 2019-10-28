Possible Names:
Conflict
Confusion
Dissonance
Racket
Turbulance

================================
Discord Feature List:

Servers
Channels within servers
Live Chat
Direct Messaging via private servers

Home:       Friends List
            Direct Message to Friends
Servers:    Selvagens
                Channels
                    Message History
                Members
================================
Schema:
    
Users
    t.string :username, null: false
    t.string :email, null: false
    t.string :password_digest, null: false
    t.string :session_token, null: false
    t.integer :friends_ids
    t.integer :servers_ids

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    
Servers
    t.string :name, null: false
    t.integer :members, null: false
    t.integer :messages

    add_index :servers, :name, unique: true
Message
    t.integer :author, null: false
    t.text :body, null: false

================================


