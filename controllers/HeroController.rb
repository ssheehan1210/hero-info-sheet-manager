class HeroController < ApplicationController
	get '/' do
		@heroes = Hero.all
		@heroes.to_json
	end

	post '/' do
		@heroes = Hero.new
		@heroes.name = params[:name]
		# @heroes.user_id = params[:user_id]
		@heroes.save

		binding.pry

		@heroes.to_json

		'saved post'
	end

	put '/:id' do
		@heroes = Hero.find_by(id: params[:id])
		@heroes.name = params[:name]
		@heroes.save

		'put in'
	end

	delete '/:id' do
		@heroes = Hero.find_by(id: params[:id])
		@heroes.delete

		'deleted'
	end
end