class Vertex{
    constructor(name){
        this.name=name;
        this.visite=1;
    }
}
class Edge{
    constructor(From,To,weight){
        this.From=From;
        this.To=To;
        this.weight=weight;
    }
}
class Graph{
    constructor(){
        this.VertexList=[];
        this.EdgeList=[];
    }
    AddVertex(name){
        this.VertexList.push(new Vertex(name));
    }
    AddEdge(From,To,weight){
        this.EdgeList.push(new Edge(new Vertex(From),new Vertex(To),weight));
    }
    
    SetVisite(){
        for(let v=0;v<this.EdgeList.length;v++){
            this.EdgeList[v].From.visite=1;
            this.EdgeList[v].To.visite=1;
        }
    }
    GetVertex(vertex){
        let result=[];
        for(let key in this.EdgeList){
            if (vertex.name===this.EdgeList[key].From.name){
                result.push(this.EdgeList[key].To);
            }
        }
        return result;
    }
    WaweSearch(start,finish){
        this.SetVisite()
        //Check
        if(start.name===finish.name){
            return true;
        }
        let curPoints=this.GetVertex(start)
        for(let v=0;v<curPoints.length;v++){
            if (curPoints[v].visite==1){
                curPoints[v].visite=0;
                if (curPoints[v].name===finish.name){
                        return true;
                }
                else{
                    curPoints.push(...this.GetVertex(curPoints[v]));
                }
            }
        }
        return false;
    }
}

//Create graph
let graph=new Graph();

//Add vertex
for(let i=0;i<8;i++){
    graph.AddVertex(i);
}

//Add edge
graph.AddEdge(0,1,1);
graph.AddEdge(0,3,3);
graph.AddEdge(1,2,1)
graph.AddEdge(3,4,4)
graph.AddEdge(2,6,12)
graph.AddEdge(4,5,1)
graph.AddEdge(5,4,1)
graph.AddEdge(5,6,1)

//Run DeycktrixAlgorithm
console.log(graph.WaweSearch(new Vertex(0),new Vertex(7)))//False
console.log(graph.WaweSearch(new Vertex(0),new Vertex(6)))//True








