json.user_name @message.user.name
json.content @message.content
json.created_at @message.created_at.strftime("%Y/%m/%d(%a) %H:%M:%S")
json.image @message.image.url
json.id @message.id
json.group_id @message.group_id