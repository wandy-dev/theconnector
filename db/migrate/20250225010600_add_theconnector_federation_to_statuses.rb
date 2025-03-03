# frozen_string_literal: true

class AddTheconnectorFederationToStatuses < ActiveRecord::Migration[7.1]
  def change
    add_column :statuses, :theconnector_federation, :string, default: 'federation_full'
  end
end
