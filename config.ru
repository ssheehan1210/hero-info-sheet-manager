require 'sinatra-base'

require './controllers/ApplicationController.rb'
require './controllers/HeroController.rb'
require './controllers/UserController.rb'

require './models/HeroModel'
require './models/UserModel'

map('/') {run ApplicationController}
map('/heroes') {run HeroController}
map('/users') {run UserController}