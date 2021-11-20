class BowPhotosController < ApplicationController
  def index
    photos = BowPhoto.all
    render json: photos, :except => [:created_at, :updated_at]
  end
end
