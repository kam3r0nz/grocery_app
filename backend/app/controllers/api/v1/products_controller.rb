class Api::V1::ProductsController < ApplicationController
    def index
        if filter_carts
            products = @cart.products
            render json: products
        else
            products = Product.all
            render json: products
        end
    end

    private

    def filter_carts
        params[:cart_id] && @cart = Cart.find_by_id(params[:cart_id])
    end
end