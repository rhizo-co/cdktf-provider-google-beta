// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBiglakeTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the parent database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#database GoogleBiglakeTable#database}
  */
  readonly database?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#deletion_policy GoogleBiglakeTable#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#id GoogleBiglakeTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Output only. The name of the Table. Format:
  * projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#name GoogleBiglakeTable#name}
  */
  readonly name: string;
  /**
  * The database type. Possible values: ["HIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#type GoogleBiglakeTable#type}
  */
  readonly type?: string;
  /**
  * hive_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#hive_options GoogleBiglakeTable#hive_options}
  */
  readonly hiveOptions?: GoogleBiglakeTableHiveOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#timeouts GoogleBiglakeTable#timeouts}
  */
  readonly timeouts?: GoogleBiglakeTableTimeouts;
}
export interface GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfo {
  /**
  * The fully qualified Java class name of the serialization library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#serialization_lib GoogleBiglakeTable#serialization_lib}
  */
  readonly serializationLib?: string;
}

export function googleBiglakeTableHiveOptionsStorageDescriptorSerdeInfoToTerraform(struct?: GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfoOutputReference | GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serialization_lib: cdktf.stringToTerraform(struct!.serializationLib),
  }
}


export function googleBiglakeTableHiveOptionsStorageDescriptorSerdeInfoToHclTerraform(struct?: GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfoOutputReference | GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serialization_lib: {
      value: cdktf.stringToHclTerraform(struct!.serializationLib),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serializationLib !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializationLib = this._serializationLib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serializationLib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serializationLib = value.serializationLib;
    }
  }

  // serialization_lib - computed: false, optional: true, required: false
  private _serializationLib?: string; 
  public get serializationLib() {
    return this.getStringAttribute('serialization_lib');
  }
  public set serializationLib(value: string) {
    this._serializationLib = value;
  }
  public resetSerializationLib() {
    this._serializationLib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationLibInput() {
    return this._serializationLib;
  }
}
export interface GoogleBiglakeTableHiveOptionsStorageDescriptor {
  /**
  * The fully qualified Java class name of the input format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#input_format GoogleBiglakeTable#input_format}
  */
  readonly inputFormat?: string;
  /**
  * Cloud Storage folder URI where the table data is stored, starting with "gs://".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#location_uri GoogleBiglakeTable#location_uri}
  */
  readonly locationUri?: string;
  /**
  * The fully qualified Java class name of the output format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#output_format GoogleBiglakeTable#output_format}
  */
  readonly outputFormat?: string;
  /**
  * serde_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#serde_info GoogleBiglakeTable#serde_info}
  */
  readonly serdeInfo?: GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfo;
}

export function googleBiglakeTableHiveOptionsStorageDescriptorToTerraform(struct?: GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference | GoogleBiglakeTableHiveOptionsStorageDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_format: cdktf.stringToTerraform(struct!.inputFormat),
    location_uri: cdktf.stringToTerraform(struct!.locationUri),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    serde_info: googleBiglakeTableHiveOptionsStorageDescriptorSerdeInfoToTerraform(struct!.serdeInfo),
  }
}


export function googleBiglakeTableHiveOptionsStorageDescriptorToHclTerraform(struct?: GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference | GoogleBiglakeTableHiveOptionsStorageDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    output_format: {
      value: cdktf.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serde_info: {
      value: googleBiglakeTableHiveOptionsStorageDescriptorSerdeInfoToHclTerraform(struct!.serdeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeTableHiveOptionsStorageDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._locationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationUri = this._locationUri;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._serdeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serdeInfo = this._serdeInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeTableHiveOptionsStorageDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputFormat = undefined;
      this._locationUri = undefined;
      this._outputFormat = undefined;
      this._serdeInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputFormat = value.inputFormat;
      this._locationUri = value.locationUri;
      this._outputFormat = value.outputFormat;
      this._serdeInfo.internalValue = value.serdeInfo;
    }
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

  // location_uri - computed: false, optional: true, required: false
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

  // serde_info - computed: false, optional: true, required: false
  private _serdeInfo = new GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfoOutputReference(this, "serde_info");
  public get serdeInfo() {
    return this._serdeInfo;
  }
  public putSerdeInfo(value: GoogleBiglakeTableHiveOptionsStorageDescriptorSerdeInfo) {
    this._serdeInfo.internalValue = value;
  }
  public resetSerdeInfo() {
    this._serdeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serdeInfoInput() {
    return this._serdeInfo.internalValue;
  }
}
export interface GoogleBiglakeTableHiveOptions {
  /**
  * Stores user supplied Hive table parameters. An object containing a
  * list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#parameters GoogleBiglakeTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#table_type GoogleBiglakeTable#table_type}
  */
  readonly tableType?: string;
  /**
  * storage_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#storage_descriptor GoogleBiglakeTable#storage_descriptor}
  */
  readonly storageDescriptor?: GoogleBiglakeTableHiveOptionsStorageDescriptor;
}

export function googleBiglakeTableHiveOptionsToTerraform(struct?: GoogleBiglakeTableHiveOptionsOutputReference | GoogleBiglakeTableHiveOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    table_type: cdktf.stringToTerraform(struct!.tableType),
    storage_descriptor: googleBiglakeTableHiveOptionsStorageDescriptorToTerraform(struct!.storageDescriptor),
  }
}


export function googleBiglakeTableHiveOptionsToHclTerraform(struct?: GoogleBiglakeTableHiveOptionsOutputReference | GoogleBiglakeTableHiveOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    table_type: {
      value: cdktf.stringToHclTerraform(struct!.tableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_descriptor: {
      value: googleBiglakeTableHiveOptionsStorageDescriptorToHclTerraform(struct!.storageDescriptor),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBiglakeTableHiveOptionsStorageDescriptorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBiglakeTableHiveOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBiglakeTableHiveOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._tableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableType = this._tableType;
    }
    if (this._storageDescriptor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDescriptor = this._storageDescriptor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBiglakeTableHiveOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._tableType = undefined;
      this._storageDescriptor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._tableType = value.tableType;
      this._storageDescriptor.internalValue = value.storageDescriptor;
    }
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

  // table_type - computed: false, optional: true, required: false
  private _tableType?: string; 
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
  public set tableType(value: string) {
    this._tableType = value;
  }
  public resetTableType() {
    this._tableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypeInput() {
    return this._tableType;
  }

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor = new GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference(this, "storage_descriptor");
  public get storageDescriptor() {
    return this._storageDescriptor;
  }
  public putStorageDescriptor(value: GoogleBiglakeTableHiveOptionsStorageDescriptor) {
    this._storageDescriptor.internalValue = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor.internalValue;
  }
}
export interface GoogleBiglakeTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#create GoogleBiglakeTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#delete GoogleBiglakeTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#update GoogleBiglakeTable#update}
  */
  readonly update?: string;
}

export function googleBiglakeTableTimeoutsToTerraform(struct?: GoogleBiglakeTableTimeouts | cdktf.IResolvable): any {
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


export function googleBiglakeTableTimeoutsToHclTerraform(struct?: GoogleBiglakeTableTimeouts | cdktf.IResolvable): any {
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

export class GoogleBiglakeTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBiglakeTableTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBiglakeTableTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table google_biglake_table}
*/
export class GoogleBiglakeTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_biglake_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleBiglakeTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBiglakeTable to import
  * @param importFromId The id of the existing GoogleBiglakeTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBiglakeTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_biglake_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_biglake_table google_biglake_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBiglakeTableConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBiglakeTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_biglake_table',
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
    this._database = config.database;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._hiveOptions.internalValue = config.hiveOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
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

  // hive_options - computed: false, optional: true, required: false
  private _hiveOptions = new GoogleBiglakeTableHiveOptionsOutputReference(this, "hive_options");
  public get hiveOptions() {
    return this._hiveOptions;
  }
  public putHiveOptions(value: GoogleBiglakeTableHiveOptions) {
    this._hiveOptions.internalValue = value;
  }
  public resetHiveOptions() {
    this._hiveOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveOptionsInput() {
    return this._hiveOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBiglakeTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBiglakeTableTimeouts) {
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
      database: cdktf.stringToTerraform(this._database),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      hive_options: googleBiglakeTableHiveOptionsToTerraform(this._hiveOptions.internalValue),
      timeouts: googleBiglakeTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hive_options: {
        value: googleBiglakeTableHiveOptionsToHclTerraform(this._hiveOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBiglakeTableHiveOptionsList",
      },
      timeouts: {
        value: googleBiglakeTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleBiglakeTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
