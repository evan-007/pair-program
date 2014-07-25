class AddMentorStudentToUsers < ActiveRecord::Migration
  def change
    add_column :users, :mentor?, :boolean, default: false
    add_column :users, :student?, :boolean, default: false
    add_column :users, :just_partner?, :boolean, default: true
  end
end
