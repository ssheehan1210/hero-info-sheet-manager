class HeroController < ApplicationController
	get '/' do
		@heroes = Hero.all
		@heroes.to_json
	end

	post '/' do
		'this is a post'
		@heroes = Hero.new
		@heroes.name = params[:name]
		@heroes.user_id = params[:user_id]
		@heroes.title = params[:title]
		@heroes.subtitle = params[:subtitle]
		@heroes.over_eighteen = params[:over_eighteen]
		@heroes.gender = params[:gender]
		@heroes.hometown = params[:hometown]
		@heroes.current_location = params[:current_location]
		@heroes.image = params[:image]
		@heroes.affiliation = params[:affiliation]
		@heroes.has_superpowers = params[:has_superpowers]
		@heroes.powers = params[:powers]
		@heroes.abilities = params[:abilities]
		@heroes.arsenal = params[:arsenal]
		@heroes.weaknesses = params[:weaknesses]
		@heroes.save

		binding.pry

		@heroes.to_json
	end

	put '/:id' do
		@heroes = Hero.find_by(id: params[:id])
		@heroes.name = params[:name]
		@heroes.user_id = params[:user_id]
		@heroes.title = params[:title]
		@heroes.subtitle = params[:subtitle]
		@heroes.over_eighteen = params[:over_eighteen]
		@heroes.gender = params[:gender]
		@heroes.hometown = params[:hometown]
		@heroes.current_location = params[:current_location]
		@heroes.image = params[:image]
		@heroes.affiliation = params[:affiliation]
		@heroes.has_superpowers = params[:has_superpowers]
		@heroes.powers = params[:powers]
		@heroes.abilities = params[:abilities]
		@heroes.arsenal = params[:arsenal]
		@heroes.weaknesses = params[:weaknesses]
		@heroes.save

		'put in'
	end

	delete '/:id' do
		@heroes = Hero.find_by(id: params[:id])
		@heroes.delete

		'deleted'
	end
end