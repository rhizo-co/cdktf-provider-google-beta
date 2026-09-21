// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleSqlDatabaseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the BackupDR backup to restore from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#backupdr_backup GoogleSqlDatabaseInstance#backupdr_backup}
  */
  readonly backupdrBackup?: string;
  /**
  * The MySQL, PostgreSQL or SQL Server version to use. Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, MYSQL_8_4, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, POSTGRES_16, POSTGRES_17, POSTGRES_18, SQLSERVER_2022_STANDARD, SQLSERVER_2022_ENTERPRISE, SQLSERVER_2022_EXPRESS, SQLSERVER_2022_WEB, SQLSERVER_2025_STANDARD, SQLSERVER_2025_ENTERPRISE, SQLSERVER_2025_EXPRESS, SQLSERVER_2025_WEB. Database Version Policies includes an up-to-date reference of supported versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#database_version GoogleSqlDatabaseInstance#database_version}
  */
  readonly databaseVersion: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#deletion_policy GoogleSqlDatabaseInstance#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Used to block Terraform from deleting a SQL Instance. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#deletion_protection GoogleSqlDatabaseInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#encryption_key_name GoogleSqlDatabaseInstance#encryption_key_name}
  */
  readonly encryptionKeyName?: string;
  /**
  * Whether to enforce the new SQL network architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#enforce_new_sql_network_architecture GoogleSqlDatabaseInstance#enforce_new_sql_network_architecture}
  */
  readonly enforceNewSqlNetworkArchitecture?: boolean | cdktf.IResolvable;
  /**
  * The description of final backup if instance enable create final backup during instance deletion. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#final_backup_description GoogleSqlDatabaseInstance#final_backup_description}
  */
  readonly finalBackupDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#id GoogleSqlDatabaseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When this parameter is set to true, Cloud SQL instances can perform in-place major version upgrades of read replicas along with the primary instance when 'database_version' is updated. This is an input-only field that is not persisted in the API and only takes effect during a major version upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#include_replicas_for_major_version_upgrade GoogleSqlDatabaseInstance#include_replicas_for_major_version_upgrade}
  */
  readonly includeReplicasForMajorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * The type of the instance. See https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances#SqlInstanceType for supported values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#instance_type GoogleSqlDatabaseInstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Maintenance version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#maintenance_version GoogleSqlDatabaseInstance#maintenance_version}
  */
  readonly maintenanceVersion?: string;
  /**
  * The name of the instance that will act as the master in the replication setup. Note, this requires the master to have binary_log_enabled set, as well as existing backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#master_instance_name GoogleSqlDatabaseInstance#master_instance_name}
  */
  readonly masterInstanceName?: string;
  /**
  * The name of the instance. If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#name GoogleSqlDatabaseInstance#name}
  */
  readonly name?: string;
  /**
  * For a read pool instance, the number of nodes in the read pool. For read pools with auto scaling enabled, this field is read only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#node_count GoogleSqlDatabaseInstance#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#project GoogleSqlDatabaseInstance#project}
  */
  readonly project?: string;
  /**
  * The region the instance will sit in. Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#region GoogleSqlDatabaseInstance#region}
  */
  readonly region?: string;
  /**
  * The replicas of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#replica_names GoogleSqlDatabaseInstance#replica_names}
  */
  readonly replicaNames?: string[];
  /**
  * Initial root password. Required for MS SQL Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#root_password GoogleSqlDatabaseInstance#root_password}
  */
  readonly rootPassword?: string;
  /**
  * Initial root password. Required for MS SQL Server.
  * 				Note: This property is write-only and will not be read from the API. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#root_password_wo GoogleSqlDatabaseInstance#root_password_wo}
  */
  readonly rootPasswordWo?: string;
  /**
  * Triggers update of root_password_wo write-only. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#root_password_wo_version GoogleSqlDatabaseInstance#root_password_wo_version}
  */
  readonly rootPasswordWoVersion?: string;
  /**
  * When set to true, Cloud SQL instances can switch storing point-in-time recovery transaction logs from a data disk to Cloud Storage, freeing up data disk space and enabling longer retention windows. This is an input-only field that is not persisted in the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#switch_transaction_logs_to_cloud_storage_enabled GoogleSqlDatabaseInstance#switch_transaction_logs_to_cloud_storage_enabled}
  */
  readonly switchTransactionLogsToCloudStorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * clone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#clone GoogleSqlDatabaseInstance#clone}
  */
  readonly clone?: GoogleSqlDatabaseInstanceClone;
  /**
  * point_in_time_restore_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#point_in_time_restore_context GoogleSqlDatabaseInstance#point_in_time_restore_context}
  */
  readonly pointInTimeRestoreContext?: GoogleSqlDatabaseInstancePointInTimeRestoreContext;
  /**
  * replica_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#replica_configuration GoogleSqlDatabaseInstance#replica_configuration}
  */
  readonly replicaConfiguration?: GoogleSqlDatabaseInstanceReplicaConfiguration;
  /**
  * replication_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#replication_cluster GoogleSqlDatabaseInstance#replication_cluster}
  */
  readonly replicationCluster?: GoogleSqlDatabaseInstanceReplicationCluster;
  /**
  * restore_backup_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#restore_backup_context GoogleSqlDatabaseInstance#restore_backup_context}
  */
  readonly restoreBackupContext?: GoogleSqlDatabaseInstanceRestoreBackupContext;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#settings GoogleSqlDatabaseInstance#settings}
  */
  readonly settings?: GoogleSqlDatabaseInstanceSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#timeouts GoogleSqlDatabaseInstance#timeouts}
  */
  readonly timeouts?: GoogleSqlDatabaseInstanceTimeouts;
}
export interface GoogleSqlDatabaseInstanceDnsNames {
}

export function googleSqlDatabaseInstanceDnsNamesToTerraform(struct?: GoogleSqlDatabaseInstanceDnsNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleSqlDatabaseInstanceDnsNamesToHclTerraform(struct?: GoogleSqlDatabaseInstanceDnsNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleSqlDatabaseInstanceDnsNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSqlDatabaseInstanceDnsNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceDnsNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // dns_scope - computed: true, optional: false, required: false
  public get dnsScope() {
    return this.getStringAttribute('dns_scope');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GoogleSqlDatabaseInstanceDnsNamesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleSqlDatabaseInstanceDnsNamesOutputReference {
    return new GoogleSqlDatabaseInstanceDnsNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSqlDatabaseInstanceIpAddress {
}

export function googleSqlDatabaseInstanceIpAddressToTerraform(struct?: GoogleSqlDatabaseInstanceIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleSqlDatabaseInstanceIpAddressToHclTerraform(struct?: GoogleSqlDatabaseInstanceIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleSqlDatabaseInstanceIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSqlDatabaseInstanceIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // time_to_retire - computed: true, optional: false, required: false
  public get timeToRetire() {
    return this.getStringAttribute('time_to_retire');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleSqlDatabaseInstanceIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): GoogleSqlDatabaseInstanceIpAddressOutputReference {
    return new GoogleSqlDatabaseInstanceIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSqlDatabaseInstanceServerCaCert {
}

export function googleSqlDatabaseInstanceServerCaCertToTerraform(struct?: GoogleSqlDatabaseInstanceServerCaCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleSqlDatabaseInstanceServerCaCertToHclTerraform(struct?: GoogleSqlDatabaseInstanceServerCaCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleSqlDatabaseInstanceServerCaCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSqlDatabaseInstanceServerCaCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceServerCaCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }
}

export class GoogleSqlDatabaseInstanceServerCaCertList extends cdktf.ComplexList {

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
  public get(index: number): GoogleSqlDatabaseInstanceServerCaCertOutputReference {
    return new GoogleSqlDatabaseInstanceServerCaCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSqlDatabaseInstanceClone {
  /**
  * The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#allocated_ip_range GoogleSqlDatabaseInstance#allocated_ip_range}
  */
  readonly allocatedIpRange?: string;
  /**
  * (SQL Server only, use with point_in_time) clone only the specified databases from the source instance. Clone all databases if empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#database_names GoogleSqlDatabaseInstance#database_names}
  */
  readonly databaseNames?: string[];
  /**
  * The timestamp of the point in time that should be restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#point_in_time GoogleSqlDatabaseInstance#point_in_time}
  */
  readonly pointInTime?: string;
  /**
  * (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. If no zone is specified, clone to the same zone as the source instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#preferred_zone GoogleSqlDatabaseInstance#preferred_zone}
  */
  readonly preferredZone?: string;
  /**
  * The timestamp of when the source instance was deleted for a clone from a deleted instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#source_instance_deletion_time GoogleSqlDatabaseInstance#source_instance_deletion_time}
  */
  readonly sourceInstanceDeletionTime?: string;
  /**
  * The name of the instance from which the point in time should be restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#source_instance_name GoogleSqlDatabaseInstance#source_instance_name}
  */
  readonly sourceInstanceName: string;
  /**
  * The project ID of the source project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#source_project GoogleSqlDatabaseInstance#source_project}
  */
  readonly sourceProject?: string;
}

export function googleSqlDatabaseInstanceCloneToTerraform(struct?: GoogleSqlDatabaseInstanceCloneOutputReference | GoogleSqlDatabaseInstanceClone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_ip_range: cdktf.stringToTerraform(struct!.allocatedIpRange),
    database_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databaseNames),
    point_in_time: cdktf.stringToTerraform(struct!.pointInTime),
    preferred_zone: cdktf.stringToTerraform(struct!.preferredZone),
    source_instance_deletion_time: cdktf.stringToTerraform(struct!.sourceInstanceDeletionTime),
    source_instance_name: cdktf.stringToTerraform(struct!.sourceInstanceName),
    source_project: cdktf.stringToTerraform(struct!.sourceProject),
  }
}


export function googleSqlDatabaseInstanceCloneToHclTerraform(struct?: GoogleSqlDatabaseInstanceCloneOutputReference | GoogleSqlDatabaseInstanceClone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.allocatedIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databaseNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    point_in_time: {
      value: cdktf.stringToHclTerraform(struct!.pointInTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_zone: {
      value: cdktf.stringToHclTerraform(struct!.preferredZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_instance_deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.sourceInstanceDeletionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_instance_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_project: {
      value: cdktf.stringToHclTerraform(struct!.sourceProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceCloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceClone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIpRange = this._allocatedIpRange;
    }
    if (this._databaseNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseNames = this._databaseNames;
    }
    if (this._pointInTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTime = this._pointInTime;
    }
    if (this._preferredZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredZone = this._preferredZone;
    }
    if (this._sourceInstanceDeletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInstanceDeletionTime = this._sourceInstanceDeletionTime;
    }
    if (this._sourceInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInstanceName = this._sourceInstanceName;
    }
    if (this._sourceProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProject = this._sourceProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceClone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocatedIpRange = undefined;
      this._databaseNames = undefined;
      this._pointInTime = undefined;
      this._preferredZone = undefined;
      this._sourceInstanceDeletionTime = undefined;
      this._sourceInstanceName = undefined;
      this._sourceProject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocatedIpRange = value.allocatedIpRange;
      this._databaseNames = value.databaseNames;
      this._pointInTime = value.pointInTime;
      this._preferredZone = value.preferredZone;
      this._sourceInstanceDeletionTime = value.sourceInstanceDeletionTime;
      this._sourceInstanceName = value.sourceInstanceName;
      this._sourceProject = value.sourceProject;
    }
  }

  // allocated_ip_range - computed: false, optional: true, required: false
  private _allocatedIpRange?: string; 
  public get allocatedIpRange() {
    return this.getStringAttribute('allocated_ip_range');
  }
  public set allocatedIpRange(value: string) {
    this._allocatedIpRange = value;
  }
  public resetAllocatedIpRange() {
    this._allocatedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpRangeInput() {
    return this._allocatedIpRange;
  }

  // database_names - computed: false, optional: true, required: false
  private _databaseNames?: string[]; 
  public get databaseNames() {
    return this.getListAttribute('database_names');
  }
  public set databaseNames(value: string[]) {
    this._databaseNames = value;
  }
  public resetDatabaseNames() {
    this._databaseNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNamesInput() {
    return this._databaseNames;
  }

  // point_in_time - computed: false, optional: true, required: false
  private _pointInTime?: string; 
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }
  public set pointInTime(value: string) {
    this._pointInTime = value;
  }
  public resetPointInTime() {
    this._pointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeInput() {
    return this._pointInTime;
  }

  // preferred_zone - computed: false, optional: true, required: false
  private _preferredZone?: string; 
  public get preferredZone() {
    return this.getStringAttribute('preferred_zone');
  }
  public set preferredZone(value: string) {
    this._preferredZone = value;
  }
  public resetPreferredZone() {
    this._preferredZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredZoneInput() {
    return this._preferredZone;
  }

  // source_instance_deletion_time - computed: false, optional: true, required: false
  private _sourceInstanceDeletionTime?: string; 
  public get sourceInstanceDeletionTime() {
    return this.getStringAttribute('source_instance_deletion_time');
  }
  public set sourceInstanceDeletionTime(value: string) {
    this._sourceInstanceDeletionTime = value;
  }
  public resetSourceInstanceDeletionTime() {
    this._sourceInstanceDeletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceDeletionTimeInput() {
    return this._sourceInstanceDeletionTime;
  }

  // source_instance_name - computed: false, optional: false, required: true
  private _sourceInstanceName?: string; 
  public get sourceInstanceName() {
    return this.getStringAttribute('source_instance_name');
  }
  public set sourceInstanceName(value: string) {
    this._sourceInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceNameInput() {
    return this._sourceInstanceName;
  }

  // source_project - computed: false, optional: true, required: false
  private _sourceProject?: string; 
  public get sourceProject() {
    return this.getStringAttribute('source_project');
  }
  public set sourceProject(value: string) {
    this._sourceProject = value;
  }
  public resetSourceProject() {
    this._sourceProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProjectInput() {
    return this._sourceProject;
  }
}
export interface GoogleSqlDatabaseInstancePointInTimeRestoreContext {
  /**
  * The name of the allocated IP range for the internal IP Cloud SQL instance. For example: "google-managed-services-default". If you set this, then Cloud SQL creates the IP address for the cloned instance in the allocated range. This range must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035) standards. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#allocated_ip_range GoogleSqlDatabaseInstance#allocated_ip_range}
  */
  readonly allocatedIpRange?: string;
  /**
  * The Google Cloud Backup and Disaster Recovery Datasource URI. For example: "projects/my-project/locations/us-central1/datasources/my-datasource".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#datasource GoogleSqlDatabaseInstance#datasource}
  */
  readonly datasource: string;
  /**
  * The date and time to which you want to restore the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#point_in_time GoogleSqlDatabaseInstance#point_in_time}
  */
  readonly pointInTime?: string;
  /**
  * Point-in-time recovery of an instance to the specified zone. If no zone is specified, then clone to the same primary zone as the source instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#preferred_zone GoogleSqlDatabaseInstance#preferred_zone}
  */
  readonly preferredZone?: string;
  /**
  * The region of the target instance to restore to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#region GoogleSqlDatabaseInstance#region}
  */
  readonly region?: string;
  /**
  * The name of the target instance to restore to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#target_instance GoogleSqlDatabaseInstance#target_instance}
  */
  readonly targetInstance?: string;
}

export function googleSqlDatabaseInstancePointInTimeRestoreContextToTerraform(struct?: GoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference | GoogleSqlDatabaseInstancePointInTimeRestoreContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_ip_range: cdktf.stringToTerraform(struct!.allocatedIpRange),
    datasource: cdktf.stringToTerraform(struct!.datasource),
    point_in_time: cdktf.stringToTerraform(struct!.pointInTime),
    preferred_zone: cdktf.stringToTerraform(struct!.preferredZone),
    region: cdktf.stringToTerraform(struct!.region),
    target_instance: cdktf.stringToTerraform(struct!.targetInstance),
  }
}


export function googleSqlDatabaseInstancePointInTimeRestoreContextToHclTerraform(struct?: GoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference | GoogleSqlDatabaseInstancePointInTimeRestoreContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.allocatedIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point_in_time: {
      value: cdktf.stringToHclTerraform(struct!.pointInTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_zone: {
      value: cdktf.stringToHclTerraform(struct!.preferredZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_instance: {
      value: cdktf.stringToHclTerraform(struct!.targetInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstancePointInTimeRestoreContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIpRange = this._allocatedIpRange;
    }
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._pointInTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTime = this._pointInTime;
    }
    if (this._preferredZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredZone = this._preferredZone;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._targetInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInstance = this._targetInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstancePointInTimeRestoreContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocatedIpRange = undefined;
      this._datasource = undefined;
      this._pointInTime = undefined;
      this._preferredZone = undefined;
      this._region = undefined;
      this._targetInstance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocatedIpRange = value.allocatedIpRange;
      this._datasource = value.datasource;
      this._pointInTime = value.pointInTime;
      this._preferredZone = value.preferredZone;
      this._region = value.region;
      this._targetInstance = value.targetInstance;
    }
  }

  // allocated_ip_range - computed: false, optional: true, required: false
  private _allocatedIpRange?: string; 
  public get allocatedIpRange() {
    return this.getStringAttribute('allocated_ip_range');
  }
  public set allocatedIpRange(value: string) {
    this._allocatedIpRange = value;
  }
  public resetAllocatedIpRange() {
    this._allocatedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpRangeInput() {
    return this._allocatedIpRange;
  }

  // datasource - computed: false, optional: false, required: true
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // point_in_time - computed: false, optional: true, required: false
  private _pointInTime?: string; 
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }
  public set pointInTime(value: string) {
    this._pointInTime = value;
  }
  public resetPointInTime() {
    this._pointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeInput() {
    return this._pointInTime;
  }

  // preferred_zone - computed: false, optional: true, required: false
  private _preferredZone?: string; 
  public get preferredZone() {
    return this.getStringAttribute('preferred_zone');
  }
  public set preferredZone(value: string) {
    this._preferredZone = value;
  }
  public resetPreferredZone() {
    this._preferredZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredZoneInput() {
    return this._preferredZone;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // target_instance - computed: false, optional: true, required: false
  private _targetInstance?: string; 
  public get targetInstance() {
    return this.getStringAttribute('target_instance');
  }
  public set targetInstance(value: string) {
    this._targetInstance = value;
  }
  public resetTargetInstance() {
    this._targetInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInstanceInput() {
    return this._targetInstance;
  }
}
export interface GoogleSqlDatabaseInstanceReplicaConfiguration {
  /**
  * PEM representation of the trusted CA's x509 certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#ca_certificate GoogleSqlDatabaseInstance#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Specifies if a SQL Server replica is a cascadable replica. A cascadable replica is a SQL Server cross region replica that supports replica(s) under it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#cascadable_replica GoogleSqlDatabaseInstance#cascadable_replica}
  */
  readonly cascadableReplica?: boolean | cdktf.IResolvable;
  /**
  * PEM representation of the replica's x509 certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#client_certificate GoogleSqlDatabaseInstance#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#client_key GoogleSqlDatabaseInstance#client_key}
  */
  readonly clientKey?: string;
  /**
  * The number of seconds between connect retries. MySQL's default is 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#connect_retry_interval GoogleSqlDatabaseInstance#connect_retry_interval}
  */
  readonly connectRetryInterval?: number;
  /**
  * Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#dump_file_path GoogleSqlDatabaseInstance#dump_file_path}
  */
  readonly dumpFilePath?: string;
  /**
  * Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#failover_target GoogleSqlDatabaseInstance#failover_target}
  */
  readonly failoverTarget?: boolean | cdktf.IResolvable;
  /**
  * Time in ms between replication heartbeats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#master_heartbeat_period GoogleSqlDatabaseInstance#master_heartbeat_period}
  */
  readonly masterHeartbeatPeriod?: number;
  /**
  * Password for the replication connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#password GoogleSqlDatabaseInstance#password}
  */
  readonly password?: string;
  /**
  * Permissible ciphers for use in SSL encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#ssl_cipher GoogleSqlDatabaseInstance#ssl_cipher}
  */
  readonly sslCipher?: string;
  /**
  * Username for replication connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#username GoogleSqlDatabaseInstance#username}
  */
  readonly username?: string;
  /**
  * True if the master's common name value is checked during the SSL handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#verify_server_certificate GoogleSqlDatabaseInstance#verify_server_certificate}
  */
  readonly verifyServerCertificate?: boolean | cdktf.IResolvable;
}

export function googleSqlDatabaseInstanceReplicaConfigurationToTerraform(struct?: GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference | GoogleSqlDatabaseInstanceReplicaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    cascadable_replica: cdktf.booleanToTerraform(struct!.cascadableReplica),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    connect_retry_interval: cdktf.numberToTerraform(struct!.connectRetryInterval),
    dump_file_path: cdktf.stringToTerraform(struct!.dumpFilePath),
    failover_target: cdktf.booleanToTerraform(struct!.failoverTarget),
    master_heartbeat_period: cdktf.numberToTerraform(struct!.masterHeartbeatPeriod),
    password: cdktf.stringToTerraform(struct!.password),
    ssl_cipher: cdktf.stringToTerraform(struct!.sslCipher),
    username: cdktf.stringToTerraform(struct!.username),
    verify_server_certificate: cdktf.booleanToTerraform(struct!.verifyServerCertificate),
  }
}


export function googleSqlDatabaseInstanceReplicaConfigurationToHclTerraform(struct?: GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference | GoogleSqlDatabaseInstanceReplicaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cascadable_replica: {
      value: cdktf.booleanToHclTerraform(struct!.cascadableReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.connectRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dump_file_path: {
      value: cdktf.stringToHclTerraform(struct!.dumpFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_target: {
      value: cdktf.booleanToHclTerraform(struct!.failoverTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_heartbeat_period: {
      value: cdktf.numberToHclTerraform(struct!.masterHeartbeatPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cipher: {
      value: cdktf.stringToHclTerraform(struct!.sslCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_server_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.verifyServerCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceReplicaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._cascadableReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.cascadableReplica = this._cascadableReplica;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._connectRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectRetryInterval = this._connectRetryInterval;
    }
    if (this._dumpFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dumpFilePath = this._dumpFilePath;
    }
    if (this._failoverTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverTarget = this._failoverTarget;
    }
    if (this._masterHeartbeatPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterHeartbeatPeriod = this._masterHeartbeatPeriod;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCipher = this._sslCipher;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._verifyServerCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyServerCertificate = this._verifyServerCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceReplicaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._cascadableReplica = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
      this._connectRetryInterval = undefined;
      this._dumpFilePath = undefined;
      this._failoverTarget = undefined;
      this._masterHeartbeatPeriod = undefined;
      this._password = undefined;
      this._sslCipher = undefined;
      this._username = undefined;
      this._verifyServerCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._cascadableReplica = value.cascadableReplica;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
      this._connectRetryInterval = value.connectRetryInterval;
      this._dumpFilePath = value.dumpFilePath;
      this._failoverTarget = value.failoverTarget;
      this._masterHeartbeatPeriod = value.masterHeartbeatPeriod;
      this._password = value.password;
      this._sslCipher = value.sslCipher;
      this._username = value.username;
      this._verifyServerCertificate = value.verifyServerCertificate;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // cascadable_replica - computed: false, optional: true, required: false
  private _cascadableReplica?: boolean | cdktf.IResolvable; 
  public get cascadableReplica() {
    return this.getBooleanAttribute('cascadable_replica');
  }
  public set cascadableReplica(value: boolean | cdktf.IResolvable) {
    this._cascadableReplica = value;
  }
  public resetCascadableReplica() {
    this._cascadableReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadableReplicaInput() {
    return this._cascadableReplica;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // connect_retry_interval - computed: false, optional: true, required: false
  private _connectRetryInterval?: number; 
  public get connectRetryInterval() {
    return this.getNumberAttribute('connect_retry_interval');
  }
  public set connectRetryInterval(value: number) {
    this._connectRetryInterval = value;
  }
  public resetConnectRetryInterval() {
    this._connectRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectRetryIntervalInput() {
    return this._connectRetryInterval;
  }

  // dump_file_path - computed: false, optional: true, required: false
  private _dumpFilePath?: string; 
  public get dumpFilePath() {
    return this.getStringAttribute('dump_file_path');
  }
  public set dumpFilePath(value: string) {
    this._dumpFilePath = value;
  }
  public resetDumpFilePath() {
    this._dumpFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpFilePathInput() {
    return this._dumpFilePath;
  }

  // failover_target - computed: false, optional: true, required: false
  private _failoverTarget?: boolean | cdktf.IResolvable; 
  public get failoverTarget() {
    return this.getBooleanAttribute('failover_target');
  }
  public set failoverTarget(value: boolean | cdktf.IResolvable) {
    this._failoverTarget = value;
  }
  public resetFailoverTarget() {
    this._failoverTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTargetInput() {
    return this._failoverTarget;
  }

  // master_heartbeat_period - computed: false, optional: true, required: false
  private _masterHeartbeatPeriod?: number; 
  public get masterHeartbeatPeriod() {
    return this.getNumberAttribute('master_heartbeat_period');
  }
  public set masterHeartbeatPeriod(value: number) {
    this._masterHeartbeatPeriod = value;
  }
  public resetMasterHeartbeatPeriod() {
    this._masterHeartbeatPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterHeartbeatPeriodInput() {
    return this._masterHeartbeatPeriod;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssl_cipher - computed: false, optional: true, required: false
  private _sslCipher?: string; 
  public get sslCipher() {
    return this.getStringAttribute('ssl_cipher');
  }
  public set sslCipher(value: string) {
    this._sslCipher = value;
  }
  public resetSslCipher() {
    this._sslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherInput() {
    return this._sslCipher;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_server_certificate - computed: false, optional: true, required: false
  private _verifyServerCertificate?: boolean | cdktf.IResolvable; 
  public get verifyServerCertificate() {
    return this.getBooleanAttribute('verify_server_certificate');
  }
  public set verifyServerCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyServerCertificate = value;
  }
  public resetVerifyServerCertificate() {
    this._verifyServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyServerCertificateInput() {
    return this._verifyServerCertificate;
  }
}
export interface GoogleSqlDatabaseInstanceReplicationCluster {
  /**
  * If the instance is a primary instance, then this field identifies the disaster recovery (DR) replica. The standard format of this field is "your-project:your-instance". You can also set this field to "your-instance", but cloud SQL backend will convert it to the aforementioned standard format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#failover_dr_replica_name GoogleSqlDatabaseInstance#failover_dr_replica_name}
  */
  readonly failoverDrReplicaName?: string;
  /**
  * If set, this field indicates this instance has a private service access (PSA) DNS endpoint that is pointing to the primary instance of the cluster. If this instance is the primary, then the DNS endpoint points to this instance. After a switchover or replica failover operation, this DNS endpoint points to the promoted instance. This is a read-only field, returned to the user as information. This field can exist even if a standalone instance doesn't have a DR replica yet or the DR replica is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#psa_write_endpoint GoogleSqlDatabaseInstance#psa_write_endpoint}
  */
  readonly psaWriteEndpoint?: string;
}

export function googleSqlDatabaseInstanceReplicationClusterToTerraform(struct?: GoogleSqlDatabaseInstanceReplicationClusterOutputReference | GoogleSqlDatabaseInstanceReplicationCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_dr_replica_name: cdktf.stringToTerraform(struct!.failoverDrReplicaName),
    psa_write_endpoint: cdktf.stringToTerraform(struct!.psaWriteEndpoint),
  }
}


export function googleSqlDatabaseInstanceReplicationClusterToHclTerraform(struct?: GoogleSqlDatabaseInstanceReplicationClusterOutputReference | GoogleSqlDatabaseInstanceReplicationCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_dr_replica_name: {
      value: cdktf.stringToHclTerraform(struct!.failoverDrReplicaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psa_write_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.psaWriteEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceReplicationClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceReplicationCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverDrReplicaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverDrReplicaName = this._failoverDrReplicaName;
    }
    if (this._psaWriteEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.psaWriteEndpoint = this._psaWriteEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceReplicationCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failoverDrReplicaName = undefined;
      this._psaWriteEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failoverDrReplicaName = value.failoverDrReplicaName;
      this._psaWriteEndpoint = value.psaWriteEndpoint;
    }
  }

  // dr_replica - computed: true, optional: false, required: false
  public get drReplica() {
    return this.getBooleanAttribute('dr_replica');
  }

  // failover_dr_replica_name - computed: false, optional: true, required: false
  private _failoverDrReplicaName?: string; 
  public get failoverDrReplicaName() {
    return this.getStringAttribute('failover_dr_replica_name');
  }
  public set failoverDrReplicaName(value: string) {
    this._failoverDrReplicaName = value;
  }
  public resetFailoverDrReplicaName() {
    this._failoverDrReplicaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverDrReplicaNameInput() {
    return this._failoverDrReplicaName;
  }

  // psa_write_endpoint - computed: true, optional: true, required: false
  private _psaWriteEndpoint?: string; 
  public get psaWriteEndpoint() {
    return this.getStringAttribute('psa_write_endpoint');
  }
  public set psaWriteEndpoint(value: string) {
    this._psaWriteEndpoint = value;
  }
  public resetPsaWriteEndpoint() {
    this._psaWriteEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psaWriteEndpointInput() {
    return this._psaWriteEndpoint;
  }
}
export interface GoogleSqlDatabaseInstanceRestoreBackupContext {
  /**
  * The ID of the backup run to restore from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#backup_run_id GoogleSqlDatabaseInstance#backup_run_id}
  */
  readonly backupRunId: number;
  /**
  * The ID of the instance that the backup was taken from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#instance_id GoogleSqlDatabaseInstance#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The full project ID of the source instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#project GoogleSqlDatabaseInstance#project}
  */
  readonly project?: string;
}

export function googleSqlDatabaseInstanceRestoreBackupContextToTerraform(struct?: GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference | GoogleSqlDatabaseInstanceRestoreBackupContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_run_id: cdktf.numberToTerraform(struct!.backupRunId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function googleSqlDatabaseInstanceRestoreBackupContextToHclTerraform(struct?: GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference | GoogleSqlDatabaseInstanceRestoreBackupContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_run_id: {
      value: cdktf.numberToHclTerraform(struct!.backupRunId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceRestoreBackupContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRunId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRunId = this._backupRunId;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceRestoreBackupContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupRunId = undefined;
      this._instanceId = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupRunId = value.backupRunId;
      this._instanceId = value.instanceId;
      this._project = value.project;
    }
  }

  // backup_run_id - computed: false, optional: false, required: true
  private _backupRunId?: number; 
  public get backupRunId() {
    return this.getNumberAttribute('backup_run_id');
  }
  public set backupRunId(value: number) {
    this._backupRunId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRunIdInput() {
    return this._backupRunId;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // project - computed: false, optional: true, required: false
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
}
export interface GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig {
  /**
  * The secret manager key storing the administrator credential. (e.g., projects/{project}/secrets/{secret}).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#admin_credential_secret_name GoogleSqlDatabaseInstance#admin_credential_secret_name}
  */
  readonly adminCredentialSecretName?: string;
  /**
  * Domain controller IPv4 addresses used to bootstrap Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#dns_servers GoogleSqlDatabaseInstance#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Domain name of the Active Directory for SQL Server (e.g., mydomain.com).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#domain GoogleSqlDatabaseInstance#domain}
  */
  readonly domain: string;
  /**
  * The mode of the Active Directory configuration. Can be MANAGED_ACTIVE_DIRECTORY or CUSTOMER_MANAGED_ACTIVE_DIRECTORY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#mode GoogleSqlDatabaseInstance#mode}
  */
  readonly mode?: string;
  /**
  * The organizational unit distinguished name. This is the full hierarchical path to the organizational unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#organizational_unit GoogleSqlDatabaseInstance#organizational_unit}
  */
  readonly organizationalUnit?: string;
}

export function googleSqlDatabaseInstanceSettingsActiveDirectoryConfigToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference | GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_credential_secret_name: cdktf.stringToTerraform(struct!.adminCredentialSecretName),
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    domain: cdktf.stringToTerraform(struct!.domain),
    mode: cdktf.stringToTerraform(struct!.mode),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
  }
}


export function googleSqlDatabaseInstanceSettingsActiveDirectoryConfigToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference | GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_credential_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.adminCredentialSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminCredentialSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminCredentialSecretName = this._adminCredentialSecretName;
    }
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminCredentialSecretName = undefined;
      this._dnsServers = undefined;
      this._domain = undefined;
      this._mode = undefined;
      this._organizationalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminCredentialSecretName = value.adminCredentialSecretName;
      this._dnsServers = value.dnsServers;
      this._domain = value.domain;
      this._mode = value.mode;
      this._organizationalUnit = value.organizationalUnit;
    }
  }

  // admin_credential_secret_name - computed: false, optional: true, required: false
  private _adminCredentialSecretName?: string; 
  public get adminCredentialSecretName() {
    return this.getStringAttribute('admin_credential_secret_name');
  }
  public set adminCredentialSecretName(value: string) {
    this._adminCredentialSecretName = value;
  }
  public resetAdminCredentialSecretName() {
    this._adminCredentialSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCredentialSecretNameInput() {
    return this._adminCredentialSecretName;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures {
  /**
  * The number of threads per physical core. Can be 1 or 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#threads_per_core GoogleSqlDatabaseInstance#threads_per_core}
  */
  readonly threadsPerCore?: number;
}

export function googleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference | GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}


export function googleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference | GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // threads_per_core - computed: false, optional: true, required: false
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  public resetThreadsPerCore() {
    this._threadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings {
  /**
  * Number of backups to retain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#retained_backups GoogleSqlDatabaseInstance#retained_backups}
  */
  readonly retainedBackups: number;
  /**
  * The unit that 'retainedBackups' represents. Defaults to COUNT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#retention_unit GoogleSqlDatabaseInstance#retention_unit}
  */
  readonly retentionUnit?: string;
}

export function googleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference | GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retained_backups: cdktf.numberToTerraform(struct!.retainedBackups),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
  }
}


export function googleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference | GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retained_backups: {
      value: cdktf.numberToHclTerraform(struct!.retainedBackups),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_unit: {
      value: cdktf.stringToHclTerraform(struct!.retentionUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainedBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainedBackups = this._retainedBackups;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retainedBackups = undefined;
      this._retentionUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retainedBackups = value.retainedBackups;
      this._retentionUnit = value.retentionUnit;
    }
  }

  // retained_backups - computed: false, optional: false, required: true
  private _retainedBackups?: number; 
  public get retainedBackups() {
    return this.getNumberAttribute('retained_backups');
  }
  public set retainedBackups(value: number) {
    this._retainedBackups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainedBackupsInput() {
    return this._retainedBackups;
  }

  // retention_unit - computed: false, optional: true, required: false
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  public resetRetentionUnit() {
    this._retentionUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsBackupConfiguration {
  /**
  * True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#binary_log_enabled GoogleSqlDatabaseInstance#binary_log_enabled}
  */
  readonly binaryLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * True if backup configuration is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#enabled GoogleSqlDatabaseInstance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Location of the backup configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#location GoogleSqlDatabaseInstance#location}
  */
  readonly location?: string;
  /**
  * True if Point-in-time recovery is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#point_in_time_recovery_enabled GoogleSqlDatabaseInstance#point_in_time_recovery_enabled}
  */
  readonly pointInTimeRecoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * HH:MM format time indicating when backup configuration starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#start_time GoogleSqlDatabaseInstance#start_time}
  */
  readonly startTime?: string;
  /**
  * The number of days of transaction logs we retain for point in time restore, from 1-7. (For PostgreSQL Enterprise Plus instances, from 1 to 35.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#transaction_log_retention_days GoogleSqlDatabaseInstance#transaction_log_retention_days}
  */
  readonly transactionLogRetentionDays?: number;
  /**
  * backup_retention_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#backup_retention_settings GoogleSqlDatabaseInstance#backup_retention_settings}
  */
  readonly backupRetentionSettings?: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings;
}

export function googleSqlDatabaseInstanceSettingsBackupConfigurationToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference | GoogleSqlDatabaseInstanceSettingsBackupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_log_enabled: cdktf.booleanToTerraform(struct!.binaryLogEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    location: cdktf.stringToTerraform(struct!.location),
    point_in_time_recovery_enabled: cdktf.booleanToTerraform(struct!.pointInTimeRecoveryEnabled),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    transaction_log_retention_days: cdktf.numberToTerraform(struct!.transactionLogRetentionDays),
    backup_retention_settings: googleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsToTerraform(struct!.backupRetentionSettings),
  }
}


export function googleSqlDatabaseInstanceSettingsBackupConfigurationToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference | GoogleSqlDatabaseInstanceSettingsBackupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.binaryLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point_in_time_recovery_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pointInTimeRecoveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transaction_log_retention_days: {
      value: cdktf.numberToHclTerraform(struct!.transactionLogRetentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_retention_settings: {
      value: googleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsToHclTerraform(struct!.backupRetentionSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsBackupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryLogEnabled = this._binaryLogEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._pointInTimeRecoveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeRecoveryEnabled = this._pointInTimeRecoveryEnabled;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._transactionLogRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionLogRetentionDays = this._transactionLogRetentionDays;
    }
    if (this._backupRetentionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionSettings = this._backupRetentionSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsBackupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binaryLogEnabled = undefined;
      this._enabled = undefined;
      this._location = undefined;
      this._pointInTimeRecoveryEnabled = undefined;
      this._startTime = undefined;
      this._transactionLogRetentionDays = undefined;
      this._backupRetentionSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binaryLogEnabled = value.binaryLogEnabled;
      this._enabled = value.enabled;
      this._location = value.location;
      this._pointInTimeRecoveryEnabled = value.pointInTimeRecoveryEnabled;
      this._startTime = value.startTime;
      this._transactionLogRetentionDays = value.transactionLogRetentionDays;
      this._backupRetentionSettings.internalValue = value.backupRetentionSettings;
    }
  }

  // backup_tier - computed: true, optional: false, required: false
  public get backupTier() {
    return this.getStringAttribute('backup_tier');
  }

  // binary_log_enabled - computed: false, optional: true, required: false
  private _binaryLogEnabled?: boolean | cdktf.IResolvable; 
  public get binaryLogEnabled() {
    return this.getBooleanAttribute('binary_log_enabled');
  }
  public set binaryLogEnabled(value: boolean | cdktf.IResolvable) {
    this._binaryLogEnabled = value;
  }
  public resetBinaryLogEnabled() {
    this._binaryLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryLogEnabledInput() {
    return this._binaryLogEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // point_in_time_recovery_enabled - computed: false, optional: true, required: false
  private _pointInTimeRecoveryEnabled?: boolean | cdktf.IResolvable; 
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }
  public set pointInTimeRecoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._pointInTimeRecoveryEnabled = value;
  }
  public resetPointInTimeRecoveryEnabled() {
    this._pointInTimeRecoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryEnabledInput() {
    return this._pointInTimeRecoveryEnabled;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // transaction_log_retention_days - computed: true, optional: true, required: false
  private _transactionLogRetentionDays?: number; 
  public get transactionLogRetentionDays() {
    return this.getNumberAttribute('transaction_log_retention_days');
  }
  public set transactionLogRetentionDays(value: number) {
    this._transactionLogRetentionDays = value;
  }
  public resetTransactionLogRetentionDays() {
    this._transactionLogRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionLogRetentionDaysInput() {
    return this._transactionLogRetentionDays;
  }

  // backup_retention_settings - computed: false, optional: true, required: false
  private _backupRetentionSettings = new GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference(this, "backup_retention_settings");
  public get backupRetentionSettings() {
    return this._backupRetentionSettings;
  }
  public putBackupRetentionSettings(value: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings) {
    this._backupRetentionSettings.internalValue = value;
  }
  public resetBackupRetentionSettings() {
    this._backupRetentionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionSettingsInput() {
    return this._backupRetentionSettings.internalValue;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags {
  /**
  * Name of the flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#name GoogleSqlDatabaseInstance#name}
  */
  readonly name: string;
  /**
  * Value of the flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#value GoogleSqlDatabaseInstance#value}
  */
  readonly value: string;
}

export function googleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags | cdktf.IResolvable): any {
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

export class GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList extends cdktf.ComplexList {
  public internalValue? : GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags[] | cdktf.IResolvable

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
  public get(index: number): GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference {
    return new GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSqlDatabaseInstanceSettingsConnectionPoolConfig {
  /**
  * Whether Managed Connection Pool is enabled for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#connection_pooling_enabled GoogleSqlDatabaseInstance#connection_pooling_enabled}
  */
  readonly connectionPoolingEnabled?: boolean | cdktf.IResolvable;
  /**
  * flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#flags GoogleSqlDatabaseInstance#flags}
  */
  readonly flags?: GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags[] | cdktf.IResolvable;
}

export function googleSqlDatabaseInstanceSettingsConnectionPoolConfigToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsConnectionPoolConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pooling_enabled: cdktf.booleanToTerraform(struct!.connectionPoolingEnabled),
    flags: cdktf.listMapper(googleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsToTerraform, true)(struct!.flags),
  }
}


export function googleSqlDatabaseInstanceSettingsConnectionPoolConfigToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsConnectionPoolConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_pooling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.connectionPoolingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flags: {
      value: cdktf.listMapperHcl(googleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsToHclTerraform, true)(struct!.flags),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsConnectionPoolConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPoolingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolingEnabled = this._connectionPoolingEnabled;
    }
    if (this._flags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsConnectionPoolConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPoolingEnabled = undefined;
      this._flags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionPoolingEnabled = value.connectionPoolingEnabled;
      this._flags.internalValue = value.flags;
    }
  }

  // connection_pooling_enabled - computed: false, optional: true, required: false
  private _connectionPoolingEnabled?: boolean | cdktf.IResolvable; 
  public get connectionPoolingEnabled() {
    return this.getBooleanAttribute('connection_pooling_enabled');
  }
  public set connectionPoolingEnabled(value: boolean | cdktf.IResolvable) {
    this._connectionPoolingEnabled = value;
  }
  public resetConnectionPoolingEnabled() {
    this._connectionPoolingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolingEnabledInput() {
    return this._connectionPoolingEnabled;
  }

  // flags - computed: false, optional: true, required: false
  private _flags = new GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlagsList(this, "flags", true);
  public get flags() {
    return this._flags;
  }
  public putFlags(value: GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigFlags[] | cdktf.IResolvable) {
    this._flags.internalValue = value;
  }
  public resetFlags() {
    this._flags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags.internalValue;
  }
}

export class GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleSqlDatabaseInstanceSettingsConnectionPoolConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference {
    return new GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSqlDatabaseInstanceSettingsDataCacheConfig {
  /**
  * Whether data cache is enabled for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#data_cache_enabled GoogleSqlDatabaseInstance#data_cache_enabled}
  */
  readonly dataCacheEnabled?: boolean | cdktf.IResolvable;
}

export function googleSqlDatabaseInstanceSettingsDataCacheConfigToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference | GoogleSqlDatabaseInstanceSettingsDataCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_cache_enabled: cdktf.booleanToTerraform(struct!.dataCacheEnabled),
  }
}


export function googleSqlDatabaseInstanceSettingsDataCacheConfigToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference | GoogleSqlDatabaseInstanceSettingsDataCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_cache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dataCacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsDataCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheEnabled = this._dataCacheEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsDataCacheConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCacheEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCacheEnabled = value.dataCacheEnabled;
    }
  }

  // data_cache_enabled - computed: false, optional: true, required: false
  private _dataCacheEnabled?: boolean | cdktf.IResolvable; 
  public get dataCacheEnabled() {
    return this.getBooleanAttribute('data_cache_enabled');
  }
  public set dataCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._dataCacheEnabled = value;
  }
  public resetDataCacheEnabled() {
    this._dataCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheEnabledInput() {
    return this._dataCacheEnabled;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsDatabaseFlags {
  /**
  * Name of the flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#name GoogleSqlDatabaseInstance#name}
  */
  readonly name: string;
  /**
  * Value of the flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#value GoogleSqlDatabaseInstance#value}
  */
  readonly value: string;
}

export function googleSqlDatabaseInstanceSettingsDatabaseFlagsToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsDatabaseFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleSqlDatabaseInstanceSettingsDatabaseFlagsToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsDatabaseFlags | cdktf.IResolvable): any {
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

export class GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsDatabaseFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsDatabaseFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList extends cdktf.ComplexList {
  public internalValue? : GoogleSqlDatabaseInstanceSettingsDatabaseFlags[] | cdktf.IResolvable

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
  public get(index: number): GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference {
    return new GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod {
  /**
  * End date before which maintenance will not take place. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#end_date GoogleSqlDatabaseInstance#end_date}
  */
  readonly endDate: string;
  /**
  * Start date after which maintenance will not take place. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#start_date GoogleSqlDatabaseInstance#start_date}
  */
  readonly startDate: string;
  /**
  * Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#time GoogleSqlDatabaseInstance#time}
  */
  readonly time: string;
}

export function googleSqlDatabaseInstanceSettingsDenyMaintenancePeriodToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference | GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function googleSqlDatabaseInstanceSettingsDenyMaintenancePeriodToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference | GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate = undefined;
      this._startDate = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate = value.endDate;
      this._startDate = value.startDate;
      this._time = value.time;
    }
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsEntraidConfig {
  /**
  * The application ID for the Entra ID configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#application_id GoogleSqlDatabaseInstance#application_id}
  */
  readonly applicationId?: string;
  /**
  * The tenant ID for the Entra ID configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#tenant_id GoogleSqlDatabaseInstance#tenant_id}
  */
  readonly tenantId?: string;
}

export function googleSqlDatabaseInstanceSettingsEntraidConfigToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference | GoogleSqlDatabaseInstanceSettingsEntraidConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function googleSqlDatabaseInstanceSettingsEntraidConfigToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference | GoogleSqlDatabaseInstanceSettingsEntraidConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsEntraidConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsEntraidConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._tenantId = value.tenantId;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsFinalBackupConfig {
  /**
  * When this parameter is set to true, the final backup is enabled for the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#enabled GoogleSqlDatabaseInstance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of days to retain the final backup after the instance deletion. The valid range is between 1 and 365. For instances managed by BackupDR, the valid range is between 1 day and 99 years. The final backup will be purged at (time_of_instance_deletion + retention_days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#retention_days GoogleSqlDatabaseInstance#retention_days}
  */
  readonly retentionDays?: number;
}

export function googleSqlDatabaseInstanceSettingsFinalBackupConfigToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference | GoogleSqlDatabaseInstanceSettingsFinalBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function googleSqlDatabaseInstanceSettingsFinalBackupConfigToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference | GoogleSqlDatabaseInstanceSettingsFinalBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsFinalBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsFinalBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retentionDays = value.retentionDays;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsInsightsConfig {
  /**
  * True if Enhanced Query Insights feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#enhanced_query_insights_enabled GoogleSqlDatabaseInstance#enhanced_query_insights_enabled}
  */
  readonly enhancedQueryInsightsEnabled?: boolean | cdktf.IResolvable;
  /**
  * True if Query Insights feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#query_insights_enabled GoogleSqlDatabaseInstance#query_insights_enabled}
  */
  readonly queryInsightsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5. For Enterprise Plus instances, from 0 to 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#query_plans_per_minute GoogleSqlDatabaseInstance#query_plans_per_minute}
  */
  readonly queryPlansPerMinute?: number;
  /**
  * Maximum query length stored in bytes. Between 256 and 4500. Default to 1024. For Enterprise Plus instances, from 1024 to 100000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#query_string_length GoogleSqlDatabaseInstance#query_string_length}
  */
  readonly queryStringLength?: number;
  /**
  * True if Query Insights will record application tags from query when enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#record_application_tags GoogleSqlDatabaseInstance#record_application_tags}
  */
  readonly recordApplicationTags?: boolean | cdktf.IResolvable;
  /**
  * True if Query Insights will record client address when enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#record_client_address GoogleSqlDatabaseInstance#record_client_address}
  */
  readonly recordClientAddress?: boolean | cdktf.IResolvable;
}

export function googleSqlDatabaseInstanceSettingsInsightsConfigToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference | GoogleSqlDatabaseInstanceSettingsInsightsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_query_insights_enabled: cdktf.booleanToTerraform(struct!.enhancedQueryInsightsEnabled),
    query_insights_enabled: cdktf.booleanToTerraform(struct!.queryInsightsEnabled),
    query_plans_per_minute: cdktf.numberToTerraform(struct!.queryPlansPerMinute),
    query_string_length: cdktf.numberToTerraform(struct!.queryStringLength),
    record_application_tags: cdktf.booleanToTerraform(struct!.recordApplicationTags),
    record_client_address: cdktf.booleanToTerraform(struct!.recordClientAddress),
  }
}


export function googleSqlDatabaseInstanceSettingsInsightsConfigToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference | GoogleSqlDatabaseInstanceSettingsInsightsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_query_insights_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedQueryInsightsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_insights_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.queryInsightsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_plans_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.queryPlansPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_string_length: {
      value: cdktf.numberToHclTerraform(struct!.queryStringLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_application_tags: {
      value: cdktf.booleanToHclTerraform(struct!.recordApplicationTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_client_address: {
      value: cdktf.booleanToHclTerraform(struct!.recordClientAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsInsightsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedQueryInsightsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedQueryInsightsEnabled = this._enhancedQueryInsightsEnabled;
    }
    if (this._queryInsightsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInsightsEnabled = this._queryInsightsEnabled;
    }
    if (this._queryPlansPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPlansPerMinute = this._queryPlansPerMinute;
    }
    if (this._queryStringLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringLength = this._queryStringLength;
    }
    if (this._recordApplicationTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordApplicationTags = this._recordApplicationTags;
    }
    if (this._recordClientAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordClientAddress = this._recordClientAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsInsightsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enhancedQueryInsightsEnabled = undefined;
      this._queryInsightsEnabled = undefined;
      this._queryPlansPerMinute = undefined;
      this._queryStringLength = undefined;
      this._recordApplicationTags = undefined;
      this._recordClientAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enhancedQueryInsightsEnabled = value.enhancedQueryInsightsEnabled;
      this._queryInsightsEnabled = value.queryInsightsEnabled;
      this._queryPlansPerMinute = value.queryPlansPerMinute;
      this._queryStringLength = value.queryStringLength;
      this._recordApplicationTags = value.recordApplicationTags;
      this._recordClientAddress = value.recordClientAddress;
    }
  }

  // enhanced_query_insights_enabled - computed: false, optional: true, required: false
  private _enhancedQueryInsightsEnabled?: boolean | cdktf.IResolvable; 
  public get enhancedQueryInsightsEnabled() {
    return this.getBooleanAttribute('enhanced_query_insights_enabled');
  }
  public set enhancedQueryInsightsEnabled(value: boolean | cdktf.IResolvable) {
    this._enhancedQueryInsightsEnabled = value;
  }
  public resetEnhancedQueryInsightsEnabled() {
    this._enhancedQueryInsightsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedQueryInsightsEnabledInput() {
    return this._enhancedQueryInsightsEnabled;
  }

  // query_insights_enabled - computed: false, optional: true, required: false
  private _queryInsightsEnabled?: boolean | cdktf.IResolvable; 
  public get queryInsightsEnabled() {
    return this.getBooleanAttribute('query_insights_enabled');
  }
  public set queryInsightsEnabled(value: boolean | cdktf.IResolvable) {
    this._queryInsightsEnabled = value;
  }
  public resetQueryInsightsEnabled() {
    this._queryInsightsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInsightsEnabledInput() {
    return this._queryInsightsEnabled;
  }

  // query_plans_per_minute - computed: true, optional: true, required: false
  private _queryPlansPerMinute?: number; 
  public get queryPlansPerMinute() {
    return this.getNumberAttribute('query_plans_per_minute');
  }
  public set queryPlansPerMinute(value: number) {
    this._queryPlansPerMinute = value;
  }
  public resetQueryPlansPerMinute() {
    this._queryPlansPerMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPlansPerMinuteInput() {
    return this._queryPlansPerMinute;
  }

  // query_string_length - computed: true, optional: true, required: false
  private _queryStringLength?: number; 
  public get queryStringLength() {
    return this.getNumberAttribute('query_string_length');
  }
  public set queryStringLength(value: number) {
    this._queryStringLength = value;
  }
  public resetQueryStringLength() {
    this._queryStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringLengthInput() {
    return this._queryStringLength;
  }

  // record_application_tags - computed: false, optional: true, required: false
  private _recordApplicationTags?: boolean | cdktf.IResolvable; 
  public get recordApplicationTags() {
    return this.getBooleanAttribute('record_application_tags');
  }
  public set recordApplicationTags(value: boolean | cdktf.IResolvable) {
    this._recordApplicationTags = value;
  }
  public resetRecordApplicationTags() {
    this._recordApplicationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordApplicationTagsInput() {
    return this._recordApplicationTags;
  }

  // record_client_address - computed: false, optional: true, required: false
  private _recordClientAddress?: boolean | cdktf.IResolvable; 
  public get recordClientAddress() {
    return this.getBooleanAttribute('record_client_address');
  }
  public set recordClientAddress(value: boolean | cdktf.IResolvable) {
    this._recordClientAddress = value;
  }
  public resetRecordClientAddress() {
    this._recordClientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordClientAddressInput() {
    return this._recordClientAddress;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#expiration_time GoogleSqlDatabaseInstance#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#name GoogleSqlDatabaseInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#value GoogleSqlDatabaseInstance#value}
  */
  readonly value: string;
}

export function googleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.expirationTime),
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

export class GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationTime = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationTime = value.expirationTime;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList extends cdktf.ComplexList {
  public internalValue? : GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[] | cdktf.IResolvable

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
  public get(index: number): GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference {
    return new GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections {
  /**
  * The consumer network of this consumer endpoint. This must be a resource path that includes both the host project and the network name. The consumer host project of this network might be different from the consumer service project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#consumer_network GoogleSqlDatabaseInstance#consumer_network}
  */
  readonly consumerNetwork: string;
  /**
  * The project ID of consumer service project of this consumer endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#consumer_service_project_id GoogleSqlDatabaseInstance#consumer_service_project_id}
  */
  readonly consumerServiceProjectId?: string;
}

export function googleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_network: cdktf.stringToTerraform(struct!.consumerNetwork),
    consumer_service_project_id: cdktf.stringToTerraform(struct!.consumerServiceProjectId),
  }
}


export function googleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_network: {
      value: cdktf.stringToHclTerraform(struct!.consumerNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_service_project_id: {
      value: cdktf.stringToHclTerraform(struct!.consumerServiceProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerNetwork = this._consumerNetwork;
    }
    if (this._consumerServiceProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerServiceProjectId = this._consumerServiceProjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerNetwork = undefined;
      this._consumerServiceProjectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerNetwork = value.consumerNetwork;
      this._consumerServiceProjectId = value.consumerServiceProjectId;
    }
  }

  // consumer_network - computed: false, optional: false, required: true
  private _consumerNetwork?: string; 
  public get consumerNetwork() {
    return this.getStringAttribute('consumer_network');
  }
  public set consumerNetwork(value: string) {
    this._consumerNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerNetworkInput() {
    return this._consumerNetwork;
  }

  // consumer_network_status - computed: true, optional: false, required: false
  public get consumerNetworkStatus() {
    return this.getStringAttribute('consumer_network_status');
  }

  // consumer_service_project_id - computed: true, optional: true, required: false
  private _consumerServiceProjectId?: string; 
  public get consumerServiceProjectId() {
    return this.getStringAttribute('consumer_service_project_id');
  }
  public set consumerServiceProjectId(value: string) {
    this._consumerServiceProjectId = value;
  }
  public resetConsumerServiceProjectId() {
    this._consumerServiceProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerServiceProjectIdInput() {
    return this._consumerServiceProjectId;
  }

  // instance_auto_dns_status - computed: true, optional: false, required: false
  public get instanceAutoDnsStatus() {
    return this.getStringAttribute('instance_auto_dns_status');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // service_connection_policy - computed: true, optional: false, required: false
  public get serviceConnectionPolicy() {
    return this.getStringAttribute('service_connection_policy');
  }

  // service_connection_policy_creation_result - computed: true, optional: false, required: false
  public get serviceConnectionPolicyCreationResult() {
    return this.getStringAttribute('service_connection_policy_creation_result');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // write_endpoint_auto_dns_status - computed: true, optional: false, required: false
  public get writeEndpointAutoDnsStatus() {
    return this.getStringAttribute('write_endpoint_auto_dns_status');
  }
}

export class GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList extends cdktf.ComplexList {
  public internalValue? : GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections[] | cdktf.IResolvable

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
  public get(index: number): GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference {
    return new GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig {
  /**
  * List of consumer projects that are allow-listed for PSC connections to this instance. This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#allowed_consumer_projects GoogleSqlDatabaseInstance#allowed_consumer_projects}
  */
  readonly allowedConsumerProjects?: string[];
  /**
  * Name of network attachment resource used to authorize a producer service to connect a PSC interface to the consumer's VPC. For example: "projects/myProject/regions/myRegion/networkAttachments/myNetworkAttachment". This is required to enable outbound connection on a PSC instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#network_attachment_uri GoogleSqlDatabaseInstance#network_attachment_uri}
  */
  readonly networkAttachmentUri?: string;
  /**
  * Whether a service connection policy is created for the auto connections configured for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#psc_auto_connection_policy_enabled GoogleSqlDatabaseInstance#psc_auto_connection_policy_enabled}
  */
  readonly pscAutoConnectionPolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether PSC auto DNS is enabled for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#psc_auto_dns_enabled GoogleSqlDatabaseInstance#psc_auto_dns_enabled}
  */
  readonly pscAutoDnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether PSC connectivity is enabled for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#psc_enabled GoogleSqlDatabaseInstance#psc_enabled}
  */
  readonly pscEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether PSC write endpoint DNS is enabled for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#psc_write_endpoint_dns_enabled GoogleSqlDatabaseInstance#psc_write_endpoint_dns_enabled}
  */
  readonly pscWriteEndpointDnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * psc_auto_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#psc_auto_connections GoogleSqlDatabaseInstance#psc_auto_connections}
  */
  readonly pscAutoConnections?: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections[] | cdktf.IResolvable;
}

export function googleSqlDatabaseInstanceSettingsIpConfigurationPscConfigToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_consumer_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedConsumerProjects),
    network_attachment_uri: cdktf.stringToTerraform(struct!.networkAttachmentUri),
    psc_auto_connection_policy_enabled: cdktf.booleanToTerraform(struct!.pscAutoConnectionPolicyEnabled),
    psc_auto_dns_enabled: cdktf.booleanToTerraform(struct!.pscAutoDnsEnabled),
    psc_enabled: cdktf.booleanToTerraform(struct!.pscEnabled),
    psc_write_endpoint_dns_enabled: cdktf.booleanToTerraform(struct!.pscWriteEndpointDnsEnabled),
    psc_auto_connections: cdktf.listMapper(googleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsToTerraform, true)(struct!.pscAutoConnections),
  }
}


export function googleSqlDatabaseInstanceSettingsIpConfigurationPscConfigToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_consumer_projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedConsumerProjects),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    network_attachment_uri: {
      value: cdktf.stringToHclTerraform(struct!.networkAttachmentUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psc_auto_connection_policy_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pscAutoConnectionPolicyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    psc_auto_dns_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pscAutoDnsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    psc_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pscEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    psc_write_endpoint_dns_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pscWriteEndpointDnsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    psc_auto_connections: {
      value: cdktf.listMapperHcl(googleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsToHclTerraform, true)(struct!.pscAutoConnections),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedConsumerProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedConsumerProjects = this._allowedConsumerProjects;
    }
    if (this._networkAttachmentUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachmentUri = this._networkAttachmentUri;
    }
    if (this._pscAutoConnectionPolicyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscAutoConnectionPolicyEnabled = this._pscAutoConnectionPolicyEnabled;
    }
    if (this._pscAutoDnsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscAutoDnsEnabled = this._pscAutoDnsEnabled;
    }
    if (this._pscEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscEnabled = this._pscEnabled;
    }
    if (this._pscWriteEndpointDnsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscWriteEndpointDnsEnabled = this._pscWriteEndpointDnsEnabled;
    }
    if (this._pscAutoConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscAutoConnections = this._pscAutoConnections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedConsumerProjects = undefined;
      this._networkAttachmentUri = undefined;
      this._pscAutoConnectionPolicyEnabled = undefined;
      this._pscAutoDnsEnabled = undefined;
      this._pscEnabled = undefined;
      this._pscWriteEndpointDnsEnabled = undefined;
      this._pscAutoConnections.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedConsumerProjects = value.allowedConsumerProjects;
      this._networkAttachmentUri = value.networkAttachmentUri;
      this._pscAutoConnectionPolicyEnabled = value.pscAutoConnectionPolicyEnabled;
      this._pscAutoDnsEnabled = value.pscAutoDnsEnabled;
      this._pscEnabled = value.pscEnabled;
      this._pscWriteEndpointDnsEnabled = value.pscWriteEndpointDnsEnabled;
      this._pscAutoConnections.internalValue = value.pscAutoConnections;
    }
  }

  // allowed_consumer_projects - computed: false, optional: true, required: false
  private _allowedConsumerProjects?: string[]; 
  public get allowedConsumerProjects() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_consumer_projects'));
  }
  public set allowedConsumerProjects(value: string[]) {
    this._allowedConsumerProjects = value;
  }
  public resetAllowedConsumerProjects() {
    this._allowedConsumerProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedConsumerProjectsInput() {
    return this._allowedConsumerProjects;
  }

  // network_attachment_uri - computed: false, optional: true, required: false
  private _networkAttachmentUri?: string; 
  public get networkAttachmentUri() {
    return this.getStringAttribute('network_attachment_uri');
  }
  public set networkAttachmentUri(value: string) {
    this._networkAttachmentUri = value;
  }
  public resetNetworkAttachmentUri() {
    this._networkAttachmentUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentUriInput() {
    return this._networkAttachmentUri;
  }

  // psc_auto_connection_policy_enabled - computed: true, optional: true, required: false
  private _pscAutoConnectionPolicyEnabled?: boolean | cdktf.IResolvable; 
  public get pscAutoConnectionPolicyEnabled() {
    return this.getBooleanAttribute('psc_auto_connection_policy_enabled');
  }
  public set pscAutoConnectionPolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._pscAutoConnectionPolicyEnabled = value;
  }
  public resetPscAutoConnectionPolicyEnabled() {
    this._pscAutoConnectionPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscAutoConnectionPolicyEnabledInput() {
    return this._pscAutoConnectionPolicyEnabled;
  }

  // psc_auto_dns_enabled - computed: true, optional: true, required: false
  private _pscAutoDnsEnabled?: boolean | cdktf.IResolvable; 
  public get pscAutoDnsEnabled() {
    return this.getBooleanAttribute('psc_auto_dns_enabled');
  }
  public set pscAutoDnsEnabled(value: boolean | cdktf.IResolvable) {
    this._pscAutoDnsEnabled = value;
  }
  public resetPscAutoDnsEnabled() {
    this._pscAutoDnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscAutoDnsEnabledInput() {
    return this._pscAutoDnsEnabled;
  }

  // psc_enabled - computed: false, optional: true, required: false
  private _pscEnabled?: boolean | cdktf.IResolvable; 
  public get pscEnabled() {
    return this.getBooleanAttribute('psc_enabled');
  }
  public set pscEnabled(value: boolean | cdktf.IResolvable) {
    this._pscEnabled = value;
  }
  public resetPscEnabled() {
    this._pscEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscEnabledInput() {
    return this._pscEnabled;
  }

  // psc_write_endpoint_dns_enabled - computed: true, optional: true, required: false
  private _pscWriteEndpointDnsEnabled?: boolean | cdktf.IResolvable; 
  public get pscWriteEndpointDnsEnabled() {
    return this.getBooleanAttribute('psc_write_endpoint_dns_enabled');
  }
  public set pscWriteEndpointDnsEnabled(value: boolean | cdktf.IResolvable) {
    this._pscWriteEndpointDnsEnabled = value;
  }
  public resetPscWriteEndpointDnsEnabled() {
    this._pscWriteEndpointDnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscWriteEndpointDnsEnabledInput() {
    return this._pscWriteEndpointDnsEnabled;
  }

  // psc_auto_connections - computed: false, optional: true, required: false
  private _pscAutoConnections = new GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList(this, "psc_auto_connections", false);
  public get pscAutoConnections() {
    return this._pscAutoConnections;
  }
  public putPscAutoConnections(value: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections[] | cdktf.IResolvable) {
    this._pscAutoConnections.internalValue = value;
  }
  public resetPscAutoConnections() {
    this._pscAutoConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscAutoConnectionsInput() {
    return this._pscAutoConnections.internalValue;
  }
}

export class GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference {
    return new GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSqlDatabaseInstanceSettingsIpConfiguration {
  /**
  * The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#allocated_ip_range GoogleSqlDatabaseInstance#allocated_ip_range}
  */
  readonly allocatedIpRange?: string;
  /**
  * The custom subject alternative names for an instance with "CUSTOMER_MANAGED_CAS_CA" as the "server_ca_mode".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#custom_subject_alternative_names GoogleSqlDatabaseInstance#custom_subject_alternative_names}
  */
  readonly customSubjectAlternativeNames?: string[];
  /**
  * Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#enable_private_path_for_google_cloud_services GoogleSqlDatabaseInstance#enable_private_path_for_google_cloud_services}
  */
  readonly enablePrivatePathForGoogleCloudServices?: boolean | cdktf.IResolvable;
  /**
  * Whether this Cloud SQL instance should be assigned a public IPV4 address. At least ipv4_enabled must be enabled or a private_network must be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#ipv4_enabled GoogleSqlDatabaseInstance#ipv4_enabled}
  */
  readonly ipv4Enabled?: boolean | cdktf.IResolvable;
  /**
  * The VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#private_network GoogleSqlDatabaseInstance#private_network}
  */
  readonly privateNetwork?: string;
  /**
  * Specify how the server certificate's Certificate Authority is hosted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#server_ca_mode GoogleSqlDatabaseInstance#server_ca_mode}
  */
  readonly serverCaMode?: string;
  /**
  * The resource name of the server CA pool for an instance with "CUSTOMER_MANAGED_CAS_CA" as the "server_ca_mode".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#server_ca_pool GoogleSqlDatabaseInstance#server_ca_pool}
  */
  readonly serverCaPool?: string;
  /**
  * Settings for how the server certificate gets rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#server_certificate_rotation_mode GoogleSqlDatabaseInstance#server_certificate_rotation_mode}
  */
  readonly serverCertificateRotationMode?: string;
  /**
  * Specify how SSL connection should be enforced in DB connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#ssl_mode GoogleSqlDatabaseInstance#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * authorized_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#authorized_networks GoogleSqlDatabaseInstance#authorized_networks}
  */
  readonly authorizedNetworks?: GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[] | cdktf.IResolvable;
  /**
  * psc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#psc_config GoogleSqlDatabaseInstance#psc_config}
  */
  readonly pscConfig?: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig[] | cdktf.IResolvable;
}

export function googleSqlDatabaseInstanceSettingsIpConfigurationToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference | GoogleSqlDatabaseInstanceSettingsIpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_ip_range: cdktf.stringToTerraform(struct!.allocatedIpRange),
    custom_subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSubjectAlternativeNames),
    enable_private_path_for_google_cloud_services: cdktf.booleanToTerraform(struct!.enablePrivatePathForGoogleCloudServices),
    ipv4_enabled: cdktf.booleanToTerraform(struct!.ipv4Enabled),
    private_network: cdktf.stringToTerraform(struct!.privateNetwork),
    server_ca_mode: cdktf.stringToTerraform(struct!.serverCaMode),
    server_ca_pool: cdktf.stringToTerraform(struct!.serverCaPool),
    server_certificate_rotation_mode: cdktf.stringToTerraform(struct!.serverCertificateRotationMode),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
    authorized_networks: cdktf.listMapper(googleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksToTerraform, true)(struct!.authorizedNetworks),
    psc_config: cdktf.listMapper(googleSqlDatabaseInstanceSettingsIpConfigurationPscConfigToTerraform, true)(struct!.pscConfig),
  }
}


export function googleSqlDatabaseInstanceSettingsIpConfigurationToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference | GoogleSqlDatabaseInstanceSettingsIpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.allocatedIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_subject_alternative_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSubjectAlternativeNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable_private_path_for_google_cloud_services: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivatePathForGoogleCloudServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_network: {
      value: cdktf.stringToHclTerraform(struct!.privateNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ca_mode: {
      value: cdktf.stringToHclTerraform(struct!.serverCaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ca_pool: {
      value: cdktf.stringToHclTerraform(struct!.serverCaPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate_rotation_mode: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificateRotationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorized_networks: {
      value: cdktf.listMapperHcl(googleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksToHclTerraform, true)(struct!.authorizedNetworks),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList",
    },
    psc_config: {
      value: cdktf.listMapperHcl(googleSqlDatabaseInstanceSettingsIpConfigurationPscConfigToHclTerraform, true)(struct!.pscConfig),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsIpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIpRange = this._allocatedIpRange;
    }
    if (this._customSubjectAlternativeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubjectAlternativeNames = this._customSubjectAlternativeNames;
    }
    if (this._enablePrivatePathForGoogleCloudServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivatePathForGoogleCloudServices = this._enablePrivatePathForGoogleCloudServices;
    }
    if (this._ipv4Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Enabled = this._ipv4Enabled;
    }
    if (this._privateNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetwork = this._privateNetwork;
    }
    if (this._serverCaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCaMode = this._serverCaMode;
    }
    if (this._serverCaPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCaPool = this._serverCaPool;
    }
    if (this._serverCertificateRotationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateRotationMode = this._serverCertificateRotationMode;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    if (this._authorizedNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedNetworks = this._authorizedNetworks?.internalValue;
    }
    if (this._pscConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscConfig = this._pscConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsIpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocatedIpRange = undefined;
      this._customSubjectAlternativeNames = undefined;
      this._enablePrivatePathForGoogleCloudServices = undefined;
      this._ipv4Enabled = undefined;
      this._privateNetwork = undefined;
      this._serverCaMode = undefined;
      this._serverCaPool = undefined;
      this._serverCertificateRotationMode = undefined;
      this._sslMode = undefined;
      this._authorizedNetworks.internalValue = undefined;
      this._pscConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocatedIpRange = value.allocatedIpRange;
      this._customSubjectAlternativeNames = value.customSubjectAlternativeNames;
      this._enablePrivatePathForGoogleCloudServices = value.enablePrivatePathForGoogleCloudServices;
      this._ipv4Enabled = value.ipv4Enabled;
      this._privateNetwork = value.privateNetwork;
      this._serverCaMode = value.serverCaMode;
      this._serverCaPool = value.serverCaPool;
      this._serverCertificateRotationMode = value.serverCertificateRotationMode;
      this._sslMode = value.sslMode;
      this._authorizedNetworks.internalValue = value.authorizedNetworks;
      this._pscConfig.internalValue = value.pscConfig;
    }
  }

  // allocated_ip_range - computed: false, optional: true, required: false
  private _allocatedIpRange?: string; 
  public get allocatedIpRange() {
    return this.getStringAttribute('allocated_ip_range');
  }
  public set allocatedIpRange(value: string) {
    this._allocatedIpRange = value;
  }
  public resetAllocatedIpRange() {
    this._allocatedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpRangeInput() {
    return this._allocatedIpRange;
  }

  // custom_subject_alternative_names - computed: false, optional: true, required: false
  private _customSubjectAlternativeNames?: string[]; 
  public get customSubjectAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_subject_alternative_names'));
  }
  public set customSubjectAlternativeNames(value: string[]) {
    this._customSubjectAlternativeNames = value;
  }
  public resetCustomSubjectAlternativeNames() {
    this._customSubjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubjectAlternativeNamesInput() {
    return this._customSubjectAlternativeNames;
  }

  // enable_private_path_for_google_cloud_services - computed: false, optional: true, required: false
  private _enablePrivatePathForGoogleCloudServices?: boolean | cdktf.IResolvable; 
  public get enablePrivatePathForGoogleCloudServices() {
    return this.getBooleanAttribute('enable_private_path_for_google_cloud_services');
  }
  public set enablePrivatePathForGoogleCloudServices(value: boolean | cdktf.IResolvable) {
    this._enablePrivatePathForGoogleCloudServices = value;
  }
  public resetEnablePrivatePathForGoogleCloudServices() {
    this._enablePrivatePathForGoogleCloudServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivatePathForGoogleCloudServicesInput() {
    return this._enablePrivatePathForGoogleCloudServices;
  }

  // ipv4_enabled - computed: false, optional: true, required: false
  private _ipv4Enabled?: boolean | cdktf.IResolvable; 
  public get ipv4Enabled() {
    return this.getBooleanAttribute('ipv4_enabled');
  }
  public set ipv4Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv4Enabled = value;
  }
  public resetIpv4Enabled() {
    this._ipv4Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EnabledInput() {
    return this._ipv4Enabled;
  }

  // private_network - computed: false, optional: true, required: false
  private _privateNetwork?: string; 
  public get privateNetwork() {
    return this.getStringAttribute('private_network');
  }
  public set privateNetwork(value: string) {
    this._privateNetwork = value;
  }
  public resetPrivateNetwork() {
    this._privateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkInput() {
    return this._privateNetwork;
  }

  // server_ca_mode - computed: true, optional: true, required: false
  private _serverCaMode?: string; 
  public get serverCaMode() {
    return this.getStringAttribute('server_ca_mode');
  }
  public set serverCaMode(value: string) {
    this._serverCaMode = value;
  }
  public resetServerCaMode() {
    this._serverCaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCaModeInput() {
    return this._serverCaMode;
  }

  // server_ca_pool - computed: false, optional: true, required: false
  private _serverCaPool?: string; 
  public get serverCaPool() {
    return this.getStringAttribute('server_ca_pool');
  }
  public set serverCaPool(value: string) {
    this._serverCaPool = value;
  }
  public resetServerCaPool() {
    this._serverCaPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCaPoolInput() {
    return this._serverCaPool;
  }

  // server_certificate_rotation_mode - computed: false, optional: true, required: false
  private _serverCertificateRotationMode?: string; 
  public get serverCertificateRotationMode() {
    return this.getStringAttribute('server_certificate_rotation_mode');
  }
  public set serverCertificateRotationMode(value: string) {
    this._serverCertificateRotationMode = value;
  }
  public resetServerCertificateRotationMode() {
    this._serverCertificateRotationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateRotationModeInput() {
    return this._serverCertificateRotationMode;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // authorized_networks - computed: false, optional: true, required: false
  private _authorizedNetworks = new GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList(this, "authorized_networks", true);
  public get authorizedNetworks() {
    return this._authorizedNetworks;
  }
  public putAuthorizedNetworks(value: GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[] | cdktf.IResolvable) {
    this._authorizedNetworks.internalValue = value;
  }
  public resetAuthorizedNetworks() {
    this._authorizedNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworksInput() {
    return this._authorizedNetworks.internalValue;
  }

  // psc_config - computed: false, optional: true, required: false
  private _pscConfig = new GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList(this, "psc_config", true);
  public get pscConfig() {
    return this._pscConfig;
  }
  public putPscConfig(value: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig[] | cdktf.IResolvable) {
    this._pscConfig.internalValue = value;
  }
  public resetPscConfig() {
    this._pscConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscConfigInput() {
    return this._pscConfig.internalValue;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsLocationPreference {
  /**
  * A Google App Engine application whose zone to remain in. Must be in the same region as this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#follow_gae_application GoogleSqlDatabaseInstance#follow_gae_application}
  */
  readonly followGaeApplication?: string;
  /**
  * The preferred Compute Engine zone for the secondary/failover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#secondary_zone GoogleSqlDatabaseInstance#secondary_zone}
  */
  readonly secondaryZone?: string;
  /**
  * The preferred compute engine zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#zone GoogleSqlDatabaseInstance#zone}
  */
  readonly zone?: string;
}

export function googleSqlDatabaseInstanceSettingsLocationPreferenceToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference | GoogleSqlDatabaseInstanceSettingsLocationPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_gae_application: cdktf.stringToTerraform(struct!.followGaeApplication),
    secondary_zone: cdktf.stringToTerraform(struct!.secondaryZone),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function googleSqlDatabaseInstanceSettingsLocationPreferenceToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference | GoogleSqlDatabaseInstanceSettingsLocationPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_gae_application: {
      value: cdktf.stringToHclTerraform(struct!.followGaeApplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_zone: {
      value: cdktf.stringToHclTerraform(struct!.secondaryZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsLocationPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followGaeApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.followGaeApplication = this._followGaeApplication;
    }
    if (this._secondaryZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryZone = this._secondaryZone;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsLocationPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followGaeApplication = undefined;
      this._secondaryZone = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followGaeApplication = value.followGaeApplication;
      this._secondaryZone = value.secondaryZone;
      this._zone = value.zone;
    }
  }

  // follow_gae_application - computed: false, optional: true, required: false
  private _followGaeApplication?: string; 
  public get followGaeApplication() {
    return this.getStringAttribute('follow_gae_application');
  }
  public set followGaeApplication(value: string) {
    this._followGaeApplication = value;
  }
  public resetFollowGaeApplication() {
    this._followGaeApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followGaeApplicationInput() {
    return this._followGaeApplication;
  }

  // secondary_zone - computed: false, optional: true, required: false
  private _secondaryZone?: string; 
  public get secondaryZone() {
    return this.getStringAttribute('secondary_zone');
  }
  public set secondaryZone(value: string) {
    this._secondaryZone = value;
  }
  public resetSecondaryZone() {
    this._secondaryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryZoneInput() {
    return this._secondaryZone;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsMaintenanceWindow {
  /**
  * Day of week (1-7), starting on Monday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#day GoogleSqlDatabaseInstance#day}
  */
  readonly day?: number;
  /**
  * Hour of day (0-23), ignored if day not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#hour GoogleSqlDatabaseInstance#hour}
  */
  readonly hour?: number;
  /**
  * Receive updates after one week (canary) or after two weeks (stable) or after five weeks (week5) of notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#update_track GoogleSqlDatabaseInstance#update_track}
  */
  readonly updateTrack?: string;
}

export function googleSqlDatabaseInstanceSettingsMaintenanceWindowToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference | GoogleSqlDatabaseInstanceSettingsMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    update_track: cdktf.stringToTerraform(struct!.updateTrack),
  }
}


export function googleSqlDatabaseInstanceSettingsMaintenanceWindowToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference | GoogleSqlDatabaseInstanceSettingsMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_track: {
      value: cdktf.stringToHclTerraform(struct!.updateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._updateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTrack = this._updateTrack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._hour = undefined;
      this._updateTrack = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._hour = value.hour;
      this._updateTrack = value.updateTrack;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // update_track - computed: false, optional: true, required: false
  private _updateTrack?: string; 
  public get updateTrack() {
    return this.getStringAttribute('update_track');
  }
  public set updateTrack(value: string) {
    this._updateTrack = value;
  }
  public resetUpdateTrack() {
    this._updateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTrackInput() {
    return this._updateTrack;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy {
  /**
  * Password complexity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#complexity GoogleSqlDatabaseInstance#complexity}
  */
  readonly complexity?: string;
  /**
  * Disallow username as a part of the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#disallow_username_substring GoogleSqlDatabaseInstance#disallow_username_substring}
  */
  readonly disallowUsernameSubstring?: boolean | cdktf.IResolvable;
  /**
  * Whether the password policy is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#enable_password_policy GoogleSqlDatabaseInstance#enable_password_policy}
  */
  readonly enablePasswordPolicy: boolean | cdktf.IResolvable;
  /**
  * Minimum number of characters allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#min_length GoogleSqlDatabaseInstance#min_length}
  */
  readonly minLength?: number;
  /**
  * Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#password_change_interval GoogleSqlDatabaseInstance#password_change_interval}
  */
  readonly passwordChangeInterval?: string;
  /**
  * Number of previous passwords that cannot be reused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#reuse_interval GoogleSqlDatabaseInstance#reuse_interval}
  */
  readonly reuseInterval?: number;
}

export function googleSqlDatabaseInstanceSettingsPasswordValidationPolicyToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference | GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    complexity: cdktf.stringToTerraform(struct!.complexity),
    disallow_username_substring: cdktf.booleanToTerraform(struct!.disallowUsernameSubstring),
    enable_password_policy: cdktf.booleanToTerraform(struct!.enablePasswordPolicy),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    password_change_interval: cdktf.stringToTerraform(struct!.passwordChangeInterval),
    reuse_interval: cdktf.numberToTerraform(struct!.reuseInterval),
  }
}


export function googleSqlDatabaseInstanceSettingsPasswordValidationPolicyToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference | GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    complexity: {
      value: cdktf.stringToHclTerraform(struct!.complexity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disallow_username_substring: {
      value: cdktf.booleanToHclTerraform(struct!.disallowUsernameSubstring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_password_policy: {
      value: cdktf.booleanToHclTerraform(struct!.enablePasswordPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_change_interval: {
      value: cdktf.stringToHclTerraform(struct!.passwordChangeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reuse_interval: {
      value: cdktf.numberToHclTerraform(struct!.reuseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexity = this._complexity;
    }
    if (this._disallowUsernameSubstring !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowUsernameSubstring = this._disallowUsernameSubstring;
    }
    if (this._enablePasswordPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePasswordPolicy = this._enablePasswordPolicy;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._passwordChangeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordChangeInterval = this._passwordChangeInterval;
    }
    if (this._reuseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseInterval = this._reuseInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._complexity = undefined;
      this._disallowUsernameSubstring = undefined;
      this._enablePasswordPolicy = undefined;
      this._minLength = undefined;
      this._passwordChangeInterval = undefined;
      this._reuseInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._complexity = value.complexity;
      this._disallowUsernameSubstring = value.disallowUsernameSubstring;
      this._enablePasswordPolicy = value.enablePasswordPolicy;
      this._minLength = value.minLength;
      this._passwordChangeInterval = value.passwordChangeInterval;
      this._reuseInterval = value.reuseInterval;
    }
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity?: string; 
  public get complexity() {
    return this.getStringAttribute('complexity');
  }
  public set complexity(value: string) {
    this._complexity = value;
  }
  public resetComplexity() {
    this._complexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity;
  }

  // disallow_username_substring - computed: false, optional: true, required: false
  private _disallowUsernameSubstring?: boolean | cdktf.IResolvable; 
  public get disallowUsernameSubstring() {
    return this.getBooleanAttribute('disallow_username_substring');
  }
  public set disallowUsernameSubstring(value: boolean | cdktf.IResolvable) {
    this._disallowUsernameSubstring = value;
  }
  public resetDisallowUsernameSubstring() {
    this._disallowUsernameSubstring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowUsernameSubstringInput() {
    return this._disallowUsernameSubstring;
  }

  // enable_password_policy - computed: false, optional: false, required: true
  private _enablePasswordPolicy?: boolean | cdktf.IResolvable; 
  public get enablePasswordPolicy() {
    return this.getBooleanAttribute('enable_password_policy');
  }
  public set enablePasswordPolicy(value: boolean | cdktf.IResolvable) {
    this._enablePasswordPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasswordPolicyInput() {
    return this._enablePasswordPolicy;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // password_change_interval - computed: false, optional: true, required: false
  private _passwordChangeInterval?: string; 
  public get passwordChangeInterval() {
    return this.getStringAttribute('password_change_interval');
  }
  public set passwordChangeInterval(value: string) {
    this._passwordChangeInterval = value;
  }
  public resetPasswordChangeInterval() {
    this._passwordChangeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeIntervalInput() {
    return this._passwordChangeInterval;
  }

  // reuse_interval - computed: false, optional: true, required: false
  private _reuseInterval?: number; 
  public get reuseInterval() {
    return this.getNumberAttribute('reuse_interval');
  }
  public set reuseInterval(value: number) {
    this._reuseInterval = value;
  }
  public resetReuseInterval() {
    this._reuseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseIntervalInput() {
    return this._reuseInterval;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfig {
  /**
  * The minimum percentage of CPU utilization that triggers the performance capture. Valid range is 10 to 99. 0 disables the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#cpu_utilization_threshold_percent GoogleSqlDatabaseInstance#cpu_utilization_threshold_percent}
  */
  readonly cpuUtilizationThresholdPercent?: number;
  /**
  * Enable or disable the Performance Capture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#enabled GoogleSqlDatabaseInstance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The minimum number of undo log entries in the history list length that triggers the performance capture. Valid range is 10000 to 10000000. 0 disables the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#history_list_length_threshold_count GoogleSqlDatabaseInstance#history_list_length_threshold_count}
  */
  readonly historyListLengthThresholdCount?: number;
  /**
  * The minimum percentage of memory usage that triggers the performance capture. Valid range is 10 to 99. 0 disables the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#memory_usage_threshold_percent GoogleSqlDatabaseInstance#memory_usage_threshold_percent}
  */
  readonly memoryUsageThresholdPercent?: number;
  /**
  * The minimum number of consecutive readings above threshold that triggers instance state capture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#probe_threshold GoogleSqlDatabaseInstance#probe_threshold}
  */
  readonly probeThreshold?: number;
  /**
  * The time interval in seconds between any two probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#probing_interval_seconds GoogleSqlDatabaseInstance#probing_interval_seconds}
  */
  readonly probingIntervalSeconds?: number;
  /**
  * The minimum number of server threads running to trigger the capture on primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#running_threads_threshold GoogleSqlDatabaseInstance#running_threads_threshold}
  */
  readonly runningThreadsThreshold?: number;
  /**
  * The minimum number of seconds replica must be lagging behind primary to trigger capture on replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#seconds_behind_source_threshold GoogleSqlDatabaseInstance#seconds_behind_source_threshold}
  */
  readonly secondsBehindSourceThreshold?: number;
  /**
  * The minimum number of semaphore waits that triggers the performance capture. Valid range is 10 to 10000. 0 disables the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#semaphore_wait_threshold_count GoogleSqlDatabaseInstance#semaphore_wait_threshold_count}
  */
  readonly semaphoreWaitThresholdCount?: number;
  /**
  * The amount of time in seconds that a transaction needs to have been open before getting recorded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#transaction_duration_threshold GoogleSqlDatabaseInstance#transaction_duration_threshold}
  */
  readonly transactionDurationThreshold?: number;
  /**
  * A list of users to exclude from transaction termination. Entries can be in the format 'user@host' or just 'user'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#transaction_kill_excluded_user_hosts GoogleSqlDatabaseInstance#transaction_kill_excluded_user_hosts}
  */
  readonly transactionKillExcludedUserHosts?: string[];
  /**
  * The amount of time in seconds that a transaction needs to have been open before the watcher starts terminating it. Valid range is 60 to 604800. 0 disables termination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#transaction_kill_threshold_seconds GoogleSqlDatabaseInstance#transaction_kill_threshold_seconds}
  */
  readonly transactionKillThresholdSeconds?: number;
  /**
  * Determines which transactions are allowed to be terminated when they exceed transaction_kill_threshold_seconds. Possible values are: "TRANSACTION_KILL_TYPE_UNSPECIFIED", "READ_ONLY_TRANSACTIONS", "ALL_TRANSACTIONS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#transaction_kill_type GoogleSqlDatabaseInstance#transaction_kill_type}
  */
  readonly transactionKillType?: string;
  /**
  * The minimum number of transactions in lock wait state that triggers the performance capture. Valid range is 10 to 10000. 0 disables the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#transaction_lock_wait_threshold_count GoogleSqlDatabaseInstance#transaction_lock_wait_threshold_count}
  */
  readonly transactionLockWaitThresholdCount?: number;
}

export function googleSqlDatabaseInstanceSettingsPerformanceCaptureConfigToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfigOutputReference | GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_utilization_threshold_percent: cdktf.numberToTerraform(struct!.cpuUtilizationThresholdPercent),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    history_list_length_threshold_count: cdktf.numberToTerraform(struct!.historyListLengthThresholdCount),
    memory_usage_threshold_percent: cdktf.numberToTerraform(struct!.memoryUsageThresholdPercent),
    probe_threshold: cdktf.numberToTerraform(struct!.probeThreshold),
    probing_interval_seconds: cdktf.numberToTerraform(struct!.probingIntervalSeconds),
    running_threads_threshold: cdktf.numberToTerraform(struct!.runningThreadsThreshold),
    seconds_behind_source_threshold: cdktf.numberToTerraform(struct!.secondsBehindSourceThreshold),
    semaphore_wait_threshold_count: cdktf.numberToTerraform(struct!.semaphoreWaitThresholdCount),
    transaction_duration_threshold: cdktf.numberToTerraform(struct!.transactionDurationThreshold),
    transaction_kill_excluded_user_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transactionKillExcludedUserHosts),
    transaction_kill_threshold_seconds: cdktf.numberToTerraform(struct!.transactionKillThresholdSeconds),
    transaction_kill_type: cdktf.stringToTerraform(struct!.transactionKillType),
    transaction_lock_wait_threshold_count: cdktf.numberToTerraform(struct!.transactionLockWaitThresholdCount),
  }
}


export function googleSqlDatabaseInstanceSettingsPerformanceCaptureConfigToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfigOutputReference | GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_utilization_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.cpuUtilizationThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    history_list_length_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.historyListLengthThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_usage_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsageThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_threshold: {
      value: cdktf.numberToHclTerraform(struct!.probeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probing_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.probingIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_threads_threshold: {
      value: cdktf.numberToHclTerraform(struct!.runningThreadsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds_behind_source_threshold: {
      value: cdktf.numberToHclTerraform(struct!.secondsBehindSourceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    semaphore_wait_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.semaphoreWaitThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transaction_duration_threshold: {
      value: cdktf.numberToHclTerraform(struct!.transactionDurationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transaction_kill_excluded_user_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transactionKillExcludedUserHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transaction_kill_threshold_seconds: {
      value: cdktf.numberToHclTerraform(struct!.transactionKillThresholdSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transaction_kill_type: {
      value: cdktf.stringToHclTerraform(struct!.transactionKillType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transaction_lock_wait_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.transactionLockWaitThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUtilizationThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilizationThresholdPercent = this._cpuUtilizationThresholdPercent;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._historyListLengthThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.historyListLengthThresholdCount = this._historyListLengthThresholdCount;
    }
    if (this._memoryUsageThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsageThresholdPercent = this._memoryUsageThresholdPercent;
    }
    if (this._probeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeThreshold = this._probeThreshold;
    }
    if (this._probingIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.probingIntervalSeconds = this._probingIntervalSeconds;
    }
    if (this._runningThreadsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningThreadsThreshold = this._runningThreadsThreshold;
    }
    if (this._secondsBehindSourceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondsBehindSourceThreshold = this._secondsBehindSourceThreshold;
    }
    if (this._semaphoreWaitThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.semaphoreWaitThresholdCount = this._semaphoreWaitThresholdCount;
    }
    if (this._transactionDurationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionDurationThreshold = this._transactionDurationThreshold;
    }
    if (this._transactionKillExcludedUserHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionKillExcludedUserHosts = this._transactionKillExcludedUserHosts;
    }
    if (this._transactionKillThresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionKillThresholdSeconds = this._transactionKillThresholdSeconds;
    }
    if (this._transactionKillType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionKillType = this._transactionKillType;
    }
    if (this._transactionLockWaitThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionLockWaitThresholdCount = this._transactionLockWaitThresholdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUtilizationThresholdPercent = undefined;
      this._enabled = undefined;
      this._historyListLengthThresholdCount = undefined;
      this._memoryUsageThresholdPercent = undefined;
      this._probeThreshold = undefined;
      this._probingIntervalSeconds = undefined;
      this._runningThreadsThreshold = undefined;
      this._secondsBehindSourceThreshold = undefined;
      this._semaphoreWaitThresholdCount = undefined;
      this._transactionDurationThreshold = undefined;
      this._transactionKillExcludedUserHosts = undefined;
      this._transactionKillThresholdSeconds = undefined;
      this._transactionKillType = undefined;
      this._transactionLockWaitThresholdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUtilizationThresholdPercent = value.cpuUtilizationThresholdPercent;
      this._enabled = value.enabled;
      this._historyListLengthThresholdCount = value.historyListLengthThresholdCount;
      this._memoryUsageThresholdPercent = value.memoryUsageThresholdPercent;
      this._probeThreshold = value.probeThreshold;
      this._probingIntervalSeconds = value.probingIntervalSeconds;
      this._runningThreadsThreshold = value.runningThreadsThreshold;
      this._secondsBehindSourceThreshold = value.secondsBehindSourceThreshold;
      this._semaphoreWaitThresholdCount = value.semaphoreWaitThresholdCount;
      this._transactionDurationThreshold = value.transactionDurationThreshold;
      this._transactionKillExcludedUserHosts = value.transactionKillExcludedUserHosts;
      this._transactionKillThresholdSeconds = value.transactionKillThresholdSeconds;
      this._transactionKillType = value.transactionKillType;
      this._transactionLockWaitThresholdCount = value.transactionLockWaitThresholdCount;
    }
  }

  // cpu_utilization_threshold_percent - computed: true, optional: true, required: false
  private _cpuUtilizationThresholdPercent?: number; 
  public get cpuUtilizationThresholdPercent() {
    return this.getNumberAttribute('cpu_utilization_threshold_percent');
  }
  public set cpuUtilizationThresholdPercent(value: number) {
    this._cpuUtilizationThresholdPercent = value;
  }
  public resetCpuUtilizationThresholdPercent() {
    this._cpuUtilizationThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationThresholdPercentInput() {
    return this._cpuUtilizationThresholdPercent;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // history_list_length_threshold_count - computed: true, optional: true, required: false
  private _historyListLengthThresholdCount?: number; 
  public get historyListLengthThresholdCount() {
    return this.getNumberAttribute('history_list_length_threshold_count');
  }
  public set historyListLengthThresholdCount(value: number) {
    this._historyListLengthThresholdCount = value;
  }
  public resetHistoryListLengthThresholdCount() {
    this._historyListLengthThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyListLengthThresholdCountInput() {
    return this._historyListLengthThresholdCount;
  }

  // memory_usage_threshold_percent - computed: true, optional: true, required: false
  private _memoryUsageThresholdPercent?: number; 
  public get memoryUsageThresholdPercent() {
    return this.getNumberAttribute('memory_usage_threshold_percent');
  }
  public set memoryUsageThresholdPercent(value: number) {
    this._memoryUsageThresholdPercent = value;
  }
  public resetMemoryUsageThresholdPercent() {
    this._memoryUsageThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageThresholdPercentInput() {
    return this._memoryUsageThresholdPercent;
  }

  // probe_threshold - computed: true, optional: true, required: false
  private _probeThreshold?: number; 
  public get probeThreshold() {
    return this.getNumberAttribute('probe_threshold');
  }
  public set probeThreshold(value: number) {
    this._probeThreshold = value;
  }
  public resetProbeThreshold() {
    this._probeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeThresholdInput() {
    return this._probeThreshold;
  }

  // probing_interval_seconds - computed: true, optional: true, required: false
  private _probingIntervalSeconds?: number; 
  public get probingIntervalSeconds() {
    return this.getNumberAttribute('probing_interval_seconds');
  }
  public set probingIntervalSeconds(value: number) {
    this._probingIntervalSeconds = value;
  }
  public resetProbingIntervalSeconds() {
    this._probingIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probingIntervalSecondsInput() {
    return this._probingIntervalSeconds;
  }

  // running_threads_threshold - computed: true, optional: true, required: false
  private _runningThreadsThreshold?: number; 
  public get runningThreadsThreshold() {
    return this.getNumberAttribute('running_threads_threshold');
  }
  public set runningThreadsThreshold(value: number) {
    this._runningThreadsThreshold = value;
  }
  public resetRunningThreadsThreshold() {
    this._runningThreadsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningThreadsThresholdInput() {
    return this._runningThreadsThreshold;
  }

  // seconds_behind_source_threshold - computed: true, optional: true, required: false
  private _secondsBehindSourceThreshold?: number; 
  public get secondsBehindSourceThreshold() {
    return this.getNumberAttribute('seconds_behind_source_threshold');
  }
  public set secondsBehindSourceThreshold(value: number) {
    this._secondsBehindSourceThreshold = value;
  }
  public resetSecondsBehindSourceThreshold() {
    this._secondsBehindSourceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsBehindSourceThresholdInput() {
    return this._secondsBehindSourceThreshold;
  }

  // semaphore_wait_threshold_count - computed: true, optional: true, required: false
  private _semaphoreWaitThresholdCount?: number; 
  public get semaphoreWaitThresholdCount() {
    return this.getNumberAttribute('semaphore_wait_threshold_count');
  }
  public set semaphoreWaitThresholdCount(value: number) {
    this._semaphoreWaitThresholdCount = value;
  }
  public resetSemaphoreWaitThresholdCount() {
    this._semaphoreWaitThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semaphoreWaitThresholdCountInput() {
    return this._semaphoreWaitThresholdCount;
  }

  // transaction_duration_threshold - computed: true, optional: true, required: false
  private _transactionDurationThreshold?: number; 
  public get transactionDurationThreshold() {
    return this.getNumberAttribute('transaction_duration_threshold');
  }
  public set transactionDurationThreshold(value: number) {
    this._transactionDurationThreshold = value;
  }
  public resetTransactionDurationThreshold() {
    this._transactionDurationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionDurationThresholdInput() {
    return this._transactionDurationThreshold;
  }

  // transaction_kill_excluded_user_hosts - computed: false, optional: true, required: false
  private _transactionKillExcludedUserHosts?: string[]; 
  public get transactionKillExcludedUserHosts() {
    return this.getListAttribute('transaction_kill_excluded_user_hosts');
  }
  public set transactionKillExcludedUserHosts(value: string[]) {
    this._transactionKillExcludedUserHosts = value;
  }
  public resetTransactionKillExcludedUserHosts() {
    this._transactionKillExcludedUserHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionKillExcludedUserHostsInput() {
    return this._transactionKillExcludedUserHosts;
  }

  // transaction_kill_threshold_seconds - computed: true, optional: true, required: false
  private _transactionKillThresholdSeconds?: number; 
  public get transactionKillThresholdSeconds() {
    return this.getNumberAttribute('transaction_kill_threshold_seconds');
  }
  public set transactionKillThresholdSeconds(value: number) {
    this._transactionKillThresholdSeconds = value;
  }
  public resetTransactionKillThresholdSeconds() {
    this._transactionKillThresholdSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionKillThresholdSecondsInput() {
    return this._transactionKillThresholdSeconds;
  }

  // transaction_kill_type - computed: true, optional: true, required: false
  private _transactionKillType?: string; 
  public get transactionKillType() {
    return this.getStringAttribute('transaction_kill_type');
  }
  public set transactionKillType(value: string) {
    this._transactionKillType = value;
  }
  public resetTransactionKillType() {
    this._transactionKillType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionKillTypeInput() {
    return this._transactionKillType;
  }

  // transaction_lock_wait_threshold_count - computed: true, optional: true, required: false
  private _transactionLockWaitThresholdCount?: number; 
  public get transactionLockWaitThresholdCount() {
    return this.getNumberAttribute('transaction_lock_wait_threshold_count');
  }
  public set transactionLockWaitThresholdCount(value: number) {
    this._transactionLockWaitThresholdCount = value;
  }
  public resetTransactionLockWaitThresholdCount() {
    this._transactionLockWaitThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionLockWaitThresholdCountInput() {
    return this._transactionLockWaitThresholdCount;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics {
  /**
  * Metric name for Read Pool Auto Scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#metric GoogleSqlDatabaseInstance#metric}
  */
  readonly metric?: string;
  /**
  * Target value for Read Pool Auto Scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#target_value GoogleSqlDatabaseInstance#target_value}
  */
  readonly targetValue?: number;
}

export function googleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}


export function googleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_value: {
      value: cdktf.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._targetValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._targetValue = value.targetValue;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // target_value - computed: false, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}

export class GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList extends cdktf.ComplexList {
  public internalValue? : GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics[] | cdktf.IResolvable

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
  public get(index: number): GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference {
    return new GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig {
  /**
  * True if auto scale in is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#disable_scale_in GoogleSqlDatabaseInstance#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * True if Read Pool Auto Scale is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#enabled GoogleSqlDatabaseInstance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of nodes in the read pool. If set to lower than current node count, node count will be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#max_node_count GoogleSqlDatabaseInstance#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes in the read pool. If set to higher than current node count, node count will be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#min_node_count GoogleSqlDatabaseInstance#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * The cooldown period for scale in operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#scale_in_cooldown_seconds GoogleSqlDatabaseInstance#scale_in_cooldown_seconds}
  */
  readonly scaleInCooldownSeconds?: number;
  /**
  * The cooldown period for scale out operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#scale_out_cooldown_seconds GoogleSqlDatabaseInstance#scale_out_cooldown_seconds}
  */
  readonly scaleOutCooldownSeconds?: number;
  /**
  * target_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#target_metrics GoogleSqlDatabaseInstance#target_metrics}
  */
  readonly targetMetrics?: GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics[] | cdktf.IResolvable;
}

export function googleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference | GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    scale_in_cooldown_seconds: cdktf.numberToTerraform(struct!.scaleInCooldownSeconds),
    scale_out_cooldown_seconds: cdktf.numberToTerraform(struct!.scaleOutCooldownSeconds),
    target_metrics: cdktf.listMapper(googleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsToTerraform, true)(struct!.targetMetrics),
  }
}


export function googleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference | GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_scale_in: {
      value: cdktf.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_in_cooldown_seconds: {
      value: cdktf.numberToHclTerraform(struct!.scaleInCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown_seconds: {
      value: cdktf.numberToHclTerraform(struct!.scaleOutCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_metrics: {
      value: cdktf.listMapperHcl(googleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsToHclTerraform, true)(struct!.targetMetrics),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._scaleInCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldownSeconds = this._scaleInCooldownSeconds;
    }
    if (this._scaleOutCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldownSeconds = this._scaleOutCooldownSeconds;
    }
    if (this._targetMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMetrics = this._targetMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableScaleIn = undefined;
      this._enabled = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
      this._scaleInCooldownSeconds = undefined;
      this._scaleOutCooldownSeconds = undefined;
      this._targetMetrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableScaleIn = value.disableScaleIn;
      this._enabled = value.enabled;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
      this._scaleInCooldownSeconds = value.scaleInCooldownSeconds;
      this._scaleOutCooldownSeconds = value.scaleOutCooldownSeconds;
      this._targetMetrics.internalValue = value.targetMetrics;
    }
  }

  // disable_scale_in - computed: false, optional: true, required: false
  private _disableScaleIn?: boolean | cdktf.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktf.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }

  // scale_in_cooldown_seconds - computed: false, optional: true, required: false
  private _scaleInCooldownSeconds?: number; 
  public get scaleInCooldownSeconds() {
    return this.getNumberAttribute('scale_in_cooldown_seconds');
  }
  public set scaleInCooldownSeconds(value: number) {
    this._scaleInCooldownSeconds = value;
  }
  public resetScaleInCooldownSeconds() {
    this._scaleInCooldownSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownSecondsInput() {
    return this._scaleInCooldownSeconds;
  }

  // scale_out_cooldown_seconds - computed: false, optional: true, required: false
  private _scaleOutCooldownSeconds?: number; 
  public get scaleOutCooldownSeconds() {
    return this.getNumberAttribute('scale_out_cooldown_seconds');
  }
  public set scaleOutCooldownSeconds(value: number) {
    this._scaleOutCooldownSeconds = value;
  }
  public resetScaleOutCooldownSeconds() {
    this._scaleOutCooldownSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownSecondsInput() {
    return this._scaleOutCooldownSeconds;
  }

  // target_metrics - computed: false, optional: true, required: false
  private _targetMetrics = new GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetricsList(this, "target_metrics", true);
  public get targetMetrics() {
    return this._targetMetrics;
  }
  public putTargetMetrics(value: GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigTargetMetrics[] | cdktf.IResolvable) {
    this._targetMetrics.internalValue = value;
  }
  public resetTargetMetrics() {
    this._targetMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMetricsInput() {
    return this._targetMetrics.internalValue;
  }
}
export interface GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig {
  /**
  * The name of the destination bucket (e.g., gs://mybucket).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#bucket GoogleSqlDatabaseInstance#bucket}
  */
  readonly bucket?: string;
  /**
  * How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#retention_interval GoogleSqlDatabaseInstance#retention_interval}
  */
  readonly retentionInterval?: string;
  /**
  * How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#upload_interval GoogleSqlDatabaseInstance#upload_interval}
  */
  readonly uploadInterval?: string;
}

export function googleSqlDatabaseInstanceSettingsSqlServerAuditConfigToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference | GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    retention_interval: cdktf.stringToTerraform(struct!.retentionInterval),
    upload_interval: cdktf.stringToTerraform(struct!.uploadInterval),
  }
}


export function googleSqlDatabaseInstanceSettingsSqlServerAuditConfigToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference | GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig): any {
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
    retention_interval: {
      value: cdktf.stringToHclTerraform(struct!.retentionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_interval: {
      value: cdktf.stringToHclTerraform(struct!.uploadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._retentionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInterval = this._retentionInterval;
    }
    if (this._uploadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadInterval = this._uploadInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._retentionInterval = undefined;
      this._uploadInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._retentionInterval = value.retentionInterval;
      this._uploadInterval = value.uploadInterval;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // retention_interval - computed: false, optional: true, required: false
  private _retentionInterval?: string; 
  public get retentionInterval() {
    return this.getStringAttribute('retention_interval');
  }
  public set retentionInterval(value: string) {
    this._retentionInterval = value;
  }
  public resetRetentionInterval() {
    this._retentionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionIntervalInput() {
    return this._retentionInterval;
  }

  // upload_interval - computed: false, optional: true, required: false
  private _uploadInterval?: string; 
  public get uploadInterval() {
    return this.getStringAttribute('upload_interval');
  }
  public set uploadInterval(value: string) {
    this._uploadInterval = value;
  }
  public resetUploadInterval() {
    this._uploadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadIntervalInput() {
    return this._uploadInterval;
  }
}
export interface GoogleSqlDatabaseInstanceSettings {
  /**
  * This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#activation_policy GoogleSqlDatabaseInstance#activation_policy}
  */
  readonly activationPolicy?: string;
  /**
  * Enables Automatic Version Upgrade feature. Can be used with MySQL only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#auto_upgrade_enabled GoogleSqlDatabaseInstance#auto_upgrade_enabled}
  */
  readonly autoUpgradeEnabled?: boolean | cdktf.IResolvable;
  /**
  * The availability type of the Cloud SQL instance, high availability
  * (REGIONAL) or single zone (ZONAL). For all instances, ensure that
  * settings.backup_configuration.enabled is set to true.
  * For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
  * For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
  * is set to true. Defaults to ZONAL.
  * For read pool instances, this field is read-only. The availability type is changed by specifying
  * the number of nodes (node_count).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#availability_type GoogleSqlDatabaseInstance#availability_type}
  */
  readonly availabilityType?: string;
  /**
  * The name of server instance collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#collation GoogleSqlDatabaseInstance#collation}
  */
  readonly collation?: string;
  /**
  * Enables the enforcement of Cloud SQL Auth Proxy or Cloud SQL connectors for all the connections. If enabled, all the direct connections are rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#connector_enforcement GoogleSqlDatabaseInstance#connector_enforcement}
  */
  readonly connectorEnforcement?: string;
  /**
  * Allows using ExecuteSql API to connect to the instance. Disallowed when unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#data_api_access GoogleSqlDatabaseInstance#data_api_access}
  */
  readonly dataApiAccess?: string;
  /**
  * Provisioned number of I/O operations per second for the data disk. This field is only used for HYPERDISK_BALANCED disk types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#data_disk_provisioned_iops GoogleSqlDatabaseInstance#data_disk_provisioned_iops}
  */
  readonly dataDiskProvisionedIops?: number;
  /**
  * Provisioned throughput measured in MiB per second for the data disk. This field is only used for HYPERDISK_BALANCED disk types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#data_disk_provisioned_throughput GoogleSqlDatabaseInstance#data_disk_provisioned_throughput}
  */
  readonly dataDiskProvisionedThroughput?: number;
  /**
  * Configuration to protect against accidental instance deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#deletion_protection_enabled GoogleSqlDatabaseInstance#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables auto-resizing of the storage size. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#disk_autoresize GoogleSqlDatabaseInstance#disk_autoresize}
  */
  readonly diskAutoresize?: boolean | cdktf.IResolvable;
  /**
  * The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#disk_autoresize_limit GoogleSqlDatabaseInstance#disk_autoresize_limit}
  */
  readonly diskAutoresizeLimit?: number;
  /**
  * The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB for PD_SSD, PD_HDD and 20GB for HYPERDISK_BALANCED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#disk_size GoogleSqlDatabaseInstance#disk_size}
  */
  readonly diskSize?: number;
  /**
  * The type of supported data disk is tier dependent and can be PD_SSD or PD_HDD or HYPERDISK_BALANCED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#disk_type GoogleSqlDatabaseInstance#disk_type}
  */
  readonly diskType?: string;
  /**
  * The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#edition GoogleSqlDatabaseInstance#edition}
  */
  readonly edition?: string;
  /**
  * Enables Dataplex Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#enable_dataplex_integration GoogleSqlDatabaseInstance#enable_dataplex_integration}
  */
  readonly enableDataplexIntegration?: boolean | cdktf.IResolvable;
  /**
  * Enables Vertex AI Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#enable_google_ml_integration GoogleSqlDatabaseInstance#enable_google_ml_integration}
  */
  readonly enableGoogleMlIntegration?: boolean | cdktf.IResolvable;
  /**
  * Pricing plan for this instance, can only be PER_USE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#pricing_plan GoogleSqlDatabaseInstance#pricing_plan}
  */
  readonly pricingPlan?: string;
  /**
  * The acceptable replication lag, in seconds, after which a read replica recreates itself. The lag must persist for at least five minutes before recreation is triggered. This is a replica level field, and must be between 300 seconds (five minutes) and 31536000 seconds (one year).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#replication_lag_max_seconds GoogleSqlDatabaseInstance#replication_lag_max_seconds}
  */
  readonly replicationLagMaxSeconds?: number;
  /**
  * When this parameter is set to true, Cloud SQL retains backups of the instance even after the instance is deleted. The ON_DEMAND backup will be retained until customer deletes the backup or the project. The AUTOMATED backup will be retained based on the backups retention setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#retain_backups_on_delete GoogleSqlDatabaseInstance#retain_backups_on_delete}
  */
  readonly retainBackupsOnDelete?: boolean | cdktf.IResolvable;
  /**
  * The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#tier GoogleSqlDatabaseInstance#tier}
  */
  readonly tier: string;
  /**
  * The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#time_zone GoogleSqlDatabaseInstance#time_zone}
  */
  readonly timeZone?: string;
  /**
  * A set of key/value user label pairs to assign to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#user_labels GoogleSqlDatabaseInstance#user_labels}
  */
  readonly userLabels?: { [key: string]: string };
  /**
  * active_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#active_directory_config GoogleSqlDatabaseInstance#active_directory_config}
  */
  readonly activeDirectoryConfig?: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig;
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#advanced_machine_features GoogleSqlDatabaseInstance#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures;
  /**
  * backup_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#backup_configuration GoogleSqlDatabaseInstance#backup_configuration}
  */
  readonly backupConfiguration?: GoogleSqlDatabaseInstanceSettingsBackupConfiguration;
  /**
  * connection_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#connection_pool_config GoogleSqlDatabaseInstance#connection_pool_config}
  */
  readonly connectionPoolConfig?: GoogleSqlDatabaseInstanceSettingsConnectionPoolConfig[] | cdktf.IResolvable;
  /**
  * data_cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#data_cache_config GoogleSqlDatabaseInstance#data_cache_config}
  */
  readonly dataCacheConfig?: GoogleSqlDatabaseInstanceSettingsDataCacheConfig;
  /**
  * database_flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#database_flags GoogleSqlDatabaseInstance#database_flags}
  */
  readonly databaseFlags?: GoogleSqlDatabaseInstanceSettingsDatabaseFlags[] | cdktf.IResolvable;
  /**
  * deny_maintenance_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#deny_maintenance_period GoogleSqlDatabaseInstance#deny_maintenance_period}
  */
  readonly denyMaintenancePeriod?: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod;
  /**
  * entraid_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#entraid_config GoogleSqlDatabaseInstance#entraid_config}
  */
  readonly entraidConfig?: GoogleSqlDatabaseInstanceSettingsEntraidConfig;
  /**
  * final_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#final_backup_config GoogleSqlDatabaseInstance#final_backup_config}
  */
  readonly finalBackupConfig?: GoogleSqlDatabaseInstanceSettingsFinalBackupConfig;
  /**
  * insights_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#insights_config GoogleSqlDatabaseInstance#insights_config}
  */
  readonly insightsConfig?: GoogleSqlDatabaseInstanceSettingsInsightsConfig;
  /**
  * ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#ip_configuration GoogleSqlDatabaseInstance#ip_configuration}
  */
  readonly ipConfiguration?: GoogleSqlDatabaseInstanceSettingsIpConfiguration;
  /**
  * location_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#location_preference GoogleSqlDatabaseInstance#location_preference}
  */
  readonly locationPreference?: GoogleSqlDatabaseInstanceSettingsLocationPreference;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#maintenance_window GoogleSqlDatabaseInstance#maintenance_window}
  */
  readonly maintenanceWindow?: GoogleSqlDatabaseInstanceSettingsMaintenanceWindow;
  /**
  * password_validation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#password_validation_policy GoogleSqlDatabaseInstance#password_validation_policy}
  */
  readonly passwordValidationPolicy?: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy;
  /**
  * performance_capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#performance_capture_config GoogleSqlDatabaseInstance#performance_capture_config}
  */
  readonly performanceCaptureConfig?: GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfig;
  /**
  * read_pool_auto_scale_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#read_pool_auto_scale_config GoogleSqlDatabaseInstance#read_pool_auto_scale_config}
  */
  readonly readPoolAutoScaleConfig?: GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig;
  /**
  * sql_server_audit_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#sql_server_audit_config GoogleSqlDatabaseInstance#sql_server_audit_config}
  */
  readonly sqlServerAuditConfig?: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig;
}

export function googleSqlDatabaseInstanceSettingsToTerraform(struct?: GoogleSqlDatabaseInstanceSettingsOutputReference | GoogleSqlDatabaseInstanceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_policy: cdktf.stringToTerraform(struct!.activationPolicy),
    auto_upgrade_enabled: cdktf.booleanToTerraform(struct!.autoUpgradeEnabled),
    availability_type: cdktf.stringToTerraform(struct!.availabilityType),
    collation: cdktf.stringToTerraform(struct!.collation),
    connector_enforcement: cdktf.stringToTerraform(struct!.connectorEnforcement),
    data_api_access: cdktf.stringToTerraform(struct!.dataApiAccess),
    data_disk_provisioned_iops: cdktf.numberToTerraform(struct!.dataDiskProvisionedIops),
    data_disk_provisioned_throughput: cdktf.numberToTerraform(struct!.dataDiskProvisionedThroughput),
    deletion_protection_enabled: cdktf.booleanToTerraform(struct!.deletionProtectionEnabled),
    disk_autoresize: cdktf.booleanToTerraform(struct!.diskAutoresize),
    disk_autoresize_limit: cdktf.numberToTerraform(struct!.diskAutoresizeLimit),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    edition: cdktf.stringToTerraform(struct!.edition),
    enable_dataplex_integration: cdktf.booleanToTerraform(struct!.enableDataplexIntegration),
    enable_google_ml_integration: cdktf.booleanToTerraform(struct!.enableGoogleMlIntegration),
    pricing_plan: cdktf.stringToTerraform(struct!.pricingPlan),
    replication_lag_max_seconds: cdktf.numberToTerraform(struct!.replicationLagMaxSeconds),
    retain_backups_on_delete: cdktf.booleanToTerraform(struct!.retainBackupsOnDelete),
    tier: cdktf.stringToTerraform(struct!.tier),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    user_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userLabels),
    active_directory_config: googleSqlDatabaseInstanceSettingsActiveDirectoryConfigToTerraform(struct!.activeDirectoryConfig),
    advanced_machine_features: googleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    backup_configuration: googleSqlDatabaseInstanceSettingsBackupConfigurationToTerraform(struct!.backupConfiguration),
    connection_pool_config: cdktf.listMapper(googleSqlDatabaseInstanceSettingsConnectionPoolConfigToTerraform, true)(struct!.connectionPoolConfig),
    data_cache_config: googleSqlDatabaseInstanceSettingsDataCacheConfigToTerraform(struct!.dataCacheConfig),
    database_flags: cdktf.listMapper(googleSqlDatabaseInstanceSettingsDatabaseFlagsToTerraform, true)(struct!.databaseFlags),
    deny_maintenance_period: googleSqlDatabaseInstanceSettingsDenyMaintenancePeriodToTerraform(struct!.denyMaintenancePeriod),
    entraid_config: googleSqlDatabaseInstanceSettingsEntraidConfigToTerraform(struct!.entraidConfig),
    final_backup_config: googleSqlDatabaseInstanceSettingsFinalBackupConfigToTerraform(struct!.finalBackupConfig),
    insights_config: googleSqlDatabaseInstanceSettingsInsightsConfigToTerraform(struct!.insightsConfig),
    ip_configuration: googleSqlDatabaseInstanceSettingsIpConfigurationToTerraform(struct!.ipConfiguration),
    location_preference: googleSqlDatabaseInstanceSettingsLocationPreferenceToTerraform(struct!.locationPreference),
    maintenance_window: googleSqlDatabaseInstanceSettingsMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    password_validation_policy: googleSqlDatabaseInstanceSettingsPasswordValidationPolicyToTerraform(struct!.passwordValidationPolicy),
    performance_capture_config: googleSqlDatabaseInstanceSettingsPerformanceCaptureConfigToTerraform(struct!.performanceCaptureConfig),
    read_pool_auto_scale_config: googleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigToTerraform(struct!.readPoolAutoScaleConfig),
    sql_server_audit_config: googleSqlDatabaseInstanceSettingsSqlServerAuditConfigToTerraform(struct!.sqlServerAuditConfig),
  }
}


export function googleSqlDatabaseInstanceSettingsToHclTerraform(struct?: GoogleSqlDatabaseInstanceSettingsOutputReference | GoogleSqlDatabaseInstanceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_policy: {
      value: cdktf.stringToHclTerraform(struct!.activationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_upgrade_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgradeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    availability_type: {
      value: cdktf.stringToHclTerraform(struct!.availabilityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collation: {
      value: cdktf.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_enforcement: {
      value: cdktf.stringToHclTerraform(struct!.connectorEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_api_access: {
      value: cdktf.stringToHclTerraform(struct!.dataApiAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk_provisioned_iops: {
      value: cdktf.numberToHclTerraform(struct!.dataDiskProvisionedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_disk_provisioned_throughput: {
      value: cdktf.numberToHclTerraform(struct!.dataDiskProvisionedThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deletion_protection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.deletionProtectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_autoresize: {
      value: cdktf.booleanToHclTerraform(struct!.diskAutoresize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_autoresize_limit: {
      value: cdktf.numberToHclTerraform(struct!.diskAutoresizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edition: {
      value: cdktf.stringToHclTerraform(struct!.edition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dataplex_integration: {
      value: cdktf.booleanToHclTerraform(struct!.enableDataplexIntegration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_google_ml_integration: {
      value: cdktf.booleanToHclTerraform(struct!.enableGoogleMlIntegration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pricing_plan: {
      value: cdktf.stringToHclTerraform(struct!.pricingPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_lag_max_seconds: {
      value: cdktf.numberToHclTerraform(struct!.replicationLagMaxSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retain_backups_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.retainBackupsOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.userLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    active_directory_config: {
      value: googleSqlDatabaseInstanceSettingsActiveDirectoryConfigToHclTerraform(struct!.activeDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigList",
    },
    advanced_machine_features: {
      value: googleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesList",
    },
    backup_configuration: {
      value: googleSqlDatabaseInstanceSettingsBackupConfigurationToHclTerraform(struct!.backupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsBackupConfigurationList",
    },
    connection_pool_config: {
      value: cdktf.listMapperHcl(googleSqlDatabaseInstanceSettingsConnectionPoolConfigToHclTerraform, true)(struct!.connectionPoolConfig),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList",
    },
    data_cache_config: {
      value: googleSqlDatabaseInstanceSettingsDataCacheConfigToHclTerraform(struct!.dataCacheConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsDataCacheConfigList",
    },
    database_flags: {
      value: cdktf.listMapperHcl(googleSqlDatabaseInstanceSettingsDatabaseFlagsToHclTerraform, true)(struct!.databaseFlags),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList",
    },
    deny_maintenance_period: {
      value: googleSqlDatabaseInstanceSettingsDenyMaintenancePeriodToHclTerraform(struct!.denyMaintenancePeriod),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodList",
    },
    entraid_config: {
      value: googleSqlDatabaseInstanceSettingsEntraidConfigToHclTerraform(struct!.entraidConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsEntraidConfigList",
    },
    final_backup_config: {
      value: googleSqlDatabaseInstanceSettingsFinalBackupConfigToHclTerraform(struct!.finalBackupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsFinalBackupConfigList",
    },
    insights_config: {
      value: googleSqlDatabaseInstanceSettingsInsightsConfigToHclTerraform(struct!.insightsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsInsightsConfigList",
    },
    ip_configuration: {
      value: googleSqlDatabaseInstanceSettingsIpConfigurationToHclTerraform(struct!.ipConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsIpConfigurationList",
    },
    location_preference: {
      value: googleSqlDatabaseInstanceSettingsLocationPreferenceToHclTerraform(struct!.locationPreference),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsLocationPreferenceList",
    },
    maintenance_window: {
      value: googleSqlDatabaseInstanceSettingsMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsMaintenanceWindowList",
    },
    password_validation_policy: {
      value: googleSqlDatabaseInstanceSettingsPasswordValidationPolicyToHclTerraform(struct!.passwordValidationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyList",
    },
    performance_capture_config: {
      value: googleSqlDatabaseInstanceSettingsPerformanceCaptureConfigToHclTerraform(struct!.performanceCaptureConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfigList",
    },
    read_pool_auto_scale_config: {
      value: googleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigToHclTerraform(struct!.readPoolAutoScaleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigList",
    },
    sql_server_audit_config: {
      value: googleSqlDatabaseInstanceSettingsSqlServerAuditConfigToHclTerraform(struct!.sqlServerAuditConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSqlDatabaseInstanceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationPolicy = this._activationPolicy;
    }
    if (this._autoUpgradeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradeEnabled = this._autoUpgradeEnabled;
    }
    if (this._availabilityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityType = this._availabilityType;
    }
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._connectorEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorEnforcement = this._connectorEnforcement;
    }
    if (this._dataApiAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataApiAccess = this._dataApiAccess;
    }
    if (this._dataDiskProvisionedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskProvisionedIops = this._dataDiskProvisionedIops;
    }
    if (this._dataDiskProvisionedThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskProvisionedThroughput = this._dataDiskProvisionedThroughput;
    }
    if (this._deletionProtectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtectionEnabled = this._deletionProtectionEnabled;
    }
    if (this._diskAutoresize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAutoresize = this._diskAutoresize;
    }
    if (this._diskAutoresizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAutoresizeLimit = this._diskAutoresizeLimit;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._edition !== undefined) {
      hasAnyValues = true;
      internalValueResult.edition = this._edition;
    }
    if (this._enableDataplexIntegration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDataplexIntegration = this._enableDataplexIntegration;
    }
    if (this._enableGoogleMlIntegration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGoogleMlIntegration = this._enableGoogleMlIntegration;
    }
    if (this._pricingPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingPlan = this._pricingPlan;
    }
    if (this._replicationLagMaxSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationLagMaxSeconds = this._replicationLagMaxSeconds;
    }
    if (this._retainBackupsOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainBackupsOnDelete = this._retainBackupsOnDelete;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._userLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLabels = this._userLabels;
    }
    if (this._activeDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryConfig = this._activeDirectoryConfig?.internalValue;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._backupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfiguration = this._backupConfiguration?.internalValue;
    }
    if (this._connectionPoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolConfig = this._connectionPoolConfig?.internalValue;
    }
    if (this._dataCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheConfig = this._dataCacheConfig?.internalValue;
    }
    if (this._databaseFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFlags = this._databaseFlags?.internalValue;
    }
    if (this._denyMaintenancePeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyMaintenancePeriod = this._denyMaintenancePeriod?.internalValue;
    }
    if (this._entraidConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entraidConfig = this._entraidConfig?.internalValue;
    }
    if (this._finalBackupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalBackupConfig = this._finalBackupConfig?.internalValue;
    }
    if (this._insightsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsConfig = this._insightsConfig?.internalValue;
    }
    if (this._ipConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfiguration = this._ipConfiguration?.internalValue;
    }
    if (this._locationPreference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPreference = this._locationPreference?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._passwordValidationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordValidationPolicy = this._passwordValidationPolicy?.internalValue;
    }
    if (this._performanceCaptureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceCaptureConfig = this._performanceCaptureConfig?.internalValue;
    }
    if (this._readPoolAutoScaleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readPoolAutoScaleConfig = this._readPoolAutoScaleConfig?.internalValue;
    }
    if (this._sqlServerAuditConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerAuditConfig = this._sqlServerAuditConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSqlDatabaseInstanceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activationPolicy = undefined;
      this._autoUpgradeEnabled = undefined;
      this._availabilityType = undefined;
      this._collation = undefined;
      this._connectorEnforcement = undefined;
      this._dataApiAccess = undefined;
      this._dataDiskProvisionedIops = undefined;
      this._dataDiskProvisionedThroughput = undefined;
      this._deletionProtectionEnabled = undefined;
      this._diskAutoresize = undefined;
      this._diskAutoresizeLimit = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._edition = undefined;
      this._enableDataplexIntegration = undefined;
      this._enableGoogleMlIntegration = undefined;
      this._pricingPlan = undefined;
      this._replicationLagMaxSeconds = undefined;
      this._retainBackupsOnDelete = undefined;
      this._tier = undefined;
      this._timeZone = undefined;
      this._userLabels = undefined;
      this._activeDirectoryConfig.internalValue = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._backupConfiguration.internalValue = undefined;
      this._connectionPoolConfig.internalValue = undefined;
      this._dataCacheConfig.internalValue = undefined;
      this._databaseFlags.internalValue = undefined;
      this._denyMaintenancePeriod.internalValue = undefined;
      this._entraidConfig.internalValue = undefined;
      this._finalBackupConfig.internalValue = undefined;
      this._insightsConfig.internalValue = undefined;
      this._ipConfiguration.internalValue = undefined;
      this._locationPreference.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._passwordValidationPolicy.internalValue = undefined;
      this._performanceCaptureConfig.internalValue = undefined;
      this._readPoolAutoScaleConfig.internalValue = undefined;
      this._sqlServerAuditConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activationPolicy = value.activationPolicy;
      this._autoUpgradeEnabled = value.autoUpgradeEnabled;
      this._availabilityType = value.availabilityType;
      this._collation = value.collation;
      this._connectorEnforcement = value.connectorEnforcement;
      this._dataApiAccess = value.dataApiAccess;
      this._dataDiskProvisionedIops = value.dataDiskProvisionedIops;
      this._dataDiskProvisionedThroughput = value.dataDiskProvisionedThroughput;
      this._deletionProtectionEnabled = value.deletionProtectionEnabled;
      this._diskAutoresize = value.diskAutoresize;
      this._diskAutoresizeLimit = value.diskAutoresizeLimit;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._edition = value.edition;
      this._enableDataplexIntegration = value.enableDataplexIntegration;
      this._enableGoogleMlIntegration = value.enableGoogleMlIntegration;
      this._pricingPlan = value.pricingPlan;
      this._replicationLagMaxSeconds = value.replicationLagMaxSeconds;
      this._retainBackupsOnDelete = value.retainBackupsOnDelete;
      this._tier = value.tier;
      this._timeZone = value.timeZone;
      this._userLabels = value.userLabels;
      this._activeDirectoryConfig.internalValue = value.activeDirectoryConfig;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._backupConfiguration.internalValue = value.backupConfiguration;
      this._connectionPoolConfig.internalValue = value.connectionPoolConfig;
      this._dataCacheConfig.internalValue = value.dataCacheConfig;
      this._databaseFlags.internalValue = value.databaseFlags;
      this._denyMaintenancePeriod.internalValue = value.denyMaintenancePeriod;
      this._entraidConfig.internalValue = value.entraidConfig;
      this._finalBackupConfig.internalValue = value.finalBackupConfig;
      this._insightsConfig.internalValue = value.insightsConfig;
      this._ipConfiguration.internalValue = value.ipConfiguration;
      this._locationPreference.internalValue = value.locationPreference;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._passwordValidationPolicy.internalValue = value.passwordValidationPolicy;
      this._performanceCaptureConfig.internalValue = value.performanceCaptureConfig;
      this._readPoolAutoScaleConfig.internalValue = value.readPoolAutoScaleConfig;
      this._sqlServerAuditConfig.internalValue = value.sqlServerAuditConfig;
    }
  }

  // activation_policy - computed: false, optional: true, required: false
  private _activationPolicy?: string; 
  public get activationPolicy() {
    return this.getStringAttribute('activation_policy');
  }
  public set activationPolicy(value: string) {
    this._activationPolicy = value;
  }
  public resetActivationPolicy() {
    this._activationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationPolicyInput() {
    return this._activationPolicy;
  }

  // auto_upgrade_enabled - computed: false, optional: true, required: false
  private _autoUpgradeEnabled?: boolean | cdktf.IResolvable; 
  public get autoUpgradeEnabled() {
    return this.getBooleanAttribute('auto_upgrade_enabled');
  }
  public set autoUpgradeEnabled(value: boolean | cdktf.IResolvable) {
    this._autoUpgradeEnabled = value;
  }
  public resetAutoUpgradeEnabled() {
    this._autoUpgradeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeEnabledInput() {
    return this._autoUpgradeEnabled;
  }

  // availability_type - computed: false, optional: true, required: false
  private _availabilityType?: string; 
  public get availabilityType() {
    return this.getStringAttribute('availability_type');
  }
  public set availabilityType(value: string) {
    this._availabilityType = value;
  }
  public resetAvailabilityType() {
    this._availabilityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityTypeInput() {
    return this._availabilityType;
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

  // connector_enforcement - computed: true, optional: true, required: false
  private _connectorEnforcement?: string; 
  public get connectorEnforcement() {
    return this.getStringAttribute('connector_enforcement');
  }
  public set connectorEnforcement(value: string) {
    this._connectorEnforcement = value;
  }
  public resetConnectorEnforcement() {
    this._connectorEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorEnforcementInput() {
    return this._connectorEnforcement;
  }

  // data_api_access - computed: true, optional: true, required: false
  private _dataApiAccess?: string; 
  public get dataApiAccess() {
    return this.getStringAttribute('data_api_access');
  }
  public set dataApiAccess(value: string) {
    this._dataApiAccess = value;
  }
  public resetDataApiAccess() {
    this._dataApiAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataApiAccessInput() {
    return this._dataApiAccess;
  }

  // data_disk_provisioned_iops - computed: true, optional: true, required: false
  private _dataDiskProvisionedIops?: number; 
  public get dataDiskProvisionedIops() {
    return this.getNumberAttribute('data_disk_provisioned_iops');
  }
  public set dataDiskProvisionedIops(value: number) {
    this._dataDiskProvisionedIops = value;
  }
  public resetDataDiskProvisionedIops() {
    this._dataDiskProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskProvisionedIopsInput() {
    return this._dataDiskProvisionedIops;
  }

  // data_disk_provisioned_throughput - computed: true, optional: true, required: false
  private _dataDiskProvisionedThroughput?: number; 
  public get dataDiskProvisionedThroughput() {
    return this.getNumberAttribute('data_disk_provisioned_throughput');
  }
  public set dataDiskProvisionedThroughput(value: number) {
    this._dataDiskProvisionedThroughput = value;
  }
  public resetDataDiskProvisionedThroughput() {
    this._dataDiskProvisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskProvisionedThroughputInput() {
    return this._dataDiskProvisionedThroughput;
  }

  // deletion_protection_enabled - computed: false, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // disk_autoresize - computed: false, optional: true, required: false
  private _diskAutoresize?: boolean | cdktf.IResolvable; 
  public get diskAutoresize() {
    return this.getBooleanAttribute('disk_autoresize');
  }
  public set diskAutoresize(value: boolean | cdktf.IResolvable) {
    this._diskAutoresize = value;
  }
  public resetDiskAutoresize() {
    this._diskAutoresize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAutoresizeInput() {
    return this._diskAutoresize;
  }

  // disk_autoresize_limit - computed: false, optional: true, required: false
  private _diskAutoresizeLimit?: number; 
  public get diskAutoresizeLimit() {
    return this.getNumberAttribute('disk_autoresize_limit');
  }
  public set diskAutoresizeLimit(value: number) {
    this._diskAutoresizeLimit = value;
  }
  public resetDiskAutoresizeLimit() {
    this._diskAutoresizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAutoresizeLimitInput() {
    return this._diskAutoresizeLimit;
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // edition - computed: true, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // effective_availability_type - computed: true, optional: false, required: false
  public get effectiveAvailabilityType() {
    return this.getStringAttribute('effective_availability_type');
  }

  // enable_dataplex_integration - computed: false, optional: true, required: false
  private _enableDataplexIntegration?: boolean | cdktf.IResolvable; 
  public get enableDataplexIntegration() {
    return this.getBooleanAttribute('enable_dataplex_integration');
  }
  public set enableDataplexIntegration(value: boolean | cdktf.IResolvable) {
    this._enableDataplexIntegration = value;
  }
  public resetEnableDataplexIntegration() {
    this._enableDataplexIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDataplexIntegrationInput() {
    return this._enableDataplexIntegration;
  }

  // enable_google_ml_integration - computed: false, optional: true, required: false
  private _enableGoogleMlIntegration?: boolean | cdktf.IResolvable; 
  public get enableGoogleMlIntegration() {
    return this.getBooleanAttribute('enable_google_ml_integration');
  }
  public set enableGoogleMlIntegration(value: boolean | cdktf.IResolvable) {
    this._enableGoogleMlIntegration = value;
  }
  public resetEnableGoogleMlIntegration() {
    this._enableGoogleMlIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGoogleMlIntegrationInput() {
    return this._enableGoogleMlIntegration;
  }

  // pricing_plan - computed: false, optional: true, required: false
  private _pricingPlan?: string; 
  public get pricingPlan() {
    return this.getStringAttribute('pricing_plan');
  }
  public set pricingPlan(value: string) {
    this._pricingPlan = value;
  }
  public resetPricingPlan() {
    this._pricingPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingPlanInput() {
    return this._pricingPlan;
  }

  // replication_lag_max_seconds - computed: true, optional: true, required: false
  private _replicationLagMaxSeconds?: number; 
  public get replicationLagMaxSeconds() {
    return this.getNumberAttribute('replication_lag_max_seconds');
  }
  public set replicationLagMaxSeconds(value: number) {
    this._replicationLagMaxSeconds = value;
  }
  public resetReplicationLagMaxSeconds() {
    this._replicationLagMaxSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationLagMaxSecondsInput() {
    return this._replicationLagMaxSeconds;
  }

  // retain_backups_on_delete - computed: false, optional: true, required: false
  private _retainBackupsOnDelete?: boolean | cdktf.IResolvable; 
  public get retainBackupsOnDelete() {
    return this.getBooleanAttribute('retain_backups_on_delete');
  }
  public set retainBackupsOnDelete(value: boolean | cdktf.IResolvable) {
    this._retainBackupsOnDelete = value;
  }
  public resetRetainBackupsOnDelete() {
    this._retainBackupsOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainBackupsOnDeleteInput() {
    return this._retainBackupsOnDelete;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // user_labels - computed: true, optional: true, required: false
  private _userLabels?: { [key: string]: string }; 
  public get userLabels() {
    return this.getStringMapAttribute('user_labels');
  }
  public set userLabels(value: { [key: string]: string }) {
    this._userLabels = value;
  }
  public resetUserLabels() {
    this._userLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLabelsInput() {
    return this._userLabels;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // active_directory_config - computed: false, optional: true, required: false
  private _activeDirectoryConfig = new GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference(this, "active_directory_config");
  public get activeDirectoryConfig() {
    return this._activeDirectoryConfig;
  }
  public putActiveDirectoryConfig(value: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig) {
    this._activeDirectoryConfig.internalValue = value;
  }
  public resetActiveDirectoryConfig() {
    this._activeDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryConfigInput() {
    return this._activeDirectoryConfig.internalValue;
  }

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // backup_configuration - computed: false, optional: true, required: false
  private _backupConfiguration = new GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference(this, "backup_configuration");
  public get backupConfiguration() {
    return this._backupConfiguration;
  }
  public putBackupConfiguration(value: GoogleSqlDatabaseInstanceSettingsBackupConfiguration) {
    this._backupConfiguration.internalValue = value;
  }
  public resetBackupConfiguration() {
    this._backupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigurationInput() {
    return this._backupConfiguration.internalValue;
  }

  // connection_pool_config - computed: false, optional: true, required: false
  private _connectionPoolConfig = new GoogleSqlDatabaseInstanceSettingsConnectionPoolConfigList(this, "connection_pool_config", true);
  public get connectionPoolConfig() {
    return this._connectionPoolConfig;
  }
  public putConnectionPoolConfig(value: GoogleSqlDatabaseInstanceSettingsConnectionPoolConfig[] | cdktf.IResolvable) {
    this._connectionPoolConfig.internalValue = value;
  }
  public resetConnectionPoolConfig() {
    this._connectionPoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolConfigInput() {
    return this._connectionPoolConfig.internalValue;
  }

  // data_cache_config - computed: false, optional: true, required: false
  private _dataCacheConfig = new GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference(this, "data_cache_config");
  public get dataCacheConfig() {
    return this._dataCacheConfig;
  }
  public putDataCacheConfig(value: GoogleSqlDatabaseInstanceSettingsDataCacheConfig) {
    this._dataCacheConfig.internalValue = value;
  }
  public resetDataCacheConfig() {
    this._dataCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheConfigInput() {
    return this._dataCacheConfig.internalValue;
  }

  // database_flags - computed: false, optional: true, required: false
  private _databaseFlags = new GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList(this, "database_flags", true);
  public get databaseFlags() {
    return this._databaseFlags;
  }
  public putDatabaseFlags(value: GoogleSqlDatabaseInstanceSettingsDatabaseFlags[] | cdktf.IResolvable) {
    this._databaseFlags.internalValue = value;
  }
  public resetDatabaseFlags() {
    this._databaseFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFlagsInput() {
    return this._databaseFlags.internalValue;
  }

  // deny_maintenance_period - computed: false, optional: true, required: false
  private _denyMaintenancePeriod = new GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference(this, "deny_maintenance_period");
  public get denyMaintenancePeriod() {
    return this._denyMaintenancePeriod;
  }
  public putDenyMaintenancePeriod(value: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod) {
    this._denyMaintenancePeriod.internalValue = value;
  }
  public resetDenyMaintenancePeriod() {
    this._denyMaintenancePeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyMaintenancePeriodInput() {
    return this._denyMaintenancePeriod.internalValue;
  }

  // entraid_config - computed: false, optional: true, required: false
  private _entraidConfig = new GoogleSqlDatabaseInstanceSettingsEntraidConfigOutputReference(this, "entraid_config");
  public get entraidConfig() {
    return this._entraidConfig;
  }
  public putEntraidConfig(value: GoogleSqlDatabaseInstanceSettingsEntraidConfig) {
    this._entraidConfig.internalValue = value;
  }
  public resetEntraidConfig() {
    this._entraidConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entraidConfigInput() {
    return this._entraidConfig.internalValue;
  }

  // final_backup_config - computed: false, optional: true, required: false
  private _finalBackupConfig = new GoogleSqlDatabaseInstanceSettingsFinalBackupConfigOutputReference(this, "final_backup_config");
  public get finalBackupConfig() {
    return this._finalBackupConfig;
  }
  public putFinalBackupConfig(value: GoogleSqlDatabaseInstanceSettingsFinalBackupConfig) {
    this._finalBackupConfig.internalValue = value;
  }
  public resetFinalBackupConfig() {
    this._finalBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalBackupConfigInput() {
    return this._finalBackupConfig.internalValue;
  }

  // insights_config - computed: false, optional: true, required: false
  private _insightsConfig = new GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference(this, "insights_config");
  public get insightsConfig() {
    return this._insightsConfig;
  }
  public putInsightsConfig(value: GoogleSqlDatabaseInstanceSettingsInsightsConfig) {
    this._insightsConfig.internalValue = value;
  }
  public resetInsightsConfig() {
    this._insightsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsConfigInput() {
    return this._insightsConfig.internalValue;
  }

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration = new GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference(this, "ip_configuration");
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: GoogleSqlDatabaseInstanceSettingsIpConfiguration) {
    this._ipConfiguration.internalValue = value;
  }
  public resetIpConfiguration() {
    this._ipConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }

  // location_preference - computed: false, optional: true, required: false
  private _locationPreference = new GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference(this, "location_preference");
  public get locationPreference() {
    return this._locationPreference;
  }
  public putLocationPreference(value: GoogleSqlDatabaseInstanceSettingsLocationPreference) {
    this._locationPreference.internalValue = value;
  }
  public resetLocationPreference() {
    this._locationPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPreferenceInput() {
    return this._locationPreference.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: GoogleSqlDatabaseInstanceSettingsMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // password_validation_policy - computed: false, optional: true, required: false
  private _passwordValidationPolicy = new GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference(this, "password_validation_policy");
  public get passwordValidationPolicy() {
    return this._passwordValidationPolicy;
  }
  public putPasswordValidationPolicy(value: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy) {
    this._passwordValidationPolicy.internalValue = value;
  }
  public resetPasswordValidationPolicy() {
    this._passwordValidationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordValidationPolicyInput() {
    return this._passwordValidationPolicy.internalValue;
  }

  // performance_capture_config - computed: false, optional: true, required: false
  private _performanceCaptureConfig = new GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfigOutputReference(this, "performance_capture_config");
  public get performanceCaptureConfig() {
    return this._performanceCaptureConfig;
  }
  public putPerformanceCaptureConfig(value: GoogleSqlDatabaseInstanceSettingsPerformanceCaptureConfig) {
    this._performanceCaptureConfig.internalValue = value;
  }
  public resetPerformanceCaptureConfig() {
    this._performanceCaptureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceCaptureConfigInput() {
    return this._performanceCaptureConfig.internalValue;
  }

  // read_pool_auto_scale_config - computed: false, optional: true, required: false
  private _readPoolAutoScaleConfig = new GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfigOutputReference(this, "read_pool_auto_scale_config");
  public get readPoolAutoScaleConfig() {
    return this._readPoolAutoScaleConfig;
  }
  public putReadPoolAutoScaleConfig(value: GoogleSqlDatabaseInstanceSettingsReadPoolAutoScaleConfig) {
    this._readPoolAutoScaleConfig.internalValue = value;
  }
  public resetReadPoolAutoScaleConfig() {
    this._readPoolAutoScaleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPoolAutoScaleConfigInput() {
    return this._readPoolAutoScaleConfig.internalValue;
  }

  // sql_server_audit_config - computed: false, optional: true, required: false
  private _sqlServerAuditConfig = new GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference(this, "sql_server_audit_config");
  public get sqlServerAuditConfig() {
    return this._sqlServerAuditConfig;
  }
  public putSqlServerAuditConfig(value: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig) {
    this._sqlServerAuditConfig.internalValue = value;
  }
  public resetSqlServerAuditConfig() {
    this._sqlServerAuditConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerAuditConfigInput() {
    return this._sqlServerAuditConfig.internalValue;
  }
}
export interface GoogleSqlDatabaseInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#create GoogleSqlDatabaseInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#delete GoogleSqlDatabaseInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#update GoogleSqlDatabaseInstance#update}
  */
  readonly update?: string;
}

export function googleSqlDatabaseInstanceTimeoutsToTerraform(struct?: GoogleSqlDatabaseInstanceTimeouts | cdktf.IResolvable): any {
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


export function googleSqlDatabaseInstanceTimeoutsToHclTerraform(struct?: GoogleSqlDatabaseInstanceTimeouts | cdktf.IResolvable): any {
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

export class GoogleSqlDatabaseInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleSqlDatabaseInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleSqlDatabaseInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance google_sql_database_instance}
*/
export class GoogleSqlDatabaseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_sql_database_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleSqlDatabaseInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleSqlDatabaseInstance to import
  * @param importFromId The id of the existing GoogleSqlDatabaseInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleSqlDatabaseInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_sql_database_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_sql_database_instance google_sql_database_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleSqlDatabaseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleSqlDatabaseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_database_instance',
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
    this._backupdrBackup = config.backupdrBackup;
    this._databaseVersion = config.databaseVersion;
    this._deletionPolicy = config.deletionPolicy;
    this._deletionProtection = config.deletionProtection;
    this._encryptionKeyName = config.encryptionKeyName;
    this._enforceNewSqlNetworkArchitecture = config.enforceNewSqlNetworkArchitecture;
    this._finalBackupDescription = config.finalBackupDescription;
    this._id = config.id;
    this._includeReplicasForMajorVersionUpgrade = config.includeReplicasForMajorVersionUpgrade;
    this._instanceType = config.instanceType;
    this._maintenanceVersion = config.maintenanceVersion;
    this._masterInstanceName = config.masterInstanceName;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._project = config.project;
    this._region = config.region;
    this._replicaNames = config.replicaNames;
    this._rootPassword = config.rootPassword;
    this._rootPasswordWo = config.rootPasswordWo;
    this._rootPasswordWoVersion = config.rootPasswordWoVersion;
    this._switchTransactionLogsToCloudStorageEnabled = config.switchTransactionLogsToCloudStorageEnabled;
    this._clone.internalValue = config.clone;
    this._pointInTimeRestoreContext.internalValue = config.pointInTimeRestoreContext;
    this._replicaConfiguration.internalValue = config.replicaConfiguration;
    this._replicationCluster.internalValue = config.replicationCluster;
    this._restoreBackupContext.internalValue = config.restoreBackupContext;
    this._settings.internalValue = config.settings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_maintenance_versions - computed: true, optional: false, required: false
  public get availableMaintenanceVersions() {
    return this.getListAttribute('available_maintenance_versions');
  }

  // backupdr_backup - computed: false, optional: true, required: false
  private _backupdrBackup?: string; 
  public get backupdrBackup() {
    return this.getStringAttribute('backupdr_backup');
  }
  public set backupdrBackup(value: string) {
    this._backupdrBackup = value;
  }
  public resetBackupdrBackup() {
    this._backupdrBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupdrBackupInput() {
    return this._backupdrBackup;
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // database_version - computed: false, optional: false, required: true
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
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

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // dns_names - computed: true, optional: false, required: false
  private _dnsNames = new GoogleSqlDatabaseInstanceDnsNamesList(this, "dns_names", false);
  public get dnsNames() {
    return this._dnsNames;
  }

  // encryption_key_name - computed: true, optional: true, required: false
  private _encryptionKeyName?: string; 
  public get encryptionKeyName() {
    return this.getStringAttribute('encryption_key_name');
  }
  public set encryptionKeyName(value: string) {
    this._encryptionKeyName = value;
  }
  public resetEncryptionKeyName() {
    this._encryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyNameInput() {
    return this._encryptionKeyName;
  }

  // enforce_new_sql_network_architecture - computed: true, optional: true, required: false
  private _enforceNewSqlNetworkArchitecture?: boolean | cdktf.IResolvable; 
  public get enforceNewSqlNetworkArchitecture() {
    return this.getBooleanAttribute('enforce_new_sql_network_architecture');
  }
  public set enforceNewSqlNetworkArchitecture(value: boolean | cdktf.IResolvable) {
    this._enforceNewSqlNetworkArchitecture = value;
  }
  public resetEnforceNewSqlNetworkArchitecture() {
    this._enforceNewSqlNetworkArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceNewSqlNetworkArchitectureInput() {
    return this._enforceNewSqlNetworkArchitecture;
  }

  // final_backup_description - computed: false, optional: true, required: false
  private _finalBackupDescription?: string; 
  public get finalBackupDescription() {
    return this.getStringAttribute('final_backup_description');
  }
  public set finalBackupDescription(value: string) {
    this._finalBackupDescription = value;
  }
  public resetFinalBackupDescription() {
    this._finalBackupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalBackupDescriptionInput() {
    return this._finalBackupDescription;
  }

  // first_ip_address - computed: true, optional: false, required: false
  public get firstIpAddress() {
    return this.getStringAttribute('first_ip_address');
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

  // include_replicas_for_major_version_upgrade - computed: false, optional: true, required: false
  private _includeReplicasForMajorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get includeReplicasForMajorVersionUpgrade() {
    return this.getBooleanAttribute('include_replicas_for_major_version_upgrade');
  }
  public set includeReplicasForMajorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._includeReplicasForMajorVersionUpgrade = value;
  }
  public resetIncludeReplicasForMajorVersionUpgrade() {
    this._includeReplicasForMajorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReplicasForMajorVersionUpgradeInput() {
    return this._includeReplicasForMajorVersionUpgrade;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new GoogleSqlDatabaseInstanceIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }

  // maintenance_version - computed: true, optional: true, required: false
  private _maintenanceVersion?: string; 
  public get maintenanceVersion() {
    return this.getStringAttribute('maintenance_version');
  }
  public set maintenanceVersion(value: string) {
    this._maintenanceVersion = value;
  }
  public resetMaintenanceVersion() {
    this._maintenanceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceVersionInput() {
    return this._maintenanceVersion;
  }

  // master_instance_name - computed: true, optional: true, required: false
  private _masterInstanceName?: string; 
  public get masterInstanceName() {
    return this.getStringAttribute('master_instance_name');
  }
  public set masterInstanceName(value: string) {
    this._masterInstanceName = value;
  }
  public resetMasterInstanceName() {
    this._masterInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceNameInput() {
    return this._masterInstanceName;
  }

  // name - computed: true, optional: true, required: false
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
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

  // psc_service_attachment_link - computed: true, optional: false, required: false
  public get pscServiceAttachmentLink() {
    return this.getStringAttribute('psc_service_attachment_link');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replica_names - computed: true, optional: true, required: false
  private _replicaNames?: string[]; 
  public get replicaNames() {
    return this.getListAttribute('replica_names');
  }
  public set replicaNames(value: string[]) {
    this._replicaNames = value;
  }
  public resetReplicaNames() {
    this._replicaNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaNamesInput() {
    return this._replicaNames;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // root_password_wo - computed: false, optional: true, required: false
  private _rootPasswordWo?: string; 
  public get rootPasswordWo() {
    return this.getStringAttribute('root_password_wo');
  }
  public set rootPasswordWo(value: string) {
    this._rootPasswordWo = value;
  }
  public resetRootPasswordWo() {
    this._rootPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordWoInput() {
    return this._rootPasswordWo;
  }

  // root_password_wo_version - computed: false, optional: true, required: false
  private _rootPasswordWoVersion?: string; 
  public get rootPasswordWoVersion() {
    return this.getStringAttribute('root_password_wo_version');
  }
  public set rootPasswordWoVersion(value: string) {
    this._rootPasswordWoVersion = value;
  }
  public resetRootPasswordWoVersion() {
    this._rootPasswordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordWoVersionInput() {
    return this._rootPasswordWoVersion;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // server_ca_cert - computed: true, optional: false, required: false
  private _serverCaCert = new GoogleSqlDatabaseInstanceServerCaCertList(this, "server_ca_cert", false);
  public get serverCaCert() {
    return this._serverCaCert;
  }

  // service_account_email_address - computed: true, optional: false, required: false
  public get serviceAccountEmailAddress() {
    return this.getStringAttribute('service_account_email_address');
  }

  // switch_transaction_logs_to_cloud_storage_enabled - computed: false, optional: true, required: false
  private _switchTransactionLogsToCloudStorageEnabled?: boolean | cdktf.IResolvable; 
  public get switchTransactionLogsToCloudStorageEnabled() {
    return this.getBooleanAttribute('switch_transaction_logs_to_cloud_storage_enabled');
  }
  public set switchTransactionLogsToCloudStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._switchTransactionLogsToCloudStorageEnabled = value;
  }
  public resetSwitchTransactionLogsToCloudStorageEnabled() {
    this._switchTransactionLogsToCloudStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchTransactionLogsToCloudStorageEnabledInput() {
    return this._switchTransactionLogsToCloudStorageEnabled;
  }

  // clone - computed: false, optional: true, required: false
  private _clone = new GoogleSqlDatabaseInstanceCloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: GoogleSqlDatabaseInstanceClone) {
    this._clone.internalValue = value;
  }
  public resetClone() {
    this._clone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // point_in_time_restore_context - computed: false, optional: true, required: false
  private _pointInTimeRestoreContext = new GoogleSqlDatabaseInstancePointInTimeRestoreContextOutputReference(this, "point_in_time_restore_context");
  public get pointInTimeRestoreContext() {
    return this._pointInTimeRestoreContext;
  }
  public putPointInTimeRestoreContext(value: GoogleSqlDatabaseInstancePointInTimeRestoreContext) {
    this._pointInTimeRestoreContext.internalValue = value;
  }
  public resetPointInTimeRestoreContext() {
    this._pointInTimeRestoreContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRestoreContextInput() {
    return this._pointInTimeRestoreContext.internalValue;
  }

  // replica_configuration - computed: false, optional: true, required: false
  private _replicaConfiguration = new GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference(this, "replica_configuration");
  public get replicaConfiguration() {
    return this._replicaConfiguration;
  }
  public putReplicaConfiguration(value: GoogleSqlDatabaseInstanceReplicaConfiguration) {
    this._replicaConfiguration.internalValue = value;
  }
  public resetReplicaConfiguration() {
    this._replicaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaConfigurationInput() {
    return this._replicaConfiguration.internalValue;
  }

  // replication_cluster - computed: false, optional: true, required: false
  private _replicationCluster = new GoogleSqlDatabaseInstanceReplicationClusterOutputReference(this, "replication_cluster");
  public get replicationCluster() {
    return this._replicationCluster;
  }
  public putReplicationCluster(value: GoogleSqlDatabaseInstanceReplicationCluster) {
    this._replicationCluster.internalValue = value;
  }
  public resetReplicationCluster() {
    this._replicationCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationClusterInput() {
    return this._replicationCluster.internalValue;
  }

  // restore_backup_context - computed: false, optional: true, required: false
  private _restoreBackupContext = new GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference(this, "restore_backup_context");
  public get restoreBackupContext() {
    return this._restoreBackupContext;
  }
  public putRestoreBackupContext(value: GoogleSqlDatabaseInstanceRestoreBackupContext) {
    this._restoreBackupContext.internalValue = value;
  }
  public resetRestoreBackupContext() {
    this._restoreBackupContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreBackupContextInput() {
    return this._restoreBackupContext.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new GoogleSqlDatabaseInstanceSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GoogleSqlDatabaseInstanceSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleSqlDatabaseInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleSqlDatabaseInstanceTimeouts) {
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
      backupdr_backup: cdktf.stringToTerraform(this._backupdrBackup),
      database_version: cdktf.stringToTerraform(this._databaseVersion),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      encryption_key_name: cdktf.stringToTerraform(this._encryptionKeyName),
      enforce_new_sql_network_architecture: cdktf.booleanToTerraform(this._enforceNewSqlNetworkArchitecture),
      final_backup_description: cdktf.stringToTerraform(this._finalBackupDescription),
      id: cdktf.stringToTerraform(this._id),
      include_replicas_for_major_version_upgrade: cdktf.booleanToTerraform(this._includeReplicasForMajorVersionUpgrade),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      maintenance_version: cdktf.stringToTerraform(this._maintenanceVersion),
      master_instance_name: cdktf.stringToTerraform(this._masterInstanceName),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      replica_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replicaNames),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      root_password_wo: cdktf.stringToTerraform(this._rootPasswordWo),
      root_password_wo_version: cdktf.stringToTerraform(this._rootPasswordWoVersion),
      switch_transaction_logs_to_cloud_storage_enabled: cdktf.booleanToTerraform(this._switchTransactionLogsToCloudStorageEnabled),
      clone: googleSqlDatabaseInstanceCloneToTerraform(this._clone.internalValue),
      point_in_time_restore_context: googleSqlDatabaseInstancePointInTimeRestoreContextToTerraform(this._pointInTimeRestoreContext.internalValue),
      replica_configuration: googleSqlDatabaseInstanceReplicaConfigurationToTerraform(this._replicaConfiguration.internalValue),
      replication_cluster: googleSqlDatabaseInstanceReplicationClusterToTerraform(this._replicationCluster.internalValue),
      restore_backup_context: googleSqlDatabaseInstanceRestoreBackupContextToTerraform(this._restoreBackupContext.internalValue),
      settings: googleSqlDatabaseInstanceSettingsToTerraform(this._settings.internalValue),
      timeouts: googleSqlDatabaseInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backupdr_backup: {
        value: cdktf.stringToHclTerraform(this._backupdrBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_version: {
        value: cdktf.stringToHclTerraform(this._databaseVersion),
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
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._encryptionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_new_sql_network_architecture: {
        value: cdktf.booleanToHclTerraform(this._enforceNewSqlNetworkArchitecture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      final_backup_description: {
        value: cdktf.stringToHclTerraform(this._finalBackupDescription),
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
      include_replicas_for_major_version_upgrade: {
        value: cdktf.booleanToHclTerraform(this._includeReplicasForMajorVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_version: {
        value: cdktf.stringToHclTerraform(this._maintenanceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_instance_name: {
        value: cdktf.stringToHclTerraform(this._masterInstanceName),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replicaNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      root_password: {
        value: cdktf.stringToHclTerraform(this._rootPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_password_wo: {
        value: cdktf.stringToHclTerraform(this._rootPasswordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_password_wo_version: {
        value: cdktf.stringToHclTerraform(this._rootPasswordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_transaction_logs_to_cloud_storage_enabled: {
        value: cdktf.booleanToHclTerraform(this._switchTransactionLogsToCloudStorageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clone: {
        value: googleSqlDatabaseInstanceCloneToHclTerraform(this._clone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSqlDatabaseInstanceCloneList",
      },
      point_in_time_restore_context: {
        value: googleSqlDatabaseInstancePointInTimeRestoreContextToHclTerraform(this._pointInTimeRestoreContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSqlDatabaseInstancePointInTimeRestoreContextList",
      },
      replica_configuration: {
        value: googleSqlDatabaseInstanceReplicaConfigurationToHclTerraform(this._replicaConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSqlDatabaseInstanceReplicaConfigurationList",
      },
      replication_cluster: {
        value: googleSqlDatabaseInstanceReplicationClusterToHclTerraform(this._replicationCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSqlDatabaseInstanceReplicationClusterList",
      },
      restore_backup_context: {
        value: googleSqlDatabaseInstanceRestoreBackupContextToHclTerraform(this._restoreBackupContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSqlDatabaseInstanceRestoreBackupContextList",
      },
      settings: {
        value: googleSqlDatabaseInstanceSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSqlDatabaseInstanceSettingsList",
      },
      timeouts: {
        value: googleSqlDatabaseInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleSqlDatabaseInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
