// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCesToolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#app GoogleCesTool#app}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#deletion_policy GoogleCesTool#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Possible values:
  * SYNCHRONOUS
  * ASYNCHRONOUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#execution_type GoogleCesTool#execution_type}
  */
  readonly executionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#id GoogleCesTool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#location GoogleCesTool#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#project GoogleCesTool#project}
  */
  readonly project?: string;
  /**
  * The timeout for the tool execution. If not set, the default timeout is 30
  * seconds for SYNCHRONOUS tools and 60 seconds for ASYNCHRONOUS tools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#timeout GoogleCesTool#timeout}
  */
  readonly timeout?: string;
  /**
  * The ID to use for the tool, which will become the final component of
  * the tool's resource name. If not provided, a unique ID will be
  * automatically assigned for the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#tool_id GoogleCesTool#tool_id}
  */
  readonly toolId: string;
  /**
  * agent_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#agent_tool GoogleCesTool#agent_tool}
  */
  readonly agentTool?: GoogleCesToolAgentTool;
  /**
  * client_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#client_function GoogleCesTool#client_function}
  */
  readonly clientFunction?: GoogleCesToolClientFunction;
  /**
  * data_store_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#data_store_tool GoogleCesTool#data_store_tool}
  */
  readonly dataStoreTool?: GoogleCesToolDataStoreTool;
  /**
  * file_search_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#file_search_tool GoogleCesTool#file_search_tool}
  */
  readonly fileSearchTool?: GoogleCesToolFileSearchTool;
  /**
  * google_search_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#google_search_tool GoogleCesTool#google_search_tool}
  */
  readonly googleSearchTool?: GoogleCesToolGoogleSearchTool;
  /**
  * python_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#python_function GoogleCesTool#python_function}
  */
  readonly pythonFunction?: GoogleCesToolPythonFunction;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#timeouts GoogleCesTool#timeouts}
  */
  readonly timeouts?: GoogleCesToolTimeouts;
  /**
  * tool_fake_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#tool_fake_config GoogleCesTool#tool_fake_config}
  */
  readonly toolFakeConfig?: GoogleCesToolToolFakeConfig;
  /**
  * widget_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#widget_tool GoogleCesTool#widget_tool}
  */
  readonly widgetTool?: GoogleCesToolWidgetTool;
}
export interface GoogleCesToolConnectorToolActionEntityOperation {
}

export function googleCesToolConnectorToolActionEntityOperationToTerraform(struct?: GoogleCesToolConnectorToolActionEntityOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolConnectorToolActionEntityOperationToHclTerraform(struct?: GoogleCesToolConnectorToolActionEntityOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolConnectorToolActionEntityOperationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolConnectorToolActionEntityOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolConnectorToolActionEntityOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }
}

export class GoogleCesToolConnectorToolActionEntityOperationList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolConnectorToolActionEntityOperationOutputReference {
    return new GoogleCesToolConnectorToolActionEntityOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolConnectorToolAction {
}

export function googleCesToolConnectorToolActionToTerraform(struct?: GoogleCesToolConnectorToolAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolConnectorToolActionToHclTerraform(struct?: GoogleCesToolConnectorToolAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolConnectorToolActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolConnectorToolAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolConnectorToolAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_action_id - computed: true, optional: false, required: false
  public get connectionActionId() {
    return this.getStringAttribute('connection_action_id');
  }

  // entity_operation - computed: true, optional: false, required: false
  private _entityOperation = new GoogleCesToolConnectorToolActionEntityOperationList(this, "entity_operation", false);
  public get entityOperation() {
    return this._entityOperation;
  }

  // input_fields - computed: true, optional: false, required: false
  public get inputFields() {
    return this.getListAttribute('input_fields');
  }

  // output_fields - computed: true, optional: false, required: false
  public get outputFields() {
    return this.getListAttribute('output_fields');
  }
}

export class GoogleCesToolConnectorToolActionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolConnectorToolActionOutputReference {
    return new GoogleCesToolConnectorToolActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolConnectorTool {
}

export function googleCesToolConnectorToolToTerraform(struct?: GoogleCesToolConnectorTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolConnectorToolToHclTerraform(struct?: GoogleCesToolConnectorTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolConnectorToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolConnectorTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolConnectorTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new GoogleCesToolConnectorToolActionList(this, "action", false);
  public get action() {
    return this._action;
  }

  // auth_config - computed: true, optional: false, required: false
  public get authConfig() {
    return this.getStringAttribute('auth_config');
  }

  // connection - computed: true, optional: false, required: false
  public get connection() {
    return this.getStringAttribute('connection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GoogleCesToolConnectorToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolConnectorToolOutputReference {
    return new GoogleCesToolConnectorToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolMcpToolApiAuthenticationApiKeyConfig {
}

export function googleCesToolMcpToolApiAuthenticationApiKeyConfigToTerraform(struct?: GoogleCesToolMcpToolApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolMcpToolApiAuthenticationApiKeyConfigToHclTerraform(struct?: GoogleCesToolMcpToolApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolMcpToolApiAuthenticationApiKeyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolMcpToolApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolMcpToolApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_secret_version - computed: true, optional: false, required: false
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // request_location - computed: true, optional: false, required: false
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
}

export class GoogleCesToolMcpToolApiAuthenticationApiKeyConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolMcpToolApiAuthenticationApiKeyConfigOutputReference {
    return new GoogleCesToolMcpToolApiAuthenticationApiKeyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolMcpToolApiAuthenticationBearerTokenConfig {
}

export function googleCesToolMcpToolApiAuthenticationBearerTokenConfigToTerraform(struct?: GoogleCesToolMcpToolApiAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolMcpToolApiAuthenticationBearerTokenConfigToHclTerraform(struct?: GoogleCesToolMcpToolApiAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolMcpToolApiAuthenticationBearerTokenConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolMcpToolApiAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolMcpToolApiAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

export class GoogleCesToolMcpToolApiAuthenticationBearerTokenConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolMcpToolApiAuthenticationBearerTokenConfigOutputReference {
    return new GoogleCesToolMcpToolApiAuthenticationBearerTokenConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolMcpToolApiAuthenticationOauthConfig {
}

export function googleCesToolMcpToolApiAuthenticationOauthConfigToTerraform(struct?: GoogleCesToolMcpToolApiAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolMcpToolApiAuthenticationOauthConfigToHclTerraform(struct?: GoogleCesToolMcpToolApiAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolMcpToolApiAuthenticationOauthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolMcpToolApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolMcpToolApiAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_version - computed: true, optional: false, required: false
  public get clientSecretVersion() {
    return this.getStringAttribute('client_secret_version');
  }

  // oauth_grant_type - computed: true, optional: false, required: false
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class GoogleCesToolMcpToolApiAuthenticationOauthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolMcpToolApiAuthenticationOauthConfigOutputReference {
    return new GoogleCesToolMcpToolApiAuthenticationOauthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolMcpToolApiAuthenticationServiceAccountAuthConfig {
}

export function googleCesToolMcpToolApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: GoogleCesToolMcpToolApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolMcpToolApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: GoogleCesToolMcpToolApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolMcpToolApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolMcpToolApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolMcpToolApiAuthenticationServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
}

export class GoogleCesToolMcpToolApiAuthenticationServiceAccountAuthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolMcpToolApiAuthenticationServiceAccountAuthConfigOutputReference {
    return new GoogleCesToolMcpToolApiAuthenticationServiceAccountAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfig {
}

export function googleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct?: GoogleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct?: GoogleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class GoogleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference {
    return new GoogleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolMcpToolApiAuthentication {
}

export function googleCesToolMcpToolApiAuthenticationToTerraform(struct?: GoogleCesToolMcpToolApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolMcpToolApiAuthenticationToHclTerraform(struct?: GoogleCesToolMcpToolApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolMcpToolApiAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolMcpToolApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolMcpToolApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_config - computed: true, optional: false, required: false
  private _apiKeyConfig = new GoogleCesToolMcpToolApiAuthenticationApiKeyConfigList(this, "api_key_config", false);
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }

  // bearer_token_config - computed: true, optional: false, required: false
  private _bearerTokenConfig = new GoogleCesToolMcpToolApiAuthenticationBearerTokenConfigList(this, "bearer_token_config", false);
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }

  // oauth_config - computed: true, optional: false, required: false
  private _oauthConfig = new GoogleCesToolMcpToolApiAuthenticationOauthConfigList(this, "oauth_config", false);
  public get oauthConfig() {
    return this._oauthConfig;
  }

  // service_account_auth_config - computed: true, optional: false, required: false
  private _serviceAccountAuthConfig = new GoogleCesToolMcpToolApiAuthenticationServiceAccountAuthConfigList(this, "service_account_auth_config", false);
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }

  // service_agent_id_token_auth_config - computed: true, optional: false, required: false
  private _serviceAgentIdTokenAuthConfig = new GoogleCesToolMcpToolApiAuthenticationServiceAgentIdTokenAuthConfigList(this, "service_agent_id_token_auth_config", false);
  public get serviceAgentIdTokenAuthConfig() {
    return this._serviceAgentIdTokenAuthConfig;
  }
}

export class GoogleCesToolMcpToolApiAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolMcpToolApiAuthenticationOutputReference {
    return new GoogleCesToolMcpToolApiAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolMcpToolServiceDirectoryConfig {
}

export function googleCesToolMcpToolServiceDirectoryConfigToTerraform(struct?: GoogleCesToolMcpToolServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolMcpToolServiceDirectoryConfigToHclTerraform(struct?: GoogleCesToolMcpToolServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolMcpToolServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolMcpToolServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolMcpToolServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class GoogleCesToolMcpToolServiceDirectoryConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolMcpToolServiceDirectoryConfigOutputReference {
    return new GoogleCesToolMcpToolServiceDirectoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolMcpToolTlsConfigCaCerts {
}

export function googleCesToolMcpToolTlsConfigCaCertsToTerraform(struct?: GoogleCesToolMcpToolTlsConfigCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolMcpToolTlsConfigCaCertsToHclTerraform(struct?: GoogleCesToolMcpToolTlsConfigCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolMcpToolTlsConfigCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolMcpToolTlsConfigCaCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolMcpToolTlsConfigCaCerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class GoogleCesToolMcpToolTlsConfigCaCertsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolMcpToolTlsConfigCaCertsOutputReference {
    return new GoogleCesToolMcpToolTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolMcpToolTlsConfig {
}

export function googleCesToolMcpToolTlsConfigToTerraform(struct?: GoogleCesToolMcpToolTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolMcpToolTlsConfigToHclTerraform(struct?: GoogleCesToolMcpToolTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolMcpToolTlsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolMcpToolTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolMcpToolTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  private _caCerts = new GoogleCesToolMcpToolTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
}

export class GoogleCesToolMcpToolTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolMcpToolTlsConfigOutputReference {
    return new GoogleCesToolMcpToolTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolMcpTool {
}

export function googleCesToolMcpToolToTerraform(struct?: GoogleCesToolMcpTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolMcpToolToHclTerraform(struct?: GoogleCesToolMcpTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolMcpToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolMcpTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolMcpTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_authentication - computed: true, optional: false, required: false
  private _apiAuthentication = new GoogleCesToolMcpToolApiAuthenticationList(this, "api_authentication", false);
  public get apiAuthentication() {
    return this._apiAuthentication;
  }

  // custom_headers - computed: true, optional: false, required: false
  private _customHeaders = new cdktf.StringMap(this, "custom_headers");
  public get customHeaders() {
    return this._customHeaders;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // input_schema - computed: true, optional: false, required: false
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_override - computed: true, optional: false, required: false
  public get nameOverride() {
    return this.getStringAttribute('name_override');
  }

  // output_schema - computed: true, optional: false, required: false
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // service_directory_config - computed: true, optional: false, required: false
  private _serviceDirectoryConfig = new GoogleCesToolMcpToolServiceDirectoryConfigList(this, "service_directory_config", false);
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new GoogleCesToolMcpToolTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class GoogleCesToolMcpToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolMcpToolOutputReference {
    return new GoogleCesToolMcpToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig {
}

export function googleCesToolOpenApiToolApiAuthenticationApiKeyConfigToTerraform(struct?: GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolOpenApiToolApiAuthenticationApiKeyConfigToHclTerraform(struct?: GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_secret_version - computed: true, optional: false, required: false
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // request_location - computed: true, optional: false, required: false
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
}

export class GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference {
    return new GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig {
}

export function googleCesToolOpenApiToolApiAuthenticationBearerTokenConfigToTerraform(struct?: GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolOpenApiToolApiAuthenticationBearerTokenConfigToHclTerraform(struct?: GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

export class GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference {
    return new GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolOpenApiToolApiAuthenticationOauthConfig {
}

export function googleCesToolOpenApiToolApiAuthenticationOauthConfigToTerraform(struct?: GoogleCesToolOpenApiToolApiAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolOpenApiToolApiAuthenticationOauthConfigToHclTerraform(struct?: GoogleCesToolOpenApiToolApiAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolOpenApiToolApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolOpenApiToolApiAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_version - computed: true, optional: false, required: false
  public get clientSecretVersion() {
    return this.getStringAttribute('client_secret_version');
  }

  // oauth_grant_type - computed: true, optional: false, required: false
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference {
    return new GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig {
}

export function googleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
}

export class GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference {
    return new GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig {
}

export function googleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct?: GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct?: GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference {
    return new GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolOpenApiToolApiAuthentication {
}

export function googleCesToolOpenApiToolApiAuthenticationToTerraform(struct?: GoogleCesToolOpenApiToolApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolOpenApiToolApiAuthenticationToHclTerraform(struct?: GoogleCesToolOpenApiToolApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolOpenApiToolApiAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolOpenApiToolApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolOpenApiToolApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_config - computed: true, optional: false, required: false
  private _apiKeyConfig = new GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList(this, "api_key_config", false);
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }

  // bearer_token_config - computed: true, optional: false, required: false
  private _bearerTokenConfig = new GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList(this, "bearer_token_config", false);
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }

  // oauth_config - computed: true, optional: false, required: false
  private _oauthConfig = new GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList(this, "oauth_config", false);
  public get oauthConfig() {
    return this._oauthConfig;
  }

  // service_account_auth_config - computed: true, optional: false, required: false
  private _serviceAccountAuthConfig = new GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList(this, "service_account_auth_config", false);
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }

  // service_agent_id_token_auth_config - computed: true, optional: false, required: false
  private _serviceAgentIdTokenAuthConfig = new GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList(this, "service_agent_id_token_auth_config", false);
  public get serviceAgentIdTokenAuthConfig() {
    return this._serviceAgentIdTokenAuthConfig;
  }
}

export class GoogleCesToolOpenApiToolApiAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolOpenApiToolApiAuthenticationOutputReference {
    return new GoogleCesToolOpenApiToolApiAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolOpenApiToolServiceDirectoryConfig {
}

export function googleCesToolOpenApiToolServiceDirectoryConfigToTerraform(struct?: GoogleCesToolOpenApiToolServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolOpenApiToolServiceDirectoryConfigToHclTerraform(struct?: GoogleCesToolOpenApiToolServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolOpenApiToolServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolOpenApiToolServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class GoogleCesToolOpenApiToolServiceDirectoryConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference {
    return new GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolOpenApiToolTlsConfigCaCerts {
}

export function googleCesToolOpenApiToolTlsConfigCaCertsToTerraform(struct?: GoogleCesToolOpenApiToolTlsConfigCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolOpenApiToolTlsConfigCaCertsToHclTerraform(struct?: GoogleCesToolOpenApiToolTlsConfigCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolOpenApiToolTlsConfigCaCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolOpenApiToolTlsConfigCaCerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class GoogleCesToolOpenApiToolTlsConfigCaCertsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference {
    return new GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolOpenApiToolTlsConfig {
}

export function googleCesToolOpenApiToolTlsConfigToTerraform(struct?: GoogleCesToolOpenApiToolTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolOpenApiToolTlsConfigToHclTerraform(struct?: GoogleCesToolOpenApiToolTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolOpenApiToolTlsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolOpenApiToolTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolOpenApiToolTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  private _caCerts = new GoogleCesToolOpenApiToolTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
}

export class GoogleCesToolOpenApiToolTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolOpenApiToolTlsConfigOutputReference {
    return new GoogleCesToolOpenApiToolTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolOpenApiTool {
}

export function googleCesToolOpenApiToolToTerraform(struct?: GoogleCesToolOpenApiTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolOpenApiToolToHclTerraform(struct?: GoogleCesToolOpenApiTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolOpenApiToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolOpenApiTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolOpenApiTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_authentication - computed: true, optional: false, required: false
  private _apiAuthentication = new GoogleCesToolOpenApiToolApiAuthenticationList(this, "api_authentication", false);
  public get apiAuthentication() {
    return this._apiAuthentication;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ignore_unknown_fields - computed: true, optional: false, required: false
  public get ignoreUnknownFields() {
    return this.getBooleanAttribute('ignore_unknown_fields');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_api_schema - computed: true, optional: false, required: false
  public get openApiSchema() {
    return this.getStringAttribute('open_api_schema');
  }

  // service_directory_config - computed: true, optional: false, required: false
  private _serviceDirectoryConfig = new GoogleCesToolOpenApiToolServiceDirectoryConfigList(this, "service_directory_config", false);
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new GoogleCesToolOpenApiToolTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class GoogleCesToolOpenApiToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolOpenApiToolOutputReference {
    return new GoogleCesToolOpenApiToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolRemoteAgentToolAgentCardSkills {
}

export function googleCesToolRemoteAgentToolAgentCardSkillsToTerraform(struct?: GoogleCesToolRemoteAgentToolAgentCardSkills): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolRemoteAgentToolAgentCardSkillsToHclTerraform(struct?: GoogleCesToolRemoteAgentToolAgentCardSkills): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolRemoteAgentToolAgentCardSkillsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolRemoteAgentToolAgentCardSkills | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolRemoteAgentToolAgentCardSkills | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // examples - computed: true, optional: false, required: false
  public get examples() {
    return this.getListAttribute('examples');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_modes - computed: true, optional: false, required: false
  public get inputModes() {
    return this.getListAttribute('input_modes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_modes - computed: true, optional: false, required: false
  public get outputModes() {
    return this.getListAttribute('output_modes');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class GoogleCesToolRemoteAgentToolAgentCardSkillsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolRemoteAgentToolAgentCardSkillsOutputReference {
    return new GoogleCesToolRemoteAgentToolAgentCardSkillsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolRemoteAgentToolAgentCardSupportedInterfaces {
}

export function googleCesToolRemoteAgentToolAgentCardSupportedInterfacesToTerraform(struct?: GoogleCesToolRemoteAgentToolAgentCardSupportedInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolRemoteAgentToolAgentCardSupportedInterfacesToHclTerraform(struct?: GoogleCesToolRemoteAgentToolAgentCardSupportedInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolRemoteAgentToolAgentCardSupportedInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolRemoteAgentToolAgentCardSupportedInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolRemoteAgentToolAgentCardSupportedInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // protocol_binding - computed: true, optional: false, required: false
  public get protocolBinding() {
    return this.getStringAttribute('protocol_binding');
  }

  // protocol_version - computed: true, optional: false, required: false
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class GoogleCesToolRemoteAgentToolAgentCardSupportedInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolRemoteAgentToolAgentCardSupportedInterfacesOutputReference {
    return new GoogleCesToolRemoteAgentToolAgentCardSupportedInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolRemoteAgentToolAgentCard {
}

export function googleCesToolRemoteAgentToolAgentCardToTerraform(struct?: GoogleCesToolRemoteAgentToolAgentCard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolRemoteAgentToolAgentCardToHclTerraform(struct?: GoogleCesToolRemoteAgentToolAgentCard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolRemoteAgentToolAgentCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolRemoteAgentToolAgentCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolRemoteAgentToolAgentCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // skills - computed: true, optional: false, required: false
  private _skills = new GoogleCesToolRemoteAgentToolAgentCardSkillsList(this, "skills", false);
  public get skills() {
    return this._skills;
  }

  // supported_interfaces - computed: true, optional: false, required: false
  private _supportedInterfaces = new GoogleCesToolRemoteAgentToolAgentCardSupportedInterfacesList(this, "supported_interfaces", false);
  public get supportedInterfaces() {
    return this._supportedInterfaces;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class GoogleCesToolRemoteAgentToolAgentCardList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolRemoteAgentToolAgentCardOutputReference {
    return new GoogleCesToolRemoteAgentToolAgentCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolRemoteAgentTool {
}

export function googleCesToolRemoteAgentToolToTerraform(struct?: GoogleCesToolRemoteAgentTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolRemoteAgentToolToHclTerraform(struct?: GoogleCesToolRemoteAgentTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolRemoteAgentToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolRemoteAgentTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolRemoteAgentTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_card - computed: true, optional: false, required: false
  private _agentCard = new GoogleCesToolRemoteAgentToolAgentCardList(this, "agent_card", false);
  public get agentCard() {
    return this._agentCard;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GoogleCesToolRemoteAgentToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolRemoteAgentToolOutputReference {
    return new GoogleCesToolRemoteAgentToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolSystemTool {
}

export function googleCesToolSystemToolToTerraform(struct?: GoogleCesToolSystemTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolSystemToolToHclTerraform(struct?: GoogleCesToolSystemTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolSystemToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolSystemTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolSystemTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GoogleCesToolSystemToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolSystemToolOutputReference {
    return new GoogleCesToolSystemToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolAgentTool {
  /**
  * Optional. The resource name of the agent that is the entry point of the tool.
  * Format: projects/{project}/locations/{location}/agents/{agent}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#agent GoogleCesTool#agent}
  */
  readonly agent?: string;
  /**
  * Optional. Description of the tool's purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#description GoogleCesTool#description}
  */
  readonly description?: string;
  /**
  * Required. The name of the agent tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#name GoogleCesTool#name}
  */
  readonly name: string;
}

export function googleCesToolAgentToolToTerraform(struct?: GoogleCesToolAgentToolOutputReference | GoogleCesToolAgentTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleCesToolAgentToolToHclTerraform(struct?: GoogleCesToolAgentToolOutputReference | GoogleCesToolAgentTool): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class GoogleCesToolAgentToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolAgentTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolAgentTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
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
}
export interface GoogleCesToolClientFunctionParameters {
  /**
  * Defines the schema for additional properties allowed in an object.
  * The value must be a valid JSON string representing the Schema object.
  * (Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#additional_properties GoogleCesTool#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The instance value should be valid against at least one of the schemas in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#any_of GoogleCesTool#any_of}
  */
  readonly anyOf?: string;
  /**
  * Default value of the data. Represents a dynamically typed value
  * which can be either null, a number, a string, a boolean, a struct,
  * or a list of values. The provided default value must be compatible
  * with the defined 'type' and other schema constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#default GoogleCesTool#default}
  */
  readonly default?: string;
  /**
  * A map of definitions for use by ref. Only allowed at the root of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#defs GoogleCesTool#defs}
  */
  readonly defs?: string;
  /**
  * The description of the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#description GoogleCesTool#description}
  */
  readonly description?: string;
  /**
  * Possible values of the element of primitive type with enum format.
  * Examples:
  * 1. We can define direction as :
  * {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
  * 2. We can define apartment number as :
  * {type:INTEGER, format:enum, enum:["101", "201", "301"]}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#enum GoogleCesTool#enum}
  */
  readonly enum?: string[];
  /**
  * Schema of the elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#items GoogleCesTool#items}
  */
  readonly items?: string;
  /**
  * Maximum number of the elements for Type.ARRAY. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#max_items GoogleCesTool#max_items}
  */
  readonly maxItems?: number;
  /**
  * Maximum value for Type.INTEGER and Type.NUMBER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#maximum GoogleCesTool#maximum}
  */
  readonly maximum?: number;
  /**
  * Minimum number of the elements for Type.ARRAY. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#min_items GoogleCesTool#min_items}
  */
  readonly minItems?: number;
  /**
  * Minimum value for Type.INTEGER and Type.NUMBER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#minimum GoogleCesTool#minimum}
  */
  readonly minimum?: number;
  /**
  * Indicates if the value may be null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#nullable GoogleCesTool#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Schemas of initial elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#prefix_items GoogleCesTool#prefix_items}
  */
  readonly prefixItems?: string;
  /**
  * Properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#properties GoogleCesTool#properties}
  */
  readonly properties?: string;
  /**
  * Allows indirect references between schema nodes. The value should be a
  * valid reference to a child of the root 'defs'.
  * For example, the following schema defines a reference to a schema node
  * named "Pet":
  * type: object
  * properties:
  *   pet:
  *     ref: #/defs/Pet
  * defs:
  *   Pet:
  *     type: object
  *     properties:
  *       name:
  *         type: string
  * The value of the "pet" property is a reference to the schema node
  * named "Pet".
  * See details in
  * https://json-schema.org/understanding-json-schema/structuring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#ref GoogleCesTool#ref}
  */
  readonly ref?: string;
  /**
  * Required properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#required GoogleCesTool#required}
  */
  readonly required?: string[];
  /**
  * The title of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#title GoogleCesTool#title}
  */
  readonly title?: string;
  /**
  * The type of the data.
  * Possible values:
  * STRING
  * INTEGER
  * NUMBER
  * BOOLEAN
  * OBJECT
  * ARRAY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#type GoogleCesTool#type}
  */
  readonly type: string;
  /**
  * Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#unique_items GoogleCesTool#unique_items}
  */
  readonly uniqueItems?: boolean | cdktf.IResolvable;
}

export function googleCesToolClientFunctionParametersToTerraform(struct?: GoogleCesToolClientFunctionParametersOutputReference | GoogleCesToolClientFunctionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    any_of: cdktf.stringToTerraform(struct!.anyOf),
    default: cdktf.stringToTerraform(struct!.default),
    defs: cdktf.stringToTerraform(struct!.defs),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    items: cdktf.stringToTerraform(struct!.items),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    prefix_items: cdktf.stringToTerraform(struct!.prefixItems),
    properties: cdktf.stringToTerraform(struct!.properties),
    ref: cdktf.stringToTerraform(struct!.ref),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unique_items: cdktf.booleanToTerraform(struct!.uniqueItems),
  }
}


export function googleCesToolClientFunctionParametersToHclTerraform(struct?: GoogleCesToolClientFunctionParametersOutputReference | GoogleCesToolClientFunctionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_of: {
      value: cdktf.stringToHclTerraform(struct!.anyOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defs: {
      value: cdktf.stringToHclTerraform(struct!.defs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    items: {
      value: cdktf.stringToHclTerraform(struct!.items),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_items: {
      value: cdktf.stringToHclTerraform(struct!.prefixItems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolClientFunctionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolClientFunctionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defs !== undefined) {
      hasAnyValues = true;
      internalValueResult.defs = this._defs;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._prefixItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixItems = this._prefixItems;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolClientFunctionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._anyOf = undefined;
      this._default = undefined;
      this._defs = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._items = undefined;
      this._maxItems = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minimum = undefined;
      this._nullable = undefined;
      this._prefixItems = undefined;
      this._properties = undefined;
      this._ref = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._anyOf = value.anyOf;
      this._default = value.default;
      this._defs = value.defs;
      this._description = value.description;
      this._enum = value.enum;
      this._items = value.items;
      this._maxItems = value.maxItems;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minimum = value.minimum;
      this._nullable = value.nullable;
      this._prefixItems = value.prefixItems;
      this._properties = value.properties;
      this._ref = value.ref;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // any_of - computed: false, optional: true, required: false
  private _anyOf?: string; 
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }
  public set anyOf(value: string) {
    this._anyOf = value;
  }
  public resetAnyOf() {
    this._anyOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // defs - computed: false, optional: true, required: false
  private _defs?: string; 
  public get defs() {
    return this.getStringAttribute('defs');
  }
  public set defs(value: string) {
    this._defs = value;
  }
  public resetDefs() {
    this._defs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defsInput() {
    return this._defs;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // items - computed: false, optional: true, required: false
  private _items?: string; 
  public get items() {
    return this.getStringAttribute('items');
  }
  public set items(value: string) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // prefix_items - computed: false, optional: true, required: false
  private _prefixItems?: string; 
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }
  public set prefixItems(value: string) {
    this._prefixItems = value;
  }
  public resetPrefixItems() {
    this._prefixItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixItemsInput() {
    return this._prefixItems;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktf.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktf.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }
}
export interface GoogleCesToolClientFunctionResponse {
  /**
  * Defines the schema for additional properties allowed in an object.
  * The value must be a valid JSON string representing the Schema object.
  * (Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#additional_properties GoogleCesTool#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The instance value should be valid against at least one of the schemas in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#any_of GoogleCesTool#any_of}
  */
  readonly anyOf?: string;
  /**
  * Default value of the data. Represents a dynamically typed value
  * which can be either null, a number, a string, a boolean, a struct,
  * or a list of values. The provided default value must be compatible
  * with the defined 'type' and other schema constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#default GoogleCesTool#default}
  */
  readonly default?: string;
  /**
  * A map of definitions for use by ref. Only allowed at the root of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#defs GoogleCesTool#defs}
  */
  readonly defs?: string;
  /**
  * The description of the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#description GoogleCesTool#description}
  */
  readonly description?: string;
  /**
  * Possible values of the element of primitive type with enum format.
  * Examples:
  * 1. We can define direction as :
  * {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
  * 2. We can define apartment number as :
  * {type:INTEGER, format:enum, enum:["101", "201", "301"]}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#enum GoogleCesTool#enum}
  */
  readonly enum?: string[];
  /**
  * Schema of the elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#items GoogleCesTool#items}
  */
  readonly items?: string;
  /**
  * Maximum number of the elements for Type.ARRAY. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#max_items GoogleCesTool#max_items}
  */
  readonly maxItems?: number;
  /**
  * Maximum value for Type.INTEGER and Type.NUMBER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#maximum GoogleCesTool#maximum}
  */
  readonly maximum?: number;
  /**
  * Minimum number of the elements for Type.ARRAY. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#min_items GoogleCesTool#min_items}
  */
  readonly minItems?: number;
  /**
  * Minimum value for Type.INTEGER and Type.NUMBER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#minimum GoogleCesTool#minimum}
  */
  readonly minimum?: number;
  /**
  * Indicates if the value may be null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#nullable GoogleCesTool#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Schemas of initial elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#prefix_items GoogleCesTool#prefix_items}
  */
  readonly prefixItems?: string;
  /**
  * Properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#properties GoogleCesTool#properties}
  */
  readonly properties?: string;
  /**
  * Allows indirect references between schema nodes. The value should be a
  * valid reference to a child of the root 'defs'.
  * For example, the following schema defines a reference to a schema node
  * named "Pet":
  * type: object
  * properties:
  *   pet:
  *     ref: #/defs/Pet
  * defs:
  *   Pet:
  *     type: object
  *     properties:
  *       name:
  *         type: string
  * The value of the "pet" property is a reference to the schema node
  * named "Pet".
  * See details in
  * https://json-schema.org/understanding-json-schema/structuring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#ref GoogleCesTool#ref}
  */
  readonly ref?: string;
  /**
  * Required properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#required GoogleCesTool#required}
  */
  readonly required?: string[];
  /**
  * The title of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#title GoogleCesTool#title}
  */
  readonly title?: string;
  /**
  * The type of the data.
  * Possible values:
  * STRING
  * INTEGER
  * NUMBER
  * BOOLEAN
  * OBJECT
  * ARRAY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#type GoogleCesTool#type}
  */
  readonly type: string;
  /**
  * Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#unique_items GoogleCesTool#unique_items}
  */
  readonly uniqueItems?: boolean | cdktf.IResolvable;
}

export function googleCesToolClientFunctionResponseToTerraform(struct?: GoogleCesToolClientFunctionResponseOutputReference | GoogleCesToolClientFunctionResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    any_of: cdktf.stringToTerraform(struct!.anyOf),
    default: cdktf.stringToTerraform(struct!.default),
    defs: cdktf.stringToTerraform(struct!.defs),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    items: cdktf.stringToTerraform(struct!.items),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    prefix_items: cdktf.stringToTerraform(struct!.prefixItems),
    properties: cdktf.stringToTerraform(struct!.properties),
    ref: cdktf.stringToTerraform(struct!.ref),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unique_items: cdktf.booleanToTerraform(struct!.uniqueItems),
  }
}


export function googleCesToolClientFunctionResponseToHclTerraform(struct?: GoogleCesToolClientFunctionResponseOutputReference | GoogleCesToolClientFunctionResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_of: {
      value: cdktf.stringToHclTerraform(struct!.anyOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defs: {
      value: cdktf.stringToHclTerraform(struct!.defs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    items: {
      value: cdktf.stringToHclTerraform(struct!.items),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_items: {
      value: cdktf.stringToHclTerraform(struct!.prefixItems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolClientFunctionResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolClientFunctionResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defs !== undefined) {
      hasAnyValues = true;
      internalValueResult.defs = this._defs;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._prefixItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixItems = this._prefixItems;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolClientFunctionResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._anyOf = undefined;
      this._default = undefined;
      this._defs = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._items = undefined;
      this._maxItems = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minimum = undefined;
      this._nullable = undefined;
      this._prefixItems = undefined;
      this._properties = undefined;
      this._ref = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._anyOf = value.anyOf;
      this._default = value.default;
      this._defs = value.defs;
      this._description = value.description;
      this._enum = value.enum;
      this._items = value.items;
      this._maxItems = value.maxItems;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minimum = value.minimum;
      this._nullable = value.nullable;
      this._prefixItems = value.prefixItems;
      this._properties = value.properties;
      this._ref = value.ref;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // any_of - computed: false, optional: true, required: false
  private _anyOf?: string; 
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }
  public set anyOf(value: string) {
    this._anyOf = value;
  }
  public resetAnyOf() {
    this._anyOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // defs - computed: false, optional: true, required: false
  private _defs?: string; 
  public get defs() {
    return this.getStringAttribute('defs');
  }
  public set defs(value: string) {
    this._defs = value;
  }
  public resetDefs() {
    this._defs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defsInput() {
    return this._defs;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // items - computed: false, optional: true, required: false
  private _items?: string; 
  public get items() {
    return this.getStringAttribute('items');
  }
  public set items(value: string) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // prefix_items - computed: false, optional: true, required: false
  private _prefixItems?: string; 
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }
  public set prefixItems(value: string) {
    this._prefixItems = value;
  }
  public resetPrefixItems() {
    this._prefixItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixItemsInput() {
    return this._prefixItems;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktf.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktf.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }
}
export interface GoogleCesToolClientFunction {
  /**
  * The function description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#description GoogleCesTool#description}
  */
  readonly description?: string;
  /**
  * The function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#name GoogleCesTool#name}
  */
  readonly name: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#parameters GoogleCesTool#parameters}
  */
  readonly parameters?: GoogleCesToolClientFunctionParameters;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#response GoogleCesTool#response}
  */
  readonly response?: GoogleCesToolClientFunctionResponse;
}

export function googleCesToolClientFunctionToTerraform(struct?: GoogleCesToolClientFunctionOutputReference | GoogleCesToolClientFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: googleCesToolClientFunctionParametersToTerraform(struct!.parameters),
    response: googleCesToolClientFunctionResponseToTerraform(struct!.response),
  }
}


export function googleCesToolClientFunctionToHclTerraform(struct?: GoogleCesToolClientFunctionOutputReference | GoogleCesToolClientFunction): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: googleCesToolClientFunctionParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolClientFunctionParametersList",
    },
    response: {
      value: googleCesToolClientFunctionResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolClientFunctionResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolClientFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolClientFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolClientFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
      this._response.internalValue = value.response;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GoogleCesToolClientFunctionParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoogleCesToolClientFunctionParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new GoogleCesToolClientFunctionResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: GoogleCesToolClientFunctionResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}
export interface GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints {
  /**
  * Can be one of:
  * 1. The numerical field value.
  * 2. The duration spec for freshness:
  * The value must be formatted as an XSD 'dayTimeDuration' value (a
  * restricted subset of an ISO 8601 duration value). The pattern for
  * this is: 'nDnM]'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#attribute_value GoogleCesTool#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The value between -1 to 1 by which to boost the score if the
  * attribute_value evaluates to the value specified above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#boost_amount GoogleCesTool#boost_amount}
  */
  readonly boostAmount?: number;
}

export function googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToTerraform(struct?: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    boost_amount: cdktf.numberToTerraform(struct!.boostAmount),
  }
}


export function googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToHclTerraform(struct?: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boost_amount: {
      value: cdktf.numberToHclTerraform(struct!.boostAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._boostAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.boostAmount = this._boostAmount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeValue = undefined;
      this._boostAmount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeValue = value.attributeValue;
      this._boostAmount = value.boostAmount;
    }
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // boost_amount - computed: false, optional: true, required: false
  private _boostAmount?: number; 
  public get boostAmount() {
    return this.getNumberAttribute('boost_amount');
  }
  public set boostAmount(value: number) {
    this._boostAmount = value;
  }
  public resetBoostAmount() {
    this._boostAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostAmountInput() {
    return this._boostAmount;
  }
}

export class GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference {
    return new GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec {
  /**
  * The attribute type to be used to determine the boost amount. The
  * attribute value can be derived from the field value of the specified
  * field_name. In the case of numerical it is straightforward i.e.
  * attribute_value = numerical_field_value. In the case of freshness
  * however, attribute_value = (time.now() - datetime_field_value).
  * Possible values:
  * NUMERICAL
  * FRESHNESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#attribute_type GoogleCesTool#attribute_type}
  */
  readonly attributeType?: string;
  /**
  * The name of the field whose value will be used to determine the
  * boost amount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#field_name GoogleCesTool#field_name}
  */
  readonly fieldName?: string;
  /**
  * The interpolation type to be applied to connect the control points
  * listed below.
  * Possible values:
  * LINEAR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#interpolation_type GoogleCesTool#interpolation_type}
  */
  readonly interpolationType?: string;
  /**
  * control_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#control_points GoogleCesTool#control_points}
  */
  readonly controlPoints?: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] | cdktf.IResolvable;
}

export function googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToTerraform(struct?: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference | GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_type: cdktf.stringToTerraform(struct!.attributeType),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    interpolation_type: cdktf.stringToTerraform(struct!.interpolationType),
    control_points: cdktf.listMapper(googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToTerraform, true)(struct!.controlPoints),
  }
}


export function googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToHclTerraform(struct?: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference | GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_type: {
      value: cdktf.stringToHclTerraform(struct!.attributeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interpolation_type: {
      value: cdktf.stringToHclTerraform(struct!.interpolationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_points: {
      value: cdktf.listMapperHcl(googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToHclTerraform, true)(struct!.controlPoints),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeType = this._attributeType;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._interpolationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpolationType = this._interpolationType;
    }
    if (this._controlPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPoints = this._controlPoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributeType = undefined;
      this._fieldName = undefined;
      this._interpolationType = undefined;
      this._controlPoints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributeType = value.attributeType;
      this._fieldName = value.fieldName;
      this._interpolationType = value.interpolationType;
      this._controlPoints.internalValue = value.controlPoints;
    }
  }

  // attribute_type - computed: false, optional: true, required: false
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // interpolation_type - computed: false, optional: true, required: false
  private _interpolationType?: string; 
  public get interpolationType() {
    return this.getStringAttribute('interpolation_type');
  }
  public set interpolationType(value: string) {
    this._interpolationType = value;
  }
  public resetInterpolationType() {
    this._interpolationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpolationTypeInput() {
    return this._interpolationType;
  }

  // control_points - computed: false, optional: true, required: false
  private _controlPoints = new GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList(this, "control_points", false);
  public get controlPoints() {
    return this._controlPoints;
  }
  public putControlPoints(value: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] | cdktf.IResolvable) {
    this._controlPoints.internalValue = value;
  }
  public resetControlPoints() {
    this._controlPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPointsInput() {
    return this._controlPoints.internalValue;
  }
}
export interface GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs {
  /**
  * Strength of the boost, which should be in [-1, 1]. Negative boost means
  * demotion. Default is 0.0.
  * Setting to 1.0 gives the suggestions a big promotion. However, it does
  * not necessarily mean that the top result will be a boosted suggestion.
  * Setting to -1.0 gives the suggestions a big demotion. However, other
  * suggestions that are relevant might still be shown.
  * Setting to 0.0 means no boost applied. The boosting condition is
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#boost GoogleCesTool#boost}
  */
  readonly boost?: number;
  /**
  * An expression which specifies a boost condition. The syntax is the same
  * as filter expression syntax. Currently, the only supported condition is
  * a list of BCP-47 lang codes.
  * Example: To boost suggestions in languages en or fr:
  * (lang_code: ANY("en", "fr"))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#condition GoogleCesTool#condition}
  */
  readonly condition: string;
  /**
  * boost_control_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#boost_control_spec GoogleCesTool#boost_control_spec}
  */
  readonly boostControlSpec?: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec;
}

export function googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsToTerraform(struct?: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boost: cdktf.numberToTerraform(struct!.boost),
    condition: cdktf.stringToTerraform(struct!.condition),
    boost_control_spec: googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToTerraform(struct!.boostControlSpec),
  }
}


export function googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsToHclTerraform(struct?: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boost: {
      value: cdktf.numberToHclTerraform(struct!.boost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boost_control_spec: {
      value: googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToHclTerraform(struct!.boostControlSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boost !== undefined) {
      hasAnyValues = true;
      internalValueResult.boost = this._boost;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._boostControlSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boostControlSpec = this._boostControlSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boost = undefined;
      this._condition = undefined;
      this._boostControlSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boost = value.boost;
      this._condition = value.condition;
      this._boostControlSpec.internalValue = value.boostControlSpec;
    }
  }

  // boost - computed: false, optional: true, required: false
  private _boost?: number; 
  public get boost() {
    return this.getNumberAttribute('boost');
  }
  public set boost(value: number) {
    this._boost = value;
  }
  public resetBoost() {
    this._boost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostInput() {
    return this._boost;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // boost_control_spec - computed: false, optional: true, required: false
  private _boostControlSpec = new GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference(this, "boost_control_spec");
  public get boostControlSpec() {
    return this._boostControlSpec;
  }
  public putBoostControlSpec(value: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec) {
    this._boostControlSpec.internalValue = value;
  }
  public resetBoostControlSpec() {
    this._boostControlSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostControlSpecInput() {
    return this._boostControlSpec.internalValue;
  }
}

export class GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference {
    return new GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolDataStoreToolBoostSpecsSpec {
  /**
  * condition_boost_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#condition_boost_specs GoogleCesTool#condition_boost_specs}
  */
  readonly conditionBoostSpecs: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] | cdktf.IResolvable;
}

export function googleCesToolDataStoreToolBoostSpecsSpecToTerraform(struct?: GoogleCesToolDataStoreToolBoostSpecsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_boost_specs: cdktf.listMapper(googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsToTerraform, true)(struct!.conditionBoostSpecs),
  }
}


export function googleCesToolDataStoreToolBoostSpecsSpecToHclTerraform(struct?: GoogleCesToolDataStoreToolBoostSpecsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_boost_specs: {
      value: cdktf.listMapperHcl(googleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsToHclTerraform, true)(struct!.conditionBoostSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolDataStoreToolBoostSpecsSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionBoostSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionBoostSpecs = this._conditionBoostSpecs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolBoostSpecsSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionBoostSpecs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionBoostSpecs.internalValue = value.conditionBoostSpecs;
    }
  }

  // condition_boost_specs - computed: false, optional: false, required: true
  private _conditionBoostSpecs = new GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList(this, "condition_boost_specs", false);
  public get conditionBoostSpecs() {
    return this._conditionBoostSpecs;
  }
  public putConditionBoostSpecs(value: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] | cdktf.IResolvable) {
    this._conditionBoostSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionBoostSpecsInput() {
    return this._conditionBoostSpecs.internalValue;
  }
}

export class GoogleCesToolDataStoreToolBoostSpecsSpecList extends cdktf.ComplexList {
  public internalValue? : GoogleCesToolDataStoreToolBoostSpecsSpec[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference {
    return new GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolDataStoreToolBoostSpecs {
  /**
  * The Data Store where the boosting configuration is applied. Full resource
  * name of DataStore, such as
  * projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#data_stores GoogleCesTool#data_stores}
  */
  readonly dataStores: string[];
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#spec GoogleCesTool#spec}
  */
  readonly spec: GoogleCesToolDataStoreToolBoostSpecsSpec[] | cdktf.IResolvable;
}

export function googleCesToolDataStoreToolBoostSpecsToTerraform(struct?: GoogleCesToolDataStoreToolBoostSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_stores: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataStores),
    spec: cdktf.listMapper(googleCesToolDataStoreToolBoostSpecsSpecToTerraform, true)(struct!.spec),
  }
}


export function googleCesToolDataStoreToolBoostSpecsToHclTerraform(struct?: GoogleCesToolDataStoreToolBoostSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_stores: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataStores),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spec: {
      value: cdktf.listMapperHcl(googleCesToolDataStoreToolBoostSpecsSpecToHclTerraform, true)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolBoostSpecsSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolBoostSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolDataStoreToolBoostSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStores !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStores = this._dataStores;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolBoostSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataStores = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataStores = value.dataStores;
      this._spec.internalValue = value.spec;
    }
  }

  // data_stores - computed: false, optional: false, required: true
  private _dataStores?: string[]; 
  public get dataStores() {
    return this.getListAttribute('data_stores');
  }
  public set dataStores(value: string[]) {
    this._dataStores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoresInput() {
    return this._dataStores;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new GoogleCesToolDataStoreToolBoostSpecsSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GoogleCesToolDataStoreToolBoostSpecsSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class GoogleCesToolDataStoreToolBoostSpecsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesToolDataStoreToolBoostSpecs[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesToolDataStoreToolBoostSpecsOutputReference {
    return new GoogleCesToolDataStoreToolBoostSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfig {
}

export function googleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfigToTerraform(struct?: GoogleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfigToHclTerraform(struct?: GoogleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection - computed: true, optional: false, required: false
  public get collection() {
    return this.getStringAttribute('collection');
  }

  // collection_display_name - computed: true, optional: false, required: false
  public get collectionDisplayName() {
    return this.getStringAttribute('collection_display_name');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
}

export class GoogleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfigOutputReference {
    return new GoogleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolDataStoreToolDataStoreSourceDataStore {
  /**
  * Full resource name of the DataStore.
  * Format: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#name GoogleCesTool#name}
  */
  readonly name: string;
}

export function googleCesToolDataStoreToolDataStoreSourceDataStoreToTerraform(struct?: GoogleCesToolDataStoreToolDataStoreSourceDataStoreOutputReference | GoogleCesToolDataStoreToolDataStoreSourceDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleCesToolDataStoreToolDataStoreSourceDataStoreToHclTerraform(struct?: GoogleCesToolDataStoreToolDataStoreSourceDataStoreOutputReference | GoogleCesToolDataStoreToolDataStoreSourceDataStore): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolDataStoreSourceDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolDataStoreSourceDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolDataStoreSourceDataStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // connector_config - computed: true, optional: false, required: false
  private _connectorConfig = new GoogleCesToolDataStoreToolDataStoreSourceDataStoreConnectorConfigList(this, "connector_config", false);
  public get connectorConfig() {
    return this._connectorConfig;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // document_processing_mode - computed: true, optional: false, required: false
  public get documentProcessingMode() {
    return this.getStringAttribute('document_processing_mode');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface GoogleCesToolDataStoreToolDataStoreSource {
  /**
  * Optional. Filter specification for the DataStore.
  * See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#filter GoogleCesTool#filter}
  */
  readonly filter?: string;
  /**
  * data_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#data_store GoogleCesTool#data_store}
  */
  readonly dataStore?: GoogleCesToolDataStoreToolDataStoreSourceDataStore;
}

export function googleCesToolDataStoreToolDataStoreSourceToTerraform(struct?: GoogleCesToolDataStoreToolDataStoreSourceOutputReference | GoogleCesToolDataStoreToolDataStoreSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    data_store: googleCesToolDataStoreToolDataStoreSourceDataStoreToTerraform(struct!.dataStore),
  }
}


export function googleCesToolDataStoreToolDataStoreSourceToHclTerraform(struct?: GoogleCesToolDataStoreToolDataStoreSourceOutputReference | GoogleCesToolDataStoreToolDataStoreSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store: {
      value: googleCesToolDataStoreToolDataStoreSourceDataStoreToHclTerraform(struct!.dataStore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolDataStoreSourceDataStoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolDataStoreSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolDataStoreSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._dataStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolDataStoreSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._dataStore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._dataStore.internalValue = value.dataStore;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore = new GoogleCesToolDataStoreToolDataStoreSourceDataStoreOutputReference(this, "data_store");
  public get dataStore() {
    return this._dataStore;
  }
  public putDataStore(value: GoogleCesToolDataStoreToolDataStoreSourceDataStore) {
    this._dataStore.internalValue = value;
  }
  public resetDataStore() {
    this._dataStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore.internalValue;
  }
}
export interface GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig {
}

export function googleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigToTerraform(struct?: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigToHclTerraform(struct?: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection - computed: true, optional: false, required: false
  public get collection() {
    return this.getStringAttribute('collection');
  }

  // collection_display_name - computed: true, optional: false, required: false
  public get collectionDisplayName() {
    return this.getStringAttribute('collection_display_name');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
}

export class GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference {
    return new GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore {
  /**
  * Full resource name of the DataStore.
  * Format:
  * 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#name GoogleCesTool#name}
  */
  readonly name: string;
}

export function googleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreToTerraform(struct?: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference | GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreToHclTerraform(struct?: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference | GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // connector_config - computed: true, optional: false, required: false
  private _connectorConfig = new GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList(this, "connector_config", false);
  public get connectorConfig() {
    return this._connectorConfig;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // document_processing_mode - computed: true, optional: false, required: false
  public get documentProcessingMode() {
    return this.getStringAttribute('document_processing_mode');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface GoogleCesToolDataStoreToolEngineSourceDataStoreSources {
  /**
  * Filter specification for the DataStore.
  * See:
  * https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#filter GoogleCesTool#filter}
  */
  readonly filter?: string;
  /**
  * data_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#data_store GoogleCesTool#data_store}
  */
  readonly dataStore?: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore;
}

export function googleCesToolDataStoreToolEngineSourceDataStoreSourcesToTerraform(struct?: GoogleCesToolDataStoreToolEngineSourceDataStoreSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    data_store: googleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreToTerraform(struct!.dataStore),
  }
}


export function googleCesToolDataStoreToolEngineSourceDataStoreSourcesToHclTerraform(struct?: GoogleCesToolDataStoreToolEngineSourceDataStoreSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store: {
      value: googleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreToHclTerraform(struct!.dataStore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolDataStoreToolEngineSourceDataStoreSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._dataStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolEngineSourceDataStoreSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._dataStore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._dataStore.internalValue = value.dataStore;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore = new GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference(this, "data_store");
  public get dataStore() {
    return this._dataStore;
  }
  public putDataStore(value: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore) {
    this._dataStore.internalValue = value;
  }
  public resetDataStore() {
    this._dataStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore.internalValue;
  }
}

export class GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleCesToolDataStoreToolEngineSourceDataStoreSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference {
    return new GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolDataStoreToolEngineSource {
  /**
  * Full resource name of the Engine.
  * Format:
  * 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#engine GoogleCesTool#engine}
  */
  readonly engine: string;
  /**
  * A filter applied to the search across the Engine. Not relevant and not
  * used if 'data_store_sources' is provided.
  * See:
  * https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#filter GoogleCesTool#filter}
  */
  readonly filter?: string;
  /**
  * data_store_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#data_store_sources GoogleCesTool#data_store_sources}
  */
  readonly dataStoreSources?: GoogleCesToolDataStoreToolEngineSourceDataStoreSources[] | cdktf.IResolvable;
}

export function googleCesToolDataStoreToolEngineSourceToTerraform(struct?: GoogleCesToolDataStoreToolEngineSourceOutputReference | GoogleCesToolDataStoreToolEngineSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine: cdktf.stringToTerraform(struct!.engine),
    filter: cdktf.stringToTerraform(struct!.filter),
    data_store_sources: cdktf.listMapper(googleCesToolDataStoreToolEngineSourceDataStoreSourcesToTerraform, true)(struct!.dataStoreSources),
  }
}


export function googleCesToolDataStoreToolEngineSourceToHclTerraform(struct?: GoogleCesToolDataStoreToolEngineSourceOutputReference | GoogleCesToolDataStoreToolEngineSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_sources: {
      value: cdktf.listMapperHcl(googleCesToolDataStoreToolEngineSourceDataStoreSourcesToHclTerraform, true)(struct!.dataStoreSources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolEngineSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolEngineSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._dataStoreSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreSources = this._dataStoreSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolEngineSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engine = undefined;
      this._filter = undefined;
      this._dataStoreSources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engine = value.engine;
      this._filter = value.filter;
      this._dataStoreSources.internalValue = value.dataStoreSources;
    }
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // data_store_sources - computed: false, optional: true, required: false
  private _dataStoreSources = new GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList(this, "data_store_sources", false);
  public get dataStoreSources() {
    return this._dataStoreSources;
  }
  public putDataStoreSources(value: GoogleCesToolDataStoreToolEngineSourceDataStoreSources[] | cdktf.IResolvable) {
    this._dataStoreSources.internalValue = value;
  }
  public resetDataStoreSources() {
    this._dataStoreSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreSourcesInput() {
    return this._dataStoreSources.internalValue;
  }
}
export interface GoogleCesToolDataStoreToolModalityConfigsGroundingConfig {
  /**
  * Whether grounding is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#disabled GoogleCesTool#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The groundedness threshold of the answer based on the retrieved sources.
  * The value has a configurable range of [1, 5]. The level is used to
  * threshold the groundedness of the answer, meaning that all responses with
  * a groundedness score below the threshold will fall back to returning
  * relevant snippets only.
  * For example, a level of 3 means that the groundedness score must be
  * 3 or higher for the response to be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#grounding_level GoogleCesTool#grounding_level}
  */
  readonly groundingLevel?: number;
}

export function googleCesToolDataStoreToolModalityConfigsGroundingConfigToTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference | GoogleCesToolDataStoreToolModalityConfigsGroundingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    grounding_level: cdktf.numberToTerraform(struct!.groundingLevel),
  }
}


export function googleCesToolDataStoreToolModalityConfigsGroundingConfigToHclTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference | GoogleCesToolDataStoreToolModalityConfigsGroundingConfig): any {
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
    grounding_level: {
      value: cdktf.numberToHclTerraform(struct!.groundingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolModalityConfigsGroundingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._groundingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.groundingLevel = this._groundingLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolModalityConfigsGroundingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._groundingLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._groundingLevel = value.groundingLevel;
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

  // grounding_level - computed: false, optional: true, required: false
  private _groundingLevel?: number; 
  public get groundingLevel() {
    return this.getNumberAttribute('grounding_level');
  }
  public set groundingLevel(value: number) {
    this._groundingLevel = value;
  }
  public resetGroundingLevel() {
    this._groundingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groundingLevelInput() {
    return this._groundingLevel;
  }
}
export interface GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#model GoogleCesTool#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#temperature GoogleCesTool#temperature}
  */
  readonly temperature?: number;
}

export function googleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsToTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference | GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    temperature: cdktf.numberToTerraform(struct!.temperature),
  }
}


export function googleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsToHclTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference | GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings): any {
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

export class GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings | undefined {
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

  public set internalValue(value: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings | undefined) {
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
export interface GoogleCesToolDataStoreToolModalityConfigsRewriterConfig {
  /**
  * Whether the rewriter is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#disabled GoogleCesTool#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The prompt definition. If not set, default prompt will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#prompt GoogleCesTool#prompt}
  */
  readonly prompt?: string;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#model_settings GoogleCesTool#model_settings}
  */
  readonly modelSettings: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings;
}

export function googleCesToolDataStoreToolModalityConfigsRewriterConfigToTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference | GoogleCesToolDataStoreToolModalityConfigsRewriterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    prompt: cdktf.stringToTerraform(struct!.prompt),
    model_settings: googleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsToTerraform(struct!.modelSettings),
  }
}


export function googleCesToolDataStoreToolModalityConfigsRewriterConfigToHclTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference | GoogleCesToolDataStoreToolModalityConfigsRewriterConfig): any {
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
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_settings: {
      value: googleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsToHclTerraform(struct!.modelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolModalityConfigsRewriterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
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

  public set internalValue(value: GoogleCesToolDataStoreToolModalityConfigsRewriterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._prompt = undefined;
      this._modelSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._prompt = value.prompt;
      this._modelSettings.internalValue = value.modelSettings;
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

  // prompt - computed: false, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // model_settings - computed: false, optional: false, required: true
  private _modelSettings = new GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings) {
    this._modelSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSettingsInput() {
    return this._modelSettings.internalValue;
  }
}
export interface GoogleCesToolDataStoreToolModalityConfigsSnippetsConfig {
  /**
  * Whether snippets are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#enable_snippets GoogleCesTool#enable_snippets}
  */
  readonly enableSnippets?: boolean | cdktf.IResolvable;
}

export function googleCesToolDataStoreToolModalityConfigsSnippetsConfigToTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsSnippetsConfigOutputReference | GoogleCesToolDataStoreToolModalityConfigsSnippetsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_snippets: cdktf.booleanToTerraform(struct!.enableSnippets),
  }
}


export function googleCesToolDataStoreToolModalityConfigsSnippetsConfigToHclTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsSnippetsConfigOutputReference | GoogleCesToolDataStoreToolModalityConfigsSnippetsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_snippets: {
      value: cdktf.booleanToHclTerraform(struct!.enableSnippets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolModalityConfigsSnippetsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolModalityConfigsSnippetsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSnippets !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSnippets = this._enableSnippets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolModalityConfigsSnippetsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSnippets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSnippets = value.enableSnippets;
    }
  }

  // enable_snippets - computed: false, optional: true, required: false
  private _enableSnippets?: boolean | cdktf.IResolvable; 
  public get enableSnippets() {
    return this.getBooleanAttribute('enable_snippets');
  }
  public set enableSnippets(value: boolean | cdktf.IResolvable) {
    this._enableSnippets = value;
  }
  public resetEnableSnippets() {
    this._enableSnippets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnippetsInput() {
    return this._enableSnippets;
  }
}
export interface GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#model GoogleCesTool#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#temperature GoogleCesTool#temperature}
  */
  readonly temperature?: number;
}

export function googleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsToTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference | GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    temperature: cdktf.numberToTerraform(struct!.temperature),
  }
}


export function googleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsToHclTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference | GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings): any {
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

export class GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings | undefined {
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

  public set internalValue(value: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings | undefined) {
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
export interface GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig {
  /**
  * Whether summarization is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#disabled GoogleCesTool#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The prompt definition. If not set, default prompt will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#prompt GoogleCesTool#prompt}
  */
  readonly prompt?: string;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#model_settings GoogleCesTool#model_settings}
  */
  readonly modelSettings?: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings;
}

export function googleCesToolDataStoreToolModalityConfigsSummarizationConfigToTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference | GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    prompt: cdktf.stringToTerraform(struct!.prompt),
    model_settings: googleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsToTerraform(struct!.modelSettings),
  }
}


export function googleCesToolDataStoreToolModalityConfigsSummarizationConfigToHclTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference | GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig): any {
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
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_settings: {
      value: googleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsToHclTerraform(struct!.modelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
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

  public set internalValue(value: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._prompt = undefined;
      this._modelSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._prompt = value.prompt;
      this._modelSettings.internalValue = value.modelSettings;
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

  // prompt - computed: false, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // model_settings - computed: false, optional: true, required: false
  private _modelSettings = new GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings) {
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
export interface GoogleCesToolDataStoreToolModalityConfigs {
  /**
  * The modality type.
  * Possible values:
  * TEXT
  * AUDIO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#modality_type GoogleCesTool#modality_type}
  */
  readonly modalityType: string;
  /**
  * grounding_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#grounding_config GoogleCesTool#grounding_config}
  */
  readonly groundingConfig?: GoogleCesToolDataStoreToolModalityConfigsGroundingConfig;
  /**
  * rewriter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#rewriter_config GoogleCesTool#rewriter_config}
  */
  readonly rewriterConfig?: GoogleCesToolDataStoreToolModalityConfigsRewriterConfig;
  /**
  * snippets_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#snippets_config GoogleCesTool#snippets_config}
  */
  readonly snippetsConfig?: GoogleCesToolDataStoreToolModalityConfigsSnippetsConfig;
  /**
  * summarization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#summarization_config GoogleCesTool#summarization_config}
  */
  readonly summarizationConfig?: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig;
}

export function googleCesToolDataStoreToolModalityConfigsToTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    modality_type: cdktf.stringToTerraform(struct!.modalityType),
    grounding_config: googleCesToolDataStoreToolModalityConfigsGroundingConfigToTerraform(struct!.groundingConfig),
    rewriter_config: googleCesToolDataStoreToolModalityConfigsRewriterConfigToTerraform(struct!.rewriterConfig),
    snippets_config: googleCesToolDataStoreToolModalityConfigsSnippetsConfigToTerraform(struct!.snippetsConfig),
    summarization_config: googleCesToolDataStoreToolModalityConfigsSummarizationConfigToTerraform(struct!.summarizationConfig),
  }
}


export function googleCesToolDataStoreToolModalityConfigsToHclTerraform(struct?: GoogleCesToolDataStoreToolModalityConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    modality_type: {
      value: cdktf.stringToHclTerraform(struct!.modalityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grounding_config: {
      value: googleCesToolDataStoreToolModalityConfigsGroundingConfigToHclTerraform(struct!.groundingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolModalityConfigsGroundingConfigList",
    },
    rewriter_config: {
      value: googleCesToolDataStoreToolModalityConfigsRewriterConfigToHclTerraform(struct!.rewriterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolModalityConfigsRewriterConfigList",
    },
    snippets_config: {
      value: googleCesToolDataStoreToolModalityConfigsSnippetsConfigToHclTerraform(struct!.snippetsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolModalityConfigsSnippetsConfigList",
    },
    summarization_config: {
      value: googleCesToolDataStoreToolModalityConfigsSummarizationConfigToHclTerraform(struct!.summarizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolModalityConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesToolDataStoreToolModalityConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modalityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityType = this._modalityType;
    }
    if (this._groundingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groundingConfig = this._groundingConfig?.internalValue;
    }
    if (this._rewriterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriterConfig = this._rewriterConfig?.internalValue;
    }
    if (this._snippetsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snippetsConfig = this._snippetsConfig?.internalValue;
    }
    if (this._summarizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizationConfig = this._summarizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreToolModalityConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modalityType = undefined;
      this._groundingConfig.internalValue = undefined;
      this._rewriterConfig.internalValue = undefined;
      this._snippetsConfig.internalValue = undefined;
      this._summarizationConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modalityType = value.modalityType;
      this._groundingConfig.internalValue = value.groundingConfig;
      this._rewriterConfig.internalValue = value.rewriterConfig;
      this._snippetsConfig.internalValue = value.snippetsConfig;
      this._summarizationConfig.internalValue = value.summarizationConfig;
    }
  }

  // modality_type - computed: false, optional: false, required: true
  private _modalityType?: string; 
  public get modalityType() {
    return this.getStringAttribute('modality_type');
  }
  public set modalityType(value: string) {
    this._modalityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityTypeInput() {
    return this._modalityType;
  }

  // grounding_config - computed: false, optional: true, required: false
  private _groundingConfig = new GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference(this, "grounding_config");
  public get groundingConfig() {
    return this._groundingConfig;
  }
  public putGroundingConfig(value: GoogleCesToolDataStoreToolModalityConfigsGroundingConfig) {
    this._groundingConfig.internalValue = value;
  }
  public resetGroundingConfig() {
    this._groundingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groundingConfigInput() {
    return this._groundingConfig.internalValue;
  }

  // rewriter_config - computed: false, optional: true, required: false
  private _rewriterConfig = new GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference(this, "rewriter_config");
  public get rewriterConfig() {
    return this._rewriterConfig;
  }
  public putRewriterConfig(value: GoogleCesToolDataStoreToolModalityConfigsRewriterConfig) {
    this._rewriterConfig.internalValue = value;
  }
  public resetRewriterConfig() {
    this._rewriterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriterConfigInput() {
    return this._rewriterConfig.internalValue;
  }

  // snippets_config - computed: false, optional: true, required: false
  private _snippetsConfig = new GoogleCesToolDataStoreToolModalityConfigsSnippetsConfigOutputReference(this, "snippets_config");
  public get snippetsConfig() {
    return this._snippetsConfig;
  }
  public putSnippetsConfig(value: GoogleCesToolDataStoreToolModalityConfigsSnippetsConfig) {
    this._snippetsConfig.internalValue = value;
  }
  public resetSnippetsConfig() {
    this._snippetsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetsConfigInput() {
    return this._snippetsConfig.internalValue;
  }

  // summarization_config - computed: false, optional: true, required: false
  private _summarizationConfig = new GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference(this, "summarization_config");
  public get summarizationConfig() {
    return this._summarizationConfig;
  }
  public putSummarizationConfig(value: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig) {
    this._summarizationConfig.internalValue = value;
  }
  public resetSummarizationConfig() {
    this._summarizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationConfigInput() {
    return this._summarizationConfig.internalValue;
  }
}

export class GoogleCesToolDataStoreToolModalityConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleCesToolDataStoreToolModalityConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleCesToolDataStoreToolModalityConfigsOutputReference {
    return new GoogleCesToolDataStoreToolModalityConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesToolDataStoreTool {
  /**
  * The tool description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#description GoogleCesTool#description}
  */
  readonly description?: string;
  /**
  * Optional. The filter parameter behavior.
  * Possible values:
  * FILTER_PARAMETER_BEHAVIOR_UNSPECIFIED
  * ALWAYS_INCLUDE
  * NEVER_INCLUDE Possible values: ["FILTER_PARAMETER_BEHAVIOR_UNSPECIFIED", "ALWAYS_INCLUDE", "NEVER_INCLUDE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#filter_parameter_behavior GoogleCesTool#filter_parameter_behavior}
  */
  readonly filterParameterBehavior?: string;
  /**
  * Number of search results to return per query.
  * The default value is 10. The maximum allowed value is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#max_results GoogleCesTool#max_results}
  */
  readonly maxResults?: number;
  /**
  * The data store tool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#name GoogleCesTool#name}
  */
  readonly name: string;
  /**
  * boost_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#boost_specs GoogleCesTool#boost_specs}
  */
  readonly boostSpecs?: GoogleCesToolDataStoreToolBoostSpecs[] | cdktf.IResolvable;
  /**
  * data_store_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#data_store_source GoogleCesTool#data_store_source}
  */
  readonly dataStoreSource?: GoogleCesToolDataStoreToolDataStoreSource;
  /**
  * engine_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#engine_source GoogleCesTool#engine_source}
  */
  readonly engineSource?: GoogleCesToolDataStoreToolEngineSource;
  /**
  * modality_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#modality_configs GoogleCesTool#modality_configs}
  */
  readonly modalityConfigs?: GoogleCesToolDataStoreToolModalityConfigs[] | cdktf.IResolvable;
}

export function googleCesToolDataStoreToolToTerraform(struct?: GoogleCesToolDataStoreToolOutputReference | GoogleCesToolDataStoreTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    filter_parameter_behavior: cdktf.stringToTerraform(struct!.filterParameterBehavior),
    max_results: cdktf.numberToTerraform(struct!.maxResults),
    name: cdktf.stringToTerraform(struct!.name),
    boost_specs: cdktf.listMapper(googleCesToolDataStoreToolBoostSpecsToTerraform, true)(struct!.boostSpecs),
    data_store_source: googleCesToolDataStoreToolDataStoreSourceToTerraform(struct!.dataStoreSource),
    engine_source: googleCesToolDataStoreToolEngineSourceToTerraform(struct!.engineSource),
    modality_configs: cdktf.listMapper(googleCesToolDataStoreToolModalityConfigsToTerraform, true)(struct!.modalityConfigs),
  }
}


export function googleCesToolDataStoreToolToHclTerraform(struct?: GoogleCesToolDataStoreToolOutputReference | GoogleCesToolDataStoreTool): any {
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
    filter_parameter_behavior: {
      value: cdktf.stringToHclTerraform(struct!.filterParameterBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_results: {
      value: cdktf.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boost_specs: {
      value: cdktf.listMapperHcl(googleCesToolDataStoreToolBoostSpecsToHclTerraform, true)(struct!.boostSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolBoostSpecsList",
    },
    data_store_source: {
      value: googleCesToolDataStoreToolDataStoreSourceToHclTerraform(struct!.dataStoreSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolDataStoreSourceList",
    },
    engine_source: {
      value: googleCesToolDataStoreToolEngineSourceToHclTerraform(struct!.engineSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolEngineSourceList",
    },
    modality_configs: {
      value: cdktf.listMapperHcl(googleCesToolDataStoreToolModalityConfigsToHclTerraform, true)(struct!.modalityConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolDataStoreToolModalityConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolDataStoreToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolDataStoreTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filterParameterBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterParameterBehavior = this._filterParameterBehavior;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._boostSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boostSpecs = this._boostSpecs?.internalValue;
    }
    if (this._dataStoreSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreSource = this._dataStoreSource?.internalValue;
    }
    if (this._engineSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineSource = this._engineSource?.internalValue;
    }
    if (this._modalityConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityConfigs = this._modalityConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolDataStoreTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._filterParameterBehavior = undefined;
      this._maxResults = undefined;
      this._name = undefined;
      this._boostSpecs.internalValue = undefined;
      this._dataStoreSource.internalValue = undefined;
      this._engineSource.internalValue = undefined;
      this._modalityConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._filterParameterBehavior = value.filterParameterBehavior;
      this._maxResults = value.maxResults;
      this._name = value.name;
      this._boostSpecs.internalValue = value.boostSpecs;
      this._dataStoreSource.internalValue = value.dataStoreSource;
      this._engineSource.internalValue = value.engineSource;
      this._modalityConfigs.internalValue = value.modalityConfigs;
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

  // filter_parameter_behavior - computed: false, optional: true, required: false
  private _filterParameterBehavior?: string; 
  public get filterParameterBehavior() {
    return this.getStringAttribute('filter_parameter_behavior');
  }
  public set filterParameterBehavior(value: string) {
    this._filterParameterBehavior = value;
  }
  public resetFilterParameterBehavior() {
    this._filterParameterBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParameterBehaviorInput() {
    return this._filterParameterBehavior;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
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

  // boost_specs - computed: false, optional: true, required: false
  private _boostSpecs = new GoogleCesToolDataStoreToolBoostSpecsList(this, "boost_specs", false);
  public get boostSpecs() {
    return this._boostSpecs;
  }
  public putBoostSpecs(value: GoogleCesToolDataStoreToolBoostSpecs[] | cdktf.IResolvable) {
    this._boostSpecs.internalValue = value;
  }
  public resetBoostSpecs() {
    this._boostSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostSpecsInput() {
    return this._boostSpecs.internalValue;
  }

  // data_store_source - computed: false, optional: true, required: false
  private _dataStoreSource = new GoogleCesToolDataStoreToolDataStoreSourceOutputReference(this, "data_store_source");
  public get dataStoreSource() {
    return this._dataStoreSource;
  }
  public putDataStoreSource(value: GoogleCesToolDataStoreToolDataStoreSource) {
    this._dataStoreSource.internalValue = value;
  }
  public resetDataStoreSource() {
    this._dataStoreSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreSourceInput() {
    return this._dataStoreSource.internalValue;
  }

  // engine_source - computed: false, optional: true, required: false
  private _engineSource = new GoogleCesToolDataStoreToolEngineSourceOutputReference(this, "engine_source");
  public get engineSource() {
    return this._engineSource;
  }
  public putEngineSource(value: GoogleCesToolDataStoreToolEngineSource) {
    this._engineSource.internalValue = value;
  }
  public resetEngineSource() {
    this._engineSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineSourceInput() {
    return this._engineSource.internalValue;
  }

  // modality_configs - computed: false, optional: true, required: false
  private _modalityConfigs = new GoogleCesToolDataStoreToolModalityConfigsList(this, "modality_configs", false);
  public get modalityConfigs() {
    return this._modalityConfigs;
  }
  public putModalityConfigs(value: GoogleCesToolDataStoreToolModalityConfigs[] | cdktf.IResolvable) {
    this._modalityConfigs.internalValue = value;
  }
  public resetModalityConfigs() {
    this._modalityConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityConfigsInput() {
    return this._modalityConfigs.internalValue;
  }
}
export interface GoogleCesToolFileSearchTool {
  /**
  * Optional. The type of the corpus. Default is FULLY_MANAGED.
  * Possible values:
  * CORPUS_TYPE_UNSPECIFIED
  * USER_OWNED
  * FULLY_MANAGED Possible values: ["CORPUS_TYPE_UNSPECIFIED", "USER_OWNED", "FULLY_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#corpus_type GoogleCesTool#corpus_type}
  */
  readonly corpusType?: string;
  /**
  * Optional. The tool description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#description GoogleCesTool#description}
  */
  readonly description?: string;
  /**
  * Optional. The corpus where files are stored.
  * Format: projects/{project}/locations/{location}/ragCorpora/{rag_corpus}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#file_corpus GoogleCesTool#file_corpus}
  */
  readonly fileCorpus?: string;
  /**
  * Required. The tool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#name GoogleCesTool#name}
  */
  readonly name: string;
}

export function googleCesToolFileSearchToolToTerraform(struct?: GoogleCesToolFileSearchToolOutputReference | GoogleCesToolFileSearchTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    corpus_type: cdktf.stringToTerraform(struct!.corpusType),
    description: cdktf.stringToTerraform(struct!.description),
    file_corpus: cdktf.stringToTerraform(struct!.fileCorpus),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleCesToolFileSearchToolToHclTerraform(struct?: GoogleCesToolFileSearchToolOutputReference | GoogleCesToolFileSearchTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    corpus_type: {
      value: cdktf.stringToHclTerraform(struct!.corpusType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_corpus: {
      value: cdktf.stringToHclTerraform(struct!.fileCorpus),
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

export class GoogleCesToolFileSearchToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolFileSearchTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corpusType !== undefined) {
      hasAnyValues = true;
      internalValueResult.corpusType = this._corpusType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fileCorpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCorpus = this._fileCorpus;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolFileSearchTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._corpusType = undefined;
      this._description = undefined;
      this._fileCorpus = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._corpusType = value.corpusType;
      this._description = value.description;
      this._fileCorpus = value.fileCorpus;
      this._name = value.name;
    }
  }

  // corpus_type - computed: false, optional: true, required: false
  private _corpusType?: string; 
  public get corpusType() {
    return this.getStringAttribute('corpus_type');
  }
  public set corpusType(value: string) {
    this._corpusType = value;
  }
  public resetCorpusType() {
    this._corpusType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corpusTypeInput() {
    return this._corpusType;
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

  // file_corpus - computed: false, optional: true, required: false
  private _fileCorpus?: string; 
  public get fileCorpus() {
    return this.getStringAttribute('file_corpus');
  }
  public set fileCorpus(value: string) {
    this._fileCorpus = value;
  }
  public resetFileCorpus() {
    this._fileCorpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCorpusInput() {
    return this._fileCorpus;
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
}
export interface GoogleCesToolGoogleSearchToolPromptConfig {
  /**
  * Optional. Defines the prompt used for the system instructions when interacting with the
  * agent in chat conversations. If not set, default prompt will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#text_prompt GoogleCesTool#text_prompt}
  */
  readonly textPrompt?: string;
  /**
  * Optional. Defines the prompt used for the system instructions when interacting with the
  * agent in voice conversations. If not set, default prompt will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#voice_prompt GoogleCesTool#voice_prompt}
  */
  readonly voicePrompt?: string;
}

export function googleCesToolGoogleSearchToolPromptConfigToTerraform(struct?: GoogleCesToolGoogleSearchToolPromptConfigOutputReference | GoogleCesToolGoogleSearchToolPromptConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_prompt: cdktf.stringToTerraform(struct!.textPrompt),
    voice_prompt: cdktf.stringToTerraform(struct!.voicePrompt),
  }
}


export function googleCesToolGoogleSearchToolPromptConfigToHclTerraform(struct?: GoogleCesToolGoogleSearchToolPromptConfigOutputReference | GoogleCesToolGoogleSearchToolPromptConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_prompt: {
      value: cdktf.stringToHclTerraform(struct!.textPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voice_prompt: {
      value: cdktf.stringToHclTerraform(struct!.voicePrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolGoogleSearchToolPromptConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolGoogleSearchToolPromptConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.textPrompt = this._textPrompt;
    }
    if (this._voicePrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.voicePrompt = this._voicePrompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolGoogleSearchToolPromptConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textPrompt = undefined;
      this._voicePrompt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textPrompt = value.textPrompt;
      this._voicePrompt = value.voicePrompt;
    }
  }

  // text_prompt - computed: false, optional: true, required: false
  private _textPrompt?: string; 
  public get textPrompt() {
    return this.getStringAttribute('text_prompt');
  }
  public set textPrompt(value: string) {
    this._textPrompt = value;
  }
  public resetTextPrompt() {
    this._textPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textPromptInput() {
    return this._textPrompt;
  }

  // voice_prompt - computed: false, optional: true, required: false
  private _voicePrompt?: string; 
  public get voicePrompt() {
    return this.getStringAttribute('voice_prompt');
  }
  public set voicePrompt(value: string) {
    this._voicePrompt = value;
  }
  public resetVoicePrompt() {
    this._voicePrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voicePromptInput() {
    return this._voicePrompt;
  }
}
export interface GoogleCesToolGoogleSearchTool {
  /**
  * Content will be fetched directly from these URLs for context and grounding.
  * More details: https://cloud.google.com/vertex-ai/generative-ai/docs/url-context.
  * Example: "https://example.com/path.html". A maximum of 20 URLs are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#context_urls GoogleCesTool#context_urls}
  */
  readonly contextUrls?: string[];
  /**
  * Description of the tool's purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#description GoogleCesTool#description}
  */
  readonly description?: string;
  /**
  * List of domains to be excluded from the search results.
  * Example: "example.com".
  * A maximum of 2000 domains can be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#exclude_domains GoogleCesTool#exclude_domains}
  */
  readonly excludeDomains?: string[];
  /**
  * The name of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#name GoogleCesTool#name}
  */
  readonly name: string;
  /**
  * Specifies domain names to guide the search.
  * The model will be instructed to prioritize these domains
  * when formulating queries for google search.
  * This is a best-effort hint and these domains may or may
  * not be exclusively reflected in the final search results.
  * Example: "example.com", "another.site".
  * A maximum of 20 domains can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#preferred_domains GoogleCesTool#preferred_domains}
  */
  readonly preferredDomains?: string[];
  /**
  * prompt_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#prompt_config GoogleCesTool#prompt_config}
  */
  readonly promptConfig?: GoogleCesToolGoogleSearchToolPromptConfig;
}

export function googleCesToolGoogleSearchToolToTerraform(struct?: GoogleCesToolGoogleSearchToolOutputReference | GoogleCesToolGoogleSearchTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contextUrls),
    description: cdktf.stringToTerraform(struct!.description),
    exclude_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeDomains),
    name: cdktf.stringToTerraform(struct!.name),
    preferred_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredDomains),
    prompt_config: googleCesToolGoogleSearchToolPromptConfigToTerraform(struct!.promptConfig),
  }
}


export function googleCesToolGoogleSearchToolToHclTerraform(struct?: GoogleCesToolGoogleSearchToolOutputReference | GoogleCesToolGoogleSearchTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contextUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prompt_config: {
      value: googleCesToolGoogleSearchToolPromptConfigToHclTerraform(struct!.promptConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolGoogleSearchToolPromptConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolGoogleSearchToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolGoogleSearchTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextUrls = this._contextUrls;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._excludeDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeDomains = this._excludeDomains;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preferredDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDomains = this._preferredDomains;
    }
    if (this._promptConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptConfig = this._promptConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolGoogleSearchTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contextUrls = undefined;
      this._description = undefined;
      this._excludeDomains = undefined;
      this._name = undefined;
      this._preferredDomains = undefined;
      this._promptConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contextUrls = value.contextUrls;
      this._description = value.description;
      this._excludeDomains = value.excludeDomains;
      this._name = value.name;
      this._preferredDomains = value.preferredDomains;
      this._promptConfig.internalValue = value.promptConfig;
    }
  }

  // context_urls - computed: false, optional: true, required: false
  private _contextUrls?: string[]; 
  public get contextUrls() {
    return this.getListAttribute('context_urls');
  }
  public set contextUrls(value: string[]) {
    this._contextUrls = value;
  }
  public resetContextUrls() {
    this._contextUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextUrlsInput() {
    return this._contextUrls;
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

  // exclude_domains - computed: false, optional: true, required: false
  private _excludeDomains?: string[]; 
  public get excludeDomains() {
    return this.getListAttribute('exclude_domains');
  }
  public set excludeDomains(value: string[]) {
    this._excludeDomains = value;
  }
  public resetExcludeDomains() {
    this._excludeDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDomainsInput() {
    return this._excludeDomains;
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

  // preferred_domains - computed: false, optional: true, required: false
  private _preferredDomains?: string[]; 
  public get preferredDomains() {
    return this.getListAttribute('preferred_domains');
  }
  public set preferredDomains(value: string[]) {
    this._preferredDomains = value;
  }
  public resetPreferredDomains() {
    this._preferredDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDomainsInput() {
    return this._preferredDomains;
  }

  // prompt_config - computed: false, optional: true, required: false
  private _promptConfig = new GoogleCesToolGoogleSearchToolPromptConfigOutputReference(this, "prompt_config");
  public get promptConfig() {
    return this._promptConfig;
  }
  public putPromptConfig(value: GoogleCesToolGoogleSearchToolPromptConfig) {
    this._promptConfig.internalValue = value;
  }
  public resetPromptConfig() {
    this._promptConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptConfigInput() {
    return this._promptConfig.internalValue;
  }
}
export interface GoogleCesToolPythonFunctionServiceDirectoryConfig {
  /**
  * The name of Service Directory service.
  * Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#service GoogleCesTool#service}
  */
  readonly service: string;
}

export function googleCesToolPythonFunctionServiceDirectoryConfigToTerraform(struct?: GoogleCesToolPythonFunctionServiceDirectoryConfigOutputReference | GoogleCesToolPythonFunctionServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleCesToolPythonFunctionServiceDirectoryConfigToHclTerraform(struct?: GoogleCesToolPythonFunctionServiceDirectoryConfigOutputReference | GoogleCesToolPythonFunctionServiceDirectoryConfig): any {
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

export class GoogleCesToolPythonFunctionServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolPythonFunctionServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolPythonFunctionServiceDirectoryConfig | undefined) {
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
export interface GoogleCesToolPythonFunction {
  /**
  * The name of the Python function to execute. Must match a Python function
  * name defined in the python code. Case sensitive. If the name is not
  * provided, the first function defined in the python code will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#name GoogleCesTool#name}
  */
  readonly name?: string;
  /**
  * The Python code to execute for the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#python_code GoogleCesTool#python_code}
  */
  readonly pythonCode?: string;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#service_directory_config GoogleCesTool#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleCesToolPythonFunctionServiceDirectoryConfig;
}

export function googleCesToolPythonFunctionToTerraform(struct?: GoogleCesToolPythonFunctionOutputReference | GoogleCesToolPythonFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
    service_directory_config: googleCesToolPythonFunctionServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}


export function googleCesToolPythonFunctionToHclTerraform(struct?: GoogleCesToolPythonFunctionOutputReference | GoogleCesToolPythonFunction): any {
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
    python_code: {
      value: cdktf.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_config: {
      value: googleCesToolPythonFunctionServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolPythonFunctionServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolPythonFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolPythonFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolPythonFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._pythonCode = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._pythonCode = value.pythonCode;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // python_code - computed: false, optional: true, required: false
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  public resetPythonCode() {
    this._pythonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleCesToolPythonFunctionServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleCesToolPythonFunctionServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }
}
export interface GoogleCesToolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#create GoogleCesTool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#delete GoogleCesTool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#update GoogleCesTool#update}
  */
  readonly update?: string;
}

export function googleCesToolTimeoutsToTerraform(struct?: GoogleCesToolTimeouts | cdktf.IResolvable): any {
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


export function googleCesToolTimeoutsToHclTerraform(struct?: GoogleCesToolTimeouts | cdktf.IResolvable): any {
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

export class GoogleCesToolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCesToolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesToolTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleCesToolToolFakeConfigCodeBlock {
  /**
  * Python code which will be invoked in tool fake mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#python_code GoogleCesTool#python_code}
  */
  readonly pythonCode: string;
}

export function googleCesToolToolFakeConfigCodeBlockToTerraform(struct?: GoogleCesToolToolFakeConfigCodeBlockOutputReference | GoogleCesToolToolFakeConfigCodeBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
  }
}


export function googleCesToolToolFakeConfigCodeBlockToHclTerraform(struct?: GoogleCesToolToolFakeConfigCodeBlockOutputReference | GoogleCesToolToolFakeConfigCodeBlock): any {
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

export class GoogleCesToolToolFakeConfigCodeBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolToolFakeConfigCodeBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolToolFakeConfigCodeBlock | undefined) {
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
export interface GoogleCesToolToolFakeConfig {
  /**
  * Whether the tool is using fake mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#enable_fake_mode GoogleCesTool#enable_fake_mode}
  */
  readonly enableFakeMode?: boolean | cdktf.IResolvable;
  /**
  * code_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#code_block GoogleCesTool#code_block}
  */
  readonly codeBlock?: GoogleCesToolToolFakeConfigCodeBlock;
}

export function googleCesToolToolFakeConfigToTerraform(struct?: GoogleCesToolToolFakeConfigOutputReference | GoogleCesToolToolFakeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_fake_mode: cdktf.booleanToTerraform(struct!.enableFakeMode),
    code_block: googleCesToolToolFakeConfigCodeBlockToTerraform(struct!.codeBlock),
  }
}


export function googleCesToolToolFakeConfigToHclTerraform(struct?: GoogleCesToolToolFakeConfigOutputReference | GoogleCesToolToolFakeConfig): any {
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
      value: googleCesToolToolFakeConfigCodeBlockToHclTerraform(struct!.codeBlock),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolToolFakeConfigCodeBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolToolFakeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolToolFakeConfig | undefined {
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

  public set internalValue(value: GoogleCesToolToolFakeConfig | undefined) {
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
  private _codeBlock = new GoogleCesToolToolFakeConfigCodeBlockOutputReference(this, "code_block");
  public get codeBlock() {
    return this._codeBlock;
  }
  public putCodeBlock(value: GoogleCesToolToolFakeConfigCodeBlock) {
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
export interface GoogleCesToolWidgetToolDataMappingPythonFunction {
  /**
  * Optional. The name of the Python function to execute. Must match a Python function
  * name defined in the python code. Case sensitive. If the name is not
  * provided, the first function defined in the python code will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#name GoogleCesTool#name}
  */
  readonly name?: string;
  /**
  * Optional. The Python code to execute for the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#python_code GoogleCesTool#python_code}
  */
  readonly pythonCode?: string;
}

export function googleCesToolWidgetToolDataMappingPythonFunctionToTerraform(struct?: GoogleCesToolWidgetToolDataMappingPythonFunctionOutputReference | GoogleCesToolWidgetToolDataMappingPythonFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    python_code: cdktf.stringToTerraform(struct!.pythonCode),
  }
}


export function googleCesToolWidgetToolDataMappingPythonFunctionToHclTerraform(struct?: GoogleCesToolWidgetToolDataMappingPythonFunctionOutputReference | GoogleCesToolWidgetToolDataMappingPythonFunction): any {
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

export class GoogleCesToolWidgetToolDataMappingPythonFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolWidgetToolDataMappingPythonFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolWidgetToolDataMappingPythonFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._pythonCode = value.pythonCode;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // python_code - computed: false, optional: true, required: false
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  public resetPythonCode() {
    this._pythonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}
export interface GoogleCesToolWidgetToolDataMapping {
  /**
  * Optional. A map of widget input parameter fields to the corresponding output fields of the source tool.
  * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#field_mappings GoogleCesTool#field_mappings}
  */
  readonly fieldMappings?: { [key: string]: string };
  /**
  * Optional. The mode of the data mapping.
  * Possible values:
  * MODE_UNSPECIFIED
  * FIELD_MAPPING
  * PYTHON_SCRIPT Possible values: ["MODE_UNSPECIFIED", "FIELD_MAPPING", "PYTHON_SCRIPT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#mode GoogleCesTool#mode}
  */
  readonly mode?: string;
  /**
  * Optional. The resource name of the tool that provides the data for the widget (e.g., a search tool or a custom function).
  * Format: projects/{project}/locations/{location}/agents/{agent}/tools/{tool}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#source_tool_name GoogleCesTool#source_tool_name}
  */
  readonly sourceToolName?: string;
  /**
  * python_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#python_function GoogleCesTool#python_function}
  */
  readonly pythonFunction?: GoogleCesToolWidgetToolDataMappingPythonFunction;
}

export function googleCesToolWidgetToolDataMappingToTerraform(struct?: GoogleCesToolWidgetToolDataMappingOutputReference | GoogleCesToolWidgetToolDataMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fieldMappings),
    mode: cdktf.stringToTerraform(struct!.mode),
    source_tool_name: cdktf.stringToTerraform(struct!.sourceToolName),
    python_function: googleCesToolWidgetToolDataMappingPythonFunctionToTerraform(struct!.pythonFunction),
  }
}


export function googleCesToolWidgetToolDataMappingToHclTerraform(struct?: GoogleCesToolWidgetToolDataMappingOutputReference | GoogleCesToolWidgetToolDataMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_mappings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fieldMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_tool_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceToolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    python_function: {
      value: googleCesToolWidgetToolDataMappingPythonFunctionToHclTerraform(struct!.pythonFunction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolWidgetToolDataMappingPythonFunctionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolWidgetToolDataMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolWidgetToolDataMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMappings = this._fieldMappings;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sourceToolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceToolName = this._sourceToolName;
    }
    if (this._pythonFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonFunction = this._pythonFunction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolWidgetToolDataMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldMappings = undefined;
      this._mode = undefined;
      this._sourceToolName = undefined;
      this._pythonFunction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldMappings = value.fieldMappings;
      this._mode = value.mode;
      this._sourceToolName = value.sourceToolName;
      this._pythonFunction.internalValue = value.pythonFunction;
    }
  }

  // field_mappings - computed: false, optional: true, required: false
  private _fieldMappings?: { [key: string]: string }; 
  public get fieldMappings() {
    return this.getStringMapAttribute('field_mappings');
  }
  public set fieldMappings(value: { [key: string]: string }) {
    this._fieldMappings = value;
  }
  public resetFieldMappings() {
    this._fieldMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMappingsInput() {
    return this._fieldMappings;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source_tool_name - computed: false, optional: true, required: false
  private _sourceToolName?: string; 
  public get sourceToolName() {
    return this.getStringAttribute('source_tool_name');
  }
  public set sourceToolName(value: string) {
    this._sourceToolName = value;
  }
  public resetSourceToolName() {
    this._sourceToolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceToolNameInput() {
    return this._sourceToolName;
  }

  // python_function - computed: false, optional: true, required: false
  private _pythonFunction = new GoogleCesToolWidgetToolDataMappingPythonFunctionOutputReference(this, "python_function");
  public get pythonFunction() {
    return this._pythonFunction;
  }
  public putPythonFunction(value: GoogleCesToolWidgetToolDataMappingPythonFunction) {
    this._pythonFunction.internalValue = value;
  }
  public resetPythonFunction() {
    this._pythonFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFunctionInput() {
    return this._pythonFunction.internalValue;
  }
}
export interface GoogleCesToolWidgetToolParameters {
  /**
  * Defines the schema for additional properties allowed in an object.
  * The value must be a valid JSON string representing the Schema object.
  * (Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#additional_properties GoogleCesTool#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The instance value should be valid against at least one of the schemas in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#any_of GoogleCesTool#any_of}
  */
  readonly anyOf?: string;
  /**
  * Default value of the data. Represents a dynamically typed value
  * which can be either null, a number, a string, a boolean, a struct,
  * or a list of values. The provided default value must be compatible
  * with the defined 'type' and other schema constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#default GoogleCesTool#default}
  */
  readonly default?: string;
  /**
  * A map of definitions for use by ref. Only allowed at the root of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#defs GoogleCesTool#defs}
  */
  readonly defs?: string;
  /**
  * The description of the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#description GoogleCesTool#description}
  */
  readonly description?: string;
  /**
  * Possible values of the element of primitive type with enum format.
  * Examples:
  * 1. We can define direction as :
  * {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
  * 2. We can define apartment number as :
  * {type:INTEGER, format:enum, enum:["101", "201", "301"]}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#enum GoogleCesTool#enum}
  */
  readonly enum?: string[];
  /**
  * Schema of the elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#items GoogleCesTool#items}
  */
  readonly items?: string;
  /**
  * Maximum number of the elements for Type.ARRAY. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#max_items GoogleCesTool#max_items}
  */
  readonly maxItems?: number;
  /**
  * Maximum value for Type.INTEGER and Type.NUMBER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#maximum GoogleCesTool#maximum}
  */
  readonly maximum?: number;
  /**
  * Minimum number of the elements for Type.ARRAY. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#min_items GoogleCesTool#min_items}
  */
  readonly minItems?: number;
  /**
  * Minimum value for Type.INTEGER and Type.NUMBER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#minimum GoogleCesTool#minimum}
  */
  readonly minimum?: number;
  /**
  * Indicates if the value may be null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#nullable GoogleCesTool#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Schemas of initial elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#prefix_items GoogleCesTool#prefix_items}
  */
  readonly prefixItems?: string;
  /**
  * Properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#properties GoogleCesTool#properties}
  */
  readonly properties?: string;
  /**
  * Allows indirect references between schema nodes. The value should be a
  * valid reference to a child of the root 'defs'.
  * For example, the following schema defines a reference to a schema node
  * named "Pet":
  * type: object
  * properties:
  *   pet:
  *     ref: #/defs/Pet
  * defs:
  *   Pet:
  *     type: object
  *     properties:
  *       name:
  *         type: string
  * The value of the "pet" property is a reference to the schema node
  * named "Pet".
  * See details in
  * https://json-schema.org/understanding-json-schema/structuring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#ref GoogleCesTool#ref}
  */
  readonly ref?: string;
  /**
  * Required properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#required GoogleCesTool#required}
  */
  readonly required?: string[];
  /**
  * The title of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#title GoogleCesTool#title}
  */
  readonly title?: string;
  /**
  * The type of the data.
  * Possible values:
  * STRING
  * INTEGER
  * NUMBER
  * BOOLEAN
  * OBJECT
  * ARRAY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#type GoogleCesTool#type}
  */
  readonly type: string;
  /**
  * Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#unique_items GoogleCesTool#unique_items}
  */
  readonly uniqueItems?: boolean | cdktf.IResolvable;
}

export function googleCesToolWidgetToolParametersToTerraform(struct?: GoogleCesToolWidgetToolParametersOutputReference | GoogleCesToolWidgetToolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    any_of: cdktf.stringToTerraform(struct!.anyOf),
    default: cdktf.stringToTerraform(struct!.default),
    defs: cdktf.stringToTerraform(struct!.defs),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    items: cdktf.stringToTerraform(struct!.items),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    prefix_items: cdktf.stringToTerraform(struct!.prefixItems),
    properties: cdktf.stringToTerraform(struct!.properties),
    ref: cdktf.stringToTerraform(struct!.ref),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unique_items: cdktf.booleanToTerraform(struct!.uniqueItems),
  }
}


export function googleCesToolWidgetToolParametersToHclTerraform(struct?: GoogleCesToolWidgetToolParametersOutputReference | GoogleCesToolWidgetToolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_of: {
      value: cdktf.stringToHclTerraform(struct!.anyOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defs: {
      value: cdktf.stringToHclTerraform(struct!.defs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    items: {
      value: cdktf.stringToHclTerraform(struct!.items),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_items: {
      value: cdktf.stringToHclTerraform(struct!.prefixItems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolWidgetToolParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolWidgetToolParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defs !== undefined) {
      hasAnyValues = true;
      internalValueResult.defs = this._defs;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._prefixItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixItems = this._prefixItems;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolWidgetToolParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._anyOf = undefined;
      this._default = undefined;
      this._defs = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._items = undefined;
      this._maxItems = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minimum = undefined;
      this._nullable = undefined;
      this._prefixItems = undefined;
      this._properties = undefined;
      this._ref = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._anyOf = value.anyOf;
      this._default = value.default;
      this._defs = value.defs;
      this._description = value.description;
      this._enum = value.enum;
      this._items = value.items;
      this._maxItems = value.maxItems;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minimum = value.minimum;
      this._nullable = value.nullable;
      this._prefixItems = value.prefixItems;
      this._properties = value.properties;
      this._ref = value.ref;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // any_of - computed: false, optional: true, required: false
  private _anyOf?: string; 
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }
  public set anyOf(value: string) {
    this._anyOf = value;
  }
  public resetAnyOf() {
    this._anyOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // defs - computed: false, optional: true, required: false
  private _defs?: string; 
  public get defs() {
    return this.getStringAttribute('defs');
  }
  public set defs(value: string) {
    this._defs = value;
  }
  public resetDefs() {
    this._defs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defsInput() {
    return this._defs;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // items - computed: false, optional: true, required: false
  private _items?: string; 
  public get items() {
    return this.getStringAttribute('items');
  }
  public set items(value: string) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // prefix_items - computed: false, optional: true, required: false
  private _prefixItems?: string; 
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }
  public set prefixItems(value: string) {
    this._prefixItems = value;
  }
  public resetPrefixItems() {
    this._prefixItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixItemsInput() {
    return this._prefixItems;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktf.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktf.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }
}
export interface GoogleCesToolWidgetToolTextResponseConfig {
  /**
  * Optional. The static text response to return when type is STATIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#static_text GoogleCesTool#static_text}
  */
  readonly staticText?: string;
  /**
  * Optional. Instruction for the LLM on how to generate the text response. Used as
  * the description for the text response parameter if type is LLM_GENERATED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#text_response_instruction GoogleCesTool#text_response_instruction}
  */
  readonly textResponseInstruction?: string;
  /**
  * Optional. The strategy for providing the text response.
  * Possible values:
  * TYPE_UNSPECIFIED
  * NONE
  * LLM_GENERATED
  * STATIC Possible values: ["TYPE_UNSPECIFIED", "NONE", "LLM_GENERATED", "STATIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#type GoogleCesTool#type}
  */
  readonly type?: string;
}

export function googleCesToolWidgetToolTextResponseConfigToTerraform(struct?: GoogleCesToolWidgetToolTextResponseConfigOutputReference | GoogleCesToolWidgetToolTextResponseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_text: cdktf.stringToTerraform(struct!.staticText),
    text_response_instruction: cdktf.stringToTerraform(struct!.textResponseInstruction),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleCesToolWidgetToolTextResponseConfigToHclTerraform(struct?: GoogleCesToolWidgetToolTextResponseConfigOutputReference | GoogleCesToolWidgetToolTextResponseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_text: {
      value: cdktf.stringToHclTerraform(struct!.staticText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_response_instruction: {
      value: cdktf.stringToHclTerraform(struct!.textResponseInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolWidgetToolTextResponseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolWidgetToolTextResponseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticText !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticText = this._staticText;
    }
    if (this._textResponseInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.textResponseInstruction = this._textResponseInstruction;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolWidgetToolTextResponseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticText = undefined;
      this._textResponseInstruction = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticText = value.staticText;
      this._textResponseInstruction = value.textResponseInstruction;
      this._type = value.type;
    }
  }

  // static_text - computed: false, optional: true, required: false
  private _staticText?: string; 
  public get staticText() {
    return this.getStringAttribute('static_text');
  }
  public set staticText(value: string) {
    this._staticText = value;
  }
  public resetStaticText() {
    this._staticText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticTextInput() {
    return this._staticText;
  }

  // text_response_instruction - computed: false, optional: true, required: false
  private _textResponseInstruction?: string; 
  public get textResponseInstruction() {
    return this.getStringAttribute('text_response_instruction');
  }
  public set textResponseInstruction(value: string) {
    this._textResponseInstruction = value;
  }
  public resetTextResponseInstruction() {
    this._textResponseInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textResponseInstructionInput() {
    return this._textResponseInstruction;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleCesToolWidgetTool {
  /**
  * Optional. The description of the widget tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#description GoogleCesTool#description}
  */
  readonly description?: string;
  /**
  * Required. The display name of the widget tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#name GoogleCesTool#name}
  */
  readonly name: string;
  /**
  * Optional. Configuration for rendering the widget. Represents a JSON object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#ui_config GoogleCesTool#ui_config}
  */
  readonly uiConfig?: string;
  /**
  * Optional. The type of the widget tool. If not specified, the default type will be CUSTOMIZED.
  * Possible values:
  * WIDGET_TYPE_UNSPECIFIED
  * CUSTOM
  * PRODUCT_CAROUSEL
  * PRODUCT_DETAILS
  * QUICK_ACTIONS
  * PRODUCT_COMPARISON
  * ADVANCED_PRODUCT_DETAILS
  * SHORT_FORM
  * OVERALL_SATISFACTION
  * ORDER_SUMMARY
  * APPOINTMENT_DETAILS
  * APPOINTMENT_SCHEDULER
  * CONTACT_FORM Possible values: ["WIDGET_TYPE_UNSPECIFIED", "CUSTOM", "PRODUCT_CAROUSEL", "PRODUCT_DETAILS", "QUICK_ACTIONS", "PRODUCT_COMPARISON", "ADVANCED_PRODUCT_DETAILS", "SHORT_FORM", "OVERALL_SATISFACTION", "ORDER_SUMMARY", "APPOINTMENT_DETAILS", "APPOINTMENT_SCHEDULER", "CONTACT_FORM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#widget_type GoogleCesTool#widget_type}
  */
  readonly widgetType?: string;
  /**
  * data_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#data_mapping GoogleCesTool#data_mapping}
  */
  readonly dataMapping?: GoogleCesToolWidgetToolDataMapping;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#parameters GoogleCesTool#parameters}
  */
  readonly parameters?: GoogleCesToolWidgetToolParameters;
  /**
  * text_response_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#text_response_config GoogleCesTool#text_response_config}
  */
  readonly textResponseConfig?: GoogleCesToolWidgetToolTextResponseConfig;
}

export function googleCesToolWidgetToolToTerraform(struct?: GoogleCesToolWidgetToolOutputReference | GoogleCesToolWidgetTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    ui_config: cdktf.stringToTerraform(struct!.uiConfig),
    widget_type: cdktf.stringToTerraform(struct!.widgetType),
    data_mapping: googleCesToolWidgetToolDataMappingToTerraform(struct!.dataMapping),
    parameters: googleCesToolWidgetToolParametersToTerraform(struct!.parameters),
    text_response_config: googleCesToolWidgetToolTextResponseConfigToTerraform(struct!.textResponseConfig),
  }
}


export function googleCesToolWidgetToolToHclTerraform(struct?: GoogleCesToolWidgetToolOutputReference | GoogleCesToolWidgetTool): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ui_config: {
      value: cdktf.stringToHclTerraform(struct!.uiConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_type: {
      value: cdktf.stringToHclTerraform(struct!.widgetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_mapping: {
      value: googleCesToolWidgetToolDataMappingToHclTerraform(struct!.dataMapping),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolWidgetToolDataMappingList",
    },
    parameters: {
      value: googleCesToolWidgetToolParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolWidgetToolParametersList",
    },
    text_response_config: {
      value: googleCesToolWidgetToolTextResponseConfigToHclTerraform(struct!.textResponseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCesToolWidgetToolTextResponseConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCesToolWidgetToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCesToolWidgetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uiConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiConfig = this._uiConfig;
    }
    if (this._widgetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetType = this._widgetType;
    }
    if (this._dataMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataMapping = this._dataMapping?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._textResponseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textResponseConfig = this._textResponseConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesToolWidgetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._uiConfig = undefined;
      this._widgetType = undefined;
      this._dataMapping.internalValue = undefined;
      this._parameters.internalValue = undefined;
      this._textResponseConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._uiConfig = value.uiConfig;
      this._widgetType = value.widgetType;
      this._dataMapping.internalValue = value.dataMapping;
      this._parameters.internalValue = value.parameters;
      this._textResponseConfig.internalValue = value.textResponseConfig;
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

  // ui_config - computed: false, optional: true, required: false
  private _uiConfig?: string; 
  public get uiConfig() {
    return this.getStringAttribute('ui_config');
  }
  public set uiConfig(value: string) {
    this._uiConfig = value;
  }
  public resetUiConfig() {
    this._uiConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiConfigInput() {
    return this._uiConfig;
  }

  // widget_type - computed: false, optional: true, required: false
  private _widgetType?: string; 
  public get widgetType() {
    return this.getStringAttribute('widget_type');
  }
  public set widgetType(value: string) {
    this._widgetType = value;
  }
  public resetWidgetType() {
    this._widgetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetTypeInput() {
    return this._widgetType;
  }

  // data_mapping - computed: false, optional: true, required: false
  private _dataMapping = new GoogleCesToolWidgetToolDataMappingOutputReference(this, "data_mapping");
  public get dataMapping() {
    return this._dataMapping;
  }
  public putDataMapping(value: GoogleCesToolWidgetToolDataMapping) {
    this._dataMapping.internalValue = value;
  }
  public resetDataMapping() {
    this._dataMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMappingInput() {
    return this._dataMapping.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GoogleCesToolWidgetToolParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoogleCesToolWidgetToolParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // text_response_config - computed: false, optional: true, required: false
  private _textResponseConfig = new GoogleCesToolWidgetToolTextResponseConfigOutputReference(this, "text_response_config");
  public get textResponseConfig() {
    return this._textResponseConfig;
  }
  public putTextResponseConfig(value: GoogleCesToolWidgetToolTextResponseConfig) {
    this._textResponseConfig.internalValue = value;
  }
  public resetTextResponseConfig() {
    this._textResponseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textResponseConfigInput() {
    return this._textResponseConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool google_ces_tool}
*/
export class GoogleCesTool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_tool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleCesTool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCesTool to import
  * @param importFromId The id of the existing GoogleCesTool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCesTool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_tool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_ces_tool google_ces_tool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCesToolConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCesToolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_tool',
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
    this._executionType = config.executionType;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._timeout = config.timeout;
    this._toolId = config.toolId;
    this._agentTool.internalValue = config.agentTool;
    this._clientFunction.internalValue = config.clientFunction;
    this._dataStoreTool.internalValue = config.dataStoreTool;
    this._fileSearchTool.internalValue = config.fileSearchTool;
    this._googleSearchTool.internalValue = config.googleSearchTool;
    this._pythonFunction.internalValue = config.pythonFunction;
    this._timeouts.internalValue = config.timeouts;
    this._toolFakeConfig.internalValue = config.toolFakeConfig;
    this._widgetTool.internalValue = config.widgetTool;
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

  // connector_tool - computed: true, optional: false, required: false
  private _connectorTool = new GoogleCesToolConnectorToolList(this, "connector_tool", false);
  public get connectorTool() {
    return this._connectorTool;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // generated_summary - computed: true, optional: false, required: false
  public get generatedSummary() {
    return this.getStringAttribute('generated_summary');
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

  // mcp_tool - computed: true, optional: false, required: false
  private _mcpTool = new GoogleCesToolMcpToolList(this, "mcp_tool", false);
  public get mcpTool() {
    return this._mcpTool;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_api_tool - computed: true, optional: false, required: false
  private _openApiTool = new GoogleCesToolOpenApiToolList(this, "open_api_tool", false);
  public get openApiTool() {
    return this._openApiTool;
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

  // remote_agent_tool - computed: true, optional: false, required: false
  private _remoteAgentTool = new GoogleCesToolRemoteAgentToolList(this, "remote_agent_tool", false);
  public get remoteAgentTool() {
    return this._remoteAgentTool;
  }

  // system_tool - computed: true, optional: false, required: false
  private _systemTool = new GoogleCesToolSystemToolList(this, "system_tool", false);
  public get systemTool() {
    return this._systemTool;
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

  // tool_id - computed: false, optional: false, required: true
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // agent_tool - computed: false, optional: true, required: false
  private _agentTool = new GoogleCesToolAgentToolOutputReference(this, "agent_tool");
  public get agentTool() {
    return this._agentTool;
  }
  public putAgentTool(value: GoogleCesToolAgentTool) {
    this._agentTool.internalValue = value;
  }
  public resetAgentTool() {
    this._agentTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentToolInput() {
    return this._agentTool.internalValue;
  }

  // client_function - computed: false, optional: true, required: false
  private _clientFunction = new GoogleCesToolClientFunctionOutputReference(this, "client_function");
  public get clientFunction() {
    return this._clientFunction;
  }
  public putClientFunction(value: GoogleCesToolClientFunction) {
    this._clientFunction.internalValue = value;
  }
  public resetClientFunction() {
    this._clientFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFunctionInput() {
    return this._clientFunction.internalValue;
  }

  // data_store_tool - computed: false, optional: true, required: false
  private _dataStoreTool = new GoogleCesToolDataStoreToolOutputReference(this, "data_store_tool");
  public get dataStoreTool() {
    return this._dataStoreTool;
  }
  public putDataStoreTool(value: GoogleCesToolDataStoreTool) {
    this._dataStoreTool.internalValue = value;
  }
  public resetDataStoreTool() {
    this._dataStoreTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreToolInput() {
    return this._dataStoreTool.internalValue;
  }

  // file_search_tool - computed: false, optional: true, required: false
  private _fileSearchTool = new GoogleCesToolFileSearchToolOutputReference(this, "file_search_tool");
  public get fileSearchTool() {
    return this._fileSearchTool;
  }
  public putFileSearchTool(value: GoogleCesToolFileSearchTool) {
    this._fileSearchTool.internalValue = value;
  }
  public resetFileSearchTool() {
    this._fileSearchTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSearchToolInput() {
    return this._fileSearchTool.internalValue;
  }

  // google_search_tool - computed: false, optional: true, required: false
  private _googleSearchTool = new GoogleCesToolGoogleSearchToolOutputReference(this, "google_search_tool");
  public get googleSearchTool() {
    return this._googleSearchTool;
  }
  public putGoogleSearchTool(value: GoogleCesToolGoogleSearchTool) {
    this._googleSearchTool.internalValue = value;
  }
  public resetGoogleSearchTool() {
    this._googleSearchTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleSearchToolInput() {
    return this._googleSearchTool.internalValue;
  }

  // python_function - computed: false, optional: true, required: false
  private _pythonFunction = new GoogleCesToolPythonFunctionOutputReference(this, "python_function");
  public get pythonFunction() {
    return this._pythonFunction;
  }
  public putPythonFunction(value: GoogleCesToolPythonFunction) {
    this._pythonFunction.internalValue = value;
  }
  public resetPythonFunction() {
    this._pythonFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFunctionInput() {
    return this._pythonFunction.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCesToolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCesToolTimeouts) {
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
  private _toolFakeConfig = new GoogleCesToolToolFakeConfigOutputReference(this, "tool_fake_config");
  public get toolFakeConfig() {
    return this._toolFakeConfig;
  }
  public putToolFakeConfig(value: GoogleCesToolToolFakeConfig) {
    this._toolFakeConfig.internalValue = value;
  }
  public resetToolFakeConfig() {
    this._toolFakeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolFakeConfigInput() {
    return this._toolFakeConfig.internalValue;
  }

  // widget_tool - computed: false, optional: true, required: false
  private _widgetTool = new GoogleCesToolWidgetToolOutputReference(this, "widget_tool");
  public get widgetTool() {
    return this._widgetTool;
  }
  public putWidgetTool(value: GoogleCesToolWidgetTool) {
    this._widgetTool.internalValue = value;
  }
  public resetWidgetTool() {
    this._widgetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetToolInput() {
    return this._widgetTool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktf.stringToTerraform(this._app),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      execution_type: cdktf.stringToTerraform(this._executionType),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      timeout: cdktf.stringToTerraform(this._timeout),
      tool_id: cdktf.stringToTerraform(this._toolId),
      agent_tool: googleCesToolAgentToolToTerraform(this._agentTool.internalValue),
      client_function: googleCesToolClientFunctionToTerraform(this._clientFunction.internalValue),
      data_store_tool: googleCesToolDataStoreToolToTerraform(this._dataStoreTool.internalValue),
      file_search_tool: googleCesToolFileSearchToolToTerraform(this._fileSearchTool.internalValue),
      google_search_tool: googleCesToolGoogleSearchToolToTerraform(this._googleSearchTool.internalValue),
      python_function: googleCesToolPythonFunctionToTerraform(this._pythonFunction.internalValue),
      timeouts: googleCesToolTimeoutsToTerraform(this._timeouts.internalValue),
      tool_fake_config: googleCesToolToolFakeConfigToTerraform(this._toolFakeConfig.internalValue),
      widget_tool: googleCesToolWidgetToolToTerraform(this._widgetTool.internalValue),
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
      tool_id: {
        value: cdktf.stringToHclTerraform(this._toolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_tool: {
        value: googleCesToolAgentToolToHclTerraform(this._agentTool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolAgentToolList",
      },
      client_function: {
        value: googleCesToolClientFunctionToHclTerraform(this._clientFunction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolClientFunctionList",
      },
      data_store_tool: {
        value: googleCesToolDataStoreToolToHclTerraform(this._dataStoreTool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolDataStoreToolList",
      },
      file_search_tool: {
        value: googleCesToolFileSearchToolToHclTerraform(this._fileSearchTool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolFileSearchToolList",
      },
      google_search_tool: {
        value: googleCesToolGoogleSearchToolToHclTerraform(this._googleSearchTool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolGoogleSearchToolList",
      },
      python_function: {
        value: googleCesToolPythonFunctionToHclTerraform(this._pythonFunction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolPythonFunctionList",
      },
      timeouts: {
        value: googleCesToolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCesToolTimeouts",
      },
      tool_fake_config: {
        value: googleCesToolToolFakeConfigToHclTerraform(this._toolFakeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolToolFakeConfigList",
      },
      widget_tool: {
        value: googleCesToolWidgetToolToHclTerraform(this._widgetTool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCesToolWidgetToolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
