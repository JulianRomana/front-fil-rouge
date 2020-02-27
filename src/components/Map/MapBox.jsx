import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"
import PropTypes from "prop-types"
import styled from "styled-components"
import { beige } from "../../assets/jsxStyles/Variables"
import OpenMap from "../../assets/images/open-map.svg"
import CloseMap from "../../assets/images/close-map.svg"
import PinMarker from "../../assets/images/pin.svg"
import { Button, Map } from "./MapBoxStyle"

const MapBox = ({ geo, showMap, setShowMap }) => {
  const MapContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: ${showMap ? "block" : "none"};
    background-color: ${beige};

    .marker--pin {
      width: 50px;
      height: 50px;
      background: url(${PinMarker}) center no-repeat;
      background-size: contain;
    }
    .marker--count {
      padding: 14px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background-color: #1b9a5a;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      cursor: auto;
    }
  `

  const mapContainer = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11?optimize=true",
      minZoom: 11,
      center: [2.344726760395872, 48.873807618201255],
      accessToken: process.env.REACT_APP_MAPBOX_API,
    })

    geo.map(marker => {
      var el = document.createElement("div")

      if (marker.properties && marker.properties.count) {
        el.innerHTML += marker.properties.count
        el.className = "marker--count"
      } else {
        el.className = "marker--pin"
      }

      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          marker.properties
            ? new mapboxgl.Popup({ offset: 10 }).setHTML(
                `<p>${marker.properties.description}</p>`,
              )
            : undefined,
        )
        .addTo(map)
      return () => []
    })
  }, [geo])

  return (
    <>
      <MapContainer>
        <Map ref={mapContainer} />
      </MapContainer>
      <Button onClick={() => setShowMap(!showMap)}>
        <img src={showMap ? CloseMap : OpenMap} alt="Map button" />
      </Button>
    </>
  )
}

MapBox.propTypes = {
  geo: PropTypes.array,
  showMap: PropTypes.bool,
  setShowMap: PropTypes.func,
}

export default MapBox
