class Api::V1::ProductsController < ApplicationController
    def index
        cart_products = @cart.products
        render json: cart_products
    end

    private

    def product_params
        params.require(:product).require(:name, :price, :image)
    end
end