// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDialogflowCxToolVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#deletion_policy GoogleDialogflowCxToolVersion#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name of the tool version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tool to create a Version for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#parent GoogleDialogflowCxToolVersion#parent}
  */
  readonly parent: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#timeouts GoogleDialogflowCxToolVersion#timeouts}
  */
  readonly timeouts?: GoogleDialogflowCxToolVersionTimeouts;
  /**
  * tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#tool GoogleDialogflowCxToolVersion#tool}
  */
  readonly tool: GoogleDialogflowCxToolVersionTool;
}
export interface GoogleDialogflowCxToolVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#create GoogleDialogflowCxToolVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#delete GoogleDialogflowCxToolVersion#delete}
  */
  readonly delete?: string;
}

export function googleDialogflowCxToolVersionTimeoutsToTerraform(struct?: GoogleDialogflowCxToolVersionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleDialogflowCxToolVersionTimeoutsToHclTerraform(struct?: GoogleDialogflowCxToolVersionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation {
  /**
  * ID of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#entity_id GoogleDialogflowCxToolVersion#entity_id}
  */
  readonly entityId: string;
  /**
  * The operation to perform on the entity. Possible values: ["LIST", "CREATE", "UPDATE", "DELETE", "GET"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#operation GoogleDialogflowCxToolVersion#operation}
  */
  readonly operation: string;
}

export function googleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationToTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference | GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    operation: cdktf.stringToTerraform(struct!.operation),
  }
}


export function googleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference | GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityId = undefined;
      this._operation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityId = value.entityId;
      this._operation = value.operation;
    }
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }
}
export interface GoogleDialogflowCxToolVersionToolConnectorSpecActions {
  /**
  * ID of a Connection action for the tool to use. This field is part of a required union field 'action_spec'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#connection_action_id GoogleDialogflowCxToolVersion#connection_action_id}
  */
  readonly connectionActionId?: string;
  /**
  * Entity fields to use as inputs for the operation.
  * If no fields are specified, all fields of the Entity will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#input_fields GoogleDialogflowCxToolVersion#input_fields}
  */
  readonly inputFields?: string[];
  /**
  * Entity fields to return from the operation.
  * If no fields are specified, all fields of the Entity will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#output_fields GoogleDialogflowCxToolVersion#output_fields}
  */
  readonly outputFields?: string[];
  /**
  * entity_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#entity_operation GoogleDialogflowCxToolVersion#entity_operation}
  */
  readonly entityOperation?: GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation;
}

export function googleDialogflowCxToolVersionToolConnectorSpecActionsToTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_action_id: cdktf.stringToTerraform(struct!.connectionActionId),
    input_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputFields),
    output_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputFields),
    entity_operation: googleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationToTerraform(struct!.entityOperation),
  }
}


export function googleDialogflowCxToolVersionToolConnectorSpecActionsToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_action_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionActionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    output_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outputFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_operation: {
      value: googleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationToHclTerraform(struct!.entityOperation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxToolVersionToolConnectorSpecActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionActionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionActionId = this._connectionActionId;
    }
    if (this._inputFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFields = this._inputFields;
    }
    if (this._outputFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFields = this._outputFields;
    }
    if (this._entityOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityOperation = this._entityOperation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolConnectorSpecActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionActionId = undefined;
      this._inputFields = undefined;
      this._outputFields = undefined;
      this._entityOperation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionActionId = value.connectionActionId;
      this._inputFields = value.inputFields;
      this._outputFields = value.outputFields;
      this._entityOperation.internalValue = value.entityOperation;
    }
  }

  // connection_action_id - computed: false, optional: true, required: false
  private _connectionActionId?: string; 
  public get connectionActionId() {
    return this.getStringAttribute('connection_action_id');
  }
  public set connectionActionId(value: string) {
    this._connectionActionId = value;
  }
  public resetConnectionActionId() {
    this._connectionActionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionActionIdInput() {
    return this._connectionActionId;
  }

  // input_fields - computed: false, optional: true, required: false
  private _inputFields?: string[]; 
  public get inputFields() {
    return this.getListAttribute('input_fields');
  }
  public set inputFields(value: string[]) {
    this._inputFields = value;
  }
  public resetInputFields() {
    this._inputFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFieldsInput() {
    return this._inputFields;
  }

  // output_fields - computed: false, optional: true, required: false
  private _outputFields?: string[]; 
  public get outputFields() {
    return this.getListAttribute('output_fields');
  }
  public set outputFields(value: string[]) {
    this._outputFields = value;
  }
  public resetOutputFields() {
    this._outputFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFieldsInput() {
    return this._outputFields;
  }

  // entity_operation - computed: false, optional: true, required: false
  private _entityOperation = new GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference(this, "entity_operation");
  public get entityOperation() {
    return this._entityOperation;
  }
  public putEntityOperation(value: GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation) {
    this._entityOperation.internalValue = value;
  }
  public resetEntityOperation() {
    this._entityOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityOperationInput() {
    return this._entityOperation.internalValue;
  }
}

export class GoogleDialogflowCxToolVersionToolConnectorSpecActionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxToolVersionToolConnectorSpecActions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference {
    return new GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig {
  /**
  * Oauth token value or parameter name to pass it through.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#oauth_token GoogleDialogflowCxToolVersion#oauth_token}
  */
  readonly oauthToken: string;
}

export function googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigToTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference | GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth_token: cdktf.stringToTerraform(struct!.oauthToken),
  }
}


export function googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference | GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth_token: {
      value: cdktf.stringToHclTerraform(struct!.oauthToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauthToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthToken = this._oauthToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauthToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauthToken = value.oauthToken;
    }
  }

  // oauth_token - computed: false, optional: false, required: true
  private _oauthToken?: string; 
  public get oauthToken() {
    return this.getStringAttribute('oauth_token');
  }
  public set oauthToken(value: string) {
    this._oauthToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken;
  }
}
export interface GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig {
  /**
  * Client key value or parameter name to pass it through.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#client_key GoogleDialogflowCxToolVersion#client_key}
  */
  readonly clientKey: string;
  /**
  * Issuer value or parameter name to pass it through.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#issuer GoogleDialogflowCxToolVersion#issuer}
  */
  readonly issuer: string;
  /**
  * Subject value or parameter name to pass it through.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#subject GoogleDialogflowCxToolVersion#subject}
  */
  readonly subject: string;
}

export function googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigToTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference | GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference | GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientKey = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientKey = value.clientKey;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // client_key - computed: false, optional: false, required: true
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig {
  /**
  * oauth2_auth_code_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#oauth2_auth_code_config GoogleDialogflowCxToolVersion#oauth2_auth_code_config}
  */
  readonly oauth2AuthCodeConfig?: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig;
  /**
  * oauth2_jwt_bearer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#oauth2_jwt_bearer_config GoogleDialogflowCxToolVersion#oauth2_jwt_bearer_config}
  */
  readonly oauth2JwtBearerConfig?: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig;
}

export function googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigToTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference | GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth2_auth_code_config: googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigToTerraform(struct!.oauth2AuthCodeConfig),
    oauth2_jwt_bearer_config: googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigToTerraform(struct!.oauth2JwtBearerConfig),
  }
}


export function googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference | GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth2_auth_code_config: {
      value: googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigToHclTerraform(struct!.oauth2AuthCodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigList",
    },
    oauth2_jwt_bearer_config: {
      value: googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigToHclTerraform(struct!.oauth2JwtBearerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauth2AuthCodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2AuthCodeConfig = this._oauth2AuthCodeConfig?.internalValue;
    }
    if (this._oauth2JwtBearerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2JwtBearerConfig = this._oauth2JwtBearerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauth2AuthCodeConfig.internalValue = undefined;
      this._oauth2JwtBearerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauth2AuthCodeConfig.internalValue = value.oauth2AuthCodeConfig;
      this._oauth2JwtBearerConfig.internalValue = value.oauth2JwtBearerConfig;
    }
  }

  // oauth2_auth_code_config - computed: false, optional: true, required: false
  private _oauth2AuthCodeConfig = new GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference(this, "oauth2_auth_code_config");
  public get oauth2AuthCodeConfig() {
    return this._oauth2AuthCodeConfig;
  }
  public putOauth2AuthCodeConfig(value: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig) {
    this._oauth2AuthCodeConfig.internalValue = value;
  }
  public resetOauth2AuthCodeConfig() {
    this._oauth2AuthCodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthCodeConfigInput() {
    return this._oauth2AuthCodeConfig.internalValue;
  }

  // oauth2_jwt_bearer_config - computed: false, optional: true, required: false
  private _oauth2JwtBearerConfig = new GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference(this, "oauth2_jwt_bearer_config");
  public get oauth2JwtBearerConfig() {
    return this._oauth2JwtBearerConfig;
  }
  public putOauth2JwtBearerConfig(value: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig) {
    this._oauth2JwtBearerConfig.internalValue = value;
  }
  public resetOauth2JwtBearerConfig() {
    this._oauth2JwtBearerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2JwtBearerConfigInput() {
    return this._oauth2JwtBearerConfig.internalValue;
  }
}
export interface GoogleDialogflowCxToolVersionToolConnectorSpec {
  /**
  * The full resource name of the referenced Integration Connectors Connection.
  * Format: projects/* /locations/* /connections/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#name GoogleDialogflowCxToolVersion#name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly name: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#actions GoogleDialogflowCxToolVersion#actions}
  */
  readonly actions: GoogleDialogflowCxToolVersionToolConnectorSpecActions[] | cdktf.IResolvable;
  /**
  * end_user_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#end_user_auth_config GoogleDialogflowCxToolVersion#end_user_auth_config}
  */
  readonly endUserAuthConfig?: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig;
}

export function googleDialogflowCxToolVersionToolConnectorSpecToTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference | GoogleDialogflowCxToolVersionToolConnectorSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    actions: cdktf.listMapper(googleDialogflowCxToolVersionToolConnectorSpecActionsToTerraform, true)(struct!.actions),
    end_user_auth_config: googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigToTerraform(struct!.endUserAuthConfig),
  }
}


export function googleDialogflowCxToolVersionToolConnectorSpecToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference | GoogleDialogflowCxToolVersionToolConnectorSpec): any {
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
    actions: {
      value: cdktf.listMapperHcl(googleDialogflowCxToolVersionToolConnectorSpecActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolConnectorSpecActionsList",
    },
    end_user_auth_config: {
      value: googleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigToHclTerraform(struct!.endUserAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolConnectorSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._endUserAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endUserAuthConfig = this._endUserAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolConnectorSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._endUserAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._endUserAuthConfig.internalValue = value.endUserAuthConfig;
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

  // actions - computed: false, optional: false, required: true
  private _actions = new GoogleDialogflowCxToolVersionToolConnectorSpecActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: GoogleDialogflowCxToolVersionToolConnectorSpecActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // end_user_auth_config - computed: false, optional: true, required: false
  private _endUserAuthConfig = new GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference(this, "end_user_auth_config");
  public get endUserAuthConfig() {
    return this._endUserAuthConfig;
  }
  public putEndUserAuthConfig(value: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig) {
    this._endUserAuthConfig.internalValue = value;
  }
  public resetEndUserAuthConfig() {
    this._endUserAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserAuthConfigInput() {
    return this._endUserAuthConfig.internalValue;
  }
}
export interface GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections {
  /**
  * The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#data_store GoogleDialogflowCxToolVersion#data_store}
  */
  readonly dataStore?: string;
  /**
  * The type of the connected data store.
  * See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#data_store_type GoogleDialogflowCxToolVersion#data_store_type}
  */
  readonly dataStoreType?: string;
  /**
  * The document processing mode for the data store connection. Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
  * See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#document_processing_mode GoogleDialogflowCxToolVersion#document_processing_mode}
  */
  readonly documentProcessingMode?: string;
}

export function googleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsToTerraform(struct?: GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_store: cdktf.stringToTerraform(struct!.dataStore),
    data_store_type: cdktf.stringToTerraform(struct!.dataStoreType),
    document_processing_mode: cdktf.stringToTerraform(struct!.documentProcessingMode),
  }
}


export function googleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_store: {
      value: cdktf.stringToHclTerraform(struct!.dataStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_type: {
      value: cdktf.stringToHclTerraform(struct!.dataStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_processing_mode: {
      value: cdktf.stringToHclTerraform(struct!.documentProcessingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore;
    }
    if (this._dataStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreType = this._dataStoreType;
    }
    if (this._documentProcessingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentProcessingMode = this._documentProcessingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataStore = undefined;
      this._dataStoreType = undefined;
      this._documentProcessingMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataStore = value.dataStore;
      this._dataStoreType = value.dataStoreType;
      this._documentProcessingMode = value.documentProcessingMode;
    }
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore?: string; 
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }
  public set dataStore(value: string) {
    this._dataStore = value;
  }
  public resetDataStore() {
    this._dataStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore;
  }

  // data_store_type - computed: false, optional: true, required: false
  private _dataStoreType?: string; 
  public get dataStoreType() {
    return this.getStringAttribute('data_store_type');
  }
  public set dataStoreType(value: string) {
    this._dataStoreType = value;
  }
  public resetDataStoreType() {
    this._dataStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreTypeInput() {
    return this._dataStoreType;
  }

  // document_processing_mode - computed: false, optional: true, required: false
  private _documentProcessingMode?: string; 
  public get documentProcessingMode() {
    return this.getStringAttribute('document_processing_mode');
  }
  public set documentProcessingMode(value: string) {
    this._documentProcessingMode = value;
  }
  public resetDocumentProcessingMode() {
    this._documentProcessingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentProcessingModeInput() {
    return this._documentProcessingMode;
  }
}

export class GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference {
    return new GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt {
}

export function googleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptToTerraform(struct?: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference | GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference | GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDialogflowCxToolVersionToolDataStoreSpec {
  /**
  * data_store_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#data_store_connections GoogleDialogflowCxToolVersion#data_store_connections}
  */
  readonly dataStoreConnections: GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections[] | cdktf.IResolvable;
  /**
  * fallback_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#fallback_prompt GoogleDialogflowCxToolVersion#fallback_prompt}
  */
  readonly fallbackPrompt: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt;
}

export function googleDialogflowCxToolVersionToolDataStoreSpecToTerraform(struct?: GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference | GoogleDialogflowCxToolVersionToolDataStoreSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_store_connections: cdktf.listMapper(googleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsToTerraform, true)(struct!.dataStoreConnections),
    fallback_prompt: googleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptToTerraform(struct!.fallbackPrompt),
  }
}


export function googleDialogflowCxToolVersionToolDataStoreSpecToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference | GoogleDialogflowCxToolVersionToolDataStoreSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_store_connections: {
      value: cdktf.listMapperHcl(googleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsToHclTerraform, true)(struct!.dataStoreConnections),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList",
    },
    fallback_prompt: {
      value: googleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptToHclTerraform(struct!.fallbackPrompt),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolDataStoreSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStoreConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreConnections = this._dataStoreConnections?.internalValue;
    }
    if (this._fallbackPrompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackPrompt = this._fallbackPrompt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolDataStoreSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataStoreConnections.internalValue = undefined;
      this._fallbackPrompt.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataStoreConnections.internalValue = value.dataStoreConnections;
      this._fallbackPrompt.internalValue = value.fallbackPrompt;
    }
  }

  // data_store_connections - computed: false, optional: false, required: true
  private _dataStoreConnections = new GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList(this, "data_store_connections", false);
  public get dataStoreConnections() {
    return this._dataStoreConnections;
  }
  public putDataStoreConnections(value: GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections[] | cdktf.IResolvable) {
    this._dataStoreConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreConnectionsInput() {
    return this._dataStoreConnections.internalValue;
  }

  // fallback_prompt - computed: false, optional: false, required: true
  private _fallbackPrompt = new GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference(this, "fallback_prompt");
  public get fallbackPrompt() {
    return this._fallbackPrompt;
  }
  public putFallbackPrompt(value: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt) {
    this._fallbackPrompt.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPromptInput() {
    return this._fallbackPrompt.internalValue;
  }
}
export interface GoogleDialogflowCxToolVersionToolFunctionSpec {
  /**
  * Optional. The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
  * This input is a JSON object that contains the function's parameters as properties of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#input_schema GoogleDialogflowCxToolVersion#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * Optional. The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
  * This output is a JSON object that contains the function's parameters as properties of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#output_schema GoogleDialogflowCxToolVersion#output_schema}
  */
  readonly outputSchema?: string;
}

export function googleDialogflowCxToolVersionToolFunctionSpecToTerraform(struct?: GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference | GoogleDialogflowCxToolVersionToolFunctionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_schema: cdktf.stringToTerraform(struct!.inputSchema),
    output_schema: cdktf.stringToTerraform(struct!.outputSchema),
  }
}


export function googleDialogflowCxToolVersionToolFunctionSpecToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference | GoogleDialogflowCxToolVersionToolFunctionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_schema: {
      value: cdktf.stringToHclTerraform(struct!.inputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_schema: {
      value: cdktf.stringToHclTerraform(struct!.outputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolFunctionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema;
    }
    if (this._outputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchema = this._outputSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolFunctionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputSchema = undefined;
      this._outputSchema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputSchema = value.inputSchema;
      this._outputSchema = value.outputSchema;
    }
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
  }

  // output_schema - computed: false, optional: true, required: false
  private _outputSchema?: string; 
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }
  public set outputSchema(value: string) {
    this._outputSchema = value;
  }
  public resetOutputSchema() {
    this._outputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaInput() {
    return this._outputSchema;
  }
}
export interface GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig {
  /**
  * Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#api_key GoogleDialogflowCxToolVersion#api_key}
  */
  readonly apiKey?: string;
  /**
  * The parameter name or the header name of the API key.
  * E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#key_name GoogleDialogflowCxToolVersion#key_name}
  */
  readonly keyName: string;
  /**
  * Key location in the request.
  * See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#request_location GoogleDialogflowCxToolVersion#request_location}
  */
  readonly requestLocation: string;
  /**
  * Optional. The name of the SecretManager secret version resource storing the API key.
  * If this field is set, the apiKey field will be ignored.
  * Format: projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_api_key GoogleDialogflowCxToolVersion#secret_version_for_api_key}
  */
  readonly secretVersionForApiKey?: string;
}

export function googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigToTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    request_location: cdktf.stringToTerraform(struct!.requestLocation),
    secret_version_for_api_key: cdktf.stringToTerraform(struct!.secretVersionForApiKey),
  }
}


export function googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_location: {
      value: cdktf.stringToHclTerraform(struct!.requestLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version_for_api_key: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionForApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._requestLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLocation = this._requestLocation;
    }
    if (this._secretVersionForApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForApiKey = this._secretVersionForApiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._keyName = undefined;
      this._requestLocation = undefined;
      this._secretVersionForApiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._keyName = value.keyName;
      this._requestLocation = value.requestLocation;
      this._secretVersionForApiKey = value.secretVersionForApiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // request_location - computed: false, optional: false, required: true
  private _requestLocation?: string; 
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
  public set requestLocation(value: string) {
    this._requestLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLocationInput() {
    return this._requestLocation;
  }

  // secret_version_for_api_key - computed: false, optional: true, required: false
  private _secretVersionForApiKey?: string; 
  public get secretVersionForApiKey() {
    return this.getStringAttribute('secret_version_for_api_key');
  }
  public set secretVersionForApiKey(value: string) {
    this._secretVersionForApiKey = value;
  }
  public resetSecretVersionForApiKey() {
    this._secretVersionForApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForApiKeyInput() {
    return this._secretVersionForApiKey;
  }
}
export interface GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig {
  /**
  * Optional. The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
  * Format: projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_token GoogleDialogflowCxToolVersion#secret_version_for_token}
  */
  readonly secretVersionForToken?: string;
  /**
  * Optional. The text token appended to the text Bearer to the request Authorization header.
  * [Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#token GoogleDialogflowCxToolVersion#token}
  */
  readonly token?: string;
}

export function googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigToTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version_for_token: cdktf.stringToTerraform(struct!.secretVersionForToken),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version_for_token: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionForToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersionForToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForToken = this._secretVersionForToken;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersionForToken = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersionForToken = value.secretVersionForToken;
      this._token = value.token;
    }
  }

  // secret_version_for_token - computed: false, optional: true, required: false
  private _secretVersionForToken?: string; 
  public get secretVersionForToken() {
    return this.getStringAttribute('secret_version_for_token');
  }
  public set secretVersionForToken(value: string) {
    this._secretVersionForToken = value;
  }
  public resetSecretVersionForToken() {
    this._secretVersionForToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForTokenInput() {
    return this._secretVersionForToken;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig {
  /**
  * The client ID from the OAuth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#client_id GoogleDialogflowCxToolVersion#client_id}
  */
  readonly clientId: string;
  /**
  * Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#client_secret GoogleDialogflowCxToolVersion#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAuth grant types.
  * See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#oauth_grant_type GoogleDialogflowCxToolVersion#oauth_grant_type}
  */
  readonly oauthGrantType: string;
  /**
  * Optional. The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#scopes GoogleDialogflowCxToolVersion#scopes}
  */
  readonly scopes?: string[];
  /**
  * Optional. The name of the SecretManager secret version resource storing the client secret.
  * If this field is set, the clientSecret field will be ignored.
  * Format: projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_client_secret GoogleDialogflowCxToolVersion#secret_version_for_client_secret}
  */
  readonly secretVersionForClientSecret?: string;
  /**
  * The token endpoint in the OAuth provider to exchange for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#token_endpoint GoogleDialogflowCxToolVersion#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigToTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_grant_type: cdktf.stringToTerraform(struct!.oauthGrantType),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    secret_version_for_client_secret: cdktf.stringToTerraform(struct!.secretVersionForClientSecret),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_grant_type: {
      value: cdktf.stringToHclTerraform(struct!.oauthGrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_version_for_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionForClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthGrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthGrantType = this._oauthGrantType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secretVersionForClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForClientSecret = this._secretVersionForClientSecret;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthGrantType = undefined;
      this._scopes = undefined;
      this._secretVersionForClientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthGrantType = value.oauthGrantType;
      this._scopes = value.scopes;
      this._secretVersionForClientSecret = value.secretVersionForClientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // oauth_grant_type - computed: false, optional: false, required: true
  private _oauthGrantType?: string; 
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }
  public set oauthGrantType(value: string) {
    this._oauthGrantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthGrantTypeInput() {
    return this._oauthGrantType;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_version_for_client_secret - computed: false, optional: true, required: false
  private _secretVersionForClientSecret?: string; 
  public get secretVersionForClientSecret() {
    return this.getStringAttribute('secret_version_for_client_secret');
  }
  public set secretVersionForClientSecret(value: string) {
    this._secretVersionForClientSecret = value;
  }
  public resetSecretVersionForClientSecret() {
    this._secretVersionForClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForClientSecretInput() {
    return this._secretVersionForClientSecret;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig {
  /**
  * Optional. Indicate the auth token type generated from the Diglogflow service agent.
  * The generated token is sent in the Authorization header.
  * See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#service_agent_auth GoogleDialogflowCxToolVersion#service_agent_auth}
  */
  readonly serviceAgentAuth?: string;
}

export function googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigToTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_agent_auth: cdktf.stringToTerraform(struct!.serviceAgentAuth),
  }
}


export function googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_agent_auth: {
      value: cdktf.stringToHclTerraform(struct!.serviceAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuth = this._serviceAgentAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAgentAuth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAgentAuth = value.serviceAgentAuth;
    }
  }

  // service_agent_auth - computed: false, optional: true, required: false
  private _serviceAgentAuth?: string; 
  public get serviceAgentAuth() {
    return this.getStringAttribute('service_agent_auth');
  }
  public set serviceAgentAuth(value: string) {
    this._serviceAgentAuth = value;
  }
  public resetServiceAgentAuth() {
    this._serviceAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthInput() {
    return this._serviceAgentAuth;
  }
}
export interface GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication {
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#api_key_config GoogleDialogflowCxToolVersion#api_key_config}
  */
  readonly apiKeyConfig?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig;
  /**
  * bearer_token_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#bearer_token_config GoogleDialogflowCxToolVersion#bearer_token_config}
  */
  readonly bearerTokenConfig?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#oauth_config GoogleDialogflowCxToolVersion#oauth_config}
  */
  readonly oauthConfig?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig;
  /**
  * service_agent_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#service_agent_auth_config GoogleDialogflowCxToolVersion#service_agent_auth_config}
  */
  readonly serviceAgentAuthConfig?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
}

export function googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationToTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_config: googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigToTerraform(struct!.apiKeyConfig),
    bearer_token_config: googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigToTerraform(struct!.bearerTokenConfig),
    oauth_config: googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigToTerraform(struct!.oauthConfig),
    service_agent_auth_config: googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigToTerraform(struct!.serviceAgentAuthConfig),
  }
}


export function googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_config: {
      value: googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigList",
    },
    bearer_token_config: {
      value: googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigToHclTerraform(struct!.bearerTokenConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigList",
    },
    oauth_config: {
      value: googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigList",
    },
    service_agent_auth_config: {
      value: googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigToHclTerraform(struct!.serviceAgentAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyConfig = this._apiKeyConfig?.internalValue;
    }
    if (this._bearerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenConfig = this._bearerTokenConfig?.internalValue;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._serviceAgentAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuthConfig = this._serviceAgentAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyConfig.internalValue = undefined;
      this._bearerTokenConfig.internalValue = undefined;
      this._oauthConfig.internalValue = undefined;
      this._serviceAgentAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
      this._bearerTokenConfig.internalValue = value.bearerTokenConfig;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._serviceAgentAuthConfig.internalValue = value.serviceAgentAuthConfig;
    }
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig) {
    this._apiKeyConfig.internalValue = value;
  }
  public resetApiKeyConfig() {
    this._apiKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyConfigInput() {
    return this._apiKeyConfig.internalValue;
  }

  // bearer_token_config - computed: false, optional: true, required: false
  private _bearerTokenConfig = new GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(this, "bearer_token_config");
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }
  public putBearerTokenConfig(value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig) {
    this._bearerTokenConfig.internalValue = value;
  }
  public resetBearerTokenConfig() {
    this._bearerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenConfigInput() {
    return this._bearerTokenConfig.internalValue;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // service_agent_auth_config - computed: false, optional: true, required: false
  private _serviceAgentAuthConfig = new GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(this, "service_agent_auth_config");
  public get serviceAgentAuthConfig() {
    return this._serviceAgentAuthConfig;
  }
  public putServiceAgentAuthConfig(value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig) {
    this._serviceAgentAuthConfig.internalValue = value;
  }
  public resetServiceAgentAuthConfig() {
    this._serviceAgentAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthConfigInput() {
    return this._serviceAgentAuthConfig.internalValue;
  }
}
export interface GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig {
  /**
  * The name of [Service Directory](https://cloud.google.com/service-directory/docs) service.
  * Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#service GoogleDialogflowCxToolVersion#service}
  */
  readonly service: string;
}

export function googleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigToTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts {
  /**
  * The allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store.
  * If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
  * N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
  * For instance a certificate can be self-signed using the following command:
  * ```
  *   openssl x509 -req -days 200 -in example.com.csr \
  *     -signkey example.com.key \
  *     -out example.com.crt \
  *     -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  * ```
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#cert GoogleDialogflowCxToolVersion#cert}
  */
  readonly cert: string;
  /**
  * The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}
  */
  readonly displayName: string;
}

export function googleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsToTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function googleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._displayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._displayName = value.displayName;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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
}

export class GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference {
    return new GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig {
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#ca_certs GoogleDialogflowCxToolVersion#ca_certs}
  */
  readonly caCerts: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts[] | cdktf.IResolvable;
}

export function googleDialogflowCxToolVersionToolOpenApiSpecTlsConfigToTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certs: cdktf.listMapper(googleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsToTerraform, true)(struct!.caCerts),
  }
}


export function googleDialogflowCxToolVersionToolOpenApiSpecTlsConfigToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certs: {
      value: cdktf.listMapperHcl(googleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsToHclTerraform, true)(struct!.caCerts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCerts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCerts.internalValue = value.caCerts;
    }
  }

  // ca_certs - computed: false, optional: false, required: true
  private _caCerts = new GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts[] | cdktf.IResolvable) {
    this._caCerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }
}
export interface GoogleDialogflowCxToolVersionToolOpenApiSpec {
  /**
  * The OpenAPI schema specified as a text.
  * This field is part of a union field 'schema': only one of 'textSchema' may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#text_schema GoogleDialogflowCxToolVersion#text_schema}
  */
  readonly textSchema: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#authentication GoogleDialogflowCxToolVersion#authentication}
  */
  readonly authentication?: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#service_directory_config GoogleDialogflowCxToolVersion#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#tls_config GoogleDialogflowCxToolVersion#tls_config}
  */
  readonly tlsConfig?: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig;
}

export function googleDialogflowCxToolVersionToolOpenApiSpecToTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_schema: cdktf.stringToTerraform(struct!.textSchema),
    authentication: googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationToTerraform(struct!.authentication),
    service_directory_config: googleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
    tls_config: googleDialogflowCxToolVersionToolOpenApiSpecTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function googleDialogflowCxToolVersionToolOpenApiSpecToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference | GoogleDialogflowCxToolVersionToolOpenApiSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_schema: {
      value: cdktf.stringToHclTerraform(struct!.textSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleDialogflowCxToolVersionToolOpenApiSpecAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationList",
    },
    service_directory_config: {
      value: googleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigList",
    },
    tls_config: {
      value: googleDialogflowCxToolVersionToolOpenApiSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionToolOpenApiSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.textSchema = this._textSchema;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionToolOpenApiSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textSchema = undefined;
      this._authentication.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textSchema = value.textSchema;
      this._authentication.internalValue = value.authentication;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // text_schema - computed: false, optional: false, required: true
  private _textSchema?: string; 
  public get textSchema() {
    return this.getStringAttribute('text_schema');
  }
  public set textSchema(value: string) {
    this._textSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textSchemaInput() {
    return this._textSchema;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface GoogleDialogflowCxToolVersionTool {
  /**
  * High level description of the Tool and its usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#description GoogleDialogflowCxToolVersion#description}
  */
  readonly description: string;
  /**
  * The human-readable name of the tool, unique within the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}
  */
  readonly displayName: string;
  /**
  * connector_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#connector_spec GoogleDialogflowCxToolVersion#connector_spec}
  */
  readonly connectorSpec?: GoogleDialogflowCxToolVersionToolConnectorSpec;
  /**
  * data_store_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#data_store_spec GoogleDialogflowCxToolVersion#data_store_spec}
  */
  readonly dataStoreSpec?: GoogleDialogflowCxToolVersionToolDataStoreSpec;
  /**
  * function_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#function_spec GoogleDialogflowCxToolVersion#function_spec}
  */
  readonly functionSpec?: GoogleDialogflowCxToolVersionToolFunctionSpec;
  /**
  * open_api_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#open_api_spec GoogleDialogflowCxToolVersion#open_api_spec}
  */
  readonly openApiSpec?: GoogleDialogflowCxToolVersionToolOpenApiSpec;
}

export function googleDialogflowCxToolVersionToolToTerraform(struct?: GoogleDialogflowCxToolVersionToolOutputReference | GoogleDialogflowCxToolVersionTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    connector_spec: googleDialogflowCxToolVersionToolConnectorSpecToTerraform(struct!.connectorSpec),
    data_store_spec: googleDialogflowCxToolVersionToolDataStoreSpecToTerraform(struct!.dataStoreSpec),
    function_spec: googleDialogflowCxToolVersionToolFunctionSpecToTerraform(struct!.functionSpec),
    open_api_spec: googleDialogflowCxToolVersionToolOpenApiSpecToTerraform(struct!.openApiSpec),
  }
}


export function googleDialogflowCxToolVersionToolToHclTerraform(struct?: GoogleDialogflowCxToolVersionToolOutputReference | GoogleDialogflowCxToolVersionTool): any {
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
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_spec: {
      value: googleDialogflowCxToolVersionToolConnectorSpecToHclTerraform(struct!.connectorSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolConnectorSpecList",
    },
    data_store_spec: {
      value: googleDialogflowCxToolVersionToolDataStoreSpecToHclTerraform(struct!.dataStoreSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolDataStoreSpecList",
    },
    function_spec: {
      value: googleDialogflowCxToolVersionToolFunctionSpecToHclTerraform(struct!.functionSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolFunctionSpecList",
    },
    open_api_spec: {
      value: googleDialogflowCxToolVersionToolOpenApiSpecToHclTerraform(struct!.openApiSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolVersionToolOpenApiSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolVersionToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolVersionTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._connectorSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorSpec = this._connectorSpec?.internalValue;
    }
    if (this._dataStoreSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreSpec = this._dataStoreSpec?.internalValue;
    }
    if (this._functionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionSpec = this._functionSpec?.internalValue;
    }
    if (this._openApiSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiSpec = this._openApiSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolVersionTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._connectorSpec.internalValue = undefined;
      this._dataStoreSpec.internalValue = undefined;
      this._functionSpec.internalValue = undefined;
      this._openApiSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._connectorSpec.internalValue = value.connectorSpec;
      this._dataStoreSpec.internalValue = value.dataStoreSpec;
      this._functionSpec.internalValue = value.functionSpec;
      this._openApiSpec.internalValue = value.openApiSpec;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tool_type - computed: true, optional: false, required: false
  public get toolType() {
    return this.getStringAttribute('tool_type');
  }

  // connector_spec - computed: false, optional: true, required: false
  private _connectorSpec = new GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference(this, "connector_spec");
  public get connectorSpec() {
    return this._connectorSpec;
  }
  public putConnectorSpec(value: GoogleDialogflowCxToolVersionToolConnectorSpec) {
    this._connectorSpec.internalValue = value;
  }
  public resetConnectorSpec() {
    this._connectorSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorSpecInput() {
    return this._connectorSpec.internalValue;
  }

  // data_store_spec - computed: false, optional: true, required: false
  private _dataStoreSpec = new GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference(this, "data_store_spec");
  public get dataStoreSpec() {
    return this._dataStoreSpec;
  }
  public putDataStoreSpec(value: GoogleDialogflowCxToolVersionToolDataStoreSpec) {
    this._dataStoreSpec.internalValue = value;
  }
  public resetDataStoreSpec() {
    this._dataStoreSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreSpecInput() {
    return this._dataStoreSpec.internalValue;
  }

  // function_spec - computed: false, optional: true, required: false
  private _functionSpec = new GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference(this, "function_spec");
  public get functionSpec() {
    return this._functionSpec;
  }
  public putFunctionSpec(value: GoogleDialogflowCxToolVersionToolFunctionSpec) {
    this._functionSpec.internalValue = value;
  }
  public resetFunctionSpec() {
    this._functionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionSpecInput() {
    return this._functionSpec.internalValue;
  }

  // open_api_spec - computed: false, optional: true, required: false
  private _openApiSpec = new GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference(this, "open_api_spec");
  public get openApiSpec() {
    return this._openApiSpec;
  }
  public putOpenApiSpec(value: GoogleDialogflowCxToolVersionToolOpenApiSpec) {
    this._openApiSpec.internalValue = value;
  }
  public resetOpenApiSpec() {
    this._openApiSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiSpecInput() {
    return this._openApiSpec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version google_dialogflow_cx_tool_version}
*/
export class GoogleDialogflowCxToolVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_tool_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDialogflowCxToolVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDialogflowCxToolVersion to import
  * @param importFromId The id of the existing GoogleDialogflowCxToolVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDialogflowCxToolVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_tool_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_dialogflow_cx_tool_version google_dialogflow_cx_tool_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowCxToolVersionConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowCxToolVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_tool_version',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._parent = config.parent;
    this._timeouts.internalValue = config.timeouts;
    this._tool.internalValue = config.tool;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowCxToolVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowCxToolVersionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tool - computed: false, optional: false, required: true
  private _tool = new GoogleDialogflowCxToolVersionToolOutputReference(this, "tool");
  public get tool() {
    return this._tool;
  }
  public putTool(value: GoogleDialogflowCxToolVersionTool) {
    this._tool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      timeouts: googleDialogflowCxToolVersionTimeoutsToTerraform(this._timeouts.internalValue),
      tool: googleDialogflowCxToolVersionToolToTerraform(this._tool.internalValue),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleDialogflowCxToolVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDialogflowCxToolVersionTimeouts",
      },
      tool: {
        value: googleDialogflowCxToolVersionToolToHclTerraform(this._tool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxToolVersionToolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
