import * as cdktf from 'cdktf';
import { GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigList,
GoogleCesAppVersionSnapshotToolsClientFunctionList,
GoogleCesAppVersionSnapshotToolsDataStoreToolList,
GoogleCesAppVersionSnapshotToolsGoogleSearchToolList,
GoogleCesAppVersionSnapshotAgentsList,
GoogleCesAppVersionSnapshotAppList,
GoogleCesAppVersionSnapshotExamplesList,
GoogleCesAppVersionSnapshotGuardrailsList } from './structs0'
export interface GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfig {
}

export function googleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfig | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfig {
}

export function googleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfig | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig {
}

export function googleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthentication {
}

export function googleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationToTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_config - computed: true, optional: false, required: false
  private _apiKeyConfig = new GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationApiKeyConfigList(this, "api_key_config", false);
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }

  // oauth_config - computed: true, optional: false, required: false
  private _oauthConfig = new GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOauthConfigList(this, "oauth_config", false);
  public get oauthConfig() {
    return this._oauthConfig;
  }

  // service_account_auth_config - computed: true, optional: false, required: false
  private _serviceAccountAuthConfig = new GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAccountAuthConfigList(this, "service_account_auth_config", false);
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }

  // service_agent_id_token_auth_config - computed: true, optional: false, required: false
  private _serviceAgentIdTokenAuthConfig = new GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList(this, "service_agent_id_token_auth_config", false);
  public get serviceAgentIdTokenAuthConfig() {
    return this._serviceAgentIdTokenAuthConfig;
  }
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOutputReference {
    return new GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfig {
}

export function googleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfig | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCerts {
}

export function googleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsToTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCerts | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsOutputReference {
    return new GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfig {
}

export function googleCesAppVersionSnapshotToolsOpenApiToolTlsConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsOpenApiToolTlsConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  private _caCerts = new GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsOpenApiTool {
}

export function googleCesAppVersionSnapshotToolsOpenApiToolToTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsOpenApiToolToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsOpenApiTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsOpenApiTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsOpenApiTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_authentication - computed: true, optional: false, required: false
  private _apiAuthentication = new GoogleCesAppVersionSnapshotToolsOpenApiToolApiAuthenticationList(this, "api_authentication", false);
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
  private _serviceDirectoryConfig = new GoogleCesAppVersionSnapshotToolsOpenApiToolServiceDirectoryConfigList(this, "service_directory_config", false);
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new GoogleCesAppVersionSnapshotToolsOpenApiToolTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class GoogleCesAppVersionSnapshotToolsOpenApiToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsOpenApiToolOutputReference {
    return new GoogleCesAppVersionSnapshotToolsOpenApiToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsPythonFunction {
}

export function googleCesAppVersionSnapshotToolsPythonFunctionToTerraform(struct?: GoogleCesAppVersionSnapshotToolsPythonFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsPythonFunctionToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsPythonFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsPythonFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsPythonFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsPythonFunction | undefined) {
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

  // python_code - computed: true, optional: false, required: false
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
}

export class GoogleCesAppVersionSnapshotToolsPythonFunctionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsPythonFunctionOutputReference {
    return new GoogleCesAppVersionSnapshotToolsPythonFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsSystemTool {
}

export function googleCesAppVersionSnapshotToolsSystemToolToTerraform(struct?: GoogleCesAppVersionSnapshotToolsSystemTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsSystemToolToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsSystemTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsSystemToolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsSystemTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsSystemTool | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsSystemToolList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsSystemToolOutputReference {
    return new GoogleCesAppVersionSnapshotToolsSystemToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotTools {
}

export function googleCesAppVersionSnapshotToolsToTerraform(struct?: GoogleCesAppVersionSnapshotTools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsToHclTerraform(struct?: GoogleCesAppVersionSnapshotTools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotTools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotTools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_function - computed: true, optional: false, required: false
  private _clientFunction = new GoogleCesAppVersionSnapshotToolsClientFunctionList(this, "client_function", false);
  public get clientFunction() {
    return this._clientFunction;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_tool - computed: true, optional: false, required: false
  private _dataStoreTool = new GoogleCesAppVersionSnapshotToolsDataStoreToolList(this, "data_store_tool", false);
  public get dataStoreTool() {
    return this._dataStoreTool;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // execution_type - computed: true, optional: false, required: false
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }

  // generated_summary - computed: true, optional: false, required: false
  public get generatedSummary() {
    return this.getStringAttribute('generated_summary');
  }

  // google_search_tool - computed: true, optional: false, required: false
  private _googleSearchTool = new GoogleCesAppVersionSnapshotToolsGoogleSearchToolList(this, "google_search_tool", false);
  public get googleSearchTool() {
    return this._googleSearchTool;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_api_tool - computed: true, optional: false, required: false
  private _openApiTool = new GoogleCesAppVersionSnapshotToolsOpenApiToolList(this, "open_api_tool", false);
  public get openApiTool() {
    return this._openApiTool;
  }

  // python_function - computed: true, optional: false, required: false
  private _pythonFunction = new GoogleCesAppVersionSnapshotToolsPythonFunctionList(this, "python_function", false);
  public get pythonFunction() {
    return this._pythonFunction;
  }

  // system_tool - computed: true, optional: false, required: false
  private _systemTool = new GoogleCesAppVersionSnapshotToolsSystemToolList(this, "system_tool", false);
  public get systemTool() {
    return this._systemTool;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleCesAppVersionSnapshotToolsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsOutputReference {
    return new GoogleCesAppVersionSnapshotToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfig {
}

export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfig | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfig {
}

export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfig | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfig {
}

export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfig | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfig {
}

export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfig | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig {
}

export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthentication {
}

export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationToTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_config - computed: true, optional: false, required: false
  private _apiKeyConfig = new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationApiKeyConfigList(this, "api_key_config", false);
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }

  // bearer_token_config - computed: true, optional: false, required: false
  private _bearerTokenConfig = new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationBearerTokenConfigList(this, "bearer_token_config", false);
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }

  // oauth_config - computed: true, optional: false, required: false
  private _oauthConfig = new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOauthConfigList(this, "oauth_config", false);
  public get oauthConfig() {
    return this._oauthConfig;
  }

  // service_account_auth_config - computed: true, optional: false, required: false
  private _serviceAccountAuthConfig = new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAccountAuthConfigList(this, "service_account_auth_config", false);
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }

  // service_agent_id_token_auth_config - computed: true, optional: false, required: false
  private _serviceAgentIdTokenAuthConfig = new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigList(this, "service_agent_id_token_auth_config", false);
  public get serviceAgentIdTokenAuthConfig() {
    return this._serviceAgentIdTokenAuthConfig;
  }
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfig {
}

export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfig | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCerts {
}

export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCertsToTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCertsToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCerts | undefined) {
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

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCertsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCertsOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfig {
}

export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigToTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  private _caCerts = new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsetsOpenApiToolset {
}

export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetToTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsOpenApiToolsetToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsetsOpenApiToolset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsetsOpenApiToolset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsetsOpenApiToolset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_authentication - computed: true, optional: false, required: false
  private _apiAuthentication = new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetApiAuthenticationList(this, "api_authentication", false);
  public get apiAuthentication() {
    return this._apiAuthentication;
  }

  // ignore_unknown_fields - computed: true, optional: false, required: false
  public get ignoreUnknownFields() {
    return this.getBooleanAttribute('ignore_unknown_fields');
  }

  // open_api_schema - computed: true, optional: false, required: false
  public get openApiSchema() {
    return this.getStringAttribute('open_api_schema');
  }

  // service_directory_config - computed: true, optional: false, required: false
  private _serviceDirectoryConfig = new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetServiceDirectoryConfigList(this, "service_directory_config", false);
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshotToolsets {
}

export function googleCesAppVersionSnapshotToolsetsToTerraform(struct?: GoogleCesAppVersionSnapshotToolsets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToolsetsToHclTerraform(struct?: GoogleCesAppVersionSnapshotToolsets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotToolsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshotToolsets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshotToolsets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // execution_type - computed: true, optional: false, required: false
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_api_toolset - computed: true, optional: false, required: false
  private _openApiToolset = new GoogleCesAppVersionSnapshotToolsetsOpenApiToolsetList(this, "open_api_toolset", false);
  public get openApiToolset() {
    return this._openApiToolset;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleCesAppVersionSnapshotToolsetsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotToolsetsOutputReference {
    return new GoogleCesAppVersionSnapshotToolsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionSnapshot {
}

export function googleCesAppVersionSnapshotToTerraform(struct?: GoogleCesAppVersionSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCesAppVersionSnapshotToHclTerraform(struct?: GoogleCesAppVersionSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCesAppVersionSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCesAppVersionSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCesAppVersionSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agents - computed: true, optional: false, required: false
  private _agents = new GoogleCesAppVersionSnapshotAgentsList(this, "agents", false);
  public get agents() {
    return this._agents;
  }

  // app - computed: true, optional: false, required: false
  private _app = new GoogleCesAppVersionSnapshotAppList(this, "app", false);
  public get app() {
    return this._app;
  }

  // examples - computed: true, optional: false, required: false
  private _examples = new GoogleCesAppVersionSnapshotExamplesList(this, "examples", false);
  public get examples() {
    return this._examples;
  }

  // guardrails - computed: true, optional: false, required: false
  private _guardrails = new GoogleCesAppVersionSnapshotGuardrailsList(this, "guardrails", false);
  public get guardrails() {
    return this._guardrails;
  }

  // tools - computed: true, optional: false, required: false
  private _tools = new GoogleCesAppVersionSnapshotToolsList(this, "tools", false);
  public get tools() {
    return this._tools;
  }

  // toolsets - computed: true, optional: false, required: false
  private _toolsets = new GoogleCesAppVersionSnapshotToolsetsList(this, "toolsets", false);
  public get toolsets() {
    return this._toolsets;
  }
}

export class GoogleCesAppVersionSnapshotList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCesAppVersionSnapshotOutputReference {
    return new GoogleCesAppVersionSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCesAppVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_app_version#create GoogleCesAppVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_ces_app_version#delete GoogleCesAppVersion#delete}
  */
  readonly delete?: string;
}

export function googleCesAppVersionTimeoutsToTerraform(struct?: GoogleCesAppVersionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleCesAppVersionTimeoutsToHclTerraform(struct?: GoogleCesAppVersionTimeouts | cdktf.IResolvable): any {
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

export class GoogleCesAppVersionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCesAppVersionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCesAppVersionTimeouts | cdktf.IResolvable | undefined) {
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
