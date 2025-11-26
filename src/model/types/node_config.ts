import type { PromptRoleType, VariableType } from '@/model/types/enums.ts'
import type { ContextVariable, ExceptionConfig, ModelParams } from '@/model/types/base.ts'

export interface LLMConfig {
    model_id: number;
    model_params?: ModelParams | null;
    user_prompt: string;
    advanced_prompts?: LLMPrompt[] | null;
    structured_output?: StructuredOutput[] | null;
    context_variables?: ContextVariable[] | null;
    output_variable?: string | null;
    exception_config?: ExceptionConfig | null;
}

export interface LLMPrompt {
    role: PromptRoleType;
    content: string;
}

export interface StructuredOutput {
    name: string;
    type: VariableType;
    description?: string | null;
    options?: string[] | null;
}
