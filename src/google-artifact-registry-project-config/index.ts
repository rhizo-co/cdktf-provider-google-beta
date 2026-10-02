// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleArtifactRegistryProjectConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the location this config is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#location GoogleArtifactRegistryProjectConfig#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}
  */
  readonly project?: string;
  /**
  * platform_logs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#platform_logs_config GoogleArtifactRegistryProjectConfig#platform_logs_config}
  */
  readonly platformLogsConfig?: GoogleArtifactRegistryProjectConfigPlatformLogsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#timeouts GoogleArtifactRegistryProjectConfig#timeouts}
  */
  readonly timeouts?: GoogleArtifactRegistryProjectConfigTimeouts;
}
export interface GoogleArtifactRegistryProjectConfigPlatformLogsConfig {
  /**
  * The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#logging_state GoogleArtifactRegistryProjectConfig#logging_state}
  */
  readonly loggingState?: string;
  /**
  * The severity level for the logs. Logs will be generated if their
  * severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#severity_level GoogleArtifactRegistryProjectConfig#severity_level}
  */
  readonly severityLevel?: string;
}

export function googleArtifactRegistryProjectConfigPlatformLogsConfigToTerraform(struct?: GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference | GoogleArtifactRegistryProjectConfigPlatformLogsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging_state: cdktf.stringToTerraform(struct!.loggingState),
    severity_level: cdktf.stringToTerraform(struct!.severityLevel),
  }
}


export function googleArtifactRegistryProjectConfigPlatformLogsConfigToHclTerraform(struct?: GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference | GoogleArtifactRegistryProjectConfigPlatformLogsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging_state: {
      value: cdktf.stringToHclTerraform(struct!.loggingState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_level: {
      value: cdktf.stringToHclTerraform(struct!.severityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryProjectConfigPlatformLogsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggingState !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingState = this._loggingState;
    }
    if (this._severityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLevel = this._severityLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryProjectConfigPlatformLogsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loggingState = undefined;
      this._severityLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loggingState = value.loggingState;
      this._severityLevel = value.severityLevel;
    }
  }

  // logging_state - computed: false, optional: true, required: false
  private _loggingState?: string; 
  public get loggingState() {
    return this.getStringAttribute('logging_state');
  }
  public set loggingState(value: string) {
    this._loggingState = value;
  }
  public resetLoggingState() {
    this._loggingState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingStateInput() {
    return this._loggingState;
  }

  // severity_level - computed: false, optional: true, required: false
  private _severityLevel?: string; 
  public get severityLevel() {
    return this.getStringAttribute('severity_level');
  }
  public set severityLevel(value: string) {
    this._severityLevel = value;
  }
  public resetSeverityLevel() {
    this._severityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLevelInput() {
    return this._severityLevel;
  }
}
export interface GoogleArtifactRegistryProjectConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#create GoogleArtifactRegistryProjectConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#delete GoogleArtifactRegistryProjectConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#update GoogleArtifactRegistryProjectConfig#update}
  */
  readonly update?: string;
}

export function googleArtifactRegistryProjectConfigTimeoutsToTerraform(struct?: GoogleArtifactRegistryProjectConfigTimeouts | cdktf.IResolvable): any {
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


export function googleArtifactRegistryProjectConfigTimeoutsToHclTerraform(struct?: GoogleArtifactRegistryProjectConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleArtifactRegistryProjectConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleArtifactRegistryProjectConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleArtifactRegistryProjectConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config google_artifact_registry_project_config}
*/
export class GoogleArtifactRegistryProjectConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_artifact_registry_project_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleArtifactRegistryProjectConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleArtifactRegistryProjectConfig to import
  * @param importFromId The id of the existing GoogleArtifactRegistryProjectConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleArtifactRegistryProjectConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_artifact_registry_project_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_artifact_registry_project_config google_artifact_registry_project_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleArtifactRegistryProjectConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleArtifactRegistryProjectConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_project_config',
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
    this._location = config.location;
    this._project = config.project;
    this._platformLogsConfig.internalValue = config.platformLogsConfig;
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // platform_logs_config - computed: false, optional: true, required: false
  private _platformLogsConfig = new GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference(this, "platform_logs_config");
  public get platformLogsConfig() {
    return this._platformLogsConfig;
  }
  public putPlatformLogsConfig(value: GoogleArtifactRegistryProjectConfigPlatformLogsConfig) {
    this._platformLogsConfig.internalValue = value;
  }
  public resetPlatformLogsConfig() {
    this._platformLogsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformLogsConfigInput() {
    return this._platformLogsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleArtifactRegistryProjectConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleArtifactRegistryProjectConfigTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      platform_logs_config: googleArtifactRegistryProjectConfigPlatformLogsConfigToTerraform(this._platformLogsConfig.internalValue),
      timeouts: googleArtifactRegistryProjectConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      platform_logs_config: {
        value: googleArtifactRegistryProjectConfigPlatformLogsConfigToHclTerraform(this._platformLogsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleArtifactRegistryProjectConfigPlatformLogsConfigList",
      },
      timeouts: {
        value: googleArtifactRegistryProjectConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleArtifactRegistryProjectConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
