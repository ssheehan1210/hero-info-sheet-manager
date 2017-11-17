class HeroController < ApplicationController
	options "*" do
		response.headers["Access-Control-Allow-Methods"] = "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS"
		response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
	end

	get '/' do
		content_type :json
		@heroes = Hero.all
		@heroes.to_json
	end

	post '/' do
		'this is a post'
		@heroes = Hero.new
		@heroes.name = params[:name]
		@heroes.user_id = params[:user_id]
		@heroes.dc_hero = params[:dc_hero]
		@heroes.academia_hero = params[:academia_hero]
		@heroes.marvel_hero = params[:marvel_hero]
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
		'posted'
	end

	put '/:id' do
		@heroes = Hero.find_by(id: params[:id])
		@heroes.name = params[:name]
		@heroes.user_id = params[:user_id]
		@heroes.dc_hero = params[:dc_hero]
		@heroes.academia_hero = params[:academia_hero]
		@heroes.marvel_hero = params[:marvel_hero]
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

		'put in'
	end

	delete '/:id' do
		@heroes = Hero.find_by(id: params[:id])
		@heroes.delete

		'deleted'
	end
end