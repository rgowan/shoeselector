class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :configure_permitted_parameters, if: :devise_controller?

  before_action :redirect_if_not_xhr

  private
    def redirect_if_not_xhr 
      redirect_to root_path if (!request.xhr? && request.env['PATH_INFO'] != root_path)
    end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) do |u|
      u.permit(:username, :image, :email, :password, :password_confirmation)
    end
    devise_parameter_sanitizer.for(:account_update) do |u|
      u.permit(:username, :image, :email, :password, :password_confirmation, :current_password)
    end
  end
end
