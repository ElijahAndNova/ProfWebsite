class ContactMailer < ApplicationMailer

  def email_me(name, email, message)
    @name = name
    @email = email
    @message = message
    mail(
        to: "espiro18@amherst.edu",
        from: @email,
        subject: "You've been contacted."
    )
  end

end
