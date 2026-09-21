// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBiglakeHiveTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Hive catalog where the table is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#catalog GoogleBiglakeHiveTable#catalog}
  */
  readonly catalog: string;
  /**
  * The Hive database where the table is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#database GoogleBiglakeHiveTable#database}
  */
  readonly database: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#deletion_policy GoogleBiglakeHiveTable#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#description GoogleBiglakeHiveTable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#id GoogleBiglakeHiveTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#name GoogleBiglakeHiveTable#name}
  */
  readonly name: string;
  /**
  * Additional parameters associated with the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#parameters GoogleBiglakeHiveTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#project GoogleBiglakeHiveTable#project}
  */
  readonly project?: string;
  /**
  * Expanded view text for Hive views. Empty for non-view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#view_expanded_text GoogleBiglakeHiveTable#view_expanded_text}
  */
  readonly viewExpandedText?: string;
  /**
  * Original view text for Hive views. Empty for non-view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#view_original_text GoogleBiglakeHiveTable#view_original_text}
  */
  readonly viewOriginalText?: string;
  /**
  * partition_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#partition_keys GoogleBiglakeHiveTable#partition_keys}
  */
  readonly partitionKeys?: GoogleBiglakeHiveTablePartitionKeys[] | cdktf.IResolvable;
  /**
  * storage_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#storage_descriptor GoogleBiglakeHiveTable#storage_descriptor}
  */
  readonly storageDescriptor: GoogleBiglakeHiveTableStorageDescriptor;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#timeouts GoogleBiglakeHiveTable#timeouts}
  */
  readonly timeouts?: GoogleBiglakeHiveTableTimeouts;
}
export interface GoogleBiglakeHiveTablePartitionKeys {
  /**
  * Comment of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#comment GoogleBiglakeHiveTable#comment}
  */
  readonly comment?: string;
  /**
  * Name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#name GoogleBiglakeHiveTable#name}
  */
  readonly name: string;
  /**
  * Type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#type GoogleBiglakeHiveTable#type}
  */
  readonly type: string;
}

export function googleBiglakeHiveTablePartitionKeysToTerraform(struct?: GoogleBiglakeHiveTablePartitionKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleBiglakeHiveTablePartitionKeysToHclTerraform(struct?: GoogleBiglakeHiveTablePartitionKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeHiveTablePartitionKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBiglakeHiveTablePartitionKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeHiveTablePartitionKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GoogleBiglakeHiveTablePartitionKeysList extends cdktf.ComplexList {
  public internalValue? : GoogleBiglakeHiveTablePartitionKeys[] | cdktf.IResolvable

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
  public get(index: number): GoogleBiglakeHiveTablePartitionKeysOutputReference {
    return new GoogleBiglakeHiveTablePartitionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBiglakeHiveTableStorageDescriptorColumns {
  /**
  * Comment of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#comment GoogleBiglakeHiveTable#comment}
  */
  readonly comment?: string;
  /**
  * Name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#name GoogleBiglakeHiveTable#name}
  */
  readonly name: string;
  /**
  * Type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#type GoogleBiglakeHiveTable#type}
  */
  readonly type: string;
}

export function googleBiglakeHiveTableStorageDescriptorColumnsToTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleBiglakeHiveTableStorageDescriptorColumnsToHclTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBiglakeHiveTableStorageDescriptorColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeHiveTableStorageDescriptorColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GoogleBiglakeHiveTableStorageDescriptorColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleBiglakeHiveTableStorageDescriptorColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference {
    return new GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBiglakeHiveTableStorageDescriptorSerdeInfo {
  /**
  * Description of the SerDe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#description GoogleBiglakeHiveTable#description}
  */
  readonly description?: string;
  /**
  * The fully qualified Java class name of the deserializer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#deserializer_class GoogleBiglakeHiveTable#deserializer_class}
  */
  readonly deserializerClass?: string;
  /**
  * Name of the SerDe, table name by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#name GoogleBiglakeHiveTable#name}
  */
  readonly name: string;
  /**
  * Parameters of the SerDe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#parameters GoogleBiglakeHiveTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#serde_type GoogleBiglakeHiveTable#serde_type}
  */
  readonly serdeType?: string;
  /**
  * The fully qualified Java class name of the serialization library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#serialization_lib GoogleBiglakeHiveTable#serialization_lib}
  */
  readonly serializationLib: string;
  /**
  * The fully qualified Java class name of the serializer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#serializer_class GoogleBiglakeHiveTable#serializer_class}
  */
  readonly serializerClass?: string;
}

export function googleBiglakeHiveTableStorageDescriptorSerdeInfoToTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference | GoogleBiglakeHiveTableStorageDescriptorSerdeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    deserializer_class: cdktf.stringToTerraform(struct!.deserializerClass),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    serde_type: cdktf.stringToTerraform(struct!.serdeType),
    serialization_lib: cdktf.stringToTerraform(struct!.serializationLib),
    serializer_class: cdktf.stringToTerraform(struct!.serializerClass),
  }
}


export function googleBiglakeHiveTableStorageDescriptorSerdeInfoToHclTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference | GoogleBiglakeHiveTableStorageDescriptorSerdeInfo): any {
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
    deserializer_class: {
      value: cdktf.stringToHclTerraform(struct!.deserializerClass),
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
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    serde_type: {
      value: cdktf.stringToHclTerraform(struct!.serdeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serialization_lib: {
      value: cdktf.stringToHclTerraform(struct!.serializationLib),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serializer_class: {
      value: cdktf.stringToHclTerraform(struct!.serializerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeHiveTableStorageDescriptorSerdeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deserializerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.deserializerClass = this._deserializerClass;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._serdeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serdeType = this._serdeType;
    }
    if (this._serializationLib !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializationLib = this._serializationLib;
    }
    if (this._serializerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializerClass = this._serializerClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeHiveTableStorageDescriptorSerdeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._deserializerClass = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._serdeType = undefined;
      this._serializationLib = undefined;
      this._serializerClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._deserializerClass = value.deserializerClass;
      this._name = value.name;
      this._parameters = value.parameters;
      this._serdeType = value.serdeType;
      this._serializationLib = value.serializationLib;
      this._serializerClass = value.serializerClass;
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

  // deserializer_class - computed: false, optional: true, required: false
  private _deserializerClass?: string; 
  public get deserializerClass() {
    return this.getStringAttribute('deserializer_class');
  }
  public set deserializerClass(value: string) {
    this._deserializerClass = value;
  }
  public resetDeserializerClass() {
    this._deserializerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deserializerClassInput() {
    return this._deserializerClass;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // serde_type - computed: false, optional: true, required: false
  private _serdeType?: string; 
  public get serdeType() {
    return this.getStringAttribute('serde_type');
  }
  public set serdeType(value: string) {
    this._serdeType = value;
  }
  public resetSerdeType() {
    this._serdeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serdeTypeInput() {
    return this._serdeType;
  }

  // serialization_lib - computed: false, optional: false, required: true
  private _serializationLib?: string; 
  public get serializationLib() {
    return this.getStringAttribute('serialization_lib');
  }
  public set serializationLib(value: string) {
    this._serializationLib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationLibInput() {
    return this._serializationLib;
  }

  // serializer_class - computed: false, optional: true, required: false
  private _serializerClass?: string; 
  public get serializerClass() {
    return this.getStringAttribute('serializer_class');
  }
  public set serializerClass(value: string) {
    this._serializerClass = value;
  }
  public resetSerializerClass() {
    this._serializerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerClassInput() {
    return this._serializerClass;
  }
}
export interface GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#values GoogleBiglakeHiveTable#values}
  */
  readonly values: string[];
}

export function googleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesToTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesToHclTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList extends cdktf.ComplexList {
  public internalValue? : GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] | cdktf.IResolvable

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
  public get(index: number): GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference {
    return new GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#location GoogleBiglakeHiveTable#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#values GoogleBiglakeHiveTable#values}
  */
  readonly values: string[];
}

export function googleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsToTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsToHclTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList extends cdktf.ComplexList {
  public internalValue? : GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] | cdktf.IResolvable

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
  public get(index: number): GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference {
    return new GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBiglakeHiveTableStorageDescriptorSkewedInfo {
  /**
  * The column names that are skewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#skewed_col_names GoogleBiglakeHiveTable#skewed_col_names}
  */
  readonly skewedColNames: string[];
  /**
  * skewed_col_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#skewed_col_values GoogleBiglakeHiveTable#skewed_col_values}
  */
  readonly skewedColValues: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] | cdktf.IResolvable;
  /**
  * skewed_key_values_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#skewed_key_values_locations GoogleBiglakeHiveTable#skewed_key_values_locations}
  */
  readonly skewedKeyValuesLocations: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] | cdktf.IResolvable;
}

export function googleBiglakeHiveTableStorageDescriptorSkewedInfoToTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference | GoogleBiglakeHiveTableStorageDescriptorSkewedInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skewed_col_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.skewedColNames),
    skewed_col_values: cdktf.listMapper(googleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesToTerraform, true)(struct!.skewedColValues),
    skewed_key_values_locations: cdktf.listMapper(googleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsToTerraform, true)(struct!.skewedKeyValuesLocations),
  }
}


export function googleBiglakeHiveTableStorageDescriptorSkewedInfoToHclTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference | GoogleBiglakeHiveTableStorageDescriptorSkewedInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skewed_col_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.skewedColNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skewed_col_values: {
      value: cdktf.listMapperHcl(googleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesToHclTerraform, true)(struct!.skewedColValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList",
    },
    skewed_key_values_locations: {
      value: cdktf.listMapperHcl(googleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsToHclTerraform, true)(struct!.skewedKeyValuesLocations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeHiveTableStorageDescriptorSkewedInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skewedColNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColNames = this._skewedColNames;
    }
    if (this._skewedColValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColValues = this._skewedColValues?.internalValue;
    }
    if (this._skewedKeyValuesLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedKeyValuesLocations = this._skewedKeyValuesLocations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeHiveTableStorageDescriptorSkewedInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skewedColNames = undefined;
      this._skewedColValues.internalValue = undefined;
      this._skewedKeyValuesLocations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skewedColNames = value.skewedColNames;
      this._skewedColValues.internalValue = value.skewedColValues;
      this._skewedKeyValuesLocations.internalValue = value.skewedKeyValuesLocations;
    }
  }

  // skewed_col_names - computed: false, optional: false, required: true
  private _skewedColNames?: string[]; 
  public get skewedColNames() {
    return this.getListAttribute('skewed_col_names');
  }
  public set skewedColNames(value: string[]) {
    this._skewedColNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColNamesInput() {
    return this._skewedColNames;
  }

  // skewed_col_values - computed: false, optional: false, required: true
  private _skewedColValues = new GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList(this, "skewed_col_values", false);
  public get skewedColValues() {
    return this._skewedColValues;
  }
  public putSkewedColValues(value: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] | cdktf.IResolvable) {
    this._skewedColValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColValuesInput() {
    return this._skewedColValues.internalValue;
  }

  // skewed_key_values_locations - computed: false, optional: false, required: true
  private _skewedKeyValuesLocations = new GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList(this, "skewed_key_values_locations", false);
  public get skewedKeyValuesLocations() {
    return this._skewedKeyValuesLocations;
  }
  public putSkewedKeyValuesLocations(value: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] | cdktf.IResolvable) {
    this._skewedKeyValuesLocations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedKeyValuesLocationsInput() {
    return this._skewedKeyValuesLocations.internalValue;
  }
}
export interface GoogleBiglakeHiveTableStorageDescriptorSortCols {
  /**
  * The column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#col GoogleBiglakeHiveTable#col}
  */
  readonly col: string;
  /**
  * Sort order: 1 for Ascending, 0 for Descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#order GoogleBiglakeHiveTable#order}
  */
  readonly order: number;
}

export function googleBiglakeHiveTableStorageDescriptorSortColsToTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorSortCols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    col: cdktf.stringToTerraform(struct!.col),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function googleBiglakeHiveTableStorageDescriptorSortColsToHclTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorSortCols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    col: {
      value: cdktf.stringToHclTerraform(struct!.col),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBiglakeHiveTableStorageDescriptorSortCols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._col !== undefined) {
      hasAnyValues = true;
      internalValueResult.col = this._col;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeHiveTableStorageDescriptorSortCols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._col = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._col = value.col;
      this._order = value.order;
    }
  }

  // col - computed: false, optional: false, required: true
  private _col?: string; 
  public get col() {
    return this.getStringAttribute('col');
  }
  public set col(value: string) {
    this._col = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colInput() {
    return this._col;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class GoogleBiglakeHiveTableStorageDescriptorSortColsList extends cdktf.ComplexList {
  public internalValue? : GoogleBiglakeHiveTableStorageDescriptorSortCols[] | cdktf.IResolvable

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
  public get(index: number): GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference {
    return new GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBiglakeHiveTableStorageDescriptor {
  /**
  * Reducer grouping columns, clustering columns, and bucketing columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#bucket_cols GoogleBiglakeHiveTable#bucket_cols}
  */
  readonly bucketCols?: string[];
  /**
  * Whether the table data is compressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#compressed GoogleBiglakeHiveTable#compressed}
  */
  readonly compressed?: boolean | cdktf.IResolvable;
  /**
  * The fully qualified Java class name of the input format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#input_format GoogleBiglakeHiveTable#input_format}
  */
  readonly inputFormat?: string;
  /**
  * The Cloud Storage URI where the table data is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#location_uri GoogleBiglakeHiveTable#location_uri}
  */
  readonly locationUri?: string;
  /**
  * The number of buckets in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#num_buckets GoogleBiglakeHiveTable#num_buckets}
  */
  readonly numBuckets?: number;
  /**
  * The fully qualified Java class name of the output format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#output_format GoogleBiglakeHiveTable#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Key-value pairs for the storage descriptor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#parameters GoogleBiglakeHiveTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Whether the table is stored as sub directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#stored_as_sub_dirs GoogleBiglakeHiveTable#stored_as_sub_dirs}
  */
  readonly storedAsSubDirs?: boolean | cdktf.IResolvable;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#columns GoogleBiglakeHiveTable#columns}
  */
  readonly columns: GoogleBiglakeHiveTableStorageDescriptorColumns[] | cdktf.IResolvable;
  /**
  * serde_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#serde_info GoogleBiglakeHiveTable#serde_info}
  */
  readonly serdeInfo?: GoogleBiglakeHiveTableStorageDescriptorSerdeInfo;
  /**
  * skewed_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#skewed_info GoogleBiglakeHiveTable#skewed_info}
  */
  readonly skewedInfo?: GoogleBiglakeHiveTableStorageDescriptorSkewedInfo;
  /**
  * sort_cols block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#sort_cols GoogleBiglakeHiveTable#sort_cols}
  */
  readonly sortCols?: GoogleBiglakeHiveTableStorageDescriptorSortCols[] | cdktf.IResolvable;
}

export function googleBiglakeHiveTableStorageDescriptorToTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorOutputReference | GoogleBiglakeHiveTableStorageDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_cols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bucketCols),
    compressed: cdktf.booleanToTerraform(struct!.compressed),
    input_format: cdktf.stringToTerraform(struct!.inputFormat),
    location_uri: cdktf.stringToTerraform(struct!.locationUri),
    num_buckets: cdktf.numberToTerraform(struct!.numBuckets),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    stored_as_sub_dirs: cdktf.booleanToTerraform(struct!.storedAsSubDirs),
    columns: cdktf.listMapper(googleBiglakeHiveTableStorageDescriptorColumnsToTerraform, true)(struct!.columns),
    serde_info: googleBiglakeHiveTableStorageDescriptorSerdeInfoToTerraform(struct!.serdeInfo),
    skewed_info: googleBiglakeHiveTableStorageDescriptorSkewedInfoToTerraform(struct!.skewedInfo),
    sort_cols: cdktf.listMapper(googleBiglakeHiveTableStorageDescriptorSortColsToTerraform, true)(struct!.sortCols),
  }
}


export function googleBiglakeHiveTableStorageDescriptorToHclTerraform(struct?: GoogleBiglakeHiveTableStorageDescriptorOutputReference | GoogleBiglakeHiveTableStorageDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_cols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bucketCols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compressed: {
      value: cdktf.booleanToHclTerraform(struct!.compressed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format: {
      value: cdktf.stringToHclTerraform(struct!.inputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_uri: {
      value: cdktf.stringToHclTerraform(struct!.locationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_buckets: {
      value: cdktf.numberToHclTerraform(struct!.numBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_format: {
      value: cdktf.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    stored_as_sub_dirs: {
      value: cdktf.booleanToHclTerraform(struct!.storedAsSubDirs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    columns: {
      value: cdktf.listMapperHcl(googleBiglakeHiveTableStorageDescriptorColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeHiveTableStorageDescriptorColumnsList",
    },
    serde_info: {
      value: googleBiglakeHiveTableStorageDescriptorSerdeInfoToHclTerraform(struct!.serdeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeHiveTableStorageDescriptorSerdeInfoList",
    },
    skewed_info: {
      value: googleBiglakeHiveTableStorageDescriptorSkewedInfoToHclTerraform(struct!.skewedInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeHiveTableStorageDescriptorSkewedInfoList",
    },
    sort_cols: {
      value: cdktf.listMapperHcl(googleBiglakeHiveTableStorageDescriptorSortColsToHclTerraform, true)(struct!.sortCols),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeHiveTableStorageDescriptorSortColsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeHiveTableStorageDescriptorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeHiveTableStorageDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketCols !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketCols = this._bucketCols;
    }
    if (this._compressed !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressed = this._compressed;
    }
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._locationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationUri = this._locationUri;
    }
    if (this._numBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numBuckets = this._numBuckets;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._storedAsSubDirs !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedAsSubDirs = this._storedAsSubDirs;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._serdeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serdeInfo = this._serdeInfo?.internalValue;
    }
    if (this._skewedInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedInfo = this._skewedInfo?.internalValue;
    }
    if (this._sortCols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortCols = this._sortCols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeHiveTableStorageDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketCols = undefined;
      this._compressed = undefined;
      this._inputFormat = undefined;
      this._locationUri = undefined;
      this._numBuckets = undefined;
      this._outputFormat = undefined;
      this._parameters = undefined;
      this._storedAsSubDirs = undefined;
      this._columns.internalValue = undefined;
      this._serdeInfo.internalValue = undefined;
      this._skewedInfo.internalValue = undefined;
      this._sortCols.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketCols = value.bucketCols;
      this._compressed = value.compressed;
      this._inputFormat = value.inputFormat;
      this._locationUri = value.locationUri;
      this._numBuckets = value.numBuckets;
      this._outputFormat = value.outputFormat;
      this._parameters = value.parameters;
      this._storedAsSubDirs = value.storedAsSubDirs;
      this._columns.internalValue = value.columns;
      this._serdeInfo.internalValue = value.serdeInfo;
      this._skewedInfo.internalValue = value.skewedInfo;
      this._sortCols.internalValue = value.sortCols;
    }
  }

  // bucket_cols - computed: true, optional: true, required: false
  private _bucketCols?: string[]; 
  public get bucketCols() {
    return this.getListAttribute('bucket_cols');
  }
  public set bucketCols(value: string[]) {
    this._bucketCols = value;
  }
  public resetBucketCols() {
    this._bucketCols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketColsInput() {
    return this._bucketCols;
  }

  // compressed - computed: false, optional: true, required: false
  private _compressed?: boolean | cdktf.IResolvable; 
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }
  public set compressed(value: boolean | cdktf.IResolvable) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed;
  }

  // input_format - computed: false, optional: true, required: false
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
  }

  // location_uri - computed: true, optional: true, required: false
  private _locationUri?: string; 
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }
  public set locationUri(value: string) {
    this._locationUri = value;
  }
  public resetLocationUri() {
    this._locationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationUriInput() {
    return this._locationUri;
  }

  // num_buckets - computed: false, optional: true, required: false
  private _numBuckets?: number; 
  public get numBuckets() {
    return this.getNumberAttribute('num_buckets');
  }
  public set numBuckets(value: number) {
    this._numBuckets = value;
  }
  public resetNumBuckets() {
    this._numBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBucketsInput() {
    return this._numBuckets;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // stored_as_sub_dirs - computed: false, optional: true, required: false
  private _storedAsSubDirs?: boolean | cdktf.IResolvable; 
  public get storedAsSubDirs() {
    return this.getBooleanAttribute('stored_as_sub_dirs');
  }
  public set storedAsSubDirs(value: boolean | cdktf.IResolvable) {
    this._storedAsSubDirs = value;
  }
  public resetStoredAsSubDirs() {
    this._storedAsSubDirs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedAsSubDirsInput() {
    return this._storedAsSubDirs;
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new GoogleBiglakeHiveTableStorageDescriptorColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleBiglakeHiveTableStorageDescriptorColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // serde_info - computed: false, optional: true, required: false
  private _serdeInfo = new GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference(this, "serde_info");
  public get serdeInfo() {
    return this._serdeInfo;
  }
  public putSerdeInfo(value: GoogleBiglakeHiveTableStorageDescriptorSerdeInfo) {
    this._serdeInfo.internalValue = value;
  }
  public resetSerdeInfo() {
    this._serdeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serdeInfoInput() {
    return this._serdeInfo.internalValue;
  }

  // skewed_info - computed: false, optional: true, required: false
  private _skewedInfo = new GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference(this, "skewed_info");
  public get skewedInfo() {
    return this._skewedInfo;
  }
  public putSkewedInfo(value: GoogleBiglakeHiveTableStorageDescriptorSkewedInfo) {
    this._skewedInfo.internalValue = value;
  }
  public resetSkewedInfo() {
    this._skewedInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedInfoInput() {
    return this._skewedInfo.internalValue;
  }

  // sort_cols - computed: false, optional: true, required: false
  private _sortCols = new GoogleBiglakeHiveTableStorageDescriptorSortColsList(this, "sort_cols", false);
  public get sortCols() {
    return this._sortCols;
  }
  public putSortCols(value: GoogleBiglakeHiveTableStorageDescriptorSortCols[] | cdktf.IResolvable) {
    this._sortCols.internalValue = value;
  }
  public resetSortCols() {
    this._sortCols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortColsInput() {
    return this._sortCols.internalValue;
  }
}
export interface GoogleBiglakeHiveTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#create GoogleBiglakeHiveTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#delete GoogleBiglakeHiveTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#update GoogleBiglakeHiveTable#update}
  */
  readonly update?: string;
}

export function googleBiglakeHiveTableTimeoutsToTerraform(struct?: GoogleBiglakeHiveTableTimeouts | cdktf.IResolvable): any {
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


export function googleBiglakeHiveTableTimeoutsToHclTerraform(struct?: GoogleBiglakeHiveTableTimeouts | cdktf.IResolvable): any {
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

export class GoogleBiglakeHiveTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBiglakeHiveTableTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBiglakeHiveTableTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table google_biglake_hive_table}
*/
export class GoogleBiglakeHiveTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_biglake_hive_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleBiglakeHiveTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBiglakeHiveTable to import
  * @param importFromId The id of the existing GoogleBiglakeHiveTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBiglakeHiveTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_biglake_hive_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_hive_table google_biglake_hive_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBiglakeHiveTableConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBiglakeHiveTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_biglake_hive_table',
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
    this._catalog = config.catalog;
    this._database = config.database;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._parameters = config.parameters;
    this._project = config.project;
    this._viewExpandedText = config.viewExpandedText;
    this._viewOriginalText = config.viewOriginalText;
    this._partitionKeys.internalValue = config.partitionKeys;
    this._storageDescriptor.internalValue = config.storageDescriptor;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // last_access_time - computed: true, optional: false, required: false
  public get lastAccessTime() {
    return this.getStringAttribute('last_access_time');
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // table_type - computed: true, optional: false, required: false
  public get tableType() {
    return this.getStringAttribute('table_type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // view_expanded_text - computed: false, optional: true, required: false
  private _viewExpandedText?: string; 
  public get viewExpandedText() {
    return this.getStringAttribute('view_expanded_text');
  }
  public set viewExpandedText(value: string) {
    this._viewExpandedText = value;
  }
  public resetViewExpandedText() {
    this._viewExpandedText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewExpandedTextInput() {
    return this._viewExpandedText;
  }

  // view_original_text - computed: false, optional: true, required: false
  private _viewOriginalText?: string; 
  public get viewOriginalText() {
    return this.getStringAttribute('view_original_text');
  }
  public set viewOriginalText(value: string) {
    this._viewOriginalText = value;
  }
  public resetViewOriginalText() {
    this._viewOriginalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOriginalTextInput() {
    return this._viewOriginalText;
  }

  // partition_keys - computed: false, optional: true, required: false
  private _partitionKeys = new GoogleBiglakeHiveTablePartitionKeysList(this, "partition_keys", false);
  public get partitionKeys() {
    return this._partitionKeys;
  }
  public putPartitionKeys(value: GoogleBiglakeHiveTablePartitionKeys[] | cdktf.IResolvable) {
    this._partitionKeys.internalValue = value;
  }
  public resetPartitionKeys() {
    this._partitionKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeysInput() {
    return this._partitionKeys.internalValue;
  }

  // storage_descriptor - computed: false, optional: false, required: true
  private _storageDescriptor = new GoogleBiglakeHiveTableStorageDescriptorOutputReference(this, "storage_descriptor");
  public get storageDescriptor() {
    return this._storageDescriptor;
  }
  public putStorageDescriptor(value: GoogleBiglakeHiveTableStorageDescriptor) {
    this._storageDescriptor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBiglakeHiveTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBiglakeHiveTableTimeouts) {
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
      catalog: cdktf.stringToTerraform(this._catalog),
      database: cdktf.stringToTerraform(this._database),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      project: cdktf.stringToTerraform(this._project),
      view_expanded_text: cdktf.stringToTerraform(this._viewExpandedText),
      view_original_text: cdktf.stringToTerraform(this._viewOriginalText),
      partition_keys: cdktf.listMapper(googleBiglakeHiveTablePartitionKeysToTerraform, true)(this._partitionKeys.internalValue),
      storage_descriptor: googleBiglakeHiveTableStorageDescriptorToTerraform(this._storageDescriptor.internalValue),
      timeouts: googleBiglakeHiveTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
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
      view_expanded_text: {
        value: cdktf.stringToHclTerraform(this._viewExpandedText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_original_text: {
        value: cdktf.stringToHclTerraform(this._viewOriginalText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_keys: {
        value: cdktf.listMapperHcl(googleBiglakeHiveTablePartitionKeysToHclTerraform, true)(this._partitionKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBiglakeHiveTablePartitionKeysList",
      },
      storage_descriptor: {
        value: googleBiglakeHiveTableStorageDescriptorToHclTerraform(this._storageDescriptor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBiglakeHiveTableStorageDescriptorList",
      },
      timeouts: {
        value: googleBiglakeHiveTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleBiglakeHiveTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
