import React, { useRef, useEffect } from "react"
import * as d3 from "d3"
import PropTypes from "prop-types"
import styled from "styled-components"
import { green } from "../../assets/jsxStyles/Variables"
import moment from "moment"

const Graph = ({ totalFinishQuest }) => {
  console.log("TCL: Graph -> totalFinishQuest", totalFinishQuest)
  const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;
  `
  const currentDay = moment(new Date()).format("DD")

  const filterDate = day =>
    totalFinishQuest.filter(data => day === moment(data.date).format("DD"))
      .length

  const data = [
    { date: currentDay - 4, finish: filterDate(currentDay - 4) },
    { date: currentDay - 3, finish: filterDate(currentDay - 3) },
    { date: currentDay - 2, finish: filterDate(currentDay - 2) },
    { date: currentDay - 1, finish: filterDate(currentDay - 1) },
    { date: currentDay, finish: filterDate(currentDay) },
  ]

  const d3Container = useRef(null)
  const margin = { top: 10, right: 30, bottom: 30, left: 50 }
  const width = 300 - margin.left - margin.right
  const height = 300 - margin.top - margin.bottom

  useEffect(() => {
    var x = d3
      .scaleLinear()
      .domain(d3.extent(data.map(data => data.date)))
      .range([0, width])

    var y = d3
      .scaleLinear()
      .domain([0, 5])
      .range([height, 0])

    var svg = d3
      .select(d3Container.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    svg.append("g").call(
      d3
        .axisLeft(y)
        .ticks(5)
        .tickFormat(d3.format(".0s")),
    )

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(4))

    const area = d3
      .area()
      .x(data => x(data.date))
      .y0(height)
      .y1(data => y(data.finish))

    svg
      .append("path")
      .datum(data)
      .attr("fill", green)
      .attr("stroke-width", 1.5)
      .attr("d", area)

    return () => []
  }, [data, height, margin, width])

  return <Container ref={d3Container} />
}

Graph.propTypes = {
  totalFinishQuest: PropTypes.array,
}

export default Graph
