
export const NodeTypeEnum = {
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

export type NodeType = typeof NodeTypeEnum[keyof typeof NodeTypeEnum];

const PromptRoleType = {
    System: "system",
    Assistant: "assistant",
    User: "user"
} as const;

export type PromptRoleType = typeof PromptRoleType[keyof typeof PromptRoleType];

const VariableType = {
    String: "string",
    Integer: "integer",
    Float: "float",
    Boolean: "boolean",
    StringArray: "string_array",
    IntegerArray: "integer_array",
    FloatArray: "float_array",
    BooleanArray: "boolean_array"
} as const;

export type VariableType = typeof VariableType[keyof typeof VariableType];

const InputVariableType = {
    Text: "test",
    Number: "number",
    Option: "user",
    File: "file",
    Files: "files"
} as const;

export type InputVariableType = typeof InputVariableType[keyof typeof InputVariableType];

const FileType = {
    Picture: "picture",
    Video: "video",
    Audio:  "audio",
    Document: "document"
} as const;

export type FileType = typeof FileType[keyof typeof FileType];
