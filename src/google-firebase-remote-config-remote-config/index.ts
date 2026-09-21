// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirebaseRemoteConfigRemoteConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}
  */
  readonly project?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#conditions GoogleFirebaseRemoteConfigRemoteConfig#conditions}
  */
  readonly conditions?: GoogleFirebaseRemoteConfigRemoteConfigConditions[] | cdktf.IResolvable;
  /**
  * parameter_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#parameter_groups GoogleFirebaseRemoteConfigRemoteConfig#parameter_groups}
  */
  readonly parameterGroups?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroups[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}
  */
  readonly parameters?: GoogleFirebaseRemoteConfigRemoteConfigParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#timeouts GoogleFirebaseRemoteConfigRemoteConfig#timeouts}
  */
  readonly timeouts?: GoogleFirebaseRemoteConfigRemoteConfigTimeouts;
}
export interface GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser {
}

export function googleFirebaseRemoteConfigRemoteConfigVersionUpdateUserToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseRemoteConfigRemoteConfigVersionUpdateUserToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference {
    return new GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseRemoteConfigRemoteConfigVersion {
}

export function googleFirebaseRemoteConfigRemoteConfigVersionToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseRemoteConfigRemoteConfigVersionToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_legacy - computed: true, optional: false, required: false
  public get isLegacy() {
    return this.getBooleanAttribute('is_legacy');
  }

  // rollback_source - computed: true, optional: false, required: false
  public get rollbackSource() {
    return this.getStringAttribute('rollback_source');
  }

  // update_origin - computed: true, optional: false, required: false
  public get updateOrigin() {
    return this.getStringAttribute('update_origin');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // update_user - computed: true, optional: false, required: false
  private _updateUser = new GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList(this, "update_user", false);
  public get updateUser() {
    return this._updateUser;
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getStringAttribute('version_number');
  }
}

export class GoogleFirebaseRemoteConfigRemoteConfigVersionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference {
    return new GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseRemoteConfigRemoteConfigConditions {
  /**
  * The logic of this condition.
  * 
  * See the documentation regarding
  * [Condition
  * Expressions](https://firebase.google.com/docs/remote-config/condition-reference)
  * for the expected syntax of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#expression GoogleFirebaseRemoteConfigRemoteConfig#expression}
  */
  readonly expression: string;
  /**
  * A non-empty and unique name of this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#name GoogleFirebaseRemoteConfigRemoteConfig#name}
  */
  readonly name: string;
  /**
  * The color associated with this condition for display purposes in the Firebase Console.
  * Not specifying this value results in the Console picking an arbitrary color to associate with the condition. Possible values: ["BLUE", "BROWN", "CYAN", "DEEP_ORANGE", "GREEN", "INDIGO", "LIME", "ORANGE", "PINK", "PURPLE", "TEAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#tag_color GoogleFirebaseRemoteConfigRemoteConfig#tag_color}
  */
  readonly tagColor?: string;
}

export function googleFirebaseRemoteConfigRemoteConfigConditionsToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
    tag_color: cdktf.stringToTerraform(struct!.tagColor),
  }
}


export function googleFirebaseRemoteConfigRemoteConfigConditionsToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_color: {
      value: cdktf.stringToHclTerraform(struct!.tagColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tagColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagColor = this._tagColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
      this._tagColor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
      this._tagColor = value.tagColor;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // tag_color - computed: false, optional: true, required: false
  private _tagColor?: string; 
  public get tagColor() {
    return this.getStringAttribute('tag_color');
  }
  public set tagColor(value: string) {
    this._tagColor = value;
  }
  public resetTagColor() {
    this._tagColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagColorInput() {
    return this._tagColor;
  }
}

export class GoogleFirebaseRemoteConfigRemoteConfigConditionsList extends cdktf.ComplexList {
  public internalValue? : GoogleFirebaseRemoteConfigRemoteConfigConditions[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference {
    return new GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}
  */
  readonly conditionName: string;
  /**
  * If true, the parameter is omitted from the parameter values returned
  * to a client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}
  */
  readonly useInAppDefault?: boolean | cdktf.IResolvable;
  /**
  * The string value that the parameter is set to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}
  */
  readonly value?: string;
}

export function googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_name: cdktf.stringToTerraform(struct!.conditionName),
    use_in_app_default: cdktf.booleanToTerraform(struct!.useInAppDefault),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_name: {
      value: cdktf.stringToHclTerraform(struct!.conditionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_in_app_default: {
      value: cdktf.booleanToHclTerraform(struct!.useInAppDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionName = this._conditionName;
    }
    if (this._useInAppDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInAppDefault = this._useInAppDefault;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionName = undefined;
      this._useInAppDefault = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionName = value.conditionName;
      this._useInAppDefault = value.useInAppDefault;
      this._value = value.value;
    }
  }

  // condition_name - computed: false, optional: false, required: true
  private _conditionName?: string; 
  public get conditionName() {
    return this.getStringAttribute('condition_name');
  }
  public set conditionName(value: string) {
    this._conditionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionNameInput() {
    return this._conditionName;
  }

  // use_in_app_default - computed: false, optional: true, required: false
  private _useInAppDefault?: boolean | cdktf.IResolvable; 
  public get useInAppDefault() {
    return this.getBooleanAttribute('use_in_app_default');
  }
  public set useInAppDefault(value: boolean | cdktf.IResolvable) {
    this._useInAppDefault = value;
  }
  public resetUseInAppDefault() {
    this._useInAppDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInAppDefaultInput() {
    return this._useInAppDefault;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference {
    return new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue {
  /**
  * If true, the parameter is omitted from the parameter values returned
  * to a client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}
  */
  readonly useInAppDefault?: boolean | cdktf.IResolvable;
  /**
  * The string value that the parameter is set to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}
  */
  readonly value?: string;
}

export function googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_in_app_default: cdktf.booleanToTerraform(struct!.useInAppDefault),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_in_app_default: {
      value: cdktf.booleanToHclTerraform(struct!.useInAppDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useInAppDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInAppDefault = this._useInAppDefault;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useInAppDefault = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useInAppDefault = value.useInAppDefault;
      this._value = value.value;
    }
  }

  // use_in_app_default - computed: false, optional: true, required: false
  private _useInAppDefault?: boolean | cdktf.IResolvable; 
  public get useInAppDefault() {
    return this.getBooleanAttribute('use_in_app_default');
  }
  public set useInAppDefault(value: boolean | cdktf.IResolvable) {
    this._useInAppDefault = value;
  }
  public resetUseInAppDefault() {
    this._useInAppDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInAppDefaultInput() {
    return this._useInAppDefault;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters {
  /**
  * A description for this Parameter. Its length must be less than or equal to
  * 256 characters . A description may contain any Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}
  */
  readonly parameterName: string;
  /**
  * The data type for all values of this parameter in the current version of
  * the template. Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#value_type GoogleFirebaseRemoteConfigRemoteConfig#value_type}
  */
  readonly valueType?: string;
  /**
  * conditional_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#conditional_values GoogleFirebaseRemoteConfigRemoteConfig#conditional_values}
  */
  readonly conditionalValues?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] | cdktf.IResolvable;
  /**
  * default_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#default_value GoogleFirebaseRemoteConfigRemoteConfig#default_value}
  */
  readonly defaultValue?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue;
}

export function googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    conditional_values: cdktf.listMapper(googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesToTerraform, true)(struct!.conditionalValues),
    default_value: googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueToTerraform(struct!.defaultValue),
  }
}


export function googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditional_values: {
      value: cdktf.listMapperHcl(googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesToHclTerraform, true)(struct!.conditionalValues),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList",
    },
    default_value: {
      value: googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueToHclTerraform(struct!.defaultValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._conditionalValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalValues = this._conditionalValues?.internalValue;
    }
    if (this._defaultValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._parameterName = undefined;
      this._valueType = undefined;
      this._conditionalValues.internalValue = undefined;
      this._defaultValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._parameterName = value.parameterName;
      this._valueType = value.valueType;
      this._conditionalValues.internalValue = value.conditionalValues;
      this._defaultValue.internalValue = value.defaultValue;
    }
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

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // conditional_values - computed: false, optional: true, required: false
  private _conditionalValues = new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList(this, "conditional_values", true);
  public get conditionalValues() {
    return this._conditionalValues;
  }
  public putConditionalValues(value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] | cdktf.IResolvable) {
    this._conditionalValues.internalValue = value;
  }
  public resetConditionalValues() {
    this._conditionalValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalValuesInput() {
    return this._conditionalValues.internalValue;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue = new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
  public putDefaultValue(value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue) {
    this._defaultValue.internalValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue.internalValue;
  }
}

export class GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList extends cdktf.ComplexList {
  public internalValue? : GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference {
    return new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseRemoteConfigRemoteConfigParameterGroups {
  /**
  * A description for the group. Its length must be less than or equal to 256
  * characters. A description may contain any Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#parameter_group_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_group_name}
  */
  readonly parameterGroupName: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}
  */
  readonly parameters?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] | cdktf.IResolvable;
}

export function googleFirebaseRemoteConfigRemoteConfigParameterGroupsToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    parameter_group_name: cdktf.stringToTerraform(struct!.parameterGroupName),
    parameters: cdktf.listMapper(googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersToTerraform, true)(struct!.parameters),
  }
}


export function googleFirebaseRemoteConfigRemoteConfigParameterGroupsToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParameterGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_group_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigParameterGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._parameterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterGroupName = this._parameterGroupName;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._parameterGroupName = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._parameterGroupName = value.parameterGroupName;
      this._parameters.internalValue = value.parameters;
    }
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

  // parameter_group_name - computed: false, optional: false, required: true
  private _parameterGroupName?: string; 
  public get parameterGroupName() {
    return this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string) {
    this._parameterGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupNameInput() {
    return this._parameterGroupName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList extends cdktf.ComplexList {
  public internalValue? : GoogleFirebaseRemoteConfigRemoteConfigParameterGroups[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference {
    return new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}
  */
  readonly conditionName: string;
  /**
  * If true, the parameter is omitted from the parameter values returned
  * to a client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}
  */
  readonly useInAppDefault?: boolean | cdktf.IResolvable;
  /**
  * The string value that the parameter is set to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}
  */
  readonly value?: string;
}

export function googleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_name: cdktf.stringToTerraform(struct!.conditionName),
    use_in_app_default: cdktf.booleanToTerraform(struct!.useInAppDefault),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_name: {
      value: cdktf.stringToHclTerraform(struct!.conditionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_in_app_default: {
      value: cdktf.booleanToHclTerraform(struct!.useInAppDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionName = this._conditionName;
    }
    if (this._useInAppDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInAppDefault = this._useInAppDefault;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionName = undefined;
      this._useInAppDefault = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionName = value.conditionName;
      this._useInAppDefault = value.useInAppDefault;
      this._value = value.value;
    }
  }

  // condition_name - computed: false, optional: false, required: true
  private _conditionName?: string; 
  public get conditionName() {
    return this.getStringAttribute('condition_name');
  }
  public set conditionName(value: string) {
    this._conditionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionNameInput() {
    return this._conditionName;
  }

  // use_in_app_default - computed: false, optional: true, required: false
  private _useInAppDefault?: boolean | cdktf.IResolvable; 
  public get useInAppDefault() {
    return this.getBooleanAttribute('use_in_app_default');
  }
  public set useInAppDefault(value: boolean | cdktf.IResolvable) {
    this._useInAppDefault = value;
  }
  public resetUseInAppDefault() {
    this._useInAppDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInAppDefaultInput() {
    return this._useInAppDefault;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference {
    return new GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue {
  /**
  * If true, the parameter is omitted from the parameter values returned
  * to a client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}
  */
  readonly useInAppDefault?: boolean | cdktf.IResolvable;
  /**
  * The string value that the parameter is set to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}
  */
  readonly value?: string;
}

export function googleFirebaseRemoteConfigRemoteConfigParametersDefaultValueToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference | GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_in_app_default: cdktf.booleanToTerraform(struct!.useInAppDefault),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleFirebaseRemoteConfigRemoteConfigParametersDefaultValueToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference | GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_in_app_default: {
      value: cdktf.booleanToHclTerraform(struct!.useInAppDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useInAppDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInAppDefault = this._useInAppDefault;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useInAppDefault = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useInAppDefault = value.useInAppDefault;
      this._value = value.value;
    }
  }

  // use_in_app_default - computed: false, optional: true, required: false
  private _useInAppDefault?: boolean | cdktf.IResolvable; 
  public get useInAppDefault() {
    return this.getBooleanAttribute('use_in_app_default');
  }
  public set useInAppDefault(value: boolean | cdktf.IResolvable) {
    this._useInAppDefault = value;
  }
  public resetUseInAppDefault() {
    this._useInAppDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInAppDefaultInput() {
    return this._useInAppDefault;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleFirebaseRemoteConfigRemoteConfigParameters {
  /**
  * A description for this Parameter. Its length must be less than or equal to
  * 256 characters . A description may contain any Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}
  */
  readonly parameterName: string;
  /**
  * The data type for all values of this parameter in the current version of
  * the template. Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#value_type GoogleFirebaseRemoteConfigRemoteConfig#value_type}
  */
  readonly valueType?: string;
  /**
  * conditional_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#conditional_values GoogleFirebaseRemoteConfigRemoteConfig#conditional_values}
  */
  readonly conditionalValues?: GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues[] | cdktf.IResolvable;
  /**
  * default_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#default_value GoogleFirebaseRemoteConfigRemoteConfig#default_value}
  */
  readonly defaultValue?: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue;
}

export function googleFirebaseRemoteConfigRemoteConfigParametersToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    conditional_values: cdktf.listMapper(googleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesToTerraform, true)(struct!.conditionalValues),
    default_value: googleFirebaseRemoteConfigRemoteConfigParametersDefaultValueToTerraform(struct!.defaultValue),
  }
}


export function googleFirebaseRemoteConfigRemoteConfigParametersToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditional_values: {
      value: cdktf.listMapperHcl(googleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesToHclTerraform, true)(struct!.conditionalValues),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList",
    },
    default_value: {
      value: googleFirebaseRemoteConfigRemoteConfigParametersDefaultValueToHclTerraform(struct!.defaultValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._conditionalValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalValues = this._conditionalValues?.internalValue;
    }
    if (this._defaultValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._parameterName = undefined;
      this._valueType = undefined;
      this._conditionalValues.internalValue = undefined;
      this._defaultValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._parameterName = value.parameterName;
      this._valueType = value.valueType;
      this._conditionalValues.internalValue = value.conditionalValues;
      this._defaultValue.internalValue = value.defaultValue;
    }
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

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // conditional_values - computed: false, optional: true, required: false
  private _conditionalValues = new GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList(this, "conditional_values", true);
  public get conditionalValues() {
    return this._conditionalValues;
  }
  public putConditionalValues(value: GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues[] | cdktf.IResolvable) {
    this._conditionalValues.internalValue = value;
  }
  public resetConditionalValues() {
    this._conditionalValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalValuesInput() {
    return this._conditionalValues.internalValue;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue = new GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
  public putDefaultValue(value: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue) {
    this._defaultValue.internalValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue.internalValue;
  }
}

export class GoogleFirebaseRemoteConfigRemoteConfigParametersList extends cdktf.ComplexList {
  public internalValue? : GoogleFirebaseRemoteConfigRemoteConfigParameters[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference {
    return new GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseRemoteConfigRemoteConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#create GoogleFirebaseRemoteConfigRemoteConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#delete GoogleFirebaseRemoteConfigRemoteConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#update GoogleFirebaseRemoteConfigRemoteConfig#update}
  */
  readonly update?: string;
}

export function googleFirebaseRemoteConfigRemoteConfigTimeoutsToTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigTimeouts | cdktf.IResolvable): any {
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


export function googleFirebaseRemoteConfigRemoteConfigTimeoutsToHclTerraform(struct?: GoogleFirebaseRemoteConfigRemoteConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirebaseRemoteConfigRemoteConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleFirebaseRemoteConfigRemoteConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config google_firebase_remote_config_remote_config}
*/
export class GoogleFirebaseRemoteConfigRemoteConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_remote_config_remote_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirebaseRemoteConfigRemoteConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirebaseRemoteConfigRemoteConfig to import
  * @param importFromId The id of the existing GoogleFirebaseRemoteConfigRemoteConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirebaseRemoteConfigRemoteConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_remote_config_remote_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_firebase_remote_config_remote_config google_firebase_remote_config_remote_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirebaseRemoteConfigRemoteConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleFirebaseRemoteConfigRemoteConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_remote_config_remote_config',
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
    this._id = config.id;
    this._project = config.project;
    this._conditions.internalValue = config.conditions;
    this._parameterGroups.internalValue = config.parameterGroups;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // version - computed: true, optional: false, required: false
  private _version = new GoogleFirebaseRemoteConfigRemoteConfigVersionList(this, "version", false);
  public get version() {
    return this._version;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new GoogleFirebaseRemoteConfigRemoteConfigConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleFirebaseRemoteConfigRemoteConfigConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // parameter_groups - computed: false, optional: true, required: false
  private _parameterGroups = new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList(this, "parameter_groups", true);
  public get parameterGroups() {
    return this._parameterGroups;
  }
  public putParameterGroups(value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroups[] | cdktf.IResolvable) {
    this._parameterGroups.internalValue = value;
  }
  public resetParameterGroups() {
    this._parameterGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupsInput() {
    return this._parameterGroups.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GoogleFirebaseRemoteConfigRemoteConfigParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoogleFirebaseRemoteConfigRemoteConfigParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirebaseRemoteConfigRemoteConfigTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      conditions: cdktf.listMapper(googleFirebaseRemoteConfigRemoteConfigConditionsToTerraform, true)(this._conditions.internalValue),
      parameter_groups: cdktf.listMapper(googleFirebaseRemoteConfigRemoteConfigParameterGroupsToTerraform, true)(this._parameterGroups.internalValue),
      parameters: cdktf.listMapper(googleFirebaseRemoteConfigRemoteConfigParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: googleFirebaseRemoteConfigRemoteConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      conditions: {
        value: cdktf.listMapperHcl(googleFirebaseRemoteConfigRemoteConfigConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirebaseRemoteConfigRemoteConfigConditionsList",
      },
      parameter_groups: {
        value: cdktf.listMapperHcl(googleFirebaseRemoteConfigRemoteConfigParameterGroupsToHclTerraform, true)(this._parameterGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList",
      },
      parameters: {
        value: cdktf.listMapperHcl(googleFirebaseRemoteConfigRemoteConfigParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleFirebaseRemoteConfigRemoteConfigParametersList",
      },
      timeouts: {
        value: googleFirebaseRemoteConfigRemoteConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirebaseRemoteConfigRemoteConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
