import React from 'react';
import EventBoard from './EventBoard';
import VideoContainer from './VideoContainer';
import PromoBanner from "./promo-banner/PromoBanner";

const MainSection = props => {

    return (
        <div className="row product-spec justify-content-lg-between">
            <div className="col d-flex">
                <div className="product-spec-icon-container d-inline-flex mr-2 align-items-center border-right pr-5">
                    <i className="fas fa-futbol mr-2"></i>
                    <div className="d-flex flex-column justify-content-center">
                        <div className="product-spec-label">Main Club</div>
                        <div className="product-spec-value">Partner</div>
                    </div>
                </div>
                <div className="product-spec-icon-container d-inline-flex align-items-center border-right pr-5">
                    <i className="fas fa-futbol mr-2"></i>
                    <div className="d-flex flex-column justify-content-start">
                        <div className="product-spec-label">Official Shirt</div>
                        <div className="product-spec-value">Sponsor</div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="product-spec-icon-container d-flex align-items-lg-end justify-content-lg-end">
                    <button type="button" className="btn btn-title card-button mr-2">Sign in</button>
                    <button type="button" className="btn btn-primary card-button">Register</button>
                    <div className="d-flex d-lg-inline-flex">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainSection


