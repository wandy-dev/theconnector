# frozen_string_literal: true

class CreateTheconnectorAttributeService < BaseService
  def call(status, federation)
    status.theconnector_attribute = TheconnectorAttribute.new(federation: federation).save
  end
end
