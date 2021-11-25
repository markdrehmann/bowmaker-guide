class BowmakersController < ApplicationController
  def index
    bowmakers = Bowmaker.all
    render json: bowmakers, :except => [:created_at, :updated_at]
  end

  def create
    bowmaker = Bowmaker.new(
      first_name: params[:first_name],
      last_name: params[:last_name],
      birth_year: params[:birth_year],
      year_of_death: params[:year_of_death],
      biography: params[:biography],
      notes: params[:notes]
    )
    if bowmaker.save
      render json: bowmaker
    else
      render json: { errors: bowmaker.errors.full_messages}
    end
  end
end
