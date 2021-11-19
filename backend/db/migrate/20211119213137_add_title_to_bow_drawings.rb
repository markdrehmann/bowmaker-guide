class AddTitleToBowDrawings < ActiveRecord::Migration[6.1]
  def change
    add_column :bow_drawings, :title, :string
  end
end
