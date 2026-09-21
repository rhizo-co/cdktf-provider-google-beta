import * as cdktf from 'cdktf';
import { GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd,
googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform,
googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy,
googleComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyToTerraform,
googleComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyOutputReference,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy,
googleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform,
googleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy,
googleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform,
googleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration,
googleComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationToTerraform,
googleComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationOutputReference,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy,
googleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform,
googleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy,
googleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform,
googleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionTimeout,
googleComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform,
googleComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite,
googleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform,
googleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference,
GoogleComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy,
googleComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyToTerraform,
googleComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyOutputReference,
GoogleComputeUrlMapPathMatcherRouteRulesHeaderAction,
googleComputeUrlMapPathMatcherRouteRulesHeaderActionToTerraform,
googleComputeUrlMapPathMatcherRouteRulesHeaderActionToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesHeaderActionOutputReference,
GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterConfigs,
googleComputeUrlMapPathMatcherRouteRulesHttpFilterConfigsToTerraform,
googleComputeUrlMapPathMatcherRouteRulesHttpFilterConfigsToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterConfigsList,
GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterMetadata,
googleComputeUrlMapPathMatcherRouteRulesHttpFilterMetadataToTerraform,
googleComputeUrlMapPathMatcherRouteRulesHttpFilterMetadataToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterMetadataList,
GoogleComputeUrlMapPathMatcherRouteRulesMatchRules,
googleComputeUrlMapPathMatcherRouteRulesMatchRulesToTerraform,
googleComputeUrlMapPathMatcherRouteRulesMatchRulesToHclTerraform,
GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesList,
GoogleComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy,
googleComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyToTerraform,
googleComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyToHclTerraform,
GoogleComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyOutputReference,
GoogleComputeUrlMapPathMatcherDefaultRouteAction,
googleComputeUrlMapPathMatcherDefaultRouteActionToTerraform,
googleComputeUrlMapPathMatcherDefaultRouteActionToHclTerraform,
GoogleComputeUrlMapPathMatcherDefaultRouteActionOutputReference,
GoogleComputeUrlMapPathMatcherDefaultUrlRedirect,
googleComputeUrlMapPathMatcherDefaultUrlRedirectToTerraform,
googleComputeUrlMapPathMatcherDefaultUrlRedirectToHclTerraform,
GoogleComputeUrlMapPathMatcherDefaultUrlRedirectOutputReference,
GoogleComputeUrlMapPathMatcherHeaderAction,
googleComputeUrlMapPathMatcherHeaderActionToTerraform,
googleComputeUrlMapPathMatcherHeaderActionToHclTerraform,
GoogleComputeUrlMapPathMatcherHeaderActionOutputReference,
GoogleComputeUrlMapPathMatcherPathRule,
googleComputeUrlMapPathMatcherPathRuleToTerraform,
googleComputeUrlMapPathMatcherPathRuleToHclTerraform,
GoogleComputeUrlMapPathMatcherPathRuleList } from './structs0'
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#header_name GoogleComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#header_value GoogleComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#replace GoogleComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}


export function googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference {
    return new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
  * prior to forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#request_headers_to_remove GoogleComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
  * prior to sending the response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#response_headers_to_remove GoogleComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#request_headers_to_add GoogleComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#response_headers_to_add GoogleComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference | GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference | GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktf.listMapperHcl(googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices {
  /**
  * The default BackendService resource. Before
  * forwarding the request to backendService, the loadbalancer applies any relevant
  * headerActions specified as part of this backendServiceWeight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#backend_service GoogleComputeUrlMap#backend_service}
  */
  readonly backendService: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as weight /
  * (sum of all weightedBackendService weights in routeAction) . The selection of a
  * backend service is determined only for new traffic. Once a user's request has
  * been directed to a backendService, subsequent requests will be sent to the same
  * backendService as determined by the BackendService's session affinity policy.
  * The value must be between 0 and 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#weight GoogleComputeUrlMap#weight}
  */
  readonly weight: number;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#header_action GoogleComputeUrlMap#header_action}
  */
  readonly headerAction?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction;
}

export function googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}


export function googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToHclTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktf.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_action: {
      value: googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendService = undefined;
      this._weight = undefined;
      this._headerAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendService = value.backendService;
      this._weight = value.weight;
      this._headerAction.internalValue = value.headerAction;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }
}

export class GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference {
    return new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteAction {
  /**
  * cache_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#cache_policy GoogleComputeUrlMap#cache_policy}
  */
  readonly cachePolicy?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy;
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#cors_policy GoogleComputeUrlMap#cors_policy}
  */
  readonly corsPolicy?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#fault_injection_policy GoogleComputeUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy;
  /**
  * max_stream_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#max_stream_duration GoogleComputeUrlMap#max_stream_duration}
  */
  readonly maxStreamDuration?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration;
  /**
  * request_mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#request_mirror_policy GoogleComputeUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#retry_policy GoogleComputeUrlMap#retry_policy}
  */
  readonly retryPolicy?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#timeout GoogleComputeUrlMap#timeout}
  */
  readonly timeout?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionTimeout;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#url_rewrite GoogleComputeUrlMap#url_rewrite}
  */
  readonly urlRewrite?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#weighted_backend_services GoogleComputeUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktf.IResolvable;
}

export function googleComputeUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionOutputReference | GoogleComputeUrlMapPathMatcherRouteRulesRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_policy: googleComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyToTerraform(struct!.cachePolicy),
    cors_policy: googleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: googleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    max_stream_duration: googleComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationToTerraform(struct!.maxStreamDuration),
    request_mirror_policy: googleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: googleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: googleComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: googleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform, true)(struct!.weightedBackendServices),
  }
}


export function googleComputeUrlMapPathMatcherRouteRulesRouteActionToHclTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionOutputReference | GoogleComputeUrlMapPathMatcherRouteRulesRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_policy: {
      value: googleComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyToHclTerraform(struct!.cachePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyList",
    },
    cors_policy: {
      value: googleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyList",
    },
    fault_injection_policy: {
      value: googleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToHclTerraform(struct!.faultInjectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyList",
    },
    max_stream_duration: {
      value: googleComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationToHclTerraform(struct!.maxStreamDuration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationList",
    },
    request_mirror_policy: {
      value: googleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToHclTerraform(struct!.requestMirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyList",
    },
    retry_policy: {
      value: googleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyList",
    },
    timeout: {
      value: googleComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutList",
    },
    url_rewrite: {
      value: googleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteList",
    },
    weighted_backend_services: {
      value: cdktf.listMapperHcl(googleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToHclTerraform, true)(struct!.weightedBackendServices),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeUrlMapPathMatcherRouteRulesRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeUrlMapPathMatcherRouteRulesRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicy = this._cachePolicy?.internalValue;
    }
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._faultInjectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultInjectionPolicy = this._faultInjectionPolicy?.internalValue;
    }
    if (this._maxStreamDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStreamDuration = this._maxStreamDuration?.internalValue;
    }
    if (this._requestMirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirrorPolicy = this._requestMirrorPolicy?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    if (this._weightedBackendServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedBackendServices = this._weightedBackendServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cachePolicy.internalValue = undefined;
      this._corsPolicy.internalValue = undefined;
      this._faultInjectionPolicy.internalValue = undefined;
      this._maxStreamDuration.internalValue = undefined;
      this._requestMirrorPolicy.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
      this._weightedBackendServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cachePolicy.internalValue = value.cachePolicy;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._faultInjectionPolicy.internalValue = value.faultInjectionPolicy;
      this._maxStreamDuration.internalValue = value.maxStreamDuration;
      this._requestMirrorPolicy.internalValue = value.requestMirrorPolicy;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
      this._urlRewrite.internalValue = value.urlRewrite;
      this._weightedBackendServices.internalValue = value.weightedBackendServices;
    }
  }

  // cache_policy - computed: false, optional: true, required: false
  private _cachePolicy = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyOutputReference(this, "cache_policy");
  public get cachePolicy() {
    return this._cachePolicy;
  }
  public putCachePolicy(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy) {
    this._cachePolicy.internalValue = value;
  }
  public resetCachePolicy() {
    this._cachePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyInput() {
    return this._cachePolicy.internalValue;
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy) {
    this._faultInjectionPolicy.internalValue = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy.internalValue;
  }

  // max_stream_duration - computed: false, optional: true, required: false
  private _maxStreamDuration = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationOutputReference(this, "max_stream_duration");
  public get maxStreamDuration() {
    return this._maxStreamDuration;
  }
  public putMaxStreamDuration(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration) {
    this._maxStreamDuration.internalValue = value;
  }
  public resetMaxStreamDuration() {
    this._maxStreamDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStreamDurationInput() {
    return this._maxStreamDuration.internalValue;
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy) {
    this._requestMirrorPolicy.internalValue = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList(this, "weighted_backend_services", false);
  public get weightedBackendServices() {
    return this._weightedBackendServices;
  }
  public putWeightedBackendServices(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktf.IResolvable) {
    this._weightedBackendServices.internalValue = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices.internalValue;
  }
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
  * supplied in the request. The value must be between 1 and 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#host_redirect GoogleComputeUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set
  * to false, the URL scheme of the redirected request will remain the same as that
  * of the request. This must only be set for UrlMaps used in TargetHttpProxys.
  * Setting this true for TargetHttpsProxy is not permitted. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#https_redirect GoogleComputeUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
  * supplied in the request. Only one of pathRedirect or prefixRedirect must be
  * specified. The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#path_redirect GoogleComputeUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
  * retaining the remaining portion of the URL before redirecting the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#prefix_redirect GoogleComputeUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:
  * 
  * * MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
  * 
  * * FOUND, which corresponds to 302.
  * 
  * * SEE_OTHER which corresponds to 303.
  * 
  * * TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method will be retained.
  * 
  * * PERMANENT_REDIRECT, which corresponds to 308. In this case, the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#redirect_response_code GoogleComputeUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed
  * prior to redirecting the request. If set to false, the query portion of the
  * original URL is retained. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#strip_query GoogleComputeUrlMap#strip_query}
  */
  readonly stripQuery?: boolean | cdktf.IResolvable;
}

export function googleComputeUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirectOutputReference | GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}


export function googleComputeUrlMapPathMatcherRouteRulesUrlRedirectToHclTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirectOutputReference | GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_redirect: {
      value: cdktf.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_redirect: {
      value: cdktf.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_redirect: {
      value: cdktf.stringToHclTerraform(struct!.prefixRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_response_code: {
      value: cdktf.stringToHclTerraform(struct!.redirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_query: {
      value: cdktf.booleanToHclTerraform(struct!.stripQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: true, required: false
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  public resetStripQuery() {
    this._stripQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface GoogleComputeUrlMapPathMatcherRouteRules {
  /**
  * For routeRules within a given pathMatcher, priority determines the order
  * in which load balancer will interpret routeRules. RouteRules are evaluated
  * in order of priority, from the lowest to highest number. The priority of
  * a rule decreases as its number increases (1, 2, 3, N+1). The first rule
  * that matches the request is applied.
  * 
  * You cannot configure two or more routeRules with the same priority.
  * Priority for each rule must be set to a number between 0 and
  * 2147483647 inclusive.
  * 
  * Priority numbers can have gaps, which enable you to add or remove rules
  * in the future without affecting the rest of the rules. For example,
  * 1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers to which
  * you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the
  * future without any impact on existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#priority GoogleComputeUrlMap#priority}
  */
  readonly priority: number;
  /**
  * The backend service resource to which traffic is
  * directed if this rule is matched. If routeAction is additionally specified,
  * advanced routing actions like URL Rewrites, etc. take effect prior to sending
  * the request to the backend. However, if service is specified, routeAction cannot
  * contain any weightedBackendService s. Conversely, if routeAction specifies any
  * weightedBackendServices, service must not be specified. Only one of urlRedirect,
  * service or routeAction.weightedBackendService must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#service GoogleComputeUrlMap#service}
  */
  readonly service?: string;
  /**
  * custom_error_response_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#custom_error_response_policy GoogleComputeUrlMap#custom_error_response_policy}
  */
  readonly customErrorResponsePolicy?: GoogleComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#header_action GoogleComputeUrlMap#header_action}
  */
  readonly headerAction?: GoogleComputeUrlMapPathMatcherRouteRulesHeaderAction;
  /**
  * http_filter_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#http_filter_configs GoogleComputeUrlMap#http_filter_configs}
  */
  readonly httpFilterConfigs?: GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterConfigs[] | cdktf.IResolvable;
  /**
  * http_filter_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#http_filter_metadata GoogleComputeUrlMap#http_filter_metadata}
  */
  readonly httpFilterMetadata?: GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterMetadata[] | cdktf.IResolvable;
  /**
  * match_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#match_rules GoogleComputeUrlMap#match_rules}
  */
  readonly matchRules?: GoogleComputeUrlMapPathMatcherRouteRulesMatchRules[] | cdktf.IResolvable;
  /**
  * route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#route_action GoogleComputeUrlMap#route_action}
  */
  readonly routeAction?: GoogleComputeUrlMapPathMatcherRouteRulesRouteAction;
  /**
  * url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#url_redirect GoogleComputeUrlMap#url_redirect}
  */
  readonly urlRedirect?: GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirect;
}

export function googleComputeUrlMapPathMatcherRouteRulesToTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    service: cdktf.stringToTerraform(struct!.service),
    custom_error_response_policy: googleComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyToTerraform(struct!.customErrorResponsePolicy),
    header_action: googleComputeUrlMapPathMatcherRouteRulesHeaderActionToTerraform(struct!.headerAction),
    http_filter_configs: cdktf.listMapper(googleComputeUrlMapPathMatcherRouteRulesHttpFilterConfigsToTerraform, true)(struct!.httpFilterConfigs),
    http_filter_metadata: cdktf.listMapper(googleComputeUrlMapPathMatcherRouteRulesHttpFilterMetadataToTerraform, true)(struct!.httpFilterMetadata),
    match_rules: cdktf.listMapper(googleComputeUrlMapPathMatcherRouteRulesMatchRulesToTerraform, true)(struct!.matchRules),
    route_action: googleComputeUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct!.routeAction),
    url_redirect: googleComputeUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct!.urlRedirect),
  }
}


export function googleComputeUrlMapPathMatcherRouteRulesToHclTerraform(struct?: GoogleComputeUrlMapPathMatcherRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_error_response_policy: {
      value: googleComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyToHclTerraform(struct!.customErrorResponsePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyList",
    },
    header_action: {
      value: googleComputeUrlMapPathMatcherRouteRulesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesHeaderActionList",
    },
    http_filter_configs: {
      value: cdktf.listMapperHcl(googleComputeUrlMapPathMatcherRouteRulesHttpFilterConfigsToHclTerraform, true)(struct!.httpFilterConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterConfigsList",
    },
    http_filter_metadata: {
      value: cdktf.listMapperHcl(googleComputeUrlMapPathMatcherRouteRulesHttpFilterMetadataToHclTerraform, true)(struct!.httpFilterMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterMetadataList",
    },
    match_rules: {
      value: cdktf.listMapperHcl(googleComputeUrlMapPathMatcherRouteRulesMatchRulesToHclTerraform, true)(struct!.matchRules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesList",
    },
    route_action: {
      value: googleComputeUrlMapPathMatcherRouteRulesRouteActionToHclTerraform(struct!.routeAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesRouteActionList",
    },
    url_redirect: {
      value: googleComputeUrlMapPathMatcherRouteRulesUrlRedirectToHclTerraform(struct!.urlRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeUrlMapPathMatcherRouteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeUrlMapPathMatcherRouteRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._customErrorResponsePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorResponsePolicy = this._customErrorResponsePolicy?.internalValue;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    if (this._httpFilterConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterConfigs = this._httpFilterConfigs?.internalValue;
    }
    if (this._httpFilterMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterMetadata = this._httpFilterMetadata?.internalValue;
    }
    if (this._matchRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRules = this._matchRules?.internalValue;
    }
    if (this._routeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAction = this._routeAction?.internalValue;
    }
    if (this._urlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRedirect = this._urlRedirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeUrlMapPathMatcherRouteRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._service = undefined;
      this._customErrorResponsePolicy.internalValue = undefined;
      this._headerAction.internalValue = undefined;
      this._httpFilterConfigs.internalValue = undefined;
      this._httpFilterMetadata.internalValue = undefined;
      this._matchRules.internalValue = undefined;
      this._routeAction.internalValue = undefined;
      this._urlRedirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._service = value.service;
      this._customErrorResponsePolicy.internalValue = value.customErrorResponsePolicy;
      this._headerAction.internalValue = value.headerAction;
      this._httpFilterConfigs.internalValue = value.httpFilterConfigs;
      this._httpFilterMetadata.internalValue = value.httpFilterMetadata;
      this._matchRules.internalValue = value.matchRules;
      this._routeAction.internalValue = value.routeAction;
      this._urlRedirect.internalValue = value.urlRedirect;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // custom_error_response_policy - computed: false, optional: true, required: false
  private _customErrorResponsePolicy = new GoogleComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyOutputReference(this, "custom_error_response_policy");
  public get customErrorResponsePolicy() {
    return this._customErrorResponsePolicy;
  }
  public putCustomErrorResponsePolicy(value: GoogleComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy) {
    this._customErrorResponsePolicy.internalValue = value;
  }
  public resetCustomErrorResponsePolicy() {
    this._customErrorResponsePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorResponsePolicyInput() {
    return this._customErrorResponsePolicy.internalValue;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new GoogleComputeUrlMapPathMatcherRouteRulesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: GoogleComputeUrlMapPathMatcherRouteRulesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // http_filter_configs - computed: false, optional: true, required: false
  private _httpFilterConfigs = new GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterConfigsList(this, "http_filter_configs", false);
  public get httpFilterConfigs() {
    return this._httpFilterConfigs;
  }
  public putHttpFilterConfigs(value: GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterConfigs[] | cdktf.IResolvable) {
    this._httpFilterConfigs.internalValue = value;
  }
  public resetHttpFilterConfigs() {
    this._httpFilterConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterConfigsInput() {
    return this._httpFilterConfigs.internalValue;
  }

  // http_filter_metadata - computed: false, optional: true, required: false
  private _httpFilterMetadata = new GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterMetadataList(this, "http_filter_metadata", false);
  public get httpFilterMetadata() {
    return this._httpFilterMetadata;
  }
  public putHttpFilterMetadata(value: GoogleComputeUrlMapPathMatcherRouteRulesHttpFilterMetadata[] | cdktf.IResolvable) {
    this._httpFilterMetadata.internalValue = value;
  }
  public resetHttpFilterMetadata() {
    this._httpFilterMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterMetadataInput() {
    return this._httpFilterMetadata.internalValue;
  }

  // match_rules - computed: false, optional: true, required: false
  private _matchRules = new GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesList(this, "match_rules", false);
  public get matchRules() {
    return this._matchRules;
  }
  public putMatchRules(value: GoogleComputeUrlMapPathMatcherRouteRulesMatchRules[] | cdktf.IResolvable) {
    this._matchRules.internalValue = value;
  }
  public resetMatchRules() {
    this._matchRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRulesInput() {
    return this._matchRules.internalValue;
  }

  // route_action - computed: false, optional: true, required: false
  private _routeAction = new GoogleComputeUrlMapPathMatcherRouteRulesRouteActionOutputReference(this, "route_action");
  public get routeAction() {
    return this._routeAction;
  }
  public putRouteAction(value: GoogleComputeUrlMapPathMatcherRouteRulesRouteAction) {
    this._routeAction.internalValue = value;
  }
  public resetRouteAction() {
    this._routeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeActionInput() {
    return this._routeAction.internalValue;
  }

  // url_redirect - computed: false, optional: true, required: false
  private _urlRedirect = new GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirectOutputReference(this, "url_redirect");
  public get urlRedirect() {
    return this._urlRedirect;
  }
  public putUrlRedirect(value: GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirect) {
    this._urlRedirect.internalValue = value;
  }
  public resetUrlRedirect() {
    this._urlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRedirectInput() {
    return this._urlRedirect.internalValue;
  }
}

export class GoogleComputeUrlMapPathMatcherRouteRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeUrlMapPathMatcherRouteRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeUrlMapPathMatcherRouteRulesOutputReference {
    return new GoogleComputeUrlMapPathMatcherRouteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeUrlMapPathMatcher {
  /**
  * The backend service or backend bucket to use when none of the given paths match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#default_service GoogleComputeUrlMap#default_service}
  */
  readonly defaultService?: string;
  /**
  * An optional description of this resource. Provide this property when you create
  * the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#description GoogleComputeUrlMap#description}
  */
  readonly description?: string;
  /**
  * The name to which this PathMatcher is referred by the HostRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#name GoogleComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * default_custom_error_response_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#default_custom_error_response_policy GoogleComputeUrlMap#default_custom_error_response_policy}
  */
  readonly defaultCustomErrorResponsePolicy?: GoogleComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy;
  /**
  * default_route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#default_route_action GoogleComputeUrlMap#default_route_action}
  */
  readonly defaultRouteAction?: GoogleComputeUrlMapPathMatcherDefaultRouteAction;
  /**
  * default_url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#default_url_redirect GoogleComputeUrlMap#default_url_redirect}
  */
  readonly defaultUrlRedirect?: GoogleComputeUrlMapPathMatcherDefaultUrlRedirect;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#header_action GoogleComputeUrlMap#header_action}
  */
  readonly headerAction?: GoogleComputeUrlMapPathMatcherHeaderAction;
  /**
  * path_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#path_rule GoogleComputeUrlMap#path_rule}
  */
  readonly pathRule?: GoogleComputeUrlMapPathMatcherPathRule[] | cdktf.IResolvable;
  /**
  * route_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#route_rules GoogleComputeUrlMap#route_rules}
  */
  readonly routeRules?: GoogleComputeUrlMapPathMatcherRouteRules[] | cdktf.IResolvable;
}

export function googleComputeUrlMapPathMatcherToTerraform(struct?: GoogleComputeUrlMapPathMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_service: cdktf.stringToTerraform(struct!.defaultService),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    default_custom_error_response_policy: googleComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyToTerraform(struct!.defaultCustomErrorResponsePolicy),
    default_route_action: googleComputeUrlMapPathMatcherDefaultRouteActionToTerraform(struct!.defaultRouteAction),
    default_url_redirect: googleComputeUrlMapPathMatcherDefaultUrlRedirectToTerraform(struct!.defaultUrlRedirect),
    header_action: googleComputeUrlMapPathMatcherHeaderActionToTerraform(struct!.headerAction),
    path_rule: cdktf.listMapper(googleComputeUrlMapPathMatcherPathRuleToTerraform, true)(struct!.pathRule),
    route_rules: cdktf.listMapper(googleComputeUrlMapPathMatcherRouteRulesToTerraform, true)(struct!.routeRules),
  }
}


export function googleComputeUrlMapPathMatcherToHclTerraform(struct?: GoogleComputeUrlMapPathMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_service: {
      value: cdktf.stringToHclTerraform(struct!.defaultService),
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
    default_custom_error_response_policy: {
      value: googleComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyToHclTerraform(struct!.defaultCustomErrorResponsePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyList",
    },
    default_route_action: {
      value: googleComputeUrlMapPathMatcherDefaultRouteActionToHclTerraform(struct!.defaultRouteAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherDefaultRouteActionList",
    },
    default_url_redirect: {
      value: googleComputeUrlMapPathMatcherDefaultUrlRedirectToHclTerraform(struct!.defaultUrlRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherDefaultUrlRedirectList",
    },
    header_action: {
      value: googleComputeUrlMapPathMatcherHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherHeaderActionList",
    },
    path_rule: {
      value: cdktf.listMapperHcl(googleComputeUrlMapPathMatcherPathRuleToHclTerraform, true)(struct!.pathRule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherPathRuleList",
    },
    route_rules: {
      value: cdktf.listMapperHcl(googleComputeUrlMapPathMatcherRouteRulesToHclTerraform, true)(struct!.routeRules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapPathMatcherRouteRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeUrlMapPathMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeUrlMapPathMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultService !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultService = this._defaultService;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._defaultCustomErrorResponsePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCustomErrorResponsePolicy = this._defaultCustomErrorResponsePolicy?.internalValue;
    }
    if (this._defaultRouteAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteAction = this._defaultRouteAction?.internalValue;
    }
    if (this._defaultUrlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUrlRedirect = this._defaultUrlRedirect?.internalValue;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    if (this._pathRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRule = this._pathRule?.internalValue;
    }
    if (this._routeRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRules = this._routeRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeUrlMapPathMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultService = undefined;
      this._description = undefined;
      this._name = undefined;
      this._defaultCustomErrorResponsePolicy.internalValue = undefined;
      this._defaultRouteAction.internalValue = undefined;
      this._defaultUrlRedirect.internalValue = undefined;
      this._headerAction.internalValue = undefined;
      this._pathRule.internalValue = undefined;
      this._routeRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultService = value.defaultService;
      this._description = value.description;
      this._name = value.name;
      this._defaultCustomErrorResponsePolicy.internalValue = value.defaultCustomErrorResponsePolicy;
      this._defaultRouteAction.internalValue = value.defaultRouteAction;
      this._defaultUrlRedirect.internalValue = value.defaultUrlRedirect;
      this._headerAction.internalValue = value.headerAction;
      this._pathRule.internalValue = value.pathRule;
      this._routeRules.internalValue = value.routeRules;
    }
  }

  // default_service - computed: false, optional: true, required: false
  private _defaultService?: string; 
  public get defaultService() {
    return this.getStringAttribute('default_service');
  }
  public set defaultService(value: string) {
    this._defaultService = value;
  }
  public resetDefaultService() {
    this._defaultService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceInput() {
    return this._defaultService;
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

  // default_custom_error_response_policy - computed: false, optional: true, required: false
  private _defaultCustomErrorResponsePolicy = new GoogleComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyOutputReference(this, "default_custom_error_response_policy");
  public get defaultCustomErrorResponsePolicy() {
    return this._defaultCustomErrorResponsePolicy;
  }
  public putDefaultCustomErrorResponsePolicy(value: GoogleComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy) {
    this._defaultCustomErrorResponsePolicy.internalValue = value;
  }
  public resetDefaultCustomErrorResponsePolicy() {
    this._defaultCustomErrorResponsePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCustomErrorResponsePolicyInput() {
    return this._defaultCustomErrorResponsePolicy.internalValue;
  }

  // default_route_action - computed: false, optional: true, required: false
  private _defaultRouteAction = new GoogleComputeUrlMapPathMatcherDefaultRouteActionOutputReference(this, "default_route_action");
  public get defaultRouteAction() {
    return this._defaultRouteAction;
  }
  public putDefaultRouteAction(value: GoogleComputeUrlMapPathMatcherDefaultRouteAction) {
    this._defaultRouteAction.internalValue = value;
  }
  public resetDefaultRouteAction() {
    this._defaultRouteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteActionInput() {
    return this._defaultRouteAction.internalValue;
  }

  // default_url_redirect - computed: false, optional: true, required: false
  private _defaultUrlRedirect = new GoogleComputeUrlMapPathMatcherDefaultUrlRedirectOutputReference(this, "default_url_redirect");
  public get defaultUrlRedirect() {
    return this._defaultUrlRedirect;
  }
  public putDefaultUrlRedirect(value: GoogleComputeUrlMapPathMatcherDefaultUrlRedirect) {
    this._defaultUrlRedirect.internalValue = value;
  }
  public resetDefaultUrlRedirect() {
    this._defaultUrlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUrlRedirectInput() {
    return this._defaultUrlRedirect.internalValue;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new GoogleComputeUrlMapPathMatcherHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: GoogleComputeUrlMapPathMatcherHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // path_rule - computed: false, optional: true, required: false
  private _pathRule = new GoogleComputeUrlMapPathMatcherPathRuleList(this, "path_rule", false);
  public get pathRule() {
    return this._pathRule;
  }
  public putPathRule(value: GoogleComputeUrlMapPathMatcherPathRule[] | cdktf.IResolvable) {
    this._pathRule.internalValue = value;
  }
  public resetPathRule() {
    this._pathRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRuleInput() {
    return this._pathRule.internalValue;
  }

  // route_rules - computed: false, optional: true, required: false
  private _routeRules = new GoogleComputeUrlMapPathMatcherRouteRulesList(this, "route_rules", false);
  public get routeRules() {
    return this._routeRules;
  }
  public putRouteRules(value: GoogleComputeUrlMapPathMatcherRouteRules[] | cdktf.IResolvable) {
    this._routeRules.internalValue = value;
  }
  public resetRouteRules() {
    this._routeRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRulesInput() {
    return this._routeRules.internalValue;
  }
}

export class GoogleComputeUrlMapPathMatcherList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeUrlMapPathMatcher[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeUrlMapPathMatcherOutputReference {
    return new GoogleComputeUrlMapPathMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeUrlMapTestHeaders {
  /**
  * Header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#name GoogleComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#value GoogleComputeUrlMap#value}
  */
  readonly value: string;
}

export function googleComputeUrlMapTestHeadersToTerraform(struct?: GoogleComputeUrlMapTestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeUrlMapTestHeadersToHclTerraform(struct?: GoogleComputeUrlMapTestHeaders | cdktf.IResolvable): any {
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

export class GoogleComputeUrlMapTestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeUrlMapTestHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeUrlMapTestHeaders | cdktf.IResolvable | undefined) {
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

export class GoogleComputeUrlMapTestHeadersList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeUrlMapTestHeaders[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeUrlMapTestHeadersOutputReference {
    return new GoogleComputeUrlMapTestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeUrlMapTest {
  /**
  * Description of this test case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#description GoogleComputeUrlMap#description}
  */
  readonly description?: string;
  /**
  * The expected output URL evaluated by the load balancer containing the scheme, host, path and query parameters.
  * 
  * For rules that forward requests to backends, the test passes only when expectedOutputUrl matches the request forwarded by the load balancer to backends. For rules with urlRewrite, the test verifies that the forwarded request matches hostRewrite and pathPrefixRewrite in the urlRewrite action. When service is specified, expectedOutputUrl's scheme is ignored.
  * 
  * For rules with urlRedirect, the test passes only if expectedOutputUrl matches the URL in the load balancer's redirect response. If urlRedirect specifies httpsRedirect, the test passes only if the scheme in expectedOutputUrl is also set to HTTPS. If urlRedirect specifies stripQuery, the test passes only if expectedOutputUrl does not contain any query parameters.
  * 
  * expectedOutputUrl is optional when service is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#expected_output_url GoogleComputeUrlMap#expected_output_url}
  */
  readonly expectedOutputUrl?: string;
  /**
  * For rules with urlRedirect, the test passes only if expectedRedirectResponseCode matches the HTTP status code in load balancer's redirect response.
  * 
  * expectedRedirectResponseCode cannot be set when service is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#expected_redirect_response_code GoogleComputeUrlMap#expected_redirect_response_code}
  */
  readonly expectedRedirectResponseCode?: number;
  /**
  * Host portion of the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#host GoogleComputeUrlMap#host}
  */
  readonly host: string;
  /**
  * Path portion of the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#path GoogleComputeUrlMap#path}
  */
  readonly path: string;
  /**
  * The backend service or backend bucket link that should be matched by this test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#service GoogleComputeUrlMap#service}
  */
  readonly service?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#headers GoogleComputeUrlMap#headers}
  */
  readonly headers?: GoogleComputeUrlMapTestHeaders[] | cdktf.IResolvable;
}

export function googleComputeUrlMapTestToTerraform(struct?: GoogleComputeUrlMapTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expected_output_url: cdktf.stringToTerraform(struct!.expectedOutputUrl),
    expected_redirect_response_code: cdktf.numberToTerraform(struct!.expectedRedirectResponseCode),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
    headers: cdktf.listMapper(googleComputeUrlMapTestHeadersToTerraform, true)(struct!.headers),
  }
}


export function googleComputeUrlMapTestToHclTerraform(struct?: GoogleComputeUrlMapTest | cdktf.IResolvable): any {
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
    expected_output_url: {
      value: cdktf.stringToHclTerraform(struct!.expectedOutputUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_redirect_response_code: {
      value: cdktf.numberToHclTerraform(struct!.expectedRedirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    headers: {
      value: cdktf.listMapperHcl(googleComputeUrlMapTestHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeUrlMapTestHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeUrlMapTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeUrlMapTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expectedOutputUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedOutputUrl = this._expectedOutputUrl;
    }
    if (this._expectedRedirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedRedirectResponseCode = this._expectedRedirectResponseCode;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeUrlMapTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._expectedOutputUrl = undefined;
      this._expectedRedirectResponseCode = undefined;
      this._host = undefined;
      this._path = undefined;
      this._service = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._expectedOutputUrl = value.expectedOutputUrl;
      this._expectedRedirectResponseCode = value.expectedRedirectResponseCode;
      this._host = value.host;
      this._path = value.path;
      this._service = value.service;
      this._headers.internalValue = value.headers;
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

  // expected_output_url - computed: false, optional: true, required: false
  private _expectedOutputUrl?: string; 
  public get expectedOutputUrl() {
    return this.getStringAttribute('expected_output_url');
  }
  public set expectedOutputUrl(value: string) {
    this._expectedOutputUrl = value;
  }
  public resetExpectedOutputUrl() {
    this._expectedOutputUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedOutputUrlInput() {
    return this._expectedOutputUrl;
  }

  // expected_redirect_response_code - computed: false, optional: true, required: false
  private _expectedRedirectResponseCode?: number; 
  public get expectedRedirectResponseCode() {
    return this.getNumberAttribute('expected_redirect_response_code');
  }
  public set expectedRedirectResponseCode(value: number) {
    this._expectedRedirectResponseCode = value;
  }
  public resetExpectedRedirectResponseCode() {
    this._expectedRedirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedRedirectResponseCodeInput() {
    return this._expectedRedirectResponseCode;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // headers - computed: false, optional: true, required: false
  private _headers = new GoogleComputeUrlMapTestHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: GoogleComputeUrlMapTestHeaders[] | cdktf.IResolvable) {
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

export class GoogleComputeUrlMapTestList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeUrlMapTest[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeUrlMapTestOutputReference {
    return new GoogleComputeUrlMapTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeUrlMapTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#create GoogleComputeUrlMap#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#delete GoogleComputeUrlMap#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_url_map#update GoogleComputeUrlMap#update}
  */
  readonly update?: string;
}

export function googleComputeUrlMapTimeoutsToTerraform(struct?: GoogleComputeUrlMapTimeouts | cdktf.IResolvable): any {
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


export function googleComputeUrlMapTimeoutsToHclTerraform(struct?: GoogleComputeUrlMapTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeUrlMapTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeUrlMapTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeUrlMapTimeouts | cdktf.IResolvable | undefined) {
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
