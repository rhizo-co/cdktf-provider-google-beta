// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVertexAiReasoningEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#deletion_policy GoogleVertexAiReasoningEngine#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the ReasoningEngine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#description GoogleVertexAiReasoningEngine#description}
  */
  readonly description?: string;
  /**
  * The display name of the ReasoningEngine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#display_name GoogleVertexAiReasoningEngine#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels associated with this ReasoningEngine. You can use these to
  * organize and group your ReasoningEngines.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#labels GoogleVertexAiReasoningEngine#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#project GoogleVertexAiReasoningEngine#project}
  */
  readonly project?: string;
  /**
  * The region of the reasoning engine. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#region GoogleVertexAiReasoningEngine#region}
  */
  readonly region?: string;
  /**
  * context_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#context_spec GoogleVertexAiReasoningEngine#context_spec}
  */
  readonly contextSpec?: GoogleVertexAiReasoningEngineContextSpec;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#encryption_spec GoogleVertexAiReasoningEngine#encryption_spec}
  */
  readonly encryptionSpec?: GoogleVertexAiReasoningEngineEncryptionSpec;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#spec GoogleVertexAiReasoningEngine#spec}
  */
  readonly spec?: GoogleVertexAiReasoningEngineSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#timeouts GoogleVertexAiReasoningEngine#timeouts}
  */
  readonly timeouts?: GoogleVertexAiReasoningEngineTimeouts;
  /**
  * traffic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#traffic_config GoogleVertexAiReasoningEngine#traffic_config}
  */
  readonly trafficConfig?: GoogleVertexAiReasoningEngineTrafficConfig;
}
export interface GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfig {
  /**
  * Required. The Gemini model used to generate embeddings to lookup similar examples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#embedding_model GoogleVertexAiReasoningEngine#embedding_model}
  */
  readonly embeddingModel: string;
}

export function googleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfigToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_model: cdktf.stringToTerraform(struct!.embeddingModel),
  }
}


export function googleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_model: {
      value: cdktf.stringToHclTerraform(struct!.embeddingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModel = this._embeddingModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._embeddingModel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._embeddingModel = value.embeddingModel;
    }
  }

  // embedding_model - computed: false, optional: false, required: true
  private _embeddingModel?: string; 
  public get embeddingModel() {
    return this.getStringAttribute('embedding_model');
  }
  public set embeddingModel(value: string) {
    this._embeddingModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelInput() {
    return this._embeddingModel;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecExampleStoreConfig {
  /**
  * similarity_search_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#similarity_search_config GoogleVertexAiReasoningEngine#similarity_search_config}
  */
  readonly similaritySearchConfig?: GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfig;
}

export function googleVertexAiReasoningEngineContextSpecExampleStoreConfigToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecExampleStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    similarity_search_config: googleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfigToTerraform(struct!.similaritySearchConfig),
  }
}


export function googleVertexAiReasoningEngineContextSpecExampleStoreConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecExampleStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    similarity_search_config: {
      value: googleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfigToHclTerraform(struct!.similaritySearchConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecExampleStoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._similaritySearchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.similaritySearchConfig = this._similaritySearchConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecExampleStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._similaritySearchConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._similaritySearchConfig.internalValue = value.similaritySearchConfig;
    }
  }

  // similarity_search_config - computed: false, optional: true, required: false
  private _similaritySearchConfig = new GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfigOutputReference(this, "similarity_search_config");
  public get similaritySearchConfig() {
    return this._similaritySearchConfig;
  }
  public putSimilaritySearchConfig(value: GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigSimilaritySearchConfig) {
    this._similaritySearchConfig.internalValue = value;
  }
  public resetSimilaritySearchConfig() {
    this._similaritySearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get similaritySearchConfigInput() {
    return this._similaritySearchConfig.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig {
  /**
  * Number of revisions to consider per candidate count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#revisions_per_candidate_count GoogleVertexAiReasoningEngine#revisions_per_candidate_count}
  */
  readonly revisionsPerCandidateCount?: number;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    revisions_per_candidate_count: cdktf.numberToTerraform(struct!.revisionsPerCandidateCount),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    revisions_per_candidate_count: {
      value: cdktf.numberToHclTerraform(struct!.revisionsPerCandidateCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revisionsPerCandidateCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionsPerCandidateCount = this._revisionsPerCandidateCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._revisionsPerCandidateCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._revisionsPerCandidateCount = value.revisionsPerCandidateCount;
    }
  }

  // revisions_per_candidate_count - computed: false, optional: true, required: false
  private _revisionsPerCandidateCount?: number; 
  public get revisionsPerCandidateCount() {
    return this.getNumberAttribute('revisions_per_candidate_count');
  }
  public set revisionsPerCandidateCount(value: number) {
    this._revisionsPerCandidateCount = value;
  }
  public resetRevisionsPerCandidateCount() {
    this._revisionsPerCandidateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionsPerCandidateCountInput() {
    return this._revisionsPerCandidateCount;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult {
  /**
  * The identifier of the ExecutableCode part this result is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Outcome of the code execution. Possible values: ["OUTCOME_UNSPECIFIED", "OUTCOME_OK", "OUTCOME_FAILED", "OUTCOME_DEADLINE_EXCEEDED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#outcome GoogleVertexAiReasoningEngine#outcome}
  */
  readonly outcome: string;
  /**
  * Contains stdout when code execution is successful, stderr or other description otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#output GoogleVertexAiReasoningEngine#output}
  */
  readonly output?: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    outcome: cdktf.stringToTerraform(struct!.outcome),
    output: cdktf.stringToTerraform(struct!.output),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outcome: {
      value: cdktf.stringToHclTerraform(struct!.outcome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._outcome !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcome = this._outcome;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._outcome = undefined;
      this._output = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._outcome = value.outcome;
      this._output = value.output;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // outcome - computed: false, optional: false, required: true
  private _outcome?: string; 
  public get outcome() {
    return this.getStringAttribute('outcome');
  }
  public set outcome(value: string) {
    this._outcome = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeInput() {
    return this._outcome;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode {
  /**
  * The code to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#code GoogleVertexAiReasoningEngine#code}
  */
  readonly code: string;
  /**
  * Unique identifier of the ExecutableCode part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Supported programming languages for the generated code. Possible values: ["LANGUAGE_UNSPECIFIED", "PYTHON", "BASH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#language GoogleVertexAiReasoningEngine#language}
  */
  readonly language: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    id: cdktf.stringToTerraform(struct!.id),
    language: cdktf.stringToTerraform(struct!.language),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._id = undefined;
      this._language = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._id = value.id;
      this._language = value.language;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData {
  /**
  * The URI of the file in Google Cloud Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#file_uri GoogleVertexAiReasoningEngine#file_uri}
  */
  readonly fileUri: string;
  /**
  * The IANA standard MIME type of the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#mime_type GoogleVertexAiReasoningEngine#mime_type}
  */
  readonly mimeType: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_uri: cdktf.stringToTerraform(struct!.fileUri),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_uri: {
      value: cdktf.stringToHclTerraform(struct!.fileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktf.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUri = this._fileUri;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileUri = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileUri = value.fileUri;
      this._mimeType = value.mimeType;
    }
  }

  // file_uri - computed: false, optional: false, required: true
  private _fileUri?: string; 
  public get fileUri() {
    return this.getStringAttribute('file_uri');
  }
  public set fileUri(value: string) {
    this._fileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUriInput() {
    return this._fileUri;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall {
  /**
  * The function parameters and values in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#args GoogleVertexAiReasoningEngine#args}
  */
  readonly args?: string;
  /**
  * The unique id of the function call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the function to call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#name GoogleVertexAiReasoningEngine#name}
  */
  readonly name?: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.stringToHclTerraform(struct!.args),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string; 
  public get args() {
    return this.getStringAttribute('args');
  }
  public set args(value: string) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse {
  /**
  * The id of the function call this response is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the function to call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#name GoogleVertexAiReasoningEngine#name}
  */
  readonly name: string;
  /**
  * The function response in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#response GoogleVertexAiReasoningEngine#response}
  */
  readonly response?: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._response = value.response;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData {
  /**
  * Raw bytes, which should be base64-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#data GoogleVertexAiReasoningEngine#data}
  */
  readonly data: string;
  /**
  * The IANA standard MIME type of the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#mime_type GoogleVertexAiReasoningEngine#mime_type}
  */
  readonly mimeType: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktf.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._mimeType = value.mimeType;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata {
  /**
  * The end offset of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#end_offset GoogleVertexAiReasoningEngine#end_offset}
  */
  readonly endOffset?: string;
  /**
  * The start offset of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#start_offset GoogleVertexAiReasoningEngine#start_offset}
  */
  readonly startOffset?: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_offset: cdktf.stringToTerraform(struct!.endOffset),
    start_offset: cdktf.stringToTerraform(struct!.startOffset),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_offset: {
      value: cdktf.stringToHclTerraform(struct!.endOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_offset: {
      value: cdktf.stringToHclTerraform(struct!.startOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endOffset = this._endOffset;
    }
    if (this._startOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startOffset = this._startOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endOffset = undefined;
      this._startOffset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endOffset = value.endOffset;
      this._startOffset = value.startOffset;
    }
  }

  // end_offset - computed: false, optional: true, required: false
  private _endOffset?: string; 
  public get endOffset() {
    return this.getStringAttribute('end_offset');
  }
  public set endOffset(value: string) {
    this._endOffset = value;
  }
  public resetEndOffset() {
    this._endOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endOffsetInput() {
    return this._endOffset;
  }

  // start_offset - computed: false, optional: true, required: false
  private _startOffset?: string; 
  public get startOffset() {
    return this.getStringAttribute('start_offset');
  }
  public set startOffset(value: string) {
    this._startOffset = value;
  }
  public resetStartOffset() {
    this._startOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOffsetInput() {
    return this._startOffset;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts {
  /**
  * The text content of the part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#text GoogleVertexAiReasoningEngine#text}
  */
  readonly text?: string;
  /**
  * Indicates whether the part represents the model's thought process or reasoning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#thought GoogleVertexAiReasoningEngine#thought}
  */
  readonly thought?: boolean | cdktf.IResolvable;
  /**
  * code_execution_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#code_execution_result GoogleVertexAiReasoningEngine#code_execution_result}
  */
  readonly codeExecutionResult?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult;
  /**
  * executable_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#executable_code GoogleVertexAiReasoningEngine#executable_code}
  */
  readonly executableCode?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode;
  /**
  * file_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#file_data GoogleVertexAiReasoningEngine#file_data}
  */
  readonly fileData?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData;
  /**
  * function_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#function_call GoogleVertexAiReasoningEngine#function_call}
  */
  readonly functionCall?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall;
  /**
  * function_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#function_response GoogleVertexAiReasoningEngine#function_response}
  */
  readonly functionResponse?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse;
  /**
  * inline_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#inline_data GoogleVertexAiReasoningEngine#inline_data}
  */
  readonly inlineData?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData;
  /**
  * video_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#video_metadata GoogleVertexAiReasoningEngine#video_metadata}
  */
  readonly videoMetadata?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    thought: cdktf.booleanToTerraform(struct!.thought),
    code_execution_result: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultToTerraform(struct!.codeExecutionResult),
    executable_code: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeToTerraform(struct!.executableCode),
    file_data: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataToTerraform(struct!.fileData),
    function_call: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallToTerraform(struct!.functionCall),
    function_response: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseToTerraform(struct!.functionResponse),
    inline_data: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataToTerraform(struct!.inlineData),
    video_metadata: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataToTerraform(struct!.videoMetadata),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thought: {
      value: cdktf.booleanToHclTerraform(struct!.thought),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_execution_result: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultToHclTerraform(struct!.codeExecutionResult),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultList",
    },
    executable_code: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeToHclTerraform(struct!.executableCode),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeList",
    },
    file_data: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataToHclTerraform(struct!.fileData),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataList",
    },
    function_call: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallToHclTerraform(struct!.functionCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallList",
    },
    function_response: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseToHclTerraform(struct!.functionResponse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseList",
    },
    inline_data: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataToHclTerraform(struct!.inlineData),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataList",
    },
    video_metadata: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataToHclTerraform(struct!.videoMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._thought !== undefined) {
      hasAnyValues = true;
      internalValueResult.thought = this._thought;
    }
    if (this._codeExecutionResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeExecutionResult = this._codeExecutionResult?.internalValue;
    }
    if (this._executableCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executableCode = this._executableCode?.internalValue;
    }
    if (this._fileData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileData = this._fileData?.internalValue;
    }
    if (this._functionCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionCall = this._functionCall?.internalValue;
    }
    if (this._functionResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionResponse = this._functionResponse?.internalValue;
    }
    if (this._inlineData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineData = this._inlineData?.internalValue;
    }
    if (this._videoMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoMetadata = this._videoMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._thought = undefined;
      this._codeExecutionResult.internalValue = undefined;
      this._executableCode.internalValue = undefined;
      this._fileData.internalValue = undefined;
      this._functionCall.internalValue = undefined;
      this._functionResponse.internalValue = undefined;
      this._inlineData.internalValue = undefined;
      this._videoMetadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._thought = value.thought;
      this._codeExecutionResult.internalValue = value.codeExecutionResult;
      this._executableCode.internalValue = value.executableCode;
      this._fileData.internalValue = value.fileData;
      this._functionCall.internalValue = value.functionCall;
      this._functionResponse.internalValue = value.functionResponse;
      this._inlineData.internalValue = value.inlineData;
      this._videoMetadata.internalValue = value.videoMetadata;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // thought - computed: false, optional: true, required: false
  private _thought?: boolean | cdktf.IResolvable; 
  public get thought() {
    return this.getBooleanAttribute('thought');
  }
  public set thought(value: boolean | cdktf.IResolvable) {
    this._thought = value;
  }
  public resetThought() {
    this._thought = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thoughtInput() {
    return this._thought;
  }

  // code_execution_result - computed: false, optional: true, required: false
  private _codeExecutionResult = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResultOutputReference(this, "code_execution_result");
  public get codeExecutionResult() {
    return this._codeExecutionResult;
  }
  public putCodeExecutionResult(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsCodeExecutionResult) {
    this._codeExecutionResult.internalValue = value;
  }
  public resetCodeExecutionResult() {
    this._codeExecutionResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeExecutionResultInput() {
    return this._codeExecutionResult.internalValue;
  }

  // executable_code - computed: false, optional: true, required: false
  private _executableCode = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCodeOutputReference(this, "executable_code");
  public get executableCode() {
    return this._executableCode;
  }
  public putExecutableCode(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsExecutableCode) {
    this._executableCode.internalValue = value;
  }
  public resetExecutableCode() {
    this._executableCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executableCodeInput() {
    return this._executableCode.internalValue;
  }

  // file_data - computed: false, optional: true, required: false
  private _fileData = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileDataOutputReference(this, "file_data");
  public get fileData() {
    return this._fileData;
  }
  public putFileData(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFileData) {
    this._fileData.internalValue = value;
  }
  public resetFileData() {
    this._fileData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDataInput() {
    return this._fileData.internalValue;
  }

  // function_call - computed: false, optional: true, required: false
  private _functionCall = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCallOutputReference(this, "function_call");
  public get functionCall() {
    return this._functionCall;
  }
  public putFunctionCall(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionCall) {
    this._functionCall.internalValue = value;
  }
  public resetFunctionCall() {
    this._functionCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionCallInput() {
    return this._functionCall.internalValue;
  }

  // function_response - computed: false, optional: true, required: false
  private _functionResponse = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponseOutputReference(this, "function_response");
  public get functionResponse() {
    return this._functionResponse;
  }
  public putFunctionResponse(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsFunctionResponse) {
    this._functionResponse.internalValue = value;
  }
  public resetFunctionResponse() {
    this._functionResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionResponseInput() {
    return this._functionResponse.internalValue;
  }

  // inline_data - computed: false, optional: true, required: false
  private _inlineData = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineDataOutputReference(this, "inline_data");
  public get inlineData() {
    return this._inlineData;
  }
  public putInlineData(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsInlineData) {
    this._inlineData.internalValue = value;
  }
  public resetInlineData() {
    this._inlineData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineDataInput() {
    return this._inlineData.internalValue;
  }

  // video_metadata - computed: false, optional: true, required: false
  private _videoMetadata = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadataOutputReference(this, "video_metadata");
  public get videoMetadata() {
    return this._videoMetadata;
  }
  public putVideoMetadata(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsVideoMetadata) {
    this._videoMetadata.internalValue = value;
  }
  public resetVideoMetadata() {
    this._videoMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoMetadataInput() {
    return this._videoMetadata.internalValue;
  }
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsOutputReference {
    return new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent {
  /**
  * The producer of the content. Must be either 'user' or 'model'. If not set, the service will default to 'user'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#role GoogleVertexAiReasoningEngine#role}
  */
  readonly role?: string;
  /**
  * parts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#parts GoogleVertexAiReasoningEngine#parts}
  */
  readonly parts: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts[] | cdktf.IResolvable;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    parts: cdktf.listMapper(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsToTerraform, true)(struct!.parts),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parts: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsToHclTerraform, true)(struct!.parts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._parts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parts = this._parts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
      this._parts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
      this._parts.internalValue = value.parts;
    }
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // parts - computed: false, optional: false, required: true
  private _parts = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentPartsList(this, "parts", false);
  public get parts() {
    return this._parts;
  }
  public putParts(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentParts[] | cdktf.IResolvable) {
    this._parts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partsInput() {
    return this._parts.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents {
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#content GoogleVertexAiReasoningEngine#content}
  */
  readonly content: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentToTerraform(struct!.content),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content.internalValue = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsContent) {
    this._content.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsOutputReference {
    return new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource {
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#events GoogleVertexAiReasoningEngine#events}
  */
  readonly events?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents[] | cdktf.IResolvable;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsToTerraform, true)(struct!.events),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsToHclTerraform, true)(struct!.events),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events.internalValue = value.events;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceEvents[] | cdktf.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics {
  /**
  * Represents the custom memory topic label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#custom_memory_topic_label GoogleVertexAiReasoningEngine#custom_memory_topic_label}
  */
  readonly customMemoryTopicLabel?: string;
  /**
  * Represents the managed memory topic. Possible values: ["USER_PERSONAL_INFO", "USER_PREFERENCES", "KEY_CONVERSATION_DETAILS", "EXPLICIT_INSTRUCTIONS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#managed_memory_topic GoogleVertexAiReasoningEngine#managed_memory_topic}
  */
  readonly managedMemoryTopic?: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_memory_topic_label: cdktf.stringToTerraform(struct!.customMemoryTopicLabel),
    managed_memory_topic: cdktf.stringToTerraform(struct!.managedMemoryTopic),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_memory_topic_label: {
      value: cdktf.stringToHclTerraform(struct!.customMemoryTopicLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_memory_topic: {
      value: cdktf.stringToHclTerraform(struct!.managedMemoryTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMemoryTopicLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMemoryTopicLabel = this._customMemoryTopicLabel;
    }
    if (this._managedMemoryTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedMemoryTopic = this._managedMemoryTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMemoryTopicLabel = undefined;
      this._managedMemoryTopic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMemoryTopicLabel = value.customMemoryTopicLabel;
      this._managedMemoryTopic = value.managedMemoryTopic;
    }
  }

  // custom_memory_topic_label - computed: false, optional: true, required: false
  private _customMemoryTopicLabel?: string; 
  public get customMemoryTopicLabel() {
    return this.getStringAttribute('custom_memory_topic_label');
  }
  public set customMemoryTopicLabel(value: string) {
    this._customMemoryTopicLabel = value;
  }
  public resetCustomMemoryTopicLabel() {
    this._customMemoryTopicLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMemoryTopicLabelInput() {
    return this._customMemoryTopicLabel;
  }

  // managed_memory_topic - computed: false, optional: true, required: false
  private _managedMemoryTopic?: string; 
  public get managedMemoryTopic() {
    return this.getStringAttribute('managed_memory_topic');
  }
  public set managedMemoryTopic(value: string) {
    this._managedMemoryTopic = value;
  }
  public resetManagedMemoryTopic() {
    this._managedMemoryTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMemoryTopicInput() {
    return this._managedMemoryTopic;
  }
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsOutputReference {
    return new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories {
  /**
  * Represents the fact to generate a memory from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#fact GoogleVertexAiReasoningEngine#fact}
  */
  readonly fact: string;
  /**
  * topics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#topics GoogleVertexAiReasoningEngine#topics}
  */
  readonly topics?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics[] | cdktf.IResolvable;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fact: cdktf.stringToTerraform(struct!.fact),
    topics: cdktf.listMapper(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsToTerraform, true)(struct!.topics),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fact: {
      value: cdktf.stringToHclTerraform(struct!.fact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topics: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsToHclTerraform, true)(struct!.topics),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fact !== undefined) {
      hasAnyValues = true;
      internalValueResult.fact = this._fact;
    }
    if (this._topics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fact = undefined;
      this._topics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fact = value.fact;
      this._topics.internalValue = value.topics;
    }
  }

  // fact - computed: false, optional: false, required: true
  private _fact?: string; 
  public get fact() {
    return this.getStringAttribute('fact');
  }
  public set fact(value: string) {
    this._fact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get factInput() {
    return this._fact;
  }

  // topics - computed: false, optional: true, required: false
  private _topics = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesTopics[] | cdktf.IResolvable) {
    this._topics.internalValue = value;
  }
  public resetTopics() {
    this._topics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
  }
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesOutputReference {
    return new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples {
  /**
  * conversation_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#conversation_source GoogleVertexAiReasoningEngine#conversation_source}
  */
  readonly conversationSource?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource;
  /**
  * generated_memories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#generated_memories GoogleVertexAiReasoningEngine#generated_memories}
  */
  readonly generatedMemories?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories[] | cdktf.IResolvable;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversation_source: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceToTerraform(struct!.conversationSource),
    generated_memories: cdktf.listMapper(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesToTerraform, true)(struct!.generatedMemories),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conversation_source: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceToHclTerraform(struct!.conversationSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceList",
    },
    generated_memories: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesToHclTerraform, true)(struct!.generatedMemories),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversationSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationSource = this._conversationSource?.internalValue;
    }
    if (this._generatedMemories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedMemories = this._generatedMemories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conversationSource.internalValue = undefined;
      this._generatedMemories.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conversationSource.internalValue = value.conversationSource;
      this._generatedMemories.internalValue = value.generatedMemories;
    }
  }

  // conversation_source - computed: false, optional: true, required: false
  private _conversationSource = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSourceOutputReference(this, "conversation_source");
  public get conversationSource() {
    return this._conversationSource;
  }
  public putConversationSource(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesConversationSource) {
    this._conversationSource.internalValue = value;
  }
  public resetConversationSource() {
    this._conversationSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationSourceInput() {
    return this._conversationSource.internalValue;
  }

  // generated_memories - computed: false, optional: true, required: false
  private _generatedMemories = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemoriesList(this, "generated_memories", false);
  public get generatedMemories() {
    return this._generatedMemories;
  }
  public putGeneratedMemories(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesGeneratedMemories[] | cdktf.IResolvable) {
    this._generatedMemories.internalValue = value;
  }
  public resetGeneratedMemories() {
    this._generatedMemories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedMemoriesInput() {
    return this._generatedMemories.internalValue;
  }
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesOutputReference {
    return new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic {
  /**
  * Description of custom memory topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#description GoogleVertexAiReasoningEngine#description}
  */
  readonly description?: string;
  /**
  * Label of custom memory topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#label GoogleVertexAiReasoningEngine#label}
  */
  readonly label?: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._label = value.label;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic {
  /**
  * Managed topic enum (e.g. USER_PREFERENCES, EXPLICIT_INSTRUCTIONS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#managed_topic_enum GoogleVertexAiReasoningEngine#managed_topic_enum}
  */
  readonly managedTopicEnum?: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_topic_enum: cdktf.stringToTerraform(struct!.managedTopicEnum),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_topic_enum: {
      value: cdktf.stringToHclTerraform(struct!.managedTopicEnum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedTopicEnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedTopicEnum = this._managedTopicEnum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedTopicEnum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedTopicEnum = value.managedTopicEnum;
    }
  }

  // managed_topic_enum - computed: false, optional: true, required: false
  private _managedTopicEnum?: string; 
  public get managedTopicEnum() {
    return this.getStringAttribute('managed_topic_enum');
  }
  public set managedTopicEnum(value: string) {
    this._managedTopicEnum = value;
  }
  public resetManagedTopicEnum() {
    this._managedTopicEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedTopicEnumInput() {
    return this._managedTopicEnum;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics {
  /**
  * custom_memory_topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#custom_memory_topic GoogleVertexAiReasoningEngine#custom_memory_topic}
  */
  readonly customMemoryTopic?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic;
  /**
  * managed_memory_topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#managed_memory_topic GoogleVertexAiReasoningEngine#managed_memory_topic}
  */
  readonly managedMemoryTopic?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_memory_topic: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicToTerraform(struct!.customMemoryTopic),
    managed_memory_topic: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicToTerraform(struct!.managedMemoryTopic),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_memory_topic: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicToHclTerraform(struct!.customMemoryTopic),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicList",
    },
    managed_memory_topic: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicToHclTerraform(struct!.managedMemoryTopic),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMemoryTopic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMemoryTopic = this._customMemoryTopic?.internalValue;
    }
    if (this._managedMemoryTopic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedMemoryTopic = this._managedMemoryTopic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMemoryTopic.internalValue = undefined;
      this._managedMemoryTopic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMemoryTopic.internalValue = value.customMemoryTopic;
      this._managedMemoryTopic.internalValue = value.managedMemoryTopic;
    }
  }

  // custom_memory_topic - computed: false, optional: true, required: false
  private _customMemoryTopic = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopicOutputReference(this, "custom_memory_topic");
  public get customMemoryTopic() {
    return this._customMemoryTopic;
  }
  public putCustomMemoryTopic(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsCustomMemoryTopic) {
    this._customMemoryTopic.internalValue = value;
  }
  public resetCustomMemoryTopic() {
    this._customMemoryTopic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMemoryTopicInput() {
    return this._customMemoryTopic.internalValue;
  }

  // managed_memory_topic - computed: false, optional: true, required: false
  private _managedMemoryTopic = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopicOutputReference(this, "managed_memory_topic");
  public get managedMemoryTopic() {
    return this._managedMemoryTopic;
  }
  public putManagedMemoryTopic(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsManagedMemoryTopic) {
    this._managedMemoryTopic.internalValue = value;
  }
  public resetManagedMemoryTopic() {
    this._managedMemoryTopic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMemoryTopicInput() {
    return this._managedMemoryTopic.internalValue;
  }
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsOutputReference {
    return new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs {
  /**
  * Indicates whether natural language memory generation should be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#disable_natural_language_memories GoogleVertexAiReasoningEngine#disable_natural_language_memories}
  */
  readonly disableNaturalLanguageMemories?: boolean | cdktf.IResolvable;
  /**
  * Optional. Generate memories in the third person if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#enable_third_person_memories GoogleVertexAiReasoningEngine#enable_third_person_memories}
  */
  readonly enableThirdPersonMemories?: boolean | cdktf.IResolvable;
  /**
  * Optional. List of scope keys that this customization config applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#scope_keys GoogleVertexAiReasoningEngine#scope_keys}
  */
  readonly scopeKeys?: string[];
  /**
  * consolidation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#consolidation_config GoogleVertexAiReasoningEngine#consolidation_config}
  */
  readonly consolidationConfig?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig;
  /**
  * generate_memories_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#generate_memories_examples GoogleVertexAiReasoningEngine#generate_memories_examples}
  */
  readonly generateMemoriesExamples?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples[] | cdktf.IResolvable;
  /**
  * memory_topics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#memory_topics GoogleVertexAiReasoningEngine#memory_topics}
  */
  readonly memoryTopics?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics[] | cdktf.IResolvable;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_natural_language_memories: cdktf.booleanToTerraform(struct!.disableNaturalLanguageMemories),
    enable_third_person_memories: cdktf.booleanToTerraform(struct!.enableThirdPersonMemories),
    scope_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopeKeys),
    consolidation_config: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigToTerraform(struct!.consolidationConfig),
    generate_memories_examples: cdktf.listMapper(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesToTerraform, true)(struct!.generateMemoriesExamples),
    memory_topics: cdktf.listMapper(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsToTerraform, true)(struct!.memoryTopics),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_natural_language_memories: {
      value: cdktf.booleanToHclTerraform(struct!.disableNaturalLanguageMemories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_third_person_memories: {
      value: cdktf.booleanToHclTerraform(struct!.enableThirdPersonMemories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    consolidation_config: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigToHclTerraform(struct!.consolidationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigList",
    },
    generate_memories_examples: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesToHclTerraform, true)(struct!.generateMemoriesExamples),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesList",
    },
    memory_topics: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsToHclTerraform, true)(struct!.memoryTopics),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableNaturalLanguageMemories !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNaturalLanguageMemories = this._disableNaturalLanguageMemories;
    }
    if (this._enableThirdPersonMemories !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableThirdPersonMemories = this._enableThirdPersonMemories;
    }
    if (this._scopeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeKeys = this._scopeKeys;
    }
    if (this._consolidationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidationConfig = this._consolidationConfig?.internalValue;
    }
    if (this._generateMemoriesExamples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateMemoriesExamples = this._generateMemoriesExamples?.internalValue;
    }
    if (this._memoryTopics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryTopics = this._memoryTopics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableNaturalLanguageMemories = undefined;
      this._enableThirdPersonMemories = undefined;
      this._scopeKeys = undefined;
      this._consolidationConfig.internalValue = undefined;
      this._generateMemoriesExamples.internalValue = undefined;
      this._memoryTopics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableNaturalLanguageMemories = value.disableNaturalLanguageMemories;
      this._enableThirdPersonMemories = value.enableThirdPersonMemories;
      this._scopeKeys = value.scopeKeys;
      this._consolidationConfig.internalValue = value.consolidationConfig;
      this._generateMemoriesExamples.internalValue = value.generateMemoriesExamples;
      this._memoryTopics.internalValue = value.memoryTopics;
    }
  }

  // disable_natural_language_memories - computed: false, optional: true, required: false
  private _disableNaturalLanguageMemories?: boolean | cdktf.IResolvable; 
  public get disableNaturalLanguageMemories() {
    return this.getBooleanAttribute('disable_natural_language_memories');
  }
  public set disableNaturalLanguageMemories(value: boolean | cdktf.IResolvable) {
    this._disableNaturalLanguageMemories = value;
  }
  public resetDisableNaturalLanguageMemories() {
    this._disableNaturalLanguageMemories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNaturalLanguageMemoriesInput() {
    return this._disableNaturalLanguageMemories;
  }

  // enable_third_person_memories - computed: false, optional: true, required: false
  private _enableThirdPersonMemories?: boolean | cdktf.IResolvable; 
  public get enableThirdPersonMemories() {
    return this.getBooleanAttribute('enable_third_person_memories');
  }
  public set enableThirdPersonMemories(value: boolean | cdktf.IResolvable) {
    this._enableThirdPersonMemories = value;
  }
  public resetEnableThirdPersonMemories() {
    this._enableThirdPersonMemories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThirdPersonMemoriesInput() {
    return this._enableThirdPersonMemories;
  }

  // scope_keys - computed: false, optional: true, required: false
  private _scopeKeys?: string[]; 
  public get scopeKeys() {
    return this.getListAttribute('scope_keys');
  }
  public set scopeKeys(value: string[]) {
    this._scopeKeys = value;
  }
  public resetScopeKeys() {
    this._scopeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeKeysInput() {
    return this._scopeKeys;
  }

  // consolidation_config - computed: false, optional: true, required: false
  private _consolidationConfig = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfigOutputReference(this, "consolidation_config");
  public get consolidationConfig() {
    return this._consolidationConfig;
  }
  public putConsolidationConfig(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsConsolidationConfig) {
    this._consolidationConfig.internalValue = value;
  }
  public resetConsolidationConfig() {
    this._consolidationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationConfigInput() {
    return this._consolidationConfig.internalValue;
  }

  // generate_memories_examples - computed: false, optional: true, required: false
  private _generateMemoriesExamples = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamplesList(this, "generate_memories_examples", false);
  public get generateMemoriesExamples() {
    return this._generateMemoriesExamples;
  }
  public putGenerateMemoriesExamples(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsGenerateMemoriesExamples[] | cdktf.IResolvable) {
    this._generateMemoriesExamples.internalValue = value;
  }
  public resetGenerateMemoriesExamples() {
    this._generateMemoriesExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateMemoriesExamplesInput() {
    return this._generateMemoriesExamples.internalValue;
  }

  // memory_topics - computed: false, optional: true, required: false
  private _memoryTopics = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopicsList(this, "memory_topics", false);
  public get memoryTopics() {
    return this._memoryTopics;
  }
  public putMemoryTopics(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsMemoryTopics[] | cdktf.IResolvable) {
    this._memoryTopics.internalValue = value;
  }
  public resetMemoryTopics() {
    this._memoryTopics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryTopicsInput() {
    return this._memoryTopics.internalValue;
  }
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsOutputReference {
    return new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule {
  /**
  * Optional. Specifies to trigger generation when the event count reaches this limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#event_count GoogleVertexAiReasoningEngine#event_count}
  */
  readonly eventCount?: number;
  /**
  * Optional. Specifies to trigger generation at a fixed interval. The duration
  * must have a minute-level granularity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#fixed_interval GoogleVertexAiReasoningEngine#fixed_interval}
  */
  readonly fixedInterval?: string;
  /**
  * Optional. Specifies to trigger generation if the stream is inactive for the
  * specified duration after the most recent event. The duration must have a
  * minute-level granularity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#idle_duration GoogleVertexAiReasoningEngine#idle_duration}
  */
  readonly idleDuration?: string;
  /**
  * Optional. Re-include the last N already-processed events in the next window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#overlap_event_count GoogleVertexAiReasoningEngine#overlap_event_count}
  */
  readonly overlapEventCount?: number;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_count: cdktf.numberToTerraform(struct!.eventCount),
    fixed_interval: cdktf.stringToTerraform(struct!.fixedInterval),
    idle_duration: cdktf.stringToTerraform(struct!.idleDuration),
    overlap_event_count: cdktf.numberToTerraform(struct!.overlapEventCount),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_count: {
      value: cdktf.numberToHclTerraform(struct!.eventCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_interval: {
      value: cdktf.stringToHclTerraform(struct!.fixedInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_duration: {
      value: cdktf.stringToHclTerraform(struct!.idleDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlap_event_count: {
      value: cdktf.numberToHclTerraform(struct!.overlapEventCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCount = this._eventCount;
    }
    if (this._fixedInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedInterval = this._fixedInterval;
    }
    if (this._idleDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleDuration = this._idleDuration;
    }
    if (this._overlapEventCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlapEventCount = this._overlapEventCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventCount = undefined;
      this._fixedInterval = undefined;
      this._idleDuration = undefined;
      this._overlapEventCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventCount = value.eventCount;
      this._fixedInterval = value.fixedInterval;
      this._idleDuration = value.idleDuration;
      this._overlapEventCount = value.overlapEventCount;
    }
  }

  // event_count - computed: false, optional: true, required: false
  private _eventCount?: number; 
  public get eventCount() {
    return this.getNumberAttribute('event_count');
  }
  public set eventCount(value: number) {
    this._eventCount = value;
  }
  public resetEventCount() {
    this._eventCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCountInput() {
    return this._eventCount;
  }

  // fixed_interval - computed: false, optional: true, required: false
  private _fixedInterval?: string; 
  public get fixedInterval() {
    return this.getStringAttribute('fixed_interval');
  }
  public set fixedInterval(value: string) {
    this._fixedInterval = value;
  }
  public resetFixedInterval() {
    this._fixedInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIntervalInput() {
    return this._fixedInterval;
  }

  // idle_duration - computed: false, optional: true, required: false
  private _idleDuration?: string; 
  public get idleDuration() {
    return this.getStringAttribute('idle_duration');
  }
  public set idleDuration(value: string) {
    this._idleDuration = value;
  }
  public resetIdleDuration() {
    this._idleDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDurationInput() {
    return this._idleDuration;
  }

  // overlap_event_count - computed: false, optional: true, required: false
  private _overlapEventCount?: number; 
  public get overlapEventCount() {
    return this.getNumberAttribute('overlap_event_count');
  }
  public set overlapEventCount(value: number) {
    this._overlapEventCount = value;
  }
  public resetOverlapEventCount() {
    this._overlapEventCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapEventCountInput() {
    return this._overlapEventCount;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig {
  /**
  * generation_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#generation_rule GoogleVertexAiReasoningEngine#generation_rule}
  */
  readonly generationRule?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation_rule: googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleToTerraform(struct!.generationRule),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation_rule: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleToHclTerraform(struct!.generationRule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generationRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationRule = this._generationRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generationRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generationRule.internalValue = value.generationRule;
    }
  }

  // generation_rule - computed: false, optional: true, required: false
  private _generationRule = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRuleOutputReference(this, "generation_rule");
  public get generationRule() {
    return this._generationRule;
  }
  public putGenerationRule(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigGenerationRule) {
    this._generationRule.internalValue = value;
  }
  public resetGenerationRule() {
    this._generationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationRuleInput() {
    return this._generationRule.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig {
  /**
  * The model used to generate memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#model GoogleVertexAiReasoningEngine#model}
  */
  readonly model: string;
  /**
  * generation_trigger_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#generation_trigger_config GoogleVertexAiReasoningEngine#generation_trigger_config}
  */
  readonly generationTriggerConfig?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    generation_trigger_config: googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigToTerraform(struct!.generationTriggerConfig),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation_trigger_config: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigToHclTerraform(struct!.generationTriggerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._generationTriggerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationTriggerConfig = this._generationTriggerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._generationTriggerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._generationTriggerConfig.internalValue = value.generationTriggerConfig;
    }
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // generation_trigger_config - computed: false, optional: true, required: false
  private _generationTriggerConfig = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfigOutputReference(this, "generation_trigger_config");
  public get generationTriggerConfig() {
    return this._generationTriggerConfig;
  }
  public putGenerationTriggerConfig(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigGenerationTriggerConfig) {
    this._generationTriggerConfig.internalValue = value;
  }
  public resetGenerationTriggerConfig() {
    this._generationTriggerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationTriggerConfigInput() {
    return this._generationTriggerConfig.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig {
  /**
  * The model used to generate embeddings to lookup similar memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#embedding_model GoogleVertexAiReasoningEngine#embedding_model}
  */
  readonly embeddingModel: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_model: cdktf.stringToTerraform(struct!.embeddingModel),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_model: {
      value: cdktf.stringToHclTerraform(struct!.embeddingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModel = this._embeddingModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._embeddingModel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._embeddingModel = value.embeddingModel;
    }
  }

  // embedding_model - computed: false, optional: false, required: true
  private _embeddingModel?: string; 
  public get embeddingModel() {
    return this.getStringAttribute('embedding_model');
  }
  public set embeddingModel(value: string) {
    this._embeddingModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelInput() {
    return this._embeddingModel;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs {
  /**
  * Required. Unique ID identifying the memory schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. The memory schema defined as an OpenAPI Schema Object JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#memory_schema GoogleVertexAiReasoningEngine#memory_schema}
  */
  readonly memorySchema?: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    memory_schema: cdktf.stringToTerraform(struct!.memorySchema),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_schema: {
      value: cdktf.stringToHclTerraform(struct!.memorySchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._memorySchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySchema = this._memorySchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._memorySchema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._memorySchema = value.memorySchema;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // memory_schema - computed: false, optional: true, required: false
  private _memorySchema?: string; 
  public get memorySchema() {
    return this.getStringAttribute('memory_schema');
  }
  public set memorySchema(value: string) {
    this._memorySchema = value;
  }
  public resetMemorySchema() {
    this._memorySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySchemaInput() {
    return this._memorySchema;
  }
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsOutputReference {
    return new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs {
  /**
  * Optional. List of scope keys that this structured memory config applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#scope_keys GoogleVertexAiReasoningEngine#scope_keys}
  */
  readonly scopeKeys?: string[];
  /**
  * schema_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#schema_configs GoogleVertexAiReasoningEngine#schema_configs}
  */
  readonly schemaConfigs?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs[] | cdktf.IResolvable;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopeKeys),
    schema_configs: cdktf.listMapper(googleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsToTerraform, true)(struct!.schemaConfigs),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schema_configs: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsToHclTerraform, true)(struct!.schemaConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeKeys = this._scopeKeys;
    }
    if (this._schemaConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaConfigs = this._schemaConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeKeys = undefined;
      this._schemaConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeKeys = value.scopeKeys;
      this._schemaConfigs.internalValue = value.schemaConfigs;
    }
  }

  // scope_keys - computed: false, optional: true, required: false
  private _scopeKeys?: string[]; 
  public get scopeKeys() {
    return this.getListAttribute('scope_keys');
  }
  public set scopeKeys(value: string[]) {
    this._scopeKeys = value;
  }
  public resetScopeKeys() {
    this._scopeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeKeysInput() {
    return this._scopeKeys;
  }

  // schema_configs - computed: false, optional: true, required: false
  private _schemaConfigs = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigsList(this, "schema_configs", false);
  public get schemaConfigs() {
    return this._schemaConfigs;
  }
  public putSchemaConfigs(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsSchemaConfigs[] | cdktf.IResolvable) {
    this._schemaConfigs.internalValue = value;
  }
  public resetSchemaConfigs() {
    this._schemaConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConfigsInput() {
    return this._schemaConfigs.internalValue;
  }
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsOutputReference {
    return new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig {
  /**
  * The TTL duration for memories uploaded via CreateMemory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#create_ttl GoogleVertexAiReasoningEngine#create_ttl}
  */
  readonly createTtl?: string;
  /**
  * The TTL duration for memories newly generated via GenerateMemories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#generate_created_ttl GoogleVertexAiReasoningEngine#generate_created_ttl}
  */
  readonly generateCreatedTtl?: string;
  /**
  * The TTL duration for memories updated via GenerateMemories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#generate_updated_ttl GoogleVertexAiReasoningEngine#generate_updated_ttl}
  */
  readonly generateUpdatedTtl?: string;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_ttl: cdktf.stringToTerraform(struct!.createTtl),
    generate_created_ttl: cdktf.stringToTerraform(struct!.generateCreatedTtl),
    generate_updated_ttl: cdktf.stringToTerraform(struct!.generateUpdatedTtl),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_ttl: {
      value: cdktf.stringToHclTerraform(struct!.createTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_created_ttl: {
      value: cdktf.stringToHclTerraform(struct!.generateCreatedTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_updated_ttl: {
      value: cdktf.stringToHclTerraform(struct!.generateUpdatedTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTtl = this._createTtl;
    }
    if (this._generateCreatedTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateCreatedTtl = this._generateCreatedTtl;
    }
    if (this._generateUpdatedTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateUpdatedTtl = this._generateUpdatedTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createTtl = undefined;
      this._generateCreatedTtl = undefined;
      this._generateUpdatedTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createTtl = value.createTtl;
      this._generateCreatedTtl = value.generateCreatedTtl;
      this._generateUpdatedTtl = value.generateUpdatedTtl;
    }
  }

  // create_ttl - computed: false, optional: true, required: false
  private _createTtl?: string; 
  public get createTtl() {
    return this.getStringAttribute('create_ttl');
  }
  public set createTtl(value: string) {
    this._createTtl = value;
  }
  public resetCreateTtl() {
    this._createTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTtlInput() {
    return this._createTtl;
  }

  // generate_created_ttl - computed: false, optional: true, required: false
  private _generateCreatedTtl?: string; 
  public get generateCreatedTtl() {
    return this.getStringAttribute('generate_created_ttl');
  }
  public set generateCreatedTtl(value: string) {
    this._generateCreatedTtl = value;
  }
  public resetGenerateCreatedTtl() {
    this._generateCreatedTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateCreatedTtlInput() {
    return this._generateCreatedTtl;
  }

  // generate_updated_ttl - computed: false, optional: true, required: false
  private _generateUpdatedTtl?: string; 
  public get generateUpdatedTtl() {
    return this.getStringAttribute('generate_updated_ttl');
  }
  public set generateUpdatedTtl(value: string) {
    this._generateUpdatedTtl = value;
  }
  public resetGenerateUpdatedTtl() {
    this._generateUpdatedTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateUpdatedTtlInput() {
    return this._generateUpdatedTtl;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig {
  /**
  * The default TTL duration of the memories in the Memory Bank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#default_ttl GoogleVertexAiReasoningEngine#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * The default TTL duration of the memory revisions in the Memory Bank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#memory_revision_default_ttl GoogleVertexAiReasoningEngine#memory_revision_default_ttl}
  */
  readonly memoryRevisionDefaultTtl?: string;
  /**
  * granular_ttl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#granular_ttl_config GoogleVertexAiReasoningEngine#granular_ttl_config}
  */
  readonly granularTtlConfig?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ttl: cdktf.stringToTerraform(struct!.defaultTtl),
    memory_revision_default_ttl: cdktf.stringToTerraform(struct!.memoryRevisionDefaultTtl),
    granular_ttl_config: googleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigToTerraform(struct!.granularTtlConfig),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ttl: {
      value: cdktf.stringToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_revision_default_ttl: {
      value: cdktf.stringToHclTerraform(struct!.memoryRevisionDefaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    granular_ttl_config: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigToHclTerraform(struct!.granularTtlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._memoryRevisionDefaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRevisionDefaultTtl = this._memoryRevisionDefaultTtl;
    }
    if (this._granularTtlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularTtlConfig = this._granularTtlConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTtl = undefined;
      this._memoryRevisionDefaultTtl = undefined;
      this._granularTtlConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTtl = value.defaultTtl;
      this._memoryRevisionDefaultTtl = value.memoryRevisionDefaultTtl;
      this._granularTtlConfig.internalValue = value.granularTtlConfig;
    }
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // memory_revision_default_ttl - computed: false, optional: true, required: false
  private _memoryRevisionDefaultTtl?: string; 
  public get memoryRevisionDefaultTtl() {
    return this.getStringAttribute('memory_revision_default_ttl');
  }
  public set memoryRevisionDefaultTtl(value: string) {
    this._memoryRevisionDefaultTtl = value;
  }
  public resetMemoryRevisionDefaultTtl() {
    this._memoryRevisionDefaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRevisionDefaultTtlInput() {
    return this._memoryRevisionDefaultTtl;
  }

  // granular_ttl_config - computed: false, optional: true, required: false
  private _granularTtlConfig = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference(this, "granular_ttl_config");
  public get granularTtlConfig() {
    return this._granularTtlConfig;
  }
  public putGranularTtlConfig(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig) {
    this._granularTtlConfig.internalValue = value;
  }
  public resetGranularTtlConfig() {
    this._granularTtlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularTtlConfigInput() {
    return this._granularTtlConfig.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig {
  /**
  * If true, no memory revisions will be created for any requests to the Memory Bank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#disable_memory_revisions GoogleVertexAiReasoningEngine#disable_memory_revisions}
  */
  readonly disableMemoryRevisions?: boolean | cdktf.IResolvable;
  /**
  * customization_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#customization_configs GoogleVertexAiReasoningEngine#customization_configs}
  */
  readonly customizationConfigs?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs[] | cdktf.IResolvable;
  /**
  * generation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#generation_config GoogleVertexAiReasoningEngine#generation_config}
  */
  readonly generationConfig?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig;
  /**
  * similarity_search_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#similarity_search_config GoogleVertexAiReasoningEngine#similarity_search_config}
  */
  readonly similaritySearchConfig?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig;
  /**
  * structured_memory_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#structured_memory_configs GoogleVertexAiReasoningEngine#structured_memory_configs}
  */
  readonly structuredMemoryConfigs?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs[] | cdktf.IResolvable;
  /**
  * ttl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#ttl_config GoogleVertexAiReasoningEngine#ttl_config}
  */
  readonly ttlConfig?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig;
}

export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_memory_revisions: cdktf.booleanToTerraform(struct!.disableMemoryRevisions),
    customization_configs: cdktf.listMapper(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsToTerraform, true)(struct!.customizationConfigs),
    generation_config: googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigToTerraform(struct!.generationConfig),
    similarity_search_config: googleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigToTerraform(struct!.similaritySearchConfig),
    structured_memory_configs: cdktf.listMapper(googleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsToTerraform, true)(struct!.structuredMemoryConfigs),
    ttl_config: googleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigToTerraform(struct!.ttlConfig),
  }
}


export function googleVertexAiReasoningEngineContextSpecMemoryBankConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference | GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_memory_revisions: {
      value: cdktf.booleanToHclTerraform(struct!.disableMemoryRevisions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    customization_configs: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsToHclTerraform, true)(struct!.customizationConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsList",
    },
    generation_config: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigToHclTerraform(struct!.generationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigList",
    },
    similarity_search_config: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigToHclTerraform(struct!.similaritySearchConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigList",
    },
    structured_memory_configs: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsToHclTerraform, true)(struct!.structuredMemoryConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsList",
    },
    ttl_config: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigToHclTerraform(struct!.ttlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableMemoryRevisions !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMemoryRevisions = this._disableMemoryRevisions;
    }
    if (this._customizationConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationConfigs = this._customizationConfigs?.internalValue;
    }
    if (this._generationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationConfig = this._generationConfig?.internalValue;
    }
    if (this._similaritySearchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.similaritySearchConfig = this._similaritySearchConfig?.internalValue;
    }
    if (this._structuredMemoryConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.structuredMemoryConfigs = this._structuredMemoryConfigs?.internalValue;
    }
    if (this._ttlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlConfig = this._ttlConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableMemoryRevisions = undefined;
      this._customizationConfigs.internalValue = undefined;
      this._generationConfig.internalValue = undefined;
      this._similaritySearchConfig.internalValue = undefined;
      this._structuredMemoryConfigs.internalValue = undefined;
      this._ttlConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableMemoryRevisions = value.disableMemoryRevisions;
      this._customizationConfigs.internalValue = value.customizationConfigs;
      this._generationConfig.internalValue = value.generationConfig;
      this._similaritySearchConfig.internalValue = value.similaritySearchConfig;
      this._structuredMemoryConfigs.internalValue = value.structuredMemoryConfigs;
      this._ttlConfig.internalValue = value.ttlConfig;
    }
  }

  // disable_memory_revisions - computed: false, optional: true, required: false
  private _disableMemoryRevisions?: boolean | cdktf.IResolvable; 
  public get disableMemoryRevisions() {
    return this.getBooleanAttribute('disable_memory_revisions');
  }
  public set disableMemoryRevisions(value: boolean | cdktf.IResolvable) {
    this._disableMemoryRevisions = value;
  }
  public resetDisableMemoryRevisions() {
    this._disableMemoryRevisions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMemoryRevisionsInput() {
    return this._disableMemoryRevisions;
  }

  // customization_configs - computed: false, optional: true, required: false
  private _customizationConfigs = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigsList(this, "customization_configs", false);
  public get customizationConfigs() {
    return this._customizationConfigs;
  }
  public putCustomizationConfigs(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigCustomizationConfigs[] | cdktf.IResolvable) {
    this._customizationConfigs.internalValue = value;
  }
  public resetCustomizationConfigs() {
    this._customizationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationConfigsInput() {
    return this._customizationConfigs.internalValue;
  }

  // generation_config - computed: false, optional: true, required: false
  private _generationConfig = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference(this, "generation_config");
  public get generationConfig() {
    return this._generationConfig;
  }
  public putGenerationConfig(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig) {
    this._generationConfig.internalValue = value;
  }
  public resetGenerationConfig() {
    this._generationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationConfigInput() {
    return this._generationConfig.internalValue;
  }

  // similarity_search_config - computed: false, optional: true, required: false
  private _similaritySearchConfig = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference(this, "similarity_search_config");
  public get similaritySearchConfig() {
    return this._similaritySearchConfig;
  }
  public putSimilaritySearchConfig(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig) {
    this._similaritySearchConfig.internalValue = value;
  }
  public resetSimilaritySearchConfig() {
    this._similaritySearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get similaritySearchConfigInput() {
    return this._similaritySearchConfig.internalValue;
  }

  // structured_memory_configs - computed: false, optional: true, required: false
  private _structuredMemoryConfigs = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigsList(this, "structured_memory_configs", false);
  public get structuredMemoryConfigs() {
    return this._structuredMemoryConfigs;
  }
  public putStructuredMemoryConfigs(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigStructuredMemoryConfigs[] | cdktf.IResolvable) {
    this._structuredMemoryConfigs.internalValue = value;
  }
  public resetStructuredMemoryConfigs() {
    this._structuredMemoryConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredMemoryConfigsInput() {
    return this._structuredMemoryConfigs.internalValue;
  }

  // ttl_config - computed: false, optional: true, required: false
  private _ttlConfig = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference(this, "ttl_config");
  public get ttlConfig() {
    return this._ttlConfig;
  }
  public putTtlConfig(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig) {
    this._ttlConfig.internalValue = value;
  }
  public resetTtlConfig() {
    this._ttlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlConfigInput() {
    return this._ttlConfig.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineContextSpec {
  /**
  * example_store_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#example_store_config GoogleVertexAiReasoningEngine#example_store_config}
  */
  readonly exampleStoreConfig?: GoogleVertexAiReasoningEngineContextSpecExampleStoreConfig;
  /**
  * memory_bank_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#memory_bank_config GoogleVertexAiReasoningEngine#memory_bank_config}
  */
  readonly memoryBankConfig?: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig;
}

export function googleVertexAiReasoningEngineContextSpecToTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecOutputReference | GoogleVertexAiReasoningEngineContextSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    example_store_config: googleVertexAiReasoningEngineContextSpecExampleStoreConfigToTerraform(struct!.exampleStoreConfig),
    memory_bank_config: googleVertexAiReasoningEngineContextSpecMemoryBankConfigToTerraform(struct!.memoryBankConfig),
  }
}


export function googleVertexAiReasoningEngineContextSpecToHclTerraform(struct?: GoogleVertexAiReasoningEngineContextSpecOutputReference | GoogleVertexAiReasoningEngineContextSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    example_store_config: {
      value: googleVertexAiReasoningEngineContextSpecExampleStoreConfigToHclTerraform(struct!.exampleStoreConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigList",
    },
    memory_bank_config: {
      value: googleVertexAiReasoningEngineContextSpecMemoryBankConfigToHclTerraform(struct!.memoryBankConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineContextSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineContextSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exampleStoreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exampleStoreConfig = this._exampleStoreConfig?.internalValue;
    }
    if (this._memoryBankConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryBankConfig = this._memoryBankConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineContextSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exampleStoreConfig.internalValue = undefined;
      this._memoryBankConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exampleStoreConfig.internalValue = value.exampleStoreConfig;
      this._memoryBankConfig.internalValue = value.memoryBankConfig;
    }
  }

  // example_store_config - computed: false, optional: true, required: false
  private _exampleStoreConfig = new GoogleVertexAiReasoningEngineContextSpecExampleStoreConfigOutputReference(this, "example_store_config");
  public get exampleStoreConfig() {
    return this._exampleStoreConfig;
  }
  public putExampleStoreConfig(value: GoogleVertexAiReasoningEngineContextSpecExampleStoreConfig) {
    this._exampleStoreConfig.internalValue = value;
  }
  public resetExampleStoreConfig() {
    this._exampleStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleStoreConfigInput() {
    return this._exampleStoreConfig.internalValue;
  }

  // memory_bank_config - computed: false, optional: true, required: false
  private _memoryBankConfig = new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference(this, "memory_bank_config");
  public get memoryBankConfig() {
    return this._memoryBankConfig;
  }
  public putMemoryBankConfig(value: GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig) {
    this._memoryBankConfig.internalValue = value;
  }
  public resetMemoryBankConfig() {
    this._memoryBankConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBankConfigInput() {
    return this._memoryBankConfig.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineEncryptionSpec {
  /**
  * Required. The Cloud KMS resource identifier of the customer managed
  * encryption key used to protect a resource. Has the form:
  * projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
  * The key needs to be in the same region as where the compute resource
  * is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#kms_key_name GoogleVertexAiReasoningEngine#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleVertexAiReasoningEngineEncryptionSpecToTerraform(struct?: GoogleVertexAiReasoningEngineEncryptionSpecOutputReference | GoogleVertexAiReasoningEngineEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleVertexAiReasoningEngineEncryptionSpecToHclTerraform(struct?: GoogleVertexAiReasoningEngineEncryptionSpecOutputReference | GoogleVertexAiReasoningEngineEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineEncryptionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleVertexAiReasoningEngineSpecBuildSpec {
  /**
  * Optional. The resource name of the Cloud Build WorkerPool to use for the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#worker_pool GoogleVertexAiReasoningEngine#worker_pool}
  */
  readonly workerPool?: string;
}

export function googleVertexAiReasoningEngineSpecBuildSpecToTerraform(struct?: GoogleVertexAiReasoningEngineSpecBuildSpecOutputReference | GoogleVertexAiReasoningEngineSpecBuildSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    worker_pool: cdktf.stringToTerraform(struct!.workerPool),
  }
}


export function googleVertexAiReasoningEngineSpecBuildSpecToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecBuildSpecOutputReference | GoogleVertexAiReasoningEngineSpecBuildSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    worker_pool: {
      value: cdktf.stringToHclTerraform(struct!.workerPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecBuildSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecBuildSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecBuildSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workerPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workerPool = value.workerPool;
    }
  }

  // worker_pool - computed: false, optional: true, required: false
  private _workerPool?: string; 
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
  public set workerPool(value: string) {
    this._workerPool = value;
  }
  public resetWorkerPool() {
    this._workerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolInput() {
    return this._workerPool;
  }
}
export interface GoogleVertexAiReasoningEngineSpecContainerSpec {
  /**
  * The Artifact Registry Docker image URI (e.g.,
  * 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the
  * container image that is to be run on each worker replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#image_uri GoogleVertexAiReasoningEngine#image_uri}
  */
  readonly imageUri: string;
  /**
  * Optional. The port that the container listens on for incoming requests. If not specified, defaults to 8080.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#port GoogleVertexAiReasoningEngine#port}
  */
  readonly port?: number;
}

export function googleVertexAiReasoningEngineSpecContainerSpecToTerraform(struct?: GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference | GoogleVertexAiReasoningEngineSpecContainerSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function googleVertexAiReasoningEngineSpecContainerSpecToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference | GoogleVertexAiReasoningEngineSpecContainerSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecContainerSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecContainerSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUri = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUri = value.imageUri;
      this._port = value.port;
    }
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig {
  /**
  * Required. The resource name of the Agent Gateway for outbound traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#agent_gateway GoogleVertexAiReasoningEngine#agent_gateway}
  */
  readonly agentGateway: string;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_gateway: cdktf.stringToTerraform(struct!.agentGateway),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_gateway: {
      value: cdktf.stringToHclTerraform(struct!.agentGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGateway = this._agentGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentGateway = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentGateway = value.agentGateway;
    }
  }

  // agent_gateway - computed: false, optional: false, required: true
  private _agentGateway?: string; 
  public get agentGateway() {
    return this.getStringAttribute('agent_gateway');
  }
  public set agentGateway(value: string) {
    this._agentGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGatewayInput() {
    return this._agentGateway;
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig {
  /**
  * Required. The resource name of the Agent Gateway to use for inbound traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#agent_gateway GoogleVertexAiReasoningEngine#agent_gateway}
  */
  readonly agentGateway: string;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_gateway: cdktf.stringToTerraform(struct!.agentGateway),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_gateway: {
      value: cdktf.stringToHclTerraform(struct!.agentGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGateway = this._agentGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentGateway = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentGateway = value.agentGateway;
    }
  }

  // agent_gateway - computed: false, optional: false, required: true
  private _agentGateway?: string; 
  public get agentGateway() {
    return this.getStringAttribute('agent_gateway');
  }
  public set agentGateway(value: string) {
    this._agentGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGatewayInput() {
    return this._agentGateway;
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig {
  /**
  * agent_to_anywhere_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#agent_to_anywhere_config GoogleVertexAiReasoningEngine#agent_to_anywhere_config}
  */
  readonly agentToAnywhereConfig?: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig;
  /**
  * client_to_agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#client_to_agent_config GoogleVertexAiReasoningEngine#client_to_agent_config}
  */
  readonly clientToAgentConfig?: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_to_anywhere_config: googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigToTerraform(struct!.agentToAnywhereConfig),
    client_to_agent_config: googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigToTerraform(struct!.clientToAgentConfig),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_to_anywhere_config: {
      value: googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigToHclTerraform(struct!.agentToAnywhereConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigList",
    },
    client_to_agent_config: {
      value: googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigToHclTerraform(struct!.clientToAgentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentToAnywhereConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentToAnywhereConfig = this._agentToAnywhereConfig?.internalValue;
    }
    if (this._clientToAgentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientToAgentConfig = this._clientToAgentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentToAnywhereConfig.internalValue = undefined;
      this._clientToAgentConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentToAnywhereConfig.internalValue = value.agentToAnywhereConfig;
      this._clientToAgentConfig.internalValue = value.clientToAgentConfig;
    }
  }

  // agent_to_anywhere_config - computed: false, optional: true, required: false
  private _agentToAnywhereConfig = new GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfigOutputReference(this, "agent_to_anywhere_config");
  public get agentToAnywhereConfig() {
    return this._agentToAnywhereConfig;
  }
  public putAgentToAnywhereConfig(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigAgentToAnywhereConfig) {
    this._agentToAnywhereConfig.internalValue = value;
  }
  public resetAgentToAnywhereConfig() {
    this._agentToAnywhereConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentToAnywhereConfigInput() {
    return this._agentToAnywhereConfig.internalValue;
  }

  // client_to_agent_config - computed: false, optional: true, required: false
  private _clientToAgentConfig = new GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfigOutputReference(this, "client_to_agent_config");
  public get clientToAgentConfig() {
    return this._clientToAgentConfig;
  }
  public putClientToAgentConfig(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigClientToAgentConfig) {
    this._clientToAgentConfig.internalValue = value;
  }
  public resetClientToAgentConfig() {
    this._clientToAgentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToAgentConfigInput() {
    return this._clientToAgentConfig.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv {
  /**
  * The name of the environment variable. Must be a valid
  * C identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#name GoogleVertexAiReasoningEngine#name}
  */
  readonly name: string;
  /**
  * Variables that reference a $(VAR_NAME) are expanded using
  * the previous defined environment variables in the container
  * and any service environment variables. If a variable cannot
  * be resolved, the reference in the input string will be
  * unchanged. The $(VAR_NAME) syntax can be escaped with a
  * double $$, ie: $$(VAR_NAME). Escaped references will never
  * be expanded, regardless of whether the variable exists
  * or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#value GoogleVertexAiReasoningEngine#value}
  */
  readonly value: string;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecEnvToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecEnvToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference {
    return new GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGet {
  /**
  * Required. Specifies the path of the HTTP GET request (e.g., '"/is_busy"').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#path GoogleVertexAiReasoningEngine#path}
  */
  readonly path: string;
  /**
  * Optional. Specifies the port number on the container to which the request is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#port GoogleVertexAiReasoningEngine#port}
  */
  readonly port?: number;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGetToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGetOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGetToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGetOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._port = value.port;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbe {
  /**
  * Optional. Specifies the maximum duration (in seconds) to keep the instance alive via this probe. Can be a maximum of 3600 seconds (1 hour).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#max_seconds GoogleVertexAiReasoningEngine#max_seconds}
  */
  readonly maxSeconds?: number;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#http_get GoogleVertexAiReasoningEngine#http_get}
  */
  readonly httpGet?: GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGet;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_seconds: cdktf.numberToTerraform(struct!.maxSeconds),
    http_get: googleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGetToTerraform(struct!.httpGet),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get: {
      value: googleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSeconds = this._maxSeconds;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSeconds = undefined;
      this._httpGet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSeconds = value.maxSeconds;
      this._httpGet.internalValue = value.httpGet;
    }
  }

  // max_seconds - computed: false, optional: true, required: false
  private _maxSeconds?: number; 
  public get maxSeconds() {
    return this.getNumberAttribute('max_seconds');
  }
  public set maxSeconds(value: number) {
    this._maxSeconds = value;
  }
  public resetMaxSeconds() {
    this._maxSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSecondsInput() {
    return this._maxSeconds;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs {
  /**
  * Required. The DNS name suffix of the zone being peered
  * to, e.g., "my-internal-domain.corp.".
  * Must end with a dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#domain GoogleVertexAiReasoningEngine#domain}
  */
  readonly domain: string;
  /**
  * Required. The VPC network name in the targetProject
  * where the DNS zone specified by 'domain' is visible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#target_network GoogleVertexAiReasoningEngine#target_network}
  */
  readonly targetNetwork: string;
  /**
  * Required. The project id hosting the Cloud DNS managed
  * zone that contains the 'domain'.
  * The Vertex AI service Agent requires the dns.peer role
  * on this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#target_project GoogleVertexAiReasoningEngine#target_project}
  */
  readonly targetProject: string;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    target_network: cdktf.stringToTerraform(struct!.targetNetwork),
    target_project: cdktf.stringToTerraform(struct!.targetProject),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_network: {
      value: cdktf.stringToHclTerraform(struct!.targetNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_project: {
      value: cdktf.stringToHclTerraform(struct!.targetProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._targetNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetwork = this._targetNetwork;
    }
    if (this._targetProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProject = this._targetProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._targetNetwork = undefined;
      this._targetProject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._targetNetwork = value.targetNetwork;
      this._targetProject = value.targetProject;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // target_network - computed: false, optional: false, required: true
  private _targetNetwork?: string; 
  public get targetNetwork() {
    return this.getStringAttribute('target_network');
  }
  public set targetNetwork(value: string) {
    this._targetNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkInput() {
    return this._targetNetwork;
  }

  // target_project - computed: false, optional: false, required: true
  private _targetProject?: string; 
  public get targetProject() {
    return this.getStringAttribute('target_project');
  }
  public set targetProject(value: string) {
    this._targetProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectInput() {
    return this._targetProject;
  }
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference {
    return new GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig {
  /**
  * Optional. The name of the Compute Engine network attachment
  * to attach to the resource within the region and user project.
  * To specify this field, you must have already created a network attachment.
  * This field is only used for resources using PSC-Interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#network_attachment GoogleVertexAiReasoningEngine#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * dns_peering_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#dns_peering_configs GoogleVertexAiReasoningEngine#dns_peering_configs}
  */
  readonly dnsPeeringConfigs?: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktf.IResolvable;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_attachment: cdktf.stringToTerraform(struct!.networkAttachment),
    dns_peering_configs: cdktf.listMapper(googleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToTerraform, true)(struct!.dnsPeeringConfigs),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_attachment: {
      value: cdktf.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_peering_configs: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToHclTerraform, true)(struct!.dnsPeeringConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._dnsPeeringConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPeeringConfigs = this._dnsPeeringConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
      this._dnsPeeringConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
      this._dnsPeeringConfigs.internalValue = value.dnsPeeringConfigs;
    }
  }

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // dns_peering_configs - computed: false, optional: true, required: false
  private _dnsPeeringConfigs = new GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList(this, "dns_peering_configs", false);
  public get dnsPeeringConfigs() {
    return this._dnsPeeringConfigs;
  }
  public putDnsPeeringConfigs(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktf.IResolvable) {
    this._dnsPeeringConfigs.internalValue = value;
  }
  public resetDnsPeeringConfigs() {
    this._dnsPeeringConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPeeringConfigsInput() {
    return this._dnsPeeringConfigs.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef {
  /**
  * The name of the secret in Cloud Secret Manager.
  * Format: {secret_name}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#secret GoogleVertexAiReasoningEngine#secret}
  */
  readonly secret: string;
  /**
  * The Cloud Secret Manager secret version. Can be 'latest'
  * for the latest version, an integer for a specific
  * version, or a version alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#version GoogleVertexAiReasoningEngine#version}
  */
  readonly version?: string;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._version = value.version;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv {
  /**
  * The name of the environment variable. Must be a valid C
  * identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#name GoogleVertexAiReasoningEngine#name}
  */
  readonly name: string;
  /**
  * secret_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#secret_ref GoogleVertexAiReasoningEngine#secret_ref}
  */
  readonly secretRef: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret_ref: googleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToTerraform(struct!.secretRef),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: googleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference {
    return new GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineSpecDeploymentSpec {
  /**
  * Optional. The agent server mode specifies what features are used when deploy the agent to agent engine.
  * Possible values:
  * * 'STABLE': Stable agent server mode.
  * * 'EXPERIMENTAL': Experimental agent server mode. Possible values: ["STABLE", "EXPERIMENTAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#agent_server_mode GoogleVertexAiReasoningEngine#agent_server_mode}
  */
  readonly agentServerMode?: string;
  /**
  * Optional. Concurrency for each container and agent server.
  * Recommended value: 2 * cpu + 1. Defaults to 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#container_concurrency GoogleVertexAiReasoningEngine#container_concurrency}
  */
  readonly containerConcurrency?: number;
  /**
  * Optional. Whether to enable dedicated ingress endpoint for the deployment. If true, the deployment will be accessible via a dedicated endpoint. This is required to enable GKE V2 runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#dedicated_ingress_endpoint_enabled GoogleVertexAiReasoningEngine#dedicated_ingress_endpoint_enabled}
  */
  readonly dedicatedIngressEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. The maximum number of application instances that can be
  * launched to handle increased traffic. Defaults to 100.
  * Range: [1, 1000]. If VPC-SC or PSC-I is enabled, the acceptable
  * range is [1, 100].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#max_instances GoogleVertexAiReasoningEngine#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Optional. The minimum number of application instances that will be
  * kept running at all times. Defaults to 1. Range: [0, 10].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#min_instances GoogleVertexAiReasoningEngine#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Optional. Resource limits for each container.
  * Only 'cpu' and 'memory' keys are supported.
  * 
  * Defaults to {"cpu": "4", "memory": "4Gi"}.
  * 
  * The only supported values for CPU are '1', '2', '4', '6' and '8'.
  * For more information, go to
  * https://cloud.google.com/run/docs/configuring/cpu.
  * 
  * The only supported values for memory are '1Gi', '2Gi', ... '32 Gi'.
  * For more information, go to
  * https://cloud.google.com/run/docs/configuring/memory-limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#resource_limits GoogleVertexAiReasoningEngine#resource_limits}
  */
  readonly resourceLimits?: { [key: string]: string };
  /**
  * agent_gateway_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#agent_gateway_config GoogleVertexAiReasoningEngine#agent_gateway_config}
  */
  readonly agentGatewayConfig?: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#env GoogleVertexAiReasoningEngine#env}
  */
  readonly env?: GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv[] | cdktf.IResolvable;
  /**
  * keep_alive_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#keep_alive_probe GoogleVertexAiReasoningEngine#keep_alive_probe}
  */
  readonly keepAliveProbe?: GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbe;
  /**
  * psc_interface_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#psc_interface_config GoogleVertexAiReasoningEngine#psc_interface_config}
  */
  readonly pscInterfaceConfig?: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig;
  /**
  * secret_env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#secret_env GoogleVertexAiReasoningEngine#secret_env}
  */
  readonly secretEnv?: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv[] | cdktf.IResolvable;
}

export function googleVertexAiReasoningEngineSpecDeploymentSpecToTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_server_mode: cdktf.stringToTerraform(struct!.agentServerMode),
    container_concurrency: cdktf.numberToTerraform(struct!.containerConcurrency),
    dedicated_ingress_endpoint_enabled: cdktf.booleanToTerraform(struct!.dedicatedIngressEndpointEnabled),
    max_instances: cdktf.numberToTerraform(struct!.maxInstances),
    min_instances: cdktf.numberToTerraform(struct!.minInstances),
    resource_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLimits),
    agent_gateway_config: googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigToTerraform(struct!.agentGatewayConfig),
    env: cdktf.listMapper(googleVertexAiReasoningEngineSpecDeploymentSpecEnvToTerraform, true)(struct!.env),
    keep_alive_probe: googleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeToTerraform(struct!.keepAliveProbe),
    psc_interface_config: googleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToTerraform(struct!.pscInterfaceConfig),
    secret_env: cdktf.listMapper(googleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvToTerraform, true)(struct!.secretEnv),
  }
}


export function googleVertexAiReasoningEngineSpecDeploymentSpecToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference | GoogleVertexAiReasoningEngineSpecDeploymentSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_server_mode: {
      value: cdktf.stringToHclTerraform(struct!.agentServerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.containerConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dedicated_ingress_endpoint_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dedicatedIngressEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_instances: {
      value: cdktf.numberToHclTerraform(struct!.maxInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instances: {
      value: cdktf.numberToHclTerraform(struct!.minInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    agent_gateway_config: {
      value: googleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigToHclTerraform(struct!.agentGatewayConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigList",
    },
    env: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineSpecDeploymentSpecEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList",
    },
    keep_alive_probe: {
      value: googleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeToHclTerraform(struct!.keepAliveProbe),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeList",
    },
    psc_interface_config: {
      value: googleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToHclTerraform(struct!.pscInterfaceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigList",
    },
    secret_env: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvToHclTerraform, true)(struct!.secretEnv),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecDeploymentSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentServerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentServerMode = this._agentServerMode;
    }
    if (this._containerConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConcurrency = this._containerConcurrency;
    }
    if (this._dedicatedIngressEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedIngressEndpointEnabled = this._dedicatedIngressEndpointEnabled;
    }
    if (this._maxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstances = this._maxInstances;
    }
    if (this._minInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstances = this._minInstances;
    }
    if (this._resourceLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits;
    }
    if (this._agentGatewayConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentGatewayConfig = this._agentGatewayConfig?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._keepAliveProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveProbe = this._keepAliveProbe?.internalValue;
    }
    if (this._pscInterfaceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscInterfaceConfig = this._pscInterfaceConfig?.internalValue;
    }
    if (this._secretEnv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnv = this._secretEnv?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecDeploymentSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentServerMode = undefined;
      this._containerConcurrency = undefined;
      this._dedicatedIngressEndpointEnabled = undefined;
      this._maxInstances = undefined;
      this._minInstances = undefined;
      this._resourceLimits = undefined;
      this._agentGatewayConfig.internalValue = undefined;
      this._env.internalValue = undefined;
      this._keepAliveProbe.internalValue = undefined;
      this._pscInterfaceConfig.internalValue = undefined;
      this._secretEnv.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentServerMode = value.agentServerMode;
      this._containerConcurrency = value.containerConcurrency;
      this._dedicatedIngressEndpointEnabled = value.dedicatedIngressEndpointEnabled;
      this._maxInstances = value.maxInstances;
      this._minInstances = value.minInstances;
      this._resourceLimits = value.resourceLimits;
      this._agentGatewayConfig.internalValue = value.agentGatewayConfig;
      this._env.internalValue = value.env;
      this._keepAliveProbe.internalValue = value.keepAliveProbe;
      this._pscInterfaceConfig.internalValue = value.pscInterfaceConfig;
      this._secretEnv.internalValue = value.secretEnv;
    }
  }

  // agent_server_mode - computed: false, optional: true, required: false
  private _agentServerMode?: string; 
  public get agentServerMode() {
    return this.getStringAttribute('agent_server_mode');
  }
  public set agentServerMode(value: string) {
    this._agentServerMode = value;
  }
  public resetAgentServerMode() {
    this._agentServerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentServerModeInput() {
    return this._agentServerMode;
  }

  // container_concurrency - computed: true, optional: true, required: false
  private _containerConcurrency?: number; 
  public get containerConcurrency() {
    return this.getNumberAttribute('container_concurrency');
  }
  public set containerConcurrency(value: number) {
    this._containerConcurrency = value;
  }
  public resetContainerConcurrency() {
    this._containerConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConcurrencyInput() {
    return this._containerConcurrency;
  }

  // dedicated_ingress_endpoint_enabled - computed: false, optional: true, required: false
  private _dedicatedIngressEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get dedicatedIngressEndpointEnabled() {
    return this.getBooleanAttribute('dedicated_ingress_endpoint_enabled');
  }
  public set dedicatedIngressEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._dedicatedIngressEndpointEnabled = value;
  }
  public resetDedicatedIngressEndpointEnabled() {
    this._dedicatedIngressEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedIngressEndpointEnabledInput() {
    return this._dedicatedIngressEndpointEnabled;
  }

  // max_instances - computed: true, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: true, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }

  // resource_limits - computed: true, optional: true, required: false
  private _resourceLimits?: { [key: string]: string }; 
  public get resourceLimits() {
    return this.getStringMapAttribute('resource_limits');
  }
  public set resourceLimits(value: { [key: string]: string }) {
    this._resourceLimits = value;
  }
  public resetResourceLimits() {
    this._resourceLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits;
  }

  // agent_gateway_config - computed: false, optional: true, required: false
  private _agentGatewayConfig = new GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfigOutputReference(this, "agent_gateway_config");
  public get agentGatewayConfig() {
    return this._agentGatewayConfig;
  }
  public putAgentGatewayConfig(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecAgentGatewayConfig) {
    this._agentGatewayConfig.internalValue = value;
  }
  public resetAgentGatewayConfig() {
    this._agentGatewayConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGatewayConfigInput() {
    return this._agentGatewayConfig.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // keep_alive_probe - computed: false, optional: true, required: false
  private _keepAliveProbe = new GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbeOutputReference(this, "keep_alive_probe");
  public get keepAliveProbe() {
    return this._keepAliveProbe;
  }
  public putKeepAliveProbe(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecKeepAliveProbe) {
    this._keepAliveProbe.internalValue = value;
  }
  public resetKeepAliveProbe() {
    this._keepAliveProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveProbeInput() {
    return this._keepAliveProbe.internalValue;
  }

  // psc_interface_config - computed: false, optional: true, required: false
  private _pscInterfaceConfig = new GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference(this, "psc_interface_config");
  public get pscInterfaceConfig() {
    return this._pscInterfaceConfig;
  }
  public putPscInterfaceConfig(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig) {
    this._pscInterfaceConfig.internalValue = value;
  }
  public resetPscInterfaceConfig() {
    this._pscInterfaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInterfaceConfigInput() {
    return this._pscInterfaceConfig.internalValue;
  }

  // secret_env - computed: false, optional: true, required: false
  private _secretEnv = new GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList(this, "secret_env", true);
  public get secretEnv() {
    return this._secretEnv;
  }
  public putSecretEnv(value: GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv[] | cdktf.IResolvable) {
    this._secretEnv.internalValue = value;
  }
  public resetSecretEnv() {
    this._secretEnv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvInput() {
    return this._secretEnv.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineSpecPackageSpec {
  /**
  * Optional. The Cloud Storage URI of the dependency files in tar.gz
  * format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#dependency_files_gcs_uri GoogleVertexAiReasoningEngine#dependency_files_gcs_uri}
  */
  readonly dependencyFilesGcsUri?: string;
  /**
  * Optional. The Cloud Storage URI of the pickled python object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#pickle_object_gcs_uri GoogleVertexAiReasoningEngine#pickle_object_gcs_uri}
  */
  readonly pickleObjectGcsUri?: string;
  /**
  * Optional. The Python version. Currently support 3.8, 3.9, 3.10,
  * 3.11, 3.12, 3.13. If not specified, default value is 3.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#python_version GoogleVertexAiReasoningEngine#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * Optional. The Cloud Storage URI of the requirements.txtfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#requirements_gcs_uri GoogleVertexAiReasoningEngine#requirements_gcs_uri}
  */
  readonly requirementsGcsUri?: string;
}

export function googleVertexAiReasoningEngineSpecPackageSpecToTerraform(struct?: GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference | GoogleVertexAiReasoningEngineSpecPackageSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency_files_gcs_uri: cdktf.stringToTerraform(struct!.dependencyFilesGcsUri),
    pickle_object_gcs_uri: cdktf.stringToTerraform(struct!.pickleObjectGcsUri),
    python_version: cdktf.stringToTerraform(struct!.pythonVersion),
    requirements_gcs_uri: cdktf.stringToTerraform(struct!.requirementsGcsUri),
  }
}


export function googleVertexAiReasoningEngineSpecPackageSpecToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference | GoogleVertexAiReasoningEngineSpecPackageSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency_files_gcs_uri: {
      value: cdktf.stringToHclTerraform(struct!.dependencyFilesGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pickle_object_gcs_uri: {
      value: cdktf.stringToHclTerraform(struct!.pickleObjectGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    python_version: {
      value: cdktf.stringToHclTerraform(struct!.pythonVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements_gcs_uri: {
      value: cdktf.stringToHclTerraform(struct!.requirementsGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecPackageSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyFilesGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyFilesGcsUri = this._dependencyFilesGcsUri;
    }
    if (this._pickleObjectGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.pickleObjectGcsUri = this._pickleObjectGcsUri;
    }
    if (this._pythonVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonVersion = this._pythonVersion;
    }
    if (this._requirementsGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirementsGcsUri = this._requirementsGcsUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecPackageSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependencyFilesGcsUri = undefined;
      this._pickleObjectGcsUri = undefined;
      this._pythonVersion = undefined;
      this._requirementsGcsUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependencyFilesGcsUri = value.dependencyFilesGcsUri;
      this._pickleObjectGcsUri = value.pickleObjectGcsUri;
      this._pythonVersion = value.pythonVersion;
      this._requirementsGcsUri = value.requirementsGcsUri;
    }
  }

  // dependency_files_gcs_uri - computed: false, optional: true, required: false
  private _dependencyFilesGcsUri?: string; 
  public get dependencyFilesGcsUri() {
    return this.getStringAttribute('dependency_files_gcs_uri');
  }
  public set dependencyFilesGcsUri(value: string) {
    this._dependencyFilesGcsUri = value;
  }
  public resetDependencyFilesGcsUri() {
    this._dependencyFilesGcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyFilesGcsUriInput() {
    return this._dependencyFilesGcsUri;
  }

  // pickle_object_gcs_uri - computed: false, optional: true, required: false
  private _pickleObjectGcsUri?: string; 
  public get pickleObjectGcsUri() {
    return this.getStringAttribute('pickle_object_gcs_uri');
  }
  public set pickleObjectGcsUri(value: string) {
    this._pickleObjectGcsUri = value;
  }
  public resetPickleObjectGcsUri() {
    this._pickleObjectGcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pickleObjectGcsUriInput() {
    return this._pickleObjectGcsUri;
  }

  // python_version - computed: false, optional: true, required: false
  private _pythonVersion?: string; 
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }
  public set pythonVersion(value: string) {
    this._pythonVersion = value;
  }
  public resetPythonVersion() {
    this._pythonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonVersionInput() {
    return this._pythonVersion;
  }

  // requirements_gcs_uri - computed: false, optional: true, required: false
  private _requirementsGcsUri?: string; 
  public get requirementsGcsUri() {
    return this.getStringAttribute('requirements_gcs_uri');
  }
  public set requirementsGcsUri(value: string) {
    this._requirementsGcsUri = value;
  }
  public resetRequirementsGcsUri() {
    this._requirementsGcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsGcsUriInput() {
    return this._requirementsGcsUri;
  }
}
export interface GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig {
  /**
  * Required. The value of the ADK config in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#json_config GoogleVertexAiReasoningEngine#json_config}
  */
  readonly jsonConfig: string;
}

export function googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigToTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_config: cdktf.stringToTerraform(struct!.jsonConfig),
  }
}


export function googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_config: {
      value: cdktf.stringToHclTerraform(struct!.jsonConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonConfig = this._jsonConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonConfig = value.jsonConfig;
    }
  }

  // json_config - computed: false, optional: false, required: true
  private _jsonConfig?: string; 
  public get jsonConfig() {
    return this.getStringAttribute('json_config');
  }
  public set jsonConfig(value: string) {
    this._jsonConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonConfigInput() {
    return this._jsonConfig;
  }
}
export interface GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource {
  /**
  * Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#source_archive GoogleVertexAiReasoningEngine#source_archive}
  */
  readonly sourceArchive: string;
}

export function googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceToTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_archive: cdktf.stringToTerraform(struct!.sourceArchive),
  }
}


export function googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_archive: {
      value: cdktf.stringToHclTerraform(struct!.sourceArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArchive = this._sourceArchive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceArchive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceArchive = value.sourceArchive;
    }
  }

  // source_archive - computed: false, optional: false, required: true
  private _sourceArchive?: string; 
  public get sourceArchive() {
    return this.getStringAttribute('source_archive');
  }
  public set sourceArchive(value: string) {
    this._sourceArchive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveInput() {
    return this._sourceArchive;
  }
}
export interface GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource {
  /**
  * adk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#adk_config GoogleVertexAiReasoningEngine#adk_config}
  */
  readonly adkConfig?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig;
  /**
  * inline_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#inline_source GoogleVertexAiReasoningEngine#inline_source}
  */
  readonly inlineSource?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource;
}

export function googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceToTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adk_config: googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigToTerraform(struct!.adkConfig),
    inline_source: googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceToTerraform(struct!.inlineSource),
  }
}


export function googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adk_config: {
      value: googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigToHclTerraform(struct!.adkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigList",
    },
    inline_source: {
      value: googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceToHclTerraform(struct!.inlineSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adkConfig = this._adkConfig?.internalValue;
    }
    if (this._inlineSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineSource = this._inlineSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adkConfig.internalValue = undefined;
      this._inlineSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adkConfig.internalValue = value.adkConfig;
      this._inlineSource.internalValue = value.inlineSource;
    }
  }

  // adk_config - computed: false, optional: true, required: false
  private _adkConfig = new GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigOutputReference(this, "adk_config");
  public get adkConfig() {
    return this._adkConfig;
  }
  public putAdkConfig(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig) {
    this._adkConfig.internalValue = value;
  }
  public resetAdkConfig() {
    this._adkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adkConfigInput() {
    return this._adkConfig.internalValue;
  }

  // inline_source - computed: false, optional: true, required: false
  private _inlineSource = new GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSourceOutputReference(this, "inline_source");
  public get inlineSource() {
    return this._inlineSource;
  }
  public putInlineSource(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceInlineSource) {
    this._inlineSource.internalValue = value;
  }
  public resetInlineSource() {
    this._inlineSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineSourceInput() {
    return this._inlineSource.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig {
  /**
  * Directory, relative to the source root, in which to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#dir GoogleVertexAiReasoningEngine#dir}
  */
  readonly dir: string;
  /**
  * The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#git_repository_link GoogleVertexAiReasoningEngine#git_repository_link}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly gitRepositoryLink: string;
  /**
  * The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#revision GoogleVertexAiReasoningEngine#revision}
  */
  readonly revision: string;
}

export function googleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    git_repository_link: cdktf.stringToTerraform(struct!.gitRepositoryLink),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}


export function googleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_repository_link: {
      value: cdktf.stringToHclTerraform(struct!.gitRepositoryLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._gitRepositoryLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepositoryLink = this._gitRepositoryLink;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dir = undefined;
      this._gitRepositoryLink = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dir = value.dir;
      this._gitRepositoryLink = value.gitRepositoryLink;
      this._revision = value.revision;
    }
  }

  // dir - computed: false, optional: false, required: true
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // git_repository_link - computed: false, optional: false, required: true
  private _gitRepositoryLink?: string; 
  public get gitRepositoryLink() {
    return this.getStringAttribute('git_repository_link');
  }
  public set gitRepositoryLink(value: string) {
    this._gitRepositoryLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryLinkInput() {
    return this._gitRepositoryLink;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#config GoogleVertexAiReasoningEngine#config}
  */
  readonly config: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig;
}

export function googleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: googleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToTerraform(struct!.config),
  }
}


export function googleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: googleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec {
  /**
  * Build arguments to be used. They will be passed through --build-arg flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#build_args GoogleVertexAiReasoningEngine#build_args}
  */
  readonly buildArgs?: { [key: string]: string };
}

export function googleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecToTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.buildArgs),
  }
}


export function googleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.buildArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildArgs = this._buildArgs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildArgs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildArgs = value.buildArgs;
    }
  }

  // build_args - computed: false, optional: true, required: false
  private _buildArgs?: { [key: string]: string }; 
  public get buildArgs() {
    return this.getStringMapAttribute('build_args');
  }
  public set buildArgs(value: { [key: string]: string }) {
    this._buildArgs = value;
  }
  public resetBuildArgs() {
    this._buildArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildArgsInput() {
    return this._buildArgs;
  }
}
export interface GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource {
  /**
  * Required. Input only.
  * The application source code archive, provided as a compressed
  * tarball (.tar.gz) file. A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#source_archive GoogleVertexAiReasoningEngine#source_archive}
  */
  readonly sourceArchive?: string;
}

export function googleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_archive: cdktf.stringToTerraform(struct!.sourceArchive),
  }
}


export function googleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_archive: {
      value: cdktf.stringToHclTerraform(struct!.sourceArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArchive = this._sourceArchive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceArchive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceArchive = value.sourceArchive;
    }
  }

  // source_archive - computed: false, optional: true, required: false
  private _sourceArchive?: string; 
  public get sourceArchive() {
    return this.getStringAttribute('source_archive');
  }
  public set sourceArchive(value: string) {
    this._sourceArchive = value;
  }
  public resetSourceArchive() {
    this._sourceArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveInput() {
    return this._sourceArchive;
  }
}
export interface GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec {
  /**
  * Optional. The Python module to load as the entrypoint,
  * specified as a fully qualified module name. For example:
  * path.to.agent. If not specified, defaults to "agent".
  * The project root will be added to Python sys.path, allowing
  * imports to be specified relative to the root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#entrypoint_module GoogleVertexAiReasoningEngine#entrypoint_module}
  */
  readonly entrypointModule?: string;
  /**
  * Optional. The name of the callable object within the
  * entrypointModule to use as the application If not specified,
  * defaults to "root_agent".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#entrypoint_object GoogleVertexAiReasoningEngine#entrypoint_object}
  */
  readonly entrypointObject?: string;
  /**
  * Optional. The path to the requirements file, relative to the
  * source root. If not specified, defaults to "requirements.txt".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#requirements_file GoogleVertexAiReasoningEngine#requirements_file}
  */
  readonly requirementsFile?: string;
  /**
  * Optional. The version of Python to use. Support version
  * includes 3.9, 3.10, 3.11, 3.12, 3.13. If not specified,
  * default value is 3.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#version GoogleVertexAiReasoningEngine#version}
  */
  readonly version?: string;
}

export function googleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entrypoint_module: cdktf.stringToTerraform(struct!.entrypointModule),
    entrypoint_object: cdktf.stringToTerraform(struct!.entrypointObject),
    requirements_file: cdktf.stringToTerraform(struct!.requirementsFile),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entrypoint_module: {
      value: cdktf.stringToHclTerraform(struct!.entrypointModule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entrypoint_object: {
      value: cdktf.stringToHclTerraform(struct!.entrypointObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements_file: {
      value: cdktf.stringToHclTerraform(struct!.requirementsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entrypointModule !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypointModule = this._entrypointModule;
    }
    if (this._entrypointObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypointObject = this._entrypointObject;
    }
    if (this._requirementsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirementsFile = this._requirementsFile;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entrypointModule = undefined;
      this._entrypointObject = undefined;
      this._requirementsFile = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entrypointModule = value.entrypointModule;
      this._entrypointObject = value.entrypointObject;
      this._requirementsFile = value.requirementsFile;
      this._version = value.version;
    }
  }

  // entrypoint_module - computed: false, optional: true, required: false
  private _entrypointModule?: string; 
  public get entrypointModule() {
    return this.getStringAttribute('entrypoint_module');
  }
  public set entrypointModule(value: string) {
    this._entrypointModule = value;
  }
  public resetEntrypointModule() {
    this._entrypointModule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointModuleInput() {
    return this._entrypointModule;
  }

  // entrypoint_object - computed: false, optional: true, required: false
  private _entrypointObject?: string; 
  public get entrypointObject() {
    return this.getStringAttribute('entrypoint_object');
  }
  public set entrypointObject(value: string) {
    this._entrypointObject = value;
  }
  public resetEntrypointObject() {
    this._entrypointObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointObjectInput() {
    return this._entrypointObject;
  }

  // requirements_file - computed: false, optional: true, required: false
  private _requirementsFile?: string; 
  public get requirementsFile() {
    return this.getStringAttribute('requirements_file');
  }
  public set requirementsFile(value: string) {
    this._requirementsFile = value;
  }
  public resetRequirementsFile() {
    this._requirementsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsFileInput() {
    return this._requirementsFile;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GoogleVertexAiReasoningEngineSpecSourceCodeSpec {
  /**
  * agent_config_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#agent_config_source GoogleVertexAiReasoningEngine#agent_config_source}
  */
  readonly agentConfigSource?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource;
  /**
  * developer_connect_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#developer_connect_source GoogleVertexAiReasoningEngine#developer_connect_source}
  */
  readonly developerConnectSource?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource;
  /**
  * image_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#image_spec GoogleVertexAiReasoningEngine#image_spec}
  */
  readonly imageSpec?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec;
  /**
  * inline_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#inline_source GoogleVertexAiReasoningEngine#inline_source}
  */
  readonly inlineSource?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource;
  /**
  * python_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#python_spec GoogleVertexAiReasoningEngine#python_spec}
  */
  readonly pythonSpec?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec;
}

export function googleVertexAiReasoningEngineSpecSourceCodeSpecToTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_config_source: googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceToTerraform(struct!.agentConfigSource),
    developer_connect_source: googleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToTerraform(struct!.developerConnectSource),
    image_spec: googleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecToTerraform(struct!.imageSpec),
    inline_source: googleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToTerraform(struct!.inlineSource),
    python_spec: googleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToTerraform(struct!.pythonSpec),
  }
}


export function googleVertexAiReasoningEngineSpecSourceCodeSpecToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference | GoogleVertexAiReasoningEngineSpecSourceCodeSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_config_source: {
      value: googleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceToHclTerraform(struct!.agentConfigSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceList",
    },
    developer_connect_source: {
      value: googleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToHclTerraform(struct!.developerConnectSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceList",
    },
    image_spec: {
      value: googleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecToHclTerraform(struct!.imageSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecList",
    },
    inline_source: {
      value: googleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToHclTerraform(struct!.inlineSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceList",
    },
    python_spec: {
      value: googleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToHclTerraform(struct!.pythonSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpecSourceCodeSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentConfigSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentConfigSource = this._agentConfigSource?.internalValue;
    }
    if (this._developerConnectSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerConnectSource = this._developerConnectSource?.internalValue;
    }
    if (this._imageSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSpec = this._imageSpec?.internalValue;
    }
    if (this._inlineSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineSource = this._inlineSource?.internalValue;
    }
    if (this._pythonSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonSpec = this._pythonSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentConfigSource.internalValue = undefined;
      this._developerConnectSource.internalValue = undefined;
      this._imageSpec.internalValue = undefined;
      this._inlineSource.internalValue = undefined;
      this._pythonSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentConfigSource.internalValue = value.agentConfigSource;
      this._developerConnectSource.internalValue = value.developerConnectSource;
      this._imageSpec.internalValue = value.imageSpec;
      this._inlineSource.internalValue = value.inlineSource;
      this._pythonSpec.internalValue = value.pythonSpec;
    }
  }

  // agent_config_source - computed: false, optional: true, required: false
  private _agentConfigSource = new GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSourceOutputReference(this, "agent_config_source");
  public get agentConfigSource() {
    return this._agentConfigSource;
  }
  public putAgentConfigSource(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecAgentConfigSource) {
    this._agentConfigSource.internalValue = value;
  }
  public resetAgentConfigSource() {
    this._agentConfigSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConfigSourceInput() {
    return this._agentConfigSource.internalValue;
  }

  // developer_connect_source - computed: false, optional: true, required: false
  private _developerConnectSource = new GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference(this, "developer_connect_source");
  public get developerConnectSource() {
    return this._developerConnectSource;
  }
  public putDeveloperConnectSource(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource) {
    this._developerConnectSource.internalValue = value;
  }
  public resetDeveloperConnectSource() {
    this._developerConnectSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerConnectSourceInput() {
    return this._developerConnectSource.internalValue;
  }

  // image_spec - computed: false, optional: true, required: false
  private _imageSpec = new GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference(this, "image_spec");
  public get imageSpec() {
    return this._imageSpec;
  }
  public putImageSpec(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec) {
    this._imageSpec.internalValue = value;
  }
  public resetImageSpec() {
    this._imageSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSpecInput() {
    return this._imageSpec.internalValue;
  }

  // inline_source - computed: false, optional: true, required: false
  private _inlineSource = new GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference(this, "inline_source");
  public get inlineSource() {
    return this._inlineSource;
  }
  public putInlineSource(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource) {
    this._inlineSource.internalValue = value;
  }
  public resetInlineSource() {
    this._inlineSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineSourceInput() {
    return this._inlineSource.internalValue;
  }

  // python_spec - computed: false, optional: true, required: false
  private _pythonSpec = new GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference(this, "python_spec");
  public get pythonSpec() {
    return this._pythonSpec;
  }
  public putPythonSpec(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec) {
    this._pythonSpec.internalValue = value;
  }
  public resetPythonSpec() {
    this._pythonSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonSpecInput() {
    return this._pythonSpec.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineSpec {
  /**
  * Optional. The A2A Agent Card for the agent (if available).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#agent_card GoogleVertexAiReasoningEngine#agent_card}
  */
  readonly agentCard?: string;
  /**
  * Optional. The OSS agent framework used to develop the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#agent_framework GoogleVertexAiReasoningEngine#agent_framework}
  */
  readonly agentFramework?: string;
  /**
  * Optional. Declarations for object class methods in OpenAPI
  * specification format.
  * 
  * **Note**: When deploying via Terraform, this field must be populated manually.
  * Otherwise, client SDKs (like 'agent_engines.get()') will not be able to discover the methods, and calls to the engine (or A2A integrations) will fail.
  * 
  * Depending on the template/framework used ('agent_framework'), the required class methods and their parameters differ:
  * 
  * **Warning**: The configuration snippets below are illustrative, may not be exhaustive, and could stop working over time. For the most up-to-date method lists and schemas, please consult the respective SDK source code:
  * * For Google ADK: See [ADK Python SDK cli_deploy.py](https://github.com/google/adk-python/blob/68a780306e3bdd648a882ef34c0abf8e5148353e/src/google/adk/cli/cli_deploy.py#L109).
  * * For Langchain: See [Vertex AI Python SDK langchain.py](https://github.com/googleapis/python-aiplatform/blob/c8a38a085931b01f4d6071f0ab7a64cb42851829/agentplatform/agent_engines/templates/langchain.py#L642-L717).
  * 
  * ### 1. Langchain Template
  * * 'query' (api_mode = "sync" or empty)
  * * 'stream_query' (api_mode = "stream")
  * 
  * Example for Langchain:
  * ```hcl
  * class_methods = jsonencode([
  *   {
  *     name        = "query"
  *     api_mode    = "sync"
  *     description = "Queries the reasoning engine"
  *     parameters  = {
  *       type       = "object"
  *       required   = ["input"]
  *       properties = {
  *         input = {
  *           type        = "string"
  *           description = "The input prompt"
  *         }
  *       }
  *     }
  *   },
  *   {
  *     name        = "stream_query"
  *     api_mode    = "stream"
  *     description = "Streams queries from the reasoning engine"
  *     parameters  = {
  *       type       = "object"
  *       required   = ["input"]
  *       properties = {
  *         input = {
  *           type        = "string"
  *           description = "The input prompt"
  *         }
  *       }
  *     }
  *   }
  * ])
  * ```
  * 
  * ### 2. Google ADK Template (Standard - No A2A)
  * For standard Google ADK (Agent Development Kit) deployments, you must define the following 11 methods:
  * 
  * Example for Standard ADK:
  * ```hcl
  * class_methods = jsonencode([
  *   {
  *     name        = "get_session"
  *     api_mode    = ""
  *     description = "Retrieve session by ID"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id", "session_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "async_get_session"
  *     api_mode    = "async"
  *     description = "Retrieve session asynchronously by ID"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id", "session_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "list_sessions"
  *     api_mode    = ""
  *     description = "List all sessions for a user"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id"]
  *       properties = {
  *         user_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "async_list_sessions"
  *     api_mode    = "async"
  *     description = "List all sessions for a user asynchronously"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id"]
  *       properties = {
  *         user_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "create_session"
  *     api_mode    = ""
  *     description = "Create a new session"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *         state      = { type = "object" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "async_create_session"
  *     api_mode    = "async"
  *     description = "Create a new session asynchronously"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *         state      = { type = "object" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "delete_session"
  *     api_mode    = ""
  *     description = "Delete session by ID"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id", "session_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "async_delete_session"
  *     api_mode    = "async"
  *     description = "Delete session asynchronously by ID"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id", "session_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "stream_query"
  *     api_mode    = "stream"
  *     description = "Stream queries from the agent"
  *     parameters  = {
  *       type     = "object"
  *       required = ["message", "user_id"]
  *       properties = {
  *         message    = { description = "Message string or object" }
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *         run_config = { type = "object" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "async_stream_query"
  *     api_mode    = "async_stream"
  *     description = "Stream queries asynchronously from the agent"
  *     parameters  = {
  *       type     = "object"
  *       required = ["message", "user_id"]
  *       properties = {
  *         message        = { description = "Message string or object" }
  *         user_id        = { type = "string" }
  *         session_id     = { type = "string" }
  *         session_events = { type = "array", items = { type = "object" } }
  *         run_config     = { type = "object" }
  *       }
  *     }
  *   },
  *   {
  *     name        = "streaming_agent_run_with_events"
  *     api_mode    = "async_stream"
  *     description = "Stream agent run with events asynchronously"
  *     parameters  = {
  *       type     = "object"
  *       required = ["request_json"]
  *       properties = {
  *         request_json = { type = "string" }
  *       }
  *     }
  *   }
  * ])
  * ```
  * 
  * ### 3. Google ADK Template (A2A-Enabled)
  * If the agent integrates with the Gemini Enterprise Agent Registry (A2A), you must inject the 'a2a_agent_card' JSON metadata as a string **specifically inside the 'async_create_session' method definition**:
  * 
  * Example for A2A-Enabled ADK:
  * ```hcl
  * locals {
  *   # Construct the A2A endpoint URL
  *   a2a_url = "https://us-central1-aiplatform.googleapis.com/v1/projects/my-project/locations/us-central1/reasoningEngines/my-agent/a2a"
  * 
  *   agent_card = {
  *     name                 = "my-agent"
  *     description          = "A2A Agent"
  *     version              = "1.0.0"
  *     preferred_transport  = "HTTP_JSON"
  *     supported_interfaces = [{ url = local.a2a_url, protocol_binding = "HTTP_JSON" }]
  *     capabilities         = { streaming = true }
  *   }
  * }
  * 
  * # In class_methods, append "a2a_agent_card" key ONLY to the "async_create_session" method:
  * class_methods = jsonencode([
  *   # ... other 10 standard methods (same as Standard ADK) ...
  *   {
  *     name        = "async_create_session"
  *     api_mode    = "async"
  *     description = "Create a new session asynchronously"
  *     parameters  = {
  *       type     = "object"
  *       required = ["user_id"]
  *       properties = {
  *         user_id    = { type = "string" }
  *         session_id = { type = "string" }
  *         state      = { type = "object" }
  *       }
  *     }
  *     # Inject the serialized Agent Card here
  *     a2a_agent_card = jsonencode(local.agent_card)
  *   }
  * ])
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#class_methods GoogleVertexAiReasoningEngine#class_methods}
  */
  readonly classMethods?: string;
  /**
  * Optional. The resource name of the linked ExampleStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#example_store GoogleVertexAiReasoningEngine#example_store}
  */
  readonly exampleStore?: string;
  /**
  * Optional. The identity type to use for the Reasoning Engine.
  * If not specified, the 'service_account' field will be used if set,
  * otherwise the default Vertex AI Reasoning Engine Service Agent in the project will be used.
  * Possible values:
  * * 'SERVICE_ACCOUNT': Use a custom service account if the 'service_account' field is set, otherwise use the default Vertex AI Reasoning Engine Service Agent in the project.
  * * 'AGENT_IDENTITY': Use Agent Identity. The 'service_account' field must not be set. Possible values: ["SERVICE_ACCOUNT", "AGENT_IDENTITY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#identity_type GoogleVertexAiReasoningEngine#identity_type}
  */
  readonly identityType?: string;
  /**
  * Optional. The service account that the Reasoning Engine artifact runs
  * as. It should have "roles/storage.objectViewer" for reading the user
  * project's Cloud Storage and "roles/aiplatform.user" for using Vertex
  * extensions. If not specified, the Vertex AI Reasoning Engine service
  * Agent in the project will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#service_account GoogleVertexAiReasoningEngine#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * build_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#build_spec GoogleVertexAiReasoningEngine#build_spec}
  */
  readonly buildSpec?: GoogleVertexAiReasoningEngineSpecBuildSpec;
  /**
  * container_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#container_spec GoogleVertexAiReasoningEngine#container_spec}
  */
  readonly containerSpec?: GoogleVertexAiReasoningEngineSpecContainerSpec;
  /**
  * deployment_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#deployment_spec GoogleVertexAiReasoningEngine#deployment_spec}
  */
  readonly deploymentSpec?: GoogleVertexAiReasoningEngineSpecDeploymentSpec;
  /**
  * package_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#package_spec GoogleVertexAiReasoningEngine#package_spec}
  */
  readonly packageSpec?: GoogleVertexAiReasoningEngineSpecPackageSpec;
  /**
  * source_code_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#source_code_spec GoogleVertexAiReasoningEngine#source_code_spec}
  */
  readonly sourceCodeSpec?: GoogleVertexAiReasoningEngineSpecSourceCodeSpec;
}

export function googleVertexAiReasoningEngineSpecToTerraform(struct?: GoogleVertexAiReasoningEngineSpecOutputReference | GoogleVertexAiReasoningEngineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_card: cdktf.stringToTerraform(struct!.agentCard),
    agent_framework: cdktf.stringToTerraform(struct!.agentFramework),
    class_methods: cdktf.stringToTerraform(struct!.classMethods),
    example_store: cdktf.stringToTerraform(struct!.exampleStore),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    build_spec: googleVertexAiReasoningEngineSpecBuildSpecToTerraform(struct!.buildSpec),
    container_spec: googleVertexAiReasoningEngineSpecContainerSpecToTerraform(struct!.containerSpec),
    deployment_spec: googleVertexAiReasoningEngineSpecDeploymentSpecToTerraform(struct!.deploymentSpec),
    package_spec: googleVertexAiReasoningEngineSpecPackageSpecToTerraform(struct!.packageSpec),
    source_code_spec: googleVertexAiReasoningEngineSpecSourceCodeSpecToTerraform(struct!.sourceCodeSpec),
  }
}


export function googleVertexAiReasoningEngineSpecToHclTerraform(struct?: GoogleVertexAiReasoningEngineSpecOutputReference | GoogleVertexAiReasoningEngineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_card: {
      value: cdktf.stringToHclTerraform(struct!.agentCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_framework: {
      value: cdktf.stringToHclTerraform(struct!.agentFramework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_methods: {
      value: cdktf.stringToHclTerraform(struct!.classMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example_store: {
      value: cdktf.stringToHclTerraform(struct!.exampleStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_spec: {
      value: googleVertexAiReasoningEngineSpecBuildSpecToHclTerraform(struct!.buildSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecBuildSpecList",
    },
    container_spec: {
      value: googleVertexAiReasoningEngineSpecContainerSpecToHclTerraform(struct!.containerSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecContainerSpecList",
    },
    deployment_spec: {
      value: googleVertexAiReasoningEngineSpecDeploymentSpecToHclTerraform(struct!.deploymentSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecDeploymentSpecList",
    },
    package_spec: {
      value: googleVertexAiReasoningEngineSpecPackageSpecToHclTerraform(struct!.packageSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecPackageSpecList",
    },
    source_code_spec: {
      value: googleVertexAiReasoningEngineSpecSourceCodeSpecToHclTerraform(struct!.sourceCodeSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineSpecSourceCodeSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentCard = this._agentCard;
    }
    if (this._agentFramework !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentFramework = this._agentFramework;
    }
    if (this._classMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMethods = this._classMethods;
    }
    if (this._exampleStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.exampleStore = this._exampleStore;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._buildSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildSpec = this._buildSpec?.internalValue;
    }
    if (this._containerSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSpec = this._containerSpec?.internalValue;
    }
    if (this._deploymentSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentSpec = this._deploymentSpec?.internalValue;
    }
    if (this._packageSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageSpec = this._packageSpec?.internalValue;
    }
    if (this._sourceCodeSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodeSpec = this._sourceCodeSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentCard = undefined;
      this._agentFramework = undefined;
      this._classMethods = undefined;
      this._exampleStore = undefined;
      this._identityType = undefined;
      this._serviceAccount = undefined;
      this._buildSpec.internalValue = undefined;
      this._containerSpec.internalValue = undefined;
      this._deploymentSpec.internalValue = undefined;
      this._packageSpec.internalValue = undefined;
      this._sourceCodeSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentCard = value.agentCard;
      this._agentFramework = value.agentFramework;
      this._classMethods = value.classMethods;
      this._exampleStore = value.exampleStore;
      this._identityType = value.identityType;
      this._serviceAccount = value.serviceAccount;
      this._buildSpec.internalValue = value.buildSpec;
      this._containerSpec.internalValue = value.containerSpec;
      this._deploymentSpec.internalValue = value.deploymentSpec;
      this._packageSpec.internalValue = value.packageSpec;
      this._sourceCodeSpec.internalValue = value.sourceCodeSpec;
    }
  }

  // agent_card - computed: false, optional: true, required: false
  private _agentCard?: string; 
  public get agentCard() {
    return this.getStringAttribute('agent_card');
  }
  public set agentCard(value: string) {
    this._agentCard = value;
  }
  public resetAgentCard() {
    this._agentCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentCardInput() {
    return this._agentCard;
  }

  // agent_framework - computed: false, optional: true, required: false
  private _agentFramework?: string; 
  public get agentFramework() {
    return this.getStringAttribute('agent_framework');
  }
  public set agentFramework(value: string) {
    this._agentFramework = value;
  }
  public resetAgentFramework() {
    this._agentFramework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentFrameworkInput() {
    return this._agentFramework;
  }

  // class_methods - computed: false, optional: true, required: false
  private _classMethods?: string; 
  public get classMethods() {
    return this.getStringAttribute('class_methods');
  }
  public set classMethods(value: string) {
    this._classMethods = value;
  }
  public resetClassMethods() {
    this._classMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMethodsInput() {
    return this._classMethods;
  }

  // effective_identity - computed: true, optional: false, required: false
  public get effectiveIdentity() {
    return this.getStringAttribute('effective_identity');
  }

  // example_store - computed: false, optional: true, required: false
  private _exampleStore?: string; 
  public get exampleStore() {
    return this.getStringAttribute('example_store');
  }
  public set exampleStore(value: string) {
    this._exampleStore = value;
  }
  public resetExampleStore() {
    this._exampleStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleStoreInput() {
    return this._exampleStore;
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // build_spec - computed: false, optional: true, required: false
  private _buildSpec = new GoogleVertexAiReasoningEngineSpecBuildSpecOutputReference(this, "build_spec");
  public get buildSpec() {
    return this._buildSpec;
  }
  public putBuildSpec(value: GoogleVertexAiReasoningEngineSpecBuildSpec) {
    this._buildSpec.internalValue = value;
  }
  public resetBuildSpec() {
    this._buildSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildSpecInput() {
    return this._buildSpec.internalValue;
  }

  // container_spec - computed: false, optional: true, required: false
  private _containerSpec = new GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference(this, "container_spec");
  public get containerSpec() {
    return this._containerSpec;
  }
  public putContainerSpec(value: GoogleVertexAiReasoningEngineSpecContainerSpec) {
    this._containerSpec.internalValue = value;
  }
  public resetContainerSpec() {
    this._containerSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSpecInput() {
    return this._containerSpec.internalValue;
  }

  // deployment_spec - computed: false, optional: true, required: false
  private _deploymentSpec = new GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference(this, "deployment_spec");
  public get deploymentSpec() {
    return this._deploymentSpec;
  }
  public putDeploymentSpec(value: GoogleVertexAiReasoningEngineSpecDeploymentSpec) {
    this._deploymentSpec.internalValue = value;
  }
  public resetDeploymentSpec() {
    this._deploymentSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSpecInput() {
    return this._deploymentSpec.internalValue;
  }

  // package_spec - computed: false, optional: true, required: false
  private _packageSpec = new GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference(this, "package_spec");
  public get packageSpec() {
    return this._packageSpec;
  }
  public putPackageSpec(value: GoogleVertexAiReasoningEngineSpecPackageSpec) {
    this._packageSpec.internalValue = value;
  }
  public resetPackageSpec() {
    this._packageSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageSpecInput() {
    return this._packageSpec.internalValue;
  }

  // source_code_spec - computed: false, optional: true, required: false
  private _sourceCodeSpec = new GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference(this, "source_code_spec");
  public get sourceCodeSpec() {
    return this._sourceCodeSpec;
  }
  public putSourceCodeSpec(value: GoogleVertexAiReasoningEngineSpecSourceCodeSpec) {
    this._sourceCodeSpec.internalValue = value;
  }
  public resetSourceCodeSpec() {
    this._sourceCodeSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeSpecInput() {
    return this._sourceCodeSpec.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#create GoogleVertexAiReasoningEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#delete GoogleVertexAiReasoningEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#update GoogleVertexAiReasoningEngine#update}
  */
  readonly update?: string;
}

export function googleVertexAiReasoningEngineTimeoutsToTerraform(struct?: GoogleVertexAiReasoningEngineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function googleVertexAiReasoningEngineTimeoutsToHclTerraform(struct?: GoogleVertexAiReasoningEngineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatest {
}

export function googleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatestToTerraform(struct?: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatestOutputReference | GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatestToHclTerraform(struct?: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatestOutputReference | GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargets {
  /**
  * Required. Specifies percent of the traffic to this Runtime Revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#percent GoogleVertexAiReasoningEngine#percent}
  */
  readonly percent: number;
  /**
  * Required. The Runtime Revision name to which to send this portion of traffic. Accepts revision IDs, short names (e.g. 'rev-1'), or keywords such as 'LATEST' and 'PREVIOUS'. Note: Keywords like 'LATEST' and 'PREVIOUS' resolve at apply time to the concrete underlying revision ID and remain pinned until 'traffic_config' is updated in Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#runtime_revision_name GoogleVertexAiReasoningEngine#runtime_revision_name}
  */
  readonly runtimeRevisionName: string;
}

export function googleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargetsToTerraform(struct?: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent: cdktf.numberToTerraform(struct!.percent),
    runtime_revision_name: cdktf.stringToTerraform(struct!.runtimeRevisionName),
  }
}


export function googleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargetsToHclTerraform(struct?: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_revision_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeRevisionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._runtimeRevisionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeRevisionName = this._runtimeRevisionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percent = undefined;
      this._runtimeRevisionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percent = value.percent;
      this._runtimeRevisionName = value.runtimeRevisionName;
    }
  }

  // percent - computed: false, optional: false, required: true
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // runtime_revision_name - computed: false, optional: false, required: true
  private _runtimeRevisionName?: string; 
  public get runtimeRevisionName() {
    return this.getStringAttribute('runtime_revision_name');
  }
  public set runtimeRevisionName(value: string) {
    this._runtimeRevisionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeRevisionNameInput() {
    return this._runtimeRevisionName;
  }
}

export class GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargetsList extends cdktf.ComplexList {
  public internalValue? : GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargetsOutputReference {
    return new GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManual {
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#targets GoogleVertexAiReasoningEngine#targets}
  */
  readonly targets?: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargets[] | cdktf.IResolvable;
}

export function googleVertexAiReasoningEngineTrafficConfigTrafficSplitManualToTerraform(struct?: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualOutputReference | GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(googleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargetsToTerraform, true)(struct!.targets),
  }
}


export function googleVertexAiReasoningEngineTrafficConfigTrafficSplitManualToHclTerraform(struct?: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualOutputReference | GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(googleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targets.internalValue = value.targets;
    }
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface GoogleVertexAiReasoningEngineTrafficConfig {
  /**
  * traffic_split_always_latest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#traffic_split_always_latest GoogleVertexAiReasoningEngine#traffic_split_always_latest}
  */
  readonly trafficSplitAlwaysLatest?: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatest;
  /**
  * traffic_split_manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#traffic_split_manual GoogleVertexAiReasoningEngine#traffic_split_manual}
  */
  readonly trafficSplitManual?: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManual;
}

export function googleVertexAiReasoningEngineTrafficConfigToTerraform(struct?: GoogleVertexAiReasoningEngineTrafficConfigOutputReference | GoogleVertexAiReasoningEngineTrafficConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traffic_split_always_latest: googleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatestToTerraform(struct!.trafficSplitAlwaysLatest),
    traffic_split_manual: googleVertexAiReasoningEngineTrafficConfigTrafficSplitManualToTerraform(struct!.trafficSplitManual),
  }
}


export function googleVertexAiReasoningEngineTrafficConfigToHclTerraform(struct?: GoogleVertexAiReasoningEngineTrafficConfigOutputReference | GoogleVertexAiReasoningEngineTrafficConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traffic_split_always_latest: {
      value: googleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatestToHclTerraform(struct!.trafficSplitAlwaysLatest),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatestList",
    },
    traffic_split_manual: {
      value: googleVertexAiReasoningEngineTrafficConfigTrafficSplitManualToHclTerraform(struct!.trafficSplitManual),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiReasoningEngineTrafficConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiReasoningEngineTrafficConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficSplitAlwaysLatest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplitAlwaysLatest = this._trafficSplitAlwaysLatest?.internalValue;
    }
    if (this._trafficSplitManual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplitManual = this._trafficSplitManual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiReasoningEngineTrafficConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trafficSplitAlwaysLatest.internalValue = undefined;
      this._trafficSplitManual.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trafficSplitAlwaysLatest.internalValue = value.trafficSplitAlwaysLatest;
      this._trafficSplitManual.internalValue = value.trafficSplitManual;
    }
  }

  // traffic_split_always_latest - computed: false, optional: true, required: false
  private _trafficSplitAlwaysLatest = new GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatestOutputReference(this, "traffic_split_always_latest");
  public get trafficSplitAlwaysLatest() {
    return this._trafficSplitAlwaysLatest;
  }
  public putTrafficSplitAlwaysLatest(value: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitAlwaysLatest) {
    this._trafficSplitAlwaysLatest.internalValue = value;
  }
  public resetTrafficSplitAlwaysLatest() {
    this._trafficSplitAlwaysLatest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitAlwaysLatestInput() {
    return this._trafficSplitAlwaysLatest.internalValue;
  }

  // traffic_split_manual - computed: false, optional: true, required: false
  private _trafficSplitManual = new GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManualOutputReference(this, "traffic_split_manual");
  public get trafficSplitManual() {
    return this._trafficSplitManual;
  }
  public putTrafficSplitManual(value: GoogleVertexAiReasoningEngineTrafficConfigTrafficSplitManual) {
    this._trafficSplitManual.internalValue = value;
  }
  public resetTrafficSplitManual() {
    this._trafficSplitManual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitManualInput() {
    return this._trafficSplitManual.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine google_vertex_ai_reasoning_engine}
*/
export class GoogleVertexAiReasoningEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_reasoning_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVertexAiReasoningEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiReasoningEngine to import
  * @param importFromId The id of the existing GoogleVertexAiReasoningEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiReasoningEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_reasoning_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_reasoning_engine google_vertex_ai_reasoning_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiReasoningEngineConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiReasoningEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_reasoning_engine',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.46.1',
        providerVersionConstraint: '~> 7.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._region = config.region;
    this._contextSpec.internalValue = config.contextSpec;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
    this._trafficConfig.internalValue = config.trafficConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // context_spec - computed: false, optional: true, required: false
  private _contextSpec = new GoogleVertexAiReasoningEngineContextSpecOutputReference(this, "context_spec");
  public get contextSpec() {
    return this._contextSpec;
  }
  public putContextSpec(value: GoogleVertexAiReasoningEngineContextSpec) {
    this._contextSpec.internalValue = value;
  }
  public resetContextSpec() {
    this._contextSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextSpecInput() {
    return this._contextSpec.internalValue;
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new GoogleVertexAiReasoningEngineEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: GoogleVertexAiReasoningEngineEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new GoogleVertexAiReasoningEngineSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GoogleVertexAiReasoningEngineSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiReasoningEngineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiReasoningEngineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic_config - computed: false, optional: true, required: false
  private _trafficConfig = new GoogleVertexAiReasoningEngineTrafficConfigOutputReference(this, "traffic_config");
  public get trafficConfig() {
    return this._trafficConfig;
  }
  public putTrafficConfig(value: GoogleVertexAiReasoningEngineTrafficConfig) {
    this._trafficConfig.internalValue = value;
  }
  public resetTrafficConfig() {
    this._trafficConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficConfigInput() {
    return this._trafficConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      context_spec: googleVertexAiReasoningEngineContextSpecToTerraform(this._contextSpec.internalValue),
      encryption_spec: googleVertexAiReasoningEngineEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      spec: googleVertexAiReasoningEngineSpecToTerraform(this._spec.internalValue),
      timeouts: googleVertexAiReasoningEngineTimeoutsToTerraform(this._timeouts.internalValue),
      traffic_config: googleVertexAiReasoningEngineTrafficConfigToTerraform(this._trafficConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_spec: {
        value: googleVertexAiReasoningEngineContextSpecToHclTerraform(this._contextSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiReasoningEngineContextSpecList",
      },
      encryption_spec: {
        value: googleVertexAiReasoningEngineEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiReasoningEngineEncryptionSpecList",
      },
      spec: {
        value: googleVertexAiReasoningEngineSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiReasoningEngineSpecList",
      },
      timeouts: {
        value: googleVertexAiReasoningEngineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiReasoningEngineTimeouts",
      },
      traffic_config: {
        value: googleVertexAiReasoningEngineTrafficConfigToHclTerraform(this._trafficConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiReasoningEngineTrafficConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
