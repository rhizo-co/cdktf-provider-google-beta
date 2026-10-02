// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAccessContextManagerServicePerimetersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#deletion_policy GoogleAccessContextManagerServicePerimeters#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#id GoogleAccessContextManagerServicePerimeters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The AccessPolicy this ServicePerimeter lives in.
  * Format: accessPolicies/{policy_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#parent GoogleAccessContextManagerServicePerimeters#parent}
  */
  readonly parent: string;
  /**
  * service_perimeters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#service_perimeters GoogleAccessContextManagerServicePerimeters#service_perimeters}
  */
  readonly servicePerimeters?: GoogleAccessContextManagerServicePerimetersServicePerimeters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#timeouts GoogleAccessContextManagerServicePerimeters#timeouts}
  */
  readonly timeouts?: GoogleAccessContextManagerServicePerimetersTimeouts;
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpoint {
  /**
  * The full resource name of the global forwarding rule that identifies a Private Service Connect endpoint.
  * Forwarding rule format: '//compute.googleapis.com/projects/{PROJECT_ID}/global/forwardingRules/{FORWARDING_RULE_ID}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#forwarding_rule GoogleAccessContextManagerServicePerimeters#forwarding_rule}
  */
  readonly forwardingRule?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpointToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpointOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_rule: cdktf.stringToTerraform(struct!.forwardingRule),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpointToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpointOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarding_rule: {
      value: cdktf.stringToHclTerraform(struct!.forwardingRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardingRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingRule = this._forwardingRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardingRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardingRule = value.forwardingRule;
    }
  }

  // forwarding_rule - computed: false, optional: true, required: false
  private _forwardingRule?: string; 
  public get forwardingRule() {
    return this.getStringAttribute('forwarding_rule');
  }
  public set forwardingRule(value: string) {
    this._forwardingRule = value;
  }
  public resetForwardingRule() {
    this._forwardingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleInput() {
    return this._forwardingRule;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSources {
  /**
  * An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#access_level GoogleAccessContextManagerServicePerimeters#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to egress the perimeter.
  * Requests from these resources are allowed to access data outside the perimeter.
  * Currently only projects are allowed. Project format: 'projects/{project_number}'.
  * The resource may be in any Google Cloud organization, not just the
  * organization that the perimeter is defined in. '*' is not allowed, the
  * case of allowing all Google Cloud resources only is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#resource GoogleAccessContextManagerServicePerimeters#resource}
  */
  readonly resource?: string;
  /**
  * psc_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#psc_endpoint GoogleAccessContextManagerServicePerimeters#psc_endpoint}
  */
  readonly pscEndpoint?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpoint;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
    psc_endpoint: googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpointToTerraform(struct!.pscEndpoint),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psc_endpoint: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpointToHclTerraform(struct!.pscEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._pscEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscEndpoint = this._pscEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._resource = undefined;
      this._pscEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._resource = value.resource;
      this._pscEndpoint.internalValue = value.pscEndpoint;
    }
  }

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // psc_endpoint - computed: false, optional: true, required: false
  private _pscEndpoint = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpointOutputReference(this, "psc_endpoint");
  public get pscEndpoint() {
    return this._pscEndpoint;
  }
  public putPscEndpoint(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesPscEndpoint) {
    this._pscEndpoint.internalValue = value;
  }
  public resetPscEndpoint() {
    this._pscEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscEndpointInput() {
    return this._pscEndpoint.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom {
  /**
  * Identities can be an individual user, service account, Google group,
  * or third-party identity. For third-party identity, only single identities
  * are supported and other identity types are not supported.The v1 identities
  * that have the prefix user, group and serviceAccount in
  * https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#identities GoogleAccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the
  * perimeter. If left unspecified, then members of 'identities' field will
  * be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#identity_type GoogleAccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
  /**
  * Whether to enforce traffic restrictions based on 'sources' field. If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_UNSPECIFIED", "SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#source_restriction GoogleAccessContextManagerServicePerimeters#source_restriction}
  */
  readonly sourceRestriction?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#sources GoogleAccessContextManagerServicePerimeters#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    source_restriction: cdktf.stringToTerraform(struct!.sourceRestriction),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_restriction: {
      value: cdktf.stringToHclTerraform(struct!.sourceRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._sourceRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRestriction = this._sourceRestriction;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sourceRestriction = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sourceRestriction = value.sourceRestriction;
      this._sources.internalValue = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return cdktf.Fn.tolist(this.getListAttribute('identities'));
  }
  public set identities(value: string[]) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities;
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

  // source_restriction - computed: false, optional: true, required: false
  private _sourceRestriction?: string; 
  public get sourceRestriction() {
    return this.getStringAttribute('source_restriction');
  }
  public set sourceRestriction(value: string) {
    this._sourceRestriction = value;
  }
  public resetSourceRestriction() {
    this._sourceRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRestrictionInput() {
    return this._sourceRestriction;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromSources[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding
  * 'serviceName' in 'ApiOperation'. If '*' used as value for method,
  * then ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#method GoogleAccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#permission GoogleAccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._permission = value.permission;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#service_name GoogleAccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#method_selectors GoogleAccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_selectors: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._methodSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSelectors = this._methodSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._methodSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._methodSelectors.internalValue = value.methodSelectors;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // method_selectors - computed: false, optional: true, required: false
  private _methodSelectors = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable) {
    this._methodSelectors.internalValue = value;
  }
  public resetMethodSelectors() {
    this._methodSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSelectorsInput() {
    return this._methodSelectors.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo {
  /**
  * A list of external resources that are allowed to be accessed. A request
  * matches if it contains an external resource in this list (Example:
  * s3://bucket/path). Currently '*' is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#external_resources GoogleAccessContextManagerServicePerimeters#external_resources}
  */
  readonly externalResources?: string[];
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', that match this to stanza. A request matches
  * if it contains a resource in this list. If * is specified for resources,
  * then this 'EgressTo' rule will authorize access to all resources outside
  * the perimeter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * A list of IAM roles that represent the set of operations that the sources
  * specified in the corresponding 'EgressFrom'
  * are allowed to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#roles GoogleAccessContextManagerServicePerimeters#roles}
  */
  readonly roles?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#operations GoogleAccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalResources),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalResources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalResources = this._externalResources;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalResources = undefined;
      this._resources = undefined;
      this._roles = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalResources = value.externalResources;
      this._resources = value.resources;
      this._roles = value.roles;
      this._operations.internalValue = value.operations;
    }
  }

  // external_resources - computed: false, optional: true, required: false
  private _externalResources?: string[]; 
  public get externalResources() {
    return cdktf.Fn.tolist(this.getListAttribute('external_resources'));
  }
  public set externalResources(value: string[]) {
    this._externalResources = value;
  }
  public resetExternalResources() {
    this._externalResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalResourcesInput() {
    return this._externalResources;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
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

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies {
  /**
  * Human readable title. Must be unique within the perimeter. Does not affect behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#title GoogleAccessContextManagerServicePerimeters#title}
  */
  readonly title?: string;
  /**
  * egress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#egress_from GoogleAccessContextManagerServicePerimeters#egress_from}
  */
  readonly egressFrom?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom;
  /**
  * egress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#egress_to GoogleAccessContextManagerServicePerimeters#egress_to}
  */
  readonly egressTo?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.stringToTerraform(struct!.title),
    egress_from: googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToTerraform(struct!.egressTo),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_from: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToHclTerraform(struct!.egressFrom),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromList",
    },
    egress_to: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToHclTerraform(struct!.egressTo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._egressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressFrom = this._egressFrom?.internalValue;
    }
    if (this._egressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressTo = this._egressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._title = undefined;
      this._egressFrom.internalValue = undefined;
      this._egressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._title = value.title;
      this._egressFrom.internalValue = value.egressFrom;
      this._egressTo.internalValue = value.egressTo;
    }
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

  // egress_from - computed: false, optional: true, required: false
  private _egressFrom = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference(this, "egress_from");
  public get egressFrom() {
    return this._egressFrom;
  }
  public putEgressFrom(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom) {
    this._egressFrom.internalValue = value;
  }
  public resetEgressFrom() {
    this._egressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressFromInput() {
    return this._egressFrom.internalValue;
  }

  // egress_to - computed: false, optional: true, required: false
  private _egressTo = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference(this, "egress_to");
  public get egressTo() {
    return this._egressTo;
  }
  public putEgressTo(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo) {
    this._egressTo.internalValue = value;
  }
  public resetEgressTo() {
    this._egressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressToInput() {
    return this._egressTo.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpoint {
  /**
  * The full resource name of the global forwarding rule that identifies a Private Service Connect endpoint.
  * Forwarding rule format: '//compute.googleapis.com/projects/{PROJECT_ID}/global/forwardingRules/{FORWARDING_RULE_ID}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#forwarding_rule GoogleAccessContextManagerServicePerimeters#forwarding_rule}
  */
  readonly forwardingRule?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpointToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpointOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_rule: cdktf.stringToTerraform(struct!.forwardingRule),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpointToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpointOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarding_rule: {
      value: cdktf.stringToHclTerraform(struct!.forwardingRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardingRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingRule = this._forwardingRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardingRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardingRule = value.forwardingRule;
    }
  }

  // forwarding_rule - computed: false, optional: true, required: false
  private _forwardingRule?: string; 
  public get forwardingRule() {
    return this.getStringAttribute('forwarding_rule');
  }
  public set forwardingRule(value: string) {
    this._forwardingRule = value;
  }
  public resetForwardingRule() {
    this._forwardingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleInput() {
    return this._forwardingRule;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources {
  /**
  * An 'AccessLevel' resource name that allow resources within the
  * 'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed
  * must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
  * 'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
  * resources within the perimeter can only be accessed via Google Cloud calls
  * with request origins within the perimeter.
  * Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
  * If * is specified, then all IngressSources will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#access_level GoogleAccessContextManagerServicePerimeters#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to ingress the perimeter.
  * Requests from these resources will be allowed to access perimeter data.
  * Currently only projects are allowed. Format 'projects/{project_number}'
  * The project may be in any Google Cloud organization, not just the
  * organization that the perimeter is defined in. '*' is not allowed, the case
  * of allowing all Google Cloud resources only is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#resource GoogleAccessContextManagerServicePerimeters#resource}
  */
  readonly resource?: string;
  /**
  * psc_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#psc_endpoint GoogleAccessContextManagerServicePerimeters#psc_endpoint}
  */
  readonly pscEndpoint?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpoint;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
    psc_endpoint: googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpointToTerraform(struct!.pscEndpoint),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psc_endpoint: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpointToHclTerraform(struct!.pscEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._pscEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscEndpoint = this._pscEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._resource = undefined;
      this._pscEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._resource = value.resource;
      this._pscEndpoint.internalValue = value.pscEndpoint;
    }
  }

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // psc_endpoint - computed: false, optional: true, required: false
  private _pscEndpoint = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpointOutputReference(this, "psc_endpoint");
  public get pscEndpoint() {
    return this._pscEndpoint;
  }
  public putPscEndpoint(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesPscEndpoint) {
    this._pscEndpoint.internalValue = value;
  }
  public resetPscEndpoint() {
    this._pscEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscEndpointInput() {
    return this._pscEndpoint.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
  * Should be in the format of email address. The email address should represent
  * individual user or service account only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#identities GoogleAccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the
  * perimeter. If left unspecified, then members of 'identities' field will be
  * allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#identity_type GoogleAccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#sources GoogleAccessContextManagerServicePerimeters#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sources.internalValue = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return cdktf.Fn.tolist(this.getListAttribute('identities'));
  }
  public set identities(value: string[]) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities;
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

  // sources - computed: false, optional: true, required: false
  private _sources = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding
  * serviceName in 'ApiOperation'. If '*' used as value for 'method', then
  * ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#method GoogleAccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#permission GoogleAccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._permission = value.permission;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#service_name GoogleAccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#method_selectors GoogleAccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_selectors: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._methodSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSelectors = this._methodSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._methodSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._methodSelectors.internalValue = value.methodSelectors;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // method_selectors - computed: false, optional: true, required: false
  private _methodSelectors = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable) {
    this._methodSelectors.internalValue = value;
  }
  public resetMethodSelectors() {
    this._methodSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSelectorsInput() {
    return this._methodSelectors.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo {
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', protected by this 'ServicePerimeter'
  * that are allowed to be accessed by sources defined in the
  * corresponding 'IngressFrom'. A request matches if it contains
  * a resource in this list. If '*' is specified for resources,
  * then this 'IngressTo' rule will authorize access to all
  * resources inside the perimeter, provided that the request
  * also matches the 'operations' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * A list of IAM roles that represent the set of operations that the sources
  * specified in the corresponding 'IngressFrom'
  * are allowed to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#roles GoogleAccessContextManagerServicePerimeters#roles}
  */
  readonly roles?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#operations GoogleAccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._roles = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._roles = value.roles;
      this._operations.internalValue = value.operations;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
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

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies {
  /**
  * Human readable title. Must be unique within the perimeter. Does not affect behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#title GoogleAccessContextManagerServicePerimeters#title}
  */
  readonly title?: string;
  /**
  * ingress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#ingress_from GoogleAccessContextManagerServicePerimeters#ingress_from}
  */
  readonly ingressFrom?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#ingress_to GoogleAccessContextManagerServicePerimeters#ingress_to}
  */
  readonly ingressTo?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.stringToTerraform(struct!.title),
    ingress_from: googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_from: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToHclTerraform(struct!.ingressFrom),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromList",
    },
    ingress_to: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToHclTerraform(struct!.ingressTo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._ingressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressFrom = this._ingressFrom?.internalValue;
    }
    if (this._ingressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressTo = this._ingressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._title = undefined;
      this._ingressFrom.internalValue = undefined;
      this._ingressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._title = value.title;
      this._ingressFrom.internalValue = value.ingressFrom;
      this._ingressTo.internalValue = value.ingressTo;
    }
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

  // ingress_from - computed: false, optional: true, required: false
  private _ingressFrom = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference(this, "ingress_from");
  public get ingressFrom() {
    return this._ingressFrom;
  }
  public putIngressFrom(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom) {
    this._ingressFrom.internalValue = value;
  }
  public resetIngressFrom() {
    this._ingressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressFromInput() {
    return this._ingressFrom.internalValue;
  }

  // ingress_to - computed: false, optional: true, required: false
  private _ingressTo = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference(this, "ingress_to");
  public get ingressTo() {
    return this._ingressTo;
  }
  public putIngressTo(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo) {
    this._ingressTo.internalValue = value;
  }
  public resetIngressTo() {
    this._ingressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressToInput() {
    return this._ingressTo.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader {
  /**
  * HTTP header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#key GoogleAccessContextManagerServicePerimeters#key}
  */
  readonly key: string;
  /**
  * HTTP header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#value GoogleAccessContextManagerServicePerimeters#value}
  */
  readonly value: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiers {
  /**
  * add_request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#add_request_header GoogleAccessContextManagerServicePerimeters#add_request_header}
  */
  readonly addRequestHeader?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_request_header: googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderToTerraform(struct!.addRequestHeader),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_request_header: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderToHclTerraform(struct!.addRequestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addRequestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addRequestHeader = this._addRequestHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addRequestHeader.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addRequestHeader.internalValue = value.addRequestHeader;
    }
  }

  // add_request_header - computed: false, optional: true, required: false
  private _addRequestHeader = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderOutputReference(this, "add_request_header");
  public get addRequestHeader() {
    return this._addRequestHeader;
  }
  public putAddRequestHeader(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader) {
    this._addRequestHeader.internalValue = value;
  }
  public resetAddRequestHeader() {
    this._addRequestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRequestHeaderInput() {
    return this._addRequestHeader.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiers[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatterns {
  /**
  * URL pattern to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#pattern GoogleAccessContextManagerServicePerimeters#pattern}
  */
  readonly pattern?: string;
  /**
  * Supported service to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#service GoogleAccessContextManagerServicePerimeters#service}
  */
  readonly service?: string;
  /**
  * modifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#modifiers GoogleAccessContextManagerServicePerimeters#modifiers}
  */
  readonly modifiers?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiers[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    service: cdktf.stringToTerraform(struct!.service),
    modifiers: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersToTerraform, true)(struct!.modifiers),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modifiers: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersToHclTerraform, true)(struct!.modifiers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._modifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiers = this._modifiers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._service = undefined;
      this._modifiers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._service = value.service;
      this._modifiers.internalValue = value.modifiers;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // modifiers - computed: false, optional: true, required: false
  private _modifiers = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiersList(this, "modifiers", false);
  public get modifiers() {
    return this._modifiers;
  }
  public putModifiers(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsModifiers[] | cdktf.IResolvable) {
    this._modifiers.internalValue = value;
  }
  public resetModifiers() {
    this._modifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiersInput() {
    return this._modifiers.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatterns[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
  * Must be empty unless 'enableRestriction' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#allowed_services GoogleAccessContextManagerServicePerimeters#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
  * list of APIs specified in 'allowedServices'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#enable_restriction GoogleAccessContextManagerServicePerimeters#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
  /**
  * Defines the enforcement scopes of service patterns. Possible values: ["GOOGLE_APIS_VIA_PRIVATE_PATH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#service_patterns_enforcement_scopes GoogleAccessContextManagerServicePerimeters#service_patterns_enforcement_scopes}
  */
  readonly servicePatternsEnforcementScopes?: string[];
  /**
  * allowed_service_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#allowed_service_patterns GoogleAccessContextManagerServicePerimeters#allowed_service_patterns}
  */
  readonly allowedServicePatterns?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatterns[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
    service_patterns_enforcement_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servicePatternsEnforcementScopes),
    allowed_service_patterns: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsToTerraform, true)(struct!.allowedServicePatterns),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable_restriction: {
      value: cdktf.booleanToHclTerraform(struct!.enableRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_patterns_enforcement_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servicePatternsEnforcementScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_service_patterns: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsToHclTerraform, true)(struct!.allowedServicePatterns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServices = this._allowedServices;
    }
    if (this._enableRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRestriction = this._enableRestriction;
    }
    if (this._servicePatternsEnforcementScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePatternsEnforcementScopes = this._servicePatternsEnforcementScopes;
    }
    if (this._allowedServicePatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServicePatterns = this._allowedServicePatterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedServices = undefined;
      this._enableRestriction = undefined;
      this._servicePatternsEnforcementScopes = undefined;
      this._allowedServicePatterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedServices = value.allowedServices;
      this._enableRestriction = value.enableRestriction;
      this._servicePatternsEnforcementScopes = value.servicePatternsEnforcementScopes;
      this._allowedServicePatterns.internalValue = value.allowedServicePatterns;
    }
  }

  // allowed_services - computed: false, optional: true, required: false
  private _allowedServices?: string[]; 
  public get allowedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_services'));
  }
  public set allowedServices(value: string[]) {
    this._allowedServices = value;
  }
  public resetAllowedServices() {
    this._allowedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices;
  }

  // enable_restriction - computed: false, optional: true, required: false
  private _enableRestriction?: boolean | cdktf.IResolvable; 
  public get enableRestriction() {
    return this.getBooleanAttribute('enable_restriction');
  }
  public set enableRestriction(value: boolean | cdktf.IResolvable) {
    this._enableRestriction = value;
  }
  public resetEnableRestriction() {
    this._enableRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRestrictionInput() {
    return this._enableRestriction;
  }

  // service_patterns_enforcement_scopes - computed: false, optional: true, required: false
  private _servicePatternsEnforcementScopes?: string[]; 
  public get servicePatternsEnforcementScopes() {
    return this.getListAttribute('service_patterns_enforcement_scopes');
  }
  public set servicePatternsEnforcementScopes(value: string[]) {
    this._servicePatternsEnforcementScopes = value;
  }
  public resetServicePatternsEnforcementScopes() {
    this._servicePatternsEnforcementScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePatternsEnforcementScopesInput() {
    return this._servicePatternsEnforcementScopes;
  }

  // allowed_service_patterns - computed: false, optional: true, required: false
  private _allowedServicePatterns = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatternsList(this, "allowed_service_patterns", false);
  public get allowedServicePatterns() {
    return this._allowedServicePatterns;
  }
  public putAllowedServicePatterns(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesAllowedServicePatterns[] | cdktf.IResolvable) {
    this._allowedServicePatterns.internalValue = value;
  }
  public resetAllowedServicePatterns() {
    this._allowedServicePatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicePatternsInput() {
    return this._allowedServicePatterns.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpec {
  /**
  * A list of AccessLevel resource names that allow resources within
  * the ServicePerimeter to be accessed from the internet.
  * AccessLevels listed must be in the same policy as this
  * ServicePerimeter. Referencing a nonexistent AccessLevel is a
  * syntax error. If no AccessLevel names are listed, resources within
  * the perimeter can only be accessed via GCP calls with request
  * origins within the perimeter. For Service Perimeter Bridge, must
  * be empty.
  * 
  * Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#access_levels GoogleAccessContextManagerServicePerimeters#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
  * Currently only projects are allowed.
  * Format: projects/{project_number}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
  * restrictions. Must contain a list of services. For example, if
  * 'storage.googleapis.com' is specified, access to the storage
  * buckets inside the perimeter must meet the perimeter's access
  * restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#restricted_services GoogleAccessContextManagerServicePerimeters#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#egress_policies GoogleAccessContextManagerServicePerimeters#egress_policies}
  */
  readonly egressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | cdktf.IResolvable;
  /**
  * ingress_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#ingress_policies GoogleAccessContextManagerServicePerimeters#ingress_policies}
  */
  readonly ingressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | cdktf.IResolvable;
  /**
  * vpc_accessible_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#vpc_accessible_services GoogleAccessContextManagerServicePerimeters#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToTerraform, true)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToTerraform, true)(struct!.ingressPolicies),
    vpc_accessible_services: googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersSpecToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessLevels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    restricted_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    egress_policies: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToHclTerraform, true)(struct!.egressPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList",
    },
    ingress_policies: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToHclTerraform, true)(struct!.ingressPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList",
    },
    vpc_accessible_services: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToHclTerraform(struct!.vpcAccessibleServices),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevels = this._accessLevels;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._restrictedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedServices = this._restrictedServices;
    }
    if (this._egressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPolicies = this._egressPolicies?.internalValue;
    }
    if (this._ingressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPolicies = this._ingressPolicies?.internalValue;
    }
    if (this._vpcAccessibleServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcAccessibleServices = this._vpcAccessibleServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLevels = undefined;
      this._resources = undefined;
      this._restrictedServices = undefined;
      this._egressPolicies.internalValue = undefined;
      this._ingressPolicies.internalValue = undefined;
      this._vpcAccessibleServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLevels = value.accessLevels;
      this._resources = value.resources;
      this._restrictedServices = value.restrictedServices;
      this._egressPolicies.internalValue = value.egressPolicies;
      this._ingressPolicies.internalValue = value.ingressPolicies;
      this._vpcAccessibleServices.internalValue = value.vpcAccessibleServices;
    }
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('access_levels'));
  }
  public set accessLevels(value: string[]) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
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

  // restricted_services - computed: false, optional: true, required: false
  private _restrictedServices?: string[]; 
  public get restrictedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_services'));
  }
  public set restrictedServices(value: string[]) {
    this._restrictedServices = value;
  }
  public resetRestrictedServices() {
    this._restrictedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedServicesInput() {
    return this._restrictedServices;
  }

  // egress_policies - computed: false, optional: true, required: false
  private _egressPolicies = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList(this, "egress_policies", false);
  public get egressPolicies() {
    return this._egressPolicies;
  }
  public putEgressPolicies(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | cdktf.IResolvable) {
    this._egressPolicies.internalValue = value;
  }
  public resetEgressPolicies() {
    this._egressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPoliciesInput() {
    return this._egressPolicies.internalValue;
  }

  // ingress_policies - computed: false, optional: true, required: false
  private _ingressPolicies = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList(this, "ingress_policies", false);
  public get ingressPolicies() {
    return this._ingressPolicies;
  }
  public putIngressPolicies(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | cdktf.IResolvable) {
    this._ingressPolicies.internalValue = value;
  }
  public resetIngressPolicies() {
    this._ingressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPoliciesInput() {
    return this._ingressPolicies.internalValue;
  }

  // vpc_accessible_services - computed: false, optional: true, required: false
  private _vpcAccessibleServices = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference(this, "vpc_accessible_services");
  public get vpcAccessibleServices() {
    return this._vpcAccessibleServices;
  }
  public putVpcAccessibleServices(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices) {
    this._vpcAccessibleServices.internalValue = value;
  }
  public resetVpcAccessibleServices() {
    this._vpcAccessibleServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessibleServicesInput() {
    return this._vpcAccessibleServices.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpoint {
  /**
  * The full resource name of the global forwarding rule that identifies a Private Service Connect endpoint.
  * Forwarding rule format: '//compute.googleapis.com/projects/{PROJECT_ID}/global/forwardingRules/{FORWARDING_RULE_ID}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#forwarding_rule GoogleAccessContextManagerServicePerimeters#forwarding_rule}
  */
  readonly forwardingRule?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpointToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpointOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_rule: cdktf.stringToTerraform(struct!.forwardingRule),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpointToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpointOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarding_rule: {
      value: cdktf.stringToHclTerraform(struct!.forwardingRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardingRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingRule = this._forwardingRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardingRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardingRule = value.forwardingRule;
    }
  }

  // forwarding_rule - computed: false, optional: true, required: false
  private _forwardingRule?: string; 
  public get forwardingRule() {
    return this.getStringAttribute('forwarding_rule');
  }
  public set forwardingRule(value: string) {
    this._forwardingRule = value;
  }
  public resetForwardingRule() {
    this._forwardingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleInput() {
    return this._forwardingRule;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSources {
  /**
  * An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#access_level GoogleAccessContextManagerServicePerimeters#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to egress the perimeter.
  * Requests from these resources are allowed to access data outside the perimeter.
  * Currently only projects are allowed. Project format: 'projects/{project_number}'.
  * The resource may be in any Google Cloud organization, not just the
  * organization that the perimeter is defined in. '*' is not allowed, the
  * case of allowing all Google Cloud resources only is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#resource GoogleAccessContextManagerServicePerimeters#resource}
  */
  readonly resource?: string;
  /**
  * psc_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#psc_endpoint GoogleAccessContextManagerServicePerimeters#psc_endpoint}
  */
  readonly pscEndpoint?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpoint;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
    psc_endpoint: googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpointToTerraform(struct!.pscEndpoint),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psc_endpoint: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpointToHclTerraform(struct!.pscEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._pscEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscEndpoint = this._pscEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._resource = undefined;
      this._pscEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._resource = value.resource;
      this._pscEndpoint.internalValue = value.pscEndpoint;
    }
  }

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // psc_endpoint - computed: false, optional: true, required: false
  private _pscEndpoint = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpointOutputReference(this, "psc_endpoint");
  public get pscEndpoint() {
    return this._pscEndpoint;
  }
  public putPscEndpoint(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesPscEndpoint) {
    this._pscEndpoint.internalValue = value;
  }
  public resetPscEndpoint() {
    this._pscEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscEndpointInput() {
    return this._pscEndpoint.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'.
  * Should be in the format of email address. The email address should
  * represent individual user or service account only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#identities GoogleAccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the
  * perimeter. If left unspecified, then members of 'identities' field will
  * be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#identity_type GoogleAccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
  /**
  * Whether to enforce traffic restrictions based on 'sources' field. If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_UNSPECIFIED", "SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#source_restriction GoogleAccessContextManagerServicePerimeters#source_restriction}
  */
  readonly sourceRestriction?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#sources GoogleAccessContextManagerServicePerimeters#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    source_restriction: cdktf.stringToTerraform(struct!.sourceRestriction),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_restriction: {
      value: cdktf.stringToHclTerraform(struct!.sourceRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._sourceRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRestriction = this._sourceRestriction;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sourceRestriction = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sourceRestriction = value.sourceRestriction;
      this._sources.internalValue = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return cdktf.Fn.tolist(this.getListAttribute('identities'));
  }
  public set identities(value: string[]) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities;
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

  // source_restriction - computed: false, optional: true, required: false
  private _sourceRestriction?: string; 
  public get sourceRestriction() {
    return this.getStringAttribute('source_restriction');
  }
  public set sourceRestriction(value: string) {
    this._sourceRestriction = value;
  }
  public resetSourceRestriction() {
    this._sourceRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRestrictionInput() {
    return this._sourceRestriction;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromSources[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding
  * 'serviceName' in 'ApiOperation'. If '*' used as value for method,
  * then ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#method GoogleAccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#permission GoogleAccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._permission = value.permission;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#service_name GoogleAccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#method_selectors GoogleAccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_selectors: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._methodSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSelectors = this._methodSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._methodSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._methodSelectors.internalValue = value.methodSelectors;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // method_selectors - computed: false, optional: true, required: false
  private _methodSelectors = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable) {
    this._methodSelectors.internalValue = value;
  }
  public resetMethodSelectors() {
    this._methodSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSelectorsInput() {
    return this._methodSelectors.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo {
  /**
  * A list of external resources that are allowed to be accessed. A request
  * matches if it contains an external resource in this list (Example:
  * s3://bucket/path). Currently '*' is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#external_resources GoogleAccessContextManagerServicePerimeters#external_resources}
  */
  readonly externalResources?: string[];
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', that match this to stanza. A request matches
  * if it contains a resource in this list. If * is specified for resources,
  * then this 'EgressTo' rule will authorize access to all resources outside
  * the perimeter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * A list of IAM roles that represent the set of operations that the sources
  * specified in the corresponding 'EgressFrom'
  * are allowed to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#roles GoogleAccessContextManagerServicePerimeters#roles}
  */
  readonly roles?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#operations GoogleAccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalResources),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalResources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalResources = this._externalResources;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalResources = undefined;
      this._resources = undefined;
      this._roles = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalResources = value.externalResources;
      this._resources = value.resources;
      this._roles = value.roles;
      this._operations.internalValue = value.operations;
    }
  }

  // external_resources - computed: false, optional: true, required: false
  private _externalResources?: string[]; 
  public get externalResources() {
    return cdktf.Fn.tolist(this.getListAttribute('external_resources'));
  }
  public set externalResources(value: string[]) {
    this._externalResources = value;
  }
  public resetExternalResources() {
    this._externalResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalResourcesInput() {
    return this._externalResources;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
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

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies {
  /**
  * Human readable title. Must be unique within the perimeter. Does not affect behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#title GoogleAccessContextManagerServicePerimeters#title}
  */
  readonly title?: string;
  /**
  * egress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#egress_from GoogleAccessContextManagerServicePerimeters#egress_from}
  */
  readonly egressFrom?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom;
  /**
  * egress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#egress_to GoogleAccessContextManagerServicePerimeters#egress_to}
  */
  readonly egressTo?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.stringToTerraform(struct!.title),
    egress_from: googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToTerraform(struct!.egressTo),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_from: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToHclTerraform(struct!.egressFrom),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromList",
    },
    egress_to: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToHclTerraform(struct!.egressTo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._egressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressFrom = this._egressFrom?.internalValue;
    }
    if (this._egressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressTo = this._egressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._title = undefined;
      this._egressFrom.internalValue = undefined;
      this._egressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._title = value.title;
      this._egressFrom.internalValue = value.egressFrom;
      this._egressTo.internalValue = value.egressTo;
    }
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

  // egress_from - computed: false, optional: true, required: false
  private _egressFrom = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference(this, "egress_from");
  public get egressFrom() {
    return this._egressFrom;
  }
  public putEgressFrom(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom) {
    this._egressFrom.internalValue = value;
  }
  public resetEgressFrom() {
    this._egressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressFromInput() {
    return this._egressFrom.internalValue;
  }

  // egress_to - computed: false, optional: true, required: false
  private _egressTo = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference(this, "egress_to");
  public get egressTo() {
    return this._egressTo;
  }
  public putEgressTo(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo) {
    this._egressTo.internalValue = value;
  }
  public resetEgressTo() {
    this._egressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressToInput() {
    return this._egressTo.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpoint {
  /**
  * The full resource name of the global forwarding rule that identifies a Private Service Connect endpoint.
  * Forwarding rule format: '//compute.googleapis.com/projects/{PROJECT_ID}/global/forwardingRules/{FORWARDING_RULE_ID}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#forwarding_rule GoogleAccessContextManagerServicePerimeters#forwarding_rule}
  */
  readonly forwardingRule?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpointToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpointOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_rule: cdktf.stringToTerraform(struct!.forwardingRule),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpointToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpointOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarding_rule: {
      value: cdktf.stringToHclTerraform(struct!.forwardingRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardingRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingRule = this._forwardingRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardingRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardingRule = value.forwardingRule;
    }
  }

  // forwarding_rule - computed: false, optional: true, required: false
  private _forwardingRule?: string; 
  public get forwardingRule() {
    return this.getStringAttribute('forwarding_rule');
  }
  public set forwardingRule(value: string) {
    this._forwardingRule = value;
  }
  public resetForwardingRule() {
    this._forwardingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleInput() {
    return this._forwardingRule;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources {
  /**
  * An 'AccessLevel' resource name that allow resources within the
  * 'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed
  * must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
  * 'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
  * resources within the perimeter can only be accessed via Google Cloud calls
  * with request origins within the perimeter.
  * Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
  * If * is specified, then all IngressSources will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#access_level GoogleAccessContextManagerServicePerimeters#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to ingress the perimeter.
  * Requests from these resources will be allowed to access perimeter data.
  * Currently only projects are allowed. Format 'projects/{project_number}'
  * The project may be in any Google Cloud organization, not just the
  * organization that the perimeter is defined in. '*' is not allowed, the case
  * of allowing all Google Cloud resources only is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#resource GoogleAccessContextManagerServicePerimeters#resource}
  */
  readonly resource?: string;
  /**
  * psc_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#psc_endpoint GoogleAccessContextManagerServicePerimeters#psc_endpoint}
  */
  readonly pscEndpoint?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpoint;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
    psc_endpoint: googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpointToTerraform(struct!.pscEndpoint),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psc_endpoint: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpointToHclTerraform(struct!.pscEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._pscEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscEndpoint = this._pscEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._resource = undefined;
      this._pscEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._resource = value.resource;
      this._pscEndpoint.internalValue = value.pscEndpoint;
    }
  }

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // psc_endpoint - computed: false, optional: true, required: false
  private _pscEndpoint = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpointOutputReference(this, "psc_endpoint");
  public get pscEndpoint() {
    return this._pscEndpoint;
  }
  public putPscEndpoint(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesPscEndpoint) {
    this._pscEndpoint.internalValue = value;
  }
  public resetPscEndpoint() {
    this._pscEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscEndpointInput() {
    return this._pscEndpoint.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
  * Should be in the format of email address. The email address should represent
  * individual user or service account only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#identities GoogleAccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the
  * perimeter. If left unspecified, then members of 'identities' field will be
  * allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#identity_type GoogleAccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#sources GoogleAccessContextManagerServicePerimeters#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sources.internalValue = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return cdktf.Fn.tolist(this.getListAttribute('identities'));
  }
  public set identities(value: string[]) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities;
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

  // sources - computed: false, optional: true, required: false
  private _sources = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding
  * serviceName in 'ApiOperation'. If '*' used as value for 'method', then
  * ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#method GoogleAccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#permission GoogleAccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._permission = value.permission;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#service_name GoogleAccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#method_selectors GoogleAccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_selectors: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._methodSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSelectors = this._methodSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._methodSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._methodSelectors.internalValue = value.methodSelectors;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // method_selectors - computed: false, optional: true, required: false
  private _methodSelectors = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable) {
    this._methodSelectors.internalValue = value;
  }
  public resetMethodSelectors() {
    this._methodSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSelectorsInput() {
    return this._methodSelectors.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo {
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', protected by this 'ServicePerimeter'
  * that are allowed to be accessed by sources defined in the
  * corresponding 'IngressFrom'. A request matches if it contains
  * a resource in this list. If '*' is specified for resources,
  * then this 'IngressTo' rule will authorize access to all
  * resources inside the perimeter, provided that the request
  * also matches the 'operations' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * A list of IAM roles that represent the set of operations that the sources
  * specified in the corresponding 'IngressFrom'
  * are allowed to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#roles GoogleAccessContextManagerServicePerimeters#roles}
  */
  readonly roles?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#operations GoogleAccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._roles = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._roles = value.roles;
      this._operations.internalValue = value.operations;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
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

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies {
  /**
  * Human readable title. Must be unique within the perimeter. Does not affect behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#title GoogleAccessContextManagerServicePerimeters#title}
  */
  readonly title?: string;
  /**
  * ingress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#ingress_from GoogleAccessContextManagerServicePerimeters#ingress_from}
  */
  readonly ingressFrom?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#ingress_to GoogleAccessContextManagerServicePerimeters#ingress_to}
  */
  readonly ingressTo?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.stringToTerraform(struct!.title),
    ingress_from: googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_from: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToHclTerraform(struct!.ingressFrom),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromList",
    },
    ingress_to: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToHclTerraform(struct!.ingressTo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._ingressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressFrom = this._ingressFrom?.internalValue;
    }
    if (this._ingressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressTo = this._ingressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._title = undefined;
      this._ingressFrom.internalValue = undefined;
      this._ingressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._title = value.title;
      this._ingressFrom.internalValue = value.ingressFrom;
      this._ingressTo.internalValue = value.ingressTo;
    }
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

  // ingress_from - computed: false, optional: true, required: false
  private _ingressFrom = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference(this, "ingress_from");
  public get ingressFrom() {
    return this._ingressFrom;
  }
  public putIngressFrom(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom) {
    this._ingressFrom.internalValue = value;
  }
  public resetIngressFrom() {
    this._ingressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressFromInput() {
    return this._ingressFrom.internalValue;
  }

  // ingress_to - computed: false, optional: true, required: false
  private _ingressTo = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference(this, "ingress_to");
  public get ingressTo() {
    return this._ingressTo;
  }
  public putIngressTo(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo) {
    this._ingressTo.internalValue = value;
  }
  public resetIngressTo() {
    this._ingressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressToInput() {
    return this._ingressTo.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader {
  /**
  * HTTP header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#key GoogleAccessContextManagerServicePerimeters#key}
  */
  readonly key: string;
  /**
  * HTTP header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#value GoogleAccessContextManagerServicePerimeters#value}
  */
  readonly value: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiers {
  /**
  * add_request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#add_request_header GoogleAccessContextManagerServicePerimeters#add_request_header}
  */
  readonly addRequestHeader?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_request_header: googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderToTerraform(struct!.addRequestHeader),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_request_header: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderToHclTerraform(struct!.addRequestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addRequestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addRequestHeader = this._addRequestHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addRequestHeader.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addRequestHeader.internalValue = value.addRequestHeader;
    }
  }

  // add_request_header - computed: false, optional: true, required: false
  private _addRequestHeader = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeaderOutputReference(this, "add_request_header");
  public get addRequestHeader() {
    return this._addRequestHeader;
  }
  public putAddRequestHeader(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersAddRequestHeader) {
    this._addRequestHeader.internalValue = value;
  }
  public resetAddRequestHeader() {
    this._addRequestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRequestHeaderInput() {
    return this._addRequestHeader.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiers[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatterns {
  /**
  * URL pattern to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#pattern GoogleAccessContextManagerServicePerimeters#pattern}
  */
  readonly pattern?: string;
  /**
  * Supported service to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#service GoogleAccessContextManagerServicePerimeters#service}
  */
  readonly service?: string;
  /**
  * modifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#modifiers GoogleAccessContextManagerServicePerimeters#modifiers}
  */
  readonly modifiers?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiers[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    service: cdktf.stringToTerraform(struct!.service),
    modifiers: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersToTerraform, true)(struct!.modifiers),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modifiers: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersToHclTerraform, true)(struct!.modifiers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._modifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiers = this._modifiers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._service = undefined;
      this._modifiers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._service = value.service;
      this._modifiers.internalValue = value.modifiers;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // modifiers - computed: false, optional: true, required: false
  private _modifiers = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiersList(this, "modifiers", false);
  public get modifiers() {
    return this._modifiers;
  }
  public putModifiers(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsModifiers[] | cdktf.IResolvable) {
    this._modifiers.internalValue = value;
  }
  public resetModifiers() {
    this._modifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiersInput() {
    return this._modifiers.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatterns[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
  * Must be empty unless 'enableRestriction' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#allowed_services GoogleAccessContextManagerServicePerimeters#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
  * list of APIs specified in 'allowedServices'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#enable_restriction GoogleAccessContextManagerServicePerimeters#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
  /**
  * Defines the enforcement scopes of service patterns. Possible values: ["GOOGLE_APIS_VIA_PRIVATE_PATH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#service_patterns_enforcement_scopes GoogleAccessContextManagerServicePerimeters#service_patterns_enforcement_scopes}
  */
  readonly servicePatternsEnforcementScopes?: string[];
  /**
  * allowed_service_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#allowed_service_patterns GoogleAccessContextManagerServicePerimeters#allowed_service_patterns}
  */
  readonly allowedServicePatterns?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatterns[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
    service_patterns_enforcement_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servicePatternsEnforcementScopes),
    allowed_service_patterns: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsToTerraform, true)(struct!.allowedServicePatterns),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable_restriction: {
      value: cdktf.booleanToHclTerraform(struct!.enableRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_patterns_enforcement_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servicePatternsEnforcementScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_service_patterns: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsToHclTerraform, true)(struct!.allowedServicePatterns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServices = this._allowedServices;
    }
    if (this._enableRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRestriction = this._enableRestriction;
    }
    if (this._servicePatternsEnforcementScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePatternsEnforcementScopes = this._servicePatternsEnforcementScopes;
    }
    if (this._allowedServicePatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServicePatterns = this._allowedServicePatterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedServices = undefined;
      this._enableRestriction = undefined;
      this._servicePatternsEnforcementScopes = undefined;
      this._allowedServicePatterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedServices = value.allowedServices;
      this._enableRestriction = value.enableRestriction;
      this._servicePatternsEnforcementScopes = value.servicePatternsEnforcementScopes;
      this._allowedServicePatterns.internalValue = value.allowedServicePatterns;
    }
  }

  // allowed_services - computed: false, optional: true, required: false
  private _allowedServices?: string[]; 
  public get allowedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_services'));
  }
  public set allowedServices(value: string[]) {
    this._allowedServices = value;
  }
  public resetAllowedServices() {
    this._allowedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices;
  }

  // enable_restriction - computed: false, optional: true, required: false
  private _enableRestriction?: boolean | cdktf.IResolvable; 
  public get enableRestriction() {
    return this.getBooleanAttribute('enable_restriction');
  }
  public set enableRestriction(value: boolean | cdktf.IResolvable) {
    this._enableRestriction = value;
  }
  public resetEnableRestriction() {
    this._enableRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRestrictionInput() {
    return this._enableRestriction;
  }

  // service_patterns_enforcement_scopes - computed: false, optional: true, required: false
  private _servicePatternsEnforcementScopes?: string[]; 
  public get servicePatternsEnforcementScopes() {
    return this.getListAttribute('service_patterns_enforcement_scopes');
  }
  public set servicePatternsEnforcementScopes(value: string[]) {
    this._servicePatternsEnforcementScopes = value;
  }
  public resetServicePatternsEnforcementScopes() {
    this._servicePatternsEnforcementScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePatternsEnforcementScopesInput() {
    return this._servicePatternsEnforcementScopes;
  }

  // allowed_service_patterns - computed: false, optional: true, required: false
  private _allowedServicePatterns = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatternsList(this, "allowed_service_patterns", false);
  public get allowedServicePatterns() {
    return this._allowedServicePatterns;
  }
  public putAllowedServicePatterns(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesAllowedServicePatterns[] | cdktf.IResolvable) {
    this._allowedServicePatterns.internalValue = value;
  }
  public resetAllowedServicePatterns() {
    this._allowedServicePatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicePatternsInput() {
    return this._allowedServicePatterns.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatus {
  /**
  * A list of AccessLevel resource names that allow resources within
  * the ServicePerimeter to be accessed from the internet.
  * AccessLevels listed must be in the same policy as this
  * ServicePerimeter. Referencing a nonexistent AccessLevel is a
  * syntax error. If no AccessLevel names are listed, resources within
  * the perimeter can only be accessed via GCP calls with request
  * origins within the perimeter. For Service Perimeter Bridge, must
  * be empty.
  * 
  * Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#access_levels GoogleAccessContextManagerServicePerimeters#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
  * Currently only projects are allowed.
  * Format: projects/{project_number}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
  * restrictions. Must contain a list of services. For example, if
  * 'storage.googleapis.com' is specified, access to the storage
  * buckets inside the perimeter must meet the perimeter's access
  * restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#restricted_services GoogleAccessContextManagerServicePerimeters#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#egress_policies GoogleAccessContextManagerServicePerimeters#egress_policies}
  */
  readonly egressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | cdktf.IResolvable;
  /**
  * ingress_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#ingress_policies GoogleAccessContextManagerServicePerimeters#ingress_policies}
  */
  readonly ingressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | cdktf.IResolvable;
  /**
  * vpc_accessible_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#vpc_accessible_services GoogleAccessContextManagerServicePerimeters#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToTerraform, true)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToTerraform, true)(struct!.ingressPolicies),
    vpc_accessible_services: googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersStatusToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessLevels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    restricted_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    egress_policies: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToHclTerraform, true)(struct!.egressPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList",
    },
    ingress_policies: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToHclTerraform, true)(struct!.ingressPolicies),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList",
    },
    vpc_accessible_services: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToHclTerraform(struct!.vpcAccessibleServices),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevels = this._accessLevels;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._restrictedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedServices = this._restrictedServices;
    }
    if (this._egressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPolicies = this._egressPolicies?.internalValue;
    }
    if (this._ingressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPolicies = this._ingressPolicies?.internalValue;
    }
    if (this._vpcAccessibleServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcAccessibleServices = this._vpcAccessibleServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLevels = undefined;
      this._resources = undefined;
      this._restrictedServices = undefined;
      this._egressPolicies.internalValue = undefined;
      this._ingressPolicies.internalValue = undefined;
      this._vpcAccessibleServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLevels = value.accessLevels;
      this._resources = value.resources;
      this._restrictedServices = value.restrictedServices;
      this._egressPolicies.internalValue = value.egressPolicies;
      this._ingressPolicies.internalValue = value.ingressPolicies;
      this._vpcAccessibleServices.internalValue = value.vpcAccessibleServices;
    }
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('access_levels'));
  }
  public set accessLevels(value: string[]) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
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

  // restricted_services - computed: false, optional: true, required: false
  private _restrictedServices?: string[]; 
  public get restrictedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_services'));
  }
  public set restrictedServices(value: string[]) {
    this._restrictedServices = value;
  }
  public resetRestrictedServices() {
    this._restrictedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedServicesInput() {
    return this._restrictedServices;
  }

  // egress_policies - computed: false, optional: true, required: false
  private _egressPolicies = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList(this, "egress_policies", false);
  public get egressPolicies() {
    return this._egressPolicies;
  }
  public putEgressPolicies(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | cdktf.IResolvable) {
    this._egressPolicies.internalValue = value;
  }
  public resetEgressPolicies() {
    this._egressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPoliciesInput() {
    return this._egressPolicies.internalValue;
  }

  // ingress_policies - computed: false, optional: true, required: false
  private _ingressPolicies = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList(this, "ingress_policies", true);
  public get ingressPolicies() {
    return this._ingressPolicies;
  }
  public putIngressPolicies(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | cdktf.IResolvable) {
    this._ingressPolicies.internalValue = value;
  }
  public resetIngressPolicies() {
    this._ingressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPoliciesInput() {
    return this._ingressPolicies.internalValue;
  }

  // vpc_accessible_services - computed: false, optional: true, required: false
  private _vpcAccessibleServices = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference(this, "vpc_accessible_services");
  public get vpcAccessibleServices() {
    return this._vpcAccessibleServices;
  }
  public putVpcAccessibleServices(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices) {
    this._vpcAccessibleServices.internalValue = value;
  }
  public resetVpcAccessibleServices() {
    this._vpcAccessibleServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessibleServicesInput() {
    return this._vpcAccessibleServices.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimeters {
  /**
  * Description of the ServicePerimeter and its use. Does not affect
  * behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#description GoogleAccessContextManagerServicePerimeters#description}
  */
  readonly description?: string;
  /**
  * Resource name for the ServicePerimeter. The short_name component must
  * begin with a letter and only include alphanumeric and '_'.
  * Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#name GoogleAccessContextManagerServicePerimeters#name}
  */
  readonly name: string;
  /**
  * Specifies the type of the Perimeter. There are two types: regular and
  * bridge. Regular Service Perimeter contains resources, access levels,
  * and restricted services. Every resource can be in at most
  * ONE regular Service Perimeter.
  * 
  * In addition to being in a regular service perimeter, a resource can also
  * be in zero or more perimeter bridges. A perimeter bridge only contains
  * resources. Cross project operations are permitted if all effected
  * resources share some perimeter (whether bridge or regular). Perimeter
  * Bridge does not contain access levels or services: those are governed
  * entirely by the regular perimeter that resource is in.
  * 
  * Perimeter Bridges are typically useful when building more complex
  * topologies with many independent perimeters that need to share some data
  * with a common perimeter, but should not be able to share data among
  * themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#perimeter_type GoogleAccessContextManagerServicePerimeters#perimeter_type}
  */
  readonly perimeterType?: string;
  /**
  * Human readable title. Must be unique within the Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#title GoogleAccessContextManagerServicePerimeters#title}
  */
  readonly title: string;
  /**
  * Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists
  * for all Service Perimeters, and that spec is identical to the status for those
  * Service Perimeters. When this flag is set, it inhibits the generation of the
  * implicit spec, thereby allowing the user to explicitly provide a
  * configuration ("spec") to use in a dry-run version of the Service Perimeter.
  * This allows the user to test changes to the enforced config ("status") without
  * actually enforcing them. This testing is done through analyzing the differences
  * between currently enforced and suggested restrictions. useExplicitDryRunSpec must
  * bet set to True if any of the fields in the spec are set to non-default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#use_explicit_dry_run_spec GoogleAccessContextManagerServicePerimeters#use_explicit_dry_run_spec}
  */
  readonly useExplicitDryRunSpec?: boolean | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#spec GoogleAccessContextManagerServicePerimeters#spec}
  */
  readonly spec?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpec;
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#status GoogleAccessContextManagerServicePerimeters#status}
  */
  readonly status?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatus;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimeters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    perimeter_type: cdktf.stringToTerraform(struct!.perimeterType),
    title: cdktf.stringToTerraform(struct!.title),
    use_explicit_dry_run_spec: cdktf.booleanToTerraform(struct!.useExplicitDryRunSpec),
    spec: googleAccessContextManagerServicePerimetersServicePerimetersSpecToTerraform(struct!.spec),
    status: googleAccessContextManagerServicePerimetersServicePerimetersStatusToTerraform(struct!.status),
  }
}


export function googleAccessContextManagerServicePerimetersServicePerimetersToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimeters | cdktf.IResolvable): any {
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
    perimeter_type: {
      value: cdktf.stringToHclTerraform(struct!.perimeterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_explicit_dry_run_spec: {
      value: cdktf.booleanToHclTerraform(struct!.useExplicitDryRunSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spec: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersSpecList",
    },
    status: {
      value: googleAccessContextManagerServicePerimetersServicePerimetersStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimeters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._perimeterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.perimeterType = this._perimeterType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._useExplicitDryRunSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.useExplicitDryRunSpec = this._useExplicitDryRunSpec;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimeters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._perimeterType = undefined;
      this._title = undefined;
      this._useExplicitDryRunSpec = undefined;
      this._spec.internalValue = undefined;
      this._status.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._perimeterType = value.perimeterType;
      this._title = value.title;
      this._useExplicitDryRunSpec = value.useExplicitDryRunSpec;
      this._spec.internalValue = value.spec;
      this._status.internalValue = value.status;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // perimeter_type - computed: false, optional: true, required: false
  private _perimeterType?: string; 
  public get perimeterType() {
    return this.getStringAttribute('perimeter_type');
  }
  public set perimeterType(value: string) {
    this._perimeterType = value;
  }
  public resetPerimeterType() {
    this._perimeterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterTypeInput() {
    return this._perimeterType;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // use_explicit_dry_run_spec - computed: false, optional: true, required: false
  private _useExplicitDryRunSpec?: boolean | cdktf.IResolvable; 
  public get useExplicitDryRunSpec() {
    return this.getBooleanAttribute('use_explicit_dry_run_spec');
  }
  public set useExplicitDryRunSpec(value: boolean | cdktf.IResolvable) {
    this._useExplicitDryRunSpec = value;
  }
  public resetUseExplicitDryRunSpec() {
    this._useExplicitDryRunSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExplicitDryRunSpecInput() {
    return this._useExplicitDryRunSpec;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimetersServicePerimeters[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimetersServicePerimetersOutputReference {
    return new GoogleAccessContextManagerServicePerimetersServicePerimetersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimetersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#create GoogleAccessContextManagerServicePerimeters#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#delete GoogleAccessContextManagerServicePerimeters#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#update GoogleAccessContextManagerServicePerimeters#update}
  */
  readonly update?: string;
}

export function googleAccessContextManagerServicePerimetersTimeoutsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersTimeouts | cdktf.IResolvable): any {
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


export function googleAccessContextManagerServicePerimetersTimeoutsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimetersTimeouts | cdktf.IResolvable): any {
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

export class GoogleAccessContextManagerServicePerimetersTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters google_access_context_manager_service_perimeters}
*/
export class GoogleAccessContextManagerServicePerimeters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_service_perimeters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeters to import
  * @param importFromId The id of the existing GoogleAccessContextManagerServicePerimeters that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_access_context_manager_service_perimeters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_access_context_manager_service_perimeters google_access_context_manager_service_perimeters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAccessContextManagerServicePerimetersConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAccessContextManagerServicePerimetersConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeters',
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
    this._id = config.id;
    this._parent = config.parent;
    this._servicePerimeters.internalValue = config.servicePerimeters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // service_perimeters - computed: false, optional: true, required: false
  private _servicePerimeters = new GoogleAccessContextManagerServicePerimetersServicePerimetersList(this, "service_perimeters", false);
  public get servicePerimeters() {
    return this._servicePerimeters;
  }
  public putServicePerimeters(value: GoogleAccessContextManagerServicePerimetersServicePerimeters[] | cdktf.IResolvable) {
    this._servicePerimeters.internalValue = value;
  }
  public resetServicePerimeters() {
    this._servicePerimeters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePerimetersInput() {
    return this._servicePerimeters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAccessContextManagerServicePerimetersTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAccessContextManagerServicePerimetersTimeouts) {
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
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      service_perimeters: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersToTerraform, true)(this._servicePerimeters.internalValue),
      timeouts: googleAccessContextManagerServicePerimetersTimeoutsToTerraform(this._timeouts.internalValue),
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
      service_perimeters: {
        value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimetersServicePerimetersToHclTerraform, true)(this._servicePerimeters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAccessContextManagerServicePerimetersServicePerimetersList",
      },
      timeouts: {
        value: googleAccessContextManagerServicePerimetersTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleAccessContextManagerServicePerimetersTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
