import React from 'react';
import PromoBanner from './PromoBanner';

const PromoContainer = props => {

    return (
        <div className="promo-container d-flex">
            <PromoBanner
                title={"Sports"}
                description={"Price Boost every day on all sports"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/card-sports3.png"}>
                <button type="button" className="btn promo-button">Go to Sports</button>
            </PromoBanner>
            <PromoBanner
                title={"Casino"}
                description={"Offering the best slots and live dealer games"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/card-casino4.png"}
            >
                <button type="button" className="btn promo-button">Go to Casino</button>
            </PromoBanner>

            <div className="row">
                <div className="col">
                    <div className="description-container">
                        <h3 className="description-label">Sport Categories</h3>
                        <p className="description-content"></p>

                    </div>
                </div>
            </div>
            {/*<h3 size="delta" color="bulma.100" className="heading__Heading-tjo9yi-0 ivFKnh">Sports categories</h3>*/}

        </div>

    )
}
export default PromoContainer