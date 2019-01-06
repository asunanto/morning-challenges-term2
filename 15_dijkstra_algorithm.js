/*
Strongly recommend to attempt this in pairs or groups.

Consider the graph stored as 'problem'. Write a method (and helper
methods) that will show the distance and shortest path between
two nodes in the graph.

If there is no path, the distance returned should be Infinity, 
and the path should be an empty array.

If the start and end node are the same, the distance should be 0 and
the path should only contain the start/end node. 

Dijkstra’s algorithm:
Note the initial cost to get to all nodes from the start node as
Infinity, except for the start node itself, for which the cost is 0.

In each round:
A. Pick the unvisited node with the smallest current cost noted
B. From that node, update the cost to every child node of that node, 
   indicating the parent node for the cost.
C. Mark that node as done

You are done when all nodes have been visited. The cost is the
final one noted on the finish node, and the path can be taken
from the parents recorded.

Test your solution: mocha 15_dijkstra_algorithm.js

Hints:
If you are having trouble making a start try drawing
a layout of the diagram and thinking about how you could move around
the object.

Using Google will also help a lot for coming up with ideas.
*/

const problem = {
  A: {
    B: 2,
    C: 7
  },
  B: {
    D: 1,
    E: 8
  },
  C: {
    B: 3,
    E: 12
  },
  D: {
    E: 4,
    F: 7
  },
  E: {
    F: 4
  },
  F: {}
};

// const dijkstra = (graph, start, end) => {
//   let current_position = start
//   let result = {distance:0, path: [start]}
//   let minKey
//   while (current_position != end) {
//     try {
//       minKey = Object.keys(problem[current_position]).reduce((a, b) => problem[current_position][a] < problem[current_position][b] ? a : b)
//     }
//     catch {
//       return {distance:Infinity, path: []}
//     }
//     result.path.push(minKey)
//     result.distance += problem[current_position][minKey]
//     current_position = minKey
//   }
//   return result
// };
const dijkstra = (graph, start, end) => {
  if (start === end) return {path:[start], distance:0}
  let totalCosts = {}
  totalCosts[start] = 0
  let minPQ = graph[start]
  let prevNodes = {}
  for (let node in graph) {
    if (node != start) totalCosts[node] = Infinity
  }
  while (Object.keys(minPQ).length !== 0) {
    let min = Object.keys(minPQ).reduce((a, b) => minPQ[a] < minPQ[b] ? a : b) // find smallest path   
    totalCosts[min] = minPQ[min]
    delete minPQ[min]
    for (let node in graph[min]) { // looks for adjacent nodes from smallest node
      let altPath = totalCosts[min] + graph[min][node] 
      if (altPath < totalCosts[node]) {
        totalCosts[node] = altPath
        prevNodes[node] = min
        minPQ[node] = altPath
      }
    }
  }
  if (totalCosts[end] == Infinity) return {path:[], distance:Infinity}

  // display nodes
  let node = end
  let path = []
  while (node != undefined) {
    path.unshift(node)
    node = prevNodes[node]
  }
  path.unshift(start)
  console.log(prevNodes)
  console.log(totalCosts)
  return {path, distance: totalCosts[end]}
}





let assert = require('assert');

describe('Find shortest path', function () {
  context('When there is a valid path and start is different from end', function () {
    it('Should return the distance 10 from A to F with path A,B,D,E,F', function () {
      assert.deepEqual({
        distance: 10,
        path: ['A', 'B', 'D', 'F']
      }, dijkstra(problem, 'A', 'F'))
    })
    it('Should return the distance 9 from B to F with path B,D,E,F', function () {
      assert.deepEqual({
        distance: 8,
        path: ['B', 'D', 'F']
      }, dijkstra(problem, 'B', 'F'))
    })

  })

  context('When there is no path between the start and end', function () {
    it('Should return the distance Infinity if there is no path', function () {
      assert.deepEqual({
        distance: Infinity,
        path: []
      }, dijkstra(problem, 'B', 'A'));
    })
  })
  context('When the start and end are the same', function () {
    it('Should return a distance of 0 from B to B with path B', function () {
      assert.deepEqual({
        distance: 0,
        path: ['B']
      }, dijkstra(problem, 'B', 'B'));
    })
  })
})