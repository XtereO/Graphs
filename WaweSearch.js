class Vertex{
    constructor(name,visite=1){
        this.name=name;
        this.visite=visite;
    }
};
class Edge{
    constructor(from,to,weight=1){
        this.from=from;
        this.to=to;
        this.weight=weight;
    }
};
class Graph{
    constructor(){
    this.VertexList=this.EdgeList=[];
    }
    AddEdge(from,to,weight=1){
        this.EdgeList.push(new Edge(from,to,weight))
    }
    AddVertex(name){
        this.VertexList.push(new Vertex(name))
    }
    
    GetVertex(vertex){
        let result=[];
        for(let i=0;i<this.EdgeList.length;i++){
            if (this.EdgeList[i].from.name===vertex.name){
                result.push(this.EdgeList[i].to);
            }
        }
        return result;
    }

    WaweSearch(start,finish){
        if (start.name===finish.name){
            console.log("Win!");
        }
        let curVertex=this.GetVertex(start);
        console.log(curVertex);
        for(let i=0;i<curVertex.length;i++){
            if (curVertex[i].visite==1){
                curVertex[i].visite=0
                this.WaweSearch(curVertex[i],finish)
            }
        }
        
    }
};

let graph=new Graph();

//AddVertex
for(let i=1;i<=5;i++){
    graph.AddVertex(new Vertex(i))
}

//AddEdge
v1=new Vertex(1);
v2=new Vertex(2);
v3=new Vertex(3);
v4=new Vertex(4);
v5=new Vertex(5);
graph.AddEdge(v1,v2);
graph.AddEdge(v1,v3);
graph.AddEdge(v2,v3);
graph.AddEdge(v2,v4);
graph.AddEdge(v4,v5);
graph.WaweSearch(v1,v5)


