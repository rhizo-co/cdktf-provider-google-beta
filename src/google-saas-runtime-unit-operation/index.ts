// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleSaasRuntimeUnitOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations is an unstructured key-value map stored with a resource that
  * may be set by external tools to store and retrieve arbitrary metadata.
  * They are not queryable and should be preserved when modifying objects.
  * 
  * More info: https://kubernetes.io/docs/user-guide/annotations
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#annotations GoogleSaasRuntimeUnitOperation#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#deletion_policy GoogleSaasRuntimeUnitOperation#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels on the resource, which can be used for categorization.
  * similar to Kubernetes resource labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#labels GoogleSaasRuntimeUnitOperation#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#location GoogleSaasRuntimeUnitOperation#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}
  */
  readonly project?: string;
  /**
  * The Unit a given UnitOperation will act upon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#unit GoogleSaasRuntimeUnitOperation#unit}
  */
  readonly unit: string;
  /**
  * The ID value for the new unit operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#unit_operation_id GoogleSaasRuntimeUnitOperation#unit_operation_id}
  */
  readonly unitOperationId: string;
  /**
  * If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED)
  * before completing the apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#wait_for_completion GoogleSaasRuntimeUnitOperation#wait_for_completion}
  */
  readonly waitForCompletion?: boolean | cdktf.IResolvable;
  /**
  * deprovision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#deprovision GoogleSaasRuntimeUnitOperation#deprovision}
  */
  readonly deprovision?: GoogleSaasRuntimeUnitOperationDeprovision;
  /**
  * provision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#provision GoogleSaasRuntimeUnitOperation#provision}
  */
  readonly provision?: GoogleSaasRuntimeUnitOperationProvision;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#timeouts GoogleSaasRuntimeUnitOperation#timeouts}
  */
  readonly timeouts?: GoogleSaasRuntimeUnitOperationTimeouts;
  /**
  * upgrade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#upgrade GoogleSaasRuntimeUnitOperation#upgrade}
  */
  readonly upgrade?: GoogleSaasRuntimeUnitOperationUpgrade;
}
export interface GoogleSaasRuntimeUnitOperationConditions {
}

export function googleSaasRuntimeUnitOperationConditionsToTerraform(struct?: GoogleSaasRuntimeUnitOperationConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleSaasRuntimeUnitOperationConditionsToHclTerraform(struct?: GoogleSaasRuntimeUnitOperationConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleSaasRuntimeUnitOperationConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSaasRuntimeUnitOperationConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitOperationConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleSaasRuntimeUnitOperationConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleSaasRuntimeUnitOperationConditionsOutputReference {
    return new GoogleSaasRuntimeUnitOperationConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSaasRuntimeUnitOperationDeprovision {
}

export function googleSaasRuntimeUnitOperationDeprovisionToTerraform(struct?: GoogleSaasRuntimeUnitOperationDeprovisionOutputReference | GoogleSaasRuntimeUnitOperationDeprovision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleSaasRuntimeUnitOperationDeprovisionToHclTerraform(struct?: GoogleSaasRuntimeUnitOperationDeprovisionOutputReference | GoogleSaasRuntimeUnitOperationDeprovision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleSaasRuntimeUnitOperationDeprovisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSaasRuntimeUnitOperationDeprovision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitOperationDeprovision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleSaasRuntimeUnitOperationProvisionInputVariables {
  /**
  * Name of a supported variable type. Supported types are string, int, bool.
  * Possible values:
  * STRING
  * INT
  * BOOL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#type GoogleSaasRuntimeUnitOperation#type}
  */
  readonly type?: string;
  /**
  * String encoded value for the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#value GoogleSaasRuntimeUnitOperation#value}
  */
  readonly value?: string;
  /**
  * Name of the variable from actuation configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#variable GoogleSaasRuntimeUnitOperation#variable}
  */
  readonly variable: string;
}

export function googleSaasRuntimeUnitOperationProvisionInputVariablesToTerraform(struct?: GoogleSaasRuntimeUnitOperationProvisionInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function googleSaasRuntimeUnitOperationProvisionInputVariablesToHclTerraform(struct?: GoogleSaasRuntimeUnitOperationProvisionInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSaasRuntimeUnitOperationProvisionInputVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitOperationProvisionInputVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
      this._variable = value.variable;
    }
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

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class GoogleSaasRuntimeUnitOperationProvisionInputVariablesList extends cdktf.ComplexList {
  public internalValue? : GoogleSaasRuntimeUnitOperationProvisionInputVariables[] | cdktf.IResolvable

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
  public get(index: number): GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference {
    return new GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSaasRuntimeUnitOperationProvision {
  /**
  * Reference to the Release object to use for the Unit. (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#release GoogleSaasRuntimeUnitOperation#release}
  */
  readonly release?: string;
  /**
  * input_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#input_variables GoogleSaasRuntimeUnitOperation#input_variables}
  */
  readonly inputVariables?: GoogleSaasRuntimeUnitOperationProvisionInputVariables[] | cdktf.IResolvable;
}

export function googleSaasRuntimeUnitOperationProvisionToTerraform(struct?: GoogleSaasRuntimeUnitOperationProvisionOutputReference | GoogleSaasRuntimeUnitOperationProvision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    release: cdktf.stringToTerraform(struct!.release),
    input_variables: cdktf.listMapper(googleSaasRuntimeUnitOperationProvisionInputVariablesToTerraform, true)(struct!.inputVariables),
  }
}


export function googleSaasRuntimeUnitOperationProvisionToHclTerraform(struct?: GoogleSaasRuntimeUnitOperationProvisionOutputReference | GoogleSaasRuntimeUnitOperationProvision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    release: {
      value: cdktf.stringToHclTerraform(struct!.release),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_variables: {
      value: cdktf.listMapperHcl(googleSaasRuntimeUnitOperationProvisionInputVariablesToHclTerraform, true)(struct!.inputVariables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSaasRuntimeUnitOperationProvisionInputVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitOperationProvisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSaasRuntimeUnitOperationProvision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._release !== undefined) {
      hasAnyValues = true;
      internalValueResult.release = this._release;
    }
    if (this._inputVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariables = this._inputVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitOperationProvision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._release = undefined;
      this._inputVariables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._release = value.release;
      this._inputVariables.internalValue = value.inputVariables;
    }
  }

  // release - computed: false, optional: true, required: false
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  public resetRelease() {
    this._release = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // input_variables - computed: false, optional: true, required: false
  private _inputVariables = new GoogleSaasRuntimeUnitOperationProvisionInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }
  public putInputVariables(value: GoogleSaasRuntimeUnitOperationProvisionInputVariables[] | cdktf.IResolvable) {
    this._inputVariables.internalValue = value;
  }
  public resetInputVariables() {
    this._inputVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariablesInput() {
    return this._inputVariables.internalValue;
  }
}
export interface GoogleSaasRuntimeUnitOperationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#create GoogleSaasRuntimeUnitOperation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#delete GoogleSaasRuntimeUnitOperation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#update GoogleSaasRuntimeUnitOperation#update}
  */
  readonly update?: string;
}

export function googleSaasRuntimeUnitOperationTimeoutsToTerraform(struct?: GoogleSaasRuntimeUnitOperationTimeouts | cdktf.IResolvable): any {
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


export function googleSaasRuntimeUnitOperationTimeoutsToHclTerraform(struct?: GoogleSaasRuntimeUnitOperationTimeouts | cdktf.IResolvable): any {
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

export class GoogleSaasRuntimeUnitOperationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleSaasRuntimeUnitOperationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleSaasRuntimeUnitOperationTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleSaasRuntimeUnitOperationUpgradeInputVariables {
  /**
  * Name of a supported variable type. Supported types are string, int, bool.
  * Possible values:
  * STRING
  * INT
  * BOOL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#type GoogleSaasRuntimeUnitOperation#type}
  */
  readonly type?: string;
  /**
  * String encoded value for the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#value GoogleSaasRuntimeUnitOperation#value}
  */
  readonly value?: string;
  /**
  * Name of the variable from actuation configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#variable GoogleSaasRuntimeUnitOperation#variable}
  */
  readonly variable: string;
}

export function googleSaasRuntimeUnitOperationUpgradeInputVariablesToTerraform(struct?: GoogleSaasRuntimeUnitOperationUpgradeInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function googleSaasRuntimeUnitOperationUpgradeInputVariablesToHclTerraform(struct?: GoogleSaasRuntimeUnitOperationUpgradeInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSaasRuntimeUnitOperationUpgradeInputVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitOperationUpgradeInputVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
      this._variable = value.variable;
    }
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

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList extends cdktf.ComplexList {
  public internalValue? : GoogleSaasRuntimeUnitOperationUpgradeInputVariables[] | cdktf.IResolvable

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
  public get(index: number): GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference {
    return new GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSaasRuntimeUnitOperationUpgrade {
  /**
  * Reference to the Release object to use for the Unit. (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#release GoogleSaasRuntimeUnitOperation#release}
  */
  readonly release?: string;
  /**
  * input_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#input_variables GoogleSaasRuntimeUnitOperation#input_variables}
  */
  readonly inputVariables?: GoogleSaasRuntimeUnitOperationUpgradeInputVariables[] | cdktf.IResolvable;
}

export function googleSaasRuntimeUnitOperationUpgradeToTerraform(struct?: GoogleSaasRuntimeUnitOperationUpgradeOutputReference | GoogleSaasRuntimeUnitOperationUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    release: cdktf.stringToTerraform(struct!.release),
    input_variables: cdktf.listMapper(googleSaasRuntimeUnitOperationUpgradeInputVariablesToTerraform, true)(struct!.inputVariables),
  }
}


export function googleSaasRuntimeUnitOperationUpgradeToHclTerraform(struct?: GoogleSaasRuntimeUnitOperationUpgradeOutputReference | GoogleSaasRuntimeUnitOperationUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    release: {
      value: cdktf.stringToHclTerraform(struct!.release),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_variables: {
      value: cdktf.listMapperHcl(googleSaasRuntimeUnitOperationUpgradeInputVariablesToHclTerraform, true)(struct!.inputVariables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitOperationUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSaasRuntimeUnitOperationUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._release !== undefined) {
      hasAnyValues = true;
      internalValueResult.release = this._release;
    }
    if (this._inputVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariables = this._inputVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitOperationUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._release = undefined;
      this._inputVariables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._release = value.release;
      this._inputVariables.internalValue = value.inputVariables;
    }
  }

  // release - computed: false, optional: true, required: false
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  public resetRelease() {
    this._release = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // input_variables - computed: false, optional: true, required: false
  private _inputVariables = new GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }
  public putInputVariables(value: GoogleSaasRuntimeUnitOperationUpgradeInputVariables[] | cdktf.IResolvable) {
    this._inputVariables.internalValue = value;
  }
  public resetInputVariables() {
    this._inputVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariablesInput() {
    return this._inputVariables.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation google_saas_runtime_unit_operation}
*/
export class GoogleSaasRuntimeUnitOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_saas_runtime_unit_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleSaasRuntimeUnitOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleSaasRuntimeUnitOperation to import
  * @param importFromId The id of the existing GoogleSaasRuntimeUnitOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleSaasRuntimeUnitOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_saas_runtime_unit_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_saas_runtime_unit_operation google_saas_runtime_unit_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleSaasRuntimeUnitOperationConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleSaasRuntimeUnitOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_saas_runtime_unit_operation',
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
    this._annotations = config.annotations;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._unit = config.unit;
    this._unitOperationId = config.unitOperationId;
    this._waitForCompletion = config.waitForCompletion;
    this._deprovision.internalValue = config.deprovision;
    this._provision.internalValue = config.provision;
    this._timeouts.internalValue = config.timeouts;
    this._upgrade.internalValue = config.upgrade;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GoogleSaasRuntimeUnitOperationConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // engine_state - computed: true, optional: false, required: false
  public get engineState() {
    return this.getStringAttribute('engine_state');
  }

  // error_category - computed: true, optional: false, required: false
  public get errorCategory() {
    return this.getStringAttribute('error_category');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // unit_operation_id - computed: false, optional: false, required: true
  private _unitOperationId?: string; 
  public get unitOperationId() {
    return this.getStringAttribute('unit_operation_id');
  }
  public set unitOperationId(value: string) {
    this._unitOperationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitOperationIdInput() {
    return this._unitOperationId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // wait_for_completion - computed: false, optional: true, required: false
  private _waitForCompletion?: boolean | cdktf.IResolvable; 
  public get waitForCompletion() {
    return this.getBooleanAttribute('wait_for_completion');
  }
  public set waitForCompletion(value: boolean | cdktf.IResolvable) {
    this._waitForCompletion = value;
  }
  public resetWaitForCompletion() {
    this._waitForCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCompletionInput() {
    return this._waitForCompletion;
  }

  // deprovision - computed: false, optional: true, required: false
  private _deprovision = new GoogleSaasRuntimeUnitOperationDeprovisionOutputReference(this, "deprovision");
  public get deprovision() {
    return this._deprovision;
  }
  public putDeprovision(value: GoogleSaasRuntimeUnitOperationDeprovision) {
    this._deprovision.internalValue = value;
  }
  public resetDeprovision() {
    this._deprovision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprovisionInput() {
    return this._deprovision.internalValue;
  }

  // provision - computed: false, optional: true, required: false
  private _provision = new GoogleSaasRuntimeUnitOperationProvisionOutputReference(this, "provision");
  public get provision() {
    return this._provision;
  }
  public putProvision(value: GoogleSaasRuntimeUnitOperationProvision) {
    this._provision.internalValue = value;
  }
  public resetProvision() {
    this._provision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionInput() {
    return this._provision.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleSaasRuntimeUnitOperationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleSaasRuntimeUnitOperationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade - computed: false, optional: true, required: false
  private _upgrade = new GoogleSaasRuntimeUnitOperationUpgradeOutputReference(this, "upgrade");
  public get upgrade() {
    return this._upgrade;
  }
  public putUpgrade(value: GoogleSaasRuntimeUnitOperationUpgrade) {
    this._upgrade.internalValue = value;
  }
  public resetUpgrade() {
    this._upgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInput() {
    return this._upgrade.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      unit: cdktf.stringToTerraform(this._unit),
      unit_operation_id: cdktf.stringToTerraform(this._unitOperationId),
      wait_for_completion: cdktf.booleanToTerraform(this._waitForCompletion),
      deprovision: googleSaasRuntimeUnitOperationDeprovisionToTerraform(this._deprovision.internalValue),
      provision: googleSaasRuntimeUnitOperationProvisionToTerraform(this._provision.internalValue),
      timeouts: googleSaasRuntimeUnitOperationTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade: googleSaasRuntimeUnitOperationUpgradeToTerraform(this._upgrade.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_operation_id: {
        value: cdktf.stringToHclTerraform(this._unitOperationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_completion: {
        value: cdktf.booleanToHclTerraform(this._waitForCompletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deprovision: {
        value: googleSaasRuntimeUnitOperationDeprovisionToHclTerraform(this._deprovision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSaasRuntimeUnitOperationDeprovisionList",
      },
      provision: {
        value: googleSaasRuntimeUnitOperationProvisionToHclTerraform(this._provision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSaasRuntimeUnitOperationProvisionList",
      },
      timeouts: {
        value: googleSaasRuntimeUnitOperationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleSaasRuntimeUnitOperationTimeouts",
      },
      upgrade: {
        value: googleSaasRuntimeUnitOperationUpgradeToHclTerraform(this._upgrade.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSaasRuntimeUnitOperationUpgradeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
