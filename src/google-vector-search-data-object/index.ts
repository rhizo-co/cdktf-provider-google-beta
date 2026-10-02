// https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVectorSearchDataObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the parent Collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#collection_id GoogleVectorSearchDataObject#collection_id}
  */
  readonly collectionId: string;
  /**
  * The JSON data of the DataObject. Must be a JSON object whose field
  * names match the fields defined in the parent Collection's
  * 'data_schema'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#data GoogleVectorSearchDataObject#data}
  */
  readonly data?: string;
  /**
  * ID of the DataObject to create.
  * The id must be 1-63 characters long, and comply with
  * [RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
  * Specifically, it must be 1-63 characters long and match the regular
  * expression '[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#data_object_id GoogleVectorSearchDataObject#data_object_id}
  */
  readonly dataObjectId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#deletion_policy GoogleVectorSearchDataObject#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The etag of the DataObject, used for optimistic concurrency
  * control on updates and deletes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#etag GoogleVectorSearchDataObject#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#location GoogleVectorSearchDataObject#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#timeouts GoogleVectorSearchDataObject#timeouts}
  */
  readonly timeouts?: GoogleVectorSearchDataObjectTimeouts;
  /**
  * vectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#vectors GoogleVectorSearchDataObject#vectors}
  */
  readonly vectors?: GoogleVectorSearchDataObjectVectors[] | cdktf.IResolvable;
}
export interface GoogleVectorSearchDataObjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#create GoogleVectorSearchDataObject#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#delete GoogleVectorSearchDataObject#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#update GoogleVectorSearchDataObject#update}
  */
  readonly update?: string;
}

export function googleVectorSearchDataObjectTimeoutsToTerraform(struct?: GoogleVectorSearchDataObjectTimeouts | cdktf.IResolvable): any {
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


export function googleVectorSearchDataObjectTimeoutsToHclTerraform(struct?: GoogleVectorSearchDataObjectTimeouts | cdktf.IResolvable): any {
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

export class GoogleVectorSearchDataObjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVectorSearchDataObjectTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVectorSearchDataObjectTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleVectorSearchDataObjectVectorsDense {
  /**
  * The float values of the dense vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}
  */
  readonly values: number[];
}

export function googleVectorSearchDataObjectVectorsDenseToTerraform(struct?: GoogleVectorSearchDataObjectVectorsDenseOutputReference | GoogleVectorSearchDataObjectVectorsDense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function googleVectorSearchDataObjectVectorsDenseToHclTerraform(struct?: GoogleVectorSearchDataObjectVectorsDenseOutputReference | GoogleVectorSearchDataObjectVectorsDense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVectorSearchDataObjectVectorsDenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVectorSearchDataObjectVectorsDense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVectorSearchDataObjectVectorsDense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleVectorSearchDataObjectVectorsSparse {
  /**
  * The indices corresponding to the entries in 'values'. Must
  * have the same length as 'values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#indices GoogleVectorSearchDataObject#indices}
  */
  readonly indices: number[];
  /**
  * The non-zero float values of the sparse vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}
  */
  readonly values: number[];
}

export function googleVectorSearchDataObjectVectorsSparseToTerraform(struct?: GoogleVectorSearchDataObjectVectorsSparseOutputReference | GoogleVectorSearchDataObjectVectorsSparse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indices: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.indices),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function googleVectorSearchDataObjectVectorsSparseToHclTerraform(struct?: GoogleVectorSearchDataObjectVectorsSparseOutputReference | GoogleVectorSearchDataObjectVectorsSparse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indices: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.indices),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVectorSearchDataObjectVectorsSparseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVectorSearchDataObjectVectorsSparse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indices !== undefined) {
      hasAnyValues = true;
      internalValueResult.indices = this._indices;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVectorSearchDataObjectVectorsSparse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indices = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indices = value.indices;
      this._values = value.values;
    }
  }

  // indices - computed: false, optional: false, required: true
  private _indices?: number[]; 
  public get indices() {
    return this.getNumberListAttribute('indices');
  }
  public set indices(value: number[]) {
    this._indices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices;
  }

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleVectorSearchDataObjectVectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#field_name GoogleVectorSearchDataObject#field_name}
  */
  readonly fieldName: string;
  /**
  * dense block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#dense GoogleVectorSearchDataObject#dense}
  */
  readonly dense?: GoogleVectorSearchDataObjectVectorsDense;
  /**
  * sparse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#sparse GoogleVectorSearchDataObject#sparse}
  */
  readonly sparse?: GoogleVectorSearchDataObjectVectorsSparse;
}

export function googleVectorSearchDataObjectVectorsToTerraform(struct?: GoogleVectorSearchDataObjectVectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    dense: googleVectorSearchDataObjectVectorsDenseToTerraform(struct!.dense),
    sparse: googleVectorSearchDataObjectVectorsSparseToTerraform(struct!.sparse),
  }
}


export function googleVectorSearchDataObjectVectorsToHclTerraform(struct?: GoogleVectorSearchDataObjectVectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dense: {
      value: googleVectorSearchDataObjectVectorsDenseToHclTerraform(struct!.dense),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVectorSearchDataObjectVectorsDenseList",
    },
    sparse: {
      value: googleVectorSearchDataObjectVectorsSparseToHclTerraform(struct!.sparse),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVectorSearchDataObjectVectorsSparseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVectorSearchDataObjectVectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVectorSearchDataObjectVectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._dense?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dense = this._dense?.internalValue;
    }
    if (this._sparse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparse = this._sparse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVectorSearchDataObjectVectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._dense.internalValue = undefined;
      this._sparse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._dense.internalValue = value.dense;
      this._sparse.internalValue = value.sparse;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // dense - computed: false, optional: true, required: false
  private _dense = new GoogleVectorSearchDataObjectVectorsDenseOutputReference(this, "dense");
  public get dense() {
    return this._dense;
  }
  public putDense(value: GoogleVectorSearchDataObjectVectorsDense) {
    this._dense.internalValue = value;
  }
  public resetDense() {
    this._dense.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denseInput() {
    return this._dense.internalValue;
  }

  // sparse - computed: false, optional: true, required: false
  private _sparse = new GoogleVectorSearchDataObjectVectorsSparseOutputReference(this, "sparse");
  public get sparse() {
    return this._sparse;
  }
  public putSparse(value: GoogleVectorSearchDataObjectVectorsSparse) {
    this._sparse.internalValue = value;
  }
  public resetSparse() {
    this._sparse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseInput() {
    return this._sparse.internalValue;
  }
}

export class GoogleVectorSearchDataObjectVectorsList extends cdktf.ComplexList {
  public internalValue? : GoogleVectorSearchDataObjectVectors[] | cdktf.IResolvable

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
  public get(index: number): GoogleVectorSearchDataObjectVectorsOutputReference {
    return new GoogleVectorSearchDataObjectVectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object google_vector_search_data_object}
*/
export class GoogleVectorSearchDataObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vector_search_data_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVectorSearchDataObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVectorSearchDataObject to import
  * @param importFromId The id of the existing GoogleVectorSearchDataObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVectorSearchDataObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vector_search_data_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object google_vector_search_data_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVectorSearchDataObjectConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVectorSearchDataObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vector_search_data_object',
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
    this._collectionId = config.collectionId;
    this._data = config.data;
    this._dataObjectId = config.dataObjectId;
    this._deletionPolicy = config.deletionPolicy;
    this._etag = config.etag;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
    this._vectors.internalValue = config.vectors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_object_id - computed: false, optional: false, required: true
  private _dataObjectId?: string; 
  public get dataObjectId() {
    return this.getStringAttribute('data_object_id');
  }
  public set dataObjectId(value: string) {
    this._dataObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataObjectIdInput() {
    return this._dataObjectId;
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

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVectorSearchDataObjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVectorSearchDataObjectTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vectors - computed: false, optional: true, required: false
  private _vectors = new GoogleVectorSearchDataObjectVectorsList(this, "vectors", true);
  public get vectors() {
    return this._vectors;
  }
  public putVectors(value: GoogleVectorSearchDataObjectVectors[] | cdktf.IResolvable) {
    this._vectors.internalValue = value;
  }
  public resetVectors() {
    this._vectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorsInput() {
    return this._vectors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_id: cdktf.stringToTerraform(this._collectionId),
      data: cdktf.stringToTerraform(this._data),
      data_object_id: cdktf.stringToTerraform(this._dataObjectId),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      timeouts: googleVectorSearchDataObjectTimeoutsToTerraform(this._timeouts.internalValue),
      vectors: cdktf.listMapper(googleVectorSearchDataObjectVectorsToTerraform, true)(this._vectors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_id: {
        value: cdktf.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_object_id: {
        value: cdktf.stringToHclTerraform(this._dataObjectId),
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
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
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
      timeouts: {
        value: googleVectorSearchDataObjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVectorSearchDataObjectTimeouts",
      },
      vectors: {
        value: cdktf.listMapperHcl(googleVectorSearchDataObjectVectorsToHclTerraform, true)(this._vectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleVectorSearchDataObjectVectorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
