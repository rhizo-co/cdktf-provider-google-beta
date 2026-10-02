// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleKmsOrganizationKajPolicyConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The organization number for which to retrieve config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config#organization GoogleKmsOrganizationKajPolicyConfig#organization}
  */
  readonly organization: string;
  /**
  * default_key_access_justification_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config#default_key_access_justification_policy GoogleKmsOrganizationKajPolicyConfig#default_key_access_justification_policy}
  */
  readonly defaultKeyAccessJustificationPolicy?: GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config#timeouts GoogleKmsOrganizationKajPolicyConfig#timeouts}
  */
  readonly timeouts?: GoogleKmsOrganizationKajPolicyConfigTimeouts;
}
export interface GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy {
  /**
  * A KeyAccessJustificationsPolicy specifies zero or more allowed
  * AccessReason values for encrypt, decrypt, and sign operations on a
  * CryptoKey. Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config#allowed_access_reasons GoogleKmsOrganizationKajPolicyConfig#allowed_access_reasons}
  */
  readonly allowedAccessReasons?: string[];
}

export function googleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyToTerraform(struct?: GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference | GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_access_reasons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAccessReasons),
  }
}


export function googleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyToHclTerraform(struct?: GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference | GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_access_reasons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAccessReasons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAccessReasons !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAccessReasons = this._allowedAccessReasons;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedAccessReasons = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedAccessReasons = value.allowedAccessReasons;
    }
  }

  // allowed_access_reasons - computed: false, optional: true, required: false
  private _allowedAccessReasons?: string[]; 
  public get allowedAccessReasons() {
    return this.getListAttribute('allowed_access_reasons');
  }
  public set allowedAccessReasons(value: string[]) {
    this._allowedAccessReasons = value;
  }
  public resetAllowedAccessReasons() {
    this._allowedAccessReasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccessReasonsInput() {
    return this._allowedAccessReasons;
  }
}
export interface GoogleKmsOrganizationKajPolicyConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config#create GoogleKmsOrganizationKajPolicyConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config#delete GoogleKmsOrganizationKajPolicyConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config#update GoogleKmsOrganizationKajPolicyConfig#update}
  */
  readonly update?: string;
}

export function googleKmsOrganizationKajPolicyConfigTimeoutsToTerraform(struct?: GoogleKmsOrganizationKajPolicyConfigTimeouts | cdktf.IResolvable): any {
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


export function googleKmsOrganizationKajPolicyConfigTimeoutsToHclTerraform(struct?: GoogleKmsOrganizationKajPolicyConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleKmsOrganizationKajPolicyConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleKmsOrganizationKajPolicyConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config google_kms_organization_kaj_policy_config}
*/
export class GoogleKmsOrganizationKajPolicyConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_organization_kaj_policy_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleKmsOrganizationKajPolicyConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleKmsOrganizationKajPolicyConfig to import
  * @param importFromId The id of the existing GoogleKmsOrganizationKajPolicyConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleKmsOrganizationKajPolicyConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_kms_organization_kaj_policy_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_kms_organization_kaj_policy_config google_kms_organization_kaj_policy_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleKmsOrganizationKajPolicyConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleKmsOrganizationKajPolicyConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_organization_kaj_policy_config',
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
    this._id = config.id;
    this._organization = config.organization;
    this._defaultKeyAccessJustificationPolicy.internalValue = config.defaultKeyAccessJustificationPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // default_key_access_justification_policy - computed: false, optional: true, required: false
  private _defaultKeyAccessJustificationPolicy = new GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(this, "default_key_access_justification_policy");
  public get defaultKeyAccessJustificationPolicy() {
    return this._defaultKeyAccessJustificationPolicy;
  }
  public putDefaultKeyAccessJustificationPolicy(value: GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy) {
    this._defaultKeyAccessJustificationPolicy.internalValue = value;
  }
  public resetDefaultKeyAccessJustificationPolicy() {
    this._defaultKeyAccessJustificationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultKeyAccessJustificationPolicyInput() {
    return this._defaultKeyAccessJustificationPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleKmsOrganizationKajPolicyConfigTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
      default_key_access_justification_policy: googleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyToTerraform(this._defaultKeyAccessJustificationPolicy.internalValue),
      timeouts: googleKmsOrganizationKajPolicyConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_key_access_justification_policy: {
        value: googleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyToHclTerraform(this._defaultKeyAccessJustificationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyList",
      },
      timeouts: {
        value: googleKmsOrganizationKajPolicyConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleKmsOrganizationKajPolicyConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
