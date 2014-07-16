class AddWorkflowStateToFriendships < ActiveRecord::Migration
  def change
    add_column :friendships, :workflow_state, :string
  end
end
