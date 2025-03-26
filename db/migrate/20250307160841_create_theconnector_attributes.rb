# frozen_string_literal: true

class CreateTheconnectorAttributes < ActiveRecord::Migration[7.1]
  def change
    create_table :theconnector_attributes do |t|
      t.text :metadata
      t.references :theconnector_attributable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
