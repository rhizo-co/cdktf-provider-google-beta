// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleChronicleFindingsRefinementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name of the findings refinement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#display_name GoogleChronicleFindingsRefinement#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#id GoogleChronicleFindingsRefinement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#instance GoogleChronicleFindingsRefinement#instance}
  */
  readonly instance: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#location GoogleChronicleFindingsRefinement#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#project GoogleChronicleFindingsRefinement#project}
  */
  readonly project?: string;
  /**
  * The query for the findings refinement. Works in conjunction with the type
  * field to determine the findings refinement behavior. The syntax of this
  * query is the same as a UDM search string. See the following for more
  * information:
  * https://cloud.google.com/chronicle/docs/investigation/udm-search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#query GoogleChronicleFindingsRefinement#query}
  */
  readonly query?: string;
  /**
  * DETECTION_EXCLUSION is the only supported type of findings refinement.
  * Possible values:
  * DETECTION_EXCLUSION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#type GoogleChronicleFindingsRefinement#type}
  */
  readonly type?: string;
  /**
  * outcome_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#outcome_filters GoogleChronicleFindingsRefinement#outcome_filters}
  */
  readonly outcomeFilters?: GoogleChronicleFindingsRefinementOutcomeFilters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#timeouts GoogleChronicleFindingsRefinement#timeouts}
  */
  readonly timeouts?: GoogleChronicleFindingsRefinementTimeouts;
}
export interface GoogleChronicleFindingsRefinementOutcomeFilters {
  /**
  * The operator to be applied to the outcome variable.
  * Possible values:
  * EQUAL
  * CONTAINS
  * MATCHES_REGEX
  * MATCHES_CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#outcome_filter_operator GoogleChronicleFindingsRefinement#outcome_filter_operator}
  */
  readonly outcomeFilterOperator: string;
  /**
  * The value of the outcome variable to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#outcome_value GoogleChronicleFindingsRefinement#outcome_value}
  */
  readonly outcomeValue: string;
  /**
  * The outcome variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#outcome_variable GoogleChronicleFindingsRefinement#outcome_variable}
  */
  readonly outcomeVariable: string;
}

export function googleChronicleFindingsRefinementOutcomeFiltersToTerraform(struct?: GoogleChronicleFindingsRefinementOutcomeFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outcome_filter_operator: cdktf.stringToTerraform(struct!.outcomeFilterOperator),
    outcome_value: cdktf.stringToTerraform(struct!.outcomeValue),
    outcome_variable: cdktf.stringToTerraform(struct!.outcomeVariable),
  }
}


export function googleChronicleFindingsRefinementOutcomeFiltersToHclTerraform(struct?: GoogleChronicleFindingsRefinementOutcomeFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outcome_filter_operator: {
      value: cdktf.stringToHclTerraform(struct!.outcomeFilterOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outcome_value: {
      value: cdktf.stringToHclTerraform(struct!.outcomeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outcome_variable: {
      value: cdktf.stringToHclTerraform(struct!.outcomeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleFindingsRefinementOutcomeFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outcomeFilterOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcomeFilterOperator = this._outcomeFilterOperator;
    }
    if (this._outcomeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcomeValue = this._outcomeValue;
    }
    if (this._outcomeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcomeVariable = this._outcomeVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleFindingsRefinementOutcomeFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outcomeFilterOperator = undefined;
      this._outcomeValue = undefined;
      this._outcomeVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outcomeFilterOperator = value.outcomeFilterOperator;
      this._outcomeValue = value.outcomeValue;
      this._outcomeVariable = value.outcomeVariable;
    }
  }

  // outcome_filter_operator - computed: false, optional: false, required: true
  private _outcomeFilterOperator?: string; 
  public get outcomeFilterOperator() {
    return this.getStringAttribute('outcome_filter_operator');
  }
  public set outcomeFilterOperator(value: string) {
    this._outcomeFilterOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeFilterOperatorInput() {
    return this._outcomeFilterOperator;
  }

  // outcome_value - computed: false, optional: false, required: true
  private _outcomeValue?: string; 
  public get outcomeValue() {
    return this.getStringAttribute('outcome_value');
  }
  public set outcomeValue(value: string) {
    this._outcomeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeValueInput() {
    return this._outcomeValue;
  }

  // outcome_variable - computed: false, optional: false, required: true
  private _outcomeVariable?: string; 
  public get outcomeVariable() {
    return this.getStringAttribute('outcome_variable');
  }
  public set outcomeVariable(value: string) {
    this._outcomeVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeVariableInput() {
    return this._outcomeVariable;
  }
}

export class GoogleChronicleFindingsRefinementOutcomeFiltersList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleFindingsRefinementOutcomeFilters[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference {
    return new GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleFindingsRefinementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#create GoogleChronicleFindingsRefinement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#delete GoogleChronicleFindingsRefinement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#update GoogleChronicleFindingsRefinement#update}
  */
  readonly update?: string;
}

export function googleChronicleFindingsRefinementTimeoutsToTerraform(struct?: GoogleChronicleFindingsRefinementTimeouts | cdktf.IResolvable): any {
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


export function googleChronicleFindingsRefinementTimeoutsToHclTerraform(struct?: GoogleChronicleFindingsRefinementTimeouts | cdktf.IResolvable): any {
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

export class GoogleChronicleFindingsRefinementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleChronicleFindingsRefinementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleChronicleFindingsRefinementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement google_chronicle_findings_refinement}
*/
export class GoogleChronicleFindingsRefinement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_findings_refinement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleChronicleFindingsRefinement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleChronicleFindingsRefinement to import
  * @param importFromId The id of the existing GoogleChronicleFindingsRefinement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleChronicleFindingsRefinement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_findings_refinement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_chronicle_findings_refinement google_chronicle_findings_refinement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleChronicleFindingsRefinementConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleChronicleFindingsRefinementConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_findings_refinement',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._query = config.query;
    this._type = config.type;
    this._outcomeFilters.internalValue = config.outcomeFilters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // outcome_filters - computed: false, optional: true, required: false
  private _outcomeFilters = new GoogleChronicleFindingsRefinementOutcomeFiltersList(this, "outcome_filters", false);
  public get outcomeFilters() {
    return this._outcomeFilters;
  }
  public putOutcomeFilters(value: GoogleChronicleFindingsRefinementOutcomeFilters[] | cdktf.IResolvable) {
    this._outcomeFilters.internalValue = value;
  }
  public resetOutcomeFilters() {
    this._outcomeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeFiltersInput() {
    return this._outcomeFilters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleChronicleFindingsRefinementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleChronicleFindingsRefinementTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      query: cdktf.stringToTerraform(this._query),
      type: cdktf.stringToTerraform(this._type),
      outcome_filters: cdktf.listMapper(googleChronicleFindingsRefinementOutcomeFiltersToTerraform, true)(this._outcomeFilters.internalValue),
      timeouts: googleChronicleFindingsRefinementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
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
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outcome_filters: {
        value: cdktf.listMapperHcl(googleChronicleFindingsRefinementOutcomeFiltersToHclTerraform, true)(this._outcomeFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleFindingsRefinementOutcomeFiltersList",
      },
      timeouts: {
        value: googleChronicleFindingsRefinementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleChronicleFindingsRefinementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
