// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeGlobalVmExtensionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#deletion_policy GoogleComputeGlobalVmExtensionPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#description GoogleComputeGlobalVmExtensionPolicy#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long and match the regular expression '^[a-z]([-a-z0-9]{0,61}[a-z0-9])?$' to comply with RFC1035.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#name GoogleComputeGlobalVmExtensionPolicy#name}
  */
  readonly name: string;
  /**
  * Used to resolve conflicts when multiple policies are active. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#priority GoogleComputeGlobalVmExtensionPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#project GoogleComputeGlobalVmExtensionPolicy#project}
  */
  readonly project?: string;
  /**
  * extension_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#extension_policies GoogleComputeGlobalVmExtensionPolicy#extension_policies}
  */
  readonly extensionPolicies: GoogleComputeGlobalVmExtensionPolicyExtensionPolicies[] | cdktf.IResolvable;
  /**
  * instance_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#instance_selectors GoogleComputeGlobalVmExtensionPolicy#instance_selectors}
  */
  readonly instanceSelectors?: GoogleComputeGlobalVmExtensionPolicyInstanceSelectors[] | cdktf.IResolvable;
  /**
  * rollout_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#rollout_operation GoogleComputeGlobalVmExtensionPolicy#rollout_operation}
  */
  readonly rolloutOperation: GoogleComputeGlobalVmExtensionPolicyRolloutOperation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#timeouts GoogleComputeGlobalVmExtensionPolicy#timeouts}
  */
  readonly timeouts?: GoogleComputeGlobalVmExtensionPolicyTimeouts;
}
export interface GoogleComputeGlobalVmExtensionPolicyExtensionPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#extension_name GoogleComputeGlobalVmExtensionPolicy#extension_name}
  */
  readonly extensionName: string;
  /**
  * The version pinning for the extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#pinned_version GoogleComputeGlobalVmExtensionPolicy#pinned_version}
  */
  readonly pinnedVersion?: string;
  /**
  * String configuration payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#string_config GoogleComputeGlobalVmExtensionPolicy#string_config}
  */
  readonly stringConfig?: string;
}

export function googleComputeGlobalVmExtensionPolicyExtensionPoliciesToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyExtensionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension_name: cdktf.stringToTerraform(struct!.extensionName),
    pinned_version: cdktf.stringToTerraform(struct!.pinnedVersion),
    string_config: cdktf.stringToTerraform(struct!.stringConfig),
  }
}


export function googleComputeGlobalVmExtensionPolicyExtensionPoliciesToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyExtensionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension_name: {
      value: cdktf.stringToHclTerraform(struct!.extensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinned_version: {
      value: cdktf.stringToHclTerraform(struct!.pinnedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_config: {
      value: cdktf.stringToHclTerraform(struct!.stringConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyExtensionPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionName = this._extensionName;
    }
    if (this._pinnedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinnedVersion = this._pinnedVersion;
    }
    if (this._stringConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringConfig = this._stringConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyExtensionPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensionName = undefined;
      this._pinnedVersion = undefined;
      this._stringConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extensionName = value.extensionName;
      this._pinnedVersion = value.pinnedVersion;
      this._stringConfig = value.stringConfig;
    }
  }

  // extension_name - computed: false, optional: false, required: true
  private _extensionName?: string; 
  public get extensionName() {
    return this.getStringAttribute('extension_name');
  }
  public set extensionName(value: string) {
    this._extensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionNameInput() {
    return this._extensionName;
  }

  // pinned_version - computed: false, optional: true, required: false
  private _pinnedVersion?: string; 
  public get pinnedVersion() {
    return this.getStringAttribute('pinned_version');
  }
  public set pinnedVersion(value: string) {
    this._pinnedVersion = value;
  }
  public resetPinnedVersion() {
    this._pinnedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedVersionInput() {
    return this._pinnedVersion;
  }

  // string_config - computed: false, optional: true, required: false
  private _stringConfig?: string; 
  public get stringConfig() {
    return this.getStringAttribute('string_config');
  }
  public set stringConfig(value: string) {
    this._stringConfig = value;
  }
  public resetStringConfig() {
    this._stringConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringConfigInput() {
    return this._stringConfig;
  }
}

export class GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeGlobalVmExtensionPolicyExtensionPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference {
    return new GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector {
  /**
  * Labels as key value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#inclusion_labels GoogleComputeGlobalVmExtensionPolicy#inclusion_labels}
  */
  readonly inclusionLabels?: { [key: string]: string };
}

export function googleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference | GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inclusion_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.inclusionLabels),
  }
}


export function googleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference | GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inclusion_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.inclusionLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inclusionLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionLabels = this._inclusionLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inclusionLabels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inclusionLabels = value.inclusionLabels;
    }
  }

  // inclusion_labels - computed: false, optional: true, required: false
  private _inclusionLabels?: { [key: string]: string }; 
  public get inclusionLabels() {
    return this.getStringMapAttribute('inclusion_labels');
  }
  public set inclusionLabels(value: { [key: string]: string }) {
    this._inclusionLabels = value;
  }
  public resetInclusionLabels() {
    this._inclusionLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionLabelsInput() {
    return this._inclusionLabels;
  }
}
export interface GoogleComputeGlobalVmExtensionPolicyInstanceSelectors {
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#label_selector GoogleComputeGlobalVmExtensionPolicy#label_selector}
  */
  readonly labelSelector?: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector;
}

export function googleComputeGlobalVmExtensionPolicyInstanceSelectorsToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyInstanceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: googleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function googleComputeGlobalVmExtensionPolicyInstanceSelectorsToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyInstanceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: googleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyInstanceSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyInstanceSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}

export class GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeGlobalVmExtensionPolicyInstanceSelectors[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference {
    return new GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus {
}

export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference {
    return new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts {
}

export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_rollout_status - computed: true, optional: false, required: false
  private _locationRolloutStatus = new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList(this, "location_rollout_status", true);
  public get locationRolloutStatus() {
    return this._locationRolloutStatus;
  }

  // rollout - computed: true, optional: false, required: false
  public get rollout() {
    return this.getStringAttribute('rollout');
  }

  // rollout_plan - computed: true, optional: false, required: false
  public get rolloutPlan() {
    return this.getStringAttribute('rollout_plan');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference {
    return new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus {
}

export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference {
    return new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout {
}

export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_rollout_status - computed: true, optional: false, required: false
  private _locationRolloutStatus = new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList(this, "location_rollout_status", true);
  public get locationRolloutStatus() {
    return this._locationRolloutStatus;
  }

  // rollout - computed: true, optional: false, required: false
  public get rollout() {
    return this.getStringAttribute('rollout');
  }

  // rollout_plan - computed: true, optional: false, required: false
  public get rolloutPlan() {
    return this.getStringAttribute('rollout_plan');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference {
    return new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus {
}

export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_rollouts - computed: true, optional: false, required: false
  private _currentRollouts = new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList(this, "current_rollouts", false);
  public get currentRollouts() {
    return this._currentRollouts;
  }

  // previous_rollout - computed: true, optional: false, required: false
  private _previousRollout = new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList(this, "previous_rollout", false);
  public get previousRollout() {
    return this._previousRollout;
  }
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference {
    return new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput {
  /**
  * Specifies the behavior of the rollout if a conflict is detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#conflict_behavior GoogleComputeGlobalVmExtensionPolicy#conflict_behavior}
  */
  readonly conflictBehavior?: string;
  /**
  * The name of the rollout plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#name GoogleComputeGlobalVmExtensionPolicy#name}
  */
  readonly name?: string;
  /**
  * Specifies the predefined rollout plan for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#predefined_rollout_plan GoogleComputeGlobalVmExtensionPolicy#predefined_rollout_plan}
  */
  readonly predefinedRolloutPlan?: string;
  /**
  * The UUID that identifies a policy rollout retry attempt. It should only be set when retrying an existing rollout. Updating this field along with other policy fields (description, extension_policies, instance_selectors, priority) in the same plan will return an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#retry_uuid GoogleComputeGlobalVmExtensionPolicy#retry_uuid}
  */
  readonly retryUuid?: string;
}

export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference | GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conflict_behavior: cdktf.stringToTerraform(struct!.conflictBehavior),
    name: cdktf.stringToTerraform(struct!.name),
    predefined_rollout_plan: cdktf.stringToTerraform(struct!.predefinedRolloutPlan),
    retry_uuid: cdktf.stringToTerraform(struct!.retryUuid),
  }
}


export function googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference | GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conflict_behavior: {
      value: cdktf.stringToHclTerraform(struct!.conflictBehavior),
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
    predefined_rollout_plan: {
      value: cdktf.stringToHclTerraform(struct!.predefinedRolloutPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_uuid: {
      value: cdktf.stringToHclTerraform(struct!.retryUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictBehavior = this._conflictBehavior;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._predefinedRolloutPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedRolloutPlan = this._predefinedRolloutPlan;
    }
    if (this._retryUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryUuid = this._retryUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conflictBehavior = undefined;
      this._name = undefined;
      this._predefinedRolloutPlan = undefined;
      this._retryUuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conflictBehavior = value.conflictBehavior;
      this._name = value.name;
      this._predefinedRolloutPlan = value.predefinedRolloutPlan;
      this._retryUuid = value.retryUuid;
    }
  }

  // conflict_behavior - computed: false, optional: true, required: false
  private _conflictBehavior?: string; 
  public get conflictBehavior() {
    return this.getStringAttribute('conflict_behavior');
  }
  public set conflictBehavior(value: string) {
    this._conflictBehavior = value;
  }
  public resetConflictBehavior() {
    this._conflictBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictBehaviorInput() {
    return this._conflictBehavior;
  }

  // name - computed: false, optional: true, required: false
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

  // predefined_rollout_plan - computed: false, optional: true, required: false
  private _predefinedRolloutPlan?: string; 
  public get predefinedRolloutPlan() {
    return this.getStringAttribute('predefined_rollout_plan');
  }
  public set predefinedRolloutPlan(value: string) {
    this._predefinedRolloutPlan = value;
  }
  public resetPredefinedRolloutPlan() {
    this._predefinedRolloutPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedRolloutPlanInput() {
    return this._predefinedRolloutPlan;
  }

  // retry_uuid - computed: false, optional: true, required: false
  private _retryUuid?: string; 
  public get retryUuid() {
    return this.getStringAttribute('retry_uuid');
  }
  public set retryUuid(value: string) {
    this._retryUuid = value;
  }
  public resetRetryUuid() {
    this._retryUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryUuidInput() {
    return this._retryUuid;
  }
}
export interface GoogleComputeGlobalVmExtensionPolicyRolloutOperation {
  /**
  * rollout_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#rollout_input GoogleComputeGlobalVmExtensionPolicy#rollout_input}
  */
  readonly rolloutInput: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput;
}

export function googleComputeGlobalVmExtensionPolicyRolloutOperationToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference | GoogleComputeGlobalVmExtensionPolicyRolloutOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rollout_input: googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputToTerraform(struct!.rolloutInput),
  }
}


export function googleComputeGlobalVmExtensionPolicyRolloutOperationToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference | GoogleComputeGlobalVmExtensionPolicyRolloutOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rollout_input: {
      value: googleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputToHclTerraform(struct!.rolloutInput),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyRolloutOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rolloutInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutInput = this._rolloutInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyRolloutOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rolloutInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rolloutInput.internalValue = value.rolloutInput;
    }
  }

  // rollout_status - computed: true, optional: false, required: false
  private _rolloutStatus = new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList(this, "rollout_status", false);
  public get rolloutStatus() {
    return this._rolloutStatus;
  }

  // rollout_input - computed: false, optional: false, required: true
  private _rolloutInput = new GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference(this, "rollout_input");
  public get rolloutInput() {
    return this._rolloutInput;
  }
  public putRolloutInput(value: GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput) {
    this._rolloutInput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInputInput() {
    return this._rolloutInput.internalValue;
  }
}
export interface GoogleComputeGlobalVmExtensionPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#create GoogleComputeGlobalVmExtensionPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#delete GoogleComputeGlobalVmExtensionPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#update GoogleComputeGlobalVmExtensionPolicy#update}
  */
  readonly update?: string;
}

export function googleComputeGlobalVmExtensionPolicyTimeoutsToTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyTimeouts | cdktf.IResolvable): any {
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


export function googleComputeGlobalVmExtensionPolicyTimeoutsToHclTerraform(struct?: GoogleComputeGlobalVmExtensionPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeGlobalVmExtensionPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeGlobalVmExtensionPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy google_compute_global_vm_extension_policy}
*/
export class GoogleComputeGlobalVmExtensionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_global_vm_extension_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeGlobalVmExtensionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeGlobalVmExtensionPolicy to import
  * @param importFromId The id of the existing GoogleComputeGlobalVmExtensionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeGlobalVmExtensionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_global_vm_extension_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy google_compute_global_vm_extension_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeGlobalVmExtensionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeGlobalVmExtensionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_global_vm_extension_policy',
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
    this._description = config.description;
    this._name = config.name;
    this._priority = config.priority;
    this._project = config.project;
    this._extensionPolicies.internalValue = config.extensionPolicies;
    this._instanceSelectors.internalValue = config.instanceSelectors;
    this._rolloutOperation.internalValue = config.rolloutOperation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // scoped_resource_status - computed: true, optional: false, required: false
  public get scopedResourceStatus() {
    return this.getStringAttribute('scoped_resource_status');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // update_timestamp - computed: true, optional: false, required: false
  public get updateTimestamp() {
    return this.getStringAttribute('update_timestamp');
  }

  // extension_policies - computed: false, optional: false, required: true
  private _extensionPolicies = new GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList(this, "extension_policies", true);
  public get extensionPolicies() {
    return this._extensionPolicies;
  }
  public putExtensionPolicies(value: GoogleComputeGlobalVmExtensionPolicyExtensionPolicies[] | cdktf.IResolvable) {
    this._extensionPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionPoliciesInput() {
    return this._extensionPolicies.internalValue;
  }

  // instance_selectors - computed: false, optional: true, required: false
  private _instanceSelectors = new GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList(this, "instance_selectors", false);
  public get instanceSelectors() {
    return this._instanceSelectors;
  }
  public putInstanceSelectors(value: GoogleComputeGlobalVmExtensionPolicyInstanceSelectors[] | cdktf.IResolvable) {
    this._instanceSelectors.internalValue = value;
  }
  public resetInstanceSelectors() {
    this._instanceSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorsInput() {
    return this._instanceSelectors.internalValue;
  }

  // rollout_operation - computed: false, optional: false, required: true
  private _rolloutOperation = new GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference(this, "rollout_operation");
  public get rolloutOperation() {
    return this._rolloutOperation;
  }
  public putRolloutOperation(value: GoogleComputeGlobalVmExtensionPolicyRolloutOperation) {
    this._rolloutOperation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutOperationInput() {
    return this._rolloutOperation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeGlobalVmExtensionPolicyTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      extension_policies: cdktf.listMapper(googleComputeGlobalVmExtensionPolicyExtensionPoliciesToTerraform, true)(this._extensionPolicies.internalValue),
      instance_selectors: cdktf.listMapper(googleComputeGlobalVmExtensionPolicyInstanceSelectorsToTerraform, true)(this._instanceSelectors.internalValue),
      rollout_operation: googleComputeGlobalVmExtensionPolicyRolloutOperationToTerraform(this._rolloutOperation.internalValue),
      timeouts: googleComputeGlobalVmExtensionPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_policies: {
        value: cdktf.listMapperHcl(googleComputeGlobalVmExtensionPolicyExtensionPoliciesToHclTerraform, true)(this._extensionPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList",
      },
      instance_selectors: {
        value: cdktf.listMapperHcl(googleComputeGlobalVmExtensionPolicyInstanceSelectorsToHclTerraform, true)(this._instanceSelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList",
      },
      rollout_operation: {
        value: googleComputeGlobalVmExtensionPolicyRolloutOperationToHclTerraform(this._rolloutOperation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeGlobalVmExtensionPolicyRolloutOperationList",
      },
      timeouts: {
        value: googleComputeGlobalVmExtensionPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeGlobalVmExtensionPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
