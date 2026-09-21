// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNetworkConnectivityTransportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrative state of the underlying connectivity. If set to true (default), connectivity should be available between your environments. If set to false, the connectivity over these links is disabled. Disabling your Transport does not affect billing, and retains the underlying network bandwidth associated with the connectivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#admin_enabled GoogleNetworkConnectivityTransport#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#advertised_routes GoogleNetworkConnectivityTransport#advertised_routes}
  */
  readonly advertisedRoutes?: string[];
  /**
  * Controls whether resources proposed by the Transport are automatically accepted on behalf of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#auto_accept GoogleNetworkConnectivityTransport#auto_accept}
  */
  readonly autoAccept?: boolean | cdktf.IResolvable;
  /**
  * Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#bandwidth GoogleNetworkConnectivityTransport#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#deletion_policy GoogleNetworkConnectivityTransport#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#description GoogleNetworkConnectivityTransport#description}
  */
  readonly description?: string;
  /**
  * The NCC Hub that the Transport should attach to. The hub must be in the same project as the Transport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#hub GoogleNetworkConnectivityTransport#hub}
  */
  readonly hub?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#id GoogleNetworkConnectivityTransport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#labels GoogleNetworkConnectivityTransport#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * [Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#mtu_limit GoogleNetworkConnectivityTransport#mtu_limit}
  */
  readonly mtuLimit?: number;
  /**
  * Name of the resource, see google.aip.dev/122 for resource naming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#name GoogleNetworkConnectivityTransport#name}
  */
  readonly name: string;
  /**
  * Resource URL of the Network that will be peered with this Transport. This field must be provided during resource creation and cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#network GoogleNetworkConnectivityTransport#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#project GoogleNetworkConnectivityTransport#project}
  */
  readonly project?: string;
  /**
  * Key used for establishing a connection with the remote transport. This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#provided_activation_key GoogleNetworkConnectivityTransport#provided_activation_key}
  */
  readonly providedActivationKey?: string;
  /**
  * Controls whether a Routing VPC Spoke should be created and attached to the NCC Hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#psc_routing_enabled GoogleNetworkConnectivityTransport#psc_routing_enabled}
  */
  readonly pscRoutingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The region of this resource. This is required to construct the resource name, but is not sent to the API since the region is already contained in the parent field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#region GoogleNetworkConnectivityTransport#region}
  */
  readonly region: string;
  /**
  * The user supplied account id for the CSP associated with the remote profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#remote_account_id GoogleNetworkConnectivityTransport#remote_account_id}
  */
  readonly remoteAccountId?: string;
  /**
  * Resource URL of the remoteTransportProfile that this Transport is
  * connecting to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#remote_profile GoogleNetworkConnectivityTransport#remote_profile}
  */
  readonly remoteProfile: string;
  /**
  * IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#stack_type GoogleNetworkConnectivityTransport#stack_type}
  */
  readonly stackType?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#timeouts GoogleNetworkConnectivityTransport#timeouts}
  */
  readonly timeouts?: GoogleNetworkConnectivityTransportTimeouts;
}
export interface GoogleNetworkConnectivityTransportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#create GoogleNetworkConnectivityTransport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#delete GoogleNetworkConnectivityTransport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#update GoogleNetworkConnectivityTransport#update}
  */
  readonly update?: string;
}

export function googleNetworkConnectivityTransportTimeoutsToTerraform(struct?: GoogleNetworkConnectivityTransportTimeouts | cdktf.IResolvable): any {
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


export function googleNetworkConnectivityTransportTimeoutsToHclTerraform(struct?: GoogleNetworkConnectivityTransportTimeouts | cdktf.IResolvable): any {
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

export class GoogleNetworkConnectivityTransportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkConnectivityTransportTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkConnectivityTransportTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport google_network_connectivity_transport}
*/
export class GoogleNetworkConnectivityTransport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_connectivity_transport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleNetworkConnectivityTransport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkConnectivityTransport to import
  * @param importFromId The id of the existing GoogleNetworkConnectivityTransport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkConnectivityTransport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_connectivity_transport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_connectivity_transport google_network_connectivity_transport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkConnectivityTransportConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkConnectivityTransportConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_connectivity_transport',
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
    this._adminEnabled = config.adminEnabled;
    this._advertisedRoutes = config.advertisedRoutes;
    this._autoAccept = config.autoAccept;
    this._bandwidth = config.bandwidth;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._hub = config.hub;
    this._id = config.id;
    this._labels = config.labels;
    this._mtuLimit = config.mtuLimit;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._providedActivationKey = config.providedActivationKey;
    this._pscRoutingEnabled = config.pscRoutingEnabled;
    this._region = config.region;
    this._remoteAccountId = config.remoteAccountId;
    this._remoteProfile = config.remoteProfile;
    this._stackType = config.stackType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled;
  }

  // advertised_routes - computed: false, optional: true, required: false
  private _advertisedRoutes?: string[]; 
  public get advertisedRoutes() {
    return this.getListAttribute('advertised_routes');
  }
  public set advertisedRoutes(value: string[]) {
    this._advertisedRoutes = value;
  }
  public resetAdvertisedRoutes() {
    this._advertisedRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedRoutesInput() {
    return this._advertisedRoutes;
  }

  // auto_accept - computed: false, optional: true, required: false
  private _autoAccept?: boolean | cdktf.IResolvable; 
  public get autoAccept() {
    return this.getBooleanAttribute('auto_accept');
  }
  public set autoAccept(value: boolean | cdktf.IResolvable) {
    this._autoAccept = value;
  }
  public resetAutoAccept() {
    this._autoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptInput() {
    return this._autoAccept;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
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

  // generated_activation_key - computed: true, optional: false, required: false
  public get generatedActivationKey() {
    return this.getStringAttribute('generated_activation_key');
  }

  // hub - computed: false, optional: true, required: false
  private _hub?: string; 
  public get hub() {
    return this.getStringAttribute('hub');
  }
  public set hub(value: string) {
    this._hub = value;
  }
  public resetHub() {
    this._hub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubInput() {
    return this._hub;
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

  // mtu_limit - computed: false, optional: true, required: false
  private _mtuLimit?: number; 
  public get mtuLimit() {
    return this.getNumberAttribute('mtu_limit');
  }
  public set mtuLimit(value: number) {
    this._mtuLimit = value;
  }
  public resetMtuLimit() {
    this._mtuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuLimitInput() {
    return this._mtuLimit;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // peering_network - computed: true, optional: false, required: false
  public get peeringNetwork() {
    return this.getStringAttribute('peering_network');
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

  // provided_activation_key - computed: false, optional: true, required: false
  private _providedActivationKey?: string; 
  public get providedActivationKey() {
    return this.getStringAttribute('provided_activation_key');
  }
  public set providedActivationKey(value: string) {
    this._providedActivationKey = value;
  }
  public resetProvidedActivationKey() {
    this._providedActivationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedActivationKeyInput() {
    return this._providedActivationKey;
  }

  // psc_routing_enabled - computed: false, optional: true, required: false
  private _pscRoutingEnabled?: boolean | cdktf.IResolvable; 
  public get pscRoutingEnabled() {
    return this.getBooleanAttribute('psc_routing_enabled');
  }
  public set pscRoutingEnabled(value: boolean | cdktf.IResolvable) {
    this._pscRoutingEnabled = value;
  }
  public resetPscRoutingEnabled() {
    this._pscRoutingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscRoutingEnabledInput() {
    return this._pscRoutingEnabled;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // remote_account_id - computed: false, optional: true, required: false
  private _remoteAccountId?: string; 
  public get remoteAccountId() {
    return this.getStringAttribute('remote_account_id');
  }
  public set remoteAccountId(value: string) {
    this._remoteAccountId = value;
  }
  public resetRemoteAccountId() {
    this._remoteAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAccountIdInput() {
    return this._remoteAccountId;
  }

  // remote_profile - computed: false, optional: false, required: true
  private _remoteProfile?: string; 
  public get remoteProfile() {
    return this.getStringAttribute('remote_profile');
  }
  public set remoteProfile(value: string) {
    this._remoteProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteProfileInput() {
    return this._remoteProfile;
  }

  // stack_type - computed: true, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkConnectivityTransportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkConnectivityTransportTimeouts) {
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
      admin_enabled: cdktf.booleanToTerraform(this._adminEnabled),
      advertised_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._advertisedRoutes),
      auto_accept: cdktf.booleanToTerraform(this._autoAccept),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      hub: cdktf.stringToTerraform(this._hub),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      mtu_limit: cdktf.numberToTerraform(this._mtuLimit),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      provided_activation_key: cdktf.stringToTerraform(this._providedActivationKey),
      psc_routing_enabled: cdktf.booleanToTerraform(this._pscRoutingEnabled),
      region: cdktf.stringToTerraform(this._region),
      remote_account_id: cdktf.stringToTerraform(this._remoteAccountId),
      remote_profile: cdktf.stringToTerraform(this._remoteProfile),
      stack_type: cdktf.stringToTerraform(this._stackType),
      timeouts: googleNetworkConnectivityTransportTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_enabled: {
        value: cdktf.booleanToHclTerraform(this._adminEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertised_routes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._advertisedRoutes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_accept: {
        value: cdktf.booleanToHclTerraform(this._autoAccept),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
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
      hub: {
        value: cdktf.stringToHclTerraform(this._hub),
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
      mtu_limit: {
        value: cdktf.numberToHclTerraform(this._mtuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
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
      provided_activation_key: {
        value: cdktf.stringToHclTerraform(this._providedActivationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psc_routing_enabled: {
        value: cdktf.booleanToHclTerraform(this._pscRoutingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_account_id: {
        value: cdktf.stringToHclTerraform(this._remoteAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_profile: {
        value: cdktf.stringToHclTerraform(this._remoteProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_type: {
        value: cdktf.stringToHclTerraform(this._stackType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleNetworkConnectivityTransportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkConnectivityTransportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
