const graph = {
  bear: ['cat', 'penguin'],
  cat: ['bear', 'penguin', 'seal'],
  penguin: ['bear', 'cat', 'pig', 'rabbit'],
  pig: ['penguin', 'fox'],
  fox: ['monkey'],
  //fox: [],
  monkey: ['rabbit'],
  rabbit: ['monkey', 'penguin', 'rat'],
  //rabbit: ['penguin', 'rat'],
  rat: ['dog'],
  dog: ['seal'],
  seal: ['cat', 'dog']
};

// shortest path: bear, fox, penguin, rat, seal
const graph2 = {
  bear: [['fox', 1], ['penguin', 4], ['cat', 1]],
  fox: [['penguin', 1], ['seal', 5]],
  penguin: [['rat', 1]],
  rat: [['seal', 1]],
  cat: [['dog',3]],
  dog: [['rat', 2]],
  seal: []
};

// Depth-First
// ------------------------------------------
// Returns whether a path exists
const graphDFS = (graph, start, destination) => {
  var stack = [start];
  var searched = [];

  while(stack.length > 0) {
    var node = stack.shift();
    if(node === destination){
      console.log('destination reached ', node);
      return true;
    }
    if(!searched.includes(node)){
      console.log('searching ', node);
      searched.push(node);

      var unvisisted = graph[node].filter(item => !searched.includes(item));
      stack = unvisisted.concat(stack);
    }
  }
  return false;
};
//graphDFS(graph, 'cat', 'monkey');

// Breadth-First
// ------------------------------------------
// Returns whether a path exists and the shortest path it traversed to get it
const graphBFS = (graph, start, destination) => {
  var queue = [start];
  var searched = [];

  while(queue.length > 0) {
    var node = queue.shift();
    if(node === destination) {
      console.log('searching ', node);
      console.log('destination reached');
      return true
    } else if(!searched.includes(node)) {
      console.log('searching ', node);
      searched.push(node);
      queue = queue.concat(graph[node]);
    }
  }
  return false;
};

//graphBFS(graph, 'cat', 'monkey');

// Dijkstra's
// ------------------------------------------
// Returns the least costly shortest path

//const graphDijkstra = (graph, start, destination) => {
//  const costs = {};
//  const processed = [];
//
//  const lowestCostNode = (nodes) => {
//    let lowestCost = Infinity;
//    let lowestCostNode = null;
//
//    nodes.forEach( node => {
//      if(node[1] < lowestCost){
//        lowestCost = node[1];
//        lowestCostNode = node;
//      }
//    });
//    return lowestCostNode;
//  };
//
//  let node = lowestCostNode(graph[start]);
//  while(node !== null){
//    let cost = node[1];
//    let neighbors = graph[node[0]];
//
//    neighbors.forEach( neighbor => {
//      let newCost = neighbor[1] + cost;
//      if(costs[neighbor[0]] > newCost){
//        costs[neighbor[0]] = newCost;
//        parents[neighbor[0]] = neighbor;
//      }
//    });
//
//  }
//
//};
//graphDijkstra(graph, 'bear', 'seal');
