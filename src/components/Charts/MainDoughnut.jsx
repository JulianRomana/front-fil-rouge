import React, { useRef } from "react"
import * as d3 from "d3"
import PropTypes from "prop-types"
import { green, greyLighter } from "../../assets/jsxStyles/Variables"
import { MainDoughnut } from "../../pages/pagesStyle/DashboardStyle"

const MainDougnut = ({ mainDoughnutData }) => {
  const d3Container = useRef(null)
  const width = 280
  const height = 300
  const radius = Math.min(width, height) / 2

  const color = d3.scaleOrdinal().range([green, greyLighter])
  const pie = d3
    .pie()
    .sort(null)
    .value(d => d.value)
  const data_ready = pie(d3.entries(mainDoughnutData))
  const arc = d3
    .arc()
    .innerRadius(radius * 0.55)
    .outerRadius(radius * 0.8)

  if (Object.keys(mainDoughnutData).length) {
    var svg = d3
      .select(d3Container.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`)

    var svgText = d3
      .select(d3Container.current)
      .append("g")
      .append("text")

    svg
      .selectAll("allSlices")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", d => color(d.data.key))

    svgText
      .attr("x", "50%")
      .attr("y", "50%")
      .attr("dominant-baseline", "middle")
      .attr("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("font-size", "4rem")
      .text(`${mainDoughnutData.a} %`)
  }

  return (
    <MainDoughnut>
      <svg
        className="d3-component"
        width={400}
        height={200}
        ref={d3Container}
      />
    </MainDoughnut>
  )
}

MainDougnut.propTypes = {
  mainDoughnutData: PropTypes.object,
}

export default MainDougnut
