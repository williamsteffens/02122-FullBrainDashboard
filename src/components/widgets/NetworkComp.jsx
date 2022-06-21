import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';


const NetworkComp = ({ }) => {

  let graph = {
    nodes: [
      { name: "Alice" },
      { name: "Bob" },
      { name: "Carol" },
      { name: "Dave" },
      { name: "Erin" },
      { name: "Frank" },
      { name: "Grace" },
      { name: "Heidi" },
      { name: "Ivan" },
      { name: "Judy" },
      { name: "Mike" },
      { name: "Nick" },
      { name: "Olivia" },
      { name: "Peggy" },
      { name: "Robert" }
    ],
    links: [
      { source: 0, target: 1},
      { source: 0, target: 2},
      { source: 0, target: 3},
      { source: 0, target: 6},
      { source: 0, target: 9},
      { source: 0, target: 10},
      { source: 0, target: 14},
      { source: 1, target: 2},
      { source: 2, target: 5},
      { source: 6, target: 7},
      { source: 6, target: 8},
      { source: 9, target: 4},

      { source: 10, target: 11},
      { source: 10, target: 12},
      { source: 10, target: 13},
      { source: 11, target: 12},
      { source: 12, target: 14},

    ]
  };

  let nodes = graph.nodes;

  let links = graph.links; 

  const svgRef = useRef();
  const wrapperRef = useRef();
  

  useEffect(() => {
    // if (user) {
    //   nodes = [{name: "kevin"},];
    //   links = [];

    //   users.forEach(u => {
    //     if (user.includes_id.includes(u._id)) {
    //       nodes.push({name: u.name});
    //       links.push({source: user.name, target: u.name});
    //     }
    //   })
    // }


    const svg = d3.select(svgRef.current);

    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;
    
    var simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink()
          /*.id((d) => {
            return d.id;
          })*/.strength(1)
      )
      .force("charge", d3.forceManyBody().strength(-600))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

    var link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter().append("line")
        .attr("stroke-width", d => 7)
      
    var node = svg
      .append("g")
        .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
        .attr("r", 22)
        .attr("fill", d => "#ffbb78")
        .call(
          d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );

    var text = svg
      .append("g")
        .attr("class", "labels, noselect")
      .selectAll("text")
        .data(nodes)
      .enter().append("text")
        .attr("dx", 30)
        .attr("dy", ".35em")
        .text(d => d.name);

    simulation
      .force("link").links(links)
      .distance(160);
    
    simulation
      .force("collide", d3.forceCollide().radius(d => d.r + 5).iterations(4));

    svg.call(
        d3.zoom()
        .scaleExtent([0.1, 3])
        .on("zoom", zoomed)
      );

    function zoomed(event) {
      svg.selectAll(".nodes, .labels, .noselect, .links").attr("transform", event.transform);
    }


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

      node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

      text.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
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
      <h1 className="font-bold text-xl mb-6">Your Learning Network</h1>
      <svg ref={svgRef} className="network" ></svg>
    </div>)
}

export default NetworkComp

