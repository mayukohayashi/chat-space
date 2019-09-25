* Database creation

# Chat Space DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|primarykey|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :messages
- has_many :group_members
- has_many :groups, through :group_members

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|primarykey|
|body|text|null: false|
|image|string|public/uploads/*|
|group_id|integer|null: false, foreign_key: true, unique: true|
|user_id|integer|null: false, foreign_key: true, unique: true|
### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|primarykey|
|name|string|null: false,  unique: true|
### Association
- has_many :messages
- has_many :group_members
- has_many :users, through :group_members


## group_membersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|primarykey|
|group_id|integer|null: false, foreign_key: true, unique: true|
|user_id|integer|null: false, foreign_key: true, unique: true|
### Association
- belongs_to :user
- belongs_to :group
