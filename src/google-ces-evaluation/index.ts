// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCesEvaluationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#app GoogleCesEvaluation#app}
  */
  readonly app: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#deletion_policy GoogleCesEvaluation#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User-defined description of the evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#description GoogleCesEvaluation#description}
  */
  readonly description?: string;
  /**
  * User-defined display name of the evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#display_name GoogleCesEvaluation#display_name}
  */
  readonly displayName: string;
  /**
  * The ID to use for the evaluation, which will become the final component of
  * the evaluation's resource name. If not provided, a unique ID will be
  * automatically assigned for the evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#evaluation_id GoogleCesEvaluation#evaluation_id}
  */
  readonly evaluationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#location GoogleCesEvaluation#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#project GoogleCesEvaluation#project}
  */
  readonly project?: string;
  /**
  * User defined tags to categorize the evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tags GoogleCesEvaluation#tags}
  */
  readonly tags?: string[];
  /**
  * golden block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#golden GoogleCesEvaluation#golden}
  */
  readonly golden?: GoogleCesEvaluationGolden;
  /**
  * scenario block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#scenario GoogleCesEvaluation#scenario}
  */
  readonly scenario?: GoogleCesEvaluationScenario;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#timeouts GoogleCesEvaluation#timeouts}
  */
  readonly timeouts?: GoogleCesEvaluationTimeouts;
}
export interface GoogleCesEvaluationGoldenTurnsRootSpan {
}

export function googleCesEvaluationGoldenTurnsRootSpanToTerraform(struct?: GoogleCesEvaluationGoldenTurnsRootSpan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesEvaluationGoldenTurnsRootSpanToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsRootSpan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesEvaluationGoldenTurnsRootSpanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsRootSpan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsRootSpan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // child_spans - computed: true, optional: false, required: false
  public get childSpans() {
    return this.getStringAttribute('child_spans');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class GoogleCesEvaluationGoldenTurnsRootSpanList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesEvaluationGoldenTurnsRootSpanOutputReference {
    return new GoogleCesEvaluationGoldenTurnsRootSpanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsAgentTransfer {
  /**
  * The resource name of the target agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#target_agent GoogleCesEvaluation#target_agent}
  */
  readonly targetAgent: string;
}

export function googleCesEvaluationGoldenTurnsStepsAgentTransferToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference | GoogleCesEvaluationGoldenTurnsStepsAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_agent: cdktf.stringToTerraform(struct!.targetAgent),
  }
}


export function googleCesEvaluationGoldenTurnsStepsAgentTransferToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference | GoogleCesEvaluationGoldenTurnsStepsAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_agent: {
      value: cdktf.stringToHclTerraform(struct!.targetAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsAgentTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAgent = this._targetAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsAgentTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetAgent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetAgent = value.targetAgent;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // target_agent - computed: false, optional: false, required: true
  private _targetAgent?: string; 
  public get targetAgent() {
    return this.getStringAttribute('target_agent');
  }
  public set targetAgent(value: string) {
    this._targetAgent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAgentInput() {
    return this._targetAgent;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer {
  /**
  * The agent to which the conversation is being transferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#target_agent GoogleCesEvaluation#target_agent}
  */
  readonly targetAgent: string;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_agent: cdktf.stringToTerraform(struct!.targetAgent),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_agent: {
      value: cdktf.stringToHclTerraform(struct!.targetAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAgent = this._targetAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetAgent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetAgent = value.targetAgent;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // target_agent - computed: false, optional: false, required: true
  private _targetAgent?: string; 
  public get targetAgent() {
    return this.getStringAttribute('target_agent');
  }
  public set targetAgent(value: string) {
    this._targetAgent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAgentInput() {
    return this._targetAgent;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob {
  /**
  * Raw bytes of the blob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}
  */
  readonly data: string;
  /**
  * The IANA standard MIME type of the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}
  */
  readonly mimeType: string;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob): any {
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

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob | undefined {
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

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob | undefined) {
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
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage {
  /**
  * Raw bytes of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}
  */
  readonly data: string;
  /**
  * The IANA standard MIME type of the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}
  */
  readonly mimeType: string;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage): any {
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

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage | undefined {
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

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage | undefined) {
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
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}
  */
  readonly toolset: string;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_id: {
      value: cdktf.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktf.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall {
  /**
  * The input parameters and values for the tool in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#args GoogleCesEvaluation#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * The unique identifier of the tool call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    id: cdktf.stringToTerraform(struct!.id),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall | undefined {
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
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._id = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._id = value.id;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}
  */
  readonly toolset: string;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_id: {
      value: cdktf.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktf.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse {
  /**
  * The matching ID of the tool call the response is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tool execution result in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}
  */
  readonly response?: { [key: string]: string };
  /**
  * The resource name of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    response: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.response),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse): any {
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
    response: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.response),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._response = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._response = value.response;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // response - computed: false, optional: true, required: false
  private _response?: { [key: string]: string }; 
  public get response() {
    return this.getStringMapAttribute('response');
  }
  public set response(value: { [key: string]: string }) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks {
  /**
  * Text data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#text GoogleCesEvaluation#text}
  */
  readonly text?: string;
  /**
  * Updated variables in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#updated_variables GoogleCesEvaluation#updated_variables}
  */
  readonly updatedVariables?: { [key: string]: string };
  /**
  * agent_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#agent_transfer GoogleCesEvaluation#agent_transfer}
  */
  readonly agentTransfer?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer;
  /**
  * blob block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#blob GoogleCesEvaluation#blob}
  */
  readonly blob?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#image GoogleCesEvaluation#image}
  */
  readonly image?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage;
  /**
  * tool_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_call GoogleCesEvaluation#tool_call}
  */
  readonly toolCall?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall;
  /**
  * tool_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_response GoogleCesEvaluation#tool_response}
  */
  readonly toolResponse?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    updated_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.updatedVariables),
    agent_transfer: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferToTerraform(struct!.agentTransfer),
    blob: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobToTerraform(struct!.blob),
    image: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageToTerraform(struct!.image),
    tool_call: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToTerraform(struct!.toolCall),
    tool_response: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToTerraform(struct!.toolResponse),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks | cdktf.IResolvable): any {
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
    updated_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.updatedVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    agent_transfer: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferToHclTerraform(struct!.agentTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferList",
    },
    blob: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobToHclTerraform(struct!.blob),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobList",
    },
    image: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageList",
    },
    tool_call: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToHclTerraform(struct!.toolCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallList",
    },
    tool_response: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToHclTerraform(struct!.toolResponse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._updatedVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedVariables = this._updatedVariables;
    }
    if (this._agentTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentTransfer = this._agentTransfer?.internalValue;
    }
    if (this._blob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blob = this._blob?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._toolCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolCall = this._toolCall?.internalValue;
    }
    if (this._toolResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolResponse = this._toolResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._updatedVariables = undefined;
      this._agentTransfer.internalValue = undefined;
      this._blob.internalValue = undefined;
      this._image.internalValue = undefined;
      this._toolCall.internalValue = undefined;
      this._toolResponse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._updatedVariables = value.updatedVariables;
      this._agentTransfer.internalValue = value.agentTransfer;
      this._blob.internalValue = value.blob;
      this._image.internalValue = value.image;
      this._toolCall.internalValue = value.toolCall;
      this._toolResponse.internalValue = value.toolResponse;
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

  // updated_variables - computed: false, optional: true, required: false
  private _updatedVariables?: { [key: string]: string }; 
  public get updatedVariables() {
    return this.getStringMapAttribute('updated_variables');
  }
  public set updatedVariables(value: { [key: string]: string }) {
    this._updatedVariables = value;
  }
  public resetUpdatedVariables() {
    this._updatedVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedVariablesInput() {
    return this._updatedVariables;
  }

  // agent_transfer - computed: false, optional: true, required: false
  private _agentTransfer = new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference(this, "agent_transfer");
  public get agentTransfer() {
    return this._agentTransfer;
  }
  public putAgentTransfer(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer) {
    this._agentTransfer.internalValue = value;
  }
  public resetAgentTransfer() {
    this._agentTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTransferInput() {
    return this._agentTransfer.internalValue;
  }

  // blob - computed: false, optional: true, required: false
  private _blob = new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference(this, "blob");
  public get blob() {
    return this._blob;
  }
  public putBlob(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob) {
    this._blob.internalValue = value;
  }
  public resetBlob() {
    this._blob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobInput() {
    return this._blob.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // tool_call - computed: false, optional: true, required: false
  private _toolCall = new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference(this, "tool_call");
  public get toolCall() {
    return this._toolCall;
  }
  public putToolCall(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall) {
    this._toolCall.internalValue = value;
  }
  public resetToolCall() {
    this._toolCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolCallInput() {
    return this._toolCall.internalValue;
  }

  // tool_response - computed: false, optional: true, required: false
  private _toolResponse = new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference(this, "tool_response");
  public get toolResponse() {
    return this._toolResponse;
  }
  public putToolResponse(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse) {
    this._toolResponse.internalValue = value;
  }
  public resetToolResponse() {
    this._toolResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolResponseInput() {
    return this._toolResponse.internalValue;
  }
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList extends cdktf.ComplexList {
  public internalValue? : GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference {
    return new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse {
  /**
  * The role within the conversation, e.g., user, agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#role GoogleCesEvaluation#role}
  */
  readonly role?: string;
  /**
  * chunks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#chunks GoogleCesEvaluation#chunks}
  */
  readonly chunks?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks[] | cdktf.IResolvable;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    chunks: cdktf.listMapper(googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToTerraform, true)(struct!.chunks),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse): any {
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
    chunks: {
      value: cdktf.listMapperHcl(googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToHclTerraform, true)(struct!.chunks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._chunks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunks = this._chunks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
      this._chunks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
      this._chunks.internalValue = value.chunks;
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

  // chunks - computed: false, optional: true, required: false
  private _chunks = new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList(this, "chunks", false);
  public get chunks() {
    return this._chunks;
  }
  public putChunks(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks[] | cdktf.IResolvable) {
    this._chunks.internalValue = value;
  }
  public resetChunks() {
    this._chunks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunksInput() {
    return this._chunks.internalValue;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer {
  /**
  * The display name of the target agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#display_name GoogleCesEvaluation#display_name}
  */
  readonly displayName?: string;
  /**
  * The resource name of the target agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#target_agent GoogleCesEvaluation#target_agent}
  */
  readonly targetAgent?: string;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationAgentTransferToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    target_agent: cdktf.stringToTerraform(struct!.targetAgent),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationAgentTransferToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_agent: {
      value: cdktf.stringToHclTerraform(struct!.targetAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._targetAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAgent = this._targetAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._targetAgent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._targetAgent = value.targetAgent;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // target_agent - computed: false, optional: true, required: false
  private _targetAgent?: string; 
  public get targetAgent() {
    return this.getStringAttribute('target_agent');
  }
  public set targetAgent(value: string) {
    this._targetAgent = value;
  }
  public resetTargetAgent() {
    this._targetAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAgentInput() {
    return this._targetAgent;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}
  */
  readonly toolset: string;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_id: {
      value: cdktf.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktf.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse {
  /**
  * The matching ID of the tool call the response is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tool execution result in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}
  */
  readonly response?: { [key: string]: string };
  /**
  * The resource name of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    response: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.response),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse): any {
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
    response: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.response),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._response = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._response = value.response;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // response - computed: false, optional: true, required: false
  private _response?: { [key: string]: string }; 
  public get response() {
    return this.getStringMapAttribute('response');
  }
  public set response(value: { [key: string]: string }) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}
  */
  readonly toolset: string;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_id: {
      value: cdktf.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktf.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall {
  /**
  * The input parameters and values for the tool in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#args GoogleCesEvaluation#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * The unique identifier of the tool call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the tool. Note: 'tool' and 'toolset_tool' are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationToolCallToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    id: cdktf.stringToTerraform(struct!.id),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationToolCallToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall | undefined {
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
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._id = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._id = value.id;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}
  */
  readonly toolset: string;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_id: {
      value: cdktf.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktf.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse {
  /**
  * The matching ID of the tool call the response is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tool execution result in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}
  */
  readonly response?: { [key: string]: string };
  /**
  * The resource name of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationToolResponseToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    response: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.response),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationToolResponseToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse): any {
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
    response: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.response),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._response = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._response = value.response;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // response - computed: false, optional: true, required: false
  private _response?: { [key: string]: string }; 
  public get response() {
    return this.getStringMapAttribute('response');
  }
  public set response(value: { [key: string]: string }) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables {
  /**
  * Dummy property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#notes GoogleCesEvaluation#notes}
  */
  readonly notes?: string;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notes: cdktf.stringToTerraform(struct!.notes),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notes = value.notes;
    }
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsExpectation {
  /**
  * A note describing the expectation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#note GoogleCesEvaluation#note}
  */
  readonly note?: string;
  /**
  * agent_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#agent_response GoogleCesEvaluation#agent_response}
  */
  readonly agentResponse?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse;
  /**
  * agent_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#agent_transfer GoogleCesEvaluation#agent_transfer}
  */
  readonly agentTransfer?: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer;
  /**
  * mock_tool_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#mock_tool_response GoogleCesEvaluation#mock_tool_response}
  */
  readonly mockToolResponse?: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse;
  /**
  * tool_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_call GoogleCesEvaluation#tool_call}
  */
  readonly toolCall?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall;
  /**
  * tool_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_response GoogleCesEvaluation#tool_response}
  */
  readonly toolResponse?: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse;
  /**
  * updated_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#updated_variables GoogleCesEvaluation#updated_variables}
  */
  readonly updatedVariables?: GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables;
}

export function googleCesEvaluationGoldenTurnsStepsExpectationToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    note: cdktf.stringToTerraform(struct!.note),
    agent_response: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseToTerraform(struct!.agentResponse),
    agent_transfer: googleCesEvaluationGoldenTurnsStepsExpectationAgentTransferToTerraform(struct!.agentTransfer),
    mock_tool_response: googleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToTerraform(struct!.mockToolResponse),
    tool_call: googleCesEvaluationGoldenTurnsStepsExpectationToolCallToTerraform(struct!.toolCall),
    tool_response: googleCesEvaluationGoldenTurnsStepsExpectationToolResponseToTerraform(struct!.toolResponse),
    updated_variables: googleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesToTerraform(struct!.updatedVariables),
  }
}


export function googleCesEvaluationGoldenTurnsStepsExpectationToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference | GoogleCesEvaluationGoldenTurnsStepsExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    note: {
      value: cdktf.stringToHclTerraform(struct!.note),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_response: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationAgentResponseToHclTerraform(struct!.agentResponse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseList",
    },
    agent_transfer: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationAgentTransferToHclTerraform(struct!.agentTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferList",
    },
    mock_tool_response: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToHclTerraform(struct!.mockToolResponse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseList",
    },
    tool_call: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationToolCallToHclTerraform(struct!.toolCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallList",
    },
    tool_response: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationToolResponseToHclTerraform(struct!.toolResponse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseList",
    },
    updated_variables: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesToHclTerraform(struct!.updatedVariables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._note !== undefined) {
      hasAnyValues = true;
      internalValueResult.note = this._note;
    }
    if (this._agentResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentResponse = this._agentResponse?.internalValue;
    }
    if (this._agentTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentTransfer = this._agentTransfer?.internalValue;
    }
    if (this._mockToolResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mockToolResponse = this._mockToolResponse?.internalValue;
    }
    if (this._toolCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolCall = this._toolCall?.internalValue;
    }
    if (this._toolResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolResponse = this._toolResponse?.internalValue;
    }
    if (this._updatedVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedVariables = this._updatedVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._note = undefined;
      this._agentResponse.internalValue = undefined;
      this._agentTransfer.internalValue = undefined;
      this._mockToolResponse.internalValue = undefined;
      this._toolCall.internalValue = undefined;
      this._toolResponse.internalValue = undefined;
      this._updatedVariables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._note = value.note;
      this._agentResponse.internalValue = value.agentResponse;
      this._agentTransfer.internalValue = value.agentTransfer;
      this._mockToolResponse.internalValue = value.mockToolResponse;
      this._toolCall.internalValue = value.toolCall;
      this._toolResponse.internalValue = value.toolResponse;
      this._updatedVariables.internalValue = value.updatedVariables;
    }
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // agent_response - computed: false, optional: true, required: false
  private _agentResponse = new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference(this, "agent_response");
  public get agentResponse() {
    return this._agentResponse;
  }
  public putAgentResponse(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse) {
    this._agentResponse.internalValue = value;
  }
  public resetAgentResponse() {
    this._agentResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentResponseInput() {
    return this._agentResponse.internalValue;
  }

  // agent_transfer - computed: false, optional: true, required: false
  private _agentTransfer = new GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference(this, "agent_transfer");
  public get agentTransfer() {
    return this._agentTransfer;
  }
  public putAgentTransfer(value: GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer) {
    this._agentTransfer.internalValue = value;
  }
  public resetAgentTransfer() {
    this._agentTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTransferInput() {
    return this._agentTransfer.internalValue;
  }

  // mock_tool_response - computed: false, optional: true, required: false
  private _mockToolResponse = new GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference(this, "mock_tool_response");
  public get mockToolResponse() {
    return this._mockToolResponse;
  }
  public putMockToolResponse(value: GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse) {
    this._mockToolResponse.internalValue = value;
  }
  public resetMockToolResponse() {
    this._mockToolResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockToolResponseInput() {
    return this._mockToolResponse.internalValue;
  }

  // tool_call - computed: false, optional: true, required: false
  private _toolCall = new GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference(this, "tool_call");
  public get toolCall() {
    return this._toolCall;
  }
  public putToolCall(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall) {
    this._toolCall.internalValue = value;
  }
  public resetToolCall() {
    this._toolCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolCallInput() {
    return this._toolCall.internalValue;
  }

  // tool_response - computed: false, optional: true, required: false
  private _toolResponse = new GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference(this, "tool_response");
  public get toolResponse() {
    return this._toolResponse;
  }
  public putToolResponse(value: GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse) {
    this._toolResponse.internalValue = value;
  }
  public resetToolResponse() {
    this._toolResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolResponseInput() {
    return this._toolResponse.internalValue;
  }

  // updated_variables - computed: false, optional: true, required: false
  private _updatedVariables = new GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference(this, "updated_variables");
  public get updatedVariables() {
    return this._updatedVariables;
  }
  public putUpdatedVariables(value: GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables) {
    this._updatedVariables.internalValue = value;
  }
  public resetUpdatedVariables() {
    this._updatedVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedVariablesInput() {
    return this._updatedVariables.internalValue;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsUserInputBlob {
  /**
  * Raw bytes of the blob, base64-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}
  */
  readonly data: string;
  /**
  * The IANA standard MIME type of the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}
  */
  readonly mimeType: string;
}

export function googleCesEvaluationGoldenTurnsStepsUserInputBlobToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInputBlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleCesEvaluationGoldenTurnsStepsUserInputBlobToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInputBlob): any {
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

export class GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsUserInputBlob | undefined {
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

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsUserInputBlob | undefined) {
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
export interface GoogleCesEvaluationGoldenTurnsStepsUserInputEvent {
  /**
  * Event name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#event GoogleCesEvaluation#event}
  */
  readonly event: string;
}

export function googleCesEvaluationGoldenTurnsStepsUserInputEventToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInputEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
  }
}


export function googleCesEvaluationGoldenTurnsStepsUserInputEventToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInputEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsUserInputEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsUserInputEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._event = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._event = value.event;
    }
  }

  // event - computed: false, optional: false, required: true
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsUserInputImage {
  /**
  * Raw bytes of the image, base64-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}
  */
  readonly data: string;
  /**
  * The IANA standard MIME type of the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}
  */
  readonly mimeType: string;
}

export function googleCesEvaluationGoldenTurnsStepsUserInputImageToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInputImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleCesEvaluationGoldenTurnsStepsUserInputImageToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInputImage): any {
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

export class GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsUserInputImage | undefined {
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

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsUserInputImage | undefined) {
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
export interface GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool {
  /**
  * The tool ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}
  */
  readonly toolId?: string;
  /**
  * The toolset name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}
  */
  readonly toolset: string;
}

export function googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_id: {
      value: cdktf.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktf.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses {
  /**
  * Optional. Matching ID of the tool call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required. The tool execution result in JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}
  */
  readonly response: { [key: string]: string };
  /**
  * Name of the tool to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool;
}

export function googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    response: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.response),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses | cdktf.IResolvable): any {
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
    response: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.response),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._response = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._response = value.response;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // response - computed: false, optional: false, required: true
  private _response?: { [key: string]: string }; 
  public get response() {
    return this.getStringMapAttribute('response');
  }
  public set response(value: { [key: string]: string }) {
    this._response = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}

export class GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList extends cdktf.ComplexList {
  public internalValue? : GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference {
    return new GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses {
  /**
  * tool_responses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_responses GoogleCesEvaluation#tool_responses}
  */
  readonly toolResponses?: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses[] | cdktf.IResolvable;
}

export function googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_responses: cdktf.listMapper(googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToTerraform, true)(struct!.toolResponses),
  }
}


export function googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_responses: {
      value: cdktf.listMapperHcl(googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToHclTerraform, true)(struct!.toolResponses),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolResponses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolResponses = this._toolResponses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolResponses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolResponses.internalValue = value.toolResponses;
    }
  }

  // tool_responses - computed: false, optional: true, required: false
  private _toolResponses = new GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList(this, "tool_responses", false);
  public get toolResponses() {
    return this._toolResponses;
  }
  public putToolResponses(value: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses[] | cdktf.IResolvable) {
    this._toolResponses.internalValue = value;
  }
  public resetToolResponses() {
    this._toolResponses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolResponsesInput() {
    return this._toolResponses.internalValue;
  }
}
export interface GoogleCesEvaluationGoldenTurnsStepsUserInput {
  /**
  * Audio data from the end user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#audio GoogleCesEvaluation#audio}
  */
  readonly audio?: string;
  /**
  * DTMF digits from the end user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#dtmf GoogleCesEvaluation#dtmf}
  */
  readonly dtmf?: string;
  /**
  * Natural language query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#text GoogleCesEvaluation#text}
  */
  readonly text?: string;
  /**
  * Map of variables to set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#variables GoogleCesEvaluation#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * Whether the session should continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#will_continue GoogleCesEvaluation#will_continue}
  */
  readonly willContinue?: boolean | cdktf.IResolvable;
  /**
  * blob block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#blob GoogleCesEvaluation#blob}
  */
  readonly blob?: GoogleCesEvaluationGoldenTurnsStepsUserInputBlob;
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#event GoogleCesEvaluation#event}
  */
  readonly event?: GoogleCesEvaluationGoldenTurnsStepsUserInputEvent;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#image GoogleCesEvaluation#image}
  */
  readonly image?: GoogleCesEvaluationGoldenTurnsStepsUserInputImage;
  /**
  * tool_responses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_responses GoogleCesEvaluation#tool_responses}
  */
  readonly toolResponses?: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses;
}

export function googleCesEvaluationGoldenTurnsStepsUserInputToTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio: cdktf.stringToTerraform(struct!.audio),
    dtmf: cdktf.stringToTerraform(struct!.dtmf),
    text: cdktf.stringToTerraform(struct!.text),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    will_continue: cdktf.booleanToTerraform(struct!.willContinue),
    blob: googleCesEvaluationGoldenTurnsStepsUserInputBlobToTerraform(struct!.blob),
    event: googleCesEvaluationGoldenTurnsStepsUserInputEventToTerraform(struct!.event),
    image: googleCesEvaluationGoldenTurnsStepsUserInputImageToTerraform(struct!.image),
    tool_responses: googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToTerraform(struct!.toolResponses),
  }
}


export function googleCesEvaluationGoldenTurnsStepsUserInputToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference | GoogleCesEvaluationGoldenTurnsStepsUserInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio: {
      value: cdktf.stringToHclTerraform(struct!.audio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dtmf: {
      value: cdktf.stringToHclTerraform(struct!.dtmf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    will_continue: {
      value: cdktf.booleanToHclTerraform(struct!.willContinue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blob: {
      value: googleCesEvaluationGoldenTurnsStepsUserInputBlobToHclTerraform(struct!.blob),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsUserInputBlobList",
    },
    event: {
      value: googleCesEvaluationGoldenTurnsStepsUserInputEventToHclTerraform(struct!.event),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsUserInputEventList",
    },
    image: {
      value: googleCesEvaluationGoldenTurnsStepsUserInputImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsUserInputImageList",
    },
    tool_responses: {
      value: googleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToHclTerraform(struct!.toolResponses),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGoldenTurnsStepsUserInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audio !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio;
    }
    if (this._dtmf !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmf = this._dtmf;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    if (this._willContinue !== undefined) {
      hasAnyValues = true;
      internalValueResult.willContinue = this._willContinue;
    }
    if (this._blob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blob = this._blob?.internalValue;
    }
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._toolResponses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolResponses = this._toolResponses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsStepsUserInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audio = undefined;
      this._dtmf = undefined;
      this._text = undefined;
      this._variables = undefined;
      this._willContinue = undefined;
      this._blob.internalValue = undefined;
      this._event.internalValue = undefined;
      this._image.internalValue = undefined;
      this._toolResponses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audio = value.audio;
      this._dtmf = value.dtmf;
      this._text = value.text;
      this._variables = value.variables;
      this._willContinue = value.willContinue;
      this._blob.internalValue = value.blob;
      this._event.internalValue = value.event;
      this._image.internalValue = value.image;
      this._toolResponses.internalValue = value.toolResponses;
    }
  }

  // audio - computed: false, optional: true, required: false
  private _audio?: string; 
  public get audio() {
    return this.getStringAttribute('audio');
  }
  public set audio(value: string) {
    this._audio = value;
  }
  public resetAudio() {
    this._audio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio;
  }

  // dtmf - computed: false, optional: true, required: false
  private _dtmf?: string; 
  public get dtmf() {
    return this.getStringAttribute('dtmf');
  }
  public set dtmf(value: string) {
    this._dtmf = value;
  }
  public resetDtmf() {
    this._dtmf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfInput() {
    return this._dtmf;
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

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // will_continue - computed: false, optional: true, required: false
  private _willContinue?: boolean | cdktf.IResolvable; 
  public get willContinue() {
    return this.getBooleanAttribute('will_continue');
  }
  public set willContinue(value: boolean | cdktf.IResolvable) {
    this._willContinue = value;
  }
  public resetWillContinue() {
    this._willContinue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get willContinueInput() {
    return this._willContinue;
  }

  // blob - computed: false, optional: true, required: false
  private _blob = new GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference(this, "blob");
  public get blob() {
    return this._blob;
  }
  public putBlob(value: GoogleCesEvaluationGoldenTurnsStepsUserInputBlob) {
    this._blob.internalValue = value;
  }
  public resetBlob() {
    this._blob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobInput() {
    return this._blob.internalValue;
  }

  // event - computed: false, optional: true, required: false
  private _event = new GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: GoogleCesEvaluationGoldenTurnsStepsUserInputEvent) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: GoogleCesEvaluationGoldenTurnsStepsUserInputImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // tool_responses - computed: false, optional: true, required: false
  private _toolResponses = new GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference(this, "tool_responses");
  public get toolResponses() {
    return this._toolResponses;
  }
  public putToolResponses(value: GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses) {
    this._toolResponses.internalValue = value;
  }
  public resetToolResponses() {
    this._toolResponses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolResponsesInput() {
    return this._toolResponses.internalValue;
  }
}
export interface GoogleCesEvaluationGoldenTurnsSteps {
  /**
  * agent_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#agent_transfer GoogleCesEvaluation#agent_transfer}
  */
  readonly agentTransfer?: GoogleCesEvaluationGoldenTurnsStepsAgentTransfer;
  /**
  * expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#expectation GoogleCesEvaluation#expectation}
  */
  readonly expectation?: GoogleCesEvaluationGoldenTurnsStepsExpectation;
  /**
  * user_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#user_input GoogleCesEvaluation#user_input}
  */
  readonly userInput?: GoogleCesEvaluationGoldenTurnsStepsUserInput;
}

export function googleCesEvaluationGoldenTurnsStepsToTerraform(struct?: GoogleCesEvaluationGoldenTurnsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_transfer: googleCesEvaluationGoldenTurnsStepsAgentTransferToTerraform(struct!.agentTransfer),
    expectation: googleCesEvaluationGoldenTurnsStepsExpectationToTerraform(struct!.expectation),
    user_input: googleCesEvaluationGoldenTurnsStepsUserInputToTerraform(struct!.userInput),
  }
}


export function googleCesEvaluationGoldenTurnsStepsToHclTerraform(struct?: GoogleCesEvaluationGoldenTurnsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_transfer: {
      value: googleCesEvaluationGoldenTurnsStepsAgentTransferToHclTerraform(struct!.agentTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsAgentTransferList",
    },
    expectation: {
      value: googleCesEvaluationGoldenTurnsStepsExpectationToHclTerraform(struct!.expectation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsExpectationList",
    },
    user_input: {
      value: googleCesEvaluationGoldenTurnsStepsUserInputToHclTerraform(struct!.userInput),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsUserInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesEvaluationGoldenTurnsSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentTransfer = this._agentTransfer?.internalValue;
    }
    if (this._expectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectation = this._expectation?.internalValue;
    }
    if (this._userInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInput = this._userInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurnsSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentTransfer.internalValue = undefined;
      this._expectation.internalValue = undefined;
      this._userInput.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentTransfer.internalValue = value.agentTransfer;
      this._expectation.internalValue = value.expectation;
      this._userInput.internalValue = value.userInput;
    }
  }

  // agent_transfer - computed: false, optional: true, required: false
  private _agentTransfer = new GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference(this, "agent_transfer");
  public get agentTransfer() {
    return this._agentTransfer;
  }
  public putAgentTransfer(value: GoogleCesEvaluationGoldenTurnsStepsAgentTransfer) {
    this._agentTransfer.internalValue = value;
  }
  public resetAgentTransfer() {
    this._agentTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTransferInput() {
    return this._agentTransfer.internalValue;
  }

  // expectation - computed: false, optional: true, required: false
  private _expectation = new GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference(this, "expectation");
  public get expectation() {
    return this._expectation;
  }
  public putExpectation(value: GoogleCesEvaluationGoldenTurnsStepsExpectation) {
    this._expectation.internalValue = value;
  }
  public resetExpectation() {
    this._expectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectationInput() {
    return this._expectation.internalValue;
  }

  // user_input - computed: false, optional: true, required: false
  private _userInput = new GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference(this, "user_input");
  public get userInput() {
    return this._userInput;
  }
  public putUserInput(value: GoogleCesEvaluationGoldenTurnsStepsUserInput) {
    this._userInput.internalValue = value;
  }
  public resetUserInput() {
    this._userInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInputInput() {
    return this._userInput.internalValue;
  }
}

export class GoogleCesEvaluationGoldenTurnsStepsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesEvaluationGoldenTurnsSteps[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesEvaluationGoldenTurnsStepsOutputReference {
    return new GoogleCesEvaluationGoldenTurnsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesEvaluationGoldenTurns {
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#steps GoogleCesEvaluation#steps}
  */
  readonly steps: GoogleCesEvaluationGoldenTurnsSteps[] | cdktf.IResolvable;
}

export function googleCesEvaluationGoldenTurnsToTerraform(struct?: GoogleCesEvaluationGoldenTurns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    steps: cdktf.listMapper(googleCesEvaluationGoldenTurnsStepsToTerraform, true)(struct!.steps),
  }
}


export function googleCesEvaluationGoldenTurnsToHclTerraform(struct?: GoogleCesEvaluationGoldenTurns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    steps: {
      value: cdktf.listMapperHcl(googleCesEvaluationGoldenTurnsStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenTurnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesEvaluationGoldenTurns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGoldenTurns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._steps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._steps.internalValue = value.steps;
    }
  }

  // root_span - computed: true, optional: false, required: false
  private _rootSpan = new GoogleCesEvaluationGoldenTurnsRootSpanList(this, "root_span", false);
  public get rootSpan() {
    return this._rootSpan;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new GoogleCesEvaluationGoldenTurnsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: GoogleCesEvaluationGoldenTurnsSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

export class GoogleCesEvaluationGoldenTurnsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesEvaluationGoldenTurns[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesEvaluationGoldenTurnsOutputReference {
    return new GoogleCesEvaluationGoldenTurnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesEvaluationGolden {
  /**
  * The evaluation expectations to evaluate the replayed conversation against. Format: projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluationExpectation}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#evaluation_expectations GoogleCesEvaluation#evaluation_expectations}
  */
  readonly evaluationExpectations?: string[];
  /**
  * turns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#turns GoogleCesEvaluation#turns}
  */
  readonly turns: GoogleCesEvaluationGoldenTurns[] | cdktf.IResolvable;
}

export function googleCesEvaluationGoldenToTerraform(struct?: GoogleCesEvaluationGoldenOutputReference | GoogleCesEvaluationGolden): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_expectations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluationExpectations),
    turns: cdktf.listMapper(googleCesEvaluationGoldenTurnsToTerraform, true)(struct!.turns),
  }
}


export function googleCesEvaluationGoldenToHclTerraform(struct?: GoogleCesEvaluationGoldenOutputReference | GoogleCesEvaluationGolden): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_expectations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluationExpectations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    turns: {
      value: cdktf.listMapperHcl(googleCesEvaluationGoldenTurnsToHclTerraform, true)(struct!.turns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationGoldenTurnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationGoldenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationGolden | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationExpectations !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationExpectations = this._evaluationExpectations;
    }
    if (this._turns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.turns = this._turns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationGolden | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationExpectations = undefined;
      this._turns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationExpectations = value.evaluationExpectations;
      this._turns.internalValue = value.turns;
    }
  }

  // evaluation_expectations - computed: false, optional: true, required: false
  private _evaluationExpectations?: string[]; 
  public get evaluationExpectations() {
    return this.getListAttribute('evaluation_expectations');
  }
  public set evaluationExpectations(value: string[]) {
    this._evaluationExpectations = value;
  }
  public resetEvaluationExpectations() {
    this._evaluationExpectations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationExpectationsInput() {
    return this._evaluationExpectations;
  }

  // turns - computed: false, optional: false, required: true
  private _turns = new GoogleCesEvaluationGoldenTurnsList(this, "turns", false);
  public get turns() {
    return this._turns;
  }
  public putTurns(value: GoogleCesEvaluationGoldenTurns[] | cdktf.IResolvable) {
    this._turns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get turnsInput() {
    return this._turns.internalValue;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransfer {
  /**
  * The agent to which the conversation is being transferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#target_agent GoogleCesEvaluation#target_agent}
  */
  readonly targetAgent: string;
}

export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransferToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransferOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_agent: cdktf.stringToTerraform(struct!.targetAgent),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransferToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransferOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_agent: {
      value: cdktf.stringToHclTerraform(struct!.targetAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAgent = this._targetAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetAgent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetAgent = value.targetAgent;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // target_agent - computed: false, optional: false, required: true
  private _targetAgent?: string; 
  public get targetAgent() {
    return this.getStringAttribute('target_agent');
  }
  public set targetAgent(value: string) {
    this._targetAgent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAgentInput() {
    return this._targetAgent;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlob {
  /**
  * Raw bytes of the blob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}
  */
  readonly data: string;
  /**
  * The IANA standard MIME type of the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}
  */
  readonly mimeType: string;
}

export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlobToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlobOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlobToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlobOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlob): any {
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

export class GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlob | undefined {
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

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlob | undefined) {
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
export interface GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImage {
  /**
  * Raw bytes of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}
  */
  readonly data: string;
  /**
  * The IANA standard MIME type of the source data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}
  */
  readonly mimeType: string;
}

export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImageToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImageOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImageToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImageOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImage): any {
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

export class GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImage | undefined {
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

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImage | undefined) {
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
export interface GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}
  */
  readonly toolset: string;
}

export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetToolToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetToolOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetToolToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetToolOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_id: {
      value: cdktf.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktf.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCall {
  /**
  * The input parameters and values for the tool in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#args GoogleCesEvaluation#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * The unique identifier of the tool call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetTool;
}

export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    id: cdktf.stringToTerraform(struct!.id),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCall | undefined {
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
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._id = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._id = value.id;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}
  */
  readonly toolset: string;
}

export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetToolToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetToolOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetToolToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetToolOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_id: {
      value: cdktf.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktf.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponse {
  /**
  * The matching ID of the tool call the response is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tool execution result in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}
  */
  readonly response?: { [key: string]: string };
  /**
  * The resource name of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetTool;
}

export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    response: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.response),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponse): any {
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
    response: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.response),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._response = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._response = value.response;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // response - computed: false, optional: true, required: false
  private _response?: { [key: string]: string }; 
  public get response() {
    return this.getStringMapAttribute('response');
  }
  public set response(value: { [key: string]: string }) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunks {
  /**
  * Text data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#text GoogleCesEvaluation#text}
  */
  readonly text?: string;
  /**
  * Updated variables in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#updated_variables GoogleCesEvaluation#updated_variables}
  */
  readonly updatedVariables?: { [key: string]: string };
  /**
  * agent_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#agent_transfer GoogleCesEvaluation#agent_transfer}
  */
  readonly agentTransfer?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransfer;
  /**
  * blob block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#blob GoogleCesEvaluation#blob}
  */
  readonly blob?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlob;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#image GoogleCesEvaluation#image}
  */
  readonly image?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImage;
  /**
  * tool_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_call GoogleCesEvaluation#tool_call}
  */
  readonly toolCall?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCall;
  /**
  * tool_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_response GoogleCesEvaluation#tool_response}
  */
  readonly toolResponse?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponse;
}

export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    updated_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.updatedVariables),
    agent_transfer: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransferToTerraform(struct!.agentTransfer),
    blob: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlobToTerraform(struct!.blob),
    image: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImageToTerraform(struct!.image),
    tool_call: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToTerraform(struct!.toolCall),
    tool_response: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToTerraform(struct!.toolResponse),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunks | cdktf.IResolvable): any {
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
    updated_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.updatedVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    agent_transfer: {
      value: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransferToHclTerraform(struct!.agentTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransferList",
    },
    blob: {
      value: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlobToHclTerraform(struct!.blob),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlobList",
    },
    image: {
      value: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImageList",
    },
    tool_call: {
      value: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallToHclTerraform(struct!.toolCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallList",
    },
    tool_response: {
      value: googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseToHclTerraform(struct!.toolResponse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._updatedVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedVariables = this._updatedVariables;
    }
    if (this._agentTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentTransfer = this._agentTransfer?.internalValue;
    }
    if (this._blob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blob = this._blob?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._toolCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolCall = this._toolCall?.internalValue;
    }
    if (this._toolResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolResponse = this._toolResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._updatedVariables = undefined;
      this._agentTransfer.internalValue = undefined;
      this._blob.internalValue = undefined;
      this._image.internalValue = undefined;
      this._toolCall.internalValue = undefined;
      this._toolResponse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._updatedVariables = value.updatedVariables;
      this._agentTransfer.internalValue = value.agentTransfer;
      this._blob.internalValue = value.blob;
      this._image.internalValue = value.image;
      this._toolCall.internalValue = value.toolCall;
      this._toolResponse.internalValue = value.toolResponse;
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

  // updated_variables - computed: false, optional: true, required: false
  private _updatedVariables?: { [key: string]: string }; 
  public get updatedVariables() {
    return this.getStringMapAttribute('updated_variables');
  }
  public set updatedVariables(value: { [key: string]: string }) {
    this._updatedVariables = value;
  }
  public resetUpdatedVariables() {
    this._updatedVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedVariablesInput() {
    return this._updatedVariables;
  }

  // agent_transfer - computed: false, optional: true, required: false
  private _agentTransfer = new GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransferOutputReference(this, "agent_transfer");
  public get agentTransfer() {
    return this._agentTransfer;
  }
  public putAgentTransfer(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksAgentTransfer) {
    this._agentTransfer.internalValue = value;
  }
  public resetAgentTransfer() {
    this._agentTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTransferInput() {
    return this._agentTransfer.internalValue;
  }

  // blob - computed: false, optional: true, required: false
  private _blob = new GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlobOutputReference(this, "blob");
  public get blob() {
    return this._blob;
  }
  public putBlob(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksBlob) {
    this._blob.internalValue = value;
  }
  public resetBlob() {
    this._blob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobInput() {
    return this._blob.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // tool_call - computed: false, optional: true, required: false
  private _toolCall = new GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCallOutputReference(this, "tool_call");
  public get toolCall() {
    return this._toolCall;
  }
  public putToolCall(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolCall) {
    this._toolCall.internalValue = value;
  }
  public resetToolCall() {
    this._toolCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolCallInput() {
    return this._toolCall.internalValue;
  }

  // tool_response - computed: false, optional: true, required: false
  private _toolResponse = new GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponseOutputReference(this, "tool_response");
  public get toolResponse() {
    return this._toolResponse;
  }
  public putToolResponse(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToolResponse) {
    this._toolResponse.internalValue = value;
  }
  public resetToolResponse() {
    this._toolResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolResponseInput() {
    return this._toolResponse.internalValue;
  }
}

export class GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksList extends cdktf.ComplexList {
  public internalValue? : GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunks[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksOutputReference {
    return new GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsAgentResponse {
  /**
  * The role within the conversation, e.g., user, agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#role GoogleCesEvaluation#role}
  */
  readonly role?: string;
  /**
  * chunks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#chunks GoogleCesEvaluation#chunks}
  */
  readonly chunks?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunks[] | cdktf.IResolvable;
}

export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    chunks: cdktf.listMapper(googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToTerraform, true)(struct!.chunks),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsAgentResponseToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsAgentResponse): any {
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
    chunks: {
      value: cdktf.listMapperHcl(googleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksToHclTerraform, true)(struct!.chunks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsAgentResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._chunks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunks = this._chunks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
      this._chunks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
      this._chunks.internalValue = value.chunks;
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

  // chunks - computed: false, optional: true, required: false
  private _chunks = new GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunksList(this, "chunks", false);
  public get chunks() {
    return this._chunks;
  }
  public putChunks(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseChunks[] | cdktf.IResolvable) {
    this._chunks.internalValue = value;
  }
  public resetChunks() {
    this._chunks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunksInput() {
    return this._chunks.internalValue;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetTool {
  /**
  * The tool ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}
  */
  readonly toolId?: string;
  /**
  * Required. The toolset name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}
  */
  readonly toolset?: string;
}

export function googleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetToolToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetToolOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetToolToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetToolOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_id: {
      value: cdktf.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktf.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: true, required: false
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  public resetToolset() {
    this._toolset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCall {
  /**
  * The input parameters and values for the tool in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#args GoogleCesEvaluation#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * Optional. The unique identifier of the tool call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetTool;
}

export function googleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    id: cdktf.stringToTerraform(struct!.id),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCall | undefined {
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
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._id = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._id = value.id;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetTool {
  /**
  * The tool ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}
  */
  readonly toolId?: string;
  /**
  * Required. The toolset name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}
  */
  readonly toolset?: string;
}

export function googleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetToolToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetToolOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetToolToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetToolOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_id: {
      value: cdktf.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktf.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: true, required: false
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  public resetToolset() {
    this._toolset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponse {
  /**
  * Optional. Matching ID of the tool call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tool execution result in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}
  */
  readonly response?: { [key: string]: string };
  /**
  * Name of the tool to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetTool;
}

export function googleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    response: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.response),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponse): any {
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
    response: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.response),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._response = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._response = value.response;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // response - computed: false, optional: true, required: false
  private _response?: { [key: string]: string }; 
  public get response() {
    return this.getStringMapAttribute('response');
  }
  public set response(value: { [key: string]: string }) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectationsToolExpectation {
  /**
  * expected_tool_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#expected_tool_call GoogleCesEvaluation#expected_tool_call}
  */
  readonly expectedToolCall?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCall;
  /**
  * mock_tool_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#mock_tool_response GoogleCesEvaluation#mock_tool_response}
  */
  readonly mockToolResponse?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponse;
}

export function googleCesEvaluationScenarioScenarioExpectationsToolExpectationToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsToolExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_tool_call: googleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToTerraform(struct!.expectedToolCall),
    mock_tool_response: googleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToTerraform(struct!.mockToolResponse),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsToolExpectationToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationOutputReference | GoogleCesEvaluationScenarioScenarioExpectationsToolExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_tool_call: {
      value: googleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallToHclTerraform(struct!.expectedToolCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallList",
    },
    mock_tool_response: {
      value: googleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseToHclTerraform(struct!.mockToolResponse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectationsToolExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedToolCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedToolCall = this._expectedToolCall?.internalValue;
    }
    if (this._mockToolResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mockToolResponse = this._mockToolResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedToolCall.internalValue = undefined;
      this._mockToolResponse.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedToolCall.internalValue = value.expectedToolCall;
      this._mockToolResponse.internalValue = value.mockToolResponse;
    }
  }

  // expected_tool_call - computed: false, optional: true, required: false
  private _expectedToolCall = new GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCallOutputReference(this, "expected_tool_call");
  public get expectedToolCall() {
    return this._expectedToolCall;
  }
  public putExpectedToolCall(value: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationExpectedToolCall) {
    this._expectedToolCall.internalValue = value;
  }
  public resetExpectedToolCall() {
    this._expectedToolCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedToolCallInput() {
    return this._expectedToolCall.internalValue;
  }

  // mock_tool_response - computed: false, optional: true, required: false
  private _mockToolResponse = new GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponseOutputReference(this, "mock_tool_response");
  public get mockToolResponse() {
    return this._mockToolResponse;
  }
  public putMockToolResponse(value: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationMockToolResponse) {
    this._mockToolResponse.internalValue = value;
  }
  public resetMockToolResponse() {
    this._mockToolResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockToolResponseInput() {
    return this._mockToolResponse.internalValue;
  }
}
export interface GoogleCesEvaluationScenarioScenarioExpectations {
  /**
  * agent_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#agent_response GoogleCesEvaluation#agent_response}
  */
  readonly agentResponse?: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponse;
  /**
  * tool_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#tool_expectation GoogleCesEvaluation#tool_expectation}
  */
  readonly toolExpectation?: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectation;
}

export function googleCesEvaluationScenarioScenarioExpectationsToTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_response: googleCesEvaluationScenarioScenarioExpectationsAgentResponseToTerraform(struct!.agentResponse),
    tool_expectation: googleCesEvaluationScenarioScenarioExpectationsToolExpectationToTerraform(struct!.toolExpectation),
  }
}


export function googleCesEvaluationScenarioScenarioExpectationsToHclTerraform(struct?: GoogleCesEvaluationScenarioScenarioExpectations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_response: {
      value: googleCesEvaluationScenarioScenarioExpectationsAgentResponseToHclTerraform(struct!.agentResponse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseList",
    },
    tool_expectation: {
      value: googleCesEvaluationScenarioScenarioExpectationsToolExpectationToHclTerraform(struct!.toolExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioScenarioExpectationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesEvaluationScenarioScenarioExpectations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentResponse = this._agentResponse?.internalValue;
    }
    if (this._toolExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolExpectation = this._toolExpectation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenarioScenarioExpectations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentResponse.internalValue = undefined;
      this._toolExpectation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentResponse.internalValue = value.agentResponse;
      this._toolExpectation.internalValue = value.toolExpectation;
    }
  }

  // agent_response - computed: false, optional: true, required: false
  private _agentResponse = new GoogleCesEvaluationScenarioScenarioExpectationsAgentResponseOutputReference(this, "agent_response");
  public get agentResponse() {
    return this._agentResponse;
  }
  public putAgentResponse(value: GoogleCesEvaluationScenarioScenarioExpectationsAgentResponse) {
    this._agentResponse.internalValue = value;
  }
  public resetAgentResponse() {
    this._agentResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentResponseInput() {
    return this._agentResponse.internalValue;
  }

  // tool_expectation - computed: false, optional: true, required: false
  private _toolExpectation = new GoogleCesEvaluationScenarioScenarioExpectationsToolExpectationOutputReference(this, "tool_expectation");
  public get toolExpectation() {
    return this._toolExpectation;
  }
  public putToolExpectation(value: GoogleCesEvaluationScenarioScenarioExpectationsToolExpectation) {
    this._toolExpectation.internalValue = value;
  }
  public resetToolExpectation() {
    this._toolExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolExpectationInput() {
    return this._toolExpectation.internalValue;
  }
}

export class GoogleCesEvaluationScenarioScenarioExpectationsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesEvaluationScenarioScenarioExpectations[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesEvaluationScenarioScenarioExpectationsOutputReference {
    return new GoogleCesEvaluationScenarioScenarioExpectationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesEvaluationScenarioUserFacts {
  /**
  * The name of the user fact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#name GoogleCesEvaluation#name}
  */
  readonly name: string;
  /**
  * The value of the user fact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#value GoogleCesEvaluation#value}
  */
  readonly value: string;
}

export function googleCesEvaluationScenarioUserFactsToTerraform(struct?: GoogleCesEvaluationScenarioUserFacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleCesEvaluationScenarioUserFactsToHclTerraform(struct?: GoogleCesEvaluationScenarioUserFacts | cdktf.IResolvable): any {
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

export class GoogleCesEvaluationScenarioUserFactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesEvaluationScenarioUserFacts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesEvaluationScenarioUserFacts | cdktf.IResolvable | undefined) {
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

export class GoogleCesEvaluationScenarioUserFactsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesEvaluationScenarioUserFacts[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesEvaluationScenarioUserFactsOutputReference {
    return new GoogleCesEvaluationScenarioUserFactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesEvaluationScenario {
  /**
  * Evaluation expectations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#evaluation_expectations GoogleCesEvaluation#evaluation_expectations}
  */
  readonly evaluationExpectations?: string[];
  /**
  * Max turns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#max_turns GoogleCesEvaluation#max_turns}
  */
  readonly maxTurns?: number;
  /**
  * Rubrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#rubrics GoogleCesEvaluation#rubrics}
  */
  readonly rubrics: string[];
  /**
  * The task to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#task GoogleCesEvaluation#task}
  */
  readonly task: string;
  /**
  * Task completion behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#task_completion_behavior GoogleCesEvaluation#task_completion_behavior}
  */
  readonly taskCompletionBehavior?: string;
  /**
  * User goal behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#user_goal_behavior GoogleCesEvaluation#user_goal_behavior}
  */
  readonly userGoalBehavior?: string;
  /**
  * Variables / Session Parameters as context for the session, keyed by variable names. Members of this struct will override any default values set by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#variable_overrides GoogleCesEvaluation#variable_overrides}
  */
  readonly variableOverrides?: { [key: string]: string };
  /**
  * scenario_expectations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#scenario_expectations GoogleCesEvaluation#scenario_expectations}
  */
  readonly scenarioExpectations: GoogleCesEvaluationScenarioScenarioExpectations[] | cdktf.IResolvable;
  /**
  * user_facts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#user_facts GoogleCesEvaluation#user_facts}
  */
  readonly userFacts?: GoogleCesEvaluationScenarioUserFacts[] | cdktf.IResolvable;
}

export function googleCesEvaluationScenarioToTerraform(struct?: GoogleCesEvaluationScenarioOutputReference | GoogleCesEvaluationScenario): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_expectations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evaluationExpectations),
    max_turns: cdktf.numberToTerraform(struct!.maxTurns),
    rubrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rubrics),
    task: cdktf.stringToTerraform(struct!.task),
    task_completion_behavior: cdktf.stringToTerraform(struct!.taskCompletionBehavior),
    user_goal_behavior: cdktf.stringToTerraform(struct!.userGoalBehavior),
    variable_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variableOverrides),
    scenario_expectations: cdktf.listMapper(googleCesEvaluationScenarioScenarioExpectationsToTerraform, true)(struct!.scenarioExpectations),
    user_facts: cdktf.listMapper(googleCesEvaluationScenarioUserFactsToTerraform, true)(struct!.userFacts),
  }
}


export function googleCesEvaluationScenarioToHclTerraform(struct?: GoogleCesEvaluationScenarioOutputReference | GoogleCesEvaluationScenario): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_expectations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evaluationExpectations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_turns: {
      value: cdktf.numberToHclTerraform(struct!.maxTurns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rubrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rubrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    task: {
      value: cdktf.stringToHclTerraform(struct!.task),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_completion_behavior: {
      value: cdktf.stringToHclTerraform(struct!.taskCompletionBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_goal_behavior: {
      value: cdktf.stringToHclTerraform(struct!.userGoalBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variableOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scenario_expectations: {
      value: cdktf.listMapperHcl(googleCesEvaluationScenarioScenarioExpectationsToHclTerraform, true)(struct!.scenarioExpectations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioScenarioExpectationsList",
    },
    user_facts: {
      value: cdktf.listMapperHcl(googleCesEvaluationScenarioUserFactsToHclTerraform, true)(struct!.userFacts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesEvaluationScenarioUserFactsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesEvaluationScenarioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesEvaluationScenario | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationExpectations !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationExpectations = this._evaluationExpectations;
    }
    if (this._maxTurns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTurns = this._maxTurns;
    }
    if (this._rubrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.rubrics = this._rubrics;
    }
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
    if (this._taskCompletionBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCompletionBehavior = this._taskCompletionBehavior;
    }
    if (this._userGoalBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGoalBehavior = this._userGoalBehavior;
    }
    if (this._variableOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableOverrides = this._variableOverrides;
    }
    if (this._scenarioExpectations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scenarioExpectations = this._scenarioExpectations?.internalValue;
    }
    if (this._userFacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFacts = this._userFacts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesEvaluationScenario | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationExpectations = undefined;
      this._maxTurns = undefined;
      this._rubrics = undefined;
      this._task = undefined;
      this._taskCompletionBehavior = undefined;
      this._userGoalBehavior = undefined;
      this._variableOverrides = undefined;
      this._scenarioExpectations.internalValue = undefined;
      this._userFacts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationExpectations = value.evaluationExpectations;
      this._maxTurns = value.maxTurns;
      this._rubrics = value.rubrics;
      this._task = value.task;
      this._taskCompletionBehavior = value.taskCompletionBehavior;
      this._userGoalBehavior = value.userGoalBehavior;
      this._variableOverrides = value.variableOverrides;
      this._scenarioExpectations.internalValue = value.scenarioExpectations;
      this._userFacts.internalValue = value.userFacts;
    }
  }

  // evaluation_expectations - computed: false, optional: true, required: false
  private _evaluationExpectations?: string[]; 
  public get evaluationExpectations() {
    return this.getListAttribute('evaluation_expectations');
  }
  public set evaluationExpectations(value: string[]) {
    this._evaluationExpectations = value;
  }
  public resetEvaluationExpectations() {
    this._evaluationExpectations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationExpectationsInput() {
    return this._evaluationExpectations;
  }

  // max_turns - computed: false, optional: true, required: false
  private _maxTurns?: number; 
  public get maxTurns() {
    return this.getNumberAttribute('max_turns');
  }
  public set maxTurns(value: number) {
    this._maxTurns = value;
  }
  public resetMaxTurns() {
    this._maxTurns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTurnsInput() {
    return this._maxTurns;
  }

  // rubrics - computed: false, optional: false, required: true
  private _rubrics?: string[]; 
  public get rubrics() {
    return this.getListAttribute('rubrics');
  }
  public set rubrics(value: string[]) {
    this._rubrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rubricsInput() {
    return this._rubrics;
  }

  // task - computed: false, optional: false, required: true
  private _task?: string; 
  public get task() {
    return this.getStringAttribute('task');
  }
  public set task(value: string) {
    this._task = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task;
  }

  // task_completion_behavior - computed: false, optional: true, required: false
  private _taskCompletionBehavior?: string; 
  public get taskCompletionBehavior() {
    return this.getStringAttribute('task_completion_behavior');
  }
  public set taskCompletionBehavior(value: string) {
    this._taskCompletionBehavior = value;
  }
  public resetTaskCompletionBehavior() {
    this._taskCompletionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCompletionBehaviorInput() {
    return this._taskCompletionBehavior;
  }

  // user_goal_behavior - computed: false, optional: true, required: false
  private _userGoalBehavior?: string; 
  public get userGoalBehavior() {
    return this.getStringAttribute('user_goal_behavior');
  }
  public set userGoalBehavior(value: string) {
    this._userGoalBehavior = value;
  }
  public resetUserGoalBehavior() {
    this._userGoalBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGoalBehaviorInput() {
    return this._userGoalBehavior;
  }

  // variable_overrides - computed: false, optional: true, required: false
  private _variableOverrides?: { [key: string]: string }; 
  public get variableOverrides() {
    return this.getStringMapAttribute('variable_overrides');
  }
  public set variableOverrides(value: { [key: string]: string }) {
    this._variableOverrides = value;
  }
  public resetVariableOverrides() {
    this._variableOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableOverridesInput() {
    return this._variableOverrides;
  }

  // scenario_expectations - computed: false, optional: false, required: true
  private _scenarioExpectations = new GoogleCesEvaluationScenarioScenarioExpectationsList(this, "scenario_expectations", false);
  public get scenarioExpectations() {
    return this._scenarioExpectations;
  }
  public putScenarioExpectations(value: GoogleCesEvaluationScenarioScenarioExpectations[] | cdktf.IResolvable) {
    this._scenarioExpectations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scenarioExpectationsInput() {
    return this._scenarioExpectations.internalValue;
  }

  // user_facts - computed: false, optional: true, required: false
  private _userFacts = new GoogleCesEvaluationScenarioUserFactsList(this, "user_facts", false);
  public get userFacts() {
    return this._userFacts;
  }
  public putUserFacts(value: GoogleCesEvaluationScenarioUserFacts[] | cdktf.IResolvable) {
    this._userFacts.internalValue = value;
  }
  public resetUserFacts() {
    this._userFacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFactsInput() {
    return this._userFacts.internalValue;
  }
}
export interface GoogleCesEvaluationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#create GoogleCesEvaluation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#delete GoogleCesEvaluation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#update GoogleCesEvaluation#update}
  */
  readonly update?: string;
}

export function googleCesEvaluationTimeoutsToTerraform(struct?: GoogleCesEvaluationTimeouts | cdktf.IResolvable): any {
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


export function googleCesEvaluationTimeoutsToHclTerraform(struct?: GoogleCesEvaluationTimeouts | cdktf.IResolvable): any {
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

export class GoogleCesEvaluationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCesEvaluationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesEvaluationTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation google_ces_evaluation}
*/
export class GoogleCesEvaluation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_evaluation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleCesEvaluation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCesEvaluation to import
  * @param importFromId The id of the existing GoogleCesEvaluation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCesEvaluation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_evaluation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_evaluation google_ces_evaluation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCesEvaluationConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCesEvaluationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_evaluation',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.3.0',
        providerVersionConstraint: '~> 8.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._app = config.app;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._evaluationId = config.evaluationId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._tags = config.tags;
    this._golden.internalValue = config.golden;
    this._scenario.internalValue = config.scenario;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // evaluation_datasets - computed: true, optional: false, required: false
  public get evaluationDatasets() {
    return this.getListAttribute('evaluation_datasets');
  }

  // evaluation_id - computed: false, optional: false, required: true
  private _evaluationId?: string; 
  public get evaluationId() {
    return this.getStringAttribute('evaluation_id');
  }
  public set evaluationId(value: string) {
    this._evaluationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIdInput() {
    return this._evaluationId;
  }

  // evaluation_runs - computed: true, optional: false, required: false
  public get evaluationRuns() {
    return this.getListAttribute('evaluation_runs');
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // golden - computed: false, optional: true, required: false
  private _golden = new GoogleCesEvaluationGoldenOutputReference(this, "golden");
  public get golden() {
    return this._golden;
  }
  public putGolden(value: GoogleCesEvaluationGolden) {
    this._golden.internalValue = value;
  }
  public resetGolden() {
    this._golden.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goldenInput() {
    return this._golden.internalValue;
  }

  // scenario - computed: false, optional: true, required: false
  private _scenario = new GoogleCesEvaluationScenarioOutputReference(this, "scenario");
  public get scenario() {
    return this._scenario;
  }
  public putScenario(value: GoogleCesEvaluationScenario) {
    this._scenario.internalValue = value;
  }
  public resetScenario() {
    this._scenario.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scenarioInput() {
    return this._scenario.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCesEvaluationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCesEvaluationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktf.stringToTerraform(this._app),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      evaluation_id: cdktf.stringToTerraform(this._evaluationId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      golden: googleCesEvaluationGoldenToTerraform(this._golden.internalValue),
      scenario: googleCesEvaluationScenarioToTerraform(this._scenario.internalValue),
      timeouts: googleCesEvaluationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktf.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      evaluation_id: {
        value: cdktf.stringToHclTerraform(this._evaluationId),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      golden: {
        value: googleCesEvaluationGoldenToHclTerraform(this._golden.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesEvaluationGoldenList",
      },
      scenario: {
        value: googleCesEvaluationScenarioToHclTerraform(this._scenario.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesEvaluationScenarioList",
      },
      timeouts: {
        value: googleCesEvaluationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCesEvaluationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
