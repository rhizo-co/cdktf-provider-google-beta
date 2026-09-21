// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCesAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID to use for the agent, which will become the final component of
  * the agent's resource name. If not provided, a unique ID will be
  * automatically assigned for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#agent_id GoogleCesAgent#agent_id}
  */
  readonly agentId?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#app GoogleCesAgent#app}
  */
  readonly app: string;
  /**
  * List of child agents in the agent tree.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#child_agents GoogleCesAgent#child_agents}
  */
  readonly childAgents?: string[];
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#deletion_policy GoogleCesAgent#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable description of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}
  */
  readonly description?: string;
  /**
  * Display name of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#display_name GoogleCesAgent#display_name}
  */
  readonly displayName: string;
  /**
  * List of guardrails for the agent.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#guardrails GoogleCesAgent#guardrails}
  */
  readonly guardrails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instructions for the LLM model to guide the agent's behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#instruction GoogleCesAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#location GoogleCesAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}
  */
  readonly project?: string;
  /**
  * List of available tools for the agent.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#tools GoogleCesAgent#tools}
  */
  readonly tools?: string[];
  /**
  * after_agent_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#after_agent_callbacks GoogleCesAgent#after_agent_callbacks}
  */
  readonly afterAgentCallbacks?: GoogleCesAgentAfterAgentCallbacks[] | cdktf.IResolvable;
  /**
  * after_model_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#after_model_callbacks GoogleCesAgent#after_model_callbacks}
  */
  readonly afterModelCallbacks?: GoogleCesAgentAfterModelCallbacks[] | cdktf.IResolvable;
  /**
  * after_tool_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#after_tool_callbacks GoogleCesAgent#after_tool_callbacks}
  */
  readonly afterToolCallbacks?: GoogleCesAgentAfterToolCallbacks[] | cdktf.IResolvable;
  /**
  * before_agent_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#before_agent_callbacks GoogleCesAgent#before_agent_callbacks}
  */
  readonly beforeAgentCallbacks?: GoogleCesAgentBeforeAgentCallbacks[] | cdktf.IResolvable;
  /**
  * before_model_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#before_model_callbacks GoogleCesAgent#before_model_callbacks}
  */
  readonly beforeModelCallbacks?: GoogleCesAgentBeforeModelCallbacks[] | cdktf.IResolvable;
  /**
  * before_tool_callbacks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#before_tool_callbacks GoogleCesAgent#before_tool_callbacks}
  */
  readonly beforeToolCallbacks?: GoogleCesAgentBeforeToolCallbacks[] | cdktf.IResolvable;
  /**
  * llm_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#llm_agent GoogleCesAgent#llm_agent}
  */
  readonly llmAgent?: GoogleCesAgentLlmAgent;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#model_settings GoogleCesAgent#model_settings}
  */
  readonly modelSettings?: GoogleCesAgentModelSettings;
  /**
  * remote_dialogflow_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#remote_dialogflow_agent GoogleCesAgent#remote_dialogflow_agent}
  */
  readonly remoteDialogflowAgent?: GoogleCesAgentRemoteDialogflowAgent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#timeouts GoogleCesAgent#timeouts}
  */
  readonly timeouts?: GoogleCesAgentTimeouts;
  /**
  * toolsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#toolsets GoogleCesAgent#toolsets}
  */
  readonly toolsets?: GoogleCesAgentToolsets[] | cdktf.IResolvable;
  /**
  * transfer_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#transfer_rules GoogleCesAgent#transfer_rules}
  */
  readonly transferRules?: GoogleCesAgentTransferRules[] | cdktf.IResolvable;
}
export interface GoogleCesAgentAfterAgentCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesAgentAfterAgentCallbacksToTerraform(struct?: GoogleCesAgentAfterAgentCallbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
  }
}


export function googleCesAgentAfterAgentCallbacksToHclTerraform(struct?: GoogleCesAgentAfterAgentCallbacks | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_code: {
      value: cdktf.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentAfterAgentCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAgentAfterAgentCallbacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentAfterAgentCallbacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disabled = value.disabled;
      this._pythonCode = value.pythonCode;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}

export class GoogleCesAgentAfterAgentCallbacksList extends cdktf.ComplexList {
  public internalValue? : GoogleCesAgentAfterAgentCallbacks[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesAgentAfterAgentCallbacksOutputReference {
    return new GoogleCesAgentAfterAgentCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAgentAfterModelCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesAgentAfterModelCallbacksToTerraform(struct?: GoogleCesAgentAfterModelCallbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
  }
}


export function googleCesAgentAfterModelCallbacksToHclTerraform(struct?: GoogleCesAgentAfterModelCallbacks | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_code: {
      value: cdktf.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentAfterModelCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAgentAfterModelCallbacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentAfterModelCallbacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disabled = value.disabled;
      this._pythonCode = value.pythonCode;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}

export class GoogleCesAgentAfterModelCallbacksList extends cdktf.ComplexList {
  public internalValue? : GoogleCesAgentAfterModelCallbacks[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesAgentAfterModelCallbacksOutputReference {
    return new GoogleCesAgentAfterModelCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAgentAfterToolCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesAgentAfterToolCallbacksToTerraform(struct?: GoogleCesAgentAfterToolCallbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
  }
}


export function googleCesAgentAfterToolCallbacksToHclTerraform(struct?: GoogleCesAgentAfterToolCallbacks | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_code: {
      value: cdktf.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentAfterToolCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAgentAfterToolCallbacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentAfterToolCallbacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disabled = value.disabled;
      this._pythonCode = value.pythonCode;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}

export class GoogleCesAgentAfterToolCallbacksList extends cdktf.ComplexList {
  public internalValue? : GoogleCesAgentAfterToolCallbacks[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesAgentAfterToolCallbacksOutputReference {
    return new GoogleCesAgentAfterToolCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAgentBeforeAgentCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesAgentBeforeAgentCallbacksToTerraform(struct?: GoogleCesAgentBeforeAgentCallbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
  }
}


export function googleCesAgentBeforeAgentCallbacksToHclTerraform(struct?: GoogleCesAgentBeforeAgentCallbacks | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_code: {
      value: cdktf.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentBeforeAgentCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAgentBeforeAgentCallbacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentBeforeAgentCallbacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disabled = value.disabled;
      this._pythonCode = value.pythonCode;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}

export class GoogleCesAgentBeforeAgentCallbacksList extends cdktf.ComplexList {
  public internalValue? : GoogleCesAgentBeforeAgentCallbacks[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesAgentBeforeAgentCallbacksOutputReference {
    return new GoogleCesAgentBeforeAgentCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAgentBeforeModelCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesAgentBeforeModelCallbacksToTerraform(struct?: GoogleCesAgentBeforeModelCallbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
  }
}


export function googleCesAgentBeforeModelCallbacksToHclTerraform(struct?: GoogleCesAgentBeforeModelCallbacks | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_code: {
      value: cdktf.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentBeforeModelCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAgentBeforeModelCallbacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentBeforeModelCallbacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disabled = value.disabled;
      this._pythonCode = value.pythonCode;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}

export class GoogleCesAgentBeforeModelCallbacksList extends cdktf.ComplexList {
  public internalValue? : GoogleCesAgentBeforeModelCallbacks[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesAgentBeforeModelCallbacksOutputReference {
    return new GoogleCesAgentBeforeModelCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAgentBeforeToolCallbacks {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesAgentBeforeToolCallbacksToTerraform(struct?: GoogleCesAgentBeforeToolCallbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
  }
}


export function googleCesAgentBeforeToolCallbacksToHclTerraform(struct?: GoogleCesAgentBeforeToolCallbacks | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_code: {
      value: cdktf.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentBeforeToolCallbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAgentBeforeToolCallbacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentBeforeToolCallbacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disabled = value.disabled;
      this._pythonCode = value.pythonCode;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}

export class GoogleCesAgentBeforeToolCallbacksList extends cdktf.ComplexList {
  public internalValue? : GoogleCesAgentBeforeToolCallbacks[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesAgentBeforeToolCallbacksOutputReference {
    return new GoogleCesAgentBeforeToolCallbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAgentLlmAgent {
}

export function googleCesAgentLlmAgentToTerraform(struct?: GoogleCesAgentLlmAgentOutputReference | GoogleCesAgentLlmAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAgentLlmAgentToHclTerraform(struct?: GoogleCesAgentLlmAgentOutputReference | GoogleCesAgentLlmAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAgentLlmAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesAgentLlmAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentLlmAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleCesAgentModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#model GoogleCesAgent#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#temperature GoogleCesAgent#temperature}
  */
  readonly temperature?: number;
}

export function googleCesAgentModelSettingsToTerraform(struct?: GoogleCesAgentModelSettingsOutputReference | GoogleCesAgentModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    temperature: cdktf.numberToTerraform(struct!.temperature),
  }
}


export function googleCesAgentModelSettingsToHclTerraform(struct?: GoogleCesAgentModelSettingsOutputReference | GoogleCesAgentModelSettings): any {
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
    temperature: {
      value: cdktf.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentModelSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesAgentModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._temperature = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._temperature = value.temperature;
    }
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }
}
export interface GoogleCesAgentRemoteDialogflowAgent {
  /**
  * The
  * [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents
  * agent resource name.
  * Format: 'projects/{project}/locations/{location}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#agent GoogleCesAgent#agent}
  */
  readonly agent: string;
  /**
  * The environment ID of the Dialogflow agent be used for the agent
  * execution. If not specified, the draft environment will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#environment_id GoogleCesAgent#environment_id}
  */
  readonly environmentId?: string;
  /**
  * The flow ID of the flow in the Dialogflow agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#flow_id GoogleCesAgent#flow_id}
  */
  readonly flowId: string;
  /**
  * The mapping of the app variables names to the Dialogflow session
  * parameters names to be sent to the Dialogflow agent as input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}
  */
  readonly inputVariableMapping?: { [key: string]: string };
  /**
  * The name of the variable that contains the language code to be used for
  * the Dialogflow session. If unspecified, the default language code of the
  * Dialogflow agent will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#language_code_variable GoogleCesAgent#language_code_variable}
  */
  readonly languageCodeVariable?: string;
  /**
  * The mapping of the Dialogflow session parameters names to the app
  * variables names to be sent back to the CES agent after the Dialogflow
  * agent execution ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}
  */
  readonly outputVariableMapping?: { [key: string]: string };
  /**
  * Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. * If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#respect_response_interruption_settings GoogleCesAgent#respect_response_interruption_settings}
  */
  readonly respectResponseInterruptionSettings?: boolean | cdktf.IResolvable;
}

export function googleCesAgentRemoteDialogflowAgentToTerraform(struct?: GoogleCesAgentRemoteDialogflowAgentOutputReference | GoogleCesAgentRemoteDialogflowAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
    flow_id: cdktf.stringToTerraform(struct!.flowId),
    input_variable_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.inputVariableMapping),
    language_code_variable: cdktf.stringToTerraform(struct!.languageCodeVariable),
    output_variable_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.outputVariableMapping),
    respect_response_interruption_settings: cdktf.booleanToTerraform(struct!.respectResponseInterruptionSettings),
  }
}


export function googleCesAgentRemoteDialogflowAgentToHclTerraform(struct?: GoogleCesAgentRemoteDialogflowAgentOutputReference | GoogleCesAgentRemoteDialogflowAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_id: {
      value: cdktf.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_variable_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.inputVariableMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    language_code_variable: {
      value: cdktf.stringToHclTerraform(struct!.languageCodeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_variable_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.outputVariableMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    respect_response_interruption_settings: {
      value: cdktf.booleanToHclTerraform(struct!.respectResponseInterruptionSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentRemoteDialogflowAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesAgentRemoteDialogflowAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    if (this._inputVariableMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariableMapping = this._inputVariableMapping;
    }
    if (this._languageCodeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCodeVariable = this._languageCodeVariable;
    }
    if (this._outputVariableMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariableMapping = this._outputVariableMapping;
    }
    if (this._respectResponseInterruptionSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectResponseInterruptionSettings = this._respectResponseInterruptionSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentRemoteDialogflowAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._environmentId = undefined;
      this._flowId = undefined;
      this._inputVariableMapping = undefined;
      this._languageCodeVariable = undefined;
      this._outputVariableMapping = undefined;
      this._respectResponseInterruptionSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._environmentId = value.environmentId;
      this._flowId = value.flowId;
      this._inputVariableMapping = value.inputVariableMapping;
      this._languageCodeVariable = value.languageCodeVariable;
      this._outputVariableMapping = value.outputVariableMapping;
      this._respectResponseInterruptionSettings = value.respectResponseInterruptionSettings;
    }
  }

  // agent - computed: false, optional: false, required: true
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // flow_id - computed: false, optional: false, required: true
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // input_variable_mapping - computed: false, optional: true, required: false
  private _inputVariableMapping?: { [key: string]: string }; 
  public get inputVariableMapping() {
    return this.getStringMapAttribute('input_variable_mapping');
  }
  public set inputVariableMapping(value: { [key: string]: string }) {
    this._inputVariableMapping = value;
  }
  public resetInputVariableMapping() {
    this._inputVariableMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableMappingInput() {
    return this._inputVariableMapping;
  }

  // language_code_variable - computed: false, optional: true, required: false
  private _languageCodeVariable?: string; 
  public get languageCodeVariable() {
    return this.getStringAttribute('language_code_variable');
  }
  public set languageCodeVariable(value: string) {
    this._languageCodeVariable = value;
  }
  public resetLanguageCodeVariable() {
    this._languageCodeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeVariableInput() {
    return this._languageCodeVariable;
  }

  // output_variable_mapping - computed: false, optional: true, required: false
  private _outputVariableMapping?: { [key: string]: string }; 
  public get outputVariableMapping() {
    return this.getStringMapAttribute('output_variable_mapping');
  }
  public set outputVariableMapping(value: { [key: string]: string }) {
    this._outputVariableMapping = value;
  }
  public resetOutputVariableMapping() {
    this._outputVariableMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableMappingInput() {
    return this._outputVariableMapping;
  }

  // respect_response_interruption_settings - computed: false, optional: true, required: false
  private _respectResponseInterruptionSettings?: boolean | cdktf.IResolvable; 
  public get respectResponseInterruptionSettings() {
    return this.getBooleanAttribute('respect_response_interruption_settings');
  }
  public set respectResponseInterruptionSettings(value: boolean | cdktf.IResolvable) {
    this._respectResponseInterruptionSettings = value;
  }
  public resetRespectResponseInterruptionSettings() {
    this._respectResponseInterruptionSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectResponseInterruptionSettingsInput() {
    return this._respectResponseInterruptionSettings;
  }
}
export interface GoogleCesAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#create GoogleCesAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#delete GoogleCesAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#update GoogleCesAgent#update}
  */
  readonly update?: string;
}

export function googleCesAgentTimeoutsToTerraform(struct?: GoogleCesAgentTimeouts | cdktf.IResolvable): any {
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


export function googleCesAgentTimeoutsToHclTerraform(struct?: GoogleCesAgentTimeouts | cdktf.IResolvable): any {
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

export class GoogleCesAgentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCesAgentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesAgentTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleCesAgentToolsets {
  /**
  * The tools IDs to filter the toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#tool_ids GoogleCesAgent#tool_ids}
  */
  readonly toolIds?: string[];
  /**
  * The resource name of the toolset.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#toolset GoogleCesAgent#toolset}
  */
  readonly toolset: string;
}

export function googleCesAgentToolsetsToTerraform(struct?: GoogleCesAgentToolsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toolIds),
    toolset: cdktf.stringToTerraform(struct!.toolset),
  }
}


export function googleCesAgentToolsetsToHclTerraform(struct?: GoogleCesAgentToolsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toolIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class GoogleCesAgentToolsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAgentToolsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolIds = this._toolIds;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentToolsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._toolIds = undefined;
      this._toolset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._toolIds = value.toolIds;
      this._toolset = value.toolset;
    }
  }

  // tool_ids - computed: false, optional: true, required: false
  private _toolIds?: string[]; 
  public get toolIds() {
    return this.getListAttribute('tool_ids');
  }
  public set toolIds(value: string[]) {
    this._toolIds = value;
  }
  public resetToolIds() {
    this._toolIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdsInput() {
    return this._toolIds;
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

export class GoogleCesAgentToolsetsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesAgentToolsets[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesAgentToolsetsOutputReference {
    return new GoogleCesAgentToolsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition {
  /**
  * The string representation of cloud.api.Expression condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}
  */
  readonly expression: string;
}

export function googleCesAgentTransferRulesDeterministicTransferExpressionConditionToTerraform(struct?: GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference | GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function googleCesAgentTransferRulesDeterministicTransferExpressionConditionToHclTerraform(struct?: GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference | GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition {
  /**
  * The python code to execute. The function must be named
  * 'should_trigger_transfer_callback'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesAgentTransferRulesDeterministicTransferPythonCodeConditionToTerraform(struct?: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference | GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
  }
}


export function googleCesAgentTransferRulesDeterministicTransferPythonCodeConditionToHclTerraform(struct?: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference | GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    python_code: {
      value: cdktf.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pythonCode = value.pythonCode;
    }
  }

  // python_code - computed: false, optional: false, required: true
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}
export interface GoogleCesAgentTransferRulesDeterministicTransfer {
  /**
  * expression_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}
  */
  readonly expressionCondition?: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition;
  /**
  * python_code_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#python_code_condition GoogleCesAgent#python_code_condition}
  */
  readonly pythonCodeCondition?: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition;
}

export function googleCesAgentTransferRulesDeterministicTransferToTerraform(struct?: GoogleCesAgentTransferRulesDeterministicTransferOutputReference | GoogleCesAgentTransferRulesDeterministicTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression_condition: googleCesAgentTransferRulesDeterministicTransferExpressionConditionToTerraform(struct!.expressionCondition),
    python_code_condition: googleCesAgentTransferRulesDeterministicTransferPythonCodeConditionToTerraform(struct!.pythonCodeCondition),
  }
}


export function googleCesAgentTransferRulesDeterministicTransferToHclTerraform(struct?: GoogleCesAgentTransferRulesDeterministicTransferOutputReference | GoogleCesAgentTransferRulesDeterministicTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression_condition: {
      value: googleCesAgentTransferRulesDeterministicTransferExpressionConditionToHclTerraform(struct!.expressionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionList",
    },
    python_code_condition: {
      value: googleCesAgentTransferRulesDeterministicTransferPythonCodeConditionToHclTerraform(struct!.pythonCodeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentTransferRulesDeterministicTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesAgentTransferRulesDeterministicTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionCondition = this._expressionCondition?.internalValue;
    }
    if (this._pythonCodeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCodeCondition = this._pythonCodeCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentTransferRulesDeterministicTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressionCondition.internalValue = undefined;
      this._pythonCodeCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressionCondition.internalValue = value.expressionCondition;
      this._pythonCodeCondition.internalValue = value.pythonCodeCondition;
    }
  }

  // expression_condition - computed: false, optional: true, required: false
  private _expressionCondition = new GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference(this, "expression_condition");
  public get expressionCondition() {
    return this._expressionCondition;
  }
  public putExpressionCondition(value: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition) {
    this._expressionCondition.internalValue = value;
  }
  public resetExpressionCondition() {
    this._expressionCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionConditionInput() {
    return this._expressionCondition.internalValue;
  }

  // python_code_condition - computed: false, optional: true, required: false
  private _pythonCodeCondition = new GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference(this, "python_code_condition");
  public get pythonCodeCondition() {
    return this._pythonCodeCondition;
  }
  public putPythonCodeCondition(value: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition) {
    this._pythonCodeCondition.internalValue = value;
  }
  public resetPythonCodeCondition() {
    this._pythonCodeCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeConditionInput() {
    return this._pythonCodeCondition.internalValue;
  }
}
export interface GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition {
  /**
  * The string representation of cloud.api.Expression condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}
  */
  readonly expression: string;
}

export function googleCesAgentTransferRulesDisablePlannerTransferExpressionConditionToTerraform(struct?: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference | GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function googleCesAgentTransferRulesDisablePlannerTransferExpressionConditionToHclTerraform(struct?: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference | GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface GoogleCesAgentTransferRulesDisablePlannerTransfer {
  /**
  * expression_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}
  */
  readonly expressionCondition: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition;
}

export function googleCesAgentTransferRulesDisablePlannerTransferToTerraform(struct?: GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference | GoogleCesAgentTransferRulesDisablePlannerTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression_condition: googleCesAgentTransferRulesDisablePlannerTransferExpressionConditionToTerraform(struct!.expressionCondition),
  }
}


export function googleCesAgentTransferRulesDisablePlannerTransferToHclTerraform(struct?: GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference | GoogleCesAgentTransferRulesDisablePlannerTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression_condition: {
      value: googleCesAgentTransferRulesDisablePlannerTransferExpressionConditionToHclTerraform(struct!.expressionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesAgentTransferRulesDisablePlannerTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionCondition = this._expressionCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentTransferRulesDisablePlannerTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressionCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressionCondition.internalValue = value.expressionCondition;
    }
  }

  // expression_condition - computed: false, optional: false, required: true
  private _expressionCondition = new GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference(this, "expression_condition");
  public get expressionCondition() {
    return this._expressionCondition;
  }
  public putExpressionCondition(value: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition) {
    this._expressionCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionConditionInput() {
    return this._expressionCondition.internalValue;
  }
}
export interface GoogleCesAgentTransferRules {
  /**
  * The resource name of the child agent the rule applies to.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#child_agent GoogleCesAgent#child_agent}
  */
  readonly childAgent: string;
  /**
  * The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#direction GoogleCesAgent#direction}
  */
  readonly direction: string;
  /**
  * deterministic_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#deterministic_transfer GoogleCesAgent#deterministic_transfer}
  */
  readonly deterministicTransfer?: GoogleCesAgentTransferRulesDeterministicTransfer;
  /**
  * disable_planner_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#disable_planner_transfer GoogleCesAgent#disable_planner_transfer}
  */
  readonly disablePlannerTransfer?: GoogleCesAgentTransferRulesDisablePlannerTransfer;
}

export function googleCesAgentTransferRulesToTerraform(struct?: GoogleCesAgentTransferRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_agent: cdktf.stringToTerraform(struct!.childAgent),
    direction: cdktf.stringToTerraform(struct!.direction),
    deterministic_transfer: googleCesAgentTransferRulesDeterministicTransferToTerraform(struct!.deterministicTransfer),
    disable_planner_transfer: googleCesAgentTransferRulesDisablePlannerTransferToTerraform(struct!.disablePlannerTransfer),
  }
}


export function googleCesAgentTransferRulesToHclTerraform(struct?: GoogleCesAgentTransferRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_agent: {
      value: cdktf.stringToHclTerraform(struct!.childAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deterministic_transfer: {
      value: googleCesAgentTransferRulesDeterministicTransferToHclTerraform(struct!.deterministicTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesAgentTransferRulesDeterministicTransferList",
    },
    disable_planner_transfer: {
      value: googleCesAgentTransferRulesDisablePlannerTransferToHclTerraform(struct!.disablePlannerTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesAgentTransferRulesDisablePlannerTransferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesAgentTransferRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAgentTransferRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.childAgent = this._childAgent;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._deterministicTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deterministicTransfer = this._deterministicTransfer?.internalValue;
    }
    if (this._disablePlannerTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePlannerTransfer = this._disablePlannerTransfer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAgentTransferRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._childAgent = undefined;
      this._direction = undefined;
      this._deterministicTransfer.internalValue = undefined;
      this._disablePlannerTransfer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._childAgent = value.childAgent;
      this._direction = value.direction;
      this._deterministicTransfer.internalValue = value.deterministicTransfer;
      this._disablePlannerTransfer.internalValue = value.disablePlannerTransfer;
    }
  }

  // child_agent - computed: false, optional: false, required: true
  private _childAgent?: string; 
  public get childAgent() {
    return this.getStringAttribute('child_agent');
  }
  public set childAgent(value: string) {
    this._childAgent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childAgentInput() {
    return this._childAgent;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // deterministic_transfer - computed: false, optional: true, required: false
  private _deterministicTransfer = new GoogleCesAgentTransferRulesDeterministicTransferOutputReference(this, "deterministic_transfer");
  public get deterministicTransfer() {
    return this._deterministicTransfer;
  }
  public putDeterministicTransfer(value: GoogleCesAgentTransferRulesDeterministicTransfer) {
    this._deterministicTransfer.internalValue = value;
  }
  public resetDeterministicTransfer() {
    this._deterministicTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deterministicTransferInput() {
    return this._deterministicTransfer.internalValue;
  }

  // disable_planner_transfer - computed: false, optional: true, required: false
  private _disablePlannerTransfer = new GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference(this, "disable_planner_transfer");
  public get disablePlannerTransfer() {
    return this._disablePlannerTransfer;
  }
  public putDisablePlannerTransfer(value: GoogleCesAgentTransferRulesDisablePlannerTransfer) {
    this._disablePlannerTransfer.internalValue = value;
  }
  public resetDisablePlannerTransfer() {
    this._disablePlannerTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePlannerTransferInput() {
    return this._disablePlannerTransfer.internalValue;
  }
}

export class GoogleCesAgentTransferRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleCesAgentTransferRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesAgentTransferRulesOutputReference {
    return new GoogleCesAgentTransferRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent google_ces_agent}
*/
export class GoogleCesAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleCesAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCesAgent to import
  * @param importFromId The id of the existing GoogleCesAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCesAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_agent google_ces_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCesAgentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCesAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_agent',
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
    this._agentId = config.agentId;
    this._app = config.app;
    this._childAgents = config.childAgents;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._guardrails = config.guardrails;
    this._id = config.id;
    this._instruction = config.instruction;
    this._location = config.location;
    this._project = config.project;
    this._tools = config.tools;
    this._afterAgentCallbacks.internalValue = config.afterAgentCallbacks;
    this._afterModelCallbacks.internalValue = config.afterModelCallbacks;
    this._afterToolCallbacks.internalValue = config.afterToolCallbacks;
    this._beforeAgentCallbacks.internalValue = config.beforeAgentCallbacks;
    this._beforeModelCallbacks.internalValue = config.beforeModelCallbacks;
    this._beforeToolCallbacks.internalValue = config.beforeToolCallbacks;
    this._llmAgent.internalValue = config.llmAgent;
    this._modelSettings.internalValue = config.modelSettings;
    this._remoteDialogflowAgent.internalValue = config.remoteDialogflowAgent;
    this._timeouts.internalValue = config.timeouts;
    this._toolsets.internalValue = config.toolsets;
    this._transferRules.internalValue = config.transferRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

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

  // child_agents - computed: false, optional: true, required: false
  private _childAgents?: string[]; 
  public get childAgents() {
    return this.getListAttribute('child_agents');
  }
  public set childAgents(value: string[]) {
    this._childAgents = value;
  }
  public resetChildAgents() {
    this._childAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childAgentsInput() {
    return this._childAgents;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // generated_summary - computed: true, optional: false, required: false
  public get generatedSummary() {
    return this.getStringAttribute('generated_summary');
  }

  // guardrails - computed: false, optional: true, required: false
  private _guardrails?: string[]; 
  public get guardrails() {
    return this.getListAttribute('guardrails');
  }
  public set guardrails(value: string[]) {
    this._guardrails = value;
  }
  public resetGuardrails() {
    this._guardrails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailsInput() {
    return this._guardrails;
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

  // instruction - computed: false, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
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

  // tools - computed: false, optional: true, required: false
  private _tools?: string[]; 
  public get tools() {
    return this.getListAttribute('tools');
  }
  public set tools(value: string[]) {
    this._tools = value;
  }
  public resetTools() {
    this._tools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsInput() {
    return this._tools;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // after_agent_callbacks - computed: false, optional: true, required: false
  private _afterAgentCallbacks = new GoogleCesAgentAfterAgentCallbacksList(this, "after_agent_callbacks", false);
  public get afterAgentCallbacks() {
    return this._afterAgentCallbacks;
  }
  public putAfterAgentCallbacks(value: GoogleCesAgentAfterAgentCallbacks[] | cdktf.IResolvable) {
    this._afterAgentCallbacks.internalValue = value;
  }
  public resetAfterAgentCallbacks() {
    this._afterAgentCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterAgentCallbacksInput() {
    return this._afterAgentCallbacks.internalValue;
  }

  // after_model_callbacks - computed: false, optional: true, required: false
  private _afterModelCallbacks = new GoogleCesAgentAfterModelCallbacksList(this, "after_model_callbacks", false);
  public get afterModelCallbacks() {
    return this._afterModelCallbacks;
  }
  public putAfterModelCallbacks(value: GoogleCesAgentAfterModelCallbacks[] | cdktf.IResolvable) {
    this._afterModelCallbacks.internalValue = value;
  }
  public resetAfterModelCallbacks() {
    this._afterModelCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterModelCallbacksInput() {
    return this._afterModelCallbacks.internalValue;
  }

  // after_tool_callbacks - computed: false, optional: true, required: false
  private _afterToolCallbacks = new GoogleCesAgentAfterToolCallbacksList(this, "after_tool_callbacks", false);
  public get afterToolCallbacks() {
    return this._afterToolCallbacks;
  }
  public putAfterToolCallbacks(value: GoogleCesAgentAfterToolCallbacks[] | cdktf.IResolvable) {
    this._afterToolCallbacks.internalValue = value;
  }
  public resetAfterToolCallbacks() {
    this._afterToolCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterToolCallbacksInput() {
    return this._afterToolCallbacks.internalValue;
  }

  // before_agent_callbacks - computed: false, optional: true, required: false
  private _beforeAgentCallbacks = new GoogleCesAgentBeforeAgentCallbacksList(this, "before_agent_callbacks", false);
  public get beforeAgentCallbacks() {
    return this._beforeAgentCallbacks;
  }
  public putBeforeAgentCallbacks(value: GoogleCesAgentBeforeAgentCallbacks[] | cdktf.IResolvable) {
    this._beforeAgentCallbacks.internalValue = value;
  }
  public resetBeforeAgentCallbacks() {
    this._beforeAgentCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeAgentCallbacksInput() {
    return this._beforeAgentCallbacks.internalValue;
  }

  // before_model_callbacks - computed: false, optional: true, required: false
  private _beforeModelCallbacks = new GoogleCesAgentBeforeModelCallbacksList(this, "before_model_callbacks", false);
  public get beforeModelCallbacks() {
    return this._beforeModelCallbacks;
  }
  public putBeforeModelCallbacks(value: GoogleCesAgentBeforeModelCallbacks[] | cdktf.IResolvable) {
    this._beforeModelCallbacks.internalValue = value;
  }
  public resetBeforeModelCallbacks() {
    this._beforeModelCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeModelCallbacksInput() {
    return this._beforeModelCallbacks.internalValue;
  }

  // before_tool_callbacks - computed: false, optional: true, required: false
  private _beforeToolCallbacks = new GoogleCesAgentBeforeToolCallbacksList(this, "before_tool_callbacks", false);
  public get beforeToolCallbacks() {
    return this._beforeToolCallbacks;
  }
  public putBeforeToolCallbacks(value: GoogleCesAgentBeforeToolCallbacks[] | cdktf.IResolvable) {
    this._beforeToolCallbacks.internalValue = value;
  }
  public resetBeforeToolCallbacks() {
    this._beforeToolCallbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeToolCallbacksInput() {
    return this._beforeToolCallbacks.internalValue;
  }

  // llm_agent - computed: false, optional: true, required: false
  private _llmAgent = new GoogleCesAgentLlmAgentOutputReference(this, "llm_agent");
  public get llmAgent() {
    return this._llmAgent;
  }
  public putLlmAgent(value: GoogleCesAgentLlmAgent) {
    this._llmAgent.internalValue = value;
  }
  public resetLlmAgent() {
    this._llmAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmAgentInput() {
    return this._llmAgent.internalValue;
  }

  // model_settings - computed: false, optional: true, required: false
  private _modelSettings = new GoogleCesAgentModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: GoogleCesAgentModelSettings) {
    this._modelSettings.internalValue = value;
  }
  public resetModelSettings() {
    this._modelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSettingsInput() {
    return this._modelSettings.internalValue;
  }

  // remote_dialogflow_agent - computed: false, optional: true, required: false
  private _remoteDialogflowAgent = new GoogleCesAgentRemoteDialogflowAgentOutputReference(this, "remote_dialogflow_agent");
  public get remoteDialogflowAgent() {
    return this._remoteDialogflowAgent;
  }
  public putRemoteDialogflowAgent(value: GoogleCesAgentRemoteDialogflowAgent) {
    this._remoteDialogflowAgent.internalValue = value;
  }
  public resetRemoteDialogflowAgent() {
    this._remoteDialogflowAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDialogflowAgentInput() {
    return this._remoteDialogflowAgent.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCesAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCesAgentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // toolsets - computed: false, optional: true, required: false
  private _toolsets = new GoogleCesAgentToolsetsList(this, "toolsets", false);
  public get toolsets() {
    return this._toolsets;
  }
  public putToolsets(value: GoogleCesAgentToolsets[] | cdktf.IResolvable) {
    this._toolsets.internalValue = value;
  }
  public resetToolsets() {
    this._toolsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetsInput() {
    return this._toolsets.internalValue;
  }

  // transfer_rules - computed: false, optional: true, required: false
  private _transferRules = new GoogleCesAgentTransferRulesList(this, "transfer_rules", false);
  public get transferRules() {
    return this._transferRules;
  }
  public putTransferRules(value: GoogleCesAgentTransferRules[] | cdktf.IResolvable) {
    this._transferRules.internalValue = value;
  }
  public resetTransferRules() {
    this._transferRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferRulesInput() {
    return this._transferRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      app: cdktf.stringToTerraform(this._app),
      child_agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._childAgents),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      guardrails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._guardrails),
      id: cdktf.stringToTerraform(this._id),
      instruction: cdktf.stringToTerraform(this._instruction),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      tools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tools),
      after_agent_callbacks: cdktf.listMapper(googleCesAgentAfterAgentCallbacksToTerraform, true)(this._afterAgentCallbacks.internalValue),
      after_model_callbacks: cdktf.listMapper(googleCesAgentAfterModelCallbacksToTerraform, true)(this._afterModelCallbacks.internalValue),
      after_tool_callbacks: cdktf.listMapper(googleCesAgentAfterToolCallbacksToTerraform, true)(this._afterToolCallbacks.internalValue),
      before_agent_callbacks: cdktf.listMapper(googleCesAgentBeforeAgentCallbacksToTerraform, true)(this._beforeAgentCallbacks.internalValue),
      before_model_callbacks: cdktf.listMapper(googleCesAgentBeforeModelCallbacksToTerraform, true)(this._beforeModelCallbacks.internalValue),
      before_tool_callbacks: cdktf.listMapper(googleCesAgentBeforeToolCallbacksToTerraform, true)(this._beforeToolCallbacks.internalValue),
      llm_agent: googleCesAgentLlmAgentToTerraform(this._llmAgent.internalValue),
      model_settings: googleCesAgentModelSettingsToTerraform(this._modelSettings.internalValue),
      remote_dialogflow_agent: googleCesAgentRemoteDialogflowAgentToTerraform(this._remoteDialogflowAgent.internalValue),
      timeouts: googleCesAgentTimeoutsToTerraform(this._timeouts.internalValue),
      toolsets: cdktf.listMapper(googleCesAgentToolsetsToTerraform, true)(this._toolsets.internalValue),
      transfer_rules: cdktf.listMapper(googleCesAgentTransferRulesToTerraform, true)(this._transferRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app: {
        value: cdktf.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_agents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._childAgents),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      guardrails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._guardrails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instruction: {
        value: cdktf.stringToHclTerraform(this._instruction),
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
      tools: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tools),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_agent_callbacks: {
        value: cdktf.listMapperHcl(googleCesAgentAfterAgentCallbacksToHclTerraform, true)(this._afterAgentCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentAfterAgentCallbacksList",
      },
      after_model_callbacks: {
        value: cdktf.listMapperHcl(googleCesAgentAfterModelCallbacksToHclTerraform, true)(this._afterModelCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentAfterModelCallbacksList",
      },
      after_tool_callbacks: {
        value: cdktf.listMapperHcl(googleCesAgentAfterToolCallbacksToHclTerraform, true)(this._afterToolCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentAfterToolCallbacksList",
      },
      before_agent_callbacks: {
        value: cdktf.listMapperHcl(googleCesAgentBeforeAgentCallbacksToHclTerraform, true)(this._beforeAgentCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentBeforeAgentCallbacksList",
      },
      before_model_callbacks: {
        value: cdktf.listMapperHcl(googleCesAgentBeforeModelCallbacksToHclTerraform, true)(this._beforeModelCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentBeforeModelCallbacksList",
      },
      before_tool_callbacks: {
        value: cdktf.listMapperHcl(googleCesAgentBeforeToolCallbacksToHclTerraform, true)(this._beforeToolCallbacks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentBeforeToolCallbacksList",
      },
      llm_agent: {
        value: googleCesAgentLlmAgentToHclTerraform(this._llmAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentLlmAgentList",
      },
      model_settings: {
        value: googleCesAgentModelSettingsToHclTerraform(this._modelSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentModelSettingsList",
      },
      remote_dialogflow_agent: {
        value: googleCesAgentRemoteDialogflowAgentToHclTerraform(this._remoteDialogflowAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentRemoteDialogflowAgentList",
      },
      timeouts: {
        value: googleCesAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCesAgentTimeouts",
      },
      toolsets: {
        value: cdktf.listMapperHcl(googleCesAgentToolsetsToHclTerraform, true)(this._toolsets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentToolsetsList",
      },
      transfer_rules: {
        value: cdktf.listMapperHcl(googleCesAgentTransferRulesToHclTerraform, true)(this._transferRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesAgentTransferRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
