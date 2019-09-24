import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
  OverlayView
} from "react-google-maps";
import { css } from "glamor";
import DataPanel from "./DataPanel";
import { compose, withStateHandlers, withProps } from "recompose";
import { islandCss } from "./Dashboard"

import store from "./Store";
import { clickTogglePanel, hoverTogglePanel } from "./Action";

const Map = compose(
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({isOpen}) => () => ({
        isOpen: !isOpen
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {<Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={ () => {
          store.dispatch(clickTogglePanel());
        }}
        onMouseOver={props.onToggleOpen}
        onMouseOut={props.onToggleOpen}
      >
        {props.isOpen && (
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              <p>{"Click to see info on left panel"}</p>
            </div>
          </InfoWindow>
        )}
    </Marker>
    }
  </GoogleMap>
));

const mapCss = css({
  width: "100%"
});

export default props => (
  <div className={`${islandCss} ${mapCss}`}>
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD64mBstzTUD74x9B8ZZc5jp2gQvHWeBHk"
      loadingElement={<div />}
      containerElement={<div style={{ height: "100%", width: "100%" }} />}
      mapElement={<div style={{ height: "100%", width: "100%" }} />}
    />
  </div>
);
