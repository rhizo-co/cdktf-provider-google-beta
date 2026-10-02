import * as cdktf from 'cdktf';
export interface GoogleContainerClusterSecurityPostureConfig {
  /**
  * Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include DISABLED, BASIC, and ENTERPRISE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode?: string;
  /**
  * Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include VULNERABILITY_DISABLED, VULNERABILITY_BASIC and VULNERABILITY_ENTERPRISE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#vulnerability_mode GoogleContainerCluster#vulnerability_mode}
  */
  readonly vulnerabilityMode?: string;
}

export function googleContainerClusterSecurityPostureConfigToTerraform(struct?: GoogleContainerClusterSecurityPostureConfigOutputReference | GoogleContainerClusterSecurityPostureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    vulnerability_mode: cdktf.stringToTerraform(struct!.vulnerabilityMode),
  }
}


export function googleContainerClusterSecurityPostureConfigToHclTerraform(struct?: GoogleContainerClusterSecurityPostureConfigOutputReference | GoogleContainerClusterSecurityPostureConfig): any {
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
    vulnerability_mode: {
      value: cdktf.stringToHclTerraform(struct!.vulnerabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterSecurityPostureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterSecurityPostureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._vulnerabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityMode = this._vulnerabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterSecurityPostureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._vulnerabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._vulnerabilityMode = value.vulnerabilityMode;
    }
  }

  // mode - computed: true, optional: true, required: false
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

  // vulnerability_mode - computed: true, optional: true, required: false
  private _vulnerabilityMode?: string; 
  public get vulnerabilityMode() {
    return this.getStringAttribute('vulnerability_mode');
  }
  public set vulnerabilityMode(value: string) {
    this._vulnerabilityMode = value;
  }
  public resetVulnerabilityMode() {
    this._vulnerabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityModeInput() {
    return this._vulnerabilityMode;
  }
}
export interface GoogleContainerClusterServiceExternalIpsConfig {
  /**
  * When enabled, services with external ips specified will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterServiceExternalIpsConfigToTerraform(struct?: GoogleContainerClusterServiceExternalIpsConfigOutputReference | GoogleContainerClusterServiceExternalIpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterServiceExternalIpsConfigToHclTerraform(struct?: GoogleContainerClusterServiceExternalIpsConfigOutputReference | GoogleContainerClusterServiceExternalIpsConfig): any {
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

export class GoogleContainerClusterServiceExternalIpsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterServiceExternalIpsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterServiceExternalIpsConfig | undefined) {
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
export interface GoogleContainerClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#create GoogleContainerCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#delete GoogleContainerCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#read GoogleContainerCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#update GoogleContainerCluster#update}
  */
  readonly update?: string;
}

export function googleContainerClusterTimeoutsToTerraform(struct?: GoogleContainerClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function googleContainerClusterTimeoutsToHclTerraform(struct?: GoogleContainerClusterTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class GoogleContainerClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleContainerClusterTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface GoogleContainerClusterTpuConfig {
  /**
  * Whether Cloud TPU integration is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Whether to use service networking for Cloud TPU or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#use_service_networking GoogleContainerCluster#use_service_networking}
  */
  readonly useServiceNetworking?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterTpuConfigToTerraform(struct?: GoogleContainerClusterTpuConfigOutputReference | GoogleContainerClusterTpuConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    use_service_networking: cdktf.booleanToTerraform(struct!.useServiceNetworking),
  }
}


export function googleContainerClusterTpuConfigToHclTerraform(struct?: GoogleContainerClusterTpuConfigOutputReference | GoogleContainerClusterTpuConfig): any {
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
    use_service_networking: {
      value: cdktf.booleanToHclTerraform(struct!.useServiceNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterTpuConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterTpuConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._useServiceNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServiceNetworking = this._useServiceNetworking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterTpuConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._useServiceNetworking = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._useServiceNetworking = value.useServiceNetworking;
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

  // ipv4_cidr_block - computed: true, optional: false, required: false
  public get ipv4CidrBlock() {
    return this.getStringAttribute('ipv4_cidr_block');
  }

  // use_service_networking - computed: false, optional: true, required: false
  private _useServiceNetworking?: boolean | cdktf.IResolvable; 
  public get useServiceNetworking() {
    return this.getBooleanAttribute('use_service_networking');
  }
  public set useServiceNetworking(value: boolean | cdktf.IResolvable) {
    this._useServiceNetworking = value;
  }
  public resetUseServiceNetworking() {
    this._useServiceNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceNetworkingInput() {
    return this._useServiceNetworking;
  }
}
export interface GoogleContainerClusterUserManagedKeysConfig {
  /**
  * The Certificate Authority Service caPool to use for the aggreation CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#aggregation_ca GoogleContainerCluster#aggregation_ca}
  */
  readonly aggregationCa?: string;
  /**
  * The Certificate Authority Service caPool to use for the cluster CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#cluster_ca GoogleContainerCluster#cluster_ca}
  */
  readonly clusterCa?: string;
  /**
  * The Cloud KMS cryptoKey to use for Confidential Hyperdisk on the control plane nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#control_plane_disk_encryption_key GoogleContainerCluster#control_plane_disk_encryption_key}
  */
  readonly controlPlaneDiskEncryptionKey?: string;
  /**
  * The Certificate Authority Service caPool to use for the etcd API CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#etcd_api_ca GoogleContainerCluster#etcd_api_ca}
  */
  readonly etcdApiCa?: string;
  /**
  * The Certificate Authority Service caPool to use for the etcd peer CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#etcd_peer_ca GoogleContainerCluster#etcd_peer_ca}
  */
  readonly etcdPeerCa?: string;
  /**
  * Resource path of the Cloud KMS cryptoKey to use for encryption of internal etcd backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#gkeops_etcd_backup_encryption_key GoogleContainerCluster#gkeops_etcd_backup_encryption_key}
  */
  readonly gkeopsEtcdBackupEncryptionKey?: string;
  /**
  * The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#service_account_signing_keys GoogleContainerCluster#service_account_signing_keys}
  */
  readonly serviceAccountSigningKeys?: string[];
  /**
  * The Cloud KMS cryptoKeyVersions to use for verifying service account JWTs issued by this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#service_account_verification_keys GoogleContainerCluster#service_account_verification_keys}
  */
  readonly serviceAccountVerificationKeys?: string[];
}

export function googleContainerClusterUserManagedKeysConfigToTerraform(struct?: GoogleContainerClusterUserManagedKeysConfigOutputReference | GoogleContainerClusterUserManagedKeysConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_ca: cdktf.stringToTerraform(struct!.aggregationCa),
    cluster_ca: cdktf.stringToTerraform(struct!.clusterCa),
    control_plane_disk_encryption_key: cdktf.stringToTerraform(struct!.controlPlaneDiskEncryptionKey),
    etcd_api_ca: cdktf.stringToTerraform(struct!.etcdApiCa),
    etcd_peer_ca: cdktf.stringToTerraform(struct!.etcdPeerCa),
    gkeops_etcd_backup_encryption_key: cdktf.stringToTerraform(struct!.gkeopsEtcdBackupEncryptionKey),
    service_account_signing_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountSigningKeys),
    service_account_verification_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountVerificationKeys),
  }
}


export function googleContainerClusterUserManagedKeysConfigToHclTerraform(struct?: GoogleContainerClusterUserManagedKeysConfigOutputReference | GoogleContainerClusterUserManagedKeysConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_ca: {
      value: cdktf.stringToHclTerraform(struct!.aggregationCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ca: {
      value: cdktf.stringToHclTerraform(struct!.clusterCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_disk_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneDiskEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_api_ca: {
      value: cdktf.stringToHclTerraform(struct!.etcdApiCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_peer_ca: {
      value: cdktf.stringToHclTerraform(struct!.etcdPeerCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gkeops_etcd_backup_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.gkeopsEtcdBackupEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_signing_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccountSigningKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_account_verification_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccountVerificationKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterUserManagedKeysConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterUserManagedKeysConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationCa = this._aggregationCa;
    }
    if (this._clusterCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCa = this._clusterCa;
    }
    if (this._controlPlaneDiskEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneDiskEncryptionKey = this._controlPlaneDiskEncryptionKey;
    }
    if (this._etcdApiCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdApiCa = this._etcdApiCa;
    }
    if (this._etcdPeerCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdPeerCa = this._etcdPeerCa;
    }
    if (this._gkeopsEtcdBackupEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeopsEtcdBackupEncryptionKey = this._gkeopsEtcdBackupEncryptionKey;
    }
    if (this._serviceAccountSigningKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountSigningKeys = this._serviceAccountSigningKeys;
    }
    if (this._serviceAccountVerificationKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountVerificationKeys = this._serviceAccountVerificationKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterUserManagedKeysConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationCa = undefined;
      this._clusterCa = undefined;
      this._controlPlaneDiskEncryptionKey = undefined;
      this._etcdApiCa = undefined;
      this._etcdPeerCa = undefined;
      this._gkeopsEtcdBackupEncryptionKey = undefined;
      this._serviceAccountSigningKeys = undefined;
      this._serviceAccountVerificationKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationCa = value.aggregationCa;
      this._clusterCa = value.clusterCa;
      this._controlPlaneDiskEncryptionKey = value.controlPlaneDiskEncryptionKey;
      this._etcdApiCa = value.etcdApiCa;
      this._etcdPeerCa = value.etcdPeerCa;
      this._gkeopsEtcdBackupEncryptionKey = value.gkeopsEtcdBackupEncryptionKey;
      this._serviceAccountSigningKeys = value.serviceAccountSigningKeys;
      this._serviceAccountVerificationKeys = value.serviceAccountVerificationKeys;
    }
  }

  // aggregation_ca - computed: false, optional: true, required: false
  private _aggregationCa?: string; 
  public get aggregationCa() {
    return this.getStringAttribute('aggregation_ca');
  }
  public set aggregationCa(value: string) {
    this._aggregationCa = value;
  }
  public resetAggregationCa() {
    this._aggregationCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationCaInput() {
    return this._aggregationCa;
  }

  // cluster_ca - computed: false, optional: true, required: false
  private _clusterCa?: string; 
  public get clusterCa() {
    return this.getStringAttribute('cluster_ca');
  }
  public set clusterCa(value: string) {
    this._clusterCa = value;
  }
  public resetClusterCa() {
    this._clusterCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaInput() {
    return this._clusterCa;
  }

  // control_plane_disk_encryption_key - computed: false, optional: true, required: false
  private _controlPlaneDiskEncryptionKey?: string; 
  public get controlPlaneDiskEncryptionKey() {
    return this.getStringAttribute('control_plane_disk_encryption_key');
  }
  public set controlPlaneDiskEncryptionKey(value: string) {
    this._controlPlaneDiskEncryptionKey = value;
  }
  public resetControlPlaneDiskEncryptionKey() {
    this._controlPlaneDiskEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneDiskEncryptionKeyInput() {
    return this._controlPlaneDiskEncryptionKey;
  }

  // control_plane_disk_encryption_key_versions - computed: true, optional: false, required: false
  public get controlPlaneDiskEncryptionKeyVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('control_plane_disk_encryption_key_versions'));
  }

  // etcd_api_ca - computed: false, optional: true, required: false
  private _etcdApiCa?: string; 
  public get etcdApiCa() {
    return this.getStringAttribute('etcd_api_ca');
  }
  public set etcdApiCa(value: string) {
    this._etcdApiCa = value;
  }
  public resetEtcdApiCa() {
    this._etcdApiCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdApiCaInput() {
    return this._etcdApiCa;
  }

  // etcd_peer_ca - computed: false, optional: true, required: false
  private _etcdPeerCa?: string; 
  public get etcdPeerCa() {
    return this.getStringAttribute('etcd_peer_ca');
  }
  public set etcdPeerCa(value: string) {
    this._etcdPeerCa = value;
  }
  public resetEtcdPeerCa() {
    this._etcdPeerCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdPeerCaInput() {
    return this._etcdPeerCa;
  }

  // gkeops_etcd_backup_encryption_key - computed: false, optional: true, required: false
  private _gkeopsEtcdBackupEncryptionKey?: string; 
  public get gkeopsEtcdBackupEncryptionKey() {
    return this.getStringAttribute('gkeops_etcd_backup_encryption_key');
  }
  public set gkeopsEtcdBackupEncryptionKey(value: string) {
    this._gkeopsEtcdBackupEncryptionKey = value;
  }
  public resetGkeopsEtcdBackupEncryptionKey() {
    this._gkeopsEtcdBackupEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeopsEtcdBackupEncryptionKeyInput() {
    return this._gkeopsEtcdBackupEncryptionKey;
  }

  // service_account_signing_keys - computed: false, optional: true, required: false
  private _serviceAccountSigningKeys?: string[]; 
  public get serviceAccountSigningKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_signing_keys'));
  }
  public set serviceAccountSigningKeys(value: string[]) {
    this._serviceAccountSigningKeys = value;
  }
  public resetServiceAccountSigningKeys() {
    this._serviceAccountSigningKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountSigningKeysInput() {
    return this._serviceAccountSigningKeys;
  }

  // service_account_verification_keys - computed: false, optional: true, required: false
  private _serviceAccountVerificationKeys?: string[]; 
  public get serviceAccountVerificationKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_verification_keys'));
  }
  public set serviceAccountVerificationKeys(value: string[]) {
    this._serviceAccountVerificationKeys = value;
  }
  public resetServiceAccountVerificationKeys() {
    this._serviceAccountVerificationKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountVerificationKeysInput() {
    return this._serviceAccountVerificationKeys;
  }
}
export interface GoogleContainerClusterVerticalPodAutoscaling {
  /**
  * Enables vertical pod autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterVerticalPodAutoscalingToTerraform(struct?: GoogleContainerClusterVerticalPodAutoscalingOutputReference | GoogleContainerClusterVerticalPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterVerticalPodAutoscalingToHclTerraform(struct?: GoogleContainerClusterVerticalPodAutoscalingOutputReference | GoogleContainerClusterVerticalPodAutoscaling): any {
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

export class GoogleContainerClusterVerticalPodAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterVerticalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterVerticalPodAutoscaling | undefined) {
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
export interface GoogleContainerClusterWorkloadAltsConfig {
  /**
  * Whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workloadPool must be non-empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#enable_alts GoogleContainerCluster#enable_alts}
  */
  readonly enableAlts: boolean | cdktf.IResolvable;
}

export function googleContainerClusterWorkloadAltsConfigToTerraform(struct?: GoogleContainerClusterWorkloadAltsConfigOutputReference | GoogleContainerClusterWorkloadAltsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_alts: cdktf.booleanToTerraform(struct!.enableAlts),
  }
}


export function googleContainerClusterWorkloadAltsConfigToHclTerraform(struct?: GoogleContainerClusterWorkloadAltsConfigOutputReference | GoogleContainerClusterWorkloadAltsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_alts: {
      value: cdktf.booleanToHclTerraform(struct!.enableAlts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterWorkloadAltsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterWorkloadAltsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAlts !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAlts = this._enableAlts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterWorkloadAltsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAlts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAlts = value.enableAlts;
    }
  }

  // enable_alts - computed: false, optional: false, required: true
  private _enableAlts?: boolean | cdktf.IResolvable; 
  public get enableAlts() {
    return this.getBooleanAttribute('enable_alts');
  }
  public set enableAlts(value: boolean | cdktf.IResolvable) {
    this._enableAlts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAltsInput() {
    return this._enableAlts;
  }
}
export interface GoogleContainerClusterWorkloadIdentityConfig {
  /**
  * The workload pool to attach all Kubernetes service accounts to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_container_cluster#workload_pool GoogleContainerCluster#workload_pool}
  */
  readonly workloadPool?: string;
}

export function googleContainerClusterWorkloadIdentityConfigToTerraform(struct?: GoogleContainerClusterWorkloadIdentityConfigOutputReference | GoogleContainerClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workload_pool: cdktf.stringToTerraform(struct!.workloadPool),
  }
}


export function googleContainerClusterWorkloadIdentityConfigToHclTerraform(struct?: GoogleContainerClusterWorkloadIdentityConfigOutputReference | GoogleContainerClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workload_pool: {
      value: cdktf.stringToHclTerraform(struct!.workloadPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterWorkloadIdentityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadPool = this._workloadPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterWorkloadIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workloadPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workloadPool = value.workloadPool;
    }
  }

  // workload_pool - computed: false, optional: true, required: false
  private _workloadPool?: string; 
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
  public set workloadPool(value: string) {
    this._workloadPool = value;
  }
  public resetWorkloadPool() {
    this._workloadPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadPoolInput() {
    return this._workloadPool;
  }
}
