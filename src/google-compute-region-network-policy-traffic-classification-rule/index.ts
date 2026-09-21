// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#deletion_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#description GoogleComputeRegionNetworkPolicyTrafficClassificationRule#description}
  */
  readonly description?: string;
  /**
  * Denotes whether the network policy rule is disabled.
  * When set to true, the network policy rule is not enforced and traffic behaves as if it did not exist.
  * If this is unspecified, the network policy rule will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#disabled GoogleComputeRegionNetworkPolicyTrafficClassificationRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The firewall policy of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#network_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#network_policy}
  */
  readonly networkPolicy: string;
  /**
  * An integer indicating the priority of a rule in the list. The priority must be a positive value between 1 and 2147482647.
  * The priority values from 2147482648 to 2147483647 (1000) are reserved for system default network policy rules.
  * Rules are evaluated from highest to lowest priority where 1 is the highest priority and 2147483647 is the lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#priority GoogleComputeRegionNetworkPolicyTrafficClassificationRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}
  */
  readonly project?: string;
  /**
  * The location of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#region GoogleComputeRegionNetworkPolicyTrafficClassificationRule#region}
  */
  readonly region?: string;
  /**
  * An optional name for the rule. This field is not a unique identifier and can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#rule_name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * A list of service accounts indicating the sets of instances that are applied with this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_service_accounts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_service_accounts}
  */
  readonly targetServiceAccounts?: string[];
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#action GoogleComputeRegionNetworkPolicyTrafficClassificationRule#action}
  */
  readonly action?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#match GoogleComputeRegionNetworkPolicyTrafficClassificationRule#match}
  */
  readonly match: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch;
  /**
  * target_secure_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_secure_tags GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_secure_tags}
  */
  readonly targetSecureTags?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#timeouts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#timeouts}
  */
  readonly timeouts?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts;
}
export interface GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction {
  /**
  * DSCP mode. When set to AUTO, the DSCP value will be picked automatically based on selected trafficClass. Otherwise,dscpValue needs to be explicitly specified. Possible values: ["AUTO", "CUSTOM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_mode GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_mode}
  */
  readonly dscpMode?: string;
  /**
  * Custom DSCP value from 0-63 range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_value GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_value}
  */
  readonly dscpValue?: number;
  /**
  * The traffic class that should be applied to the matching packet. Possible values: ["TC1", "TC2", "TC3", "TC4", "TC5", "TC6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#traffic_class GoogleComputeRegionNetworkPolicyTrafficClassificationRule#traffic_class}
  */
  readonly trafficClass?: string;
  /**
  * Always apply_traffic_classification for Traffic Classification Rules. Default value: "apply_traffic_classification" Possible values: ["apply_traffic_classification"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#type GoogleComputeRegionNetworkPolicyTrafficClassificationRule#type}
  */
  readonly type?: string;
}

export function googleComputeRegionNetworkPolicyTrafficClassificationRuleActionToTerraform(struct?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp_mode: cdktf.stringToTerraform(struct!.dscpMode),
    dscp_value: cdktf.numberToTerraform(struct!.dscpValue),
    traffic_class: cdktf.stringToTerraform(struct!.trafficClass),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleComputeRegionNetworkPolicyTrafficClassificationRuleActionToHclTerraform(struct?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp_mode: {
      value: cdktf.stringToHclTerraform(struct!.dscpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.numberToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_class: {
      value: cdktf.stringToHclTerraform(struct!.trafficClass),
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

export class GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpMode = this._dscpMode;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._trafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClass = this._trafficClass;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dscpMode = undefined;
      this._dscpValue = undefined;
      this._trafficClass = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dscpMode = value.dscpMode;
      this._dscpValue = value.dscpValue;
      this._trafficClass = value.trafficClass;
      this._type = value.type;
    }
  }

  // dscp_mode - computed: false, optional: true, required: false
  private _dscpMode?: string; 
  public get dscpMode() {
    return this.getStringAttribute('dscp_mode');
  }
  public set dscpMode(value: string) {
    this._dscpMode = value;
  }
  public resetDscpMode() {
    this._dscpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpModeInput() {
    return this._dscpMode;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: number; 
  public get dscpValue() {
    return this.getNumberAttribute('dscp_value');
  }
  public set dscpValue(value: number) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: string; 
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }
  public set trafficClass(value: string) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
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
export interface GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs {
  /**
  * The IP protocol to which this rule applies. The protocol type is required when creating a traffic classification rule.
  * This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#ip_protocol GoogleComputeRegionNetworkPolicyTrafficClassificationRule#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
  * Example inputs include: ["22"], ["80","443"], and ["12345-12349"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#ports GoogleComputeRegionNetworkPolicyTrafficClassificationRule#ports}
  */
  readonly ports?: string[];
}

export function googleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsToTerraform(struct?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function googleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsToHclTerraform(struct?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs | cdktf.IResolvable): any {
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

export class GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs | cdktf.IResolvable | undefined) {
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

export class GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference {
    return new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch {
  /**
  * CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dest_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#src_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * layer4_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#layer4_configs GoogleComputeRegionNetworkPolicyTrafficClassificationRule#layer4_configs}
  */
  readonly layer4Configs: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs[] | cdktf.IResolvable;
}

export function googleComputeRegionNetworkPolicyTrafficClassificationRuleMatchToTerraform(struct?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destIpRanges),
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcIpRanges),
    layer4_configs: cdktf.listMapper(googleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsToTerraform, true)(struct!.layer4Configs),
  }
}


export function googleComputeRegionNetworkPolicyTrafficClassificationRuleMatchToHclTerraform(struct?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch): any {
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
    layer4_configs: {
      value: cdktf.listMapperHcl(googleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsToHclTerraform, true)(struct!.layer4Configs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch | undefined {
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
    if (this._layer4Configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer4Configs = this._layer4Configs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destIpRanges = undefined;
      this._srcIpRanges = undefined;
      this._layer4Configs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destIpRanges = value.destIpRanges;
      this._srcIpRanges = value.srcIpRanges;
      this._layer4Configs.internalValue = value.layer4Configs;
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

  // layer4_configs - computed: false, optional: false, required: true
  private _layer4Configs = new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList(this, "layer4_configs", false);
  public get layer4Configs() {
    return this._layer4Configs;
  }
  public putLayer4Configs(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs[] | cdktf.IResolvable) {
    this._layer4Configs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layer4ConfigsInput() {
    return this._layer4Configs.internalValue;
  }
}
export interface GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags {
  /**
  * Name of the secure tag, created with TagManager's TagValue API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#name}
  */
  readonly name?: string;
}

export function googleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsToTerraform(struct?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsToHclTerraform(struct?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags | cdktf.IResolvable): any {
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

export class GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference {
    return new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#create GoogleComputeRegionNetworkPolicyTrafficClassificationRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#delete GoogleComputeRegionNetworkPolicyTrafficClassificationRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#update GoogleComputeRegionNetworkPolicyTrafficClassificationRule#update}
  */
  readonly update?: string;
}

export function googleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsToTerraform(struct?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts | cdktf.IResolvable): any {
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


export function googleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsToHclTerraform(struct?: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule google_compute_region_network_policy_traffic_classification_rule}
*/
export class GoogleComputeRegionNetworkPolicyTrafficClassificationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_network_policy_traffic_classification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeRegionNetworkPolicyTrafficClassificationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeRegionNetworkPolicyTrafficClassificationRule to import
  * @param importFromId The id of the existing GoogleComputeRegionNetworkPolicyTrafficClassificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeRegionNetworkPolicyTrafficClassificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_network_policy_traffic_classification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule google_compute_region_network_policy_traffic_classification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_network_policy_traffic_classification_rule',
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._disabled = config.disabled;
    this._id = config.id;
    this._networkPolicy = config.networkPolicy;
    this._priority = config.priority;
    this._project = config.project;
    this._region = config.region;
    this._ruleName = config.ruleName;
    this._targetServiceAccounts = config.targetServiceAccounts;
    this._action.internalValue = config.action;
    this._match.internalValue = config.match;
    this._targetSecureTags.internalValue = config.targetSecureTags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // network_policy - computed: false, optional: false, required: true
  private _networkPolicy?: string; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string) {
    this._networkPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_tuple_count - computed: true, optional: false, required: false
  public get ruleTupleCount() {
    return this.getNumberAttribute('rule_tuple_count');
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

  // action - computed: false, optional: true, required: false
  private _action = new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // target_secure_tags - computed: false, optional: true, required: false
  private _targetSecureTags = new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList(this, "target_secure_tags", false);
  public get targetSecureTags() {
    return this._targetSecureTags;
  }
  public putTargetSecureTags(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags[] | cdktf.IResolvable) {
    this._targetSecureTags.internalValue = value;
  }
  public resetTargetSecureTags() {
    this._targetSecureTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSecureTagsInput() {
    return this._targetSecureTags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      network_policy: cdktf.stringToTerraform(this._networkPolicy),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      target_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetServiceAccounts),
      action: googleComputeRegionNetworkPolicyTrafficClassificationRuleActionToTerraform(this._action.internalValue),
      match: googleComputeRegionNetworkPolicyTrafficClassificationRuleMatchToTerraform(this._match.internalValue),
      target_secure_tags: cdktf.listMapper(googleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsToTerraform, true)(this._targetSecureTags.internalValue),
      timeouts: googleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      network_policy: {
        value: cdktf.stringToHclTerraform(this._networkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_service_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetServiceAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      action: {
        value: googleComputeRegionNetworkPolicyTrafficClassificationRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionList",
      },
      match: {
        value: googleComputeRegionNetworkPolicyTrafficClassificationRuleMatchToHclTerraform(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchList",
      },
      target_secure_tags: {
        value: cdktf.listMapperHcl(googleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsToHclTerraform, true)(this._targetSecureTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList",
      },
      timeouts: {
        value: googleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
