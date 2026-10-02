import * as cdktf from 'cdktf';
import { GoogleContainerClusterNodeConfigEffectiveTaintsList,
GoogleContainerClusterNodeConfigAdvancedMachineFeatures,
googleContainerClusterNodeConfigAdvancedMachineFeaturesToTerraform,
googleContainerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform,
GoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference,
GoogleContainerClusterNodeConfigBootDisk,
googleContainerClusterNodeConfigBootDiskToTerraform,
googleContainerClusterNodeConfigBootDiskToHclTerraform,
GoogleContainerClusterNodeConfigBootDiskOutputReference,
GoogleContainerClusterNodeConfigConfidentialNodes,
googleContainerClusterNodeConfigConfidentialNodesToTerraform,
googleContainerClusterNodeConfigConfidentialNodesToHclTerraform,
GoogleContainerClusterNodeConfigConfidentialNodesOutputReference,
GoogleContainerClusterNodeConfigContainerdConfig,
googleContainerClusterNodeConfigContainerdConfigToTerraform,
googleContainerClusterNodeConfigContainerdConfigToHclTerraform,
GoogleContainerClusterNodeConfigContainerdConfigOutputReference,
GoogleContainerClusterNodeConfigEphemeralStorageConfig,
googleContainerClusterNodeConfigEphemeralStorageConfigToTerraform,
googleContainerClusterNodeConfigEphemeralStorageConfigToHclTerraform,
GoogleContainerClusterNodeConfigEphemeralStorageConfigOutputReference,
GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig,
googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform,
googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform,
GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference,
GoogleContainerClusterNodeConfigFastSocket,
googleContainerClusterNodeConfigFastSocketToTerraform,
googleContainerClusterNodeConfigFastSocketToHclTerraform,
GoogleContainerClusterNodeConfigFastSocketOutputReference,
GoogleContainerClusterNodeConfigGcfsConfig,
googleContainerClusterNodeConfigGcfsConfigToTerraform,
googleContainerClusterNodeConfigGcfsConfigToHclTerraform,
GoogleContainerClusterNodeConfigGcfsConfigOutputReference,
GoogleContainerClusterNodeConfigGuestAccelerator,
googleContainerClusterNodeConfigGuestAcceleratorToTerraform,
googleContainerClusterNodeConfigGuestAcceleratorToHclTerraform,
GoogleContainerClusterNodeConfigGuestAcceleratorList,
GoogleContainerClusterNodeConfigGvnic,
googleContainerClusterNodeConfigGvnicToTerraform,
googleContainerClusterNodeConfigGvnicToHclTerraform,
GoogleContainerClusterNodeConfigGvnicOutputReference,
GoogleContainerClusterNodeConfigHostMaintenancePolicy,
googleContainerClusterNodeConfigHostMaintenancePolicyToTerraform,
googleContainerClusterNodeConfigHostMaintenancePolicyToHclTerraform,
GoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference,
GoogleContainerClusterNodeConfigKubeletConfig,
googleContainerClusterNodeConfigKubeletConfigToTerraform,
googleContainerClusterNodeConfigKubeletConfigToHclTerraform,
GoogleContainerClusterNodeConfigKubeletConfigOutputReference,
GoogleContainerClusterNodeConfigLinuxNodeConfig,
googleContainerClusterNodeConfigLinuxNodeConfigToTerraform,
googleContainerClusterNodeConfigLinuxNodeConfigToHclTerraform,
GoogleContainerClusterNodeConfigLinuxNodeConfigOutputReference,
GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig,
googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToTerraform,
googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToHclTerraform,
GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference,
GoogleContainerClusterNodeConfigNodeImageConfig,
googleContainerClusterNodeConfigNodeImageConfigToTerraform,
googleContainerClusterNodeConfigNodeImageConfigToHclTerraform,
GoogleContainerClusterNodeConfigNodeImageConfigList } from './structs0'
export interface GoogleContainerClusterNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#consume_reservation_type GoogleContainerCluster#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#values GoogleContainerCluster#values}
  */
  readonly values?: string[];
}

export function googleContainerClusterNodeConfigReservationAffinityToTerraform(struct?: GoogleContainerClusterNodeConfigReservationAffinityOutputReference | GoogleContainerClusterNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleContainerClusterNodeConfigReservationAffinityToHclTerraform(struct?: GoogleContainerClusterNodeConfigReservationAffinityOutputReference | GoogleContainerClusterNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consume_reservation_type: {
      value: cdktf.stringToHclTerraform(struct!.consumeReservationType),
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
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

  public set internalValue(value: GoogleContainerClusterNodeConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
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
    return cdktf.Fn.tolist(this.getListAttribute('values'));
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
export interface GoogleContainerClusterNodeConfigSandboxConfig {
  /**
  * Type of the sandbox to use for the node (e.g. 'gvisor'). Deprecated in favor of type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#sandbox_type GoogleContainerCluster#sandbox_type}
  */
  readonly sandboxType?: string;
  /**
  * Type of the sandbox to use for the node (e.g. 'GVISOR').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type?: string;
}

export function googleContainerClusterNodeConfigSandboxConfigToTerraform(struct?: GoogleContainerClusterNodeConfigSandboxConfigOutputReference | GoogleContainerClusterNodeConfigSandboxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sandbox_type: cdktf.stringToTerraform(struct!.sandboxType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleContainerClusterNodeConfigSandboxConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigSandboxConfigOutputReference | GoogleContainerClusterNodeConfigSandboxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sandbox_type: {
      value: cdktf.stringToHclTerraform(struct!.sandboxType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigSandboxConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigSandboxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sandboxType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxType = this._sandboxType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigSandboxConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sandboxType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sandboxType = value.sandboxType;
      this._type = value.type;
    }
  }

  // sandbox_type - computed: false, optional: true, required: false
  private _sandboxType?: string; 
  public get sandboxType() {
    return this.getStringAttribute('sandbox_type');
  }
  public set sandboxType(value: string) {
    this._sandboxType = value;
  }
  public resetSandboxType() {
    this._sandboxType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxTypeInput() {
    return this._sandboxType;
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
export interface GoogleContainerClusterNodeConfigSecondaryBootDisks {
  /**
  * Disk image to create the secondary boot disk from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#disk_image GoogleContainerCluster#disk_image}
  */
  readonly diskImage: string;
  /**
  * Mode for how the secondary boot disk is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode?: string;
}

export function googleContainerClusterNodeConfigSecondaryBootDisksToTerraform(struct?: GoogleContainerClusterNodeConfigSecondaryBootDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_image: cdktf.stringToTerraform(struct!.diskImage),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function googleContainerClusterNodeConfigSecondaryBootDisksToHclTerraform(struct?: GoogleContainerClusterNodeConfigSecondaryBootDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_image: {
      value: cdktf.stringToHclTerraform(struct!.diskImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigSecondaryBootDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigSecondaryBootDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskImage = this._diskImage;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigSecondaryBootDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskImage = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskImage = value.diskImage;
      this._mode = value.mode;
    }
  }

  // disk_image - computed: false, optional: false, required: true
  private _diskImage?: string; 
  public get diskImage() {
    return this.getStringAttribute('disk_image');
  }
  public set diskImage(value: string) {
    this._diskImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskImageInput() {
    return this._diskImage;
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
}

export class GoogleContainerClusterNodeConfigSecondaryBootDisksList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigSecondaryBootDisks[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodeConfigSecondaryBootDisksOutputReference {
    return new GoogleContainerClusterNodeConfigSecondaryBootDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_integrity_monitoring GoogleContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_secure_boot GoogleContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodeConfigShieldedInstanceConfigToTerraform(struct?: GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerClusterNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function googleContainerClusterNodeConfigShieldedInstanceConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerClusterNodeConfigShieldedInstanceConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigShieldedInstanceConfig | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
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
}
export interface GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#operator GoogleContainerCluster#operator}
  */
  readonly operator: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#values GoogleContainerCluster#values}
  */
  readonly values: string[];
}

export function googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
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


export function googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToHclTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
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

export class GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference {
    return new GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigSoleTenantConfig {
  /**
  * Specifies the minimum number of vCPUs that each sole tenant node must have to use CPU overcommit. If not specified, the CPU overcommit feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#min_node_cpus GoogleContainerCluster#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_affinity GoogleContainerCluster#node_affinity}
  */
  readonly nodeAffinity: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable;
}

export function googleContainerClusterNodeConfigSoleTenantConfigToTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference | GoogleContainerClusterNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_node_cpus: cdktf.numberToTerraform(struct!.minNodeCpus),
    node_affinity: cdktf.listMapper(googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToTerraform, true)(struct!.nodeAffinity),
  }
}


export function googleContainerClusterNodeConfigSoleTenantConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference | GoogleContainerClusterNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_node_cpus: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity: {
      value: cdktf.listMapperHcl(googleContainerClusterNodeConfigSoleTenantConfigNodeAffinityToHclTerraform, true)(struct!.nodeAffinity),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigSoleTenantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minNodeCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCpus = this._minNodeCpus;
    }
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigSoleTenantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minNodeCpus = undefined;
      this._nodeAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minNodeCpus = value.minNodeCpus;
      this._nodeAffinity.internalValue = value.nodeAffinity;
    }
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

  // node_affinity - computed: false, optional: false, required: true
  private _nodeAffinity = new GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinityList(this, "node_affinity", true);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: GoogleContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable) {
    this._nodeAffinity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }
}
export interface GoogleContainerClusterNodeConfigTaint {
  /**
  * Effect for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#effect GoogleContainerCluster#effect}
  */
  readonly effect: string;
  /**
  * Key for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * Value for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#value GoogleContainerCluster#value}
  */
  readonly value: string;
}

export function googleContainerClusterNodeConfigTaintToTerraform(struct?: GoogleContainerClusterNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleContainerClusterNodeConfigTaintToHclTerraform(struct?: GoogleContainerClusterNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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

export class GoogleContainerClusterNodeConfigTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodeConfigTaint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
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

  public set internalValue(value: GoogleContainerClusterNodeConfigTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
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
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleContainerClusterNodeConfigTaintList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodeConfigTaint[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodeConfigTaintOutputReference {
    return new GoogleContainerClusterNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodeConfigTaintConfig {
  /**
  * Architecture taint behavior. Controls, how we apply taints based on the node architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#architecture_taint_behavior GoogleContainerCluster#architecture_taint_behavior}
  */
  readonly architectureTaintBehavior: string;
}

export function googleContainerClusterNodeConfigTaintConfigToTerraform(struct?: GoogleContainerClusterNodeConfigTaintConfigOutputReference | GoogleContainerClusterNodeConfigTaintConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture_taint_behavior: cdktf.stringToTerraform(struct!.architectureTaintBehavior),
  }
}


export function googleContainerClusterNodeConfigTaintConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigTaintConfigOutputReference | GoogleContainerClusterNodeConfigTaintConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architecture_taint_behavior: {
      value: cdktf.stringToHclTerraform(struct!.architectureTaintBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigTaintConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigTaintConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architectureTaintBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectureTaintBehavior = this._architectureTaintBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigTaintConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._architectureTaintBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._architectureTaintBehavior = value.architectureTaintBehavior;
    }
  }

  // architecture_taint_behavior - computed: false, optional: false, required: true
  private _architectureTaintBehavior?: string; 
  public get architectureTaintBehavior() {
    return this.getStringAttribute('architecture_taint_behavior');
  }
  public set architectureTaintBehavior(value: string) {
    this._architectureTaintBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureTaintBehaviorInput() {
    return this._architectureTaintBehavior;
  }
}
export interface GoogleContainerClusterNodeConfigWindowsNodeConfig {
  /**
  * The OS Version of the windows nodepool.Values are OS_VERSION_UNSPECIFIED,OS_VERSION_LTSC2019 and OS_VERSION_LTSC2022
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#osversion GoogleContainerCluster#osversion}
  */
  readonly osversion?: string;
}

export function googleContainerClusterNodeConfigWindowsNodeConfigToTerraform(struct?: GoogleContainerClusterNodeConfigWindowsNodeConfigOutputReference | GoogleContainerClusterNodeConfigWindowsNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    osversion: cdktf.stringToTerraform(struct!.osversion),
  }
}


export function googleContainerClusterNodeConfigWindowsNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigWindowsNodeConfigOutputReference | GoogleContainerClusterNodeConfigWindowsNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    osversion: {
      value: cdktf.stringToHclTerraform(struct!.osversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigWindowsNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigWindowsNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osversion = this._osversion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigWindowsNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._osversion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._osversion = value.osversion;
    }
  }

  // osversion - computed: false, optional: true, required: false
  private _osversion?: string; 
  public get osversion() {
    return this.getStringAttribute('osversion');
  }
  public set osversion(value: string) {
    this._osversion = value;
  }
  public resetOsversion() {
    this._osversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osversionInput() {
    return this._osversion;
  }
}
export interface GoogleContainerClusterNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode: string;
}

export function googleContainerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct?: GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function googleContainerClusterNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodeConfigWorkloadMetadataConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface GoogleContainerClusterNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#boot_disk_kms_key GoogleContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#disk_size_gb GoogleContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#disk_type GoogleContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_confidential_storage GoogleContainerCluster#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktf.IResolvable;
  /**
  * Enables Flex Start provisioning model for the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#flex_start GoogleContainerCluster#flex_start}
  */
  readonly flexStart?: boolean | cdktf.IResolvable;
  /**
  * The type of GPUDirect strategy to enable on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gpudirect_strategy GoogleContainerCluster#gpudirect_strategy}
  */
  readonly gpudirectStrategy?: string;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#image_type GoogleContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#labels GoogleContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * LocalSsdEncryptionMode specified the method used for encrypting the local SSDs attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#local_ssd_encryption_mode GoogleContainerCluster#local_ssd_encryption_mode}
  */
  readonly localSsdEncryptionMode?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#logging_variant GoogleContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#machine_type GoogleContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The runtime of each node in the node pool in seconds, terminated by 's'. Example: "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#max_run_duration GoogleContainerCluster#max_run_duration}
  */
  readonly maxRunDuration?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#metadata GoogleContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#min_cpu_platform GoogleContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_group GoogleContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#oauth_scopes GoogleContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#preemptible GoogleContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#resource_labels GoogleContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#resource_manager_tags GoogleContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#service_account GoogleContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#spot GoogleContainerCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * The list of Storage Pools where boot disks are provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#storage_pools GoogleContainerCluster#storage_pools}
  */
  readonly storagePools?: string[];
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#tags GoogleContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#advanced_machine_features GoogleContainerCluster#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: GoogleContainerClusterNodeConfigAdvancedMachineFeatures;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#boot_disk GoogleContainerCluster#boot_disk}
  */
  readonly bootDisk?: GoogleContainerClusterNodeConfigBootDisk;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#confidential_nodes GoogleContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: GoogleContainerClusterNodeConfigConfidentialNodes;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#containerd_config GoogleContainerCluster#containerd_config}
  */
  readonly containerdConfig?: GoogleContainerClusterNodeConfigContainerdConfig;
  /**
  * ephemeral_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#ephemeral_storage_config GoogleContainerCluster#ephemeral_storage_config}
  */
  readonly ephemeralStorageConfig?: GoogleContainerClusterNodeConfigEphemeralStorageConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#ephemeral_storage_local_ssd_config GoogleContainerCluster#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#fast_socket GoogleContainerCluster#fast_socket}
  */
  readonly fastSocket?: GoogleContainerClusterNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcfs_config GoogleContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: GoogleContainerClusterNodeConfigGcfsConfig;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#guest_accelerator GoogleContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: GoogleContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gvnic GoogleContainerCluster#gvnic}
  */
  readonly gvnic?: GoogleContainerClusterNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#host_maintenance_policy GoogleContainerCluster#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: GoogleContainerClusterNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#kubelet_config GoogleContainerCluster#kubelet_config}
  */
  readonly kubeletConfig?: GoogleContainerClusterNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#linux_node_config GoogleContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: GoogleContainerClusterNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#local_nvme_ssd_block_config GoogleContainerCluster#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * node_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_image_config GoogleContainerCluster#node_image_config}
  */
  readonly nodeImageConfig?: GoogleContainerClusterNodeConfigNodeImageConfig[] | cdktf.IResolvable;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#reservation_affinity GoogleContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleContainerClusterNodeConfigReservationAffinity;
  /**
  * sandbox_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#sandbox_config GoogleContainerCluster#sandbox_config}
  */
  readonly sandboxConfig?: GoogleContainerClusterNodeConfigSandboxConfig;
  /**
  * secondary_boot_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#secondary_boot_disks GoogleContainerCluster#secondary_boot_disks}
  */
  readonly secondaryBootDisks?: GoogleContainerClusterNodeConfigSecondaryBootDisks[] | cdktf.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#shielded_instance_config GoogleContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleContainerClusterNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#sole_tenant_config GoogleContainerCluster#sole_tenant_config}
  */
  readonly soleTenantConfig?: GoogleContainerClusterNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#taint GoogleContainerCluster#taint}
  */
  readonly taint?: GoogleContainerClusterNodeConfigTaint[] | cdktf.IResolvable;
  /**
  * taint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#taint_config GoogleContainerCluster#taint_config}
  */
  readonly taintConfig?: GoogleContainerClusterNodeConfigTaintConfig;
  /**
  * windows_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#windows_node_config GoogleContainerCluster#windows_node_config}
  */
  readonly windowsNodeConfig?: GoogleContainerClusterNodeConfigWindowsNodeConfig;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#workload_metadata_config GoogleContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: GoogleContainerClusterNodeConfigWorkloadMetadataConfig;
}

export function googleContainerClusterNodeConfigToTerraform(struct?: GoogleContainerClusterNodeConfigOutputReference | GoogleContainerClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktf.booleanToTerraform(struct!.enableConfidentialStorage),
    flex_start: cdktf.booleanToTerraform(struct!.flexStart),
    gpudirect_strategy: cdktf.stringToTerraform(struct!.gpudirectStrategy),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    local_ssd_encryption_mode: cdktf.stringToTerraform(struct!.localSsdEncryptionMode),
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_run_duration: cdktf.stringToTerraform(struct!.maxRunDuration),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    storage_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storagePools),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    advanced_machine_features: googleContainerClusterNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    boot_disk: googleContainerClusterNodeConfigBootDiskToTerraform(struct!.bootDisk),
    confidential_nodes: googleContainerClusterNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    containerd_config: googleContainerClusterNodeConfigContainerdConfigToTerraform(struct!.containerdConfig),
    ephemeral_storage_config: googleContainerClusterNodeConfigEphemeralStorageConfigToTerraform(struct!.ephemeralStorageConfig),
    ephemeral_storage_local_ssd_config: googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: googleContainerClusterNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: googleContainerClusterNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    guest_accelerator: cdktf.listMapper(googleContainerClusterNodeConfigGuestAcceleratorToTerraform, true)(struct!.guestAccelerator),
    gvnic: googleContainerClusterNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: googleContainerClusterNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: googleContainerClusterNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: googleContainerClusterNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    node_image_config: cdktf.listMapper(googleContainerClusterNodeConfigNodeImageConfigToTerraform, true)(struct!.nodeImageConfig),
    reservation_affinity: googleContainerClusterNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    sandbox_config: googleContainerClusterNodeConfigSandboxConfigToTerraform(struct!.sandboxConfig),
    secondary_boot_disks: cdktf.listMapper(googleContainerClusterNodeConfigSecondaryBootDisksToTerraform, true)(struct!.secondaryBootDisks),
    shielded_instance_config: googleContainerClusterNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: googleContainerClusterNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktf.listMapper(googleContainerClusterNodeConfigTaintToTerraform, true)(struct!.taint),
    taint_config: googleContainerClusterNodeConfigTaintConfigToTerraform(struct!.taintConfig),
    windows_node_config: googleContainerClusterNodeConfigWindowsNodeConfigToTerraform(struct!.windowsNodeConfig),
    workload_metadata_config: googleContainerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function googleContainerClusterNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodeConfigOutputReference | GoogleContainerClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskKmsKey),
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
    enable_confidential_storage: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flex_start: {
      value: cdktf.booleanToHclTerraform(struct!.flexStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gpudirect_strategy: {
      value: cdktf.stringToHclTerraform(struct!.gpudirectStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_encryption_mode: {
      value: cdktf.stringToHclTerraform(struct!.localSsdEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_variant: {
      value: cdktf.stringToHclTerraform(struct!.loggingVariant),
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
    max_run_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxRunDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_manager_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storagePools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: googleContainerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigAdvancedMachineFeaturesList",
    },
    boot_disk: {
      value: googleContainerClusterNodeConfigBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigBootDiskList",
    },
    confidential_nodes: {
      value: googleContainerClusterNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigConfidentialNodesList",
    },
    containerd_config: {
      value: googleContainerClusterNodeConfigContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigContainerdConfigList",
    },
    ephemeral_storage_config: {
      value: googleContainerClusterNodeConfigEphemeralStorageConfigToHclTerraform(struct!.ephemeralStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigEphemeralStorageConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: googleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: googleContainerClusterNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: googleContainerClusterNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGcfsConfigList",
    },
    guest_accelerator: {
      value: cdktf.listMapperHcl(googleContainerClusterNodeConfigGuestAcceleratorToHclTerraform, true)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGuestAcceleratorList",
    },
    gvnic: {
      value: googleContainerClusterNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: googleContainerClusterNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: googleContainerClusterNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: googleContainerClusterNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: googleContainerClusterNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigList",
    },
    node_image_config: {
      value: cdktf.listMapperHcl(googleContainerClusterNodeConfigNodeImageConfigToHclTerraform, true)(struct!.nodeImageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigNodeImageConfigList",
    },
    reservation_affinity: {
      value: googleContainerClusterNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigReservationAffinityList",
    },
    sandbox_config: {
      value: googleContainerClusterNodeConfigSandboxConfigToHclTerraform(struct!.sandboxConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigSandboxConfigList",
    },
    secondary_boot_disks: {
      value: cdktf.listMapperHcl(googleContainerClusterNodeConfigSecondaryBootDisksToHclTerraform, true)(struct!.secondaryBootDisks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigSecondaryBootDisksList",
    },
    shielded_instance_config: {
      value: googleContainerClusterNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: googleContainerClusterNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktf.listMapperHcl(googleContainerClusterNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigTaintList",
    },
    taint_config: {
      value: googleContainerClusterNodeConfigTaintConfigToHclTerraform(struct!.taintConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigTaintConfigList",
    },
    windows_node_config: {
      value: googleContainerClusterNodeConfigWindowsNodeConfigToHclTerraform(struct!.windowsNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigWindowsNodeConfigList",
    },
    workload_metadata_config: {
      value: googleContainerClusterNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._enableConfidentialStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialStorage = this._enableConfidentialStorage;
    }
    if (this._flexStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexStart = this._flexStart;
    }
    if (this._gpudirectStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpudirectStrategy = this._gpudirectStrategy;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._localSsdEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdEncryptionMode = this._localSsdEncryptionMode;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxRunDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._storagePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePools = this._storagePools;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._confidentialNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialNodes = this._confidentialNodes?.internalValue;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._ephemeralStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageConfig = this._ephemeralStorageConfig?.internalValue;
    }
    if (this._ephemeralStorageLocalSsdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLocalSsdConfig = this._ephemeralStorageLocalSsdConfig?.internalValue;
    }
    if (this._fastSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastSocket = this._fastSocket?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._hostMaintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMaintenancePolicy = this._hostMaintenancePolicy?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._localNvmeSsdBlockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNvmeSsdBlockConfig = this._localNvmeSsdBlockConfig?.internalValue;
    }
    if (this._nodeImageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeImageConfig = this._nodeImageConfig?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._sandboxConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxConfig = this._sandboxConfig?.internalValue;
    }
    if (this._secondaryBootDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBootDisks = this._secondaryBootDisks?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._soleTenantConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soleTenantConfig = this._soleTenantConfig?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._taintConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taintConfig = this._taintConfig?.internalValue;
    }
    if (this._windowsNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsNodeConfig = this._windowsNodeConfig?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._flexStart = undefined;
      this._gpudirectStrategy = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._localSsdEncryptionMode = undefined;
      this._loggingVariant = undefined;
      this._machineType = undefined;
      this._maxRunDuration = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._resourceLabels = undefined;
      this._resourceManagerTags = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._storagePools = undefined;
      this._tags = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._bootDisk.internalValue = undefined;
      this._confidentialNodes.internalValue = undefined;
      this._containerdConfig.internalValue = undefined;
      this._ephemeralStorageConfig.internalValue = undefined;
      this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
      this._fastSocket.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._hostMaintenancePolicy.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._localNvmeSsdBlockConfig.internalValue = undefined;
      this._nodeImageConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._sandboxConfig.internalValue = undefined;
      this._secondaryBootDisks.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._taintConfig.internalValue = undefined;
      this._windowsNodeConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._enableConfidentialStorage = value.enableConfidentialStorage;
      this._flexStart = value.flexStart;
      this._gpudirectStrategy = value.gpudirectStrategy;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._localSsdEncryptionMode = value.localSsdEncryptionMode;
      this._loggingVariant = value.loggingVariant;
      this._machineType = value.machineType;
      this._maxRunDuration = value.maxRunDuration;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._resourceLabels = value.resourceLabels;
      this._resourceManagerTags = value.resourceManagerTags;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._storagePools = value.storagePools;
      this._tags = value.tags;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._bootDisk.internalValue = value.bootDisk;
      this._confidentialNodes.internalValue = value.confidentialNodes;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._ephemeralStorageConfig.internalValue = value.ephemeralStorageConfig;
      this._ephemeralStorageLocalSsdConfig.internalValue = value.ephemeralStorageLocalSsdConfig;
      this._fastSocket.internalValue = value.fastSocket;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._gvnic.internalValue = value.gvnic;
      this._hostMaintenancePolicy.internalValue = value.hostMaintenancePolicy;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._localNvmeSsdBlockConfig.internalValue = value.localNvmeSsdBlockConfig;
      this._nodeImageConfig.internalValue = value.nodeImageConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._sandboxConfig.internalValue = value.sandboxConfig;
      this._secondaryBootDisks.internalValue = value.secondaryBootDisks;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._taintConfig.internalValue = value.taintConfig;
      this._windowsNodeConfig.internalValue = value.windowsNodeConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size_gb - computed: true, optional: true, required: false
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

  // disk_type - computed: true, optional: true, required: false
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

  // effective_taints - computed: true, optional: false, required: false
  private _effectiveTaints = new GoogleContainerClusterNodeConfigEffectiveTaintsList(this, "effective_taints", false);
  public get effectiveTaints() {
    return this._effectiveTaints;
  }

  // enable_confidential_storage - computed: false, optional: true, required: false
  private _enableConfidentialStorage?: boolean | cdktf.IResolvable; 
  public get enableConfidentialStorage() {
    return this.getBooleanAttribute('enable_confidential_storage');
  }
  public set enableConfidentialStorage(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialStorage = value;
  }
  public resetEnableConfidentialStorage() {
    this._enableConfidentialStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialStorageInput() {
    return this._enableConfidentialStorage;
  }

  // flex_start - computed: false, optional: true, required: false
  private _flexStart?: boolean | cdktf.IResolvable; 
  public get flexStart() {
    return this.getBooleanAttribute('flex_start');
  }
  public set flexStart(value: boolean | cdktf.IResolvable) {
    this._flexStart = value;
  }
  public resetFlexStart() {
    this._flexStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexStartInput() {
    return this._flexStart;
  }

  // gpudirect_strategy - computed: true, optional: true, required: false
  private _gpudirectStrategy?: string; 
  public get gpudirectStrategy() {
    return this.getStringAttribute('gpudirect_strategy');
  }
  public set gpudirectStrategy(value: string) {
    this._gpudirectStrategy = value;
  }
  public resetGpudirectStrategy() {
    this._gpudirectStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpudirectStrategyInput() {
    return this._gpudirectStrategy;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // local_ssd_count - computed: true, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // local_ssd_encryption_mode - computed: false, optional: true, required: false
  private _localSsdEncryptionMode?: string; 
  public get localSsdEncryptionMode() {
    return this.getStringAttribute('local_ssd_encryption_mode');
  }
  public set localSsdEncryptionMode(value: string) {
    this._localSsdEncryptionMode = value;
  }
  public resetLocalSsdEncryptionMode() {
    this._localSsdEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdEncryptionModeInput() {
    return this._localSsdEncryptionMode;
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
  }

  // machine_type - computed: true, optional: true, required: false
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

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration?: string; 
  public get maxRunDuration() {
    return this.getStringAttribute('max_run_duration');
  }
  public set maxRunDuration(value: string) {
    this._maxRunDuration = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
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

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
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

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }

  // service_account - computed: true, optional: true, required: false
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

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // storage_pools - computed: false, optional: true, required: false
  private _storagePools?: string[]; 
  public get storagePools() {
    return this.getListAttribute('storage_pools');
  }
  public set storagePools(value: string[]) {
    this._storagePools = value;
  }
  public resetStoragePools() {
    this._storagePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolsInput() {
    return this._storagePools;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new GoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: GoogleContainerClusterNodeConfigAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk = new GoogleContainerClusterNodeConfigBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: GoogleContainerClusterNodeConfigBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new GoogleContainerClusterNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: GoogleContainerClusterNodeConfigConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new GoogleContainerClusterNodeConfigContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: GoogleContainerClusterNodeConfigContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // ephemeral_storage_config - computed: false, optional: true, required: false
  private _ephemeralStorageConfig = new GoogleContainerClusterNodeConfigEphemeralStorageConfigOutputReference(this, "ephemeral_storage_config");
  public get ephemeralStorageConfig() {
    return this._ephemeralStorageConfig;
  }
  public putEphemeralStorageConfig(value: GoogleContainerClusterNodeConfigEphemeralStorageConfig) {
    this._ephemeralStorageConfig.internalValue = value;
  }
  public resetEphemeralStorageConfig() {
    this._ephemeralStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageConfigInput() {
    return this._ephemeralStorageConfig.internalValue;
  }

  // ephemeral_storage_local_ssd_config - computed: false, optional: true, required: false
  private _ephemeralStorageLocalSsdConfig = new GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: GoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig) {
    this._ephemeralStorageLocalSsdConfig.internalValue = value;
  }
  public resetEphemeralStorageLocalSsdConfig() {
    this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLocalSsdConfigInput() {
    return this._ephemeralStorageLocalSsdConfig.internalValue;
  }

  // fast_socket - computed: false, optional: true, required: false
  private _fastSocket = new GoogleContainerClusterNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: GoogleContainerClusterNodeConfigFastSocket) {
    this._fastSocket.internalValue = value;
  }
  public resetFastSocket() {
    this._fastSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastSocketInput() {
    return this._fastSocket.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new GoogleContainerClusterNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: GoogleContainerClusterNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // guest_accelerator - computed: false, optional: true, required: false
  private _guestAccelerator = new GoogleContainerClusterNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: GoogleContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new GoogleContainerClusterNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: GoogleContainerClusterNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // host_maintenance_policy - computed: false, optional: true, required: false
  private _hostMaintenancePolicy = new GoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: GoogleContainerClusterNodeConfigHostMaintenancePolicy) {
    this._hostMaintenancePolicy.internalValue = value;
  }
  public resetHostMaintenancePolicy() {
    this._hostMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMaintenancePolicyInput() {
    return this._hostMaintenancePolicy.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new GoogleContainerClusterNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: GoogleContainerClusterNodeConfigKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new GoogleContainerClusterNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: GoogleContainerClusterNodeConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // local_nvme_ssd_block_config - computed: false, optional: true, required: false
  private _localNvmeSsdBlockConfig = new GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: GoogleContainerClusterNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // node_image_config - computed: false, optional: true, required: false
  private _nodeImageConfig = new GoogleContainerClusterNodeConfigNodeImageConfigList(this, "node_image_config", false);
  public get nodeImageConfig() {
    return this._nodeImageConfig;
  }
  public putNodeImageConfig(value: GoogleContainerClusterNodeConfigNodeImageConfig[] | cdktf.IResolvable) {
    this._nodeImageConfig.internalValue = value;
  }
  public resetNodeImageConfig() {
    this._nodeImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageConfigInput() {
    return this._nodeImageConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleContainerClusterNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleContainerClusterNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // sandbox_config - computed: false, optional: true, required: false
  private _sandboxConfig = new GoogleContainerClusterNodeConfigSandboxConfigOutputReference(this, "sandbox_config");
  public get sandboxConfig() {
    return this._sandboxConfig;
  }
  public putSandboxConfig(value: GoogleContainerClusterNodeConfigSandboxConfig) {
    this._sandboxConfig.internalValue = value;
  }
  public resetSandboxConfig() {
    this._sandboxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxConfigInput() {
    return this._sandboxConfig.internalValue;
  }

  // secondary_boot_disks - computed: false, optional: true, required: false
  private _secondaryBootDisks = new GoogleContainerClusterNodeConfigSecondaryBootDisksList(this, "secondary_boot_disks", false);
  public get secondaryBootDisks() {
    return this._secondaryBootDisks;
  }
  public putSecondaryBootDisks(value: GoogleContainerClusterNodeConfigSecondaryBootDisks[] | cdktf.IResolvable) {
    this._secondaryBootDisks.internalValue = value;
  }
  public resetSecondaryBootDisks() {
    this._secondaryBootDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBootDisksInput() {
    return this._secondaryBootDisks.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleContainerClusterNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleContainerClusterNodeConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // sole_tenant_config - computed: false, optional: true, required: false
  private _soleTenantConfig = new GoogleContainerClusterNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: GoogleContainerClusterNodeConfigSoleTenantConfig) {
    this._soleTenantConfig.internalValue = value;
  }
  public resetSoleTenantConfig() {
    this._soleTenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soleTenantConfigInput() {
    return this._soleTenantConfig.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new GoogleContainerClusterNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: GoogleContainerClusterNodeConfigTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // taint_config - computed: false, optional: true, required: false
  private _taintConfig = new GoogleContainerClusterNodeConfigTaintConfigOutputReference(this, "taint_config");
  public get taintConfig() {
    return this._taintConfig;
  }
  public putTaintConfig(value: GoogleContainerClusterNodeConfigTaintConfig) {
    this._taintConfig.internalValue = value;
  }
  public resetTaintConfig() {
    this._taintConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintConfigInput() {
    return this._taintConfig.internalValue;
  }

  // windows_node_config - computed: false, optional: true, required: false
  private _windowsNodeConfig = new GoogleContainerClusterNodeConfigWindowsNodeConfigOutputReference(this, "windows_node_config");
  public get windowsNodeConfig() {
    return this._windowsNodeConfig;
  }
  public putWindowsNodeConfig(value: GoogleContainerClusterNodeConfigWindowsNodeConfig) {
    this._windowsNodeConfig.internalValue = value;
  }
  public resetWindowsNodeConfig() {
    this._windowsNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsNodeConfigInput() {
    return this._windowsNodeConfig.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new GoogleContainerClusterNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: GoogleContainerClusterNodeConfigWorkloadMetadataConfig) {
    this._workloadMetadataConfig.internalValue = value;
  }
  public resetWorkloadMetadataConfig() {
    this._workloadMetadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetadataConfigInput() {
    return this._workloadMetadataConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodeCreationConfig {
  /**
  * NodeCreationMode defines the settings of node creation mode.
  *  Accepted values are:
  * * VIA_KUBELET: Kubelet registers itself.
  * * VIA_CONTROL_PLANE: gcp-controller-manager automatically creates the node object after CSR approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_creation_mode GoogleContainerCluster#node_creation_mode}
  */
  readonly nodeCreationMode: string;
}

export function googleContainerClusterNodeCreationConfigToTerraform(struct?: GoogleContainerClusterNodeCreationConfigOutputReference | GoogleContainerClusterNodeCreationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_creation_mode: cdktf.stringToTerraform(struct!.nodeCreationMode),
  }
}


export function googleContainerClusterNodeCreationConfigToHclTerraform(struct?: GoogleContainerClusterNodeCreationConfigOutputReference | GoogleContainerClusterNodeCreationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_creation_mode: {
      value: cdktf.stringToHclTerraform(struct!.nodeCreationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodeCreationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodeCreationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCreationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCreationMode = this._nodeCreationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodeCreationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeCreationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeCreationMode = value.nodeCreationMode;
    }
  }

  // node_creation_mode - computed: false, optional: false, required: true
  private _nodeCreationMode?: string; 
  public get nodeCreationMode() {
    return this.getStringAttribute('node_creation_mode');
  }
  public set nodeCreationMode(value: string) {
    this._nodeCreationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCreationModeInput() {
    return this._nodeCreationMode;
  }
}
export interface GoogleContainerClusterNodePoolAutoscaling {
  /**
  * Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#location_policy GoogleContainerCluster#location_policy}
  */
  readonly locationPolicy?: string;
  /**
  * Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#max_node_count GoogleContainerCluster#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#min_node_count GoogleContainerCluster#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#total_max_node_count GoogleContainerCluster#total_max_node_count}
  */
  readonly totalMaxNodeCount?: number;
  /**
  * Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#total_min_node_count GoogleContainerCluster#total_min_node_count}
  */
  readonly totalMinNodeCount?: number;
}

export function googleContainerClusterNodePoolAutoscalingToTerraform(struct?: GoogleContainerClusterNodePoolAutoscalingOutputReference | GoogleContainerClusterNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_policy: cdktf.stringToTerraform(struct!.locationPolicy),
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    total_max_node_count: cdktf.numberToTerraform(struct!.totalMaxNodeCount),
    total_min_node_count: cdktf.numberToTerraform(struct!.totalMinNodeCount),
  }
}


export function googleContainerClusterNodePoolAutoscalingToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoscalingOutputReference | GoogleContainerClusterNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_policy: {
      value: cdktf.stringToHclTerraform(struct!.locationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.totalMaxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.totalMinNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPolicy = this._locationPolicy;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._totalMaxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMaxNodeCount = this._totalMaxNodeCount;
    }
    if (this._totalMinNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMinNodeCount = this._totalMinNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locationPolicy = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
      this._totalMaxNodeCount = undefined;
      this._totalMinNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locationPolicy = value.locationPolicy;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
      this._totalMaxNodeCount = value.totalMaxNodeCount;
      this._totalMinNodeCount = value.totalMinNodeCount;
    }
  }

  // location_policy - computed: true, optional: true, required: false
  private _locationPolicy?: string; 
  public get locationPolicy() {
    return this.getStringAttribute('location_policy');
  }
  public set locationPolicy(value: string) {
    this._locationPolicy = value;
  }
  public resetLocationPolicy() {
    this._locationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPolicyInput() {
    return this._locationPolicy;
  }

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }

  // total_max_node_count - computed: false, optional: true, required: false
  private _totalMaxNodeCount?: number; 
  public get totalMaxNodeCount() {
    return this.getNumberAttribute('total_max_node_count');
  }
  public set totalMaxNodeCount(value: number) {
    this._totalMaxNodeCount = value;
  }
  public resetTotalMaxNodeCount() {
    this._totalMaxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaxNodeCountInput() {
    return this._totalMaxNodeCount;
  }

  // total_min_node_count - computed: false, optional: true, required: false
  private _totalMinNodeCount?: number; 
  public get totalMinNodeCount() {
    return this.getNumberAttribute('total_min_node_count');
  }
  public set totalMinNodeCount(value: number) {
    this._totalMinNodeCount = value;
  }
  public resetTotalMinNodeCount() {
    this._totalMinNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMinNodeCountInput() {
    return this._totalMinNodeCount;
  }
}
export interface GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport {
  /**
  * Whether to enable the maintenance exclusion until the end of support for this NodePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportToTerraform(struct?: GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportToHclTerraform(struct?: GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport | cdktf.IResolvable): any {
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

export class GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportOutputReference {
    return new GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolMaintenancePolicy {
  /**
  * exclusion_until_end_of_support block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#exclusion_until_end_of_support GoogleContainerCluster#exclusion_until_end_of_support}
  */
  readonly exclusionUntilEndOfSupport?: GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport[] | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolMaintenancePolicyToTerraform(struct?: GoogleContainerClusterNodePoolMaintenancePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_until_end_of_support: cdktf.listMapper(googleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportToTerraform, true)(struct!.exclusionUntilEndOfSupport),
  }
}


export function googleContainerClusterNodePoolMaintenancePolicyToHclTerraform(struct?: GoogleContainerClusterNodePoolMaintenancePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_until_end_of_support: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportToHclTerraform, true)(struct!.exclusionUntilEndOfSupport),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolMaintenancePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolMaintenancePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionUntilEndOfSupport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionUntilEndOfSupport = this._exclusionUntilEndOfSupport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolMaintenancePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionUntilEndOfSupport.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionUntilEndOfSupport.internalValue = value.exclusionUntilEndOfSupport;
    }
  }

  // exclusion_until_end_of_support - computed: false, optional: true, required: false
  private _exclusionUntilEndOfSupport = new GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportList(this, "exclusion_until_end_of_support", false);
  public get exclusionUntilEndOfSupport() {
    return this._exclusionUntilEndOfSupport;
  }
  public putExclusionUntilEndOfSupport(value: GoogleContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport[] | cdktf.IResolvable) {
    this._exclusionUntilEndOfSupport.internalValue = value;
  }
  public resetExclusionUntilEndOfSupport() {
    this._exclusionUntilEndOfSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionUntilEndOfSupportInput() {
    return this._exclusionUntilEndOfSupport.internalValue;
  }
}

export class GoogleContainerClusterNodePoolMaintenancePolicyList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolMaintenancePolicy[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolMaintenancePolicyOutputReference {
    return new GoogleContainerClusterNodePoolMaintenancePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolManagement {
  /**
  * Whether the nodes will be automatically repaired. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#auto_repair GoogleContainerCluster#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Whether the nodes will be automatically upgraded. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#auto_upgrade GoogleContainerCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolManagementToTerraform(struct?: GoogleContainerClusterNodePoolManagementOutputReference | GoogleContainerClusterNodePoolManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}


export function googleContainerClusterNodePoolManagementToHclTerraform(struct?: GoogleContainerClusterNodePoolManagementOutputReference | GoogleContainerClusterNodePoolManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_repair: {
      value: cdktf.booleanToHclTerraform(struct!.autoRepair),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_repair - computed: false, optional: true, required: false
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktf.IResolvable) {
    this._autoRepair = value;
  }
  public resetAutoRepair() {
    this._autoRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }
}
export interface GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs {
  /**
  * Name of the VPC where the additional interface belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#network GoogleContainerCluster#network}
  */
  readonly network?: string;
  /**
  * Name of the subnetwork where the additional interface belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#subnetwork GoogleContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
}

export function googleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function googleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToHclTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
  }

  // network - computed: true, optional: true, required: false
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

  // subnetwork - computed: true, optional: true, required: false
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

export class GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference {
    return new GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs {
  /**
  * The maximum number of pods per node which use this pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#max_pods_per_node GoogleContainerCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the secondary range on the subnet which provides IP address for this pod range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#secondary_pod_range GoogleContainerCluster#secondary_pod_range}
  */
  readonly secondaryPodRange?: string;
  /**
  * Name of the subnetwork where the additional pod network belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#subnetwork GoogleContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
}

export function googleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    secondary_pod_range: cdktf.stringToTerraform(struct!.secondaryPodRange),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function googleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToHclTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_pod_range: {
      value: cdktf.stringToHclTerraform(struct!.secondaryPodRange),
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

export class GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._secondaryPodRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPodRange = this._secondaryPodRange;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPodsPerNode = undefined;
      this._secondaryPodRange = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._secondaryPodRange = value.secondaryPodRange;
      this._subnetwork = value.subnetwork;
    }
  }

  // max_pods_per_node - computed: true, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // secondary_pod_range - computed: false, optional: true, required: false
  private _secondaryPodRange?: string; 
  public get secondaryPodRange() {
    return this.getStringAttribute('secondary_pod_range');
  }
  public set secondaryPodRange(value: string) {
    this._secondaryPodRange = value;
  }
  public resetSecondaryPodRange() {
    this._secondaryPodRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPodRangeInput() {
    return this._secondaryPodRange;
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

export class GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference {
    return new GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig {
  /**
  * Specifies the total network bandwidth tier for the NodePool. [Valid values](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.Tier) include: "TIER_1" and "TIER_UNSPECIFIED".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#total_egress_bandwidth_tier GoogleContainerCluster#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier: string;
}

export function googleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigToTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_egress_bandwidth_tier: cdktf.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function googleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig): any {
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

export class GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEgressBandwidthTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEgressBandwidthTier = value.totalEgressBandwidthTier;
    }
  }

  // total_egress_bandwidth_tier - computed: false, optional: false, required: true
  private _totalEgressBandwidthTier?: string; 
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
  public set totalEgressBandwidthTier(value: string) {
    this._totalEgressBandwidthTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEgressBandwidthTierInput() {
    return this._totalEgressBandwidthTier;
  }
}
export interface GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterNodePoolNetworkConfig {
  /**
  * The accelerator network profile to use for this node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#accelerator_network_profile GoogleContainerCluster#accelerator_network_profile}
  */
  readonly acceleratorNetworkProfile?: string;
  /**
  * Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#create_pod_range GoogleContainerCluster#create_pod_range}
  */
  readonly createPodRange?: boolean | cdktf.IResolvable;
  /**
  * Whether nodes have internal IP addresses only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_private_nodes GoogleContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#pod_ipv4_cidr_block GoogleContainerCluster#pod_ipv4_cidr_block}
  */
  readonly podIpv4CidrBlock?: string;
  /**
  * The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#pod_range GoogleContainerCluster#pod_range}
  */
  readonly podRange?: string;
  /**
  * The subnetwork name/path for the node pool. Format: subnetwork or projects/{project}/regions/{region}/subnetworks/{subnetwork}. This value may be specified via the nested network_config block (setting this attribute directly is supported for backward compatibility). Once created the node pool's subnetwork is immutable. If not set, the provider/API will choose the subnetwork (e.g. based on IP utilization) and report it here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#subnetwork GoogleContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * additional_node_network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#additional_node_network_configs GoogleContainerCluster#additional_node_network_configs}
  */
  readonly additionalNodeNetworkConfigs?: GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktf.IResolvable;
  /**
  * additional_pod_network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#additional_pod_network_configs GoogleContainerCluster#additional_pod_network_configs}
  */
  readonly additionalPodNetworkConfigs?: GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktf.IResolvable;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#network_performance_config GoogleContainerCluster#network_performance_config}
  */
  readonly networkPerformanceConfig?: GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig;
  /**
  * pod_cidr_overprovision_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#pod_cidr_overprovision_config GoogleContainerCluster#pod_cidr_overprovision_config}
  */
  readonly podCidrOverprovisionConfig?: GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig;
}

export function googleContainerClusterNodePoolNetworkConfigToTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_network_profile: cdktf.stringToTerraform(struct!.acceleratorNetworkProfile),
    create_pod_range: cdktf.booleanToTerraform(struct!.createPodRange),
    enable_private_nodes: cdktf.booleanToTerraform(struct!.enablePrivateNodes),
    pod_ipv4_cidr_block: cdktf.stringToTerraform(struct!.podIpv4CidrBlock),
    pod_range: cdktf.stringToTerraform(struct!.podRange),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    additional_node_network_configs: cdktf.listMapper(googleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToTerraform, true)(struct!.additionalNodeNetworkConfigs),
    additional_pod_network_configs: cdktf.listMapper(googleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToTerraform, true)(struct!.additionalPodNetworkConfigs),
    network_performance_config: googleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigToTerraform(struct!.networkPerformanceConfig),
    pod_cidr_overprovision_config: googleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToTerraform(struct!.podCidrOverprovisionConfig),
  }
}


export function googleContainerClusterNodePoolNetworkConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNetworkConfigOutputReference | GoogleContainerClusterNodePoolNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_network_profile: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorNetworkProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_pod_range: {
      value: cdktf.booleanToHclTerraform(struct!.createPodRange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.podIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_range: {
      value: cdktf.stringToHclTerraform(struct!.podRange),
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
    additional_node_network_configs: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToHclTerraform, true)(struct!.additionalNodeNetworkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList",
    },
    additional_pod_network_configs: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToHclTerraform, true)(struct!.additionalPodNetworkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList",
    },
    network_performance_config: {
      value: googleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigToHclTerraform(struct!.networkPerformanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigList",
    },
    pod_cidr_overprovision_config: {
      value: googleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToHclTerraform(struct!.podCidrOverprovisionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorNetworkProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorNetworkProfile = this._acceleratorNetworkProfile;
    }
    if (this._createPodRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPodRange = this._createPodRange;
    }
    if (this._enablePrivateNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._podIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIpv4CidrBlock = this._podIpv4CidrBlock;
    }
    if (this._podRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.podRange = this._podRange;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._additionalNodeNetworkConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalNodeNetworkConfigs = this._additionalNodeNetworkConfigs?.internalValue;
    }
    if (this._additionalPodNetworkConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPodNetworkConfigs = this._additionalPodNetworkConfigs?.internalValue;
    }
    if (this._networkPerformanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPerformanceConfig = this._networkPerformanceConfig?.internalValue;
    }
    if (this._podCidrOverprovisionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrOverprovisionConfig = this._podCidrOverprovisionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorNetworkProfile = undefined;
      this._createPodRange = undefined;
      this._enablePrivateNodes = undefined;
      this._podIpv4CidrBlock = undefined;
      this._podRange = undefined;
      this._subnetwork = undefined;
      this._additionalNodeNetworkConfigs.internalValue = undefined;
      this._additionalPodNetworkConfigs.internalValue = undefined;
      this._networkPerformanceConfig.internalValue = undefined;
      this._podCidrOverprovisionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorNetworkProfile = value.acceleratorNetworkProfile;
      this._createPodRange = value.createPodRange;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._podIpv4CidrBlock = value.podIpv4CidrBlock;
      this._podRange = value.podRange;
      this._subnetwork = value.subnetwork;
      this._additionalNodeNetworkConfigs.internalValue = value.additionalNodeNetworkConfigs;
      this._additionalPodNetworkConfigs.internalValue = value.additionalPodNetworkConfigs;
      this._networkPerformanceConfig.internalValue = value.networkPerformanceConfig;
      this._podCidrOverprovisionConfig.internalValue = value.podCidrOverprovisionConfig;
    }
  }

  // accelerator_network_profile - computed: false, optional: true, required: false
  private _acceleratorNetworkProfile?: string; 
  public get acceleratorNetworkProfile() {
    return this.getStringAttribute('accelerator_network_profile');
  }
  public set acceleratorNetworkProfile(value: string) {
    this._acceleratorNetworkProfile = value;
  }
  public resetAcceleratorNetworkProfile() {
    this._acceleratorNetworkProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorNetworkProfileInput() {
    return this._acceleratorNetworkProfile;
  }

  // create_pod_range - computed: false, optional: true, required: false
  private _createPodRange?: boolean | cdktf.IResolvable; 
  public get createPodRange() {
    return this.getBooleanAttribute('create_pod_range');
  }
  public set createPodRange(value: boolean | cdktf.IResolvable) {
    this._createPodRange = value;
  }
  public resetCreatePodRange() {
    this._createPodRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPodRangeInput() {
    return this._createPodRange;
  }

  // enable_private_nodes - computed: true, optional: true, required: false
  private _enablePrivateNodes?: boolean | cdktf.IResolvable; 
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }
  public set enablePrivateNodes(value: boolean | cdktf.IResolvable) {
    this._enablePrivateNodes = value;
  }
  public resetEnablePrivateNodes() {
    this._enablePrivateNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateNodesInput() {
    return this._enablePrivateNodes;
  }

  // pod_ipv4_cidr_block - computed: true, optional: true, required: false
  private _podIpv4CidrBlock?: string; 
  public get podIpv4CidrBlock() {
    return this.getStringAttribute('pod_ipv4_cidr_block');
  }
  public set podIpv4CidrBlock(value: string) {
    this._podIpv4CidrBlock = value;
  }
  public resetPodIpv4CidrBlock() {
    this._podIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpv4CidrBlockInput() {
    return this._podIpv4CidrBlock;
  }

  // pod_range - computed: true, optional: true, required: false
  private _podRange?: string; 
  public get podRange() {
    return this.getStringAttribute('pod_range');
  }
  public set podRange(value: string) {
    this._podRange = value;
  }
  public resetPodRange() {
    this._podRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podRangeInput() {
    return this._podRange;
  }

  // subnetwork - computed: true, optional: true, required: false
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

  // additional_node_network_configs - computed: false, optional: true, required: false
  private _additionalNodeNetworkConfigs = new GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList(this, "additional_node_network_configs", false);
  public get additionalNodeNetworkConfigs() {
    return this._additionalNodeNetworkConfigs;
  }
  public putAdditionalNodeNetworkConfigs(value: GoogleContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktf.IResolvable) {
    this._additionalNodeNetworkConfigs.internalValue = value;
  }
  public resetAdditionalNodeNetworkConfigs() {
    this._additionalNodeNetworkConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalNodeNetworkConfigsInput() {
    return this._additionalNodeNetworkConfigs.internalValue;
  }

  // additional_pod_network_configs - computed: false, optional: true, required: false
  private _additionalPodNetworkConfigs = new GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList(this, "additional_pod_network_configs", false);
  public get additionalPodNetworkConfigs() {
    return this._additionalPodNetworkConfigs;
  }
  public putAdditionalPodNetworkConfigs(value: GoogleContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktf.IResolvable) {
    this._additionalPodNetworkConfigs.internalValue = value;
  }
  public resetAdditionalPodNetworkConfigs() {
    this._additionalPodNetworkConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPodNetworkConfigsInput() {
    return this._additionalPodNetworkConfigs.internalValue;
  }

  // network_performance_config - computed: false, optional: true, required: false
  private _networkPerformanceConfig = new GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: GoogleContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig) {
    this._networkPerformanceConfig.internalValue = value;
  }
  public resetNetworkPerformanceConfig() {
    this._networkPerformanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPerformanceConfigInput() {
    return this._networkPerformanceConfig.internalValue;
  }

  // pod_cidr_overprovision_config - computed: false, optional: true, required: false
  private _podCidrOverprovisionConfig = new GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference(this, "pod_cidr_overprovision_config");
  public get podCidrOverprovisionConfig() {
    return this._podCidrOverprovisionConfig;
  }
  public putPodCidrOverprovisionConfig(value: GoogleContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig) {
    this._podCidrOverprovisionConfig.internalValue = value;
  }
  public resetPodCidrOverprovisionConfig() {
    this._podCidrOverprovisionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrOverprovisionConfigInput() {
    return this._podCidrOverprovisionConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigEffectiveTaints {
}

export function googleContainerClusterNodePoolNodeConfigEffectiveTaintsToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEffectiveTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleContainerClusterNodePoolNodeConfigEffectiveTaintsToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEffectiveTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigEffectiveTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigEffectiveTaints | undefined) {
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

export class GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures {
  /**
  * Whether the node should have nested virtualization enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_nested_virtualization GoogleContainerCluster#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * Level of Performance Monitoring Unit (PMU) requested. If unset, no access to the PMU is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#performance_monitoring_unit GoogleContainerCluster#performance_monitoring_unit}
  */
  readonly performanceMonitoringUnit?: string;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#threads_per_core GoogleContainerCluster#threads_per_core}
  */
  readonly threadsPerCore: number;
}

export function googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference | GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    performance_monitoring_unit: cdktf.stringToTerraform(struct!.performanceMonitoringUnit),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}


export function googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference | GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures): any {
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
    performance_monitoring_unit: {
      value: cdktf.stringToHclTerraform(struct!.performanceMonitoringUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
    }
    if (this._performanceMonitoringUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceMonitoringUnit = this._performanceMonitoringUnit;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNestedVirtualization = undefined;
      this._performanceMonitoringUnit = undefined;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._performanceMonitoringUnit = value.performanceMonitoringUnit;
      this._threadsPerCore = value.threadsPerCore;
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

  // performance_monitoring_unit - computed: false, optional: true, required: false
  private _performanceMonitoringUnit?: string; 
  public get performanceMonitoringUnit() {
    return this.getStringAttribute('performance_monitoring_unit');
  }
  public set performanceMonitoringUnit(value: string) {
    this._performanceMonitoringUnit = value;
  }
  public resetPerformanceMonitoringUnit() {
    this._performanceMonitoringUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceMonitoringUnitInput() {
    return this._performanceMonitoringUnit;
  }

  // threads_per_core - computed: false, optional: false, required: true
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigBootDisk {
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#disk_type GoogleContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Configured IOPs provisioning. Only valid with disk type hyperdisk-balanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#provisioned_iops GoogleContainerCluster#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Configured throughput provisioning. Only valid with disk type hyperdisk-balanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#provisioned_throughput GoogleContainerCluster#provisioned_throughput}
  */
  readonly provisionedThroughput?: number;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#size_gb GoogleContainerCluster#size_gb}
  */
  readonly sizeGb?: number;
}

export function googleContainerClusterNodePoolNodeConfigBootDiskToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigBootDiskOutputReference | GoogleContainerClusterNodePoolNodeConfigBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    provisioned_iops: cdktf.numberToTerraform(struct!.provisionedIops),
    provisioned_throughput: cdktf.numberToTerraform(struct!.provisionedThroughput),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}


export function googleContainerClusterNodePoolNodeConfigBootDiskToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigBootDiskOutputReference | GoogleContainerClusterNodePoolNodeConfigBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._provisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedIops = this._provisionedIops;
    }
    if (this._provisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskType = undefined;
      this._provisionedIops = undefined;
      this._provisionedThroughput = undefined;
      this._sizeGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskType = value.diskType;
      this._provisionedIops = value.provisionedIops;
      this._provisionedThroughput = value.provisionedThroughput;
      this._sizeGb = value.sizeGb;
    }
  }

  // disk_type - computed: true, optional: true, required: false
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

  // provisioned_iops - computed: true, optional: true, required: false
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

  // provisioned_throughput - computed: true, optional: true, required: false
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

  // size_gb - computed: true, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigConfidentialNodes {
  /**
  * Defines the type of technology used by the confidential node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#confidential_instance_type GoogleContainerCluster#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigConfidentialNodesToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference | GoogleContainerClusterNodePoolNodeConfigConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_instance_type: cdktf.stringToTerraform(struct!.confidentialInstanceType),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolNodeConfigConfidentialNodesToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference | GoogleContainerClusterNodePoolNodeConfigConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.confidentialInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceType = this._confidentialInstanceType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigConfidentialNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialInstanceType = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialInstanceType = value.confidentialInstanceType;
      this._enabled = value.enabled;
    }
  }

  // confidential_instance_type - computed: false, optional: true, required: false
  private _confidentialInstanceType?: string; 
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }
  public set confidentialInstanceType(value: string) {
    this._confidentialInstanceType = value;
  }
  public resetConfidentialInstanceType() {
    this._confidentialInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceTypeInput() {
    return this._confidentialInstanceType;
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
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  /**
  * URI for the secret that hosts a certificate. Must be in the format 'projects/PROJECT_NUM/secrets/SECRET_NAME/versions/VERSION_OR_LATEST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#secret_uri GoogleContainerCluster#secret_uri}
  */
  readonly secretUri: string;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_uri: cdktf.stringToTerraform(struct!.secretUri),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.secretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUri = this._secretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUri = value.secretUri;
    }
  }

  // secret_uri - computed: false, optional: false, required: true
  private _secretUri?: string; 
  public get secretUri() {
    return this.getStringAttribute('secret_uri');
  }
  public set secretUri(value: string) {
    this._secretUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUriInput() {
    return this._secretUri;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  /**
  * List of fully-qualified-domain-names. IPv4s and port specification are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#fqdns GoogleContainerCluster#fqdns}
  */
  readonly fqdns: string[];
  /**
  * gcp_secret_manager_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcp_secret_manager_certificate_config GoogleContainerCluster#gcp_secret_manager_certificate_config}
  */
  readonly gcpSecretManagerCertificateConfig: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdns),
    gcp_secret_manager_certificate_config: googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct!.gcpSecretManagerCertificateConfig),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_secret_manager_certificate_config: {
      value: googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct!.gcpSecretManagerCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._gcpSecretManagerCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerCertificateConfig = this._gcpSecretManagerCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdns = undefined;
      this._gcpSecretManagerCertificateConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdns = value.fqdns;
      this._gcpSecretManagerCertificateConfig.internalValue = value.gcpSecretManagerCertificateConfig;
    }
  }

  // fqdns - computed: false, optional: false, required: true
  private _fqdns?: string[]; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // gcp_secret_manager_certificate_config - computed: false, optional: false, required: true
  private _gcpSecretManagerCertificateConfig = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this, "gcp_secret_manager_certificate_config");
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
  public putGcpSecretManagerCertificateConfig(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig) {
    this._gcpSecretManagerCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerCertificateConfigInput() {
    return this._gcpSecretManagerCertificateConfig.internalValue;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig {
  /**
  * Whether or not private registries are configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * certificate_authority_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#certificate_authority_domain_config GoogleContainerCluster#certificate_authority_domain_config}
  */
  readonly certificateAuthorityDomainConfig?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    certificate_authority_domain_config: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform, true)(struct!.certificateAuthorityDomainConfig),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
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
    certificate_authority_domain_config: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform, true)(struct!.certificateAuthorityDomainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._certificateAuthorityDomainConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityDomainConfig = this._certificateAuthorityDomainConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._certificateAuthorityDomainConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._certificateAuthorityDomainConfig.internalValue = value.certificateAuthorityDomainConfig;
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

  // certificate_authority_domain_config - computed: false, optional: true, required: false
  private _certificateAuthorityDomainConfig = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }
  public putCertificateAuthorityDomainConfig(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable) {
    this._certificateAuthorityDomainConfig.internalValue = value;
  }
  public resetCertificateAuthorityDomainConfig() {
    this._certificateAuthorityDomainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityDomainConfigInput() {
    return this._certificateAuthorityDomainConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa {
  /**
  * URI for the Secret Manager secret that hosts the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcp_secret_manager_secret_uri GoogleContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktf.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert {
  /**
  * URI for the Secret Manager secret that hosts the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcp_secret_manager_secret_uri GoogleContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktf.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey {
  /**
  * URI for the Secret Manager secret that hosts the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcp_secret_manager_secret_uri GoogleContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktf.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient {
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#cert GoogleContainerCluster#cert}
  */
  readonly cert: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToTerraform(struct!.cert),
    key: googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct!.key),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertList",
    },
    key: {
      value: googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert.internalValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert.internalValue = value.cert;
      this._key.internalValue = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert) {
    this._cert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader {
  /**
  * Configures the header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * Configures the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#value GoogleContainerCluster#value}
  */
  readonly value: string[];
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts {
  /**
  * Represent the capabilities of the registry host, specifying what operations a host is capable of performing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#capabilities GoogleContainerCluster#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Specifies the maximum duration allowed for a connection attempt to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#dial_timeout GoogleContainerCluster#dial_timeout}
  */
  readonly dialTimeout?: string;
  /**
  * Configures the registry host/mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#host GoogleContainerCluster#host}
  */
  readonly host: string;
  /**
  * Indicate the host's API root endpoint is defined in the URL path rather than by the API specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#override_path GoogleContainerCluster#override_path}
  */
  readonly overridePath?: boolean | cdktf.IResolvable;
  /**
  * ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#ca GoogleContainerCluster#ca}
  */
  readonly ca?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktf.IResolvable;
  /**
  * client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#client GoogleContainerCluster#client}
  */
  readonly client?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#header GoogleContainerCluster#header}
  */
  readonly header?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    dial_timeout: cdktf.stringToTerraform(struct!.dialTimeout),
    host: cdktf.stringToTerraform(struct!.host),
    override_path: cdktf.booleanToTerraform(struct!.overridePath),
    ca: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToTerraform, true)(struct!.ca),
    client: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToTerraform, true)(struct!.client),
    header: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToTerraform, true)(struct!.header),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dial_timeout: {
      value: cdktf.stringToHclTerraform(struct!.dialTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_path: {
      value: cdktf.booleanToHclTerraform(struct!.overridePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToHclTerraform, true)(struct!.ca),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaList",
    },
    client: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToHclTerraform, true)(struct!.client),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientList",
    },
    header: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._dialTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialTimeout = this._dialTimeout;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._overridePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridePath = this._overridePath;
    }
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._dialTimeout = undefined;
      this._host = undefined;
      this._overridePath = undefined;
      this._ca.internalValue = undefined;
      this._client.internalValue = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._dialTimeout = value.dialTimeout;
      this._host = value.host;
      this._overridePath = value.overridePath;
      this._ca.internalValue = value.ca;
      this._client.internalValue = value.client;
      this._header.internalValue = value.header;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // dial_timeout - computed: false, optional: true, required: false
  private _dialTimeout?: string; 
  public get dialTimeout() {
    return this.getStringAttribute('dial_timeout');
  }
  public set dialTimeout(value: string) {
    this._dialTimeout = value;
  }
  public resetDialTimeout() {
    this._dialTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialTimeoutInput() {
    return this._dialTimeout;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // override_path - computed: false, optional: true, required: false
  private _overridePath?: boolean | cdktf.IResolvable; 
  public get overridePath() {
    return this.getBooleanAttribute('override_path');
  }
  public set overridePath(value: boolean | cdktf.IResolvable) {
    this._overridePath = value;
  }
  public resetOverridePath() {
    this._overridePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePathInput() {
    return this._overridePath;
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaList(this, "ca", false);
  public get ca() {
    return this._ca;
  }
  public putCa(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktf.IResolvable) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // client - computed: false, optional: true, required: false
  private _client = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientList(this, "client", false);
  public get client() {
    return this._client;
  }
  public putClient(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktf.IResolvable) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts {
  /**
  * Defines the host name of the registry server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#server GoogleContainerCluster#server}
  */
  readonly server: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#hosts GoogleContainerCluster#hosts}
  */
  readonly hosts?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts[] | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.stringToTerraform(struct!.server),
    hosts: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsToTerraform, true)(struct!.hosts),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._server = undefined;
      this._hosts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._server = value.server;
      this._hosts.internalValue = value.hosts;
    }
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups {
  /**
  * Whether writable cgroups are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups): any {
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

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups | undefined) {
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
export interface GoogleContainerClusterNodePoolNodeConfigContainerdConfig {
  /**
  * private_registry_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#private_registry_access_config GoogleContainerCluster#private_registry_access_config}
  */
  readonly privateRegistryAccessConfig?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig;
  /**
  * registry_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#registry_hosts GoogleContainerCluster#registry_hosts}
  */
  readonly registryHosts?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts[] | cdktf.IResolvable;
  /**
  * writable_cgroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#writable_cgroups GoogleContainerCluster#writable_cgroups}
  */
  readonly writableCgroups?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups;
}

export function googleContainerClusterNodePoolNodeConfigContainerdConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_registry_access_config: googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct!.privateRegistryAccessConfig),
    registry_hosts: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsToTerraform, true)(struct!.registryHosts),
    writable_cgroups: googleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsToTerraform(struct!.writableCgroups),
  }
}


export function googleContainerClusterNodePoolNodeConfigContainerdConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigContainerdConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_registry_access_config: {
      value: googleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct!.privateRegistryAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigList",
    },
    registry_hosts: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsToHclTerraform, true)(struct!.registryHosts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsList",
    },
    writable_cgroups: {
      value: googleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsToHclTerraform(struct!.writableCgroups),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigContainerdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigContainerdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateRegistryAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateRegistryAccessConfig = this._privateRegistryAccessConfig?.internalValue;
    }
    if (this._registryHosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryHosts = this._registryHosts?.internalValue;
    }
    if (this._writableCgroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writableCgroups = this._writableCgroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateRegistryAccessConfig.internalValue = undefined;
      this._registryHosts.internalValue = undefined;
      this._writableCgroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateRegistryAccessConfig.internalValue = value.privateRegistryAccessConfig;
      this._registryHosts.internalValue = value.registryHosts;
      this._writableCgroups.internalValue = value.writableCgroups;
    }
  }

  // private_registry_access_config - computed: false, optional: true, required: false
  private _privateRegistryAccessConfig = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference(this, "private_registry_access_config");
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }
  public putPrivateRegistryAccessConfig(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig) {
    this._privateRegistryAccessConfig.internalValue = value;
  }
  public resetPrivateRegistryAccessConfig() {
    this._privateRegistryAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryAccessConfigInput() {
    return this._privateRegistryAccessConfig.internalValue;
  }

  // registry_hosts - computed: false, optional: true, required: false
  private _registryHosts = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsList(this, "registry_hosts", false);
  public get registryHosts() {
    return this._registryHosts;
  }
  public putRegistryHosts(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts[] | cdktf.IResolvable) {
    this._registryHosts.internalValue = value;
  }
  public resetRegistryHosts() {
    this._registryHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryHostsInput() {
    return this._registryHosts.internalValue;
  }

  // writable_cgroups - computed: false, optional: true, required: false
  private _writableCgroups = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference(this, "writable_cgroups");
  public get writableCgroups() {
    return this._writableCgroups;
  }
  public putWritableCgroups(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups) {
    this._writableCgroups.internalValue = value;
  }
  public resetWritableCgroups() {
    this._writableCgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writableCgroupsInput() {
    return this._writableCgroups.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig {
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig {
  /**
  * Number of local SSDs to be utilized for GKE Data Cache. Uses NVMe interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#data_cache_count GoogleContainerCluster#data_cache_count}
  */
  readonly dataCacheCount?: number;
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_cache_count: cdktf.numberToTerraform(struct!.dataCacheCount),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_cache_count: {
      value: cdktf.numberToHclTerraform(struct!.dataCacheCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCacheCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheCount = this._dataCacheCount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCacheCount = undefined;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCacheCount = value.dataCacheCount;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // data_cache_count - computed: false, optional: true, required: false
  private _dataCacheCount?: number; 
  public get dataCacheCount() {
    return this.getNumberAttribute('data_cache_count');
  }
  public set dataCacheCount(value: number) {
    this._dataCacheCount = value;
  }
  public resetDataCacheCount() {
    this._dataCacheCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheCountInput() {
    return this._dataCacheCount;
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigFastSocket {
  /**
  * Whether or not NCCL Fast Socket is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigFastSocketToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigFastSocketOutputReference | GoogleContainerClusterNodePoolNodeConfigFastSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolNodeConfigFastSocketToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigFastSocketOutputReference | GoogleContainerClusterNodePoolNodeConfigFastSocket): any {
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

export class GoogleContainerClusterNodePoolNodeConfigFastSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigFastSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigFastSocket | undefined) {
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
export interface GoogleContainerClusterNodePoolNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGcfsConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolNodeConfigGcfsConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGcfsConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigGcfsConfig): any {
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

export class GoogleContainerClusterNodePoolNodeConfigGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigGcfsConfig | undefined) {
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
export interface GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  /**
  * Mode for how the GPU driver is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gpu_driver_version GoogleContainerCluster#gpu_driver_version}
  */
  readonly gpuDriverVersion: string;
}

export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_driver_version: cdktf.stringToTerraform(struct!.gpuDriverVersion),
  }
}


export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_driver_version: {
      value: cdktf.stringToHclTerraform(struct!.gpuDriverVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuDriverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverVersion = this._gpuDriverVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuDriverVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuDriverVersion = value.gpuDriverVersion;
    }
  }

  // gpu_driver_version - computed: false, optional: false, required: true
  private _gpuDriverVersion?: string; 
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
  public set gpuDriverVersion(value: string) {
    this._gpuDriverVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverVersionInput() {
    return this._gpuDriverVersion;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  /**
  * The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gpu_sharing_strategy GoogleContainerCluster#gpu_sharing_strategy}
  */
  readonly gpuSharingStrategy: string;
  /**
  * The maximum number of containers that can share a GPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#max_shared_clients_per_gpu GoogleContainerCluster#max_shared_clients_per_gpu}
  */
  readonly maxSharedClientsPerGpu: number;
}

export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_sharing_strategy: cdktf.stringToTerraform(struct!.gpuSharingStrategy),
    max_shared_clients_per_gpu: cdktf.numberToTerraform(struct!.maxSharedClientsPerGpu),
  }
}


export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_sharing_strategy: {
      value: cdktf.stringToHclTerraform(struct!.gpuSharingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_shared_clients_per_gpu: {
      value: cdktf.numberToHclTerraform(struct!.maxSharedClientsPerGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuSharingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingStrategy = this._gpuSharingStrategy;
    }
    if (this._maxSharedClientsPerGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSharedClientsPerGpu = this._maxSharedClientsPerGpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuSharingStrategy = undefined;
      this._maxSharedClientsPerGpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuSharingStrategy = value.gpuSharingStrategy;
      this._maxSharedClientsPerGpu = value.maxSharedClientsPerGpu;
    }
  }

  // gpu_sharing_strategy - computed: false, optional: false, required: true
  private _gpuSharingStrategy?: string; 
  public get gpuSharingStrategy() {
    return this.getStringAttribute('gpu_sharing_strategy');
  }
  public set gpuSharingStrategy(value: string) {
    this._gpuSharingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingStrategyInput() {
    return this._gpuSharingStrategy;
  }

  // max_shared_clients_per_gpu - computed: false, optional: false, required: true
  private _maxSharedClientsPerGpu?: number; 
  public get maxSharedClientsPerGpu() {
    return this.getNumberAttribute('max_shared_clients_per_gpu');
  }
  public set maxSharedClientsPerGpu(value: number) {
    this._maxSharedClientsPerGpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharedClientsPerGpuInput() {
    return this._maxSharedClientsPerGpu;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigGuestAccelerator {
  /**
  * The number of the accelerator cards exposed to an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#count GoogleContainerCluster#count}
  */
  readonly count: number;
  /**
  * Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gpu_partition_size GoogleContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * The accelerator type resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type: string;
  /**
  * gpu_driver_installation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gpu_driver_installation_config GoogleContainerCluster#gpu_driver_installation_config}
  */
  readonly gpuDriverInstallationConfig?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
  /**
  * gpu_sharing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gpu_sharing_config GoogleContainerCluster#gpu_sharing_config}
  */
  readonly gpuSharingConfig?: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig;
}

export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktf.stringToTerraform(struct!.type),
    gpu_driver_installation_config: googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct!.gpuDriverInstallationConfig),
    gpu_sharing_config: googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct!.gpuSharingConfig),
  }
}


export function googleContainerClusterNodePoolNodeConfigGuestAcceleratorToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_partition_size: {
      value: cdktf.stringToHclTerraform(struct!.gpuPartitionSize),
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
    gpu_driver_installation_config: {
      value: googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct!.gpuDriverInstallationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList",
    },
    gpu_sharing_config: {
      value: googleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct!.gpuSharingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._gpuDriverInstallationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverInstallationConfig = this._gpuDriverInstallationConfig?.internalValue;
    }
    if (this._gpuSharingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingConfig = this._gpuSharingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._gpuPartitionSize = undefined;
      this._type = undefined;
      this._gpuDriverInstallationConfig.internalValue = undefined;
      this._gpuSharingConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._type = value.type;
      this._gpuDriverInstallationConfig.internalValue = value.gpuDriverInstallationConfig;
      this._gpuSharingConfig.internalValue = value.gpuSharingConfig;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // gpu_partition_size - computed: false, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
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

  // gpu_driver_installation_config - computed: false, optional: true, required: false
  private _gpuDriverInstallationConfig = new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(this, "gpu_driver_installation_config");
  public get gpuDriverInstallationConfig() {
    return this._gpuDriverInstallationConfig;
  }
  public putGpuDriverInstallationConfig(value: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig) {
    this._gpuDriverInstallationConfig.internalValue = value;
  }
  public resetGpuDriverInstallationConfig() {
    this._gpuDriverInstallationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverInstallationConfigInput() {
    return this._gpuDriverInstallationConfig.internalValue;
  }

  // gpu_sharing_config - computed: false, optional: true, required: false
  private _gpuSharingConfig = new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(this, "gpu_sharing_config");
  public get gpuSharingConfig() {
    return this._gpuSharingConfig;
  }
  public putGpuSharingConfig(value: GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig) {
    this._gpuSharingConfig.internalValue = value;
  }
  public resetGpuSharingConfig() {
    this._gpuSharingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingConfigInput() {
    return this._gpuSharingConfig.internalValue;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigGvnicToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGvnicOutputReference | GoogleContainerClusterNodePoolNodeConfigGvnic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolNodeConfigGvnicToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigGvnicOutputReference | GoogleContainerClusterNodePoolNodeConfigGvnic): any {
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

export class GoogleContainerClusterNodePoolNodeConfigGvnicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigGvnic | undefined) {
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
export interface GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategy {
  /**
  * The window of time that opportunistic maintenance can run. Example: A setting of 14 days implies that opportunistic maintenance can only be ran in the 2 weeks leading up to the scheduled maintenance date. Setting 28 days allows opportunistic maintenance to run at any time in the scheduled maintenance window (all PERIODIC maintenance is set 28 days in advance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#maintenance_availability_window GoogleContainerCluster#maintenance_availability_window}
  */
  readonly maintenanceAvailabilityWindow: string;
  /**
  * The minimum nodes required to be available in a pool. Blocks maintenance if it would cause the number of running nodes to dip below this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#min_nodes_per_pool GoogleContainerCluster#min_nodes_per_pool}
  */
  readonly minNodesPerPool: number;
  /**
  * The amount of time that a node can remain idle (no customer owned workloads running), before triggering maintenance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_idle_time_window GoogleContainerCluster#node_idle_time_window}
  */
  readonly nodeIdleTimeWindow: string;
}

export function googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategyToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategyOutputReference | GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_availability_window: cdktf.stringToTerraform(struct!.maintenanceAvailabilityWindow),
    min_nodes_per_pool: cdktf.numberToTerraform(struct!.minNodesPerPool),
    node_idle_time_window: cdktf.stringToTerraform(struct!.nodeIdleTimeWindow),
  }
}


export function googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategyToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategyOutputReference | GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_availability_window: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceAvailabilityWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_nodes_per_pool: {
      value: cdktf.numberToHclTerraform(struct!.minNodesPerPool),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_idle_time_window: {
      value: cdktf.stringToHclTerraform(struct!.nodeIdleTimeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceAvailabilityWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceAvailabilityWindow = this._maintenanceAvailabilityWindow;
    }
    if (this._minNodesPerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodesPerPool = this._minNodesPerPool;
    }
    if (this._nodeIdleTimeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeIdleTimeWindow = this._nodeIdleTimeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceAvailabilityWindow = undefined;
      this._minNodesPerPool = undefined;
      this._nodeIdleTimeWindow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceAvailabilityWindow = value.maintenanceAvailabilityWindow;
      this._minNodesPerPool = value.minNodesPerPool;
      this._nodeIdleTimeWindow = value.nodeIdleTimeWindow;
    }
  }

  // maintenance_availability_window - computed: false, optional: false, required: true
  private _maintenanceAvailabilityWindow?: string; 
  public get maintenanceAvailabilityWindow() {
    return this.getStringAttribute('maintenance_availability_window');
  }
  public set maintenanceAvailabilityWindow(value: string) {
    this._maintenanceAvailabilityWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceAvailabilityWindowInput() {
    return this._maintenanceAvailabilityWindow;
  }

  // min_nodes_per_pool - computed: false, optional: false, required: true
  private _minNodesPerPool?: number; 
  public get minNodesPerPool() {
    return this.getNumberAttribute('min_nodes_per_pool');
  }
  public set minNodesPerPool(value: number) {
    this._minNodesPerPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodesPerPoolInput() {
    return this._minNodesPerPool;
  }

  // node_idle_time_window - computed: false, optional: false, required: true
  private _nodeIdleTimeWindow?: string; 
  public get nodeIdleTimeWindow() {
    return this.getStringAttribute('node_idle_time_window');
  }
  public set nodeIdleTimeWindow(value: string) {
    this._nodeIdleTimeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdleTimeWindowInput() {
    return this._nodeIdleTimeWindow;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#maintenance_interval GoogleContainerCluster#maintenance_interval}
  */
  readonly maintenanceInterval: string;
  /**
  * opportunistic_maintenance_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#opportunistic_maintenance_strategy GoogleContainerCluster#opportunistic_maintenance_strategy}
  */
  readonly opportunisticMaintenanceStrategy?: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategy;
}

export function googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference | GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_interval: cdktf.stringToTerraform(struct!.maintenanceInterval),
    opportunistic_maintenance_strategy: googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategyToTerraform(struct!.opportunisticMaintenanceStrategy),
  }
}


export function googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference | GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_interval: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opportunistic_maintenance_strategy: {
      value: googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategyToHclTerraform(struct!.opportunisticMaintenanceStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceInterval = this._maintenanceInterval;
    }
    if (this._opportunisticMaintenanceStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opportunisticMaintenanceStrategy = this._opportunisticMaintenanceStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceInterval = undefined;
      this._opportunisticMaintenanceStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceInterval = value.maintenanceInterval;
      this._opportunisticMaintenanceStrategy.internalValue = value.opportunisticMaintenanceStrategy;
    }
  }

  // maintenance_interval - computed: false, optional: false, required: true
  private _maintenanceInterval?: string; 
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }
  public set maintenanceInterval(value: string) {
    this._maintenanceInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceIntervalInput() {
    return this._maintenanceInterval;
  }

  // opportunistic_maintenance_strategy - computed: false, optional: true, required: false
  private _opportunisticMaintenanceStrategy = new GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategyOutputReference(this, "opportunistic_maintenance_strategy");
  public get opportunisticMaintenanceStrategy() {
    return this._opportunisticMaintenanceStrategy;
  }
  public putOpportunisticMaintenanceStrategy(value: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOpportunisticMaintenanceStrategy) {
    this._opportunisticMaintenanceStrategy.internalValue = value;
  }
  public resetOpportunisticMaintenanceStrategy() {
    this._opportunisticMaintenanceStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opportunisticMaintenanceStrategyInput() {
    return this._opportunisticMaintenanceStrategy.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff {
  /**
  * The maximum duration the backoff delay can accrue to for container restarts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#max_container_restart_period GoogleContainerCluster#max_container_restart_period}
  */
  readonly maxContainerRestartPeriod?: string;
}

export function googleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_container_restart_period: cdktf.stringToTerraform(struct!.maxContainerRestartPeriod),
  }
}


export function googleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_container_restart_period: {
      value: cdktf.stringToHclTerraform(struct!.maxContainerRestartPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxContainerRestartPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxContainerRestartPeriod = this._maxContainerRestartPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxContainerRestartPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxContainerRestartPeriod = value.maxContainerRestartPeriod;
    }
  }

  // max_container_restart_period - computed: false, optional: true, required: false
  private _maxContainerRestartPeriod?: string; 
  public get maxContainerRestartPeriod() {
    return this.getStringAttribute('max_container_restart_period');
  }
  public set maxContainerRestartPeriod(value: string) {
    this._maxContainerRestartPeriod = value;
  }
  public resetMaxContainerRestartPeriod() {
    this._maxContainerRestartPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContainerRestartPeriodInput() {
    return this._maxContainerRestartPeriod;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim {
  /**
  * Defines percentage of minimum reclaim for imagefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#imagefs_available GoogleContainerCluster#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for imagefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#imagefs_inodes_free GoogleContainerCluster#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines percentage of minimum reclaim for memory.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#memory_available GoogleContainerCluster#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for nodefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#nodefs_available GoogleContainerCluster#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for nodefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#nodefs_inodes_free GoogleContainerCluster#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines percentage of minimum reclaim for pid.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#pid_available GoogleContainerCluster#pid_available}
  */
  readonly pidAvailable?: string;
}

export function googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagefs_available: cdktf.stringToTerraform(struct!.imagefsAvailable),
    imagefs_inodes_free: cdktf.stringToTerraform(struct!.imagefsInodesFree),
    memory_available: cdktf.stringToTerraform(struct!.memoryAvailable),
    nodefs_available: cdktf.stringToTerraform(struct!.nodefsAvailable),
    nodefs_inodes_free: cdktf.stringToTerraform(struct!.nodefsInodesFree),
    pid_available: cdktf.stringToTerraform(struct!.pidAvailable),
  }
}


export function googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagefs_available: {
      value: cdktf.stringToHclTerraform(struct!.imagefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagefs_inodes_free: {
      value: cdktf.stringToHclTerraform(struct!.imagefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_available: {
      value: cdktf.stringToHclTerraform(struct!.memoryAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_available: {
      value: cdktf.stringToHclTerraform(struct!.nodefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_inodes_free: {
      value: cdktf.stringToHclTerraform(struct!.nodefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid_available: {
      value: cdktf.stringToHclTerraform(struct!.pidAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsAvailable = this._imagefsAvailable;
    }
    if (this._imagefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsInodesFree = this._imagefsInodesFree;
    }
    if (this._memoryAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAvailable = this._memoryAvailable;
    }
    if (this._nodefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsAvailable = this._nodefsAvailable;
    }
    if (this._nodefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsInodesFree = this._nodefsInodesFree;
    }
    if (this._pidAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidAvailable = this._pidAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imagefsAvailable = undefined;
      this._imagefsInodesFree = undefined;
      this._memoryAvailable = undefined;
      this._nodefsAvailable = undefined;
      this._nodefsInodesFree = undefined;
      this._pidAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imagefsAvailable = value.imagefsAvailable;
      this._imagefsInodesFree = value.imagefsInodesFree;
      this._memoryAvailable = value.memoryAvailable;
      this._nodefsAvailable = value.nodefsAvailable;
      this._nodefsInodesFree = value.nodefsInodesFree;
      this._pidAvailable = value.pidAvailable;
    }
  }

  // imagefs_available - computed: false, optional: true, required: false
  private _imagefsAvailable?: string; 
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }
  public set imagefsAvailable(value: string) {
    this._imagefsAvailable = value;
  }
  public resetImagefsAvailable() {
    this._imagefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsAvailableInput() {
    return this._imagefsAvailable;
  }

  // imagefs_inodes_free - computed: false, optional: true, required: false
  private _imagefsInodesFree?: string; 
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }
  public set imagefsInodesFree(value: string) {
    this._imagefsInodesFree = value;
  }
  public resetImagefsInodesFree() {
    this._imagefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsInodesFreeInput() {
    return this._imagefsInodesFree;
  }

  // memory_available - computed: false, optional: true, required: false
  private _memoryAvailable?: string; 
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }
  public set memoryAvailable(value: string) {
    this._memoryAvailable = value;
  }
  public resetMemoryAvailable() {
    this._memoryAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAvailableInput() {
    return this._memoryAvailable;
  }

  // nodefs_available - computed: false, optional: true, required: false
  private _nodefsAvailable?: string; 
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }
  public set nodefsAvailable(value: string) {
    this._nodefsAvailable = value;
  }
  public resetNodefsAvailable() {
    this._nodefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsAvailableInput() {
    return this._nodefsAvailable;
  }

  // nodefs_inodes_free - computed: false, optional: true, required: false
  private _nodefsInodesFree?: string; 
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }
  public set nodefsInodesFree(value: string) {
    this._nodefsInodesFree = value;
  }
  public resetNodefsInodesFree() {
    this._nodefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsInodesFreeInput() {
    return this._nodefsInodesFree;
  }

  // pid_available - computed: false, optional: true, required: false
  private _pidAvailable?: string; 
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
  public set pidAvailable(value: string) {
    this._pidAvailable = value;
  }
  public resetPidAvailable() {
    this._pidAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidAvailableInput() {
    return this._pidAvailable;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft {
  /**
  * Defines percentage of soft eviction threshold for imagefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#imagefs_available GoogleContainerCluster#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for imagefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#imagefs_inodes_free GoogleContainerCluster#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines quantity of soft eviction threshold for memory.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#memory_available GoogleContainerCluster#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for nodefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#nodefs_available GoogleContainerCluster#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for nodefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#nodefs_inodes_free GoogleContainerCluster#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines percentage of soft eviction threshold for pid.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#pid_available GoogleContainerCluster#pid_available}
  */
  readonly pidAvailable?: string;
}

export function googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagefs_available: cdktf.stringToTerraform(struct!.imagefsAvailable),
    imagefs_inodes_free: cdktf.stringToTerraform(struct!.imagefsInodesFree),
    memory_available: cdktf.stringToTerraform(struct!.memoryAvailable),
    nodefs_available: cdktf.stringToTerraform(struct!.nodefsAvailable),
    nodefs_inodes_free: cdktf.stringToTerraform(struct!.nodefsInodesFree),
    pid_available: cdktf.stringToTerraform(struct!.pidAvailable),
  }
}


export function googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagefs_available: {
      value: cdktf.stringToHclTerraform(struct!.imagefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagefs_inodes_free: {
      value: cdktf.stringToHclTerraform(struct!.imagefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_available: {
      value: cdktf.stringToHclTerraform(struct!.memoryAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_available: {
      value: cdktf.stringToHclTerraform(struct!.nodefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_inodes_free: {
      value: cdktf.stringToHclTerraform(struct!.nodefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid_available: {
      value: cdktf.stringToHclTerraform(struct!.pidAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsAvailable = this._imagefsAvailable;
    }
    if (this._imagefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsInodesFree = this._imagefsInodesFree;
    }
    if (this._memoryAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAvailable = this._memoryAvailable;
    }
    if (this._nodefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsAvailable = this._nodefsAvailable;
    }
    if (this._nodefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsInodesFree = this._nodefsInodesFree;
    }
    if (this._pidAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidAvailable = this._pidAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imagefsAvailable = undefined;
      this._imagefsInodesFree = undefined;
      this._memoryAvailable = undefined;
      this._nodefsAvailable = undefined;
      this._nodefsInodesFree = undefined;
      this._pidAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imagefsAvailable = value.imagefsAvailable;
      this._imagefsInodesFree = value.imagefsInodesFree;
      this._memoryAvailable = value.memoryAvailable;
      this._nodefsAvailable = value.nodefsAvailable;
      this._nodefsInodesFree = value.nodefsInodesFree;
      this._pidAvailable = value.pidAvailable;
    }
  }

  // imagefs_available - computed: false, optional: true, required: false
  private _imagefsAvailable?: string; 
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }
  public set imagefsAvailable(value: string) {
    this._imagefsAvailable = value;
  }
  public resetImagefsAvailable() {
    this._imagefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsAvailableInput() {
    return this._imagefsAvailable;
  }

  // imagefs_inodes_free - computed: false, optional: true, required: false
  private _imagefsInodesFree?: string; 
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }
  public set imagefsInodesFree(value: string) {
    this._imagefsInodesFree = value;
  }
  public resetImagefsInodesFree() {
    this._imagefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsInodesFreeInput() {
    return this._imagefsInodesFree;
  }

  // memory_available - computed: false, optional: true, required: false
  private _memoryAvailable?: string; 
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }
  public set memoryAvailable(value: string) {
    this._memoryAvailable = value;
  }
  public resetMemoryAvailable() {
    this._memoryAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAvailableInput() {
    return this._memoryAvailable;
  }

  // nodefs_available - computed: false, optional: true, required: false
  private _nodefsAvailable?: string; 
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }
  public set nodefsAvailable(value: string) {
    this._nodefsAvailable = value;
  }
  public resetNodefsAvailable() {
    this._nodefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsAvailableInput() {
    return this._nodefsAvailable;
  }

  // nodefs_inodes_free - computed: false, optional: true, required: false
  private _nodefsInodesFree?: string; 
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }
  public set nodefsInodesFree(value: string) {
    this._nodefsInodesFree = value;
  }
  public resetNodefsInodesFree() {
    this._nodefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsInodesFreeInput() {
    return this._nodefsInodesFree;
  }

  // pid_available - computed: false, optional: true, required: false
  private _pidAvailable?: string; 
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
  public set pidAvailable(value: string) {
    this._pidAvailable = value;
  }
  public resetPidAvailable() {
    this._pidAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidAvailableInput() {
    return this._pidAvailable;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod {
  /**
  * Defines grace period for the imagefs.available soft eviction threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#imagefs_available GoogleContainerCluster#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines grace period for the imagefs.inodesFree soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#imagefs_inodes_free GoogleContainerCluster#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines grace period for the memory.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#memory_available GoogleContainerCluster#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines grace period for the nodefs.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#nodefs_available GoogleContainerCluster#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines grace period for the nodefs.inodesFree soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#nodefs_inodes_free GoogleContainerCluster#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines grace period for the pid.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#pid_available GoogleContainerCluster#pid_available}
  */
  readonly pidAvailable?: string;
}

export function googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagefs_available: cdktf.stringToTerraform(struct!.imagefsAvailable),
    imagefs_inodes_free: cdktf.stringToTerraform(struct!.imagefsInodesFree),
    memory_available: cdktf.stringToTerraform(struct!.memoryAvailable),
    nodefs_available: cdktf.stringToTerraform(struct!.nodefsAvailable),
    nodefs_inodes_free: cdktf.stringToTerraform(struct!.nodefsInodesFree),
    pid_available: cdktf.stringToTerraform(struct!.pidAvailable),
  }
}


export function googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagefs_available: {
      value: cdktf.stringToHclTerraform(struct!.imagefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagefs_inodes_free: {
      value: cdktf.stringToHclTerraform(struct!.imagefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_available: {
      value: cdktf.stringToHclTerraform(struct!.memoryAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_available: {
      value: cdktf.stringToHclTerraform(struct!.nodefsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodefs_inodes_free: {
      value: cdktf.stringToHclTerraform(struct!.nodefsInodesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid_available: {
      value: cdktf.stringToHclTerraform(struct!.pidAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsAvailable = this._imagefsAvailable;
    }
    if (this._imagefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefsInodesFree = this._imagefsInodesFree;
    }
    if (this._memoryAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAvailable = this._memoryAvailable;
    }
    if (this._nodefsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsAvailable = this._nodefsAvailable;
    }
    if (this._nodefsInodesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodefsInodesFree = this._nodefsInodesFree;
    }
    if (this._pidAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidAvailable = this._pidAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imagefsAvailable = undefined;
      this._imagefsInodesFree = undefined;
      this._memoryAvailable = undefined;
      this._nodefsAvailable = undefined;
      this._nodefsInodesFree = undefined;
      this._pidAvailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imagefsAvailable = value.imagefsAvailable;
      this._imagefsInodesFree = value.imagefsInodesFree;
      this._memoryAvailable = value.memoryAvailable;
      this._nodefsAvailable = value.nodefsAvailable;
      this._nodefsInodesFree = value.nodefsInodesFree;
      this._pidAvailable = value.pidAvailable;
    }
  }

  // imagefs_available - computed: false, optional: true, required: false
  private _imagefsAvailable?: string; 
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }
  public set imagefsAvailable(value: string) {
    this._imagefsAvailable = value;
  }
  public resetImagefsAvailable() {
    this._imagefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsAvailableInput() {
    return this._imagefsAvailable;
  }

  // imagefs_inodes_free - computed: false, optional: true, required: false
  private _imagefsInodesFree?: string; 
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }
  public set imagefsInodesFree(value: string) {
    this._imagefsInodesFree = value;
  }
  public resetImagefsInodesFree() {
    this._imagefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefsInodesFreeInput() {
    return this._imagefsInodesFree;
  }

  // memory_available - computed: false, optional: true, required: false
  private _memoryAvailable?: string; 
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }
  public set memoryAvailable(value: string) {
    this._memoryAvailable = value;
  }
  public resetMemoryAvailable() {
    this._memoryAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAvailableInput() {
    return this._memoryAvailable;
  }

  // nodefs_available - computed: false, optional: true, required: false
  private _nodefsAvailable?: string; 
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }
  public set nodefsAvailable(value: string) {
    this._nodefsAvailable = value;
  }
  public resetNodefsAvailable() {
    this._nodefsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsAvailableInput() {
    return this._nodefsAvailable;
  }

  // nodefs_inodes_free - computed: false, optional: true, required: false
  private _nodefsInodesFree?: string; 
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }
  public set nodefsInodesFree(value: string) {
    this._nodefsInodesFree = value;
  }
  public resetNodefsInodesFree() {
    this._nodefsInodesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodefsInodesFreeInput() {
    return this._nodefsInodesFree;
  }

  // pid_available - computed: false, optional: true, required: false
  private _pidAvailable?: string; 
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
  public set pidAvailable(value: string) {
    this._pidAvailable = value;
  }
  public resetPidAvailable() {
    this._pidAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidAvailableInput() {
    return this._pidAvailable;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager {
  /**
  * The Memory Manager policy to use. This policy guides how memory and hugepages are allocated and managed for pods on the node, influencing NUMA affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#policy GoogleContainerCluster#policy}
  */
  readonly policy?: string;
}

export function googleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function googleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager {
  /**
  * The Topology Manager policy to use. This policy dictates how resource alignment is handled on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#policy GoogleContainerCluster#policy}
  */
  readonly policy?: string;
  /**
  * The Topology Manager scope, defining the granularity at which policy decisions are applied. Valid values are "container" (resources are aligned per container within a pod) or "pod" (resources are aligned for the entire pod).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#scope GoogleContainerCluster#scope}
  */
  readonly scope?: string;
}

export function googleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function googleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
      this._scope = value.scope;
    }
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigKubeletConfig {
  /**
  * Defines a comma-separated allowlist of unsafe sysctls or sysctl patterns which can be set on the Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#allowed_unsafe_sysctls GoogleContainerCluster#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Defines the maximum number of container log files that can be present for a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#container_log_max_files GoogleContainerCluster#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * Defines the maximum size of the container log file before it is rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#container_log_max_size GoogleContainerCluster#container_log_max_size}
  */
  readonly containerLogMaxSize?: string;
  /**
  * Enable CPU CFS quota enforcement for containers that specify CPU limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#cpu_cfs_quota GoogleContainerCluster#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#cpu_cfs_quota_period GoogleContainerCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Control the CPU management policy on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#cpu_manager_policy GoogleContainerCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Defines the maximum allowed grace period (in seconds) to use when terminating pods in response to a soft eviction threshold being met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#eviction_max_pod_grace_period_seconds GoogleContainerCluster#eviction_max_pod_grace_period_seconds}
  */
  readonly evictionMaxPodGracePeriodSeconds?: number;
  /**
  * Defines the percent of disk usage after which image garbage collection is always run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#image_gc_high_threshold_percent GoogleContainerCluster#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: number;
  /**
  * Defines the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#image_gc_low_threshold_percent GoogleContainerCluster#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: number;
  /**
  * Defines the maximum age an image can be unused before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#image_maximum_gc_age GoogleContainerCluster#image_maximum_gc_age}
  */
  readonly imageMaximumGcAge?: string;
  /**
  * Defines the minimum age for an unused image before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#image_minimum_gc_age GoogleContainerCluster#image_minimum_gc_age}
  */
  readonly imageMinimumGcAge?: string;
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#insecure_kubelet_readonly_port_enabled GoogleContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
  /**
  * Set the maximum number of image pulls in parallel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#max_parallel_image_pulls GoogleContainerCluster#max_parallel_image_pulls}
  */
  readonly maxParallelImagePulls?: number;
  /**
  * Controls the maximum number of processes allowed to run in a pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#pod_pids_limit GoogleContainerCluster#pod_pids_limit}
  */
  readonly podPidsLimit?: number;
  /**
  * Controls the portion of total grace period (in seconds) that is specifically reserved for terminating critical pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#shutdown_grace_period_critical_pods_seconds GoogleContainerCluster#shutdown_grace_period_critical_pods_seconds}
  */
  readonly shutdownGracePeriodCriticalPodsSeconds?: number;
  /**
  * Controls the total duration of time (in seconds) the node delays shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#shutdown_grace_period_seconds GoogleContainerCluster#shutdown_grace_period_seconds}
  */
  readonly shutdownGracePeriodSeconds?: number;
  /**
  * Defines whether to enable single process OOM killer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#single_process_oom_kill GoogleContainerCluster#single_process_oom_kill}
  */
  readonly singleProcessOomKill?: boolean | cdktf.IResolvable;
  /**
  * crash_loop_back_off block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#crash_loop_back_off GoogleContainerCluster#crash_loop_back_off}
  */
  readonly crashLoopBackOff?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff;
  /**
  * eviction_minimum_reclaim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#eviction_minimum_reclaim GoogleContainerCluster#eviction_minimum_reclaim}
  */
  readonly evictionMinimumReclaim?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim;
  /**
  * eviction_soft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#eviction_soft GoogleContainerCluster#eviction_soft}
  */
  readonly evictionSoft?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft;
  /**
  * eviction_soft_grace_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#eviction_soft_grace_period GoogleContainerCluster#eviction_soft_grace_period}
  */
  readonly evictionSoftGracePeriod?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod;
  /**
  * memory_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#memory_manager GoogleContainerCluster#memory_manager}
  */
  readonly memoryManager?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager;
  /**
  * topology_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#topology_manager GoogleContainerCluster#topology_manager}
  */
  readonly topologyManager?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager;
}

export function googleContainerClusterNodePoolNodeConfigKubeletConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    container_log_max_files: cdktf.numberToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size: cdktf.stringToTerraform(struct!.containerLogMaxSize),
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    eviction_max_pod_grace_period_seconds: cdktf.numberToTerraform(struct!.evictionMaxPodGracePeriodSeconds),
    image_gc_high_threshold_percent: cdktf.numberToTerraform(struct!.imageGcHighThresholdPercent),
    image_gc_low_threshold_percent: cdktf.numberToTerraform(struct!.imageGcLowThresholdPercent),
    image_maximum_gc_age: cdktf.stringToTerraform(struct!.imageMaximumGcAge),
    image_minimum_gc_age: cdktf.stringToTerraform(struct!.imageMinimumGcAge),
    insecure_kubelet_readonly_port_enabled: cdktf.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
    max_parallel_image_pulls: cdktf.numberToTerraform(struct!.maxParallelImagePulls),
    pod_pids_limit: cdktf.numberToTerraform(struct!.podPidsLimit),
    shutdown_grace_period_critical_pods_seconds: cdktf.numberToTerraform(struct!.shutdownGracePeriodCriticalPodsSeconds),
    shutdown_grace_period_seconds: cdktf.numberToTerraform(struct!.shutdownGracePeriodSeconds),
    single_process_oom_kill: cdktf.booleanToTerraform(struct!.singleProcessOomKill),
    crash_loop_back_off: googleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffToTerraform(struct!.crashLoopBackOff),
    eviction_minimum_reclaim: googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToTerraform(struct!.evictionMinimumReclaim),
    eviction_soft: googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftToTerraform(struct!.evictionSoft),
    eviction_soft_grace_period: googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToTerraform(struct!.evictionSoftGracePeriod),
    memory_manager: googleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerToTerraform(struct!.memoryManager),
    topology_manager: googleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerToTerraform(struct!.topologyManager),
  }
}


export function googleContainerClusterNodePoolNodeConfigKubeletConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigKubeletConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_log_max_files: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size: {
      value: cdktf.stringToHclTerraform(struct!.containerLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cfs_quota: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_max_pod_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.evictionMaxPodGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_high_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_maximum_gc_age: {
      value: cdktf.stringToHclTerraform(struct!.imageMaximumGcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_minimum_gc_age: {
      value: cdktf.stringToHclTerraform(struct!.imageMinimumGcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_kubelet_readonly_port_enabled: {
      value: cdktf.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_parallel_image_pulls: {
      value: cdktf.numberToHclTerraform(struct!.maxParallelImagePulls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_pids_limit: {
      value: cdktf.numberToHclTerraform(struct!.podPidsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shutdown_grace_period_critical_pods_seconds: {
      value: cdktf.numberToHclTerraform(struct!.shutdownGracePeriodCriticalPodsSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shutdown_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.shutdownGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_process_oom_kill: {
      value: cdktf.booleanToHclTerraform(struct!.singleProcessOomKill),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crash_loop_back_off: {
      value: googleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffToHclTerraform(struct!.crashLoopBackOff),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffList",
    },
    eviction_minimum_reclaim: {
      value: googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToHclTerraform(struct!.evictionMinimumReclaim),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimList",
    },
    eviction_soft: {
      value: googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftToHclTerraform(struct!.evictionSoft),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftList",
    },
    eviction_soft_grace_period: {
      value: googleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToHclTerraform(struct!.evictionSoftGracePeriod),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodList",
    },
    memory_manager: {
      value: googleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerToHclTerraform(struct!.memoryManager),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerList",
    },
    topology_manager: {
      value: googleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerToHclTerraform(struct!.topologyManager),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSize = this._containerLogMaxSize;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._evictionMaxPodGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMaxPodGracePeriodSeconds = this._evictionMaxPodGracePeriodSeconds;
    }
    if (this._imageGcHighThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThresholdPercent = this._imageGcHighThresholdPercent;
    }
    if (this._imageGcLowThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThresholdPercent = this._imageGcLowThresholdPercent;
    }
    if (this._imageMaximumGcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageMaximumGcAge = this._imageMaximumGcAge;
    }
    if (this._imageMinimumGcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageMinimumGcAge = this._imageMinimumGcAge;
    }
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    if (this._maxParallelImagePulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelImagePulls = this._maxParallelImagePulls;
    }
    if (this._podPidsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPidsLimit = this._podPidsLimit;
    }
    if (this._shutdownGracePeriodCriticalPodsSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownGracePeriodCriticalPodsSeconds = this._shutdownGracePeriodCriticalPodsSeconds;
    }
    if (this._shutdownGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownGracePeriodSeconds = this._shutdownGracePeriodSeconds;
    }
    if (this._singleProcessOomKill !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleProcessOomKill = this._singleProcessOomKill;
    }
    if (this._crashLoopBackOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crashLoopBackOff = this._crashLoopBackOff?.internalValue;
    }
    if (this._evictionMinimumReclaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMinimumReclaim = this._evictionMinimumReclaim?.internalValue;
    }
    if (this._evictionSoft?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoft = this._evictionSoft?.internalValue;
    }
    if (this._evictionSoftGracePeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoftGracePeriod = this._evictionSoftGracePeriod?.internalValue;
    }
    if (this._memoryManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryManager = this._memoryManager?.internalValue;
    }
    if (this._topologyManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManager = this._topologyManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedUnsafeSysctls = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSize = undefined;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._evictionMaxPodGracePeriodSeconds = undefined;
      this._imageGcHighThresholdPercent = undefined;
      this._imageGcLowThresholdPercent = undefined;
      this._imageMaximumGcAge = undefined;
      this._imageMinimumGcAge = undefined;
      this._insecureKubeletReadonlyPortEnabled = undefined;
      this._maxParallelImagePulls = undefined;
      this._podPidsLimit = undefined;
      this._shutdownGracePeriodCriticalPodsSeconds = undefined;
      this._shutdownGracePeriodSeconds = undefined;
      this._singleProcessOomKill = undefined;
      this._crashLoopBackOff.internalValue = undefined;
      this._evictionMinimumReclaim.internalValue = undefined;
      this._evictionSoft.internalValue = undefined;
      this._evictionSoftGracePeriod.internalValue = undefined;
      this._memoryManager.internalValue = undefined;
      this._topologyManager.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSize = value.containerLogMaxSize;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._evictionMaxPodGracePeriodSeconds = value.evictionMaxPodGracePeriodSeconds;
      this._imageGcHighThresholdPercent = value.imageGcHighThresholdPercent;
      this._imageGcLowThresholdPercent = value.imageGcLowThresholdPercent;
      this._imageMaximumGcAge = value.imageMaximumGcAge;
      this._imageMinimumGcAge = value.imageMinimumGcAge;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
      this._maxParallelImagePulls = value.maxParallelImagePulls;
      this._podPidsLimit = value.podPidsLimit;
      this._shutdownGracePeriodCriticalPodsSeconds = value.shutdownGracePeriodCriticalPodsSeconds;
      this._shutdownGracePeriodSeconds = value.shutdownGracePeriodSeconds;
      this._singleProcessOomKill = value.singleProcessOomKill;
      this._crashLoopBackOff.internalValue = value.crashLoopBackOff;
      this._evictionMinimumReclaim.internalValue = value.evictionMinimumReclaim;
      this._evictionSoft.internalValue = value.evictionSoft;
      this._evictionSoftGracePeriod.internalValue = value.evictionSoftGracePeriod;
      this._memoryManager.internalValue = value.memoryManager;
      this._topologyManager.internalValue = value.topologyManager;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: number; 
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: number) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size - computed: false, optional: true, required: false
  private _containerLogMaxSize?: string; 
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }
  public set containerLogMaxSize(value: string) {
    this._containerLogMaxSize = value;
  }
  public resetContainerLogMaxSize() {
    this._containerLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeInput() {
    return this._containerLogMaxSize;
  }

  // cpu_cfs_quota - computed: true, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // eviction_max_pod_grace_period_seconds - computed: false, optional: true, required: false
  private _evictionMaxPodGracePeriodSeconds?: number; 
  public get evictionMaxPodGracePeriodSeconds() {
    return this.getNumberAttribute('eviction_max_pod_grace_period_seconds');
  }
  public set evictionMaxPodGracePeriodSeconds(value: number) {
    this._evictionMaxPodGracePeriodSeconds = value;
  }
  public resetEvictionMaxPodGracePeriodSeconds() {
    this._evictionMaxPodGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMaxPodGracePeriodSecondsInput() {
    return this._evictionMaxPodGracePeriodSeconds;
  }

  // image_gc_high_threshold_percent - computed: false, optional: true, required: false
  private _imageGcHighThresholdPercent?: number; 
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }
  public set imageGcHighThresholdPercent(value: number) {
    this._imageGcHighThresholdPercent = value;
  }
  public resetImageGcHighThresholdPercent() {
    this._imageGcHighThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdPercentInput() {
    return this._imageGcHighThresholdPercent;
  }

  // image_gc_low_threshold_percent - computed: false, optional: true, required: false
  private _imageGcLowThresholdPercent?: number; 
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }
  public set imageGcLowThresholdPercent(value: number) {
    this._imageGcLowThresholdPercent = value;
  }
  public resetImageGcLowThresholdPercent() {
    this._imageGcLowThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdPercentInput() {
    return this._imageGcLowThresholdPercent;
  }

  // image_maximum_gc_age - computed: false, optional: true, required: false
  private _imageMaximumGcAge?: string; 
  public get imageMaximumGcAge() {
    return this.getStringAttribute('image_maximum_gc_age');
  }
  public set imageMaximumGcAge(value: string) {
    this._imageMaximumGcAge = value;
  }
  public resetImageMaximumGcAge() {
    this._imageMaximumGcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMaximumGcAgeInput() {
    return this._imageMaximumGcAge;
  }

  // image_minimum_gc_age - computed: false, optional: true, required: false
  private _imageMinimumGcAge?: string; 
  public get imageMinimumGcAge() {
    return this.getStringAttribute('image_minimum_gc_age');
  }
  public set imageMinimumGcAge(value: string) {
    this._imageMinimumGcAge = value;
  }
  public resetImageMinimumGcAge() {
    this._imageMinimumGcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMinimumGcAgeInput() {
    return this._imageMinimumGcAge;
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: true, required: false
  private _insecureKubeletReadonlyPortEnabled?: string; 
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }
  public set insecureKubeletReadonlyPortEnabled(value: string) {
    this._insecureKubeletReadonlyPortEnabled = value;
  }
  public resetInsecureKubeletReadonlyPortEnabled() {
    this._insecureKubeletReadonlyPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureKubeletReadonlyPortEnabledInput() {
    return this._insecureKubeletReadonlyPortEnabled;
  }

  // max_parallel_image_pulls - computed: true, optional: true, required: false
  private _maxParallelImagePulls?: number; 
  public get maxParallelImagePulls() {
    return this.getNumberAttribute('max_parallel_image_pulls');
  }
  public set maxParallelImagePulls(value: number) {
    this._maxParallelImagePulls = value;
  }
  public resetMaxParallelImagePulls() {
    this._maxParallelImagePulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelImagePullsInput() {
    return this._maxParallelImagePulls;
  }

  // pod_pids_limit - computed: false, optional: true, required: false
  private _podPidsLimit?: number; 
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }
  public set podPidsLimit(value: number) {
    this._podPidsLimit = value;
  }
  public resetPodPidsLimit() {
    this._podPidsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPidsLimitInput() {
    return this._podPidsLimit;
  }

  // shutdown_grace_period_critical_pods_seconds - computed: true, optional: true, required: false
  private _shutdownGracePeriodCriticalPodsSeconds?: number; 
  public get shutdownGracePeriodCriticalPodsSeconds() {
    return this.getNumberAttribute('shutdown_grace_period_critical_pods_seconds');
  }
  public set shutdownGracePeriodCriticalPodsSeconds(value: number) {
    this._shutdownGracePeriodCriticalPodsSeconds = value;
  }
  public resetShutdownGracePeriodCriticalPodsSeconds() {
    this._shutdownGracePeriodCriticalPodsSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownGracePeriodCriticalPodsSecondsInput() {
    return this._shutdownGracePeriodCriticalPodsSeconds;
  }

  // shutdown_grace_period_seconds - computed: true, optional: true, required: false
  private _shutdownGracePeriodSeconds?: number; 
  public get shutdownGracePeriodSeconds() {
    return this.getNumberAttribute('shutdown_grace_period_seconds');
  }
  public set shutdownGracePeriodSeconds(value: number) {
    this._shutdownGracePeriodSeconds = value;
  }
  public resetShutdownGracePeriodSeconds() {
    this._shutdownGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownGracePeriodSecondsInput() {
    return this._shutdownGracePeriodSeconds;
  }

  // single_process_oom_kill - computed: false, optional: true, required: false
  private _singleProcessOomKill?: boolean | cdktf.IResolvable; 
  public get singleProcessOomKill() {
    return this.getBooleanAttribute('single_process_oom_kill');
  }
  public set singleProcessOomKill(value: boolean | cdktf.IResolvable) {
    this._singleProcessOomKill = value;
  }
  public resetSingleProcessOomKill() {
    this._singleProcessOomKill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleProcessOomKillInput() {
    return this._singleProcessOomKill;
  }

  // crash_loop_back_off - computed: false, optional: true, required: false
  private _crashLoopBackOff = new GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffOutputReference(this, "crash_loop_back_off");
  public get crashLoopBackOff() {
    return this._crashLoopBackOff;
  }
  public putCrashLoopBackOff(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff) {
    this._crashLoopBackOff.internalValue = value;
  }
  public resetCrashLoopBackOff() {
    this._crashLoopBackOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashLoopBackOffInput() {
    return this._crashLoopBackOff.internalValue;
  }

  // eviction_minimum_reclaim - computed: false, optional: true, required: false
  private _evictionMinimumReclaim = new GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference(this, "eviction_minimum_reclaim");
  public get evictionMinimumReclaim() {
    return this._evictionMinimumReclaim;
  }
  public putEvictionMinimumReclaim(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim) {
    this._evictionMinimumReclaim.internalValue = value;
  }
  public resetEvictionMinimumReclaim() {
    this._evictionMinimumReclaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMinimumReclaimInput() {
    return this._evictionMinimumReclaim.internalValue;
  }

  // eviction_soft - computed: false, optional: true, required: false
  private _evictionSoft = new GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference(this, "eviction_soft");
  public get evictionSoft() {
    return this._evictionSoft;
  }
  public putEvictionSoft(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft) {
    this._evictionSoft.internalValue = value;
  }
  public resetEvictionSoft() {
    this._evictionSoft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftInput() {
    return this._evictionSoft.internalValue;
  }

  // eviction_soft_grace_period - computed: false, optional: true, required: false
  private _evictionSoftGracePeriod = new GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference(this, "eviction_soft_grace_period");
  public get evictionSoftGracePeriod() {
    return this._evictionSoftGracePeriod;
  }
  public putEvictionSoftGracePeriod(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod) {
    this._evictionSoftGracePeriod.internalValue = value;
  }
  public resetEvictionSoftGracePeriod() {
    this._evictionSoftGracePeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftGracePeriodInput() {
    return this._evictionSoftGracePeriod.internalValue;
  }

  // memory_manager - computed: false, optional: true, required: false
  private _memoryManager = new GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference(this, "memory_manager");
  public get memoryManager() {
    return this._memoryManager;
  }
  public putMemoryManager(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager) {
    this._memoryManager.internalValue = value;
  }
  public resetMemoryManager() {
    this._memoryManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryManagerInput() {
    return this._memoryManager.internalValue;
  }

  // topology_manager - computed: false, optional: true, required: false
  private _topologyManager = new GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference(this, "topology_manager");
  public get topologyManager() {
    return this._topologyManager;
  }
  public putTopologyManager(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager) {
    this._topologyManager.internalValue = value;
  }
  public resetTopologyManager() {
    this._topologyManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerInput() {
    return this._topologyManager.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig {
  /**
  * Whether to enable accurate time synchronization with PTP-KVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_ptp_kvm_time_sync GoogleContainerCluster#enable_ptp_kvm_time_sync}
  */
  readonly enablePtpKvmTimeSync?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_ptp_kvm_time_sync: cdktf.booleanToTerraform(struct!.enablePtpKvmTimeSync),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_ptp_kvm_time_sync: {
      value: cdktf.booleanToHclTerraform(struct!.enablePtpKvmTimeSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePtpKvmTimeSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePtpKvmTimeSync = this._enablePtpKvmTimeSync;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePtpKvmTimeSync = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePtpKvmTimeSync = value.enablePtpKvmTimeSync;
    }
  }

  // enable_ptp_kvm_time_sync - computed: false, optional: true, required: false
  private _enablePtpKvmTimeSync?: boolean | cdktf.IResolvable; 
  public get enablePtpKvmTimeSync() {
    return this.getBooleanAttribute('enable_ptp_kvm_time_sync');
  }
  public set enablePtpKvmTimeSync(value: boolean | cdktf.IResolvable) {
    this._enablePtpKvmTimeSync = value;
  }
  public resetEnablePtpKvmTimeSync() {
    this._enablePtpKvmTimeSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePtpKvmTimeSyncInput() {
    return this._enablePtpKvmTimeSync;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript {
  /**
  * The Secret Manager secret URI of the init script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcp_secret_manager_secret_uri GoogleContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
  /**
  * The GCS generation of the init script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcs_generation GoogleContainerCluster#gcs_generation}
  */
  readonly gcsGeneration?: number;
  /**
  * The GCS URI of the init script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcs_uri GoogleContainerCluster#gcs_uri}
  */
  readonly gcsUri?: string;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktf.stringToTerraform(struct!.gcpSecretManagerSecretUri),
    gcs_generation: cdktf.numberToTerraform(struct!.gcsGeneration),
    gcs_uri: cdktf.stringToTerraform(struct!.gcsUri),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_generation: {
      value: cdktf.numberToHclTerraform(struct!.gcsGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gcs_uri: {
      value: cdktf.stringToHclTerraform(struct!.gcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    if (this._gcsGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsGeneration = this._gcsGeneration;
    }
    if (this._gcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsUri = this._gcsUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpSecretManagerSecretUri = undefined;
      this._gcsGeneration = undefined;
      this._gcsUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
      this._gcsGeneration = value.gcsGeneration;
      this._gcsUri = value.gcsUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }

  // gcs_generation - computed: true, optional: true, required: false
  private _gcsGeneration?: number; 
  public get gcsGeneration() {
    return this.getNumberAttribute('gcs_generation');
  }
  public set gcsGeneration(value: number) {
    this._gcsGeneration = value;
  }
  public resetGcsGeneration() {
    this._gcsGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsGenerationInput() {
    return this._gcsGeneration;
  }

  // gcs_uri - computed: false, optional: true, required: false
  private _gcsUri?: string; 
  public get gcsUri() {
    return this.getStringAttribute('gcs_uri');
  }
  public set gcsUri(value: string) {
    this._gcsUri = value;
  }
  public resetGcsUri() {
    this._gcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsUriInput() {
    return this._gcsUri;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit {
  /**
  * init_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#init_script GoogleContainerCluster#init_script}
  */
  readonly initScript?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    init_script: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptToTerraform(struct!.initScript),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    init_script: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptToHclTerraform(struct!.initScript),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScript = this._initScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initScript.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initScript.internalValue = value.initScript;
    }
  }

  // init_script - computed: false, optional: true, required: false
  private _initScript = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptOutputReference(this, "init_script");
  public get initScript() {
    return this._initScript;
  }
  public putInitScript(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript) {
    this._initScript.internalValue = value;
  }
  public resetInitScript() {
    this._initScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptInput() {
    return this._initScript.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig {
  /**
  * Amount of 1G hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#hugepage_size_1g GoogleContainerCluster#hugepage_size_1g}
  */
  readonly hugepageSize1G?: number;
  /**
  * Amount of 2M hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#hugepage_size_2m GoogleContainerCluster#hugepage_size_2m}
  */
  readonly hugepageSize2M?: number;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hugepage_size_1g: cdktf.numberToTerraform(struct!.hugepageSize1G),
    hugepage_size_2m: cdktf.numberToTerraform(struct!.hugepageSize2M),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hugepage_size_1g: {
      value: cdktf.numberToHclTerraform(struct!.hugepageSize1G),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hugepage_size_2m: {
      value: cdktf.numberToHclTerraform(struct!.hugepageSize2M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hugepageSize1G !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepageSize1G = this._hugepageSize1G;
    }
    if (this._hugepageSize2M !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepageSize2M = this._hugepageSize2M;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hugepageSize1G = undefined;
      this._hugepageSize2M = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hugepageSize1G = value.hugepageSize1G;
      this._hugepageSize2M = value.hugepageSize2M;
    }
  }

  // hugepage_size_1g - computed: false, optional: true, required: false
  private _hugepageSize1G?: number; 
  public get hugepageSize1G() {
    return this.getNumberAttribute('hugepage_size_1g');
  }
  public set hugepageSize1G(value: number) {
    this._hugepageSize1G = value;
  }
  public resetHugepageSize1G() {
    this._hugepageSize1G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepageSize1GInput() {
    return this._hugepageSize1G;
  }

  // hugepage_size_2m - computed: false, optional: true, required: false
  private _hugepageSize2M?: number; 
  public get hugepageSize2M() {
    return this.getNumberAttribute('hugepage_size_2m');
  }
  public set hugepageSize2M(value: number) {
    this._hugepageSize2M = value;
  }
  public resetHugepageSize2M() {
    this._hugepageSize2M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepageSize2MInput() {
    return this._hugepageSize2M;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading {
  /**
  * The policy for kernel module loading.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#policy GoogleContainerCluster#policy}
  */
  readonly policy?: string;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile {
  /**
  * Specifies the size of the swap space in gibibytes (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#swap_size_gib GoogleContainerCluster#swap_size_gib}
  */
  readonly swapSizeGib?: number;
  /**
  * Specifies the size of the swap space as a percentage of the boot disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#swap_size_percent GoogleContainerCluster#swap_size_percent}
  */
  readonly swapSizePercent?: number;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_size_gib: cdktf.numberToTerraform(struct!.swapSizeGib),
    swap_size_percent: cdktf.numberToTerraform(struct!.swapSizePercent),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swap_size_gib: {
      value: cdktf.numberToHclTerraform(struct!.swapSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swap_size_percent: {
      value: cdktf.numberToHclTerraform(struct!.swapSizePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swapSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizeGib = this._swapSizeGib;
    }
    if (this._swapSizePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizePercent = this._swapSizePercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._swapSizeGib = undefined;
      this._swapSizePercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._swapSizeGib = value.swapSizeGib;
      this._swapSizePercent = value.swapSizePercent;
    }
  }

  // swap_size_gib - computed: false, optional: true, required: false
  private _swapSizeGib?: number; 
  public get swapSizeGib() {
    return this.getNumberAttribute('swap_size_gib');
  }
  public set swapSizeGib(value: number) {
    this._swapSizeGib = value;
  }
  public resetSwapSizeGib() {
    this._swapSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizeGibInput() {
    return this._swapSizeGib;
  }

  // swap_size_percent - computed: false, optional: true, required: false
  private _swapSizePercent?: number; 
  public get swapSizePercent() {
    return this.getNumberAttribute('swap_size_percent');
  }
  public set swapSizePercent(value: number) {
    this._swapSizePercent = value;
  }
  public resetSwapSizePercent() {
    this._swapSizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizePercentInput() {
    return this._swapSizePercent;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile {
  /**
  * The number of physical local NVMe SSD disks to attach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#disk_count GoogleContainerCluster#disk_count}
  */
  readonly diskCount?: number;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_count: cdktf.numberToTerraform(struct!.diskCount),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_count: {
      value: cdktf.numberToHclTerraform(struct!.diskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskCount = value.diskCount;
    }
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig {
  /**
  * If true, swap space will not be encrypted. Defaults to false (encrypted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#disabled GoogleContainerCluster#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile {
  /**
  * Specifies the size of the swap space in gibibytes (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#swap_size_gib GoogleContainerCluster#swap_size_gib}
  */
  readonly swapSizeGib?: number;
  /**
  * Specifies the size of the swap space as a percentage of the ephemeral local SSD capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#swap_size_percent GoogleContainerCluster#swap_size_percent}
  */
  readonly swapSizePercent?: number;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    swap_size_gib: cdktf.numberToTerraform(struct!.swapSizeGib),
    swap_size_percent: cdktf.numberToTerraform(struct!.swapSizePercent),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    swap_size_gib: {
      value: cdktf.numberToHclTerraform(struct!.swapSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swap_size_percent: {
      value: cdktf.numberToHclTerraform(struct!.swapSizePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._swapSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizeGib = this._swapSizeGib;
    }
    if (this._swapSizePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSizePercent = this._swapSizePercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._swapSizeGib = undefined;
      this._swapSizePercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._swapSizeGib = value.swapSizeGib;
      this._swapSizePercent = value.swapSizePercent;
    }
  }

  // swap_size_gib - computed: false, optional: true, required: false
  private _swapSizeGib?: number; 
  public get swapSizeGib() {
    return this.getNumberAttribute('swap_size_gib');
  }
  public set swapSizeGib(value: number) {
    this._swapSizeGib = value;
  }
  public resetSwapSizeGib() {
    this._swapSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizeGibInput() {
    return this._swapSizeGib;
  }

  // swap_size_percent - computed: false, optional: true, required: false
  private _swapSizePercent?: number; 
  public get swapSizePercent() {
    return this.getNumberAttribute('swap_size_percent');
  }
  public set swapSizePercent(value: number) {
    this._swapSizePercent = value;
  }
  public resetSwapSizePercent() {
    this._swapSizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizePercentInput() {
    return this._swapSizePercent;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig {
  /**
  * Enables or disables swap for the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * boot_disk_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#boot_disk_profile GoogleContainerCluster#boot_disk_profile}
  */
  readonly bootDiskProfile?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile;
  /**
  * dedicated_local_ssd_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#dedicated_local_ssd_profile GoogleContainerCluster#dedicated_local_ssd_profile}
  */
  readonly dedicatedLocalSsdProfile?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#encryption_config GoogleContainerCluster#encryption_config}
  */
  readonly encryptionConfig?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig;
  /**
  * ephemeral_local_ssd_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#ephemeral_local_ssd_profile GoogleContainerCluster#ephemeral_local_ssd_profile}
  */
  readonly ephemeralLocalSsdProfile?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    boot_disk_profile: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToTerraform(struct!.bootDiskProfile),
    dedicated_local_ssd_profile: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToTerraform(struct!.dedicatedLocalSsdProfile),
    encryption_config: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    ephemeral_local_ssd_profile: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToTerraform(struct!.ephemeralLocalSsdProfile),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig): any {
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
    boot_disk_profile: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToHclTerraform(struct!.bootDiskProfile),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileList",
    },
    dedicated_local_ssd_profile: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToHclTerraform(struct!.dedicatedLocalSsdProfile),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileList",
    },
    encryption_config: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigList",
    },
    ephemeral_local_ssd_profile: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToHclTerraform(struct!.ephemeralLocalSsdProfile),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._bootDiskProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskProfile = this._bootDiskProfile?.internalValue;
    }
    if (this._dedicatedLocalSsdProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedLocalSsdProfile = this._dedicatedLocalSsdProfile?.internalValue;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._ephemeralLocalSsdProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralLocalSsdProfile = this._ephemeralLocalSsdProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._bootDiskProfile.internalValue = undefined;
      this._dedicatedLocalSsdProfile.internalValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._ephemeralLocalSsdProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._bootDiskProfile.internalValue = value.bootDiskProfile;
      this._dedicatedLocalSsdProfile.internalValue = value.dedicatedLocalSsdProfile;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._ephemeralLocalSsdProfile.internalValue = value.ephemeralLocalSsdProfile;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // boot_disk_profile - computed: false, optional: true, required: false
  private _bootDiskProfile = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference(this, "boot_disk_profile");
  public get bootDiskProfile() {
    return this._bootDiskProfile;
  }
  public putBootDiskProfile(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile) {
    this._bootDiskProfile.internalValue = value;
  }
  public resetBootDiskProfile() {
    this._bootDiskProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskProfileInput() {
    return this._bootDiskProfile.internalValue;
  }

  // dedicated_local_ssd_profile - computed: false, optional: true, required: false
  private _dedicatedLocalSsdProfile = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference(this, "dedicated_local_ssd_profile");
  public get dedicatedLocalSsdProfile() {
    return this._dedicatedLocalSsdProfile;
  }
  public putDedicatedLocalSsdProfile(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile) {
    this._dedicatedLocalSsdProfile.internalValue = value;
  }
  public resetDedicatedLocalSsdProfile() {
    this._dedicatedLocalSsdProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedLocalSsdProfileInput() {
    return this._dedicatedLocalSsdProfile.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // ephemeral_local_ssd_profile - computed: false, optional: true, required: false
  private _ephemeralLocalSsdProfile = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference(this, "ephemeral_local_ssd_profile");
  public get ephemeralLocalSsdProfile() {
    return this._ephemeralLocalSsdProfile;
  }
  public putEphemeralLocalSsdProfile(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile) {
    this._ephemeralLocalSsdProfile.internalValue = value;
  }
  public resetEphemeralLocalSsdProfile() {
    this._ephemeralLocalSsdProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralLocalSsdProfileInput() {
    return this._ephemeralLocalSsdProfile.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#cgroup_mode GoogleContainerCluster#cgroup_mode}
  */
  readonly cgroupMode?: string;
  /**
  * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#sysctls GoogleContainerCluster#sysctls}
  */
  readonly sysctls?: { [key: string]: string };
  /**
  * The Linux kernel transparent hugepage defrag setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#transparent_hugepage_defrag GoogleContainerCluster#transparent_hugepage_defrag}
  */
  readonly transparentHugepageDefrag?: string;
  /**
  * The Linux kernel transparent hugepage setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#transparent_hugepage_enabled GoogleContainerCluster#transparent_hugepage_enabled}
  */
  readonly transparentHugepageEnabled?: string;
  /**
  * accurate_time_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#accurate_time_config GoogleContainerCluster#accurate_time_config}
  */
  readonly accurateTimeConfig?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig;
  /**
  * custom_node_init block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#custom_node_init GoogleContainerCluster#custom_node_init}
  */
  readonly customNodeInit?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit;
  /**
  * hugepages_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#hugepages_config GoogleContainerCluster#hugepages_config}
  */
  readonly hugepagesConfig?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig;
  /**
  * node_kernel_module_loading block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_kernel_module_loading GoogleContainerCluster#node_kernel_module_loading}
  */
  readonly nodeKernelModuleLoading?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading;
  /**
  * swap_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#swap_config GoogleContainerCluster#swap_config}
  */
  readonly swapConfig?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig;
}

export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_mode: cdktf.stringToTerraform(struct!.cgroupMode),
    sysctls: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sysctls),
    transparent_hugepage_defrag: cdktf.stringToTerraform(struct!.transparentHugepageDefrag),
    transparent_hugepage_enabled: cdktf.stringToTerraform(struct!.transparentHugepageEnabled),
    accurate_time_config: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToTerraform(struct!.accurateTimeConfig),
    custom_node_init: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitToTerraform(struct!.customNodeInit),
    hugepages_config: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct!.hugepagesConfig),
    node_kernel_module_loading: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct!.nodeKernelModuleLoading),
    swap_config: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigToTerraform(struct!.swapConfig),
  }
}


export function googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_mode: {
      value: cdktf.stringToHclTerraform(struct!.cgroupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctls: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sysctls),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transparent_hugepage_defrag: {
      value: cdktf.stringToHclTerraform(struct!.transparentHugepageDefrag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparent_hugepage_enabled: {
      value: cdktf.stringToHclTerraform(struct!.transparentHugepageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accurate_time_config: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToHclTerraform(struct!.accurateTimeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigList",
    },
    custom_node_init: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitToHclTerraform(struct!.customNodeInit),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitList",
    },
    hugepages_config: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct!.hugepagesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigList",
    },
    node_kernel_module_loading: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct!.nodeKernelModuleLoading),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingList",
    },
    swap_config: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigToHclTerraform(struct!.swapConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupMode = this._cgroupMode;
    }
    if (this._sysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls;
    }
    if (this._transparentHugepageDefrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugepageDefrag = this._transparentHugepageDefrag;
    }
    if (this._transparentHugepageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentHugepageEnabled = this._transparentHugepageEnabled;
    }
    if (this._accurateTimeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accurateTimeConfig = this._accurateTimeConfig?.internalValue;
    }
    if (this._customNodeInit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNodeInit = this._customNodeInit?.internalValue;
    }
    if (this._hugepagesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepagesConfig = this._hugepagesConfig?.internalValue;
    }
    if (this._nodeKernelModuleLoading?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeKernelModuleLoading = this._nodeKernelModuleLoading?.internalValue;
    }
    if (this._swapConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapConfig = this._swapConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
      this._sysctls = undefined;
      this._transparentHugepageDefrag = undefined;
      this._transparentHugepageEnabled = undefined;
      this._accurateTimeConfig.internalValue = undefined;
      this._customNodeInit.internalValue = undefined;
      this._hugepagesConfig.internalValue = undefined;
      this._nodeKernelModuleLoading.internalValue = undefined;
      this._swapConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupMode = value.cgroupMode;
      this._sysctls = value.sysctls;
      this._transparentHugepageDefrag = value.transparentHugepageDefrag;
      this._transparentHugepageEnabled = value.transparentHugepageEnabled;
      this._accurateTimeConfig.internalValue = value.accurateTimeConfig;
      this._customNodeInit.internalValue = value.customNodeInit;
      this._hugepagesConfig.internalValue = value.hugepagesConfig;
      this._nodeKernelModuleLoading.internalValue = value.nodeKernelModuleLoading;
      this._swapConfig.internalValue = value.swapConfig;
    }
  }

  // cgroup_mode - computed: true, optional: true, required: false
  private _cgroupMode?: string; 
  public get cgroupMode() {
    return this.getStringAttribute('cgroup_mode');
  }
  public set cgroupMode(value: string) {
    this._cgroupMode = value;
  }
  public resetCgroupMode() {
    this._cgroupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupModeInput() {
    return this._cgroupMode;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string }; 
  public get sysctls() {
    return this.getStringMapAttribute('sysctls');
  }
  public set sysctls(value: { [key: string]: string }) {
    this._sysctls = value;
  }
  public resetSysctls() {
    this._sysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls;
  }

  // transparent_hugepage_defrag - computed: false, optional: true, required: false
  private _transparentHugepageDefrag?: string; 
  public get transparentHugepageDefrag() {
    return this.getStringAttribute('transparent_hugepage_defrag');
  }
  public set transparentHugepageDefrag(value: string) {
    this._transparentHugepageDefrag = value;
  }
  public resetTransparentHugepageDefrag() {
    this._transparentHugepageDefrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugepageDefragInput() {
    return this._transparentHugepageDefrag;
  }

  // transparent_hugepage_enabled - computed: true, optional: true, required: false
  private _transparentHugepageEnabled?: string; 
  public get transparentHugepageEnabled() {
    return this.getStringAttribute('transparent_hugepage_enabled');
  }
  public set transparentHugepageEnabled(value: string) {
    this._transparentHugepageEnabled = value;
  }
  public resetTransparentHugepageEnabled() {
    this._transparentHugepageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentHugepageEnabledInput() {
    return this._transparentHugepageEnabled;
  }

  // accurate_time_config - computed: false, optional: true, required: false
  private _accurateTimeConfig = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference(this, "accurate_time_config");
  public get accurateTimeConfig() {
    return this._accurateTimeConfig;
  }
  public putAccurateTimeConfig(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig) {
    this._accurateTimeConfig.internalValue = value;
  }
  public resetAccurateTimeConfig() {
    this._accurateTimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accurateTimeConfigInput() {
    return this._accurateTimeConfig.internalValue;
  }

  // custom_node_init - computed: false, optional: true, required: false
  private _customNodeInit = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitOutputReference(this, "custom_node_init");
  public get customNodeInit() {
    return this._customNodeInit;
  }
  public putCustomNodeInit(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit) {
    this._customNodeInit.internalValue = value;
  }
  public resetCustomNodeInit() {
    this._customNodeInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNodeInitInput() {
    return this._customNodeInit.internalValue;
  }

  // hugepages_config - computed: false, optional: true, required: false
  private _hugepagesConfig = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference(this, "hugepages_config");
  public get hugepagesConfig() {
    return this._hugepagesConfig;
  }
  public putHugepagesConfig(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig) {
    this._hugepagesConfig.internalValue = value;
  }
  public resetHugepagesConfig() {
    this._hugepagesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepagesConfigInput() {
    return this._hugepagesConfig.internalValue;
  }

  // node_kernel_module_loading - computed: false, optional: true, required: false
  private _nodeKernelModuleLoading = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference(this, "node_kernel_module_loading");
  public get nodeKernelModuleLoading() {
    return this._nodeKernelModuleLoading;
  }
  public putNodeKernelModuleLoading(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading) {
    this._nodeKernelModuleLoading.internalValue = value;
  }
  public resetNodeKernelModuleLoading() {
    this._nodeKernelModuleLoading.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKernelModuleLoadingInput() {
    return this._nodeKernelModuleLoading.internalValue;
  }

  // swap_config - computed: false, optional: true, required: false
  private _swapConfig = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference(this, "swap_config");
  public get swapConfig() {
    return this._swapConfig;
  }
  public putSwapConfig(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig) {
    this._swapConfig.internalValue = value;
  }
  public resetSwapConfig() {
    this._swapConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapConfigInput() {
    return this._swapConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig {
  /**
  * Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigNodeImageConfig {
  /**
  * The Operating System image for the node pool. This is a private feature, please contact your Google account team for allowlisting this feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#image GoogleContainerCluster#image}
  */
  readonly image?: string;
  /**
  * The GCP project storing the Operating System image for the node pool. This is a private feature, please contact your Google account team for allowlisting this feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#image_project GoogleContainerCluster#image_project}
  */
  readonly imageProject?: string;
}

export function googleContainerClusterNodePoolNodeConfigNodeImageConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigNodeImageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    image_project: cdktf.stringToTerraform(struct!.imageProject),
  }
}


export function googleContainerClusterNodePoolNodeConfigNodeImageConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigNodeImageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_project: {
      value: cdktf.stringToHclTerraform(struct!.imageProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigNodeImageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigNodeImageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageProject = this._imageProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigNodeImageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._imageProject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._imageProject = value.imageProject;
    }
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_project - computed: true, optional: true, required: false
  private _imageProject?: string; 
  public get imageProject() {
    return this.getStringAttribute('image_project');
  }
  public set imageProject(value: string) {
    this._imageProject = value;
  }
  public resetImageProject() {
    this._imageProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageProjectInput() {
    return this._imageProject;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigNodeImageConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigNodeImageConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigNodeImageConfigOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigNodeImageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#consume_reservation_type GoogleContainerCluster#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#values GoogleContainerCluster#values}
  */
  readonly values?: string[];
}

export function googleContainerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigReservationAffinityOutputReference | GoogleContainerClusterNodePoolNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleContainerClusterNodePoolNodeConfigReservationAffinityToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigReservationAffinityOutputReference | GoogleContainerClusterNodePoolNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consume_reservation_type: {
      value: cdktf.stringToHclTerraform(struct!.consumeReservationType),
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
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

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
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
    return cdktf.Fn.tolist(this.getListAttribute('values'));
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
export interface GoogleContainerClusterNodePoolNodeConfigSandboxConfig {
  /**
  * Type of the sandbox to use for the node (e.g. 'gvisor'). Deprecated in favor of type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#sandbox_type GoogleContainerCluster#sandbox_type}
  */
  readonly sandboxType?: string;
  /**
  * Type of the sandbox to use for the node (e.g. 'GVISOR').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type?: string;
}

export function googleContainerClusterNodePoolNodeConfigSandboxConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSandboxConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigSandboxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sandbox_type: cdktf.stringToTerraform(struct!.sandboxType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleContainerClusterNodePoolNodeConfigSandboxConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSandboxConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigSandboxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sandbox_type: {
      value: cdktf.stringToHclTerraform(struct!.sandboxType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigSandboxConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigSandboxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sandboxType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxType = this._sandboxType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigSandboxConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sandboxType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sandboxType = value.sandboxType;
      this._type = value.type;
    }
  }

  // sandbox_type - computed: false, optional: true, required: false
  private _sandboxType?: string; 
  public get sandboxType() {
    return this.getStringAttribute('sandbox_type');
  }
  public set sandboxType(value: string) {
    this._sandboxType = value;
  }
  public resetSandboxType() {
    this._sandboxType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxTypeInput() {
    return this._sandboxType;
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
export interface GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks {
  /**
  * Disk image to create the secondary boot disk from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#disk_image GoogleContainerCluster#disk_image}
  */
  readonly diskImage: string;
  /**
  * Mode for how the secondary boot disk is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode?: string;
}

export function googleContainerClusterNodePoolNodeConfigSecondaryBootDisksToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_image: cdktf.stringToTerraform(struct!.diskImage),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function googleContainerClusterNodePoolNodeConfigSecondaryBootDisksToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_image: {
      value: cdktf.stringToHclTerraform(struct!.diskImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskImage = this._diskImage;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskImage = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskImage = value.diskImage;
      this._mode = value.mode;
    }
  }

  // disk_image - computed: false, optional: false, required: true
  private _diskImage?: string; 
  public get diskImage() {
    return this.getStringAttribute('disk_image');
  }
  public set diskImage(value: string) {
    this._diskImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskImageInput() {
    return this._diskImage;
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
}

export class GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_integrity_monitoring GoogleContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_secure_boot GoogleContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
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
}
export interface GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#operator GoogleContainerCluster#operator}
  */
  readonly operator: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#values GoogleContainerCluster#values}
  */
  readonly values: string[];
}

export function googleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
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


export function googleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
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

export class GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig {
  /**
  * Specifies the minimum number of vCPUs that each sole tenant node must have to use CPU overcommit. If not specified, the CPU overcommit feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#min_node_cpus GoogleContainerCluster#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_affinity GoogleContainerCluster#node_affinity}
  */
  readonly nodeAffinity: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeConfigSoleTenantConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_node_cpus: cdktf.numberToTerraform(struct!.minNodeCpus),
    node_affinity: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToTerraform, true)(struct!.nodeAffinity),
  }
}


export function googleContainerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_node_cpus: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToHclTerraform, true)(struct!.nodeAffinity),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minNodeCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCpus = this._minNodeCpus;
    }
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minNodeCpus = undefined;
      this._nodeAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minNodeCpus = value.minNodeCpus;
      this._nodeAffinity.internalValue = value.nodeAffinity;
    }
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

  // node_affinity - computed: false, optional: false, required: true
  private _nodeAffinity = new GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList(this, "node_affinity", true);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable) {
    this._nodeAffinity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigTaint {
  /**
  * Effect for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#effect GoogleContainerCluster#effect}
  */
  readonly effect: string;
  /**
  * Key for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * Value for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#value GoogleContainerCluster#value}
  */
  readonly value: string;
}

export function googleContainerClusterNodePoolNodeConfigTaintToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleContainerClusterNodePoolNodeConfigTaintToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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

export class GoogleContainerClusterNodePoolNodeConfigTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
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

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
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
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleContainerClusterNodePoolNodeConfigTaintList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeConfigTaintOutputReference {
    return new GoogleContainerClusterNodePoolNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigTaintConfig {
  /**
  * Architecture taint behavior. Controls, how we apply taints based on the node architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#architecture_taint_behavior GoogleContainerCluster#architecture_taint_behavior}
  */
  readonly architectureTaintBehavior: string;
}

export function googleContainerClusterNodePoolNodeConfigTaintConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigTaintConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigTaintConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture_taint_behavior: cdktf.stringToTerraform(struct!.architectureTaintBehavior),
  }
}


export function googleContainerClusterNodePoolNodeConfigTaintConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigTaintConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigTaintConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architecture_taint_behavior: {
      value: cdktf.stringToHclTerraform(struct!.architectureTaintBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigTaintConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigTaintConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architectureTaintBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectureTaintBehavior = this._architectureTaintBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigTaintConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._architectureTaintBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._architectureTaintBehavior = value.architectureTaintBehavior;
    }
  }

  // architecture_taint_behavior - computed: false, optional: false, required: true
  private _architectureTaintBehavior?: string; 
  public get architectureTaintBehavior() {
    return this.getStringAttribute('architecture_taint_behavior');
  }
  public set architectureTaintBehavior(value: string) {
    this._architectureTaintBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureTaintBehaviorInput() {
    return this._architectureTaintBehavior;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig {
  /**
  * The OS Version of the windows nodepool.Values are OS_VERSION_UNSPECIFIED,OS_VERSION_LTSC2019 and OS_VERSION_LTSC2022
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#osversion GoogleContainerCluster#osversion}
  */
  readonly osversion?: string;
}

export function googleContainerClusterNodePoolNodeConfigWindowsNodeConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    osversion: cdktf.stringToTerraform(struct!.osversion),
  }
}


export function googleContainerClusterNodePoolNodeConfigWindowsNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    osversion: {
      value: cdktf.stringToHclTerraform(struct!.osversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osversion = this._osversion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._osversion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._osversion = value.osversion;
    }
  }

  // osversion - computed: false, optional: true, required: false
  private _osversion?: string; 
  public get osversion() {
    return this.getStringAttribute('osversion');
  }
  public set osversion(value: string) {
    this._osversion = value;
  }
  public resetOsversion() {
    this._osversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osversionInput() {
    return this._osversion;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode: string;
}

export function googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface GoogleContainerClusterNodePoolNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#boot_disk_kms_key GoogleContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#disk_size_gb GoogleContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#disk_type GoogleContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_confidential_storage GoogleContainerCluster#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktf.IResolvable;
  /**
  * Enables Flex Start provisioning model for the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#flex_start GoogleContainerCluster#flex_start}
  */
  readonly flexStart?: boolean | cdktf.IResolvable;
  /**
  * The type of GPUDirect strategy to enable on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gpudirect_strategy GoogleContainerCluster#gpudirect_strategy}
  */
  readonly gpudirectStrategy?: string;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#image_type GoogleContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#labels GoogleContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * LocalSsdEncryptionMode specified the method used for encrypting the local SSDs attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#local_ssd_encryption_mode GoogleContainerCluster#local_ssd_encryption_mode}
  */
  readonly localSsdEncryptionMode?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#logging_variant GoogleContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#machine_type GoogleContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The runtime of each node in the node pool in seconds, terminated by 's'. Example: "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#max_run_duration GoogleContainerCluster#max_run_duration}
  */
  readonly maxRunDuration?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#metadata GoogleContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#min_cpu_platform GoogleContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_group GoogleContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#oauth_scopes GoogleContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#preemptible GoogleContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#resource_labels GoogleContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#resource_manager_tags GoogleContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#service_account GoogleContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#spot GoogleContainerCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * The list of Storage Pools where boot disks are provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#storage_pools GoogleContainerCluster#storage_pools}
  */
  readonly storagePools?: string[];
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#tags GoogleContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#advanced_machine_features GoogleContainerCluster#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#boot_disk GoogleContainerCluster#boot_disk}
  */
  readonly bootDisk?: GoogleContainerClusterNodePoolNodeConfigBootDisk;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#confidential_nodes GoogleContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: GoogleContainerClusterNodePoolNodeConfigConfidentialNodes;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#containerd_config GoogleContainerCluster#containerd_config}
  */
  readonly containerdConfig?: GoogleContainerClusterNodePoolNodeConfigContainerdConfig;
  /**
  * ephemeral_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#ephemeral_storage_config GoogleContainerCluster#ephemeral_storage_config}
  */
  readonly ephemeralStorageConfig?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#ephemeral_storage_local_ssd_config GoogleContainerCluster#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#fast_socket GoogleContainerCluster#fast_socket}
  */
  readonly fastSocket?: GoogleContainerClusterNodePoolNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcfs_config GoogleContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: GoogleContainerClusterNodePoolNodeConfigGcfsConfig;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#guest_accelerator GoogleContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gvnic GoogleContainerCluster#gvnic}
  */
  readonly gvnic?: GoogleContainerClusterNodePoolNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#host_maintenance_policy GoogleContainerCluster#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#kubelet_config GoogleContainerCluster#kubelet_config}
  */
  readonly kubeletConfig?: GoogleContainerClusterNodePoolNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#linux_node_config GoogleContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#local_nvme_ssd_block_config GoogleContainerCluster#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * node_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_image_config GoogleContainerCluster#node_image_config}
  */
  readonly nodeImageConfig?: GoogleContainerClusterNodePoolNodeConfigNodeImageConfig[] | cdktf.IResolvable;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#reservation_affinity GoogleContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleContainerClusterNodePoolNodeConfigReservationAffinity;
  /**
  * sandbox_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#sandbox_config GoogleContainerCluster#sandbox_config}
  */
  readonly sandboxConfig?: GoogleContainerClusterNodePoolNodeConfigSandboxConfig;
  /**
  * secondary_boot_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#secondary_boot_disks GoogleContainerCluster#secondary_boot_disks}
  */
  readonly secondaryBootDisks?: GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktf.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#shielded_instance_config GoogleContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#sole_tenant_config GoogleContainerCluster#sole_tenant_config}
  */
  readonly soleTenantConfig?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#taint GoogleContainerCluster#taint}
  */
  readonly taint?: GoogleContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable;
  /**
  * taint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#taint_config GoogleContainerCluster#taint_config}
  */
  readonly taintConfig?: GoogleContainerClusterNodePoolNodeConfigTaintConfig;
  /**
  * windows_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#windows_node_config GoogleContainerCluster#windows_node_config}
  */
  readonly windowsNodeConfig?: GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#workload_metadata_config GoogleContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig;
}

export function googleContainerClusterNodePoolNodeConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktf.booleanToTerraform(struct!.enableConfidentialStorage),
    flex_start: cdktf.booleanToTerraform(struct!.flexStart),
    gpudirect_strategy: cdktf.stringToTerraform(struct!.gpudirectStrategy),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    local_ssd_encryption_mode: cdktf.stringToTerraform(struct!.localSsdEncryptionMode),
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_run_duration: cdktf.stringToTerraform(struct!.maxRunDuration),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    storage_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storagePools),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    advanced_machine_features: googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    boot_disk: googleContainerClusterNodePoolNodeConfigBootDiskToTerraform(struct!.bootDisk),
    confidential_nodes: googleContainerClusterNodePoolNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    containerd_config: googleContainerClusterNodePoolNodeConfigContainerdConfigToTerraform(struct!.containerdConfig),
    ephemeral_storage_config: googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToTerraform(struct!.ephemeralStorageConfig),
    ephemeral_storage_local_ssd_config: googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: googleContainerClusterNodePoolNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: googleContainerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    guest_accelerator: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigGuestAcceleratorToTerraform, true)(struct!.guestAccelerator),
    gvnic: googleContainerClusterNodePoolNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: googleContainerClusterNodePoolNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    node_image_config: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigNodeImageConfigToTerraform, true)(struct!.nodeImageConfig),
    reservation_affinity: googleContainerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    sandbox_config: googleContainerClusterNodePoolNodeConfigSandboxConfigToTerraform(struct!.sandboxConfig),
    secondary_boot_disks: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigSecondaryBootDisksToTerraform, true)(struct!.secondaryBootDisks),
    shielded_instance_config: googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: googleContainerClusterNodePoolNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigTaintToTerraform, true)(struct!.taint),
    taint_config: googleContainerClusterNodePoolNodeConfigTaintConfigToTerraform(struct!.taintConfig),
    windows_node_config: googleContainerClusterNodePoolNodeConfigWindowsNodeConfigToTerraform(struct!.windowsNodeConfig),
    workload_metadata_config: googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function googleContainerClusterNodePoolNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskKmsKey),
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
    enable_confidential_storage: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flex_start: {
      value: cdktf.booleanToHclTerraform(struct!.flexStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gpudirect_strategy: {
      value: cdktf.stringToHclTerraform(struct!.gpudirectStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_encryption_mode: {
      value: cdktf.stringToHclTerraform(struct!.localSsdEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_variant: {
      value: cdktf.stringToHclTerraform(struct!.loggingVariant),
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
    max_run_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxRunDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_manager_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storagePools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesList",
    },
    boot_disk: {
      value: googleContainerClusterNodePoolNodeConfigBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigBootDiskList",
    },
    confidential_nodes: {
      value: googleContainerClusterNodePoolNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigConfidentialNodesList",
    },
    containerd_config: {
      value: googleContainerClusterNodePoolNodeConfigContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigList",
    },
    ephemeral_storage_config: {
      value: googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToHclTerraform(struct!.ephemeralStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: googleContainerClusterNodePoolNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: googleContainerClusterNodePoolNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGcfsConfigList",
    },
    guest_accelerator: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigGuestAcceleratorToHclTerraform, true)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList",
    },
    gvnic: {
      value: googleContainerClusterNodePoolNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: googleContainerClusterNodePoolNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigList",
    },
    node_image_config: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigNodeImageConfigToHclTerraform, true)(struct!.nodeImageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigNodeImageConfigList",
    },
    reservation_affinity: {
      value: googleContainerClusterNodePoolNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigReservationAffinityList",
    },
    sandbox_config: {
      value: googleContainerClusterNodePoolNodeConfigSandboxConfigToHclTerraform(struct!.sandboxConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigSandboxConfigList",
    },
    secondary_boot_disks: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigSecondaryBootDisksToHclTerraform, true)(struct!.secondaryBootDisks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksList",
    },
    shielded_instance_config: {
      value: googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: googleContainerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigTaintList",
    },
    taint_config: {
      value: googleContainerClusterNodePoolNodeConfigTaintConfigToHclTerraform(struct!.taintConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigTaintConfigList",
    },
    windows_node_config: {
      value: googleContainerClusterNodePoolNodeConfigWindowsNodeConfigToHclTerraform(struct!.windowsNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigList",
    },
    workload_metadata_config: {
      value: googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._enableConfidentialStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialStorage = this._enableConfidentialStorage;
    }
    if (this._flexStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexStart = this._flexStart;
    }
    if (this._gpudirectStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpudirectStrategy = this._gpudirectStrategy;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._localSsdEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdEncryptionMode = this._localSsdEncryptionMode;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxRunDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._storagePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePools = this._storagePools;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._confidentialNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialNodes = this._confidentialNodes?.internalValue;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._ephemeralStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageConfig = this._ephemeralStorageConfig?.internalValue;
    }
    if (this._ephemeralStorageLocalSsdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLocalSsdConfig = this._ephemeralStorageLocalSsdConfig?.internalValue;
    }
    if (this._fastSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastSocket = this._fastSocket?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._hostMaintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMaintenancePolicy = this._hostMaintenancePolicy?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._localNvmeSsdBlockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNvmeSsdBlockConfig = this._localNvmeSsdBlockConfig?.internalValue;
    }
    if (this._nodeImageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeImageConfig = this._nodeImageConfig?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._sandboxConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxConfig = this._sandboxConfig?.internalValue;
    }
    if (this._secondaryBootDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBootDisks = this._secondaryBootDisks?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._soleTenantConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soleTenantConfig = this._soleTenantConfig?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._taintConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taintConfig = this._taintConfig?.internalValue;
    }
    if (this._windowsNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsNodeConfig = this._windowsNodeConfig?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._flexStart = undefined;
      this._gpudirectStrategy = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._localSsdEncryptionMode = undefined;
      this._loggingVariant = undefined;
      this._machineType = undefined;
      this._maxRunDuration = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._resourceLabels = undefined;
      this._resourceManagerTags = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._storagePools = undefined;
      this._tags = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._bootDisk.internalValue = undefined;
      this._confidentialNodes.internalValue = undefined;
      this._containerdConfig.internalValue = undefined;
      this._ephemeralStorageConfig.internalValue = undefined;
      this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
      this._fastSocket.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._hostMaintenancePolicy.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._localNvmeSsdBlockConfig.internalValue = undefined;
      this._nodeImageConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._sandboxConfig.internalValue = undefined;
      this._secondaryBootDisks.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._taintConfig.internalValue = undefined;
      this._windowsNodeConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._enableConfidentialStorage = value.enableConfidentialStorage;
      this._flexStart = value.flexStart;
      this._gpudirectStrategy = value.gpudirectStrategy;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._localSsdEncryptionMode = value.localSsdEncryptionMode;
      this._loggingVariant = value.loggingVariant;
      this._machineType = value.machineType;
      this._maxRunDuration = value.maxRunDuration;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._resourceLabels = value.resourceLabels;
      this._resourceManagerTags = value.resourceManagerTags;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._storagePools = value.storagePools;
      this._tags = value.tags;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._bootDisk.internalValue = value.bootDisk;
      this._confidentialNodes.internalValue = value.confidentialNodes;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._ephemeralStorageConfig.internalValue = value.ephemeralStorageConfig;
      this._ephemeralStorageLocalSsdConfig.internalValue = value.ephemeralStorageLocalSsdConfig;
      this._fastSocket.internalValue = value.fastSocket;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._gvnic.internalValue = value.gvnic;
      this._hostMaintenancePolicy.internalValue = value.hostMaintenancePolicy;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._localNvmeSsdBlockConfig.internalValue = value.localNvmeSsdBlockConfig;
      this._nodeImageConfig.internalValue = value.nodeImageConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._sandboxConfig.internalValue = value.sandboxConfig;
      this._secondaryBootDisks.internalValue = value.secondaryBootDisks;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._taintConfig.internalValue = value.taintConfig;
      this._windowsNodeConfig.internalValue = value.windowsNodeConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size_gb - computed: true, optional: true, required: false
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

  // disk_type - computed: true, optional: true, required: false
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

  // effective_taints - computed: true, optional: false, required: false
  private _effectiveTaints = new GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsList(this, "effective_taints", false);
  public get effectiveTaints() {
    return this._effectiveTaints;
  }

  // enable_confidential_storage - computed: false, optional: true, required: false
  private _enableConfidentialStorage?: boolean | cdktf.IResolvable; 
  public get enableConfidentialStorage() {
    return this.getBooleanAttribute('enable_confidential_storage');
  }
  public set enableConfidentialStorage(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialStorage = value;
  }
  public resetEnableConfidentialStorage() {
    this._enableConfidentialStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialStorageInput() {
    return this._enableConfidentialStorage;
  }

  // flex_start - computed: false, optional: true, required: false
  private _flexStart?: boolean | cdktf.IResolvable; 
  public get flexStart() {
    return this.getBooleanAttribute('flex_start');
  }
  public set flexStart(value: boolean | cdktf.IResolvable) {
    this._flexStart = value;
  }
  public resetFlexStart() {
    this._flexStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexStartInput() {
    return this._flexStart;
  }

  // gpudirect_strategy - computed: true, optional: true, required: false
  private _gpudirectStrategy?: string; 
  public get gpudirectStrategy() {
    return this.getStringAttribute('gpudirect_strategy');
  }
  public set gpudirectStrategy(value: string) {
    this._gpudirectStrategy = value;
  }
  public resetGpudirectStrategy() {
    this._gpudirectStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpudirectStrategyInput() {
    return this._gpudirectStrategy;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // local_ssd_count - computed: true, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // local_ssd_encryption_mode - computed: false, optional: true, required: false
  private _localSsdEncryptionMode?: string; 
  public get localSsdEncryptionMode() {
    return this.getStringAttribute('local_ssd_encryption_mode');
  }
  public set localSsdEncryptionMode(value: string) {
    this._localSsdEncryptionMode = value;
  }
  public resetLocalSsdEncryptionMode() {
    this._localSsdEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdEncryptionModeInput() {
    return this._localSsdEncryptionMode;
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
  }

  // machine_type - computed: true, optional: true, required: false
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

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration?: string; 
  public get maxRunDuration() {
    return this.getStringAttribute('max_run_duration');
  }
  public set maxRunDuration(value: string) {
    this._maxRunDuration = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
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

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
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

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }

  // service_account - computed: true, optional: true, required: false
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

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // storage_pools - computed: false, optional: true, required: false
  private _storagePools?: string[]; 
  public get storagePools() {
    return this.getListAttribute('storage_pools');
  }
  public set storagePools(value: string[]) {
    this._storagePools = value;
  }
  public resetStoragePools() {
    this._storagePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolsInput() {
    return this._storagePools;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk = new GoogleContainerClusterNodePoolNodeConfigBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: GoogleContainerClusterNodePoolNodeConfigBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new GoogleContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: GoogleContainerClusterNodePoolNodeConfigConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // ephemeral_storage_config - computed: false, optional: true, required: false
  private _ephemeralStorageConfig = new GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigOutputReference(this, "ephemeral_storage_config");
  public get ephemeralStorageConfig() {
    return this._ephemeralStorageConfig;
  }
  public putEphemeralStorageConfig(value: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig) {
    this._ephemeralStorageConfig.internalValue = value;
  }
  public resetEphemeralStorageConfig() {
    this._ephemeralStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageConfigInput() {
    return this._ephemeralStorageConfig.internalValue;
  }

  // ephemeral_storage_local_ssd_config - computed: false, optional: true, required: false
  private _ephemeralStorageLocalSsdConfig = new GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig) {
    this._ephemeralStorageLocalSsdConfig.internalValue = value;
  }
  public resetEphemeralStorageLocalSsdConfig() {
    this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLocalSsdConfigInput() {
    return this._ephemeralStorageLocalSsdConfig.internalValue;
  }

  // fast_socket - computed: false, optional: true, required: false
  private _fastSocket = new GoogleContainerClusterNodePoolNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: GoogleContainerClusterNodePoolNodeConfigFastSocket) {
    this._fastSocket.internalValue = value;
  }
  public resetFastSocket() {
    this._fastSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastSocketInput() {
    return this._fastSocket.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new GoogleContainerClusterNodePoolNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: GoogleContainerClusterNodePoolNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // guest_accelerator - computed: false, optional: true, required: false
  private _guestAccelerator = new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new GoogleContainerClusterNodePoolNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: GoogleContainerClusterNodePoolNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // host_maintenance_policy - computed: false, optional: true, required: false
  private _hostMaintenancePolicy = new GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy) {
    this._hostMaintenancePolicy.internalValue = value;
  }
  public resetHostMaintenancePolicy() {
    this._hostMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMaintenancePolicyInput() {
    return this._hostMaintenancePolicy.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new GoogleContainerClusterNodePoolNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // local_nvme_ssd_block_config - computed: false, optional: true, required: false
  private _localNvmeSsdBlockConfig = new GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // node_image_config - computed: false, optional: true, required: false
  private _nodeImageConfig = new GoogleContainerClusterNodePoolNodeConfigNodeImageConfigList(this, "node_image_config", false);
  public get nodeImageConfig() {
    return this._nodeImageConfig;
  }
  public putNodeImageConfig(value: GoogleContainerClusterNodePoolNodeConfigNodeImageConfig[] | cdktf.IResolvable) {
    this._nodeImageConfig.internalValue = value;
  }
  public resetNodeImageConfig() {
    this._nodeImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageConfigInput() {
    return this._nodeImageConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleContainerClusterNodePoolNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleContainerClusterNodePoolNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // sandbox_config - computed: false, optional: true, required: false
  private _sandboxConfig = new GoogleContainerClusterNodePoolNodeConfigSandboxConfigOutputReference(this, "sandbox_config");
  public get sandboxConfig() {
    return this._sandboxConfig;
  }
  public putSandboxConfig(value: GoogleContainerClusterNodePoolNodeConfigSandboxConfig) {
    this._sandboxConfig.internalValue = value;
  }
  public resetSandboxConfig() {
    this._sandboxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxConfigInput() {
    return this._sandboxConfig.internalValue;
  }

  // secondary_boot_disks - computed: false, optional: true, required: false
  private _secondaryBootDisks = new GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksList(this, "secondary_boot_disks", false);
  public get secondaryBootDisks() {
    return this._secondaryBootDisks;
  }
  public putSecondaryBootDisks(value: GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktf.IResolvable) {
    this._secondaryBootDisks.internalValue = value;
  }
  public resetSecondaryBootDisks() {
    this._secondaryBootDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBootDisksInput() {
    return this._secondaryBootDisks.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // sole_tenant_config - computed: false, optional: true, required: false
  private _soleTenantConfig = new GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig) {
    this._soleTenantConfig.internalValue = value;
  }
  public resetSoleTenantConfig() {
    this._soleTenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soleTenantConfigInput() {
    return this._soleTenantConfig.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new GoogleContainerClusterNodePoolNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: GoogleContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // taint_config - computed: false, optional: true, required: false
  private _taintConfig = new GoogleContainerClusterNodePoolNodeConfigTaintConfigOutputReference(this, "taint_config");
  public get taintConfig() {
    return this._taintConfig;
  }
  public putTaintConfig(value: GoogleContainerClusterNodePoolNodeConfigTaintConfig) {
    this._taintConfig.internalValue = value;
  }
  public resetTaintConfig() {
    this._taintConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintConfigInput() {
    return this._taintConfig.internalValue;
  }

  // windows_node_config - computed: false, optional: true, required: false
  private _windowsNodeConfig = new GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference(this, "windows_node_config");
  public get windowsNodeConfig() {
    return this._windowsNodeConfig;
  }
  public putWindowsNodeConfig(value: GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig) {
    this._windowsNodeConfig.internalValue = value;
  }
  public resetWindowsNodeConfig() {
    this._windowsNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsNodeConfigInput() {
    return this._windowsNodeConfig.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig) {
    this._workloadMetadataConfig.internalValue = value;
  }
  public resetWorkloadMetadataConfig() {
    this._workloadMetadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetadataConfigInput() {
    return this._workloadMetadataConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolNodeDrainConfig {
  /**
  * The duration of the grace termination period for node drain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#grace_termination_duration GoogleContainerCluster#grace_termination_duration}
  */
  readonly graceTerminationDuration?: string;
  /**
  * The duration of the PDB timeout period for node drain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#pdb_timeout_duration GoogleContainerCluster#pdb_timeout_duration}
  */
  readonly pdbTimeoutDuration?: string;
  /**
  * Whether to respect PodDisruptionBudget policy during node pool deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#respect_pdb_during_node_pool_deletion GoogleContainerCluster#respect_pdb_during_node_pool_deletion}
  */
  readonly respectPdbDuringNodePoolDeletion?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolNodeDrainConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeDrainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_termination_duration: cdktf.stringToTerraform(struct!.graceTerminationDuration),
    pdb_timeout_duration: cdktf.stringToTerraform(struct!.pdbTimeoutDuration),
    respect_pdb_during_node_pool_deletion: cdktf.booleanToTerraform(struct!.respectPdbDuringNodePoolDeletion),
  }
}


export function googleContainerClusterNodePoolNodeDrainConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeDrainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grace_termination_duration: {
      value: cdktf.stringToHclTerraform(struct!.graceTerminationDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdb_timeout_duration: {
      value: cdktf.stringToHclTerraform(struct!.pdbTimeoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    respect_pdb_during_node_pool_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.respectPdbDuringNodePoolDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeDrainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolNodeDrainConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graceTerminationDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceTerminationDuration = this._graceTerminationDuration;
    }
    if (this._pdbTimeoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbTimeoutDuration = this._pdbTimeoutDuration;
    }
    if (this._respectPdbDuringNodePoolDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectPdbDuringNodePoolDeletion = this._respectPdbDuringNodePoolDeletion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeDrainConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graceTerminationDuration = undefined;
      this._pdbTimeoutDuration = undefined;
      this._respectPdbDuringNodePoolDeletion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graceTerminationDuration = value.graceTerminationDuration;
      this._pdbTimeoutDuration = value.pdbTimeoutDuration;
      this._respectPdbDuringNodePoolDeletion = value.respectPdbDuringNodePoolDeletion;
    }
  }

  // grace_termination_duration - computed: false, optional: true, required: false
  private _graceTerminationDuration?: string; 
  public get graceTerminationDuration() {
    return this.getStringAttribute('grace_termination_duration');
  }
  public set graceTerminationDuration(value: string) {
    this._graceTerminationDuration = value;
  }
  public resetGraceTerminationDuration() {
    this._graceTerminationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceTerminationDurationInput() {
    return this._graceTerminationDuration;
  }

  // pdb_timeout_duration - computed: false, optional: true, required: false
  private _pdbTimeoutDuration?: string; 
  public get pdbTimeoutDuration() {
    return this.getStringAttribute('pdb_timeout_duration');
  }
  public set pdbTimeoutDuration(value: string) {
    this._pdbTimeoutDuration = value;
  }
  public resetPdbTimeoutDuration() {
    this._pdbTimeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbTimeoutDurationInput() {
    return this._pdbTimeoutDuration;
  }

  // respect_pdb_during_node_pool_deletion - computed: false, optional: true, required: false
  private _respectPdbDuringNodePoolDeletion?: boolean | cdktf.IResolvable; 
  public get respectPdbDuringNodePoolDeletion() {
    return this.getBooleanAttribute('respect_pdb_during_node_pool_deletion');
  }
  public set respectPdbDuringNodePoolDeletion(value: boolean | cdktf.IResolvable) {
    this._respectPdbDuringNodePoolDeletion = value;
  }
  public resetRespectPdbDuringNodePoolDeletion() {
    this._respectPdbDuringNodePoolDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectPdbDuringNodePoolDeletionInput() {
    return this._respectPdbDuringNodePoolDeletion;
  }
}

export class GoogleContainerClusterNodePoolNodeDrainConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolNodeDrainConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolNodeDrainConfigOutputReference {
    return new GoogleContainerClusterNodePoolNodeDrainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolPlacementPolicy {
  /**
  * If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#policy_name GoogleContainerCluster#policy_name}
  */
  readonly policyName?: string;
  /**
  * The TPU topology like "2x4" or "2x2x2". https://cloud.google.com/kubernetes-engine/docs/concepts/plan-tpus#topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#tpu_topology GoogleContainerCluster#tpu_topology}
  */
  readonly tpuTopology?: string;
  /**
  * Type defines the type of placement policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type: string;
}

export function googleContainerClusterNodePoolPlacementPolicyToTerraform(struct?: GoogleContainerClusterNodePoolPlacementPolicyOutputReference | GoogleContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    tpu_topology: cdktf.stringToTerraform(struct!.tpuTopology),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleContainerClusterNodePoolPlacementPolicyToHclTerraform(struct?: GoogleContainerClusterNodePoolPlacementPolicyOutputReference | GoogleContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tpu_topology: {
      value: cdktf.stringToHclTerraform(struct!.tpuTopology),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolPlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._tpuTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpuTopology = this._tpuTopology;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolPlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyName = undefined;
      this._tpuTopology = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyName = value.policyName;
      this._tpuTopology = value.tpuTopology;
      this._type = value.type;
    }
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // tpu_topology - computed: false, optional: true, required: false
  private _tpuTopology?: string; 
  public get tpuTopology() {
    return this.getStringAttribute('tpu_topology');
  }
  public set tpuTopology(value: string) {
    this._tpuTopology = value;
  }
  public resetTpuTopology() {
    this._tpuTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuTopologyInput() {
    return this._tpuTopology;
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
}
export interface GoogleContainerClusterNodePoolQueuedProvisioning {
  /**
  * Whether nodes in this node pool are obtainable solely through the ProvisioningRequest API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolQueuedProvisioningToTerraform(struct?: GoogleContainerClusterNodePoolQueuedProvisioningOutputReference | GoogleContainerClusterNodePoolQueuedProvisioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolQueuedProvisioningToHclTerraform(struct?: GoogleContainerClusterNodePoolQueuedProvisioningOutputReference | GoogleContainerClusterNodePoolQueuedProvisioning): any {
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

export class GoogleContainerClusterNodePoolQueuedProvisioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolQueuedProvisioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolQueuedProvisioning | undefined) {
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
export interface GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy {
  /**
  * Time in seconds to wait after cordoning the blue pool before draining the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#wait_for_drain_duration GoogleContainerCluster#wait_for_drain_duration}
  */
  readonly waitForDrainDuration?: string;
}

export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyToTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    wait_for_drain_duration: cdktf.stringToTerraform(struct!.waitForDrainDuration),
  }
}


export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyToHclTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    wait_for_drain_duration: {
      value: cdktf.stringToHclTerraform(struct!.waitForDrainDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._waitForDrainDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForDrainDuration = this._waitForDrainDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._waitForDrainDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._waitForDrainDuration = value.waitForDrainDuration;
    }
  }

  // wait_for_drain_duration - computed: true, optional: true, required: false
  private _waitForDrainDuration?: string; 
  public get waitForDrainDuration() {
    return this.getStringAttribute('wait_for_drain_duration');
  }
  public set waitForDrainDuration(value: string) {
    this._waitForDrainDuration = value;
  }
  public resetWaitForDrainDuration() {
    this._waitForDrainDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDrainDurationInput() {
    return this._waitForDrainDuration;
  }
}
export interface GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  /**
  * Number of blue nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#batch_node_count GoogleContainerCluster#batch_node_count}
  */
  readonly batchNodeCount?: number;
  /**
  * Percentage of the blue pool nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#batch_percentage GoogleContainerCluster#batch_percentage}
  */
  readonly batchPercentage?: number;
  /**
  * Soak time after each batch gets drained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#batch_soak_duration GoogleContainerCluster#batch_soak_duration}
  */
  readonly batchSoakDuration?: string;
}

export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_node_count: cdktf.numberToTerraform(struct!.batchNodeCount),
    batch_percentage: cdktf.numberToTerraform(struct!.batchPercentage),
    batch_soak_duration: cdktf.stringToTerraform(struct!.batchSoakDuration),
  }
}


export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_node_count: {
      value: cdktf.numberToHclTerraform(struct!.batchNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.batchSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNodeCount = this._batchNodeCount;
    }
    if (this._batchPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPercentage = this._batchPercentage;
    }
    if (this._batchSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSoakDuration = this._batchSoakDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchNodeCount = undefined;
      this._batchPercentage = undefined;
      this._batchSoakDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchNodeCount = value.batchNodeCount;
      this._batchPercentage = value.batchPercentage;
      this._batchSoakDuration = value.batchSoakDuration;
    }
  }

  // batch_node_count - computed: true, optional: true, required: false
  private _batchNodeCount?: number; 
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }
  public set batchNodeCount(value: number) {
    this._batchNodeCount = value;
  }
  public resetBatchNodeCount() {
    this._batchNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNodeCountInput() {
    return this._batchNodeCount;
  }

  // batch_percentage - computed: true, optional: true, required: false
  private _batchPercentage?: number; 
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }
  public set batchPercentage(value: number) {
    this._batchPercentage = value;
  }
  public resetBatchPercentage() {
    this._batchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPercentageInput() {
    return this._batchPercentage;
  }

  // batch_soak_duration - computed: true, optional: true, required: false
  private _batchSoakDuration?: string; 
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
  public set batchSoakDuration(value: string) {
    this._batchSoakDuration = value;
  }
  public resetBatchSoakDuration() {
    this._batchSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSoakDurationInput() {
    return this._batchSoakDuration;
  }
}
export interface GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings {
  /**
  * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_pool_soak_duration GoogleContainerCluster#node_pool_soak_duration}
  */
  readonly nodePoolSoakDuration?: string;
  /**
  * autoscaled_rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#autoscaled_rollout_policy GoogleContainerCluster#autoscaled_rollout_policy}
  */
  readonly autoscaledRolloutPolicy?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy;
  /**
  * standard_rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#standard_rollout_policy GoogleContainerCluster#standard_rollout_policy}
  */
  readonly standardRolloutPolicy?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_soak_duration: cdktf.stringToTerraform(struct!.nodePoolSoakDuration),
    autoscaled_rollout_policy: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyToTerraform(struct!.autoscaledRolloutPolicy),
    standard_rollout_policy: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct!.standardRolloutPolicy),
  }
}


export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.nodePoolSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaled_rollout_policy: {
      value: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyToHclTerraform(struct!.autoscaledRolloutPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyList",
    },
    standard_rollout_policy: {
      value: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct!.standardRolloutPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolSoakDuration = this._nodePoolSoakDuration;
    }
    if (this._autoscaledRolloutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaledRolloutPolicy = this._autoscaledRolloutPolicy?.internalValue;
    }
    if (this._standardRolloutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardRolloutPolicy = this._standardRolloutPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodePoolSoakDuration = undefined;
      this._autoscaledRolloutPolicy.internalValue = undefined;
      this._standardRolloutPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodePoolSoakDuration = value.nodePoolSoakDuration;
      this._autoscaledRolloutPolicy.internalValue = value.autoscaledRolloutPolicy;
      this._standardRolloutPolicy.internalValue = value.standardRolloutPolicy;
    }
  }

  // node_pool_soak_duration - computed: true, optional: true, required: false
  private _nodePoolSoakDuration?: string; 
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }
  public set nodePoolSoakDuration(value: string) {
    this._nodePoolSoakDuration = value;
  }
  public resetNodePoolSoakDuration() {
    this._nodePoolSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolSoakDurationInput() {
    return this._nodePoolSoakDuration;
  }

  // autoscaled_rollout_policy - computed: false, optional: true, required: false
  private _autoscaledRolloutPolicy = new GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicyOutputReference(this, "autoscaled_rollout_policy");
  public get autoscaledRolloutPolicy() {
    return this._autoscaledRolloutPolicy;
  }
  public putAutoscaledRolloutPolicy(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsAutoscaledRolloutPolicy) {
    this._autoscaledRolloutPolicy.internalValue = value;
  }
  public resetAutoscaledRolloutPolicy() {
    this._autoscaledRolloutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaledRolloutPolicyInput() {
    return this._autoscaledRolloutPolicy.internalValue;
  }

  // standard_rollout_policy - computed: false, optional: true, required: false
  private _standardRolloutPolicy = new GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this, "standard_rollout_policy");
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
  public putStandardRolloutPolicy(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy) {
    this._standardRolloutPolicy.internalValue = value;
  }
  public resetStandardRolloutPolicy() {
    this._standardRolloutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardRolloutPolicyInput() {
    return this._standardRolloutPolicy.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolUpgradeSettings {
  /**
  * The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#max_surge GoogleContainerCluster#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#max_unavailable GoogleContainerCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Update strategy for the given nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#strategy GoogleContainerCluster#strategy}
  */
  readonly strategy?: string;
  /**
  * blue_green_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#blue_green_settings GoogleContainerCluster#blue_green_settings}
  */
  readonly blueGreenSettings?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings;
}

export function googleContainerClusterNodePoolUpgradeSettingsToTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    blue_green_settings: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct!.blueGreenSettings),
  }
}


export function googleContainerClusterNodePoolUpgradeSettingsToHclTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blue_green_settings: {
      value: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct!.blueGreenSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._blueGreenSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenSettings = this._blueGreenSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._strategy = undefined;
      this._blueGreenSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._strategy = value.strategy;
      this._blueGreenSettings.internalValue = value.blueGreenSettings;
    }
  }

  // max_surge - computed: true, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: true, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // blue_green_settings - computed: false, optional: true, required: false
  private _blueGreenSettings = new GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(this, "blue_green_settings");
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }
  public putBlueGreenSettings(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings) {
    this._blueGreenSettings.internalValue = value;
  }
  public resetBlueGreenSettings() {
    this._blueGreenSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenSettingsInput() {
    return this._blueGreenSettings.internalValue;
  }
}
export interface GoogleContainerClusterNodePool {
  /**
  * When true, the provider ignores external changes (drift) to the node count by skipping GCE API queries to the Instance Group Managers. This is a performance optimization for large clusters that saves API quota. Setting this to true will result in missing managed_instance_group_urls in the state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#ignore_node_count_changes GoogleContainerCluster#ignore_node_count_changes}
  */
  readonly ignoreNodeCountChanges?: boolean | cdktf.IResolvable;
  /**
  * The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#initial_node_count GoogleContainerCluster#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#max_pods_per_node GoogleContainerCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the node pool. If left blank, Terraform will auto-generate a unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#name GoogleContainerCluster#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#name_prefix GoogleContainerCluster#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_count GoogleContainerCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_locations GoogleContainerCluster#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#version GoogleContainerCluster#version}
  */
  readonly version?: string;
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#autoscaling GoogleContainerCluster#autoscaling}
  */
  readonly autoscaling?: GoogleContainerClusterNodePoolAutoscaling;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#maintenance_policy GoogleContainerCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: GoogleContainerClusterNodePoolMaintenancePolicy[] | cdktf.IResolvable;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#management GoogleContainerCluster#management}
  */
  readonly management?: GoogleContainerClusterNodePoolManagement;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#network_config GoogleContainerCluster#network_config}
  */
  readonly networkConfig?: GoogleContainerClusterNodePoolNetworkConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_config GoogleContainerCluster#node_config}
  */
  readonly nodeConfig?: GoogleContainerClusterNodePoolNodeConfig;
  /**
  * node_drain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_drain_config GoogleContainerCluster#node_drain_config}
  */
  readonly nodeDrainConfig?: GoogleContainerClusterNodePoolNodeDrainConfig[] | cdktf.IResolvable;
  /**
  * placement_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#placement_policy GoogleContainerCluster#placement_policy}
  */
  readonly placementPolicy?: GoogleContainerClusterNodePoolPlacementPolicy;
  /**
  * queued_provisioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#queued_provisioning GoogleContainerCluster#queued_provisioning}
  */
  readonly queuedProvisioning?: GoogleContainerClusterNodePoolQueuedProvisioning;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#upgrade_settings GoogleContainerCluster#upgrade_settings}
  */
  readonly upgradeSettings?: GoogleContainerClusterNodePoolUpgradeSettings;
}

export function googleContainerClusterNodePoolToTerraform(struct?: GoogleContainerClusterNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_node_count_changes: cdktf.booleanToTerraform(struct!.ignoreNodeCountChanges),
    initial_node_count: cdktf.numberToTerraform(struct!.initialNodeCount),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    name: cdktf.stringToTerraform(struct!.name),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeLocations),
    version: cdktf.stringToTerraform(struct!.version),
    autoscaling: googleContainerClusterNodePoolAutoscalingToTerraform(struct!.autoscaling),
    maintenance_policy: cdktf.listMapper(googleContainerClusterNodePoolMaintenancePolicyToTerraform, true)(struct!.maintenancePolicy),
    management: googleContainerClusterNodePoolManagementToTerraform(struct!.management),
    network_config: googleContainerClusterNodePoolNetworkConfigToTerraform(struct!.networkConfig),
    node_config: googleContainerClusterNodePoolNodeConfigToTerraform(struct!.nodeConfig),
    node_drain_config: cdktf.listMapper(googleContainerClusterNodePoolNodeDrainConfigToTerraform, true)(struct!.nodeDrainConfig),
    placement_policy: googleContainerClusterNodePoolPlacementPolicyToTerraform(struct!.placementPolicy),
    queued_provisioning: googleContainerClusterNodePoolQueuedProvisioningToTerraform(struct!.queuedProvisioning),
    upgrade_settings: googleContainerClusterNodePoolUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function googleContainerClusterNodePoolToHclTerraform(struct?: GoogleContainerClusterNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_node_count_changes: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreNodeCountChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_node_count: {
      value: cdktf.numberToHclTerraform(struct!.initialNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
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
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling: {
      value: googleContainerClusterNodePoolAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoscalingList",
    },
    maintenance_policy: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolMaintenancePolicyToHclTerraform, true)(struct!.maintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolMaintenancePolicyList",
    },
    management: {
      value: googleContainerClusterNodePoolManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolManagementList",
    },
    network_config: {
      value: googleContainerClusterNodePoolNetworkConfigToHclTerraform(struct!.networkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigList",
    },
    node_config: {
      value: googleContainerClusterNodePoolNodeConfigToHclTerraform(struct!.nodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigList",
    },
    node_drain_config: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeDrainConfigToHclTerraform, true)(struct!.nodeDrainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeDrainConfigList",
    },
    placement_policy: {
      value: googleContainerClusterNodePoolPlacementPolicyToHclTerraform(struct!.placementPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolPlacementPolicyList",
    },
    queued_provisioning: {
      value: googleContainerClusterNodePoolQueuedProvisioningToHclTerraform(struct!.queuedProvisioning),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolQueuedProvisioningList",
    },
    upgrade_settings: {
      value: googleContainerClusterNodePoolUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreNodeCountChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNodeCountChanges = this._ignoreNodeCountChanges;
    }
    if (this._initialNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialNodeCount = this._initialNodeCount;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLocations = this._nodeLocations;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._maintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenancePolicy = this._maintenancePolicy?.internalValue;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    if (this._nodeDrainConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDrainConfig = this._nodeDrainConfig?.internalValue;
    }
    if (this._placementPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementPolicy = this._placementPolicy?.internalValue;
    }
    if (this._queuedProvisioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuedProvisioning = this._queuedProvisioning?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreNodeCountChanges = undefined;
      this._initialNodeCount = undefined;
      this._maxPodsPerNode = undefined;
      this._name = undefined;
      this._namePrefix = undefined;
      this._nodeCount = undefined;
      this._nodeLocations = undefined;
      this._version = undefined;
      this._autoscaling.internalValue = undefined;
      this._maintenancePolicy.internalValue = undefined;
      this._management.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
      this._nodeConfig.internalValue = undefined;
      this._nodeDrainConfig.internalValue = undefined;
      this._placementPolicy.internalValue = undefined;
      this._queuedProvisioning.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreNodeCountChanges = value.ignoreNodeCountChanges;
      this._initialNodeCount = value.initialNodeCount;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._name = value.name;
      this._namePrefix = value.namePrefix;
      this._nodeCount = value.nodeCount;
      this._nodeLocations = value.nodeLocations;
      this._version = value.version;
      this._autoscaling.internalValue = value.autoscaling;
      this._maintenancePolicy.internalValue = value.maintenancePolicy;
      this._management.internalValue = value.management;
      this._networkConfig.internalValue = value.networkConfig;
      this._nodeConfig.internalValue = value.nodeConfig;
      this._nodeDrainConfig.internalValue = value.nodeDrainConfig;
      this._placementPolicy.internalValue = value.placementPolicy;
      this._queuedProvisioning.internalValue = value.queuedProvisioning;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
  }

  // ignore_node_count_changes - computed: false, optional: true, required: false
  private _ignoreNodeCountChanges?: boolean | cdktf.IResolvable; 
  public get ignoreNodeCountChanges() {
    return this.getBooleanAttribute('ignore_node_count_changes');
  }
  public set ignoreNodeCountChanges(value: boolean | cdktf.IResolvable) {
    this._ignoreNodeCountChanges = value;
  }
  public resetIgnoreNodeCountChanges() {
    this._ignoreNodeCountChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNodeCountChangesInput() {
    return this._ignoreNodeCountChanges;
  }

  // initial_node_count - computed: true, optional: true, required: false
  private _initialNodeCount?: number; 
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number) {
    this._initialNodeCount = value;
  }
  public resetInitialNodeCount() {
    this._initialNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeCountInput() {
    return this._initialNodeCount;
  }

  // instance_group_urls - computed: true, optional: false, required: false
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // managed_instance_group_urls - computed: true, optional: false, required: false
  public get managedInstanceGroupUrls() {
    return this.getListAttribute('managed_instance_group_urls');
  }

  // max_pods_per_node - computed: true, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_locations - computed: true, optional: true, required: false
  private _nodeLocations?: string[]; 
  public get nodeLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('node_locations'));
  }
  public set nodeLocations(value: string[]) {
    this._nodeLocations = value;
  }
  public resetNodeLocations() {
    this._nodeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new GoogleContainerClusterNodePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: GoogleContainerClusterNodePoolAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new GoogleContainerClusterNodePoolMaintenancePolicyList(this, "maintenance_policy", false);
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: GoogleContainerClusterNodePoolMaintenancePolicy[] | cdktf.IResolvable) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new GoogleContainerClusterNodePoolManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: GoogleContainerClusterNodePoolManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new GoogleContainerClusterNodePoolNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleContainerClusterNodePoolNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new GoogleContainerClusterNodePoolNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: GoogleContainerClusterNodePoolNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // node_drain_config - computed: false, optional: true, required: false
  private _nodeDrainConfig = new GoogleContainerClusterNodePoolNodeDrainConfigList(this, "node_drain_config", false);
  public get nodeDrainConfig() {
    return this._nodeDrainConfig;
  }
  public putNodeDrainConfig(value: GoogleContainerClusterNodePoolNodeDrainConfig[] | cdktf.IResolvable) {
    this._nodeDrainConfig.internalValue = value;
  }
  public resetNodeDrainConfig() {
    this._nodeDrainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDrainConfigInput() {
    return this._nodeDrainConfig.internalValue;
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy = new GoogleContainerClusterNodePoolPlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: GoogleContainerClusterNodePoolPlacementPolicy) {
    this._placementPolicy.internalValue = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy.internalValue;
  }

  // queued_provisioning - computed: false, optional: true, required: false
  private _queuedProvisioning = new GoogleContainerClusterNodePoolQueuedProvisioningOutputReference(this, "queued_provisioning");
  public get queuedProvisioning() {
    return this._queuedProvisioning;
  }
  public putQueuedProvisioning(value: GoogleContainerClusterNodePoolQueuedProvisioning) {
    this._queuedProvisioning.internalValue = value;
  }
  public resetQueuedProvisioning() {
    this._queuedProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuedProvisioningInput() {
    return this._queuedProvisioning.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new GoogleContainerClusterNodePoolUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: GoogleContainerClusterNodePoolUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}

export class GoogleContainerClusterNodePoolList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePool[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolOutputReference {
    return new GoogleContainerClusterNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading {
  /**
  * The policy for kernel module loading.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#policy GoogleContainerCluster#policy}
  */
  readonly policy?: string;
}

export function googleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function googleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#cgroup_mode GoogleContainerCluster#cgroup_mode}
  */
  readonly cgroupMode?: string;
  /**
  * node_kernel_module_loading block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_kernel_module_loading GoogleContainerCluster#node_kernel_module_loading}
  */
  readonly nodeKernelModuleLoading?: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading;
}

export function googleContainerClusterNodePoolAutoConfigLinuxNodeConfigToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_mode: cdktf.stringToTerraform(struct!.cgroupMode),
    node_kernel_module_loading: googleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct!.nodeKernelModuleLoading),
  }
}


export function googleContainerClusterNodePoolAutoConfigLinuxNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_mode: {
      value: cdktf.stringToHclTerraform(struct!.cgroupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_kernel_module_loading: {
      value: googleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct!.nodeKernelModuleLoading),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupMode = this._cgroupMode;
    }
    if (this._nodeKernelModuleLoading?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeKernelModuleLoading = this._nodeKernelModuleLoading?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
      this._nodeKernelModuleLoading.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupMode = value.cgroupMode;
      this._nodeKernelModuleLoading.internalValue = value.nodeKernelModuleLoading;
    }
  }

  // cgroup_mode - computed: true, optional: true, required: false
  private _cgroupMode?: string; 
  public get cgroupMode() {
    return this.getStringAttribute('cgroup_mode');
  }
  public set cgroupMode(value: string) {
    this._cgroupMode = value;
  }
  public resetCgroupMode() {
    this._cgroupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupModeInput() {
    return this._cgroupMode;
  }

  // node_kernel_module_loading - computed: false, optional: true, required: false
  private _nodeKernelModuleLoading = new GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference(this, "node_kernel_module_loading");
  public get nodeKernelModuleLoading() {
    return this._nodeKernelModuleLoading;
  }
  public putNodeKernelModuleLoading(value: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading) {
    this._nodeKernelModuleLoading.internalValue = value;
  }
  public resetNodeKernelModuleLoading() {
    this._nodeKernelModuleLoading.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKernelModuleLoadingInput() {
    return this._nodeKernelModuleLoading.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolAutoConfigNetworkTags {
  /**
  * List of network tags applied to auto-provisioned node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#tags GoogleContainerCluster#tags}
  */
  readonly tags?: string[];
}

export function googleContainerClusterNodePoolAutoConfigNetworkTagsToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference | GoogleContainerClusterNodePoolAutoConfigNetworkTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function googleContainerClusterNodePoolAutoConfigNetworkTagsToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference | GoogleContainerClusterNodePoolAutoConfigNetworkTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfigNetworkTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfigNetworkTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig {
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#insecure_kubelet_readonly_port_enabled GoogleContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
}

export function googleContainerClusterNodePoolAutoConfigNodeKubeletConfigToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference | GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_kubelet_readonly_port_enabled: cdktf.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
  }
}


export function googleContainerClusterNodePoolAutoConfigNodeKubeletConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference | GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_kubelet_readonly_port_enabled: {
      value: cdktf.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecureKubeletReadonlyPortEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
    }
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: true, required: false
  private _insecureKubeletReadonlyPortEnabled?: string; 
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }
  public set insecureKubeletReadonlyPortEnabled(value: string) {
    this._insecureKubeletReadonlyPortEnabled = value;
  }
  public resetInsecureKubeletReadonlyPortEnabled() {
    this._insecureKubeletReadonlyPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureKubeletReadonlyPortEnabledInput() {
    return this._insecureKubeletReadonlyPortEnabled;
  }
}
export interface GoogleContainerClusterNodePoolAutoConfig {
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#resource_manager_tags GoogleContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#linux_node_config GoogleContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig;
  /**
  * network_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#network_tags GoogleContainerCluster#network_tags}
  */
  readonly networkTags?: GoogleContainerClusterNodePoolAutoConfigNetworkTags;
  /**
  * node_kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_kubelet_config GoogleContainerCluster#node_kubelet_config}
  */
  readonly nodeKubeletConfig?: GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig;
}

export function googleContainerClusterNodePoolAutoConfigToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigOutputReference | GoogleContainerClusterNodePoolAutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
    linux_node_config: googleContainerClusterNodePoolAutoConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    network_tags: googleContainerClusterNodePoolAutoConfigNetworkTagsToTerraform(struct!.networkTags),
    node_kubelet_config: googleContainerClusterNodePoolAutoConfigNodeKubeletConfigToTerraform(struct!.nodeKubeletConfig),
  }
}


export function googleContainerClusterNodePoolAutoConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigOutputReference | GoogleContainerClusterNodePoolAutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    linux_node_config: {
      value: googleContainerClusterNodePoolAutoConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigList",
    },
    network_tags: {
      value: googleContainerClusterNodePoolAutoConfigNetworkTagsToHclTerraform(struct!.networkTags),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoConfigNetworkTagsList",
    },
    node_kubelet_config: {
      value: googleContainerClusterNodePoolAutoConfigNodeKubeletConfigToHclTerraform(struct!.nodeKubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._networkTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags?.internalValue;
    }
    if (this._nodeKubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeKubeletConfig = this._nodeKubeletConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._networkTags.internalValue = undefined;
      this._nodeKubeletConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._networkTags.internalValue = value.networkTags;
      this._nodeKubeletConfig.internalValue = value.nodeKubeletConfig;
    }
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags = new GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference(this, "network_tags");
  public get networkTags() {
    return this._networkTags;
  }
  public putNetworkTags(value: GoogleContainerClusterNodePoolAutoConfigNetworkTags) {
    this._networkTags.internalValue = value;
  }
  public resetNetworkTags() {
    this._networkTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags.internalValue;
  }

  // node_kubelet_config - computed: false, optional: true, required: false
  private _nodeKubeletConfig = new GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference(this, "node_kubelet_config");
  public get nodeKubeletConfig() {
    return this._nodeKubeletConfig;
  }
  public putNodeKubeletConfig(value: GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig) {
    this._nodeKubeletConfig.internalValue = value;
  }
  public resetNodeKubeletConfig() {
    this._nodeKubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKubeletConfigInput() {
    return this._nodeKubeletConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  /**
  * URI for the secret that hosts a certificate. Must be in the format 'projects/PROJECT_NUM/secrets/SECRET_NAME/versions/VERSION_OR_LATEST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#secret_uri GoogleContainerCluster#secret_uri}
  */
  readonly secretUri: string;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_uri: cdktf.stringToTerraform(struct!.secretUri),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.secretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUri = this._secretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUri = value.secretUri;
    }
  }

  // secret_uri - computed: false, optional: false, required: true
  private _secretUri?: string; 
  public get secretUri() {
    return this.getStringAttribute('secret_uri');
  }
  public set secretUri(value: string) {
    this._secretUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUriInput() {
    return this._secretUri;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  /**
  * List of fully-qualified-domain-names. IPv4s and port specification are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#fqdns GoogleContainerCluster#fqdns}
  */
  readonly fqdns: string[];
  /**
  * gcp_secret_manager_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcp_secret_manager_certificate_config GoogleContainerCluster#gcp_secret_manager_certificate_config}
  */
  readonly gcpSecretManagerCertificateConfig: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdns),
    gcp_secret_manager_certificate_config: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct!.gcpSecretManagerCertificateConfig),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_secret_manager_certificate_config: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct!.gcpSecretManagerCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._gcpSecretManagerCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerCertificateConfig = this._gcpSecretManagerCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdns = undefined;
      this._gcpSecretManagerCertificateConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdns = value.fqdns;
      this._gcpSecretManagerCertificateConfig.internalValue = value.gcpSecretManagerCertificateConfig;
    }
  }

  // fqdns - computed: false, optional: false, required: true
  private _fqdns?: string[]; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // gcp_secret_manager_certificate_config - computed: false, optional: false, required: true
  private _gcpSecretManagerCertificateConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this, "gcp_secret_manager_certificate_config");
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
  public putGcpSecretManagerCertificateConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig) {
    this._gcpSecretManagerCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerCertificateConfigInput() {
    return this._gcpSecretManagerCertificateConfig.internalValue;
  }
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig {
  /**
  * Whether or not private registries are configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * certificate_authority_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#certificate_authority_domain_config GoogleContainerCluster#certificate_authority_domain_config}
  */
  readonly certificateAuthorityDomainConfig?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    certificate_authority_domain_config: cdktf.listMapper(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform, true)(struct!.certificateAuthorityDomainConfig),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig): any {
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
    certificate_authority_domain_config: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform, true)(struct!.certificateAuthorityDomainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._certificateAuthorityDomainConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityDomainConfig = this._certificateAuthorityDomainConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._certificateAuthorityDomainConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._certificateAuthorityDomainConfig.internalValue = value.certificateAuthorityDomainConfig;
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

  // certificate_authority_domain_config - computed: false, optional: true, required: false
  private _certificateAuthorityDomainConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }
  public putCertificateAuthorityDomainConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable) {
    this._certificateAuthorityDomainConfig.internalValue = value;
  }
  public resetCertificateAuthorityDomainConfig() {
    this._certificateAuthorityDomainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityDomainConfigInput() {
    return this._certificateAuthorityDomainConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa {
  /**
  * URI for the Secret Manager secret that hosts the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcp_secret_manager_secret_uri GoogleContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktf.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaOutputReference {
    return new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert {
  /**
  * URI for the Secret Manager secret that hosts the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcp_secret_manager_secret_uri GoogleContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktf.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey {
  /**
  * URI for the Secret Manager secret that hosts the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcp_secret_manager_secret_uri GoogleContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_secret_manager_secret_uri: cdktf.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpSecretManagerSecretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
    }
  }

  // gcp_secret_manager_secret_uri - computed: false, optional: true, required: false
  private _gcpSecretManagerSecretUri?: string; 
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
  public set gcpSecretManagerSecretUri(value: string) {
    this._gcpSecretManagerSecretUri = value;
  }
  public resetGcpSecretManagerSecretUri() {
    this._gcpSecretManagerSecretUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerSecretUriInput() {
    return this._gcpSecretManagerSecretUri;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient {
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#cert GoogleContainerCluster#cert}
  */
  readonly cert: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertToTerraform(struct!.cert),
    key: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct!.key),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertList",
    },
    key: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert.internalValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert.internalValue = value.cert;
      this._key.internalValue = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert) {
    this._cert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientOutputReference {
    return new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader {
  /**
  * Configures the header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#key GoogleContainerCluster#key}
  */
  readonly key: string;
  /**
  * Configures the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#value GoogleContainerCluster#value}
  */
  readonly value: string[];
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderOutputReference {
    return new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts {
  /**
  * Represent the capabilities of the registry host, specifying what operations a host is capable of performing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#capabilities GoogleContainerCluster#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Specifies the maximum duration allowed for a connection attempt to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#dial_timeout GoogleContainerCluster#dial_timeout}
  */
  readonly dialTimeout?: string;
  /**
  * Configures the registry host/mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#host GoogleContainerCluster#host}
  */
  readonly host: string;
  /**
  * Indicate the host's API root endpoint is defined in the URL path rather than by the API specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#override_path GoogleContainerCluster#override_path}
  */
  readonly overridePath?: boolean | cdktf.IResolvable;
  /**
  * ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#ca GoogleContainerCluster#ca}
  */
  readonly ca?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa[] | cdktf.IResolvable;
  /**
  * client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#client GoogleContainerCluster#client}
  */
  readonly client?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#header GoogleContainerCluster#header}
  */
  readonly header?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader[] | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    dial_timeout: cdktf.stringToTerraform(struct!.dialTimeout),
    host: cdktf.stringToTerraform(struct!.host),
    override_path: cdktf.booleanToTerraform(struct!.overridePath),
    ca: cdktf.listMapper(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaToTerraform, true)(struct!.ca),
    client: cdktf.listMapper(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientToTerraform, true)(struct!.client),
    header: cdktf.listMapper(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderToTerraform, true)(struct!.header),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dial_timeout: {
      value: cdktf.stringToHclTerraform(struct!.dialTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_path: {
      value: cdktf.booleanToHclTerraform(struct!.overridePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaToHclTerraform, true)(struct!.ca),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaList",
    },
    client: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientToHclTerraform, true)(struct!.client),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientList",
    },
    header: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._dialTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialTimeout = this._dialTimeout;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._overridePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridePath = this._overridePath;
    }
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._dialTimeout = undefined;
      this._host = undefined;
      this._overridePath = undefined;
      this._ca.internalValue = undefined;
      this._client.internalValue = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._dialTimeout = value.dialTimeout;
      this._host = value.host;
      this._overridePath = value.overridePath;
      this._ca.internalValue = value.ca;
      this._client.internalValue = value.client;
      this._header.internalValue = value.header;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // dial_timeout - computed: false, optional: true, required: false
  private _dialTimeout?: string; 
  public get dialTimeout() {
    return this.getStringAttribute('dial_timeout');
  }
  public set dialTimeout(value: string) {
    this._dialTimeout = value;
  }
  public resetDialTimeout() {
    this._dialTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialTimeoutInput() {
    return this._dialTimeout;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // override_path - computed: false, optional: true, required: false
  private _overridePath?: boolean | cdktf.IResolvable; 
  public get overridePath() {
    return this.getBooleanAttribute('override_path');
  }
  public set overridePath(value: boolean | cdktf.IResolvable) {
    this._overridePath = value;
  }
  public resetOverridePath() {
    this._overridePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePathInput() {
    return this._overridePath;
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaList(this, "ca", false);
  public get ca() {
    return this._ca;
  }
  public putCa(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa[] | cdktf.IResolvable) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // client - computed: false, optional: true, required: false
  private _client = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientList(this, "client", false);
  public get client() {
    return this._client;
  }
  public putClient(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient[] | cdktf.IResolvable) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsOutputReference {
    return new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts {
  /**
  * Defines the host name of the registry server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#server GoogleContainerCluster#server}
  */
  readonly server: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#hosts GoogleContainerCluster#hosts}
  */
  readonly hosts?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts[] | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.stringToTerraform(struct!.server),
    hosts: cdktf.listMapper(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsToTerraform, true)(struct!.hosts),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._server = undefined;
      this._hosts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._server = value.server;
      this._hosts.internalValue = value.hosts;
    }
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsOutputReference {
    return new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups {
  /**
  * Whether writable cgroups are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups): any {
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

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups | undefined) {
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
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig {
  /**
  * private_registry_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#private_registry_access_config GoogleContainerCluster#private_registry_access_config}
  */
  readonly privateRegistryAccessConfig?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig;
  /**
  * registry_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#registry_hosts GoogleContainerCluster#registry_hosts}
  */
  readonly registryHosts?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts[] | cdktf.IResolvable;
  /**
  * writable_cgroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#writable_cgroups GoogleContainerCluster#writable_cgroups}
  */
  readonly writableCgroups?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_registry_access_config: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToTerraform(struct!.privateRegistryAccessConfig),
    registry_hosts: cdktf.listMapper(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsToTerraform, true)(struct!.registryHosts),
    writable_cgroups: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsToTerraform(struct!.writableCgroups),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_registry_access_config: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct!.privateRegistryAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigList",
    },
    registry_hosts: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsToHclTerraform, true)(struct!.registryHosts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsList",
    },
    writable_cgroups: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsToHclTerraform(struct!.writableCgroups),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateRegistryAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateRegistryAccessConfig = this._privateRegistryAccessConfig?.internalValue;
    }
    if (this._registryHosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryHosts = this._registryHosts?.internalValue;
    }
    if (this._writableCgroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writableCgroups = this._writableCgroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateRegistryAccessConfig.internalValue = undefined;
      this._registryHosts.internalValue = undefined;
      this._writableCgroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateRegistryAccessConfig.internalValue = value.privateRegistryAccessConfig;
      this._registryHosts.internalValue = value.registryHosts;
      this._writableCgroups.internalValue = value.writableCgroups;
    }
  }

  // private_registry_access_config - computed: false, optional: true, required: false
  private _privateRegistryAccessConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference(this, "private_registry_access_config");
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }
  public putPrivateRegistryAccessConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig) {
    this._privateRegistryAccessConfig.internalValue = value;
  }
  public resetPrivateRegistryAccessConfig() {
    this._privateRegistryAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryAccessConfigInput() {
    return this._privateRegistryAccessConfig.internalValue;
  }

  // registry_hosts - computed: false, optional: true, required: false
  private _registryHosts = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsList(this, "registry_hosts", false);
  public get registryHosts() {
    return this._registryHosts;
  }
  public putRegistryHosts(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts[] | cdktf.IResolvable) {
    this._registryHosts.internalValue = value;
  }
  public resetRegistryHosts() {
    this._registryHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryHostsInput() {
    return this._registryHosts.internalValue;
  }

  // writable_cgroups - computed: false, optional: true, required: false
  private _writableCgroups = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference(this, "writable_cgroups");
  public get writableCgroups() {
    return this._writableCgroups;
  }
  public putWritableCgroups(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups) {
    this._writableCgroups.internalValue = value;
  }
  public resetWritableCgroups() {
    this._writableCgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writableCgroupsInput() {
    return this._writableCgroups.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
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

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined) {
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
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults {
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#insecure_kubelet_readonly_port_enabled GoogleContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#logging_variant GoogleContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#containerd_config GoogleContainerCluster#containerd_config}
  */
  readonly containerdConfig?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gcfs_config GoogleContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_kubelet_readonly_port_enabled: cdktf.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    containerd_config: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToTerraform(struct!.containerdConfig),
    gcfs_config: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct!.gcfsConfig),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_kubelet_readonly_port_enabled: {
      value: cdktf.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_variant: {
      value: cdktf.stringToHclTerraform(struct!.loggingVariant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containerd_config: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigList",
    },
    gcfs_config: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecureKubeletReadonlyPortEnabled = undefined;
      this._loggingVariant = undefined;
      this._containerdConfig.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
      this._loggingVariant = value.loggingVariant;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._gcfsConfig.internalValue = value.gcfsConfig;
    }
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: true, required: false
  private _insecureKubeletReadonlyPortEnabled?: string; 
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }
  public set insecureKubeletReadonlyPortEnabled(value: string) {
    this._insecureKubeletReadonlyPortEnabled = value;
  }
  public resetInsecureKubeletReadonlyPortEnabled() {
    this._insecureKubeletReadonlyPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureKubeletReadonlyPortEnabledInput() {
    return this._insecureKubeletReadonlyPortEnabled;
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
  }

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolDefaults {
  /**
  * node_config_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#node_config_defaults GoogleContainerCluster#node_config_defaults}
  */
  readonly nodeConfigDefaults?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults;
}

export function googleContainerClusterNodePoolDefaultsToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsOutputReference | GoogleContainerClusterNodePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_config_defaults: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct!.nodeConfigDefaults),
  }
}


export function googleContainerClusterNodePoolDefaultsToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsOutputReference | GoogleContainerClusterNodePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_config_defaults: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct!.nodeConfigDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeConfigDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfigDefaults = this._nodeConfigDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeConfigDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeConfigDefaults.internalValue = value.nodeConfigDefaults;
    }
  }

  // node_config_defaults - computed: false, optional: true, required: false
  private _nodeConfigDefaults = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference(this, "node_config_defaults");
  public get nodeConfigDefaults() {
    return this._nodeConfigDefaults;
  }
  public putNodeConfigDefaults(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults) {
    this._nodeConfigDefaults.internalValue = value;
  }
  public resetNodeConfigDefaults() {
    this._nodeConfigDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigDefaultsInput() {
    return this._nodeConfigDefaults.internalValue;
  }
}
export interface GoogleContainerClusterNotificationConfigPubsubFilter {
  /**
  * Can be used to filter what notifications are sent. Valid values include include UPGRADE_AVAILABLE_EVENT, UPGRADE_EVENT, SECURITY_BULLETIN_EVENT, and UPGRADE_INFO_EVENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#event_type GoogleContainerCluster#event_type}
  */
  readonly eventType: string[];
}

export function googleContainerClusterNotificationConfigPubsubFilterToTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubFilterOutputReference | GoogleContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventType),
  }
}


export function googleContainerClusterNotificationConfigPubsubFilterToHclTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubFilterOutputReference | GoogleContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNotificationConfigPubsubFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNotificationConfigPubsubFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNotificationConfigPubsubFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string[]; 
  public get eventType() {
    return this.getListAttribute('event_type');
  }
  public set eventType(value: string[]) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }
}
export interface GoogleContainerClusterNotificationConfigPubsub {
  /**
  * Whether or not the notification config is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#topic GoogleContainerCluster#topic}
  */
  readonly topic?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#filter GoogleContainerCluster#filter}
  */
  readonly filter?: GoogleContainerClusterNotificationConfigPubsubFilter;
}

export function googleContainerClusterNotificationConfigPubsubToTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubOutputReference | GoogleContainerClusterNotificationConfigPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    topic: cdktf.stringToTerraform(struct!.topic),
    filter: googleContainerClusterNotificationConfigPubsubFilterToTerraform(struct!.filter),
  }
}


export function googleContainerClusterNotificationConfigPubsubToHclTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubOutputReference | GoogleContainerClusterNotificationConfigPubsub): any {
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
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: googleContainerClusterNotificationConfigPubsubFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNotificationConfigPubsubFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNotificationConfigPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNotificationConfigPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNotificationConfigPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topic = undefined;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topic = value.topic;
      this._filter.internalValue = value.filter;
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

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new GoogleContainerClusterNotificationConfigPubsubFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleContainerClusterNotificationConfigPubsubFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface GoogleContainerClusterNotificationConfig {
  /**
  * pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#pubsub GoogleContainerCluster#pubsub}
  */
  readonly pubsub: GoogleContainerClusterNotificationConfigPubsub;
}

export function googleContainerClusterNotificationConfigToTerraform(struct?: GoogleContainerClusterNotificationConfigOutputReference | GoogleContainerClusterNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub: googleContainerClusterNotificationConfigPubsubToTerraform(struct!.pubsub),
  }
}


export function googleContainerClusterNotificationConfigToHclTerraform(struct?: GoogleContainerClusterNotificationConfigOutputReference | GoogleContainerClusterNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pubsub: {
      value: googleContainerClusterNotificationConfigPubsubToHclTerraform(struct!.pubsub),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNotificationConfigPubsubList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsub = this._pubsub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsub.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsub.internalValue = value.pubsub;
    }
  }

  // pubsub - computed: false, optional: false, required: true
  private _pubsub = new GoogleContainerClusterNotificationConfigPubsubOutputReference(this, "pubsub");
  public get pubsub() {
    return this._pubsub;
  }
  public putPubsub(value: GoogleContainerClusterNotificationConfigPubsub) {
    this._pubsub.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubInput() {
    return this._pubsub.internalValue;
  }
}
export interface GoogleContainerClusterPodAutoscaling {
  /**
  * 
  * 								HPA Profile is used to configure the Horizontal Pod Autoscaler (HPA) profile for the cluster.
  * 								Available options include:
  * 								- NONE: Customers explicitly opt-out of HPA profiles.
  * 								- PERFORMANCE: PERFORMANCE is used when customers opt-in to the performance HPA profile. In this profile we support a higher number of HPAs per cluster and faster metrics collection for workload autoscaling.
  * 							
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#hpa_profile GoogleContainerCluster#hpa_profile}
  */
  readonly hpaProfile: string;
}

export function googleContainerClusterPodAutoscalingToTerraform(struct?: GoogleContainerClusterPodAutoscalingOutputReference | GoogleContainerClusterPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hpa_profile: cdktf.stringToTerraform(struct!.hpaProfile),
  }
}


export function googleContainerClusterPodAutoscalingToHclTerraform(struct?: GoogleContainerClusterPodAutoscalingOutputReference | GoogleContainerClusterPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hpa_profile: {
      value: cdktf.stringToHclTerraform(struct!.hpaProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterPodAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hpaProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpaProfile = this._hpaProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hpaProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hpaProfile = value.hpaProfile;
    }
  }

  // hpa_profile - computed: false, optional: false, required: true
  private _hpaProfile?: string; 
  public get hpaProfile() {
    return this.getStringAttribute('hpa_profile');
  }
  public set hpaProfile(value: string) {
    this._hpaProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hpaProfileInput() {
    return this._hpaProfile;
  }
}
export interface GoogleContainerClusterPodSecurityPolicyConfig {
  /**
  * Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterPodSecurityPolicyConfigToTerraform(struct?: GoogleContainerClusterPodSecurityPolicyConfigOutputReference | GoogleContainerClusterPodSecurityPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterPodSecurityPolicyConfigToHclTerraform(struct?: GoogleContainerClusterPodSecurityPolicyConfigOutputReference | GoogleContainerClusterPodSecurityPolicyConfig): any {
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

export class GoogleContainerClusterPodSecurityPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPodSecurityPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPodSecurityPolicyConfig | undefined) {
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
export interface GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig {
  /**
  * Whether the cluster master is accessible globally or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct?: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct?: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
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

export class GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined) {
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
export interface GoogleContainerClusterPrivateClusterConfig {
  /**
  * When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_private_endpoint GoogleContainerCluster#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_private_nodes GoogleContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#master_ipv4_cidr_block GoogleContainerCluster#master_ipv4_cidr_block}
  */
  readonly masterIpv4CidrBlock?: string;
  /**
  * Subnetwork in cluster's network where master's endpoint will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#private_endpoint_subnetwork GoogleContainerCluster#private_endpoint_subnetwork}
  */
  readonly privateEndpointSubnetwork?: string;
  /**
  * master_global_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#master_global_access_config GoogleContainerCluster#master_global_access_config}
  */
  readonly masterGlobalAccessConfig?: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig;
}

export function googleContainerClusterPrivateClusterConfigToTerraform(struct?: GoogleContainerClusterPrivateClusterConfigOutputReference | GoogleContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_private_endpoint: cdktf.booleanToTerraform(struct!.enablePrivateEndpoint),
    enable_private_nodes: cdktf.booleanToTerraform(struct!.enablePrivateNodes),
    master_ipv4_cidr_block: cdktf.stringToTerraform(struct!.masterIpv4CidrBlock),
    private_endpoint_subnetwork: cdktf.stringToTerraform(struct!.privateEndpointSubnetwork),
    master_global_access_config: googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct!.masterGlobalAccessConfig),
  }
}


export function googleContainerClusterPrivateClusterConfigToHclTerraform(struct?: GoogleContainerClusterPrivateClusterConfigOutputReference | GoogleContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_private_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.masterIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointSubnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_global_access_config: {
      value: googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct!.masterGlobalAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterPrivateClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPrivateClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePrivateEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateEndpoint = this._enablePrivateEndpoint;
    }
    if (this._enablePrivateNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._masterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterIpv4CidrBlock = this._masterIpv4CidrBlock;
    }
    if (this._privateEndpointSubnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointSubnetwork = this._privateEndpointSubnetwork;
    }
    if (this._masterGlobalAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterGlobalAccessConfig = this._masterGlobalAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPrivateClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePrivateEndpoint = undefined;
      this._enablePrivateNodes = undefined;
      this._masterIpv4CidrBlock = undefined;
      this._privateEndpointSubnetwork = undefined;
      this._masterGlobalAccessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePrivateEndpoint = value.enablePrivateEndpoint;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._masterIpv4CidrBlock = value.masterIpv4CidrBlock;
      this._privateEndpointSubnetwork = value.privateEndpointSubnetwork;
      this._masterGlobalAccessConfig.internalValue = value.masterGlobalAccessConfig;
    }
  }

  // enable_private_endpoint - computed: false, optional: true, required: false
  private _enablePrivateEndpoint?: boolean | cdktf.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }
  public set enablePrivateEndpoint(value: boolean | cdktf.IResolvable) {
    this._enablePrivateEndpoint = value;
  }
  public resetEnablePrivateEndpoint() {
    this._enablePrivateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateEndpointInput() {
    return this._enablePrivateEndpoint;
  }

  // enable_private_nodes - computed: false, optional: true, required: false
  private _enablePrivateNodes?: boolean | cdktf.IResolvable; 
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }
  public set enablePrivateNodes(value: boolean | cdktf.IResolvable) {
    this._enablePrivateNodes = value;
  }
  public resetEnablePrivateNodes() {
    this._enablePrivateNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateNodesInput() {
    return this._enablePrivateNodes;
  }

  // master_ipv4_cidr_block - computed: true, optional: true, required: false
  private _masterIpv4CidrBlock?: string; 
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }
  public set masterIpv4CidrBlock(value: string) {
    this._masterIpv4CidrBlock = value;
  }
  public resetMasterIpv4CidrBlock() {
    this._masterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIpv4CidrBlockInput() {
    return this._masterIpv4CidrBlock;
  }

  // peering_name - computed: true, optional: false, required: false
  public get peeringName() {
    return this.getStringAttribute('peering_name');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_subnetwork - computed: false, optional: true, required: false
  private _privateEndpointSubnetwork?: string; 
  public get privateEndpointSubnetwork() {
    return this.getStringAttribute('private_endpoint_subnetwork');
  }
  public set privateEndpointSubnetwork(value: string) {
    this._privateEndpointSubnetwork = value;
  }
  public resetPrivateEndpointSubnetwork() {
    this._privateEndpointSubnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointSubnetworkInput() {
    return this._privateEndpointSubnetwork;
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // master_global_access_config - computed: false, optional: true, required: false
  private _masterGlobalAccessConfig = new GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference(this, "master_global_access_config");
  public get masterGlobalAccessConfig() {
    return this._masterGlobalAccessConfig;
  }
  public putMasterGlobalAccessConfig(value: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig) {
    this._masterGlobalAccessConfig.internalValue = value;
  }
  public resetMasterGlobalAccessConfig() {
    this._masterGlobalAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterGlobalAccessConfigInput() {
    return this._masterGlobalAccessConfig.internalValue;
  }
}
export interface GoogleContainerClusterProtectConfigWorkloadConfig {
  /**
  * Sets which mode of auditing should be used for the cluster's workloads. Accepted values are DISABLED, BASIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#audit_mode GoogleContainerCluster#audit_mode}
  */
  readonly auditMode: string;
}

export function googleContainerClusterProtectConfigWorkloadConfigToTerraform(struct?: GoogleContainerClusterProtectConfigWorkloadConfigOutputReference | GoogleContainerClusterProtectConfigWorkloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_mode: cdktf.stringToTerraform(struct!.auditMode),
  }
}


export function googleContainerClusterProtectConfigWorkloadConfigToHclTerraform(struct?: GoogleContainerClusterProtectConfigWorkloadConfigOutputReference | GoogleContainerClusterProtectConfigWorkloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_mode: {
      value: cdktf.stringToHclTerraform(struct!.auditMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterProtectConfigWorkloadConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterProtectConfigWorkloadConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditMode = this._auditMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterProtectConfigWorkloadConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditMode = value.auditMode;
    }
  }

  // audit_mode - computed: false, optional: false, required: true
  private _auditMode?: string; 
  public get auditMode() {
    return this.getStringAttribute('audit_mode');
  }
  public set auditMode(value: string) {
    this._auditMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditModeInput() {
    return this._auditMode;
  }
}
export interface GoogleContainerClusterProtectConfig {
  /**
  * Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#workload_vulnerability_mode GoogleContainerCluster#workload_vulnerability_mode}
  */
  readonly workloadVulnerabilityMode?: string;
  /**
  * workload_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#workload_config GoogleContainerCluster#workload_config}
  */
  readonly workloadConfig?: GoogleContainerClusterProtectConfigWorkloadConfig;
}

export function googleContainerClusterProtectConfigToTerraform(struct?: GoogleContainerClusterProtectConfigOutputReference | GoogleContainerClusterProtectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workload_vulnerability_mode: cdktf.stringToTerraform(struct!.workloadVulnerabilityMode),
    workload_config: googleContainerClusterProtectConfigWorkloadConfigToTerraform(struct!.workloadConfig),
  }
}


export function googleContainerClusterProtectConfigToHclTerraform(struct?: GoogleContainerClusterProtectConfigOutputReference | GoogleContainerClusterProtectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workload_vulnerability_mode: {
      value: cdktf.stringToHclTerraform(struct!.workloadVulnerabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_config: {
      value: googleContainerClusterProtectConfigWorkloadConfigToHclTerraform(struct!.workloadConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterProtectConfigWorkloadConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterProtectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterProtectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadVulnerabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadVulnerabilityMode = this._workloadVulnerabilityMode;
    }
    if (this._workloadConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadConfig = this._workloadConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterProtectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workloadVulnerabilityMode = undefined;
      this._workloadConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workloadVulnerabilityMode = value.workloadVulnerabilityMode;
      this._workloadConfig.internalValue = value.workloadConfig;
    }
  }

  // workload_vulnerability_mode - computed: true, optional: true, required: false
  private _workloadVulnerabilityMode?: string; 
  public get workloadVulnerabilityMode() {
    return this.getStringAttribute('workload_vulnerability_mode');
  }
  public set workloadVulnerabilityMode(value: string) {
    this._workloadVulnerabilityMode = value;
  }
  public resetWorkloadVulnerabilityMode() {
    this._workloadVulnerabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadVulnerabilityModeInput() {
    return this._workloadVulnerabilityMode;
  }

  // workload_config - computed: false, optional: true, required: false
  private _workloadConfig = new GoogleContainerClusterProtectConfigWorkloadConfigOutputReference(this, "workload_config");
  public get workloadConfig() {
    return this._workloadConfig;
  }
  public putWorkloadConfig(value: GoogleContainerClusterProtectConfigWorkloadConfig) {
    this._workloadConfig.internalValue = value;
  }
  public resetWorkloadConfig() {
    this._workloadConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadConfigInput() {
    return this._workloadConfig.internalValue;
  }
}
export interface GoogleContainerClusterRbacBindingConfig {
  /**
  * Setting this to true will allow any ClusterRoleBinding and RoleBinding with subjects system:authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_insecure_binding_system_authenticated GoogleContainerCluster#enable_insecure_binding_system_authenticated}
  */
  readonly enableInsecureBindingSystemAuthenticated?: boolean | cdktf.IResolvable;
  /**
  * Setting this to true will allow any ClusterRoleBinding and RoleBinding with subjects system:anonymous or system:unauthenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_insecure_binding_system_unauthenticated GoogleContainerCluster#enable_insecure_binding_system_unauthenticated}
  */
  readonly enableInsecureBindingSystemUnauthenticated?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterRbacBindingConfigToTerraform(struct?: GoogleContainerClusterRbacBindingConfigOutputReference | GoogleContainerClusterRbacBindingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_insecure_binding_system_authenticated: cdktf.booleanToTerraform(struct!.enableInsecureBindingSystemAuthenticated),
    enable_insecure_binding_system_unauthenticated: cdktf.booleanToTerraform(struct!.enableInsecureBindingSystemUnauthenticated),
  }
}


export function googleContainerClusterRbacBindingConfigToHclTerraform(struct?: GoogleContainerClusterRbacBindingConfigOutputReference | GoogleContainerClusterRbacBindingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_insecure_binding_system_authenticated: {
      value: cdktf.booleanToHclTerraform(struct!.enableInsecureBindingSystemAuthenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_insecure_binding_system_unauthenticated: {
      value: cdktf.booleanToHclTerraform(struct!.enableInsecureBindingSystemUnauthenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterRbacBindingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterRbacBindingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInsecureBindingSystemAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInsecureBindingSystemAuthenticated = this._enableInsecureBindingSystemAuthenticated;
    }
    if (this._enableInsecureBindingSystemUnauthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInsecureBindingSystemUnauthenticated = this._enableInsecureBindingSystemUnauthenticated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterRbacBindingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableInsecureBindingSystemAuthenticated = undefined;
      this._enableInsecureBindingSystemUnauthenticated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableInsecureBindingSystemAuthenticated = value.enableInsecureBindingSystemAuthenticated;
      this._enableInsecureBindingSystemUnauthenticated = value.enableInsecureBindingSystemUnauthenticated;
    }
  }

  // enable_insecure_binding_system_authenticated - computed: false, optional: true, required: false
  private _enableInsecureBindingSystemAuthenticated?: boolean | cdktf.IResolvable; 
  public get enableInsecureBindingSystemAuthenticated() {
    return this.getBooleanAttribute('enable_insecure_binding_system_authenticated');
  }
  public set enableInsecureBindingSystemAuthenticated(value: boolean | cdktf.IResolvable) {
    this._enableInsecureBindingSystemAuthenticated = value;
  }
  public resetEnableInsecureBindingSystemAuthenticated() {
    this._enableInsecureBindingSystemAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInsecureBindingSystemAuthenticatedInput() {
    return this._enableInsecureBindingSystemAuthenticated;
  }

  // enable_insecure_binding_system_unauthenticated - computed: false, optional: true, required: false
  private _enableInsecureBindingSystemUnauthenticated?: boolean | cdktf.IResolvable; 
  public get enableInsecureBindingSystemUnauthenticated() {
    return this.getBooleanAttribute('enable_insecure_binding_system_unauthenticated');
  }
  public set enableInsecureBindingSystemUnauthenticated(value: boolean | cdktf.IResolvable) {
    this._enableInsecureBindingSystemUnauthenticated = value;
  }
  public resetEnableInsecureBindingSystemUnauthenticated() {
    this._enableInsecureBindingSystemUnauthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInsecureBindingSystemUnauthenticatedInput() {
    return this._enableInsecureBindingSystemUnauthenticated;
  }
}
export interface GoogleContainerClusterReleaseChannel {
  /**
  * The selected release channel. Accepted values are:
  * * UNSPECIFIED: Not set.
  * * RAPID: Weekly upgrade cadence; Early testers and developers who requires new features.
  * * REGULAR: Multiple per month upgrade cadence; Production users who need features not yet offered in the Stable channel.
  * * STABLE: Every few months upgrade cadence; Production users who need stability above all else, and for whom frequent upgrades are too risky.
  * * EXTENDED: GKE provides extended support for Kubernetes minor versions through the Extended channel. With this channel, you can stay on a minor version for up to 24 months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#channel GoogleContainerCluster#channel}
  */
  readonly channel: string;
}

export function googleContainerClusterReleaseChannelToTerraform(struct?: GoogleContainerClusterReleaseChannelOutputReference | GoogleContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
  }
}


export function googleContainerClusterReleaseChannelToHclTerraform(struct?: GoogleContainerClusterReleaseChannelOutputReference | GoogleContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterReleaseChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterReleaseChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterReleaseChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}
export interface GoogleContainerClusterResourceUsageExportConfigBigqueryDestination {
  /**
  * The ID of a BigQuery Dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#dataset_id GoogleContainerCluster#dataset_id}
  */
  readonly datasetId: string;
}

export function googleContainerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct?: GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | GoogleContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
  }
}


export function googleContainerClusterResourceUsageExportConfigBigqueryDestinationToHclTerraform(struct?: GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | GoogleContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterResourceUsageExportConfigBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterResourceUsageExportConfigBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }
}
export interface GoogleContainerClusterResourceUsageExportConfig {
  /**
  * Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_network_egress_metering GoogleContainerCluster#enable_network_egress_metering}
  */
  readonly enableNetworkEgressMetering?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_resource_consumption_metering GoogleContainerCluster#enable_resource_consumption_metering}
  */
  readonly enableResourceConsumptionMetering?: boolean | cdktf.IResolvable;
  /**
  * bigquery_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#bigquery_destination GoogleContainerCluster#bigquery_destination}
  */
  readonly bigqueryDestination: GoogleContainerClusterResourceUsageExportConfigBigqueryDestination;
}

export function googleContainerClusterResourceUsageExportConfigToTerraform(struct?: GoogleContainerClusterResourceUsageExportConfigOutputReference | GoogleContainerClusterResourceUsageExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_network_egress_metering: cdktf.booleanToTerraform(struct!.enableNetworkEgressMetering),
    enable_resource_consumption_metering: cdktf.booleanToTerraform(struct!.enableResourceConsumptionMetering),
    bigquery_destination: googleContainerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct!.bigqueryDestination),
  }
}


export function googleContainerClusterResourceUsageExportConfigToHclTerraform(struct?: GoogleContainerClusterResourceUsageExportConfigOutputReference | GoogleContainerClusterResourceUsageExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_network_egress_metering: {
      value: cdktf.booleanToHclTerraform(struct!.enableNetworkEgressMetering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_resource_consumption_metering: {
      value: cdktf.booleanToHclTerraform(struct!.enableResourceConsumptionMetering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_destination: {
      value: googleContainerClusterResourceUsageExportConfigBigqueryDestinationToHclTerraform(struct!.bigqueryDestination),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterResourceUsageExportConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterResourceUsageExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNetworkEgressMetering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkEgressMetering = this._enableNetworkEgressMetering;
    }
    if (this._enableResourceConsumptionMetering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceConsumptionMetering = this._enableResourceConsumptionMetering;
    }
    if (this._bigqueryDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestination = this._bigqueryDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterResourceUsageExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNetworkEgressMetering = undefined;
      this._enableResourceConsumptionMetering = undefined;
      this._bigqueryDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNetworkEgressMetering = value.enableNetworkEgressMetering;
      this._enableResourceConsumptionMetering = value.enableResourceConsumptionMetering;
      this._bigqueryDestination.internalValue = value.bigqueryDestination;
    }
  }

  // enable_network_egress_metering - computed: false, optional: true, required: false
  private _enableNetworkEgressMetering?: boolean | cdktf.IResolvable; 
  public get enableNetworkEgressMetering() {
    return this.getBooleanAttribute('enable_network_egress_metering');
  }
  public set enableNetworkEgressMetering(value: boolean | cdktf.IResolvable) {
    this._enableNetworkEgressMetering = value;
  }
  public resetEnableNetworkEgressMetering() {
    this._enableNetworkEgressMetering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkEgressMeteringInput() {
    return this._enableNetworkEgressMetering;
  }

  // enable_resource_consumption_metering - computed: false, optional: true, required: false
  private _enableResourceConsumptionMetering?: boolean | cdktf.IResolvable; 
  public get enableResourceConsumptionMetering() {
    return this.getBooleanAttribute('enable_resource_consumption_metering');
  }
  public set enableResourceConsumptionMetering(value: boolean | cdktf.IResolvable) {
    this._enableResourceConsumptionMetering = value;
  }
  public resetEnableResourceConsumptionMetering() {
    this._enableResourceConsumptionMetering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceConsumptionMeteringInput() {
    return this._enableResourceConsumptionMetering;
  }

  // bigquery_destination - computed: false, optional: false, required: true
  private _bigqueryDestination = new GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference(this, "bigquery_destination");
  public get bigqueryDestination() {
    return this._bigqueryDestination;
  }
  public putBigqueryDestination(value: GoogleContainerClusterResourceUsageExportConfigBigqueryDestination) {
    this._bigqueryDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationInput() {
    return this._bigqueryDestination.internalValue;
  }
}
export interface GoogleContainerClusterRollbackSafeUpgrade {
  /**
  * A user-defined period that the cluster remains in the rollbackable state. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "604800s" for 7 days. Minimum is 6 hours, maximum is 7 days. If omitted, the two-step upgrade is skipped and a standard one-step upgrade is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#control_plane_soak_duration GoogleContainerCluster#control_plane_soak_duration}
  */
  readonly controlPlaneSoakDuration?: string;
}

export function googleContainerClusterRollbackSafeUpgradeToTerraform(struct?: GoogleContainerClusterRollbackSafeUpgradeOutputReference | GoogleContainerClusterRollbackSafeUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_soak_duration: cdktf.stringToTerraform(struct!.controlPlaneSoakDuration),
  }
}


export function googleContainerClusterRollbackSafeUpgradeToHclTerraform(struct?: GoogleContainerClusterRollbackSafeUpgradeOutputReference | GoogleContainerClusterRollbackSafeUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterRollbackSafeUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterRollbackSafeUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneSoakDuration = this._controlPlaneSoakDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterRollbackSafeUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneSoakDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneSoakDuration = value.controlPlaneSoakDuration;
    }
  }

  // control_plane_soak_duration - computed: false, optional: true, required: false
  private _controlPlaneSoakDuration?: string; 
  public get controlPlaneSoakDuration() {
    return this.getStringAttribute('control_plane_soak_duration');
  }
  public set controlPlaneSoakDuration(value: string) {
    this._controlPlaneSoakDuration = value;
  }
  public resetControlPlaneSoakDuration() {
    this._controlPlaneSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneSoakDurationInput() {
    return this._controlPlaneSoakDuration;
  }
}
export interface GoogleContainerClusterSecretManagerConfigRotationConfig {
  /**
  * Enable the Secret manager auto rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The interval between two consecutive rotations. Default rotation interval is 2 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#rotation_interval GoogleContainerCluster#rotation_interval}
  */
  readonly rotationInterval?: string;
}

export function googleContainerClusterSecretManagerConfigRotationConfigToTerraform(struct?: GoogleContainerClusterSecretManagerConfigRotationConfigOutputReference | GoogleContainerClusterSecretManagerConfigRotationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rotation_interval: cdktf.stringToTerraform(struct!.rotationInterval),
  }
}


export function googleContainerClusterSecretManagerConfigRotationConfigToHclTerraform(struct?: GoogleContainerClusterSecretManagerConfigRotationConfigOutputReference | GoogleContainerClusterSecretManagerConfigRotationConfig): any {
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
    rotation_interval: {
      value: cdktf.stringToHclTerraform(struct!.rotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterSecretManagerConfigRotationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterSecretManagerConfigRotationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationInterval = this._rotationInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterSecretManagerConfigRotationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rotationInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rotationInterval = value.rotationInterval;
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

  // rotation_interval - computed: true, optional: true, required: false
  private _rotationInterval?: string; 
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
  public set rotationInterval(value: string) {
    this._rotationInterval = value;
  }
  public resetRotationInterval() {
    this._rotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }
}
export interface GoogleContainerClusterSecretManagerConfig {
  /**
  * Enable the Secret manager csi component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * rotation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#rotation_config GoogleContainerCluster#rotation_config}
  */
  readonly rotationConfig?: GoogleContainerClusterSecretManagerConfigRotationConfig;
}

export function googleContainerClusterSecretManagerConfigToTerraform(struct?: GoogleContainerClusterSecretManagerConfigOutputReference | GoogleContainerClusterSecretManagerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rotation_config: googleContainerClusterSecretManagerConfigRotationConfigToTerraform(struct!.rotationConfig),
  }
}


export function googleContainerClusterSecretManagerConfigToHclTerraform(struct?: GoogleContainerClusterSecretManagerConfigOutputReference | GoogleContainerClusterSecretManagerConfig): any {
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
    rotation_config: {
      value: googleContainerClusterSecretManagerConfigRotationConfigToHclTerraform(struct!.rotationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterSecretManagerConfigRotationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterSecretManagerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterSecretManagerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationConfig = this._rotationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterSecretManagerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rotationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rotationConfig.internalValue = value.rotationConfig;
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

  // rotation_config - computed: false, optional: true, required: false
  private _rotationConfig = new GoogleContainerClusterSecretManagerConfigRotationConfigOutputReference(this, "rotation_config");
  public get rotationConfig() {
    return this._rotationConfig;
  }
  public putRotationConfig(value: GoogleContainerClusterSecretManagerConfigRotationConfig) {
    this._rotationConfig.internalValue = value;
  }
  public resetRotationConfig() {
    this._rotationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationConfigInput() {
    return this._rotationConfig.internalValue;
  }
}
export interface GoogleContainerClusterSecretSyncConfigRotationConfig {
  /**
  * Enable the Secret sync auto rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The interval between two consecutive rotations. Default rotation interval is 2 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#rotation_interval GoogleContainerCluster#rotation_interval}
  */
  readonly rotationInterval?: string;
}

export function googleContainerClusterSecretSyncConfigRotationConfigToTerraform(struct?: GoogleContainerClusterSecretSyncConfigRotationConfigOutputReference | GoogleContainerClusterSecretSyncConfigRotationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rotation_interval: cdktf.stringToTerraform(struct!.rotationInterval),
  }
}


export function googleContainerClusterSecretSyncConfigRotationConfigToHclTerraform(struct?: GoogleContainerClusterSecretSyncConfigRotationConfigOutputReference | GoogleContainerClusterSecretSyncConfigRotationConfig): any {
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
    rotation_interval: {
      value: cdktf.stringToHclTerraform(struct!.rotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterSecretSyncConfigRotationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterSecretSyncConfigRotationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationInterval = this._rotationInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterSecretSyncConfigRotationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rotationInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rotationInterval = value.rotationInterval;
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

  // rotation_interval - computed: true, optional: true, required: false
  private _rotationInterval?: string; 
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
  public set rotationInterval(value: string) {
    this._rotationInterval = value;
  }
  public resetRotationInterval() {
    this._rotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }
}
export interface GoogleContainerClusterSecretSyncConfig {
  /**
  * Enable the Sync as k8s secret add-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * rotation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#rotation_config GoogleContainerCluster#rotation_config}
  */
  readonly rotationConfig?: GoogleContainerClusterSecretSyncConfigRotationConfig;
}

export function googleContainerClusterSecretSyncConfigToTerraform(struct?: GoogleContainerClusterSecretSyncConfigOutputReference | GoogleContainerClusterSecretSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rotation_config: googleContainerClusterSecretSyncConfigRotationConfigToTerraform(struct!.rotationConfig),
  }
}


export function googleContainerClusterSecretSyncConfigToHclTerraform(struct?: GoogleContainerClusterSecretSyncConfigOutputReference | GoogleContainerClusterSecretSyncConfig): any {
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
    rotation_config: {
      value: googleContainerClusterSecretSyncConfigRotationConfigToHclTerraform(struct!.rotationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterSecretSyncConfigRotationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterSecretSyncConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterSecretSyncConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationConfig = this._rotationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterSecretSyncConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rotationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rotationConfig.internalValue = value.rotationConfig;
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

  // rotation_config - computed: false, optional: true, required: false
  private _rotationConfig = new GoogleContainerClusterSecretSyncConfigRotationConfigOutputReference(this, "rotation_config");
  public get rotationConfig() {
    return this._rotationConfig;
  }
  public putRotationConfig(value: GoogleContainerClusterSecretSyncConfigRotationConfig) {
    this._rotationConfig.internalValue = value;
  }
  public resetRotationConfig() {
    this._rotationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationConfigInput() {
    return this._rotationConfig.internalValue;
  }
}
