class Api::V1::CartsController < ApplicationController
    def index
        carts = Cart.all
        render json: carts, include: [:products]
    end

    def create
        if Cart.find_by(id: cart_params[:id])
            cart = Cart.find_by(id: cart_params[:id])
            redirect_to "/api/v1/carts/#{cart.id}"
        else
            cart = Cart.create(cart_params)
            render json: cart
        end
    end

    private

    def cart_params
        params.require(:cart).permit(:id)
    end
end