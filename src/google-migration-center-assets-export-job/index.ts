// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleMigrationCenterAssetsExportJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID to use for the asset export job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#assets_export_job_id GoogleMigrationCenterAssetsExportJob#assets_export_job_id}
  */
  readonly assetsExportJobId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#deletion_policy GoogleMigrationCenterAssetsExportJob#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#id GoogleMigrationCenterAssetsExportJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key value pairs.
  * Labels must meet the following constraints:
  * 
  * * Keys and values can contain only lowercase letters, numeric characters,
  * underscores, and dashes.
  * * All characters must use UTF-8 encoding, and international characters are
  * allowed.
  * * Keys must start with a lowercase letter or international character.
  * * Each resource is limited to a maximum of 64 labels.
  * 
  * Both keys and values are additionally constrained to be <= 128 bytes.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#labels GoogleMigrationCenterAssetsExportJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#location GoogleMigrationCenterAssetsExportJob#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#project GoogleMigrationCenterAssetsExportJob#project}
  */
  readonly project?: string;
  /**
  * When this value is set to 'true' the response will include all assets,
  * including those that are hidden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#show_hidden GoogleMigrationCenterAssetsExportJob#show_hidden}
  */
  readonly showHidden?: boolean | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#condition GoogleMigrationCenterAssetsExportJob#condition}
  */
  readonly condition?: GoogleMigrationCenterAssetsExportJobCondition;
  /**
  * performance_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#performance_data GoogleMigrationCenterAssetsExportJob#performance_data}
  */
  readonly performanceData?: GoogleMigrationCenterAssetsExportJobPerformanceData;
  /**
  * signed_uri_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#signed_uri_destination GoogleMigrationCenterAssetsExportJob#signed_uri_destination}
  */
  readonly signedUriDestination?: GoogleMigrationCenterAssetsExportJobSignedUriDestination;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#timeouts GoogleMigrationCenterAssetsExportJob#timeouts}
  */
  readonly timeouts?: GoogleMigrationCenterAssetsExportJobTimeouts;
}
export interface GoogleMigrationCenterAssetsExportJobInventory {
}

export function googleMigrationCenterAssetsExportJobInventoryToTerraform(struct?: GoogleMigrationCenterAssetsExportJobInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobInventoryToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobInventory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobInventoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobInventory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobInventory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class GoogleMigrationCenterAssetsExportJobInventoryList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobInventoryOutputReference {
    return new GoogleMigrationCenterAssetsExportJobInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobNetworkDependencies {
}

export function googleMigrationCenterAssetsExportJobNetworkDependenciesToTerraform(struct?: GoogleMigrationCenterAssetsExportJobNetworkDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobNetworkDependenciesToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobNetworkDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobNetworkDependencies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobNetworkDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class GoogleMigrationCenterAssetsExportJobNetworkDependenciesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference {
    return new GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultErrorToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultErrorToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError | undefined) {
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

  // details - computed: true, optional: false, required: false
  private _details = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns_count - computed: true, optional: false, required: false
  public get columnsCount() {
    return this.getNumberAttribute('columns_count');
  }

  // row_count - computed: true, optional: false, required: false
  public get rowCount() {
    return this.getNumberAttribute('row_count');
  }

  // signed_uri - computed: true, optional: false, required: false
  private _signedUri = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList(this, "signed_uri", false);
  public get signedUri() {
    return this._signedUri;
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // signed_uri - computed: true, optional: false, required: false
  private _signedUri = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList(this, "signed_uri", false);
  public get signedUri() {
    return this._signedUri;
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv_output_file - computed: true, optional: false, required: false
  private _csvOutputFile = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList(this, "csv_output_file", false);
  public get csvOutputFile() {
    return this._csvOutputFile;
  }

  // file_size_bytes - computed: true, optional: false, required: false
  public get fileSizeBytes() {
    return this.getStringAttribute('file_size_bytes');
  }

  // xlsx_output_file - computed: true, optional: false, required: false
  private _xlsxOutputFile = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList(this, "xlsx_output_file", false);
  public get xlsxOutputFile() {
    return this._xlsxOutputFile;
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entries - computed: true, optional: false, required: false
  private _entries = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // signed_uris - computed: true, optional: false, required: false
  private _signedUris = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList(this, "signed_uris", false);
  public get signedUris() {
    return this._signedUris;
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutionsResult {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsResultToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsResultToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutionsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutionsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutionsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  private _error = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // output_files - computed: true, optional: false, required: false
  private _outputFiles = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList(this, "output_files", false);
  public get outputFiles() {
    return this._outputFiles;
  }

  // signed_uris - computed: true, optional: false, required: false
  private _signedUris = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList(this, "signed_uris", false);
  public get signedUris() {
    return this._signedUris;
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobRecentExecutions {
}

export function googleMigrationCenterAssetsExportJobRecentExecutionsToTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterAssetsExportJobRecentExecutionsToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobRecentExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterAssetsExportJobRecentExecutions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobRecentExecutions | undefined) {
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

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // requested_asset_count - computed: true, optional: false, required: false
  public get requestedAssetCount() {
    return this.getNumberAttribute('requested_asset_count');
  }

  // result - computed: true, optional: false, required: false
  private _result = new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class GoogleMigrationCenterAssetsExportJobRecentExecutionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference {
    return new GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterAssetsExportJobCondition {
  /**
  * Assets filter, supports the same syntax as asset listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#filter GoogleMigrationCenterAssetsExportJob#filter}
  */
  readonly filter?: string;
}

export function googleMigrationCenterAssetsExportJobConditionToTerraform(struct?: GoogleMigrationCenterAssetsExportJobConditionOutputReference | GoogleMigrationCenterAssetsExportJobCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}


export function googleMigrationCenterAssetsExportJobConditionToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobConditionOutputReference | GoogleMigrationCenterAssetsExportJobCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMigrationCenterAssetsExportJobConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMigrationCenterAssetsExportJobCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface GoogleMigrationCenterAssetsExportJobPerformanceData {
  /**
  * When this value is set to a positive integer,
  * performance data will be returned for the most recent days
  * for which data is available. When this value is unset (or set to zero),
  * all available data is returned.
  * The maximum value is 420; values above 420 will be coerced to 420.
  * If unset (0 value) a default value of 40 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#max_days GoogleMigrationCenterAssetsExportJob#max_days}
  */
  readonly maxDays?: number;
}

export function googleMigrationCenterAssetsExportJobPerformanceDataToTerraform(struct?: GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference | GoogleMigrationCenterAssetsExportJobPerformanceData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_days: cdktf.numberToTerraform(struct!.maxDays),
  }
}


export function googleMigrationCenterAssetsExportJobPerformanceDataToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference | GoogleMigrationCenterAssetsExportJobPerformanceData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_days: {
      value: cdktf.numberToHclTerraform(struct!.maxDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMigrationCenterAssetsExportJobPerformanceData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDays = this._maxDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobPerformanceData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxDays = value.maxDays;
    }
  }

  // max_days - computed: false, optional: true, required: false
  private _maxDays?: number; 
  public get maxDays() {
    return this.getNumberAttribute('max_days');
  }
  public set maxDays(value: number) {
    this._maxDays = value;
  }
  public resetMaxDays() {
    this._maxDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDaysInput() {
    return this._maxDays;
  }
}
export interface GoogleMigrationCenterAssetsExportJobSignedUriDestination {
  /**
  * The file format to export.
  * Possible values:
  * CSV
  * XLSX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#file_format GoogleMigrationCenterAssetsExportJob#file_format}
  */
  readonly fileFormat: string;
}

export function googleMigrationCenterAssetsExportJobSignedUriDestinationToTerraform(struct?: GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference | GoogleMigrationCenterAssetsExportJobSignedUriDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_format: cdktf.stringToTerraform(struct!.fileFormat),
  }
}


export function googleMigrationCenterAssetsExportJobSignedUriDestinationToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference | GoogleMigrationCenterAssetsExportJobSignedUriDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_format: {
      value: cdktf.stringToHclTerraform(struct!.fileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMigrationCenterAssetsExportJobSignedUriDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobSignedUriDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileFormat = value.fileFormat;
    }
  }

  // file_format - computed: false, optional: false, required: true
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }
}
export interface GoogleMigrationCenterAssetsExportJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#create GoogleMigrationCenterAssetsExportJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#delete GoogleMigrationCenterAssetsExportJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#update GoogleMigrationCenterAssetsExportJob#update}
  */
  readonly update?: string;
}

export function googleMigrationCenterAssetsExportJobTimeoutsToTerraform(struct?: GoogleMigrationCenterAssetsExportJobTimeouts | cdktf.IResolvable): any {
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


export function googleMigrationCenterAssetsExportJobTimeoutsToHclTerraform(struct?: GoogleMigrationCenterAssetsExportJobTimeouts | cdktf.IResolvable): any {
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

export class GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleMigrationCenterAssetsExportJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleMigrationCenterAssetsExportJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job google_migration_center_assets_export_job}
*/
export class GoogleMigrationCenterAssetsExportJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_migration_center_assets_export_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleMigrationCenterAssetsExportJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleMigrationCenterAssetsExportJob to import
  * @param importFromId The id of the existing GoogleMigrationCenterAssetsExportJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleMigrationCenterAssetsExportJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_migration_center_assets_export_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_migration_center_assets_export_job google_migration_center_assets_export_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleMigrationCenterAssetsExportJobConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleMigrationCenterAssetsExportJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_migration_center_assets_export_job',
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
    this._assetsExportJobId = config.assetsExportJobId;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._showHidden = config.showHidden;
    this._condition.internalValue = config.condition;
    this._performanceData.internalValue = config.performanceData;
    this._signedUriDestination.internalValue = config.signedUriDestination;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assets_export_job_id - computed: false, optional: false, required: true
  private _assetsExportJobId?: string; 
  public get assetsExportJobId() {
    return this.getStringAttribute('assets_export_job_id');
  }
  public set assetsExportJobId(value: string) {
    this._assetsExportJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsExportJobIdInput() {
    return this._assetsExportJobId;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // inventory - computed: true, optional: false, required: false
  private _inventory = new GoogleMigrationCenterAssetsExportJobInventoryList(this, "inventory", false);
  public get inventory() {
    return this._inventory;
  }

  // labels - computed: false, optional: true, required: false
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

  // network_dependencies - computed: true, optional: false, required: false
  private _networkDependencies = new GoogleMigrationCenterAssetsExportJobNetworkDependenciesList(this, "network_dependencies", false);
  public get networkDependencies() {
    return this._networkDependencies;
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

  // recent_executions - computed: true, optional: false, required: false
  private _recentExecutions = new GoogleMigrationCenterAssetsExportJobRecentExecutionsList(this, "recent_executions", false);
  public get recentExecutions() {
    return this._recentExecutions;
  }

  // show_hidden - computed: false, optional: true, required: false
  private _showHidden?: boolean | cdktf.IResolvable; 
  public get showHidden() {
    return this.getBooleanAttribute('show_hidden');
  }
  public set showHidden(value: boolean | cdktf.IResolvable) {
    this._showHidden = value;
  }
  public resetShowHidden() {
    this._showHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHiddenInput() {
    return this._showHidden;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new GoogleMigrationCenterAssetsExportJobConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: GoogleMigrationCenterAssetsExportJobCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // performance_data - computed: false, optional: true, required: false
  private _performanceData = new GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference(this, "performance_data");
  public get performanceData() {
    return this._performanceData;
  }
  public putPerformanceData(value: GoogleMigrationCenterAssetsExportJobPerformanceData) {
    this._performanceData.internalValue = value;
  }
  public resetPerformanceData() {
    this._performanceData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceDataInput() {
    return this._performanceData.internalValue;
  }

  // signed_uri_destination - computed: false, optional: true, required: false
  private _signedUriDestination = new GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference(this, "signed_uri_destination");
  public get signedUriDestination() {
    return this._signedUriDestination;
  }
  public putSignedUriDestination(value: GoogleMigrationCenterAssetsExportJobSignedUriDestination) {
    this._signedUriDestination.internalValue = value;
  }
  public resetSignedUriDestination() {
    this._signedUriDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedUriDestinationInput() {
    return this._signedUriDestination.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleMigrationCenterAssetsExportJobTimeouts) {
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
      assets_export_job_id: cdktf.stringToTerraform(this._assetsExportJobId),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      show_hidden: cdktf.booleanToTerraform(this._showHidden),
      condition: googleMigrationCenterAssetsExportJobConditionToTerraform(this._condition.internalValue),
      performance_data: googleMigrationCenterAssetsExportJobPerformanceDataToTerraform(this._performanceData.internalValue),
      signed_uri_destination: googleMigrationCenterAssetsExportJobSignedUriDestinationToTerraform(this._signedUriDestination.internalValue),
      timeouts: googleMigrationCenterAssetsExportJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assets_export_job_id: {
        value: cdktf.stringToHclTerraform(this._assetsExportJobId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      show_hidden: {
        value: cdktf.booleanToHclTerraform(this._showHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      condition: {
        value: googleMigrationCenterAssetsExportJobConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMigrationCenterAssetsExportJobConditionList",
      },
      performance_data: {
        value: googleMigrationCenterAssetsExportJobPerformanceDataToHclTerraform(this._performanceData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMigrationCenterAssetsExportJobPerformanceDataList",
      },
      signed_uri_destination: {
        value: googleMigrationCenterAssetsExportJobSignedUriDestinationToHclTerraform(this._signedUriDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMigrationCenterAssetsExportJobSignedUriDestinationList",
      },
      timeouts: {
        value: googleMigrationCenterAssetsExportJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleMigrationCenterAssetsExportJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
