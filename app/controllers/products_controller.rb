class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
    @products = Product.all.page(params[:page]).per(30) 
    render json: @products, root: false
  end

  def likes
    @products = current_user.find_liked_items 
    render json: @products, root: false
  end

  def like
    @product = Product.find(params[:id])
    @product.liked_by current_user
    respond_to do |format|
      format.json { render json: @product, status: :ok, location: @product }
    end
  end

  def dislike
    @product = Product.find(params[:id])
    @product.disliked_by current_user
    respond_to do |format|
      format.json { render json: @product, status: :ok, location: @product }
    end
  end

  private
  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :image_url_large, :description, :url, :price_retail, :remote_image_url_large_url)
  end
end
