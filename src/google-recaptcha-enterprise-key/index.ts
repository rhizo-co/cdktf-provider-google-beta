// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleRecaptchaEnterpriseKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#deletion_policy GoogleRecaptchaEnterpriseKey#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable display name of this key. Modifiable by user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#display_name GoogleRecaptchaEnterpriseKey#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#id GoogleRecaptchaEnterpriseKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field `effective_labels` for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#labels GoogleRecaptchaEnterpriseKey#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#project GoogleRecaptchaEnterpriseKey#project}
  */
  readonly project?: string;
  /**
  * android_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#android_settings GoogleRecaptchaEnterpriseKey#android_settings}
  */
  readonly androidSettings?: GoogleRecaptchaEnterpriseKeyAndroidSettings;
  /**
  * ios_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#ios_settings GoogleRecaptchaEnterpriseKey#ios_settings}
  */
  readonly iosSettings?: GoogleRecaptchaEnterpriseKeyIosSettings;
  /**
  * testing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#testing_options GoogleRecaptchaEnterpriseKey#testing_options}
  */
  readonly testingOptions?: GoogleRecaptchaEnterpriseKeyTestingOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#timeouts GoogleRecaptchaEnterpriseKey#timeouts}
  */
  readonly timeouts?: GoogleRecaptchaEnterpriseKeyTimeouts;
  /**
  * waf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#waf_settings GoogleRecaptchaEnterpriseKey#waf_settings}
  */
  readonly wafSettings?: GoogleRecaptchaEnterpriseKeyWafSettings;
  /**
  * web_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#web_settings GoogleRecaptchaEnterpriseKey#web_settings}
  */
  readonly webSettings?: GoogleRecaptchaEnterpriseKeyWebSettings;
}
export interface GoogleRecaptchaEnterpriseKeyAndroidSettings {
  /**
  * If set to true, it means allowed_package_names will not be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#allow_all_package_names GoogleRecaptchaEnterpriseKey#allow_all_package_names}
  */
  readonly allowAllPackageNames?: boolean | cdktf.IResolvable;
  /**
  * Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#allowed_package_names GoogleRecaptchaEnterpriseKey#allowed_package_names}
  */
  readonly allowedPackageNames?: string[];
}

export function googleRecaptchaEnterpriseKeyAndroidSettingsToTerraform(struct?: GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference | GoogleRecaptchaEnterpriseKeyAndroidSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_package_names: cdktf.booleanToTerraform(struct!.allowAllPackageNames),
    allowed_package_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedPackageNames),
  }
}


export function googleRecaptchaEnterpriseKeyAndroidSettingsToHclTerraform(struct?: GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference | GoogleRecaptchaEnterpriseKeyAndroidSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all_package_names: {
      value: cdktf.booleanToHclTerraform(struct!.allowAllPackageNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_package_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedPackageNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRecaptchaEnterpriseKeyAndroidSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllPackageNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllPackageNames = this._allowAllPackageNames;
    }
    if (this._allowedPackageNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPackageNames = this._allowedPackageNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRecaptchaEnterpriseKeyAndroidSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAllPackageNames = undefined;
      this._allowedPackageNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAllPackageNames = value.allowAllPackageNames;
      this._allowedPackageNames = value.allowedPackageNames;
    }
  }

  // allow_all_package_names - computed: false, optional: true, required: false
  private _allowAllPackageNames?: boolean | cdktf.IResolvable; 
  public get allowAllPackageNames() {
    return this.getBooleanAttribute('allow_all_package_names');
  }
  public set allowAllPackageNames(value: boolean | cdktf.IResolvable) {
    this._allowAllPackageNames = value;
  }
  public resetAllowAllPackageNames() {
    this._allowAllPackageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllPackageNamesInput() {
    return this._allowAllPackageNames;
  }

  // allowed_package_names - computed: false, optional: true, required: false
  private _allowedPackageNames?: string[]; 
  public get allowedPackageNames() {
    return this.getListAttribute('allowed_package_names');
  }
  public set allowedPackageNames(value: string[]) {
    this._allowedPackageNames = value;
  }
  public resetAllowedPackageNames() {
    this._allowedPackageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPackageNamesInput() {
    return this._allowedPackageNames;
  }
}
export interface GoogleRecaptchaEnterpriseKeyIosSettings {
  /**
  * If set to true, it means allowed_bundle_ids will not be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#allow_all_bundle_ids GoogleRecaptchaEnterpriseKey#allow_all_bundle_ids}
  */
  readonly allowAllBundleIds?: boolean | cdktf.IResolvable;
  /**
  * iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#allowed_bundle_ids GoogleRecaptchaEnterpriseKey#allowed_bundle_ids}
  */
  readonly allowedBundleIds?: string[];
}

export function googleRecaptchaEnterpriseKeyIosSettingsToTerraform(struct?: GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference | GoogleRecaptchaEnterpriseKeyIosSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_bundle_ids: cdktf.booleanToTerraform(struct!.allowAllBundleIds),
    allowed_bundle_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedBundleIds),
  }
}


export function googleRecaptchaEnterpriseKeyIosSettingsToHclTerraform(struct?: GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference | GoogleRecaptchaEnterpriseKeyIosSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all_bundle_ids: {
      value: cdktf.booleanToHclTerraform(struct!.allowAllBundleIds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_bundle_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedBundleIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRecaptchaEnterpriseKeyIosSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllBundleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllBundleIds = this._allowAllBundleIds;
    }
    if (this._allowedBundleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedBundleIds = this._allowedBundleIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRecaptchaEnterpriseKeyIosSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAllBundleIds = undefined;
      this._allowedBundleIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAllBundleIds = value.allowAllBundleIds;
      this._allowedBundleIds = value.allowedBundleIds;
    }
  }

  // allow_all_bundle_ids - computed: false, optional: true, required: false
  private _allowAllBundleIds?: boolean | cdktf.IResolvable; 
  public get allowAllBundleIds() {
    return this.getBooleanAttribute('allow_all_bundle_ids');
  }
  public set allowAllBundleIds(value: boolean | cdktf.IResolvable) {
    this._allowAllBundleIds = value;
  }
  public resetAllowAllBundleIds() {
    this._allowAllBundleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllBundleIdsInput() {
    return this._allowAllBundleIds;
  }

  // allowed_bundle_ids - computed: false, optional: true, required: false
  private _allowedBundleIds?: string[]; 
  public get allowedBundleIds() {
    return this.getListAttribute('allowed_bundle_ids');
  }
  public set allowedBundleIds(value: string[]) {
    this._allowedBundleIds = value;
  }
  public resetAllowedBundleIds() {
    this._allowedBundleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedBundleIdsInput() {
    return this._allowedBundleIds;
  }
}
export interface GoogleRecaptchaEnterpriseKeyTestingOptions {
  /**
  * For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#testing_challenge GoogleRecaptchaEnterpriseKey#testing_challenge}
  */
  readonly testingChallenge?: string;
  /**
  * All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#testing_score GoogleRecaptchaEnterpriseKey#testing_score}
  */
  readonly testingScore?: number;
}

export function googleRecaptchaEnterpriseKeyTestingOptionsToTerraform(struct?: GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference | GoogleRecaptchaEnterpriseKeyTestingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    testing_challenge: cdktf.stringToTerraform(struct!.testingChallenge),
    testing_score: cdktf.numberToTerraform(struct!.testingScore),
  }
}


export function googleRecaptchaEnterpriseKeyTestingOptionsToHclTerraform(struct?: GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference | GoogleRecaptchaEnterpriseKeyTestingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    testing_challenge: {
      value: cdktf.stringToHclTerraform(struct!.testingChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    testing_score: {
      value: cdktf.numberToHclTerraform(struct!.testingScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRecaptchaEnterpriseKeyTestingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testingChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.testingChallenge = this._testingChallenge;
    }
    if (this._testingScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.testingScore = this._testingScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRecaptchaEnterpriseKeyTestingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._testingChallenge = undefined;
      this._testingScore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._testingChallenge = value.testingChallenge;
      this._testingScore = value.testingScore;
    }
  }

  // testing_challenge - computed: true, optional: true, required: false
  private _testingChallenge?: string; 
  public get testingChallenge() {
    return this.getStringAttribute('testing_challenge');
  }
  public set testingChallenge(value: string) {
    this._testingChallenge = value;
  }
  public resetTestingChallenge() {
    this._testingChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingChallengeInput() {
    return this._testingChallenge;
  }

  // testing_score - computed: false, optional: true, required: false
  private _testingScore?: number; 
  public get testingScore() {
    return this.getNumberAttribute('testing_score');
  }
  public set testingScore(value: number) {
    this._testingScore = value;
  }
  public resetTestingScore() {
    this._testingScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingScoreInput() {
    return this._testingScore;
  }
}
export interface GoogleRecaptchaEnterpriseKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#create GoogleRecaptchaEnterpriseKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#delete GoogleRecaptchaEnterpriseKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#update GoogleRecaptchaEnterpriseKey#update}
  */
  readonly update?: string;
}

export function googleRecaptchaEnterpriseKeyTimeoutsToTerraform(struct?: GoogleRecaptchaEnterpriseKeyTimeouts | cdktf.IResolvable): any {
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


export function googleRecaptchaEnterpriseKeyTimeoutsToHclTerraform(struct?: GoogleRecaptchaEnterpriseKeyTimeouts | cdktf.IResolvable): any {
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

export class GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleRecaptchaEnterpriseKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleRecaptchaEnterpriseKeyTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleRecaptchaEnterpriseKeyWafSettings {
  /**
  * Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#waf_feature GoogleRecaptchaEnterpriseKey#waf_feature}
  */
  readonly wafFeature: string;
  /**
  * The WAF service that uses this key. Possible values: CA, FASTLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#waf_service GoogleRecaptchaEnterpriseKey#waf_service}
  */
  readonly wafService: string;
}

export function googleRecaptchaEnterpriseKeyWafSettingsToTerraform(struct?: GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference | GoogleRecaptchaEnterpriseKeyWafSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    waf_feature: cdktf.stringToTerraform(struct!.wafFeature),
    waf_service: cdktf.stringToTerraform(struct!.wafService),
  }
}


export function googleRecaptchaEnterpriseKeyWafSettingsToHclTerraform(struct?: GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference | GoogleRecaptchaEnterpriseKeyWafSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    waf_feature: {
      value: cdktf.stringToHclTerraform(struct!.wafFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_service: {
      value: cdktf.stringToHclTerraform(struct!.wafService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRecaptchaEnterpriseKeyWafSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wafFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafFeature = this._wafFeature;
    }
    if (this._wafService !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafService = this._wafService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRecaptchaEnterpriseKeyWafSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wafFeature = undefined;
      this._wafService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wafFeature = value.wafFeature;
      this._wafService = value.wafService;
    }
  }

  // waf_feature - computed: false, optional: false, required: true
  private _wafFeature?: string; 
  public get wafFeature() {
    return this.getStringAttribute('waf_feature');
  }
  public set wafFeature(value: string) {
    this._wafFeature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafFeatureInput() {
    return this._wafFeature;
  }

  // waf_service - computed: false, optional: false, required: true
  private _wafService?: string; 
  public get wafService() {
    return this.getStringAttribute('waf_service');
  }
  public set wafService(value: string) {
    this._wafService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafServiceInput() {
    return this._wafService;
  }
}
export interface GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings {
  /**
  * The action name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#action GoogleRecaptchaEnterpriseKey#action}
  */
  readonly action: string;
  /**
  * A challenge is triggered if the end-user score is below that threshold. Value must be between 0 and 1 (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#score_threshold GoogleRecaptchaEnterpriseKey#score_threshold}
  */
  readonly scoreThreshold: number;
}

export function googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsToTerraform(struct?: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    score_threshold: cdktf.numberToTerraform(struct!.scoreThreshold),
  }
}


export function googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsToHclTerraform(struct?: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score_threshold: {
      value: cdktf.numberToHclTerraform(struct!.scoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._scoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoreThreshold = this._scoreThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._scoreThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._scoreThreshold = value.scoreThreshold;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // score_threshold - computed: false, optional: false, required: true
  private _scoreThreshold?: number; 
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }
  public set scoreThreshold(value: number) {
    this._scoreThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreThresholdInput() {
    return this._scoreThreshold;
  }
}

export class GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsList extends cdktf.ComplexList {
  public internalValue? : GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings[] | cdktf.IResolvable

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
  public get(index: number): GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsOutputReference {
    return new GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings {
  /**
  * A challenge is triggered if the end-user score is below that threshold. Value must be between 0 and 1 (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#score_threshold GoogleRecaptchaEnterpriseKey#score_threshold}
  */
  readonly scoreThreshold: number;
}

export function googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsToTerraform(struct?: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsOutputReference | GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score_threshold: cdktf.numberToTerraform(struct!.scoreThreshold),
  }
}


export function googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsToHclTerraform(struct?: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsOutputReference | GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score_threshold: {
      value: cdktf.numberToHclTerraform(struct!.scoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoreThreshold = this._scoreThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scoreThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scoreThreshold = value.scoreThreshold;
    }
  }

  // score_threshold - computed: false, optional: false, required: true
  private _scoreThreshold?: number; 
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }
  public set scoreThreshold(value: number) {
    this._scoreThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreThresholdInput() {
    return this._scoreThreshold;
  }
}
export interface GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettings {
  /**
  * action_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#action_settings GoogleRecaptchaEnterpriseKey#action_settings}
  */
  readonly actionSettings?: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings[] | cdktf.IResolvable;
  /**
  * default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#default_settings GoogleRecaptchaEnterpriseKey#default_settings}
  */
  readonly defaultSettings: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings;
}

export function googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsToTerraform(struct?: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsOutputReference | GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_settings: cdktf.listMapper(googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsToTerraform, true)(struct!.actionSettings),
    default_settings: googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsToTerraform(struct!.defaultSettings),
  }
}


export function googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsToHclTerraform(struct?: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsOutputReference | GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_settings: {
      value: cdktf.listMapperHcl(googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsToHclTerraform, true)(struct!.actionSettings),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsList",
    },
    default_settings: {
      value: googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsToHclTerraform(struct!.defaultSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSettings = this._actionSettings?.internalValue;
    }
    if (this._defaultSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSettings = this._defaultSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionSettings.internalValue = undefined;
      this._defaultSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionSettings.internalValue = value.actionSettings;
      this._defaultSettings.internalValue = value.defaultSettings;
    }
  }

  // action_settings - computed: false, optional: true, required: false
  private _actionSettings = new GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettingsList(this, "action_settings", true);
  public get actionSettings() {
    return this._actionSettings;
  }
  public putActionSettings(value: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsActionSettings[] | cdktf.IResolvable) {
    this._actionSettings.internalValue = value;
  }
  public resetActionSettings() {
    this._actionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSettingsInput() {
    return this._actionSettings.internalValue;
  }

  // default_settings - computed: false, optional: false, required: true
  private _defaultSettings = new GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettingsOutputReference(this, "default_settings");
  public get defaultSettings() {
    return this._defaultSettings;
  }
  public putDefaultSettings(value: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsDefaultSettings) {
    this._defaultSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsInput() {
    return this._defaultSettings.internalValue;
  }
}
export interface GoogleRecaptchaEnterpriseKeyWebSettings {
  /**
  * If set to true, it means allowed_domains will not be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#allow_all_domains GoogleRecaptchaEnterpriseKey#allow_all_domains}
  */
  readonly allowAllDomains?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#allow_amp_traffic GoogleRecaptchaEnterpriseKey#allow_amp_traffic}
  */
  readonly allowAmpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#allowed_domains GoogleRecaptchaEnterpriseKey#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#challenge_security_preference GoogleRecaptchaEnterpriseKey#challenge_security_preference}
  */
  readonly challengeSecurityPreference?: string;
  /**
  * Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE, POLICY_BASED_CHALLENGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#integration_type GoogleRecaptchaEnterpriseKey#integration_type}
  */
  readonly integrationType: string;
  /**
  * challenge_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#challenge_settings GoogleRecaptchaEnterpriseKey#challenge_settings}
  */
  readonly challengeSettings?: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettings;
}

export function googleRecaptchaEnterpriseKeyWebSettingsToTerraform(struct?: GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference | GoogleRecaptchaEnterpriseKeyWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_domains: cdktf.booleanToTerraform(struct!.allowAllDomains),
    allow_amp_traffic: cdktf.booleanToTerraform(struct!.allowAmpTraffic),
    allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDomains),
    challenge_security_preference: cdktf.stringToTerraform(struct!.challengeSecurityPreference),
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    challenge_settings: googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsToTerraform(struct!.challengeSettings),
  }
}


export function googleRecaptchaEnterpriseKeyWebSettingsToHclTerraform(struct?: GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference | GoogleRecaptchaEnterpriseKeyWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all_domains: {
      value: cdktf.booleanToHclTerraform(struct!.allowAllDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_amp_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allowAmpTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    challenge_security_preference: {
      value: cdktf.stringToHclTerraform(struct!.challengeSecurityPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_settings: {
      value: googleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsToHclTerraform(struct!.challengeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRecaptchaEnterpriseKeyWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllDomains = this._allowAllDomains;
    }
    if (this._allowAmpTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAmpTraffic = this._allowAmpTraffic;
    }
    if (this._allowedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomains = this._allowedDomains;
    }
    if (this._challengeSecurityPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeSecurityPreference = this._challengeSecurityPreference;
    }
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    if (this._challengeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeSettings = this._challengeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRecaptchaEnterpriseKeyWebSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAllDomains = undefined;
      this._allowAmpTraffic = undefined;
      this._allowedDomains = undefined;
      this._challengeSecurityPreference = undefined;
      this._integrationType = undefined;
      this._challengeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAllDomains = value.allowAllDomains;
      this._allowAmpTraffic = value.allowAmpTraffic;
      this._allowedDomains = value.allowedDomains;
      this._challengeSecurityPreference = value.challengeSecurityPreference;
      this._integrationType = value.integrationType;
      this._challengeSettings.internalValue = value.challengeSettings;
    }
  }

  // allow_all_domains - computed: false, optional: true, required: false
  private _allowAllDomains?: boolean | cdktf.IResolvable; 
  public get allowAllDomains() {
    return this.getBooleanAttribute('allow_all_domains');
  }
  public set allowAllDomains(value: boolean | cdktf.IResolvable) {
    this._allowAllDomains = value;
  }
  public resetAllowAllDomains() {
    this._allowAllDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllDomainsInput() {
    return this._allowAllDomains;
  }

  // allow_amp_traffic - computed: false, optional: true, required: false
  private _allowAmpTraffic?: boolean | cdktf.IResolvable; 
  public get allowAmpTraffic() {
    return this.getBooleanAttribute('allow_amp_traffic');
  }
  public set allowAmpTraffic(value: boolean | cdktf.IResolvable) {
    this._allowAmpTraffic = value;
  }
  public resetAllowAmpTraffic() {
    this._allowAmpTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAmpTrafficInput() {
    return this._allowAmpTraffic;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // challenge_security_preference - computed: true, optional: true, required: false
  private _challengeSecurityPreference?: string; 
  public get challengeSecurityPreference() {
    return this.getStringAttribute('challenge_security_preference');
  }
  public set challengeSecurityPreference(value: string) {
    this._challengeSecurityPreference = value;
  }
  public resetChallengeSecurityPreference() {
    this._challengeSecurityPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeSecurityPreferenceInput() {
    return this._challengeSecurityPreference;
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // challenge_settings - computed: false, optional: true, required: false
  private _challengeSettings = new GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettingsOutputReference(this, "challenge_settings");
  public get challengeSettings() {
    return this._challengeSettings;
  }
  public putChallengeSettings(value: GoogleRecaptchaEnterpriseKeyWebSettingsChallengeSettings) {
    this._challengeSettings.internalValue = value;
  }
  public resetChallengeSettings() {
    this._challengeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeSettingsInput() {
    return this._challengeSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key google_recaptcha_enterprise_key}
*/
export class GoogleRecaptchaEnterpriseKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_recaptcha_enterprise_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleRecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleRecaptchaEnterpriseKey to import
  * @param importFromId The id of the existing GoogleRecaptchaEnterpriseKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleRecaptchaEnterpriseKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_recaptcha_enterprise_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_recaptcha_enterprise_key google_recaptcha_enterprise_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleRecaptchaEnterpriseKeyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleRecaptchaEnterpriseKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_recaptcha_enterprise_key',
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
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._androidSettings.internalValue = config.androidSettings;
    this._iosSettings.internalValue = config.iosSettings;
    this._testingOptions.internalValue = config.testingOptions;
    this._timeouts.internalValue = config.timeouts;
    this._wafSettings.internalValue = config.wafSettings;
    this._webSettings.internalValue = config.webSettings;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // android_settings - computed: false, optional: true, required: false
  private _androidSettings = new GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference(this, "android_settings");
  public get androidSettings() {
    return this._androidSettings;
  }
  public putAndroidSettings(value: GoogleRecaptchaEnterpriseKeyAndroidSettings) {
    this._androidSettings.internalValue = value;
  }
  public resetAndroidSettings() {
    this._androidSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get androidSettingsInput() {
    return this._androidSettings.internalValue;
  }

  // ios_settings - computed: false, optional: true, required: false
  private _iosSettings = new GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference(this, "ios_settings");
  public get iosSettings() {
    return this._iosSettings;
  }
  public putIosSettings(value: GoogleRecaptchaEnterpriseKeyIosSettings) {
    this._iosSettings.internalValue = value;
  }
  public resetIosSettings() {
    this._iosSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosSettingsInput() {
    return this._iosSettings.internalValue;
  }

  // testing_options - computed: false, optional: true, required: false
  private _testingOptions = new GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference(this, "testing_options");
  public get testingOptions() {
    return this._testingOptions;
  }
  public putTestingOptions(value: GoogleRecaptchaEnterpriseKeyTestingOptions) {
    this._testingOptions.internalValue = value;
  }
  public resetTestingOptions() {
    this._testingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingOptionsInput() {
    return this._testingOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleRecaptchaEnterpriseKeyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // waf_settings - computed: false, optional: true, required: false
  private _wafSettings = new GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference(this, "waf_settings");
  public get wafSettings() {
    return this._wafSettings;
  }
  public putWafSettings(value: GoogleRecaptchaEnterpriseKeyWafSettings) {
    this._wafSettings.internalValue = value;
  }
  public resetWafSettings() {
    this._wafSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafSettingsInput() {
    return this._wafSettings.internalValue;
  }

  // web_settings - computed: false, optional: true, required: false
  private _webSettings = new GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference(this, "web_settings");
  public get webSettings() {
    return this._webSettings;
  }
  public putWebSettings(value: GoogleRecaptchaEnterpriseKeyWebSettings) {
    this._webSettings.internalValue = value;
  }
  public resetWebSettings() {
    this._webSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSettingsInput() {
    return this._webSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      android_settings: googleRecaptchaEnterpriseKeyAndroidSettingsToTerraform(this._androidSettings.internalValue),
      ios_settings: googleRecaptchaEnterpriseKeyIosSettingsToTerraform(this._iosSettings.internalValue),
      testing_options: googleRecaptchaEnterpriseKeyTestingOptionsToTerraform(this._testingOptions.internalValue),
      timeouts: googleRecaptchaEnterpriseKeyTimeoutsToTerraform(this._timeouts.internalValue),
      waf_settings: googleRecaptchaEnterpriseKeyWafSettingsToTerraform(this._wafSettings.internalValue),
      web_settings: googleRecaptchaEnterpriseKeyWebSettingsToTerraform(this._webSettings.internalValue),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      android_settings: {
        value: googleRecaptchaEnterpriseKeyAndroidSettingsToHclTerraform(this._androidSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRecaptchaEnterpriseKeyAndroidSettingsList",
      },
      ios_settings: {
        value: googleRecaptchaEnterpriseKeyIosSettingsToHclTerraform(this._iosSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRecaptchaEnterpriseKeyIosSettingsList",
      },
      testing_options: {
        value: googleRecaptchaEnterpriseKeyTestingOptionsToHclTerraform(this._testingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRecaptchaEnterpriseKeyTestingOptionsList",
      },
      timeouts: {
        value: googleRecaptchaEnterpriseKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleRecaptchaEnterpriseKeyTimeouts",
      },
      waf_settings: {
        value: googleRecaptchaEnterpriseKeyWafSettingsToHclTerraform(this._wafSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRecaptchaEnterpriseKeyWafSettingsList",
      },
      web_settings: {
        value: googleRecaptchaEnterpriseKeyWebSettingsToHclTerraform(this._webSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRecaptchaEnterpriseKeyWebSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
