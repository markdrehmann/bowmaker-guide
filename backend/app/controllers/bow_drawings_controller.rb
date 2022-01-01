class BowDrawingsController < ApplicationController
  def index
    drawings = BowDrawing.all
    render json: drawings, :except => [:created_at, :updated_at]
  end

  def create
    bowmakers = Bowmaker.all
    o_makers = bowmakers.sort_by{|maker| maker[:last_name]}
    drawing = BowDrawing.new(
      url: params[:url],
      title: params[:title],
      bowmaker_id: params[:makerId]
    )
    if drawing.save
      render json: o_makers, :except => [:created_at, :updated_at]
    else
      render json: { errors: bowmaker.errors.full_messages}
    end
  end
  end
end
