// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirebaseAiLogicConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#deletion_policy GoogleFirebaseAiLogicConfig#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#location GoogleFirebaseAiLogicConfig#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}
  */
  readonly project?: string;
  /**
  * generative_language_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#generative_language_config GoogleFirebaseAiLogicConfig#generative_language_config}
  */
  readonly generativeLanguageConfig?: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig;
  /**
  * telemetry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#telemetry_config GoogleFirebaseAiLogicConfig#telemetry_config}
  */
  readonly telemetryConfig?: GoogleFirebaseAiLogicConfigTelemetryConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#timeouts GoogleFirebaseAiLogicConfig#timeouts}
  */
  readonly timeouts?: GoogleFirebaseAiLogicConfigTimeouts;
  /**
  * traffic_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#traffic_filter GoogleFirebaseAiLogicConfig#traffic_filter}
  */
  readonly trafficFilter?: GoogleFirebaseAiLogicConfigTrafficFilter;
}
export interface GoogleFirebaseAiLogicConfigGenerativeLanguageConfig {
  /**
  * The value of the API key. The API key must have
  * 'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
  * Note that this API is sometimes called the *Generative Language API* in
  * the Google Cloud console.
  * 
  * Do **not** add this Gemini API key into your app's codebase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#api_key GoogleFirebaseAiLogicConfig#api_key}
  */
  readonly apiKey?: string;
  /**
  * The value of the API key. The API key must have
  * 'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
  * Note that this API is sometimes called the *Generative Language API* in
  * the Google Cloud console.
  * 
  * Do **not** add this Gemini API key into your app's codebase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#api_key_wo GoogleFirebaseAiLogicConfig#api_key_wo}
  */
  readonly apiKeyWo?: string;
  /**
  * Triggers update of 'api_key_wo' write-only. Increment this value when an update to 'api_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#api_key_wo_version GoogleFirebaseAiLogicConfig#api_key_wo_version}
  */
  readonly apiKeyWoVersion?: string;
}

export function googleFirebaseAiLogicConfigGenerativeLanguageConfigToTerraform(struct?: GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference | GoogleFirebaseAiLogicConfigGenerativeLanguageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_key_wo: cdktf.stringToTerraform(struct!.apiKeyWo),
    api_key_wo_version: cdktf.stringToTerraform(struct!.apiKeyWoVersion),
  }
}


export function googleFirebaseAiLogicConfigGenerativeLanguageConfigToHclTerraform(struct?: GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference | GoogleFirebaseAiLogicConfigGenerativeLanguageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_wo: {
      value: cdktf.stringToHclTerraform(struct!.apiKeyWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_wo_version: {
      value: cdktf.stringToHclTerraform(struct!.apiKeyWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseAiLogicConfigGenerativeLanguageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyWo = this._apiKeyWo;
    }
    if (this._apiKeyWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyWoVersion = this._apiKeyWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._apiKeyWo = undefined;
      this._apiKeyWoVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._apiKeyWo = value.apiKeyWo;
      this._apiKeyWoVersion = value.apiKeyWoVersion;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_wo - computed: false, optional: true, required: false
  private _apiKeyWo?: string; 
  public get apiKeyWo() {
    return this.getStringAttribute('api_key_wo');
  }
  public set apiKeyWo(value: string) {
    this._apiKeyWo = value;
  }
  public resetApiKeyWo() {
    this._apiKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyWoInput() {
    return this._apiKeyWo;
  }

  // api_key_wo_version - computed: false, optional: true, required: false
  private _apiKeyWoVersion?: string; 
  public get apiKeyWoVersion() {
    return this.getStringAttribute('api_key_wo_version');
  }
  public set apiKeyWoVersion(value: string) {
    this._apiKeyWoVersion = value;
  }
  public resetApiKeyWoVersion() {
    this._apiKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyWoVersionInput() {
    return this._apiKeyWoVersion;
  }
}
export interface GoogleFirebaseAiLogicConfigTelemetryConfig {
  /**
  * The current monitoring mode used for this project.
  * Possible values:
  * NONE
  * ALL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#mode GoogleFirebaseAiLogicConfig#mode}
  */
  readonly mode?: string;
  /**
  * The percentage of requests to be sampled, expressed as a fraction
  * in the range (0,1]. Note that the actual sampling rate may be lower than
  * the specified value if the system is overloaded. Default is 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#sampling_rate GoogleFirebaseAiLogicConfig#sampling_rate}
  */
  readonly samplingRate?: number;
}

export function googleFirebaseAiLogicConfigTelemetryConfigToTerraform(struct?: GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference | GoogleFirebaseAiLogicConfigTelemetryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    sampling_rate: cdktf.numberToTerraform(struct!.samplingRate),
  }
}


export function googleFirebaseAiLogicConfigTelemetryConfigToHclTerraform(struct?: GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference | GoogleFirebaseAiLogicConfigTelemetryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseAiLogicConfigTelemetryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAiLogicConfigTelemetryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._samplingRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._samplingRate = value.samplingRate;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // sampling_rate - computed: false, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}
export interface GoogleFirebaseAiLogicConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#create GoogleFirebaseAiLogicConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#delete GoogleFirebaseAiLogicConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#update GoogleFirebaseAiLogicConfig#update}
  */
  readonly update?: string;
}

export function googleFirebaseAiLogicConfigTimeoutsToTerraform(struct?: GoogleFirebaseAiLogicConfigTimeouts | cdktf.IResolvable): any {
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


export function googleFirebaseAiLogicConfigTimeoutsToHclTerraform(struct?: GoogleFirebaseAiLogicConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleFirebaseAiLogicConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirebaseAiLogicConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleFirebaseAiLogicConfigTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleFirebaseAiLogicConfigTrafficFilter {
  /**
  * Only allows users to use AI Logic via prompt templates for this project.
  * If true, only calls using server templates are permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#template_only GoogleFirebaseAiLogicConfig#template_only}
  */
  readonly templateOnly?: boolean | cdktf.IResolvable;
}

export function googleFirebaseAiLogicConfigTrafficFilterToTerraform(struct?: GoogleFirebaseAiLogicConfigTrafficFilterOutputReference | GoogleFirebaseAiLogicConfigTrafficFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_only: cdktf.booleanToTerraform(struct!.templateOnly),
  }
}


export function googleFirebaseAiLogicConfigTrafficFilterToHclTerraform(struct?: GoogleFirebaseAiLogicConfigTrafficFilterOutputReference | GoogleFirebaseAiLogicConfigTrafficFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_only: {
      value: cdktf.booleanToHclTerraform(struct!.templateOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAiLogicConfigTrafficFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseAiLogicConfigTrafficFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateOnly = this._templateOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAiLogicConfigTrafficFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateOnly = value.templateOnly;
    }
  }

  // template_only - computed: true, optional: true, required: false
  private _templateOnly?: boolean | cdktf.IResolvable; 
  public get templateOnly() {
    return this.getBooleanAttribute('template_only');
  }
  public set templateOnly(value: boolean | cdktf.IResolvable) {
    this._templateOnly = value;
  }
  public resetTemplateOnly() {
    this._templateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateOnlyInput() {
    return this._templateOnly;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config google_firebase_ai_logic_config}
*/
export class GoogleFirebaseAiLogicConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_ai_logic_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirebaseAiLogicConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirebaseAiLogicConfig to import
  * @param importFromId The id of the existing GoogleFirebaseAiLogicConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirebaseAiLogicConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_ai_logic_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firebase_ai_logic_config google_firebase_ai_logic_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirebaseAiLogicConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleFirebaseAiLogicConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_ai_logic_config',
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
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._generativeLanguageConfig.internalValue = config.generativeLanguageConfig;
    this._telemetryConfig.internalValue = config.telemetryConfig;
    this._timeouts.internalValue = config.timeouts;
    this._trafficFilter.internalValue = config.trafficFilter;
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

  // location - computed: false, optional: true, required: false
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

  // generative_language_config - computed: false, optional: true, required: false
  private _generativeLanguageConfig = new GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference(this, "generative_language_config");
  public get generativeLanguageConfig() {
    return this._generativeLanguageConfig;
  }
  public putGenerativeLanguageConfig(value: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig) {
    this._generativeLanguageConfig.internalValue = value;
  }
  public resetGenerativeLanguageConfig() {
    this._generativeLanguageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeLanguageConfigInput() {
    return this._generativeLanguageConfig.internalValue;
  }

  // telemetry_config - computed: false, optional: true, required: false
  private _telemetryConfig = new GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference(this, "telemetry_config");
  public get telemetryConfig() {
    return this._telemetryConfig;
  }
  public putTelemetryConfig(value: GoogleFirebaseAiLogicConfigTelemetryConfig) {
    this._telemetryConfig.internalValue = value;
  }
  public resetTelemetryConfig() {
    this._telemetryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryConfigInput() {
    return this._telemetryConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirebaseAiLogicConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirebaseAiLogicConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic_filter - computed: false, optional: true, required: false
  private _trafficFilter = new GoogleFirebaseAiLogicConfigTrafficFilterOutputReference(this, "traffic_filter");
  public get trafficFilter() {
    return this._trafficFilter;
  }
  public putTrafficFilter(value: GoogleFirebaseAiLogicConfigTrafficFilter) {
    this._trafficFilter.internalValue = value;
  }
  public resetTrafficFilter() {
    this._trafficFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFilterInput() {
    return this._trafficFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      generative_language_config: googleFirebaseAiLogicConfigGenerativeLanguageConfigToTerraform(this._generativeLanguageConfig.internalValue),
      telemetry_config: googleFirebaseAiLogicConfigTelemetryConfigToTerraform(this._telemetryConfig.internalValue),
      timeouts: googleFirebaseAiLogicConfigTimeoutsToTerraform(this._timeouts.internalValue),
      traffic_filter: googleFirebaseAiLogicConfigTrafficFilterToTerraform(this._trafficFilter.internalValue),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generative_language_config: {
        value: googleFirebaseAiLogicConfigGenerativeLanguageConfigToHclTerraform(this._generativeLanguageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirebaseAiLogicConfigGenerativeLanguageConfigList",
      },
      telemetry_config: {
        value: googleFirebaseAiLogicConfigTelemetryConfigToHclTerraform(this._telemetryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirebaseAiLogicConfigTelemetryConfigList",
      },
      timeouts: {
        value: googleFirebaseAiLogicConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirebaseAiLogicConfigTimeouts",
      },
      traffic_filter: {
        value: googleFirebaseAiLogicConfigTrafficFilterToHclTerraform(this._trafficFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirebaseAiLogicConfigTrafficFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
