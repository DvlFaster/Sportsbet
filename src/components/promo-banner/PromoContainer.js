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
                            <h5 className="description-label">Sport Categories</h5>
                            <p className="description-content"></p>
                        </div>
                    </div>
                </div>
                <div className="row sport-line flex-nowrap">
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-futbol text-center bg-dark text-danger p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">eSoccer</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-futbol text-center bg-dark text-danger p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Soccer</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-basketball-ball text-center bg-dark text-primary p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">eNBA</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-table-tennis text-center bg-dark text-info p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Table Tennis</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-table-tennis text-center bg-dark text-info p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">TT Setka Cup</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-gamepad text-center bg-dark text-white p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">CS:GO</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-gamepad text-center bg-dark text-white p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Dota 2</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-gamepad text-center bg-dark text-white p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">LoL</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-gamepad text-center bg-dark text-white p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">King of Glory</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-gamepad text-center bg-dark text-white p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Rainbow Six</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-gamepad text-center bg-dark text-white p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Starcraft</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-football-ball text-center bg-dark text-warning p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">American Football</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-baseball-ball text-center bg-dark text-secondary p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Baseball</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-basketball-ball text-center bg-dark text-primary p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Basket ball</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-user-ninja text-center bg-dark text-danger p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Boxing</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-quidditch text-center bg-dark text-warning p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Cricket</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-rocket text-center bg-dark text-danger p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Darts</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-golf-ball text-center bg-dark text-primary p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Golf</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i class="fas fa-hockey-puck text-center bg-dark text-info p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Ice Hockey</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-running text-center bg-dark text-warning p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">MMA</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-football-ball text-center bg-dark text-warning p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Rugby</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-table-tennis text-center bg-dark text-primary p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">SetTennis</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-trophy text-center bg-dark text-primary p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Snooker</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-medal text-center bg-dark text-white p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Specials</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-table-tennis text-center bg-dark text-primary p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Tennis</span>
                        </div>
                    </div>
                    <div className="col sport-item">
                        <div className="d-inline-flex flex-column">
                            <i className="fas fa-volleyball-ball text-center bg-dark text-info p-3 sport-icon"></i>
                            <span className="description-content text-center text-muted">Voleyball</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="description-container">
                            <h5 className="description-label">Popular</h5>
                            <p className="description-content">
                                <div className="col-md-3 order-1 order-md-0">
                                    <div className="d-flex flex-row flex-md-column h-100">
                                        <div className="thumbnail-container">
                                            
                                            <img className="thumbnail-image img-fluid" src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-livecasino.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"/>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="product-spec-label">Live Dealer</div>
                                        </div>
                                        <div className="thumbnail-container">

                                            <img className="thumbnail-image img-fluid" src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-poker.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"/>
                                            <div className="product-spec-label">Poker</div>
                                        </div>
                                        <div className="thumbnail-container">

                                            <img className="thumbnail-image img-fluid" src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-bombayclub2.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"/>
                                            <div className="product-spec-label">Bombay Club</div>
                                        </div>
                                        <div className="thumbnail-container">
                                            <img className="thumbnail-image img-fluid" src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-promotions.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"/>
                                            <div className="product-spec-label">Promotions</div>
                                        </div>
                                        <div className="thumbnail-container">
                                            <img className="thumbnail-image img-fluid" src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-livechat.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"/>
                                            <div className="product-spec-label">Support</div>
                                        </div>


                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PromoContainer