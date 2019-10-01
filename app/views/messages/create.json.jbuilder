json.id      @message.id
json.content @message.content
json.image   @message.image.url
json.date    @message.created_at.strftime("%Y/%m/%d %H:%M")
json.group_id @message.user.group_id
ison.user_id @message.user_id