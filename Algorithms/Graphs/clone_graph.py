"""
https://neetcode.io/problems/clone-graph

Clone Graph

Given a node in a connected undirected graph, return a deep copy of the graph.
Each node in the graph contains an integer value and a list of its neighbors.

The graph is shown in the test cases as an adjacency list.
An adjacency list is a mapping of nodes to lists, used to represent a finite graph.
Each list describes the set of neighbors of a node in the graph.
For simplicity, nodes values are numbered from 1 to n, where n is the total number of nodes in the graph.
The index of each node within the adjacency list is the same as the node's value (1-indexed).
The input node will always be the first node in the graph and have 1 as the value.

Example 1:
Input: adjList = [[2],[1,3],[2]]
Output: [[2],[1,3],[2]]
Explanation: There are 3 nodes in the graph.
Node 1: val = 1 and neighbors = [2].
Node 2: val = 2 and neighbors = [1, 3].
Node 3: val = 3 and neighbors = [2].

Example 2:
Input: adjList = [[]]
Output: [[]]
Explanation: The graph has one node with no neighbors.

Example 3:
Input: adjList = []
Output: []
Explanation: The graph is empty.

Constraints:
0 <= The number of nodes in the graph <= 100.
1 <= Node.val <= 100
There are no duplicate edges and no self-loops in the graph.
"""
from typing import Optional
from graph_node import GraphNode

class Solution:
    def cloneGraph(self, node: Optional[GraphNode]) -> Optional[GraphNode]:
        # Declare a dictionary to keep track of the nodes that we have created clones for
        cloned = {}
        
        # Define our recursive dfs approach to cloning GraphNodes
        def dfs(node: GraphNode) -> Optional[GraphNode]:
            # Base case is that the node we are trying to copy has already been copied.
            # Check that its in our dictionary of clones, and if it is return the key's value
            if node in cloned:
                return cloned[node]
            
            # Otherwise, we haven't made a copy of it. So make one and put it in our dict.
            clone = GraphNode(node.val)
            cloned[node] = clone
            
            # Now we need to take care of it neighbors
            for neighbor in node.neighbors:
                clone.neighbors.append(dfs(neighbor))
            
            # Then return our newly cloned GraphNode
            return clone
    
        return dfs(node) if node else None
    
"""
Time complexity is O(n + m) where n is the number of nodes in the graph plus the number of connections in our
undirected graph.

Space complexity is O(n) because we are storing the cloned nodes in a dict.
"""

