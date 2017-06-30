class CreateModelForProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.text :description
      t.string :image_filepath
      t.timestamps
    end
  end
end
