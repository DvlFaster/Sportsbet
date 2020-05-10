import React from 'react';
import PromoBanner from './PromoBanner';

const PromoContainer = props => {

    return (
        <>
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



            </div>
            <div className="promo-container">
                <div className="row">
                    <div className="col">
                        <div className="description-container">
                            <h3 className="description-label">Sport Categories</h3>
                            <p className="description-content"></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-futbol text-center bg-dark text-danger p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Soccer</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-futbol text-center bg-dark text-danger p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">eSoccer</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-basketball-ball text-center bg-dark text-danger p-3 nba-icon"></i>
                            <span className="description-content text-center text-muted">eNBA</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-table-tennis text-center bg-dark text-danger p-3 nba-icon"></i>
                            <span className="description-content text-center text-muted">Table Tennis</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default PromoContainer