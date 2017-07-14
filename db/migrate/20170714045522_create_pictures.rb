class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :image_filepath
      t.integer :width
      t.integer :height

      t.timestamps
    end
  end
end
