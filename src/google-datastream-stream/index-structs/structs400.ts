import * as cdktf from 'cdktf';
import { GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns,
googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform,
googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform,
GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList,
GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables,
googleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToTerraform,
googleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToHclTerraform,
GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference,
GoogleDatastreamStreamSourceConfigMongodbSourceConfig,
googleDatastreamStreamSourceConfigMongodbSourceConfigToTerraform,
googleDatastreamStreamSourceConfigMongodbSourceConfigToHclTerraform,
GoogleDatastreamStreamSourceConfigMongodbSourceConfigOutputReference,
GoogleDatastreamStreamSourceConfigMysqlSourceConfig,
googleDatastreamStreamSourceConfigMysqlSourceConfigToTerraform,
googleDatastreamStreamSourceConfigMysqlSourceConfigToHclTerraform,
GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference,
GoogleDatastreamStreamSourceConfigOracleSourceConfig,
googleDatastreamStreamSourceConfigOracleSourceConfigToTerraform,
googleDatastreamStreamSourceConfigOracleSourceConfigToHclTerraform,
GoogleDatastreamStreamSourceConfigOracleSourceConfigOutputReference,
GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig,
googleDatastreamStreamSourceConfigPostgresqlSourceConfigToTerraform,
googleDatastreamStreamSourceConfigPostgresqlSourceConfigToHclTerraform,
GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference,
GoogleDatastreamStreamSourceConfigSalesforceSourceConfig,
googleDatastreamStreamSourceConfigSalesforceSourceConfigToTerraform,
googleDatastreamStreamSourceConfigSalesforceSourceConfigToHclTerraform,
GoogleDatastreamStreamSourceConfigSalesforceSourceConfigOutputReference,
GoogleDatastreamStreamSourceConfigSpannerSourceConfig,
googleDatastreamStreamSourceConfigSpannerSourceConfigToTerraform,
googleDatastreamStreamSourceConfigSpannerSourceConfigToHclTerraform,
GoogleDatastreamStreamSourceConfigSpannerSourceConfigOutputReference } from './structs0'
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#columns GoogleDatastreamStream#columns}
  */
  readonly columns?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    columns: cdktf.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._columns.internalValue = value.columns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#tables GoogleDatastreamStream#tables}
  */
  readonly tables?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    tables: cdktf.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._tables.internalValue = value.tables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#schemas GoogleDatastreamStream#schemas}
  */
  readonly schemas: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schemas: cdktf.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemas.internalValue = value.schemas;
    }
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas[] | cdktf.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The SQL Server data type. Full data types list can be found here:
  * https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#columns GoogleDatastreamStream#columns}
  */
  readonly columns?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    columns: cdktf.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._columns.internalValue = value.columns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#tables GoogleDatastreamStream#tables}
  */
  readonly tables?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    tables: cdktf.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._tables.internalValue = value.tables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#schemas GoogleDatastreamStream#schemas}
  */
  readonly schemas: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schemas: cdktf.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemas.internalValue = value.schemas;
    }
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas[] | cdktf.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs {
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfig {
  /**
  * Max concurrent backfill tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#max_concurrent_backfill_tasks GoogleDatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Max concurrent CDC tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#max_concurrent_cdc_tasks GoogleDatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * change_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#change_tables GoogleDatastreamStream#change_tables}
  */
  readonly changeTables?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects;
  /**
  * transaction_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#transaction_logs GoogleDatastreamStream#transaction_logs}
  */
  readonly transactionLogs?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_backfill_tasks: cdktf.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktf.numberToTerraform(struct!.maxConcurrentCdcTasks),
    change_tables: googleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToTerraform(struct!.changeTables),
    exclude_objects: googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
    transaction_logs: googleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToTerraform(struct!.transactionLogs),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_backfill_tasks: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentBackfillTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_cdc_tasks: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentCdcTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    change_tables: {
      value: googleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToHclTerraform(struct!.changeTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesList",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsList",
    },
    transaction_logs: {
      value: googleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToHclTerraform(struct!.transactionLogs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._maxConcurrentCdcTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCdcTasks = this._maxConcurrentCdcTasks;
    }
    if (this._changeTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeTables = this._changeTables?.internalValue;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    if (this._transactionLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionLogs = this._transactionLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._changeTables.internalValue = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
      this._transactionLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._changeTables.internalValue = value.changeTables;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
      this._transactionLogs.internalValue = value.transactionLogs;
    }
  }

  // max_concurrent_backfill_tasks - computed: true, optional: true, required: false
  private _maxConcurrentBackfillTasks?: number; 
  public get maxConcurrentBackfillTasks() {
    return this.getNumberAttribute('max_concurrent_backfill_tasks');
  }
  public set maxConcurrentBackfillTasks(value: number) {
    this._maxConcurrentBackfillTasks = value;
  }
  public resetMaxConcurrentBackfillTasks() {
    this._maxConcurrentBackfillTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentBackfillTasksInput() {
    return this._maxConcurrentBackfillTasks;
  }

  // max_concurrent_cdc_tasks - computed: true, optional: true, required: false
  private _maxConcurrentCdcTasks?: number; 
  public get maxConcurrentCdcTasks() {
    return this.getNumberAttribute('max_concurrent_cdc_tasks');
  }
  public set maxConcurrentCdcTasks(value: number) {
    this._maxConcurrentCdcTasks = value;
  }
  public resetMaxConcurrentCdcTasks() {
    this._maxConcurrentCdcTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentCdcTasksInput() {
    return this._maxConcurrentCdcTasks;
  }

  // change_tables - computed: false, optional: true, required: false
  private _changeTables = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference(this, "change_tables");
  public get changeTables() {
    return this._changeTables;
  }
  public putChangeTables(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables) {
    this._changeTables.internalValue = value;
  }
  public resetChangeTables() {
    this._changeTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTablesInput() {
    return this._changeTables.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }

  // transaction_logs - computed: false, optional: true, required: false
  private _transactionLogs = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference(this, "transaction_logs");
  public get transactionLogs() {
    return this._transactionLogs;
  }
  public putTransactionLogs(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs) {
    this._transactionLogs.internalValue = value;
  }
  public resetTransactionLogs() {
    this._transactionLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionLogsInput() {
    return this._transactionLogs.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfig {
  /**
  * Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#source_connection_profile GoogleDatastreamStream#source_connection_profile}
  */
  readonly sourceConnectionProfile: string;
  /**
  * mongodb_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#mongodb_source_config GoogleDatastreamStream#mongodb_source_config}
  */
  readonly mongodbSourceConfig?: GoogleDatastreamStreamSourceConfigMongodbSourceConfig;
  /**
  * mysql_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#mysql_source_config GoogleDatastreamStream#mysql_source_config}
  */
  readonly mysqlSourceConfig?: GoogleDatastreamStreamSourceConfigMysqlSourceConfig;
  /**
  * oracle_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#oracle_source_config GoogleDatastreamStream#oracle_source_config}
  */
  readonly oracleSourceConfig?: GoogleDatastreamStreamSourceConfigOracleSourceConfig;
  /**
  * postgresql_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#postgresql_source_config GoogleDatastreamStream#postgresql_source_config}
  */
  readonly postgresqlSourceConfig?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig;
  /**
  * salesforce_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#salesforce_source_config GoogleDatastreamStream#salesforce_source_config}
  */
  readonly salesforceSourceConfig?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfig;
  /**
  * spanner_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#spanner_source_config GoogleDatastreamStream#spanner_source_config}
  */
  readonly spannerSourceConfig?: GoogleDatastreamStreamSourceConfigSpannerSourceConfig;
  /**
  * sql_server_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#sql_server_source_config GoogleDatastreamStream#sql_server_source_config}
  */
  readonly sqlServerSourceConfig?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfig;
}

export function googleDatastreamStreamSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigOutputReference | GoogleDatastreamStreamSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_connection_profile: cdktf.stringToTerraform(struct!.sourceConnectionProfile),
    mongodb_source_config: googleDatastreamStreamSourceConfigMongodbSourceConfigToTerraform(struct!.mongodbSourceConfig),
    mysql_source_config: googleDatastreamStreamSourceConfigMysqlSourceConfigToTerraform(struct!.mysqlSourceConfig),
    oracle_source_config: googleDatastreamStreamSourceConfigOracleSourceConfigToTerraform(struct!.oracleSourceConfig),
    postgresql_source_config: googleDatastreamStreamSourceConfigPostgresqlSourceConfigToTerraform(struct!.postgresqlSourceConfig),
    salesforce_source_config: googleDatastreamStreamSourceConfigSalesforceSourceConfigToTerraform(struct!.salesforceSourceConfig),
    spanner_source_config: googleDatastreamStreamSourceConfigSpannerSourceConfigToTerraform(struct!.spannerSourceConfig),
    sql_server_source_config: googleDatastreamStreamSourceConfigSqlServerSourceConfigToTerraform(struct!.sqlServerSourceConfig),
  }
}


export function googleDatastreamStreamSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOutputReference | GoogleDatastreamStreamSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_connection_profile: {
      value: cdktf.stringToHclTerraform(struct!.sourceConnectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mongodb_source_config: {
      value: googleDatastreamStreamSourceConfigMongodbSourceConfigToHclTerraform(struct!.mongodbSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMongodbSourceConfigList",
    },
    mysql_source_config: {
      value: googleDatastreamStreamSourceConfigMysqlSourceConfigToHclTerraform(struct!.mysqlSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigList",
    },
    oracle_source_config: {
      value: googleDatastreamStreamSourceConfigOracleSourceConfigToHclTerraform(struct!.oracleSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigList",
    },
    postgresql_source_config: {
      value: googleDatastreamStreamSourceConfigPostgresqlSourceConfigToHclTerraform(struct!.postgresqlSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigList",
    },
    salesforce_source_config: {
      value: googleDatastreamStreamSourceConfigSalesforceSourceConfigToHclTerraform(struct!.salesforceSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigList",
    },
    spanner_source_config: {
      value: googleDatastreamStreamSourceConfigSpannerSourceConfigToHclTerraform(struct!.spannerSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSpannerSourceConfigList",
    },
    sql_server_source_config: {
      value: googleDatastreamStreamSourceConfigSqlServerSourceConfigToHclTerraform(struct!.sqlServerSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceConnectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectionProfile = this._sourceConnectionProfile;
    }
    if (this._mongodbSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodbSourceConfig = this._mongodbSourceConfig?.internalValue;
    }
    if (this._mysqlSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSourceConfig = this._mysqlSourceConfig?.internalValue;
    }
    if (this._oracleSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSourceConfig = this._oracleSourceConfig?.internalValue;
    }
    if (this._postgresqlSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSourceConfig = this._postgresqlSourceConfig?.internalValue;
    }
    if (this._salesforceSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceSourceConfig = this._salesforceSourceConfig?.internalValue;
    }
    if (this._spannerSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spannerSourceConfig = this._spannerSourceConfig?.internalValue;
    }
    if (this._sqlServerSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerSourceConfig = this._sqlServerSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceConnectionProfile = undefined;
      this._mongodbSourceConfig.internalValue = undefined;
      this._mysqlSourceConfig.internalValue = undefined;
      this._oracleSourceConfig.internalValue = undefined;
      this._postgresqlSourceConfig.internalValue = undefined;
      this._salesforceSourceConfig.internalValue = undefined;
      this._spannerSourceConfig.internalValue = undefined;
      this._sqlServerSourceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceConnectionProfile = value.sourceConnectionProfile;
      this._mongodbSourceConfig.internalValue = value.mongodbSourceConfig;
      this._mysqlSourceConfig.internalValue = value.mysqlSourceConfig;
      this._oracleSourceConfig.internalValue = value.oracleSourceConfig;
      this._postgresqlSourceConfig.internalValue = value.postgresqlSourceConfig;
      this._salesforceSourceConfig.internalValue = value.salesforceSourceConfig;
      this._spannerSourceConfig.internalValue = value.spannerSourceConfig;
      this._sqlServerSourceConfig.internalValue = value.sqlServerSourceConfig;
    }
  }

  // source_connection_profile - computed: false, optional: false, required: true
  private _sourceConnectionProfile?: string; 
  public get sourceConnectionProfile() {
    return this.getStringAttribute('source_connection_profile');
  }
  public set sourceConnectionProfile(value: string) {
    this._sourceConnectionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionProfileInput() {
    return this._sourceConnectionProfile;
  }

  // mongodb_source_config - computed: false, optional: true, required: false
  private _mongodbSourceConfig = new GoogleDatastreamStreamSourceConfigMongodbSourceConfigOutputReference(this, "mongodb_source_config");
  public get mongodbSourceConfig() {
    return this._mongodbSourceConfig;
  }
  public putMongodbSourceConfig(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfig) {
    this._mongodbSourceConfig.internalValue = value;
  }
  public resetMongodbSourceConfig() {
    this._mongodbSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbSourceConfigInput() {
    return this._mongodbSourceConfig.internalValue;
  }

  // mysql_source_config - computed: false, optional: true, required: false
  private _mysqlSourceConfig = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference(this, "mysql_source_config");
  public get mysqlSourceConfig() {
    return this._mysqlSourceConfig;
  }
  public putMysqlSourceConfig(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfig) {
    this._mysqlSourceConfig.internalValue = value;
  }
  public resetMysqlSourceConfig() {
    this._mysqlSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSourceConfigInput() {
    return this._mysqlSourceConfig.internalValue;
  }

  // oracle_source_config - computed: false, optional: true, required: false
  private _oracleSourceConfig = new GoogleDatastreamStreamSourceConfigOracleSourceConfigOutputReference(this, "oracle_source_config");
  public get oracleSourceConfig() {
    return this._oracleSourceConfig;
  }
  public putOracleSourceConfig(value: GoogleDatastreamStreamSourceConfigOracleSourceConfig) {
    this._oracleSourceConfig.internalValue = value;
  }
  public resetOracleSourceConfig() {
    this._oracleSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSourceConfigInput() {
    return this._oracleSourceConfig.internalValue;
  }

  // postgresql_source_config - computed: false, optional: true, required: false
  private _postgresqlSourceConfig = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference(this, "postgresql_source_config");
  public get postgresqlSourceConfig() {
    return this._postgresqlSourceConfig;
  }
  public putPostgresqlSourceConfig(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig) {
    this._postgresqlSourceConfig.internalValue = value;
  }
  public resetPostgresqlSourceConfig() {
    this._postgresqlSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSourceConfigInput() {
    return this._postgresqlSourceConfig.internalValue;
  }

  // salesforce_source_config - computed: false, optional: true, required: false
  private _salesforceSourceConfig = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigOutputReference(this, "salesforce_source_config");
  public get salesforceSourceConfig() {
    return this._salesforceSourceConfig;
  }
  public putSalesforceSourceConfig(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfig) {
    this._salesforceSourceConfig.internalValue = value;
  }
  public resetSalesforceSourceConfig() {
    this._salesforceSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceSourceConfigInput() {
    return this._salesforceSourceConfig.internalValue;
  }

  // spanner_source_config - computed: false, optional: true, required: false
  private _spannerSourceConfig = new GoogleDatastreamStreamSourceConfigSpannerSourceConfigOutputReference(this, "spanner_source_config");
  public get spannerSourceConfig() {
    return this._spannerSourceConfig;
  }
  public putSpannerSourceConfig(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfig) {
    this._spannerSourceConfig.internalValue = value;
  }
  public resetSpannerSourceConfig() {
    this._spannerSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerSourceConfigInput() {
    return this._spannerSourceConfig.internalValue;
  }

  // sql_server_source_config - computed: false, optional: true, required: false
  private _sqlServerSourceConfig = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigOutputReference(this, "sql_server_source_config");
  public get sqlServerSourceConfig() {
    return this._sqlServerSourceConfig;
  }
  public putSqlServerSourceConfig(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfig) {
    this._sqlServerSourceConfig.internalValue = value;
  }
  public resetSqlServerSourceConfig() {
    this._sqlServerSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerSourceConfigInput() {
    return this._sqlServerSourceConfig.internalValue;
  }
}
export interface GoogleDatastreamStreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#create GoogleDatastreamStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#delete GoogleDatastreamStream#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_stream#update GoogleDatastreamStream#update}
  */
  readonly update?: string;
}

export function googleDatastreamStreamTimeoutsToTerraform(struct?: GoogleDatastreamStreamTimeouts | cdktf.IResolvable): any {
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


export function googleDatastreamStreamTimeoutsToHclTerraform(struct?: GoogleDatastreamStreamTimeouts | cdktf.IResolvable): any {
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

export class GoogleDatastreamStreamTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDatastreamStreamTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamTimeouts | cdktf.IResolvable | undefined) {
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
