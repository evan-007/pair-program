class LanguageSerializer < ActiveModel::Serializer
  attributes :name, :id, :text

  def text
    object.name
  end
end
