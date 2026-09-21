// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataLossPreventionContentPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#deletion_policy GoogleDataLossPreventionContentPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Display name (max 63 chars).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#display_name GoogleDataLossPreventionContentPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#id GoogleDataLossPreventionContentPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent of the content policy in any of the following formats:
  * 
  * * 'projects/{{project}}/locations/{{location}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#parent GoogleDataLossPreventionContentPolicy#parent}
  */
  readonly parent: string;
  /**
  * default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#default_action GoogleDataLossPreventionContentPolicy#default_action}
  */
  readonly defaultAction?: GoogleDataLossPreventionContentPolicyDefaultAction;
  /**
  * failed_to_scan_supported_file_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#failed_to_scan_supported_file_type GoogleDataLossPreventionContentPolicy#failed_to_scan_supported_file_type}
  */
  readonly failedToScanSupportedFileType?: GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileType;
  /**
  * input_too_large block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#input_too_large GoogleDataLossPreventionContentPolicy#input_too_large}
  */
  readonly inputTooLarge?: GoogleDataLossPreventionContentPolicyInputTooLarge;
  /**
  * inspect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#inspect_config GoogleDataLossPreventionContentPolicy#inspect_config}
  */
  readonly inspectConfig?: GoogleDataLossPreventionContentPolicyInspectConfig;
  /**
  * logging_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#logging_configs GoogleDataLossPreventionContentPolicy#logging_configs}
  */
  readonly loggingConfigs?: GoogleDataLossPreventionContentPolicyLoggingConfigs[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#rules GoogleDataLossPreventionContentPolicy#rules}
  */
  readonly rules: GoogleDataLossPreventionContentPolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#timeouts GoogleDataLossPreventionContentPolicy#timeouts}
  */
  readonly timeouts?: GoogleDataLossPreventionContentPolicyTimeouts;
  /**
  * unsupported_file_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#unsupported_file_type GoogleDataLossPreventionContentPolicy#unsupported_file_type}
  */
  readonly unsupportedFileType?: GoogleDataLossPreventionContentPolicyUnsupportedFileType;
}
export interface GoogleDataLossPreventionContentPolicyErrorsDetails {
}

export function googleDataLossPreventionContentPolicyErrorsDetailsToTerraform(struct?: GoogleDataLossPreventionContentPolicyErrorsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionContentPolicyErrorsDetailsToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyErrorsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionContentPolicyErrorsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyErrorsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyErrorsDetails | undefined) {
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
  private _details = new cdktf.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleDataLossPreventionContentPolicyErrorsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataLossPreventionContentPolicyErrorsDetailsOutputReference {
    return new GoogleDataLossPreventionContentPolicyErrorsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyErrors {
}

export function googleDataLossPreventionContentPolicyErrorsToTerraform(struct?: GoogleDataLossPreventionContentPolicyErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionContentPolicyErrorsToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionContentPolicyErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  private _details = new GoogleDataLossPreventionContentPolicyErrorsDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // extra_info - computed: true, optional: false, required: false
  public get extraInfo() {
    return this.getStringAttribute('extra_info');
  }

  // timestamps - computed: true, optional: false, required: false
  public get timestamps() {
    return this.getListAttribute('timestamps');
  }
}

export class GoogleDataLossPreventionContentPolicyErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataLossPreventionContentPolicyErrorsOutputReference {
    return new GoogleDataLossPreventionContentPolicyErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyDefaultAction {
  /**
  * If set, the verdict will be returned to the user.
  * Possible values: ["ALLOW", "BLOCK"] Possible values: ["ALLOW", "BLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#return_verdict GoogleDataLossPreventionContentPolicy#return_verdict}
  */
  readonly returnVerdict?: string;
}

export function googleDataLossPreventionContentPolicyDefaultActionToTerraform(struct?: GoogleDataLossPreventionContentPolicyDefaultActionOutputReference | GoogleDataLossPreventionContentPolicyDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_verdict: cdktf.stringToTerraform(struct!.returnVerdict),
  }
}


export function googleDataLossPreventionContentPolicyDefaultActionToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyDefaultActionOutputReference | GoogleDataLossPreventionContentPolicyDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_verdict: {
      value: cdktf.stringToHclTerraform(struct!.returnVerdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyDefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyDefaultAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnVerdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnVerdict = this._returnVerdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyDefaultAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnVerdict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnVerdict = value.returnVerdict;
    }
  }

  // return_verdict - computed: false, optional: true, required: false
  private _returnVerdict?: string; 
  public get returnVerdict() {
    return this.getStringAttribute('return_verdict');
  }
  public set returnVerdict(value: string) {
    this._returnVerdict = value;
  }
  public resetReturnVerdict() {
    this._returnVerdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnVerdictInput() {
    return this._returnVerdict;
  }
}
export interface GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileType {
  /**
  * If set, the verdict will be returned to the user.
  * Possible values: ["ALLOW", "BLOCK"] Possible values: ["ALLOW", "BLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#return_verdict GoogleDataLossPreventionContentPolicy#return_verdict}
  */
  readonly returnVerdict?: string;
}

export function googleDataLossPreventionContentPolicyFailedToScanSupportedFileTypeToTerraform(struct?: GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileTypeOutputReference | GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_verdict: cdktf.stringToTerraform(struct!.returnVerdict),
  }
}


export function googleDataLossPreventionContentPolicyFailedToScanSupportedFileTypeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileTypeOutputReference | GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_verdict: {
      value: cdktf.stringToHclTerraform(struct!.returnVerdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnVerdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnVerdict = this._returnVerdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnVerdict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnVerdict = value.returnVerdict;
    }
  }

  // return_verdict - computed: false, optional: true, required: false
  private _returnVerdict?: string; 
  public get returnVerdict() {
    return this.getStringAttribute('return_verdict');
  }
  public set returnVerdict(value: string) {
    this._returnVerdict = value;
  }
  public resetReturnVerdict() {
    this._returnVerdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnVerdictInput() {
    return this._returnVerdict;
  }
}
export interface GoogleDataLossPreventionContentPolicyInputTooLarge {
  /**
  * If set, the verdict will be returned to the user.
  * Possible values: ["ALLOW", "BLOCK"] Possible values: ["ALLOW", "BLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#return_verdict GoogleDataLossPreventionContentPolicy#return_verdict}
  */
  readonly returnVerdict?: string;
}

export function googleDataLossPreventionContentPolicyInputTooLargeToTerraform(struct?: GoogleDataLossPreventionContentPolicyInputTooLargeOutputReference | GoogleDataLossPreventionContentPolicyInputTooLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_verdict: cdktf.stringToTerraform(struct!.returnVerdict),
  }
}


export function googleDataLossPreventionContentPolicyInputTooLargeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInputTooLargeOutputReference | GoogleDataLossPreventionContentPolicyInputTooLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_verdict: {
      value: cdktf.stringToHclTerraform(struct!.returnVerdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInputTooLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInputTooLarge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnVerdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnVerdict = this._returnVerdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInputTooLarge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnVerdict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnVerdict = value.returnVerdict;
    }
  }

  // return_verdict - computed: false, optional: true, required: false
  private _returnVerdict?: string; 
  public get returnVerdict() {
    return this.getStringAttribute('return_verdict');
  }
  public set returnVerdict(value: string) {
    this._returnVerdict = value;
  }
  public resetReturnVerdict() {
    this._returnVerdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnVerdictInput() {
    return this._returnVerdict;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#path GoogleDataLossPreventionContentPolicy#path}
  */
  readonly path: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
  * phrase and every phrase must contain at least 2 characters that are letters or digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#words GoogleDataLossPreventionContentPolicy#words}
  */
  readonly words: string[];
}

export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    words: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.words),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary {
  /**
  * cloud_storage_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#cloud_storage_path GoogleDataLossPreventionContentPolicy#cloud_storage_path}
  */
  readonly cloudStoragePath?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath;
  /**
  * word_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#word_list GoogleDataLossPreventionContentPolicy#word_list}
  */
  readonly wordList?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct;
}

export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructToTerraform(struct!.wordList),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_path: {
      value: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathToHclTerraform(struct!.cloudStoragePath),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathList",
    },
    word_list: {
      value: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructToHclTerraform(struct!.wordList),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStoragePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStoragePath = this._cloudStoragePath?.internalValue;
    }
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStoragePath.internalValue = undefined;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStoragePath.internalValue = value.cloudStoragePath;
      this._wordList.internalValue = value.wordList;
    }
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath = new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference(this, "cloud_storage_path");
  public get cloudStoragePath() {
    return this._cloudStoragePath;
  }
  public putCloudStoragePath(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryCloudStoragePath) {
    this._cloudStoragePath.internalValue = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath.internalValue;
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList = new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryWordListStruct) {
    this._wordList.internalValue = value;
  }
  public resetWordList() {
    this._wordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#score GoogleDataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names
  * listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#name GoogleDataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#version GoogleDataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#sensitivity_score GoogleDataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore;
}

export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
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

  // version - computed: false, optional: true, required: false
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

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#group_indexes GoogleDataLossPreventionContentPolicy#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
  * Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#pattern GoogleDataLossPreventionContentPolicy#pattern}
  */
  readonly pattern: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#score GoogleDataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType {
  /**
  * Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342'
  * or 'projects/project-id/storedInfoTypes/432452342'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#name GoogleDataLossPreventionContentPolicy#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType {
}

export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypes {
  /**
  * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. Possible values: ["EXCLUSION_TYPE_EXCLUDE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#exclusion_type GoogleDataLossPreventionContentPolicy#exclusion_type}
  */
  readonly exclusionType?: string;
  /**
  * Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria
  * specified by the rule. Default value: "VERY_LIKELY" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#likelihood GoogleDataLossPreventionContentPolicy#likelihood}
  */
  readonly likelihood?: string;
  /**
  * dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#dictionary GoogleDataLossPreventionContentPolicy#dictionary}
  */
  readonly dictionary?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary;
  /**
  * info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#info_type GoogleDataLossPreventionContentPolicy#info_type}
  */
  readonly infoType: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType;
  /**
  * regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#regex GoogleDataLossPreventionContentPolicy#regex}
  */
  readonly regex?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#sensitivity_score GoogleDataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore;
  /**
  * stored_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#stored_type GoogleDataLossPreventionContentPolicy#stored_type}
  */
  readonly storedType?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType;
  /**
  * surrogate_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#surrogate_type GoogleDataLossPreventionContentPolicy#surrogate_type}
  */
  readonly surrogateType?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType;
}

export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_type: cdktf.stringToTerraform(struct!.exclusionType),
    likelihood: cdktf.stringToTerraform(struct!.likelihood),
    dictionary: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryToTerraform(struct!.dictionary),
    info_type: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeToTerraform(struct!.infoType),
    regex: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexToTerraform(struct!.regex),
    sensitivity_score: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
    stored_type: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeToTerraform(struct!.storedType),
    surrogate_type: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeToTerraform(struct!.surrogateType),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_type: {
      value: cdktf.stringToHclTerraform(struct!.exclusionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    likelihood: {
      value: cdktf.stringToHclTerraform(struct!.likelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary: {
      value: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryToHclTerraform(struct!.dictionary),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryList",
    },
    info_type: {
      value: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeToHclTerraform(struct!.infoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeList",
    },
    regex: {
      value: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexToHclTerraform(struct!.regex),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexList",
    },
    sensitivity_score: {
      value: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreList",
    },
    stored_type: {
      value: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeToHclTerraform(struct!.storedType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeList",
    },
    surrogate_type: {
      value: googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeToHclTerraform(struct!.surrogateType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionType = this._exclusionType;
    }
    if (this._likelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.likelihood = this._likelihood;
    }
    if (this._dictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary?.internalValue;
    }
    if (this._infoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoType = this._infoType?.internalValue;
    }
    if (this._regex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex?.internalValue;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    if (this._storedType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedType = this._storedType?.internalValue;
    }
    if (this._surrogateType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateType = this._surrogateType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionType = undefined;
      this._likelihood = undefined;
      this._dictionary.internalValue = undefined;
      this._infoType.internalValue = undefined;
      this._regex.internalValue = undefined;
      this._sensitivityScore.internalValue = undefined;
      this._storedType.internalValue = undefined;
      this._surrogateType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionType = value.exclusionType;
      this._likelihood = value.likelihood;
      this._dictionary.internalValue = value.dictionary;
      this._infoType.internalValue = value.infoType;
      this._regex.internalValue = value.regex;
      this._sensitivityScore.internalValue = value.sensitivityScore;
      this._storedType.internalValue = value.storedType;
      this._surrogateType.internalValue = value.surrogateType;
    }
  }

  // exclusion_type - computed: false, optional: true, required: false
  private _exclusionType?: string; 
  public get exclusionType() {
    return this.getStringAttribute('exclusion_type');
  }
  public set exclusionType(value: string) {
    this._exclusionType = value;
  }
  public resetExclusionType() {
    this._exclusionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionTypeInput() {
    return this._exclusionType;
  }

  // likelihood - computed: false, optional: true, required: false
  private _likelihood?: string; 
  public get likelihood() {
    return this.getStringAttribute('likelihood');
  }
  public set likelihood(value: string) {
    this._likelihood = value;
  }
  public resetLikelihood() {
    this._likelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likelihoodInput() {
    return this._likelihood;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // info_type - computed: false, optional: false, required: true
  private _infoType = new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoTypeOutputReference(this, "info_type");
  public get infoType() {
    return this._infoType;
  }
  public putInfoType(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesInfoType) {
    this._infoType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeInput() {
    return this._infoType.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }

  // stored_type - computed: false, optional: true, required: false
  private _storedType = new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredTypeOutputReference(this, "stored_type");
  public get storedType() {
    return this._storedType;
  }
  public putStoredType(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesStoredType) {
    this._storedType.internalValue = value;
  }
  public resetStoredType() {
    this._storedType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedTypeInput() {
    return this._storedType.internalValue;
  }

  // surrogate_type - computed: false, optional: true, required: false
  private _surrogateType = new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateTypeOutputReference(this, "surrogate_type");
  public get surrogateType() {
    return this._surrogateType;
  }
  public putSurrogateType(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesSurrogateType) {
    this._surrogateType.internalValue = value;
  }
  public resetSurrogateType() {
    this._surrogateType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateTypeInput() {
    return this._surrogateType.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesOutputReference {
    return new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#score GoogleDataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#name GoogleDataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version of the information type to use. By default, the version is set to stable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#version GoogleDataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#sensitivity_score GoogleDataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore;
}

export function googleDataLossPreventionContentPolicyInspectConfigInfoTypesToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
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

  // version - computed: false, optional: true, required: false
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

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyInspectConfigInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesOutputReference {
    return new GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#score GoogleDataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#name GoogleDataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#version GoogleDataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#sensitivity_score GoogleDataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore;
}

export function googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
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

  // version - computed: false, optional: true, required: false
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

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType {
  /**
  * Max findings limit for the given infoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#max_findings GoogleDataLossPreventionContentPolicy#max_findings}
  */
  readonly maxFindings: number;
  /**
  * info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#info_type GoogleDataLossPreventionContentPolicy#info_type}
  */
  readonly infoType?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;
}

export function googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_findings: cdktf.numberToTerraform(struct!.maxFindings),
    info_type: googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct!.infoType),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_findings: {
      value: cdktf.numberToHclTerraform(struct!.maxFindings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    info_type: {
      value: googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToHclTerraform(struct!.infoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFindings !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindings = this._maxFindings;
    }
    if (this._infoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoType = this._infoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxFindings = undefined;
      this._infoType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxFindings = value.maxFindings;
      this._infoType.internalValue = value.infoType;
    }
  }

  // max_findings - computed: false, optional: false, required: true
  private _maxFindings?: number; 
  public get maxFindings() {
    return this.getNumberAttribute('max_findings');
  }
  public set maxFindings(value: number) {
    this._maxFindings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsInput() {
    return this._maxFindings;
  }

  // info_type - computed: false, optional: true, required: false
  private _infoType = new GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference(this, "info_type");
  public get infoType() {
    return this._infoType;
  }
  public putInfoType(value: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeInfoType) {
    this._infoType.internalValue = value;
  }
  public resetInfoType() {
    this._infoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeInput() {
    return this._infoType.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference {
    return new GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigLimits {
  /**
  * Max number of findings that will be returned for each item scanned. The maximum returned is 2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#max_findings_per_item GoogleDataLossPreventionContentPolicy#max_findings_per_item}
  */
  readonly maxFindingsPerItem: number;
  /**
  * Max number of findings that will be returned per request/job. The maximum returned is 2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#max_findings_per_request GoogleDataLossPreventionContentPolicy#max_findings_per_request}
  */
  readonly maxFindingsPerRequest: number;
  /**
  * max_findings_per_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#max_findings_per_info_type GoogleDataLossPreventionContentPolicy#max_findings_per_info_type}
  */
  readonly maxFindingsPerInfoType?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable;
}

export function googleDataLossPreventionContentPolicyInspectConfigLimitsToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_findings_per_item: cdktf.numberToTerraform(struct!.maxFindingsPerItem),
    max_findings_per_request: cdktf.numberToTerraform(struct!.maxFindingsPerRequest),
    max_findings_per_info_type: cdktf.listMapper(googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform, true)(struct!.maxFindingsPerInfoType),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigLimitsToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigLimitsOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_findings_per_item: {
      value: cdktf.numberToHclTerraform(struct!.maxFindingsPerItem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_findings_per_request: {
      value: cdktf.numberToHclTerraform(struct!.maxFindingsPerRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_findings_per_info_type: {
      value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeToHclTerraform, true)(struct!.maxFindingsPerInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFindingsPerItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerItem = this._maxFindingsPerItem;
    }
    if (this._maxFindingsPerRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerRequest = this._maxFindingsPerRequest;
    }
    if (this._maxFindingsPerInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerInfoType = this._maxFindingsPerInfoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFindingsPerItem = undefined;
      this._maxFindingsPerRequest = undefined;
      this._maxFindingsPerInfoType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFindingsPerItem = value.maxFindingsPerItem;
      this._maxFindingsPerRequest = value.maxFindingsPerRequest;
      this._maxFindingsPerInfoType.internalValue = value.maxFindingsPerInfoType;
    }
  }

  // max_findings_per_item - computed: false, optional: false, required: true
  private _maxFindingsPerItem?: number; 
  public get maxFindingsPerItem() {
    return this.getNumberAttribute('max_findings_per_item');
  }
  public set maxFindingsPerItem(value: number) {
    this._maxFindingsPerItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerItemInput() {
    return this._maxFindingsPerItem;
  }

  // max_findings_per_request - computed: false, optional: false, required: true
  private _maxFindingsPerRequest?: number; 
  public get maxFindingsPerRequest() {
    return this.getNumberAttribute('max_findings_per_request');
  }
  public set maxFindingsPerRequest(value: number) {
    this._maxFindingsPerRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerRequestInput() {
    return this._maxFindingsPerRequest;
  }

  // max_findings_per_info_type - computed: false, optional: true, required: false
  private _maxFindingsPerInfoType = new GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoTypeList(this, "max_findings_per_info_type", false);
  public get maxFindingsPerInfoType() {
    return this._maxFindingsPerInfoType;
  }
  public putMaxFindingsPerInfoType(value: GoogleDataLossPreventionContentPolicyInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable) {
    this._maxFindingsPerInfoType.internalValue = value;
  }
  public resetMaxFindingsPerInfoType() {
    this._maxFindingsPerInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerInfoTypeInput() {
    return this._maxFindingsPerInfoType.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#name GoogleDataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#version GoogleDataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
    }
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

  // version - computed: false, optional: true, required: false
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
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType {
  /**
  * Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#min_likelihood GoogleDataLossPreventionContentPolicy#min_likelihood}
  */
  readonly minLikelihood: string;
  /**
  * info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#info_type GoogleDataLossPreventionContentPolicy#info_type}
  */
  readonly infoType?: GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType;
}

export function googleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_likelihood: cdktf.stringToTerraform(struct!.minLikelihood),
    info_type: googleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeToTerraform(struct!.infoType),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_likelihood: {
      value: cdktf.stringToHclTerraform(struct!.minLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_type: {
      value: googleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeToHclTerraform(struct!.infoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLikelihood = this._minLikelihood;
    }
    if (this._infoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoType = this._infoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minLikelihood = undefined;
      this._infoType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minLikelihood = value.minLikelihood;
      this._infoType.internalValue = value.infoType;
    }
  }

  // min_likelihood - computed: false, optional: false, required: true
  private _minLikelihood?: string; 
  public get minLikelihood() {
    return this.getStringAttribute('min_likelihood');
  }
  public set minLikelihood(value: string) {
    this._minLikelihood = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minLikelihoodInput() {
    return this._minLikelihood;
  }

  // info_type - computed: false, optional: true, required: false
  private _infoType = new GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoTypeOutputReference(this, "info_type");
  public get infoType() {
    return this._infoType;
  }
  public putInfoType(value: GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeInfoType) {
    this._infoType.internalValue = value;
  }
  public resetInfoType() {
    this._infoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeInput() {
    return this._infoType.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeOutputReference {
    return new GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#score GoogleDataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#name GoogleDataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#version GoogleDataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#sensitivity_score GoogleDataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
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

  // version - computed: false, optional: true, required: false
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

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesOutputReference {
    return new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#path GoogleDataLossPreventionContentPolicy#path}
  */
  readonly path: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
  * phrase and every phrase must contain at least 2 characters that are letters or digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#words GoogleDataLossPreventionContentPolicy#words}
  */
  readonly words: string[];
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    words: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.words),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary {
  /**
  * cloud_storage_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#cloud_storage_path GoogleDataLossPreventionContentPolicy#cloud_storage_path}
  */
  readonly cloudStoragePath?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath;
  /**
  * word_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#word_list GoogleDataLossPreventionContentPolicy#word_list}
  */
  readonly wordList?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToTerraform(struct!.wordList),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_path: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToHclTerraform(struct!.cloudStoragePath),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathList",
    },
    word_list: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToHclTerraform(struct!.wordList),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStoragePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStoragePath = this._cloudStoragePath?.internalValue;
    }
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStoragePath.internalValue = undefined;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStoragePath.internalValue = value.cloudStoragePath;
      this._wordList.internalValue = value.wordList;
    }
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference(this, "cloud_storage_path");
  public get cloudStoragePath() {
    return this._cloudStoragePath;
  }
  public putCloudStoragePath(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath) {
    this._cloudStoragePath.internalValue = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath.internalValue;
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct) {
    this._wordList.internalValue = value;
  }
  public resetWordList() {
    this._wordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex {
  /**
  * The index of the submatch to extract as findings. When not specified,
  * the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#group_indexes GoogleDataLossPreventionContentPolicy#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression. Its syntax
  * (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#pattern GoogleDataLossPreventionContentPolicy#pattern}
  */
  readonly pattern: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity {
  /**
  * Number of characters after the finding to consider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#window_after GoogleDataLossPreventionContentPolicy#window_after}
  */
  readonly windowAfter?: number;
  /**
  * Number of characters before the finding to consider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#window_before GoogleDataLossPreventionContentPolicy#window_before}
  */
  readonly windowBefore?: number;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_after: cdktf.numberToTerraform(struct!.windowAfter),
    window_before: cdktf.numberToTerraform(struct!.windowBefore),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window_after: {
      value: cdktf.numberToHclTerraform(struct!.windowAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_before: {
      value: cdktf.numberToHclTerraform(struct!.windowBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowAfter = this._windowAfter;
    }
    if (this._windowBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowBefore = this._windowBefore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._windowAfter = undefined;
      this._windowBefore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._windowAfter = value.windowAfter;
      this._windowBefore = value.windowBefore;
    }
  }

  // window_after - computed: false, optional: true, required: false
  private _windowAfter?: number; 
  public get windowAfter() {
    return this.getNumberAttribute('window_after');
  }
  public set windowAfter(value: number) {
    this._windowAfter = value;
  }
  public resetWindowAfter() {
    this._windowAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowAfterInput() {
    return this._windowAfter;
  }

  // window_before - computed: false, optional: true, required: false
  private _windowBefore?: number; 
  public get windowBefore() {
    return this.getNumberAttribute('window_before');
  }
  public set windowBefore(value: number) {
    this._windowBefore = value;
  }
  public resetWindowBefore() {
    this._windowBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowBeforeInput() {
    return this._windowBefore;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword {
  /**
  * hotword_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#hotword_regex GoogleDataLossPreventionContentPolicy#hotword_regex}
  */
  readonly hotwordRegex: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex;
  /**
  * proximity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#proximity GoogleDataLossPreventionContentPolicy#proximity}
  */
  readonly proximity: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hotword_regex: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToTerraform(struct!.hotwordRegex),
    proximity: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToTerraform(struct!.proximity),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hotword_regex: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToHclTerraform(struct!.hotwordRegex),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexList",
    },
    proximity: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToHclTerraform(struct!.proximity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hotwordRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRegex = this._hotwordRegex?.internalValue;
    }
    if (this._proximity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximity = this._proximity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hotwordRegex.internalValue = undefined;
      this._proximity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hotwordRegex.internalValue = value.hotwordRegex;
      this._proximity.internalValue = value.proximity;
    }
  }

  // hotword_regex - computed: false, optional: false, required: true
  private _hotwordRegex = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference(this, "hotword_regex");
  public get hotwordRegex() {
    return this._hotwordRegex;
  }
  public putHotwordRegex(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex) {
    this._hotwordRegex.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRegexInput() {
    return this._hotwordRegex.internalValue;
  }

  // proximity - computed: false, optional: false, required: true
  private _proximity = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference(this, "proximity");
  public get proximity() {
    return this._proximity;
  }
  public putProximity(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity) {
    this._proximity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#score GoogleDataLossPreventionContentPolicy#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#name GoogleDataLossPreventionContentPolicy#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#version GoogleDataLossPreventionContentPolicy#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#sensitivity_score GoogleDataLossPreventionContentPolicy#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
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

  // version - computed: false, optional: true, required: false
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

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference {
    return new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes {
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#info_types GoogleDataLossPreventionContentPolicy#info_types}
  */
  readonly infoTypes: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform, true)(struct!.infoTypes),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_types: {
      value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infoTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infoTypes.internalValue = value.infoTypes;
    }
  }

  // info_types - computed: false, optional: false, required: true
  private _infoTypes = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#group_indexes GoogleDataLossPreventionContentPolicy#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
  * Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#pattern GoogleDataLossPreventionContentPolicy#pattern}
  */
  readonly pattern: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule {
  /**
  * How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#matching_type GoogleDataLossPreventionContentPolicy#matching_type}
  */
  readonly matchingType: string;
  /**
  * dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#dictionary GoogleDataLossPreventionContentPolicy#dictionary}
  */
  readonly dictionary?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary;
  /**
  * exclude_by_hotword block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#exclude_by_hotword GoogleDataLossPreventionContentPolicy#exclude_by_hotword}
  */
  readonly excludeByHotword?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword;
  /**
  * exclude_info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#exclude_info_types GoogleDataLossPreventionContentPolicy#exclude_info_types}
  */
  readonly excludeInfoTypes?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes;
  /**
  * regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#regex GoogleDataLossPreventionContentPolicy#regex}
  */
  readonly regex?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matching_type: cdktf.stringToTerraform(struct!.matchingType),
    dictionary: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform(struct!.dictionary),
    exclude_by_hotword: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToTerraform(struct!.excludeByHotword),
    exclude_info_types: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform(struct!.excludeInfoTypes),
    regex: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexToTerraform(struct!.regex),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matching_type: {
      value: cdktf.stringToHclTerraform(struct!.matchingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryToHclTerraform(struct!.dictionary),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryList",
    },
    exclude_by_hotword: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToHclTerraform(struct!.excludeByHotword),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordList",
    },
    exclude_info_types: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToHclTerraform(struct!.excludeInfoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesList",
    },
    regex: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexToHclTerraform(struct!.regex),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingType = this._matchingType;
    }
    if (this._dictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary?.internalValue;
    }
    if (this._excludeByHotword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeByHotword = this._excludeByHotword?.internalValue;
    }
    if (this._excludeInfoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInfoTypes = this._excludeInfoTypes?.internalValue;
    }
    if (this._regex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchingType = undefined;
      this._dictionary.internalValue = undefined;
      this._excludeByHotword.internalValue = undefined;
      this._excludeInfoTypes.internalValue = undefined;
      this._regex.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchingType = value.matchingType;
      this._dictionary.internalValue = value.dictionary;
      this._excludeByHotword.internalValue = value.excludeByHotword;
      this._excludeInfoTypes.internalValue = value.excludeInfoTypes;
      this._regex.internalValue = value.regex;
    }
  }

  // matching_type - computed: false, optional: false, required: true
  private _matchingType?: string; 
  public get matchingType() {
    return this.getStringAttribute('matching_type');
  }
  public set matchingType(value: string) {
    this._matchingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypeInput() {
    return this._matchingType;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // exclude_by_hotword - computed: false, optional: true, required: false
  private _excludeByHotword = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference(this, "exclude_by_hotword");
  public get excludeByHotword() {
    return this._excludeByHotword;
  }
  public putExcludeByHotword(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeByHotword) {
    this._excludeByHotword.internalValue = value;
  }
  public resetExcludeByHotword() {
    this._excludeByHotword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeByHotwordInput() {
    return this._excludeByHotword.internalValue;
  }

  // exclude_info_types - computed: false, optional: true, required: false
  private _excludeInfoTypes = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference(this, "exclude_info_types");
  public get excludeInfoTypes() {
    return this._excludeInfoTypes;
  }
  public putExcludeInfoTypes(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes) {
    this._excludeInfoTypes.internalValue = value;
  }
  public resetExcludeInfoTypes() {
    this._excludeInfoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInfoTypesInput() {
    return this._excludeInfoTypes.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex {
  /**
  * The index of the submatch to extract as findings. When not specified,
  * the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#group_indexes GoogleDataLossPreventionContentPolicy#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression. Its syntax
  * (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#pattern GoogleDataLossPreventionContentPolicy#pattern}
  */
  readonly pattern: string;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment {
  /**
  * Set the likelihood of a finding to a fixed value. Either this or relative_likelihood can be set. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#fixed_likelihood GoogleDataLossPreventionContentPolicy#fixed_likelihood}
  */
  readonly fixedLikelihood?: string;
  /**
  * Increase or decrease the likelihood by the specified number of levels. For example,
  * if a finding would be POSSIBLE without the detection rule and relativeLikelihood is 1,
  * then it is upgraded to LIKELY, while a value of -1 would downgrade it to UNLIKELY.
  * Likelihood may never drop below VERY_UNLIKELY or exceed VERY_LIKELY, so applying an
  * adjustment of 1 followed by an adjustment of -1 when base likelihood is VERY_LIKELY
  * will result in a final likelihood of LIKELY. Either this or fixed_likelihood can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#relative_likelihood GoogleDataLossPreventionContentPolicy#relative_likelihood}
  */
  readonly relativeLikelihood?: number;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_likelihood: cdktf.stringToTerraform(struct!.fixedLikelihood),
    relative_likelihood: cdktf.numberToTerraform(struct!.relativeLikelihood),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_likelihood: {
      value: cdktf.stringToHclTerraform(struct!.fixedLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_likelihood: {
      value: cdktf.numberToHclTerraform(struct!.relativeLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLikelihood = this._fixedLikelihood;
    }
    if (this._relativeLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeLikelihood = this._relativeLikelihood;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedLikelihood = undefined;
      this._relativeLikelihood = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedLikelihood = value.fixedLikelihood;
      this._relativeLikelihood = value.relativeLikelihood;
    }
  }

  // fixed_likelihood - computed: false, optional: true, required: false
  private _fixedLikelihood?: string; 
  public get fixedLikelihood() {
    return this.getStringAttribute('fixed_likelihood');
  }
  public set fixedLikelihood(value: string) {
    this._fixedLikelihood = value;
  }
  public resetFixedLikelihood() {
    this._fixedLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLikelihoodInput() {
    return this._fixedLikelihood;
  }

  // relative_likelihood - computed: false, optional: true, required: false
  private _relativeLikelihood?: number; 
  public get relativeLikelihood() {
    return this.getNumberAttribute('relative_likelihood');
  }
  public set relativeLikelihood(value: number) {
    this._relativeLikelihood = value;
  }
  public resetRelativeLikelihood() {
    this._relativeLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLikelihoodInput() {
    return this._relativeLikelihood;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity {
  /**
  * Number of characters after the finding to consider. Either this or window_before must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#window_after GoogleDataLossPreventionContentPolicy#window_after}
  */
  readonly windowAfter?: number;
  /**
  * Number of characters before the finding to consider. Either this or window_after must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#window_before GoogleDataLossPreventionContentPolicy#window_before}
  */
  readonly windowBefore?: number;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_after: cdktf.numberToTerraform(struct!.windowAfter),
    window_before: cdktf.numberToTerraform(struct!.windowBefore),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window_after: {
      value: cdktf.numberToHclTerraform(struct!.windowAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_before: {
      value: cdktf.numberToHclTerraform(struct!.windowBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowAfter = this._windowAfter;
    }
    if (this._windowBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowBefore = this._windowBefore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._windowAfter = undefined;
      this._windowBefore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._windowAfter = value.windowAfter;
      this._windowBefore = value.windowBefore;
    }
  }

  // window_after - computed: false, optional: true, required: false
  private _windowAfter?: number; 
  public get windowAfter() {
    return this.getNumberAttribute('window_after');
  }
  public set windowAfter(value: number) {
    this._windowAfter = value;
  }
  public resetWindowAfter() {
    this._windowAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowAfterInput() {
    return this._windowAfter;
  }

  // window_before - computed: false, optional: true, required: false
  private _windowBefore?: number; 
  public get windowBefore() {
    return this.getNumberAttribute('window_before');
  }
  public set windowBefore(value: number) {
    this._windowBefore = value;
  }
  public resetWindowBefore() {
    this._windowBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowBeforeInput() {
    return this._windowBefore;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule {
  /**
  * hotword_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#hotword_regex GoogleDataLossPreventionContentPolicy#hotword_regex}
  */
  readonly hotwordRegex: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex;
  /**
  * likelihood_adjustment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#likelihood_adjustment GoogleDataLossPreventionContentPolicy#likelihood_adjustment}
  */
  readonly likelihoodAdjustment: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment;
  /**
  * proximity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#proximity GoogleDataLossPreventionContentPolicy#proximity}
  */
  readonly proximity: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hotword_regex: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform(struct!.hotwordRegex),
    likelihood_adjustment: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform(struct!.likelihoodAdjustment),
    proximity: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityToTerraform(struct!.proximity),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleOutputReference | GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hotword_regex: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexToHclTerraform(struct!.hotwordRegex),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexList",
    },
    likelihood_adjustment: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToHclTerraform(struct!.likelihoodAdjustment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentList",
    },
    proximity: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityToHclTerraform(struct!.proximity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hotwordRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRegex = this._hotwordRegex?.internalValue;
    }
    if (this._likelihoodAdjustment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.likelihoodAdjustment = this._likelihoodAdjustment?.internalValue;
    }
    if (this._proximity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximity = this._proximity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hotwordRegex.internalValue = undefined;
      this._likelihoodAdjustment.internalValue = undefined;
      this._proximity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hotwordRegex.internalValue = value.hotwordRegex;
      this._likelihoodAdjustment.internalValue = value.likelihoodAdjustment;
      this._proximity.internalValue = value.proximity;
    }
  }

  // hotword_regex - computed: false, optional: false, required: true
  private _hotwordRegex = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference(this, "hotword_regex");
  public get hotwordRegex() {
    return this._hotwordRegex;
  }
  public putHotwordRegex(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleHotwordRegex) {
    this._hotwordRegex.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRegexInput() {
    return this._hotwordRegex.internalValue;
  }

  // likelihood_adjustment - computed: false, optional: false, required: true
  private _likelihoodAdjustment = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference(this, "likelihood_adjustment");
  public get likelihoodAdjustment() {
    return this._likelihoodAdjustment;
  }
  public putLikelihoodAdjustment(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment) {
    this._likelihoodAdjustment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get likelihoodAdjustmentInput() {
    return this._likelihoodAdjustment.internalValue;
  }

  // proximity - computed: false, optional: false, required: true
  private _proximity = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximityOutputReference(this, "proximity");
  public get proximity() {
    return this._proximity;
  }
  public putProximity(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleProximity) {
    this._proximity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRules {
  /**
  * exclusion_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#exclusion_rule GoogleDataLossPreventionContentPolicy#exclusion_rule}
  */
  readonly exclusionRule?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule;
  /**
  * hotword_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#hotword_rule GoogleDataLossPreventionContentPolicy#hotword_rule}
  */
  readonly hotwordRule?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_rule: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleToTerraform(struct!.exclusionRule),
    hotword_rule: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleToTerraform(struct!.hotwordRule),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_rule: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleToHclTerraform(struct!.exclusionRule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleList",
    },
    hotword_rule: {
      value: googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleToHclTerraform(struct!.hotwordRule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionRule = this._exclusionRule?.internalValue;
    }
    if (this._hotwordRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRule = this._hotwordRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionRule.internalValue = undefined;
      this._hotwordRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionRule.internalValue = value.exclusionRule;
      this._hotwordRule.internalValue = value.hotwordRule;
    }
  }

  // exclusion_rule - computed: false, optional: true, required: false
  private _exclusionRule = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRuleOutputReference(this, "exclusion_rule");
  public get exclusionRule() {
    return this._exclusionRule;
  }
  public putExclusionRule(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesExclusionRule) {
    this._exclusionRule.internalValue = value;
  }
  public resetExclusionRule() {
    this._exclusionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionRuleInput() {
    return this._exclusionRule.internalValue;
  }

  // hotword_rule - computed: false, optional: true, required: false
  private _hotwordRule = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRuleOutputReference(this, "hotword_rule");
  public get hotwordRule() {
    return this._hotwordRule;
  }
  public putHotwordRule(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesHotwordRule) {
    this._hotwordRule.internalValue = value;
  }
  public resetHotwordRule() {
    this._hotwordRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRuleInput() {
    return this._hotwordRule.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesOutputReference {
    return new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfigRuleSet {
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#info_types GoogleDataLossPreventionContentPolicy#info_types}
  */
  readonly infoTypes: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#rules GoogleDataLossPreventionContentPolicy#rules}
  */
  readonly rules: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRules[] | cdktf.IResolvable;
}

export function googleDataLossPreventionContentPolicyInspectConfigRuleSetToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(googleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesToTerraform, true)(struct!.infoTypes),
    rules: cdktf.listMapper(googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesToTerraform, true)(struct!.rules),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigRuleSetToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_types: {
      value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesList",
    },
    rules: {
      value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyInspectConfigRuleSetRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfigRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = value.infoTypes;
      this._rules.internalValue = value.rules;
    }
  }

  // info_types - computed: false, optional: false, required: true
  private _infoTypes = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyInspectConfigRuleSetList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyInspectConfigRuleSet[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyInspectConfigRuleSetOutputReference {
    return new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyInspectConfig {
  /**
  * List of options defining data content to scan. If empty, text, images, and other content will be included. Possible values: ["CONTENT_TEXT", "CONTENT_IMAGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#content_options GoogleDataLossPreventionContentPolicy#content_options}
  */
  readonly contentOptions?: string[];
  /**
  * When true, excludes type information of the findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#exclude_info_types GoogleDataLossPreventionContentPolicy#exclude_info_types}
  */
  readonly excludeInfoTypes?: boolean | cdktf.IResolvable;
  /**
  * When true, a contextual quote from the data that triggered a finding is included in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#include_quote GoogleDataLossPreventionContentPolicy#include_quote}
  */
  readonly includeQuote?: boolean | cdktf.IResolvable;
  /**
  * Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info Default value: "POSSIBLE" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#min_likelihood GoogleDataLossPreventionContentPolicy#min_likelihood}
  */
  readonly minLikelihood?: string;
  /**
  * custom_info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#custom_info_types GoogleDataLossPreventionContentPolicy#custom_info_types}
  */
  readonly customInfoTypes?: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypes[] | cdktf.IResolvable;
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#info_types GoogleDataLossPreventionContentPolicy#info_types}
  */
  readonly infoTypes?: GoogleDataLossPreventionContentPolicyInspectConfigInfoTypes[] | cdktf.IResolvable;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#limits GoogleDataLossPreventionContentPolicy#limits}
  */
  readonly limits?: GoogleDataLossPreventionContentPolicyInspectConfigLimits;
  /**
  * min_likelihood_per_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#min_likelihood_per_info_type GoogleDataLossPreventionContentPolicy#min_likelihood_per_info_type}
  */
  readonly minLikelihoodPerInfoType?: GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType[] | cdktf.IResolvable;
  /**
  * rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#rule_set GoogleDataLossPreventionContentPolicy#rule_set}
  */
  readonly ruleSet?: GoogleDataLossPreventionContentPolicyInspectConfigRuleSet[] | cdktf.IResolvable;
}

export function googleDataLossPreventionContentPolicyInspectConfigToTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigOutputReference | GoogleDataLossPreventionContentPolicyInspectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentOptions),
    exclude_info_types: cdktf.booleanToTerraform(struct!.excludeInfoTypes),
    include_quote: cdktf.booleanToTerraform(struct!.includeQuote),
    min_likelihood: cdktf.stringToTerraform(struct!.minLikelihood),
    custom_info_types: cdktf.listMapper(googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesToTerraform, true)(struct!.customInfoTypes),
    info_types: cdktf.listMapper(googleDataLossPreventionContentPolicyInspectConfigInfoTypesToTerraform, true)(struct!.infoTypes),
    limits: googleDataLossPreventionContentPolicyInspectConfigLimitsToTerraform(struct!.limits),
    min_likelihood_per_info_type: cdktf.listMapper(googleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeToTerraform, true)(struct!.minLikelihoodPerInfoType),
    rule_set: cdktf.listMapper(googleDataLossPreventionContentPolicyInspectConfigRuleSetToTerraform, true)(struct!.ruleSet),
  }
}


export function googleDataLossPreventionContentPolicyInspectConfigToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyInspectConfigOutputReference | GoogleDataLossPreventionContentPolicyInspectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_info_types: {
      value: cdktf.booleanToHclTerraform(struct!.excludeInfoTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_quote: {
      value: cdktf.booleanToHclTerraform(struct!.includeQuote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_likelihood: {
      value: cdktf.stringToHclTerraform(struct!.minLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_info_types: {
      value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesToHclTerraform, true)(struct!.customInfoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesList",
    },
    info_types: {
      value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyInspectConfigInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesList",
    },
    limits: {
      value: googleDataLossPreventionContentPolicyInspectConfigLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigLimitsList",
    },
    min_likelihood_per_info_type: {
      value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeToHclTerraform, true)(struct!.minLikelihoodPerInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeList",
    },
    rule_set: {
      value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyInspectConfigRuleSetToHclTerraform, true)(struct!.ruleSet),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyInspectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyInspectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentOptions = this._contentOptions;
    }
    if (this._excludeInfoTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInfoTypes = this._excludeInfoTypes;
    }
    if (this._includeQuote !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQuote = this._includeQuote;
    }
    if (this._minLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLikelihood = this._minLikelihood;
    }
    if (this._customInfoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customInfoTypes = this._customInfoTypes?.internalValue;
    }
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._minLikelihoodPerInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLikelihoodPerInfoType = this._minLikelihoodPerInfoType?.internalValue;
    }
    if (this._ruleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSet = this._ruleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyInspectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentOptions = undefined;
      this._excludeInfoTypes = undefined;
      this._includeQuote = undefined;
      this._minLikelihood = undefined;
      this._customInfoTypes.internalValue = undefined;
      this._infoTypes.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._minLikelihoodPerInfoType.internalValue = undefined;
      this._ruleSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentOptions = value.contentOptions;
      this._excludeInfoTypes = value.excludeInfoTypes;
      this._includeQuote = value.includeQuote;
      this._minLikelihood = value.minLikelihood;
      this._customInfoTypes.internalValue = value.customInfoTypes;
      this._infoTypes.internalValue = value.infoTypes;
      this._limits.internalValue = value.limits;
      this._minLikelihoodPerInfoType.internalValue = value.minLikelihoodPerInfoType;
      this._ruleSet.internalValue = value.ruleSet;
    }
  }

  // content_options - computed: false, optional: true, required: false
  private _contentOptions?: string[]; 
  public get contentOptions() {
    return this.getListAttribute('content_options');
  }
  public set contentOptions(value: string[]) {
    this._contentOptions = value;
  }
  public resetContentOptions() {
    this._contentOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentOptionsInput() {
    return this._contentOptions;
  }

  // exclude_info_types - computed: false, optional: true, required: false
  private _excludeInfoTypes?: boolean | cdktf.IResolvable; 
  public get excludeInfoTypes() {
    return this.getBooleanAttribute('exclude_info_types');
  }
  public set excludeInfoTypes(value: boolean | cdktf.IResolvable) {
    this._excludeInfoTypes = value;
  }
  public resetExcludeInfoTypes() {
    this._excludeInfoTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInfoTypesInput() {
    return this._excludeInfoTypes;
  }

  // include_quote - computed: false, optional: true, required: false
  private _includeQuote?: boolean | cdktf.IResolvable; 
  public get includeQuote() {
    return this.getBooleanAttribute('include_quote');
  }
  public set includeQuote(value: boolean | cdktf.IResolvable) {
    this._includeQuote = value;
  }
  public resetIncludeQuote() {
    this._includeQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQuoteInput() {
    return this._includeQuote;
  }

  // min_likelihood - computed: false, optional: true, required: false
  private _minLikelihood?: string; 
  public get minLikelihood() {
    return this.getStringAttribute('min_likelihood');
  }
  public set minLikelihood(value: string) {
    this._minLikelihood = value;
  }
  public resetMinLikelihood() {
    this._minLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLikelihoodInput() {
    return this._minLikelihood;
  }

  // custom_info_types - computed: false, optional: true, required: false
  private _customInfoTypes = new GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypesList(this, "custom_info_types", false);
  public get customInfoTypes() {
    return this._customInfoTypes;
  }
  public putCustomInfoTypes(value: GoogleDataLossPreventionContentPolicyInspectConfigCustomInfoTypes[] | cdktf.IResolvable) {
    this._customInfoTypes.internalValue = value;
  }
  public resetCustomInfoTypes() {
    this._customInfoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInfoTypesInput() {
    return this._customInfoTypes.internalValue;
  }

  // info_types - computed: false, optional: true, required: false
  private _infoTypes = new GoogleDataLossPreventionContentPolicyInspectConfigInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: GoogleDataLossPreventionContentPolicyInspectConfigInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  public resetInfoTypes() {
    this._infoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new GoogleDataLossPreventionContentPolicyInspectConfigLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: GoogleDataLossPreventionContentPolicyInspectConfigLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // min_likelihood_per_info_type - computed: false, optional: true, required: false
  private _minLikelihoodPerInfoType = new GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoTypeList(this, "min_likelihood_per_info_type", false);
  public get minLikelihoodPerInfoType() {
    return this._minLikelihoodPerInfoType;
  }
  public putMinLikelihoodPerInfoType(value: GoogleDataLossPreventionContentPolicyInspectConfigMinLikelihoodPerInfoType[] | cdktf.IResolvable) {
    this._minLikelihoodPerInfoType.internalValue = value;
  }
  public resetMinLikelihoodPerInfoType() {
    this._minLikelihoodPerInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLikelihoodPerInfoTypeInput() {
    return this._minLikelihoodPerInfoType.internalValue;
  }

  // rule_set - computed: false, optional: true, required: false
  private _ruleSet = new GoogleDataLossPreventionContentPolicyInspectConfigRuleSetList(this, "rule_set", false);
  public get ruleSet() {
    return this._ruleSet;
  }
  public putRuleSet(value: GoogleDataLossPreventionContentPolicyInspectConfigRuleSet[] | cdktf.IResolvable) {
    this._ruleSet.internalValue = value;
  }
  public resetRuleSet() {
    this._ruleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQuery {
  /**
  * The dataset ID of the BigQuery table to log to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#dataset_id GoogleDataLossPreventionContentPolicy#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The project ID of the BigQuery table to log to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#project_id GoogleDataLossPreventionContentPolicy#project_id}
  */
  readonly projectId: string;
  /**
  * The table ID of the BigQuery table to log to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#table_id GoogleDataLossPreventionContentPolicy#table_id}
  */
  readonly tableId: string;
}

export function googleDataLossPreventionContentPolicyLoggingConfigsLogToBigQueryToTerraform(struct?: GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQueryOutputReference | GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function googleDataLossPreventionContentPolicyLoggingConfigsLogToBigQueryToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQueryOutputReference | GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQuery): any {
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface GoogleDataLossPreventionContentPolicyLoggingConfigs {
  /**
  * log_to_big_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#log_to_big_query GoogleDataLossPreventionContentPolicy#log_to_big_query}
  */
  readonly logToBigQuery?: GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQuery;
}

export function googleDataLossPreventionContentPolicyLoggingConfigsToTerraform(struct?: GoogleDataLossPreventionContentPolicyLoggingConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_to_big_query: googleDataLossPreventionContentPolicyLoggingConfigsLogToBigQueryToTerraform(struct!.logToBigQuery),
  }
}


export function googleDataLossPreventionContentPolicyLoggingConfigsToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyLoggingConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_to_big_query: {
      value: googleDataLossPreventionContentPolicyLoggingConfigsLogToBigQueryToHclTerraform(struct!.logToBigQuery),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyLoggingConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyLoggingConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logToBigQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logToBigQuery = this._logToBigQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyLoggingConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logToBigQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logToBigQuery.internalValue = value.logToBigQuery;
    }
  }

  // log_to_big_query - computed: false, optional: true, required: false
  private _logToBigQuery = new GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQueryOutputReference(this, "log_to_big_query");
  public get logToBigQuery() {
    return this._logToBigQuery;
  }
  public putLogToBigQuery(value: GoogleDataLossPreventionContentPolicyLoggingConfigsLogToBigQuery) {
    this._logToBigQuery.internalValue = value;
  }
  public resetLogToBigQuery() {
    this._logToBigQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logToBigQueryInput() {
    return this._logToBigQuery.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyLoggingConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyLoggingConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyLoggingConfigsOutputReference {
    return new GoogleDataLossPreventionContentPolicyLoggingConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyRulesAction {
  /**
  * If set, the verdict will be returned to the user.
  * Possible values: ["ALLOW", "BLOCK"] Possible values: ["ALLOW", "BLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#return_verdict GoogleDataLossPreventionContentPolicy#return_verdict}
  */
  readonly returnVerdict?: string;
}

export function googleDataLossPreventionContentPolicyRulesActionToTerraform(struct?: GoogleDataLossPreventionContentPolicyRulesActionOutputReference | GoogleDataLossPreventionContentPolicyRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_verdict: cdktf.stringToTerraform(struct!.returnVerdict),
  }
}


export function googleDataLossPreventionContentPolicyRulesActionToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyRulesActionOutputReference | GoogleDataLossPreventionContentPolicyRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_verdict: {
      value: cdktf.stringToHclTerraform(struct!.returnVerdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnVerdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnVerdict = this._returnVerdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnVerdict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnVerdict = value.returnVerdict;
    }
  }

  // return_verdict - computed: false, optional: true, required: false
  private _returnVerdict?: string; 
  public get returnVerdict() {
    return this.getStringAttribute('return_verdict');
  }
  public set returnVerdict(value: string) {
    this._returnVerdict = value;
  }
  public resetReturnVerdict() {
    this._returnVerdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnVerdictInput() {
    return this._returnVerdict;
  }
}
export interface GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType {
}

export function googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeToTerraform(struct?: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeOutputReference | GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeOutputReference | GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes {
  /**
  * List of info type names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#info_type_names GoogleDataLossPreventionContentPolicy#info_type_names}
  */
  readonly infoTypeNames: string[];
}

export function googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesToTerraform(struct?: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesOutputReference | GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_type_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.infoTypeNames),
  }
}


export function googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesOutputReference | GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_type_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.infoTypeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeNames = this._infoTypeNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infoTypeNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infoTypeNames = value.infoTypeNames;
    }
  }

  // info_type_names - computed: false, optional: false, required: true
  private _infoTypeNames?: string[]; 
  public get infoTypeNames() {
    return this.getListAttribute('info_type_names');
  }
  public set infoTypeNames(value: string[]) {
    this._infoTypeNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeNamesInput() {
    return this._infoTypeNames;
  }
}
export interface GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeCondition {
  /**
  * The minimum number of findings required for this condition to be met. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#min_count GoogleDataLossPreventionContentPolicy#min_count}
  */
  readonly minCount?: number;
  /**
  * any_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#any_info_type GoogleDataLossPreventionContentPolicy#any_info_type}
  */
  readonly anyInfoType?: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType;
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#info_types GoogleDataLossPreventionContentPolicy#info_types}
  */
  readonly infoTypes?: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes;
}

export function googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionToTerraform(struct?: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionOutputReference | GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_count: cdktf.numberToTerraform(struct!.minCount),
    any_info_type: googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeToTerraform(struct!.anyInfoType),
    info_types: googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesToTerraform(struct!.infoTypes),
  }
}


export function googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionOutputReference | GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    any_info_type: {
      value: googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeToHclTerraform(struct!.anyInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeList",
    },
    info_types: {
      value: googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesToHclTerraform(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._anyInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyInfoType = this._anyInfoType?.internalValue;
    }
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minCount = undefined;
      this._anyInfoType.internalValue = undefined;
      this._infoTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minCount = value.minCount;
      this._anyInfoType.internalValue = value.anyInfoType;
      this._infoTypes.internalValue = value.infoTypes;
    }
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // any_info_type - computed: false, optional: true, required: false
  private _anyInfoType = new GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoTypeOutputReference(this, "any_info_type");
  public get anyInfoType() {
    return this._anyInfoType;
  }
  public putAnyInfoType(value: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionAnyInfoType) {
    this._anyInfoType.internalValue = value;
  }
  public resetAnyInfoType() {
    this._anyInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInfoTypeInput() {
    return this._anyInfoType.internalValue;
  }

  // info_types - computed: false, optional: true, required: false
  private _infoTypes = new GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypesOutputReference(this, "info_types");
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionInfoTypes) {
    this._infoTypes.internalValue = value;
  }
  public resetInfoTypes() {
    this._infoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }
}
export interface GoogleDataLossPreventionContentPolicyRulesConditions {
  /**
  * info_type_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#info_type_condition GoogleDataLossPreventionContentPolicy#info_type_condition}
  */
  readonly infoTypeCondition?: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeCondition;
}

export function googleDataLossPreventionContentPolicyRulesConditionsToTerraform(struct?: GoogleDataLossPreventionContentPolicyRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_type_condition: googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionToTerraform(struct!.infoTypeCondition),
  }
}


export function googleDataLossPreventionContentPolicyRulesConditionsToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_type_condition: {
      value: googleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionToHclTerraform(struct!.infoTypeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeCondition = this._infoTypeCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infoTypeCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infoTypeCondition.internalValue = value.infoTypeCondition;
    }
  }

  // info_type_condition - computed: false, optional: true, required: false
  private _infoTypeCondition = new GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeConditionOutputReference(this, "info_type_condition");
  public get infoTypeCondition() {
    return this._infoTypeCondition;
  }
  public putInfoTypeCondition(value: GoogleDataLossPreventionContentPolicyRulesConditionsInfoTypeCondition) {
    this._infoTypeCondition.internalValue = value;
  }
  public resetInfoTypeCondition() {
    this._infoTypeCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeConditionInput() {
    return this._infoTypeCondition.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyRulesConditionsOutputReference {
    return new GoogleDataLossPreventionContentPolicyRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyRules {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#action GoogleDataLossPreventionContentPolicy#action}
  */
  readonly action: GoogleDataLossPreventionContentPolicyRulesAction;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#conditions GoogleDataLossPreventionContentPolicy#conditions}
  */
  readonly conditions?: GoogleDataLossPreventionContentPolicyRulesConditions[] | cdktf.IResolvable;
}

export function googleDataLossPreventionContentPolicyRulesToTerraform(struct?: GoogleDataLossPreventionContentPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: googleDataLossPreventionContentPolicyRulesActionToTerraform(struct!.action),
    conditions: cdktf.listMapper(googleDataLossPreventionContentPolicyRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function googleDataLossPreventionContentPolicyRulesToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: googleDataLossPreventionContentPolicyRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyRulesActionList",
    },
    conditions: {
      value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionContentPolicyRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionContentPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._conditions.internalValue = value.conditions;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new GoogleDataLossPreventionContentPolicyRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: GoogleDataLossPreventionContentPolicyRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new GoogleDataLossPreventionContentPolicyRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleDataLossPreventionContentPolicyRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class GoogleDataLossPreventionContentPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionContentPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionContentPolicyRulesOutputReference {
    return new GoogleDataLossPreventionContentPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionContentPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#create GoogleDataLossPreventionContentPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#delete GoogleDataLossPreventionContentPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#update GoogleDataLossPreventionContentPolicy#update}
  */
  readonly update?: string;
}

export function googleDataLossPreventionContentPolicyTimeoutsToTerraform(struct?: GoogleDataLossPreventionContentPolicyTimeouts | cdktf.IResolvable): any {
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


export function googleDataLossPreventionContentPolicyTimeoutsToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataLossPreventionContentPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionContentPolicyTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleDataLossPreventionContentPolicyUnsupportedFileType {
  /**
  * If set, the verdict will be returned to the user.
  * Possible values: ["ALLOW", "BLOCK"] Possible values: ["ALLOW", "BLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#return_verdict GoogleDataLossPreventionContentPolicy#return_verdict}
  */
  readonly returnVerdict?: string;
}

export function googleDataLossPreventionContentPolicyUnsupportedFileTypeToTerraform(struct?: GoogleDataLossPreventionContentPolicyUnsupportedFileTypeOutputReference | GoogleDataLossPreventionContentPolicyUnsupportedFileType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_verdict: cdktf.stringToTerraform(struct!.returnVerdict),
  }
}


export function googleDataLossPreventionContentPolicyUnsupportedFileTypeToHclTerraform(struct?: GoogleDataLossPreventionContentPolicyUnsupportedFileTypeOutputReference | GoogleDataLossPreventionContentPolicyUnsupportedFileType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_verdict: {
      value: cdktf.stringToHclTerraform(struct!.returnVerdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionContentPolicyUnsupportedFileTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionContentPolicyUnsupportedFileType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnVerdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnVerdict = this._returnVerdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionContentPolicyUnsupportedFileType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnVerdict = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnVerdict = value.returnVerdict;
    }
  }

  // return_verdict - computed: false, optional: true, required: false
  private _returnVerdict?: string; 
  public get returnVerdict() {
    return this.getStringAttribute('return_verdict');
  }
  public set returnVerdict(value: string) {
    this._returnVerdict = value;
  }
  public resetReturnVerdict() {
    this._returnVerdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnVerdictInput() {
    return this._returnVerdict;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy google_data_loss_prevention_content_policy}
*/
export class GoogleDataLossPreventionContentPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_loss_prevention_content_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataLossPreventionContentPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataLossPreventionContentPolicy to import
  * @param importFromId The id of the existing GoogleDataLossPreventionContentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataLossPreventionContentPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_loss_prevention_content_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_data_loss_prevention_content_policy google_data_loss_prevention_content_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataLossPreventionContentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataLossPreventionContentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_content_policy',
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
    this._id = config.id;
    this._parent = config.parent;
    this._defaultAction.internalValue = config.defaultAction;
    this._failedToScanSupportedFileType.internalValue = config.failedToScanSupportedFileType;
    this._inputTooLarge.internalValue = config.inputTooLarge;
    this._inspectConfig.internalValue = config.inspectConfig;
    this._loggingConfigs.internalValue = config.loggingConfigs;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
    this._unsupportedFileType.internalValue = config.unsupportedFileType;
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

  // errors - computed: true, optional: false, required: false
  private _errors = new GoogleDataLossPreventionContentPolicyErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction = new GoogleDataLossPreventionContentPolicyDefaultActionOutputReference(this, "default_action");
  public get defaultAction() {
    return this._defaultAction;
  }
  public putDefaultAction(value: GoogleDataLossPreventionContentPolicyDefaultAction) {
    this._defaultAction.internalValue = value;
  }
  public resetDefaultAction() {
    this._defaultAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction.internalValue;
  }

  // failed_to_scan_supported_file_type - computed: false, optional: true, required: false
  private _failedToScanSupportedFileType = new GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileTypeOutputReference(this, "failed_to_scan_supported_file_type");
  public get failedToScanSupportedFileType() {
    return this._failedToScanSupportedFileType;
  }
  public putFailedToScanSupportedFileType(value: GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileType) {
    this._failedToScanSupportedFileType.internalValue = value;
  }
  public resetFailedToScanSupportedFileType() {
    this._failedToScanSupportedFileType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedToScanSupportedFileTypeInput() {
    return this._failedToScanSupportedFileType.internalValue;
  }

  // input_too_large - computed: false, optional: true, required: false
  private _inputTooLarge = new GoogleDataLossPreventionContentPolicyInputTooLargeOutputReference(this, "input_too_large");
  public get inputTooLarge() {
    return this._inputTooLarge;
  }
  public putInputTooLarge(value: GoogleDataLossPreventionContentPolicyInputTooLarge) {
    this._inputTooLarge.internalValue = value;
  }
  public resetInputTooLarge() {
    this._inputTooLarge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTooLargeInput() {
    return this._inputTooLarge.internalValue;
  }

  // inspect_config - computed: false, optional: true, required: false
  private _inspectConfig = new GoogleDataLossPreventionContentPolicyInspectConfigOutputReference(this, "inspect_config");
  public get inspectConfig() {
    return this._inspectConfig;
  }
  public putInspectConfig(value: GoogleDataLossPreventionContentPolicyInspectConfig) {
    this._inspectConfig.internalValue = value;
  }
  public resetInspectConfig() {
    this._inspectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectConfigInput() {
    return this._inspectConfig.internalValue;
  }

  // logging_configs - computed: false, optional: true, required: false
  private _loggingConfigs = new GoogleDataLossPreventionContentPolicyLoggingConfigsList(this, "logging_configs", false);
  public get loggingConfigs() {
    return this._loggingConfigs;
  }
  public putLoggingConfigs(value: GoogleDataLossPreventionContentPolicyLoggingConfigs[] | cdktf.IResolvable) {
    this._loggingConfigs.internalValue = value;
  }
  public resetLoggingConfigs() {
    this._loggingConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigsInput() {
    return this._loggingConfigs.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new GoogleDataLossPreventionContentPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GoogleDataLossPreventionContentPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataLossPreventionContentPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataLossPreventionContentPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // unsupported_file_type - computed: false, optional: true, required: false
  private _unsupportedFileType = new GoogleDataLossPreventionContentPolicyUnsupportedFileTypeOutputReference(this, "unsupported_file_type");
  public get unsupportedFileType() {
    return this._unsupportedFileType;
  }
  public putUnsupportedFileType(value: GoogleDataLossPreventionContentPolicyUnsupportedFileType) {
    this._unsupportedFileType.internalValue = value;
  }
  public resetUnsupportedFileType() {
    this._unsupportedFileType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedFileTypeInput() {
    return this._unsupportedFileType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      default_action: googleDataLossPreventionContentPolicyDefaultActionToTerraform(this._defaultAction.internalValue),
      failed_to_scan_supported_file_type: googleDataLossPreventionContentPolicyFailedToScanSupportedFileTypeToTerraform(this._failedToScanSupportedFileType.internalValue),
      input_too_large: googleDataLossPreventionContentPolicyInputTooLargeToTerraform(this._inputTooLarge.internalValue),
      inspect_config: googleDataLossPreventionContentPolicyInspectConfigToTerraform(this._inspectConfig.internalValue),
      logging_configs: cdktf.listMapper(googleDataLossPreventionContentPolicyLoggingConfigsToTerraform, true)(this._loggingConfigs.internalValue),
      rules: cdktf.listMapper(googleDataLossPreventionContentPolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: googleDataLossPreventionContentPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      unsupported_file_type: googleDataLossPreventionContentPolicyUnsupportedFileTypeToTerraform(this._unsupportedFileType.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action: {
        value: googleDataLossPreventionContentPolicyDefaultActionToHclTerraform(this._defaultAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionContentPolicyDefaultActionList",
      },
      failed_to_scan_supported_file_type: {
        value: googleDataLossPreventionContentPolicyFailedToScanSupportedFileTypeToHclTerraform(this._failedToScanSupportedFileType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionContentPolicyFailedToScanSupportedFileTypeList",
      },
      input_too_large: {
        value: googleDataLossPreventionContentPolicyInputTooLargeToHclTerraform(this._inputTooLarge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionContentPolicyInputTooLargeList",
      },
      inspect_config: {
        value: googleDataLossPreventionContentPolicyInspectConfigToHclTerraform(this._inspectConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionContentPolicyInspectConfigList",
      },
      logging_configs: {
        value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyLoggingConfigsToHclTerraform, true)(this._loggingConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionContentPolicyLoggingConfigsList",
      },
      rules: {
        value: cdktf.listMapperHcl(googleDataLossPreventionContentPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionContentPolicyRulesList",
      },
      timeouts: {
        value: googleDataLossPreventionContentPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataLossPreventionContentPolicyTimeouts",
      },
      unsupported_file_type: {
        value: googleDataLossPreventionContentPolicyUnsupportedFileTypeToHclTerraform(this._unsupportedFileType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionContentPolicyUnsupportedFileTypeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
