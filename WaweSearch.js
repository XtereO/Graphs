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
  addEdgeWithVertexes = (from, to) => {
    const fromVertex = this._addVertex(from);
    const toVertex = this._addVertex(to);
    this.edgeList.push(new Edge(fromVertex, toVertex));
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
  getVertexesByVertexValue = (vertexValue) => {
    return this.edgeList
      .filter((e) => e.from.value === vertexValue)
      .map((e) => e.to);
  };
  waweSearch = (startVertexValue, finishVertexValue) => {
    this.vertexList.forEach((v) => this._setVisitedByVertex(v, false));
    if (startVertexValue === finishVertexValue) {
      return true;
    }
    let vertexes = this.getVertexesByVertexValue(startVertexValue);
    let i = 0;
    while (vertexes.length > i) {
      if (vertexes[i].value === finishVertexValue) {
        return true;
      } else if (!vertexes[i].isVisited) {
        this._setVisitedByVertex(vertexes[i], true);
        vertexes.push(
          ...this.getVertexesByVertexValue(vertexes[i].value).filter(
            (v) => !v.isVisited
          )
        );
      }
      i++;
    }
    return false;
  };
}

const graph = new Graph();
graph.addEdgeWithVertexes(1, 2);
graph.addEdgeWithVertexes(1, 3);
graph.addEdgeWithVertexes(1, 4);
graph.addEdgeWithVertexes(2, 3);
graph.addEdgeWithVertexes(2, 4);
graph.addEdgeWithVertexes(3, 4);
graph.addEdgeWithVertexes(4, 5);
graph.addEdgeWithVertexes(3, 5);
graph.addEdgeWithVertexes(5, 4);
graph.addEdgeWithVertexes(4, 3);
graph.addEdgeWithVertexes(3, 2);
graph.addEdgeWithVertexes(2, 1);
console.log(graph.waweSearch(1, 5), graph.waweSearch(1, 6));
