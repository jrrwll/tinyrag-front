export type VariableTypeHint = string | number | boolean | string[] | number[] | boolean[]

export interface ContextVariable {
    left: string;
    right: string;
    node_id?: number | null;
}

// ai model
export interface ModelParams {
    temperature?: number | null;
    top_k?: number | null;
    top_p?: number | null;
    repeat_penalty?: number | null;
    max_tokens?: number | null;
}

// exception config
export interface ExceptionDefaultValue {
    name: string;
    value: VariableTypeHint
}

export interface ExceptionConfig {
    exception_strategy: string;
    exception_node_id?: number | null;
    exception_default_values?: ExceptionDefaultValue[] | null;
}