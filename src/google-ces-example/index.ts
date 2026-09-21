// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCesExampleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource ID segment making up resource 'name', defining the app the example belongs to. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#app GoogleCesExample#app}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#deletion_policy GoogleCesExample#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable description of the example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#description GoogleCesExample#description}
  */
  readonly description?: string;
  /**
  * Display name of the example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#display_name GoogleCesExample#display_name}
  */
  readonly displayName: string;
  /**
  * The agent that initially handles the conversation. If not specified, the
  * example represents a conversation that is handled by the root agent.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#entry_agent GoogleCesExample#entry_agent}
  */
  readonly entryAgent?: string;
  /**
  * The ID to use for the example, which will become the final component of
  * the example's resource name. In Terraform, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#example_id GoogleCesExample#example_id}
  */
  readonly exampleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#id GoogleCesExample#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name', defining what region the parent app is in. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#location GoogleCesExample#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#project GoogleCesExample#project}
  */
  readonly project?: string;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#messages GoogleCesExample#messages}
  */
  readonly messages?: GoogleCesExampleMessages[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#timeouts GoogleCesExample#timeouts}
  */
  readonly timeouts?: GoogleCesExampleTimeouts;
}
export interface GoogleCesExampleMessagesChunksAgentTransfer {
  /**
  * The agent to which the conversation is being transferred. The agent will
  * handle the conversation from this point forward.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#target_agent GoogleCesExample#target_agent}
  */
  readonly targetAgent: string;
}

export function googleCesExampleMessagesChunksAgentTransferToTerraform(struct?: GoogleCesExampleMessagesChunksAgentTransferOutputReference | GoogleCesExampleMessagesChunksAgentTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_agent: cdktf.stringToTerraform(struct!.targetAgent),
  }
}


export function googleCesExampleMessagesChunksAgentTransferToHclTerraform(struct?: GoogleCesExampleMessagesChunksAgentTransferOutputReference | GoogleCesExampleMessagesChunksAgentTransfer): any {
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

export class GoogleCesExampleMessagesChunksAgentTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesExampleMessagesChunksAgentTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAgent = this._targetAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesExampleMessagesChunksAgentTransfer | undefined) {
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
export interface GoogleCesExampleMessagesChunksImage {
  /**
  * Raw bytes of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#data GoogleCesExample#data}
  */
  readonly data: string;
  /**
  * The IANA standard MIME type of the source data.
  * Supported image types includes:
  * * image/png
  * * image/jpeg
  * * image/webp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#mime_type GoogleCesExample#mime_type}
  */
  readonly mimeType: string;
}

export function googleCesExampleMessagesChunksImageToTerraform(struct?: GoogleCesExampleMessagesChunksImageOutputReference | GoogleCesExampleMessagesChunksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
  }
}


export function googleCesExampleMessagesChunksImageToHclTerraform(struct?: GoogleCesExampleMessagesChunksImageOutputReference | GoogleCesExampleMessagesChunksImage): any {
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

export class GoogleCesExampleMessagesChunksImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesExampleMessagesChunksImage | undefined {
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

  public set internalValue(value: GoogleCesExampleMessagesChunksImage | undefined) {
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
export interface GoogleCesExampleMessagesChunksToolCallToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset from which this tool is derived.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}
  */
  readonly toolset: string;
}

export function googleCesExampleMessagesChunksToolCallToolsetToolToTerraform(struct?: GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference | GoogleCesExampleMessagesChunksToolCallToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesExampleMessagesChunksToolCallToolsetToolToHclTerraform(struct?: GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference | GoogleCesExampleMessagesChunksToolCallToolsetTool): any {
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

export class GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesExampleMessagesChunksToolCallToolsetTool | undefined {
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

  public set internalValue(value: GoogleCesExampleMessagesChunksToolCallToolsetTool | undefined) {
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
export interface GoogleCesExampleMessagesChunksToolCall {
  /**
  * The input parameters and values for the tool in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#args GoogleCesExample#args}
  */
  readonly args?: string;
  /**
  * The unique identifier of the tool call. If populated, the client should
  * return the execution result with the matching ID in
  * ToolResponse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#id GoogleCesExample#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the tool to execute.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesExampleMessagesChunksToolCallToolsetTool;
}

export function googleCesExampleMessagesChunksToolCallToTerraform(struct?: GoogleCesExampleMessagesChunksToolCallOutputReference | GoogleCesExampleMessagesChunksToolCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    id: cdktf.stringToTerraform(struct!.id),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesExampleMessagesChunksToolCallToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesExampleMessagesChunksToolCallToHclTerraform(struct?: GoogleCesExampleMessagesChunksToolCallOutputReference | GoogleCesExampleMessagesChunksToolCall): any {
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
    tool: {
      value: cdktf.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: googleCesExampleMessagesChunksToolCallToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesExampleMessagesChunksToolCallToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesExampleMessagesChunksToolCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesExampleMessagesChunksToolCall | undefined {
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

  public set internalValue(value: GoogleCesExampleMessagesChunksToolCall | undefined) {
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
  private _toolsetTool = new GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesExampleMessagesChunksToolCallToolsetTool) {
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
export interface GoogleCesExampleMessagesChunksToolResponseToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset from which this tool is derived.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}
  */
  readonly toolset: string;
}

export function googleCesExampleMessagesChunksToolResponseToolsetToolToTerraform(struct?: GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference | GoogleCesExampleMessagesChunksToolResponseToolsetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_id: cdktf.stringToTerraform(struct!.toolId),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesExampleMessagesChunksToolResponseToolsetToolToHclTerraform(struct?: GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference | GoogleCesExampleMessagesChunksToolResponseToolsetTool): any {
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

export class GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesExampleMessagesChunksToolResponseToolsetTool | undefined {
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

  public set internalValue(value: GoogleCesExampleMessagesChunksToolResponseToolsetTool | undefined) {
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
export interface GoogleCesExampleMessagesChunksToolResponse {
  /**
  * The matching ID of the tool call the response is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#id GoogleCesExample#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tool execution result in JSON object format.
  * Use "output" key to specify tool response and "error" key to specify
  * error details (if any). If "output" and "error" keys are not specified,
  * then whole "response" is treated as tool execution result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#response GoogleCesExample#response}
  */
  readonly response: string;
  /**
  * The name of the tool to execute.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}
  */
  readonly toolsetTool?: GoogleCesExampleMessagesChunksToolResponseToolsetTool;
}

export function googleCesExampleMessagesChunksToolResponseToTerraform(struct?: GoogleCesExampleMessagesChunksToolResponseOutputReference | GoogleCesExampleMessagesChunksToolResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    response: cdktf.stringToTerraform(struct!.response),
    tool: cdktf.stringToTerraform(struct!.tool),
    toolset_tool: googleCesExampleMessagesChunksToolResponseToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function googleCesExampleMessagesChunksToolResponseToHclTerraform(struct?: GoogleCesExampleMessagesChunksToolResponseOutputReference | GoogleCesExampleMessagesChunksToolResponse): any {
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
      value: cdktf.stringToHclTerraform(struct!.response),
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
      value: googleCesExampleMessagesChunksToolResponseToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesExampleMessagesChunksToolResponseToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesExampleMessagesChunksToolResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesExampleMessagesChunksToolResponse | undefined {
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

  public set internalValue(value: GoogleCesExampleMessagesChunksToolResponse | undefined) {
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

  // response - computed: false, optional: false, required: true
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
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
  private _toolsetTool = new GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: GoogleCesExampleMessagesChunksToolResponseToolsetTool) {
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
export interface GoogleCesExampleMessagesChunks {
  /**
  * Text data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#text GoogleCesExample#text}
  */
  readonly text?: string;
  /**
  * A struct represents variables that were updated in the conversation,
  * keyed by variable names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#updated_variables GoogleCesExample#updated_variables}
  */
  readonly updatedVariables?: string;
  /**
  * agent_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#agent_transfer GoogleCesExample#agent_transfer}
  */
  readonly agentTransfer?: GoogleCesExampleMessagesChunksAgentTransfer;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#image GoogleCesExample#image}
  */
  readonly image?: GoogleCesExampleMessagesChunksImage;
  /**
  * tool_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#tool_call GoogleCesExample#tool_call}
  */
  readonly toolCall?: GoogleCesExampleMessagesChunksToolCall;
  /**
  * tool_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#tool_response GoogleCesExample#tool_response}
  */
  readonly toolResponse?: GoogleCesExampleMessagesChunksToolResponse;
}

export function googleCesExampleMessagesChunksToTerraform(struct?: GoogleCesExampleMessagesChunks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    updated_variables: cdktf.stringToTerraform(struct!.updatedVariables),
    agent_transfer: googleCesExampleMessagesChunksAgentTransferToTerraform(struct!.agentTransfer),
    image: googleCesExampleMessagesChunksImageToTerraform(struct!.image),
    tool_call: googleCesExampleMessagesChunksToolCallToTerraform(struct!.toolCall),
    tool_response: googleCesExampleMessagesChunksToolResponseToTerraform(struct!.toolResponse),
  }
}


export function googleCesExampleMessagesChunksToHclTerraform(struct?: GoogleCesExampleMessagesChunks | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.updatedVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_transfer: {
      value: googleCesExampleMessagesChunksAgentTransferToHclTerraform(struct!.agentTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesExampleMessagesChunksAgentTransferList",
    },
    image: {
      value: googleCesExampleMessagesChunksImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesExampleMessagesChunksImageList",
    },
    tool_call: {
      value: googleCesExampleMessagesChunksToolCallToHclTerraform(struct!.toolCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesExampleMessagesChunksToolCallList",
    },
    tool_response: {
      value: googleCesExampleMessagesChunksToolResponseToHclTerraform(struct!.toolResponse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesExampleMessagesChunksToolResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesExampleMessagesChunksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesExampleMessagesChunks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesExampleMessagesChunks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._updatedVariables = undefined;
      this._agentTransfer.internalValue = undefined;
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
  private _updatedVariables?: string; 
  public get updatedVariables() {
    return this.getStringAttribute('updated_variables');
  }
  public set updatedVariables(value: string) {
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
  private _agentTransfer = new GoogleCesExampleMessagesChunksAgentTransferOutputReference(this, "agent_transfer");
  public get agentTransfer() {
    return this._agentTransfer;
  }
  public putAgentTransfer(value: GoogleCesExampleMessagesChunksAgentTransfer) {
    this._agentTransfer.internalValue = value;
  }
  public resetAgentTransfer() {
    this._agentTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTransferInput() {
    return this._agentTransfer.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new GoogleCesExampleMessagesChunksImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: GoogleCesExampleMessagesChunksImage) {
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
  private _toolCall = new GoogleCesExampleMessagesChunksToolCallOutputReference(this, "tool_call");
  public get toolCall() {
    return this._toolCall;
  }
  public putToolCall(value: GoogleCesExampleMessagesChunksToolCall) {
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
  private _toolResponse = new GoogleCesExampleMessagesChunksToolResponseOutputReference(this, "tool_response");
  public get toolResponse() {
    return this._toolResponse;
  }
  public putToolResponse(value: GoogleCesExampleMessagesChunksToolResponse) {
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

export class GoogleCesExampleMessagesChunksList extends cdktf.ComplexList {
  public internalValue? : GoogleCesExampleMessagesChunks[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesExampleMessagesChunksOutputReference {
    return new GoogleCesExampleMessagesChunksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesExampleMessages {
  /**
  * The role within the conversation, e.g., user, agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#role GoogleCesExample#role}
  */
  readonly role?: string;
  /**
  * chunks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#chunks GoogleCesExample#chunks}
  */
  readonly chunks?: GoogleCesExampleMessagesChunks[] | cdktf.IResolvable;
}

export function googleCesExampleMessagesToTerraform(struct?: GoogleCesExampleMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    chunks: cdktf.listMapper(googleCesExampleMessagesChunksToTerraform, true)(struct!.chunks),
  }
}


export function googleCesExampleMessagesToHclTerraform(struct?: GoogleCesExampleMessages | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(googleCesExampleMessagesChunksToHclTerraform, true)(struct!.chunks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesExampleMessagesChunksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesExampleMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesExampleMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GoogleCesExampleMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._chunks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _chunks = new GoogleCesExampleMessagesChunksList(this, "chunks", false);
  public get chunks() {
    return this._chunks;
  }
  public putChunks(value: GoogleCesExampleMessagesChunks[] | cdktf.IResolvable) {
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

export class GoogleCesExampleMessagesList extends cdktf.ComplexList {
  public internalValue? : GoogleCesExampleMessages[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesExampleMessagesOutputReference {
    return new GoogleCesExampleMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesExampleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#create GoogleCesExample#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#update GoogleCesExample#update}
  */
  readonly update?: string;
}

export function googleCesExampleTimeoutsToTerraform(struct?: GoogleCesExampleTimeouts | cdktf.IResolvable): any {
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


export function googleCesExampleTimeoutsToHclTerraform(struct?: GoogleCesExampleTimeouts | cdktf.IResolvable): any {
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

export class GoogleCesExampleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCesExampleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesExampleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example google_ces_example}
*/
export class GoogleCesExample extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_example";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleCesExample resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCesExample to import
  * @param importFromId The id of the existing GoogleCesExample that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCesExample to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_example", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_example google_ces_example} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCesExampleConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCesExampleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_example',
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
    this._entryAgent = config.entryAgent;
    this._exampleId = config.exampleId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._messages.internalValue = config.messages;
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

  // entry_agent - computed: false, optional: true, required: false
  private _entryAgent?: string; 
  public get entryAgent() {
    return this.getStringAttribute('entry_agent');
  }
  public set entryAgent(value: string) {
    this._entryAgent = value;
  }
  public resetEntryAgent() {
    this._entryAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAgentInput() {
    return this._entryAgent;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // example_id - computed: false, optional: false, required: true
  private _exampleId?: string; 
  public get exampleId() {
    return this.getStringAttribute('example_id');
  }
  public set exampleId(value: string) {
    this._exampleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleIdInput() {
    return this._exampleId;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // messages - computed: false, optional: true, required: false
  private _messages = new GoogleCesExampleMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: GoogleCesExampleMessages[] | cdktf.IResolvable) {
    this._messages.internalValue = value;
  }
  public resetMessages() {
    this._messages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCesExampleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCesExampleTimeouts) {
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
      entry_agent: cdktf.stringToTerraform(this._entryAgent),
      example_id: cdktf.stringToTerraform(this._exampleId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      messages: cdktf.listMapper(googleCesExampleMessagesToTerraform, true)(this._messages.internalValue),
      timeouts: googleCesExampleTimeoutsToTerraform(this._timeouts.internalValue),
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
      entry_agent: {
        value: cdktf.stringToHclTerraform(this._entryAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      example_id: {
        value: cdktf.stringToHclTerraform(this._exampleId),
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
      messages: {
        value: cdktf.listMapperHcl(googleCesExampleMessagesToHclTerraform, true)(this._messages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesExampleMessagesList",
      },
      timeouts: {
        value: googleCesExampleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCesExampleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
