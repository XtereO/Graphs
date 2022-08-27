class Vertex():
    def __init__(self,name):
        self.name=name
        self.visite=1
    def __str__(self):
        return self.name
    visite=1
class Edge():
    def __init__(self,From,To,weight=1):
        self.From=From
        self.To=To
        self.weight=weight
    def __str__(self):
        return ("From:"+str(self.From)+" To:"+str(self.To))
class Graph():
    VertexList,EdgeList=[],[]
    def AddVertex(self,vertex):
        self.VertexList.append(Vertex(vertex))
    def AddEdge(self,From,To,width=1):
        self.EdgeList.append(Edge(From,To,width))
    
    def GetVertex(self,vertex):
        result=[]
        #Go through array and check who connected with current vertex
        for a in self.EdgeList:
            if a.From.name==vertex.name:
                result.append(a.To)
        return result
    def SetVisite(self):
        for e in self.EdgeList:
            e.From.visite=1
            e.To.visite=1
         
    def WaweSearch(self,start,finish):
        self.SetVisite()
        
        #Check 
        if start.name==finish.name:
            return True
        
        #Main
        curVertex=self.GetVertex(start)
        for v in curVertex:
            if v.name==finish.name:
                return True
            elif v.visite==1:
                v.visite=0
                curVertex.extend(self.GetVertex(v))
        return False
        
#Realisation Graph   
graph=Graph()
for a in range(1,9):
    graph.AddVertex(a)
graph.AddEdge(Vertex(1),Vertex(2))
graph.AddEdge(Vertex(1),Vertex(3))
graph.AddEdge(Vertex(2),Vertex(4))
graph.AddEdge(Vertex(4),Vertex(5))
graph.AddEdge(Vertex(4),Vertex(6))
graph.AddEdge(Vertex(6),Vertex(4))
graph.AddEdge(Vertex(5),Vertex(7))
print(graph.WaweSearch(Vertex(4),Vertex(7)))#True
print(graph.WaweSearch(Vertex(1),Vertex(8)))#False



