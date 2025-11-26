
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

