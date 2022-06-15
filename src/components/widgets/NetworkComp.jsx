import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';



let graph = {
  nodes: [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Chen" },
    { name: "Dawg" },
    { name: "Ethan" },
    { name: "George" },
    { name: "Frank" },
    { name: "Hanes" }
  ],
  links: [
    { source: "Alice", target: "Bob" },
    { source: "Chen", target: "Bob" },
    { source: "Dawg", target: "Chen" },
    { source: "Hanes", target: "Frank" },
    { source: "Hanes", target: "George" },
    { source: "Dawg", target: "Ethan" }
  ]
};

const NetworkComp = ({ users }) => {

  const svgRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;

    var simulation = d3
      .forceSimulation(graph.nodes)
      .force(
        "link",
        d3
          .forceLink()
          .id((d) => {
            return d.name;
          })
          .links(graph.links)
      )
      .force("collide", d3.forceCollide().radius(d => d.r + 1).iterations(3))
      .force("charge", d3.forceManyBody().strength(-22))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

    var link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter()
      .append("line")
      .attr("stroke-width", d => 10)
      .attr("style", "stroke: #777;");
      //.attr('style', 'stroke: green; stroke-opacity: 0.6;');

    var node = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter()
      .append("circle")
      .attr("r", 22)
      .attr("fill", d => "red")
      .attr("style", "stroke: blue; stroke-width: 5px;")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    function ticked() {
      link
        .attr("x1", (d) => {
          return d.source.x;
        })
        .attr("y1", (d) => {
          return d.source.y;
        })
        .attr("x2", (d) => {
          return d.target.x;
        })
        .attr("y2", (d) => {
          return d.target.y;
        });

      node
        .attr("cx", (d) => {
          return d.x;
        })
        .attr("cy", (d) => {
          return d.y;
        });
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

  }, []);

  return (
    <div ref={wrapperRef} className="h-96">
      <svg ref={svgRef} className="network" ></svg>
    </div>
  )
}

export default NetworkComp