// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCesToolsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#app GoogleCesToolset#app}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#deletion_policy GoogleCesToolset#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#description GoogleCesToolset#description}
  */
  readonly description?: string;
  /**
  * The display name of the toolset. Must be unique within the same app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}
  */
  readonly displayName?: string;
  /**
  * Possible values:
  * SYNCHRONOUS
  * ASYNCHRONOUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#execution_type GoogleCesToolset#execution_type}
  */
  readonly executionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#id GoogleCesToolset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#location GoogleCesToolset#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#project GoogleCesToolset#project}
  */
  readonly project?: string;
  /**
  * The timeout for the toolset execution. If not set, the default timeout is
  * 30 seconds for 'SYNCHRONOUS' toolsets and 60 seconds for 'ASYNCHRONOUS'
  * toolsets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#timeout GoogleCesToolset#timeout}
  */
  readonly timeout?: string;
  /**
  * The ID to use for the toolset, which will become the final component of
  * the toolset's resource name. If not provided, a unique ID will be
  * automatically assigned for the toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#toolset_id GoogleCesToolset#toolset_id}
  */
  readonly toolsetId: string;
  /**
  * connector_toolset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#connector_toolset GoogleCesToolset#connector_toolset}
  */
  readonly connectorToolset?: GoogleCesToolsetConnectorToolset;
  /**
  * mcp_toolset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#mcp_toolset GoogleCesToolset#mcp_toolset}
  */
  readonly mcpToolset?: GoogleCesToolsetMcpToolset;
  /**
  * open_api_toolset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#open_api_toolset GoogleCesToolset#open_api_toolset}
  */
  readonly openApiToolset?: GoogleCesToolsetOpenApiToolset;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#timeouts GoogleCesToolset#timeouts}
  */
  readonly timeouts?: GoogleCesToolsetTimeouts;
  /**
  * tool_fake_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#tool_fake_config GoogleCesToolset#tool_fake_config}
  */
  readonly toolFakeConfig?: GoogleCesToolsetToolFakeConfig;
}
export interface GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig {
  /**
  * Oauth token parameter name to pass through.
  * Must be in the format '$context.variables.<name_of_variable>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#oauth_token GoogleCesToolset#oauth_token}
  */
  readonly oauthToken: string;
}

export function googleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigToTerraform(struct?: GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference | GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth_token: cdktf.stringToTerraform(struct!.oauthToken),
  }
}


export function googleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigToHclTerraform(struct?: GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference | GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig): any {
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

export class GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauthToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthToken = this._oauthToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig | undefined) {
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
export interface GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig {
  /**
  * Client parameter name to pass through.
  * Must be in the format '$context.variables.<name_of_variable>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#client_key GoogleCesToolset#client_key}
  */
  readonly clientKey: string;
  /**
  * Issuer parameter name to pass through.
  * Must be in the format '$context.variables.<name_of_variable>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#issuer GoogleCesToolset#issuer}
  */
  readonly issuer: string;
  /**
  * Subject parameter name to pass through.
  * Must be in the format '$context.variables.<name_of_variable>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#subject GoogleCesToolset#subject}
  */
  readonly subject: string;
}

export function googleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigToTerraform(struct?: GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference | GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig): any {
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


export function googleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigToHclTerraform(struct?: GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference | GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig): any {
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

export class GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig | undefined {
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

  public set internalValue(value: GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig | undefined) {
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
export interface GoogleCesToolsetConnectorToolsetAuthConfig {
  /**
  * oauth2_auth_code_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#oauth2_auth_code_config GoogleCesToolset#oauth2_auth_code_config}
  */
  readonly oauth2AuthCodeConfig?: GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig;
  /**
  * oauth2_jwt_bearer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#oauth2_jwt_bearer_config GoogleCesToolset#oauth2_jwt_bearer_config}
  */
  readonly oauth2JwtBearerConfig?: GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig;
}

export function googleCesToolsetConnectorToolsetAuthConfigToTerraform(struct?: GoogleCesToolsetConnectorToolsetAuthConfigOutputReference | GoogleCesToolsetConnectorToolsetAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth2_auth_code_config: googleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigToTerraform(struct!.oauth2AuthCodeConfig),
    oauth2_jwt_bearer_config: googleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigToTerraform(struct!.oauth2JwtBearerConfig),
  }
}


export function googleCesToolsetConnectorToolsetAuthConfigToHclTerraform(struct?: GoogleCesToolsetConnectorToolsetAuthConfigOutputReference | GoogleCesToolsetConnectorToolsetAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth2_auth_code_config: {
      value: googleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigToHclTerraform(struct!.oauth2AuthCodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigList",
    },
    oauth2_jwt_bearer_config: {
      value: googleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigToHclTerraform(struct!.oauth2JwtBearerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetConnectorToolsetAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetConnectorToolsetAuthConfig | undefined {
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

  public set internalValue(value: GoogleCesToolsetConnectorToolsetAuthConfig | undefined) {
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
  private _oauth2AuthCodeConfig = new GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfigOutputReference(this, "oauth2_auth_code_config");
  public get oauth2AuthCodeConfig() {
    return this._oauth2AuthCodeConfig;
  }
  public putOauth2AuthCodeConfig(value: GoogleCesToolsetConnectorToolsetAuthConfigOauth2AuthCodeConfig) {
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
  private _oauth2JwtBearerConfig = new GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfigOutputReference(this, "oauth2_jwt_bearer_config");
  public get oauth2JwtBearerConfig() {
    return this._oauth2JwtBearerConfig;
  }
  public putOauth2JwtBearerConfig(value: GoogleCesToolsetConnectorToolsetAuthConfigOauth2JwtBearerConfig) {
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
export interface GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperation {
  /**
  * ID of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#entity_id GoogleCesToolset#entity_id}
  */
  readonly entityId: string;
  /**
  * Operation to perform on the entity.
  * Possible values:
  * LIST
  * GET
  * CREATE
  * UPDATE
  * DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#operation GoogleCesToolset#operation}
  */
  readonly operation: string;
}

export function googleCesToolsetConnectorToolsetConnectorActionsEntityOperationToTerraform(struct?: GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference | GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    operation: cdktf.stringToTerraform(struct!.operation),
  }
}


export function googleCesToolsetConnectorToolsetConnectorActionsEntityOperationToHclTerraform(struct?: GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference | GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperation): any {
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

export class GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperation | undefined {
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

  public set internalValue(value: GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperation | undefined) {
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
export interface GoogleCesToolsetConnectorToolsetConnectorActions {
  /**
  * ID of a Connection action for the tool to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#connection_action_id GoogleCesToolset#connection_action_id}
  */
  readonly connectionActionId?: string;
  /**
  * Entity fields to use as inputs for the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#input_fields GoogleCesToolset#input_fields}
  */
  readonly inputFields?: string[];
  /**
  * Entity fields to return from the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#output_fields GoogleCesToolset#output_fields}
  */
  readonly outputFields?: string[];
  /**
  * entity_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#entity_operation GoogleCesToolset#entity_operation}
  */
  readonly entityOperation?: GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperation;
}

export function googleCesToolsetConnectorToolsetConnectorActionsToTerraform(struct?: GoogleCesToolsetConnectorToolsetConnectorActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_action_id: cdktf.stringToTerraform(struct!.connectionActionId),
    input_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputFields),
    output_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputFields),
    entity_operation: googleCesToolsetConnectorToolsetConnectorActionsEntityOperationToTerraform(struct!.entityOperation),
  }
}


export function googleCesToolsetConnectorToolsetConnectorActionsToHclTerraform(struct?: GoogleCesToolsetConnectorToolsetConnectorActions | cdktf.IResolvable): any {
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
      value: googleCesToolsetConnectorToolsetConnectorActionsEntityOperationToHclTerraform(struct!.entityOperation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetConnectorToolsetConnectorActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolsetConnectorToolsetConnectorActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesToolsetConnectorToolsetConnectorActions | cdktf.IResolvable | undefined) {
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
  private _entityOperation = new GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperationOutputReference(this, "entity_operation");
  public get entityOperation() {
    return this._entityOperation;
  }
  public putEntityOperation(value: GoogleCesToolsetConnectorToolsetConnectorActionsEntityOperation) {
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

export class GoogleCesToolsetConnectorToolsetConnectorActionsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesToolsetConnectorToolsetConnectorActions[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesToolsetConnectorToolsetConnectorActionsOutputReference {
    return new GoogleCesToolsetConnectorToolsetConnectorActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolsetConnectorToolset {
  /**
  * The full resource name of the referenced Integration Connectors
  * Connection.
  * Format:
  * 'projects/{project}/locations/{location}/connections/{connection}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#connection GoogleCesToolset#connection}
  */
  readonly connection: string;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#auth_config GoogleCesToolset#auth_config}
  */
  readonly authConfig?: GoogleCesToolsetConnectorToolsetAuthConfig;
  /**
  * connector_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#connector_actions GoogleCesToolset#connector_actions}
  */
  readonly connectorActions: GoogleCesToolsetConnectorToolsetConnectorActions[] | cdktf.IResolvable;
}

export function googleCesToolsetConnectorToolsetToTerraform(struct?: GoogleCesToolsetConnectorToolsetOutputReference | GoogleCesToolsetConnectorToolset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: cdktf.stringToTerraform(struct!.connection),
    auth_config: googleCesToolsetConnectorToolsetAuthConfigToTerraform(struct!.authConfig),
    connector_actions: cdktf.listMapper(googleCesToolsetConnectorToolsetConnectorActionsToTerraform, true)(struct!.connectorActions),
  }
}


export function googleCesToolsetConnectorToolsetToHclTerraform(struct?: GoogleCesToolsetConnectorToolsetOutputReference | GoogleCesToolsetConnectorToolset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: cdktf.stringToHclTerraform(struct!.connection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_config: {
      value: googleCesToolsetConnectorToolsetAuthConfigToHclTerraform(struct!.authConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetConnectorToolsetAuthConfigList",
    },
    connector_actions: {
      value: cdktf.listMapperHcl(googleCesToolsetConnectorToolsetConnectorActionsToHclTerraform, true)(struct!.connectorActions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetConnectorToolsetConnectorActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetConnectorToolsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetConnectorToolset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection;
    }
    if (this._authConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfig = this._authConfig?.internalValue;
    }
    if (this._connectorActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorActions = this._connectorActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetConnectorToolset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connection = undefined;
      this._authConfig.internalValue = undefined;
      this._connectorActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connection = value.connection;
      this._authConfig.internalValue = value.authConfig;
      this._connectorActions.internalValue = value.connectorActions;
    }
  }

  // connection - computed: false, optional: false, required: true
  private _connection?: string; 
  public get connection() {
    return this.getStringAttribute('connection');
  }
  public set connection(value: string) {
    this._connection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection;
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new GoogleCesToolsetConnectorToolsetAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: GoogleCesToolsetConnectorToolsetAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // connector_actions - computed: false, optional: false, required: true
  private _connectorActions = new GoogleCesToolsetConnectorToolsetConnectorActionsList(this, "connector_actions", false);
  public get connectorActions() {
    return this._connectorActions;
  }
  public putConnectorActions(value: GoogleCesToolsetConnectorToolsetConnectorActions[] | cdktf.IResolvable) {
    this._connectorActions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorActionsInput() {
    return this._connectorActions.internalValue;
  }
}
export interface GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig {
  /**
  * The name of the SecretManager secret version resource storing the API key.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  * Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
  * service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#api_key_secret_version GoogleCesToolset#api_key_secret_version}
  */
  readonly apiKeySecretVersion: string;
  /**
  * The parameter name or the header name of the API key.
  * E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#key_name GoogleCesToolset#key_name}
  */
  readonly keyName: string;
  /**
  * Key location in the request. For API key auth on MCP toolsets,
  * the API key can only be sent in the request header.
  * Possible values:
  * HEADER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#request_location GoogleCesToolset#request_location}
  */
  readonly requestLocation: string;
}

export function googleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigToTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference | GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_secret_version: cdktf.stringToTerraform(struct!.apiKeySecretVersion),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    request_location: cdktf.stringToTerraform(struct!.requestLocation),
  }
}


export function googleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigToHclTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference | GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.apiKeySecretVersion),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecretVersion = this._apiKeySecretVersion;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._requestLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLocation = this._requestLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeySecretVersion = undefined;
      this._keyName = undefined;
      this._requestLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeySecretVersion = value.apiKeySecretVersion;
      this._keyName = value.keyName;
      this._requestLocation = value.requestLocation;
    }
  }

  // api_key_secret_version - computed: false, optional: false, required: true
  private _apiKeySecretVersion?: string; 
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }
  public set apiKeySecretVersion(value: string) {
    this._apiKeySecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretVersionInput() {
    return this._apiKeySecretVersion;
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
}
export interface GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#token GoogleCesToolset#token}
  */
  readonly token?: string;
}

export function googleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigToTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference | GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function googleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigToHclTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference | GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
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
export interface GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig {
  /**
  * The client ID from the OAuth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#client_id GoogleCesToolset#client_id}
  */
  readonly clientId: string;
  /**
  * The name of the SecretManager secret version resource storing the
  * client secret.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  * 
  * Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
  * service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#client_secret_version GoogleCesToolset#client_secret_version}
  */
  readonly clientSecretVersion: string;
  /**
  * OAuth grant types.
  * Possible values:
  * CLIENT_CREDENTIAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#oauth_grant_type GoogleCesToolset#oauth_grant_type}
  */
  readonly oauthGrantType: string;
  /**
  * The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}
  */
  readonly scopes?: string[];
  /**
  * The token endpoint in the OAuth provider to exchange for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#token_endpoint GoogleCesToolset#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function googleCesToolsetMcpToolsetApiAuthenticationOauthConfigToTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference | GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_version: cdktf.stringToTerraform(struct!.clientSecretVersion),
    oauth_grant_type: cdktf.stringToTerraform(struct!.oauthGrantType),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function googleCesToolsetMcpToolsetApiAuthenticationOauthConfigToHclTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference | GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig): any {
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
    client_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretVersion),
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

export class GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretVersion = this._clientSecretVersion;
    }
    if (this._oauthGrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthGrantType = this._oauthGrantType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretVersion = undefined;
      this._oauthGrantType = undefined;
      this._scopes = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretVersion = value.clientSecretVersion;
      this._oauthGrantType = value.oauthGrantType;
      this._scopes = value.scopes;
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

  // client_secret_version - computed: false, optional: false, required: true
  private _clientSecretVersion?: string; 
  public get clientSecretVersion() {
    return this.getStringAttribute('client_secret_version');
  }
  public set clientSecretVersion(value: string) {
    this._clientSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretVersionInput() {
    return this._clientSecretVersion;
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
export interface GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig {
  /**
  * The OAuth scopes to grant. If not specified, the default scope
  * 'https://www.googleapis.com/auth/cloud-platform' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}
  */
  readonly scopes?: string[];
  /**
  * The email address of the service account used for authenticatation. CES
  * uses this service account to exchange an access token and the access token
  * is then sent in the 'Authorization' header of the request.
  * 
  * The service account must have the
  * 'roles/iam.serviceAccountTokenCreator' role granted to the
  * CES service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#service_account GoogleCesToolset#service_account}
  */
  readonly serviceAccount: string;
}

export function googleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference | GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function googleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference | GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scopes = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scopes = value.scopes;
      this._serviceAccount = value.serviceAccount;
    }
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

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig {
}

export function googleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference | GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference | GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleCesToolsetMcpToolsetApiAuthentication {
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#api_key_config GoogleCesToolset#api_key_config}
  */
  readonly apiKeyConfig?: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig;
  /**
  * bearer_token_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#bearer_token_config GoogleCesToolset#bearer_token_config}
  */
  readonly bearerTokenConfig?: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#oauth_config GoogleCesToolset#oauth_config}
  */
  readonly oauthConfig?: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig;
  /**
  * service_account_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#service_account_auth_config GoogleCesToolset#service_account_auth_config}
  */
  readonly serviceAccountAuthConfig?: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig;
  /**
  * service_agent_id_token_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#service_agent_id_token_auth_config GoogleCesToolset#service_agent_id_token_auth_config}
  */
  readonly serviceAgentIdTokenAuthConfig?: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;
}

export function googleCesToolsetMcpToolsetApiAuthenticationToTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference | GoogleCesToolsetMcpToolsetApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_config: googleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigToTerraform(struct!.apiKeyConfig),
    bearer_token_config: googleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigToTerraform(struct!.bearerTokenConfig),
    oauth_config: googleCesToolsetMcpToolsetApiAuthenticationOauthConfigToTerraform(struct!.oauthConfig),
    service_account_auth_config: googleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigToTerraform(struct!.serviceAccountAuthConfig),
    service_agent_id_token_auth_config: googleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct!.serviceAgentIdTokenAuthConfig),
  }
}


export function googleCesToolsetMcpToolsetApiAuthenticationToHclTerraform(struct?: GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference | GoogleCesToolsetMcpToolsetApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_config: {
      value: googleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigList",
    },
    bearer_token_config: {
      value: googleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigToHclTerraform(struct!.bearerTokenConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigList",
    },
    oauth_config: {
      value: googleCesToolsetMcpToolsetApiAuthenticationOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigList",
    },
    service_account_auth_config: {
      value: googleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct!.serviceAccountAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigList",
    },
    service_agent_id_token_auth_config: {
      value: googleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct!.serviceAgentIdTokenAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetMcpToolsetApiAuthentication | undefined {
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
    if (this._serviceAccountAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountAuthConfig = this._serviceAccountAuthConfig?.internalValue;
    }
    if (this._serviceAgentIdTokenAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentIdTokenAuthConfig = this._serviceAgentIdTokenAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetMcpToolsetApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyConfig.internalValue = undefined;
      this._bearerTokenConfig.internalValue = undefined;
      this._oauthConfig.internalValue = undefined;
      this._serviceAccountAuthConfig.internalValue = undefined;
      this._serviceAgentIdTokenAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
      this._bearerTokenConfig.internalValue = value.bearerTokenConfig;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._serviceAccountAuthConfig.internalValue = value.serviceAccountAuthConfig;
      this._serviceAgentIdTokenAuthConfig.internalValue = value.serviceAgentIdTokenAuthConfig;
    }
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig) {
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
  private _bearerTokenConfig = new GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference(this, "bearer_token_config");
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }
  public putBearerTokenConfig(value: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig) {
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
  private _oauthConfig = new GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // service_account_auth_config - computed: false, optional: true, required: false
  private _serviceAccountAuthConfig = new GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(this, "service_account_auth_config");
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }
  public putServiceAccountAuthConfig(value: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig) {
    this._serviceAccountAuthConfig.internalValue = value;
  }
  public resetServiceAccountAuthConfig() {
    this._serviceAccountAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountAuthConfigInput() {
    return this._serviceAccountAuthConfig.internalValue;
  }

  // service_agent_id_token_auth_config - computed: false, optional: true, required: false
  private _serviceAgentIdTokenAuthConfig = new GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(this, "service_agent_id_token_auth_config");
  public get serviceAgentIdTokenAuthConfig() {
    return this._serviceAgentIdTokenAuthConfig;
  }
  public putServiceAgentIdTokenAuthConfig(value: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig) {
    this._serviceAgentIdTokenAuthConfig.internalValue = value;
  }
  public resetServiceAgentIdTokenAuthConfig() {
    this._serviceAgentIdTokenAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentIdTokenAuthConfigInput() {
    return this._serviceAgentIdTokenAuthConfig.internalValue;
  }
}
export interface GoogleCesToolsetMcpToolsetServiceDirectoryConfig {
  /**
  * The name of [Service
  * Directory](https://cloud.google.com/service-directory) service.
  * Format:
  * 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'.
  * Location of the service directory must be the same as the location of the
  * app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#service GoogleCesToolset#service}
  */
  readonly service: string;
}

export function googleCesToolsetMcpToolsetServiceDirectoryConfigToTerraform(struct?: GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference | GoogleCesToolsetMcpToolsetServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleCesToolsetMcpToolsetServiceDirectoryConfigToHclTerraform(struct?: GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference | GoogleCesToolsetMcpToolsetServiceDirectoryConfig): any {
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

export class GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetMcpToolsetServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetMcpToolsetServiceDirectoryConfig | undefined) {
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
export interface GoogleCesToolsetMcpToolsetTlsConfigCaCerts {
  /**
  * The allowed custom CA certificates (in DER format) for
  * HTTPS verification. This overrides the default SSL trust store. If this
  * is empty or unspecified, CES will use Google's default trust
  * store to verify certificates. N.B. Make sure the HTTPS server
  * certificates are signed with "subject alt name". For instance a
  * certificate can be self-signed using the following command,
  * openssl x509 -req -days 200 -in example.com.csr \
  * -signkey example.com.key \
  * -out example.com.crt \
  * -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#cert GoogleCesToolset#cert}
  */
  readonly cert: string;
  /**
  * The name of the allowed custom CA certificates. This
  * can be used to disambiguate the custom CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}
  */
  readonly displayName: string;
}

export function googleCesToolsetMcpToolsetTlsConfigCaCertsToTerraform(struct?: GoogleCesToolsetMcpToolsetTlsConfigCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function googleCesToolsetMcpToolsetTlsConfigCaCertsToHclTerraform(struct?: GoogleCesToolsetMcpToolsetTlsConfigCaCerts | cdktf.IResolvable): any {
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

export class GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolsetMcpToolsetTlsConfigCaCerts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesToolsetMcpToolsetTlsConfigCaCerts | cdktf.IResolvable | undefined) {
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

export class GoogleCesToolsetMcpToolsetTlsConfigCaCertsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesToolsetMcpToolsetTlsConfigCaCerts[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference {
    return new GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolsetMcpToolsetTlsConfig {
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#ca_certs GoogleCesToolset#ca_certs}
  */
  readonly caCerts: GoogleCesToolsetMcpToolsetTlsConfigCaCerts[] | cdktf.IResolvable;
}

export function googleCesToolsetMcpToolsetTlsConfigToTerraform(struct?: GoogleCesToolsetMcpToolsetTlsConfigOutputReference | GoogleCesToolsetMcpToolsetTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certs: cdktf.listMapper(googleCesToolsetMcpToolsetTlsConfigCaCertsToTerraform, true)(struct!.caCerts),
  }
}


export function googleCesToolsetMcpToolsetTlsConfigToHclTerraform(struct?: GoogleCesToolsetMcpToolsetTlsConfigOutputReference | GoogleCesToolsetMcpToolsetTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certs: {
      value: cdktf.listMapperHcl(googleCesToolsetMcpToolsetTlsConfigCaCertsToHclTerraform, true)(struct!.caCerts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetMcpToolsetTlsConfigCaCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetMcpToolsetTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetMcpToolsetTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetMcpToolsetTlsConfig | undefined) {
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
  private _caCerts = new GoogleCesToolsetMcpToolsetTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: GoogleCesToolsetMcpToolsetTlsConfigCaCerts[] | cdktf.IResolvable) {
    this._caCerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }
}
export interface GoogleCesToolsetMcpToolset {
  /**
  * The custom headers to send in the request to the MCP server. The values
  * must be in the format '$context.variables.<name_of_variable>' and can be
  * set in the session variables. See
  * https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection
  * for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#custom_headers GoogleCesToolset#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * The address of the MCP server, for example, "https://example.com/mcp/". If
  * the server is built with the MCP SDK, the url should be suffixed with
  * "/mcp/". Only Streamable HTTP transport based servers are supported. See
  * https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http
  * for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#server_address GoogleCesToolset#server_address}
  */
  readonly serverAddress: string;
  /**
  * api_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#api_authentication GoogleCesToolset#api_authentication}
  */
  readonly apiAuthentication?: GoogleCesToolsetMcpToolsetApiAuthentication;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#service_directory_config GoogleCesToolset#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleCesToolsetMcpToolsetServiceDirectoryConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#tls_config GoogleCesToolset#tls_config}
  */
  readonly tlsConfig?: GoogleCesToolsetMcpToolsetTlsConfig;
}

export function googleCesToolsetMcpToolsetToTerraform(struct?: GoogleCesToolsetMcpToolsetOutputReference | GoogleCesToolsetMcpToolset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customHeaders),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    api_authentication: googleCesToolsetMcpToolsetApiAuthenticationToTerraform(struct!.apiAuthentication),
    service_directory_config: googleCesToolsetMcpToolsetServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
    tls_config: googleCesToolsetMcpToolsetTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function googleCesToolsetMcpToolsetToHclTerraform(struct?: GoogleCesToolsetMcpToolsetOutputReference | GoogleCesToolsetMcpToolset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_authentication: {
      value: googleCesToolsetMcpToolsetApiAuthenticationToHclTerraform(struct!.apiAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetMcpToolsetApiAuthenticationList",
    },
    service_directory_config: {
      value: googleCesToolsetMcpToolsetServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetMcpToolsetServiceDirectoryConfigList",
    },
    tls_config: {
      value: googleCesToolsetMcpToolsetTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetMcpToolsetTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetMcpToolsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetMcpToolset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaders = this._customHeaders;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._apiAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiAuthentication = this._apiAuthentication?.internalValue;
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

  public set internalValue(value: GoogleCesToolsetMcpToolset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customHeaders = undefined;
      this._serverAddress = undefined;
      this._apiAuthentication.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customHeaders = value.customHeaders;
      this._serverAddress = value.serverAddress;
      this._apiAuthentication.internalValue = value.apiAuthentication;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // api_authentication - computed: false, optional: true, required: false
  private _apiAuthentication = new GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference(this, "api_authentication");
  public get apiAuthentication() {
    return this._apiAuthentication;
  }
  public putApiAuthentication(value: GoogleCesToolsetMcpToolsetApiAuthentication) {
    this._apiAuthentication.internalValue = value;
  }
  public resetApiAuthentication() {
    this._apiAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAuthenticationInput() {
    return this._apiAuthentication.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleCesToolsetMcpToolsetServiceDirectoryConfig) {
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
  private _tlsConfig = new GoogleCesToolsetMcpToolsetTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: GoogleCesToolsetMcpToolsetTlsConfig) {
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
export interface GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig {
  /**
  * The name of the SecretManager secret version resource storing the API key.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  * Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
  * service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#api_key_secret_version GoogleCesToolset#api_key_secret_version}
  */
  readonly apiKeySecretVersion: string;
  /**
  * The parameter name or the header name of the API key.
  * E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#key_name GoogleCesToolset#key_name}
  */
  readonly keyName: string;
  /**
  * Key location in the request.
  * Possible values:
  * HEADER
  * QUERY_STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#request_location GoogleCesToolset#request_location}
  */
  readonly requestLocation: string;
}

export function googleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigToTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_secret_version: cdktf.stringToTerraform(struct!.apiKeySecretVersion),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    request_location: cdktf.stringToTerraform(struct!.requestLocation),
  }
}


export function googleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigToHclTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.apiKeySecretVersion),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecretVersion = this._apiKeySecretVersion;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._requestLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLocation = this._requestLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeySecretVersion = undefined;
      this._keyName = undefined;
      this._requestLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeySecretVersion = value.apiKeySecretVersion;
      this._keyName = value.keyName;
      this._requestLocation = value.requestLocation;
    }
  }

  // api_key_secret_version - computed: false, optional: false, required: true
  private _apiKeySecretVersion?: string; 
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }
  public set apiKeySecretVersion(value: string) {
    this._apiKeySecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretVersionInput() {
    return this._apiKeySecretVersion;
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
}
export interface GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#token GoogleCesToolset#token}
  */
  readonly token?: string;
}

export function googleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigToTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function googleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigToHclTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
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
export interface GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig {
  /**
  * The client ID from the OAuth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#client_id GoogleCesToolset#client_id}
  */
  readonly clientId: string;
  /**
  * The name of the SecretManager secret version resource storing the
  * client secret.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  * 
  * Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
  * service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#client_secret_version GoogleCesToolset#client_secret_version}
  */
  readonly clientSecretVersion: string;
  /**
  * OAuth grant types.
  * Possible values:
  * CLIENT_CREDENTIAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#oauth_grant_type GoogleCesToolset#oauth_grant_type}
  */
  readonly oauthGrantType: string;
  /**
  * The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}
  */
  readonly scopes?: string[];
  /**
  * The token endpoint in the OAuth provider to exchange for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#token_endpoint GoogleCesToolset#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function googleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigToTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_version: cdktf.stringToTerraform(struct!.clientSecretVersion),
    oauth_grant_type: cdktf.stringToTerraform(struct!.oauthGrantType),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function googleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigToHclTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig): any {
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
    client_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretVersion),
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

export class GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretVersion = this._clientSecretVersion;
    }
    if (this._oauthGrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthGrantType = this._oauthGrantType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretVersion = undefined;
      this._oauthGrantType = undefined;
      this._scopes = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretVersion = value.clientSecretVersion;
      this._oauthGrantType = value.oauthGrantType;
      this._scopes = value.scopes;
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

  // client_secret_version - computed: false, optional: false, required: true
  private _clientSecretVersion?: string; 
  public get clientSecretVersion() {
    return this.getStringAttribute('client_secret_version');
  }
  public set clientSecretVersion(value: string) {
    this._clientSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretVersionInput() {
    return this._clientSecretVersion;
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
export interface GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig {
  /**
  * The OAuth scopes to grant. If not specified, the default scope
  * 'https://www.googleapis.com/auth/cloud-platform' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}
  */
  readonly scopes?: string[];
  /**
  * The email address of the service account used for authenticatation. CES
  * uses this service account to exchange an access token and the access token
  * is then sent in the 'Authorization' header of the request.
  * 
  * The service account must have the
  * 'roles/iam.serviceAccountTokenCreator' role granted to the
  * CES service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#service_account GoogleCesToolset#service_account}
  */
  readonly serviceAccount: string;
}

export function googleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function googleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scopes = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scopes = value.scopes;
      this._serviceAccount = value.serviceAccount;
    }
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

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig {
}

export function googleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleCesToolsetOpenApiToolsetApiAuthentication {
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#api_key_config GoogleCesToolset#api_key_config}
  */
  readonly apiKeyConfig?: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig;
  /**
  * bearer_token_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#bearer_token_config GoogleCesToolset#bearer_token_config}
  */
  readonly bearerTokenConfig?: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#oauth_config GoogleCesToolset#oauth_config}
  */
  readonly oauthConfig?: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig;
  /**
  * service_account_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#service_account_auth_config GoogleCesToolset#service_account_auth_config}
  */
  readonly serviceAccountAuthConfig?: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig;
  /**
  * service_agent_id_token_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#service_agent_id_token_auth_config GoogleCesToolset#service_agent_id_token_auth_config}
  */
  readonly serviceAgentIdTokenAuthConfig?: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;
}

export function googleCesToolsetOpenApiToolsetApiAuthenticationToTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_config: googleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigToTerraform(struct!.apiKeyConfig),
    bearer_token_config: googleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigToTerraform(struct!.bearerTokenConfig),
    oauth_config: googleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigToTerraform(struct!.oauthConfig),
    service_account_auth_config: googleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigToTerraform(struct!.serviceAccountAuthConfig),
    service_agent_id_token_auth_config: googleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct!.serviceAgentIdTokenAuthConfig),
  }
}


export function googleCesToolsetOpenApiToolsetApiAuthenticationToHclTerraform(struct?: GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference | GoogleCesToolsetOpenApiToolsetApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_config: {
      value: googleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigList",
    },
    bearer_token_config: {
      value: googleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigToHclTerraform(struct!.bearerTokenConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigList",
    },
    oauth_config: {
      value: googleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigList",
    },
    service_account_auth_config: {
      value: googleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct!.serviceAccountAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigList",
    },
    service_agent_id_token_auth_config: {
      value: googleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct!.serviceAgentIdTokenAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetOpenApiToolsetApiAuthentication | undefined {
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
    if (this._serviceAccountAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountAuthConfig = this._serviceAccountAuthConfig?.internalValue;
    }
    if (this._serviceAgentIdTokenAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentIdTokenAuthConfig = this._serviceAgentIdTokenAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetOpenApiToolsetApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyConfig.internalValue = undefined;
      this._bearerTokenConfig.internalValue = undefined;
      this._oauthConfig.internalValue = undefined;
      this._serviceAccountAuthConfig.internalValue = undefined;
      this._serviceAgentIdTokenAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
      this._bearerTokenConfig.internalValue = value.bearerTokenConfig;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._serviceAccountAuthConfig.internalValue = value.serviceAccountAuthConfig;
      this._serviceAgentIdTokenAuthConfig.internalValue = value.serviceAgentIdTokenAuthConfig;
    }
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig) {
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
  private _bearerTokenConfig = new GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference(this, "bearer_token_config");
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }
  public putBearerTokenConfig(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig) {
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
  private _oauthConfig = new GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // service_account_auth_config - computed: false, optional: true, required: false
  private _serviceAccountAuthConfig = new GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(this, "service_account_auth_config");
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }
  public putServiceAccountAuthConfig(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig) {
    this._serviceAccountAuthConfig.internalValue = value;
  }
  public resetServiceAccountAuthConfig() {
    this._serviceAccountAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountAuthConfigInput() {
    return this._serviceAccountAuthConfig.internalValue;
  }

  // service_agent_id_token_auth_config - computed: false, optional: true, required: false
  private _serviceAgentIdTokenAuthConfig = new GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(this, "service_agent_id_token_auth_config");
  public get serviceAgentIdTokenAuthConfig() {
    return this._serviceAgentIdTokenAuthConfig;
  }
  public putServiceAgentIdTokenAuthConfig(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig) {
    this._serviceAgentIdTokenAuthConfig.internalValue = value;
  }
  public resetServiceAgentIdTokenAuthConfig() {
    this._serviceAgentIdTokenAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentIdTokenAuthConfigInput() {
    return this._serviceAgentIdTokenAuthConfig.internalValue;
  }
}
export interface GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig {
  /**
  * The name of [Service
  * Directory](https://cloud.google.com/service-directory) service.
  * Format:
  * 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'.
  * Location of the service directory must be the same as the location of the
  * app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#service GoogleCesToolset#service}
  */
  readonly service: string;
}

export function googleCesToolsetOpenApiToolsetServiceDirectoryConfigToTerraform(struct?: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference | GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleCesToolsetOpenApiToolsetServiceDirectoryConfigToHclTerraform(struct?: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference | GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig): any {
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

export class GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig | undefined) {
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
export interface GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts {
  /**
  * The allowed custom CA certificates (in DER format) for
  * HTTPS verification. This overrides the default SSL trust store. If this
  * is empty or unspecified, CES will use Google's default trust
  * store to verify certificates. N.B. Make sure the HTTPS server
  * certificates are signed with "subject alt name". For instance a
  * certificate can be self-signed using the following command,
  * openssl x509 -req -days 200 -in example.com.csr \
  * -signkey example.com.key \
  * -out example.com.crt \
  * -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#cert GoogleCesToolset#cert}
  */
  readonly cert: string;
  /**
  * The name of the allowed custom CA certificates. This
  * can be used to disambiguate the custom CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}
  */
  readonly displayName: string;
}

export function googleCesToolsetOpenApiToolsetTlsConfigCaCertsToTerraform(struct?: GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function googleCesToolsetOpenApiToolsetTlsConfigCaCertsToHclTerraform(struct?: GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts | cdktf.IResolvable): any {
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

export class GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts | cdktf.IResolvable | undefined) {
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

export class GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference {
    return new GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolsetOpenApiToolsetTlsConfig {
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#ca_certs GoogleCesToolset#ca_certs}
  */
  readonly caCerts: GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[] | cdktf.IResolvable;
}

export function googleCesToolsetOpenApiToolsetTlsConfigToTerraform(struct?: GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference | GoogleCesToolsetOpenApiToolsetTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certs: cdktf.listMapper(googleCesToolsetOpenApiToolsetTlsConfigCaCertsToTerraform, true)(struct!.caCerts),
  }
}


export function googleCesToolsetOpenApiToolsetTlsConfigToHclTerraform(struct?: GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference | GoogleCesToolsetOpenApiToolsetTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certs: {
      value: cdktf.listMapperHcl(googleCesToolsetOpenApiToolsetTlsConfigCaCertsToHclTerraform, true)(struct!.caCerts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetOpenApiToolsetTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetOpenApiToolsetTlsConfig | undefined) {
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
  private _caCerts = new GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[] | cdktf.IResolvable) {
    this._caCerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }
}
export interface GoogleCesToolsetOpenApiToolset {
  /**
  * If true, the agent will ignore unknown fields in the API response for all
  * operations defined in the OpenAPI schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#ignore_unknown_fields GoogleCesToolset#ignore_unknown_fields}
  */
  readonly ignoreUnknownFields?: boolean | cdktf.IResolvable;
  /**
  * The OpenAPI schema of the toolset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#open_api_schema GoogleCesToolset#open_api_schema}
  */
  readonly openApiSchema: string;
  /**
  * api_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#api_authentication GoogleCesToolset#api_authentication}
  */
  readonly apiAuthentication?: GoogleCesToolsetOpenApiToolsetApiAuthentication;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#service_directory_config GoogleCesToolset#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#tls_config GoogleCesToolset#tls_config}
  */
  readonly tlsConfig?: GoogleCesToolsetOpenApiToolsetTlsConfig;
}

export function googleCesToolsetOpenApiToolsetToTerraform(struct?: GoogleCesToolsetOpenApiToolsetOutputReference | GoogleCesToolsetOpenApiToolset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_unknown_fields: cdktf.booleanToTerraform(struct!.ignoreUnknownFields),
    open_api_schema: cdktf.stringToTerraform(struct!.openApiSchema),
    api_authentication: googleCesToolsetOpenApiToolsetApiAuthenticationToTerraform(struct!.apiAuthentication),
    service_directory_config: googleCesToolsetOpenApiToolsetServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
    tls_config: googleCesToolsetOpenApiToolsetTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function googleCesToolsetOpenApiToolsetToHclTerraform(struct?: GoogleCesToolsetOpenApiToolsetOutputReference | GoogleCesToolsetOpenApiToolset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_unknown_fields: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUnknownFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_api_schema: {
      value: cdktf.stringToHclTerraform(struct!.openApiSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_authentication: {
      value: googleCesToolsetOpenApiToolsetApiAuthenticationToHclTerraform(struct!.apiAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetOpenApiToolsetApiAuthenticationList",
    },
    service_directory_config: {
      value: googleCesToolsetOpenApiToolsetServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigList",
    },
    tls_config: {
      value: googleCesToolsetOpenApiToolsetTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetOpenApiToolsetTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetOpenApiToolsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetOpenApiToolset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreUnknownFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnknownFields = this._ignoreUnknownFields;
    }
    if (this._openApiSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiSchema = this._openApiSchema;
    }
    if (this._apiAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiAuthentication = this._apiAuthentication?.internalValue;
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

  public set internalValue(value: GoogleCesToolsetOpenApiToolset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreUnknownFields = undefined;
      this._openApiSchema = undefined;
      this._apiAuthentication.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreUnknownFields = value.ignoreUnknownFields;
      this._openApiSchema = value.openApiSchema;
      this._apiAuthentication.internalValue = value.apiAuthentication;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // ignore_unknown_fields - computed: false, optional: true, required: false
  private _ignoreUnknownFields?: boolean | cdktf.IResolvable; 
  public get ignoreUnknownFields() {
    return this.getBooleanAttribute('ignore_unknown_fields');
  }
  public set ignoreUnknownFields(value: boolean | cdktf.IResolvable) {
    this._ignoreUnknownFields = value;
  }
  public resetIgnoreUnknownFields() {
    this._ignoreUnknownFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnknownFieldsInput() {
    return this._ignoreUnknownFields;
  }

  // open_api_schema - computed: false, optional: false, required: true
  private _openApiSchema?: string; 
  public get openApiSchema() {
    return this.getStringAttribute('open_api_schema');
  }
  public set openApiSchema(value: string) {
    this._openApiSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiSchemaInput() {
    return this._openApiSchema;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // api_authentication - computed: false, optional: true, required: false
  private _apiAuthentication = new GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference(this, "api_authentication");
  public get apiAuthentication() {
    return this._apiAuthentication;
  }
  public putApiAuthentication(value: GoogleCesToolsetOpenApiToolsetApiAuthentication) {
    this._apiAuthentication.internalValue = value;
  }
  public resetApiAuthentication() {
    this._apiAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAuthenticationInput() {
    return this._apiAuthentication.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig) {
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
  private _tlsConfig = new GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: GoogleCesToolsetOpenApiToolsetTlsConfig) {
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
export interface GoogleCesToolsetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#create GoogleCesToolset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#delete GoogleCesToolset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#update GoogleCesToolset#update}
  */
  readonly update?: string;
}

export function googleCesToolsetTimeoutsToTerraform(struct?: GoogleCesToolsetTimeouts | cdktf.IResolvable): any {
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


export function googleCesToolsetTimeoutsToHclTerraform(struct?: GoogleCesToolsetTimeouts | cdktf.IResolvable): any {
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

export class GoogleCesToolsetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCesToolsetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesToolsetTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleCesToolsetToolFakeConfigCodeBlock {
  /**
  * Python code which will be invoked in tool fake mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#python_code GoogleCesToolset#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesToolsetToolFakeConfigCodeBlockToTerraform(struct?: GoogleCesToolsetToolFakeConfigCodeBlockOutputReference | GoogleCesToolsetToolFakeConfigCodeBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
  }
}


export function googleCesToolsetToolFakeConfigCodeBlockToHclTerraform(struct?: GoogleCesToolsetToolFakeConfigCodeBlockOutputReference | GoogleCesToolsetToolFakeConfigCodeBlock): any {
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

export class GoogleCesToolsetToolFakeConfigCodeBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetToolFakeConfigCodeBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetToolFakeConfigCodeBlock | undefined) {
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
export interface GoogleCesToolsetToolFakeConfig {
  /**
  * Whether the tool is using fake mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#enable_fake_mode GoogleCesToolset#enable_fake_mode}
  */
  readonly enableFakeMode?: boolean | cdktf.IResolvable;
  /**
  * code_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#code_block GoogleCesToolset#code_block}
  */
  readonly codeBlock?: GoogleCesToolsetToolFakeConfigCodeBlock;
}

export function googleCesToolsetToolFakeConfigToTerraform(struct?: GoogleCesToolsetToolFakeConfigOutputReference | GoogleCesToolsetToolFakeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_fake_mode: cdktf.booleanToTerraform(struct!.enableFakeMode),
    code_block: googleCesToolsetToolFakeConfigCodeBlockToTerraform(struct!.codeBlock),
  }
}


export function googleCesToolsetToolFakeConfigToHclTerraform(struct?: GoogleCesToolsetToolFakeConfigOutputReference | GoogleCesToolsetToolFakeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_fake_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableFakeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_block: {
      value: googleCesToolsetToolFakeConfigCodeBlockToHclTerraform(struct!.codeBlock),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolsetToolFakeConfigCodeBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolsetToolFakeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolsetToolFakeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableFakeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFakeMode = this._enableFakeMode;
    }
    if (this._codeBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBlock = this._codeBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolsetToolFakeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableFakeMode = undefined;
      this._codeBlock.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableFakeMode = value.enableFakeMode;
      this._codeBlock.internalValue = value.codeBlock;
    }
  }

  // enable_fake_mode - computed: false, optional: true, required: false
  private _enableFakeMode?: boolean | cdktf.IResolvable; 
  public get enableFakeMode() {
    return this.getBooleanAttribute('enable_fake_mode');
  }
  public set enableFakeMode(value: boolean | cdktf.IResolvable) {
    this._enableFakeMode = value;
  }
  public resetEnableFakeMode() {
    this._enableFakeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFakeModeInput() {
    return this._enableFakeMode;
  }

  // code_block - computed: false, optional: true, required: false
  private _codeBlock = new GoogleCesToolsetToolFakeConfigCodeBlockOutputReference(this, "code_block");
  public get codeBlock() {
    return this._codeBlock;
  }
  public putCodeBlock(value: GoogleCesToolsetToolFakeConfigCodeBlock) {
    this._codeBlock.internalValue = value;
  }
  public resetCodeBlock() {
    this._codeBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBlockInput() {
    return this._codeBlock.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset google_ces_toolset}
*/
export class GoogleCesToolset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_toolset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleCesToolset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCesToolset to import
  * @param importFromId The id of the existing GoogleCesToolset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCesToolset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_toolset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_toolset google_ces_toolset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCesToolsetConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCesToolsetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_toolset',
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
    this._executionType = config.executionType;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._timeout = config.timeout;
    this._toolsetId = config.toolsetId;
    this._connectorToolset.internalValue = config.connectorToolset;
    this._mcpToolset.internalValue = config.mcpToolset;
    this._openApiToolset.internalValue = config.openApiToolset;
    this._timeouts.internalValue = config.timeouts;
    this._toolFakeConfig.internalValue = config.toolFakeConfig;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // execution_type - computed: false, optional: true, required: false
  private _executionType?: string; 
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }
  public set executionType(value: string) {
    this._executionType = value;
  }
  public resetExecutionType() {
    this._executionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTypeInput() {
    return this._executionType;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // toolset_id - computed: false, optional: false, required: true
  private _toolsetId?: string; 
  public get toolsetId() {
    return this.getStringAttribute('toolset_id');
  }
  public set toolsetId(value: string) {
    this._toolsetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetIdInput() {
    return this._toolsetId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // connector_toolset - computed: false, optional: true, required: false
  private _connectorToolset = new GoogleCesToolsetConnectorToolsetOutputReference(this, "connector_toolset");
  public get connectorToolset() {
    return this._connectorToolset;
  }
  public putConnectorToolset(value: GoogleCesToolsetConnectorToolset) {
    this._connectorToolset.internalValue = value;
  }
  public resetConnectorToolset() {
    this._connectorToolset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorToolsetInput() {
    return this._connectorToolset.internalValue;
  }

  // mcp_toolset - computed: false, optional: true, required: false
  private _mcpToolset = new GoogleCesToolsetMcpToolsetOutputReference(this, "mcp_toolset");
  public get mcpToolset() {
    return this._mcpToolset;
  }
  public putMcpToolset(value: GoogleCesToolsetMcpToolset) {
    this._mcpToolset.internalValue = value;
  }
  public resetMcpToolset() {
    this._mcpToolset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpToolsetInput() {
    return this._mcpToolset.internalValue;
  }

  // open_api_toolset - computed: false, optional: true, required: false
  private _openApiToolset = new GoogleCesToolsetOpenApiToolsetOutputReference(this, "open_api_toolset");
  public get openApiToolset() {
    return this._openApiToolset;
  }
  public putOpenApiToolset(value: GoogleCesToolsetOpenApiToolset) {
    this._openApiToolset.internalValue = value;
  }
  public resetOpenApiToolset() {
    this._openApiToolset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiToolsetInput() {
    return this._openApiToolset.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCesToolsetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCesToolsetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tool_fake_config - computed: false, optional: true, required: false
  private _toolFakeConfig = new GoogleCesToolsetToolFakeConfigOutputReference(this, "tool_fake_config");
  public get toolFakeConfig() {
    return this._toolFakeConfig;
  }
  public putToolFakeConfig(value: GoogleCesToolsetToolFakeConfig) {
    this._toolFakeConfig.internalValue = value;
  }
  public resetToolFakeConfig() {
    this._toolFakeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolFakeConfigInput() {
    return this._toolFakeConfig.internalValue;
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
      execution_type: cdktf.stringToTerraform(this._executionType),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      timeout: cdktf.stringToTerraform(this._timeout),
      toolset_id: cdktf.stringToTerraform(this._toolsetId),
      connector_toolset: googleCesToolsetConnectorToolsetToTerraform(this._connectorToolset.internalValue),
      mcp_toolset: googleCesToolsetMcpToolsetToTerraform(this._mcpToolset.internalValue),
      open_api_toolset: googleCesToolsetOpenApiToolsetToTerraform(this._openApiToolset.internalValue),
      timeouts: googleCesToolsetTimeoutsToTerraform(this._timeouts.internalValue),
      tool_fake_config: googleCesToolsetToolFakeConfigToTerraform(this._toolFakeConfig.internalValue),
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
      execution_type: {
        value: cdktf.stringToHclTerraform(this._executionType),
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
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      toolset_id: {
        value: cdktf.stringToHclTerraform(this._toolsetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_toolset: {
        value: googleCesToolsetConnectorToolsetToHclTerraform(this._connectorToolset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolsetConnectorToolsetList",
      },
      mcp_toolset: {
        value: googleCesToolsetMcpToolsetToHclTerraform(this._mcpToolset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolsetMcpToolsetList",
      },
      open_api_toolset: {
        value: googleCesToolsetOpenApiToolsetToHclTerraform(this._openApiToolset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolsetOpenApiToolsetList",
      },
      timeouts: {
        value: googleCesToolsetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCesToolsetTimeouts",
      },
      tool_fake_config: {
        value: googleCesToolsetToolFakeConfigToHclTerraform(this._toolFakeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolsetToolFakeConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
