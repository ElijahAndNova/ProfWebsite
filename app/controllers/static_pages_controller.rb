class StaticPagesController < ApplicationController #The < sign indicates inheritance from ApplicationController

  def home
  end

  def about_me
  end

  def code_portfolio
    @projects = Project.all
  end

  def resume_open
    send_file "#{Rails.root}/app/assets/files/ElijahSpiroResume.pdf", type: 'application/pdf', disposition: 'inline'
  end

  def research
  end

  def publications
  end

  def awards
  end

  def get_in_touch
  end

  def email
    ContactMailer.email_me(params[:name], params[:email], params[:text]).deliver
    redirect_to(root_path)
  end

end
