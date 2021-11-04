class CreateBowDrawings < ActiveRecord::Migration[6.1]
  def change
    create_table :bow_drawings do |t|
      t.string :url
      t.references :bowmaker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
