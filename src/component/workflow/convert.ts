import type { Node } from "@/model/workflow";
import { NodeTypeEnum, type NodeType } from "@/model/workflow/enums";
import type { Edge, Workflow, NodeFrontInfo } from "@/model/workflow";

import type { Graph } from "@antv/x6";

export function createWorkflow(workflow: Workflow, graph: Graph) {
    const { nodes, edges } = workflow.graph

    nodes.forEach((node) => {
        createNode(node, graph);
    });
    edges.forEach((edge) => {
        createEdge(edge, graph);
    });
}

export function createNode(node: Node, graph: Graph) {
    let front_info: NodeFrontInfo | null = null;
    if (node.front_info) {
        front_info = JSON.parse(node.front_info);
    }

    const n = {
        id: node.id,
        shape: "data-processing-dag-node",
        x: front_info?.position?.x,
        y: front_info?.position?.y,
        ports: getPortsByType(node.type, node.id),
        data: {
            name: node.name,
            type: node.type,
            ...node.config,
        },
    };
    graph.addNode(n);
}

const getPortsByType = (
    type: NodeType,
    nodeId: string
): { id: string; group: "in" | "out" }[] => {
    let ports: { id: string; group: "in" | "out" }[] = [];
    switch (type) {
        case NodeTypeEnum.Start:
            ports = [
                {
                    id: `${nodeId}-out`,
                    group: "out",
                },
            ];
            break;
        case NodeTypeEnum.End:
            ports = [
                {
                    id: `${nodeId}-in`,
                    group: "in",
                },
            ];
            break;
        default:
            ports = [
                {
                    id: `${nodeId}-in`,
                    group: "in",
                },
                {
                    id: `${nodeId}-out`,
                    group: "out",
                },
            ];
            break;
    }
    return ports;
};

export function createEdge(edge: Edge, graph: Graph) {
    const e = {
        id: `${edge.source}->${edge.target}`,
        shape: "data-processing-curve",
        source: {
            cell: edge.source,
            port: `${edge.source}-out`,
        },
        target: {
            cell: edge.target,
            port: `${edge.target}-in`,
        },
        zIndex: -1,
        data: {
            ...edge,
        },
    };
    graph.addEdge(e);
}
