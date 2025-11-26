
const NodeType = {
    Start: "start",
    End: "end",
    LLM: "llm",
    Agent: "agent",
    Answer: "answer",
    HTTP: "http",
    Code: "code",
    Condition: "condition",
    DocExtract: "doc_extract",
    Classify: "classify",
    Template: "template"
} as const;

export type NodeType = typeof NodeType[keyof typeof NodeType];

export interface Node {
    name: string;
    description: string;
    type: NodeType;
    front_info?: string;
}

