// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeOrganizationSecurityPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Action to perform when the client connection triggers the rule. Valid actions are:
  * "allow": allow access to target.
  * "deny": deny access to target.
  * "goto_next": forward the request to the next hierarchical policy for evaluation.
  * "redirect": redirect to a different target. Parameters for this action can be configured via redirectOptions. Only EXTERNAL_302 redirect type is supported for organization security policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#action GoogleComputeOrganizationSecurityPolicyRule#action}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#deletion_policy GoogleComputeOrganizationSecurityPolicyRule#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}
  */
  readonly description?: string;
  /**
  * The direction in which this rule applies. If unspecified an INGRESS rule is created.
  * This field may only be specified when the versionedExpr is set to FIREWALL. Possible values: ["INGRESS", "EGRESS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#direction GoogleComputeOrganizationSecurityPolicyRule#direction}
  */
  readonly direction?: string;
  /**
  * Denotes whether to enable logging for a particular rule.
  * If logging is enabled, logs will be exported to the
  * configured export destination in Stackdriver.
  * This field may only be specified when the versionedExpr is set to FIREWALL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#enable_logging GoogleComputeOrganizationSecurityPolicyRule#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#id GoogleComputeOrganizationSecurityPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the OrganizationSecurityPolicy this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#policy_id GoogleComputeOrganizationSecurityPolicyRule#policy_id}
  */
  readonly policyId: string;
  /**
  * If set to true, the specified action is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#preview GoogleComputeOrganizationSecurityPolicyRule#preview}
  */
  readonly preview?: boolean | cdktf.IResolvable;
  /**
  * An integer indicating the priority of a rule in the list. The priority must be a value
  * between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
  * highest priority and 2147483647 is the lowest prority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#priority GoogleComputeOrganizationSecurityPolicyRule#priority}
  */
  readonly priority: number;
  /**
  * A list of network resource URLs to which this rule applies.
  * This field allows you to control which network's VMs get
  * this rule. If this field is left blank, all VMs
  * within the organization will receive the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#target_resources GoogleComputeOrganizationSecurityPolicyRule#target_resources}
  */
  readonly targetResources?: string[];
  /**
  * A list of service accounts indicating the sets of
  * instances that are applied with this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#target_service_accounts GoogleComputeOrganizationSecurityPolicyRule#target_service_accounts}
  */
  readonly targetServiceAccounts?: string[];
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#header_action GoogleComputeOrganizationSecurityPolicyRule#header_action}
  */
  readonly headerAction?: GoogleComputeOrganizationSecurityPolicyRuleHeaderAction;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#match GoogleComputeOrganizationSecurityPolicyRule#match}
  */
  readonly match: GoogleComputeOrganizationSecurityPolicyRuleMatch;
  /**
  * preconfigured_waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#preconfigured_waf_config GoogleComputeOrganizationSecurityPolicyRule#preconfigured_waf_config}
  */
  readonly preconfiguredWafConfig?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig;
  /**
  * redirect_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#redirect_options GoogleComputeOrganizationSecurityPolicyRule#redirect_options}
  */
  readonly redirectOptions?: GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#timeouts GoogleComputeOrganizationSecurityPolicyRule#timeouts}
  */
  readonly timeouts?: GoogleComputeOrganizationSecurityPolicyRuleTimeouts;
}
export interface GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds {
  /**
  * The name of the header to set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#header_name GoogleComputeOrganizationSecurityPolicyRule#header_name}
  */
  readonly headerName?: string;
  /**
  * The value to set the named header to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#header_value GoogleComputeOrganizationSecurityPolicyRule#header_value}
  */
  readonly headerValue?: string;
}

export function googleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function googleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
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
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference {
    return new GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRuleHeaderAction {
  /**
  * request_headers_to_adds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#request_headers_to_adds GoogleComputeOrganizationSecurityPolicyRule#request_headers_to_adds}
  */
  readonly requestHeadersToAdds?: GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds[] | cdktf.IResolvable;
}

export function googleComputeOrganizationSecurityPolicyRuleHeaderActionToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference | GoogleComputeOrganizationSecurityPolicyRuleHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_adds: cdktf.listMapper(googleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsToTerraform, true)(struct!.requestHeadersToAdds),
  }
}


export function googleComputeOrganizationSecurityPolicyRuleHeaderActionToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference | GoogleComputeOrganizationSecurityPolicyRuleHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_adds: {
      value: cdktf.listMapperHcl(googleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsToHclTerraform, true)(struct!.requestHeadersToAdds),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToAdds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdds = this._requestHeadersToAdds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToAdds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToAdds.internalValue = value.requestHeadersToAdds;
    }
  }

  // request_headers_to_adds - computed: false, optional: true, required: false
  private _requestHeadersToAdds = new GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(this, "request_headers_to_adds", false);
  public get requestHeadersToAdds() {
    return this._requestHeadersToAdds;
  }
  public putRequestHeadersToAdds(value: GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds[] | cdktf.IResolvable) {
    this._requestHeadersToAdds.internalValue = value;
  }
  public resetRequestHeadersToAdds() {
    this._requestHeadersToAdds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddsInput() {
    return this._requestHeadersToAdds.internalValue;
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config {
  /**
  * The IP protocol to which this rule applies. The protocol
  * type is required when creating a firewall rule.
  * This value can either be one of the following well
  * known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
  * or the IP protocol number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#ip_protocol GoogleComputeOrganizationSecurityPolicyRule#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * An optional list of ports to which this rule applies. This field
  * is only applicable for UDP or TCP protocol. Each entry must be
  * either an integer or a range. If not specified, this rule
  * applies to connections through any port.
  * 
  * Example inputs include: ["22"], ["80","443"], and
  * ["12345-12349"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#ports GoogleComputeOrganizationSecurityPolicyRule#ports}
  */
  readonly ports?: string[];
}

export function googleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function googleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipProtocol = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipProtocol = value.ipProtocol;
      this._ports = value.ports;
    }
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference {
    return new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRuleMatchConfig {
  /**
  * Destination IP address range in CIDR format. Required for EGRESS rules.
  * This field may only be specified when versionedExpr is set to FIREWALL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#dest_ip_ranges GoogleComputeOrganizationSecurityPolicyRule#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * Source IP address range in CIDR format. Required for
  * INGRESS rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#src_ip_ranges GoogleComputeOrganizationSecurityPolicyRule#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * layer4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#layer4_config GoogleComputeOrganizationSecurityPolicyRule#layer4_config}
  */
  readonly layer4Config?: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config[] | cdktf.IResolvable;
}

export function googleComputeOrganizationSecurityPolicyRuleMatchConfigToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference | GoogleComputeOrganizationSecurityPolicyRuleMatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destIpRanges),
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcIpRanges),
    layer4_config: cdktf.listMapper(googleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigToTerraform, true)(struct!.layer4Config),
  }
}


export function googleComputeOrganizationSecurityPolicyRuleMatchConfigToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference | GoogleComputeOrganizationSecurityPolicyRuleMatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    layer4_config: {
      value: cdktf.listMapperHcl(googleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigToHclTerraform, true)(struct!.layer4Config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleMatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpRanges = this._destIpRanges;
    }
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    if (this._layer4Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer4Config = this._layer4Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleMatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destIpRanges = undefined;
      this._srcIpRanges = undefined;
      this._layer4Config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destIpRanges = value.destIpRanges;
      this._srcIpRanges = value.srcIpRanges;
      this._layer4Config.internalValue = value.layer4Config;
    }
  }

  // dest_ip_ranges - computed: false, optional: true, required: false
  private _destIpRanges?: string[]; 
  public get destIpRanges() {
    return this.getListAttribute('dest_ip_ranges');
  }
  public set destIpRanges(value: string[]) {
    this._destIpRanges = value;
  }
  public resetDestIpRanges() {
    this._destIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpRangesInput() {
    return this._destIpRanges;
  }

  // src_ip_ranges - computed: false, optional: true, required: false
  private _srcIpRanges?: string[]; 
  public get srcIpRanges() {
    return this.getListAttribute('src_ip_ranges');
  }
  public set srcIpRanges(value: string[]) {
    this._srcIpRanges = value;
  }
  public resetSrcIpRanges() {
    this._srcIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpRangesInput() {
    return this._srcIpRanges;
  }

  // layer4_config - computed: false, optional: true, required: false
  private _layer4Config = new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList(this, "layer4_config", false);
  public get layer4Config() {
    return this._layer4Config;
  }
  public putLayer4Config(value: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config[] | cdktf.IResolvable) {
    this._layer4Config.internalValue = value;
  }
  public resetLayer4Config() {
    this._layer4Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer4ConfigInput() {
    return this._layer4Config.internalValue;
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRuleMatchExpr {
  /**
  * Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#expression GoogleComputeOrganizationSecurityPolicyRule#expression}
  */
  readonly expression: string;
}

export function googleComputeOrganizationSecurityPolicyRuleMatchExprToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference | GoogleComputeOrganizationSecurityPolicyRuleMatchExpr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function googleComputeOrganizationSecurityPolicyRuleMatchExprToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference | GoogleComputeOrganizationSecurityPolicyRuleMatchExpr): any {
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

export class GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleMatchExpr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleMatchExpr | undefined) {
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
export interface GoogleComputeOrganizationSecurityPolicyRuleMatch {
  /**
  * A description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Preconfigured versioned expression. For organization security policy rules,
  * the only supported type is "SRC_IPS_V1".
  * **NOTE** : 'FIREWALL' type is deprecated. Please use 'google_compute_firewall_policy_rule' resource instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#versioned_expr GoogleComputeOrganizationSecurityPolicyRule#versioned_expr}
  */
  readonly versionedExpr?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#config GoogleComputeOrganizationSecurityPolicyRule#config}
  */
  readonly config?: GoogleComputeOrganizationSecurityPolicyRuleMatchConfig;
  /**
  * expr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#expr GoogleComputeOrganizationSecurityPolicyRule#expr}
  */
  readonly expr?: GoogleComputeOrganizationSecurityPolicyRuleMatchExpr;
}

export function googleComputeOrganizationSecurityPolicyRuleMatchToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference | GoogleComputeOrganizationSecurityPolicyRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    versioned_expr: cdktf.stringToTerraform(struct!.versionedExpr),
    config: googleComputeOrganizationSecurityPolicyRuleMatchConfigToTerraform(struct!.config),
    expr: googleComputeOrganizationSecurityPolicyRuleMatchExprToTerraform(struct!.expr),
  }
}


export function googleComputeOrganizationSecurityPolicyRuleMatchToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference | GoogleComputeOrganizationSecurityPolicyRuleMatch): any {
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
    versioned_expr: {
      value: cdktf.stringToHclTerraform(struct!.versionedExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: googleComputeOrganizationSecurityPolicyRuleMatchConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeOrganizationSecurityPolicyRuleMatchConfigList",
    },
    expr: {
      value: googleComputeOrganizationSecurityPolicyRuleMatchExprToHclTerraform(struct!.expr),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeOrganizationSecurityPolicyRuleMatchExprList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._versionedExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionedExpr = this._versionedExpr;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._expr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._versionedExpr = undefined;
      this._config.internalValue = undefined;
      this._expr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._versionedExpr = value.versionedExpr;
      this._config.internalValue = value.config;
      this._expr.internalValue = value.expr;
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

  // versioned_expr - computed: false, optional: true, required: false
  private _versionedExpr?: string; 
  public get versionedExpr() {
    return this.getStringAttribute('versioned_expr');
  }
  public set versionedExpr(value: string) {
    this._versionedExpr = value;
  }
  public resetVersionedExpr() {
    this._versionedExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionedExprInput() {
    return this._versionedExpr;
  }

  // config - computed: false, optional: true, required: false
  private _config = new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleComputeOrganizationSecurityPolicyRuleMatchConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // expr - computed: false, optional: true, required: false
  private _expr = new GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference(this, "expr");
  public get expr() {
    return this._expr;
  }
  public putExpr(value: GoogleComputeOrganizationSecurityPolicyRuleMatchExpr) {
    this._expr.internalValue = value;
  }
  public resetExpr() {
    this._expr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr.internalValue;
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#operator GoogleComputeOrganizationSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#value GoogleComputeOrganizationSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference {
    return new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#operator GoogleComputeOrganizationSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#value GoogleComputeOrganizationSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference {
    return new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#operator GoogleComputeOrganizationSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#value GoogleComputeOrganizationSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference {
    return new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#operator GoogleComputeOrganizationSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#value GoogleComputeOrganizationSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference {
    return new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion {
  /**
  * A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.
  * If omitted, it refers to all the rule IDs under the WAF rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#target_rule_ids GoogleComputeOrganizationSecurityPolicyRule#target_rule_ids}
  */
  readonly targetRuleIds?: string[];
  /**
  * Target WAF rule set to apply the preconfigured WAF exclusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#target_rule_set GoogleComputeOrganizationSecurityPolicyRule#target_rule_set}
  */
  readonly targetRuleSet: string;
  /**
  * request_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#request_cookie GoogleComputeOrganizationSecurityPolicyRule#request_cookie}
  */
  readonly requestCookie?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#request_header GoogleComputeOrganizationSecurityPolicyRule#request_header}
  */
  readonly requestHeader?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable;
  /**
  * request_query_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#request_query_param GoogleComputeOrganizationSecurityPolicyRule#request_query_param}
  */
  readonly requestQueryParam?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#request_uri GoogleComputeOrganizationSecurityPolicyRule#request_uri}
  */
  readonly requestUri?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable;
}

export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetRuleIds),
    target_rule_set: cdktf.stringToTerraform(struct!.targetRuleSet),
    request_cookie: cdktf.listMapper(googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToTerraform, true)(struct!.requestCookie),
    request_header: cdktf.listMapper(googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToTerraform, true)(struct!.requestHeader),
    request_query_param: cdktf.listMapper(googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToTerraform, true)(struct!.requestQueryParam),
    request_uri: cdktf.listMapper(googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToTerraform, true)(struct!.requestUri),
  }
}


export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_rule_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetRuleIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_rule_set: {
      value: cdktf.stringToHclTerraform(struct!.targetRuleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_cookie: {
      value: cdktf.listMapperHcl(googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToHclTerraform, true)(struct!.requestCookie),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList",
    },
    request_header: {
      value: cdktf.listMapperHcl(googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToHclTerraform, true)(struct!.requestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList",
    },
    request_query_param: {
      value: cdktf.listMapperHcl(googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform, true)(struct!.requestQueryParam),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList",
    },
    request_uri: {
      value: cdktf.listMapperHcl(googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToHclTerraform, true)(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetRuleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRuleIds = this._targetRuleIds;
    }
    if (this._targetRuleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRuleSet = this._targetRuleSet;
    }
    if (this._requestCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookie = this._requestCookie?.internalValue;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._requestQueryParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestQueryParam = this._requestQueryParam?.internalValue;
    }
    if (this._requestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetRuleIds = undefined;
      this._targetRuleSet = undefined;
      this._requestCookie.internalValue = undefined;
      this._requestHeader.internalValue = undefined;
      this._requestQueryParam.internalValue = undefined;
      this._requestUri.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetRuleIds = value.targetRuleIds;
      this._targetRuleSet = value.targetRuleSet;
      this._requestCookie.internalValue = value.requestCookie;
      this._requestHeader.internalValue = value.requestHeader;
      this._requestQueryParam.internalValue = value.requestQueryParam;
      this._requestUri.internalValue = value.requestUri;
    }
  }

  // target_rule_ids - computed: false, optional: true, required: false
  private _targetRuleIds?: string[]; 
  public get targetRuleIds() {
    return this.getListAttribute('target_rule_ids');
  }
  public set targetRuleIds(value: string[]) {
    this._targetRuleIds = value;
  }
  public resetTargetRuleIds() {
    this._targetRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleIdsInput() {
    return this._targetRuleIds;
  }

  // target_rule_set - computed: false, optional: false, required: true
  private _targetRuleSet?: string; 
  public get targetRuleSet() {
    return this.getStringAttribute('target_rule_set');
  }
  public set targetRuleSet(value: string) {
    this._targetRuleSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleSetInput() {
    return this._targetRuleSet;
  }

  // request_cookie - computed: false, optional: true, required: false
  private _requestCookie = new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(this, "request_cookie", false);
  public get requestCookie() {
    return this._requestCookie;
  }
  public putRequestCookie(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable) {
    this._requestCookie.internalValue = value;
  }
  public resetRequestCookie() {
    this._requestCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookieInput() {
    return this._requestCookie.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // request_query_param - computed: false, optional: true, required: false
  private _requestQueryParam = new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(this, "request_query_param", false);
  public get requestQueryParam() {
    return this._requestQueryParam;
  }
  public putRequestQueryParam(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable) {
    this._requestQueryParam.internalValue = value;
  }
  public resetRequestQueryParam() {
    this._requestQueryParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueryParamInput() {
    return this._requestQueryParam.internalValue;
  }

  // request_uri - computed: false, optional: true, required: false
  private _requestUri = new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable) {
    this._requestUri.internalValue = value;
  }
  public resetRequestUri() {
    this._requestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri.internalValue;
  }
}

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference {
    return new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig {
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#exclusion GoogleComputeOrganizationSecurityPolicyRule#exclusion}
  */
  readonly exclusion?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable;
}

export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference | GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.listMapper(googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionToTerraform, true)(struct!.exclusion),
  }
}


export function googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference | GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion: {
      value: cdktf.listMapperHcl(googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusion.internalValue = value.exclusion;
    }
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions {
  /**
  * Target for the redirect action. This is required if the type is EXTERNAL_302.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#target GoogleComputeOrganizationSecurityPolicyRule#target}
  */
  readonly target?: string;
  /**
  * Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#type GoogleComputeOrganizationSecurityPolicyRule#type}
  */
  readonly type: string;
}

export function googleComputeOrganizationSecurityPolicyRuleRedirectOptionsToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference | GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleComputeOrganizationSecurityPolicyRuleRedirectOptionsToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference | GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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

export class GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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
}
export interface GoogleComputeOrganizationSecurityPolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#create GoogleComputeOrganizationSecurityPolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#delete GoogleComputeOrganizationSecurityPolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#update GoogleComputeOrganizationSecurityPolicyRule#update}
  */
  readonly update?: string;
}

export function googleComputeOrganizationSecurityPolicyRuleTimeoutsToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleTimeouts | cdktf.IResolvable): any {
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


export function googleComputeOrganizationSecurityPolicyRuleTimeoutsToHclTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule google_compute_organization_security_policy_rule}
*/
export class GoogleComputeOrganizationSecurityPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_organization_security_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeOrganizationSecurityPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeOrganizationSecurityPolicyRule to import
  * @param importFromId The id of the existing GoogleComputeOrganizationSecurityPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeOrganizationSecurityPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_organization_security_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_organization_security_policy_rule google_compute_organization_security_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeOrganizationSecurityPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeOrganizationSecurityPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_organization_security_policy_rule',
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
    this._action = config.action;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._direction = config.direction;
    this._enableLogging = config.enableLogging;
    this._id = config.id;
    this._policyId = config.policyId;
    this._preview = config.preview;
    this._priority = config.priority;
    this._targetResources = config.targetResources;
    this._targetServiceAccounts = config.targetServiceAccounts;
    this._headerAction.internalValue = config.headerAction;
    this._match.internalValue = config.match;
    this._preconfiguredWafConfig.internalValue = config.preconfiguredWafConfig;
    this._redirectOptions.internalValue = config.redirectOptions;
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

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // preview - computed: false, optional: true, required: false
  private _preview?: boolean | cdktf.IResolvable; 
  public get preview() {
    return this.getBooleanAttribute('preview');
  }
  public set preview(value: boolean | cdktf.IResolvable) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview;
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

  // target_resources - computed: false, optional: true, required: false
  private _targetResources?: string[]; 
  public get targetResources() {
    return this.getListAttribute('target_resources');
  }
  public set targetResources(value: string[]) {
    this._targetResources = value;
  }
  public resetTargetResources() {
    this._targetResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourcesInput() {
    return this._targetResources;
  }

  // target_service_accounts - computed: false, optional: true, required: false
  private _targetServiceAccounts?: string[]; 
  public get targetServiceAccounts() {
    return this.getListAttribute('target_service_accounts');
  }
  public set targetServiceAccounts(value: string[]) {
    this._targetServiceAccounts = value;
  }
  public resetTargetServiceAccounts() {
    this._targetServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountsInput() {
    return this._targetServiceAccounts;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: GoogleComputeOrganizationSecurityPolicyRuleHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: GoogleComputeOrganizationSecurityPolicyRuleMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // preconfigured_waf_config - computed: false, optional: true, required: false
  private _preconfiguredWafConfig = new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference(this, "preconfigured_waf_config");
  public get preconfiguredWafConfig() {
    return this._preconfiguredWafConfig;
  }
  public putPreconfiguredWafConfig(value: GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig) {
    this._preconfiguredWafConfig.internalValue = value;
  }
  public resetPreconfiguredWafConfig() {
    this._preconfiguredWafConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconfiguredWafConfigInput() {
    return this._preconfiguredWafConfig.internalValue;
  }

  // redirect_options - computed: false, optional: true, required: false
  private _redirectOptions = new GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference(this, "redirect_options");
  public get redirectOptions() {
    return this._redirectOptions;
  }
  public putRedirectOptions(value: GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions) {
    this._redirectOptions.internalValue = value;
  }
  public resetRedirectOptions() {
    this._redirectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectOptionsInput() {
    return this._redirectOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeOrganizationSecurityPolicyRuleTimeouts) {
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
      direction: cdktf.stringToTerraform(this._direction),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.stringToTerraform(this._policyId),
      preview: cdktf.booleanToTerraform(this._preview),
      priority: cdktf.numberToTerraform(this._priority),
      target_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetResources),
      target_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetServiceAccounts),
      header_action: googleComputeOrganizationSecurityPolicyRuleHeaderActionToTerraform(this._headerAction.internalValue),
      match: googleComputeOrganizationSecurityPolicyRuleMatchToTerraform(this._match.internalValue),
      preconfigured_waf_config: googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigToTerraform(this._preconfiguredWafConfig.internalValue),
      redirect_options: googleComputeOrganizationSecurityPolicyRuleRedirectOptionsToTerraform(this._redirectOptions.internalValue),
      timeouts: googleComputeOrganizationSecurityPolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_logging: {
        value: cdktf.booleanToHclTerraform(this._enableLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview: {
        value: cdktf.booleanToHclTerraform(this._preview),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetResources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_service_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetServiceAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      header_action: {
        value: googleComputeOrganizationSecurityPolicyRuleHeaderActionToHclTerraform(this._headerAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeOrganizationSecurityPolicyRuleHeaderActionList",
      },
      match: {
        value: googleComputeOrganizationSecurityPolicyRuleMatchToHclTerraform(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeOrganizationSecurityPolicyRuleMatchList",
      },
      preconfigured_waf_config: {
        value: googleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigToHclTerraform(this._preconfiguredWafConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigList",
      },
      redirect_options: {
        value: googleComputeOrganizationSecurityPolicyRuleRedirectOptionsToHclTerraform(this._redirectOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsList",
      },
      timeouts: {
        value: googleComputeOrganizationSecurityPolicyRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeOrganizationSecurityPolicyRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
