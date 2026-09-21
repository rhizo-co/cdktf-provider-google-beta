// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleMigrationCenterImportJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reference to a source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#asset_source GoogleMigrationCenterImportJob#asset_source}
  */
  readonly assetSource: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#deletion_policy GoogleMigrationCenterImportJob#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User-friendly display name. Maximum length is 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#display_name GoogleMigrationCenterImportJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#id GoogleMigrationCenterImportJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the import job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#import_job_id GoogleMigrationCenterImportJob#import_job_id}
  */
  readonly importJobId: string;
  /**
  * Labels as key value pairs.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#labels GoogleMigrationCenterImportJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#location GoogleMigrationCenterImportJob#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#project GoogleMigrationCenterImportJob#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#timeouts GoogleMigrationCenterImportJob#timeouts}
  */
  readonly timeouts?: GoogleMigrationCenterImportJobTimeouts;
}
export interface GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors {
}

export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError {
}

export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // row_number - computed: true, optional: false, required: false
  public get rowNumber() {
    return this.getNumberAttribute('row_number');
  }
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError {
}

export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv_error - computed: true, optional: false, required: false
  private _csvError = new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList(this, "csv_error", false);
  public get csvError() {
    return this._csvError;
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError {
}

export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // row_number - computed: true, optional: false, required: false
  public get rowNumber() {
    return this.getNumberAttribute('row_number');
  }
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors {
}

export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError {
}

export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // row_number - computed: true, optional: false, required: false
  public get rowNumber() {
    return this.getNumberAttribute('row_number');
  }

  // sheet - computed: true, optional: false, required: false
  public get sheet() {
    return this.getStringAttribute('sheet');
  }
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors {
}

export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_error - computed: true, optional: false, required: false
  private _archiveError = new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList(this, "archive_error", false);
  public get archiveError() {
    return this._archiveError;
  }

  // asset_title - computed: true, optional: false, required: false
  public get assetTitle() {
    return this.getStringAttribute('asset_title');
  }

  // csv_error - computed: true, optional: false, required: false
  private _csvError = new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList(this, "csv_error", false);
  public get csvError() {
    return this._csvError;
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // row_number - computed: true, optional: false, required: false
  public get rowNumber() {
    return this.getNumberAttribute('row_number');
  }

  // vm_name - computed: true, optional: false, required: false
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }

  // vm_uuid - computed: true, optional: false, required: false
  public get vmUuid() {
    return this.getStringAttribute('vm_uuid');
  }

  // xlsx_error - computed: true, optional: false, required: false
  private _xlsxError = new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList(this, "xlsx_error", false);
  public get xlsxError() {
    return this._xlsxError;
  }
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations {
}

export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_errors - computed: true, optional: false, required: false
  private _fileErrors = new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList(this, "file_errors", false);
  public get fileErrors() {
    return this._fileErrors;
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // partial_report - computed: true, optional: false, required: false
  public get partialReport() {
    return this.getBooleanAttribute('partial_report');
  }

  // row_errors - computed: true, optional: false, required: false
  private _rowErrors = new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList(this, "row_errors", false);
  public get rowErrors() {
    return this._rowErrors;
  }
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors {
}

export function googleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobExecutionReportExecutionErrors {
}

export function googleMigrationCenterImportJobExecutionReportExecutionErrorsToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportExecutionErrorsToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReportExecutionErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReportExecutionErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReportExecutionErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_validations - computed: true, optional: false, required: false
  private _fileValidations = new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList(this, "file_validations", false);
  public get fileValidations() {
    return this._fileValidations;
  }

  // job_errors - computed: true, optional: false, required: false
  private _jobErrors = new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList(this, "job_errors", false);
  public get jobErrors() {
    return this._jobErrors;
  }
}

export class GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobExecutionReport {
}

export function googleMigrationCenterImportJobExecutionReportToTerraform(struct?: GoogleMigrationCenterImportJobExecutionReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobExecutionReportToHclTerraform(struct?: GoogleMigrationCenterImportJobExecutionReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobExecutionReportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobExecutionReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobExecutionReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_errors - computed: true, optional: false, required: false
  private _executionErrors = new GoogleMigrationCenterImportJobExecutionReportExecutionErrorsList(this, "execution_errors", false);
  public get executionErrors() {
    return this._executionErrors;
  }

  // frames_reported - computed: true, optional: false, required: false
  public get framesReported() {
    return this.getNumberAttribute('frames_reported');
  }

  // total_rows_count - computed: true, optional: false, required: false
  public get totalRowsCount() {
    return this.getNumberAttribute('total_rows_count');
  }
}

export class GoogleMigrationCenterImportJobExecutionReportList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobExecutionReportOutputReference {
    return new GoogleMigrationCenterImportJobExecutionReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors {
}

export function googleMigrationCenterImportJobValidationReportFileValidationsFileErrorsToTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobValidationReportFileValidationsFileErrorsToHclTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference {
    return new GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError {
}

export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorToTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorToHclTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // row_number - computed: true, optional: false, required: false
  public get rowNumber() {
    return this.getNumberAttribute('row_number');
  }
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference {
    return new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError {
}

export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorToTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorToHclTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv_error - computed: true, optional: false, required: false
  private _csvError = new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList(this, "csv_error", false);
  public get csvError() {
    return this._csvError;
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference {
    return new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError {
}

export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorToTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorToHclTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // row_number - computed: true, optional: false, required: false
  public get rowNumber() {
    return this.getNumberAttribute('row_number');
  }
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference {
    return new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors {
}

export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsToTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsToHclTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference {
    return new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError {
}

export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorToTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorToHclTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // row_number - computed: true, optional: false, required: false
  public get rowNumber() {
    return this.getNumberAttribute('row_number');
  }

  // sheet - computed: true, optional: false, required: false
  public get sheet() {
    return this.getStringAttribute('sheet');
  }
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference {
    return new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors {
}

export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsToTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobValidationReportFileValidationsRowErrorsToHclTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_error - computed: true, optional: false, required: false
  private _archiveError = new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList(this, "archive_error", false);
  public get archiveError() {
    return this._archiveError;
  }

  // asset_title - computed: true, optional: false, required: false
  public get assetTitle() {
    return this.getStringAttribute('asset_title');
  }

  // csv_error - computed: true, optional: false, required: false
  private _csvError = new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList(this, "csv_error", false);
  public get csvError() {
    return this._csvError;
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // row_number - computed: true, optional: false, required: false
  public get rowNumber() {
    return this.getNumberAttribute('row_number');
  }

  // vm_name - computed: true, optional: false, required: false
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }

  // vm_uuid - computed: true, optional: false, required: false
  public get vmUuid() {
    return this.getStringAttribute('vm_uuid');
  }

  // xlsx_error - computed: true, optional: false, required: false
  private _xlsxError = new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList(this, "xlsx_error", false);
  public get xlsxError() {
    return this._xlsxError;
  }
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference {
    return new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobValidationReportFileValidations {
}

export function googleMigrationCenterImportJobValidationReportFileValidationsToTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobValidationReportFileValidationsToHclTerraform(struct?: GoogleMigrationCenterImportJobValidationReportFileValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobValidationReportFileValidations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobValidationReportFileValidations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_errors - computed: true, optional: false, required: false
  private _fileErrors = new GoogleMigrationCenterImportJobValidationReportFileValidationsFileErrorsList(this, "file_errors", false);
  public get fileErrors() {
    return this._fileErrors;
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // partial_report - computed: true, optional: false, required: false
  public get partialReport() {
    return this.getBooleanAttribute('partial_report');
  }

  // row_errors - computed: true, optional: false, required: false
  private _rowErrors = new GoogleMigrationCenterImportJobValidationReportFileValidationsRowErrorsList(this, "row_errors", false);
  public get rowErrors() {
    return this._rowErrors;
  }
}

export class GoogleMigrationCenterImportJobValidationReportFileValidationsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference {
    return new GoogleMigrationCenterImportJobValidationReportFileValidationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobValidationReportJobErrors {
}

export function googleMigrationCenterImportJobValidationReportJobErrorsToTerraform(struct?: GoogleMigrationCenterImportJobValidationReportJobErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobValidationReportJobErrorsToHclTerraform(struct?: GoogleMigrationCenterImportJobValidationReportJobErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobValidationReportJobErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobValidationReportJobErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class GoogleMigrationCenterImportJobValidationReportJobErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference {
    return new GoogleMigrationCenterImportJobValidationReportJobErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobValidationReport {
}

export function googleMigrationCenterImportJobValidationReportToTerraform(struct?: GoogleMigrationCenterImportJobValidationReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterImportJobValidationReportToHclTerraform(struct?: GoogleMigrationCenterImportJobValidationReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterImportJobValidationReportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterImportJobValidationReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterImportJobValidationReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_validations - computed: true, optional: false, required: false
  private _fileValidations = new GoogleMigrationCenterImportJobValidationReportFileValidationsList(this, "file_validations", false);
  public get fileValidations() {
    return this._fileValidations;
  }

  // job_errors - computed: true, optional: false, required: false
  private _jobErrors = new GoogleMigrationCenterImportJobValidationReportJobErrorsList(this, "job_errors", false);
  public get jobErrors() {
    return this._jobErrors;
  }
}

export class GoogleMigrationCenterImportJobValidationReportList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterImportJobValidationReportOutputReference {
    return new GoogleMigrationCenterImportJobValidationReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterImportJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#create GoogleMigrationCenterImportJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#delete GoogleMigrationCenterImportJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#update GoogleMigrationCenterImportJob#update}
  */
  readonly update?: string;
}

export function googleMigrationCenterImportJobTimeoutsToTerraform(struct?: GoogleMigrationCenterImportJobTimeouts | cdktf.IResolvable): any {
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


export function googleMigrationCenterImportJobTimeoutsToHclTerraform(struct?: GoogleMigrationCenterImportJobTimeouts | cdktf.IResolvable): any {
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

export class GoogleMigrationCenterImportJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleMigrationCenterImportJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleMigrationCenterImportJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job google_migration_center_import_job}
*/
export class GoogleMigrationCenterImportJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_migration_center_import_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleMigrationCenterImportJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleMigrationCenterImportJob to import
  * @param importFromId The id of the existing GoogleMigrationCenterImportJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleMigrationCenterImportJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_migration_center_import_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_import_job google_migration_center_import_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleMigrationCenterImportJobConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleMigrationCenterImportJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_migration_center_import_job',
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
    this._assetSource = config.assetSource;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._importJobId = config.importJobId;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_source - computed: false, optional: false, required: true
  private _assetSource?: string; 
  public get assetSource() {
    return this.getStringAttribute('asset_source');
  }
  public set assetSource(value: string) {
    this._assetSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetSourceInput() {
    return this._assetSource;
  }

  // complete_time - computed: true, optional: false, required: false
  public get completeTime() {
    return this.getStringAttribute('complete_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // execution_report - computed: true, optional: false, required: false
  private _executionReport = new GoogleMigrationCenterImportJobExecutionReportList(this, "execution_report", false);
  public get executionReport() {
    return this._executionReport;
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

  // import_job_id - computed: false, optional: false, required: true
  private _importJobId?: string; 
  public get importJobId() {
    return this.getStringAttribute('import_job_id');
  }
  public set importJobId(value: string) {
    this._importJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importJobIdInput() {
    return this._importJobId;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // validation_report - computed: true, optional: false, required: false
  private _validationReport = new GoogleMigrationCenterImportJobValidationReportList(this, "validation_report", false);
  public get validationReport() {
    return this._validationReport;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleMigrationCenterImportJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleMigrationCenterImportJobTimeouts) {
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
      asset_source: cdktf.stringToTerraform(this._assetSource),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      import_job_id: cdktf.stringToTerraform(this._importJobId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      timeouts: googleMigrationCenterImportJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_source: {
        value: cdktf.stringToHclTerraform(this._assetSource),
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
      import_job_id: {
        value: cdktf.stringToHclTerraform(this._importJobId),
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
      timeouts: {
        value: googleMigrationCenterImportJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleMigrationCenterImportJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
