class WishesController < ApplicationController

  def index
    @products = current_user.find_liked_items 
    render json: @products, root: false
  end

  def destroy
    # @wish.destroy
    # respond_to do |format|
    #   format.json { redirect_to wishes_url, notice: 'Wish was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end
end
