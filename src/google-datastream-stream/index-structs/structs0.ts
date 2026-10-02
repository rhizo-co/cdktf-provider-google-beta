import * as cdktf from 'cdktf';
export interface GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#field GoogleDatastreamStream#field}
  */
  readonly field?: string;
}

export function googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsToTerraform(struct?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
  }
}


export function googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsOutputReference {
    return new GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections {
  /**
  * Collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#collection GoogleDatastreamStream#collection}
  */
  readonly collection: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#fields GoogleDatastreamStream#fields}
  */
  readonly fields?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsToTerraform(struct?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    fields: cdktf.listMapper(googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsToTerraform, true)(struct!.fields),
  }
}


export function googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._fields.internalValue = value.fields;
    }
  }

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsOutputReference {
    return new GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * collections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#collections GoogleDatastreamStream#collections}
  */
  readonly collections?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesToTerraform(struct?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    collections: cdktf.listMapper(googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsToTerraform, true)(struct!.collections),
  }
}


export function googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collections: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsToHclTerraform, true)(struct!.collections),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._collections.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._collections.internalValue = value.collections;
    }
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

  // collections - computed: false, optional: true, required: false
  private _collections = new GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollectionsList(this, "collections", false);
  public get collections() {
    return this._collections;
  }
  public putCollections(value: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesCollections[] | cdktf.IResolvable) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesOutputReference {
    return new GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMongodbExcludedObjects {
  /**
  * databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#databases GoogleDatastreamStream#databases}
  */
  readonly databases: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabases[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMongodbExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllMongodbExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    databases: cdktf.listMapper(googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesToTerraform, true)(struct!.databases),
  }
}


export function googleDatastreamStreamBackfillAllMongodbExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllMongodbExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    databases: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesToHclTerraform, true)(struct!.databases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllMongodbExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMongodbExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databases.internalValue = value.databases;
    }
  }

  // databases - computed: false, optional: false, required: true
  private _databases = new GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsDatabases[] | cdktf.IResolvable) {
    this._databases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#collation GoogleDatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
  * https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktf.stringToTerraform(struct!.collation),
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collation: {
      value: cdktf.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktf.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_columns GoogleDatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    mysql_columns: cdktf.listMapper(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}


export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
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
    mysql_columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform, true)(struct!.mysqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
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

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_tables GoogleDatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mysql_tables: cdktf.listMapper(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}


export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToHclTerraform, true)(struct!.mysqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
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

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference {
    return new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjects {
  /**
  * mysql_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_databases GoogleDatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllMysqlExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktf.listMapper(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}


export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllMysqlExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql_databases: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToHclTerraform, true)(struct!.mysqlDatabases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktf.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The Oracle data type. Full data types list can be found here:
  * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable): any {
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

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable | undefined) {
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

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
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

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsOutputReference {
    return new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * oracle_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_columns GoogleDatastreamStream#oracle_columns}
  */
  readonly oracleColumns?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    oracle_columns: cdktf.listMapper(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToTerraform, true)(struct!.oracleColumns),
  }
}


export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktf.IResolvable): any {
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
    oracle_columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform, true)(struct!.oracleColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._oracleColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleColumns = this._oracleColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._oracleColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._oracleColumns.internalValue = value.oracleColumns;
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

  // oracle_columns - computed: false, optional: true, required: false
  private _oracleColumns = new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsList(this, "oracle_columns", false);
  public get oracleColumns() {
    return this._oracleColumns;
  }
  public putOracleColumns(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns[] | cdktf.IResolvable) {
    this._oracleColumns.internalValue = value;
  }
  public resetOracleColumns() {
    this._oracleColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleColumnsInput() {
    return this._oracleColumns.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOutputReference {
    return new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * oracle_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_tables GoogleDatastreamStream#oracle_tables}
  */
  readonly oracleTables?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    oracle_tables: cdktf.listMapper(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToTerraform, true)(struct!.oracleTables),
  }
}


export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktf.IResolvable): any {
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
    oracle_tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToHclTerraform, true)(struct!.oracleTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._oracleTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTables = this._oracleTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._oracleTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._oracleTables.internalValue = value.oracleTables;
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

  // oracle_tables - computed: false, optional: true, required: false
  private _oracleTables = new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesList(this, "oracle_tables", false);
  public get oracleTables() {
    return this._oracleTables;
  }
  public putOracleTables(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables[] | cdktf.IResolvable) {
    this._oracleTables.internalValue = value;
  }
  public resetOracleTables() {
    this._oracleTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTablesInput() {
    return this._oracleTables.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOutputReference {
    return new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllOracleExcludedObjects {
  /**
  * oracle_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_schemas GoogleDatastreamStream#oracle_schemas}
  */
  readonly oracleSchemas: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllOracleExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllOracleExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oracle_schemas: cdktf.listMapper(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToTerraform, true)(struct!.oracleSchemas),
  }
}


export function googleDatastreamStreamBackfillAllOracleExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllOracleExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oracle_schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToHclTerraform, true)(struct!.oracleSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllOracleExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oracleSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSchemas = this._oracleSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oracleSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oracleSchemas.internalValue = value.oracleSchemas;
    }
  }

  // oracle_schemas - computed: false, optional: false, required: true
  private _oracleSchemas = new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasList(this, "oracle_schemas", false);
  public get oracleSchemas() {
    return this._oracleSchemas;
  }
  public putOracleSchemas(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas[] | cdktf.IResolvable) {
    this._oracleSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSchemasInput() {
    return this._oracleSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The PostgreSQL data type. Full data types list can be found here:
  * https://www.postgresql.org/docs/current/datatype.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable): any {
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
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktf.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable | undefined {
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
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
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
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference {
    return new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * postgresql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_columns GoogleDatastreamStream#postgresql_columns}
  */
  readonly postgresqlColumns?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    postgresql_columns: cdktf.listMapper(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform, true)(struct!.postgresqlColumns),
  }
}


export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable): any {
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
    postgresql_columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform, true)(struct!.postgresqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._postgresqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlColumns = this._postgresqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._postgresqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._postgresqlColumns.internalValue = value.postgresqlColumns;
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

  // postgresql_columns - computed: false, optional: true, required: false
  private _postgresqlColumns = new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList(this, "postgresql_columns", false);
  public get postgresqlColumns() {
    return this._postgresqlColumns;
  }
  public putPostgresqlColumns(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktf.IResolvable) {
    this._postgresqlColumns.internalValue = value;
  }
  public resetPostgresqlColumns() {
    this._postgresqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlColumnsInput() {
    return this._postgresqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesOutputReference {
    return new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * postgresql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_tables GoogleDatastreamStream#postgresql_tables}
  */
  readonly postgresqlTables?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    postgresql_tables: cdktf.listMapper(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToTerraform, true)(struct!.postgresqlTables),
  }
}


export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktf.IResolvable): any {
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
    postgresql_tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform, true)(struct!.postgresqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._postgresqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlTables = this._postgresqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._postgresqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._postgresqlTables.internalValue = value.postgresqlTables;
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

  // postgresql_tables - computed: false, optional: true, required: false
  private _postgresqlTables = new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesList(this, "postgresql_tables", false);
  public get postgresqlTables() {
    return this._postgresqlTables;
  }
  public putPostgresqlTables(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables[] | cdktf.IResolvable) {
    this._postgresqlTables.internalValue = value;
  }
  public resetPostgresqlTables() {
    this._postgresqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlTablesInput() {
    return this._postgresqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasOutputReference {
    return new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects {
  /**
  * postgresql_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_schemas GoogleDatastreamStream#postgresql_schemas}
  */
  readonly postgresqlSchemas: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    postgresql_schemas: cdktf.listMapper(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToTerraform, true)(struct!.postgresqlSchemas),
  }
}


export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    postgresql_schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToHclTerraform, true)(struct!.postgresqlSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgresqlSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSchemas = this._postgresqlSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postgresqlSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postgresqlSchemas.internalValue = value.postgresqlSchemas;
    }
  }

  // postgresql_schemas - computed: false, optional: false, required: true
  private _postgresqlSchemas = new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasList(this, "postgresql_schemas", false);
  public get postgresqlSchemas() {
    return this._postgresqlSchemas;
  }
  public putPostgresqlSchemas(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas[] | cdktf.IResolvable) {
    this._postgresqlSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSchemasInput() {
    return this._postgresqlSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#name GoogleDatastreamStream#name}
  */
  readonly name?: string;
}

export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktf.IResolvable): any {
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

export class GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsOutputReference {
    return new GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects {
  /**
  * Name of object in Salesforce Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#object_name GoogleDatastreamStream#object_name}
  */
  readonly objectName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#fields GoogleDatastreamStream#fields}
  */
  readonly fields?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    fields: cdktf.listMapper(googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToTerraform, true)(struct!.fields),
  }
}


export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._fields.internalValue = value.fields;
    }
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsOutputReference {
    return new GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects {
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#objects GoogleDatastreamStream#objects}
  */
  readonly objects: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objects: cdktf.listMapper(googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToTerraform, true)(struct!.objects),
  }
}


export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objects: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objects.internalValue = value.objects;
    }
  }

  // objects - computed: false, optional: false, required: true
  private _objects = new GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects[] | cdktf.IResolvable) {
    this._objects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column: string;
}

export function googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
  }
}


export function googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // is_primary_key - computed: true, optional: false, required: false
  public get isPrimaryKey() {
    return this.getBooleanAttribute('is_primary_key');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
}

export class GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsOutputReference {
    return new GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#columns GoogleDatastreamStream#columns}
  */
  readonly columns?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesToTerraform(struct?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    columns: cdktf.listMapper(googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables | cdktf.IResolvable | undefined) {
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
  private _columns = new GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesColumns[] | cdktf.IResolvable) {
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

export class GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesOutputReference {
    return new GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#tables GoogleDatastreamStream#tables}
  */
  readonly tables?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasToTerraform(struct?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    tables: cdktf.listMapper(googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemas | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemas | cdktf.IResolvable | undefined) {
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
  private _tables = new GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasTables[] | cdktf.IResolvable) {
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

export class GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasOutputReference {
    return new GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSpannerExcludedObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schemas GoogleDatastreamStream#schemas}
  */
  readonly schemas: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllSpannerExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllSpannerExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schemas: cdktf.listMapper(googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function googleDatastreamStreamBackfillAllSpannerExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllSpannerExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllSpannerExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSpannerExcludedObjects | undefined) {
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
  private _schemas = new GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsSchemas[] | cdktf.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The SQL Server data type. Full data types list can be found here:
  * https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktf.IResolvable): any {
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

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktf.IResolvable | undefined) {
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

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsOutputReference {
    return new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#columns GoogleDatastreamStream#columns}
  */
  readonly columns?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    columns: cdktf.listMapper(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktf.IResolvable | undefined) {
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
  private _columns = new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns[] | cdktf.IResolvable) {
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

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesOutputReference {
    return new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#tables GoogleDatastreamStream#tables}
  */
  readonly tables?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    tables: cdktf.listMapper(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktf.IResolvable | undefined) {
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
  private _tables = new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables[] | cdktf.IResolvable) {
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

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasOutputReference {
    return new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schemas GoogleDatastreamStream#schemas}
  */
  readonly schemas: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schemas: cdktf.listMapper(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects | undefined) {
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
  private _schemas = new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas[] | cdktf.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAll {
  /**
  * mongodb_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mongodb_excluded_objects GoogleDatastreamStream#mongodb_excluded_objects}
  */
  readonly mongodbExcludedObjects?: GoogleDatastreamStreamBackfillAllMongodbExcludedObjects;
  /**
  * mysql_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_excluded_objects GoogleDatastreamStream#mysql_excluded_objects}
  */
  readonly mysqlExcludedObjects?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjects;
  /**
  * oracle_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_excluded_objects GoogleDatastreamStream#oracle_excluded_objects}
  */
  readonly oracleExcludedObjects?: GoogleDatastreamStreamBackfillAllOracleExcludedObjects;
  /**
  * postgresql_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_excluded_objects GoogleDatastreamStream#postgresql_excluded_objects}
  */
  readonly postgresqlExcludedObjects?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects;
  /**
  * salesforce_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#salesforce_excluded_objects GoogleDatastreamStream#salesforce_excluded_objects}
  */
  readonly salesforceExcludedObjects?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects;
  /**
  * spanner_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#spanner_excluded_objects GoogleDatastreamStream#spanner_excluded_objects}
  */
  readonly spannerExcludedObjects?: GoogleDatastreamStreamBackfillAllSpannerExcludedObjects;
  /**
  * sql_server_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#sql_server_excluded_objects GoogleDatastreamStream#sql_server_excluded_objects}
  */
  readonly sqlServerExcludedObjects?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects;
}

export function googleDatastreamStreamBackfillAllToTerraform(struct?: GoogleDatastreamStreamBackfillAllOutputReference | GoogleDatastreamStreamBackfillAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mongodb_excluded_objects: googleDatastreamStreamBackfillAllMongodbExcludedObjectsToTerraform(struct!.mongodbExcludedObjects),
    mysql_excluded_objects: googleDatastreamStreamBackfillAllMysqlExcludedObjectsToTerraform(struct!.mysqlExcludedObjects),
    oracle_excluded_objects: googleDatastreamStreamBackfillAllOracleExcludedObjectsToTerraform(struct!.oracleExcludedObjects),
    postgresql_excluded_objects: googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsToTerraform(struct!.postgresqlExcludedObjects),
    salesforce_excluded_objects: googleDatastreamStreamBackfillAllSalesforceExcludedObjectsToTerraform(struct!.salesforceExcludedObjects),
    spanner_excluded_objects: googleDatastreamStreamBackfillAllSpannerExcludedObjectsToTerraform(struct!.spannerExcludedObjects),
    sql_server_excluded_objects: googleDatastreamStreamBackfillAllSqlServerExcludedObjectsToTerraform(struct!.sqlServerExcludedObjects),
  }
}


export function googleDatastreamStreamBackfillAllToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllOutputReference | GoogleDatastreamStreamBackfillAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mongodb_excluded_objects: {
      value: googleDatastreamStreamBackfillAllMongodbExcludedObjectsToHclTerraform(struct!.mongodbExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsList",
    },
    mysql_excluded_objects: {
      value: googleDatastreamStreamBackfillAllMysqlExcludedObjectsToHclTerraform(struct!.mysqlExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsList",
    },
    oracle_excluded_objects: {
      value: googleDatastreamStreamBackfillAllOracleExcludedObjectsToHclTerraform(struct!.oracleExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllOracleExcludedObjectsList",
    },
    postgresql_excluded_objects: {
      value: googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsToHclTerraform(struct!.postgresqlExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsList",
    },
    salesforce_excluded_objects: {
      value: googleDatastreamStreamBackfillAllSalesforceExcludedObjectsToHclTerraform(struct!.salesforceExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsList",
    },
    spanner_excluded_objects: {
      value: googleDatastreamStreamBackfillAllSpannerExcludedObjectsToHclTerraform(struct!.spannerExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsList",
    },
    sql_server_excluded_objects: {
      value: googleDatastreamStreamBackfillAllSqlServerExcludedObjectsToHclTerraform(struct!.sqlServerExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mongodbExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodbExcludedObjects = this._mongodbExcludedObjects?.internalValue;
    }
    if (this._mysqlExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlExcludedObjects = this._mysqlExcludedObjects?.internalValue;
    }
    if (this._oracleExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleExcludedObjects = this._oracleExcludedObjects?.internalValue;
    }
    if (this._postgresqlExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlExcludedObjects = this._postgresqlExcludedObjects?.internalValue;
    }
    if (this._salesforceExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceExcludedObjects = this._salesforceExcludedObjects?.internalValue;
    }
    if (this._spannerExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spannerExcludedObjects = this._spannerExcludedObjects?.internalValue;
    }
    if (this._sqlServerExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerExcludedObjects = this._sqlServerExcludedObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mongodbExcludedObjects.internalValue = undefined;
      this._mysqlExcludedObjects.internalValue = undefined;
      this._oracleExcludedObjects.internalValue = undefined;
      this._postgresqlExcludedObjects.internalValue = undefined;
      this._salesforceExcludedObjects.internalValue = undefined;
      this._spannerExcludedObjects.internalValue = undefined;
      this._sqlServerExcludedObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mongodbExcludedObjects.internalValue = value.mongodbExcludedObjects;
      this._mysqlExcludedObjects.internalValue = value.mysqlExcludedObjects;
      this._oracleExcludedObjects.internalValue = value.oracleExcludedObjects;
      this._postgresqlExcludedObjects.internalValue = value.postgresqlExcludedObjects;
      this._salesforceExcludedObjects.internalValue = value.salesforceExcludedObjects;
      this._spannerExcludedObjects.internalValue = value.spannerExcludedObjects;
      this._sqlServerExcludedObjects.internalValue = value.sqlServerExcludedObjects;
    }
  }

  // mongodb_excluded_objects - computed: false, optional: true, required: false
  private _mongodbExcludedObjects = new GoogleDatastreamStreamBackfillAllMongodbExcludedObjectsOutputReference(this, "mongodb_excluded_objects");
  public get mongodbExcludedObjects() {
    return this._mongodbExcludedObjects;
  }
  public putMongodbExcludedObjects(value: GoogleDatastreamStreamBackfillAllMongodbExcludedObjects) {
    this._mongodbExcludedObjects.internalValue = value;
  }
  public resetMongodbExcludedObjects() {
    this._mongodbExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbExcludedObjectsInput() {
    return this._mongodbExcludedObjects.internalValue;
  }

  // mysql_excluded_objects - computed: false, optional: true, required: false
  private _mysqlExcludedObjects = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference(this, "mysql_excluded_objects");
  public get mysqlExcludedObjects() {
    return this._mysqlExcludedObjects;
  }
  public putMysqlExcludedObjects(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjects) {
    this._mysqlExcludedObjects.internalValue = value;
  }
  public resetMysqlExcludedObjects() {
    this._mysqlExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlExcludedObjectsInput() {
    return this._mysqlExcludedObjects.internalValue;
  }

  // oracle_excluded_objects - computed: false, optional: true, required: false
  private _oracleExcludedObjects = new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOutputReference(this, "oracle_excluded_objects");
  public get oracleExcludedObjects() {
    return this._oracleExcludedObjects;
  }
  public putOracleExcludedObjects(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjects) {
    this._oracleExcludedObjects.internalValue = value;
  }
  public resetOracleExcludedObjects() {
    this._oracleExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleExcludedObjectsInput() {
    return this._oracleExcludedObjects.internalValue;
  }

  // postgresql_excluded_objects - computed: false, optional: true, required: false
  private _postgresqlExcludedObjects = new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference(this, "postgresql_excluded_objects");
  public get postgresqlExcludedObjects() {
    return this._postgresqlExcludedObjects;
  }
  public putPostgresqlExcludedObjects(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects) {
    this._postgresqlExcludedObjects.internalValue = value;
  }
  public resetPostgresqlExcludedObjects() {
    this._postgresqlExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlExcludedObjectsInput() {
    return this._postgresqlExcludedObjects.internalValue;
  }

  // salesforce_excluded_objects - computed: false, optional: true, required: false
  private _salesforceExcludedObjects = new GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference(this, "salesforce_excluded_objects");
  public get salesforceExcludedObjects() {
    return this._salesforceExcludedObjects;
  }
  public putSalesforceExcludedObjects(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects) {
    this._salesforceExcludedObjects.internalValue = value;
  }
  public resetSalesforceExcludedObjects() {
    this._salesforceExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceExcludedObjectsInput() {
    return this._salesforceExcludedObjects.internalValue;
  }

  // spanner_excluded_objects - computed: false, optional: true, required: false
  private _spannerExcludedObjects = new GoogleDatastreamStreamBackfillAllSpannerExcludedObjectsOutputReference(this, "spanner_excluded_objects");
  public get spannerExcludedObjects() {
    return this._spannerExcludedObjects;
  }
  public putSpannerExcludedObjects(value: GoogleDatastreamStreamBackfillAllSpannerExcludedObjects) {
    this._spannerExcludedObjects.internalValue = value;
  }
  public resetSpannerExcludedObjects() {
    this._spannerExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerExcludedObjectsInput() {
    return this._spannerExcludedObjects.internalValue;
  }

  // sql_server_excluded_objects - computed: false, optional: true, required: false
  private _sqlServerExcludedObjects = new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference(this, "sql_server_excluded_objects");
  public get sqlServerExcludedObjects() {
    return this._sqlServerExcludedObjects;
  }
  public putSqlServerExcludedObjects(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects) {
    this._sqlServerExcludedObjects.internalValue = value;
  }
  public resetSqlServerExcludedObjects() {
    this._sqlServerExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerExcludedObjectsInput() {
    return this._sqlServerExcludedObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillNone {
}

export function googleDatastreamStreamBackfillNoneToTerraform(struct?: GoogleDatastreamStreamBackfillNoneOutputReference | GoogleDatastreamStreamBackfillNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamBackfillNoneToHclTerraform(struct?: GoogleDatastreamStreamBackfillNoneOutputReference | GoogleDatastreamStreamBackfillNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamBackfillNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly {
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig {
  /**
  * The Cloud Storage bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#bucket GoogleDatastreamStream#bucket}
  */
  readonly bucket: string;
  /**
  * The bigquery connection. Format: '{project}.{location}.{name}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#connection_name GoogleDatastreamStream#connection_name}
  */
  readonly connectionName: string;
  /**
  * The file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#file_format GoogleDatastreamStream#file_format}
  */
  readonly fileFormat: string;
  /**
  * The root path inside the Cloud Storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#root_path GoogleDatastreamStream#root_path}
  */
  readonly rootPath?: string;
  /**
  * The table format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table_format GoogleDatastreamStream#table_format}
  */
  readonly tableFormat: string;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    file_format: cdktf.stringToTerraform(struct!.fileFormat),
    root_path: cdktf.stringToTerraform(struct!.rootPath),
    table_format: cdktf.stringToTerraform(struct!.tableFormat),
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_format: {
      value: cdktf.stringToHclTerraform(struct!.fileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_path: {
      value: cdktf.stringToHclTerraform(struct!.rootPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_format: {
      value: cdktf.stringToHclTerraform(struct!.tableFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    if (this._rootPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPath = this._rootPath;
    }
    if (this._tableFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFormat = this._tableFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._connectionName = undefined;
      this._fileFormat = undefined;
      this._rootPath = undefined;
      this._tableFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._connectionName = value.connectionName;
      this._fileFormat = value.fileFormat;
      this._rootPath = value.rootPath;
      this._tableFormat = value.tableFormat;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // file_format - computed: false, optional: false, required: true
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // root_path - computed: false, optional: true, required: false
  private _rootPath?: string; 
  public get rootPath() {
    return this.getStringAttribute('root_path');
  }
  public set rootPath(value: string) {
    this._rootPath = value;
  }
  public resetRootPath() {
    this._rootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathInput() {
    return this._rootPath;
  }

  // table_format - computed: false, optional: false, required: true
  private _tableFormat?: string; 
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
  public set tableFormat(value: string) {
    this._tableFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFormatInput() {
    return this._tableFormat;
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge {
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset {
  /**
  * Dataset ID in the format projects/{project}/datasets/{dataset_id} or
  * {project}:{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#dataset_id GoogleDatastreamStream#dataset_id}
  */
  readonly datasetId: string;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
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
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate {
  /**
  * If supplied, every created dataset will have its name prefixed by the provided value.
  * The prefix and name will be separated by an underscore. i.e. _.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#dataset_id_prefix GoogleDatastreamStream#dataset_id_prefix}
  */
  readonly datasetIdPrefix?: string;
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery
  * table. The BigQuery Service Account associated with your project requires access to this
  * encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}.
  * See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#kms_key_name GoogleDatastreamStream#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The geographic location where the dataset should reside.
  * See https://cloud.google.com/bigquery/docs/locations for supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#location GoogleDatastreamStream#location}
  */
  readonly location: string;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id_prefix: cdktf.stringToTerraform(struct!.datasetIdPrefix),
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id_prefix: {
      value: cdktf.stringToHclTerraform(struct!.datasetIdPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetIdPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetIdPrefix = this._datasetIdPrefix;
    }
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetIdPrefix = undefined;
      this._kmsKeyName = undefined;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetIdPrefix = value.datasetIdPrefix;
      this._kmsKeyName = value.kmsKeyName;
      this._location = value.location;
    }
  }

  // dataset_id_prefix - computed: false, optional: true, required: false
  private _datasetIdPrefix?: string; 
  public get datasetIdPrefix() {
    return this.getStringAttribute('dataset_id_prefix');
  }
  public set datasetIdPrefix(value: string) {
    this._datasetIdPrefix = value;
  }
  public resetDatasetIdPrefix() {
    this._datasetIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdPrefixInput() {
    return this._datasetIdPrefix;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets {
  /**
  * Optional. The project id of the BigQuery dataset. If not specified, the project will be inferred from the stream resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#project_id GoogleDatastreamStream#project_id}
  */
  readonly projectId?: string;
  /**
  * dataset_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#dataset_template GoogleDatastreamStream#dataset_template}
  */
  readonly datasetTemplate: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    dataset_template: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToTerraform(struct!.datasetTemplate),
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_template: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToHclTerraform(struct!.datasetTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._datasetTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetTemplate = this._datasetTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
      this._datasetTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
      this._datasetTemplate.internalValue = value.datasetTemplate;
    }
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // dataset_template - computed: false, optional: false, required: true
  private _datasetTemplate = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference(this, "dataset_template");
  public get datasetTemplate() {
    return this._datasetTemplate;
  }
  public putDatasetTemplate(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate) {
    this._datasetTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetTemplateInput() {
    return this._datasetTemplate.internalValue;
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig {
  /**
  * The guaranteed data freshness (in seconds) when querying tables created by the stream.
  * Editing this field will only affect new tables created in the future, but existing tables
  * will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_freshness GoogleDatastreamStream#data_freshness}
  */
  readonly dataFreshness?: string;
  /**
  * append_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#append_only GoogleDatastreamStream#append_only}
  */
  readonly appendOnly?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly;
  /**
  * blmt_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#blmt_config GoogleDatastreamStream#blmt_config}
  */
  readonly blmtConfig?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig;
  /**
  * merge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#merge GoogleDatastreamStream#merge}
  */
  readonly merge?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge;
  /**
  * single_target_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#single_target_dataset GoogleDatastreamStream#single_target_dataset}
  */
  readonly singleTargetDataset?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset;
  /**
  * source_hierarchy_datasets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#source_hierarchy_datasets GoogleDatastreamStream#source_hierarchy_datasets}
  */
  readonly sourceHierarchyDatasets?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_freshness: cdktf.stringToTerraform(struct!.dataFreshness),
    append_only: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToTerraform(struct!.appendOnly),
    blmt_config: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToTerraform(struct!.blmtConfig),
    merge: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeToTerraform(struct!.merge),
    single_target_dataset: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToTerraform(struct!.singleTargetDataset),
    source_hierarchy_datasets: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToTerraform(struct!.sourceHierarchyDatasets),
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_freshness: {
      value: cdktf.stringToHclTerraform(struct!.dataFreshness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    append_only: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToHclTerraform(struct!.appendOnly),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyList",
    },
    blmt_config: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToHclTerraform(struct!.blmtConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigList",
    },
    merge: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeToHclTerraform(struct!.merge),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeList",
    },
    single_target_dataset: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToHclTerraform(struct!.singleTargetDataset),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetList",
    },
    source_hierarchy_datasets: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToHclTerraform(struct!.sourceHierarchyDatasets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFreshness !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFreshness = this._dataFreshness;
    }
    if (this._appendOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendOnly = this._appendOnly?.internalValue;
    }
    if (this._blmtConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blmtConfig = this._blmtConfig?.internalValue;
    }
    if (this._merge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.merge = this._merge?.internalValue;
    }
    if (this._singleTargetDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleTargetDataset = this._singleTargetDataset?.internalValue;
    }
    if (this._sourceHierarchyDatasets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHierarchyDatasets = this._sourceHierarchyDatasets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataFreshness = undefined;
      this._appendOnly.internalValue = undefined;
      this._blmtConfig.internalValue = undefined;
      this._merge.internalValue = undefined;
      this._singleTargetDataset.internalValue = undefined;
      this._sourceHierarchyDatasets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataFreshness = value.dataFreshness;
      this._appendOnly.internalValue = value.appendOnly;
      this._blmtConfig.internalValue = value.blmtConfig;
      this._merge.internalValue = value.merge;
      this._singleTargetDataset.internalValue = value.singleTargetDataset;
      this._sourceHierarchyDatasets.internalValue = value.sourceHierarchyDatasets;
    }
  }

  // data_freshness - computed: false, optional: true, required: false
  private _dataFreshness?: string; 
  public get dataFreshness() {
    return this.getStringAttribute('data_freshness');
  }
  public set dataFreshness(value: string) {
    this._dataFreshness = value;
  }
  public resetDataFreshness() {
    this._dataFreshness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFreshnessInput() {
    return this._dataFreshness;
  }

  // append_only - computed: false, optional: true, required: false
  private _appendOnly = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference(this, "append_only");
  public get appendOnly() {
    return this._appendOnly;
  }
  public putAppendOnly(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly) {
    this._appendOnly.internalValue = value;
  }
  public resetAppendOnly() {
    this._appendOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendOnlyInput() {
    return this._appendOnly.internalValue;
  }

  // blmt_config - computed: false, optional: true, required: false
  private _blmtConfig = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference(this, "blmt_config");
  public get blmtConfig() {
    return this._blmtConfig;
  }
  public putBlmtConfig(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig) {
    this._blmtConfig.internalValue = value;
  }
  public resetBlmtConfig() {
    this._blmtConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blmtConfigInput() {
    return this._blmtConfig.internalValue;
  }

  // merge - computed: false, optional: true, required: false
  private _merge = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference(this, "merge");
  public get merge() {
    return this._merge;
  }
  public putMerge(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge) {
    this._merge.internalValue = value;
  }
  public resetMerge() {
    this._merge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeInput() {
    return this._merge.internalValue;
  }

  // single_target_dataset - computed: false, optional: true, required: false
  private _singleTargetDataset = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference(this, "single_target_dataset");
  public get singleTargetDataset() {
    return this._singleTargetDataset;
  }
  public putSingleTargetDataset(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset) {
    this._singleTargetDataset.internalValue = value;
  }
  public resetSingleTargetDataset() {
    this._singleTargetDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleTargetDatasetInput() {
    return this._singleTargetDataset.internalValue;
  }

  // source_hierarchy_datasets - computed: false, optional: true, required: false
  private _sourceHierarchyDatasets = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference(this, "source_hierarchy_datasets");
  public get sourceHierarchyDatasets() {
    return this._sourceHierarchyDatasets;
  }
  public putSourceHierarchyDatasets(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets) {
    this._sourceHierarchyDatasets.internalValue = value;
  }
  public resetSourceHierarchyDatasets() {
    this._sourceHierarchyDatasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHierarchyDatasetsInput() {
    return this._sourceHierarchyDatasets.internalValue;
  }
}
export interface GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat {
}

export function googleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat {
  /**
  * Compression of the loaded JSON file. Possible values: ["NO_COMPRESSION", "GZIP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#compression GoogleDatastreamStream#compression}
  */
  readonly compression?: string;
  /**
  * The schema file format along JSON data files. Possible values: ["NO_SCHEMA_FILE", "AVRO_SCHEMA_FILE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema_file_format GoogleDatastreamStream#schema_file_format}
  */
  readonly schemaFileFormat?: string;
}

export function googleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    schema_file_format: cdktf.stringToTerraform(struct!.schemaFileFormat),
  }
}


export function googleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_file_format: {
      value: cdktf.stringToHclTerraform(struct!.schemaFileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._schemaFileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaFileFormat = this._schemaFileFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._schemaFileFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._schemaFileFormat = value.schemaFileFormat;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // schema_file_format - computed: false, optional: true, required: false
  private _schemaFileFormat?: string; 
  public get schemaFileFormat() {
    return this.getStringAttribute('schema_file_format');
  }
  public set schemaFileFormat(value: string) {
    this._schemaFileFormat = value;
  }
  public resetSchemaFileFormat() {
    this._schemaFileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaFileFormatInput() {
    return this._schemaFileFormat;
  }
}
export interface GoogleDatastreamStreamDestinationConfigGcsDestinationConfig {
  /**
  * The maximum duration for which new events are added before a file is closed and a new file is created.
  * Values within the range of 15-60 seconds are allowed.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#file_rotation_interval GoogleDatastreamStream#file_rotation_interval}
  */
  readonly fileRotationInterval?: string;
  /**
  * The maximum file size to be saved in the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#file_rotation_mb GoogleDatastreamStream#file_rotation_mb}
  */
  readonly fileRotationMb?: number;
  /**
  * Path inside the Cloud Storage bucket to write data to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#path GoogleDatastreamStream#path}
  */
  readonly path?: string;
  /**
  * avro_file_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#avro_file_format GoogleDatastreamStream#avro_file_format}
  */
  readonly avroFileFormat?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat;
  /**
  * json_file_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#json_file_format GoogleDatastreamStream#json_file_format}
  */
  readonly jsonFileFormat?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat;
}

export function googleDatastreamStreamDestinationConfigGcsDestinationConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_rotation_interval: cdktf.stringToTerraform(struct!.fileRotationInterval),
    file_rotation_mb: cdktf.numberToTerraform(struct!.fileRotationMb),
    path: cdktf.stringToTerraform(struct!.path),
    avro_file_format: googleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToTerraform(struct!.avroFileFormat),
    json_file_format: googleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToTerraform(struct!.jsonFileFormat),
  }
}


export function googleDatastreamStreamDestinationConfigGcsDestinationConfigToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_rotation_interval: {
      value: cdktf.stringToHclTerraform(struct!.fileRotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_rotation_mb: {
      value: cdktf.numberToHclTerraform(struct!.fileRotationMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro_file_format: {
      value: googleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToHclTerraform(struct!.avroFileFormat),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatList",
    },
    json_file_format: {
      value: googleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToHclTerraform(struct!.jsonFileFormat),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigGcsDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileRotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRotationInterval = this._fileRotationInterval;
    }
    if (this._fileRotationMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRotationMb = this._fileRotationMb;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._avroFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroFileFormat = this._avroFileFormat?.internalValue;
    }
    if (this._jsonFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFileFormat = this._jsonFileFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileRotationInterval = undefined;
      this._fileRotationMb = undefined;
      this._path = undefined;
      this._avroFileFormat.internalValue = undefined;
      this._jsonFileFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileRotationInterval = value.fileRotationInterval;
      this._fileRotationMb = value.fileRotationMb;
      this._path = value.path;
      this._avroFileFormat.internalValue = value.avroFileFormat;
      this._jsonFileFormat.internalValue = value.jsonFileFormat;
    }
  }

  // file_rotation_interval - computed: true, optional: true, required: false
  private _fileRotationInterval?: string; 
  public get fileRotationInterval() {
    return this.getStringAttribute('file_rotation_interval');
  }
  public set fileRotationInterval(value: string) {
    this._fileRotationInterval = value;
  }
  public resetFileRotationInterval() {
    this._fileRotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRotationIntervalInput() {
    return this._fileRotationInterval;
  }

  // file_rotation_mb - computed: true, optional: true, required: false
  private _fileRotationMb?: number; 
  public get fileRotationMb() {
    return this.getNumberAttribute('file_rotation_mb');
  }
  public set fileRotationMb(value: number) {
    this._fileRotationMb = value;
  }
  public resetFileRotationMb() {
    this._fileRotationMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRotationMbInput() {
    return this._fileRotationMb;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // avro_file_format - computed: false, optional: true, required: false
  private _avroFileFormat = new GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference(this, "avro_file_format");
  public get avroFileFormat() {
    return this._avroFileFormat;
  }
  public putAvroFileFormat(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat) {
    this._avroFileFormat.internalValue = value;
  }
  public resetAvroFileFormat() {
    this._avroFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroFileFormatInput() {
    return this._avroFileFormat.internalValue;
  }

  // json_file_format - computed: false, optional: true, required: false
  private _jsonFileFormat = new GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference(this, "json_file_format");
  public get jsonFileFormat() {
    return this._jsonFileFormat;
  }
  public putJsonFileFormat(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat) {
    this._jsonFileFormat.internalValue = value;
  }
  public resetJsonFileFormat() {
    this._jsonFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFileFormatInput() {
    return this._jsonFileFormat.internalValue;
  }
}
export interface GoogleDatastreamStreamDestinationConfig {
  /**
  * Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#destination_connection_profile GoogleDatastreamStream#destination_connection_profile}
  */
  readonly destinationConnectionProfile: string;
  /**
  * bigquery_destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#bigquery_destination_config GoogleDatastreamStream#bigquery_destination_config}
  */
  readonly bigqueryDestinationConfig?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig;
  /**
  * gcs_destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#gcs_destination_config GoogleDatastreamStream#gcs_destination_config}
  */
  readonly gcsDestinationConfig?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfig;
}

export function googleDatastreamStreamDestinationConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_connection_profile: cdktf.stringToTerraform(struct!.destinationConnectionProfile),
    bigquery_destination_config: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigToTerraform(struct!.bigqueryDestinationConfig),
    gcs_destination_config: googleDatastreamStreamDestinationConfigGcsDestinationConfigToTerraform(struct!.gcsDestinationConfig),
  }
}


export function googleDatastreamStreamDestinationConfigToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_connection_profile: {
      value: cdktf.stringToHclTerraform(struct!.destinationConnectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_destination_config: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigToHclTerraform(struct!.bigqueryDestinationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigList",
    },
    gcs_destination_config: {
      value: googleDatastreamStreamDestinationConfigGcsDestinationConfigToHclTerraform(struct!.gcsDestinationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigGcsDestinationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationConnectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConnectionProfile = this._destinationConnectionProfile;
    }
    if (this._bigqueryDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestinationConfig = this._bigqueryDestinationConfig?.internalValue;
    }
    if (this._gcsDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDestinationConfig = this._gcsDestinationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationConnectionProfile = undefined;
      this._bigqueryDestinationConfig.internalValue = undefined;
      this._gcsDestinationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationConnectionProfile = value.destinationConnectionProfile;
      this._bigqueryDestinationConfig.internalValue = value.bigqueryDestinationConfig;
      this._gcsDestinationConfig.internalValue = value.gcsDestinationConfig;
    }
  }

  // destination_connection_profile - computed: false, optional: false, required: true
  private _destinationConnectionProfile?: string; 
  public get destinationConnectionProfile() {
    return this.getStringAttribute('destination_connection_profile');
  }
  public set destinationConnectionProfile(value: string) {
    this._destinationConnectionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConnectionProfileInput() {
    return this._destinationConnectionProfile;
  }

  // bigquery_destination_config - computed: false, optional: true, required: false
  private _bigqueryDestinationConfig = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference(this, "bigquery_destination_config");
  public get bigqueryDestinationConfig() {
    return this._bigqueryDestinationConfig;
  }
  public putBigqueryDestinationConfig(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig) {
    this._bigqueryDestinationConfig.internalValue = value;
  }
  public resetBigqueryDestinationConfig() {
    this._bigqueryDestinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationConfigInput() {
    return this._bigqueryDestinationConfig.internalValue;
  }

  // gcs_destination_config - computed: false, optional: true, required: false
  private _gcsDestinationConfig = new GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference(this, "gcs_destination_config");
  public get gcsDestinationConfig() {
    return this._gcsDestinationConfig;
  }
  public putGcsDestinationConfig(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfig) {
    this._gcsDestinationConfig.internalValue = value;
  }
  public resetGcsDestinationConfig() {
    this._gcsDestinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDestinationConfigInput() {
    return this._gcsDestinationConfig.internalValue;
  }
}
export interface GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClustering {
  /**
  * Column names to set as clustering columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#columns GoogleDatastreamStream#columns}
  */
  readonly columns: string[];
}

export function googleDatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringToTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringOutputReference | GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClustering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
  }
}


export function googleDatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringOutputReference | GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClustering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClustering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClustering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }
}
export interface GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition {
  /**
  * Partition granularity. Possible values: ["PARTITIONING_TIME_GRANULARITY_UNSPECIFIED", "PARTITIONING_TIME_GRANULARITY_HOUR", "PARTITIONING_TIME_GRANULARITY_DAY", "PARTITIONING_TIME_GRANULARITY_MONTH", "PARTITIONING_TIME_GRANULARITY_YEAR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#partitioning_time_granularity GoogleDatastreamStream#partitioning_time_granularity}
  */
  readonly partitioningTimeGranularity?: string;
}

export function googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionToTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionOutputReference | GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partitioning_time_granularity: cdktf.stringToTerraform(struct!.partitioningTimeGranularity),
  }
}


export function googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionOutputReference | GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partitioning_time_granularity: {
      value: cdktf.stringToHclTerraform(struct!.partitioningTimeGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitioningTimeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitioningTimeGranularity = this._partitioningTimeGranularity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitioningTimeGranularity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitioningTimeGranularity = value.partitioningTimeGranularity;
    }
  }

  // partitioning_time_granularity - computed: false, optional: true, required: false
  private _partitioningTimeGranularity?: string; 
  public get partitioningTimeGranularity() {
    return this.getStringAttribute('partitioning_time_granularity');
  }
  public set partitioningTimeGranularity(value: string) {
    this._partitioningTimeGranularity = value;
  }
  public resetPartitioningTimeGranularity() {
    this._partitioningTimeGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningTimeGranularityInput() {
    return this._partitioningTimeGranularity;
  }
}
export interface GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition {
  /**
  * The partitioning column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column: string;
  /**
  * The ending value for range partitioning (exclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#end GoogleDatastreamStream#end}
  */
  readonly end: number;
  /**
  * The interval of each range within the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#interval GoogleDatastreamStream#interval}
  */
  readonly interval: number;
  /**
  * The starting value for range partitioning (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#start GoogleDatastreamStream#start}
  */
  readonly start: number;
}

export function googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionToTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionOutputReference | GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    end: cdktf.numberToTerraform(struct!.end),
    interval: cdktf.numberToTerraform(struct!.interval),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionOutputReference | GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition): any {
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
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._end = undefined;
      this._interval = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._end = value.end;
      this._interval = value.interval;
      this._start = value.start;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition {
  /**
  * The partitioning column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column: string;
  /**
  * Partition granularity. Possible values: ["PARTITIONING_TIME_GRANULARITY_UNSPECIFIED", "PARTITIONING_TIME_GRANULARITY_HOUR", "PARTITIONING_TIME_GRANULARITY_DAY", "PARTITIONING_TIME_GRANULARITY_MONTH", "PARTITIONING_TIME_GRANULARITY_YEAR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#partitioning_time_granularity GoogleDatastreamStream#partitioning_time_granularity}
  */
  readonly partitioningTimeGranularity?: string;
}

export function googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionToTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionOutputReference | GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    partitioning_time_granularity: cdktf.stringToTerraform(struct!.partitioningTimeGranularity),
  }
}


export function googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionOutputReference | GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition): any {
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
    partitioning_time_granularity: {
      value: cdktf.stringToHclTerraform(struct!.partitioningTimeGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._partitioningTimeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitioningTimeGranularity = this._partitioningTimeGranularity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._partitioningTimeGranularity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._partitioningTimeGranularity = value.partitioningTimeGranularity;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // partitioning_time_granularity - computed: false, optional: true, required: false
  private _partitioningTimeGranularity?: string; 
  public get partitioningTimeGranularity() {
    return this.getStringAttribute('partitioning_time_granularity');
  }
  public set partitioningTimeGranularity(value: string) {
    this._partitioningTimeGranularity = value;
  }
  public resetPartitioningTimeGranularity() {
    this._partitioningTimeGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningTimeGranularityInput() {
    return this._partitioningTimeGranularity;
  }
}
export interface GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning {
  /**
  * If true, queries over the table require a partition filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#require_partition_filter GoogleDatastreamStream#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * ingestion_time_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#ingestion_time_partition GoogleDatastreamStream#ingestion_time_partition}
  */
  readonly ingestionTimePartition?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition;
  /**
  * integer_range_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#integer_range_partition GoogleDatastreamStream#integer_range_partition}
  */
  readonly integerRangePartition?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition;
  /**
  * time_unit_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#time_unit_partition GoogleDatastreamStream#time_unit_partition}
  */
  readonly timeUnitPartition?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition;
}

export function googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningToTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningOutputReference | GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_partition_filter: cdktf.booleanToTerraform(struct!.requirePartitionFilter),
    ingestion_time_partition: googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionToTerraform(struct!.ingestionTimePartition),
    integer_range_partition: googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionToTerraform(struct!.integerRangePartition),
    time_unit_partition: googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionToTerraform(struct!.timeUnitPartition),
  }
}


export function googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningOutputReference | GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_partition_filter: {
      value: cdktf.booleanToHclTerraform(struct!.requirePartitionFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingestion_time_partition: {
      value: googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionToHclTerraform(struct!.ingestionTimePartition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionList",
    },
    integer_range_partition: {
      value: googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionToHclTerraform(struct!.integerRangePartition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionList",
    },
    time_unit_partition: {
      value: googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionToHclTerraform(struct!.timeUnitPartition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requirePartitionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePartitionFilter = this._requirePartitionFilter;
    }
    if (this._ingestionTimePartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionTimePartition = this._ingestionTimePartition?.internalValue;
    }
    if (this._integerRangePartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerRangePartition = this._integerRangePartition?.internalValue;
    }
    if (this._timeUnitPartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnitPartition = this._timeUnitPartition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requirePartitionFilter = undefined;
      this._ingestionTimePartition.internalValue = undefined;
      this._integerRangePartition.internalValue = undefined;
      this._timeUnitPartition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requirePartitionFilter = value.requirePartitionFilter;
      this._ingestionTimePartition.internalValue = value.ingestionTimePartition;
      this._integerRangePartition.internalValue = value.integerRangePartition;
      this._timeUnitPartition.internalValue = value.timeUnitPartition;
    }
  }

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter');
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter;
  }

  // ingestion_time_partition - computed: false, optional: true, required: false
  private _ingestionTimePartition = new GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartitionOutputReference(this, "ingestion_time_partition");
  public get ingestionTimePartition() {
    return this._ingestionTimePartition;
  }
  public putIngestionTimePartition(value: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIngestionTimePartition) {
    this._ingestionTimePartition.internalValue = value;
  }
  public resetIngestionTimePartition() {
    this._ingestionTimePartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionTimePartitionInput() {
    return this._ingestionTimePartition.internalValue;
  }

  // integer_range_partition - computed: false, optional: true, required: false
  private _integerRangePartition = new GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartitionOutputReference(this, "integer_range_partition");
  public get integerRangePartition() {
    return this._integerRangePartition;
  }
  public putIntegerRangePartition(value: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningIntegerRangePartition) {
    this._integerRangePartition.internalValue = value;
  }
  public resetIntegerRangePartition() {
    this._integerRangePartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerRangePartitionInput() {
    return this._integerRangePartition.internalValue;
  }

  // time_unit_partition - computed: false, optional: true, required: false
  private _timeUnitPartition = new GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartitionOutputReference(this, "time_unit_partition");
  public get timeUnitPartition() {
    return this._timeUnitPartition;
  }
  public putTimeUnitPartition(value: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningTimeUnitPartition) {
    this._timeUnitPartition.internalValue = value;
  }
  public resetTimeUnitPartition() {
    this._timeUnitPartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitPartitionInput() {
    return this._timeUnitPartition.internalValue;
  }
}
export interface GoogleDatastreamStreamRuleSetsCustomizationRules {
  /**
  * bigquery_clustering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#bigquery_clustering GoogleDatastreamStream#bigquery_clustering}
  */
  readonly bigqueryClustering?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClustering;
  /**
  * bigquery_partitioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#bigquery_partitioning GoogleDatastreamStream#bigquery_partitioning}
  */
  readonly bigqueryPartitioning?: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning;
}

export function googleDatastreamStreamRuleSetsCustomizationRulesToTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_clustering: googleDatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringToTerraform(struct!.bigqueryClustering),
    bigquery_partitioning: googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningToTerraform(struct!.bigqueryPartitioning),
  }
}


export function googleDatastreamStreamRuleSetsCustomizationRulesToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsCustomizationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_clustering: {
      value: googleDatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringToHclTerraform(struct!.bigqueryClustering),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringList",
    },
    bigquery_partitioning: {
      value: googleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningToHclTerraform(struct!.bigqueryPartitioning),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsCustomizationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamRuleSetsCustomizationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryClustering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryClustering = this._bigqueryClustering?.internalValue;
    }
    if (this._bigqueryPartitioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryPartitioning = this._bigqueryPartitioning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsCustomizationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bigqueryClustering.internalValue = undefined;
      this._bigqueryPartitioning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bigqueryClustering.internalValue = value.bigqueryClustering;
      this._bigqueryPartitioning.internalValue = value.bigqueryPartitioning;
    }
  }

  // bigquery_clustering - computed: false, optional: true, required: false
  private _bigqueryClustering = new GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClusteringOutputReference(this, "bigquery_clustering");
  public get bigqueryClustering() {
    return this._bigqueryClustering;
  }
  public putBigqueryClustering(value: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryClustering) {
    this._bigqueryClustering.internalValue = value;
  }
  public resetBigqueryClustering() {
    this._bigqueryClustering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryClusteringInput() {
    return this._bigqueryClustering.internalValue;
  }

  // bigquery_partitioning - computed: false, optional: true, required: false
  private _bigqueryPartitioning = new GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioningOutputReference(this, "bigquery_partitioning");
  public get bigqueryPartitioning() {
    return this._bigqueryPartitioning;
  }
  public putBigqueryPartitioning(value: GoogleDatastreamStreamRuleSetsCustomizationRulesBigqueryPartitioning) {
    this._bigqueryPartitioning.internalValue = value;
  }
  public resetBigqueryPartitioning() {
    this._bigqueryPartitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryPartitioningInput() {
    return this._bigqueryPartitioning.internalValue;
  }
}

export class GoogleDatastreamStreamRuleSetsCustomizationRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamRuleSetsCustomizationRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamRuleSetsCustomizationRulesOutputReference {
    return new GoogleDatastreamStreamRuleSetsCustomizationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier {
  /**
  * The MongoDB collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#collection GoogleDatastreamStream#collection}
  */
  readonly collection: string;
  /**
  * The MongoDB database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
}

export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierToTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    database: cdktf.stringToTerraform(struct!.database),
  }
}


export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection = undefined;
      this._database = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection = value.collection;
      this._database = value.database;
    }
  }

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
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
}
export interface GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier {
  /**
  * The database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * The table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
}

export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierToTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._table = value.table;
    }
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
}
export interface GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier {
  /**
  * The schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * The table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
}

export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierToTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier): any {
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
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schema = value.schema;
      this._table = value.table;
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
}
export interface GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier {
  /**
  * The schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * The table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
}

export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierToTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier): any {
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
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schema = value.schema;
      this._table = value.table;
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
}
export interface GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier {
  /**
  * The Salesforce object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#object_name GoogleDatastreamStream#object_name}
  */
  readonly objectName: string;
}

export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierToTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
  }
}


export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectName = value.objectName;
    }
  }

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }
}
export interface GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier {
  /**
  * The schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema?: string;
  /**
  * The table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
}

export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierToTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier): any {
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
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schema = value.schema;
      this._table = value.table;
    }
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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
}
export interface GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier {
  /**
  * The schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * The table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
}

export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierToTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier): any {
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
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schema = value.schema;
      this._table = value.table;
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
}
export interface GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier {
  /**
  * mongodb_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mongodb_identifier GoogleDatastreamStream#mongodb_identifier}
  */
  readonly mongodbIdentifier?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier;
  /**
  * mysql_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_identifier GoogleDatastreamStream#mysql_identifier}
  */
  readonly mysqlIdentifier?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier;
  /**
  * oracle_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_identifier GoogleDatastreamStream#oracle_identifier}
  */
  readonly oracleIdentifier?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier;
  /**
  * postgresql_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_identifier GoogleDatastreamStream#postgresql_identifier}
  */
  readonly postgresqlIdentifier?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier;
  /**
  * salesforce_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#salesforce_identifier GoogleDatastreamStream#salesforce_identifier}
  */
  readonly salesforceIdentifier?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier;
  /**
  * spanner_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#spanner_identifier GoogleDatastreamStream#spanner_identifier}
  */
  readonly spannerIdentifier?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier;
  /**
  * sql_server_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#sql_server_identifier GoogleDatastreamStream#sql_server_identifier}
  */
  readonly sqlServerIdentifier?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier;
}

export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierToTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mongodb_identifier: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierToTerraform(struct!.mongodbIdentifier),
    mysql_identifier: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierToTerraform(struct!.mysqlIdentifier),
    oracle_identifier: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierToTerraform(struct!.oracleIdentifier),
    postgresql_identifier: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierToTerraform(struct!.postgresqlIdentifier),
    salesforce_identifier: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierToTerraform(struct!.salesforceIdentifier),
    spanner_identifier: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierToTerraform(struct!.spannerIdentifier),
    sql_server_identifier: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierToTerraform(struct!.sqlServerIdentifier),
  }
}


export function googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOutputReference | GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mongodb_identifier: {
      value: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierToHclTerraform(struct!.mongodbIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierList",
    },
    mysql_identifier: {
      value: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierToHclTerraform(struct!.mysqlIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierList",
    },
    oracle_identifier: {
      value: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierToHclTerraform(struct!.oracleIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierList",
    },
    postgresql_identifier: {
      value: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierToHclTerraform(struct!.postgresqlIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierList",
    },
    salesforce_identifier: {
      value: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierToHclTerraform(struct!.salesforceIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierList",
    },
    spanner_identifier: {
      value: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierToHclTerraform(struct!.spannerIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierList",
    },
    sql_server_identifier: {
      value: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierToHclTerraform(struct!.sqlServerIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mongodbIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodbIdentifier = this._mongodbIdentifier?.internalValue;
    }
    if (this._mysqlIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlIdentifier = this._mysqlIdentifier?.internalValue;
    }
    if (this._oracleIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleIdentifier = this._oracleIdentifier?.internalValue;
    }
    if (this._postgresqlIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlIdentifier = this._postgresqlIdentifier?.internalValue;
    }
    if (this._salesforceIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceIdentifier = this._salesforceIdentifier?.internalValue;
    }
    if (this._spannerIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spannerIdentifier = this._spannerIdentifier?.internalValue;
    }
    if (this._sqlServerIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerIdentifier = this._sqlServerIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mongodbIdentifier.internalValue = undefined;
      this._mysqlIdentifier.internalValue = undefined;
      this._oracleIdentifier.internalValue = undefined;
      this._postgresqlIdentifier.internalValue = undefined;
      this._salesforceIdentifier.internalValue = undefined;
      this._spannerIdentifier.internalValue = undefined;
      this._sqlServerIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mongodbIdentifier.internalValue = value.mongodbIdentifier;
      this._mysqlIdentifier.internalValue = value.mysqlIdentifier;
      this._oracleIdentifier.internalValue = value.oracleIdentifier;
      this._postgresqlIdentifier.internalValue = value.postgresqlIdentifier;
      this._salesforceIdentifier.internalValue = value.salesforceIdentifier;
      this._spannerIdentifier.internalValue = value.spannerIdentifier;
      this._sqlServerIdentifier.internalValue = value.sqlServerIdentifier;
    }
  }

  // mongodb_identifier - computed: false, optional: true, required: false
  private _mongodbIdentifier = new GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifierOutputReference(this, "mongodb_identifier");
  public get mongodbIdentifier() {
    return this._mongodbIdentifier;
  }
  public putMongodbIdentifier(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMongodbIdentifier) {
    this._mongodbIdentifier.internalValue = value;
  }
  public resetMongodbIdentifier() {
    this._mongodbIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbIdentifierInput() {
    return this._mongodbIdentifier.internalValue;
  }

  // mysql_identifier - computed: false, optional: true, required: false
  private _mysqlIdentifier = new GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifierOutputReference(this, "mysql_identifier");
  public get mysqlIdentifier() {
    return this._mysqlIdentifier;
  }
  public putMysqlIdentifier(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierMysqlIdentifier) {
    this._mysqlIdentifier.internalValue = value;
  }
  public resetMysqlIdentifier() {
    this._mysqlIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlIdentifierInput() {
    return this._mysqlIdentifier.internalValue;
  }

  // oracle_identifier - computed: false, optional: true, required: false
  private _oracleIdentifier = new GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifierOutputReference(this, "oracle_identifier");
  public get oracleIdentifier() {
    return this._oracleIdentifier;
  }
  public putOracleIdentifier(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOracleIdentifier) {
    this._oracleIdentifier.internalValue = value;
  }
  public resetOracleIdentifier() {
    this._oracleIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleIdentifierInput() {
    return this._oracleIdentifier.internalValue;
  }

  // postgresql_identifier - computed: false, optional: true, required: false
  private _postgresqlIdentifier = new GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifierOutputReference(this, "postgresql_identifier");
  public get postgresqlIdentifier() {
    return this._postgresqlIdentifier;
  }
  public putPostgresqlIdentifier(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierPostgresqlIdentifier) {
    this._postgresqlIdentifier.internalValue = value;
  }
  public resetPostgresqlIdentifier() {
    this._postgresqlIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlIdentifierInput() {
    return this._postgresqlIdentifier.internalValue;
  }

  // salesforce_identifier - computed: false, optional: true, required: false
  private _salesforceIdentifier = new GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifierOutputReference(this, "salesforce_identifier");
  public get salesforceIdentifier() {
    return this._salesforceIdentifier;
  }
  public putSalesforceIdentifier(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSalesforceIdentifier) {
    this._salesforceIdentifier.internalValue = value;
  }
  public resetSalesforceIdentifier() {
    this._salesforceIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceIdentifierInput() {
    return this._salesforceIdentifier.internalValue;
  }

  // spanner_identifier - computed: false, optional: true, required: false
  private _spannerIdentifier = new GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifierOutputReference(this, "spanner_identifier");
  public get spannerIdentifier() {
    return this._spannerIdentifier;
  }
  public putSpannerIdentifier(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSpannerIdentifier) {
    this._spannerIdentifier.internalValue = value;
  }
  public resetSpannerIdentifier() {
    this._spannerIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerIdentifierInput() {
    return this._spannerIdentifier.internalValue;
  }

  // sql_server_identifier - computed: false, optional: true, required: false
  private _sqlServerIdentifier = new GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifierOutputReference(this, "sql_server_identifier");
  public get sqlServerIdentifier() {
    return this._sqlServerIdentifier;
  }
  public putSqlServerIdentifier(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierSqlServerIdentifier) {
    this._sqlServerIdentifier.internalValue = value;
  }
  public resetSqlServerIdentifier() {
    this._sqlServerIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerIdentifierInput() {
    return this._sqlServerIdentifier.internalValue;
  }
}
export interface GoogleDatastreamStreamRuleSetsObjectFilter {
  /**
  * source_object_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#source_object_identifier GoogleDatastreamStream#source_object_identifier}
  */
  readonly sourceObjectIdentifier?: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier;
}

export function googleDatastreamStreamRuleSetsObjectFilterToTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterOutputReference | GoogleDatastreamStreamRuleSetsObjectFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_object_identifier: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierToTerraform(struct!.sourceObjectIdentifier),
  }
}


export function googleDatastreamStreamRuleSetsObjectFilterToHclTerraform(struct?: GoogleDatastreamStreamRuleSetsObjectFilterOutputReference | GoogleDatastreamStreamRuleSetsObjectFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_object_identifier: {
      value: googleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierToHclTerraform(struct!.sourceObjectIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsObjectFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamRuleSetsObjectFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceObjectIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceObjectIdentifier = this._sourceObjectIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSetsObjectFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceObjectIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceObjectIdentifier.internalValue = value.sourceObjectIdentifier;
    }
  }

  // source_object_identifier - computed: false, optional: true, required: false
  private _sourceObjectIdentifier = new GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifierOutputReference(this, "source_object_identifier");
  public get sourceObjectIdentifier() {
    return this._sourceObjectIdentifier;
  }
  public putSourceObjectIdentifier(value: GoogleDatastreamStreamRuleSetsObjectFilterSourceObjectIdentifier) {
    this._sourceObjectIdentifier.internalValue = value;
  }
  public resetSourceObjectIdentifier() {
    this._sourceObjectIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectIdentifierInput() {
    return this._sourceObjectIdentifier.internalValue;
  }
}
export interface GoogleDatastreamStreamRuleSets {
  /**
  * customization_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#customization_rules GoogleDatastreamStream#customization_rules}
  */
  readonly customizationRules: GoogleDatastreamStreamRuleSetsCustomizationRules[] | cdktf.IResolvable;
  /**
  * object_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#object_filter GoogleDatastreamStream#object_filter}
  */
  readonly objectFilter: GoogleDatastreamStreamRuleSetsObjectFilter;
}

export function googleDatastreamStreamRuleSetsToTerraform(struct?: GoogleDatastreamStreamRuleSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customization_rules: cdktf.listMapper(googleDatastreamStreamRuleSetsCustomizationRulesToTerraform, true)(struct!.customizationRules),
    object_filter: googleDatastreamStreamRuleSetsObjectFilterToTerraform(struct!.objectFilter),
  }
}


export function googleDatastreamStreamRuleSetsToHclTerraform(struct?: GoogleDatastreamStreamRuleSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customization_rules: {
      value: cdktf.listMapperHcl(googleDatastreamStreamRuleSetsCustomizationRulesToHclTerraform, true)(struct!.customizationRules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsCustomizationRulesList",
    },
    object_filter: {
      value: googleDatastreamStreamRuleSetsObjectFilterToHclTerraform(struct!.objectFilter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamRuleSetsObjectFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamRuleSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamRuleSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationRules = this._customizationRules?.internalValue;
    }
    if (this._objectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectFilter = this._objectFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamRuleSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customizationRules.internalValue = undefined;
      this._objectFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customizationRules.internalValue = value.customizationRules;
      this._objectFilter.internalValue = value.objectFilter;
    }
  }

  // customization_rules - computed: false, optional: false, required: true
  private _customizationRules = new GoogleDatastreamStreamRuleSetsCustomizationRulesList(this, "customization_rules", false);
  public get customizationRules() {
    return this._customizationRules;
  }
  public putCustomizationRules(value: GoogleDatastreamStreamRuleSetsCustomizationRules[] | cdktf.IResolvable) {
    this._customizationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationRulesInput() {
    return this._customizationRules.internalValue;
  }

  // object_filter - computed: false, optional: false, required: true
  private _objectFilter = new GoogleDatastreamStreamRuleSetsObjectFilterOutputReference(this, "object_filter");
  public get objectFilter() {
    return this._objectFilter;
  }
  public putObjectFilter(value: GoogleDatastreamStreamRuleSetsObjectFilter) {
    this._objectFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectFilterInput() {
    return this._objectFilter.internalValue;
  }
}

export class GoogleDatastreamStreamRuleSetsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamRuleSets[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamRuleSetsOutputReference {
    return new GoogleDatastreamStreamRuleSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#field GoogleDatastreamStream#field}
  */
  readonly field?: string;
}

export function googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
  }
}


export function googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsOutputReference {
    return new GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections {
  /**
  * Collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#collection GoogleDatastreamStream#collection}
  */
  readonly collection?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#fields GoogleDatastreamStream#fields}
  */
  readonly fields?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    fields: cdktf.listMapper(googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsToTerraform, true)(struct!.fields),
  }
}


export function googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._fields.internalValue = value.fields;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsOutputReference {
    return new GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database?: string;
  /**
  * collections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#collections GoogleDatastreamStream#collections}
  */
  readonly collections?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    collections: cdktf.listMapper(googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsToTerraform, true)(struct!.collections),
  }
}


export function googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collections: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsToHclTerraform, true)(struct!.collections),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._collections.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._collections.internalValue = value.collections;
    }
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

  // collections - computed: false, optional: true, required: false
  private _collections = new GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollectionsList(this, "collections", false);
  public get collections() {
    return this._collections;
  }
  public putCollections(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesCollections[] | cdktf.IResolvable) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects {
  /**
  * databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#databases GoogleDatastreamStream#databases}
  */
  readonly databases?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    databases: cdktf.listMapper(googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesToTerraform, true)(struct!.databases),
  }
}


export function googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    databases: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesToHclTerraform, true)(struct!.databases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databases.internalValue = value.databases;
    }
  }

  // databases - computed: false, optional: true, required: false
  private _databases = new GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsDatabases[] | cdktf.IResolvable) {
    this._databases.internalValue = value;
  }
  public resetDatabases() {
    this._databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#field GoogleDatastreamStream#field}
  */
  readonly field?: string;
}

export function googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
  }
}


export function googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsOutputReference {
    return new GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections {
  /**
  * Collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#collection GoogleDatastreamStream#collection}
  */
  readonly collection?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#fields GoogleDatastreamStream#fields}
  */
  readonly fields?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    fields: cdktf.listMapper(googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsToTerraform, true)(struct!.fields),
  }
}


export function googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._fields.internalValue = value.fields;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsOutputReference {
    return new GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database?: string;
  /**
  * collections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#collections GoogleDatastreamStream#collections}
  */
  readonly collections?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    collections: cdktf.listMapper(googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsToTerraform, true)(struct!.collections),
  }
}


export function googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collections: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsToHclTerraform, true)(struct!.collections),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._collections.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._collections.internalValue = value.collections;
    }
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

  // collections - computed: false, optional: true, required: false
  private _collections = new GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollectionsList(this, "collections", false);
  public get collections() {
    return this._collections;
  }
  public putCollections(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesCollections[] | cdktf.IResolvable) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects {
  /**
  * databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#databases GoogleDatastreamStream#databases}
  */
  readonly databases?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    databases: cdktf.listMapper(googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesToTerraform, true)(struct!.databases),
  }
}


export function googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    databases: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesToHclTerraform, true)(struct!.databases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databases.internalValue = value.databases;
    }
  }

  // databases - computed: false, optional: true, required: false
  private _databases = new GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsDatabases[] | cdktf.IResolvable) {
    this._databases.internalValue = value;
  }
  public resetDatabases() {
    this._databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMongodbSourceConfig {
  /**
  * Optional. Maximum number of concurrent backfill tasks. The number
  * should be non-negative and less than or equal to 50. If not set
  * (or set to 0), the system''s default value is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#max_concurrent_backfill_tasks GoogleDatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects;
}

export function googleDatastreamStreamSourceConfigMongodbSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigMongodbSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_backfill_tasks: cdktf.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    exclude_objects: googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function googleDatastreamStreamSourceConfigMongodbSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMongodbSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigMongodbSourceConfig): any {
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
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMongodbSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMongodbSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // max_concurrent_backfill_tasks - computed: false, optional: true, required: false
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

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigExcludeObjects) {
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
  private _includeObjects = new GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigMongodbSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition {
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#collation GoogleDatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
  * https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktf.stringToTerraform(struct!.collation),
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collation: {
      value: cdktf.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktf.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_columns GoogleDatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    mysql_columns: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
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
    mysql_columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform, true)(struct!.mysqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
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

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_tables GoogleDatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mysql_tables: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToHclTerraform, true)(struct!.mysqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
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

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects {
  /**
  * mysql_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_databases GoogleDatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql_databases: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToHclTerraform, true)(struct!.mysqlDatabases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktf.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid {
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigGtidToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigGtidToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#collation GoogleDatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
  * https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktf.stringToTerraform(struct!.collation),
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collation: {
      value: cdktf.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktf.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_columns GoogleDatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    mysql_columns: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
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
    mysql_columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform, true)(struct!.mysqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
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

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_tables GoogleDatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mysql_tables: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToHclTerraform, true)(struct!.mysqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
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

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects {
  /**
  * mysql_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#mysql_databases GoogleDatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktf.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql_databases: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToHclTerraform, true)(struct!.mysqlDatabases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktf.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfig {
  /**
  * Maximum number of concurrent backfill tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#max_concurrent_backfill_tasks GoogleDatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Maximum number of concurrent CDC tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#max_concurrent_cdc_tasks GoogleDatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * binary_log_position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#binary_log_position GoogleDatastreamStream#binary_log_position}
  */
  readonly binaryLogPosition?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects;
  /**
  * gtid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#gtid GoogleDatastreamStream#gtid}
  */
  readonly gtid?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_backfill_tasks: cdktf.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktf.numberToTerraform(struct!.maxConcurrentCdcTasks),
    binary_log_position: googleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToTerraform(struct!.binaryLogPosition),
    exclude_objects: googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    gtid: googleDatastreamStreamSourceConfigMysqlSourceConfigGtidToTerraform(struct!.gtid),
    include_objects: googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfig): any {
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
    binary_log_position: {
      value: googleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToHclTerraform(struct!.binaryLogPosition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionList",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsList",
    },
    gtid: {
      value: googleDatastreamStreamSourceConfigMysqlSourceConfigGtidToHclTerraform(struct!.gtid),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtidList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfig | undefined {
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
    if (this._binaryLogPosition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryLogPosition = this._binaryLogPosition?.internalValue;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._gtid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtid = this._gtid?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._binaryLogPosition.internalValue = undefined;
      this._excludeObjects.internalValue = undefined;
      this._gtid.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._binaryLogPosition.internalValue = value.binaryLogPosition;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._gtid.internalValue = value.gtid;
      this._includeObjects.internalValue = value.includeObjects;
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

  // binary_log_position - computed: false, optional: true, required: false
  private _binaryLogPosition = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference(this, "binary_log_position");
  public get binaryLogPosition() {
    return this._binaryLogPosition;
  }
  public putBinaryLogPosition(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition) {
    this._binaryLogPosition.internalValue = value;
  }
  public resetBinaryLogPosition() {
    this._binaryLogPosition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryLogPositionInput() {
    return this._binaryLogPosition.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // gtid - computed: false, optional: true, required: false
  private _gtid = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference(this, "gtid");
  public get gtid() {
    return this._gtid;
  }
  public putGtid(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid) {
    this._gtid.internalValue = value;
  }
  public resetGtid() {
    this._gtid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtidInput() {
    return this._gtid.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects {
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The Oracle data type. Full data types list can be found here:
  * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable): any {
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

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable | undefined) {
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

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
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

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * oracle_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_columns GoogleDatastreamStream#oracle_columns}
  */
  readonly oracleColumns?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    oracle_columns: cdktf.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform, true)(struct!.oracleColumns),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktf.IResolvable): any {
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
    oracle_columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform, true)(struct!.oracleColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._oracleColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleColumns = this._oracleColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._oracleColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._oracleColumns.internalValue = value.oracleColumns;
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

  // oracle_columns - computed: false, optional: true, required: false
  private _oracleColumns = new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsList(this, "oracle_columns", false);
  public get oracleColumns() {
    return this._oracleColumns;
  }
  public putOracleColumns(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktf.IResolvable) {
    this._oracleColumns.internalValue = value;
  }
  public resetOracleColumns() {
    this._oracleColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleColumnsInput() {
    return this._oracleColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * oracle_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_tables GoogleDatastreamStream#oracle_tables}
  */
  readonly oracleTables?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    oracle_tables: cdktf.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToTerraform, true)(struct!.oracleTables),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktf.IResolvable): any {
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
    oracle_tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToHclTerraform, true)(struct!.oracleTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._oracleTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTables = this._oracleTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._oracleTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._oracleTables.internalValue = value.oracleTables;
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

  // oracle_tables - computed: false, optional: true, required: false
  private _oracleTables = new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesList(this, "oracle_tables", false);
  public get oracleTables() {
    return this._oracleTables;
  }
  public putOracleTables(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables[] | cdktf.IResolvable) {
    this._oracleTables.internalValue = value;
  }
  public resetOracleTables() {
    this._oracleTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTablesInput() {
    return this._oracleTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects {
  /**
  * oracle_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_schemas GoogleDatastreamStream#oracle_schemas}
  */
  readonly oracleSchemas: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oracle_schemas: cdktf.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToTerraform, true)(struct!.oracleSchemas),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oracle_schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToHclTerraform, true)(struct!.oracleSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oracleSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSchemas = this._oracleSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oracleSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oracleSchemas.internalValue = value.oracleSchemas;
    }
  }

  // oracle_schemas - computed: false, optional: false, required: true
  private _oracleSchemas = new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasList(this, "oracle_schemas", false);
  public get oracleSchemas() {
    return this._oracleSchemas;
  }
  public putOracleSchemas(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas[] | cdktf.IResolvable) {
    this._oracleSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSchemasInput() {
    return this._oracleSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The Oracle data type. Full data types list can be found here:
  * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable): any {
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

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktf.IResolvable | undefined) {
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

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
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

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * oracle_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_columns GoogleDatastreamStream#oracle_columns}
  */
  readonly oracleColumns?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    oracle_columns: cdktf.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform, true)(struct!.oracleColumns),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktf.IResolvable): any {
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
    oracle_columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform, true)(struct!.oracleColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._oracleColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleColumns = this._oracleColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._oracleColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._oracleColumns.internalValue = value.oracleColumns;
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

  // oracle_columns - computed: false, optional: true, required: false
  private _oracleColumns = new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsList(this, "oracle_columns", false);
  public get oracleColumns() {
    return this._oracleColumns;
  }
  public putOracleColumns(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktf.IResolvable) {
    this._oracleColumns.internalValue = value;
  }
  public resetOracleColumns() {
    this._oracleColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleColumnsInput() {
    return this._oracleColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * oracle_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_tables GoogleDatastreamStream#oracle_tables}
  */
  readonly oracleTables?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    oracle_tables: cdktf.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToTerraform, true)(struct!.oracleTables),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktf.IResolvable): any {
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
    oracle_tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToHclTerraform, true)(struct!.oracleTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._oracleTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTables = this._oracleTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._oracleTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._oracleTables.internalValue = value.oracleTables;
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

  // oracle_tables - computed: false, optional: true, required: false
  private _oracleTables = new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesList(this, "oracle_tables", false);
  public get oracleTables() {
    return this._oracleTables;
  }
  public putOracleTables(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables[] | cdktf.IResolvable) {
    this._oracleTables.internalValue = value;
  }
  public resetOracleTables() {
    this._oracleTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTablesInput() {
    return this._oracleTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects {
  /**
  * oracle_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#oracle_schemas GoogleDatastreamStream#oracle_schemas}
  */
  readonly oracleSchemas: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oracle_schemas: cdktf.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToTerraform, true)(struct!.oracleSchemas),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oracle_schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToHclTerraform, true)(struct!.oracleSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oracleSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSchemas = this._oracleSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oracleSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oracleSchemas.internalValue = value.oracleSchemas;
    }
  }

  // oracle_schemas - computed: false, optional: false, required: true
  private _oracleSchemas = new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasList(this, "oracle_schemas", false);
  public get oracleSchemas() {
    return this._oracleSchemas;
  }
  public putOracleSchemas(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas[] | cdktf.IResolvable) {
    this._oracleSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSchemasInput() {
    return this._oracleSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects {
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfig {
  /**
  * Maximum number of concurrent backfill tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#max_concurrent_backfill_tasks GoogleDatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Maximum number of concurrent CDC tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#max_concurrent_cdc_tasks GoogleDatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * drop_large_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#drop_large_objects GoogleDatastreamStream#drop_large_objects}
  */
  readonly dropLargeObjects?: GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects;
  /**
  * stream_large_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#stream_large_objects GoogleDatastreamStream#stream_large_objects}
  */
  readonly streamLargeObjects?: GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_backfill_tasks: cdktf.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktf.numberToTerraform(struct!.maxConcurrentCdcTasks),
    drop_large_objects: googleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToTerraform(struct!.dropLargeObjects),
    exclude_objects: googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
    stream_large_objects: googleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToTerraform(struct!.streamLargeObjects),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfig): any {
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
    drop_large_objects: {
      value: googleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToHclTerraform(struct!.dropLargeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsList",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsList",
    },
    stream_large_objects: {
      value: googleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToHclTerraform(struct!.streamLargeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfig | undefined {
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
    if (this._dropLargeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropLargeObjects = this._dropLargeObjects?.internalValue;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    if (this._streamLargeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamLargeObjects = this._streamLargeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._dropLargeObjects.internalValue = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
      this._streamLargeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._dropLargeObjects.internalValue = value.dropLargeObjects;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
      this._streamLargeObjects.internalValue = value.streamLargeObjects;
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

  // drop_large_objects - computed: false, optional: true, required: false
  private _dropLargeObjects = new GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference(this, "drop_large_objects");
  public get dropLargeObjects() {
    return this._dropLargeObjects;
  }
  public putDropLargeObjects(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects) {
    this._dropLargeObjects.internalValue = value;
  }
  public resetDropLargeObjects() {
    this._dropLargeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropLargeObjectsInput() {
    return this._dropLargeObjects.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects) {
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
  private _includeObjects = new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }

  // stream_large_objects - computed: false, optional: true, required: false
  private _streamLargeObjects = new GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference(this, "stream_large_objects");
  public get streamLargeObjects() {
    return this._streamLargeObjects;
  }
  public putStreamLargeObjects(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects) {
    this._streamLargeObjects.internalValue = value;
  }
  public resetStreamLargeObjects() {
    this._streamLargeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamLargeObjectsInput() {
    return this._streamLargeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The PostgreSQL data type. Full data types list can be found here:
  * https://www.postgresql.org/docs/current/datatype.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable): any {
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
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktf.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable | undefined {
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
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
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
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * postgresql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_columns GoogleDatastreamStream#postgresql_columns}
  */
  readonly postgresqlColumns?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    postgresql_columns: cdktf.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform, true)(struct!.postgresqlColumns),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable): any {
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
    postgresql_columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform, true)(struct!.postgresqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._postgresqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlColumns = this._postgresqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._postgresqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._postgresqlColumns.internalValue = value.postgresqlColumns;
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

  // postgresql_columns - computed: false, optional: true, required: false
  private _postgresqlColumns = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList(this, "postgresql_columns", false);
  public get postgresqlColumns() {
    return this._postgresqlColumns;
  }
  public putPostgresqlColumns(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktf.IResolvable) {
    this._postgresqlColumns.internalValue = value;
  }
  public resetPostgresqlColumns() {
    this._postgresqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlColumnsInput() {
    return this._postgresqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * postgresql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_tables GoogleDatastreamStream#postgresql_tables}
  */
  readonly postgresqlTables?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    postgresql_tables: cdktf.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform, true)(struct!.postgresqlTables),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktf.IResolvable): any {
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
    postgresql_tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform, true)(struct!.postgresqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._postgresqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlTables = this._postgresqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._postgresqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._postgresqlTables.internalValue = value.postgresqlTables;
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

  // postgresql_tables - computed: false, optional: true, required: false
  private _postgresqlTables = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesList(this, "postgresql_tables", false);
  public get postgresqlTables() {
    return this._postgresqlTables;
  }
  public putPostgresqlTables(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktf.IResolvable) {
    this._postgresqlTables.internalValue = value;
  }
  public resetPostgresqlTables() {
    this._postgresqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlTablesInput() {
    return this._postgresqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects {
  /**
  * postgresql_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_schemas GoogleDatastreamStream#postgresql_schemas}
  */
  readonly postgresqlSchemas: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    postgresql_schemas: cdktf.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToTerraform, true)(struct!.postgresqlSchemas),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    postgresql_schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToHclTerraform, true)(struct!.postgresqlSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgresqlSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSchemas = this._postgresqlSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postgresqlSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postgresqlSchemas.internalValue = value.postgresqlSchemas;
    }
  }

  // postgresql_schemas - computed: false, optional: false, required: true
  private _postgresqlSchemas = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasList(this, "postgresql_schemas", false);
  public get postgresqlSchemas() {
    return this._postgresqlSchemas;
  }
  public putPostgresqlSchemas(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas[] | cdktf.IResolvable) {
    this._postgresqlSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSchemasInput() {
    return this._postgresqlSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The PostgreSQL data type. Full data types list can be found here:
  * https://www.postgresql.org/docs/current/datatype.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable): any {
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
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktf.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable | undefined {
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
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
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
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * postgresql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_columns GoogleDatastreamStream#postgresql_columns}
  */
  readonly postgresqlColumns?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    postgresql_columns: cdktf.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform, true)(struct!.postgresqlColumns),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable): any {
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
    postgresql_columns: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform, true)(struct!.postgresqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._postgresqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlColumns = this._postgresqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._postgresqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._postgresqlColumns.internalValue = value.postgresqlColumns;
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

  // postgresql_columns - computed: false, optional: true, required: false
  private _postgresqlColumns = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList(this, "postgresql_columns", false);
  public get postgresqlColumns() {
    return this._postgresqlColumns;
  }
  public putPostgresqlColumns(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktf.IResolvable) {
    this._postgresqlColumns.internalValue = value;
  }
  public resetPostgresqlColumns() {
    this._postgresqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlColumnsInput() {
    return this._postgresqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * postgresql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_tables GoogleDatastreamStream#postgresql_tables}
  */
  readonly postgresqlTables?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    postgresql_tables: cdktf.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform, true)(struct!.postgresqlTables),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktf.IResolvable): any {
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
    postgresql_tables: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform, true)(struct!.postgresqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._postgresqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlTables = this._postgresqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._postgresqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._postgresqlTables.internalValue = value.postgresqlTables;
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

  // postgresql_tables - computed: false, optional: true, required: false
  private _postgresqlTables = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesList(this, "postgresql_tables", false);
  public get postgresqlTables() {
    return this._postgresqlTables;
  }
  public putPostgresqlTables(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktf.IResolvable) {
    this._postgresqlTables.internalValue = value;
  }
  public resetPostgresqlTables() {
    this._postgresqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlTablesInput() {
    return this._postgresqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects {
  /**
  * postgresql_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#postgresql_schemas GoogleDatastreamStream#postgresql_schemas}
  */
  readonly postgresqlSchemas: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    postgresql_schemas: cdktf.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToTerraform, true)(struct!.postgresqlSchemas),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    postgresql_schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToHclTerraform, true)(struct!.postgresqlSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgresqlSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSchemas = this._postgresqlSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postgresqlSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postgresqlSchemas.internalValue = value.postgresqlSchemas;
    }
  }

  // postgresql_schemas - computed: false, optional: false, required: true
  private _postgresqlSchemas = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasList(this, "postgresql_schemas", false);
  public get postgresqlSchemas() {
    return this._postgresqlSchemas;
  }
  public putPostgresqlSchemas(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas[] | cdktf.IResolvable) {
    this._postgresqlSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSchemasInput() {
    return this._postgresqlSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig {
  /**
  * Maximum number of concurrent backfill tasks. The number should be non
  * negative. If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#max_concurrent_backfill_tasks GoogleDatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * The name of the publication that includes the set of all tables
  * that are defined in the stream's include_objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#publication GoogleDatastreamStream#publication}
  */
  readonly publication: string;
  /**
  * The name of the logical replication slot that's configured with
  * the pgoutput plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#replication_slot GoogleDatastreamStream#replication_slot}
  */
  readonly replicationSlot: string;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_backfill_tasks: cdktf.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    publication: cdktf.stringToTerraform(struct!.publication),
    replication_slot: cdktf.stringToTerraform(struct!.replicationSlot),
    exclude_objects: googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig): any {
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
    publication: {
      value: cdktf.stringToHclTerraform(struct!.publication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_slot: {
      value: cdktf.stringToHclTerraform(struct!.replicationSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._publication !== undefined) {
      hasAnyValues = true;
      internalValueResult.publication = this._publication;
    }
    if (this._replicationSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSlot = this._replicationSlot;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._publication = undefined;
      this._replicationSlot = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._publication = value.publication;
      this._replicationSlot = value.replicationSlot;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
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

  // publication - computed: false, optional: false, required: true
  private _publication?: string; 
  public get publication() {
    return this.getStringAttribute('publication');
  }
  public set publication(value: string) {
    this._publication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicationInput() {
    return this._publication;
  }

  // replication_slot - computed: false, optional: false, required: true
  private _replicationSlot?: string; 
  public get replicationSlot() {
    return this.getStringAttribute('replication_slot');
  }
  public set replicationSlot(value: string) {
    this._replicationSlot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSlotInput() {
    return this._replicationSlot;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects) {
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
  private _includeObjects = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#name GoogleDatastreamStream#name}
  */
  readonly name?: string;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktf.IResolvable): any {
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

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects {
  /**
  * Name of object in Salesforce Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#object_name GoogleDatastreamStream#object_name}
  */
  readonly objectName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#fields GoogleDatastreamStream#fields}
  */
  readonly fields?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    fields: cdktf.listMapper(googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToTerraform, true)(struct!.fields),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._fields.internalValue = value.fields;
    }
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects {
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#objects GoogleDatastreamStream#objects}
  */
  readonly objects: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objects: cdktf.listMapper(googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToTerraform, true)(struct!.objects),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objects: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objects.internalValue = value.objects;
    }
  }

  // objects - computed: false, optional: false, required: true
  private _objects = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects[] | cdktf.IResolvable) {
    this._objects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#name GoogleDatastreamStream#name}
  */
  readonly name?: string;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktf.IResolvable): any {
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

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects {
  /**
  * Name of object in Salesforce Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#object_name GoogleDatastreamStream#object_name}
  */
  readonly objectName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#fields GoogleDatastreamStream#fields}
  */
  readonly fields?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    fields: cdktf.listMapper(googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToTerraform, true)(struct!.fields),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._fields.internalValue = value.fields;
    }
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects {
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#objects GoogleDatastreamStream#objects}
  */
  readonly objects: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objects: cdktf.listMapper(googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToTerraform, true)(struct!.objects),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objects: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objects.internalValue = value.objects;
    }
  }

  // objects - computed: false, optional: false, required: true
  private _objects = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects[] | cdktf.IResolvable) {
    this._objects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfig {
  /**
  * Salesforce objects polling interval. The interval at which new changes will be polled for each object. The duration must be between 5 minutes and 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#polling_interval GoogleDatastreamStream#polling_interval}
  */
  readonly pollingInterval: string;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    polling_interval: cdktf.stringToTerraform(struct!.pollingInterval),
    exclude_objects: googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    polling_interval: {
      value: cdktf.stringToHclTerraform(struct!.pollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingInterval = this._pollingInterval;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pollingInterval = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pollingInterval = value.pollingInterval;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // polling_interval - computed: false, optional: false, required: true
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects) {
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
  private _includeObjects = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
}

export function googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
  }
}


export function googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
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

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // is_primary_key - computed: true, optional: false, required: false
  public get isPrimaryKey() {
    return this.getBooleanAttribute('is_primary_key');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#columns GoogleDatastreamStream#columns}
  */
  readonly columns?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    columns: cdktf.listMapper(googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables | cdktf.IResolvable | undefined) {
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
  private _columns = new GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktf.IResolvable) {
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

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#tables GoogleDatastreamStream#tables}
  */
  readonly tables?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    tables: cdktf.listMapper(googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas | cdktf.IResolvable | undefined) {
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
  private _tables = new GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasTables[] | cdktf.IResolvable) {
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

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schemas GoogleDatastreamStream#schemas}
  */
  readonly schemas: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schemas: cdktf.listMapper(googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects | undefined) {
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
  private _schemas = new GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsSchemas[] | cdktf.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
}

export function googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
  }
}


export function googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
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

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // is_primary_key - computed: true, optional: false, required: false
  public get isPrimaryKey() {
    return this.getBooleanAttribute('is_primary_key');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#columns GoogleDatastreamStream#columns}
  */
  readonly columns?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    columns: cdktf.listMapper(googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables | cdktf.IResolvable | undefined) {
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
  private _columns = new GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktf.IResolvable) {
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

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#tables GoogleDatastreamStream#tables}
  */
  readonly tables?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
    tables: cdktf.listMapper(googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas | cdktf.IResolvable | undefined) {
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
  private _tables = new GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasTables[] | cdktf.IResolvable) {
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

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#schemas GoogleDatastreamStream#schemas}
  */
  readonly schemas: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas[] | cdktf.IResolvable;
}

export function googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schemas: cdktf.listMapper(googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schemas: {
      value: cdktf.listMapperHcl(googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects | undefined) {
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
  private _schemas = new GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsSchemas[] | cdktf.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSpannerSourceConfig {
  /**
  * Whether to use DataBoost for backfill queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#backfill_data_boost_enabled GoogleDatastreamStream#backfill_data_boost_enabled}
  */
  readonly backfillDataBoostEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Spanner change stream name to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#change_stream_name GoogleDatastreamStream#change_stream_name}
  */
  readonly changeStreamName?: string;
  /**
  * The FGAC role to use for Spanner queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#fgac_role GoogleDatastreamStream#fgac_role}
  */
  readonly fgacRole?: string;
  /**
  * Max concurrent backfill tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#max_concurrent_backfill_tasks GoogleDatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Max concurrent CDC tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#max_concurrent_cdc_tasks GoogleDatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * The RPC priority to use for Spanner queries. Possible values: ["LOW", "MEDIUM", "HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#spanner_rpc_priority GoogleDatastreamStream#spanner_rpc_priority}
  */
  readonly spannerRpcPriority?: string;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects;
}

export function googleDatastreamStreamSourceConfigSpannerSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigSpannerSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backfill_data_boost_enabled: cdktf.booleanToTerraform(struct!.backfillDataBoostEnabled),
    change_stream_name: cdktf.stringToTerraform(struct!.changeStreamName),
    fgac_role: cdktf.stringToTerraform(struct!.fgacRole),
    max_concurrent_backfill_tasks: cdktf.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktf.numberToTerraform(struct!.maxConcurrentCdcTasks),
    spanner_rpc_priority: cdktf.stringToTerraform(struct!.spannerRpcPriority),
    exclude_objects: googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function googleDatastreamStreamSourceConfigSpannerSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSpannerSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigSpannerSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backfill_data_boost_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.backfillDataBoostEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    change_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.changeStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fgac_role: {
      value: cdktf.stringToHclTerraform(struct!.fgacRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    spanner_rpc_priority: {
      value: cdktf.stringToHclTerraform(struct!.spannerRpcPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSpannerSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSpannerSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backfillDataBoostEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.backfillDataBoostEnabled = this._backfillDataBoostEnabled;
    }
    if (this._changeStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeStreamName = this._changeStreamName;
    }
    if (this._fgacRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.fgacRole = this._fgacRole;
    }
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._maxConcurrentCdcTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCdcTasks = this._maxConcurrentCdcTasks;
    }
    if (this._spannerRpcPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.spannerRpcPriority = this._spannerRpcPriority;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backfillDataBoostEnabled = undefined;
      this._changeStreamName = undefined;
      this._fgacRole = undefined;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._spannerRpcPriority = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backfillDataBoostEnabled = value.backfillDataBoostEnabled;
      this._changeStreamName = value.changeStreamName;
      this._fgacRole = value.fgacRole;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._spannerRpcPriority = value.spannerRpcPriority;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // backfill_data_boost_enabled - computed: false, optional: true, required: false
  private _backfillDataBoostEnabled?: boolean | cdktf.IResolvable; 
  public get backfillDataBoostEnabled() {
    return this.getBooleanAttribute('backfill_data_boost_enabled');
  }
  public set backfillDataBoostEnabled(value: boolean | cdktf.IResolvable) {
    this._backfillDataBoostEnabled = value;
  }
  public resetBackfillDataBoostEnabled() {
    this._backfillDataBoostEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillDataBoostEnabledInput() {
    return this._backfillDataBoostEnabled;
  }

  // change_stream_name - computed: false, optional: true, required: false
  private _changeStreamName?: string; 
  public get changeStreamName() {
    return this.getStringAttribute('change_stream_name');
  }
  public set changeStreamName(value: string) {
    this._changeStreamName = value;
  }
  public resetChangeStreamName() {
    this._changeStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeStreamNameInput() {
    return this._changeStreamName;
  }

  // fgac_role - computed: false, optional: true, required: false
  private _fgacRole?: string; 
  public get fgacRole() {
    return this.getStringAttribute('fgac_role');
  }
  public set fgacRole(value: string) {
    this._fgacRole = value;
  }
  public resetFgacRole() {
    this._fgacRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgacRoleInput() {
    return this._fgacRole;
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

  // spanner_rpc_priority - computed: false, optional: true, required: false
  private _spannerRpcPriority?: string; 
  public get spannerRpcPriority() {
    return this.getStringAttribute('spanner_rpc_priority');
  }
  public set spannerRpcPriority(value: string) {
    this._spannerRpcPriority = value;
  }
  public resetSpannerRpcPriority() {
    this._spannerRpcPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerRpcPriorityInput() {
    return this._spannerRpcPriority;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigExcludeObjects) {
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
  private _includeObjects = new GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigSpannerSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables {
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The SQL Server data type. Full data types list can be found here:
  * https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktf.IResolvable): any {
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

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktf.IResolvable | undefined) {
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

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
