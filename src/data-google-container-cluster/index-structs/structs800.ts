import * as cdktf from 'cdktf';
import { DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList,
DataGoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesList,
DataGoogleContainerClusterNodePoolNodeConfigBootDiskList,
DataGoogleContainerClusterNodePoolNodeConfigConfidentialNodesList,
DataGoogleContainerClusterNodePoolNodeConfigContainerdConfigList,
DataGoogleContainerClusterNodePoolNodeConfigEffectiveTaintsList,
DataGoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigList,
DataGoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigList,
DataGoogleContainerClusterNodePoolNodeConfigFastSocketList,
DataGoogleContainerClusterNodePoolNodeConfigGcfsConfigList,
DataGoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList,
DataGoogleContainerClusterNodePoolNodeConfigGvnicList,
DataGoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyList,
DataGoogleContainerClusterNodePoolNodeConfigKubeletConfigList,
DataGoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigList,
DataGoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigList,
DataGoogleContainerClusterNodePoolNodeConfigNodeImageConfigList,
DataGoogleContainerClusterNodePoolNodeConfigReservationAffinityList,
DataGoogleContainerClusterNodePoolNodeConfigSandboxConfigList,
DataGoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksList,
DataGoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigList,
DataGoogleContainerClusterNodePoolAutoscalingList,
DataGoogleContainerClusterNodePoolMaintenancePolicyList,
DataGoogleContainerClusterNodePoolManagementList,
DataGoogleContainerClusterNodePoolNetworkConfigList } from './structs400'
export interface DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfig {
}

export function dataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // min_node_cpus - computed: true, optional: false, required: false
  public get minNodeCpus() {
    return this.getNumberAttribute('min_node_cpus');
  }

  // node_affinity - computed: true, optional: false, required: false
  private _nodeAffinity = new DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList(this, "node_affinity", true);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
}

export class DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolNodeConfigTaint {
}

export function dataGoogleContainerClusterNodePoolNodeConfigTaintToTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfigTaint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolNodeConfigTaintToHclTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfigTaint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolNodeConfigTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolNodeConfigTaint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolNodeConfigTaint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGoogleContainerClusterNodePoolNodeConfigTaintList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolNodeConfigTaintOutputReference {
    return new DataGoogleContainerClusterNodePoolNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolNodeConfigTaintConfig {
}

export function dataGoogleContainerClusterNodePoolNodeConfigTaintConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfigTaintConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolNodeConfigTaintConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfigTaintConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolNodeConfigTaintConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolNodeConfigTaintConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolNodeConfigTaintConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture_taint_behavior - computed: true, optional: false, required: false
  public get architectureTaintBehavior() {
    return this.getStringAttribute('architecture_taint_behavior');
  }
}

export class DataGoogleContainerClusterNodePoolNodeConfigTaintConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolNodeConfigTaintConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolNodeConfigTaintConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig {
}

export function dataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // osversion - computed: true, optional: false, required: false
  public get osversion() {
    return this.getStringAttribute('osversion');
  }
}

export class DataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig {
}

export function dataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolNodeConfig {
}

export function dataGoogleContainerClusterNodePoolNodeConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolNodeConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolNodeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_machine_features - computed: true, optional: false, required: false
  private _advancedMachineFeatures = new DataGoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesList(this, "advanced_machine_features", false);
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }

  // boot_disk - computed: true, optional: false, required: false
  private _bootDisk = new DataGoogleContainerClusterNodePoolNodeConfigBootDiskList(this, "boot_disk", false);
  public get bootDisk() {
    return this._bootDisk;
  }

  // boot_disk_kms_key - computed: true, optional: false, required: false
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }

  // confidential_nodes - computed: true, optional: false, required: false
  private _confidentialNodes = new DataGoogleContainerClusterNodePoolNodeConfigConfidentialNodesList(this, "confidential_nodes", false);
  public get confidentialNodes() {
    return this._confidentialNodes;
  }

  // containerd_config - computed: true, optional: false, required: false
  private _containerdConfig = new DataGoogleContainerClusterNodePoolNodeConfigContainerdConfigList(this, "containerd_config", false);
  public get containerdConfig() {
    return this._containerdConfig;
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // effective_taints - computed: true, optional: false, required: false
  private _effectiveTaints = new DataGoogleContainerClusterNodePoolNodeConfigEffectiveTaintsList(this, "effective_taints", false);
  public get effectiveTaints() {
    return this._effectiveTaints;
  }

  // enable_confidential_storage - computed: true, optional: false, required: false
  public get enableConfidentialStorage() {
    return this.getBooleanAttribute('enable_confidential_storage');
  }

  // ephemeral_storage_config - computed: true, optional: false, required: false
  private _ephemeralStorageConfig = new DataGoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigList(this, "ephemeral_storage_config", false);
  public get ephemeralStorageConfig() {
    return this._ephemeralStorageConfig;
  }

  // ephemeral_storage_local_ssd_config - computed: true, optional: false, required: false
  private _ephemeralStorageLocalSsdConfig = new DataGoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigList(this, "ephemeral_storage_local_ssd_config", false);
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }

  // fast_socket - computed: true, optional: false, required: false
  private _fastSocket = new DataGoogleContainerClusterNodePoolNodeConfigFastSocketList(this, "fast_socket", false);
  public get fastSocket() {
    return this._fastSocket;
  }

  // flex_start - computed: true, optional: false, required: false
  public get flexStart() {
    return this.getBooleanAttribute('flex_start');
  }

  // gcfs_config - computed: true, optional: false, required: false
  private _gcfsConfig = new DataGoogleContainerClusterNodePoolNodeConfigGcfsConfigList(this, "gcfs_config", false);
  public get gcfsConfig() {
    return this._gcfsConfig;
  }

  // gpudirect_strategy - computed: true, optional: false, required: false
  public get gpudirectStrategy() {
    return this.getStringAttribute('gpudirect_strategy');
  }

  // guest_accelerator - computed: true, optional: false, required: false
  private _guestAccelerator = new DataGoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }

  // gvnic - computed: true, optional: false, required: false
  private _gvnic = new DataGoogleContainerClusterNodePoolNodeConfigGvnicList(this, "gvnic", false);
  public get gvnic() {
    return this._gvnic;
  }

  // host_maintenance_policy - computed: true, optional: false, required: false
  private _hostMaintenancePolicy = new DataGoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyList(this, "host_maintenance_policy", false);
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // kubelet_config - computed: true, optional: false, required: false
  private _kubeletConfig = new DataGoogleContainerClusterNodePoolNodeConfigKubeletConfigList(this, "kubelet_config", false);
  public get kubeletConfig() {
    return this._kubeletConfig;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // linux_node_config - computed: true, optional: false, required: false
  private _linuxNodeConfig = new DataGoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigList(this, "linux_node_config", false);
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }

  // local_nvme_ssd_block_config - computed: true, optional: false, required: false
  private _localNvmeSsdBlockConfig = new DataGoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigList(this, "local_nvme_ssd_block_config", false);
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }

  // local_ssd_count - computed: true, optional: false, required: false
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }

  // local_ssd_encryption_mode - computed: true, optional: false, required: false
  public get localSsdEncryptionMode() {
    return this.getStringAttribute('local_ssd_encryption_mode');
  }

  // logging_variant - computed: true, optional: false, required: false
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // max_run_duration - computed: true, optional: false, required: false
  public get maxRunDuration() {
    return this.getStringAttribute('max_run_duration');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // min_cpu_platform - computed: true, optional: false, required: false
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }

  // node_group - computed: true, optional: false, required: false
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }

  // node_image_config - computed: true, optional: false, required: false
  private _nodeImageConfig = new DataGoogleContainerClusterNodePoolNodeConfigNodeImageConfigList(this, "node_image_config", false);
  public get nodeImageConfig() {
    return this._nodeImageConfig;
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }

  // preemptible - computed: true, optional: false, required: false
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }

  // reservation_affinity - computed: true, optional: false, required: false
  private _reservationAffinity = new DataGoogleContainerClusterNodePoolNodeConfigReservationAffinityList(this, "reservation_affinity", false);
  public get reservationAffinity() {
    return this._reservationAffinity;
  }

  // resource_labels - computed: true, optional: false, required: false
  private _resourceLabels = new cdktf.StringMap(this, "resource_labels");
  public get resourceLabels() {
    return this._resourceLabels;
  }

  // resource_manager_tags - computed: true, optional: false, required: false
  private _resourceManagerTags = new cdktf.StringMap(this, "resource_manager_tags");
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }

  // sandbox_config - computed: true, optional: false, required: false
  private _sandboxConfig = new DataGoogleContainerClusterNodePoolNodeConfigSandboxConfigList(this, "sandbox_config", false);
  public get sandboxConfig() {
    return this._sandboxConfig;
  }

  // secondary_boot_disks - computed: true, optional: false, required: false
  private _secondaryBootDisks = new DataGoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksList(this, "secondary_boot_disks", false);
  public get secondaryBootDisks() {
    return this._secondaryBootDisks;
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // shielded_instance_config - computed: true, optional: false, required: false
  private _shieldedInstanceConfig = new DataGoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigList(this, "shielded_instance_config", false);
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }

  // sole_tenant_config - computed: true, optional: false, required: false
  private _soleTenantConfig = new DataGoogleContainerClusterNodePoolNodeConfigSoleTenantConfigList(this, "sole_tenant_config", false);
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }

  // spot - computed: true, optional: false, required: false
  public get spot() {
    return this.getBooleanAttribute('spot');
  }

  // storage_pools - computed: true, optional: false, required: false
  public get storagePools() {
    return this.getListAttribute('storage_pools');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // taint - computed: true, optional: false, required: false
  private _taint = new DataGoogleContainerClusterNodePoolNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }

  // taint_config - computed: true, optional: false, required: false
  private _taintConfig = new DataGoogleContainerClusterNodePoolNodeConfigTaintConfigList(this, "taint_config", false);
  public get taintConfig() {
    return this._taintConfig;
  }

  // windows_node_config - computed: true, optional: false, required: false
  private _windowsNodeConfig = new DataGoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigList(this, "windows_node_config", false);
  public get windowsNodeConfig() {
    return this._windowsNodeConfig;
  }

  // workload_metadata_config - computed: true, optional: false, required: false
  private _workloadMetadataConfig = new DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigList(this, "workload_metadata_config", false);
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
}

export class DataGoogleContainerClusterNodePoolNodeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolNodeConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolNodeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolNodeDrainConfig {
}

export function dataGoogleContainerClusterNodePoolNodeDrainConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolNodeDrainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolNodeDrainConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolNodeDrainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolNodeDrainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolNodeDrainConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolNodeDrainConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grace_termination_duration - computed: true, optional: false, required: false
  public get graceTerminationDuration() {
    return this.getStringAttribute('grace_termination_duration');
  }

  // pdb_timeout_duration - computed: true, optional: false, required: false
  public get pdbTimeoutDuration() {
    return this.getStringAttribute('pdb_timeout_duration');
  }

  // respect_pdb_during_node_pool_deletion - computed: true, optional: false, required: false
  public get respectPdbDuringNodePoolDeletion() {
    return this.getBooleanAttribute('respect_pdb_during_node_pool_deletion');
  }
}

export class DataGoogleContainerClusterNodePoolNodeDrainConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolNodeDrainConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolNodeDrainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolPlacementPolicy {
}

export function dataGoogleContainerClusterNodePoolPlacementPolicyToTerraform(struct?: DataGoogleContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolPlacementPolicyToHclTerraform(struct?: DataGoogleContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolPlacementPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolPlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // tpu_topology - computed: true, optional: false, required: false
  public get tpuTopology() {
    return this.getStringAttribute('tpu_topology');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleContainerClusterNodePoolPlacementPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolPlacementPolicyOutputReference {
    return new DataGoogleContainerClusterNodePoolPlacementPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolQueuedProvisioning {
}

export function dataGoogleContainerClusterNodePoolQueuedProvisioningToTerraform(struct?: DataGoogleContainerClusterNodePoolQueuedProvisioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolQueuedProvisioningToHclTerraform(struct?: DataGoogleContainerClusterNodePoolQueuedProvisioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolQueuedProvisioningOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolQueuedProvisioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolQueuedProvisioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterNodePoolQueuedProvisioningList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolQueuedProvisioningOutputReference {
    return new DataGoogleContainerClusterNodePoolQueuedProvisioningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy {
}

export function dataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyToTerraform(struct?: DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyToHclTerraform(struct?: DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // wait_for_drain_duration - computed: true, optional: false, required: false
  public get waitForDrainDuration() {
    return this.getStringAttribute('wait_for_drain_duration');
  }
}

export class DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyOutputReference {
    return new DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
}

export function dataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_node_count - computed: true, optional: false, required: false
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }

  // batch_percentage - computed: true, optional: false, required: false
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }

  // batch_soak_duration - computed: true, optional: false, required: false
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
}

export class DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference {
    return new DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings {
}

export function dataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct?: DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaled_rollout_policy - computed: true, optional: false, required: false
  private _autoscaledRolloutPolicy = new DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyList(this, "autoscaled_rollout_policy", false);
  public get autoscaledRolloutPolicy() {
    return this._autoscaledRolloutPolicy;
  }

  // node_pool_soak_duration - computed: true, optional: false, required: false
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }

  // standard_rollout_policy - computed: true, optional: false, required: false
  private _standardRolloutPolicy = new DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList(this, "standard_rollout_policy", false);
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
}

export class DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference {
    return new DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolUpgradeSettings {
}

export function dataGoogleContainerClusterNodePoolUpgradeSettingsToTerraform(struct?: DataGoogleContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolUpgradeSettingsToHclTerraform(struct?: DataGoogleContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blue_green_settings - computed: true, optional: false, required: false
  private _blueGreenSettings = new DataGoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsList(this, "blue_green_settings", false);
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataGoogleContainerClusterNodePoolUpgradeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolUpgradeSettingsOutputReference {
    return new DataGoogleContainerClusterNodePoolUpgradeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePool {
}

export function dataGoogleContainerClusterNodePoolToTerraform(struct?: DataGoogleContainerClusterNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolToHclTerraform(struct?: DataGoogleContainerClusterNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataGoogleContainerClusterNodePoolAutoscalingList(this, "autoscaling", false);
  public get autoscaling() {
    return this._autoscaling;
  }

  // ignore_node_count_changes - computed: true, optional: false, required: false
  public get ignoreNodeCountChanges() {
    return this.getBooleanAttribute('ignore_node_count_changes');
  }

  // initial_node_count - computed: true, optional: false, required: false
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }

  // instance_group_urls - computed: true, optional: false, required: false
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // maintenance_policy - computed: true, optional: false, required: false
  private _maintenancePolicy = new DataGoogleContainerClusterNodePoolMaintenancePolicyList(this, "maintenance_policy", false);
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }

  // managed_instance_group_urls - computed: true, optional: false, required: false
  public get managedInstanceGroupUrls() {
    return this.getListAttribute('managed_instance_group_urls');
  }

  // management - computed: true, optional: false, required: false
  private _management = new DataGoogleContainerClusterNodePoolManagementList(this, "management", false);
  public get management() {
    return this._management;
  }

  // max_pods_per_node - computed: true, optional: false, required: false
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_prefix - computed: true, optional: false, required: false
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }

  // network_config - computed: true, optional: false, required: false
  private _networkConfig = new DataGoogleContainerClusterNodePoolNetworkConfigList(this, "network_config", false);
  public get networkConfig() {
    return this._networkConfig;
  }

  // node_config - computed: true, optional: false, required: false
  private _nodeConfig = new DataGoogleContainerClusterNodePoolNodeConfigList(this, "node_config", false);
  public get nodeConfig() {
    return this._nodeConfig;
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_drain_config - computed: true, optional: false, required: false
  private _nodeDrainConfig = new DataGoogleContainerClusterNodePoolNodeDrainConfigList(this, "node_drain_config", false);
  public get nodeDrainConfig() {
    return this._nodeDrainConfig;
  }

  // node_locations - computed: true, optional: false, required: false
  public get nodeLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('node_locations'));
  }

  // placement_policy - computed: true, optional: false, required: false
  private _placementPolicy = new DataGoogleContainerClusterNodePoolPlacementPolicyList(this, "placement_policy", false);
  public get placementPolicy() {
    return this._placementPolicy;
  }

  // queued_provisioning - computed: true, optional: false, required: false
  private _queuedProvisioning = new DataGoogleContainerClusterNodePoolQueuedProvisioningList(this, "queued_provisioning", false);
  public get queuedProvisioning() {
    return this._queuedProvisioning;
  }

  // upgrade_settings - computed: true, optional: false, required: false
  private _upgradeSettings = new DataGoogleContainerClusterNodePoolUpgradeSettingsList(this, "upgrade_settings", false);
  public get upgradeSettings() {
    return this._upgradeSettings;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataGoogleContainerClusterNodePoolList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolOutputReference {
    return new DataGoogleContainerClusterNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading {
}

export function dataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct?: DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct?: DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }
}

export class DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference {
    return new DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig {
}

export function dataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cgroup_mode - computed: true, optional: false, required: false
  public get cgroupMode() {
    return this.getStringAttribute('cgroup_mode');
  }

  // node_kernel_module_loading - computed: true, optional: false, required: false
  private _nodeKernelModuleLoading = new DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingList(this, "node_kernel_module_loading", false);
  public get nodeKernelModuleLoading() {
    return this._nodeKernelModuleLoading;
  }
}

export class DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolAutoConfigNetworkTags {
}

export function dataGoogleContainerClusterNodePoolAutoConfigNetworkTagsToTerraform(struct?: DataGoogleContainerClusterNodePoolAutoConfigNetworkTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolAutoConfigNetworkTagsToHclTerraform(struct?: DataGoogleContainerClusterNodePoolAutoConfigNetworkTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolAutoConfigNetworkTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolAutoConfigNetworkTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataGoogleContainerClusterNodePoolAutoConfigNetworkTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference {
    return new DataGoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig {
}

export function dataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: false, required: false
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }
}

export class DataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolAutoConfig {
}

export function dataGoogleContainerClusterNodePoolAutoConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolAutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolAutoConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolAutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolAutoConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolAutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolAutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // linux_node_config - computed: true, optional: false, required: false
  private _linuxNodeConfig = new DataGoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigList(this, "linux_node_config", false);
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }

  // network_tags - computed: true, optional: false, required: false
  private _networkTags = new DataGoogleContainerClusterNodePoolAutoConfigNetworkTagsList(this, "network_tags", false);
  public get networkTags() {
    return this._networkTags;
  }

  // node_kubelet_config - computed: true, optional: false, required: false
  private _nodeKubeletConfig = new DataGoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigList(this, "node_kubelet_config", false);
  public get nodeKubeletConfig() {
    return this._nodeKubeletConfig;
  }

  // resource_manager_tags - computed: true, optional: false, required: false
  private _resourceManagerTags = new cdktf.StringMap(this, "resource_manager_tags");
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }
}

export class DataGoogleContainerClusterNodePoolAutoConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolAutoConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolAutoConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_uri - computed: true, optional: false, required: false
  public get secretUri() {
    return this.getStringAttribute('secret_uri');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdns - computed: true, optional: false, required: false
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }

  // gcp_secret_manager_certificate_config - computed: true, optional: false, required: false
  private _gcpSecretManagerCertificateConfig = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList(this, "gcp_secret_manager_certificate_config", false);
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority_domain_config - computed: true, optional: false, required: false
  private _certificateAuthorityDomainConfig = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_secret_manager_secret_uri - computed: true, optional: false, required: false
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_secret_manager_secret_uri - computed: true, optional: false, required: false
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_secret_manager_secret_uri - computed: true, optional: false, required: false
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  private _cert = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertList(this, "cert", false);
  public get cert() {
    return this._cert;
  }

  // key - computed: true, optional: false, required: false
  private _key = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca - computed: true, optional: false, required: false
  private _ca = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaList(this, "ca", false);
  public get ca() {
    return this._ca;
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // client - computed: true, optional: false, required: false
  private _client = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientList(this, "client", false);
  public get client() {
    return this._client;
  }

  // dial_timeout - computed: true, optional: false, required: false
  public get dialTimeout() {
    return this.getStringAttribute('dial_timeout');
  }

  // header - computed: true, optional: false, required: false
  private _header = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // override_path - computed: true, optional: false, required: false
  public get overridePath() {
    return this.getBooleanAttribute('override_path');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_registry_access_config - computed: true, optional: false, required: false
  private _privateRegistryAccessConfig = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigList(this, "private_registry_access_config", false);
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }

  // registry_hosts - computed: true, optional: false, required: false
  private _registryHosts = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsList(this, "registry_hosts", false);
  public get registryHosts() {
    return this._registryHosts;
  }

  // writable_cgroups - computed: true, optional: false, required: false
  private _writableCgroups = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsList(this, "writable_cgroups", false);
  public get writableCgroups() {
    return this._writableCgroups;
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaults {
}

export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containerd_config - computed: true, optional: false, required: false
  private _containerdConfig = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigList(this, "containerd_config", false);
  public get containerdConfig() {
    return this._containerdConfig;
  }

  // gcfs_config - computed: true, optional: false, required: false
  private _gcfsConfig = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigList(this, "gcfs_config", false);
  public get gcfsConfig() {
    return this._gcfsConfig;
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: false, required: false
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }

  // logging_variant - computed: true, optional: false, required: false
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodePoolDefaults {
}

export function dataGoogleContainerClusterNodePoolDefaultsToTerraform(struct?: DataGoogleContainerClusterNodePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodePoolDefaultsToHclTerraform(struct?: DataGoogleContainerClusterNodePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodePoolDefaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNodePoolDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodePoolDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_config_defaults - computed: true, optional: false, required: false
  private _nodeConfigDefaults = new DataGoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsList(this, "node_config_defaults", false);
  public get nodeConfigDefaults() {
    return this._nodeConfigDefaults;
  }
}

export class DataGoogleContainerClusterNodePoolDefaultsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNodePoolDefaultsOutputReference {
    return new DataGoogleContainerClusterNodePoolDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNotificationConfigPubsubFilter {
}

export function dataGoogleContainerClusterNotificationConfigPubsubFilterToTerraform(struct?: DataGoogleContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNotificationConfigPubsubFilterToHclTerraform(struct?: DataGoogleContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNotificationConfigPubsubFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNotificationConfigPubsubFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNotificationConfigPubsubFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getListAttribute('event_type');
  }
}

export class DataGoogleContainerClusterNotificationConfigPubsubFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNotificationConfigPubsubFilterOutputReference {
    return new DataGoogleContainerClusterNotificationConfigPubsubFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNotificationConfigPubsub {
}

export function dataGoogleContainerClusterNotificationConfigPubsubToTerraform(struct?: DataGoogleContainerClusterNotificationConfigPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNotificationConfigPubsubToHclTerraform(struct?: DataGoogleContainerClusterNotificationConfigPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNotificationConfigPubsubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNotificationConfigPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNotificationConfigPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataGoogleContainerClusterNotificationConfigPubsubFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export class DataGoogleContainerClusterNotificationConfigPubsubList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNotificationConfigPubsubOutputReference {
    return new DataGoogleContainerClusterNotificationConfigPubsubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNotificationConfig {
}

export function dataGoogleContainerClusterNotificationConfigToTerraform(struct?: DataGoogleContainerClusterNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNotificationConfigToHclTerraform(struct?: DataGoogleContainerClusterNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNotificationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pubsub - computed: true, optional: false, required: false
  private _pubsub = new DataGoogleContainerClusterNotificationConfigPubsubList(this, "pubsub", false);
  public get pubsub() {
    return this._pubsub;
  }
}

export class DataGoogleContainerClusterNotificationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterNotificationConfigOutputReference {
    return new DataGoogleContainerClusterNotificationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterPodAutoscaling {
}

export function dataGoogleContainerClusterPodAutoscalingToTerraform(struct?: DataGoogleContainerClusterPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterPodAutoscalingToHclTerraform(struct?: DataGoogleContainerClusterPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterPodAutoscalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hpa_profile - computed: true, optional: false, required: false
  public get hpaProfile() {
    return this.getStringAttribute('hpa_profile');
  }
}

export class DataGoogleContainerClusterPodAutoscalingList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterPodAutoscalingOutputReference {
    return new DataGoogleContainerClusterPodAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterPodSecurityPolicyConfig {
}

export function dataGoogleContainerClusterPodSecurityPolicyConfigToTerraform(struct?: DataGoogleContainerClusterPodSecurityPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterPodSecurityPolicyConfigToHclTerraform(struct?: DataGoogleContainerClusterPodSecurityPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterPodSecurityPolicyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterPodSecurityPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterPodSecurityPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterPodSecurityPolicyConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterPodSecurityPolicyConfigOutputReference {
    return new DataGoogleContainerClusterPodSecurityPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig {
}

export function dataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct?: DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct?: DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference {
    return new DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterPrivateClusterConfig {
}

export function dataGoogleContainerClusterPrivateClusterConfigToTerraform(struct?: DataGoogleContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterPrivateClusterConfigToHclTerraform(struct?: DataGoogleContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterPrivateClusterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterPrivateClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterPrivateClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_private_endpoint - computed: true, optional: false, required: false
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }

  // enable_private_nodes - computed: true, optional: false, required: false
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }

  // master_global_access_config - computed: true, optional: false, required: false
  private _masterGlobalAccessConfig = new DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigList(this, "master_global_access_config", false);
  public get masterGlobalAccessConfig() {
    return this._masterGlobalAccessConfig;
  }

  // master_ipv4_cidr_block - computed: true, optional: false, required: false
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }

  // peering_name - computed: true, optional: false, required: false
  public get peeringName() {
    return this.getStringAttribute('peering_name');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_subnetwork - computed: true, optional: false, required: false
  public get privateEndpointSubnetwork() {
    return this.getStringAttribute('private_endpoint_subnetwork');
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }
}

export class DataGoogleContainerClusterPrivateClusterConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterPrivateClusterConfigOutputReference {
    return new DataGoogleContainerClusterPrivateClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterProtectConfigWorkloadConfig {
}

export function dataGoogleContainerClusterProtectConfigWorkloadConfigToTerraform(struct?: DataGoogleContainerClusterProtectConfigWorkloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterProtectConfigWorkloadConfigToHclTerraform(struct?: DataGoogleContainerClusterProtectConfigWorkloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterProtectConfigWorkloadConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterProtectConfigWorkloadConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterProtectConfigWorkloadConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_mode - computed: true, optional: false, required: false
  public get auditMode() {
    return this.getStringAttribute('audit_mode');
  }
}

export class DataGoogleContainerClusterProtectConfigWorkloadConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterProtectConfigWorkloadConfigOutputReference {
    return new DataGoogleContainerClusterProtectConfigWorkloadConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterProtectConfig {
}

export function dataGoogleContainerClusterProtectConfigToTerraform(struct?: DataGoogleContainerClusterProtectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterProtectConfigToHclTerraform(struct?: DataGoogleContainerClusterProtectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterProtectConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterProtectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterProtectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // workload_config - computed: true, optional: false, required: false
  private _workloadConfig = new DataGoogleContainerClusterProtectConfigWorkloadConfigList(this, "workload_config", false);
  public get workloadConfig() {
    return this._workloadConfig;
  }

  // workload_vulnerability_mode - computed: true, optional: false, required: false
  public get workloadVulnerabilityMode() {
    return this.getStringAttribute('workload_vulnerability_mode');
  }
}

export class DataGoogleContainerClusterProtectConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterProtectConfigOutputReference {
    return new DataGoogleContainerClusterProtectConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterRbacBindingConfig {
}

export function dataGoogleContainerClusterRbacBindingConfigToTerraform(struct?: DataGoogleContainerClusterRbacBindingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterRbacBindingConfigToHclTerraform(struct?: DataGoogleContainerClusterRbacBindingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterRbacBindingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterRbacBindingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterRbacBindingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_insecure_binding_system_authenticated - computed: true, optional: false, required: false
  public get enableInsecureBindingSystemAuthenticated() {
    return this.getBooleanAttribute('enable_insecure_binding_system_authenticated');
  }

  // enable_insecure_binding_system_unauthenticated - computed: true, optional: false, required: false
  public get enableInsecureBindingSystemUnauthenticated() {
    return this.getBooleanAttribute('enable_insecure_binding_system_unauthenticated');
  }
}

export class DataGoogleContainerClusterRbacBindingConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterRbacBindingConfigOutputReference {
    return new DataGoogleContainerClusterRbacBindingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterReleaseChannel {
}

export function dataGoogleContainerClusterReleaseChannelToTerraform(struct?: DataGoogleContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterReleaseChannelToHclTerraform(struct?: DataGoogleContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterReleaseChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterReleaseChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterReleaseChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }
}

export class DataGoogleContainerClusterReleaseChannelList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterReleaseChannelOutputReference {
    return new DataGoogleContainerClusterReleaseChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestination {
}

export function dataGoogleContainerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct?: DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterResourceUsageExportConfigBigqueryDestinationToHclTerraform(struct?: DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
}

export class DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference {
    return new DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterResourceUsageExportConfig {
}

export function dataGoogleContainerClusterResourceUsageExportConfigToTerraform(struct?: DataGoogleContainerClusterResourceUsageExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterResourceUsageExportConfigToHclTerraform(struct?: DataGoogleContainerClusterResourceUsageExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterResourceUsageExportConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterResourceUsageExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterResourceUsageExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bigquery_destination - computed: true, optional: false, required: false
  private _bigqueryDestination = new DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestinationList(this, "bigquery_destination", false);
  public get bigqueryDestination() {
    return this._bigqueryDestination;
  }

  // enable_network_egress_metering - computed: true, optional: false, required: false
  public get enableNetworkEgressMetering() {
    return this.getBooleanAttribute('enable_network_egress_metering');
  }

  // enable_resource_consumption_metering - computed: true, optional: false, required: false
  public get enableResourceConsumptionMetering() {
    return this.getBooleanAttribute('enable_resource_consumption_metering');
  }
}

export class DataGoogleContainerClusterResourceUsageExportConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterResourceUsageExportConfigOutputReference {
    return new DataGoogleContainerClusterResourceUsageExportConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterRollbackSafeUpgrade {
}

export function dataGoogleContainerClusterRollbackSafeUpgradeToTerraform(struct?: DataGoogleContainerClusterRollbackSafeUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterRollbackSafeUpgradeToHclTerraform(struct?: DataGoogleContainerClusterRollbackSafeUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterRollbackSafeUpgradeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterRollbackSafeUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterRollbackSafeUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane_soak_duration - computed: true, optional: false, required: false
  public get controlPlaneSoakDuration() {
    return this.getStringAttribute('control_plane_soak_duration');
  }
}

export class DataGoogleContainerClusterRollbackSafeUpgradeList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterRollbackSafeUpgradeOutputReference {
    return new DataGoogleContainerClusterRollbackSafeUpgradeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterSecretManagerConfigRotationConfig {
}

export function dataGoogleContainerClusterSecretManagerConfigRotationConfigToTerraform(struct?: DataGoogleContainerClusterSecretManagerConfigRotationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterSecretManagerConfigRotationConfigToHclTerraform(struct?: DataGoogleContainerClusterSecretManagerConfigRotationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterSecretManagerConfigRotationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterSecretManagerConfigRotationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterSecretManagerConfigRotationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rotation_interval - computed: true, optional: false, required: false
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
}

export class DataGoogleContainerClusterSecretManagerConfigRotationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterSecretManagerConfigRotationConfigOutputReference {
    return new DataGoogleContainerClusterSecretManagerConfigRotationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterSecretManagerConfig {
}

export function dataGoogleContainerClusterSecretManagerConfigToTerraform(struct?: DataGoogleContainerClusterSecretManagerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterSecretManagerConfigToHclTerraform(struct?: DataGoogleContainerClusterSecretManagerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterSecretManagerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterSecretManagerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterSecretManagerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rotation_config - computed: true, optional: false, required: false
  private _rotationConfig = new DataGoogleContainerClusterSecretManagerConfigRotationConfigList(this, "rotation_config", false);
  public get rotationConfig() {
    return this._rotationConfig;
  }
}

export class DataGoogleContainerClusterSecretManagerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterSecretManagerConfigOutputReference {
    return new DataGoogleContainerClusterSecretManagerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterSecretSyncConfigRotationConfig {
}

export function dataGoogleContainerClusterSecretSyncConfigRotationConfigToTerraform(struct?: DataGoogleContainerClusterSecretSyncConfigRotationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterSecretSyncConfigRotationConfigToHclTerraform(struct?: DataGoogleContainerClusterSecretSyncConfigRotationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterSecretSyncConfigRotationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterSecretSyncConfigRotationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterSecretSyncConfigRotationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rotation_interval - computed: true, optional: false, required: false
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
}

export class DataGoogleContainerClusterSecretSyncConfigRotationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterSecretSyncConfigRotationConfigOutputReference {
    return new DataGoogleContainerClusterSecretSyncConfigRotationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterSecretSyncConfig {
}

export function dataGoogleContainerClusterSecretSyncConfigToTerraform(struct?: DataGoogleContainerClusterSecretSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterSecretSyncConfigToHclTerraform(struct?: DataGoogleContainerClusterSecretSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterSecretSyncConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterSecretSyncConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterSecretSyncConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rotation_config - computed: true, optional: false, required: false
  private _rotationConfig = new DataGoogleContainerClusterSecretSyncConfigRotationConfigList(this, "rotation_config", false);
  public get rotationConfig() {
    return this._rotationConfig;
  }
}

export class DataGoogleContainerClusterSecretSyncConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterSecretSyncConfigOutputReference {
    return new DataGoogleContainerClusterSecretSyncConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterSecurityPostureConfig {
}

export function dataGoogleContainerClusterSecurityPostureConfigToTerraform(struct?: DataGoogleContainerClusterSecurityPostureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterSecurityPostureConfigToHclTerraform(struct?: DataGoogleContainerClusterSecurityPostureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterSecurityPostureConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterSecurityPostureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterSecurityPostureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // vulnerability_mode - computed: true, optional: false, required: false
  public get vulnerabilityMode() {
    return this.getStringAttribute('vulnerability_mode');
  }
}

export class DataGoogleContainerClusterSecurityPostureConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterSecurityPostureConfigOutputReference {
    return new DataGoogleContainerClusterSecurityPostureConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterServiceExternalIpsConfig {
}

export function dataGoogleContainerClusterServiceExternalIpsConfigToTerraform(struct?: DataGoogleContainerClusterServiceExternalIpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterServiceExternalIpsConfigToHclTerraform(struct?: DataGoogleContainerClusterServiceExternalIpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterServiceExternalIpsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterServiceExternalIpsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterServiceExternalIpsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterServiceExternalIpsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterServiceExternalIpsConfigOutputReference {
    return new DataGoogleContainerClusterServiceExternalIpsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterTpuConfig {
}

export function dataGoogleContainerClusterTpuConfigToTerraform(struct?: DataGoogleContainerClusterTpuConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterTpuConfigToHclTerraform(struct?: DataGoogleContainerClusterTpuConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterTpuConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterTpuConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterTpuConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ipv4_cidr_block - computed: true, optional: false, required: false
  public get ipv4CidrBlock() {
    return this.getStringAttribute('ipv4_cidr_block');
  }

  // use_service_networking - computed: true, optional: false, required: false
  public get useServiceNetworking() {
    return this.getBooleanAttribute('use_service_networking');
  }
}

export class DataGoogleContainerClusterTpuConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterTpuConfigOutputReference {
    return new DataGoogleContainerClusterTpuConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterUserManagedKeysConfig {
}

export function dataGoogleContainerClusterUserManagedKeysConfigToTerraform(struct?: DataGoogleContainerClusterUserManagedKeysConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterUserManagedKeysConfigToHclTerraform(struct?: DataGoogleContainerClusterUserManagedKeysConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterUserManagedKeysConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterUserManagedKeysConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterUserManagedKeysConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_ca - computed: true, optional: false, required: false
  public get aggregationCa() {
    return this.getStringAttribute('aggregation_ca');
  }

  // cluster_ca - computed: true, optional: false, required: false
  public get clusterCa() {
    return this.getStringAttribute('cluster_ca');
  }

  // control_plane_disk_encryption_key - computed: true, optional: false, required: false
  public get controlPlaneDiskEncryptionKey() {
    return this.getStringAttribute('control_plane_disk_encryption_key');
  }

  // control_plane_disk_encryption_key_versions - computed: true, optional: false, required: false
  public get controlPlaneDiskEncryptionKeyVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('control_plane_disk_encryption_key_versions'));
  }

  // etcd_api_ca - computed: true, optional: false, required: false
  public get etcdApiCa() {
    return this.getStringAttribute('etcd_api_ca');
  }

  // etcd_peer_ca - computed: true, optional: false, required: false
  public get etcdPeerCa() {
    return this.getStringAttribute('etcd_peer_ca');
  }

  // gkeops_etcd_backup_encryption_key - computed: true, optional: false, required: false
  public get gkeopsEtcdBackupEncryptionKey() {
    return this.getStringAttribute('gkeops_etcd_backup_encryption_key');
  }

  // service_account_signing_keys - computed: true, optional: false, required: false
  public get serviceAccountSigningKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_signing_keys'));
  }

  // service_account_verification_keys - computed: true, optional: false, required: false
  public get serviceAccountVerificationKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_verification_keys'));
  }
}

export class DataGoogleContainerClusterUserManagedKeysConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterUserManagedKeysConfigOutputReference {
    return new DataGoogleContainerClusterUserManagedKeysConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterVerticalPodAutoscaling {
}

export function dataGoogleContainerClusterVerticalPodAutoscalingToTerraform(struct?: DataGoogleContainerClusterVerticalPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterVerticalPodAutoscalingToHclTerraform(struct?: DataGoogleContainerClusterVerticalPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterVerticalPodAutoscalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterVerticalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterVerticalPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterVerticalPodAutoscalingList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterVerticalPodAutoscalingOutputReference {
    return new DataGoogleContainerClusterVerticalPodAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterWorkloadAltsConfig {
}

export function dataGoogleContainerClusterWorkloadAltsConfigToTerraform(struct?: DataGoogleContainerClusterWorkloadAltsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterWorkloadAltsConfigToHclTerraform(struct?: DataGoogleContainerClusterWorkloadAltsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterWorkloadAltsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterWorkloadAltsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterWorkloadAltsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_alts - computed: true, optional: false, required: false
  public get enableAlts() {
    return this.getBooleanAttribute('enable_alts');
  }
}

export class DataGoogleContainerClusterWorkloadAltsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterWorkloadAltsConfigOutputReference {
    return new DataGoogleContainerClusterWorkloadAltsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterWorkloadIdentityConfig {
}

export function dataGoogleContainerClusterWorkloadIdentityConfigToTerraform(struct?: DataGoogleContainerClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterWorkloadIdentityConfigToHclTerraform(struct?: DataGoogleContainerClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterWorkloadIdentityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleContainerClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterWorkloadIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // workload_pool - computed: true, optional: false, required: false
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
}

export class DataGoogleContainerClusterWorkloadIdentityConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleContainerClusterWorkloadIdentityConfigOutputReference {
    return new DataGoogleContainerClusterWorkloadIdentityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
