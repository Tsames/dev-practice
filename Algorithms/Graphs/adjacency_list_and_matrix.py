'''
Create a class that takes a vertex/edge list of a directed graph in the constructor. Suppose the inputted nodes are arbitrary strings.

Have 2 public methods:

(Map<string, int>, Array<Array<int>>) GraphConverter::getAsAdjacencyMatrix()

Return a tuple where the first value is a mapping to a row number and the second value is the VxV size matrix.

Map<string, List<string>> GraphConverter::getAsAdjacencyList()

Return a mapping from node ID to neighboring node IDs.

Example(s)
Suppose we have the following vertex list and edge list:
vertexList = ["n1", "n2", "n3"]
edgeList = [("n1", "n2")]

getAsAdjacencyList(vertexList, edgeList) should return
{
  "n1": ["n2"],
  "n2": [],
  "n3": [],
}

getAsAdjacencyMatrix(vertexList, edgeList) should return a tuple with the following values.

First value (IDs can be arbitrarily assigned in any order):
{
  "n1": 0,
  "n2": 1,
  "n3": 2,
}

Second value:
[
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
]

class GraphConverter:
  def getAsAdjacencyList(self, vertexList: list[str], edgeList: list) -> dict[str, list[str]]:
  def getAsAdjacencyMatrix(self, vertexList: list[str], edgeList: list):
'''

class GraphConverter:
  def __init__(self, vertexList: list[str], edgeList: list[(str, str)]):
    self.vertexList = vertexList
    self.edgeList = edgeList
    self.adjacencyList = self.getAsAdjacencyList()
    self.adjacencyMatrix = self.getAsAdjacencyMatrix()

  def getAsAdjacencyList(self) -> dict[str,list[str]]:
    # Intialize empty lists as the values for each vertex (keys)
    adjacencyList = {v: [] for v in self.vertexList}

    # Fill in lists
    for origin, dest in self.edgeList:
      adjacencyList[origin].append(dest)

    return adjacencyList

  def getAsAdjacencyMatrix(self):
    # Initialize adj matrix as a nxn matrix with 0's at every index
    adjacencyMatrix = [[0 for i in range(len(self.vertexList))] for v in self.vertexList]

    # Node to Index Map
    nodeToIndexMap = {v: i for i, v in enumerate(self.vertexList)}
    
    # Fill 1 for directed connections
    for row, col in self.edgeList:
      rowIdx = nodeToIndexMap[row]
      colIdx = nodeToIndexMap[col]

      adjacencyMatrix[rowIdx][colIdx] = 1

    return adjacencyMatrix

graph = GraphConverter(["n1","n2","n3"], [("n1", "n2")])
print("\n\nTom's Tests")
print(graph.getAsAdjacencyList())
print(graph.adjacencyList)
print(graph.adjacencyMatrix)