// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleMigrationCenterReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#deletion_policy GoogleMigrationCenterReport#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Free-text description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#description GoogleMigrationCenterReport#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name. Maximum length is 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#display_name GoogleMigrationCenterReport#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#id GoogleMigrationCenterReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#location GoogleMigrationCenterReport#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#project GoogleMigrationCenterReport#project}
  */
  readonly project?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#report_config GoogleMigrationCenterReport#report_config}
  */
  readonly reportConfig: string;
  /**
  * User specified id for the report. It will become the last component
  * of the report name. The id must be unique within the project, must
  * conform with RFC-1034, is restricted to lower-cased letters, and has a
  * maximum length of 63 characters. The id must match the regular expression:
  * [a-z]([a-z0-9-]{0,61}[a-z0-9])?.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#report_id GoogleMigrationCenterReport#report_id}
  */
  readonly reportId: string;
  /**
  * Report type.
  * Possible values:
  * TOTAL_COST_OF_OWNERSHIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#type GoogleMigrationCenterReport#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#timeouts GoogleMigrationCenterReport#timeouts}
  */
  readonly timeouts?: GoogleMigrationCenterReportTimeouts;
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBuckets {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogram {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBuckets {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogram {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChart {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPoints {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystem {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_points - computed: true, optional: false, required: false
  private _dataPoints = new GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPoints {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstances {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_points - computed: true, optional: false, required: false
  private _dataPoints = new GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBuckets {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogram {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChart {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryAllAssetsStats {
}

export function googleMigrationCenterReportSummaryAllAssetsStatsToTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryAllAssetsStatsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryAllAssetsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryAllAssetsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryAllAssetsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_count_histogram - computed: true, optional: false, required: false
  private _coreCountHistogram = new GoogleMigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramList(this, "core_count_histogram", false);
  public get coreCountHistogram() {
    return this._coreCountHistogram;
  }

  // memory_bytes_histogram - computed: true, optional: false, required: false
  private _memoryBytesHistogram = new GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramList(this, "memory_bytes_histogram", false);
  public get memoryBytesHistogram() {
    return this._memoryBytesHistogram;
  }

  // memory_utilization_chart - computed: true, optional: false, required: false
  private _memoryUtilizationChart = new GoogleMigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartList(this, "memory_utilization_chart", false);
  public get memoryUtilizationChart() {
    return this._memoryUtilizationChart;
  }

  // operating_system - computed: true, optional: false, required: false
  private _operatingSystem = new GoogleMigrationCenterReportSummaryAllAssetsStatsOperatingSystemList(this, "operating_system", false);
  public get operatingSystem() {
    return this._operatingSystem;
  }

  // software_instances - computed: true, optional: false, required: false
  private _softwareInstances = new GoogleMigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesList(this, "software_instances", false);
  public get softwareInstances() {
    return this._softwareInstances;
  }

  // storage_bytes_histogram - computed: true, optional: false, required: false
  private _storageBytesHistogram = new GoogleMigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramList(this, "storage_bytes_histogram", false);
  public get storageBytesHistogram() {
    return this._storageBytesHistogram;
  }

  // storage_utilization_chart - computed: true, optional: false, required: false
  private _storageUtilizationChart = new GoogleMigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartList(this, "storage_utilization_chart", false);
  public get storageUtilizationChart() {
    return this._storageUtilizationChart;
  }

  // total_assets - computed: true, optional: false, required: false
  public get totalAssets() {
    return this.getStringAttribute('total_assets');
  }

  // total_cores - computed: true, optional: false, required: false
  public get totalCores() {
    return this.getStringAttribute('total_cores');
  }

  // total_memory_bytes - computed: true, optional: false, required: false
  public get totalMemoryBytes() {
    return this.getStringAttribute('total_memory_bytes');
  }

  // total_storage_bytes - computed: true, optional: false, required: false
  public get totalStorageBytes() {
    return this.getStringAttribute('total_storage_bytes');
  }
}

export class GoogleMigrationCenterReportSummaryAllAssetsStatsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryAllAssetsStatsOutputReference {
    return new GoogleMigrationCenterReportSummaryAllAssetsStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBuckets {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogram {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBuckets {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogram {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChart {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPoints {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystem {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_points - computed: true, optional: false, required: false
  private _dataPoints = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPoints {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstances {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_points - computed: true, optional: false, required: false
  private _dataPoints = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBuckets {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogram {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChart {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStats {
}

export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_count_histogram - computed: true, optional: false, required: false
  private _coreCountHistogram = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramList(this, "core_count_histogram", false);
  public get coreCountHistogram() {
    return this._coreCountHistogram;
  }

  // memory_bytes_histogram - computed: true, optional: false, required: false
  private _memoryBytesHistogram = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramList(this, "memory_bytes_histogram", false);
  public get memoryBytesHistogram() {
    return this._memoryBytesHistogram;
  }

  // memory_utilization_chart - computed: true, optional: false, required: false
  private _memoryUtilizationChart = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartList(this, "memory_utilization_chart", false);
  public get memoryUtilizationChart() {
    return this._memoryUtilizationChart;
  }

  // operating_system - computed: true, optional: false, required: false
  private _operatingSystem = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemList(this, "operating_system", false);
  public get operatingSystem() {
    return this._operatingSystem;
  }

  // software_instances - computed: true, optional: false, required: false
  private _softwareInstances = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesList(this, "software_instances", false);
  public get softwareInstances() {
    return this._softwareInstances;
  }

  // storage_bytes_histogram - computed: true, optional: false, required: false
  private _storageBytesHistogram = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramList(this, "storage_bytes_histogram", false);
  public get storageBytesHistogram() {
    return this._storageBytesHistogram;
  }

  // storage_utilization_chart - computed: true, optional: false, required: false
  private _storageUtilizationChart = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartList(this, "storage_utilization_chart", false);
  public get storageUtilizationChart() {
    return this._storageUtilizationChart;
  }

  // total_assets - computed: true, optional: false, required: false
  public get totalAssets() {
    return this.getStringAttribute('total_assets');
  }

  // total_cores - computed: true, optional: false, required: false
  public get totalCores() {
    return this.getStringAttribute('total_cores');
  }

  // total_memory_bytes - computed: true, optional: false, required: false
  public get totalMemoryBytes() {
    return this.getStringAttribute('total_memory_bytes');
  }

  // total_storage_bytes - computed: true, optional: false, required: false
  public get totalStorageBytes() {
    return this.getStringAttribute('total_storage_bytes');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeries {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocations {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // machine_series - computed: true, optional: false, required: false
  private _machineSeries = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesList(this, "machine_series", false);
  public get machineSeries() {
    return this._machineSeries;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFinding {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // allocated_disk_types - computed: true, optional: false, required: false
  public get allocatedDiskTypes() {
    return this.getListAttribute('allocated_disk_types');
  }

  // allocated_regions - computed: true, optional: false, required: false
  public get allocatedRegions() {
    return this.getListAttribute('allocated_regions');
  }

  // machine_series_allocations - computed: true, optional: false, required: false
  private _machineSeriesAllocations = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsList(this, "machine_series_allocations", false);
  public get machineSeriesAllocations() {
    return this._machineSeriesAllocations;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferences {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_machine_series - computed: true, optional: false, required: false
  private _allowedMachineSeries = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList(this, "allowed_machine_series", false);
  public get allowedMachineSeries() {
    return this._allowedMachineSeries;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferences {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // machine_preferences - computed: true, optional: false, required: false
  private _machinePreferences = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesList(this, "machine_preferences", false);
  public get machinePreferences() {
    return this._machinePreferences;
  }

  // persistent_disk_type - computed: true, optional: false, required: false
  public get persistentDiskType() {
    return this.getStringAttribute('persistent_disk_type');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferences {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preferred_regions - computed: true, optional: false, required: false
  public get preferredRegions() {
    return this.getListAttribute('preferred_regions');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypes {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferences {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commitment_plan - computed: true, optional: false, required: false
  public get commitmentPlan() {
    return this.getStringAttribute('commitment_plan');
  }

  // cpu_overcommit_ratio - computed: true, optional: false, required: false
  public get cpuOvercommitRatio() {
    return this.getNumberAttribute('cpu_overcommit_ratio');
  }

  // host_maintenance_policy - computed: true, optional: false, required: false
  public get hostMaintenancePolicy() {
    return this.getStringAttribute('host_maintenance_policy');
  }

  // node_types - computed: true, optional: false, required: false
  private _nodeTypes = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesList(this, "node_types", false);
  public get nodeTypes() {
    return this._nodeTypes;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferences {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commitment_plan - computed: true, optional: false, required: false
  public get commitmentPlan() {
    return this.getStringAttribute('commitment_plan');
  }

  // cpu_overcommit_ratio - computed: true, optional: false, required: false
  public get cpuOvercommitRatio() {
    return this.getNumberAttribute('cpu_overcommit_ratio');
  }

  // memory_overcommit_ratio - computed: true, optional: false, required: false
  public get memoryOvercommitRatio() {
    return this.getNumberAttribute('memory_overcommit_ratio');
  }

  // storage_deduplication_compression_ratio - computed: true, optional: false, required: false
  public get storageDeduplicationCompressionRatio() {
    return this.getNumberAttribute('storage_deduplication_compression_ratio');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferences {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commitment_plan - computed: true, optional: false, required: false
  public get commitmentPlan() {
    return this.getStringAttribute('commitment_plan');
  }

  // compute_engine_preferences - computed: true, optional: false, required: false
  private _computeEnginePreferences = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesList(this, "compute_engine_preferences", false);
  public get computeEnginePreferences() {
    return this._computeEnginePreferences;
  }

  // region_preferences - computed: true, optional: false, required: false
  private _regionPreferences = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesList(this, "region_preferences", false);
  public get regionPreferences() {
    return this._regionPreferences;
  }

  // sizing_optimization_strategy - computed: true, optional: false, required: false
  public get sizingOptimizationStrategy() {
    return this.getStringAttribute('sizing_optimization_strategy');
  }

  // sole_tenancy_preferences - computed: true, optional: false, required: false
  private _soleTenancyPreferences = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesList(this, "sole_tenancy_preferences", false);
  public get soleTenancyPreferences() {
    return this._soleTenancyPreferences;
  }

  // target_product - computed: true, optional: false, required: false
  public get targetProduct() {
    return this.getStringAttribute('target_product');
  }

  // vmware_engine_preferences - computed: true, optional: false, required: false
  private _vmwareEnginePreferences = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesList(this, "vmware_engine_preferences", false);
  public get vmwareEnginePreferences() {
    return this._vmwareEnginePreferences;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostCompute {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgress {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicense {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOther {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOther | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOther | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorage {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotal {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNode {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocations {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // node - computed: true, optional: false, required: false
  private _node = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getStringAttribute('node_count');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFinding {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // allocated_regions - computed: true, optional: false, required: false
  public get allocatedRegions() {
    return this.getListAttribute('allocated_regions');
  }

  // node_allocations - computed: true, optional: false, required: false
  private _nodeAllocations = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsList(this, "node_allocations", false);
  public get nodeAllocations() {
    return this._nodeAllocations;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNode {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocations {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getStringAttribute('node_count');
  }

  // vmware_node - computed: true, optional: false, required: false
  private _vmwareNode = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeList(this, "vmware_node", false);
  public get vmwareNode() {
    return this._vmwareNode;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFinding {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // allocated_regions - computed: true, optional: false, required: false
  public get allocatedRegions() {
    return this.getListAttribute('allocated_regions');
  }

  // node_allocations - computed: true, optional: false, required: false
  private _nodeAllocations = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsList(this, "node_allocations", false);
  public get nodeAllocations() {
    return this._nodeAllocations;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindings {
}

export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_engine_finding - computed: true, optional: false, required: false
  private _computeEngineFinding = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingList(this, "compute_engine_finding", false);
  public get computeEngineFinding() {
    return this._computeEngineFinding;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // machine_preferences - computed: true, optional: false, required: false
  private _machinePreferences = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesList(this, "machine_preferences", false);
  public get machinePreferences() {
    return this._machinePreferences;
  }

  // monthly_cost_compute - computed: true, optional: false, required: false
  private _monthlyCostCompute = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeList(this, "monthly_cost_compute", false);
  public get monthlyCostCompute() {
    return this._monthlyCostCompute;
  }

  // monthly_cost_network_egress - computed: true, optional: false, required: false
  private _monthlyCostNetworkEgress = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressList(this, "monthly_cost_network_egress", false);
  public get monthlyCostNetworkEgress() {
    return this._monthlyCostNetworkEgress;
  }

  // monthly_cost_os_license - computed: true, optional: false, required: false
  private _monthlyCostOsLicense = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseList(this, "monthly_cost_os_license", false);
  public get monthlyCostOsLicense() {
    return this._monthlyCostOsLicense;
  }

  // monthly_cost_other - computed: true, optional: false, required: false
  private _monthlyCostOther = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherList(this, "monthly_cost_other", false);
  public get monthlyCostOther() {
    return this._monthlyCostOther;
  }

  // monthly_cost_storage - computed: true, optional: false, required: false
  private _monthlyCostStorage = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageList(this, "monthly_cost_storage", false);
  public get monthlyCostStorage() {
    return this._monthlyCostStorage;
  }

  // monthly_cost_total - computed: true, optional: false, required: false
  private _monthlyCostTotal = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalList(this, "monthly_cost_total", false);
  public get monthlyCostTotal() {
    return this._monthlyCostTotal;
  }

  // sole_tenant_finding - computed: true, optional: false, required: false
  private _soleTenantFinding = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingList(this, "sole_tenant_finding", false);
  public get soleTenantFinding() {
    return this._soleTenantFinding;
  }

  // vmware_engine_finding - computed: true, optional: false, required: false
  private _vmwareEngineFinding = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingList(this, "vmware_engine_finding", false);
  public get vmwareEngineFinding() {
    return this._vmwareEngineFinding;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummaryGroupFindings {
}

export function googleMigrationCenterReportSummaryGroupFindingsToTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryGroupFindingsToHclTerraform(struct?: GoogleMigrationCenterReportSummaryGroupFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryGroupFindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummaryGroupFindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummaryGroupFindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asset_aggregate_stats - computed: true, optional: false, required: false
  private _assetAggregateStats = new GoogleMigrationCenterReportSummaryGroupFindingsAssetAggregateStatsList(this, "asset_aggregate_stats", false);
  public get assetAggregateStats() {
    return this._assetAggregateStats;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // overlapping_asset_count - computed: true, optional: false, required: false
  public get overlappingAssetCount() {
    return this.getStringAttribute('overlapping_asset_count');
  }

  // preference_set_findings - computed: true, optional: false, required: false
  private _preferenceSetFindings = new GoogleMigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsList(this, "preference_set_findings", false);
  public get preferenceSetFindings() {
    return this._preferenceSetFindings;
  }
}

export class GoogleMigrationCenterReportSummaryGroupFindingsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryGroupFindingsOutputReference {
    return new GoogleMigrationCenterReportSummaryGroupFindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportSummary {
}

export function googleMigrationCenterReportSummaryToTerraform(struct?: GoogleMigrationCenterReportSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMigrationCenterReportSummaryToHclTerraform(struct?: GoogleMigrationCenterReportSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMigrationCenterReportSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMigrationCenterReportSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMigrationCenterReportSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_assets_stats - computed: true, optional: false, required: false
  private _allAssetsStats = new GoogleMigrationCenterReportSummaryAllAssetsStatsList(this, "all_assets_stats", false);
  public get allAssetsStats() {
    return this._allAssetsStats;
  }

  // group_findings - computed: true, optional: false, required: false
  private _groupFindings = new GoogleMigrationCenterReportSummaryGroupFindingsList(this, "group_findings", false);
  public get groupFindings() {
    return this._groupFindings;
  }
}

export class GoogleMigrationCenterReportSummaryList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMigrationCenterReportSummaryOutputReference {
    return new GoogleMigrationCenterReportSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMigrationCenterReportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#create GoogleMigrationCenterReport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#delete GoogleMigrationCenterReport#delete}
  */
  readonly delete?: string;
}

export function googleMigrationCenterReportTimeoutsToTerraform(struct?: GoogleMigrationCenterReportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleMigrationCenterReportTimeoutsToHclTerraform(struct?: GoogleMigrationCenterReportTimeouts | cdktf.IResolvable): any {
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

export class GoogleMigrationCenterReportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleMigrationCenterReportTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleMigrationCenterReportTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report google_migration_center_report}
*/
export class GoogleMigrationCenterReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_migration_center_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleMigrationCenterReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleMigrationCenterReport to import
  * @param importFromId The id of the existing GoogleMigrationCenterReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleMigrationCenterReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_migration_center_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_migration_center_report google_migration_center_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleMigrationCenterReportConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleMigrationCenterReportConfig) {
    super(scope, id, {
      terraformResourceType: 'google_migration_center_report',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._reportConfig = config.reportConfig;
    this._reportId = config.reportId;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // report_config - computed: false, optional: false, required: true
  private _reportConfig?: string; 
  public get reportConfig() {
    return this.getStringAttribute('report_config');
  }
  public set reportConfig(value: string) {
    this._reportConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportConfigInput() {
    return this._reportConfig;
  }

  // report_id - computed: false, optional: false, required: true
  private _reportId?: string; 
  public get reportId() {
    return this.getStringAttribute('report_id');
  }
  public set reportId(value: string) {
    this._reportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportIdInput() {
    return this._reportId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  private _summary = new GoogleMigrationCenterReportSummaryList(this, "summary", false);
  public get summary() {
    return this._summary;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleMigrationCenterReportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleMigrationCenterReportTimeouts) {
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
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      report_config: cdktf.stringToTerraform(this._reportConfig),
      report_id: cdktf.stringToTerraform(this._reportId),
      type: cdktf.stringToTerraform(this._type),
      timeouts: googleMigrationCenterReportTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      report_config: {
        value: cdktf.stringToHclTerraform(this._reportConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_id: {
        value: cdktf.stringToHclTerraform(this._reportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleMigrationCenterReportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleMigrationCenterReportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
