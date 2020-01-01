class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
    t.integer :server_id, null: false
    t.integer :member_id, null: false

    t.timestamps
    end

    add_index :memberships, [:server_id, :member_id], unique: true
  end
end
