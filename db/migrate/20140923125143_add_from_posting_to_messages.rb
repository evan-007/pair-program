class AddFromPostingToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :from_posting, :boolean, default: false
  end
end
