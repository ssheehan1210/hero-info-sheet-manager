class ApplicationController < Sinatra::Base
	require 'bundler'
	Bundler.require

	# register Sinatra::CrossOrigin

	ActiveRecord::Base.establish_connection(
		:adapter => 'postgresql',
		:database => 'gathirdproject'
	)

	# configure do
	# 	enable :cross_origin
	# end

	# set :allow_origin, :any
	# set :allow_methods, [:get, :post, :options]

	# use Rack::MethodOverride
	# set :method_override, true

	set :views, File.expand_path('../../views', __FILE__)

	not_found do
		erb :not_found
	end
end