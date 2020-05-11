import React from 'react';
import Product from './Product';

const ProductList = props => {

    return (
        <div className="product-list">
            <div className="row">
                <Product
                    image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-livecasino.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100.png"}
                    title={"Hazel - Clean Minimalist Multi-Purpose"}
                    description={"by treethemes"}
                    rating={1}
                />
                <Product
                    image={"https://s.tmimgcdn.com/scr/67100/hazel-clean-minimalist-multi-purpose-wordpress-theme_67167-original.png"}
                    title={"Hazel - Clean Minimalist Multi-Purpose"}
                    description={"by treethemes"}
                    rating={2.3}
                />
                <Product
                    image={"https://s.tmimgcdn.com/scr/67100/hazel-clean-minimalist-multi-purpose-wordpress-theme_67167-original.png"}
                    title={"Hazel - Clean Minimalist Multi-Purpose"}
                    description={"by treethemes"}
                    rating={5}
                />
                <Product
                    image={"https://s.tmimgcdn.com/scr/67100/hazel-clean-minimalist-multi-purpose-wordpress-theme_67167-original.png"}
                    title={"Hazel - Clean Minimalist Multi-Purpose"}
                    description={"by treethemes"}
                    rating={4}
                />
                <Product
                    image={"https://s.tmimgcdn.com/scr/67100/hazel-clean-minimalist-multi-purpose-wordpress-theme_67167-original.png"}
                    title={"Hazel - Clean Minimalist Multi-Purpose"}
                    description={"by treethemes"}
                    rating={3}
                />
            </div>
        </div>
    )
}
export default ProductList