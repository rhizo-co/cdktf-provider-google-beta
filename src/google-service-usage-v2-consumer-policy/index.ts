// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleServiceUsageV2ConsumerPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Optional) Default value is false. If true, the usage of the service to be removed will be checked. If the service has been used within the past 30 days or was enabled in the last 3 days, an error will be thrown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#check_usage_on_remove GoogleServiceUsageV2ConsumerPolicy#check_usage_on_remove}
  */
  readonly checkUsageOnRemove?: boolean | cdktf.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#deletion_policy GoogleServiceUsageV2ConsumerPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#id GoogleServiceUsageV2ConsumerPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the policy. Currently only the “default” policy name is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#name GoogleServiceUsageV2ConsumerPolicy#name}
  */
  readonly name: string;
  /**
  * The name of the parent. It can be a project, folder or organization in the format of  projects/<project_id or project_number>, folders/<folder_number> or organizations/<org_number> .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#parent GoogleServiceUsageV2ConsumerPolicy#parent}
  */
  readonly parent: string;
  /**
  * (Optional) Default value is true. If true, this flag enforces dependency management within the consumer policy. When adding a new service, it verifies that all its dependencies are already present/added in the policy. Conversely, when removing a service, it ensures that no other services within the policy depend on the service to be removed. If the validation fails, a comprehensive message will be presented, outlining the missing dependencies and providing instructions on how to address the issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#validate_dependencies GoogleServiceUsageV2ConsumerPolicy#validate_dependencies}
  */
  readonly validateDependencies?: boolean | cdktf.IResolvable;
  /**
  * enable_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#enable_rules GoogleServiceUsageV2ConsumerPolicy#enable_rules}
  */
  readonly enableRules: GoogleServiceUsageV2ConsumerPolicyEnableRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#timeouts GoogleServiceUsageV2ConsumerPolicy#timeouts}
  */
  readonly timeouts?: GoogleServiceUsageV2ConsumerPolicyTimeouts;
}
export interface GoogleServiceUsageV2ConsumerPolicyEnableRules {
  /**
  * (Optional): List of service names to be enabled in the format of services/<service_name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#services GoogleServiceUsageV2ConsumerPolicy#services}
  */
  readonly services?: string[];
}

export function googleServiceUsageV2ConsumerPolicyEnableRulesToTerraform(struct?: GoogleServiceUsageV2ConsumerPolicyEnableRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function googleServiceUsageV2ConsumerPolicyEnableRulesToHclTerraform(struct?: GoogleServiceUsageV2ConsumerPolicyEnableRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleServiceUsageV2ConsumerPolicyEnableRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleServiceUsageV2ConsumerPolicyEnableRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._services = value.services;
    }
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}

export class GoogleServiceUsageV2ConsumerPolicyEnableRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleServiceUsageV2ConsumerPolicyEnableRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference {
    return new GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleServiceUsageV2ConsumerPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#create GoogleServiceUsageV2ConsumerPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#delete GoogleServiceUsageV2ConsumerPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#update GoogleServiceUsageV2ConsumerPolicy#update}
  */
  readonly update?: string;
}

export function googleServiceUsageV2ConsumerPolicyTimeoutsToTerraform(struct?: GoogleServiceUsageV2ConsumerPolicyTimeouts | cdktf.IResolvable): any {
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


export function googleServiceUsageV2ConsumerPolicyTimeoutsToHclTerraform(struct?: GoogleServiceUsageV2ConsumerPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleServiceUsageV2ConsumerPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleServiceUsageV2ConsumerPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy google_service_usage_v2_consumer_policy}
*/
export class GoogleServiceUsageV2ConsumerPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_usage_v2_consumer_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleServiceUsageV2ConsumerPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleServiceUsageV2ConsumerPolicy to import
  * @param importFromId The id of the existing GoogleServiceUsageV2ConsumerPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleServiceUsageV2ConsumerPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_service_usage_v2_consumer_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_service_usage_v2_consumer_policy google_service_usage_v2_consumer_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleServiceUsageV2ConsumerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleServiceUsageV2ConsumerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_usage_v2_consumer_policy',
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
    this._checkUsageOnRemove = config.checkUsageOnRemove;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._name = config.name;
    this._parent = config.parent;
    this._validateDependencies = config.validateDependencies;
    this._enableRules.internalValue = config.enableRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_usage_on_remove - computed: false, optional: true, required: false
  private _checkUsageOnRemove?: boolean | cdktf.IResolvable; 
  public get checkUsageOnRemove() {
    return this.getBooleanAttribute('check_usage_on_remove');
  }
  public set checkUsageOnRemove(value: boolean | cdktf.IResolvable) {
    this._checkUsageOnRemove = value;
  }
  public resetCheckUsageOnRemove() {
    this._checkUsageOnRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkUsageOnRemoveInput() {
    return this._checkUsageOnRemove;
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

  // validate_dependencies - computed: false, optional: true, required: false
  private _validateDependencies?: boolean | cdktf.IResolvable; 
  public get validateDependencies() {
    return this.getBooleanAttribute('validate_dependencies');
  }
  public set validateDependencies(value: boolean | cdktf.IResolvable) {
    this._validateDependencies = value;
  }
  public resetValidateDependencies() {
    this._validateDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateDependenciesInput() {
    return this._validateDependencies;
  }

  // enable_rules - computed: false, optional: false, required: true
  private _enableRules = new GoogleServiceUsageV2ConsumerPolicyEnableRulesList(this, "enable_rules", false);
  public get enableRules() {
    return this._enableRules;
  }
  public putEnableRules(value: GoogleServiceUsageV2ConsumerPolicyEnableRules[] | cdktf.IResolvable) {
    this._enableRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRulesInput() {
    return this._enableRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleServiceUsageV2ConsumerPolicyTimeouts) {
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
      check_usage_on_remove: cdktf.booleanToTerraform(this._checkUsageOnRemove),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      validate_dependencies: cdktf.booleanToTerraform(this._validateDependencies),
      enable_rules: cdktf.listMapper(googleServiceUsageV2ConsumerPolicyEnableRulesToTerraform, true)(this._enableRules.internalValue),
      timeouts: googleServiceUsageV2ConsumerPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_usage_on_remove: {
        value: cdktf.booleanToHclTerraform(this._checkUsageOnRemove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      validate_dependencies: {
        value: cdktf.booleanToHclTerraform(this._validateDependencies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rules: {
        value: cdktf.listMapperHcl(googleServiceUsageV2ConsumerPolicyEnableRulesToHclTerraform, true)(this._enableRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleServiceUsageV2ConsumerPolicyEnableRulesList",
      },
      timeouts: {
        value: googleServiceUsageV2ConsumerPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleServiceUsageV2ConsumerPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
