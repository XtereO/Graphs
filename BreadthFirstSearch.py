class Vertex():
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name
    visite = 1


class Edge():
    def __init__(self, From, To, weight=1):
        self.From = From
        self.To = To
        self.weight = weight

    def __str__(self):
        return ("From:"+str(self.From)+" To:"+str(self.To))


class Graph():
    VertexList, EdgeList = [], []

    def AddVertex(self, vertex):
        self.VertexList.append(Vertex(vertex))

    def AddEdge(self, From, To, width=1):
        self.EdgeList.append(Edge(From, To, width))

    def GetVertex(self, vertex):
        result = []
        # Go through array and check who connected with current vertex
        for a in self.EdgeList:
            if a.From.name == vertex.name:
                result.append(a.To)
        return result

    def BreadthFirstSearch(self, start, finish):
        # Recursion Key
        if start.name == finish.name:
            print("True)")
        curVertex = self.GetVertex(start)
        for a in curVertex:
            # Do recursion if vertex dont visited
            if a.visite == 1:
                a.visite = 0
                self.BreadthFirstSearch(a, finish)


# Realisation Graph
graph = Graph()
for a in range(1, 8):
    graph.AddVertex(a)
graph.AddEdge(Vertex(1), Vertex(2))
graph.AddEdge(Vertex(1), Vertex(3))
graph.AddEdge(Vertex(2), Vertex(4))
graph.AddEdge(Vertex(4), Vertex(5))
graph.AddEdge(Vertex(4), Vertex(6))
graph.AddEdge(Vertex(6), Vertex(4))
graph.AddEdge(Vertex(5), Vertex(7))
graph.BreadthFirstSearch(Vertex(4), Vertex(7))
