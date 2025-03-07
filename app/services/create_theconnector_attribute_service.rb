# frozen_string_literal: true

class CreateTheconnectorAttributeService < BaseService
  def call(status, federation)
    theconnector_attribute = TheconnectorAttribute.new(federation: federation)
    status.theconnector_attribute = theconnector_attribute
    status.save
  end
end
