import type { NodeConfig } from '@/model/workflow/node_config'
import type { NodeType } from '@/model/workflow/enums'

export interface Node {
    id: string;
    name: string;
    description: string;
    type: NodeType;
    config: NodeConfig
    front_info?: string;
}

export interface Edge {
    source: string;
    target: string;
}

export interface Graph {
    nodes: Node[];
    edges: Edge[];
}

export interface Workflow {
    id: string;
    name: string;
    description: string;
    graph: Graph
}

export interface NodeFrontInfo {
    position: Position;
}

export interface Position {
    x: number;
    y: number;
}
