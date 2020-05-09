import React from 'react';
import EventBoard from './EventBoard';
import VideoContainer from './VideoContainer';
import PromoBanner from "./promo-banner/PromoBanner";

const MainSection = props => {

    return (
        <div className="d-flex product-spec">
            <div className="product-spec-icon-container d-flex align-items-lg-start justify-content-lg-start">
                <i className="fas fa-futbol"></i>
                <div className="d-flex flex-column justify-content-center">
                    <div className="product-spec-label">Main Club</div>
                    <div className="product-spec-value">Partner</div>
                </div>
                <div className="d-inline main-section">
                </div>

                <div className="d-flex product-spec">
                    <div className="product-spec-icon-container d-flex align-items-lg-start justify-content-lg-start">
                        <i className="fas fa-futbol"></i>
                        <div className="d-flex flex-column justify-content-start">
                            <div className="product-spec-label">Official Shirt</div>
                            <div className="product-spec-value">Sponsor</div>
                        </div>
                        <div className="d-flex main-container">
                        </div>
                    </div>
                </div>
                {/* <div className="d-flex main-section">
            <VideoContainer video={"https://www.youtube.com/embed/zpOULjyy-n8?rel=0"}/>
            <EventBoard/>
        </div>*/}
            </div>
            <div className="d-flex tags-container">

                <div className="product-spec-icon-container d-flex align-items-lg-end justify-content-lg-end">
                    <button type="button" className="btn btn-title card-button">Sign in</button>
                    <button type="button" className="btn btn-primary card-button">Register</button>
                    <div className="d-flex d-lg-inline-flex">
                    </div>
                </div>
            </div>

        </div>


    )
}
export default MainSection


