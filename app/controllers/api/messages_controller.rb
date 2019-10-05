class Api::MessagesController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { @new_messages = Message.where("group_id = ? AND id > ?", params[:group], params[:id]) }
    end
  end
end