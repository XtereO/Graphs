class Vertex {
  constructor(value) {
    this.value = value;
    this.isVisited = false;
  }
  setVisit = (isVisited) => {
    this.isVisited = isVisited;
  };
}
class Edge {
  constructor(from, to, weight = 1) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}
class Graph {
  vertexList = [];
  edgeList = [];
  _addVertex = (value) => {
    const vertex = new Vertex(value);
    this.vertexList.push(vertex);
    return vertex;
  };
  addEdgeWithVertexes = (from, to, weight = 1) => {
    const fromVertex = this._addVertex(from);
    const toVertex = this._addVertex(to);
    this.edgeList.push(new Edge(fromVertex, toVertex, weight));
  };
  _setVisitedByVertex = (vertex, isVisited) => {
    this.vertexList.forEach(
      (v) => v.value === vertex.value && v.setVisit(isVisited)
    );
    this.edgeList.forEach(
      (e) =>
        (e.to.value === vertex.value && e.to.setVisit(isVisited)) ||
        (e.from.value === vertex.value && e.from.setVisit(isVisited))
    );
  };
  getEdgesByVertexValue = (vertexValue) => {
    return this.edgeList.filter((e) => e.from.value === vertexValue);
  };
  deyktix = (startVertexValue, finishVertexValue) => {
    let prices = {};
    this.vertexList.forEach(
      (v) => (prices[v.value] = v.value === startVertexValue ? 0 : Infinity)
    );
    this.vertexList.forEach((v) => this._setVisitedByVertex(v, false));
    const edges = this.getEdgesByVertexValue(startVertexValue);
    edges.forEach((e) => (prices[e.to] = e.weight));
    let i = 0;
    while (edges.length > i) {
      if (
        edges[i].weight + prices[edges[i].from.value] <
        prices[edges[i].to.value]
      ) {
        prices[edges[i].to.value] =
          edges[i].weight + prices[edges[i].from.value];
      }
      this._setVisitedByVertex(edges[i].from, true);
      edges.push(
        ...this.getEdgesByVertexValue(edges[i].to.value).filter(
          (e) => !e.from.isVisited
        )
      );
      i++;
    }
    return prices[finishVertexValue] ?? Infinity;
  };
}

const graph = new Graph();
graph.addEdgeWithVertexes(1, 2, 10);
graph.addEdgeWithVertexes(1, 3, 30);
graph.addEdgeWithVertexes(1, 4, 40);
graph.addEdgeWithVertexes(2, 3, 10);
graph.addEdgeWithVertexes(2, 4, 30);
graph.addEdgeWithVertexes(3, 4, 10);
graph.addEdgeWithVertexes(4, 5, 15);
console.log(graph.deyktix(1, 5), graph.deyktix(1, 6));
