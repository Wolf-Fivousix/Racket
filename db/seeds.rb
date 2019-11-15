# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Server.destroy_all

guestUser = User.create(email: "guest@guest.com", username: "Guest", password: "secretWord")
Server.create(name: "First", owner_id: guestUser.id)
Server.create(name: "#2", owner_id: guestUser.id)
Server.create(name: "Terceiro", owner_id: guestUser.id)