// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAgentRegistryBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#binding_id GoogleAgentRegistryBinding#binding_id}
  */
  readonly bindingId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#deletion_policy GoogleAgentRegistryBinding#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the Binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#description GoogleAgentRegistryBinding#description}
  */
  readonly description?: string;
  /**
  * User-defined display name for the Binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#display_name GoogleAgentRegistryBinding#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#location GoogleAgentRegistryBinding#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}
  */
  readonly project?: string;
  /**
  * auth_provider_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#auth_provider_binding GoogleAgentRegistryBinding#auth_provider_binding}
  */
  readonly authProviderBinding: GoogleAgentRegistryBindingAuthProviderBinding;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#source GoogleAgentRegistryBinding#source}
  */
  readonly source: GoogleAgentRegistryBindingSource;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#target GoogleAgentRegistryBinding#target}
  */
  readonly target: GoogleAgentRegistryBindingTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#timeouts GoogleAgentRegistryBinding#timeouts}
  */
  readonly timeouts?: GoogleAgentRegistryBindingTimeouts;
}
export interface GoogleAgentRegistryBindingAuthProviderBinding {
  /**
  * The resource name of the target auth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#auth_provider GoogleAgentRegistryBinding#auth_provider}
  */
  readonly authProvider: string;
  /**
  * The continue URI of the auth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#continue_uri GoogleAgentRegistryBinding#continue_uri}
  */
  readonly continueUri?: string;
  /**
  * The list of OAuth2 scopes of the auth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#scopes GoogleAgentRegistryBinding#scopes}
  */
  readonly scopes?: string[];
}

export function googleAgentRegistryBindingAuthProviderBindingToTerraform(struct?: GoogleAgentRegistryBindingAuthProviderBindingOutputReference | GoogleAgentRegistryBindingAuthProviderBinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_provider: cdktf.stringToTerraform(struct!.authProvider),
    continue_uri: cdktf.stringToTerraform(struct!.continueUri),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function googleAgentRegistryBindingAuthProviderBindingToHclTerraform(struct?: GoogleAgentRegistryBindingAuthProviderBindingOutputReference | GoogleAgentRegistryBindingAuthProviderBinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_provider: {
      value: cdktf.stringToHclTerraform(struct!.authProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continue_uri: {
      value: cdktf.stringToHclTerraform(struct!.continueUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgentRegistryBindingAuthProviderBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgentRegistryBindingAuthProviderBinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProvider = this._authProvider;
    }
    if (this._continueUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueUri = this._continueUri;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgentRegistryBindingAuthProviderBinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authProvider = undefined;
      this._continueUri = undefined;
      this._scopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authProvider = value.authProvider;
      this._continueUri = value.continueUri;
      this._scopes = value.scopes;
    }
  }

  // auth_provider - computed: false, optional: false, required: true
  private _authProvider?: string; 
  public get authProvider() {
    return this.getStringAttribute('auth_provider');
  }
  public set authProvider(value: string) {
    this._authProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderInput() {
    return this._authProvider;
  }

  // continue_uri - computed: false, optional: true, required: false
  private _continueUri?: string; 
  public get continueUri() {
    return this.getStringAttribute('continue_uri');
  }
  public set continueUri(value: string) {
    this._continueUri = value;
  }
  public resetContinueUri() {
    this._continueUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueUriInput() {
    return this._continueUri;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface GoogleAgentRegistryBindingSource {
  /**
  * The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}
  */
  readonly identifier: string;
}

export function googleAgentRegistryBindingSourceToTerraform(struct?: GoogleAgentRegistryBindingSourceOutputReference | GoogleAgentRegistryBindingSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function googleAgentRegistryBindingSourceToHclTerraform(struct?: GoogleAgentRegistryBindingSourceOutputReference | GoogleAgentRegistryBindingSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgentRegistryBindingSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgentRegistryBindingSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgentRegistryBindingSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface GoogleAgentRegistryBindingTarget {
  /**
  * The identifier of the target Agent, MCP Server, or Endpoint. Format:
  * * 'urn:agent:{publisher}:{namespace}:{name}'
  * * 'urn:mcp:{publisher}:{namespace}:{name}'
  * * 'urn:endpoint:{publisher}:{namespace}:{name}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}
  */
  readonly identifier: string;
}

export function googleAgentRegistryBindingTargetToTerraform(struct?: GoogleAgentRegistryBindingTargetOutputReference | GoogleAgentRegistryBindingTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function googleAgentRegistryBindingTargetToHclTerraform(struct?: GoogleAgentRegistryBindingTargetOutputReference | GoogleAgentRegistryBindingTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAgentRegistryBindingTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAgentRegistryBindingTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAgentRegistryBindingTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface GoogleAgentRegistryBindingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#create GoogleAgentRegistryBinding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#delete GoogleAgentRegistryBinding#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#update GoogleAgentRegistryBinding#update}
  */
  readonly update?: string;
}

export function googleAgentRegistryBindingTimeoutsToTerraform(struct?: GoogleAgentRegistryBindingTimeouts | cdktf.IResolvable): any {
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


export function googleAgentRegistryBindingTimeoutsToHclTerraform(struct?: GoogleAgentRegistryBindingTimeouts | cdktf.IResolvable): any {
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

export class GoogleAgentRegistryBindingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleAgentRegistryBindingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleAgentRegistryBindingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding google_agent_registry_binding}
*/
export class GoogleAgentRegistryBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_agent_registry_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleAgentRegistryBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleAgentRegistryBinding to import
  * @param importFromId The id of the existing GoogleAgentRegistryBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleAgentRegistryBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_agent_registry_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_agent_registry_binding google_agent_registry_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAgentRegistryBindingConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAgentRegistryBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_agent_registry_binding',
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
    this._bindingId = config.bindingId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._authProviderBinding.internalValue = config.authProviderBinding;
    this._source.internalValue = config.source;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binding_id - computed: false, optional: false, required: true
  private _bindingId?: string; 
  public get bindingId() {
    return this.getStringAttribute('binding_id');
  }
  public set bindingId(value: string) {
    this._bindingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingIdInput() {
    return this._bindingId;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // auth_provider_binding - computed: false, optional: false, required: true
  private _authProviderBinding = new GoogleAgentRegistryBindingAuthProviderBindingOutputReference(this, "auth_provider_binding");
  public get authProviderBinding() {
    return this._authProviderBinding;
  }
  public putAuthProviderBinding(value: GoogleAgentRegistryBindingAuthProviderBinding) {
    this._authProviderBinding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderBindingInput() {
    return this._authProviderBinding.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new GoogleAgentRegistryBindingSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleAgentRegistryBindingSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new GoogleAgentRegistryBindingTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: GoogleAgentRegistryBindingTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAgentRegistryBindingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAgentRegistryBindingTimeouts) {
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
      binding_id: cdktf.stringToTerraform(this._bindingId),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      auth_provider_binding: googleAgentRegistryBindingAuthProviderBindingToTerraform(this._authProviderBinding.internalValue),
      source: googleAgentRegistryBindingSourceToTerraform(this._source.internalValue),
      target: googleAgentRegistryBindingTargetToTerraform(this._target.internalValue),
      timeouts: googleAgentRegistryBindingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binding_id: {
        value: cdktf.stringToHclTerraform(this._bindingId),
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
      auth_provider_binding: {
        value: googleAgentRegistryBindingAuthProviderBindingToHclTerraform(this._authProviderBinding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAgentRegistryBindingAuthProviderBindingList",
      },
      source: {
        value: googleAgentRegistryBindingSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAgentRegistryBindingSourceList",
      },
      target: {
        value: googleAgentRegistryBindingTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAgentRegistryBindingTargetList",
      },
      timeouts: {
        value: googleAgentRegistryBindingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleAgentRegistryBindingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
