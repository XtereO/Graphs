class Vertex():
    def __init__(self,name):
        self.name=name
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
        
    def WaweSearch(self,start,finish):
        #Recursion Key
        if start.name==finish.name:
            print("True)")
        curVertex=self.GetVertex(start)
        for a in curVertex:
            #Do recursion if vertex dont visited
            if a.visite==1:
                a.visite=0
                self.WaweSearch(a,finish)
    
    def Deyktrix(self,start,finish):
        #FillPrice
        Price={}
        for v in self.VertexList:
            if start.name==v.name:
                Price[start.name]=0
            else:
                Price[v.name]=float("inf")
        
        points=[start]
        security=[start]
        #Do algorithm
        for v in points:
            S=Price[v.name]
            curPrice={}
            
            #FillCurPrice
            for i in self.EdgeList:
                if v.name==i.From.name:
                    curPrice[i.To.name]=i.weight+S
            
            #FillPrice
            for i in curPrice:
                for a in Price:
                    if i==a and Price[a]>curPrice[i]:
                        Price[a]=curPrice[i]
            
            #AddPoints
            for i in self.GetVertex(v):
                pas=0
                for a in security:
                    if a.name==i.name:
                        pas=1
                if pas==0:
                    points.append(i)
                    security.append(i)
            
            #Check
            if v.name==finish.name:
                return Price[finish.name]
        return False                
        
#Realisation Graph   
graph=Graph()
for a in range(1,8):
    graph.AddVertex(str(a))
graph.AddEdge(Vertex("1"),Vertex("2"),5)
graph.AddEdge(Vertex("1"),Vertex("3"),6)
graph.AddEdge(Vertex("2"),Vertex("4"),2)
graph.AddEdge(Vertex("4"),Vertex("5"),3)
graph.AddEdge(Vertex("4"),Vertex("6"),4)
graph.AddEdge(Vertex("6"),Vertex("4"),9)
graph.AddEdge(Vertex("5"),Vertex("7"),3)
print(graph.Deyktrix(Vertex("1"),Vertex("6")))



