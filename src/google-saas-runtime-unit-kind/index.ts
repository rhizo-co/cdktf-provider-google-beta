// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleSaasRuntimeUnitKindConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#annotations GoogleSaasRuntimeUnitKind#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * A reference to the Release object to use as default for creating new units
  * of this UnitKind.
  * If not specified, a new unit must explicitly reference which release to use
  * for its creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#default_release GoogleSaasRuntimeUnitKind#default_release}
  */
  readonly defaultRelease?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#deletion_policy GoogleSaasRuntimeUnitKind#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#labels GoogleSaasRuntimeUnitKind#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#location GoogleSaasRuntimeUnitKind#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}
  */
  readonly project?: string;
  /**
  * A reference to the Saas that defines the product (managed service) that
  * the producer wants to manage with App Lifecycle Manager. Part of the App Lifecycle Manager
  * common data model. Immutable once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#saas GoogleSaasRuntimeUnitKind#saas}
  */
  readonly saas: string;
  /**
  * The ID value for the new unit kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#unit_kind_id GoogleSaasRuntimeUnitKind#unit_kind_id}
  */
  readonly unitKindId: string;
  /**
  * dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#dependencies GoogleSaasRuntimeUnitKind#dependencies}
  */
  readonly dependencies?: GoogleSaasRuntimeUnitKindDependencies[] | cdktf.IResolvable;
  /**
  * input_variable_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#input_variable_mappings GoogleSaasRuntimeUnitKind#input_variable_mappings}
  */
  readonly inputVariableMappings?: GoogleSaasRuntimeUnitKindInputVariableMappings[] | cdktf.IResolvable;
  /**
  * output_variable_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#output_variable_mappings GoogleSaasRuntimeUnitKind#output_variable_mappings}
  */
  readonly outputVariableMappings?: GoogleSaasRuntimeUnitKindOutputVariableMappings[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#timeouts GoogleSaasRuntimeUnitKind#timeouts}
  */
  readonly timeouts?: GoogleSaasRuntimeUnitKindTimeouts;
}
export interface GoogleSaasRuntimeUnitKindDependencies {
  /**
  * An alias for the dependency. Used for input variable mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#alias GoogleSaasRuntimeUnitKind#alias}
  */
  readonly alias: string;
  /**
  * The unit kind of the dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#unit_kind GoogleSaasRuntimeUnitKind#unit_kind}
  */
  readonly unitKind: string;
}

export function googleSaasRuntimeUnitKindDependenciesToTerraform(struct?: GoogleSaasRuntimeUnitKindDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    unit_kind: cdktf.stringToTerraform(struct!.unitKind),
  }
}


export function googleSaasRuntimeUnitKindDependenciesToHclTerraform(struct?: GoogleSaasRuntimeUnitKindDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_kind: {
      value: cdktf.stringToHclTerraform(struct!.unitKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitKindDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSaasRuntimeUnitKindDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._unitKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitKind = this._unitKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitKindDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._unitKind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._unitKind = value.unitKind;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // unit_kind - computed: false, optional: false, required: true
  private _unitKind?: string; 
  public get unitKind() {
    return this.getStringAttribute('unit_kind');
  }
  public set unitKind(value: string) {
    this._unitKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitKindInput() {
    return this._unitKind;
  }
}

export class GoogleSaasRuntimeUnitKindDependenciesList extends cdktf.ComplexList {
  public internalValue? : GoogleSaasRuntimeUnitKindDependencies[] | cdktf.IResolvable

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
  public get(index: number): GoogleSaasRuntimeUnitKindDependenciesOutputReference {
    return new GoogleSaasRuntimeUnitKindDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSaasRuntimeUnitKindInputVariableMappingsFrom {
  /**
  * Alias of the dependency that the outputVariable will pass its value to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}
  */
  readonly dependency: string;
  /**
  * Name of the outputVariable on the dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}
  */
  readonly outputVariable: string;
}

export function googleSaasRuntimeUnitKindInputVariableMappingsFromToTerraform(struct?: GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference | GoogleSaasRuntimeUnitKindInputVariableMappingsFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency: cdktf.stringToTerraform(struct!.dependency),
    output_variable: cdktf.stringToTerraform(struct!.outputVariable),
  }
}


export function googleSaasRuntimeUnitKindInputVariableMappingsFromToHclTerraform(struct?: GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference | GoogleSaasRuntimeUnitKindInputVariableMappingsFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency: {
      value: cdktf.stringToHclTerraform(struct!.dependency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_variable: {
      value: cdktf.stringToHclTerraform(struct!.outputVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSaasRuntimeUnitKindInputVariableMappingsFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependency = this._dependency;
    }
    if (this._outputVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariable = this._outputVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependency = undefined;
      this._outputVariable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependency = value.dependency;
      this._outputVariable = value.outputVariable;
    }
  }

  // dependency - computed: false, optional: false, required: true
  private _dependency?: string; 
  public get dependency() {
    return this.getStringAttribute('dependency');
  }
  public set dependency(value: string) {
    this._dependency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInput() {
    return this._dependency;
  }

  // output_variable - computed: false, optional: false, required: true
  private _outputVariable?: string; 
  public get outputVariable() {
    return this.getStringAttribute('output_variable');
  }
  public set outputVariable(value: string) {
    this._outputVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableInput() {
    return this._outputVariable;
  }
}
export interface GoogleSaasRuntimeUnitKindInputVariableMappingsTo {
  /**
  * Alias of the dependency that the inputVariable will pass its value to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}
  */
  readonly dependency: string;
  /**
  * Tells App Lifecycle Manager if this mapping should be used during lookup or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}
  */
  readonly ignoreForLookup?: boolean | cdktf.IResolvable;
  /**
  * Name of the inputVariable on the dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}
  */
  readonly inputVariable: string;
}

export function googleSaasRuntimeUnitKindInputVariableMappingsToToTerraform(struct?: GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference | GoogleSaasRuntimeUnitKindInputVariableMappingsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency: cdktf.stringToTerraform(struct!.dependency),
    ignore_for_lookup: cdktf.booleanToTerraform(struct!.ignoreForLookup),
    input_variable: cdktf.stringToTerraform(struct!.inputVariable),
  }
}


export function googleSaasRuntimeUnitKindInputVariableMappingsToToHclTerraform(struct?: GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference | GoogleSaasRuntimeUnitKindInputVariableMappingsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency: {
      value: cdktf.stringToHclTerraform(struct!.dependency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_for_lookup: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreForLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_variable: {
      value: cdktf.stringToHclTerraform(struct!.inputVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSaasRuntimeUnitKindInputVariableMappingsTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependency = this._dependency;
    }
    if (this._ignoreForLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreForLookup = this._ignoreForLookup;
    }
    if (this._inputVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariable = this._inputVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitKindInputVariableMappingsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependency = undefined;
      this._ignoreForLookup = undefined;
      this._inputVariable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependency = value.dependency;
      this._ignoreForLookup = value.ignoreForLookup;
      this._inputVariable = value.inputVariable;
    }
  }

  // dependency - computed: false, optional: false, required: true
  private _dependency?: string; 
  public get dependency() {
    return this.getStringAttribute('dependency');
  }
  public set dependency(value: string) {
    this._dependency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInput() {
    return this._dependency;
  }

  // ignore_for_lookup - computed: false, optional: true, required: false
  private _ignoreForLookup?: boolean | cdktf.IResolvable; 
  public get ignoreForLookup() {
    return this.getBooleanAttribute('ignore_for_lookup');
  }
  public set ignoreForLookup(value: boolean | cdktf.IResolvable) {
    this._ignoreForLookup = value;
  }
  public resetIgnoreForLookup() {
    this._ignoreForLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreForLookupInput() {
    return this._ignoreForLookup;
  }

  // input_variable - computed: false, optional: false, required: true
  private _inputVariable?: string; 
  public get inputVariable() {
    return this.getStringAttribute('input_variable');
  }
  public set inputVariable(value: string) {
    this._inputVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableInput() {
    return this._inputVariable;
  }
}
export interface GoogleSaasRuntimeUnitKindInputVariableMappings {
  /**
  * name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#variable GoogleSaasRuntimeUnitKind#variable}
  */
  readonly variable: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#from GoogleSaasRuntimeUnitKind#from}
  */
  readonly from?: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#to GoogleSaasRuntimeUnitKind#to}
  */
  readonly to?: GoogleSaasRuntimeUnitKindInputVariableMappingsTo;
}

export function googleSaasRuntimeUnitKindInputVariableMappingsToTerraform(struct?: GoogleSaasRuntimeUnitKindInputVariableMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variable: cdktf.stringToTerraform(struct!.variable),
    from: googleSaasRuntimeUnitKindInputVariableMappingsFromToTerraform(struct!.from),
    to: googleSaasRuntimeUnitKindInputVariableMappingsToToTerraform(struct!.to),
  }
}


export function googleSaasRuntimeUnitKindInputVariableMappingsToHclTerraform(struct?: GoogleSaasRuntimeUnitKindInputVariableMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: googleSaasRuntimeUnitKindInputVariableMappingsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSaasRuntimeUnitKindInputVariableMappingsFromList",
    },
    to: {
      value: googleSaasRuntimeUnitKindInputVariableMappingsToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSaasRuntimeUnitKindInputVariableMappingsToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSaasRuntimeUnitKindInputVariableMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitKindInputVariableMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variable = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variable = value.variable;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
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

  // from - computed: false, optional: true, required: false
  private _from = new GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: GoogleSaasRuntimeUnitKindInputVariableMappingsTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class GoogleSaasRuntimeUnitKindInputVariableMappingsList extends cdktf.ComplexList {
  public internalValue? : GoogleSaasRuntimeUnitKindInputVariableMappings[] | cdktf.IResolvable

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
  public get(index: number): GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference {
    return new GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom {
  /**
  * Alias of the dependency that the outputVariable will pass its value to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}
  */
  readonly dependency: string;
  /**
  * Name of the outputVariable on the dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}
  */
  readonly outputVariable: string;
}

export function googleSaasRuntimeUnitKindOutputVariableMappingsFromToTerraform(struct?: GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference | GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency: cdktf.stringToTerraform(struct!.dependency),
    output_variable: cdktf.stringToTerraform(struct!.outputVariable),
  }
}


export function googleSaasRuntimeUnitKindOutputVariableMappingsFromToHclTerraform(struct?: GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference | GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency: {
      value: cdktf.stringToHclTerraform(struct!.dependency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_variable: {
      value: cdktf.stringToHclTerraform(struct!.outputVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependency = this._dependency;
    }
    if (this._outputVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariable = this._outputVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependency = undefined;
      this._outputVariable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependency = value.dependency;
      this._outputVariable = value.outputVariable;
    }
  }

  // dependency - computed: false, optional: false, required: true
  private _dependency?: string; 
  public get dependency() {
    return this.getStringAttribute('dependency');
  }
  public set dependency(value: string) {
    this._dependency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInput() {
    return this._dependency;
  }

  // output_variable - computed: false, optional: false, required: true
  private _outputVariable?: string; 
  public get outputVariable() {
    return this.getStringAttribute('output_variable');
  }
  public set outputVariable(value: string) {
    this._outputVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableInput() {
    return this._outputVariable;
  }
}
export interface GoogleSaasRuntimeUnitKindOutputVariableMappingsTo {
  /**
  * Alias of the dependency that the inputVariable will pass its value to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}
  */
  readonly dependency: string;
  /**
  * Tells App Lifecycle Manager if this mapping should be used during lookup or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}
  */
  readonly ignoreForLookup?: boolean | cdktf.IResolvable;
  /**
  * Name of the inputVariable on the dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}
  */
  readonly inputVariable: string;
}

export function googleSaasRuntimeUnitKindOutputVariableMappingsToToTerraform(struct?: GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference | GoogleSaasRuntimeUnitKindOutputVariableMappingsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency: cdktf.stringToTerraform(struct!.dependency),
    ignore_for_lookup: cdktf.booleanToTerraform(struct!.ignoreForLookup),
    input_variable: cdktf.stringToTerraform(struct!.inputVariable),
  }
}


export function googleSaasRuntimeUnitKindOutputVariableMappingsToToHclTerraform(struct?: GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference | GoogleSaasRuntimeUnitKindOutputVariableMappingsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency: {
      value: cdktf.stringToHclTerraform(struct!.dependency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_for_lookup: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreForLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_variable: {
      value: cdktf.stringToHclTerraform(struct!.inputVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSaasRuntimeUnitKindOutputVariableMappingsTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependency = this._dependency;
    }
    if (this._ignoreForLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreForLookup = this._ignoreForLookup;
    }
    if (this._inputVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariable = this._inputVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependency = undefined;
      this._ignoreForLookup = undefined;
      this._inputVariable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependency = value.dependency;
      this._ignoreForLookup = value.ignoreForLookup;
      this._inputVariable = value.inputVariable;
    }
  }

  // dependency - computed: false, optional: false, required: true
  private _dependency?: string; 
  public get dependency() {
    return this.getStringAttribute('dependency');
  }
  public set dependency(value: string) {
    this._dependency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInput() {
    return this._dependency;
  }

  // ignore_for_lookup - computed: false, optional: true, required: false
  private _ignoreForLookup?: boolean | cdktf.IResolvable; 
  public get ignoreForLookup() {
    return this.getBooleanAttribute('ignore_for_lookup');
  }
  public set ignoreForLookup(value: boolean | cdktf.IResolvable) {
    this._ignoreForLookup = value;
  }
  public resetIgnoreForLookup() {
    this._ignoreForLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreForLookupInput() {
    return this._ignoreForLookup;
  }

  // input_variable - computed: false, optional: false, required: true
  private _inputVariable?: string; 
  public get inputVariable() {
    return this.getStringAttribute('input_variable');
  }
  public set inputVariable(value: string) {
    this._inputVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableInput() {
    return this._inputVariable;
  }
}
export interface GoogleSaasRuntimeUnitKindOutputVariableMappings {
  /**
  * name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#variable GoogleSaasRuntimeUnitKind#variable}
  */
  readonly variable: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#from GoogleSaasRuntimeUnitKind#from}
  */
  readonly from?: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#to GoogleSaasRuntimeUnitKind#to}
  */
  readonly to?: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo;
}

export function googleSaasRuntimeUnitKindOutputVariableMappingsToTerraform(struct?: GoogleSaasRuntimeUnitKindOutputVariableMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variable: cdktf.stringToTerraform(struct!.variable),
    from: googleSaasRuntimeUnitKindOutputVariableMappingsFromToTerraform(struct!.from),
    to: googleSaasRuntimeUnitKindOutputVariableMappingsToToTerraform(struct!.to),
  }
}


export function googleSaasRuntimeUnitKindOutputVariableMappingsToHclTerraform(struct?: GoogleSaasRuntimeUnitKindOutputVariableMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: googleSaasRuntimeUnitKindOutputVariableMappingsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSaasRuntimeUnitKindOutputVariableMappingsFromList",
    },
    to: {
      value: googleSaasRuntimeUnitKindOutputVariableMappingsToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSaasRuntimeUnitKindOutputVariableMappingsToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSaasRuntimeUnitKindOutputVariableMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSaasRuntimeUnitKindOutputVariableMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variable = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variable = value.variable;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
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

  // from - computed: false, optional: true, required: false
  private _from = new GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class GoogleSaasRuntimeUnitKindOutputVariableMappingsList extends cdktf.ComplexList {
  public internalValue? : GoogleSaasRuntimeUnitKindOutputVariableMappings[] | cdktf.IResolvable

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
  public get(index: number): GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference {
    return new GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSaasRuntimeUnitKindTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#create GoogleSaasRuntimeUnitKind#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#delete GoogleSaasRuntimeUnitKind#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#update GoogleSaasRuntimeUnitKind#update}
  */
  readonly update?: string;
}

export function googleSaasRuntimeUnitKindTimeoutsToTerraform(struct?: GoogleSaasRuntimeUnitKindTimeouts | cdktf.IResolvable): any {
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


export function googleSaasRuntimeUnitKindTimeoutsToHclTerraform(struct?: GoogleSaasRuntimeUnitKindTimeouts | cdktf.IResolvable): any {
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

export class GoogleSaasRuntimeUnitKindTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleSaasRuntimeUnitKindTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleSaasRuntimeUnitKindTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind google_saas_runtime_unit_kind}
*/
export class GoogleSaasRuntimeUnitKind extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_saas_runtime_unit_kind";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleSaasRuntimeUnitKind resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleSaasRuntimeUnitKind to import
  * @param importFromId The id of the existing GoogleSaasRuntimeUnitKind that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleSaasRuntimeUnitKind to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_saas_runtime_unit_kind", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_saas_runtime_unit_kind google_saas_runtime_unit_kind} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleSaasRuntimeUnitKindConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleSaasRuntimeUnitKindConfig) {
    super(scope, id, {
      terraformResourceType: 'google_saas_runtime_unit_kind',
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
    this._annotations = config.annotations;
    this._defaultRelease = config.defaultRelease;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._saas = config.saas;
    this._unitKindId = config.unitKindId;
    this._dependencies.internalValue = config.dependencies;
    this._inputVariableMappings.internalValue = config.inputVariableMappings;
    this._outputVariableMappings.internalValue = config.outputVariableMappings;
    this._timeouts.internalValue = config.timeouts;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_release - computed: false, optional: true, required: false
  private _defaultRelease?: string; 
  public get defaultRelease() {
    return this.getStringAttribute('default_release');
  }
  public set defaultRelease(value: string) {
    this._defaultRelease = value;
  }
  public resetDefaultRelease() {
    this._defaultRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReleaseInput() {
    return this._defaultRelease;
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

  // saas - computed: false, optional: false, required: true
  private _saas?: string; 
  public get saas() {
    return this.getStringAttribute('saas');
  }
  public set saas(value: string) {
    this._saas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saasInput() {
    return this._saas;
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

  // unit_kind_id - computed: false, optional: false, required: true
  private _unitKindId?: string; 
  public get unitKindId() {
    return this.getStringAttribute('unit_kind_id');
  }
  public set unitKindId(value: string) {
    this._unitKindId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitKindIdInput() {
    return this._unitKindId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new GoogleSaasRuntimeUnitKindDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: GoogleSaasRuntimeUnitKindDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // input_variable_mappings - computed: false, optional: true, required: false
  private _inputVariableMappings = new GoogleSaasRuntimeUnitKindInputVariableMappingsList(this, "input_variable_mappings", false);
  public get inputVariableMappings() {
    return this._inputVariableMappings;
  }
  public putInputVariableMappings(value: GoogleSaasRuntimeUnitKindInputVariableMappings[] | cdktf.IResolvable) {
    this._inputVariableMappings.internalValue = value;
  }
  public resetInputVariableMappings() {
    this._inputVariableMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableMappingsInput() {
    return this._inputVariableMappings.internalValue;
  }

  // output_variable_mappings - computed: false, optional: true, required: false
  private _outputVariableMappings = new GoogleSaasRuntimeUnitKindOutputVariableMappingsList(this, "output_variable_mappings", false);
  public get outputVariableMappings() {
    return this._outputVariableMappings;
  }
  public putOutputVariableMappings(value: GoogleSaasRuntimeUnitKindOutputVariableMappings[] | cdktf.IResolvable) {
    this._outputVariableMappings.internalValue = value;
  }
  public resetOutputVariableMappings() {
    this._outputVariableMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariableMappingsInput() {
    return this._outputVariableMappings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleSaasRuntimeUnitKindTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleSaasRuntimeUnitKindTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      default_release: cdktf.stringToTerraform(this._defaultRelease),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      saas: cdktf.stringToTerraform(this._saas),
      unit_kind_id: cdktf.stringToTerraform(this._unitKindId),
      dependencies: cdktf.listMapper(googleSaasRuntimeUnitKindDependenciesToTerraform, true)(this._dependencies.internalValue),
      input_variable_mappings: cdktf.listMapper(googleSaasRuntimeUnitKindInputVariableMappingsToTerraform, true)(this._inputVariableMappings.internalValue),
      output_variable_mappings: cdktf.listMapper(googleSaasRuntimeUnitKindOutputVariableMappingsToTerraform, true)(this._outputVariableMappings.internalValue),
      timeouts: googleSaasRuntimeUnitKindTimeoutsToTerraform(this._timeouts.internalValue),
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
      default_release: {
        value: cdktf.stringToHclTerraform(this._defaultRelease),
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
      saas: {
        value: cdktf.stringToHclTerraform(this._saas),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_kind_id: {
        value: cdktf.stringToHclTerraform(this._unitKindId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dependencies: {
        value: cdktf.listMapperHcl(googleSaasRuntimeUnitKindDependenciesToHclTerraform, true)(this._dependencies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSaasRuntimeUnitKindDependenciesList",
      },
      input_variable_mappings: {
        value: cdktf.listMapperHcl(googleSaasRuntimeUnitKindInputVariableMappingsToHclTerraform, true)(this._inputVariableMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSaasRuntimeUnitKindInputVariableMappingsList",
      },
      output_variable_mappings: {
        value: cdktf.listMapperHcl(googleSaasRuntimeUnitKindOutputVariableMappingsToHclTerraform, true)(this._outputVariableMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSaasRuntimeUnitKindOutputVariableMappingsList",
      },
      timeouts: {
        value: googleSaasRuntimeUnitKindTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleSaasRuntimeUnitKindTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
