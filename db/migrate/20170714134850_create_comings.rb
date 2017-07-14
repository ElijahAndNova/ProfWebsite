class CreateComings < ActiveRecord::Migration[5.1]
  def change
    create_table :comings do |t|
      t.string :image_filepath

      t.timestamps
    end
  end
end
