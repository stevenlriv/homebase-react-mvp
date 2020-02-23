import React, { Component, Fragment } from 'react';

export class ContentStory extends Component {

    render() {
        return (
            <Fragment>
                <div className="atbd_content_module atbd_listing_details">
                    <div className="atbd_content_module__tittle_area">
                        <div className="atbd_area_title">
                            <h4><span className="la la-file-text-o"></span>Details</h4>
                        </div>
                    </div>
                    <div className="atbdb_content_module_contents">
                        <p>{this.props.currentListing.listingDescription}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}
