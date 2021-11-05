class BowmakersController < ApplicationController
  def index
    bowmakers = Bowmaker.all
    render json: bowmakers, :except => [:created_at, :updated_at]
  end
end
