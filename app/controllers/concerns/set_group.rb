module SetGroup
  extend ActiveSupport::Concern

  private
    def set_group
      @group = Group.find(params[:group_id])
    end
  end