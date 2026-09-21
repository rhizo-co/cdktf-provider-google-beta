// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataLineageConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#deletion_policy GoogleDataLineageConfig#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#id GoogleDataLineageConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region of the data lineage configuration for integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#location GoogleDataLineageConfig#location}
  */
  readonly location: string;
  /**
  * Parent scope for the config.
  * Format: projects/{project-id|project-number} or folders/{folder-number} or organizations/{organization-number}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#parent GoogleDataLineageConfig#parent}
  */
  readonly parent: string;
  /**
  * ingestion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#ingestion GoogleDataLineageConfig#ingestion}
  */
  readonly ingestion: GoogleDataLineageConfigIngestion;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#timeouts GoogleDataLineageConfig#timeouts}
  */
  readonly timeouts?: GoogleDataLineageConfigTimeouts;
}
export interface GoogleDataLineageConfigIngestionRuleIntegrationSelector {
  /**
  * Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#integration GoogleDataLineageConfig#integration}
  */
  readonly integration: string;
}

export function googleDataLineageConfigIngestionRuleIntegrationSelectorToTerraform(struct?: GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference | GoogleDataLineageConfigIngestionRuleIntegrationSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration: cdktf.stringToTerraform(struct!.integration),
  }
}


export function googleDataLineageConfigIngestionRuleIntegrationSelectorToHclTerraform(struct?: GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference | GoogleDataLineageConfigIngestionRuleIntegrationSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration: {
      value: cdktf.stringToHclTerraform(struct!.integration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLineageConfigIngestionRuleIntegrationSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integration !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageConfigIngestionRuleIntegrationSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._integration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._integration = value.integration;
    }
  }

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }
}
export interface GoogleDataLineageConfigIngestionRuleLineageEnablement {
  /**
  * Whether ingestion of lineage should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#enabled GoogleDataLineageConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleDataLineageConfigIngestionRuleLineageEnablementToTerraform(struct?: GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference | GoogleDataLineageConfigIngestionRuleLineageEnablement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleDataLineageConfigIngestionRuleLineageEnablementToHclTerraform(struct?: GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference | GoogleDataLineageConfigIngestionRuleLineageEnablement): any {
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

export class GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLineageConfigIngestionRuleLineageEnablement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageConfigIngestionRuleLineageEnablement | undefined) {
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
export interface GoogleDataLineageConfigIngestionRule {
  /**
  * integration_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#integration_selector GoogleDataLineageConfig#integration_selector}
  */
  readonly integrationSelector: GoogleDataLineageConfigIngestionRuleIntegrationSelector;
  /**
  * lineage_enablement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#lineage_enablement GoogleDataLineageConfig#lineage_enablement}
  */
  readonly lineageEnablement: GoogleDataLineageConfigIngestionRuleLineageEnablement;
}

export function googleDataLineageConfigIngestionRuleToTerraform(struct?: GoogleDataLineageConfigIngestionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_selector: googleDataLineageConfigIngestionRuleIntegrationSelectorToTerraform(struct!.integrationSelector),
    lineage_enablement: googleDataLineageConfigIngestionRuleLineageEnablementToTerraform(struct!.lineageEnablement),
  }
}


export function googleDataLineageConfigIngestionRuleToHclTerraform(struct?: GoogleDataLineageConfigIngestionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_selector: {
      value: googleDataLineageConfigIngestionRuleIntegrationSelectorToHclTerraform(struct!.integrationSelector),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageConfigIngestionRuleIntegrationSelectorList",
    },
    lineage_enablement: {
      value: googleDataLineageConfigIngestionRuleLineageEnablementToHclTerraform(struct!.lineageEnablement),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageConfigIngestionRuleLineageEnablementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageConfigIngestionRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLineageConfigIngestionRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationSelector = this._integrationSelector?.internalValue;
    }
    if (this._lineageEnablement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineageEnablement = this._lineageEnablement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageConfigIngestionRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationSelector.internalValue = undefined;
      this._lineageEnablement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationSelector.internalValue = value.integrationSelector;
      this._lineageEnablement.internalValue = value.lineageEnablement;
    }
  }

  // integration_selector - computed: false, optional: false, required: true
  private _integrationSelector = new GoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference(this, "integration_selector");
  public get integrationSelector() {
    return this._integrationSelector;
  }
  public putIntegrationSelector(value: GoogleDataLineageConfigIngestionRuleIntegrationSelector) {
    this._integrationSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationSelectorInput() {
    return this._integrationSelector.internalValue;
  }

  // lineage_enablement - computed: false, optional: false, required: true
  private _lineageEnablement = new GoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference(this, "lineage_enablement");
  public get lineageEnablement() {
    return this._lineageEnablement;
  }
  public putLineageEnablement(value: GoogleDataLineageConfigIngestionRuleLineageEnablement) {
    this._lineageEnablement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineageEnablementInput() {
    return this._lineageEnablement.internalValue;
  }
}

export class GoogleDataLineageConfigIngestionRuleList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLineageConfigIngestionRule[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLineageConfigIngestionRuleOutputReference {
    return new GoogleDataLineageConfigIngestionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLineageConfigIngestion {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#rule GoogleDataLineageConfig#rule}
  */
  readonly rule: GoogleDataLineageConfigIngestionRule[] | cdktf.IResolvable;
}

export function googleDataLineageConfigIngestionToTerraform(struct?: GoogleDataLineageConfigIngestionOutputReference | GoogleDataLineageConfigIngestion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(googleDataLineageConfigIngestionRuleToTerraform, true)(struct!.rule),
  }
}


export function googleDataLineageConfigIngestionToHclTerraform(struct?: GoogleDataLineageConfigIngestionOutputReference | GoogleDataLineageConfigIngestion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(googleDataLineageConfigIngestionRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLineageConfigIngestionRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLineageConfigIngestionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLineageConfigIngestion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLineageConfigIngestion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new GoogleDataLineageConfigIngestionRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: GoogleDataLineageConfigIngestionRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface GoogleDataLineageConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#create GoogleDataLineageConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#delete GoogleDataLineageConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#update GoogleDataLineageConfig#update}
  */
  readonly update?: string;
}

export function googleDataLineageConfigTimeoutsToTerraform(struct?: GoogleDataLineageConfigTimeouts | cdktf.IResolvable): any {
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


export function googleDataLineageConfigTimeoutsToHclTerraform(struct?: GoogleDataLineageConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataLineageConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataLineageConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataLineageConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config google_data_lineage_config}
*/
export class GoogleDataLineageConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_lineage_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataLineageConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataLineageConfig to import
  * @param importFromId The id of the existing GoogleDataLineageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataLineageConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_lineage_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_lineage_config google_data_lineage_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataLineageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataLineageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_lineage_config',
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
    this._id = config.id;
    this._location = config.location;
    this._parent = config.parent;
    this._ingestion.internalValue = config.ingestion;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // ingestion - computed: false, optional: false, required: true
  private _ingestion = new GoogleDataLineageConfigIngestionOutputReference(this, "ingestion");
  public get ingestion() {
    return this._ingestion;
  }
  public putIngestion(value: GoogleDataLineageConfigIngestion) {
    this._ingestion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionInput() {
    return this._ingestion.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataLineageConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataLineageConfigTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      parent: cdktf.stringToTerraform(this._parent),
      ingestion: googleDataLineageConfigIngestionToTerraform(this._ingestion.internalValue),
      timeouts: googleDataLineageConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      ingestion: {
        value: googleDataLineageConfigIngestionToHclTerraform(this._ingestion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLineageConfigIngestionList",
      },
      timeouts: {
        value: googleDataLineageConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataLineageConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
