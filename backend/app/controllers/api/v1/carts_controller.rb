class Api::V1::CartsController < ApplicationController
    def index
        carts = Cart.all
        render json: carts, include: [:products]
    end
end