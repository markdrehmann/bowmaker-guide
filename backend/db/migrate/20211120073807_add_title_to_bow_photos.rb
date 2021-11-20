class AddTitleToBowPhotos < ActiveRecord::Migration[6.1]
  def change
    add_column :bow_photos, :title, :string
  end
end
