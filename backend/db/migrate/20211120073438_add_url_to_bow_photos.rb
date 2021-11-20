class AddUrlToBowPhotos < ActiveRecord::Migration[6.1]
  def change
    add_column :bow_photos, :url, :string
  end
end
