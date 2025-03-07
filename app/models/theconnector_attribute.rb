# frozen_string_literal: true

# == Schema Information
#
# Table name: theconnector_attributes
#
#  id                             :bigint(8)        not null, primary key
#  metadata                       :text
#  theconnector_attributable_type :string           not null
#  theconnector_attributable_id   :bigint(8)        not null
#  created_at                     :datetime         not null
#  updated_at                     :datetime         not null
#
class TheconnectorAttribute < ApplicationRecord
  belongs_to :theconnector_attributable, polymorphic: true

  store :metadata, accessors: [:federation]
end
