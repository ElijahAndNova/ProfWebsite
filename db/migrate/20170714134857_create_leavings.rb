class CreateLeavings < ActiveRecord::Migration[5.1]
  def change
    create_table :leavings do |t|
      t.string :image_filepath

      t.timestamps
    end
  end
end
