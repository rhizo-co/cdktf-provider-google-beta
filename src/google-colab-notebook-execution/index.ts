// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleColabNotebookExecutionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#deletion_policy GoogleColabNotebookExecution#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Required. The display name of the Notebook Execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#display_name GoogleColabNotebookExecution#display_name}
  */
  readonly displayName: string;
  /**
  * Max running time of the execution job in seconds (default 86400s / 24 hrs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#execution_timeout GoogleColabNotebookExecution#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * The user email to run the execution as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#execution_user GoogleColabNotebookExecution#execution_user}
  */
  readonly executionUser?: string;
  /**
  * The Cloud Storage location to upload the result to. Format:'gs://bucket-name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#gcs_output_uri GoogleColabNotebookExecution#gcs_output_uri}
  */
  readonly gcsOutputUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource: https://cloud.google.com/colab/docs/locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#location GoogleColabNotebookExecution#location}
  */
  readonly location: string;
  /**
  * User specified ID for the Notebook Execution Job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#notebook_execution_job_id GoogleColabNotebookExecution#notebook_execution_job_id}
  */
  readonly notebookExecutionJobId?: string;
  /**
  * The NotebookRuntimeTemplate to source compute configuration from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#notebook_runtime_template_resource_name GoogleColabNotebookExecution#notebook_runtime_template_resource_name}
  */
  readonly notebookRuntimeTemplateResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}
  */
  readonly project?: string;
  /**
  * The service account to run the execution as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#service_account GoogleColabNotebookExecution#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * custom_environment_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#custom_environment_spec GoogleColabNotebookExecution#custom_environment_spec}
  */
  readonly customEnvironmentSpec?: GoogleColabNotebookExecutionCustomEnvironmentSpec;
  /**
  * dataform_repository_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#dataform_repository_source GoogleColabNotebookExecution#dataform_repository_source}
  */
  readonly dataformRepositorySource?: GoogleColabNotebookExecutionDataformRepositorySource;
  /**
  * direct_notebook_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#direct_notebook_source GoogleColabNotebookExecution#direct_notebook_source}
  */
  readonly directNotebookSource?: GoogleColabNotebookExecutionDirectNotebookSource;
  /**
  * gcs_notebook_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#gcs_notebook_source GoogleColabNotebookExecution#gcs_notebook_source}
  */
  readonly gcsNotebookSource?: GoogleColabNotebookExecutionGcsNotebookSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#timeouts GoogleColabNotebookExecution#timeouts}
  */
  readonly timeouts?: GoogleColabNotebookExecutionTimeouts;
  /**
  * workbench_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#workbench_runtime GoogleColabNotebookExecution#workbench_runtime}
  */
  readonly workbenchRuntime?: GoogleColabNotebookExecutionWorkbenchRuntime;
}
export interface GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec {
  /**
  * The number of accelerators used by the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#accelerator_count GoogleColabNotebookExecution#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#accelerator_type GoogleColabNotebookExecution#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * The Compute Engine machine type selected for the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#machine_type GoogleColabNotebookExecution#machine_type}
  */
  readonly machineType?: string;
}

export function googleColabNotebookExecutionCustomEnvironmentSpecMachineSpecToTerraform(struct?: GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference | GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
  }
}


export function googleColabNotebookExecutionCustomEnvironmentSpecMachineSpecToHclTerraform(struct?: GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference | GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_count: {
      value: cdktf.numberToHclTerraform(struct!.acceleratorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
      this._machineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
      this._machineType = value.machineType;
    }
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }
}
export interface GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec {
  /**
  * Enable public internet access for the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#enable_internet_access GoogleColabNotebookExecution#enable_internet_access}
  */
  readonly enableInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * The name of the VPC that this runtime is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#network GoogleColabNotebookExecution#network}
  */
  readonly network?: string;
  /**
  * The name of the subnetwork that this runtime is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#subnetwork GoogleColabNotebookExecution#subnetwork}
  */
  readonly subnetwork?: string;
}

export function googleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecToTerraform(struct?: GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference | GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_internet_access: cdktf.booleanToTerraform(struct!.enableInternetAccess),
    network: cdktf.stringToTerraform(struct!.network),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function googleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecToHclTerraform(struct?: GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference | GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_internet_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInternetAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetAccess = this._enableInternetAccess;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableInternetAccess = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableInternetAccess = value.enableInternetAccess;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
  }

  // enable_internet_access - computed: false, optional: true, required: false
  private _enableInternetAccess?: boolean | cdktf.IResolvable; 
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }
  public set enableInternetAccess(value: boolean | cdktf.IResolvable) {
    this._enableInternetAccess = value;
  }
  public resetEnableInternetAccess() {
    this._enableInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetAccessInput() {
    return this._enableInternetAccess;
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

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}
export interface GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec {
  /**
  * The disk size of the runtime in GB. If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#disk_size_gb GoogleColabNotebookExecution#disk_size_gb}
  */
  readonly diskSizeGb?: string;
  /**
  * The type of the persistent disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#disk_type GoogleColabNotebookExecution#disk_type}
  */
  readonly diskType?: string;
}

export function googleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecToTerraform(struct?: GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference | GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.stringToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
  }
}


export function googleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecToHclTerraform(struct?: GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference | GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
    }
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: string; 
  public get diskSizeGb() {
    return this.getStringAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: string) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }
}
export interface GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#enable_integrity_monitoring GoogleColabNotebookExecution#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#enable_secure_boot GoogleColabNotebookExecution#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has the vTPM enabled. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#enable_vtpm GoogleColabNotebookExecution#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function googleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigToTerraform(struct?: GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference | GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}


export function googleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigToHclTerraform(struct?: GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference | GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_vtpm: {
      value: cdktf.booleanToHclTerraform(struct!.enableVtpm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    if (this._enableVtpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface GoogleColabNotebookExecutionCustomEnvironmentSpec {
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#machine_spec GoogleColabNotebookExecution#machine_spec}
  */
  readonly machineSpec?: GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec;
  /**
  * network_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#network_spec GoogleColabNotebookExecution#network_spec}
  */
  readonly networkSpec?: GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec;
  /**
  * persistent_disk_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#persistent_disk_spec GoogleColabNotebookExecution#persistent_disk_spec}
  */
  readonly persistentDiskSpec?: GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#shielded_instance_config GoogleColabNotebookExecution#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig;
}

export function googleColabNotebookExecutionCustomEnvironmentSpecToTerraform(struct?: GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference | GoogleColabNotebookExecutionCustomEnvironmentSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_spec: googleColabNotebookExecutionCustomEnvironmentSpecMachineSpecToTerraform(struct!.machineSpec),
    network_spec: googleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecToTerraform(struct!.networkSpec),
    persistent_disk_spec: googleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecToTerraform(struct!.persistentDiskSpec),
    shielded_instance_config: googleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
  }
}


export function googleColabNotebookExecutionCustomEnvironmentSpecToHclTerraform(struct?: GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference | GoogleColabNotebookExecutionCustomEnvironmentSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_spec: {
      value: googleColabNotebookExecutionCustomEnvironmentSpecMachineSpecToHclTerraform(struct!.machineSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecList",
    },
    network_spec: {
      value: googleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecToHclTerraform(struct!.networkSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecList",
    },
    persistent_disk_spec: {
      value: googleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecToHclTerraform(struct!.persistentDiskSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecList",
    },
    shielded_instance_config: {
      value: googleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleColabNotebookExecutionCustomEnvironmentSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSpec = this._machineSpec?.internalValue;
    }
    if (this._networkSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSpec = this._networkSpec?.internalValue;
    }
    if (this._persistentDiskSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentDiskSpec = this._persistentDiskSpec?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionCustomEnvironmentSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineSpec.internalValue = undefined;
      this._networkSpec.internalValue = undefined;
      this._persistentDiskSpec.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineSpec.internalValue = value.machineSpec;
      this._networkSpec.internalValue = value.networkSpec;
      this._persistentDiskSpec.internalValue = value.persistentDiskSpec;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
    }
  }

  // machine_spec - computed: false, optional: true, required: false
  private _machineSpec = new GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  public resetMachineSpec() {
    this._machineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }

  // network_spec - computed: false, optional: true, required: false
  private _networkSpec = new GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference(this, "network_spec");
  public get networkSpec() {
    return this._networkSpec;
  }
  public putNetworkSpec(value: GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec) {
    this._networkSpec.internalValue = value;
  }
  public resetNetworkSpec() {
    this._networkSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSpecInput() {
    return this._networkSpec.internalValue;
  }

  // persistent_disk_spec - computed: false, optional: true, required: false
  private _persistentDiskSpec = new GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference(this, "persistent_disk_spec");
  public get persistentDiskSpec() {
    return this._persistentDiskSpec;
  }
  public putPersistentDiskSpec(value: GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec) {
    this._persistentDiskSpec.internalValue = value;
  }
  public resetPersistentDiskSpec() {
    this._persistentDiskSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentDiskSpecInput() {
    return this._persistentDiskSpec.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }
}
export interface GoogleColabNotebookExecutionDataformRepositorySource {
  /**
  * The commit SHA to read repository with. If unset, the file will be read at HEAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#commit_sha GoogleColabNotebookExecution#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * The resource name of the Dataform Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#dataform_repository_resource_name GoogleColabNotebookExecution#dataform_repository_resource_name}
  */
  readonly dataformRepositoryResourceName: string;
}

export function googleColabNotebookExecutionDataformRepositorySourceToTerraform(struct?: GoogleColabNotebookExecutionDataformRepositorySourceOutputReference | GoogleColabNotebookExecutionDataformRepositorySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit_sha: cdktf.stringToTerraform(struct!.commitSha),
    dataform_repository_resource_name: cdktf.stringToTerraform(struct!.dataformRepositoryResourceName),
  }
}


export function googleColabNotebookExecutionDataformRepositorySourceToHclTerraform(struct?: GoogleColabNotebookExecutionDataformRepositorySourceOutputReference | GoogleColabNotebookExecutionDataformRepositorySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit_sha: {
      value: cdktf.stringToHclTerraform(struct!.commitSha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataform_repository_resource_name: {
      value: cdktf.stringToHclTerraform(struct!.dataformRepositoryResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionDataformRepositorySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleColabNotebookExecutionDataformRepositorySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitSha = this._commitSha;
    }
    if (this._dataformRepositoryResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataformRepositoryResourceName = this._dataformRepositoryResourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionDataformRepositorySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commitSha = undefined;
      this._dataformRepositoryResourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commitSha = value.commitSha;
      this._dataformRepositoryResourceName = value.dataformRepositoryResourceName;
    }
  }

  // commit_sha - computed: false, optional: true, required: false
  private _commitSha?: string; 
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }
  public set commitSha(value: string) {
    this._commitSha = value;
  }
  public resetCommitSha() {
    this._commitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitShaInput() {
    return this._commitSha;
  }

  // dataform_repository_resource_name - computed: false, optional: false, required: true
  private _dataformRepositoryResourceName?: string; 
  public get dataformRepositoryResourceName() {
    return this.getStringAttribute('dataform_repository_resource_name');
  }
  public set dataformRepositoryResourceName(value: string) {
    this._dataformRepositoryResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformRepositoryResourceNameInput() {
    return this._dataformRepositoryResourceName;
  }
}
export interface GoogleColabNotebookExecutionDirectNotebookSource {
  /**
  * The base64-encoded contents of the input notebook file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#content GoogleColabNotebookExecution#content}
  */
  readonly content: string;
}

export function googleColabNotebookExecutionDirectNotebookSourceToTerraform(struct?: GoogleColabNotebookExecutionDirectNotebookSourceOutputReference | GoogleColabNotebookExecutionDirectNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function googleColabNotebookExecutionDirectNotebookSourceToHclTerraform(struct?: GoogleColabNotebookExecutionDirectNotebookSourceOutputReference | GoogleColabNotebookExecutionDirectNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionDirectNotebookSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleColabNotebookExecutionDirectNotebookSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionDirectNotebookSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}
export interface GoogleColabNotebookExecutionGcsNotebookSource {
  /**
  * The version of the Cloud Storage object to read. If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#generation GoogleColabNotebookExecution#generation}
  */
  readonly generation?: string;
  /**
  * The Cloud Storage uri pointing to the ipynb file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#uri GoogleColabNotebookExecution#uri}
  */
  readonly uri: string;
}

export function googleColabNotebookExecutionGcsNotebookSourceToTerraform(struct?: GoogleColabNotebookExecutionGcsNotebookSourceOutputReference | GoogleColabNotebookExecutionGcsNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.stringToTerraform(struct!.generation),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleColabNotebookExecutionGcsNotebookSourceToHclTerraform(struct?: GoogleColabNotebookExecutionGcsNotebookSourceOutputReference | GoogleColabNotebookExecutionGcsNotebookSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionGcsNotebookSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleColabNotebookExecutionGcsNotebookSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionGcsNotebookSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generation = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generation = value.generation;
      this._uri = value.uri;
    }
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleColabNotebookExecutionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#create GoogleColabNotebookExecution#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#delete GoogleColabNotebookExecution#delete}
  */
  readonly delete?: string;
}

export function googleColabNotebookExecutionTimeoutsToTerraform(struct?: GoogleColabNotebookExecutionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleColabNotebookExecutionTimeoutsToHclTerraform(struct?: GoogleColabNotebookExecutionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleColabNotebookExecutionTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface GoogleColabNotebookExecutionWorkbenchRuntimeVmImage {
  /**
  * Use this VM image family to find the image; the newest image in this family will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#family GoogleColabNotebookExecution#family}
  */
  readonly family?: string;
  /**
  * Use VM image name to find the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#name GoogleColabNotebookExecution#name}
  */
  readonly name?: string;
  /**
  * The name of the Google Cloud project that this VM image belongs to. Format: {project_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}
  */
  readonly project?: string;
}

export function googleColabNotebookExecutionWorkbenchRuntimeVmImageToTerraform(struct?: GoogleColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference | GoogleColabNotebookExecutionWorkbenchRuntimeVmImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function googleColabNotebookExecutionWorkbenchRuntimeVmImageToHclTerraform(struct?: GoogleColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference | GoogleColabNotebookExecutionWorkbenchRuntimeVmImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleColabNotebookExecutionWorkbenchRuntimeVmImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionWorkbenchRuntimeVmImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._family = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._family = value.family;
      this._name = value.name;
      this._project = value.project;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project - computed: false, optional: true, required: false
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
}
export interface GoogleColabNotebookExecutionWorkbenchRuntime {
  /**
  * vm_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#vm_image GoogleColabNotebookExecution#vm_image}
  */
  readonly vmImage: GoogleColabNotebookExecutionWorkbenchRuntimeVmImage;
}

export function googleColabNotebookExecutionWorkbenchRuntimeToTerraform(struct?: GoogleColabNotebookExecutionWorkbenchRuntimeOutputReference | GoogleColabNotebookExecutionWorkbenchRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vm_image: googleColabNotebookExecutionWorkbenchRuntimeVmImageToTerraform(struct!.vmImage),
  }
}


export function googleColabNotebookExecutionWorkbenchRuntimeToHclTerraform(struct?: GoogleColabNotebookExecutionWorkbenchRuntimeOutputReference | GoogleColabNotebookExecutionWorkbenchRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vm_image: {
      value: googleColabNotebookExecutionWorkbenchRuntimeVmImageToHclTerraform(struct!.vmImage),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleColabNotebookExecutionWorkbenchRuntimeVmImageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleColabNotebookExecutionWorkbenchRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleColabNotebookExecutionWorkbenchRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vmImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmImage = this._vmImage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleColabNotebookExecutionWorkbenchRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vmImage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vmImage.internalValue = value.vmImage;
    }
  }

  // vm_image - computed: false, optional: false, required: true
  private _vmImage = new GoogleColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference(this, "vm_image");
  public get vmImage() {
    return this._vmImage;
  }
  public putVmImage(value: GoogleColabNotebookExecutionWorkbenchRuntimeVmImage) {
    this._vmImage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageInput() {
    return this._vmImage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution google_colab_notebook_execution}
*/
export class GoogleColabNotebookExecution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_colab_notebook_execution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleColabNotebookExecution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleColabNotebookExecution to import
  * @param importFromId The id of the existing GoogleColabNotebookExecution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleColabNotebookExecution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_colab_notebook_execution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_colab_notebook_execution google_colab_notebook_execution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleColabNotebookExecutionConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleColabNotebookExecutionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_colab_notebook_execution',
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
    this._displayName = config.displayName;
    this._executionTimeout = config.executionTimeout;
    this._executionUser = config.executionUser;
    this._gcsOutputUri = config.gcsOutputUri;
    this._id = config.id;
    this._location = config.location;
    this._notebookExecutionJobId = config.notebookExecutionJobId;
    this._notebookRuntimeTemplateResourceName = config.notebookRuntimeTemplateResourceName;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._customEnvironmentSpec.internalValue = config.customEnvironmentSpec;
    this._dataformRepositorySource.internalValue = config.dataformRepositorySource;
    this._directNotebookSource.internalValue = config.directNotebookSource;
    this._gcsNotebookSource.internalValue = config.gcsNotebookSource;
    this._timeouts.internalValue = config.timeouts;
    this._workbenchRuntime.internalValue = config.workbenchRuntime;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // execution_timeout - computed: false, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // execution_user - computed: false, optional: true, required: false
  private _executionUser?: string; 
  public get executionUser() {
    return this.getStringAttribute('execution_user');
  }
  public set executionUser(value: string) {
    this._executionUser = value;
  }
  public resetExecutionUser() {
    this._executionUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionUserInput() {
    return this._executionUser;
  }

  // gcs_output_uri - computed: false, optional: false, required: true
  private _gcsOutputUri?: string; 
  public get gcsOutputUri() {
    return this.getStringAttribute('gcs_output_uri');
  }
  public set gcsOutputUri(value: string) {
    this._gcsOutputUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsOutputUriInput() {
    return this._gcsOutputUri;
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

  // notebook_execution_job_id - computed: true, optional: true, required: false
  private _notebookExecutionJobId?: string; 
  public get notebookExecutionJobId() {
    return this.getStringAttribute('notebook_execution_job_id');
  }
  public set notebookExecutionJobId(value: string) {
    this._notebookExecutionJobId = value;
  }
  public resetNotebookExecutionJobId() {
    this._notebookExecutionJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookExecutionJobIdInput() {
    return this._notebookExecutionJobId;
  }

  // notebook_runtime_template_resource_name - computed: false, optional: true, required: false
  private _notebookRuntimeTemplateResourceName?: string; 
  public get notebookRuntimeTemplateResourceName() {
    return this.getStringAttribute('notebook_runtime_template_resource_name');
  }
  public set notebookRuntimeTemplateResourceName(value: string) {
    this._notebookRuntimeTemplateResourceName = value;
  }
  public resetNotebookRuntimeTemplateResourceName() {
    this._notebookRuntimeTemplateResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookRuntimeTemplateResourceNameInput() {
    return this._notebookRuntimeTemplateResourceName;
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // custom_environment_spec - computed: false, optional: true, required: false
  private _customEnvironmentSpec = new GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference(this, "custom_environment_spec");
  public get customEnvironmentSpec() {
    return this._customEnvironmentSpec;
  }
  public putCustomEnvironmentSpec(value: GoogleColabNotebookExecutionCustomEnvironmentSpec) {
    this._customEnvironmentSpec.internalValue = value;
  }
  public resetCustomEnvironmentSpec() {
    this._customEnvironmentSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvironmentSpecInput() {
    return this._customEnvironmentSpec.internalValue;
  }

  // dataform_repository_source - computed: false, optional: true, required: false
  private _dataformRepositorySource = new GoogleColabNotebookExecutionDataformRepositorySourceOutputReference(this, "dataform_repository_source");
  public get dataformRepositorySource() {
    return this._dataformRepositorySource;
  }
  public putDataformRepositorySource(value: GoogleColabNotebookExecutionDataformRepositorySource) {
    this._dataformRepositorySource.internalValue = value;
  }
  public resetDataformRepositorySource() {
    this._dataformRepositorySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataformRepositorySourceInput() {
    return this._dataformRepositorySource.internalValue;
  }

  // direct_notebook_source - computed: false, optional: true, required: false
  private _directNotebookSource = new GoogleColabNotebookExecutionDirectNotebookSourceOutputReference(this, "direct_notebook_source");
  public get directNotebookSource() {
    return this._directNotebookSource;
  }
  public putDirectNotebookSource(value: GoogleColabNotebookExecutionDirectNotebookSource) {
    this._directNotebookSource.internalValue = value;
  }
  public resetDirectNotebookSource() {
    this._directNotebookSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directNotebookSourceInput() {
    return this._directNotebookSource.internalValue;
  }

  // gcs_notebook_source - computed: false, optional: true, required: false
  private _gcsNotebookSource = new GoogleColabNotebookExecutionGcsNotebookSourceOutputReference(this, "gcs_notebook_source");
  public get gcsNotebookSource() {
    return this._gcsNotebookSource;
  }
  public putGcsNotebookSource(value: GoogleColabNotebookExecutionGcsNotebookSource) {
    this._gcsNotebookSource.internalValue = value;
  }
  public resetGcsNotebookSource() {
    this._gcsNotebookSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsNotebookSourceInput() {
    return this._gcsNotebookSource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleColabNotebookExecutionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleColabNotebookExecutionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workbench_runtime - computed: false, optional: true, required: false
  private _workbenchRuntime = new GoogleColabNotebookExecutionWorkbenchRuntimeOutputReference(this, "workbench_runtime");
  public get workbenchRuntime() {
    return this._workbenchRuntime;
  }
  public putWorkbenchRuntime(value: GoogleColabNotebookExecutionWorkbenchRuntime) {
    this._workbenchRuntime.internalValue = value;
  }
  public resetWorkbenchRuntime() {
    this._workbenchRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workbenchRuntimeInput() {
    return this._workbenchRuntime.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      execution_timeout: cdktf.stringToTerraform(this._executionTimeout),
      execution_user: cdktf.stringToTerraform(this._executionUser),
      gcs_output_uri: cdktf.stringToTerraform(this._gcsOutputUri),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      notebook_execution_job_id: cdktf.stringToTerraform(this._notebookExecutionJobId),
      notebook_runtime_template_resource_name: cdktf.stringToTerraform(this._notebookRuntimeTemplateResourceName),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      custom_environment_spec: googleColabNotebookExecutionCustomEnvironmentSpecToTerraform(this._customEnvironmentSpec.internalValue),
      dataform_repository_source: googleColabNotebookExecutionDataformRepositorySourceToTerraform(this._dataformRepositorySource.internalValue),
      direct_notebook_source: googleColabNotebookExecutionDirectNotebookSourceToTerraform(this._directNotebookSource.internalValue),
      gcs_notebook_source: googleColabNotebookExecutionGcsNotebookSourceToTerraform(this._gcsNotebookSource.internalValue),
      timeouts: googleColabNotebookExecutionTimeoutsToTerraform(this._timeouts.internalValue),
      workbench_runtime: googleColabNotebookExecutionWorkbenchRuntimeToTerraform(this._workbenchRuntime.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_timeout: {
        value: cdktf.stringToHclTerraform(this._executionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_user: {
        value: cdktf.stringToHclTerraform(this._executionUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcs_output_uri: {
        value: cdktf.stringToHclTerraform(this._gcsOutputUri),
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
      notebook_execution_job_id: {
        value: cdktf.stringToHclTerraform(this._notebookExecutionJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notebook_runtime_template_resource_name: {
        value: cdktf.stringToHclTerraform(this._notebookRuntimeTemplateResourceName),
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
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_environment_spec: {
        value: googleColabNotebookExecutionCustomEnvironmentSpecToHclTerraform(this._customEnvironmentSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleColabNotebookExecutionCustomEnvironmentSpecList",
      },
      dataform_repository_source: {
        value: googleColabNotebookExecutionDataformRepositorySourceToHclTerraform(this._dataformRepositorySource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleColabNotebookExecutionDataformRepositorySourceList",
      },
      direct_notebook_source: {
        value: googleColabNotebookExecutionDirectNotebookSourceToHclTerraform(this._directNotebookSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleColabNotebookExecutionDirectNotebookSourceList",
      },
      gcs_notebook_source: {
        value: googleColabNotebookExecutionGcsNotebookSourceToHclTerraform(this._gcsNotebookSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleColabNotebookExecutionGcsNotebookSourceList",
      },
      timeouts: {
        value: googleColabNotebookExecutionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleColabNotebookExecutionTimeouts",
      },
      workbench_runtime: {
        value: googleColabNotebookExecutionWorkbenchRuntimeToHclTerraform(this._workbenchRuntime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleColabNotebookExecutionWorkbenchRuntimeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
