// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBiglakeIcebergCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * The catalog type of the IcebergCatalog.
  * * 'CATALOG_TYPE_GCS_BUCKET': Google Cloud Storage bucket catalog type.
  * * 'CATALOG_TYPE_BIGLAKE': BigLake catalog type.
  * * 'CATALOG_TYPE_FEDERATED': Federated catalog type, for integrating with external Iceberg REST Catalogs such as Databricks Unity Catalog or AWS Glue. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE", "CATALOG_TYPE_FEDERATED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#catalog_type GoogleBiglakeIcebergCatalog#catalog_type}
  */
  readonly catalogType: string;
  /**
  * The credential mode used for the catalog. CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#credential_mode GoogleBiglakeIcebergCatalog#credential_mode}
  */
  readonly credentialMode?: string;
  /**
  * The default storage location for the catalog, e.g., 'gs://my-bucket'.
  * Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET.
  * Required when the catalog type is CATALOG_TYPE_BIGLAKE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#default_location GoogleBiglakeIcebergCatalog#default_location}
  */
  readonly defaultLocation?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#deletion_policy GoogleBiglakeIcebergCatalog#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A user-provided description of the catalog. Maximum 1024 UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#description GoogleBiglakeIcebergCatalog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the IcebergCatalog.
  * For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
  * exact same value of the GCS bucket's name. For example, for a bucket:
  * gs://bucket-name, the catalog name will be exactly "bucket-name".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#name GoogleBiglakeIcebergCatalog#name}
  */
  readonly name: string;
  /**
  * The primary location for mirroring the remote catalog metadata. It must be
  * a BigLake-supported location, and it should be proximate to the remote
  * catalog's location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#primary_location GoogleBiglakeIcebergCatalog#primary_location}
  */
  readonly primaryLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}
  */
  readonly project?: string;
  /**
  * federated_catalog_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#federated_catalog_options GoogleBiglakeIcebergCatalog#federated_catalog_options}
  */
  readonly federatedCatalogOptions?: GoogleBiglakeIcebergCatalogFederatedCatalogOptions;
  /**
  * restricted_locations_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#restricted_locations_config GoogleBiglakeIcebergCatalog#restricted_locations_config}
  */
  readonly restrictedLocationsConfig?: GoogleBiglakeIcebergCatalogRestrictedLocationsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#timeouts GoogleBiglakeIcebergCatalog#timeouts}
  */
  readonly timeouts?: GoogleBiglakeIcebergCatalogTimeouts;
}
export interface GoogleBiglakeIcebergCatalogReplicas {
}

export function googleBiglakeIcebergCatalogReplicasToTerraform(struct?: GoogleBiglakeIcebergCatalogReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleBiglakeIcebergCatalogReplicasToHclTerraform(struct?: GoogleBiglakeIcebergCatalogReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleBiglakeIcebergCatalogReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBiglakeIcebergCatalogReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeIcebergCatalogReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleBiglakeIcebergCatalogReplicasList extends cdktf.ComplexList {

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
  public get(index: number): GoogleBiglakeIcebergCatalogReplicasOutputReference {
    return new GoogleBiglakeIcebergCatalogReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus {
}

export function googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusToTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusToHclTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference {
    return new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus {
}

export function googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusToTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusToHclTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
}

export class GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference {
    return new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo {
  /**
  * The AWS region where the Glue catalog is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#aws_region GoogleBiglakeIcebergCatalog#aws_region}
  */
  readonly awsRegion: string;
  /**
  * The ARN of the AWS IAM role to assume for accessing the Glue catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#aws_role_arn GoogleBiglakeIcebergCatalog#aws_role_arn}
  */
  readonly awsRoleArn: string;
  /**
  * The AWS Glue warehouse identifier (account ID or S3 table bucket).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#warehouse GoogleBiglakeIcebergCatalog#warehouse}
  */
  readonly warehouse: string;
}

export function googleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoToTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_role_arn: cdktf.stringToTerraform(struct!.awsRoleArn),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}


export function googleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoToHclTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse: {
      value: cdktf.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoleArn = this._awsRoleArn;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._awsRoleArn = undefined;
      this._warehouse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegion = value.awsRegion;
      this._awsRoleArn = value.awsRoleArn;
      this._warehouse = value.warehouse;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_role_arn - computed: false, optional: false, required: true
  private _awsRoleArn?: string; 
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }
  public set awsRoleArn(value: string) {
    this._awsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnInput() {
    return this._awsRoleArn;
  }

  // warehouse - computed: false, optional: false, required: true
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule {
  /**
  * The interval between metadata refreshes, expressed as a duration
  * string (e.g., '300s').
  * The value must be at least 300s or 0s to disable refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_interval GoogleBiglakeIcebergCatalog#refresh_interval}
  */
  readonly refreshInterval?: string;
}

export function googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleToTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
  }
}


export function googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleToHclTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshInterval = value.refreshInterval;
    }
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }
}
export interface GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope {
  /**
  * A list of namespace filters to limit which namespaces are
  * synchronized from the remote catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#namespace_filters GoogleBiglakeIcebergCatalog#namespace_filters}
  */
  readonly namespaceFilters?: string[];
}

export function googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeToTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaceFilters),
  }
}


export function googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeToHclTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaceFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceFilters = this._namespaceFilters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaceFilters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaceFilters = value.namespaceFilters;
    }
  }

  // namespace_filters - computed: false, optional: true, required: false
  private _namespaceFilters?: string[]; 
  public get namespaceFilters() {
    return this.getListAttribute('namespace_filters');
  }
  public set namespaceFilters(value: string[]) {
    this._namespaceFilters = value;
  }
  public resetNamespaceFilters() {
    this._namespaceFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceFiltersInput() {
    return this._namespaceFilters;
  }
}
export interface GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions {
  /**
  * refresh_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_schedule GoogleBiglakeIcebergCatalog#refresh_schedule}
  */
  readonly refreshSchedule?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule;
  /**
  * refresh_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_scope GoogleBiglakeIcebergCatalog#refresh_scope}
  */
  readonly refreshScope?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope;
}

export function googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsToTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_schedule: googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleToTerraform(struct!.refreshSchedule),
    refresh_scope: googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeToTerraform(struct!.refreshScope),
  }
}


export function googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsToHclTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refresh_schedule: {
      value: googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleToHclTerraform(struct!.refreshSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleList",
    },
    refresh_scope: {
      value: googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeToHclTerraform(struct!.refreshScope),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshSchedule = this._refreshSchedule?.internalValue;
    }
    if (this._refreshScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshScope = this._refreshScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshSchedule.internalValue = undefined;
      this._refreshScope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshSchedule.internalValue = value.refreshSchedule;
      this._refreshScope.internalValue = value.refreshScope;
    }
  }

  // refresh_schedule - computed: false, optional: true, required: false
  private _refreshSchedule = new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference(this, "refresh_schedule");
  public get refreshSchedule() {
    return this._refreshSchedule;
  }
  public putRefreshSchedule(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule) {
    this._refreshSchedule.internalValue = value;
  }
  public resetRefreshSchedule() {
    this._refreshSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshScheduleInput() {
    return this._refreshSchedule.internalValue;
  }

  // refresh_scope - computed: false, optional: true, required: false
  private _refreshScope = new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference(this, "refresh_scope");
  public get refreshScope() {
    return this._refreshScope;
  }
  public putRefreshScope(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope) {
    this._refreshScope.internalValue = value;
  }
  public resetRefreshScope() {
    this._refreshScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshScopeInput() {
    return this._refreshScope.internalValue;
  }
}
export interface GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo {
  /**
  * The name of the catalog within the Unity Catalog instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#catalog_name GoogleBiglakeIcebergCatalog#catalog_name}
  */
  readonly catalogName: string;
  /**
  * The Databricks workspace instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#instance_name GoogleBiglakeIcebergCatalog#instance_name}
  */
  readonly instanceName: string;
  /**
  * The application ID of the Databricks service principal for OIDC authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#service_principal_application_id GoogleBiglakeIcebergCatalog#service_principal_application_id}
  */
  readonly servicePrincipalApplicationId?: string;
}

export function googleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoToTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    service_principal_application_id: cdktf.stringToTerraform(struct!.servicePrincipalApplicationId),
  }
}


export function googleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoToHclTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal_application_id: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipalApplicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._servicePrincipalApplicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalApplicationId = this._servicePrincipalApplicationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._instanceName = undefined;
      this._servicePrincipalApplicationId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._instanceName = value.instanceName;
      this._servicePrincipalApplicationId = value.servicePrincipalApplicationId;
    }
  }

  // catalog_name - computed: false, optional: false, required: true
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // service_principal_application_id - computed: false, optional: true, required: false
  private _servicePrincipalApplicationId?: string; 
  public get servicePrincipalApplicationId() {
    return this.getStringAttribute('service_principal_application_id');
  }
  public set servicePrincipalApplicationId(value: string) {
    this._servicePrincipalApplicationId = value;
  }
  public resetServicePrincipalApplicationId() {
    this._servicePrincipalApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalApplicationIdInput() {
    return this._servicePrincipalApplicationId;
  }
}
export interface GoogleBiglakeIcebergCatalogFederatedCatalogOptions {
  /**
  * The secret resource name in Secret Manager, in the format
  * 'projects/{projectId}/locations/{location}/secrets/{secret_id}'.
  * Used to store credentials for authenticating with the remote catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#secret_name GoogleBiglakeIcebergCatalog#secret_name}
  */
  readonly secretName?: string;
  /**
  * The Service Directory service name for private network connectivity
  * through Cross-Cloud Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#service_directory_name GoogleBiglakeIcebergCatalog#service_directory_name}
  */
  readonly serviceDirectoryName?: string;
  /**
  * glue_catalog_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#glue_catalog_info GoogleBiglakeIcebergCatalog#glue_catalog_info}
  */
  readonly glueCatalogInfo?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo;
  /**
  * refresh_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_options GoogleBiglakeIcebergCatalog#refresh_options}
  */
  readonly refreshOptions?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions;
  /**
  * unity_catalog_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#unity_catalog_info GoogleBiglakeIcebergCatalog#unity_catalog_info}
  */
  readonly unityCatalogInfo?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo;
}

export function googleBiglakeIcebergCatalogFederatedCatalogOptionsToTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    service_directory_name: cdktf.stringToTerraform(struct!.serviceDirectoryName),
    glue_catalog_info: googleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoToTerraform(struct!.glueCatalogInfo),
    refresh_options: googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsToTerraform(struct!.refreshOptions),
    unity_catalog_info: googleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoToTerraform(struct!.unityCatalogInfo),
  }
}


export function googleBiglakeIcebergCatalogFederatedCatalogOptionsToHclTerraform(struct?: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference | GoogleBiglakeIcebergCatalogFederatedCatalogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceDirectoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue_catalog_info: {
      value: googleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoToHclTerraform(struct!.glueCatalogInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoList",
    },
    refresh_options: {
      value: googleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsToHclTerraform(struct!.refreshOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsList",
    },
    unity_catalog_info: {
      value: googleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoToHclTerraform(struct!.unityCatalogInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeIcebergCatalogFederatedCatalogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._serviceDirectoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryName = this._serviceDirectoryName;
    }
    if (this._glueCatalogInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueCatalogInfo = this._glueCatalogInfo?.internalValue;
    }
    if (this._refreshOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshOptions = this._refreshOptions?.internalValue;
    }
    if (this._unityCatalogInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unityCatalogInfo = this._unityCatalogInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
      this._serviceDirectoryName = undefined;
      this._glueCatalogInfo.internalValue = undefined;
      this._refreshOptions.internalValue = undefined;
      this._unityCatalogInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
      this._serviceDirectoryName = value.serviceDirectoryName;
      this._glueCatalogInfo.internalValue = value.glueCatalogInfo;
      this._refreshOptions.internalValue = value.refreshOptions;
      this._unityCatalogInfo.internalValue = value.unityCatalogInfo;
    }
  }

  // refresh_status - computed: true, optional: false, required: false
  private _refreshStatus = new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList(this, "refresh_status", false);
  public get refreshStatus() {
    return this._refreshStatus;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // service_directory_name - computed: false, optional: true, required: false
  private _serviceDirectoryName?: string; 
  public get serviceDirectoryName() {
    return this.getStringAttribute('service_directory_name');
  }
  public set serviceDirectoryName(value: string) {
    this._serviceDirectoryName = value;
  }
  public resetServiceDirectoryName() {
    this._serviceDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryNameInput() {
    return this._serviceDirectoryName;
  }

  // glue_catalog_info - computed: false, optional: true, required: false
  private _glueCatalogInfo = new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference(this, "glue_catalog_info");
  public get glueCatalogInfo() {
    return this._glueCatalogInfo;
  }
  public putGlueCatalogInfo(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo) {
    this._glueCatalogInfo.internalValue = value;
  }
  public resetGlueCatalogInfo() {
    this._glueCatalogInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueCatalogInfoInput() {
    return this._glueCatalogInfo.internalValue;
  }

  // refresh_options - computed: false, optional: true, required: false
  private _refreshOptions = new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference(this, "refresh_options");
  public get refreshOptions() {
    return this._refreshOptions;
  }
  public putRefreshOptions(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions) {
    this._refreshOptions.internalValue = value;
  }
  public resetRefreshOptions() {
    this._refreshOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshOptionsInput() {
    return this._refreshOptions.internalValue;
  }

  // unity_catalog_info - computed: false, optional: true, required: false
  private _unityCatalogInfo = new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference(this, "unity_catalog_info");
  public get unityCatalogInfo() {
    return this._unityCatalogInfo;
  }
  public putUnityCatalogInfo(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo) {
    this._unityCatalogInfo.internalValue = value;
  }
  public resetUnityCatalogInfo() {
    this._unityCatalogInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unityCatalogInfoInput() {
    return this._unityCatalogInfo.internalValue;
  }
}
export interface GoogleBiglakeIcebergCatalogRestrictedLocationsConfig {
  /**
  * A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are
  * permitted for use by resources within this catalog. Each entry can be
  * either a GCS bucket or a path within it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#restricted_locations GoogleBiglakeIcebergCatalog#restricted_locations}
  */
  readonly restrictedLocations?: string[];
}

export function googleBiglakeIcebergCatalogRestrictedLocationsConfigToTerraform(struct?: GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference | GoogleBiglakeIcebergCatalogRestrictedLocationsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restricted_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedLocations),
  }
}


export function googleBiglakeIcebergCatalogRestrictedLocationsConfigToHclTerraform(struct?: GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference | GoogleBiglakeIcebergCatalogRestrictedLocationsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restricted_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeIcebergCatalogRestrictedLocationsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedLocations = this._restrictedLocations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeIcebergCatalogRestrictedLocationsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictedLocations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictedLocations = value.restrictedLocations;
    }
  }

  // restricted_locations - computed: false, optional: true, required: false
  private _restrictedLocations?: string[]; 
  public get restrictedLocations() {
    return this.getListAttribute('restricted_locations');
  }
  public set restrictedLocations(value: string[]) {
    this._restrictedLocations = value;
  }
  public resetRestrictedLocations() {
    this._restrictedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedLocationsInput() {
    return this._restrictedLocations;
  }
}
export interface GoogleBiglakeIcebergCatalogTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#create GoogleBiglakeIcebergCatalog#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#delete GoogleBiglakeIcebergCatalog#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#update GoogleBiglakeIcebergCatalog#update}
  */
  readonly update?: string;
}

export function googleBiglakeIcebergCatalogTimeoutsToTerraform(struct?: GoogleBiglakeIcebergCatalogTimeouts | cdktf.IResolvable): any {
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


export function googleBiglakeIcebergCatalogTimeoutsToHclTerraform(struct?: GoogleBiglakeIcebergCatalogTimeouts | cdktf.IResolvable): any {
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

export class GoogleBiglakeIcebergCatalogTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBiglakeIcebergCatalogTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBiglakeIcebergCatalogTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog google_biglake_iceberg_catalog}
*/
export class GoogleBiglakeIcebergCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_biglake_iceberg_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleBiglakeIcebergCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBiglakeIcebergCatalog to import
  * @param importFromId The id of the existing GoogleBiglakeIcebergCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBiglakeIcebergCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_biglake_iceberg_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog google_biglake_iceberg_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBiglakeIcebergCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBiglakeIcebergCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'google_biglake_iceberg_catalog',
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
    this._catalogType = config.catalogType;
    this._credentialMode = config.credentialMode;
    this._defaultLocation = config.defaultLocation;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._primaryLocation = config.primaryLocation;
    this._project = config.project;
    this._federatedCatalogOptions.internalValue = config.federatedCatalogOptions;
    this._restrictedLocationsConfig.internalValue = config.restrictedLocationsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // biglake_service_account - computed: true, optional: false, required: false
  public get biglakeServiceAccount() {
    return this.getStringAttribute('biglake_service_account');
  }

  // biglake_service_account_id - computed: true, optional: false, required: false
  public get biglakeServiceAccountId() {
    return this.getStringAttribute('biglake_service_account_id');
  }

  // catalog_type - computed: false, optional: false, required: true
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // credential_mode - computed: true, optional: true, required: false
  private _credentialMode?: string; 
  public get credentialMode() {
    return this.getStringAttribute('credential_mode');
  }
  public set credentialMode(value: string) {
    this._credentialMode = value;
  }
  public resetCredentialMode() {
    this._credentialMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialModeInput() {
    return this._credentialMode;
  }

  // default_location - computed: true, optional: true, required: false
  private _defaultLocation?: string; 
  public get defaultLocation() {
    return this.getStringAttribute('default_location');
  }
  public set defaultLocation(value: string) {
    this._defaultLocation = value;
  }
  public resetDefaultLocation() {
    this._defaultLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocationInput() {
    return this._defaultLocation;
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

  // primary_location - computed: false, optional: true, required: false
  private _primaryLocation?: string; 
  public get primaryLocation() {
    return this.getStringAttribute('primary_location');
  }
  public set primaryLocation(value: string) {
    this._primaryLocation = value;
  }
  public resetPrimaryLocation() {
    this._primaryLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryLocationInput() {
    return this._primaryLocation;
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

  // replicas - computed: true, optional: false, required: false
  private _replicas = new GoogleBiglakeIcebergCatalogReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }

  // storage_regions - computed: true, optional: false, required: false
  public get storageRegions() {
    return this.getListAttribute('storage_regions');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // federated_catalog_options - computed: false, optional: true, required: false
  private _federatedCatalogOptions = new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference(this, "federated_catalog_options");
  public get federatedCatalogOptions() {
    return this._federatedCatalogOptions;
  }
  public putFederatedCatalogOptions(value: GoogleBiglakeIcebergCatalogFederatedCatalogOptions) {
    this._federatedCatalogOptions.internalValue = value;
  }
  public resetFederatedCatalogOptions() {
    this._federatedCatalogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedCatalogOptionsInput() {
    return this._federatedCatalogOptions.internalValue;
  }

  // restricted_locations_config - computed: false, optional: true, required: false
  private _restrictedLocationsConfig = new GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference(this, "restricted_locations_config");
  public get restrictedLocationsConfig() {
    return this._restrictedLocationsConfig;
  }
  public putRestrictedLocationsConfig(value: GoogleBiglakeIcebergCatalogRestrictedLocationsConfig) {
    this._restrictedLocationsConfig.internalValue = value;
  }
  public resetRestrictedLocationsConfig() {
    this._restrictedLocationsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedLocationsConfigInput() {
    return this._restrictedLocationsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBiglakeIcebergCatalogTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBiglakeIcebergCatalogTimeouts) {
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
      catalog_type: cdktf.stringToTerraform(this._catalogType),
      credential_mode: cdktf.stringToTerraform(this._credentialMode),
      default_location: cdktf.stringToTerraform(this._defaultLocation),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      primary_location: cdktf.stringToTerraform(this._primaryLocation),
      project: cdktf.stringToTerraform(this._project),
      federated_catalog_options: googleBiglakeIcebergCatalogFederatedCatalogOptionsToTerraform(this._federatedCatalogOptions.internalValue),
      restricted_locations_config: googleBiglakeIcebergCatalogRestrictedLocationsConfigToTerraform(this._restrictedLocationsConfig.internalValue),
      timeouts: googleBiglakeIcebergCatalogTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_type: {
        value: cdktf.stringToHclTerraform(this._catalogType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_mode: {
        value: cdktf.stringToHclTerraform(this._credentialMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_location: {
        value: cdktf.stringToHclTerraform(this._defaultLocation),
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
      primary_location: {
        value: cdktf.stringToHclTerraform(this._primaryLocation),
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
      federated_catalog_options: {
        value: googleBiglakeIcebergCatalogFederatedCatalogOptionsToHclTerraform(this._federatedCatalogOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBiglakeIcebergCatalogFederatedCatalogOptionsList",
      },
      restricted_locations_config: {
        value: googleBiglakeIcebergCatalogRestrictedLocationsConfigToHclTerraform(this._restrictedLocationsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBiglakeIcebergCatalogRestrictedLocationsConfigList",
      },
      timeouts: {
        value: googleBiglakeIcebergCatalogTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleBiglakeIcebergCatalogTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
