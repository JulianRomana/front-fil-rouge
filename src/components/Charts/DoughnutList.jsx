import React, { useRef, useEffect } from "react"
import * as d3 from "d3"
import PropTypes from "prop-types"
import styled from "styled-components"

const DoughnutList = ({ doughnutDataList }) => {
  const Container = styled.div`
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
      width: calc(100% / 3.25);
    }
    p {
      width: 80%;
      padding-bottom: 1rem;
      font-weight: bold;
      margin: auto;
      text-align: center;
      overflow-wrap: break-word;
    }
  `
  const d3Container = useRef(null)
  const width = 280 / 3
  const height = 100
  const radius = Math.min(width, height) / 2
  const color = d3.scaleOrdinal().range(["#1B9A5A", "#F1F1F1"])
  const pie = d3
    .pie()
    .sort(null)
    .value(d => d.value)
  const arc = d3
    .arc()
    .innerRadius(radius * 0.55)
    .outerRadius(radius * 0.8)

  useEffect(() => {
    doughnutDataList.map((data, index) => {
      const data_ready = pie(d3.entries(data.value))
      const divContainer = d3.select(d3Container.current).append("div")
      const svgContainer = divContainer
        .append("svg")
        .attr("width", width)
        .attr("height", height)

      svgContainer
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .selectAll("allSlices")
        .data(data_ready)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", d => color(d.data.key))

      divContainer.append("p").text(data.name)

      const svgText = svgContainer.append("g").append("text")

      svgText
        .attr("x", "50%")
        .attr("y", "50%")
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "1.4rem")
        .text(`${data.value.a} %`)

      return () => []
    })
  }, [arc, pie, doughnutDataList, color, width])

  return <Container ref={d3Container} />
}

DoughnutList.propTypes = {
  doughnutDataList: PropTypes.array,
}

export default DoughnutList
