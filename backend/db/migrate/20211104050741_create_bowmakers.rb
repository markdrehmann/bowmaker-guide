class CreateBowmakers < ActiveRecord::Migration[6.1]
  def change
    create_table :bowmakers do |t|
      t.string :first_name
      t.string :last_name
      t.integer :birth_year
      t.integer :year_of_death
      t.text :biography
      t.text :notes

      t.timestamps
    end
  end
end
