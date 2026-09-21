// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNetworkSecuritySacAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#country GoogleNetworkSecuritySacAttachment#country}
  */
  readonly country?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#deletion_policy GoogleNetworkSecuritySacAttachment#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#labels GoogleNetworkSecuritySacAttachment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the SACAttachment resource. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#location GoogleNetworkSecuritySacAttachment#location}
  */
  readonly location: string;
  /**
  * Identifier. Resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#name GoogleNetworkSecuritySacAttachment#name}
  */
  readonly name: string;
  /**
  * NCC Gateway associated with the attachment. This can be input as an ID or a full resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#ncc_gateway GoogleNetworkSecuritySacAttachment#ncc_gateway}
  */
  readonly nccGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}
  */
  readonly project?: string;
  /**
  * SAC Realm which owns the attachment. This can be input as an ID or a full resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#sac_realm GoogleNetworkSecuritySacAttachment#sac_realm}
  */
  readonly sacRealm: string;
  /**
  * Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#time_zone GoogleNetworkSecuritySacAttachment#time_zone}
  */
  readonly timeZone?: string;
  /**
  * symantec_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#symantec_options GoogleNetworkSecuritySacAttachment#symantec_options}
  */
  readonly symantecOptions?: GoogleNetworkSecuritySacAttachmentSymantecOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#timeouts GoogleNetworkSecuritySacAttachment#timeouts}
  */
  readonly timeouts?: GoogleNetworkSecuritySacAttachmentTimeouts;
}
export interface GoogleNetworkSecuritySacAttachmentSymantecOptions {
  /**
  * Name to be used when creating a location on the customer's behalf in Symantec's Location API. Not to be confused with Google Cloud locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#symantec_location_name GoogleNetworkSecuritySacAttachment#symantec_location_name}
  */
  readonly symantecLocationName?: string;
  /**
  * Symantec data center identifier that this attachment will connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#symantec_site GoogleNetworkSecuritySacAttachment#symantec_site}
  */
  readonly symantecSite?: string;
}

export function googleNetworkSecuritySacAttachmentSymantecOptionsToTerraform(struct?: GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference | GoogleNetworkSecuritySacAttachmentSymantecOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symantec_location_name: cdktf.stringToTerraform(struct!.symantecLocationName),
    symantec_site: cdktf.stringToTerraform(struct!.symantecSite),
  }
}


export function googleNetworkSecuritySacAttachmentSymantecOptionsToHclTerraform(struct?: GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference | GoogleNetworkSecuritySacAttachmentSymantecOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    symantec_location_name: {
      value: cdktf.stringToHclTerraform(struct!.symantecLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    symantec_site: {
      value: cdktf.stringToHclTerraform(struct!.symantecSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecuritySacAttachmentSymantecOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._symantecLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.symantecLocationName = this._symantecLocationName;
    }
    if (this._symantecSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.symantecSite = this._symantecSite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecuritySacAttachmentSymantecOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._symantecLocationName = undefined;
      this._symantecSite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._symantecLocationName = value.symantecLocationName;
      this._symantecSite = value.symantecSite;
    }
  }

  // symantec_location_name - computed: false, optional: true, required: false
  private _symantecLocationName?: string; 
  public get symantecLocationName() {
    return this.getStringAttribute('symantec_location_name');
  }
  public set symantecLocationName(value: string) {
    this._symantecLocationName = value;
  }
  public resetSymantecLocationName() {
    this._symantecLocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symantecLocationNameInput() {
    return this._symantecLocationName;
  }

  // symantec_site - computed: false, optional: true, required: false
  private _symantecSite?: string; 
  public get symantecSite() {
    return this.getStringAttribute('symantec_site');
  }
  public set symantecSite(value: string) {
    this._symantecSite = value;
  }
  public resetSymantecSite() {
    this._symantecSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symantecSiteInput() {
    return this._symantecSite;
  }
}
export interface GoogleNetworkSecuritySacAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}
  */
  readonly update?: string;
}

export function googleNetworkSecuritySacAttachmentTimeoutsToTerraform(struct?: GoogleNetworkSecuritySacAttachmentTimeouts | cdktf.IResolvable): any {
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


export function googleNetworkSecuritySacAttachmentTimeoutsToHclTerraform(struct?: GoogleNetworkSecuritySacAttachmentTimeouts | cdktf.IResolvable): any {
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

export class GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkSecuritySacAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkSecuritySacAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment google_network_security_sac_attachment}
*/
export class GoogleNetworkSecuritySacAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_sac_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkSecuritySacAttachment to import
  * @param importFromId The id of the existing GoogleNetworkSecuritySacAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkSecuritySacAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_sac_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_network_security_sac_attachment google_network_security_sac_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkSecuritySacAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkSecuritySacAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_sac_attachment',
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
    this._country = config.country;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._nccGateway = config.nccGateway;
    this._project = config.project;
    this._sacRealm = config.sacRealm;
    this._timeZone = config.timeZone;
    this._symantecOptions.internalValue = config.symantecOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
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

  // ncc_gateway - computed: false, optional: false, required: true
  private _nccGateway?: string; 
  public get nccGateway() {
    return this.getStringAttribute('ncc_gateway');
  }
  public set nccGateway(value: string) {
    this._nccGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nccGatewayInput() {
    return this._nccGateway;
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

  // sac_realm - computed: false, optional: false, required: true
  private _sacRealm?: string; 
  public get sacRealm() {
    return this.getStringAttribute('sac_realm');
  }
  public set sacRealm(value: string) {
    this._sacRealm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sacRealmInput() {
    return this._sacRealm;
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

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // symantec_options - computed: false, optional: true, required: false
  private _symantecOptions = new GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference(this, "symantec_options");
  public get symantecOptions() {
    return this._symantecOptions;
  }
  public putSymantecOptions(value: GoogleNetworkSecuritySacAttachmentSymantecOptions) {
    this._symantecOptions.internalValue = value;
  }
  public resetSymantecOptions() {
    this._symantecOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symantecOptionsInput() {
    return this._symantecOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkSecuritySacAttachmentTimeouts) {
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
      country: cdktf.stringToTerraform(this._country),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      ncc_gateway: cdktf.stringToTerraform(this._nccGateway),
      project: cdktf.stringToTerraform(this._project),
      sac_realm: cdktf.stringToTerraform(this._sacRealm),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      symantec_options: googleNetworkSecuritySacAttachmentSymantecOptionsToTerraform(this._symantecOptions.internalValue),
      timeouts: googleNetworkSecuritySacAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      country: {
        value: cdktf.stringToHclTerraform(this._country),
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
      ncc_gateway: {
        value: cdktf.stringToHclTerraform(this._nccGateway),
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
      sac_realm: {
        value: cdktf.stringToHclTerraform(this._sacRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      symantec_options: {
        value: googleNetworkSecuritySacAttachmentSymantecOptionsToHclTerraform(this._symantecOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecuritySacAttachmentSymantecOptionsList",
      },
      timeouts: {
        value: googleNetworkSecuritySacAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkSecuritySacAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
