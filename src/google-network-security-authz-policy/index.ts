// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNetworkSecurityAuthzPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * When the action is CUSTOM, customProvider must be specified.
  * When the action is ALLOW, only requests matching the policy will be allowed.
  * When the action is DENY, only requests matching the policy will be denied.
  * 
  * When a request arrives, the policies are evaluated in the following order:
  * 1. If there is a CUSTOM policy that matches the request, the CUSTOM policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request.
  * 2. If there are any DENY policies that match the request, the request is denied.
  * 3. If there are no ALLOW policies for the resource or if any of the ALLOW policies match the request, the request is allowed.
  * 4. Else the request is denied by default if none of the configured AuthzPolicies with ALLOW action match the request. Possible values: ["ALLOW", "DENY", "CUSTOM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#action GoogleNetworkSecurityAuthzPolicy#action}
  */
  readonly action: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#deletion_policy GoogleNetworkSecurityAuthzPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A human-readable description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#description GoogleNetworkSecurityAuthzPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#id GoogleNetworkSecurityAuthzPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of labels associated with the AuthzExtension resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#labels GoogleNetworkSecurityAuthzPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#location GoogleNetworkSecurityAuthzPolicy#location}
  */
  readonly location: string;
  /**
  * Identifier. Name of the AuthzPolicy resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#name GoogleNetworkSecurityAuthzPolicy#name}
  */
  readonly name: string;
  /**
  * Defines the type of authorization being performed. 'REQUEST_AUTHZ' applies to request authorization. CUSTOM
  * authorization policies with Authz extensions will be allowed with ext_authz or ext_proc protocols. Extensions are
  * invoked only once when the request headers arrive. 'CONTENT_AUTHZ' applies to content security, sanitization, etc.
  * Only CUSTOM action is allowed in this policy profile. AuthzExtensions in the custom provider must support ext_proc
  * protocol and be capable of receiving all ext_proc events (REQUEST_HEADERS, REQUEST_BODY, REQUEST_TRAILERS,
  * RESPONSE_HEADERS, RESPONSE_BODY, RESPONSE_TRAILERS) with FULL_DUPLEX_STREAMED body send mode. Possible values: ["REQUEST_AUTHZ", "CONTENT_AUTHZ"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#policy_profile GoogleNetworkSecurityAuthzPolicy#policy_profile}
  */
  readonly policyProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#project GoogleNetworkSecurityAuthzPolicy#project}
  */
  readonly project?: string;
  /**
  * custom_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#custom_provider GoogleNetworkSecurityAuthzPolicy#custom_provider}
  */
  readonly customProvider?: GoogleNetworkSecurityAuthzPolicyCustomProvider;
  /**
  * http_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#http_rules GoogleNetworkSecurityAuthzPolicy#http_rules}
  */
  readonly httpRules?: GoogleNetworkSecurityAuthzPolicyHttpRules[] | cdktf.IResolvable;
  /**
  * network_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#network_rules GoogleNetworkSecurityAuthzPolicy#network_rules}
  */
  readonly networkRules?: GoogleNetworkSecurityAuthzPolicyNetworkRules[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#target GoogleNetworkSecurityAuthzPolicy#target}
  */
  readonly target: GoogleNetworkSecurityAuthzPolicyTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#timeouts GoogleNetworkSecurityAuthzPolicy#timeouts}
  */
  readonly timeouts?: GoogleNetworkSecurityAuthzPolicyTimeouts;
}
export interface GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension {
  /**
  * A list of references to authorization extensions that will be invoked for requests matching this policy. Limited to 1 custom provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}
  */
  readonly resources: string[];
}

export function googleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference | GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function googleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference | GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
    }
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap {
  /**
  * Enable Cloud IAP at the AuthzPolicy level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#enabled GoogleNetworkSecurityAuthzPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyCustomProviderCloudIapToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference | GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleNetworkSecurityAuthzPolicyCustomProviderCloudIapToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference | GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyCustomProvider {
  /**
  * authz_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#authz_extension GoogleNetworkSecurityAuthzPolicy#authz_extension}
  */
  readonly authzExtension?: GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension;
  /**
  * cloud_iap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#cloud_iap GoogleNetworkSecurityAuthzPolicy#cloud_iap}
  */
  readonly cloudIap?: GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap;
}

export function googleNetworkSecurityAuthzPolicyCustomProviderToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference | GoogleNetworkSecurityAuthzPolicyCustomProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authz_extension: googleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionToTerraform(struct!.authzExtension),
    cloud_iap: googleNetworkSecurityAuthzPolicyCustomProviderCloudIapToTerraform(struct!.cloudIap),
  }
}


export function googleNetworkSecurityAuthzPolicyCustomProviderToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference | GoogleNetworkSecurityAuthzPolicyCustomProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authz_extension: {
      value: googleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionToHclTerraform(struct!.authzExtension),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionList",
    },
    cloud_iap: {
      value: googleNetworkSecurityAuthzPolicyCustomProviderCloudIapToHclTerraform(struct!.cloudIap),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyCustomProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authzExtension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzExtension = this._authzExtension?.internalValue;
    }
    if (this._cloudIap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudIap = this._cloudIap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyCustomProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authzExtension.internalValue = undefined;
      this._cloudIap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authzExtension.internalValue = value.authzExtension;
      this._cloudIap.internalValue = value.cloudIap;
    }
  }

  // authz_extension - computed: false, optional: true, required: false
  private _authzExtension = new GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference(this, "authz_extension");
  public get authzExtension() {
    return this._authzExtension;
  }
  public putAuthzExtension(value: GoogleNetworkSecurityAuthzPolicyCustomProviderAuthzExtension) {
    this._authzExtension.internalValue = value;
  }
  public resetAuthzExtension() {
    this._authzExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzExtensionInput() {
    return this._authzExtension.internalValue;
  }

  // cloud_iap - computed: false, optional: true, required: false
  private _cloudIap = new GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference(this, "cloud_iap");
  public get cloudIap() {
    return this._cloudIap;
  }
  public putCloudIap(value: GoogleNetworkSecurityAuthzPolicyCustomProviderCloudIap) {
    this._cloudIap.internalValue = value;
  }
  public resetCloudIap() {
    this._cloudIap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIapInput() {
    return this._cloudIap.internalValue;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks {
  /**
  * The length of the address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#length GoogleNetworkSecurityAuthzPolicy#length}
  */
  readonly length: number;
  /**
  * The address prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
      this._prefix = value.prefix;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * An enum to decide what principal value the principal rule will match against. If not specified, the PrincipalSelector is CLIENT_CERT_URI_SAN. Default value: "CLIENT_CERT_URI_SAN" Possible values: ["PRINCIPAL_SELECTOR_UNSPECIFIED", "CLIENT_CERT_URI_SAN", "CLIENT_CERT_DNS_NAME_SAN", "CLIENT_CERT_COMMON_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principal_selector GoogleNetworkSecurityAuthzPolicy#principal_selector}
  */
  readonly principalSelector?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principal GoogleNetworkSecurityAuthzPolicy#principal}
  */
  readonly principal?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    principal_selector: cdktf.stringToTerraform(struct!.principalSelector),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    principal: googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalToTerraform(struct!.principal),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_selector: {
      value: cdktf.stringToHclTerraform(struct!.principalSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._principalSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalSelector = this._principalSelector;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._principalSelector = undefined;
      this._suffix = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._principalSelector = value.principalSelector;
      this._suffix = value.suffix;
      this._principal.internalValue = value.principal;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // principal_selector - computed: false, optional: true, required: false
  private _principalSelector?: string; 
  public get principalSelector() {
    return this.getStringAttribute('principal_selector');
  }
  public set principalSelector(value: string) {
    this._principalSelector = value;
  }
  public resetPrincipalSelector() {
    this._principalSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalSelectorInput() {
    return this._principalSelector;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet {
  /**
  * A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. The match follows AND semantics which means all the ids must match.
  * Limited to 5 matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ids GoogleNetworkSecurityAuthzPolicy#ids}
  */
  readonly ids?: string[];
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ids = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ids = value.ids;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources {
  /**
  * iam_service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#iam_service_account GoogleNetworkSecurityAuthzPolicy#iam_service_account}
  */
  readonly iamServiceAccount?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount;
  /**
  * tag_value_id_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#tag_value_id_set GoogleNetworkSecurityAuthzPolicy#tag_value_id_set}
  */
  readonly tagValueIdSet?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_service_account: googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToTerraform(struct!.iamServiceAccount),
    tag_value_id_set: googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToTerraform(struct!.tagValueIdSet),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_service_account: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToHclTerraform(struct!.iamServiceAccount),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountList",
    },
    tag_value_id_set: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToHclTerraform(struct!.tagValueIdSet),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamServiceAccount = this._iamServiceAccount?.internalValue;
    }
    if (this._tagValueIdSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueIdSet = this._tagValueIdSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = undefined;
      this._tagValueIdSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = value.iamServiceAccount;
      this._tagValueIdSet.internalValue = value.tagValueIdSet;
    }
  }

  // iam_service_account - computed: false, optional: true, required: false
  private _iamServiceAccount = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference(this, "iam_service_account");
  public get iamServiceAccount() {
    return this._iamServiceAccount;
  }
  public putIamServiceAccount(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount) {
    this._iamServiceAccount.internalValue = value;
  }
  public resetIamServiceAccount() {
    this._iamServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServiceAccountInput() {
    return this._iamServiceAccount.internalValue;
  }

  // tag_value_id_set - computed: false, optional: true, required: false
  private _tagValueIdSet = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference(this, "tag_value_id_set");
  public get tagValueIdSet() {
    return this._tagValueIdSet;
  }
  public putTagValueIdSet(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet) {
    this._tagValueIdSet.internalValue = value;
  }
  public resetTagValueIdSet() {
    this._tagValueIdSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueIdSetInput() {
    return this._tagValueIdSet.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources {
  /**
  * ip_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ip_blocks GoogleNetworkSecurityAuthzPolicy#ip_blocks}
  */
  readonly ipBlocks?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks[] | cdktf.IResolvable;
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principals GoogleNetworkSecurityAuthzPolicy#principals}
  */
  readonly principals?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}
  */
  readonly resources?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blocks: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksToTerraform, true)(struct!.ipBlocks),
    principals: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToTerraform, true)(struct!.principals),
    resources: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToTerraform, true)(struct!.resources),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blocks: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksToHclTerraform, true)(struct!.ipBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksList",
    },
    principals: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToHclTerraform, true)(struct!.principals),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList",
    },
    resources: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks?.internalValue;
    }
    if (this._principals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = undefined;
      this._principals.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = value.ipBlocks;
      this._principals.internalValue = value.principals;
      this._resources.internalValue = value.resources;
    }
  }

  // ip_blocks - computed: false, optional: true, required: false
  private _ipBlocks = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksList(this, "ip_blocks", false);
  public get ipBlocks() {
    return this._ipBlocks;
  }
  public putIpBlocks(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks[] | cdktf.IResolvable) {
    this._ipBlocks.internalValue = value;
  }
  public resetIpBlocks() {
    this._ipBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks.internalValue;
  }

  // principals - computed: false, optional: true, required: false
  private _principals = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals[] | cdktf.IResolvable) {
    this._principals.internalValue = value;
  }
  public resetPrincipals() {
    this._principals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks {
  /**
  * The length of the address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#length GoogleNetworkSecurityAuthzPolicy#length}
  */
  readonly length: number;
  /**
  * The address prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
      this._prefix = value.prefix;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * An enum to decide what principal value the principal rule will match against. If not specified, the PrincipalSelector is CLIENT_CERT_URI_SAN. Default value: "CLIENT_CERT_URI_SAN" Possible values: ["PRINCIPAL_SELECTOR_UNSPECIFIED", "CLIENT_CERT_URI_SAN", "CLIENT_CERT_DNS_NAME_SAN", "CLIENT_CERT_COMMON_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principal_selector GoogleNetworkSecurityAuthzPolicy#principal_selector}
  */
  readonly principalSelector?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principal GoogleNetworkSecurityAuthzPolicy#principal}
  */
  readonly principal?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    principal_selector: cdktf.stringToTerraform(struct!.principalSelector),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    principal: googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalToTerraform(struct!.principal),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_selector: {
      value: cdktf.stringToHclTerraform(struct!.principalSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._principalSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalSelector = this._principalSelector;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._principalSelector = undefined;
      this._suffix = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._principalSelector = value.principalSelector;
      this._suffix = value.suffix;
      this._principal.internalValue = value.principal;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // principal_selector - computed: false, optional: true, required: false
  private _principalSelector?: string; 
  public get principalSelector() {
    return this.getStringAttribute('principal_selector');
  }
  public set principalSelector(value: string) {
    this._principalSelector = value;
  }
  public resetPrincipalSelector() {
    this._principalSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalSelectorInput() {
    return this._principalSelector;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet {
  /**
  * A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. The match follows AND semantics which means all the ids must match.
  * Limited to 5 matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ids GoogleNetworkSecurityAuthzPolicy#ids}
  */
  readonly ids?: string[];
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ids = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ids = value.ids;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources {
  /**
  * iam_service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#iam_service_account GoogleNetworkSecurityAuthzPolicy#iam_service_account}
  */
  readonly iamServiceAccount?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount;
  /**
  * tag_value_id_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#tag_value_id_set GoogleNetworkSecurityAuthzPolicy#tag_value_id_set}
  */
  readonly tagValueIdSet?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_service_account: googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToTerraform(struct!.iamServiceAccount),
    tag_value_id_set: googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToTerraform(struct!.tagValueIdSet),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_service_account: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToHclTerraform(struct!.iamServiceAccount),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountList",
    },
    tag_value_id_set: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToHclTerraform(struct!.tagValueIdSet),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamServiceAccount = this._iamServiceAccount?.internalValue;
    }
    if (this._tagValueIdSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueIdSet = this._tagValueIdSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = undefined;
      this._tagValueIdSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = value.iamServiceAccount;
      this._tagValueIdSet.internalValue = value.tagValueIdSet;
    }
  }

  // iam_service_account - computed: false, optional: true, required: false
  private _iamServiceAccount = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference(this, "iam_service_account");
  public get iamServiceAccount() {
    return this._iamServiceAccount;
  }
  public putIamServiceAccount(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount) {
    this._iamServiceAccount.internalValue = value;
  }
  public resetIamServiceAccount() {
    this._iamServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServiceAccountInput() {
    return this._iamServiceAccount.internalValue;
  }

  // tag_value_id_set - computed: false, optional: true, required: false
  private _tagValueIdSet = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference(this, "tag_value_id_set");
  public get tagValueIdSet() {
    return this._tagValueIdSet;
  }
  public putTagValueIdSet(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet) {
    this._tagValueIdSet.internalValue = value;
  }
  public resetTagValueIdSet() {
    this._tagValueIdSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueIdSetInput() {
    return this._tagValueIdSet.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources {
  /**
  * ip_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ip_blocks GoogleNetworkSecurityAuthzPolicy#ip_blocks}
  */
  readonly ipBlocks?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks[] | cdktf.IResolvable;
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principals GoogleNetworkSecurityAuthzPolicy#principals}
  */
  readonly principals?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}
  */
  readonly resources?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blocks: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksToTerraform, true)(struct!.ipBlocks),
    principals: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToTerraform, true)(struct!.principals),
    resources: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToTerraform, true)(struct!.resources),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blocks: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksToHclTerraform, true)(struct!.ipBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksList",
    },
    principals: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToHclTerraform, true)(struct!.principals),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList",
    },
    resources: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks?.internalValue;
    }
    if (this._principals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = undefined;
      this._principals.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = value.ipBlocks;
      this._principals.internalValue = value.principals;
      this._resources.internalValue = value.resources;
    }
  }

  // ip_blocks - computed: false, optional: true, required: false
  private _ipBlocks = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksList(this, "ip_blocks", false);
  public get ipBlocks() {
    return this._ipBlocks;
  }
  public putIpBlocks(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks[] | cdktf.IResolvable) {
    this._ipBlocks.internalValue = value;
  }
  public resetIpBlocks() {
    this._ipBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks.internalValue;
  }

  // principals - computed: false, optional: true, required: false
  private _principals = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals[] | cdktf.IResolvable) {
    this._principals.internalValue = value;
  }
  public resetPrincipals() {
    this._principals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesFrom {
  /**
  * not_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#not_sources GoogleNetworkSecurityAuthzPolicy#not_sources}
  */
  readonly notSources?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources[] | cdktf.IResolvable;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#sources GoogleNetworkSecurityAuthzPolicy#sources}
  */
  readonly sources?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesFromToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_sources: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesToTerraform, true)(struct!.notSources),
    sources: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesFromToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_sources: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesToHclTerraform, true)(struct!.notSources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList",
    },
    sources: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSources = this._notSources?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notSources.internalValue = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notSources.internalValue = value.notSources;
      this._sources.internalValue = value.sources;
    }
  }

  // not_sources - computed: false, optional: true, required: false
  private _notSources = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList(this, "not_sources", false);
  public get notSources() {
    return this._notSources;
  }
  public putNotSources(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromNotSources[] | cdktf.IResolvable) {
    this._notSources.internalValue = value;
  }
  public resetNotSources() {
    this._notSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSourcesInput() {
    return this._notSources.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFromSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders {
  /**
  * Specifies the name of the header in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#name GoogleNetworkSecurityAuthzPolicy#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#value GoogleNetworkSecurityAuthzPolicy#value}
  */
  readonly value?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToTerraform(struct!.value),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktf.IResolvable): any {
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
      value: googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#headers GoogleNetworkSecurityAuthzPolicy#headers}
  */
  readonly headers?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToTerraform, true)(struct!.headers),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperations {
  /**
  * A list of HTTP methods to match against. Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#methods GoogleNetworkSecurityAuthzPolicy#methods}
  */
  readonly methods?: string[];
  /**
  * header_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#header_set GoogleNetworkSecurityAuthzPolicy#header_set}
  */
  readonly headerSet?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#hosts GoogleNetworkSecurityAuthzPolicy#hosts}
  */
  readonly hosts?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts[] | cdktf.IResolvable;
  /**
  * paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#paths GoogleNetworkSecurityAuthzPolicy#paths}
  */
  readonly paths?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    header_set: googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToTerraform(struct!.headerSet),
    hosts: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToTerraform, true)(struct!.hosts),
    paths: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToTerraform, true)(struct!.paths),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_set: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToHclTerraform(struct!.headerSet),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetList",
    },
    hosts: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList",
    },
    paths: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToHclTerraform, true)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._headerSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSet = this._headerSet?.internalValue;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._headerSet.internalValue = undefined;
      this._hosts.internalValue = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._headerSet.internalValue = value.headerSet;
      this._hosts.internalValue = value.hosts;
      this._paths.internalValue = value.paths;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // header_set - computed: false, optional: true, required: false
  private _headerSet = new GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference(this, "header_set");
  public get headerSet() {
    return this._headerSet;
  }
  public putHeaderSet(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet) {
    this._headerSet.internalValue = value;
  }
  public resetHeaderSet() {
    this._headerSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSetInput() {
    return this._headerSet.internalValue;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders {
  /**
  * Specifies the name of the header in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#name GoogleNetworkSecurityAuthzPolicy#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#value GoogleNetworkSecurityAuthzPolicy#value}
  */
  readonly value?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToTerraform(struct!.value),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktf.IResolvable): any {
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
      value: googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#headers GoogleNetworkSecurityAuthzPolicy#headers}
  */
  readonly headers?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToTerraform, true)(struct!.headers),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams {
  /**
  * A substring match on the MCP method parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * An exact match on the MCP method parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * Specifies that the string match should be case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * A prefix match on the MCP method parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * A suffix match on the MCP method parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods {
  /**
  * The MCP method to match against. Allowed values are as follows:
  * 1) “tools”, “prompts”, “resources” - these will match against all sub methods under the respective methods.
  * 2) “prompts/list”, “tools/list”, “resources/list”, “resources/templates/list”
  * 3) “prompts/get”, “tools/call”, “resources/subscribe”, “resources/unsubscribe”, “resources/read”
  * Params cannot be specified for categories 1) and 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#name GoogleNetworkSecurityAuthzPolicy#name}
  */
  readonly name: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#params GoogleNetworkSecurityAuthzPolicy#params}
  */
  readonly params?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    params: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsToTerraform, true)(struct!.params),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods | cdktf.IResolvable): any {
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
    params: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._params.internalValue = value.params;
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

  // params - computed: false, optional: true, required: false
  private _params = new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsList(this, "params", false);
  public get params() {
    return this._params;
  }
  public putParams(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcp {
  /**
  * If specified, matches on the MCP protocol’s non-access specific methods namely: * initialize/ * completion/ * logging/ * notifications/ * ping Default value: "SKIP_BASE_PROTOCOL_METHODS" Possible values: ["SKIP_BASE_PROTOCOL_METHODS", "MATCH_BASE_PROTOCOL_METHODS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#base_protocol_methods_option GoogleNetworkSecurityAuthzPolicy#base_protocol_methods_option}
  */
  readonly baseProtocolMethodsOption?: string;
  /**
  * methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#methods GoogleNetworkSecurityAuthzPolicy#methods}
  */
  readonly methods?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_protocol_methods_option: cdktf.stringToTerraform(struct!.baseProtocolMethodsOption),
    methods: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsToTerraform, true)(struct!.methods),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_protocol_methods_option: {
      value: cdktf.stringToHclTerraform(struct!.baseProtocolMethodsOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsToHclTerraform, true)(struct!.methods),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseProtocolMethodsOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseProtocolMethodsOption = this._baseProtocolMethodsOption;
    }
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseProtocolMethodsOption = undefined;
      this._methods.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseProtocolMethodsOption = value.baseProtocolMethodsOption;
      this._methods.internalValue = value.methods;
    }
  }

  // base_protocol_methods_option - computed: false, optional: true, required: false
  private _baseProtocolMethodsOption?: string; 
  public get baseProtocolMethodsOption() {
    return this.getStringAttribute('base_protocol_methods_option');
  }
  public set baseProtocolMethodsOption(value: string) {
    this._baseProtocolMethodsOption = value;
  }
  public resetBaseProtocolMethodsOption() {
    this._baseProtocolMethodsOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseProtocolMethodsOptionInput() {
    return this._baseProtocolMethodsOption;
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsList(this, "methods", false);
  public get methods() {
    return this._methods;
  }
  public putMethods(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods[] | cdktf.IResolvable) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#contains GoogleNetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ignore_case GoogleNetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#suffix GoogleNetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations {
  /**
  * A list of HTTP methods to match against. Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#methods GoogleNetworkSecurityAuthzPolicy#methods}
  */
  readonly methods?: string[];
  /**
  * header_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#header_set GoogleNetworkSecurityAuthzPolicy#header_set}
  */
  readonly headerSet?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#hosts GoogleNetworkSecurityAuthzPolicy#hosts}
  */
  readonly hosts?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts[] | cdktf.IResolvable;
  /**
  * mcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#mcp GoogleNetworkSecurityAuthzPolicy#mcp}
  */
  readonly mcp?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcp;
  /**
  * paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#paths GoogleNetworkSecurityAuthzPolicy#paths}
  */
  readonly paths?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    header_set: googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToTerraform(struct!.headerSet),
    hosts: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsToTerraform, true)(struct!.hosts),
    mcp: googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpToTerraform(struct!.mcp),
    paths: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsToTerraform, true)(struct!.paths),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToOperationsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_set: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToHclTerraform(struct!.headerSet),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetList",
    },
    hosts: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList",
    },
    mcp: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpToHclTerraform(struct!.mcp),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpList",
    },
    paths: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsToHclTerraform, true)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._headerSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSet = this._headerSet?.internalValue;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._mcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcp = this._mcp?.internalValue;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._headerSet.internalValue = undefined;
      this._hosts.internalValue = undefined;
      this._mcp.internalValue = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._headerSet.internalValue = value.headerSet;
      this._hosts.internalValue = value.hosts;
      this._mcp.internalValue = value.mcp;
      this._paths.internalValue = value.paths;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // header_set - computed: false, optional: true, required: false
  private _headerSet = new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference(this, "header_set");
  public get headerSet() {
    return this._headerSet;
  }
  public putHeaderSet(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet) {
    this._headerSet.internalValue = value;
  }
  public resetHeaderSet() {
    this._headerSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSetInput() {
    return this._headerSet.internalValue;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // mcp - computed: false, optional: true, required: false
  private _mcp = new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcpOutputReference(this, "mcp");
  public get mcp() {
    return this._mcp;
  }
  public putMcp(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsMcp) {
    this._mcp.internalValue = value;
  }
  public resetMcp() {
    this._mcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpInput() {
    return this._mcp.internalValue;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRulesTo {
  /**
  * not_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#not_operations GoogleNetworkSecurityAuthzPolicy#not_operations}
  */
  readonly notOperations?: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperations[] | cdktf.IResolvable;
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#operations GoogleNetworkSecurityAuthzPolicy#operations}
  */
  readonly operations?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_operations: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsToTerraform, true)(struct!.notOperations),
    operations: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsToTerraform, true)(struct!.operations),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference | GoogleNetworkSecurityAuthzPolicyHttpRulesTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_operations: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsToHclTerraform, true)(struct!.notOperations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRulesTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notOperations = this._notOperations?.internalValue;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRulesTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notOperations.internalValue = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notOperations.internalValue = value.notOperations;
      this._operations.internalValue = value.operations;
    }
  }

  // not_operations - computed: false, optional: true, required: false
  private _notOperations = new GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperationsList(this, "not_operations", false);
  public get notOperations() {
    return this._notOperations;
  }
  public putNotOperations(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToNotOperations[] | cdktf.IResolvable) {
    this._notOperations.internalValue = value;
  }
  public resetNotOperations() {
    this._notOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notOperationsInput() {
    return this._notOperations.internalValue;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleNetworkSecurityAuthzPolicyHttpRulesToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleNetworkSecurityAuthzPolicyHttpRulesToOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyHttpRules {
  /**
  * CEL expression that describes the conditions to be satisfied for the action. The result of the CEL expression is ANDed with the from and to. Refer to the CEL language reference for a list of available attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#when GoogleNetworkSecurityAuthzPolicy#when}
  */
  readonly when?: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#from GoogleNetworkSecurityAuthzPolicy#from}
  */
  readonly from?: GoogleNetworkSecurityAuthzPolicyHttpRulesFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#to GoogleNetworkSecurityAuthzPolicy#to}
  */
  readonly to?: GoogleNetworkSecurityAuthzPolicyHttpRulesTo;
}

export function googleNetworkSecurityAuthzPolicyHttpRulesToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    when: cdktf.stringToTerraform(struct!.when),
    from: googleNetworkSecurityAuthzPolicyHttpRulesFromToTerraform(struct!.from),
    to: googleNetworkSecurityAuthzPolicyHttpRulesToToTerraform(struct!.to),
  }
}


export function googleNetworkSecurityAuthzPolicyHttpRulesToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyHttpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    when: {
      value: cdktf.stringToHclTerraform(struct!.when),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesFromList",
    },
    to: {
      value: googleNetworkSecurityAuthzPolicyHttpRulesToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyHttpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._when !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyHttpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._when = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._when = value.when;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // when - computed: false, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }

  // from - computed: false, optional: true, required: false
  private _from = new GoogleNetworkSecurityAuthzPolicyHttpRulesFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: GoogleNetworkSecurityAuthzPolicyHttpRulesFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new GoogleNetworkSecurityAuthzPolicyHttpRulesToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: GoogleNetworkSecurityAuthzPolicyHttpRulesTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyHttpRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyHttpRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyHttpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocks {
  /**
  * The length of the address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#length GoogleNetworkSecurityAuthzPolicy#length}
  */
  readonly length: number;
  /**
  * The address prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix: string;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocksToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocksToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
      this._prefix = value.prefix;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocksList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocks[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocksOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipal {
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipalToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipalOutputReference | GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipalToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipalOutputReference | GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipals {
  /**
  * An enum to decide what principal value the principal rule will match against. If not specified, the PrincipalSelector is CLIENT_CERT_URI_SAN. Default value: "CLIENT_CERT_URI_SAN" Possible values: ["PRINCIPAL_SELECTOR_UNSPECIFIED", "CLIENT_CERT_URI_SAN", "CLIENT_CERT_DNS_NAME_SAN", "CLIENT_CERT_COMMON_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principal_selector GoogleNetworkSecurityAuthzPolicy#principal_selector}
  */
  readonly principalSelector?: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principal GoogleNetworkSecurityAuthzPolicy#principal}
  */
  readonly principal?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipal;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_selector: cdktf.stringToTerraform(struct!.principalSelector),
    principal: googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipalToTerraform(struct!.principal),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_selector: {
      value: cdktf.stringToHclTerraform(struct!.principalSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalSelector = this._principalSelector;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalSelector = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalSelector = value.principalSelector;
      this._principal.internalValue = value.principal;
    }
  }

  // principal_selector - computed: false, optional: true, required: false
  private _principalSelector?: string; 
  public get principalSelector() {
    return this.getStringAttribute('principal_selector');
  }
  public set principalSelector(value: string) {
    this._principalSelector = value;
  }
  public resetPrincipalSelector() {
    this._principalSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalSelectorInput() {
    return this._principalSelector;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipals[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSources {
  /**
  * ip_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ip_blocks GoogleNetworkSecurityAuthzPolicy#ip_blocks}
  */
  readonly ipBlocks?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocks[] | cdktf.IResolvable;
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principals GoogleNetworkSecurityAuthzPolicy#principals}
  */
  readonly principals?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipals[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blocks: cdktf.listMapper(googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocksToTerraform, true)(struct!.ipBlocks),
    principals: cdktf.listMapper(googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsToTerraform, true)(struct!.principals),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blocks: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocksToHclTerraform, true)(struct!.ipBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocksList",
    },
    principals: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsToHclTerraform, true)(struct!.principals),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks?.internalValue;
    }
    if (this._principals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = undefined;
      this._principals.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = value.ipBlocks;
      this._principals.internalValue = value.principals;
    }
  }

  // ip_blocks - computed: false, optional: true, required: false
  private _ipBlocks = new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocksList(this, "ip_blocks", false);
  public get ipBlocks() {
    return this._ipBlocks;
  }
  public putIpBlocks(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesIpBlocks[] | cdktf.IResolvable) {
    this._ipBlocks.internalValue = value;
  }
  public resetIpBlocks() {
    this._ipBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks.internalValue;
  }

  // principals - computed: false, optional: true, required: false
  private _principals = new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesPrincipals[] | cdktf.IResolvable) {
    this._principals.internalValue = value;
  }
  public resetPrincipals() {
    this._principals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocks {
  /**
  * The length of the address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#length GoogleNetworkSecurityAuthzPolicy#length}
  */
  readonly length: number;
  /**
  * The address prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#prefix GoogleNetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix: string;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocksToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocksToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
      this._prefix = value.prefix;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocksList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocks[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocksOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipal {
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipalToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipalOutputReference | GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipalToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipalOutputReference | GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipals {
  /**
  * An enum to decide what principal value the principal rule will match against. If not specified, the PrincipalSelector is CLIENT_CERT_URI_SAN. Default value: "CLIENT_CERT_URI_SAN" Possible values: ["PRINCIPAL_SELECTOR_UNSPECIFIED", "CLIENT_CERT_URI_SAN", "CLIENT_CERT_DNS_NAME_SAN", "CLIENT_CERT_COMMON_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principal_selector GoogleNetworkSecurityAuthzPolicy#principal_selector}
  */
  readonly principalSelector?: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principal GoogleNetworkSecurityAuthzPolicy#principal}
  */
  readonly principal?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipal;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_selector: cdktf.stringToTerraform(struct!.principalSelector),
    principal: googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipalToTerraform(struct!.principal),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_selector: {
      value: cdktf.stringToHclTerraform(struct!.principalSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalSelector = this._principalSelector;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalSelector = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalSelector = value.principalSelector;
      this._principal.internalValue = value.principal;
    }
  }

  // principal_selector - computed: false, optional: true, required: false
  private _principalSelector?: string; 
  public get principalSelector() {
    return this.getStringAttribute('principal_selector');
  }
  public set principalSelector(value: string) {
    this._principalSelector = value;
  }
  public resetPrincipalSelector() {
    this._principalSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalSelectorInput() {
    return this._principalSelector;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipals[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSources {
  /**
  * ip_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#ip_blocks GoogleNetworkSecurityAuthzPolicy#ip_blocks}
  */
  readonly ipBlocks?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocks[] | cdktf.IResolvable;
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#principals GoogleNetworkSecurityAuthzPolicy#principals}
  */
  readonly principals?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipals[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blocks: cdktf.listMapper(googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocksToTerraform, true)(struct!.ipBlocks),
    principals: cdktf.listMapper(googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsToTerraform, true)(struct!.principals),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blocks: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocksToHclTerraform, true)(struct!.ipBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocksList",
    },
    principals: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsToHclTerraform, true)(struct!.principals),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks?.internalValue;
    }
    if (this._principals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = undefined;
      this._principals.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = value.ipBlocks;
      this._principals.internalValue = value.principals;
    }
  }

  // ip_blocks - computed: false, optional: true, required: false
  private _ipBlocks = new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocksList(this, "ip_blocks", false);
  public get ipBlocks() {
    return this._ipBlocks;
  }
  public putIpBlocks(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesIpBlocks[] | cdktf.IResolvable) {
    this._ipBlocks.internalValue = value;
  }
  public resetIpBlocks() {
    this._ipBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks.internalValue;
  }

  // principals - computed: false, optional: true, required: false
  private _principals = new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesPrincipals[] | cdktf.IResolvable) {
    this._principals.internalValue = value;
  }
  public resetPrincipals() {
    this._principals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesFrom {
  /**
  * not_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#not_sources GoogleNetworkSecurityAuthzPolicy#not_sources}
  */
  readonly notSources?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSources[] | cdktf.IResolvable;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#sources GoogleNetworkSecurityAuthzPolicy#sources}
  */
  readonly sources?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSources[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesFromToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromOutputReference | GoogleNetworkSecurityAuthzPolicyNetworkRulesFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_sources: cdktf.listMapper(googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesToTerraform, true)(struct!.notSources),
    sources: cdktf.listMapper(googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesFromToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromOutputReference | GoogleNetworkSecurityAuthzPolicyNetworkRulesFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_sources: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesToHclTerraform, true)(struct!.notSources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesList",
    },
    sources: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSources = this._notSources?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notSources.internalValue = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notSources.internalValue = value.notSources;
      this._sources.internalValue = value.sources;
    }
  }

  // not_sources - computed: false, optional: true, required: false
  private _notSources = new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSourcesList(this, "not_sources", false);
  public get notSources() {
    return this._notSources;
  }
  public putNotSources(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromNotSources[] | cdktf.IResolvable) {
    this._notSources.internalValue = value;
  }
  public resetNotSources() {
    this._notSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSourcesInput() {
    return this._notSources.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFromSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#exact GoogleNetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnisToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnisToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnisList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnis[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnisOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperations {
  /**
  * snis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#snis GoogleNetworkSecurityAuthzPolicy#snis}
  */
  readonly snis?: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnis[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesToOperationsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snis: cdktf.listMapper(googleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnisToTerraform, true)(struct!.snis),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesToOperationsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snis: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnisToHclTerraform, true)(struct!.snis),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snis = this._snis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snis.internalValue = value.snis;
    }
  }

  // snis - computed: false, optional: true, required: false
  private _snis = new GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnisList(this, "snis", false);
  public get snis() {
    return this._snis;
  }
  public putSnis(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsSnis[] | cdktf.IResolvable) {
    this._snis.internalValue = value;
  }
  public resetSnis() {
    this._snis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snisInput() {
    return this._snis.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRulesTo {
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#operations GoogleNetworkSecurityAuthzPolicy#operations}
  */
  readonly operations?: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperations[] | cdktf.IResolvable;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesToToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOutputReference | GoogleNetworkSecurityAuthzPolicyNetworkRulesTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operations: cdktf.listMapper(googleNetworkSecurityAuthzPolicyNetworkRulesToOperationsToTerraform, true)(struct!.operations),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesToToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOutputReference | GoogleNetworkSecurityAuthzPolicyNetworkRulesTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operations: {
      value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyNetworkRulesToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRulesTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operations.internalValue = value.operations;
    }
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesToOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyNetworkRules {
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#from GoogleNetworkSecurityAuthzPolicy#from}
  */
  readonly from?: GoogleNetworkSecurityAuthzPolicyNetworkRulesFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#to GoogleNetworkSecurityAuthzPolicy#to}
  */
  readonly to?: GoogleNetworkSecurityAuthzPolicyNetworkRulesTo;
}

export function googleNetworkSecurityAuthzPolicyNetworkRulesToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: googleNetworkSecurityAuthzPolicyNetworkRulesFromToTerraform(struct!.from),
    to: googleNetworkSecurityAuthzPolicyNetworkRulesToToTerraform(struct!.to),
  }
}


export function googleNetworkSecurityAuthzPolicyNetworkRulesToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: googleNetworkSecurityAuthzPolicyNetworkRulesFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesFromList",
    },
    to: {
      value: googleNetworkSecurityAuthzPolicyNetworkRulesToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyNetworkRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyNetworkRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new GoogleNetworkSecurityAuthzPolicyNetworkRulesFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new GoogleNetworkSecurityAuthzPolicyNetworkRulesToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: GoogleNetworkSecurityAuthzPolicyNetworkRulesTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class GoogleNetworkSecurityAuthzPolicyNetworkRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityAuthzPolicyNetworkRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityAuthzPolicyNetworkRulesOutputReference {
    return new GoogleNetworkSecurityAuthzPolicyNetworkRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityAuthzPolicyTarget {
  /**
  * Required when targeting forwarding rules and secure web proxy. Must not be specified when targeting Agent
  * Gateway. All resources referenced by this policy and extensions must share the same load balancing scheme.
  * For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#load_balancing_scheme GoogleNetworkSecurityAuthzPolicy#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * A list of references to the Forwarding Rules or Secure Web Proxy Gateways or Agent Gateways on which this
  * policy will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#resources GoogleNetworkSecurityAuthzPolicy#resources}
  */
  readonly resources?: string[];
}

export function googleNetworkSecurityAuthzPolicyTargetToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyTargetOutputReference | GoogleNetworkSecurityAuthzPolicyTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancing_scheme: cdktf.stringToTerraform(struct!.loadBalancingScheme),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function googleNetworkSecurityAuthzPolicyTargetToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyTargetOutputReference | GoogleNetworkSecurityAuthzPolicyTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancing_scheme: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityAuthzPolicyTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancingScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingScheme = this._loadBalancingScheme;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadBalancingScheme = undefined;
      this._resources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadBalancingScheme = value.loadBalancingScheme;
      this._resources = value.resources;
    }
  }

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string; 
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string) {
    this._loadBalancingScheme = value;
  }
  public resetLoadBalancingScheme() {
    this._loadBalancingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface GoogleNetworkSecurityAuthzPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#create GoogleNetworkSecurityAuthzPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#delete GoogleNetworkSecurityAuthzPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#update GoogleNetworkSecurityAuthzPolicy#update}
  */
  readonly update?: string;
}

export function googleNetworkSecurityAuthzPolicyTimeoutsToTerraform(struct?: GoogleNetworkSecurityAuthzPolicyTimeouts | cdktf.IResolvable): any {
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


export function googleNetworkSecurityAuthzPolicyTimeoutsToHclTerraform(struct?: GoogleNetworkSecurityAuthzPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkSecurityAuthzPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkSecurityAuthzPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy google_network_security_authz_policy}
*/
export class GoogleNetworkSecurityAuthzPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_authz_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleNetworkSecurityAuthzPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkSecurityAuthzPolicy to import
  * @param importFromId The id of the existing GoogleNetworkSecurityAuthzPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkSecurityAuthzPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_authz_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_authz_policy google_network_security_authz_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkSecurityAuthzPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkSecurityAuthzPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_authz_policy',
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
    this._action = config.action;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._policyProfile = config.policyProfile;
    this._project = config.project;
    this._customProvider.internalValue = config.customProvider;
    this._httpRules.internalValue = config.httpRules;
    this._networkRules.internalValue = config.networkRules;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // policy_profile - computed: true, optional: true, required: false
  private _policyProfile?: string; 
  public get policyProfile() {
    return this.getStringAttribute('policy_profile');
  }
  public set policyProfile(value: string) {
    this._policyProfile = value;
  }
  public resetPolicyProfile() {
    this._policyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyProfileInput() {
    return this._policyProfile;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_provider - computed: false, optional: true, required: false
  private _customProvider = new GoogleNetworkSecurityAuthzPolicyCustomProviderOutputReference(this, "custom_provider");
  public get customProvider() {
    return this._customProvider;
  }
  public putCustomProvider(value: GoogleNetworkSecurityAuthzPolicyCustomProvider) {
    this._customProvider.internalValue = value;
  }
  public resetCustomProvider() {
    this._customProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProviderInput() {
    return this._customProvider.internalValue;
  }

  // http_rules - computed: false, optional: true, required: false
  private _httpRules = new GoogleNetworkSecurityAuthzPolicyHttpRulesList(this, "http_rules", false);
  public get httpRules() {
    return this._httpRules;
  }
  public putHttpRules(value: GoogleNetworkSecurityAuthzPolicyHttpRules[] | cdktf.IResolvable) {
    this._httpRules.internalValue = value;
  }
  public resetHttpRules() {
    this._httpRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRulesInput() {
    return this._httpRules.internalValue;
  }

  // network_rules - computed: false, optional: true, required: false
  private _networkRules = new GoogleNetworkSecurityAuthzPolicyNetworkRulesList(this, "network_rules", false);
  public get networkRules() {
    return this._networkRules;
  }
  public putNetworkRules(value: GoogleNetworkSecurityAuthzPolicyNetworkRules[] | cdktf.IResolvable) {
    this._networkRules.internalValue = value;
  }
  public resetNetworkRules() {
    this._networkRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRulesInput() {
    return this._networkRules.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new GoogleNetworkSecurityAuthzPolicyTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: GoogleNetworkSecurityAuthzPolicyTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkSecurityAuthzPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkSecurityAuthzPolicyTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      policy_profile: cdktf.stringToTerraform(this._policyProfile),
      project: cdktf.stringToTerraform(this._project),
      custom_provider: googleNetworkSecurityAuthzPolicyCustomProviderToTerraform(this._customProvider.internalValue),
      http_rules: cdktf.listMapper(googleNetworkSecurityAuthzPolicyHttpRulesToTerraform, true)(this._httpRules.internalValue),
      network_rules: cdktf.listMapper(googleNetworkSecurityAuthzPolicyNetworkRulesToTerraform, true)(this._networkRules.internalValue),
      target: googleNetworkSecurityAuthzPolicyTargetToTerraform(this._target.internalValue),
      timeouts: googleNetworkSecurityAuthzPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_profile: {
        value: cdktf.stringToHclTerraform(this._policyProfile),
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
      custom_provider: {
        value: googleNetworkSecurityAuthzPolicyCustomProviderToHclTerraform(this._customProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecurityAuthzPolicyCustomProviderList",
      },
      http_rules: {
        value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyHttpRulesToHclTerraform, true)(this._httpRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecurityAuthzPolicyHttpRulesList",
      },
      network_rules: {
        value: cdktf.listMapperHcl(googleNetworkSecurityAuthzPolicyNetworkRulesToHclTerraform, true)(this._networkRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecurityAuthzPolicyNetworkRulesList",
      },
      target: {
        value: googleNetworkSecurityAuthzPolicyTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecurityAuthzPolicyTargetList",
      },
      timeouts: {
        value: googleNetworkSecurityAuthzPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkSecurityAuthzPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
