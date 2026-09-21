// https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDatastreamConnectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The connection profile identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#connection_profile_id GoogleDatastreamConnectionProfile#connection_profile_id}
  */
  readonly connectionProfileId: string;
  /**
  * Create the connection profile without validating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#create_without_validation GoogleDatastreamConnectionProfile#create_without_validation}
  */
  readonly createWithoutValidation?: boolean | cdktf.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#deletion_policy GoogleDatastreamConnectionProfile#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#display_name GoogleDatastreamConnectionProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#labels GoogleDatastreamConnectionProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this connection profile is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#location GoogleDatastreamConnectionProfile#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}
  */
  readonly project?: string;
  /**
  * bigquery_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#bigquery_profile GoogleDatastreamConnectionProfile#bigquery_profile}
  */
  readonly bigqueryProfile?: GoogleDatastreamConnectionProfileBigqueryProfile;
  /**
  * forward_ssh_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#forward_ssh_connectivity GoogleDatastreamConnectionProfile#forward_ssh_connectivity}
  */
  readonly forwardSshConnectivity?: GoogleDatastreamConnectionProfileForwardSshConnectivity;
  /**
  * gcs_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#gcs_profile GoogleDatastreamConnectionProfile#gcs_profile}
  */
  readonly gcsProfile?: GoogleDatastreamConnectionProfileGcsProfile;
  /**
  * mongodb_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#mongodb_profile GoogleDatastreamConnectionProfile#mongodb_profile}
  */
  readonly mongodbProfile?: GoogleDatastreamConnectionProfileMongodbProfile;
  /**
  * mysql_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#mysql_profile GoogleDatastreamConnectionProfile#mysql_profile}
  */
  readonly mysqlProfile?: GoogleDatastreamConnectionProfileMysqlProfile;
  /**
  * oracle_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#oracle_profile GoogleDatastreamConnectionProfile#oracle_profile}
  */
  readonly oracleProfile?: GoogleDatastreamConnectionProfileOracleProfile;
  /**
  * postgresql_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#postgresql_profile GoogleDatastreamConnectionProfile#postgresql_profile}
  */
  readonly postgresqlProfile?: GoogleDatastreamConnectionProfilePostgresqlProfile;
  /**
  * private_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#private_connectivity GoogleDatastreamConnectionProfile#private_connectivity}
  */
  readonly privateConnectivity?: GoogleDatastreamConnectionProfilePrivateConnectivity;
  /**
  * salesforce_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#salesforce_profile GoogleDatastreamConnectionProfile#salesforce_profile}
  */
  readonly salesforceProfile?: GoogleDatastreamConnectionProfileSalesforceProfile;
  /**
  * spanner_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#spanner_profile GoogleDatastreamConnectionProfile#spanner_profile}
  */
  readonly spannerProfile?: GoogleDatastreamConnectionProfileSpannerProfile;
  /**
  * sql_server_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#sql_server_profile GoogleDatastreamConnectionProfile#sql_server_profile}
  */
  readonly sqlServerProfile?: GoogleDatastreamConnectionProfileSqlServerProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#timeouts GoogleDatastreamConnectionProfile#timeouts}
  */
  readonly timeouts?: GoogleDatastreamConnectionProfileTimeouts;
}
export interface GoogleDatastreamConnectionProfileBigqueryProfile {
}

export function googleDatastreamConnectionProfileBigqueryProfileToTerraform(struct?: GoogleDatastreamConnectionProfileBigqueryProfileOutputReference | GoogleDatastreamConnectionProfileBigqueryProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamConnectionProfileBigqueryProfileToHclTerraform(struct?: GoogleDatastreamConnectionProfileBigqueryProfileOutputReference | GoogleDatastreamConnectionProfileBigqueryProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamConnectionProfileBigqueryProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileBigqueryProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileBigqueryProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamConnectionProfileForwardSshConnectivity {
  /**
  * Hostname for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * SSH password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}
  */
  readonly port?: number;
  /**
  * SSH private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#private_key GoogleDatastreamConnectionProfile#private_key}
  */
  readonly privateKey?: string;
  /**
  * Username for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}
  */
  readonly username: string;
}

export function googleDatastreamConnectionProfileForwardSshConnectivityToTerraform(struct?: GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference | GoogleDatastreamConnectionProfileForwardSshConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleDatastreamConnectionProfileForwardSshConnectivityToHclTerraform(struct?: GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference | GoogleDatastreamConnectionProfileForwardSshConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
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

export class GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileForwardSshConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileForwardSshConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._privateKey = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._privateKey = value.privateKey;
      this._username = value.username;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
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
export interface GoogleDatastreamConnectionProfileGcsProfile {
  /**
  * The Cloud Storage bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#bucket GoogleDatastreamConnectionProfile#bucket}
  */
  readonly bucket: string;
  /**
  * The root path inside the Cloud Storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#root_path GoogleDatastreamConnectionProfile#root_path}
  */
  readonly rootPath?: string;
}

export function googleDatastreamConnectionProfileGcsProfileToTerraform(struct?: GoogleDatastreamConnectionProfileGcsProfileOutputReference | GoogleDatastreamConnectionProfileGcsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    root_path: cdktf.stringToTerraform(struct!.rootPath),
  }
}


export function googleDatastreamConnectionProfileGcsProfileToHclTerraform(struct?: GoogleDatastreamConnectionProfileGcsProfileOutputReference | GoogleDatastreamConnectionProfileGcsProfile): any {
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
    root_path: {
      value: cdktf.stringToHclTerraform(struct!.rootPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfileGcsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileGcsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._rootPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPath = this._rootPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileGcsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._rootPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._rootPath = value.rootPath;
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
}
export interface GoogleDatastreamConnectionProfileMongodbProfileHostAddresses {
  /**
  * Hostname for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Port for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}
  */
  readonly port?: number;
}

export function googleDatastreamConnectionProfileMongodbProfileHostAddressesToTerraform(struct?: GoogleDatastreamConnectionProfileMongodbProfileHostAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function googleDatastreamConnectionProfileMongodbProfileHostAddressesToHclTerraform(struct?: GoogleDatastreamConnectionProfileMongodbProfileHostAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDatastreamConnectionProfileMongodbProfileHostAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileMongodbProfileHostAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._port = value.port;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList extends cdktf.ComplexList {
  public internalValue? : GoogleDatastreamConnectionProfileMongodbProfileHostAddresses[] | cdktf.IResolvable

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
  public get(index: number): GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference {
    return new GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat {
}

export function googleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatToTerraform(struct?: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference | GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatToHclTerraform(struct?: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference | GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamConnectionProfileMongodbProfileSslConfig {
  /**
  * PEM-encoded certificate of the CA that signed the source database
  * server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * PEM-encoded certificate that will be used by the replica to
  * authenticate against the source database server. If this field
  * is used then the 'clientKey' and the 'caCertificate' fields are
  * mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded private key associated with the Client Certificate.
  * If this field is used then the 'client_certificate' and the
  * 'ca_certificate' fields are mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}
  */
  readonly clientKey?: string;
  /**
  * A reference to a Secret Manager resource name storing the
  * PEM-encoded private key. Mutually exclusive with clientKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_client_key GoogleDatastreamConnectionProfile#secret_manager_stored_client_key}
  */
  readonly secretManagerStoredClientKey?: string;
}

export function googleDatastreamConnectionProfileMongodbProfileSslConfigToTerraform(struct?: GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference | GoogleDatastreamConnectionProfileMongodbProfileSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    secret_manager_stored_client_key: cdktf.stringToTerraform(struct!.secretManagerStoredClientKey),
  }
}


export function googleDatastreamConnectionProfileMongodbProfileSslConfigToHclTerraform(struct?: GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference | GoogleDatastreamConnectionProfileMongodbProfileSslConfig): any {
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
    secret_manager_stored_client_key: {
      value: cdktf.stringToHclTerraform(struct!.secretManagerStoredClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileMongodbProfileSslConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._secretManagerStoredClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredClientKey = this._secretManagerStoredClientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileMongodbProfileSslConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
      this._secretManagerStoredClientKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
      this._secretManagerStoredClientKey = value.secretManagerStoredClientKey;
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

  // ca_certificate_set - computed: true, optional: false, required: false
  public get caCertificateSet() {
    return this.getBooleanAttribute('ca_certificate_set');
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

  // client_certificate_set - computed: true, optional: false, required: false
  public get clientCertificateSet() {
    return this.getBooleanAttribute('client_certificate_set');
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

  // client_key_set - computed: true, optional: false, required: false
  public get clientKeySet() {
    return this.getBooleanAttribute('client_key_set');
  }

  // secret_manager_stored_client_key - computed: false, optional: true, required: false
  private _secretManagerStoredClientKey?: string; 
  public get secretManagerStoredClientKey() {
    return this.getStringAttribute('secret_manager_stored_client_key');
  }
  public set secretManagerStoredClientKey(value: string) {
    this._secretManagerStoredClientKey = value;
  }
  public resetSecretManagerStoredClientKey() {
    this._secretManagerStoredClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredClientKeyInput() {
    return this._secretManagerStoredClientKey;
  }
}
export interface GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat {
  /**
  * Specifies whether the client connects directly to the
  * host[:port] in the connection URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#direct_connection GoogleDatastreamConnectionProfile#direct_connection}
  */
  readonly directConnection?: boolean | cdktf.IResolvable;
}

export function googleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatToTerraform(struct?: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference | GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct_connection: cdktf.booleanToTerraform(struct!.directConnection),
  }
}


export function googleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatToHclTerraform(struct?: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference | GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direct_connection: {
      value: cdktf.booleanToHclTerraform(struct!.directConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.directConnection = this._directConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directConnection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directConnection = value.directConnection;
    }
  }

  // direct_connection - computed: false, optional: true, required: false
  private _directConnection?: boolean | cdktf.IResolvable; 
  public get directConnection() {
    return this.getBooleanAttribute('direct_connection');
  }
  public set directConnection(value: boolean | cdktf.IResolvable) {
    this._directConnection = value;
  }
  public resetDirectConnection() {
    this._directConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectionInput() {
    return this._directConnection;
  }
}
export interface GoogleDatastreamConnectionProfileMongodbProfile {
  /**
  * A map of additional options for the MongoDB connection.
  * Keys are case-sensitive and should match the official
  * MongoDB connection string options: https://www.mongodb.com/docs/manual/reference/connection-string-options/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#additional_options GoogleDatastreamConnectionProfile#additional_options}
  */
  readonly additionalOptions?: { [key: string]: string };
  /**
  * Password for the MongoDB connection. Mutually exclusive with
  * secretManagerStoredPassword.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Name of the replica set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#replica_set GoogleDatastreamConnectionProfile#replica_set}
  */
  readonly replicaSet?: string;
  /**
  * A reference to a Secret Manager resource name storing the MongoDB
  * connection password. Mutually exclusive with password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * Username for the MongoDB connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}
  */
  readonly username: string;
  /**
  * host_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#host_addresses GoogleDatastreamConnectionProfile#host_addresses}
  */
  readonly hostAddresses: GoogleDatastreamConnectionProfileMongodbProfileHostAddresses[] | cdktf.IResolvable;
  /**
  * srv_connection_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#srv_connection_format GoogleDatastreamConnectionProfile#srv_connection_format}
  */
  readonly srvConnectionFormat?: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}
  */
  readonly sslConfig?: GoogleDatastreamConnectionProfileMongodbProfileSslConfig;
  /**
  * standard_connection_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#standard_connection_format GoogleDatastreamConnectionProfile#standard_connection_format}
  */
  readonly standardConnectionFormat?: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat;
}

export function googleDatastreamConnectionProfileMongodbProfileToTerraform(struct?: GoogleDatastreamConnectionProfileMongodbProfileOutputReference | GoogleDatastreamConnectionProfileMongodbProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalOptions),
    password: cdktf.stringToTerraform(struct!.password),
    replica_set: cdktf.stringToTerraform(struct!.replicaSet),
    secret_manager_stored_password: cdktf.stringToTerraform(struct!.secretManagerStoredPassword),
    username: cdktf.stringToTerraform(struct!.username),
    host_addresses: cdktf.listMapper(googleDatastreamConnectionProfileMongodbProfileHostAddressesToTerraform, true)(struct!.hostAddresses),
    srv_connection_format: googleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatToTerraform(struct!.srvConnectionFormat),
    ssl_config: googleDatastreamConnectionProfileMongodbProfileSslConfigToTerraform(struct!.sslConfig),
    standard_connection_format: googleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatToTerraform(struct!.standardConnectionFormat),
  }
}


export function googleDatastreamConnectionProfileMongodbProfileToHclTerraform(struct?: GoogleDatastreamConnectionProfileMongodbProfileOutputReference | GoogleDatastreamConnectionProfileMongodbProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_set: {
      value: cdktf.stringToHclTerraform(struct!.replicaSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_manager_stored_password: {
      value: cdktf.stringToHclTerraform(struct!.secretManagerStoredPassword),
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
    host_addresses: {
      value: cdktf.listMapperHcl(googleDatastreamConnectionProfileMongodbProfileHostAddressesToHclTerraform, true)(struct!.hostAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList",
    },
    srv_connection_format: {
      value: googleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatToHclTerraform(struct!.srvConnectionFormat),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatList",
    },
    ssl_config: {
      value: googleDatastreamConnectionProfileMongodbProfileSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamConnectionProfileMongodbProfileSslConfigList",
    },
    standard_connection_format: {
      value: googleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatToHclTerraform(struct!.standardConnectionFormat),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfileMongodbProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileMongodbProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalOptions = this._additionalOptions;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._replicaSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSet = this._replicaSet;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._hostAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAddresses = this._hostAddresses?.internalValue;
    }
    if (this._srvConnectionFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvConnectionFormat = this._srvConnectionFormat?.internalValue;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    if (this._standardConnectionFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardConnectionFormat = this._standardConnectionFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileMongodbProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalOptions = undefined;
      this._password = undefined;
      this._replicaSet = undefined;
      this._secretManagerStoredPassword = undefined;
      this._username = undefined;
      this._hostAddresses.internalValue = undefined;
      this._srvConnectionFormat.internalValue = undefined;
      this._sslConfig.internalValue = undefined;
      this._standardConnectionFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalOptions = value.additionalOptions;
      this._password = value.password;
      this._replicaSet = value.replicaSet;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._username = value.username;
      this._hostAddresses.internalValue = value.hostAddresses;
      this._srvConnectionFormat.internalValue = value.srvConnectionFormat;
      this._sslConfig.internalValue = value.sslConfig;
      this._standardConnectionFormat.internalValue = value.standardConnectionFormat;
    }
  }

  // additional_options - computed: false, optional: true, required: false
  private _additionalOptions?: { [key: string]: string }; 
  public get additionalOptions() {
    return this.getStringMapAttribute('additional_options');
  }
  public set additionalOptions(value: { [key: string]: string }) {
    this._additionalOptions = value;
  }
  public resetAdditionalOptions() {
    this._additionalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalOptionsInput() {
    return this._additionalOptions;
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

  // replica_set - computed: false, optional: true, required: false
  private _replicaSet?: string; 
  public get replicaSet() {
    return this.getStringAttribute('replica_set');
  }
  public set replicaSet(value: string) {
    this._replicaSet = value;
  }
  public resetReplicaSet() {
    this._replicaSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetInput() {
    return this._replicaSet;
  }

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
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

  // host_addresses - computed: false, optional: false, required: true
  private _hostAddresses = new GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList(this, "host_addresses", false);
  public get hostAddresses() {
    return this._hostAddresses;
  }
  public putHostAddresses(value: GoogleDatastreamConnectionProfileMongodbProfileHostAddresses[] | cdktf.IResolvable) {
    this._hostAddresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAddressesInput() {
    return this._hostAddresses.internalValue;
  }

  // srv_connection_format - computed: false, optional: true, required: false
  private _srvConnectionFormat = new GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference(this, "srv_connection_format");
  public get srvConnectionFormat() {
    return this._srvConnectionFormat;
  }
  public putSrvConnectionFormat(value: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat) {
    this._srvConnectionFormat.internalValue = value;
  }
  public resetSrvConnectionFormat() {
    this._srvConnectionFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvConnectionFormatInput() {
    return this._srvConnectionFormat.internalValue;
  }

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: GoogleDatastreamConnectionProfileMongodbProfileSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }

  // standard_connection_format - computed: false, optional: true, required: false
  private _standardConnectionFormat = new GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference(this, "standard_connection_format");
  public get standardConnectionFormat() {
    return this._standardConnectionFormat;
  }
  public putStandardConnectionFormat(value: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat) {
    this._standardConnectionFormat.internalValue = value;
  }
  public resetStandardConnectionFormat() {
    this._standardConnectionFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardConnectionFormatInput() {
    return this._standardConnectionFormat.internalValue;
  }
}
export interface GoogleDatastreamConnectionProfileMysqlProfileSslConfig {
  /**
  * PEM-encoded certificate of the CA that signed the source database
  * server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * PEM-encoded certificate that will be used by the replica to
  * authenticate against the source database server. If this field
  * is used then the 'clientKey' and the 'caCertificate' fields are
  * mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded private key associated with the Client Certificate.
  * If this field is used then the 'client_certificate' and the
  * 'ca_certificate' fields are mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}
  */
  readonly clientKey?: string;
}

export function googleDatastreamConnectionProfileMysqlProfileSslConfigToTerraform(struct?: GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference | GoogleDatastreamConnectionProfileMysqlProfileSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}


export function googleDatastreamConnectionProfileMysqlProfileSslConfigToHclTerraform(struct?: GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference | GoogleDatastreamConnectionProfileMysqlProfileSslConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileMysqlProfileSslConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileMysqlProfileSslConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
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

  // ca_certificate_set - computed: true, optional: false, required: false
  public get caCertificateSet() {
    return this.getBooleanAttribute('ca_certificate_set');
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

  // client_certificate_set - computed: true, optional: false, required: false
  public get clientCertificateSet() {
    return this.getBooleanAttribute('client_certificate_set');
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

  // client_key_set - computed: true, optional: false, required: false
  public get clientKeySet() {
    return this.getBooleanAttribute('client_key_set');
  }
}
export interface GoogleDatastreamConnectionProfileMysqlProfile {
  /**
  * Hostname for the MySQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the MySQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the MySQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}
  */
  readonly port?: number;
  /**
  * A reference to a Secret Manager resource name storing the user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * Username for the MySQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}
  */
  readonly username: string;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}
  */
  readonly sslConfig?: GoogleDatastreamConnectionProfileMysqlProfileSslConfig;
}

export function googleDatastreamConnectionProfileMysqlProfileToTerraform(struct?: GoogleDatastreamConnectionProfileMysqlProfileOutputReference | GoogleDatastreamConnectionProfileMysqlProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    secret_manager_stored_password: cdktf.stringToTerraform(struct!.secretManagerStoredPassword),
    username: cdktf.stringToTerraform(struct!.username),
    ssl_config: googleDatastreamConnectionProfileMysqlProfileSslConfigToTerraform(struct!.sslConfig),
  }
}


export function googleDatastreamConnectionProfileMysqlProfileToHclTerraform(struct?: GoogleDatastreamConnectionProfileMysqlProfileOutputReference | GoogleDatastreamConnectionProfileMysqlProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_manager_stored_password: {
      value: cdktf.stringToHclTerraform(struct!.secretManagerStoredPassword),
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
    ssl_config: {
      value: googleDatastreamConnectionProfileMysqlProfileSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamConnectionProfileMysqlProfileSslConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfileMysqlProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileMysqlProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileMysqlProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secretManagerStoredPassword = undefined;
      this._username = undefined;
      this._sslConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._username = value.username;
      this._sslConfig.internalValue = value.sslConfig;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
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

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: GoogleDatastreamConnectionProfileMysqlProfileSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }
}
export interface GoogleDatastreamConnectionProfileOracleProfile {
  /**
  * Connection string attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#connection_attributes GoogleDatastreamConnectionProfile#connection_attributes}
  */
  readonly connectionAttributes?: { [key: string]: string };
  /**
  * Database for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#database_service GoogleDatastreamConnectionProfile#database_service}
  */
  readonly databaseService: string;
  /**
  * Hostname for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}
  */
  readonly port?: number;
  /**
  * A reference to a Secret Manager resource name storing the user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * Username for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}
  */
  readonly username: string;
}

export function googleDatastreamConnectionProfileOracleProfileToTerraform(struct?: GoogleDatastreamConnectionProfileOracleProfileOutputReference | GoogleDatastreamConnectionProfileOracleProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.connectionAttributes),
    database_service: cdktf.stringToTerraform(struct!.databaseService),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    secret_manager_stored_password: cdktf.stringToTerraform(struct!.secretManagerStoredPassword),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleDatastreamConnectionProfileOracleProfileToHclTerraform(struct?: GoogleDatastreamConnectionProfileOracleProfileOutputReference | GoogleDatastreamConnectionProfileOracleProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.connectionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    database_service: {
      value: cdktf.stringToHclTerraform(struct!.databaseService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_manager_stored_password: {
      value: cdktf.stringToHclTerraform(struct!.secretManagerStoredPassword),
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

export class GoogleDatastreamConnectionProfileOracleProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileOracleProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionAttributes = this._connectionAttributes;
    }
    if (this._databaseService !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseService = this._databaseService;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileOracleProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionAttributes = undefined;
      this._databaseService = undefined;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secretManagerStoredPassword = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionAttributes = value.connectionAttributes;
      this._databaseService = value.databaseService;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._username = value.username;
    }
  }

  // connection_attributes - computed: false, optional: true, required: false
  private _connectionAttributes?: { [key: string]: string }; 
  public get connectionAttributes() {
    return this.getStringMapAttribute('connection_attributes');
  }
  public set connectionAttributes(value: { [key: string]: string }) {
    this._connectionAttributes = value;
  }
  public resetConnectionAttributes() {
    this._connectionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionAttributesInput() {
    return this._connectionAttributes;
  }

  // database_service - computed: false, optional: false, required: true
  private _databaseService?: string; 
  public get databaseService() {
    return this.getStringAttribute('database_service');
  }
  public set databaseService(value: string) {
    this._databaseService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseServiceInput() {
    return this._databaseService;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
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
export interface GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification {
  /**
  * PEM-encoded server root CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * PEM-encoded certificate used by the source database to authenticate the
  * client identity (i.e., the Datastream's identity). This certificate is
  * signed by either a root certificate trusted by the server or one or more
  * intermediate certificates (which is stored with the leaf certificate) to
  * link to this certificate to the trusted root certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}
  */
  readonly clientCertificate: string;
  /**
  * PEM-encoded private key associated with the client certificate.
  * This value will be used during the SSL/TLS handshake, allowing
  * the PostgreSQL server to authenticate the client's identity,
  * i.e. identity of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}
  */
  readonly clientKey: string;
}

export function googleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationToTerraform(struct?: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference | GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}


export function googleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationToHclTerraform(struct?: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference | GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: false, required: true
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: false, required: true
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }
}
export interface GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification {
  /**
  * PEM-encoded server root CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}
  */
  readonly caCertificate: string;
}

export function googleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationToTerraform(struct?: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference | GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function googleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationToHclTerraform(struct?: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference | GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig {
  /**
  * server_and_client_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#server_and_client_verification GoogleDatastreamConnectionProfile#server_and_client_verification}
  */
  readonly serverAndClientVerification?: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification;
  /**
  * server_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#server_verification GoogleDatastreamConnectionProfile#server_verification}
  */
  readonly serverVerification?: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification;
}

export function googleDatastreamConnectionProfilePostgresqlProfileSslConfigToTerraform(struct?: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference | GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_and_client_verification: googleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationToTerraform(struct!.serverAndClientVerification),
    server_verification: googleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationToTerraform(struct!.serverVerification),
  }
}


export function googleDatastreamConnectionProfilePostgresqlProfileSslConfigToHclTerraform(struct?: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference | GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_and_client_verification: {
      value: googleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationToHclTerraform(struct!.serverAndClientVerification),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationList",
    },
    server_verification: {
      value: googleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationToHclTerraform(struct!.serverVerification),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverAndClientVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAndClientVerification = this._serverAndClientVerification?.internalValue;
    }
    if (this._serverVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverVerification = this._serverVerification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverAndClientVerification.internalValue = undefined;
      this._serverVerification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverAndClientVerification.internalValue = value.serverAndClientVerification;
      this._serverVerification.internalValue = value.serverVerification;
    }
  }

  // server_and_client_verification - computed: false, optional: true, required: false
  private _serverAndClientVerification = new GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference(this, "server_and_client_verification");
  public get serverAndClientVerification() {
    return this._serverAndClientVerification;
  }
  public putServerAndClientVerification(value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification) {
    this._serverAndClientVerification.internalValue = value;
  }
  public resetServerAndClientVerification() {
    this._serverAndClientVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAndClientVerificationInput() {
    return this._serverAndClientVerification.internalValue;
  }

  // server_verification - computed: false, optional: true, required: false
  private _serverVerification = new GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference(this, "server_verification");
  public get serverVerification() {
    return this._serverVerification;
  }
  public putServerVerification(value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification) {
    this._serverVerification.internalValue = value;
  }
  public resetServerVerification() {
    this._serverVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVerificationInput() {
    return this._serverVerification.internalValue;
  }
}
export interface GoogleDatastreamConnectionProfilePostgresqlProfile {
  /**
  * Database for the PostgreSQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}
  */
  readonly database: string;
  /**
  * Hostname for the PostgreSQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the PostgreSQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the PostgreSQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}
  */
  readonly port?: number;
  /**
  * A reference to a Secret Manager resource name storing the user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * Username for the PostgreSQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}
  */
  readonly username: string;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}
  */
  readonly sslConfig?: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig;
}

export function googleDatastreamConnectionProfilePostgresqlProfileToTerraform(struct?: GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference | GoogleDatastreamConnectionProfilePostgresqlProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    secret_manager_stored_password: cdktf.stringToTerraform(struct!.secretManagerStoredPassword),
    username: cdktf.stringToTerraform(struct!.username),
    ssl_config: googleDatastreamConnectionProfilePostgresqlProfileSslConfigToTerraform(struct!.sslConfig),
  }
}


export function googleDatastreamConnectionProfilePostgresqlProfileToHclTerraform(struct?: GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference | GoogleDatastreamConnectionProfilePostgresqlProfile): any {
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
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_manager_stored_password: {
      value: cdktf.stringToHclTerraform(struct!.secretManagerStoredPassword),
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
    ssl_config: {
      value: googleDatastreamConnectionProfilePostgresqlProfileSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfilePostgresqlProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfilePostgresqlProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secretManagerStoredPassword = undefined;
      this._username = undefined;
      this._sslConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._username = value.username;
      this._sslConfig.internalValue = value.sslConfig;
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

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
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

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }
}
export interface GoogleDatastreamConnectionProfilePrivateConnectivity {
  /**
  * A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#private_connection GoogleDatastreamConnectionProfile#private_connection}
  */
  readonly privateConnection: string;
}

export function googleDatastreamConnectionProfilePrivateConnectivityToTerraform(struct?: GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference | GoogleDatastreamConnectionProfilePrivateConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_connection: cdktf.stringToTerraform(struct!.privateConnection),
  }
}


export function googleDatastreamConnectionProfilePrivateConnectivityToHclTerraform(struct?: GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference | GoogleDatastreamConnectionProfilePrivateConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_connection: {
      value: cdktf.stringToHclTerraform(struct!.privateConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfilePrivateConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnection = this._privateConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfilePrivateConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateConnection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateConnection = value.privateConnection;
    }
  }

  // private_connection - computed: false, optional: false, required: true
  private _privateConnection?: string; 
  public get privateConnection() {
    return this.getStringAttribute('private_connection');
  }
  public set privateConnection(value: string) {
    this._privateConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionInput() {
    return this._privateConnection;
  }
}
export interface GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials {
  /**
  * Client ID to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#client_id GoogleDatastreamConnectionProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#client_secret GoogleDatastreamConnectionProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A reference to a Secret Manager resource name storing the client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_client_secret GoogleDatastreamConnectionProfile#secret_manager_stored_client_secret}
  */
  readonly secretManagerStoredClientSecret?: string;
}

export function googleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsToTerraform(struct?: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference | GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    secret_manager_stored_client_secret: cdktf.stringToTerraform(struct!.secretManagerStoredClientSecret),
  }
}


export function googleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsToHclTerraform(struct?: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference | GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_manager_stored_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.secretManagerStoredClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._secretManagerStoredClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredClientSecret = this._secretManagerStoredClientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._secretManagerStoredClientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._secretManagerStoredClientSecret = value.secretManagerStoredClientSecret;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // secret_manager_stored_client_secret - computed: false, optional: true, required: false
  private _secretManagerStoredClientSecret?: string; 
  public get secretManagerStoredClientSecret() {
    return this.getStringAttribute('secret_manager_stored_client_secret');
  }
  public set secretManagerStoredClientSecret(value: string) {
    this._secretManagerStoredClientSecret = value;
  }
  public resetSecretManagerStoredClientSecret() {
    this._secretManagerStoredClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredClientSecretInput() {
    return this._secretManagerStoredClientSecret;
  }
}
export interface GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials {
  /**
  * Password of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * A reference to a Secret Manager resource name storing the user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * A reference to a Secret Manager resource name storing the user's security token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_security_token GoogleDatastreamConnectionProfile#secret_manager_stored_security_token}
  */
  readonly secretManagerStoredSecurityToken?: string;
  /**
  * Security token of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#security_token GoogleDatastreamConnectionProfile#security_token}
  */
  readonly securityToken?: string;
  /**
  * Username to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}
  */
  readonly username?: string;
}

export function googleDatastreamConnectionProfileSalesforceProfileUserCredentialsToTerraform(struct?: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference | GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    secret_manager_stored_password: cdktf.stringToTerraform(struct!.secretManagerStoredPassword),
    secret_manager_stored_security_token: cdktf.stringToTerraform(struct!.secretManagerStoredSecurityToken),
    security_token: cdktf.stringToTerraform(struct!.securityToken),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleDatastreamConnectionProfileSalesforceProfileUserCredentialsToHclTerraform(struct?: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference | GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials): any {
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
    secret_manager_stored_password: {
      value: cdktf.stringToHclTerraform(struct!.secretManagerStoredPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_manager_stored_security_token: {
      value: cdktf.stringToHclTerraform(struct!.secretManagerStoredSecurityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_token: {
      value: cdktf.stringToHclTerraform(struct!.securityToken),
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

export class GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._secretManagerStoredSecurityToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredSecurityToken = this._secretManagerStoredSecurityToken;
    }
    if (this._securityToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityToken = this._securityToken;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._secretManagerStoredPassword = undefined;
      this._secretManagerStoredSecurityToken = undefined;
      this._securityToken = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._secretManagerStoredSecurityToken = value.secretManagerStoredSecurityToken;
      this._securityToken = value.securityToken;
      this._username = value.username;
    }
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

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
  }

  // secret_manager_stored_security_token - computed: false, optional: true, required: false
  private _secretManagerStoredSecurityToken?: string; 
  public get secretManagerStoredSecurityToken() {
    return this.getStringAttribute('secret_manager_stored_security_token');
  }
  public set secretManagerStoredSecurityToken(value: string) {
    this._secretManagerStoredSecurityToken = value;
  }
  public resetSecretManagerStoredSecurityToken() {
    this._secretManagerStoredSecurityToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredSecurityTokenInput() {
    return this._secretManagerStoredSecurityToken;
  }

  // security_token - computed: false, optional: true, required: false
  private _securityToken?: string; 
  public get securityToken() {
    return this.getStringAttribute('security_token');
  }
  public set securityToken(value: string) {
    this._securityToken = value;
  }
  public resetSecurityToken() {
    this._securityToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTokenInput() {
    return this._securityToken;
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
}
export interface GoogleDatastreamConnectionProfileSalesforceProfile {
  /**
  * Domain for the Salesforce Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#domain GoogleDatastreamConnectionProfile#domain}
  */
  readonly domain: string;
  /**
  * oauth2_client_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#oauth2_client_credentials GoogleDatastreamConnectionProfile#oauth2_client_credentials}
  */
  readonly oauth2ClientCredentials?: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials;
  /**
  * user_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#user_credentials GoogleDatastreamConnectionProfile#user_credentials}
  */
  readonly userCredentials?: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials;
}

export function googleDatastreamConnectionProfileSalesforceProfileToTerraform(struct?: GoogleDatastreamConnectionProfileSalesforceProfileOutputReference | GoogleDatastreamConnectionProfileSalesforceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    oauth2_client_credentials: googleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsToTerraform(struct!.oauth2ClientCredentials),
    user_credentials: googleDatastreamConnectionProfileSalesforceProfileUserCredentialsToTerraform(struct!.userCredentials),
  }
}


export function googleDatastreamConnectionProfileSalesforceProfileToHclTerraform(struct?: GoogleDatastreamConnectionProfileSalesforceProfileOutputReference | GoogleDatastreamConnectionProfileSalesforceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_client_credentials: {
      value: googleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsToHclTerraform(struct!.oauth2ClientCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsList",
    },
    user_credentials: {
      value: googleDatastreamConnectionProfileSalesforceProfileUserCredentialsToHclTerraform(struct!.userCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfileSalesforceProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileSalesforceProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._oauth2ClientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientCredentials = this._oauth2ClientCredentials?.internalValue;
    }
    if (this._userCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCredentials = this._userCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileSalesforceProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._oauth2ClientCredentials.internalValue = undefined;
      this._userCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._oauth2ClientCredentials.internalValue = value.oauth2ClientCredentials;
      this._userCredentials.internalValue = value.userCredentials;
    }
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

  // oauth2_client_credentials - computed: false, optional: true, required: false
  private _oauth2ClientCredentials = new GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference(this, "oauth2_client_credentials");
  public get oauth2ClientCredentials() {
    return this._oauth2ClientCredentials;
  }
  public putOauth2ClientCredentials(value: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials) {
    this._oauth2ClientCredentials.internalValue = value;
  }
  public resetOauth2ClientCredentials() {
    this._oauth2ClientCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientCredentialsInput() {
    return this._oauth2ClientCredentials.internalValue;
  }

  // user_credentials - computed: false, optional: true, required: false
  private _userCredentials = new GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference(this, "user_credentials");
  public get userCredentials() {
    return this._userCredentials;
  }
  public putUserCredentials(value: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials) {
    this._userCredentials.internalValue = value;
  }
  public resetUserCredentials() {
    this._userCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCredentialsInput() {
    return this._userCredentials.internalValue;
  }
}
export interface GoogleDatastreamConnectionProfileSpannerProfile {
  /**
  * The full project and resource path for Spanner database. Format:
  * projects/{project}/instances/{instance}/databases/{database}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}
  */
  readonly database: string;
  /**
  * The regional Spanner endpoint. Format:
  * https://spanner.{region}.rep.googleapis.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#host GoogleDatastreamConnectionProfile#host}
  */
  readonly host?: string;
}

export function googleDatastreamConnectionProfileSpannerProfileToTerraform(struct?: GoogleDatastreamConnectionProfileSpannerProfileOutputReference | GoogleDatastreamConnectionProfileSpannerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function googleDatastreamConnectionProfileSpannerProfileToHclTerraform(struct?: GoogleDatastreamConnectionProfileSpannerProfileOutputReference | GoogleDatastreamConnectionProfileSpannerProfile): any {
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
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamConnectionProfileSpannerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileSpannerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileSpannerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._host = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._host = value.host;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}
export interface GoogleDatastreamConnectionProfileSqlServerProfile {
  /**
  * Database for the SQL Server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}
  */
  readonly database: string;
  /**
  * Hostname for the SQL Server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the SQL Server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the SQL Server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}
  */
  readonly port?: number;
  /**
  * A reference to a Secret Manager resource name storing the user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * Username for the SQL Server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}
  */
  readonly username: string;
}

export function googleDatastreamConnectionProfileSqlServerProfileToTerraform(struct?: GoogleDatastreamConnectionProfileSqlServerProfileOutputReference | GoogleDatastreamConnectionProfileSqlServerProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    secret_manager_stored_password: cdktf.stringToTerraform(struct!.secretManagerStoredPassword),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleDatastreamConnectionProfileSqlServerProfileToHclTerraform(struct?: GoogleDatastreamConnectionProfileSqlServerProfileOutputReference | GoogleDatastreamConnectionProfileSqlServerProfile): any {
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
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_manager_stored_password: {
      value: cdktf.stringToHclTerraform(struct!.secretManagerStoredPassword),
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

export class GoogleDatastreamConnectionProfileSqlServerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileSqlServerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamConnectionProfileSqlServerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secretManagerStoredPassword = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._username = value.username;
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

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
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
export interface GoogleDatastreamConnectionProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}
  */
  readonly update?: string;
}

export function googleDatastreamConnectionProfileTimeoutsToTerraform(struct?: GoogleDatastreamConnectionProfileTimeouts | cdktf.IResolvable): any {
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


export function googleDatastreamConnectionProfileTimeoutsToHclTerraform(struct?: GoogleDatastreamConnectionProfileTimeouts | cdktf.IResolvable): any {
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

export class GoogleDatastreamConnectionProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDatastreamConnectionProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDatastreamConnectionProfileTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile google_datastream_connection_profile}
*/
export class GoogleDatastreamConnectionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_datastream_connection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDatastreamConnectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDatastreamConnectionProfile to import
  * @param importFromId The id of the existing GoogleDatastreamConnectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDatastreamConnectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_datastream_connection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.3.0/docs/resources/google_datastream_connection_profile google_datastream_connection_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDatastreamConnectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDatastreamConnectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_datastream_connection_profile',
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
    this._connectionProfileId = config.connectionProfileId;
    this._createWithoutValidation = config.createWithoutValidation;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._bigqueryProfile.internalValue = config.bigqueryProfile;
    this._forwardSshConnectivity.internalValue = config.forwardSshConnectivity;
    this._gcsProfile.internalValue = config.gcsProfile;
    this._mongodbProfile.internalValue = config.mongodbProfile;
    this._mysqlProfile.internalValue = config.mysqlProfile;
    this._oracleProfile.internalValue = config.oracleProfile;
    this._postgresqlProfile.internalValue = config.postgresqlProfile;
    this._privateConnectivity.internalValue = config.privateConnectivity;
    this._salesforceProfile.internalValue = config.salesforceProfile;
    this._spannerProfile.internalValue = config.spannerProfile;
    this._sqlServerProfile.internalValue = config.sqlServerProfile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_profile_id - computed: false, optional: false, required: true
  private _connectionProfileId?: string; 
  public get connectionProfileId() {
    return this.getStringAttribute('connection_profile_id');
  }
  public set connectionProfileId(value: string) {
    this._connectionProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionProfileIdInput() {
    return this._connectionProfileId;
  }

  // create_without_validation - computed: false, optional: true, required: false
  private _createWithoutValidation?: boolean | cdktf.IResolvable; 
  public get createWithoutValidation() {
    return this.getBooleanAttribute('create_without_validation');
  }
  public set createWithoutValidation(value: boolean | cdktf.IResolvable) {
    this._createWithoutValidation = value;
  }
  public resetCreateWithoutValidation() {
    this._createWithoutValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createWithoutValidationInput() {
    return this._createWithoutValidation;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // bigquery_profile - computed: false, optional: true, required: false
  private _bigqueryProfile = new GoogleDatastreamConnectionProfileBigqueryProfileOutputReference(this, "bigquery_profile");
  public get bigqueryProfile() {
    return this._bigqueryProfile;
  }
  public putBigqueryProfile(value: GoogleDatastreamConnectionProfileBigqueryProfile) {
    this._bigqueryProfile.internalValue = value;
  }
  public resetBigqueryProfile() {
    this._bigqueryProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryProfileInput() {
    return this._bigqueryProfile.internalValue;
  }

  // forward_ssh_connectivity - computed: false, optional: true, required: false
  private _forwardSshConnectivity = new GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference(this, "forward_ssh_connectivity");
  public get forwardSshConnectivity() {
    return this._forwardSshConnectivity;
  }
  public putForwardSshConnectivity(value: GoogleDatastreamConnectionProfileForwardSshConnectivity) {
    this._forwardSshConnectivity.internalValue = value;
  }
  public resetForwardSshConnectivity() {
    this._forwardSshConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSshConnectivityInput() {
    return this._forwardSshConnectivity.internalValue;
  }

  // gcs_profile - computed: false, optional: true, required: false
  private _gcsProfile = new GoogleDatastreamConnectionProfileGcsProfileOutputReference(this, "gcs_profile");
  public get gcsProfile() {
    return this._gcsProfile;
  }
  public putGcsProfile(value: GoogleDatastreamConnectionProfileGcsProfile) {
    this._gcsProfile.internalValue = value;
  }
  public resetGcsProfile() {
    this._gcsProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsProfileInput() {
    return this._gcsProfile.internalValue;
  }

  // mongodb_profile - computed: false, optional: true, required: false
  private _mongodbProfile = new GoogleDatastreamConnectionProfileMongodbProfileOutputReference(this, "mongodb_profile");
  public get mongodbProfile() {
    return this._mongodbProfile;
  }
  public putMongodbProfile(value: GoogleDatastreamConnectionProfileMongodbProfile) {
    this._mongodbProfile.internalValue = value;
  }
  public resetMongodbProfile() {
    this._mongodbProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbProfileInput() {
    return this._mongodbProfile.internalValue;
  }

  // mysql_profile - computed: false, optional: true, required: false
  private _mysqlProfile = new GoogleDatastreamConnectionProfileMysqlProfileOutputReference(this, "mysql_profile");
  public get mysqlProfile() {
    return this._mysqlProfile;
  }
  public putMysqlProfile(value: GoogleDatastreamConnectionProfileMysqlProfile) {
    this._mysqlProfile.internalValue = value;
  }
  public resetMysqlProfile() {
    this._mysqlProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlProfileInput() {
    return this._mysqlProfile.internalValue;
  }

  // oracle_profile - computed: false, optional: true, required: false
  private _oracleProfile = new GoogleDatastreamConnectionProfileOracleProfileOutputReference(this, "oracle_profile");
  public get oracleProfile() {
    return this._oracleProfile;
  }
  public putOracleProfile(value: GoogleDatastreamConnectionProfileOracleProfile) {
    this._oracleProfile.internalValue = value;
  }
  public resetOracleProfile() {
    this._oracleProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleProfileInput() {
    return this._oracleProfile.internalValue;
  }

  // postgresql_profile - computed: false, optional: true, required: false
  private _postgresqlProfile = new GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference(this, "postgresql_profile");
  public get postgresqlProfile() {
    return this._postgresqlProfile;
  }
  public putPostgresqlProfile(value: GoogleDatastreamConnectionProfilePostgresqlProfile) {
    this._postgresqlProfile.internalValue = value;
  }
  public resetPostgresqlProfile() {
    this._postgresqlProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlProfileInput() {
    return this._postgresqlProfile.internalValue;
  }

  // private_connectivity - computed: false, optional: true, required: false
  private _privateConnectivity = new GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference(this, "private_connectivity");
  public get privateConnectivity() {
    return this._privateConnectivity;
  }
  public putPrivateConnectivity(value: GoogleDatastreamConnectionProfilePrivateConnectivity) {
    this._privateConnectivity.internalValue = value;
  }
  public resetPrivateConnectivity() {
    this._privateConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectivityInput() {
    return this._privateConnectivity.internalValue;
  }

  // salesforce_profile - computed: false, optional: true, required: false
  private _salesforceProfile = new GoogleDatastreamConnectionProfileSalesforceProfileOutputReference(this, "salesforce_profile");
  public get salesforceProfile() {
    return this._salesforceProfile;
  }
  public putSalesforceProfile(value: GoogleDatastreamConnectionProfileSalesforceProfile) {
    this._salesforceProfile.internalValue = value;
  }
  public resetSalesforceProfile() {
    this._salesforceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceProfileInput() {
    return this._salesforceProfile.internalValue;
  }

  // spanner_profile - computed: false, optional: true, required: false
  private _spannerProfile = new GoogleDatastreamConnectionProfileSpannerProfileOutputReference(this, "spanner_profile");
  public get spannerProfile() {
    return this._spannerProfile;
  }
  public putSpannerProfile(value: GoogleDatastreamConnectionProfileSpannerProfile) {
    this._spannerProfile.internalValue = value;
  }
  public resetSpannerProfile() {
    this._spannerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerProfileInput() {
    return this._spannerProfile.internalValue;
  }

  // sql_server_profile - computed: false, optional: true, required: false
  private _sqlServerProfile = new GoogleDatastreamConnectionProfileSqlServerProfileOutputReference(this, "sql_server_profile");
  public get sqlServerProfile() {
    return this._sqlServerProfile;
  }
  public putSqlServerProfile(value: GoogleDatastreamConnectionProfileSqlServerProfile) {
    this._sqlServerProfile.internalValue = value;
  }
  public resetSqlServerProfile() {
    this._sqlServerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerProfileInput() {
    return this._sqlServerProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDatastreamConnectionProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDatastreamConnectionProfileTimeouts) {
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
      connection_profile_id: cdktf.stringToTerraform(this._connectionProfileId),
      create_without_validation: cdktf.booleanToTerraform(this._createWithoutValidation),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      bigquery_profile: googleDatastreamConnectionProfileBigqueryProfileToTerraform(this._bigqueryProfile.internalValue),
      forward_ssh_connectivity: googleDatastreamConnectionProfileForwardSshConnectivityToTerraform(this._forwardSshConnectivity.internalValue),
      gcs_profile: googleDatastreamConnectionProfileGcsProfileToTerraform(this._gcsProfile.internalValue),
      mongodb_profile: googleDatastreamConnectionProfileMongodbProfileToTerraform(this._mongodbProfile.internalValue),
      mysql_profile: googleDatastreamConnectionProfileMysqlProfileToTerraform(this._mysqlProfile.internalValue),
      oracle_profile: googleDatastreamConnectionProfileOracleProfileToTerraform(this._oracleProfile.internalValue),
      postgresql_profile: googleDatastreamConnectionProfilePostgresqlProfileToTerraform(this._postgresqlProfile.internalValue),
      private_connectivity: googleDatastreamConnectionProfilePrivateConnectivityToTerraform(this._privateConnectivity.internalValue),
      salesforce_profile: googleDatastreamConnectionProfileSalesforceProfileToTerraform(this._salesforceProfile.internalValue),
      spanner_profile: googleDatastreamConnectionProfileSpannerProfileToTerraform(this._spannerProfile.internalValue),
      sql_server_profile: googleDatastreamConnectionProfileSqlServerProfileToTerraform(this._sqlServerProfile.internalValue),
      timeouts: googleDatastreamConnectionProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_profile_id: {
        value: cdktf.stringToHclTerraform(this._connectionProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_without_validation: {
        value: cdktf.booleanToHclTerraform(this._createWithoutValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      bigquery_profile: {
        value: googleDatastreamConnectionProfileBigqueryProfileToHclTerraform(this._bigqueryProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfileBigqueryProfileList",
      },
      forward_ssh_connectivity: {
        value: googleDatastreamConnectionProfileForwardSshConnectivityToHclTerraform(this._forwardSshConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfileForwardSshConnectivityList",
      },
      gcs_profile: {
        value: googleDatastreamConnectionProfileGcsProfileToHclTerraform(this._gcsProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfileGcsProfileList",
      },
      mongodb_profile: {
        value: googleDatastreamConnectionProfileMongodbProfileToHclTerraform(this._mongodbProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfileMongodbProfileList",
      },
      mysql_profile: {
        value: googleDatastreamConnectionProfileMysqlProfileToHclTerraform(this._mysqlProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfileMysqlProfileList",
      },
      oracle_profile: {
        value: googleDatastreamConnectionProfileOracleProfileToHclTerraform(this._oracleProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfileOracleProfileList",
      },
      postgresql_profile: {
        value: googleDatastreamConnectionProfilePostgresqlProfileToHclTerraform(this._postgresqlProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfilePostgresqlProfileList",
      },
      private_connectivity: {
        value: googleDatastreamConnectionProfilePrivateConnectivityToHclTerraform(this._privateConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfilePrivateConnectivityList",
      },
      salesforce_profile: {
        value: googleDatastreamConnectionProfileSalesforceProfileToHclTerraform(this._salesforceProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfileSalesforceProfileList",
      },
      spanner_profile: {
        value: googleDatastreamConnectionProfileSpannerProfileToHclTerraform(this._spannerProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfileSpannerProfileList",
      },
      sql_server_profile: {
        value: googleDatastreamConnectionProfileSqlServerProfileToHclTerraform(this._sqlServerProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamConnectionProfileSqlServerProfileList",
      },
      timeouts: {
        value: googleDatastreamConnectionProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDatastreamConnectionProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
