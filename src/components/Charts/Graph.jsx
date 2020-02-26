import React, { useRef, useEffect } from "react"
import * as d3 from "d3"
import styled from "styled-components"
import { green } from "../../assets/jsxStyles/Variables"

const Graph = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;
  `
  const data = [
    { date: 22, finish: 2 },
    { date: 23, finish: 3 },
    { date: 24, finish: 1 },
    { date: 25, finish: 1 },
    { date: 26, finish: 0 },
  ] // TODO: change with correct data

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
      .domain([0, d3.max(data.map(data => +data.finish))])
      .range([height, 0])

    var svg = d3
      .select(d3Container.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    svg.append("g").call(d3.axisLeft(y).ticks(4))

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

export default Graph
