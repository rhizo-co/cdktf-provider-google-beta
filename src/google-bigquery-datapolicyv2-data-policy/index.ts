// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigqueryDatapolicyv2DataPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-assigned (human readable) ID of the data policy that needs to be
  * unique within a project. Used as {data_policy_id} in part of the resource
  * name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#data_policy_id GoogleBigqueryDatapolicyv2DataPolicy#data_policy_id}
  */
  readonly dataPolicyId: string;
  /**
  * Type of data policy.
  * Possible values:
  * DATA_MASKING_POLICY
  * RAW_DATA_ACCESS_POLICY
  * COLUMN_LEVEL_SECURITY_POLICY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#data_policy_type GoogleBigqueryDatapolicyv2DataPolicy#data_policy_type}
  */
  readonly dataPolicyType: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#deletion_policy GoogleBigqueryDatapolicyv2DataPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The etag for this Data Policy.
  * This field is used for UpdateDataPolicy calls. If Data Policy exists, this
  * field is required and must match the server's etag. It will also be
  * populated in the response of GetDataPolicy, CreateDataPolicy, and
  * UpdateDataPolicy calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#etag GoogleBigqueryDatapolicyv2DataPolicy#etag}
  */
  readonly etag?: string;
  /**
  * The list of IAM principals that have Fine Grained Access to the underlying
  * data goverened by this data policy.
  * 
  * Uses the [IAM V2 principal
  * syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2) Only
  * supports principal types users, groups, serviceaccounts, cloudidentity.
  * This field is supported in V2 Data Policy only. In case of V1 data policies
  * (i.e. verion = 1 and policy_tag is set), this field is not populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#grantees GoogleBigqueryDatapolicyv2DataPolicy#grantees}
  */
  readonly grantees?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#id GoogleBigqueryDatapolicyv2DataPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#location GoogleBigqueryDatapolicyv2DataPolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#project GoogleBigqueryDatapolicyv2DataPolicy#project}
  */
  readonly project?: string;
  /**
  * data_governance_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#data_governance_tag GoogleBigqueryDatapolicyv2DataPolicy#data_governance_tag}
  */
  readonly dataGovernanceTag?: GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTag;
  /**
  * data_masking_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#data_masking_policy GoogleBigqueryDatapolicyv2DataPolicy#data_masking_policy}
  */
  readonly dataMaskingPolicy?: GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#timeouts GoogleBigqueryDatapolicyv2DataPolicy#timeouts}
  */
  readonly timeouts?: GoogleBigqueryDatapolicyv2DataPolicyTimeouts;
}
export interface GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTag {
  /**
  * Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "parent-id/pii" where "parent-id" is the ID of the parent organization or project resource for this tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#key GoogleBigqueryDatapolicyv2DataPolicy#key}
  */
  readonly key?: string;
  /**
  * Tag value is expected to be the short name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#value GoogleBigqueryDatapolicyv2DataPolicy#value}
  */
  readonly value?: string;
}

export function googleBigqueryDatapolicyv2DataPolicyDataGovernanceTagToTerraform(struct?: GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference | GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleBigqueryDatapolicyv2DataPolicyDataGovernanceTagToHclTerraform(struct?: GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference | GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTag): any {
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

export class GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTag | undefined {
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

  public set internalValue(value: GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTag | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy {
  /**
  * A predefined masking expression.
  * Possible values:
  * SHA256
  * ALWAYS_NULL
  * DEFAULT_MASKING_VALUE
  * LAST_FOUR_CHARACTERS
  * FIRST_FOUR_CHARACTERS
  * EMAIL_MASK
  * DATE_YEAR_MASK
  * RANDOM_HASH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#predefined_expression GoogleBigqueryDatapolicyv2DataPolicy#predefined_expression}
  */
  readonly predefinedExpression?: string;
  /**
  * The name of the BigQuery routine that contains the custom masking
  * routine, in the format of
  * 'projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#routine GoogleBigqueryDatapolicyv2DataPolicy#routine}
  */
  readonly routine?: string;
}

export function googleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyToTerraform(struct?: GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference | GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_expression: cdktf.stringToTerraform(struct!.predefinedExpression),
    routine: cdktf.stringToTerraform(struct!.routine),
  }
}


export function googleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyToHclTerraform(struct?: GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference | GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predefined_expression: {
      value: cdktf.stringToHclTerraform(struct!.predefinedExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine: {
      value: cdktf.stringToHclTerraform(struct!.routine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedExpression = this._predefinedExpression;
    }
    if (this._routine !== undefined) {
      hasAnyValues = true;
      internalValueResult.routine = this._routine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predefinedExpression = undefined;
      this._routine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predefinedExpression = value.predefinedExpression;
      this._routine = value.routine;
    }
  }

  // predefined_expression - computed: false, optional: true, required: false
  private _predefinedExpression?: string; 
  public get predefinedExpression() {
    return this.getStringAttribute('predefined_expression');
  }
  public set predefinedExpression(value: string) {
    this._predefinedExpression = value;
  }
  public resetPredefinedExpression() {
    this._predefinedExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedExpressionInput() {
    return this._predefinedExpression;
  }

  // routine - computed: false, optional: true, required: false
  private _routine?: string; 
  public get routine() {
    return this.getStringAttribute('routine');
  }
  public set routine(value: string) {
    this._routine = value;
  }
  public resetRoutine() {
    this._routine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineInput() {
    return this._routine;
  }
}
export interface GoogleBigqueryDatapolicyv2DataPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#create GoogleBigqueryDatapolicyv2DataPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#delete GoogleBigqueryDatapolicyv2DataPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#update GoogleBigqueryDatapolicyv2DataPolicy#update}
  */
  readonly update?: string;
}

export function googleBigqueryDatapolicyv2DataPolicyTimeoutsToTerraform(struct?: GoogleBigqueryDatapolicyv2DataPolicyTimeouts | cdktf.IResolvable): any {
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


export function googleBigqueryDatapolicyv2DataPolicyTimeoutsToHclTerraform(struct?: GoogleBigqueryDatapolicyv2DataPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBigqueryDatapolicyv2DataPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBigqueryDatapolicyv2DataPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy google_bigquery_datapolicyv2_data_policy}
*/
export class GoogleBigqueryDatapolicyv2DataPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_datapolicyv2_data_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleBigqueryDatapolicyv2DataPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBigqueryDatapolicyv2DataPolicy to import
  * @param importFromId The id of the existing GoogleBigqueryDatapolicyv2DataPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBigqueryDatapolicyv2DataPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_datapolicyv2_data_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_datapolicyv2_data_policy google_bigquery_datapolicyv2_data_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigqueryDatapolicyv2DataPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBigqueryDatapolicyv2DataPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_datapolicyv2_data_policy',
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
    this._dataPolicyId = config.dataPolicyId;
    this._dataPolicyType = config.dataPolicyType;
    this._deletionPolicy = config.deletionPolicy;
    this._etag = config.etag;
    this._grantees = config.grantees;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._dataGovernanceTag.internalValue = config.dataGovernanceTag;
    this._dataMaskingPolicy.internalValue = config.dataMaskingPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_policy_id - computed: false, optional: false, required: true
  private _dataPolicyId?: string; 
  public get dataPolicyId() {
    return this.getStringAttribute('data_policy_id');
  }
  public set dataPolicyId(value: string) {
    this._dataPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPolicyIdInput() {
    return this._dataPolicyId;
  }

  // data_policy_type - computed: false, optional: false, required: true
  private _dataPolicyType?: string; 
  public get dataPolicyType() {
    return this.getStringAttribute('data_policy_type');
  }
  public set dataPolicyType(value: string) {
    this._dataPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPolicyTypeInput() {
    return this._dataPolicyType;
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

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // grantees - computed: true, optional: true, required: false
  private _grantees?: string[]; 
  public get grantees() {
    return this.getListAttribute('grantees');
  }
  public set grantees(value: string[]) {
    this._grantees = value;
  }
  public resetGrantees() {
    this._grantees = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteesInput() {
    return this._grantees;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_tag - computed: true, optional: false, required: false
  public get policyTag() {
    return this.getStringAttribute('policy_tag');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // data_governance_tag - computed: false, optional: true, required: false
  private _dataGovernanceTag = new GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTagOutputReference(this, "data_governance_tag");
  public get dataGovernanceTag() {
    return this._dataGovernanceTag;
  }
  public putDataGovernanceTag(value: GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTag) {
    this._dataGovernanceTag.internalValue = value;
  }
  public resetDataGovernanceTag() {
    this._dataGovernanceTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataGovernanceTagInput() {
    return this._dataGovernanceTag.internalValue;
  }

  // data_masking_policy - computed: false, optional: true, required: false
  private _dataMaskingPolicy = new GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference(this, "data_masking_policy");
  public get dataMaskingPolicy() {
    return this._dataMaskingPolicy;
  }
  public putDataMaskingPolicy(value: GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy) {
    this._dataMaskingPolicy.internalValue = value;
  }
  public resetDataMaskingPolicy() {
    this._dataMaskingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskingPolicyInput() {
    return this._dataMaskingPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBigqueryDatapolicyv2DataPolicyTimeouts) {
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
      data_policy_id: cdktf.stringToTerraform(this._dataPolicyId),
      data_policy_type: cdktf.stringToTerraform(this._dataPolicyType),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      etag: cdktf.stringToTerraform(this._etag),
      grantees: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantees),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      data_governance_tag: googleBigqueryDatapolicyv2DataPolicyDataGovernanceTagToTerraform(this._dataGovernanceTag.internalValue),
      data_masking_policy: googleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyToTerraform(this._dataMaskingPolicy.internalValue),
      timeouts: googleBigqueryDatapolicyv2DataPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_policy_id: {
        value: cdktf.stringToHclTerraform(this._dataPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_policy_type: {
        value: cdktf.stringToHclTerraform(this._dataPolicyType),
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
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grantees: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantees),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      data_governance_tag: {
        value: googleBigqueryDatapolicyv2DataPolicyDataGovernanceTagToHclTerraform(this._dataGovernanceTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryDatapolicyv2DataPolicyDataGovernanceTagList",
      },
      data_masking_policy: {
        value: googleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyToHclTerraform(this._dataMaskingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyList",
      },
      timeouts: {
        value: googleBigqueryDatapolicyv2DataPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleBigqueryDatapolicyv2DataPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
