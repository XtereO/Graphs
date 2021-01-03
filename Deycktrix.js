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
    
    GetVertex(vertex){
        let result=[];
        for(let key in this.EdgeList){
            if (vertex.name===this.EdgeList[key].From.name){
                result.push(this.EdgeList[key].To);
            }
        }
        return result;
    }
    Deycktrix(start,finish){
        //Create Price
        let Price={};
        for (let key in this.VertexList){
            if (this.VertexList[key].name===start.name){
                Price[start.name]=0;
            }
            else{
                Price[this.VertexList[key].name]=Infinity;
            }
        }
        
        //Main
        let points=[start];
        for(let v=0;v<points.length;v++){
            let S=Price[points[v].name];
            
            //Fill curPrice
            let curPrice={}
            for(let e in this.EdgeList){
                if (points[v].name===this.EdgeList[e].From.name){
                    curPrice[this.EdgeList[e].To.name]=this.EdgeList[e].weight+S
                }
            }
            
            //Fill Price
            for(let cP in curPrice){
                for(let P in Price){
                    if ((cP==P) && (curPrice[cP]<Price[P])){
                        Price[P]=curPrice[cP]
                    }
                }
            }
            
            //AddPoints
            let curVertex=this.GetVertex(points[v]);
            for(let c in curVertex){
                if (curVertex[c].visite==1){
                    curVertex[c].visite=0;
                    points.push(curVertex[c])
                }
            }
        }
    return Price[finish.name];
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
console.log(graph.Deycktrix(new Vertex(0),new Vertex(6)))







