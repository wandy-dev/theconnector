# frozen_string_literal: true

class CreateTheconnectorAttributeService < BaseService
  def call(status, federation)
    theconnector_attribute = status.theconnector_attribute = TheconnectorAttribute.new(federation: federation)
    theconnector_attribute.save!
  end
end
