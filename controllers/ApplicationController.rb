class ApplicationController < Sinatra::Base
	require 'bundler'
	Bundler.require

	require './config/environments'

	register Sinatra::CrossOrigin

	configure do
		enable :cross_origin
	end

	set :allow_origin, :any
	set :allow_methods, [:get, :post, :options]

	use Rack::MethodOverride
	set :method_override, true

	set :views, File.expand_path('../../views', __FILE__)

	not_found do
		"Not Found"
		# erb :not_found
	end
end