// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigqueryConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional connection id that should be assigned to the created connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#connection_id GoogleBigqueryConnection#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#deletion_policy GoogleBigqueryConnection#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A descriptive description for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#description GoogleBigqueryConnection#description}
  */
  readonly description?: string;
  /**
  * A descriptive name for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#friendly_name GoogleBigqueryConnection#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. The Cloud KMS key that is used for encryption.
  * 
  * Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#kms_key_name GoogleBigqueryConnection#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The geographic location where the connection should reside.
  * Cloud SQL instance must be in the same location as the connection
  * with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
  * Examples: US, EU, asia-northeast1, us-central1, europe-west1.
  * Spanner Connections same as spanner region
  * AWS allowed regions are aws-us-east-1
  * Azure allowed regions are azure-eastus2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#location GoogleBigqueryConnection#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}
  */
  readonly project?: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#aws GoogleBigqueryConnection#aws}
  */
  readonly aws?: GoogleBigqueryConnectionAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#azure GoogleBigqueryConnection#azure}
  */
  readonly azure?: GoogleBigqueryConnectionAzure;
  /**
  * cloud_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#cloud_resource GoogleBigqueryConnection#cloud_resource}
  */
  readonly cloudResource?: GoogleBigqueryConnectionCloudResource;
  /**
  * cloud_spanner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#cloud_spanner GoogleBigqueryConnection#cloud_spanner}
  */
  readonly cloudSpanner?: GoogleBigqueryConnectionCloudSpanner;
  /**
  * cloud_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#cloud_sql GoogleBigqueryConnection#cloud_sql}
  */
  readonly cloudSql?: GoogleBigqueryConnectionCloudSql;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#configuration GoogleBigqueryConnection#configuration}
  */
  readonly configuration?: GoogleBigqueryConnectionConfiguration;
  /**
  * spark block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#spark GoogleBigqueryConnection#spark}
  */
  readonly spark?: GoogleBigqueryConnectionSpark;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#timeouts GoogleBigqueryConnection#timeouts}
  */
  readonly timeouts?: GoogleBigqueryConnectionTimeouts;
}
export interface GoogleBigqueryConnectionAwsAccessRole {
  /**
  * The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#iam_role_id GoogleBigqueryConnection#iam_role_id}
  */
  readonly iamRoleId: string;
}

export function googleBigqueryConnectionAwsAccessRoleToTerraform(struct?: GoogleBigqueryConnectionAwsAccessRoleOutputReference | GoogleBigqueryConnectionAwsAccessRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_role_id: cdktf.stringToTerraform(struct!.iamRoleId),
  }
}


export function googleBigqueryConnectionAwsAccessRoleToHclTerraform(struct?: GoogleBigqueryConnectionAwsAccessRoleOutputReference | GoogleBigqueryConnectionAwsAccessRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_role_id: {
      value: cdktf.stringToHclTerraform(struct!.iamRoleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionAwsAccessRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionAwsAccessRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRoleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleId = this._iamRoleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionAwsAccessRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamRoleId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamRoleId = value.iamRoleId;
    }
  }

  // iam_role_id - computed: false, optional: false, required: true
  private _iamRoleId?: string; 
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
  }
  public set iamRoleId(value: string) {
    this._iamRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleIdInput() {
    return this._iamRoleId;
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }
}
export interface GoogleBigqueryConnectionAws {
  /**
  * access_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#access_role GoogleBigqueryConnection#access_role}
  */
  readonly accessRole: GoogleBigqueryConnectionAwsAccessRole;
}

export function googleBigqueryConnectionAwsToTerraform(struct?: GoogleBigqueryConnectionAwsOutputReference | GoogleBigqueryConnectionAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_role: googleBigqueryConnectionAwsAccessRoleToTerraform(struct!.accessRole),
  }
}


export function googleBigqueryConnectionAwsToHclTerraform(struct?: GoogleBigqueryConnectionAwsOutputReference | GoogleBigqueryConnectionAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_role: {
      value: googleBigqueryConnectionAwsAccessRoleToHclTerraform(struct!.accessRole),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionAwsAccessRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRole = this._accessRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessRole.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessRole.internalValue = value.accessRole;
    }
  }

  // access_role - computed: false, optional: false, required: true
  private _accessRole = new GoogleBigqueryConnectionAwsAccessRoleOutputReference(this, "access_role");
  public get accessRole() {
    return this._accessRole;
  }
  public putAccessRole(value: GoogleBigqueryConnectionAwsAccessRole) {
    this._accessRole.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRoleInput() {
    return this._accessRole.internalValue;
  }
}
export interface GoogleBigqueryConnectionAzure {
  /**
  * The id of customer's directory that host the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#customer_tenant_id GoogleBigqueryConnection#customer_tenant_id}
  */
  readonly customerTenantId: string;
  /**
  * The Azure Application (client) ID where the federated credentials will be hosted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#federated_application_client_id GoogleBigqueryConnection#federated_application_client_id}
  */
  readonly federatedApplicationClientId?: string;
}

export function googleBigqueryConnectionAzureToTerraform(struct?: GoogleBigqueryConnectionAzureOutputReference | GoogleBigqueryConnectionAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_tenant_id: cdktf.stringToTerraform(struct!.customerTenantId),
    federated_application_client_id: cdktf.stringToTerraform(struct!.federatedApplicationClientId),
  }
}


export function googleBigqueryConnectionAzureToHclTerraform(struct?: GoogleBigqueryConnectionAzureOutputReference | GoogleBigqueryConnectionAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.customerTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    federated_application_client_id: {
      value: cdktf.stringToHclTerraform(struct!.federatedApplicationClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerTenantId = this._customerTenantId;
    }
    if (this._federatedApplicationClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.federatedApplicationClientId = this._federatedApplicationClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerTenantId = undefined;
      this._federatedApplicationClientId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerTenantId = value.customerTenantId;
      this._federatedApplicationClientId = value.federatedApplicationClientId;
    }
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // customer_tenant_id - computed: false, optional: false, required: true
  private _customerTenantId?: string; 
  public get customerTenantId() {
    return this.getStringAttribute('customer_tenant_id');
  }
  public set customerTenantId(value: string) {
    this._customerTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerTenantIdInput() {
    return this._customerTenantId;
  }

  // federated_application_client_id - computed: false, optional: true, required: false
  private _federatedApplicationClientId?: string; 
  public get federatedApplicationClientId() {
    return this.getStringAttribute('federated_application_client_id');
  }
  public set federatedApplicationClientId(value: string) {
    this._federatedApplicationClientId = value;
  }
  public resetFederatedApplicationClientId() {
    this._federatedApplicationClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedApplicationClientIdInput() {
    return this._federatedApplicationClientId;
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface GoogleBigqueryConnectionCloudResource {
}

export function googleBigqueryConnectionCloudResourceToTerraform(struct?: GoogleBigqueryConnectionCloudResourceOutputReference | GoogleBigqueryConnectionCloudResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleBigqueryConnectionCloudResourceToHclTerraform(struct?: GoogleBigqueryConnectionCloudResourceOutputReference | GoogleBigqueryConnectionCloudResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleBigqueryConnectionCloudResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionCloudResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionCloudResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}
export interface GoogleBigqueryConnectionCloudSpanner {
  /**
  * Cloud Spanner database in the form 'project/instance/database'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}
  */
  readonly database: string;
  /**
  * Cloud Spanner database role for fine-grained access control. The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#database_role GoogleBigqueryConnection#database_role}
  */
  readonly databaseRole?: string;
  /**
  * Allows setting max parallelism per query when executing on Spanner independent compute resources. If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#max_parallelism GoogleBigqueryConnection#max_parallelism}
  */
  readonly maxParallelism?: number;
  /**
  * If set, the request will be executed via Spanner independent compute resources. 'use_parallelism' must be set when using data boost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#use_data_boost GoogleBigqueryConnection#use_data_boost}
  */
  readonly useDataBoost?: boolean | cdktf.IResolvable;
  /**
  * If parallelism should be used when reading from Cloud Spanner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#use_parallelism GoogleBigqueryConnection#use_parallelism}
  */
  readonly useParallelism?: boolean | cdktf.IResolvable;
  /**
  * If the serverless analytics service should be used to read data from Cloud Spanner. 'useParallelism' must be set when using serverless analytics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#use_serverless_analytics GoogleBigqueryConnection#use_serverless_analytics}
  */
  readonly useServerlessAnalytics?: boolean | cdktf.IResolvable;
}

export function googleBigqueryConnectionCloudSpannerToTerraform(struct?: GoogleBigqueryConnectionCloudSpannerOutputReference | GoogleBigqueryConnectionCloudSpanner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    database_role: cdktf.stringToTerraform(struct!.databaseRole),
    max_parallelism: cdktf.numberToTerraform(struct!.maxParallelism),
    use_data_boost: cdktf.booleanToTerraform(struct!.useDataBoost),
    use_parallelism: cdktf.booleanToTerraform(struct!.useParallelism),
    use_serverless_analytics: cdktf.booleanToTerraform(struct!.useServerlessAnalytics),
  }
}


export function googleBigqueryConnectionCloudSpannerToHclTerraform(struct?: GoogleBigqueryConnectionCloudSpannerOutputReference | GoogleBigqueryConnectionCloudSpanner): any {
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
    database_role: {
      value: cdktf.stringToHclTerraform(struct!.databaseRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_parallelism: {
      value: cdktf.numberToHclTerraform(struct!.maxParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_data_boost: {
      value: cdktf.booleanToHclTerraform(struct!.useDataBoost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_parallelism: {
      value: cdktf.booleanToHclTerraform(struct!.useParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_serverless_analytics: {
      value: cdktf.booleanToHclTerraform(struct!.useServerlessAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionCloudSpannerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionCloudSpanner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._databaseRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRole = this._databaseRole;
    }
    if (this._maxParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelism = this._maxParallelism;
    }
    if (this._useDataBoost !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDataBoost = this._useDataBoost;
    }
    if (this._useParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.useParallelism = this._useParallelism;
    }
    if (this._useServerlessAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServerlessAnalytics = this._useServerlessAnalytics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionCloudSpanner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._databaseRole = undefined;
      this._maxParallelism = undefined;
      this._useDataBoost = undefined;
      this._useParallelism = undefined;
      this._useServerlessAnalytics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._databaseRole = value.databaseRole;
      this._maxParallelism = value.maxParallelism;
      this._useDataBoost = value.useDataBoost;
      this._useParallelism = value.useParallelism;
      this._useServerlessAnalytics = value.useServerlessAnalytics;
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

  // database_role - computed: false, optional: true, required: false
  private _databaseRole?: string; 
  public get databaseRole() {
    return this.getStringAttribute('database_role');
  }
  public set databaseRole(value: string) {
    this._databaseRole = value;
  }
  public resetDatabaseRole() {
    this._databaseRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRoleInput() {
    return this._databaseRole;
  }

  // max_parallelism - computed: false, optional: true, required: false
  private _maxParallelism?: number; 
  public get maxParallelism() {
    return this.getNumberAttribute('max_parallelism');
  }
  public set maxParallelism(value: number) {
    this._maxParallelism = value;
  }
  public resetMaxParallelism() {
    this._maxParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelismInput() {
    return this._maxParallelism;
  }

  // use_data_boost - computed: false, optional: true, required: false
  private _useDataBoost?: boolean | cdktf.IResolvable; 
  public get useDataBoost() {
    return this.getBooleanAttribute('use_data_boost');
  }
  public set useDataBoost(value: boolean | cdktf.IResolvable) {
    this._useDataBoost = value;
  }
  public resetUseDataBoost() {
    this._useDataBoost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDataBoostInput() {
    return this._useDataBoost;
  }

  // use_parallelism - computed: false, optional: true, required: false
  private _useParallelism?: boolean | cdktf.IResolvable; 
  public get useParallelism() {
    return this.getBooleanAttribute('use_parallelism');
  }
  public set useParallelism(value: boolean | cdktf.IResolvable) {
    this._useParallelism = value;
  }
  public resetUseParallelism() {
    this._useParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useParallelismInput() {
    return this._useParallelism;
  }

  // use_serverless_analytics - computed: false, optional: true, required: false
  private _useServerlessAnalytics?: boolean | cdktf.IResolvable; 
  public get useServerlessAnalytics() {
    return this.getBooleanAttribute('use_serverless_analytics');
  }
  public set useServerlessAnalytics(value: boolean | cdktf.IResolvable) {
    this._useServerlessAnalytics = value;
  }
  public resetUseServerlessAnalytics() {
    this._useServerlessAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerlessAnalyticsInput() {
    return this._useServerlessAnalytics;
  }
}
export interface GoogleBigqueryConnectionCloudSqlCredential {
  /**
  * Password for database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#password GoogleBigqueryConnection#password}
  */
  readonly password: string;
  /**
  * Username for database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#username GoogleBigqueryConnection#username}
  */
  readonly username: string;
}

export function googleBigqueryConnectionCloudSqlCredentialToTerraform(struct?: GoogleBigqueryConnectionCloudSqlCredentialOutputReference | GoogleBigqueryConnectionCloudSqlCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleBigqueryConnectionCloudSqlCredentialToHclTerraform(struct?: GoogleBigqueryConnectionCloudSqlCredentialOutputReference | GoogleBigqueryConnectionCloudSqlCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionCloudSqlCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionCloudSqlCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionCloudSqlCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GoogleBigqueryConnectionCloudSql {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}
  */
  readonly database: string;
  /**
  * Cloud SQL instance ID in the form project:location:instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#instance_id GoogleBigqueryConnection#instance_id}
  */
  readonly instanceId: string;
  /**
  * Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#type GoogleBigqueryConnection#type}
  */
  readonly type: string;
  /**
  * credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#credential GoogleBigqueryConnection#credential}
  */
  readonly credential: GoogleBigqueryConnectionCloudSqlCredential;
}

export function googleBigqueryConnectionCloudSqlToTerraform(struct?: GoogleBigqueryConnectionCloudSqlOutputReference | GoogleBigqueryConnectionCloudSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    type: cdktf.stringToTerraform(struct!.type),
    credential: googleBigqueryConnectionCloudSqlCredentialToTerraform(struct!.credential),
  }
}


export function googleBigqueryConnectionCloudSqlToHclTerraform(struct?: GoogleBigqueryConnectionCloudSqlOutputReference | GoogleBigqueryConnectionCloudSql): any {
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
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
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
    credential: {
      value: googleBigqueryConnectionCloudSqlCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionCloudSqlCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionCloudSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionCloudSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionCloudSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._instanceId = undefined;
      this._type = undefined;
      this._credential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._instanceId = value.instanceId;
      this._type = value.type;
      this._credential.internalValue = value.credential;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
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

  // credential - computed: false, optional: false, required: true
  private _credential = new GoogleBigqueryConnectionCloudSqlCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: GoogleBigqueryConnectionCloudSqlCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }
}
export interface GoogleBigqueryConnectionConfigurationAsset {
  /**
  * The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}
  */
  readonly database?: string;
  /**
  * The full resource name of the Google Cloud resource.
  * For AlloyDB, this is in the format of
  * '//alloydb.googleapis.com/projects/{project}/locations/{region}/clusters/{cluster}/instances/{instance}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#google_cloud_resource GoogleBigqueryConnection#google_cloud_resource}
  */
  readonly googleCloudResource?: string;
}

export function googleBigqueryConnectionConfigurationAssetToTerraform(struct?: GoogleBigqueryConnectionConfigurationAssetOutputReference | GoogleBigqueryConnectionConfigurationAsset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    google_cloud_resource: cdktf.stringToTerraform(struct!.googleCloudResource),
  }
}


export function googleBigqueryConnectionConfigurationAssetToHclTerraform(struct?: GoogleBigqueryConnectionConfigurationAssetOutputReference | GoogleBigqueryConnectionConfigurationAsset): any {
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
    google_cloud_resource: {
      value: cdktf.stringToHclTerraform(struct!.googleCloudResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionConfigurationAssetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionConfigurationAsset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._googleCloudResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudResource = this._googleCloudResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionConfigurationAsset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._googleCloudResource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._googleCloudResource = value.googleCloudResource;
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

  // google_cloud_resource - computed: false, optional: true, required: false
  private _googleCloudResource?: string; 
  public get googleCloudResource() {
    return this.getStringAttribute('google_cloud_resource');
  }
  public set googleCloudResource(value: string) {
    this._googleCloudResource = value;
  }
  public resetGoogleCloudResource() {
    this._googleCloudResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudResourceInput() {
    return this._googleCloudResource;
  }
}
export interface GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword {
  /**
  * The plaintext password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#plaintext GoogleBigqueryConnection#plaintext}
  */
  readonly plaintext: string;
}

export function googleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordToTerraform(struct?: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference | GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plaintext: cdktf.stringToTerraform(struct!.plaintext),
  }
}


export function googleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordToHclTerraform(struct?: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference | GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plaintext: {
      value: cdktf.stringToHclTerraform(struct!.plaintext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plaintext !== undefined) {
      hasAnyValues = true;
      internalValueResult.plaintext = this._plaintext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plaintext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plaintext = value.plaintext;
    }
  }

  // plaintext - computed: false, optional: false, required: true
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }

  // secret_type - computed: true, optional: false, required: false
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
}
export interface GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword {
  /**
  * Username for the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#username GoogleBigqueryConnection#username}
  */
  readonly username: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#password GoogleBigqueryConnection#password}
  */
  readonly password: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword;
}

export function googleBigqueryConnectionConfigurationAuthenticationUsernamePasswordToTerraform(struct?: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference | GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: googleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordToTerraform(struct!.password),
  }
}


export function googleBigqueryConnectionConfigurationAuthenticationUsernamePasswordToHclTerraform(struct?: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference | GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: googleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password - computed: false, optional: false, required: true
  private _password = new GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface GoogleBigqueryConnectionConfigurationAuthentication {
  /**
  * username_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#username_password GoogleBigqueryConnection#username_password}
  */
  readonly usernamePassword?: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword;
}

export function googleBigqueryConnectionConfigurationAuthenticationToTerraform(struct?: GoogleBigqueryConnectionConfigurationAuthenticationOutputReference | GoogleBigqueryConnectionConfigurationAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username_password: googleBigqueryConnectionConfigurationAuthenticationUsernamePasswordToTerraform(struct!.usernamePassword),
  }
}


export function googleBigqueryConnectionConfigurationAuthenticationToHclTerraform(struct?: GoogleBigqueryConnectionConfigurationAuthenticationOutputReference | GoogleBigqueryConnectionConfigurationAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username_password: {
      value: googleBigqueryConnectionConfigurationAuthenticationUsernamePasswordToHclTerraform(struct!.usernamePassword),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionConfigurationAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionConfigurationAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usernamePassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePassword = this._usernamePassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionConfigurationAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._usernamePassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._usernamePassword.internalValue = value.usernamePassword;
    }
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // username_password - computed: false, optional: true, required: false
  private _usernamePassword = new GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference(this, "username_password");
  public get usernamePassword() {
    return this._usernamePassword;
  }
  public putUsernamePassword(value: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword) {
    this._usernamePassword.internalValue = value;
  }
  public resetUsernamePassword() {
    this._usernamePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordInput() {
    return this._usernamePassword.internalValue;
  }
}
export interface GoogleBigqueryConnectionConfigurationEndpoint {
  /**
  * Host and port in the format of 'host:port' for the connector endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#host_port GoogleBigqueryConnection#host_port}
  */
  readonly hostPort?: string;
}

export function googleBigqueryConnectionConfigurationEndpointToTerraform(struct?: GoogleBigqueryConnectionConfigurationEndpointOutputReference | GoogleBigqueryConnectionConfigurationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_port: cdktf.stringToTerraform(struct!.hostPort),
  }
}


export function googleBigqueryConnectionConfigurationEndpointToHclTerraform(struct?: GoogleBigqueryConnectionConfigurationEndpointOutputReference | GoogleBigqueryConnectionConfigurationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_port: {
      value: cdktf.stringToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionConfigurationEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionConfigurationEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionConfigurationEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostPort = value.hostPort;
    }
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: string; 
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }
  public set hostPort(value: string) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }
}
export interface GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect {
  /**
  * The resource name of a network attachment in the format of
  * 'projects/{project}/regions/{region}/networkAttachments/{networkAttachment}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#network_attachment GoogleBigqueryConnection#network_attachment}
  */
  readonly networkAttachment: string;
}

export function googleBigqueryConnectionConfigurationNetworkPrivateServiceConnectToTerraform(struct?: GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference | GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_attachment: cdktf.stringToTerraform(struct!.networkAttachment),
  }
}


export function googleBigqueryConnectionConfigurationNetworkPrivateServiceConnectToHclTerraform(struct?: GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference | GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_attachment: {
      value: cdktf.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
    }
  }

  // network_attachment - computed: false, optional: false, required: true
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }
}
export interface GoogleBigqueryConnectionConfigurationNetwork {
  /**
  * private_service_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#private_service_connect GoogleBigqueryConnection#private_service_connect}
  */
  readonly privateServiceConnect?: GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect;
}

export function googleBigqueryConnectionConfigurationNetworkToTerraform(struct?: GoogleBigqueryConnectionConfigurationNetworkOutputReference | GoogleBigqueryConnectionConfigurationNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_service_connect: googleBigqueryConnectionConfigurationNetworkPrivateServiceConnectToTerraform(struct!.privateServiceConnect),
  }
}


export function googleBigqueryConnectionConfigurationNetworkToHclTerraform(struct?: GoogleBigqueryConnectionConfigurationNetworkOutputReference | GoogleBigqueryConnectionConfigurationNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_service_connect: {
      value: googleBigqueryConnectionConfigurationNetworkPrivateServiceConnectToHclTerraform(struct!.privateServiceConnect),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionConfigurationNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionConfigurationNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateServiceConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateServiceConnect = this._privateServiceConnect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionConfigurationNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateServiceConnect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateServiceConnect.internalValue = value.privateServiceConnect;
    }
  }

  // private_service_connect - computed: false, optional: true, required: false
  private _privateServiceConnect = new GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference(this, "private_service_connect");
  public get privateServiceConnect() {
    return this._privateServiceConnect;
  }
  public putPrivateServiceConnect(value: GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect) {
    this._privateServiceConnect.internalValue = value;
  }
  public resetPrivateServiceConnect() {
    this._privateServiceConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectInput() {
    return this._privateServiceConnect.internalValue;
  }
}
export interface GoogleBigqueryConnectionConfiguration {
  /**
  * The ID of the connector. Possible values include 'google-alloydb', 'google-cloudsql-mysql',
  * 'google-cloudsql-postgres', and other connector IDs supported by the BigQuery Connector framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#connector_id GoogleBigqueryConnection#connector_id}
  */
  readonly connectorId: string;
  /**
  * asset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#asset GoogleBigqueryConnection#asset}
  */
  readonly asset: GoogleBigqueryConnectionConfigurationAsset;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#authentication GoogleBigqueryConnection#authentication}
  */
  readonly authentication?: GoogleBigqueryConnectionConfigurationAuthentication;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#endpoint GoogleBigqueryConnection#endpoint}
  */
  readonly endpoint?: GoogleBigqueryConnectionConfigurationEndpoint;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#network GoogleBigqueryConnection#network}
  */
  readonly network?: GoogleBigqueryConnectionConfigurationNetwork;
}

export function googleBigqueryConnectionConfigurationToTerraform(struct?: GoogleBigqueryConnectionConfigurationOutputReference | GoogleBigqueryConnectionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_id: cdktf.stringToTerraform(struct!.connectorId),
    asset: googleBigqueryConnectionConfigurationAssetToTerraform(struct!.asset),
    authentication: googleBigqueryConnectionConfigurationAuthenticationToTerraform(struct!.authentication),
    endpoint: googleBigqueryConnectionConfigurationEndpointToTerraform(struct!.endpoint),
    network: googleBigqueryConnectionConfigurationNetworkToTerraform(struct!.network),
  }
}


export function googleBigqueryConnectionConfigurationToHclTerraform(struct?: GoogleBigqueryConnectionConfigurationOutputReference | GoogleBigqueryConnectionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_id: {
      value: cdktf.stringToHclTerraform(struct!.connectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asset: {
      value: googleBigqueryConnectionConfigurationAssetToHclTerraform(struct!.asset),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionConfigurationAssetList",
    },
    authentication: {
      value: googleBigqueryConnectionConfigurationAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionConfigurationAuthenticationList",
    },
    endpoint: {
      value: googleBigqueryConnectionConfigurationEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionConfigurationEndpointList",
    },
    network: {
      value: googleBigqueryConnectionConfigurationNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionConfigurationNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorId = this._connectorId;
    }
    if (this._asset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asset = this._asset?.internalValue;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectorId = undefined;
      this._asset.internalValue = undefined;
      this._authentication.internalValue = undefined;
      this._endpoint.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectorId = value.connectorId;
      this._asset.internalValue = value.asset;
      this._authentication.internalValue = value.authentication;
      this._endpoint.internalValue = value.endpoint;
      this._network.internalValue = value.network;
    }
  }

  // connector_id - computed: false, optional: false, required: true
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // asset - computed: false, optional: false, required: true
  private _asset = new GoogleBigqueryConnectionConfigurationAssetOutputReference(this, "asset");
  public get asset() {
    return this._asset;
  }
  public putAsset(value: GoogleBigqueryConnectionConfigurationAsset) {
    this._asset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInput() {
    return this._asset.internalValue;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleBigqueryConnectionConfigurationAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleBigqueryConnectionConfigurationAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new GoogleBigqueryConnectionConfigurationEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: GoogleBigqueryConnectionConfigurationEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new GoogleBigqueryConnectionConfigurationNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: GoogleBigqueryConnectionConfigurationNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface GoogleBigqueryConnectionSparkMetastoreServiceConfig {
  /**
  * Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#metastore_service GoogleBigqueryConnection#metastore_service}
  */
  readonly metastoreService?: string;
}

export function googleBigqueryConnectionSparkMetastoreServiceConfigToTerraform(struct?: GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference | GoogleBigqueryConnectionSparkMetastoreServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metastore_service: cdktf.stringToTerraform(struct!.metastoreService),
  }
}


export function googleBigqueryConnectionSparkMetastoreServiceConfigToHclTerraform(struct?: GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference | GoogleBigqueryConnectionSparkMetastoreServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metastore_service: {
      value: cdktf.stringToHclTerraform(struct!.metastoreService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionSparkMetastoreServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metastoreService !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreService = this._metastoreService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionSparkMetastoreServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metastoreService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metastoreService = value.metastoreService;
    }
  }

  // metastore_service - computed: false, optional: true, required: false
  private _metastoreService?: string; 
  public get metastoreService() {
    return this.getStringAttribute('metastore_service');
  }
  public set metastoreService(value: string) {
    this._metastoreService = value;
  }
  public resetMetastoreService() {
    this._metastoreService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreServiceInput() {
    return this._metastoreService;
  }
}
export interface GoogleBigqueryConnectionSparkSparkHistoryServerConfig {
  /**
  * Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#dataproc_cluster GoogleBigqueryConnection#dataproc_cluster}
  */
  readonly dataprocCluster?: string;
}

export function googleBigqueryConnectionSparkSparkHistoryServerConfigToTerraform(struct?: GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference | GoogleBigqueryConnectionSparkSparkHistoryServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataproc_cluster: cdktf.stringToTerraform(struct!.dataprocCluster),
  }
}


export function googleBigqueryConnectionSparkSparkHistoryServerConfigToHclTerraform(struct?: GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference | GoogleBigqueryConnectionSparkSparkHistoryServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataproc_cluster: {
      value: cdktf.stringToHclTerraform(struct!.dataprocCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionSparkSparkHistoryServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocCluster = this._dataprocCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionSparkSparkHistoryServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataprocCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataprocCluster = value.dataprocCluster;
    }
  }

  // dataproc_cluster - computed: false, optional: true, required: false
  private _dataprocCluster?: string; 
  public get dataprocCluster() {
    return this.getStringAttribute('dataproc_cluster');
  }
  public set dataprocCluster(value: string) {
    this._dataprocCluster = value;
  }
  public resetDataprocCluster() {
    this._dataprocCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocClusterInput() {
    return this._dataprocCluster;
  }
}
export interface GoogleBigqueryConnectionSpark {
  /**
  * metastore_service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#metastore_service_config GoogleBigqueryConnection#metastore_service_config}
  */
  readonly metastoreServiceConfig?: GoogleBigqueryConnectionSparkMetastoreServiceConfig;
  /**
  * spark_history_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#spark_history_server_config GoogleBigqueryConnection#spark_history_server_config}
  */
  readonly sparkHistoryServerConfig?: GoogleBigqueryConnectionSparkSparkHistoryServerConfig;
}

export function googleBigqueryConnectionSparkToTerraform(struct?: GoogleBigqueryConnectionSparkOutputReference | GoogleBigqueryConnectionSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metastore_service_config: googleBigqueryConnectionSparkMetastoreServiceConfigToTerraform(struct!.metastoreServiceConfig),
    spark_history_server_config: googleBigqueryConnectionSparkSparkHistoryServerConfigToTerraform(struct!.sparkHistoryServerConfig),
  }
}


export function googleBigqueryConnectionSparkToHclTerraform(struct?: GoogleBigqueryConnectionSparkOutputReference | GoogleBigqueryConnectionSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metastore_service_config: {
      value: googleBigqueryConnectionSparkMetastoreServiceConfigToHclTerraform(struct!.metastoreServiceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionSparkMetastoreServiceConfigList",
    },
    spark_history_server_config: {
      value: googleBigqueryConnectionSparkSparkHistoryServerConfigToHclTerraform(struct!.sparkHistoryServerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryConnectionSparkSparkHistoryServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryConnectionSparkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionSpark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metastoreServiceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreServiceConfig = this._metastoreServiceConfig?.internalValue;
    }
    if (this._sparkHistoryServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkHistoryServerConfig = this._sparkHistoryServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionSpark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metastoreServiceConfig.internalValue = undefined;
      this._sparkHistoryServerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metastoreServiceConfig.internalValue = value.metastoreServiceConfig;
      this._sparkHistoryServerConfig.internalValue = value.sparkHistoryServerConfig;
    }
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // metastore_service_config - computed: false, optional: true, required: false
  private _metastoreServiceConfig = new GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference(this, "metastore_service_config");
  public get metastoreServiceConfig() {
    return this._metastoreServiceConfig;
  }
  public putMetastoreServiceConfig(value: GoogleBigqueryConnectionSparkMetastoreServiceConfig) {
    this._metastoreServiceConfig.internalValue = value;
  }
  public resetMetastoreServiceConfig() {
    this._metastoreServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreServiceConfigInput() {
    return this._metastoreServiceConfig.internalValue;
  }

  // spark_history_server_config - computed: false, optional: true, required: false
  private _sparkHistoryServerConfig = new GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference(this, "spark_history_server_config");
  public get sparkHistoryServerConfig() {
    return this._sparkHistoryServerConfig;
  }
  public putSparkHistoryServerConfig(value: GoogleBigqueryConnectionSparkSparkHistoryServerConfig) {
    this._sparkHistoryServerConfig.internalValue = value;
  }
  public resetSparkHistoryServerConfig() {
    this._sparkHistoryServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkHistoryServerConfigInput() {
    return this._sparkHistoryServerConfig.internalValue;
  }
}
export interface GoogleBigqueryConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#create GoogleBigqueryConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#delete GoogleBigqueryConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#update GoogleBigqueryConnection#update}
  */
  readonly update?: string;
}

export function googleBigqueryConnectionTimeoutsToTerraform(struct?: GoogleBigqueryConnectionTimeouts | cdktf.IResolvable): any {
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


export function googleBigqueryConnectionTimeoutsToHclTerraform(struct?: GoogleBigqueryConnectionTimeouts | cdktf.IResolvable): any {
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

export class GoogleBigqueryConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBigqueryConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBigqueryConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection google_bigquery_connection}
*/
export class GoogleBigqueryConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleBigqueryConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBigqueryConnection to import
  * @param importFromId The id of the existing GoogleBigqueryConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBigqueryConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_bigquery_connection google_bigquery_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigqueryConnectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleBigqueryConnectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_connection',
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
    this._connectionId = config.connectionId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._location = config.location;
    this._project = config.project;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._cloudResource.internalValue = config.cloudResource;
    this._cloudSpanner.internalValue = config.cloudSpanner;
    this._cloudSql.internalValue = config.cloudSql;
    this._configuration.internalValue = config.configuration;
    this._spark.internalValue = config.spark;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // has_credential - computed: true, optional: false, required: false
  public get hasCredential() {
    return this.getBooleanAttribute('has_credential');
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

  // aws - computed: false, optional: true, required: false
  private _aws = new GoogleBigqueryConnectionAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: GoogleBigqueryConnectionAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new GoogleBigqueryConnectionAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: GoogleBigqueryConnectionAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // cloud_resource - computed: false, optional: true, required: false
  private _cloudResource = new GoogleBigqueryConnectionCloudResourceOutputReference(this, "cloud_resource");
  public get cloudResource() {
    return this._cloudResource;
  }
  public putCloudResource(value: GoogleBigqueryConnectionCloudResource) {
    this._cloudResource.internalValue = value;
  }
  public resetCloudResource() {
    this._cloudResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudResourceInput() {
    return this._cloudResource.internalValue;
  }

  // cloud_spanner - computed: false, optional: true, required: false
  private _cloudSpanner = new GoogleBigqueryConnectionCloudSpannerOutputReference(this, "cloud_spanner");
  public get cloudSpanner() {
    return this._cloudSpanner;
  }
  public putCloudSpanner(value: GoogleBigqueryConnectionCloudSpanner) {
    this._cloudSpanner.internalValue = value;
  }
  public resetCloudSpanner() {
    this._cloudSpanner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSpannerInput() {
    return this._cloudSpanner.internalValue;
  }

  // cloud_sql - computed: false, optional: true, required: false
  private _cloudSql = new GoogleBigqueryConnectionCloudSqlOutputReference(this, "cloud_sql");
  public get cloudSql() {
    return this._cloudSql;
  }
  public putCloudSql(value: GoogleBigqueryConnectionCloudSql) {
    this._cloudSql.internalValue = value;
  }
  public resetCloudSql() {
    this._cloudSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlInput() {
    return this._cloudSql.internalValue;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new GoogleBigqueryConnectionConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: GoogleBigqueryConnectionConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // spark - computed: false, optional: true, required: false
  private _spark = new GoogleBigqueryConnectionSparkOutputReference(this, "spark");
  public get spark() {
    return this._spark;
  }
  public putSpark(value: GoogleBigqueryConnectionSpark) {
    this._spark.internalValue = value;
  }
  public resetSpark() {
    this._spark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkInput() {
    return this._spark.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBigqueryConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBigqueryConnectionTimeouts) {
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
      connection_id: cdktf.stringToTerraform(this._connectionId),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      aws: googleBigqueryConnectionAwsToTerraform(this._aws.internalValue),
      azure: googleBigqueryConnectionAzureToTerraform(this._azure.internalValue),
      cloud_resource: googleBigqueryConnectionCloudResourceToTerraform(this._cloudResource.internalValue),
      cloud_spanner: googleBigqueryConnectionCloudSpannerToTerraform(this._cloudSpanner.internalValue),
      cloud_sql: googleBigqueryConnectionCloudSqlToTerraform(this._cloudSql.internalValue),
      configuration: googleBigqueryConnectionConfigurationToTerraform(this._configuration.internalValue),
      spark: googleBigqueryConnectionSparkToTerraform(this._spark.internalValue),
      timeouts: googleBigqueryConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      kms_key_name: {
        value: cdktf.stringToHclTerraform(this._kmsKeyName),
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
      aws: {
        value: googleBigqueryConnectionAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryConnectionAwsList",
      },
      azure: {
        value: googleBigqueryConnectionAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryConnectionAzureList",
      },
      cloud_resource: {
        value: googleBigqueryConnectionCloudResourceToHclTerraform(this._cloudResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryConnectionCloudResourceList",
      },
      cloud_spanner: {
        value: googleBigqueryConnectionCloudSpannerToHclTerraform(this._cloudSpanner.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryConnectionCloudSpannerList",
      },
      cloud_sql: {
        value: googleBigqueryConnectionCloudSqlToHclTerraform(this._cloudSql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryConnectionCloudSqlList",
      },
      configuration: {
        value: googleBigqueryConnectionConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryConnectionConfigurationList",
      },
      spark: {
        value: googleBigqueryConnectionSparkToHclTerraform(this._spark.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryConnectionSparkList",
      },
      timeouts: {
        value: googleBigqueryConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleBigqueryConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
