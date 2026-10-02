// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCesGuardrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#app GoogleCesGuardrail#app}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#deletion_policy GoogleCesGuardrail#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}
  */
  readonly description?: string;
  /**
  * Display name of the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#display_name GoogleCesGuardrail#display_name}
  */
  readonly displayName: string;
  /**
  * Whether the guardrail is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#enabled GoogleCesGuardrail#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The ID to use for the guardrail, which will become the final component of
  * the guardrail's resource name. If not provided, a unique ID will be
  * automatically assigned for the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#guardrail_id GoogleCesGuardrail#guardrail_id}
  */
  readonly guardrailId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#location GoogleCesGuardrail#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}
  */
  readonly project?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#action GoogleCesGuardrail#action}
  */
  readonly action?: GoogleCesGuardrailAction;
  /**
  * code_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#code_callback GoogleCesGuardrail#code_callback}
  */
  readonly codeCallback?: GoogleCesGuardrailCodeCallback;
  /**
  * content_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#content_filter GoogleCesGuardrail#content_filter}
  */
  readonly contentFilter?: GoogleCesGuardrailContentFilter;
  /**
  * llm_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#llm_policy GoogleCesGuardrail#llm_policy}
  */
  readonly llmPolicy?: GoogleCesGuardrailLlmPolicy;
  /**
  * llm_prompt_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#llm_prompt_security GoogleCesGuardrail#llm_prompt_security}
  */
  readonly llmPromptSecurity?: GoogleCesGuardrailLlmPromptSecurity;
  /**
  * model_safety block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#model_safety GoogleCesGuardrail#model_safety}
  */
  readonly modelSafety?: GoogleCesGuardrailModelSafety;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#timeouts GoogleCesGuardrail#timeouts}
  */
  readonly timeouts?: GoogleCesGuardrailTimeouts;
}
export interface GoogleCesGuardrailActionGenerativeAnswer {
  /**
  * The prompt to use for the generative answer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}
  */
  readonly prompt: string;
}

export function googleCesGuardrailActionGenerativeAnswerToTerraform(struct?: GoogleCesGuardrailActionGenerativeAnswerOutputReference | GoogleCesGuardrailActionGenerativeAnswer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prompt: cdktf.stringToTerraform(struct!.prompt),
  }
}


export function googleCesGuardrailActionGenerativeAnswerToHclTerraform(struct?: GoogleCesGuardrailActionGenerativeAnswerOutputReference | GoogleCesGuardrailActionGenerativeAnswer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailActionGenerativeAnswerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailActionGenerativeAnswer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailActionGenerativeAnswer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prompt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prompt = value.prompt;
    }
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }
}
export interface GoogleCesGuardrailActionRespondImmediatelyResponses {
  /**
  * Whether the response is disabled. Disabled responses are not used by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Text for the agent to respond with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#text GoogleCesGuardrail#text}
  */
  readonly text: string;
}

export function googleCesGuardrailActionRespondImmediatelyResponsesToTerraform(struct?: GoogleCesGuardrailActionRespondImmediatelyResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function googleCesGuardrailActionRespondImmediatelyResponsesToHclTerraform(struct?: GoogleCesGuardrailActionRespondImmediatelyResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesGuardrailActionRespondImmediatelyResponses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailActionRespondImmediatelyResponses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._text = value.text;
    }
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

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class GoogleCesGuardrailActionRespondImmediatelyResponsesList extends cdktf.ComplexList {
  public internalValue? : GoogleCesGuardrailActionRespondImmediatelyResponses[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference {
    return new GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesGuardrailActionRespondImmediately {
  /**
  * responses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#responses GoogleCesGuardrail#responses}
  */
  readonly responses: GoogleCesGuardrailActionRespondImmediatelyResponses[] | cdktf.IResolvable;
}

export function googleCesGuardrailActionRespondImmediatelyToTerraform(struct?: GoogleCesGuardrailActionRespondImmediatelyOutputReference | GoogleCesGuardrailActionRespondImmediately): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    responses: cdktf.listMapper(googleCesGuardrailActionRespondImmediatelyResponsesToTerraform, true)(struct!.responses),
  }
}


export function googleCesGuardrailActionRespondImmediatelyToHclTerraform(struct?: GoogleCesGuardrailActionRespondImmediatelyOutputReference | GoogleCesGuardrailActionRespondImmediately): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    responses: {
      value: cdktf.listMapperHcl(googleCesGuardrailActionRespondImmediatelyResponsesToHclTerraform, true)(struct!.responses),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailActionRespondImmediatelyResponsesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailActionRespondImmediatelyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailActionRespondImmediately | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responses = this._responses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailActionRespondImmediately | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responses.internalValue = value.responses;
    }
  }

  // responses - computed: false, optional: false, required: true
  private _responses = new GoogleCesGuardrailActionRespondImmediatelyResponsesList(this, "responses", false);
  public get responses() {
    return this._responses;
  }
  public putResponses(value: GoogleCesGuardrailActionRespondImmediatelyResponses[] | cdktf.IResolvable) {
    this._responses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responsesInput() {
    return this._responses.internalValue;
  }
}
export interface GoogleCesGuardrailActionTransferAgent {
  /**
  * The name of the agent to transfer the conversation to. The agent must be
  * in the same app as the current agent.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#agent GoogleCesGuardrail#agent}
  */
  readonly agent: string;
}

export function googleCesGuardrailActionTransferAgentToTerraform(struct?: GoogleCesGuardrailActionTransferAgentOutputReference | GoogleCesGuardrailActionTransferAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
  }
}


export function googleCesGuardrailActionTransferAgentToHclTerraform(struct?: GoogleCesGuardrailActionTransferAgentOutputReference | GoogleCesGuardrailActionTransferAgent): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailActionTransferAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailActionTransferAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailActionTransferAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
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
}
export interface GoogleCesGuardrailAction {
  /**
  * generative_answer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#generative_answer GoogleCesGuardrail#generative_answer}
  */
  readonly generativeAnswer?: GoogleCesGuardrailActionGenerativeAnswer;
  /**
  * respond_immediately block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#respond_immediately GoogleCesGuardrail#respond_immediately}
  */
  readonly respondImmediately?: GoogleCesGuardrailActionRespondImmediately;
  /**
  * transfer_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#transfer_agent GoogleCesGuardrail#transfer_agent}
  */
  readonly transferAgent?: GoogleCesGuardrailActionTransferAgent;
}

export function googleCesGuardrailActionToTerraform(struct?: GoogleCesGuardrailActionOutputReference | GoogleCesGuardrailAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generative_answer: googleCesGuardrailActionGenerativeAnswerToTerraform(struct!.generativeAnswer),
    respond_immediately: googleCesGuardrailActionRespondImmediatelyToTerraform(struct!.respondImmediately),
    transfer_agent: googleCesGuardrailActionTransferAgentToTerraform(struct!.transferAgent),
  }
}


export function googleCesGuardrailActionToHclTerraform(struct?: GoogleCesGuardrailActionOutputReference | GoogleCesGuardrailAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generative_answer: {
      value: googleCesGuardrailActionGenerativeAnswerToHclTerraform(struct!.generativeAnswer),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailActionGenerativeAnswerList",
    },
    respond_immediately: {
      value: googleCesGuardrailActionRespondImmediatelyToHclTerraform(struct!.respondImmediately),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailActionRespondImmediatelyList",
    },
    transfer_agent: {
      value: googleCesGuardrailActionTransferAgentToHclTerraform(struct!.transferAgent),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailActionTransferAgentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generativeAnswer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeAnswer = this._generativeAnswer?.internalValue;
    }
    if (this._respondImmediately?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.respondImmediately = this._respondImmediately?.internalValue;
    }
    if (this._transferAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferAgent = this._transferAgent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generativeAnswer.internalValue = undefined;
      this._respondImmediately.internalValue = undefined;
      this._transferAgent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generativeAnswer.internalValue = value.generativeAnswer;
      this._respondImmediately.internalValue = value.respondImmediately;
      this._transferAgent.internalValue = value.transferAgent;
    }
  }

  // generative_answer - computed: false, optional: true, required: false
  private _generativeAnswer = new GoogleCesGuardrailActionGenerativeAnswerOutputReference(this, "generative_answer");
  public get generativeAnswer() {
    return this._generativeAnswer;
  }
  public putGenerativeAnswer(value: GoogleCesGuardrailActionGenerativeAnswer) {
    this._generativeAnswer.internalValue = value;
  }
  public resetGenerativeAnswer() {
    this._generativeAnswer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeAnswerInput() {
    return this._generativeAnswer.internalValue;
  }

  // respond_immediately - computed: false, optional: true, required: false
  private _respondImmediately = new GoogleCesGuardrailActionRespondImmediatelyOutputReference(this, "respond_immediately");
  public get respondImmediately() {
    return this._respondImmediately;
  }
  public putRespondImmediately(value: GoogleCesGuardrailActionRespondImmediately) {
    this._respondImmediately.internalValue = value;
  }
  public resetRespondImmediately() {
    this._respondImmediately.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondImmediatelyInput() {
    return this._respondImmediately.internalValue;
  }

  // transfer_agent - computed: false, optional: true, required: false
  private _transferAgent = new GoogleCesGuardrailActionTransferAgentOutputReference(this, "transfer_agent");
  public get transferAgent() {
    return this._transferAgent;
  }
  public putTransferAgent(value: GoogleCesGuardrailActionTransferAgent) {
    this._transferAgent.internalValue = value;
  }
  public resetTransferAgent() {
    this._transferAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAgentInput() {
    return this._transferAgent.internalValue;
  }
}
export interface GoogleCesGuardrailCodeCallbackAfterAgentCallback {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesGuardrailCodeCallbackAfterAgentCallbackToTerraform(struct?: GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference | GoogleCesGuardrailCodeCallbackAfterAgentCallback): any {
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


export function googleCesGuardrailCodeCallbackAfterAgentCallbackToHclTerraform(struct?: GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference | GoogleCesGuardrailCodeCallbackAfterAgentCallback): any {
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

export class GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailCodeCallbackAfterAgentCallback | undefined {
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

  public set internalValue(value: GoogleCesGuardrailCodeCallbackAfterAgentCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface GoogleCesGuardrailCodeCallbackAfterModelCallback {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesGuardrailCodeCallbackAfterModelCallbackToTerraform(struct?: GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference | GoogleCesGuardrailCodeCallbackAfterModelCallback): any {
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


export function googleCesGuardrailCodeCallbackAfterModelCallbackToHclTerraform(struct?: GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference | GoogleCesGuardrailCodeCallbackAfterModelCallback): any {
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

export class GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailCodeCallbackAfterModelCallback | undefined {
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

  public set internalValue(value: GoogleCesGuardrailCodeCallbackAfterModelCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface GoogleCesGuardrailCodeCallbackBeforeAgentCallback {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesGuardrailCodeCallbackBeforeAgentCallbackToTerraform(struct?: GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference | GoogleCesGuardrailCodeCallbackBeforeAgentCallback): any {
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


export function googleCesGuardrailCodeCallbackBeforeAgentCallbackToHclTerraform(struct?: GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference | GoogleCesGuardrailCodeCallbackBeforeAgentCallback): any {
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

export class GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailCodeCallbackBeforeAgentCallback | undefined {
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

  public set internalValue(value: GoogleCesGuardrailCodeCallbackBeforeAgentCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface GoogleCesGuardrailCodeCallbackBeforeModelCallback {
  /**
  * Human-readable description of the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}
  */
  readonly description?: string;
  /**
  * Whether the callback is disabled. Disabled callbacks are ignored by the
  * agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The python code to execute for the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesGuardrailCodeCallbackBeforeModelCallbackToTerraform(struct?: GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference | GoogleCesGuardrailCodeCallbackBeforeModelCallback): any {
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


export function googleCesGuardrailCodeCallbackBeforeModelCallbackToHclTerraform(struct?: GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference | GoogleCesGuardrailCodeCallbackBeforeModelCallback): any {
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

export class GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailCodeCallbackBeforeModelCallback | undefined {
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

  public set internalValue(value: GoogleCesGuardrailCodeCallbackBeforeModelCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disabled = undefined;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface GoogleCesGuardrailCodeCallback {
  /**
  * after_agent_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#after_agent_callback GoogleCesGuardrail#after_agent_callback}
  */
  readonly afterAgentCallback?: GoogleCesGuardrailCodeCallbackAfterAgentCallback;
  /**
  * after_model_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#after_model_callback GoogleCesGuardrail#after_model_callback}
  */
  readonly afterModelCallback?: GoogleCesGuardrailCodeCallbackAfterModelCallback;
  /**
  * before_agent_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#before_agent_callback GoogleCesGuardrail#before_agent_callback}
  */
  readonly beforeAgentCallback?: GoogleCesGuardrailCodeCallbackBeforeAgentCallback;
  /**
  * before_model_callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#before_model_callback GoogleCesGuardrail#before_model_callback}
  */
  readonly beforeModelCallback?: GoogleCesGuardrailCodeCallbackBeforeModelCallback;
}

export function googleCesGuardrailCodeCallbackToTerraform(struct?: GoogleCesGuardrailCodeCallbackOutputReference | GoogleCesGuardrailCodeCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_agent_callback: googleCesGuardrailCodeCallbackAfterAgentCallbackToTerraform(struct!.afterAgentCallback),
    after_model_callback: googleCesGuardrailCodeCallbackAfterModelCallbackToTerraform(struct!.afterModelCallback),
    before_agent_callback: googleCesGuardrailCodeCallbackBeforeAgentCallbackToTerraform(struct!.beforeAgentCallback),
    before_model_callback: googleCesGuardrailCodeCallbackBeforeModelCallbackToTerraform(struct!.beforeModelCallback),
  }
}


export function googleCesGuardrailCodeCallbackToHclTerraform(struct?: GoogleCesGuardrailCodeCallbackOutputReference | GoogleCesGuardrailCodeCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_agent_callback: {
      value: googleCesGuardrailCodeCallbackAfterAgentCallbackToHclTerraform(struct!.afterAgentCallback),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailCodeCallbackAfterAgentCallbackList",
    },
    after_model_callback: {
      value: googleCesGuardrailCodeCallbackAfterModelCallbackToHclTerraform(struct!.afterModelCallback),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailCodeCallbackAfterModelCallbackList",
    },
    before_agent_callback: {
      value: googleCesGuardrailCodeCallbackBeforeAgentCallbackToHclTerraform(struct!.beforeAgentCallback),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailCodeCallbackBeforeAgentCallbackList",
    },
    before_model_callback: {
      value: googleCesGuardrailCodeCallbackBeforeModelCallbackToHclTerraform(struct!.beforeModelCallback),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailCodeCallbackBeforeModelCallbackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailCodeCallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailCodeCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterAgentCallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterAgentCallback = this._afterAgentCallback?.internalValue;
    }
    if (this._afterModelCallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterModelCallback = this._afterModelCallback?.internalValue;
    }
    if (this._beforeAgentCallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeAgentCallback = this._beforeAgentCallback?.internalValue;
    }
    if (this._beforeModelCallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeModelCallback = this._beforeModelCallback?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailCodeCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterAgentCallback.internalValue = undefined;
      this._afterModelCallback.internalValue = undefined;
      this._beforeAgentCallback.internalValue = undefined;
      this._beforeModelCallback.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterAgentCallback.internalValue = value.afterAgentCallback;
      this._afterModelCallback.internalValue = value.afterModelCallback;
      this._beforeAgentCallback.internalValue = value.beforeAgentCallback;
      this._beforeModelCallback.internalValue = value.beforeModelCallback;
    }
  }

  // after_agent_callback - computed: false, optional: true, required: false
  private _afterAgentCallback = new GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference(this, "after_agent_callback");
  public get afterAgentCallback() {
    return this._afterAgentCallback;
  }
  public putAfterAgentCallback(value: GoogleCesGuardrailCodeCallbackAfterAgentCallback) {
    this._afterAgentCallback.internalValue = value;
  }
  public resetAfterAgentCallback() {
    this._afterAgentCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterAgentCallbackInput() {
    return this._afterAgentCallback.internalValue;
  }

  // after_model_callback - computed: false, optional: true, required: false
  private _afterModelCallback = new GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference(this, "after_model_callback");
  public get afterModelCallback() {
    return this._afterModelCallback;
  }
  public putAfterModelCallback(value: GoogleCesGuardrailCodeCallbackAfterModelCallback) {
    this._afterModelCallback.internalValue = value;
  }
  public resetAfterModelCallback() {
    this._afterModelCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterModelCallbackInput() {
    return this._afterModelCallback.internalValue;
  }

  // before_agent_callback - computed: false, optional: true, required: false
  private _beforeAgentCallback = new GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(this, "before_agent_callback");
  public get beforeAgentCallback() {
    return this._beforeAgentCallback;
  }
  public putBeforeAgentCallback(value: GoogleCesGuardrailCodeCallbackBeforeAgentCallback) {
    this._beforeAgentCallback.internalValue = value;
  }
  public resetBeforeAgentCallback() {
    this._beforeAgentCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeAgentCallbackInput() {
    return this._beforeAgentCallback.internalValue;
  }

  // before_model_callback - computed: false, optional: true, required: false
  private _beforeModelCallback = new GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference(this, "before_model_callback");
  public get beforeModelCallback() {
    return this._beforeModelCallback;
  }
  public putBeforeModelCallback(value: GoogleCesGuardrailCodeCallbackBeforeModelCallback) {
    this._beforeModelCallback.internalValue = value;
  }
  public resetBeforeModelCallback() {
    this._beforeModelCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeModelCallbackInput() {
    return this._beforeModelCallback.internalValue;
  }
}
export interface GoogleCesGuardrailContentFilter {
  /**
  * List of banned phrases. Applies to both user inputs and agent responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#banned_contents GoogleCesGuardrail#banned_contents}
  */
  readonly bannedContents?: string[];
  /**
  * List of banned phrases. Applies only to agent responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#banned_contents_in_agent_response GoogleCesGuardrail#banned_contents_in_agent_response}
  */
  readonly bannedContentsInAgentResponse?: string[];
  /**
  * List of banned phrases. Applies only to user inputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#banned_contents_in_user_input GoogleCesGuardrail#banned_contents_in_user_input}
  */
  readonly bannedContentsInUserInput?: string[];
  /**
  * If true, diacritics are ignored during matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#disregard_diacritics GoogleCesGuardrail#disregard_diacritics}
  */
  readonly disregardDiacritics?: boolean | cdktf.IResolvable;
  /**
  * Match type for the content filter.
  * Possible values:
  * SIMPLE_STRING_MATCH
  * WORD_BOUNDARY_STRING_MATCH
  * REGEXP_MATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#match_type GoogleCesGuardrail#match_type}
  */
  readonly matchType: string;
}

export function googleCesGuardrailContentFilterToTerraform(struct?: GoogleCesGuardrailContentFilterOutputReference | GoogleCesGuardrailContentFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    banned_contents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bannedContents),
    banned_contents_in_agent_response: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bannedContentsInAgentResponse),
    banned_contents_in_user_input: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bannedContentsInUserInput),
    disregard_diacritics: cdktf.booleanToTerraform(struct!.disregardDiacritics),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function googleCesGuardrailContentFilterToHclTerraform(struct?: GoogleCesGuardrailContentFilterOutputReference | GoogleCesGuardrailContentFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    banned_contents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bannedContents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    banned_contents_in_agent_response: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bannedContentsInAgentResponse),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    banned_contents_in_user_input: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bannedContentsInUserInput),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disregard_diacritics: {
      value: cdktf.booleanToHclTerraform(struct!.disregardDiacritics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailContentFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailContentFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bannedContents !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannedContents = this._bannedContents;
    }
    if (this._bannedContentsInAgentResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannedContentsInAgentResponse = this._bannedContentsInAgentResponse;
    }
    if (this._bannedContentsInUserInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannedContentsInUserInput = this._bannedContentsInUserInput;
    }
    if (this._disregardDiacritics !== undefined) {
      hasAnyValues = true;
      internalValueResult.disregardDiacritics = this._disregardDiacritics;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailContentFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bannedContents = undefined;
      this._bannedContentsInAgentResponse = undefined;
      this._bannedContentsInUserInput = undefined;
      this._disregardDiacritics = undefined;
      this._matchType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bannedContents = value.bannedContents;
      this._bannedContentsInAgentResponse = value.bannedContentsInAgentResponse;
      this._bannedContentsInUserInput = value.bannedContentsInUserInput;
      this._disregardDiacritics = value.disregardDiacritics;
      this._matchType = value.matchType;
    }
  }

  // banned_contents - computed: false, optional: true, required: false
  private _bannedContents?: string[]; 
  public get bannedContents() {
    return this.getListAttribute('banned_contents');
  }
  public set bannedContents(value: string[]) {
    this._bannedContents = value;
  }
  public resetBannedContents() {
    this._bannedContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannedContentsInput() {
    return this._bannedContents;
  }

  // banned_contents_in_agent_response - computed: false, optional: true, required: false
  private _bannedContentsInAgentResponse?: string[]; 
  public get bannedContentsInAgentResponse() {
    return this.getListAttribute('banned_contents_in_agent_response');
  }
  public set bannedContentsInAgentResponse(value: string[]) {
    this._bannedContentsInAgentResponse = value;
  }
  public resetBannedContentsInAgentResponse() {
    this._bannedContentsInAgentResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannedContentsInAgentResponseInput() {
    return this._bannedContentsInAgentResponse;
  }

  // banned_contents_in_user_input - computed: false, optional: true, required: false
  private _bannedContentsInUserInput?: string[]; 
  public get bannedContentsInUserInput() {
    return this.getListAttribute('banned_contents_in_user_input');
  }
  public set bannedContentsInUserInput(value: string[]) {
    this._bannedContentsInUserInput = value;
  }
  public resetBannedContentsInUserInput() {
    this._bannedContentsInUserInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannedContentsInUserInputInput() {
    return this._bannedContentsInUserInput;
  }

  // disregard_diacritics - computed: false, optional: true, required: false
  private _disregardDiacritics?: boolean | cdktf.IResolvable; 
  public get disregardDiacritics() {
    return this.getBooleanAttribute('disregard_diacritics');
  }
  public set disregardDiacritics(value: boolean | cdktf.IResolvable) {
    this._disregardDiacritics = value;
  }
  public resetDisregardDiacritics() {
    this._disregardDiacritics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disregardDiacriticsInput() {
    return this._disregardDiacritics;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}
export interface GoogleCesGuardrailLlmPolicyModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}
  */
  readonly temperature?: number;
}

export function googleCesGuardrailLlmPolicyModelSettingsToTerraform(struct?: GoogleCesGuardrailLlmPolicyModelSettingsOutputReference | GoogleCesGuardrailLlmPolicyModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    temperature: cdktf.numberToTerraform(struct!.temperature),
  }
}


export function googleCesGuardrailLlmPolicyModelSettingsToHclTerraform(struct?: GoogleCesGuardrailLlmPolicyModelSettingsOutputReference | GoogleCesGuardrailLlmPolicyModelSettings): any {
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

export class GoogleCesGuardrailLlmPolicyModelSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailLlmPolicyModelSettings | undefined {
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

  public set internalValue(value: GoogleCesGuardrailLlmPolicyModelSettings | undefined) {
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
export interface GoogleCesGuardrailLlmPolicy {
  /**
  * By default, the LLM policy check is bypassed for short utterances.
  * Enabling this setting applies the policy check to all utterances,
  * including those that would normally be skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}
  */
  readonly allowShortUtterance?: boolean | cdktf.IResolvable;
  /**
  * If an error occurs during the policy check, fail open and do not trigger
  * the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * When checking this policy, consider the last 'n' messages in the
  * conversation.
  * When not set a default value of 10 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}
  */
  readonly maxConversationMessages?: number;
  /**
  * Defines when to apply the policy check during the conversation. If set to
  * 'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
  * When applying the policy to the agent response, additional latency will
  * be introduced before the agent can respond.
  * Possible values:
  * USER_QUERY
  * AGENT_RESPONSE
  * USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}
  */
  readonly policyScope: string;
  /**
  * Policy prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}
  */
  readonly prompt: string;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}
  */
  readonly modelSettings?: GoogleCesGuardrailLlmPolicyModelSettings;
}

export function googleCesGuardrailLlmPolicyToTerraform(struct?: GoogleCesGuardrailLlmPolicyOutputReference | GoogleCesGuardrailLlmPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_short_utterance: cdktf.booleanToTerraform(struct!.allowShortUtterance),
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    max_conversation_messages: cdktf.numberToTerraform(struct!.maxConversationMessages),
    policy_scope: cdktf.stringToTerraform(struct!.policyScope),
    prompt: cdktf.stringToTerraform(struct!.prompt),
    model_settings: googleCesGuardrailLlmPolicyModelSettingsToTerraform(struct!.modelSettings),
  }
}


export function googleCesGuardrailLlmPolicyToHclTerraform(struct?: GoogleCesGuardrailLlmPolicyOutputReference | GoogleCesGuardrailLlmPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_short_utterance: {
      value: cdktf.booleanToHclTerraform(struct!.allowShortUtterance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_conversation_messages: {
      value: cdktf.numberToHclTerraform(struct!.maxConversationMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_scope: {
      value: cdktf.stringToHclTerraform(struct!.policyScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_settings: {
      value: googleCesGuardrailLlmPolicyModelSettingsToHclTerraform(struct!.modelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailLlmPolicyModelSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailLlmPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailLlmPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowShortUtterance !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowShortUtterance = this._allowShortUtterance;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._maxConversationMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConversationMessages = this._maxConversationMessages;
    }
    if (this._policyScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyScope = this._policyScope;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._modelSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelSettings = this._modelSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailLlmPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowShortUtterance = undefined;
      this._failOpen = undefined;
      this._maxConversationMessages = undefined;
      this._policyScope = undefined;
      this._prompt = undefined;
      this._modelSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowShortUtterance = value.allowShortUtterance;
      this._failOpen = value.failOpen;
      this._maxConversationMessages = value.maxConversationMessages;
      this._policyScope = value.policyScope;
      this._prompt = value.prompt;
      this._modelSettings.internalValue = value.modelSettings;
    }
  }

  // allow_short_utterance - computed: false, optional: true, required: false
  private _allowShortUtterance?: boolean | cdktf.IResolvable; 
  public get allowShortUtterance() {
    return this.getBooleanAttribute('allow_short_utterance');
  }
  public set allowShortUtterance(value: boolean | cdktf.IResolvable) {
    this._allowShortUtterance = value;
  }
  public resetAllowShortUtterance() {
    this._allowShortUtterance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowShortUtteranceInput() {
    return this._allowShortUtterance;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // max_conversation_messages - computed: false, optional: true, required: false
  private _maxConversationMessages?: number; 
  public get maxConversationMessages() {
    return this.getNumberAttribute('max_conversation_messages');
  }
  public set maxConversationMessages(value: number) {
    this._maxConversationMessages = value;
  }
  public resetMaxConversationMessages() {
    this._maxConversationMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConversationMessagesInput() {
    return this._maxConversationMessages;
  }

  // policy_scope - computed: false, optional: false, required: true
  private _policyScope?: string; 
  public get policyScope() {
    return this.getStringAttribute('policy_scope');
  }
  public set policyScope(value: string) {
    this._policyScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyScopeInput() {
    return this._policyScope;
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // model_settings - computed: false, optional: true, required: false
  private _modelSettings = new GoogleCesGuardrailLlmPolicyModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: GoogleCesGuardrailLlmPolicyModelSettings) {
    this._modelSettings.internalValue = value;
  }
  public resetModelSettings() {
    this._modelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSettingsInput() {
    return this._modelSettings.internalValue;
  }
}
export interface GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}
  */
  readonly temperature?: number;
}

export function googleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsToTerraform(struct?: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference | GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    temperature: cdktf.numberToTerraform(struct!.temperature),
  }
}


export function googleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsToHclTerraform(struct?: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference | GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings): any {
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

export class GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings | undefined {
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

  public set internalValue(value: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings | undefined) {
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
export interface GoogleCesGuardrailLlmPromptSecurityCustomPolicy {
  /**
  * By default, the LLM policy check is bypassed for short utterances.
  * Enabling this setting applies the policy check to all utterances,
  * including those that would normally be skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}
  */
  readonly allowShortUtterance?: boolean | cdktf.IResolvable;
  /**
  * If an error occurs during the policy check, fail open and do not trigger
  * the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * When checking this policy, consider the last 'n' messages in the
  * conversation.
  * When not set a default value of 10 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}
  */
  readonly maxConversationMessages?: number;
  /**
  * Defines when to apply the policy check during the conversation. If set to
  * 'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
  * When applying the policy to the agent response, additional latency will
  * be introduced before the agent can respond.
  * Possible values:
  * USER_QUERY
  * AGENT_RESPONSE
  * USER_QUERY_AND_AGENT_RESPONSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}
  */
  readonly policyScope: string;
  /**
  * Policy prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}
  */
  readonly prompt: string;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}
  */
  readonly modelSettings?: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings;
}

export function googleCesGuardrailLlmPromptSecurityCustomPolicyToTerraform(struct?: GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference | GoogleCesGuardrailLlmPromptSecurityCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_short_utterance: cdktf.booleanToTerraform(struct!.allowShortUtterance),
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    max_conversation_messages: cdktf.numberToTerraform(struct!.maxConversationMessages),
    policy_scope: cdktf.stringToTerraform(struct!.policyScope),
    prompt: cdktf.stringToTerraform(struct!.prompt),
    model_settings: googleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsToTerraform(struct!.modelSettings),
  }
}


export function googleCesGuardrailLlmPromptSecurityCustomPolicyToHclTerraform(struct?: GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference | GoogleCesGuardrailLlmPromptSecurityCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_short_utterance: {
      value: cdktf.booleanToHclTerraform(struct!.allowShortUtterance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_conversation_messages: {
      value: cdktf.numberToHclTerraform(struct!.maxConversationMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_scope: {
      value: cdktf.stringToHclTerraform(struct!.policyScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_settings: {
      value: googleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsToHclTerraform(struct!.modelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailLlmPromptSecurityCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowShortUtterance !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowShortUtterance = this._allowShortUtterance;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._maxConversationMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConversationMessages = this._maxConversationMessages;
    }
    if (this._policyScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyScope = this._policyScope;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._modelSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelSettings = this._modelSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailLlmPromptSecurityCustomPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowShortUtterance = undefined;
      this._failOpen = undefined;
      this._maxConversationMessages = undefined;
      this._policyScope = undefined;
      this._prompt = undefined;
      this._modelSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowShortUtterance = value.allowShortUtterance;
      this._failOpen = value.failOpen;
      this._maxConversationMessages = value.maxConversationMessages;
      this._policyScope = value.policyScope;
      this._prompt = value.prompt;
      this._modelSettings.internalValue = value.modelSettings;
    }
  }

  // allow_short_utterance - computed: false, optional: true, required: false
  private _allowShortUtterance?: boolean | cdktf.IResolvable; 
  public get allowShortUtterance() {
    return this.getBooleanAttribute('allow_short_utterance');
  }
  public set allowShortUtterance(value: boolean | cdktf.IResolvable) {
    this._allowShortUtterance = value;
  }
  public resetAllowShortUtterance() {
    this._allowShortUtterance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowShortUtteranceInput() {
    return this._allowShortUtterance;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // max_conversation_messages - computed: false, optional: true, required: false
  private _maxConversationMessages?: number; 
  public get maxConversationMessages() {
    return this.getNumberAttribute('max_conversation_messages');
  }
  public set maxConversationMessages(value: number) {
    this._maxConversationMessages = value;
  }
  public resetMaxConversationMessages() {
    this._maxConversationMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConversationMessagesInput() {
    return this._maxConversationMessages;
  }

  // policy_scope - computed: false, optional: false, required: true
  private _policyScope?: string; 
  public get policyScope() {
    return this.getStringAttribute('policy_scope');
  }
  public set policyScope(value: string) {
    this._policyScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyScopeInput() {
    return this._policyScope;
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // model_settings - computed: false, optional: true, required: false
  private _modelSettings = new GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings) {
    this._modelSettings.internalValue = value;
  }
  public resetModelSettings() {
    this._modelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSettingsInput() {
    return this._modelSettings.internalValue;
  }
}
export interface GoogleCesGuardrailLlmPromptSecurityDefaultSettings {
}

export function googleCesGuardrailLlmPromptSecurityDefaultSettingsToTerraform(struct?: GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference | GoogleCesGuardrailLlmPromptSecurityDefaultSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesGuardrailLlmPromptSecurityDefaultSettingsToHclTerraform(struct?: GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference | GoogleCesGuardrailLlmPromptSecurityDefaultSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailLlmPromptSecurityDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailLlmPromptSecurityDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_prompt_template - computed: true, optional: false, required: false
  public get defaultPromptTemplate() {
    return this.getStringAttribute('default_prompt_template');
  }
}
export interface GoogleCesGuardrailLlmPromptSecurity {
  /**
  * Determines the behavior when the guardrail encounters an LLM error.
  * - If true: the guardrail is bypassed.
  * - If false (default): the guardrail triggers/blocks.
  * Note: If a custom policy is provided, this field is ignored in favor of
  * the policy's 'failOpen' configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * custom_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#custom_policy GoogleCesGuardrail#custom_policy}
  */
  readonly customPolicy?: GoogleCesGuardrailLlmPromptSecurityCustomPolicy;
  /**
  * default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#default_settings GoogleCesGuardrail#default_settings}
  */
  readonly defaultSettings?: GoogleCesGuardrailLlmPromptSecurityDefaultSettings;
}

export function googleCesGuardrailLlmPromptSecurityToTerraform(struct?: GoogleCesGuardrailLlmPromptSecurityOutputReference | GoogleCesGuardrailLlmPromptSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    custom_policy: googleCesGuardrailLlmPromptSecurityCustomPolicyToTerraform(struct!.customPolicy),
    default_settings: googleCesGuardrailLlmPromptSecurityDefaultSettingsToTerraform(struct!.defaultSettings),
  }
}


export function googleCesGuardrailLlmPromptSecurityToHclTerraform(struct?: GoogleCesGuardrailLlmPromptSecurityOutputReference | GoogleCesGuardrailLlmPromptSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_policy: {
      value: googleCesGuardrailLlmPromptSecurityCustomPolicyToHclTerraform(struct!.customPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailLlmPromptSecurityCustomPolicyList",
    },
    default_settings: {
      value: googleCesGuardrailLlmPromptSecurityDefaultSettingsToHclTerraform(struct!.defaultSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailLlmPromptSecurityDefaultSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailLlmPromptSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailLlmPromptSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._customPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPolicy = this._customPolicy?.internalValue;
    }
    if (this._defaultSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSettings = this._defaultSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailLlmPromptSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failOpen = undefined;
      this._customPolicy.internalValue = undefined;
      this._defaultSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failOpen = value.failOpen;
      this._customPolicy.internalValue = value.customPolicy;
      this._defaultSettings.internalValue = value.defaultSettings;
    }
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // custom_policy - computed: false, optional: true, required: false
  private _customPolicy = new GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference(this, "custom_policy");
  public get customPolicy() {
    return this._customPolicy;
  }
  public putCustomPolicy(value: GoogleCesGuardrailLlmPromptSecurityCustomPolicy) {
    this._customPolicy.internalValue = value;
  }
  public resetCustomPolicy() {
    this._customPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPolicyInput() {
    return this._customPolicy.internalValue;
  }

  // default_settings - computed: false, optional: true, required: false
  private _defaultSettings = new GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(this, "default_settings");
  public get defaultSettings() {
    return this._defaultSettings;
  }
  public putDefaultSettings(value: GoogleCesGuardrailLlmPromptSecurityDefaultSettings) {
    this._defaultSettings.internalValue = value;
  }
  public resetDefaultSettings() {
    this._defaultSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsInput() {
    return this._defaultSettings.internalValue;
  }
}
export interface GoogleCesGuardrailModelSafetySafetySettings {
  /**
  * The harm category.
  * Possible values:
  * HARM_CATEGORY_HATE_SPEECH
  * HARM_CATEGORY_DANGEROUS_CONTENT
  * HARM_CATEGORY_HARASSMENT
  * HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#category GoogleCesGuardrail#category}
  */
  readonly category: string;
  /**
  * The harm block threshold.
  * Possible values:
  * BLOCK_LOW_AND_ABOVE
  * BLOCK_MEDIUM_AND_ABOVE
  * BLOCK_ONLY_HIGH
  * BLOCK_NONE
  * OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#threshold GoogleCesGuardrail#threshold}
  */
  readonly threshold: string;
}

export function googleCesGuardrailModelSafetySafetySettingsToTerraform(struct?: GoogleCesGuardrailModelSafetySafetySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function googleCesGuardrailModelSafetySafetySettingsToHclTerraform(struct?: GoogleCesGuardrailModelSafetySafetySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailModelSafetySafetySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesGuardrailModelSafetySafetySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailModelSafetySafetySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._threshold = value.threshold;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class GoogleCesGuardrailModelSafetySafetySettingsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesGuardrailModelSafetySafetySettings[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesGuardrailModelSafetySafetySettingsOutputReference {
    return new GoogleCesGuardrailModelSafetySafetySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesGuardrailModelSafety {
  /**
  * safety_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#safety_settings GoogleCesGuardrail#safety_settings}
  */
  readonly safetySettings: GoogleCesGuardrailModelSafetySafetySettings[] | cdktf.IResolvable;
}

export function googleCesGuardrailModelSafetyToTerraform(struct?: GoogleCesGuardrailModelSafetyOutputReference | GoogleCesGuardrailModelSafety): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    safety_settings: cdktf.listMapper(googleCesGuardrailModelSafetySafetySettingsToTerraform, true)(struct!.safetySettings),
  }
}


export function googleCesGuardrailModelSafetyToHclTerraform(struct?: GoogleCesGuardrailModelSafetyOutputReference | GoogleCesGuardrailModelSafety): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    safety_settings: {
      value: cdktf.listMapperHcl(googleCesGuardrailModelSafetySafetySettingsToHclTerraform, true)(struct!.safetySettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesGuardrailModelSafetySafetySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesGuardrailModelSafetyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesGuardrailModelSafety | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._safetySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.safetySettings = this._safetySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesGuardrailModelSafety | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._safetySettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._safetySettings.internalValue = value.safetySettings;
    }
  }

  // safety_settings - computed: false, optional: false, required: true
  private _safetySettings = new GoogleCesGuardrailModelSafetySafetySettingsList(this, "safety_settings", false);
  public get safetySettings() {
    return this._safetySettings;
  }
  public putSafetySettings(value: GoogleCesGuardrailModelSafetySafetySettings[] | cdktf.IResolvable) {
    this._safetySettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get safetySettingsInput() {
    return this._safetySettings.internalValue;
  }
}
export interface GoogleCesGuardrailTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}
  */
  readonly update?: string;
}

export function googleCesGuardrailTimeoutsToTerraform(struct?: GoogleCesGuardrailTimeouts | cdktf.IResolvable): any {
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


export function googleCesGuardrailTimeoutsToHclTerraform(struct?: GoogleCesGuardrailTimeouts | cdktf.IResolvable): any {
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

export class GoogleCesGuardrailTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCesGuardrailTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesGuardrailTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail google_ces_guardrail}
*/
export class GoogleCesGuardrail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleCesGuardrail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCesGuardrail to import
  * @param importFromId The id of the existing GoogleCesGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCesGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_guardrail google_ces_guardrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCesGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCesGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_guardrail',
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
    this._app = config.app;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._guardrailId = config.guardrailId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._action.internalValue = config.action;
    this._codeCallback.internalValue = config.codeCallback;
    this._contentFilter.internalValue = config.contentFilter;
    this._llmPolicy.internalValue = config.llmPolicy;
    this._llmPromptSecurity.internalValue = config.llmPromptSecurity;
    this._modelSafety.internalValue = config.modelSafety;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // guardrail_id - computed: false, optional: false, required: true
  private _guardrailId?: string; 
  public get guardrailId() {
    return this.getStringAttribute('guardrail_id');
  }
  public set guardrailId(value: string) {
    this._guardrailId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailIdInput() {
    return this._guardrailId;
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

  // action - computed: false, optional: true, required: false
  private _action = new GoogleCesGuardrailActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: GoogleCesGuardrailAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // code_callback - computed: false, optional: true, required: false
  private _codeCallback = new GoogleCesGuardrailCodeCallbackOutputReference(this, "code_callback");
  public get codeCallback() {
    return this._codeCallback;
  }
  public putCodeCallback(value: GoogleCesGuardrailCodeCallback) {
    this._codeCallback.internalValue = value;
  }
  public resetCodeCallback() {
    this._codeCallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeCallbackInput() {
    return this._codeCallback.internalValue;
  }

  // content_filter - computed: false, optional: true, required: false
  private _contentFilter = new GoogleCesGuardrailContentFilterOutputReference(this, "content_filter");
  public get contentFilter() {
    return this._contentFilter;
  }
  public putContentFilter(value: GoogleCesGuardrailContentFilter) {
    this._contentFilter.internalValue = value;
  }
  public resetContentFilter() {
    this._contentFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilterInput() {
    return this._contentFilter.internalValue;
  }

  // llm_policy - computed: false, optional: true, required: false
  private _llmPolicy = new GoogleCesGuardrailLlmPolicyOutputReference(this, "llm_policy");
  public get llmPolicy() {
    return this._llmPolicy;
  }
  public putLlmPolicy(value: GoogleCesGuardrailLlmPolicy) {
    this._llmPolicy.internalValue = value;
  }
  public resetLlmPolicy() {
    this._llmPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmPolicyInput() {
    return this._llmPolicy.internalValue;
  }

  // llm_prompt_security - computed: false, optional: true, required: false
  private _llmPromptSecurity = new GoogleCesGuardrailLlmPromptSecurityOutputReference(this, "llm_prompt_security");
  public get llmPromptSecurity() {
    return this._llmPromptSecurity;
  }
  public putLlmPromptSecurity(value: GoogleCesGuardrailLlmPromptSecurity) {
    this._llmPromptSecurity.internalValue = value;
  }
  public resetLlmPromptSecurity() {
    this._llmPromptSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmPromptSecurityInput() {
    return this._llmPromptSecurity.internalValue;
  }

  // model_safety - computed: false, optional: true, required: false
  private _modelSafety = new GoogleCesGuardrailModelSafetyOutputReference(this, "model_safety");
  public get modelSafety() {
    return this._modelSafety;
  }
  public putModelSafety(value: GoogleCesGuardrailModelSafety) {
    this._modelSafety.internalValue = value;
  }
  public resetModelSafety() {
    this._modelSafety.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSafetyInput() {
    return this._modelSafety.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCesGuardrailTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCesGuardrailTimeouts) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      guardrail_id: cdktf.stringToTerraform(this._guardrailId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      action: googleCesGuardrailActionToTerraform(this._action.internalValue),
      code_callback: googleCesGuardrailCodeCallbackToTerraform(this._codeCallback.internalValue),
      content_filter: googleCesGuardrailContentFilterToTerraform(this._contentFilter.internalValue),
      llm_policy: googleCesGuardrailLlmPolicyToTerraform(this._llmPolicy.internalValue),
      llm_prompt_security: googleCesGuardrailLlmPromptSecurityToTerraform(this._llmPromptSecurity.internalValue),
      model_safety: googleCesGuardrailModelSafetyToTerraform(this._modelSafety.internalValue),
      timeouts: googleCesGuardrailTimeoutsToTerraform(this._timeouts.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guardrail_id: {
        value: cdktf.stringToHclTerraform(this._guardrailId),
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
      action: {
        value: googleCesGuardrailActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesGuardrailActionList",
      },
      code_callback: {
        value: googleCesGuardrailCodeCallbackToHclTerraform(this._codeCallback.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesGuardrailCodeCallbackList",
      },
      content_filter: {
        value: googleCesGuardrailContentFilterToHclTerraform(this._contentFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesGuardrailContentFilterList",
      },
      llm_policy: {
        value: googleCesGuardrailLlmPolicyToHclTerraform(this._llmPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesGuardrailLlmPolicyList",
      },
      llm_prompt_security: {
        value: googleCesGuardrailLlmPromptSecurityToHclTerraform(this._llmPromptSecurity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesGuardrailLlmPromptSecurityList",
      },
      model_safety: {
        value: googleCesGuardrailModelSafetyToHclTerraform(this._modelSafety.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesGuardrailModelSafetyList",
      },
      timeouts: {
        value: googleCesGuardrailTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCesGuardrailTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
