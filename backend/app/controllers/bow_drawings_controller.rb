class BowDrawingsController < ApplicationController
  def index
    drawings = BowDrawing.all
    render json: drawings, :except => [:created_at, :updated_at]
  end
end
