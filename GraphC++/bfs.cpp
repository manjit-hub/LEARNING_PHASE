#include <bits/stdc++.h>
using namespace std;
vector<int> bfs(vector<vector<int>>& graph, int src){
    int vertex = graph.size() - 1;
    vector<bool> visited(vertex + 1, false);
    vector<int> distance(vertex + 1, 0);
    visited[src] = 1;
    queue<int> q;
    q.push(src);
    while(!q.empty()){
        int parent = q.front();
        q.pop();
        for(auto child : graph[parent]){
            if(!visited[child] && child != parent){
                q.push(child);
                visited[child] = true;
                
                distance[child] = distance[parent] + 1;
            }
        }
    }
    return distance;
}
int main(){
    int vertex, edges;
    cout << "Enter the number of vertices and Edges: ";
    cin >> vertex >> edges;
    vector<vector<int>> graph(vertex + 1);

    // Directed
    cout << "Enter all the edges: \n";
    for(int i = 1; i <= edges; i++){
        int a, b;
        cin >> a >> b;
        graph[a].push_back(b);
    }

    cout << "Enter the source node: ";
    int src;
    cin >> src;
    vector<int> distance = bfs(graph, src);
    for(int i = 1 ; i <= vertex; i++){
        cout << "Distance from " << src << " to " << i << " is " << distance[i] << "\n";
    }
}