class Api::V1::ProductsController < ApplicationController
    def index
        if filter_carts
            cart_products = @cart.products
            render json: cart_products
        else
            products = Product.all
            render json: products
        end
    end

    def create
        if Product.find_by(id: product_params[:id])
            product = Product.find_by(id: product_params[:id])
            redirect_to "/api/v1/carts/#{cart.id}"
        else
            product = Product.create(product_params)
            render json: product
        end
    end

    def show
        product = Product.find_by(id: params[:id])
        if product
            render json: product
        else
            render json: { Error: "That product does not exist." }
        end
    end

    def destroy
        product = Product.find_by(id: params[:id])
        product.destroy
        render json: product
    end

    private

    def product_params
        params.require(:product).require(:name, :price, :image)
    end

    def filter_carts
        params[:cart_id] && @cart = Cart.find_by_id(params[:cart_id])
    end
end