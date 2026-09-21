// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBackupDrRestoreWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. The ID of the backup to restore from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#backup_id GoogleBackupDrRestoreWorkload#backup_id}
  */
  readonly backupId: string;
  /**
  * Required. The ID of the backup vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#backup_vault_id GoogleBackupDrRestoreWorkload#backup_vault_id}
  */
  readonly backupVaultId: string;
  /**
  * Optional. A field mask used to clear server-side default values during restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#clear_overrides_field_mask GoogleBackupDrRestoreWorkload#clear_overrides_field_mask}
  */
  readonly clearOverridesFieldMask?: string;
  /**
  * Required. The ID of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#data_source_id GoogleBackupDrRestoreWorkload#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Optional. If true (default), running terraform destroy will delete the live resource in GCP.
  * If false, only the restore record is removed from the state, leaving the resource active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#delete_restored_instance GoogleBackupDrRestoreWorkload#delete_restored_instance}
  */
  readonly deleteRestoredInstance?: boolean | cdktf.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#deletion_policy GoogleBackupDrRestoreWorkload#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#id GoogleBackupDrRestoreWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required. The location for the backup vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#location GoogleBackupDrRestoreWorkload#location}
  */
  readonly location: string;
  /**
  * The resource name of the backup instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#name GoogleBackupDrRestoreWorkload#name}
  */
  readonly name?: string;
  /**
  * Optional. An optional request ID to identify requests. Specify a unique request ID
  * so that if you must retry your request, the server will know to ignore
  * the request if it has already been completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#request_id GoogleBackupDrRestoreWorkload#request_id}
  */
  readonly requestId?: string;
  /**
  * compute_instance_restore_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#compute_instance_restore_properties GoogleBackupDrRestoreWorkload#compute_instance_restore_properties}
  */
  readonly computeInstanceRestoreProperties?: GoogleBackupDrRestoreWorkloadComputeInstanceRestoreProperties;
  /**
  * compute_instance_target_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#compute_instance_target_environment GoogleBackupDrRestoreWorkload#compute_instance_target_environment}
  */
  readonly computeInstanceTargetEnvironment?: GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironment;
  /**
  * disk_restore_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#disk_restore_properties GoogleBackupDrRestoreWorkload#disk_restore_properties}
  */
  readonly diskRestoreProperties?: GoogleBackupDrRestoreWorkloadDiskRestoreProperties;
  /**
  * disk_target_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#disk_target_environment GoogleBackupDrRestoreWorkload#disk_target_environment}
  */
  readonly diskTargetEnvironment?: GoogleBackupDrRestoreWorkloadDiskTargetEnvironment;
  /**
  * region_disk_target_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#region_disk_target_environment GoogleBackupDrRestoreWorkload#region_disk_target_environment}
  */
  readonly regionDiskTargetEnvironment?: GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironment;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#timeouts GoogleBackupDrRestoreWorkload#timeouts}
  */
  readonly timeouts?: GoogleBackupDrRestoreWorkloadTimeouts;
}
export interface GoogleBackupDrRestoreWorkloadTargetResourceGcpResource {
}

export function googleBackupDrRestoreWorkloadTargetResourceGcpResourceToTerraform(struct?: GoogleBackupDrRestoreWorkloadTargetResourceGcpResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleBackupDrRestoreWorkloadTargetResourceGcpResourceToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadTargetResourceGcpResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleBackupDrRestoreWorkloadTargetResourceGcpResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadTargetResourceGcpResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadTargetResourceGcpResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_resourcename - computed: true, optional: false, required: false
  public get gcpResourcename() {
    return this.getStringAttribute('gcp_resourcename');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleBackupDrRestoreWorkloadTargetResourceGcpResourceList extends cdktf.ComplexList {

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
  public get(index: number): GoogleBackupDrRestoreWorkloadTargetResourceGcpResourceOutputReference {
    return new GoogleBackupDrRestoreWorkloadTargetResourceGcpResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadTargetResource {
}

export function googleBackupDrRestoreWorkloadTargetResourceToTerraform(struct?: GoogleBackupDrRestoreWorkloadTargetResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleBackupDrRestoreWorkloadTargetResourceToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadTargetResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleBackupDrRestoreWorkloadTargetResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadTargetResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadTargetResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_resource - computed: true, optional: false, required: false
  private _gcpResource = new GoogleBackupDrRestoreWorkloadTargetResourceGcpResourceList(this, "gcp_resource", false);
  public get gcpResource() {
    return this._gcpResource;
  }
}

export class GoogleBackupDrRestoreWorkloadTargetResourceList extends cdktf.ComplexList {

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
  public get(index: number): GoogleBackupDrRestoreWorkloadTargetResourceOutputReference {
    return new GoogleBackupDrRestoreWorkloadTargetResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures {
  /**
  * Optional. Whether to enable nested virtualization or not (default is false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#enable_nested_virtualization GoogleBackupDrRestoreWorkload#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * Optional. Whether to enable UEFI networking for instance creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#enable_uefi_networking GoogleBackupDrRestoreWorkload#enable_uefi_networking}
  */
  readonly enableUefiNetworking?: boolean | cdktf.IResolvable;
  /**
  * Optional. The number of threads per physical core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#threads_per_core GoogleBackupDrRestoreWorkload#threads_per_core}
  */
  readonly threadsPerCore?: number;
  /**
  * Optional. The number of physical cores to expose to an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#visible_core_count GoogleBackupDrRestoreWorkload#visible_core_count}
  */
  readonly visibleCoreCount?: number;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    enable_uefi_networking: cdktf.booleanToTerraform(struct!.enableUefiNetworking),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
    visible_core_count: cdktf.numberToTerraform(struct!.visibleCoreCount),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_nested_virtualization: {
      value: cdktf.booleanToHclTerraform(struct!.enableNestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_uefi_networking: {
      value: cdktf.booleanToHclTerraform(struct!.enableUefiNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visible_core_count: {
      value: cdktf.numberToHclTerraform(struct!.visibleCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
    }
    if (this._enableUefiNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUefiNetworking = this._enableUefiNetworking;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    if (this._visibleCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleCoreCount = this._visibleCoreCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNestedVirtualization = undefined;
      this._enableUefiNetworking = undefined;
      this._threadsPerCore = undefined;
      this._visibleCoreCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._enableUefiNetworking = value.enableUefiNetworking;
      this._threadsPerCore = value.threadsPerCore;
      this._visibleCoreCount = value.visibleCoreCount;
    }
  }

  // enable_nested_virtualization - computed: false, optional: true, required: false
  private _enableNestedVirtualization?: boolean | cdktf.IResolvable; 
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }
  public set enableNestedVirtualization(value: boolean | cdktf.IResolvable) {
    this._enableNestedVirtualization = value;
  }
  public resetEnableNestedVirtualization() {
    this._enableNestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNestedVirtualizationInput() {
    return this._enableNestedVirtualization;
  }

  // enable_uefi_networking - computed: false, optional: true, required: false
  private _enableUefiNetworking?: boolean | cdktf.IResolvable; 
  public get enableUefiNetworking() {
    return this.getBooleanAttribute('enable_uefi_networking');
  }
  public set enableUefiNetworking(value: boolean | cdktf.IResolvable) {
    this._enableUefiNetworking = value;
  }
  public resetEnableUefiNetworking() {
    this._enableUefiNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUefiNetworkingInput() {
    return this._enableUefiNetworking;
  }

  // threads_per_core - computed: false, optional: true, required: false
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  public resetThreadsPerCore() {
    this._threadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }

  // visible_core_count - computed: false, optional: true, required: false
  private _visibleCoreCount?: number; 
  public get visibleCoreCount() {
    return this.getNumberAttribute('visible_core_count');
  }
  public set visibleCoreCount(value: number) {
    this._visibleCoreCount = value;
  }
  public resetVisibleCoreCount() {
    this._visibleCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleCoreCountInput() {
    return this._visibleCoreCount;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity {
  /**
  *  Possible values: ["TYPE_UNSPECIFIED", "NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#consume_allocation_type GoogleBackupDrRestoreWorkload#consume_allocation_type}
  */
  readonly consumeAllocationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#key GoogleBackupDrRestoreWorkload#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#values GoogleBackupDrRestoreWorkload#values}
  */
  readonly values?: string[];
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_allocation_type: cdktf.stringToTerraform(struct!.consumeAllocationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consume_allocation_type: {
      value: cdktf.stringToHclTerraform(struct!.consumeAllocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeAllocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeAllocationType = this._consumeAllocationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeAllocationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeAllocationType = value.consumeAllocationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_allocation_type - computed: false, optional: true, required: false
  private _consumeAllocationType?: string; 
  public get consumeAllocationType() {
    return this.getStringAttribute('consume_allocation_type');
  }
  public set consumeAllocationType(value: string) {
    this._consumeAllocationType = value;
  }
  public resetConsumeAllocationType() {
    this._consumeAllocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeAllocationTypeInput() {
    return this._consumeAllocationType;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig {
  /**
  * Optional. Defines whether the instance should have confidential compute enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#enable_confidential_compute GoogleBackupDrRestoreWorkload#enable_confidential_compute}
  */
  readonly enableConfidentialCompute?: boolean | cdktf.IResolvable;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_confidential_compute: cdktf.booleanToTerraform(struct!.enableConfidentialCompute),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_confidential_compute: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableConfidentialCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialCompute = this._enableConfidentialCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableConfidentialCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableConfidentialCompute = value.enableConfidentialCompute;
    }
  }

  // enable_confidential_compute - computed: false, optional: true, required: false
  private _enableConfidentialCompute?: boolean | cdktf.IResolvable; 
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }
  public set enableConfidentialCompute(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialCompute = value;
  }
  public resetEnableConfidentialCompute() {
    this._enableConfidentialCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialComputeInput() {
    return this._enableConfidentialCompute;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey {
  /**
  * Optional. The name of the encryption key that is stored in Google Cloud KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#kms_key_name GoogleBackupDrRestoreWorkload#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Optional. The service account being used for the encryption request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#kms_key_service_account GoogleBackupDrRestoreWorkload#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Optional. Specifies a 256-bit customer-supplied encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#raw_key GoogleBackupDrRestoreWorkload#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Optional. RSA-wrapped 2048-bit customer-supplied encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#rsa_encrypted_key GoogleBackupDrRestoreWorkload#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktf.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktf.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktf.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature {
  /**
  * Optional. The ID of a supported feature. Possible values: ["FEATURE_TYPE_UNSPECIFIED", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "MULTI_IP_SUBNET", "UEFI_COMPATIBLE", "SECURE_BOOT", "GVNIC", "SEV_CAPABLE", "BARE_METAL_LINUX_COMPATIBLE", "SUSPEND_RESUME_COMPATIBLE", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "TDX_CAPABLE", "IDPF", "SEV_LIVE_MIGRATABLE_V2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#type GoogleBackupDrRestoreWorkload#type}
  */
  readonly type?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams {
  /**
  * Optional. Specifies the disk name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#disk_name GoogleBackupDrRestoreWorkload#disk_name}
  */
  readonly diskName?: string;
  /**
  * Optional. URL of the zone where the disk should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#replica_zones GoogleBackupDrRestoreWorkload#replica_zones}
  */
  readonly replicaZones?: string[];
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    replica_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replicaZones),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_name: {
      value: cdktf.stringToHclTerraform(struct!.diskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.replicaZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._replicaZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaZones = this._replicaZones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskName = undefined;
      this._replicaZones = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskName = value.diskName;
      this._replicaZones = value.replicaZones;
    }
  }

  // disk_name - computed: false, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // replica_zones - computed: false, optional: true, required: false
  private _replicaZones?: string[]; 
  public get replicaZones() {
    return this.getListAttribute('replica_zones');
  }
  public set replicaZones(value: string[]) {
    this._replicaZones = value;
  }
  public resetReplicaZones() {
    this._replicaZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaZonesInput() {
    return this._replicaZones;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks {
  /**
  * Optional. Specifies whether the disk will be auto-deleted when the instance is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#auto_delete GoogleBackupDrRestoreWorkload#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Optional. Indicates that this is a boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#boot GoogleBackupDrRestoreWorkload#boot}
  */
  readonly boot?: boolean | cdktf.IResolvable;
  /**
  * Optional. This is used as an identifier for the disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#device_name GoogleBackupDrRestoreWorkload#device_name}
  */
  readonly deviceName?: string;
  /**
  * Optional. Specifies the disk interface to use for attaching this disk. Possible values: ["DISK_INTERFACE_UNSPECIFIED", "SCSI", "NVME", "NVDIMM", "ISCSI"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#disk_interface GoogleBackupDrRestoreWorkload#disk_interface}
  */
  readonly diskInterface?: string;
  /**
  * Optional. The size of the disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#disk_size_gb GoogleBackupDrRestoreWorkload#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Output only. The URI of the disk type resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#disk_type GoogleBackupDrRestoreWorkload#disk_type}
  */
  readonly diskType?: string;
  /**
  * Optional. A zero-based index to this disk, where 0 is reserved for the boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#index GoogleBackupDrRestoreWorkload#index}
  */
  readonly index?: number;
  /**
  * Optional. Type of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#kind GoogleBackupDrRestoreWorkload#kind}
  */
  readonly kind?: string;
  /**
  * Optional. Any valid publicly visible licenses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#license GoogleBackupDrRestoreWorkload#license}
  */
  readonly license?: string[];
  /**
  * Optional. The mode in which to attach this disk. Possible values: ["DISK_MODE_UNSPECIFIED", "READ_WRITE", "READ_ONLY", "LOCKED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#mode GoogleBackupDrRestoreWorkload#mode}
  */
  readonly mode?: string;
  /**
  * Optional. Specifies the saved state of the disk. Possible values: ["DISK_SAVED_STATE_UNSPECIFIED", "PRESERVED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#saved_state GoogleBackupDrRestoreWorkload#saved_state}
  */
  readonly savedState?: string;
  /**
  * Optional. Specifies a valid partial or full URL to an existing Persistent Disk resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#source GoogleBackupDrRestoreWorkload#source}
  */
  readonly source?: string;
  /**
  * Optional. Specifies the type of the disk. Possible values: ["DISK_TYPE_UNSPECIFIED", "SCRATCH", "PERSISTENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#type GoogleBackupDrRestoreWorkload#type}
  */
  readonly type?: string;
  /**
  * disk_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#disk_encryption_key GoogleBackupDrRestoreWorkload#disk_encryption_key}
  */
  readonly diskEncryptionKey?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey;
  /**
  * guest_os_feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#guest_os_feature GoogleBackupDrRestoreWorkload#guest_os_feature}
  */
  readonly guestOsFeature?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature[] | cdktf.IResolvable;
  /**
  * initialize_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#initialize_params GoogleBackupDrRestoreWorkload#initialize_params}
  */
  readonly initializeParams?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    boot: cdktf.booleanToTerraform(struct!.boot),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_interface: cdktf.stringToTerraform(struct!.diskInterface),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    index: cdktf.numberToTerraform(struct!.index),
    kind: cdktf.stringToTerraform(struct!.kind),
    license: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.license),
    mode: cdktf.stringToTerraform(struct!.mode),
    saved_state: cdktf.stringToTerraform(struct!.savedState),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    disk_encryption_key: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyToTerraform(struct!.diskEncryptionKey),
    guest_os_feature: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureToTerraform, true)(struct!.guestOsFeature),
    initialize_params: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsToTerraform(struct!.initializeParams),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_delete: {
      value: cdktf.booleanToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot: {
      value: cdktf.booleanToHclTerraform(struct!.boot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_interface: {
      value: cdktf.stringToHclTerraform(struct!.diskInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.license),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saved_state: {
      value: cdktf.stringToHclTerraform(struct!.savedState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_encryption_key: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyToHclTerraform(struct!.diskEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyList",
    },
    guest_os_feature: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureToHclTerraform, true)(struct!.guestOsFeature),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureList",
    },
    initialize_params: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsToHclTerraform(struct!.initializeParams),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._boot !== undefined) {
      hasAnyValues = true;
      internalValueResult.boot = this._boot;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskInterface = this._diskInterface;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._savedState !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedState = this._savedState;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._diskEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionKey = this._diskEncryptionKey?.internalValue;
    }
    if (this._guestOsFeature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestOsFeature = this._guestOsFeature?.internalValue;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._boot = undefined;
      this._deviceName = undefined;
      this._diskInterface = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._index = undefined;
      this._kind = undefined;
      this._license = undefined;
      this._mode = undefined;
      this._savedState = undefined;
      this._source = undefined;
      this._type = undefined;
      this._diskEncryptionKey.internalValue = undefined;
      this._guestOsFeature.internalValue = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._boot = value.boot;
      this._deviceName = value.deviceName;
      this._diskInterface = value.diskInterface;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._index = value.index;
      this._kind = value.kind;
      this._license = value.license;
      this._mode = value.mode;
      this._savedState = value.savedState;
      this._source = value.source;
      this._type = value.type;
      this._diskEncryptionKey.internalValue = value.diskEncryptionKey;
      this._guestOsFeature.internalValue = value.guestOsFeature;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // boot - computed: false, optional: true, required: false
  private _boot?: boolean | cdktf.IResolvable; 
  public get boot() {
    return this.getBooleanAttribute('boot');
  }
  public set boot(value: boolean | cdktf.IResolvable) {
    this._boot = value;
  }
  public resetBoot() {
    this._boot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootInput() {
    return this._boot;
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // disk_interface - computed: false, optional: true, required: false
  private _diskInterface?: string; 
  public get diskInterface() {
    return this.getStringAttribute('disk_interface');
  }
  public set diskInterface(value: string) {
    this._diskInterface = value;
  }
  public resetDiskInterface() {
    this._diskInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInterfaceInput() {
    return this._diskInterface;
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
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

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // license - computed: false, optional: true, required: false
  private _license?: string[]; 
  public get license() {
    return this.getListAttribute('license');
  }
  public set license(value: string[]) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
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

  // saved_state - computed: false, optional: true, required: false
  private _savedState?: string; 
  public get savedState() {
    return this.getStringAttribute('saved_state');
  }
  public set savedState(value: string) {
    this._savedState = value;
  }
  public resetSavedState() {
    this._savedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedStateInput() {
    return this._savedState;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKeyOutputReference(this, "disk_encryption_key");
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksDiskEncryptionKey) {
    this._diskEncryptionKey.internalValue = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // guest_os_feature - computed: false, optional: true, required: false
  private _guestOsFeature = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeatureList(this, "guest_os_feature", false);
  public get guestOsFeature() {
    return this._guestOsFeature;
  }
  public putGuestOsFeature(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksGuestOsFeature[] | cdktf.IResolvable) {
    this._guestOsFeature.internalValue = value;
  }
  public resetGuestOsFeature() {
    this._guestOsFeature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOsFeatureInput() {
    return this._guestOsFeature.internalValue;
  }

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice {
  /**
  * Optional. Enables display for the Compute Engine VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#enable_display GoogleBackupDrRestoreWorkload#enable_display}
  */
  readonly enableDisplay?: boolean | cdktf.IResolvable;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_display: cdktf.booleanToTerraform(struct!.enableDisplay),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_display: {
      value: cdktf.booleanToHclTerraform(struct!.enableDisplay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDisplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDisplay = this._enableDisplay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDisplay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDisplay = value.enableDisplay;
    }
  }

  // enable_display - computed: false, optional: true, required: false
  private _enableDisplay?: boolean | cdktf.IResolvable; 
  public get enableDisplay() {
    return this.getBooleanAttribute('enable_display');
  }
  public set enableDisplay(value: boolean | cdktf.IResolvable) {
    this._enableDisplay = value;
  }
  public resetEnableDisplay() {
    this._enableDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisplayInput() {
    return this._enableDisplay;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators {
  /**
  * Optional. The number of the guest accelerator cards exposed to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#accelerator_count GoogleBackupDrRestoreWorkload#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * Optional. Full or partial URL of the accelerator type resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#accelerator_type GoogleBackupDrRestoreWorkload#accelerator_type}
  */
  readonly acceleratorType?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
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
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#kms_key_name GoogleBackupDrRestoreWorkload#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#kms_key_service_account GoogleBackupDrRestoreWorkload#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#raw_key GoogleBackupDrRestoreWorkload#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#rsa_encrypted_key GoogleBackupDrRestoreWorkload#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktf.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktf.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktf.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#key GoogleBackupDrRestoreWorkload#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#value GoogleBackupDrRestoreWorkload#value}
  */
  readonly value?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels | cdktf.IResolvable): any {
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

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#key GoogleBackupDrRestoreWorkload#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#value GoogleBackupDrRestoreWorkload#value}
  */
  readonly value?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems | cdktf.IResolvable): any {
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

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#items GoogleBackupDrRestoreWorkload#items}
  */
  readonly items?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems[] | cdktf.IResolvable;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsToTerraform, true)(struct!.items),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#external_ip GoogleBackupDrRestoreWorkload#external_ip}
  */
  readonly externalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#external_ipv6 GoogleBackupDrRestoreWorkload#external_ipv6}
  */
  readonly externalIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#external_ipv6_prefix_length GoogleBackupDrRestoreWorkload#external_ipv6_prefix_length}
  */
  readonly externalIpv6PrefixLength?: number;
  /**
  * Optional. The name of this access configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#name GoogleBackupDrRestoreWorkload#name}
  */
  readonly name?: string;
  /**
  *  Possible values: ["NETWORK_TIER_UNSPECIFIED", "PREMIUM", "STANDARD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#network_tier GoogleBackupDrRestoreWorkload#network_tier}
  */
  readonly networkTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#public_ptr_domain_name GoogleBackupDrRestoreWorkload#public_ptr_domain_name}
  */
  readonly publicPtrDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#set_public_ptr GoogleBackupDrRestoreWorkload#set_public_ptr}
  */
  readonly setPublicPtr?: boolean | cdktf.IResolvable;
  /**
  * Optional. The type of configuration. Possible values: ["ACCESS_TYPE_UNSPECIFIED", "ONE_TO_ONE_NAT", "DIRECT_IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#type GoogleBackupDrRestoreWorkload#type}
  */
  readonly type?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ip: cdktf.stringToTerraform(struct!.externalIp),
    external_ipv6: cdktf.stringToTerraform(struct!.externalIpv6),
    external_ipv6_prefix_length: cdktf.numberToTerraform(struct!.externalIpv6PrefixLength),
    name: cdktf.stringToTerraform(struct!.name),
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktf.stringToTerraform(struct!.publicPtrDomainName),
    set_public_ptr: cdktf.booleanToTerraform(struct!.setPublicPtr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ip: {
      value: cdktf.stringToHclTerraform(struct!.externalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.externalIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.externalIpv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tier: {
      value: cdktf.stringToHclTerraform(struct!.networkTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ptr_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.publicPtrDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_public_ptr: {
      value: cdktf.booleanToHclTerraform(struct!.setPublicPtr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIp = this._externalIp;
    }
    if (this._externalIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6 = this._externalIpv6;
    }
    if (this._externalIpv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6PrefixLength = this._externalIpv6PrefixLength;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTier = this._networkTier;
    }
    if (this._publicPtrDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPtrDomainName = this._publicPtrDomainName;
    }
    if (this._setPublicPtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPublicPtr = this._setPublicPtr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIp = undefined;
      this._externalIpv6 = undefined;
      this._externalIpv6PrefixLength = undefined;
      this._name = undefined;
      this._networkTier = undefined;
      this._publicPtrDomainName = undefined;
      this._setPublicPtr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIp = value.externalIp;
      this._externalIpv6 = value.externalIpv6;
      this._externalIpv6PrefixLength = value.externalIpv6PrefixLength;
      this._name = value.name;
      this._networkTier = value.networkTier;
      this._publicPtrDomainName = value.publicPtrDomainName;
      this._setPublicPtr = value.setPublicPtr;
      this._type = value.type;
    }
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // external_ipv6 - computed: false, optional: true, required: false
  private _externalIpv6?: string; 
  public get externalIpv6() {
    return this.getStringAttribute('external_ipv6');
  }
  public set externalIpv6(value: string) {
    this._externalIpv6 = value;
  }
  public resetExternalIpv6() {
    this._externalIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6Input() {
    return this._externalIpv6;
  }

  // external_ipv6_prefix_length - computed: false, optional: true, required: false
  private _externalIpv6PrefixLength?: number; 
  public get externalIpv6PrefixLength() {
    return this.getNumberAttribute('external_ipv6_prefix_length');
  }
  public set externalIpv6PrefixLength(value: number) {
    this._externalIpv6PrefixLength = value;
  }
  public resetExternalIpv6PrefixLength() {
    this._externalIpv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6PrefixLengthInput() {
    return this._externalIpv6PrefixLength;
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

  // network_tier - computed: false, optional: true, required: false
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  public resetNetworkTier() {
    this._networkTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
  }

  // public_ptr_domain_name - computed: false, optional: true, required: false
  private _publicPtrDomainName?: string; 
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
  public set publicPtrDomainName(value: string) {
    this._publicPtrDomainName = value;
  }
  public resetPublicPtrDomainName() {
    this._publicPtrDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPtrDomainNameInput() {
    return this._publicPtrDomainName;
  }

  // set_public_ptr - computed: false, optional: true, required: false
  private _setPublicPtr?: boolean | cdktf.IResolvable; 
  public get setPublicPtr() {
    return this.getBooleanAttribute('set_public_ptr');
  }
  public set setPublicPtr(value: boolean | cdktf.IResolvable) {
    this._setPublicPtr = value;
  }
  public resetSetPublicPtr() {
    this._setPublicPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPublicPtrInput() {
    return this._setPublicPtr;
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
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#ip_cidr_range GoogleBackupDrRestoreWorkload#ip_cidr_range}
  */
  readonly ipCidrRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#subnetwork_range_name GoogleBackupDrRestoreWorkload#subnetwork_range_name}
  */
  readonly subnetworkRangeName?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_cidr_range: {
      value: cdktf.stringToHclTerraform(struct!.ipCidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork_range_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetworkRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipCidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCidrRange = this._ipCidrRange;
    }
    if (this._subnetworkRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworkRangeName = this._subnetworkRangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipCidrRange = undefined;
      this._subnetworkRangeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipCidrRange = value.ipCidrRange;
      this._subnetworkRangeName = value.subnetworkRangeName;
    }
  }

  // ip_cidr_range - computed: false, optional: true, required: false
  private _ipCidrRange?: string; 
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  public resetIpCidrRange() {
    this._ipCidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange;
  }

  // subnetwork_range_name - computed: false, optional: true, required: false
  private _subnetworkRangeName?: string; 
  public get subnetworkRangeName() {
    return this.getStringAttribute('subnetwork_range_name');
  }
  public set subnetworkRangeName(value: string) {
    this._subnetworkRangeName = value;
  }
  public resetSubnetworkRangeName() {
    this._subnetworkRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkRangeNameInput() {
    return this._subnetworkRangeName;
  }
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#external_ip GoogleBackupDrRestoreWorkload#external_ip}
  */
  readonly externalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#external_ipv6 GoogleBackupDrRestoreWorkload#external_ipv6}
  */
  readonly externalIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#external_ipv6_prefix_length GoogleBackupDrRestoreWorkload#external_ipv6_prefix_length}
  */
  readonly externalIpv6PrefixLength?: number;
  /**
  * Optional. The name of this access configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#name GoogleBackupDrRestoreWorkload#name}
  */
  readonly name?: string;
  /**
  *  Possible values: ["NETWORK_TIER_UNSPECIFIED", "PREMIUM", "STANDARD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#network_tier GoogleBackupDrRestoreWorkload#network_tier}
  */
  readonly networkTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#public_ptr_domain_name GoogleBackupDrRestoreWorkload#public_ptr_domain_name}
  */
  readonly publicPtrDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#set_public_ptr GoogleBackupDrRestoreWorkload#set_public_ptr}
  */
  readonly setPublicPtr?: boolean | cdktf.IResolvable;
  /**
  * Optional. The type of configuration. Possible values: ["ACCESS_TYPE_UNSPECIFIED", "ONE_TO_ONE_NAT", "DIRECT_IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#type GoogleBackupDrRestoreWorkload#type}
  */
  readonly type?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ip: cdktf.stringToTerraform(struct!.externalIp),
    external_ipv6: cdktf.stringToTerraform(struct!.externalIpv6),
    external_ipv6_prefix_length: cdktf.numberToTerraform(struct!.externalIpv6PrefixLength),
    name: cdktf.stringToTerraform(struct!.name),
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktf.stringToTerraform(struct!.publicPtrDomainName),
    set_public_ptr: cdktf.booleanToTerraform(struct!.setPublicPtr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ip: {
      value: cdktf.stringToHclTerraform(struct!.externalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.externalIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.externalIpv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tier: {
      value: cdktf.stringToHclTerraform(struct!.networkTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ptr_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.publicPtrDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_public_ptr: {
      value: cdktf.booleanToHclTerraform(struct!.setPublicPtr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIp = this._externalIp;
    }
    if (this._externalIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6 = this._externalIpv6;
    }
    if (this._externalIpv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6PrefixLength = this._externalIpv6PrefixLength;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTier = this._networkTier;
    }
    if (this._publicPtrDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPtrDomainName = this._publicPtrDomainName;
    }
    if (this._setPublicPtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPublicPtr = this._setPublicPtr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIp = undefined;
      this._externalIpv6 = undefined;
      this._externalIpv6PrefixLength = undefined;
      this._name = undefined;
      this._networkTier = undefined;
      this._publicPtrDomainName = undefined;
      this._setPublicPtr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIp = value.externalIp;
      this._externalIpv6 = value.externalIpv6;
      this._externalIpv6PrefixLength = value.externalIpv6PrefixLength;
      this._name = value.name;
      this._networkTier = value.networkTier;
      this._publicPtrDomainName = value.publicPtrDomainName;
      this._setPublicPtr = value.setPublicPtr;
      this._type = value.type;
    }
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // external_ipv6 - computed: false, optional: true, required: false
  private _externalIpv6?: string; 
  public get externalIpv6() {
    return this.getStringAttribute('external_ipv6');
  }
  public set externalIpv6(value: string) {
    this._externalIpv6 = value;
  }
  public resetExternalIpv6() {
    this._externalIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6Input() {
    return this._externalIpv6;
  }

  // external_ipv6_prefix_length - computed: false, optional: true, required: false
  private _externalIpv6PrefixLength?: number; 
  public get externalIpv6PrefixLength() {
    return this.getNumberAttribute('external_ipv6_prefix_length');
  }
  public set externalIpv6PrefixLength(value: number) {
    this._externalIpv6PrefixLength = value;
  }
  public resetExternalIpv6PrefixLength() {
    this._externalIpv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6PrefixLengthInput() {
    return this._externalIpv6PrefixLength;
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

  // network_tier - computed: false, optional: true, required: false
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  public resetNetworkTier() {
    this._networkTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
  }

  // public_ptr_domain_name - computed: false, optional: true, required: false
  private _publicPtrDomainName?: string; 
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
  public set publicPtrDomainName(value: string) {
    this._publicPtrDomainName = value;
  }
  public resetPublicPtrDomainName() {
    this._publicPtrDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPtrDomainNameInput() {
    return this._publicPtrDomainName;
  }

  // set_public_ptr - computed: false, optional: true, required: false
  private _setPublicPtr?: boolean | cdktf.IResolvable; 
  public get setPublicPtr() {
    return this.getBooleanAttribute('set_public_ptr');
  }
  public set setPublicPtr(value: boolean | cdktf.IResolvable) {
    this._setPublicPtr = value;
  }
  public resetSetPublicPtr() {
    this._setPublicPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPublicPtrInput() {
    return this._setPublicPtr;
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
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces {
  /**
  * Optional. The prefix length of the primary internal IPv6 range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#internal_ipv6_prefix_length GoogleBackupDrRestoreWorkload#internal_ipv6_prefix_length}
  */
  readonly internalIpv6PrefixLength?: number;
  /**
  * Optional. An IPv4 internal IP address to assign to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#ip_address GoogleBackupDrRestoreWorkload#ip_address}
  */
  readonly ipAddress?: string;
  /**
  *  Possible values: ["UNSPECIFIED_IPV6_ACCESS_TYPE", "INTERNAL", "EXTERNAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#ipv6_access_type GoogleBackupDrRestoreWorkload#ipv6_access_type}
  */
  readonly ipv6AccessType?: string;
  /**
  * Optional. An IPv6 internal network address for this network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#ipv6_address GoogleBackupDrRestoreWorkload#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Optional. URL of the VPC network resource for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#network GoogleBackupDrRestoreWorkload#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#network_attachment GoogleBackupDrRestoreWorkload#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  *  Possible values: ["NIC_TYPE_UNSPECIFIED", "VIRTIO_NET", "GVNIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#nic_type GoogleBackupDrRestoreWorkload#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#queue_count GoogleBackupDrRestoreWorkload#queue_count}
  */
  readonly queueCount?: number;
  /**
  *  Possible values: ["STACK_TYPE_UNSPECIFIED", "IPV4_ONLY", "IPV4_IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#stack_type GoogleBackupDrRestoreWorkload#stack_type}
  */
  readonly stackType?: string;
  /**
  * Optional. The URL of the Subnetwork resource for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#subnetwork GoogleBackupDrRestoreWorkload#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * access_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#access_configs GoogleBackupDrRestoreWorkload#access_configs}
  */
  readonly accessConfigs?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs[] | cdktf.IResolvable;
  /**
  * alias_ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#alias_ip_ranges GoogleBackupDrRestoreWorkload#alias_ip_ranges}
  */
  readonly aliasIpRanges?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges[] | cdktf.IResolvable;
  /**
  * ipv6_access_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#ipv6_access_configs GoogleBackupDrRestoreWorkload#ipv6_access_configs}
  */
  readonly ipv6AccessConfigs?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs[] | cdktf.IResolvable;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ipv6_prefix_length: cdktf.numberToTerraform(struct!.internalIpv6PrefixLength),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv6_access_type: cdktf.stringToTerraform(struct!.ipv6AccessType),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    network: cdktf.stringToTerraform(struct!.network),
    network_attachment: cdktf.stringToTerraform(struct!.networkAttachment),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    queue_count: cdktf.numberToTerraform(struct!.queueCount),
    stack_type: cdktf.stringToTerraform(struct!.stackType),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    access_configs: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsToTerraform, true)(struct!.accessConfigs),
    alias_ip_ranges: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesToTerraform, true)(struct!.aliasIpRanges),
    ipv6_access_configs: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsToTerraform, true)(struct!.ipv6AccessConfigs),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.internalIpv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_access_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AccessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_attachment: {
      value: cdktf.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_type: {
      value: cdktf.stringToHclTerraform(struct!.nicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_count: {
      value: cdktf.numberToHclTerraform(struct!.queueCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stack_type: {
      value: cdktf.stringToHclTerraform(struct!.stackType),
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
    access_configs: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsToHclTerraform, true)(struct!.accessConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsList",
    },
    alias_ip_ranges: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesToHclTerraform, true)(struct!.aliasIpRanges),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesList",
    },
    ipv6_access_configs: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsToHclTerraform, true)(struct!.ipv6AccessConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIpv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIpv6PrefixLength = this._internalIpv6PrefixLength;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv6AccessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AccessType = this._ipv6AccessType;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._queueCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueCount = this._queueCount;
    }
    if (this._stackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackType = this._stackType;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._accessConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfigs = this._accessConfigs?.internalValue;
    }
    if (this._aliasIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasIpRanges = this._aliasIpRanges?.internalValue;
    }
    if (this._ipv6AccessConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AccessConfigs = this._ipv6AccessConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIpv6PrefixLength = undefined;
      this._ipAddress = undefined;
      this._ipv6AccessType = undefined;
      this._ipv6Address = undefined;
      this._network = undefined;
      this._networkAttachment = undefined;
      this._nicType = undefined;
      this._queueCount = undefined;
      this._stackType = undefined;
      this._subnetwork = undefined;
      this._accessConfigs.internalValue = undefined;
      this._aliasIpRanges.internalValue = undefined;
      this._ipv6AccessConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIpv6PrefixLength = value.internalIpv6PrefixLength;
      this._ipAddress = value.ipAddress;
      this._ipv6AccessType = value.ipv6AccessType;
      this._ipv6Address = value.ipv6Address;
      this._network = value.network;
      this._networkAttachment = value.networkAttachment;
      this._nicType = value.nicType;
      this._queueCount = value.queueCount;
      this._stackType = value.stackType;
      this._subnetwork = value.subnetwork;
      this._accessConfigs.internalValue = value.accessConfigs;
      this._aliasIpRanges.internalValue = value.aliasIpRanges;
      this._ipv6AccessConfigs.internalValue = value.ipv6AccessConfigs;
    }
  }

  // internal_ipv6_prefix_length - computed: false, optional: true, required: false
  private _internalIpv6PrefixLength?: number; 
  public get internalIpv6PrefixLength() {
    return this.getNumberAttribute('internal_ipv6_prefix_length');
  }
  public set internalIpv6PrefixLength(value: number) {
    this._internalIpv6PrefixLength = value;
  }
  public resetInternalIpv6PrefixLength() {
    this._internalIpv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpv6PrefixLengthInput() {
    return this._internalIpv6PrefixLength;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv6_access_type - computed: false, optional: true, required: false
  private _ipv6AccessType?: string; 
  public get ipv6AccessType() {
    return this.getStringAttribute('ipv6_access_type');
  }
  public set ipv6AccessType(value: string) {
    this._ipv6AccessType = value;
  }
  public resetIpv6AccessType() {
    this._ipv6AccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessTypeInput() {
    return this._ipv6AccessType;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // nic_type - computed: false, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // queue_count - computed: false, optional: true, required: false
  private _queueCount?: number; 
  public get queueCount() {
    return this.getNumberAttribute('queue_count');
  }
  public set queueCount(value: number) {
    this._queueCount = value;
  }
  public resetQueueCount() {
    this._queueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCountInput() {
    return this._queueCount;
  }

  // stack_type - computed: false, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
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

  // access_configs - computed: false, optional: true, required: false
  private _accessConfigs = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigsList(this, "access_configs", false);
  public get accessConfigs() {
    return this._accessConfigs;
  }
  public putAccessConfigs(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAccessConfigs[] | cdktf.IResolvable) {
    this._accessConfigs.internalValue = value;
  }
  public resetAccessConfigs() {
    this._accessConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigsInput() {
    return this._accessConfigs.internalValue;
  }

  // alias_ip_ranges - computed: false, optional: true, required: false
  private _aliasIpRanges = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRangesList(this, "alias_ip_ranges", false);
  public get aliasIpRanges() {
    return this._aliasIpRanges;
  }
  public putAliasIpRanges(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesAliasIpRanges[] | cdktf.IResolvable) {
    this._aliasIpRanges.internalValue = value;
  }
  public resetAliasIpRanges() {
    this._aliasIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasIpRangesInput() {
    return this._aliasIpRanges.internalValue;
  }

  // ipv6_access_configs - computed: false, optional: true, required: false
  private _ipv6AccessConfigs = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigsList(this, "ipv6_access_configs", false);
  public get ipv6AccessConfigs() {
    return this._ipv6AccessConfigs;
  }
  public putIpv6AccessConfigs(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesIpv6AccessConfigs[] | cdktf.IResolvable) {
    this._ipv6AccessConfigs.internalValue = value;
  }
  public resetIpv6AccessConfigs() {
    this._ipv6AccessConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessConfigsInput() {
    return this._ipv6AccessConfigs.internalValue;
  }
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig {
  /**
  *  Possible values: ["TIER_UNSPECIFIED", "DEFAULT", "TIER_1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#total_egress_bandwidth_tier GoogleBackupDrRestoreWorkload#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_egress_bandwidth_tier: cdktf.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_egress_bandwidth_tier: {
      value: cdktf.stringToHclTerraform(struct!.totalEgressBandwidthTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEgressBandwidthTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEgressBandwidthTier = value.totalEgressBandwidthTier;
    }
  }

  // total_egress_bandwidth_tier - computed: false, optional: true, required: false
  private _totalEgressBandwidthTier?: string; 
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
  public set totalEgressBandwidthTier(value: string) {
    this._totalEgressBandwidthTier = value;
  }
  public resetTotalEgressBandwidthTier() {
    this._totalEgressBandwidthTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEgressBandwidthTierInput() {
    return this._totalEgressBandwidthTier;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#key GoogleBackupDrRestoreWorkload#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#value GoogleBackupDrRestoreWorkload#value}
  */
  readonly value?: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags | cdktf.IResolvable): any {
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

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams {
  /**
  * resource_manager_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#resource_manager_tags GoogleBackupDrRestoreWorkload#resource_manager_tags}
  */
  readonly resourceManagerTags?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags[] | cdktf.IResolvable;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_manager_tags: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsToTerraform, true)(struct!.resourceManagerTags),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsToHclTerraform, true)(struct!.resourceManagerTags),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags.internalValue = value.resourceManagerTags;
    }
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTagsList(this, "resource_manager_tags", true);
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }
  public putResourceManagerTags(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsResourceManagerTags[] | cdktf.IResolvable) {
    this._resourceManagerTags.internalValue = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags.internalValue;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#nanos GoogleBackupDrRestoreWorkload#nanos}
  */
  readonly nanos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#seconds GoogleBackupDrRestoreWorkload#seconds}
  */
  readonly seconds?: number;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#nanos GoogleBackupDrRestoreWorkload#nanos}
  */
  readonly nanos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#seconds GoogleBackupDrRestoreWorkload#seconds}
  */
  readonly seconds?: number;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#key GoogleBackupDrRestoreWorkload#key}
  */
  readonly key?: string;
  /**
  *  Possible values: ["OPERATOR_UNSPECIFIED", "IN", "NOT_IN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#operator GoogleBackupDrRestoreWorkload#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#values GoogleBackupDrRestoreWorkload#values}
  */
  readonly values?: string[];
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#automatic_restart GoogleBackupDrRestoreWorkload#automatic_restart}
  */
  readonly automaticRestart?: boolean | cdktf.IResolvable;
  /**
  *  Possible values: ["INSTANCE_TERMINATION_ACTION_UNSPECIFIED", "DELETE", "STOP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#instance_termination_action GoogleBackupDrRestoreWorkload#instance_termination_action}
  */
  readonly instanceTerminationAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#min_node_cpus GoogleBackupDrRestoreWorkload#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  *  Possible values: ["ON_HOST_MAINTENANCE_UNSPECIFIED", "TERMINATE", "MIGRATE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#on_host_maintenance GoogleBackupDrRestoreWorkload#on_host_maintenance}
  */
  readonly onHostMaintenance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#preemptible GoogleBackupDrRestoreWorkload#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  *  Possible values: ["PROVISIONING_MODEL_UNSPECIFIED", "STANDARD", "SPOT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#provisioning_model GoogleBackupDrRestoreWorkload#provisioning_model}
  */
  readonly provisioningModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#termination_time GoogleBackupDrRestoreWorkload#termination_time}
  */
  readonly terminationTime?: string;
  /**
  * local_ssd_recovery_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#local_ssd_recovery_timeout GoogleBackupDrRestoreWorkload#local_ssd_recovery_timeout}
  */
  readonly localSsdRecoveryTimeout?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout;
  /**
  * max_run_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#max_run_duration GoogleBackupDrRestoreWorkload#max_run_duration}
  */
  readonly maxRunDuration?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration;
  /**
  * node_affinities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#node_affinities GoogleBackupDrRestoreWorkload#node_affinities}
  */
  readonly nodeAffinities?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities[] | cdktf.IResolvable;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_restart: cdktf.booleanToTerraform(struct!.automaticRestart),
    instance_termination_action: cdktf.stringToTerraform(struct!.instanceTerminationAction),
    min_node_cpus: cdktf.numberToTerraform(struct!.minNodeCpus),
    on_host_maintenance: cdktf.stringToTerraform(struct!.onHostMaintenance),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    provisioning_model: cdktf.stringToTerraform(struct!.provisioningModel),
    termination_time: cdktf.stringToTerraform(struct!.terminationTime),
    local_ssd_recovery_timeout: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutToTerraform(struct!.localSsdRecoveryTimeout),
    max_run_duration: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationToTerraform(struct!.maxRunDuration),
    node_affinities: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesToTerraform, true)(struct!.nodeAffinities),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_restart: {
      value: cdktf.booleanToHclTerraform(struct!.automaticRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_termination_action: {
      value: cdktf.stringToHclTerraform(struct!.instanceTerminationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_node_cpus: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_host_maintenance: {
      value: cdktf.stringToHclTerraform(struct!.onHostMaintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provisioning_model: {
      value: cdktf.stringToHclTerraform(struct!.provisioningModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_time: {
      value: cdktf.stringToHclTerraform(struct!.terminationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_recovery_timeout: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutToHclTerraform(struct!.localSsdRecoveryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutList",
    },
    max_run_duration: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationToHclTerraform(struct!.maxRunDuration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationList",
    },
    node_affinities: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesToHclTerraform, true)(struct!.nodeAffinities),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticRestart = this._automaticRestart;
    }
    if (this._instanceTerminationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTerminationAction = this._instanceTerminationAction;
    }
    if (this._minNodeCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCpus = this._minNodeCpus;
    }
    if (this._onHostMaintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.onHostMaintenance = this._onHostMaintenance;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._provisioningModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningModel = this._provisioningModel;
    }
    if (this._terminationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationTime = this._terminationTime;
    }
    if (this._localSsdRecoveryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdRecoveryTimeout = this._localSsdRecoveryTimeout?.internalValue;
    }
    if (this._maxRunDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration?.internalValue;
    }
    if (this._nodeAffinities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinities = this._nodeAffinities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticRestart = undefined;
      this._instanceTerminationAction = undefined;
      this._minNodeCpus = undefined;
      this._onHostMaintenance = undefined;
      this._preemptible = undefined;
      this._provisioningModel = undefined;
      this._terminationTime = undefined;
      this._localSsdRecoveryTimeout.internalValue = undefined;
      this._maxRunDuration.internalValue = undefined;
      this._nodeAffinities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticRestart = value.automaticRestart;
      this._instanceTerminationAction = value.instanceTerminationAction;
      this._minNodeCpus = value.minNodeCpus;
      this._onHostMaintenance = value.onHostMaintenance;
      this._preemptible = value.preemptible;
      this._provisioningModel = value.provisioningModel;
      this._terminationTime = value.terminationTime;
      this._localSsdRecoveryTimeout.internalValue = value.localSsdRecoveryTimeout;
      this._maxRunDuration.internalValue = value.maxRunDuration;
      this._nodeAffinities.internalValue = value.nodeAffinities;
    }
  }

  // automatic_restart - computed: false, optional: true, required: false
  private _automaticRestart?: boolean | cdktf.IResolvable; 
  public get automaticRestart() {
    return this.getBooleanAttribute('automatic_restart');
  }
  public set automaticRestart(value: boolean | cdktf.IResolvable) {
    this._automaticRestart = value;
  }
  public resetAutomaticRestart() {
    this._automaticRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRestartInput() {
    return this._automaticRestart;
  }

  // instance_termination_action - computed: false, optional: true, required: false
  private _instanceTerminationAction?: string; 
  public get instanceTerminationAction() {
    return this.getStringAttribute('instance_termination_action');
  }
  public set instanceTerminationAction(value: string) {
    this._instanceTerminationAction = value;
  }
  public resetInstanceTerminationAction() {
    this._instanceTerminationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTerminationActionInput() {
    return this._instanceTerminationAction;
  }

  // min_node_cpus - computed: false, optional: true, required: false
  private _minNodeCpus?: number; 
  public get minNodeCpus() {
    return this.getNumberAttribute('min_node_cpus');
  }
  public set minNodeCpus(value: number) {
    this._minNodeCpus = value;
  }
  public resetMinNodeCpus() {
    this._minNodeCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCpusInput() {
    return this._minNodeCpus;
  }

  // on_host_maintenance - computed: false, optional: true, required: false
  private _onHostMaintenance?: string; 
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }
  public set onHostMaintenance(value: string) {
    this._onHostMaintenance = value;
  }
  public resetOnHostMaintenance() {
    this._onHostMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHostMaintenanceInput() {
    return this._onHostMaintenance;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // provisioning_model - computed: false, optional: true, required: false
  private _provisioningModel?: string; 
  public get provisioningModel() {
    return this.getStringAttribute('provisioning_model');
  }
  public set provisioningModel(value: string) {
    this._provisioningModel = value;
  }
  public resetProvisioningModel() {
    this._provisioningModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningModelInput() {
    return this._provisioningModel;
  }

  // termination_time - computed: false, optional: true, required: false
  private _terminationTime?: string; 
  public get terminationTime() {
    return this.getStringAttribute('termination_time');
  }
  public set terminationTime(value: string) {
    this._terminationTime = value;
  }
  public resetTerminationTime() {
    this._terminationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationTimeInput() {
    return this._terminationTime;
  }

  // local_ssd_recovery_timeout - computed: false, optional: true, required: false
  private _localSsdRecoveryTimeout = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeoutOutputReference(this, "local_ssd_recovery_timeout");
  public get localSsdRecoveryTimeout() {
    return this._localSsdRecoveryTimeout;
  }
  public putLocalSsdRecoveryTimeout(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingLocalSsdRecoveryTimeout) {
    this._localSsdRecoveryTimeout.internalValue = value;
  }
  public resetLocalSsdRecoveryTimeout() {
    this._localSsdRecoveryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdRecoveryTimeoutInput() {
    return this._localSsdRecoveryTimeout.internalValue;
  }

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDurationOutputReference(this, "max_run_duration");
  public get maxRunDuration() {
    return this._maxRunDuration;
  }
  public putMaxRunDuration(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingMaxRunDuration) {
    this._maxRunDuration.internalValue = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration.internalValue;
  }

  // node_affinities - computed: false, optional: true, required: false
  private _nodeAffinities = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinitiesList(this, "node_affinities", false);
  public get nodeAffinities() {
    return this._nodeAffinities;
  }
  public putNodeAffinities(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingNodeAffinities[] | cdktf.IResolvable) {
    this._nodeAffinities.internalValue = value;
  }
  public resetNodeAffinities() {
    this._nodeAffinities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinitiesInput() {
    return this._nodeAffinities.internalValue;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#email GoogleBackupDrRestoreWorkload#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#scopes GoogleBackupDrRestoreWorkload#scopes}
  */
  readonly scopes?: string[];
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._scopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._scopes = value.scopes;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsOutputReference {
    return new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#enable_integrity_monitoring GoogleBackupDrRestoreWorkload#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#enable_secure_boot GoogleBackupDrRestoreWorkload#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#enable_vtpm GoogleBackupDrRestoreWorkload#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig): any {
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


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig): any {
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

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig | undefined {
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

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig | undefined) {
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
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#items GoogleBackupDrRestoreWorkload#items}
  */
  readonly items?: string[];
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceRestoreProperties {
  /**
  * Optional. Allows this instance to send and receive packets with non-matching destination or source IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#can_ip_forward GoogleBackupDrRestoreWorkload#can_ip_forward}
  */
  readonly canIpForward?: boolean | cdktf.IResolvable;
  /**
  * Optional. Whether the resource should be protected against deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#deletion_protection GoogleBackupDrRestoreWorkload#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Optional. An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#description GoogleBackupDrRestoreWorkload#description}
  */
  readonly description?: string;
  /**
  * Optional. Specifies the hostname of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#hostname GoogleBackupDrRestoreWorkload#hostname}
  */
  readonly hostname?: string;
  /**
  * Optional. KeyRevocationActionType of the instance. Possible values: ["KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED", "NONE", "STOP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#key_revocation_action_type GoogleBackupDrRestoreWorkload#key_revocation_action_type}
  */
  readonly keyRevocationActionType?: string;
  /**
  * Optional. Full or partial URL of the machine type resource to use for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#machine_type GoogleBackupDrRestoreWorkload#machine_type}
  */
  readonly machineType?: string;
  /**
  * Optional. Minimum CPU platform to use for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#min_cpu_platform GoogleBackupDrRestoreWorkload#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Required. Name of the compute instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#name GoogleBackupDrRestoreWorkload#name}
  */
  readonly name: string;
  /**
  * Optional. The private IPv6 google access type for the VM. Possible values: ["INSTANCE_PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED", "INHERIT_FROM_SUBNETWORK", "ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE", "ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#private_ipv6_google_access GoogleBackupDrRestoreWorkload#private_ipv6_google_access}
  */
  readonly privateIpv6GoogleAccess?: string;
  /**
  * Optional. Resource policies applied to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#resource_policies GoogleBackupDrRestoreWorkload#resource_policies}
  */
  readonly resourcePolicies?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#advanced_machine_features GoogleBackupDrRestoreWorkload#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures;
  /**
  * allocation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#allocation_affinity GoogleBackupDrRestoreWorkload#allocation_affinity}
  */
  readonly allocationAffinity?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity;
  /**
  * confidential_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#confidential_instance_config GoogleBackupDrRestoreWorkload#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig;
  /**
  * disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#disks GoogleBackupDrRestoreWorkload#disks}
  */
  readonly disks?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks[] | cdktf.IResolvable;
  /**
  * display_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#display_device GoogleBackupDrRestoreWorkload#display_device}
  */
  readonly displayDevice?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice;
  /**
  * guest_accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#guest_accelerators GoogleBackupDrRestoreWorkload#guest_accelerators}
  */
  readonly guestAccelerators?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators[] | cdktf.IResolvable;
  /**
  * instance_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#instance_encryption_key GoogleBackupDrRestoreWorkload#instance_encryption_key}
  */
  readonly instanceEncryptionKey?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#labels GoogleBackupDrRestoreWorkload#labels}
  */
  readonly labels?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#metadata GoogleBackupDrRestoreWorkload#metadata}
  */
  readonly metadata?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#network_interfaces GoogleBackupDrRestoreWorkload#network_interfaces}
  */
  readonly networkInterfaces?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#network_performance_config GoogleBackupDrRestoreWorkload#network_performance_config}
  */
  readonly networkPerformanceConfig?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#params GoogleBackupDrRestoreWorkload#params}
  */
  readonly params?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#scheduling GoogleBackupDrRestoreWorkload#scheduling}
  */
  readonly scheduling?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling;
  /**
  * service_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#service_accounts GoogleBackupDrRestoreWorkload#service_accounts}
  */
  readonly serviceAccounts?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts[] | cdktf.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#shielded_instance_config GoogleBackupDrRestoreWorkload#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#tags GoogleBackupDrRestoreWorkload#tags}
  */
  readonly tags?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags;
}

export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestoreProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_ip_forward: cdktf.booleanToTerraform(struct!.canIpForward),
    deletion_protection: cdktf.booleanToTerraform(struct!.deletionProtection),
    description: cdktf.stringToTerraform(struct!.description),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    key_revocation_action_type: cdktf.stringToTerraform(struct!.keyRevocationActionType),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    name: cdktf.stringToTerraform(struct!.name),
    private_ipv6_google_access: cdktf.stringToTerraform(struct!.privateIpv6GoogleAccess),
    resource_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourcePolicies),
    advanced_machine_features: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    allocation_affinity: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityToTerraform(struct!.allocationAffinity),
    confidential_instance_config: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigToTerraform(struct!.confidentialInstanceConfig),
    disks: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksToTerraform, true)(struct!.disks),
    display_device: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceToTerraform(struct!.displayDevice),
    guest_accelerators: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsToTerraform, true)(struct!.guestAccelerators),
    instance_encryption_key: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyToTerraform(struct!.instanceEncryptionKey),
    labels: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsToTerraform, true)(struct!.labels),
    metadata: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataToTerraform(struct!.metadata),
    network_interfaces: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesToTerraform, true)(struct!.networkInterfaces),
    network_performance_config: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigToTerraform(struct!.networkPerformanceConfig),
    params: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsToTerraform(struct!.params),
    scheduling: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingToTerraform(struct!.scheduling),
    service_accounts: cdktf.listMapper(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsToTerraform, true)(struct!.serviceAccounts),
    shielded_instance_config: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    tags: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsToTerraform(struct!.tags),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceRestoreProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_ip_forward: {
      value: cdktf.booleanToHclTerraform(struct!.canIpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deletion_protection: {
      value: cdktf.booleanToHclTerraform(struct!.deletionProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_revocation_action_type: {
      value: cdktf.stringToHclTerraform(struct!.keyRevocationActionType),
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
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
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
    private_ipv6_google_access: {
      value: cdktf.stringToHclTerraform(struct!.privateIpv6GoogleAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourcePolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesList",
    },
    allocation_affinity: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityToHclTerraform(struct!.allocationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityList",
    },
    confidential_instance_config: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigToHclTerraform(struct!.confidentialInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigList",
    },
    disks: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksToHclTerraform, true)(struct!.disks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksList",
    },
    display_device: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceToHclTerraform(struct!.displayDevice),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceList",
    },
    guest_accelerators: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsToHclTerraform, true)(struct!.guestAccelerators),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsList",
    },
    instance_encryption_key: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyToHclTerraform(struct!.instanceEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyList",
    },
    labels: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsList",
    },
    metadata: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataList",
    },
    network_interfaces: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesToHclTerraform, true)(struct!.networkInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesList",
    },
    network_performance_config: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigToHclTerraform(struct!.networkPerformanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigList",
    },
    params: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsToHclTerraform(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsList",
    },
    scheduling: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingToHclTerraform(struct!.scheduling),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingList",
    },
    service_accounts: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsToHclTerraform, true)(struct!.serviceAccounts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsList",
    },
    shielded_instance_config: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigList",
    },
    tags: {
      value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceRestoreProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canIpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.canIpForward = this._canIpForward;
    }
    if (this._deletionProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtection = this._deletionProtection;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._keyRevocationActionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRevocationActionType = this._keyRevocationActionType;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateIpv6GoogleAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpv6GoogleAccess = this._privateIpv6GoogleAccess;
    }
    if (this._resourcePolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePolicies = this._resourcePolicies;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._allocationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationAffinity = this._allocationAffinity?.internalValue;
    }
    if (this._confidentialInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceConfig = this._confidentialInstanceConfig?.internalValue;
    }
    if (this._disks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks?.internalValue;
    }
    if (this._displayDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayDevice = this._displayDevice?.internalValue;
    }
    if (this._guestAccelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerators = this._guestAccelerators?.internalValue;
    }
    if (this._instanceEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceEncryptionKey = this._instanceEncryptionKey?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._networkInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
    }
    if (this._networkPerformanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPerformanceConfig = this._networkPerformanceConfig?.internalValue;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    if (this._scheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduling = this._scheduling?.internalValue;
    }
    if (this._serviceAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestoreProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canIpForward = undefined;
      this._deletionProtection = undefined;
      this._description = undefined;
      this._hostname = undefined;
      this._keyRevocationActionType = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._name = undefined;
      this._privateIpv6GoogleAccess = undefined;
      this._resourcePolicies = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._allocationAffinity.internalValue = undefined;
      this._confidentialInstanceConfig.internalValue = undefined;
      this._disks.internalValue = undefined;
      this._displayDevice.internalValue = undefined;
      this._guestAccelerators.internalValue = undefined;
      this._instanceEncryptionKey.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._networkInterfaces.internalValue = undefined;
      this._networkPerformanceConfig.internalValue = undefined;
      this._params.internalValue = undefined;
      this._scheduling.internalValue = undefined;
      this._serviceAccounts.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canIpForward = value.canIpForward;
      this._deletionProtection = value.deletionProtection;
      this._description = value.description;
      this._hostname = value.hostname;
      this._keyRevocationActionType = value.keyRevocationActionType;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._name = value.name;
      this._privateIpv6GoogleAccess = value.privateIpv6GoogleAccess;
      this._resourcePolicies = value.resourcePolicies;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._allocationAffinity.internalValue = value.allocationAffinity;
      this._confidentialInstanceConfig.internalValue = value.confidentialInstanceConfig;
      this._disks.internalValue = value.disks;
      this._displayDevice.internalValue = value.displayDevice;
      this._guestAccelerators.internalValue = value.guestAccelerators;
      this._instanceEncryptionKey.internalValue = value.instanceEncryptionKey;
      this._labels.internalValue = value.labels;
      this._metadata.internalValue = value.metadata;
      this._networkInterfaces.internalValue = value.networkInterfaces;
      this._networkPerformanceConfig.internalValue = value.networkPerformanceConfig;
      this._params.internalValue = value.params;
      this._scheduling.internalValue = value.scheduling;
      this._serviceAccounts.internalValue = value.serviceAccounts;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._tags.internalValue = value.tags;
    }
  }

  // can_ip_forward - computed: false, optional: true, required: false
  private _canIpForward?: boolean | cdktf.IResolvable; 
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward');
  }
  public set canIpForward(value: boolean | cdktf.IResolvable) {
    this._canIpForward = value;
  }
  public resetCanIpForward() {
    this._canIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canIpForwardInput() {
    return this._canIpForward;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // key_revocation_action_type - computed: false, optional: true, required: false
  private _keyRevocationActionType?: string; 
  public get keyRevocationActionType() {
    return this.getStringAttribute('key_revocation_action_type');
  }
  public set keyRevocationActionType(value: string) {
    this._keyRevocationActionType = value;
  }
  public resetKeyRevocationActionType() {
    this._keyRevocationActionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRevocationActionTypeInput() {
    return this._keyRevocationActionType;
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

  // min_cpu_platform - computed: false, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
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

  // private_ipv6_google_access - computed: false, optional: true, required: false
  private _privateIpv6GoogleAccess?: string; 
  public get privateIpv6GoogleAccess() {
    return this.getStringAttribute('private_ipv6_google_access');
  }
  public set privateIpv6GoogleAccess(value: string) {
    this._privateIpv6GoogleAccess = value;
  }
  public resetPrivateIpv6GoogleAccess() {
    this._privateIpv6GoogleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv6GoogleAccessInput() {
    return this._privateIpv6GoogleAccess;
  }

  // resource_policies - computed: false, optional: true, required: false
  private _resourcePolicies?: string[]; 
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }
  public set resourcePolicies(value: string[]) {
    this._resourcePolicies = value;
  }
  public resetResourcePolicies() {
    this._resourcePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoliciesInput() {
    return this._resourcePolicies;
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // allocation_affinity - computed: false, optional: true, required: false
  private _allocationAffinity = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinityOutputReference(this, "allocation_affinity");
  public get allocationAffinity() {
    return this._allocationAffinity;
  }
  public putAllocationAffinity(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesAllocationAffinity) {
    this._allocationAffinity.internalValue = value;
  }
  public resetAllocationAffinity() {
    this._allocationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationAffinityInput() {
    return this._allocationAffinity.internalValue;
  }

  // confidential_instance_config - computed: false, optional: true, required: false
  private _confidentialInstanceConfig = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfigOutputReference(this, "confidential_instance_config");
  public get confidentialInstanceConfig() {
    return this._confidentialInstanceConfig;
  }
  public putConfidentialInstanceConfig(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesConfidentialInstanceConfig) {
    this._confidentialInstanceConfig.internalValue = value;
  }
  public resetConfidentialInstanceConfig() {
    this._confidentialInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceConfigInput() {
    return this._confidentialInstanceConfig.internalValue;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // display_device - computed: false, optional: true, required: false
  private _displayDevice = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDeviceOutputReference(this, "display_device");
  public get displayDevice() {
    return this._displayDevice;
  }
  public putDisplayDevice(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesDisplayDevice) {
    this._displayDevice.internalValue = value;
  }
  public resetDisplayDevice() {
    this._displayDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDeviceInput() {
    return this._displayDevice.internalValue;
  }

  // guest_accelerators - computed: false, optional: true, required: false
  private _guestAccelerators = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAcceleratorsList(this, "guest_accelerators", false);
  public get guestAccelerators() {
    return this._guestAccelerators;
  }
  public putGuestAccelerators(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesGuestAccelerators[] | cdktf.IResolvable) {
    this._guestAccelerators.internalValue = value;
  }
  public resetGuestAccelerators() {
    this._guestAccelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorsInput() {
    return this._guestAccelerators.internalValue;
  }

  // instance_encryption_key - computed: false, optional: true, required: false
  private _instanceEncryptionKey = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKeyOutputReference(this, "instance_encryption_key");
  public get instanceEncryptionKey() {
    return this._instanceEncryptionKey;
  }
  public putInstanceEncryptionKey(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesInstanceEncryptionKey) {
    this._instanceEncryptionKey.internalValue = value;
  }
  public resetInstanceEncryptionKey() {
    this._instanceEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceEncryptionKeyInput() {
    return this._instanceEncryptionKey.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // network_performance_config - computed: false, optional: true, required: false
  private _networkPerformanceConfig = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesNetworkPerformanceConfig) {
    this._networkPerformanceConfig.internalValue = value;
  }
  public resetNetworkPerformanceConfig() {
    this._networkPerformanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPerformanceConfigInput() {
    return this._networkPerformanceConfig.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccountsList(this, "service_accounts", false);
  public get serviceAccounts() {
    return this._serviceAccounts;
  }
  public putServiceAccounts(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesServiceAccounts[] | cdktf.IResolvable) {
    this._serviceAccounts.internalValue = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironment {
  /**
  * Required. Target project for the Compute Engine instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#project GoogleBackupDrRestoreWorkload#project}
  */
  readonly project: string;
  /**
  * If true, use the BackupDR P4SA credentials for same-project restores. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#use_project_service_account GoogleBackupDrRestoreWorkload#use_project_service_account}
  */
  readonly useProjectServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Required. The zone of the Compute Engine instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#zone GoogleBackupDrRestoreWorkload#zone}
  */
  readonly zone: string;
}

export function googleBackupDrRestoreWorkloadComputeInstanceTargetEnvironmentToTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironmentOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    use_project_service_account: cdktf.booleanToTerraform(struct!.useProjectServiceAccount),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function googleBackupDrRestoreWorkloadComputeInstanceTargetEnvironmentToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironmentOutputReference | GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_project_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.useProjectServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._useProjectServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProjectServiceAccount = this._useProjectServiceAccount;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._useProjectServiceAccount = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._useProjectServiceAccount = value.useProjectServiceAccount;
      this._zone = value.zone;
    }
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // use_project_service_account - computed: false, optional: true, required: false
  private _useProjectServiceAccount?: boolean | cdktf.IResolvable; 
  public get useProjectServiceAccount() {
    return this.getBooleanAttribute('use_project_service_account');
  }
  public set useProjectServiceAccount(value: boolean | cdktf.IResolvable) {
    this._useProjectServiceAccount = value;
  }
  public resetUseProjectServiceAccount() {
    this._useProjectServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProjectServiceAccountInput() {
    return this._useProjectServiceAccount;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#kms_key_name GoogleBackupDrRestoreWorkload#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#kms_key_service_account GoogleBackupDrRestoreWorkload#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#raw_key GoogleBackupDrRestoreWorkload#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#rsa_encrypted_key GoogleBackupDrRestoreWorkload#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function googleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyToTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyOutputReference | GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktf.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function googleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyOutputReference | GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktf.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktf.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }
}
export interface GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature {
  /**
  *  Possible values: ["FEATURE_TYPE_UNSPECIFIED", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "MULTI_IP_SUBNET", "UEFI_COMPATIBLE", "SECURE_BOOT", "GVNIC", "SEV_CAPABLE", "BARE_METAL_LINUX_COMPATIBLE", "SUSPEND_RESUME_COMPATIBLE", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "TDX_CAPABLE", "IDPF", "SEV_LIVE_MIGRATABLE_V2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#type GoogleBackupDrRestoreWorkload#type}
  */
  readonly type?: string;
}

export function googleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureToTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
}

export class GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureOutputReference {
    return new GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#key GoogleBackupDrRestoreWorkload#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#value GoogleBackupDrRestoreWorkload#value}
  */
  readonly value?: string;
}

export function googleBackupDrRestoreWorkloadDiskRestorePropertiesLabelsToTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleBackupDrRestoreWorkloadDiskRestorePropertiesLabelsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabels | cdktf.IResolvable): any {
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

export class GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabelsList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabels[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabelsOutputReference {
    return new GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#key GoogleBackupDrRestoreWorkload#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#value GoogleBackupDrRestoreWorkload#value}
  */
  readonly value?: string;
}

export function googleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsToTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags | cdktf.IResolvable): any {
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

export class GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsList extends cdktf.ComplexList {
  public internalValue? : GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags[] | cdktf.IResolvable

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
  public get(index: number): GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsOutputReference {
    return new GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBackupDrRestoreWorkloadDiskRestoreProperties {
  /**
  * Optional. The access mode of the disk. Possible values: ["READ_WRITE_SINGLE", "READ_WRITE_MANY", "READ_ONLY_MANY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#access_mode GoogleBackupDrRestoreWorkload#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Optional. The architecture of the source disk. Possible values: ["ARCHITECTURE_UNSPECIFIED", "X86_64", "ARM64"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#architecture GoogleBackupDrRestoreWorkload#architecture}
  */
  readonly architecture?: string;
  /**
  * Optional. An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#description GoogleBackupDrRestoreWorkload#description}
  */
  readonly description?: string;
  /**
  * Optional. Indicates whether this disk is using confidential compute mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#enable_confidential_compute GoogleBackupDrRestoreWorkload#enable_confidential_compute}
  */
  readonly enableConfidentialCompute?: boolean | cdktf.IResolvable;
  /**
  * Optional. A list of publicly available licenses that are applicable to this backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#licenses GoogleBackupDrRestoreWorkload#licenses}
  */
  readonly licenses?: string[];
  /**
  * Required. Name of the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#name GoogleBackupDrRestoreWorkload#name}
  */
  readonly name: string;
  /**
  * Optional. Physical block size of the persistent disk, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#physical_block_size_bytes GoogleBackupDrRestoreWorkload#physical_block_size_bytes}
  */
  readonly physicalBlockSizeBytes?: number;
  /**
  * Optional. Indicates how many IOPS to provision for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#provisioned_iops GoogleBackupDrRestoreWorkload#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Optional. Indicates how much throughput to provision for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#provisioned_throughput GoogleBackupDrRestoreWorkload#provisioned_throughput}
  */
  readonly provisionedThroughput?: number;
  /**
  * Optional. Resource policies applied to this disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#resource_policy GoogleBackupDrRestoreWorkload#resource_policy}
  */
  readonly resourcePolicy?: string[];
  /**
  * Required. The size of the disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#size_gb GoogleBackupDrRestoreWorkload#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Optional. The storage pool in which the new disk is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#storage_pool GoogleBackupDrRestoreWorkload#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * Required. URL of the disk type resource describing which disk type to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#type GoogleBackupDrRestoreWorkload#type}
  */
  readonly type: string;
  /**
  * disk_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#disk_encryption_key GoogleBackupDrRestoreWorkload#disk_encryption_key}
  */
  readonly diskEncryptionKey?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey;
  /**
  * guest_os_feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#guest_os_feature GoogleBackupDrRestoreWorkload#guest_os_feature}
  */
  readonly guestOsFeature?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#labels GoogleBackupDrRestoreWorkload#labels}
  */
  readonly labels?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabels[] | cdktf.IResolvable;
  /**
  * resource_manager_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#resource_manager_tags GoogleBackupDrRestoreWorkload#resource_manager_tags}
  */
  readonly resourceManagerTags?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags[] | cdktf.IResolvable;
}

export function googleBackupDrRestoreWorkloadDiskRestorePropertiesToTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesOutputReference | GoogleBackupDrRestoreWorkloadDiskRestoreProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    architecture: cdktf.stringToTerraform(struct!.architecture),
    description: cdktf.stringToTerraform(struct!.description),
    enable_confidential_compute: cdktf.booleanToTerraform(struct!.enableConfidentialCompute),
    licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.licenses),
    name: cdktf.stringToTerraform(struct!.name),
    physical_block_size_bytes: cdktf.numberToTerraform(struct!.physicalBlockSizeBytes),
    provisioned_iops: cdktf.numberToTerraform(struct!.provisionedIops),
    provisioned_throughput: cdktf.numberToTerraform(struct!.provisionedThroughput),
    resource_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourcePolicy),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    type: cdktf.stringToTerraform(struct!.type),
    disk_encryption_key: googleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyToTerraform(struct!.diskEncryptionKey),
    guest_os_feature: cdktf.listMapper(googleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureToTerraform, true)(struct!.guestOsFeature),
    labels: cdktf.listMapper(googleBackupDrRestoreWorkloadDiskRestorePropertiesLabelsToTerraform, true)(struct!.labels),
    resource_manager_tags: cdktf.listMapper(googleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsToTerraform, true)(struct!.resourceManagerTags),
  }
}


export function googleBackupDrRestoreWorkloadDiskRestorePropertiesToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesOutputReference | GoogleBackupDrRestoreWorkloadDiskRestoreProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    architecture: {
      value: cdktf.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_confidential_compute: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    licenses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.licenses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    physical_block_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.physicalBlockSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_iops: {
      value: cdktf.numberToHclTerraform(struct!.provisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_throughput: {
      value: cdktf.numberToHclTerraform(struct!.provisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_policy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourcePolicy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_pool: {
      value: cdktf.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_encryption_key: {
      value: googleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyToHclTerraform(struct!.diskEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyList",
    },
    guest_os_feature: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureToHclTerraform, true)(struct!.guestOsFeature),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureList",
    },
    labels: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadDiskRestorePropertiesLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabelsList",
    },
    resource_manager_tags: {
      value: cdktf.listMapperHcl(googleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsToHclTerraform, true)(struct!.resourceManagerTags),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadDiskRestorePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadDiskRestoreProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableConfidentialCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialCompute = this._enableConfidentialCompute;
    }
    if (this._licenses !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenses = this._licenses;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._physicalBlockSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalBlockSizeBytes = this._physicalBlockSizeBytes;
    }
    if (this._provisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedIops = this._provisionedIops;
    }
    if (this._provisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput;
    }
    if (this._resourcePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePolicy = this._resourcePolicy;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._diskEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionKey = this._diskEncryptionKey?.internalValue;
    }
    if (this._guestOsFeature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestOsFeature = this._guestOsFeature?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._resourceManagerTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadDiskRestoreProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessMode = undefined;
      this._architecture = undefined;
      this._description = undefined;
      this._enableConfidentialCompute = undefined;
      this._licenses = undefined;
      this._name = undefined;
      this._physicalBlockSizeBytes = undefined;
      this._provisionedIops = undefined;
      this._provisionedThroughput = undefined;
      this._resourcePolicy = undefined;
      this._sizeGb = undefined;
      this._storagePool = undefined;
      this._type = undefined;
      this._diskEncryptionKey.internalValue = undefined;
      this._guestOsFeature.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._resourceManagerTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessMode = value.accessMode;
      this._architecture = value.architecture;
      this._description = value.description;
      this._enableConfidentialCompute = value.enableConfidentialCompute;
      this._licenses = value.licenses;
      this._name = value.name;
      this._physicalBlockSizeBytes = value.physicalBlockSizeBytes;
      this._provisionedIops = value.provisionedIops;
      this._provisionedThroughput = value.provisionedThroughput;
      this._resourcePolicy = value.resourcePolicy;
      this._sizeGb = value.sizeGb;
      this._storagePool = value.storagePool;
      this._type = value.type;
      this._diskEncryptionKey.internalValue = value.diskEncryptionKey;
      this._guestOsFeature.internalValue = value.guestOsFeature;
      this._labels.internalValue = value.labels;
      this._resourceManagerTags.internalValue = value.resourceManagerTags;
    }
  }

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
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

  // enable_confidential_compute - computed: false, optional: true, required: false
  private _enableConfidentialCompute?: boolean | cdktf.IResolvable; 
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }
  public set enableConfidentialCompute(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialCompute = value;
  }
  public resetEnableConfidentialCompute() {
    this._enableConfidentialCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialComputeInput() {
    return this._enableConfidentialCompute;
  }

  // licenses - computed: false, optional: true, required: false
  private _licenses?: string[]; 
  public get licenses() {
    return this.getListAttribute('licenses');
  }
  public set licenses(value: string[]) {
    this._licenses = value;
  }
  public resetLicenses() {
    this._licenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses;
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

  // physical_block_size_bytes - computed: false, optional: true, required: false
  private _physicalBlockSizeBytes?: number; 
  public get physicalBlockSizeBytes() {
    return this.getNumberAttribute('physical_block_size_bytes');
  }
  public set physicalBlockSizeBytes(value: number) {
    this._physicalBlockSizeBytes = value;
  }
  public resetPhysicalBlockSizeBytes() {
    this._physicalBlockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalBlockSizeBytesInput() {
    return this._physicalBlockSizeBytes;
  }

  // provisioned_iops - computed: false, optional: true, required: false
  private _provisionedIops?: number; 
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }
  public set provisionedIops(value: number) {
    this._provisionedIops = value;
  }
  public resetProvisionedIops() {
    this._provisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedIopsInput() {
    return this._provisionedIops;
  }

  // provisioned_throughput - computed: false, optional: true, required: false
  private _provisionedThroughput?: number; 
  public get provisionedThroughput() {
    return this.getNumberAttribute('provisioned_throughput');
  }
  public set provisionedThroughput(value: number) {
    this._provisionedThroughput = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput;
  }

  // resource_policy - computed: false, optional: true, required: false
  private _resourcePolicy?: string[]; 
  public get resourcePolicy() {
    return this.getListAttribute('resource_policy');
  }
  public set resourcePolicy(value: string[]) {
    this._resourcePolicy = value;
  }
  public resetResourcePolicy() {
    this._resourcePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePolicyInput() {
    return this._resourcePolicy;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey = new GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKeyOutputReference(this, "disk_encryption_key");
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesDiskEncryptionKey) {
    this._diskEncryptionKey.internalValue = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // guest_os_feature - computed: false, optional: true, required: false
  private _guestOsFeature = new GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeatureList(this, "guest_os_feature", false);
  public get guestOsFeature() {
    return this._guestOsFeature;
  }
  public putGuestOsFeature(value: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesGuestOsFeature[] | cdktf.IResolvable) {
    this._guestOsFeature.internalValue = value;
  }
  public resetGuestOsFeature() {
    this._guestOsFeature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOsFeatureInput() {
    return this._guestOsFeature.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags = new GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTagsList(this, "resource_manager_tags", true);
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }
  public putResourceManagerTags(value: GoogleBackupDrRestoreWorkloadDiskRestorePropertiesResourceManagerTags[] | cdktf.IResolvable) {
    this._resourceManagerTags.internalValue = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags.internalValue;
  }
}
export interface GoogleBackupDrRestoreWorkloadDiskTargetEnvironment {
  /**
  * Required. Target project for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#project GoogleBackupDrRestoreWorkload#project}
  */
  readonly project: string;
  /**
  * If true, use the BackupDR P4SA credentials for same-project restores. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#use_project_service_account GoogleBackupDrRestoreWorkload#use_project_service_account}
  */
  readonly useProjectServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Required. Target zone for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#zone GoogleBackupDrRestoreWorkload#zone}
  */
  readonly zone: string;
}

export function googleBackupDrRestoreWorkloadDiskTargetEnvironmentToTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskTargetEnvironmentOutputReference | GoogleBackupDrRestoreWorkloadDiskTargetEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    use_project_service_account: cdktf.booleanToTerraform(struct!.useProjectServiceAccount),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function googleBackupDrRestoreWorkloadDiskTargetEnvironmentToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadDiskTargetEnvironmentOutputReference | GoogleBackupDrRestoreWorkloadDiskTargetEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_project_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.useProjectServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadDiskTargetEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadDiskTargetEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._useProjectServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProjectServiceAccount = this._useProjectServiceAccount;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadDiskTargetEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._useProjectServiceAccount = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._useProjectServiceAccount = value.useProjectServiceAccount;
      this._zone = value.zone;
    }
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // use_project_service_account - computed: false, optional: true, required: false
  private _useProjectServiceAccount?: boolean | cdktf.IResolvable; 
  public get useProjectServiceAccount() {
    return this.getBooleanAttribute('use_project_service_account');
  }
  public set useProjectServiceAccount(value: boolean | cdktf.IResolvable) {
    this._useProjectServiceAccount = value;
  }
  public resetUseProjectServiceAccount() {
    this._useProjectServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProjectServiceAccountInput() {
    return this._useProjectServiceAccount;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironment {
  /**
  * Required. Target project for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#project GoogleBackupDrRestoreWorkload#project}
  */
  readonly project: string;
  /**
  * Required. Target region for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#region GoogleBackupDrRestoreWorkload#region}
  */
  readonly region: string;
  /**
  * Required. Target URLs of the replica zones for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#replica_zones GoogleBackupDrRestoreWorkload#replica_zones}
  */
  readonly replicaZones: string[];
  /**
  * If true, use the BackupDR P4SA credentials for same-project restores. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#use_project_service_account GoogleBackupDrRestoreWorkload#use_project_service_account}
  */
  readonly useProjectServiceAccount?: boolean | cdktf.IResolvable;
}

export function googleBackupDrRestoreWorkloadRegionDiskTargetEnvironmentToTerraform(struct?: GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironmentOutputReference | GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
    replica_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replicaZones),
    use_project_service_account: cdktf.booleanToTerraform(struct!.useProjectServiceAccount),
  }
}


export function googleBackupDrRestoreWorkloadRegionDiskTargetEnvironmentToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironmentOutputReference | GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.replicaZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_project_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.useProjectServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._replicaZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaZones = this._replicaZones;
    }
    if (this._useProjectServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProjectServiceAccount = this._useProjectServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._region = undefined;
      this._replicaZones = undefined;
      this._useProjectServiceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._region = value.region;
      this._replicaZones = value.replicaZones;
      this._useProjectServiceAccount = value.useProjectServiceAccount;
    }
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replica_zones - computed: false, optional: false, required: true
  private _replicaZones?: string[]; 
  public get replicaZones() {
    return this.getListAttribute('replica_zones');
  }
  public set replicaZones(value: string[]) {
    this._replicaZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaZonesInput() {
    return this._replicaZones;
  }

  // use_project_service_account - computed: false, optional: true, required: false
  private _useProjectServiceAccount?: boolean | cdktf.IResolvable; 
  public get useProjectServiceAccount() {
    return this.getBooleanAttribute('use_project_service_account');
  }
  public set useProjectServiceAccount(value: boolean | cdktf.IResolvable) {
    this._useProjectServiceAccount = value;
  }
  public resetUseProjectServiceAccount() {
    this._useProjectServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProjectServiceAccountInput() {
    return this._useProjectServiceAccount;
  }
}
export interface GoogleBackupDrRestoreWorkloadTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#create GoogleBackupDrRestoreWorkload#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#delete GoogleBackupDrRestoreWorkload#delete}
  */
  readonly delete?: string;
}

export function googleBackupDrRestoreWorkloadTimeoutsToTerraform(struct?: GoogleBackupDrRestoreWorkloadTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleBackupDrRestoreWorkloadTimeoutsToHclTerraform(struct?: GoogleBackupDrRestoreWorkloadTimeouts | cdktf.IResolvable): any {
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

export class GoogleBackupDrRestoreWorkloadTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBackupDrRestoreWorkloadTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBackupDrRestoreWorkloadTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload google_backup_dr_restore_workload}
*/
export class GoogleBackupDrRestoreWorkload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_backup_dr_restore_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleBackupDrRestoreWorkload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBackupDrRestoreWorkload to import
  * @param importFromId The id of the existing GoogleBackupDrRestoreWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBackupDrRestoreWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_backup_dr_restore_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_backup_dr_restore_workload google_backup_dr_restore_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBackupDrRestoreWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBackupDrRestoreWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'google_backup_dr_restore_workload',
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
    this._backupId = config.backupId;
    this._backupVaultId = config.backupVaultId;
    this._clearOverridesFieldMask = config.clearOverridesFieldMask;
    this._dataSourceId = config.dataSourceId;
    this._deleteRestoredInstance = config.deleteRestoredInstance;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._requestId = config.requestId;
    this._computeInstanceRestoreProperties.internalValue = config.computeInstanceRestoreProperties;
    this._computeInstanceTargetEnvironment.internalValue = config.computeInstanceTargetEnvironment;
    this._diskRestoreProperties.internalValue = config.diskRestoreProperties;
    this._diskTargetEnvironment.internalValue = config.diskTargetEnvironment;
    this._regionDiskTargetEnvironment.internalValue = config.regionDiskTargetEnvironment;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backup_vault_id - computed: false, optional: false, required: true
  private _backupVaultId?: string; 
  public get backupVaultId() {
    return this.getStringAttribute('backup_vault_id');
  }
  public set backupVaultId(value: string) {
    this._backupVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultIdInput() {
    return this._backupVaultId;
  }

  // clear_overrides_field_mask - computed: false, optional: true, required: false
  private _clearOverridesFieldMask?: string; 
  public get clearOverridesFieldMask() {
    return this.getStringAttribute('clear_overrides_field_mask');
  }
  public set clearOverridesFieldMask(value: string) {
    this._clearOverridesFieldMask = value;
  }
  public resetClearOverridesFieldMask() {
    this._clearOverridesFieldMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearOverridesFieldMaskInput() {
    return this._clearOverridesFieldMask;
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // delete_restored_instance - computed: false, optional: true, required: false
  private _deleteRestoredInstance?: boolean | cdktf.IResolvable; 
  public get deleteRestoredInstance() {
    return this.getBooleanAttribute('delete_restored_instance');
  }
  public set deleteRestoredInstance(value: boolean | cdktf.IResolvable) {
    this._deleteRestoredInstance = value;
  }
  public resetDeleteRestoredInstance() {
    this._deleteRestoredInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRestoredInstanceInput() {
    return this._deleteRestoredInstance;
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

  // request_id - computed: false, optional: true, required: false
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  public resetRequestId() {
    this._requestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // target_resource - computed: true, optional: false, required: false
  private _targetResource = new GoogleBackupDrRestoreWorkloadTargetResourceList(this, "target_resource", false);
  public get targetResource() {
    return this._targetResource;
  }

  // compute_instance_restore_properties - computed: false, optional: true, required: false
  private _computeInstanceRestoreProperties = new GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesOutputReference(this, "compute_instance_restore_properties");
  public get computeInstanceRestoreProperties() {
    return this._computeInstanceRestoreProperties;
  }
  public putComputeInstanceRestoreProperties(value: GoogleBackupDrRestoreWorkloadComputeInstanceRestoreProperties) {
    this._computeInstanceRestoreProperties.internalValue = value;
  }
  public resetComputeInstanceRestoreProperties() {
    this._computeInstanceRestoreProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceRestorePropertiesInput() {
    return this._computeInstanceRestoreProperties.internalValue;
  }

  // compute_instance_target_environment - computed: false, optional: true, required: false
  private _computeInstanceTargetEnvironment = new GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironmentOutputReference(this, "compute_instance_target_environment");
  public get computeInstanceTargetEnvironment() {
    return this._computeInstanceTargetEnvironment;
  }
  public putComputeInstanceTargetEnvironment(value: GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironment) {
    this._computeInstanceTargetEnvironment.internalValue = value;
  }
  public resetComputeInstanceTargetEnvironment() {
    this._computeInstanceTargetEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceTargetEnvironmentInput() {
    return this._computeInstanceTargetEnvironment.internalValue;
  }

  // disk_restore_properties - computed: false, optional: true, required: false
  private _diskRestoreProperties = new GoogleBackupDrRestoreWorkloadDiskRestorePropertiesOutputReference(this, "disk_restore_properties");
  public get diskRestoreProperties() {
    return this._diskRestoreProperties;
  }
  public putDiskRestoreProperties(value: GoogleBackupDrRestoreWorkloadDiskRestoreProperties) {
    this._diskRestoreProperties.internalValue = value;
  }
  public resetDiskRestoreProperties() {
    this._diskRestoreProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskRestorePropertiesInput() {
    return this._diskRestoreProperties.internalValue;
  }

  // disk_target_environment - computed: false, optional: true, required: false
  private _diskTargetEnvironment = new GoogleBackupDrRestoreWorkloadDiskTargetEnvironmentOutputReference(this, "disk_target_environment");
  public get diskTargetEnvironment() {
    return this._diskTargetEnvironment;
  }
  public putDiskTargetEnvironment(value: GoogleBackupDrRestoreWorkloadDiskTargetEnvironment) {
    this._diskTargetEnvironment.internalValue = value;
  }
  public resetDiskTargetEnvironment() {
    this._diskTargetEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTargetEnvironmentInput() {
    return this._diskTargetEnvironment.internalValue;
  }

  // region_disk_target_environment - computed: false, optional: true, required: false
  private _regionDiskTargetEnvironment = new GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironmentOutputReference(this, "region_disk_target_environment");
  public get regionDiskTargetEnvironment() {
    return this._regionDiskTargetEnvironment;
  }
  public putRegionDiskTargetEnvironment(value: GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironment) {
    this._regionDiskTargetEnvironment.internalValue = value;
  }
  public resetRegionDiskTargetEnvironment() {
    this._regionDiskTargetEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDiskTargetEnvironmentInput() {
    return this._regionDiskTargetEnvironment.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBackupDrRestoreWorkloadTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBackupDrRestoreWorkloadTimeouts) {
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
      backup_id: cdktf.stringToTerraform(this._backupId),
      backup_vault_id: cdktf.stringToTerraform(this._backupVaultId),
      clear_overrides_field_mask: cdktf.stringToTerraform(this._clearOverridesFieldMask),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      delete_restored_instance: cdktf.booleanToTerraform(this._deleteRestoredInstance),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      request_id: cdktf.stringToTerraform(this._requestId),
      compute_instance_restore_properties: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesToTerraform(this._computeInstanceRestoreProperties.internalValue),
      compute_instance_target_environment: googleBackupDrRestoreWorkloadComputeInstanceTargetEnvironmentToTerraform(this._computeInstanceTargetEnvironment.internalValue),
      disk_restore_properties: googleBackupDrRestoreWorkloadDiskRestorePropertiesToTerraform(this._diskRestoreProperties.internalValue),
      disk_target_environment: googleBackupDrRestoreWorkloadDiskTargetEnvironmentToTerraform(this._diskTargetEnvironment.internalValue),
      region_disk_target_environment: googleBackupDrRestoreWorkloadRegionDiskTargetEnvironmentToTerraform(this._regionDiskTargetEnvironment.internalValue),
      timeouts: googleBackupDrRestoreWorkloadTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_vault_id: {
        value: cdktf.stringToHclTerraform(this._backupVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_overrides_field_mask: {
        value: cdktf.stringToHclTerraform(this._clearOverridesFieldMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_id: {
        value: cdktf.stringToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_restored_instance: {
        value: cdktf.booleanToHclTerraform(this._deleteRestoredInstance),
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
      request_id: {
        value: cdktf.stringToHclTerraform(this._requestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_instance_restore_properties: {
        value: googleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesToHclTerraform(this._computeInstanceRestoreProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceRestorePropertiesList",
      },
      compute_instance_target_environment: {
        value: googleBackupDrRestoreWorkloadComputeInstanceTargetEnvironmentToHclTerraform(this._computeInstanceTargetEnvironment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBackupDrRestoreWorkloadComputeInstanceTargetEnvironmentList",
      },
      disk_restore_properties: {
        value: googleBackupDrRestoreWorkloadDiskRestorePropertiesToHclTerraform(this._diskRestoreProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBackupDrRestoreWorkloadDiskRestorePropertiesList",
      },
      disk_target_environment: {
        value: googleBackupDrRestoreWorkloadDiskTargetEnvironmentToHclTerraform(this._diskTargetEnvironment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBackupDrRestoreWorkloadDiskTargetEnvironmentList",
      },
      region_disk_target_environment: {
        value: googleBackupDrRestoreWorkloadRegionDiskTargetEnvironmentToHclTerraform(this._regionDiskTargetEnvironment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBackupDrRestoreWorkloadRegionDiskTargetEnvironmentList",
      },
      timeouts: {
        value: googleBackupDrRestoreWorkloadTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleBackupDrRestoreWorkloadTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
