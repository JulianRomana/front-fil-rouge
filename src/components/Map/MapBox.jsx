import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"
import PropTypes from "prop-types"
import styled from "styled-components"
import { beige, green } from "../../assets/jsxStyles/Variables"
import { Button, Map } from "./MapBoxStyle"
import OpenMap from "../../assets/images/open-map.svg"
import CloseMap from "../../assets/images/close-map.svg"

const MapBox = ({ geo, showMap, setShowMap }) => {
  const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: ${showMap ? "block" : "none"};
    background-color: ${beige};
  `

  const mapContainer = useRef(null)

  useEffect(() => {
    // Set map config
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11?optimize=true",
      minZoom: 11,
      center: [2.344726760395872, 48.873807618201255],
      accessToken: process.env.REACT_APP_MAPBOX_API,
    })

    map.on("load", () => {
      // Import geoJSON and set cluster config
      map.addSource("earthquakes", {
        type: "geojson",
        data: geo,
        cluster: true,
        clusterRadius: 80,
        clusterMaxZoom: 14,
      })

      // Set default state of clusters
      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "earthquakes",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": green,
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      })

      // Show count of points on cluster
      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "earthquakes",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-size": 16,
        },
        paint: {
          "text-color": "#ffffff",
        },
      })

      // State of point when not on cluster
      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "earthquakes",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": green,
          "circle-radius": 15,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#fff",
        },
      })

      map.on("click", "clusters", e => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        })
        const clusterId = features[0].properties.cluster_id
        map
          .getSource("earthquakes")
          .getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return
            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom,
            })
          })
      })

      map.on("click", "unclustered-point", e => {
        const [{ properties, geometry }] = e.features
        Object.keys(properties).length !== 0 &&
          new mapboxgl.Popup()
            .setLngLat(geometry.coordinates)
            .setHTML(`<p>${properties.description}</p>`)
            .addTo(map)
      })
    })
  }, [geo])

  return (
    <>
      <Container>
        <Map ref={mapContainer} />
      </Container>
      <Button onClick={() => setShowMap(!showMap)}>
        <img src={showMap ? CloseMap : OpenMap} alt="Map button" />
      </Button>
    </>
  )
}

MapBox.propTypes = {
  geo: PropTypes.object,
  showMap: PropTypes.bool,
  setShowMap: PropTypes.func,
}

export default MapBox
