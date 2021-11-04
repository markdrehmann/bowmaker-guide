class CreateBowPhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :bow_photos do |t|
      t.string :head_url
      t.string :frog_url
      t.references :bowmaker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
