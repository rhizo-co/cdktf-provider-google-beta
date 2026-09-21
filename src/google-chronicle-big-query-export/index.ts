// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleChronicleBigQueryExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#big_query_export_package GoogleChronicleBigQueryExport#big_query_export_package}
  */
  readonly bigQueryExportPackage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#instance GoogleChronicleBigQueryExport#instance}
  */
  readonly instance: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#location GoogleChronicleBigQueryExport#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}
  */
  readonly project?: string;
  /**
  * entity_graph_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#entity_graph_settings GoogleChronicleBigQueryExport#entity_graph_settings}
  */
  readonly entityGraphSettings?: GoogleChronicleBigQueryExportEntityGraphSettings;
  /**
  * ioc_matches_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#ioc_matches_settings GoogleChronicleBigQueryExport#ioc_matches_settings}
  */
  readonly iocMatchesSettings?: GoogleChronicleBigQueryExportIocMatchesSettings;
  /**
  * rule_detections_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#rule_detections_settings GoogleChronicleBigQueryExport#rule_detections_settings}
  */
  readonly ruleDetectionsSettings?: GoogleChronicleBigQueryExportRuleDetectionsSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#timeouts GoogleChronicleBigQueryExport#timeouts}
  */
  readonly timeouts?: GoogleChronicleBigQueryExportTimeouts;
  /**
  * udm_events_aggregates_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#udm_events_aggregates_settings GoogleChronicleBigQueryExport#udm_events_aggregates_settings}
  */
  readonly udmEventsAggregatesSettings?: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings;
  /**
  * udm_events_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#udm_events_settings GoogleChronicleBigQueryExport#udm_events_settings}
  */
  readonly udmEventsSettings?: GoogleChronicleBigQueryExportUdmEventsSettings;
}
export interface GoogleChronicleBigQueryExportEntityGraphSettings {
  /**
  * Whether the data source is enabled for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The retention period for the data source in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}
  */
  readonly retentionDays: number;
}

export function googleChronicleBigQueryExportEntityGraphSettingsToTerraform(struct?: GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference | GoogleChronicleBigQueryExportEntityGraphSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function googleChronicleBigQueryExportEntityGraphSettingsToHclTerraform(struct?: GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference | GoogleChronicleBigQueryExportEntityGraphSettings): any {
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
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleBigQueryExportEntityGraphSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleBigQueryExportEntityGraphSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // data_freshness_time - computed: true, optional: false, required: false
  public get dataFreshnessTime() {
    return this.getStringAttribute('data_freshness_time');
  }

  // data_volume - computed: true, optional: false, required: false
  public get dataVolume() {
    return this.getStringAttribute('data_volume');
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

  // latest_export_job_state - computed: true, optional: false, required: false
  public get latestExportJobState() {
    return this.getStringAttribute('latest_export_job_state');
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface GoogleChronicleBigQueryExportIocMatchesSettings {
  /**
  * Whether the data source is enabled for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The retention period for the data source in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}
  */
  readonly retentionDays: number;
}

export function googleChronicleBigQueryExportIocMatchesSettingsToTerraform(struct?: GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference | GoogleChronicleBigQueryExportIocMatchesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function googleChronicleBigQueryExportIocMatchesSettingsToHclTerraform(struct?: GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference | GoogleChronicleBigQueryExportIocMatchesSettings): any {
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
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleBigQueryExportIocMatchesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleBigQueryExportIocMatchesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // data_freshness_time - computed: true, optional: false, required: false
  public get dataFreshnessTime() {
    return this.getStringAttribute('data_freshness_time');
  }

  // data_volume - computed: true, optional: false, required: false
  public get dataVolume() {
    return this.getStringAttribute('data_volume');
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

  // latest_export_job_state - computed: true, optional: false, required: false
  public get latestExportJobState() {
    return this.getStringAttribute('latest_export_job_state');
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface GoogleChronicleBigQueryExportRuleDetectionsSettings {
  /**
  * Whether the data source is enabled for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The retention period for the data source in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}
  */
  readonly retentionDays: number;
}

export function googleChronicleBigQueryExportRuleDetectionsSettingsToTerraform(struct?: GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference | GoogleChronicleBigQueryExportRuleDetectionsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function googleChronicleBigQueryExportRuleDetectionsSettingsToHclTerraform(struct?: GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference | GoogleChronicleBigQueryExportRuleDetectionsSettings): any {
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
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleBigQueryExportRuleDetectionsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleBigQueryExportRuleDetectionsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // data_freshness_time - computed: true, optional: false, required: false
  public get dataFreshnessTime() {
    return this.getStringAttribute('data_freshness_time');
  }

  // data_volume - computed: true, optional: false, required: false
  public get dataVolume() {
    return this.getStringAttribute('data_volume');
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

  // latest_export_job_state - computed: true, optional: false, required: false
  public get latestExportJobState() {
    return this.getStringAttribute('latest_export_job_state');
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface GoogleChronicleBigQueryExportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#create GoogleChronicleBigQueryExport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#delete GoogleChronicleBigQueryExport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#update GoogleChronicleBigQueryExport#update}
  */
  readonly update?: string;
}

export function googleChronicleBigQueryExportTimeoutsToTerraform(struct?: GoogleChronicleBigQueryExportTimeouts | cdktf.IResolvable): any {
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


export function googleChronicleBigQueryExportTimeoutsToHclTerraform(struct?: GoogleChronicleBigQueryExportTimeouts | cdktf.IResolvable): any {
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

export class GoogleChronicleBigQueryExportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleChronicleBigQueryExportTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleChronicleBigQueryExportTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleChronicleBigQueryExportUdmEventsAggregatesSettings {
  /**
  * Whether the data source is enabled for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The retention period for the data source in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}
  */
  readonly retentionDays: number;
}

export function googleChronicleBigQueryExportUdmEventsAggregatesSettingsToTerraform(struct?: GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference | GoogleChronicleBigQueryExportUdmEventsAggregatesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function googleChronicleBigQueryExportUdmEventsAggregatesSettingsToHclTerraform(struct?: GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference | GoogleChronicleBigQueryExportUdmEventsAggregatesSettings): any {
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
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleBigQueryExportUdmEventsAggregatesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // data_freshness_time - computed: true, optional: false, required: false
  public get dataFreshnessTime() {
    return this.getStringAttribute('data_freshness_time');
  }

  // data_volume - computed: true, optional: false, required: false
  public get dataVolume() {
    return this.getStringAttribute('data_volume');
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

  // latest_export_job_state - computed: true, optional: false, required: false
  public get latestExportJobState() {
    return this.getStringAttribute('latest_export_job_state');
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface GoogleChronicleBigQueryExportUdmEventsSettings {
  /**
  * Whether the data source is enabled for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The retention period for the data source in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}
  */
  readonly retentionDays: number;
}

export function googleChronicleBigQueryExportUdmEventsSettingsToTerraform(struct?: GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference | GoogleChronicleBigQueryExportUdmEventsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function googleChronicleBigQueryExportUdmEventsSettingsToHclTerraform(struct?: GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference | GoogleChronicleBigQueryExportUdmEventsSettings): any {
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
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleBigQueryExportUdmEventsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleBigQueryExportUdmEventsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // data_freshness_time - computed: true, optional: false, required: false
  public get dataFreshnessTime() {
    return this.getStringAttribute('data_freshness_time');
  }

  // data_volume - computed: true, optional: false, required: false
  public get dataVolume() {
    return this.getStringAttribute('data_volume');
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

  // latest_export_job_state - computed: true, optional: false, required: false
  public get latestExportJobState() {
    return this.getStringAttribute('latest_export_job_state');
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export google_chronicle_big_query_export}
*/
export class GoogleChronicleBigQueryExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_big_query_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleChronicleBigQueryExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleChronicleBigQueryExport to import
  * @param importFromId The id of the existing GoogleChronicleBigQueryExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleChronicleBigQueryExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_big_query_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_chronicle_big_query_export google_chronicle_big_query_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleChronicleBigQueryExportConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleChronicleBigQueryExportConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_big_query_export',
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
    this._bigQueryExportPackage = config.bigQueryExportPackage;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._entityGraphSettings.internalValue = config.entityGraphSettings;
    this._iocMatchesSettings.internalValue = config.iocMatchesSettings;
    this._ruleDetectionsSettings.internalValue = config.ruleDetectionsSettings;
    this._timeouts.internalValue = config.timeouts;
    this._udmEventsAggregatesSettings.internalValue = config.udmEventsAggregatesSettings;
    this._udmEventsSettings.internalValue = config.udmEventsSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // big_query_export_package - computed: true, optional: true, required: false
  private _bigQueryExportPackage?: string; 
  public get bigQueryExportPackage() {
    return this.getStringAttribute('big_query_export_package');
  }
  public set bigQueryExportPackage(value: string) {
    this._bigQueryExportPackage = value;
  }
  public resetBigQueryExportPackage() {
    this._bigQueryExportPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryExportPackageInput() {
    return this._bigQueryExportPackage;
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // provisioned - computed: true, optional: false, required: false
  public get provisioned() {
    return this.getBooleanAttribute('provisioned');
  }

  // entity_graph_settings - computed: false, optional: true, required: false
  private _entityGraphSettings = new GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference(this, "entity_graph_settings");
  public get entityGraphSettings() {
    return this._entityGraphSettings;
  }
  public putEntityGraphSettings(value: GoogleChronicleBigQueryExportEntityGraphSettings) {
    this._entityGraphSettings.internalValue = value;
  }
  public resetEntityGraphSettings() {
    this._entityGraphSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityGraphSettingsInput() {
    return this._entityGraphSettings.internalValue;
  }

  // ioc_matches_settings - computed: false, optional: true, required: false
  private _iocMatchesSettings = new GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference(this, "ioc_matches_settings");
  public get iocMatchesSettings() {
    return this._iocMatchesSettings;
  }
  public putIocMatchesSettings(value: GoogleChronicleBigQueryExportIocMatchesSettings) {
    this._iocMatchesSettings.internalValue = value;
  }
  public resetIocMatchesSettings() {
    this._iocMatchesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iocMatchesSettingsInput() {
    return this._iocMatchesSettings.internalValue;
  }

  // rule_detections_settings - computed: false, optional: true, required: false
  private _ruleDetectionsSettings = new GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference(this, "rule_detections_settings");
  public get ruleDetectionsSettings() {
    return this._ruleDetectionsSettings;
  }
  public putRuleDetectionsSettings(value: GoogleChronicleBigQueryExportRuleDetectionsSettings) {
    this._ruleDetectionsSettings.internalValue = value;
  }
  public resetRuleDetectionsSettings() {
    this._ruleDetectionsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDetectionsSettingsInput() {
    return this._ruleDetectionsSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleChronicleBigQueryExportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleChronicleBigQueryExportTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // udm_events_aggregates_settings - computed: false, optional: true, required: false
  private _udmEventsAggregatesSettings = new GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference(this, "udm_events_aggregates_settings");
  public get udmEventsAggregatesSettings() {
    return this._udmEventsAggregatesSettings;
  }
  public putUdmEventsAggregatesSettings(value: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings) {
    this._udmEventsAggregatesSettings.internalValue = value;
  }
  public resetUdmEventsAggregatesSettings() {
    this._udmEventsAggregatesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udmEventsAggregatesSettingsInput() {
    return this._udmEventsAggregatesSettings.internalValue;
  }

  // udm_events_settings - computed: false, optional: true, required: false
  private _udmEventsSettings = new GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference(this, "udm_events_settings");
  public get udmEventsSettings() {
    return this._udmEventsSettings;
  }
  public putUdmEventsSettings(value: GoogleChronicleBigQueryExportUdmEventsSettings) {
    this._udmEventsSettings.internalValue = value;
  }
  public resetUdmEventsSettings() {
    this._udmEventsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udmEventsSettingsInput() {
    return this._udmEventsSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      big_query_export_package: cdktf.stringToTerraform(this._bigQueryExportPackage),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      entity_graph_settings: googleChronicleBigQueryExportEntityGraphSettingsToTerraform(this._entityGraphSettings.internalValue),
      ioc_matches_settings: googleChronicleBigQueryExportIocMatchesSettingsToTerraform(this._iocMatchesSettings.internalValue),
      rule_detections_settings: googleChronicleBigQueryExportRuleDetectionsSettingsToTerraform(this._ruleDetectionsSettings.internalValue),
      timeouts: googleChronicleBigQueryExportTimeoutsToTerraform(this._timeouts.internalValue),
      udm_events_aggregates_settings: googleChronicleBigQueryExportUdmEventsAggregatesSettingsToTerraform(this._udmEventsAggregatesSettings.internalValue),
      udm_events_settings: googleChronicleBigQueryExportUdmEventsSettingsToTerraform(this._udmEventsSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      big_query_export_package: {
        value: cdktf.stringToHclTerraform(this._bigQueryExportPackage),
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
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
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
      entity_graph_settings: {
        value: googleChronicleBigQueryExportEntityGraphSettingsToHclTerraform(this._entityGraphSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleBigQueryExportEntityGraphSettingsList",
      },
      ioc_matches_settings: {
        value: googleChronicleBigQueryExportIocMatchesSettingsToHclTerraform(this._iocMatchesSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleBigQueryExportIocMatchesSettingsList",
      },
      rule_detections_settings: {
        value: googleChronicleBigQueryExportRuleDetectionsSettingsToHclTerraform(this._ruleDetectionsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleBigQueryExportRuleDetectionsSettingsList",
      },
      timeouts: {
        value: googleChronicleBigQueryExportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleChronicleBigQueryExportTimeouts",
      },
      udm_events_aggregates_settings: {
        value: googleChronicleBigQueryExportUdmEventsAggregatesSettingsToHclTerraform(this._udmEventsAggregatesSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsList",
      },
      udm_events_settings: {
        value: googleChronicleBigQueryExportUdmEventsSettingsToHclTerraform(this._udmEventsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleBigQueryExportUdmEventsSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
